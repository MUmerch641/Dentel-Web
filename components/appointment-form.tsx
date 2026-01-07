"use client"

import React from "react"
import { Button } from "./button"
import { supabase } from '../lib/supabase';
import { uploadPaymentProof } from '../lib/storage';
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog"
import { X, Upload, Check, Phone } from "lucide-react"

export function AppointmentForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = React.useState<string>("")
  const [appointmentType, setAppointmentType] = React.useState<"" | "online" | "clinic">("")
  const [showPaymentModal, setShowPaymentModal] = React.useState(false)
  const [paymentProof, setPaymentProof] = React.useState<File | null>(null)
  const [appointmentData, setAppointmentData] = React.useState<any>(null)
  const [selectedService, setSelectedService] = React.useState("")
  const [customService, setCustomService] = React.useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get("name") || "").trim()
    const phone = String(formData.get("phone") || "").trim()
    const date = String(formData.get("date") || "").trim()
    const time = String(formData.get("time") || "").trim()
    const service = String(formData.get("service") || "").trim()

    let finalService = service
    if (service === "Others") {
      finalService = customService.trim()
      if (!finalService) {
        setStatus("error")
        setMessage("Please specify the service.")
        return
      }
    }

    // 🧩 Validate input
    if (!name || !phone) {
      setStatus("error")
      setMessage("Please fill in your name and phone.")
      return
    }

    if (!date) {
      setStatus("error")
      setMessage("Please select a preferred date.")
      return
    }

    if (!time) {
      setStatus("error")
      setMessage("Please select a preferred time (4 PM - 8 PM).")
      return
    }

    if (!appointmentType) {
      setStatus("error")
      setMessage("Please select appointment type (Online or In-Clinic).")
      return
    }

    // Store appointment data temporarily
    const tempAppointmentData = {
      patient_name: name,
      patient_contact: phone,
      scheduled_time: `${date}T${time}:00`,
      appointment_type: appointmentType,
      service_type: finalService || "General Consultation",
      status: appointmentType === "online" ? "Pending Payment" : "Confirmed",
    }

    setAppointmentData(tempAppointmentData)

    // If online appointment, show payment modal
    if (appointmentType === "online") {
      setShowPaymentModal(true)
      return
    }

    // If in-clinic appointment, book directly
    await bookAppointment(tempAppointmentData)
  }

  async function bookAppointment(data: any, paymentProofUrl?: string) {
    setStatus("loading")
    setMessage("Booking your appointment...")

    try {
      // Add payment proof URL if provided
      const appointmentRecord = {
        ...data,
        payment_proof_url: paymentProofUrl || null,
        created_at: new Date().toISOString(),
      }

      // 💾 Insert directly into Supabase (no API route needed for static export)
      const { data: insertedData, error: insertError } = await supabase
        .from('Appointments')
        .insert(appointmentRecord)
        .select()
      
      if (insertError) {
        console.error('Supabase insert error:', insertError)
        throw new Error(insertError.message || 'Failed to book appointment')
      }

      console.log('Appointment booked successfully:', insertedData)

      // 📧 Send email notification via Formspree
      const emailData = {
        patient_name: data.patient_name,
        patient_contact: data.patient_contact,
        scheduled_time: new Date(data.scheduled_time).toLocaleString(),
        appointment_type: data.appointment_type,
        service_type: data.service_type,
        message: `New ${data.appointment_type} appointment booked. ${data.appointment_type === 'online' ? 'Payment proof uploaded.' : 'In-clinic appointment.'}`,
      }

      const response = await fetch("https://formspree.io/f/xqaywrbp", {
        method: "POST",
        body: JSON.stringify(emailData),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        console.warn("⚠️ Appointment booked, but Formspree email failed to send.")
      }

      // ✅ Success
      setStatus("success")
      setMessage(
        data.appointment_type === "online" 
          ? "Online appointment booked! Payment proof uploaded. We'll verify and confirm within 24 hours."
          : "In-clinic appointment booked successfully! We'll contact you to confirm."
      )
      
      // Reset form
      const form = document.getElementById("appointment-form") as HTMLFormElement
      if (form) form.reset()
      setAppointmentType("")
      setSelectedService("")
      setCustomService("")
      setPaymentProof(null)
      setShowPaymentModal(false)

    } catch (err) {
      console.error("Error booking appointment:", err)
      setStatus("error")
      setMessage("Failed to book appointment. Please try again or call us directly.")
    }
  }

  async function uploadPaymentScreenshot() {
    if (!paymentProof || !appointmentData) return

    setStatus("loading")
    setMessage("Uploading payment proof...")

    try {
      // Upload to Supabase Storage using helper function
      const publicUrl = await uploadPaymentProof(paymentProof, `temp_${Date.now()}`);
      
      if (!publicUrl) {
        throw new Error('Failed to upload payment proof');
      }

      // Book appointment with payment proof URL
      await bookAppointment(appointmentData, publicUrl)

    } catch (err) {
      console.error("Error uploading payment proof:", err)
      setStatus("error")
      setMessage("Failed to upload payment proof. Please try again.")
    }
  }


  return (
    <>
      <form id="appointment-form" onSubmit={onSubmit} className="grid grid-cols-1 gap-3">
        <div className="grid gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            required
            className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring/50"
            placeholder="Jane Doe"
          />
        </div>
        
        <div className="grid gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            required
            className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring/50"
            placeholder="+92 300 1234567"
          />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="service" className="text-sm font-medium text-foreground">
            Service Type
          </label>
          <select
            id="service"
            name="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring/50"
          >
            <option value="">Select Service</option>
            <option value="General Consultation">General Consultation</option>
            <option value="Scaling & Polishing">Scaling & Polishing</option>
            <option value="Teeth Whitening">Teeth Whitening</option>
            <option value="Veneers">Veneers</option>
            <option value="Dental Implants">Dental Implants</option>
            <option value="Clear Aligners">Clear Aligners</option>
            <option value="Root Canal">Root Canal Treatment</option>
            <option value="Crowns & Bridges">Crowns & Bridges</option>
            <option value="Others">Others</option>
          </select>
          {selectedService === "Others" && (
            <div className="grid gap-1.5">
              <label htmlFor="custom-service" className="text-sm font-medium text-foreground">
                Specify Service *
              </label>
              <input
                id="custom-service"
                value={customService}
                onChange={(e) => setCustomService(e.target.value)}
                required
                className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring/50"
                placeholder="Enter your service"
              />
            </div>
          )}
        </div>

        {/* Appointment Type Selection */}
        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-foreground">
            Appointment Type *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div 
              onClick={() => setAppointmentType("online")}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                appointmentType === "online" 
                  ? "border-blue-600 bg-blue-50" 
                  : "border-gray-300 hover:border-blue-400"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  appointmentType === "online" ? "border-blue-600 bg-blue-600" : "border-gray-400"
                }`}>
                  {appointmentType === "online" && (
                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">💻 Online Consultation</h3>
                  <p className="text-xs text-gray-600">Video call appointment with advance payment</p>
                  <p className="text-xs text-green-600 font-semibold mt-1">✨ Get special discounts!</p>
                </div>
              </div>
            </div>
            
            <div 
              onClick={() => setAppointmentType("clinic")}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                appointmentType === "clinic" 
                  ? "border-blue-600 bg-blue-50" 
                  : "border-gray-300 hover:border-blue-400"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  appointmentType === "clinic" ? "border-blue-600 bg-blue-600" : "border-gray-400"
                }`}>
                  {appointmentType === "clinic" && (
                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">🏥 In-Clinic Visit</h3>
                  <p className="text-xs text-gray-600">Physical visit to our clinic</p>
                  <p className="text-xs text-blue-600 font-semibold mt-1">📍 Abu Dhabi Road, RYK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="grid gap-1.5">
            <label htmlFor="date" className="text-sm font-medium text-foreground">
              Preferred Date *
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              min={new Date().toISOString().split('T')[0]}
              className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring/50"
            />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="time" className="text-sm font-medium text-foreground">
              Preferred Time * <span className="text-xs text-blue-600">(4 PM - 8 PM)</span>
            </label>
            <select
              id="time"
              name="time"
              required
              className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring/50"
            >
              <option value="">Select time</option>
              <option value="16:00">4:00 PM</option>
              <option value="16:30">4:30 PM</option>
              <option value="17:00">5:00 PM</option>
              <option value="17:30">5:30 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="18:30">6:30 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="19:30">7:30 PM</option>
            </select>
          </div>
        </div>
        
        <div className="bg-white border-2 border-blue-300 rounded-lg p-3 mb-2 shadow-sm">
          <p className="text-xs text-blue-900 font-semibold">
            <strong>Clinic Hours:</strong> Evening 4:00 PM - 8:00 PM (Daily)
          </p>
          <p className="text-xs text-blue-700 mt-1">
            * We will confirm your appointment via phone call within 24 hours.
          </p>
          {appointmentType === "online" && (
            <p className="text-xs text-green-700 mt-1 font-semibold">
              💡 Online appointments get special discounts on treatments!
            </p>
          )}
        </div>
        
        <div className="pt-1">
          <Button type="submit" variant="primary" size="lg" aria-live="polite" disabled={!appointmentType}>
            {status === "loading" ? "Processing..." : `Book ${appointmentType === "online" ? "Online" : appointmentType === "clinic" ? "In-Clinic" : ""} Appointment`}
          </Button>
        </div>
        
        {message && (
          <p className={status === "error" ? "text-sm text-destructive" : "text-sm text-foreground/80"} role="status">
            {message}
          </p>
        )}
      </form>

      {/* Payment Modal */}
      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent className="max-w-md">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <DialogTitle className="text-xl font-bold text-blue-900">
                💳 Online Payment Required
              </DialogTitle>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">
                  🎉 Special Online Discount Available!
                </h3>
                <p className="text-sm text-yellow-700">
                  Pay online and get exclusive discounts on your treatment.
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-3">
                  📱 Payment Methods
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">JazzCash</h4>
                      <p className="text-sm text-gray-600">03155775320</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">EasyPaisa</h4>
                      <p className="text-sm text-gray-600">03155775320</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  📤 Upload Payment Screenshot
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  After payment, upload screenshot as proof.
                </p>
                
                <div className="space-y-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setPaymentProof(e.target.files?.[0] || null)}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  
                  {paymentProof && (
                    <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-green-700">{paymentProof.name}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowPaymentModal(false)}
                  variant="secondary"
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={uploadPaymentScreenshot}
                  disabled={!paymentProof || status === "loading"}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  {status === "loading" ? (
                    <>
                      <Upload className="h-4 w-4 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4 mr-2" />
                      Confirm Payment
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
