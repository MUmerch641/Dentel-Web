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
          scheduled_time: date,
          status: "Confirmed",
        },
      ])
      .select()

    if (error) throw error

    // 📧 Send email notification via Formspree
    const emailData = {
      patient_name: name,
      patient_contact: phone,
      scheduled_time: new Date(date).toLocaleString(),
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
          placeholder="+1 555 000 1111"
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="date" className="text-sm font-medium text-foreground">
          Preferred Date & Time *
        </label>
        <input
          id="date"
          name="date"
          type="datetime-local"
          required
          className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring/50"
        />
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
