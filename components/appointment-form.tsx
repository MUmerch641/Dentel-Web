"use client"

import React from "react"
import { Button } from "./button"
import { supabase } from "@/lib/supabase"

export function AppointmentForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = React.useState<string>("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get("name") || "").trim()
    const phone = String(formData.get("phone") || "").trim()
    const date = String(formData.get("date") || "").trim()
    const time = String(formData.get("time") || "").trim()

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

    // Combine date and time
    const appointmentDateTime = `${date}T${time}:00`

    setStatus("loading")
    setMessage("Booking your appointment...")

    try {
      // 💾 Insert into Supabase
      const { error } = await supabase
        .from("Appointments")
        .insert([
          {
            patient_name: name,
            patient_contact: phone,
            scheduled_time: appointmentDateTime,
            status: "Confirmed",
          },
        ])
        .select()

      if (error) throw error

      // 📧 Send email notification via Formspree
      const emailData = {
        patient_name: name,
        patient_contact: phone,
        scheduled_time: new Date(appointmentDateTime).toLocaleString(),
        message:
          "A new appointment has been booked. Please check your admin dashboard for details and to start the call.",
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
      setMessage("Appointment booked successfully! We'll contact you to confirm.")
      form.reset()

    } catch (err) {
      console.error("Error booking appointment:", err)
      setStatus("error")
      setMessage("Failed to book appointment. Please try again or call us directly.")
    }
  }


  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3">
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
      </div>
      <div className="pt-1">
        <Button type="submit" variant="primary" size="lg" aria-live="polite">
          {status === "loading" ? "Booking appointment..." : "Book Appointment"}
        </Button>
      </div>
      {message && (
        <p className={status === "error" ? "text-sm text-destructive" : "text-sm text-foreground/80"} role="status">
          {message}
        </p>
      )}
    </form>
  )
}
