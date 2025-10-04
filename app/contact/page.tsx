'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [patientName, setPatientName] = useState('');
  const [patientContact, setPatientContact] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await supabase.from('appointments').insert([
      {
        patient_name: patientName,
        patient_contact: patientContact,
        scheduled_time: scheduledTime,
        status: 'Confirmed', // Default status when booking
      },
    ]);

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('Appointment booked successfully! We will contact you shortly.');
      // Clear the form
      setPatientName('');
      setPatientContact('');
      setScheduledTime('');
    }

    setLoading(false);
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <header className="mb-6">
          <h1 className="text-balance text-3xl font-semibold md:text-4xl">Book an Appointment</h1>
          <p className="mt-3 max-w-2xl text-foreground/80">
            Schedule your dental appointment—our team will contact you to confirm.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="rounded-lg border border-border bg-card p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="patientName" className="block text-gray-700 text-sm font-bold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="patientName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="patientContact" className="block text-gray-700 text-sm font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="patientContact"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={patientContact}
                    onChange={(e) => setPatientContact(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="scheduledTime" className="block text-gray-700 text-sm font-bold mb-2">
                    Preferred Date and Time
                  </label>
                  <input
                    type="datetime-local"
                    id="scheduledTime"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={scheduledTime}
                    onChange={(e) => setScheduledTime(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                  disabled={loading}
                >
                  {loading ? 'Booking...' : 'Request Appointment'}
                </button>
                {message && (
                  <p className={`mt-4 text-center text-sm font-medium ${message.includes('Error') ? 'text-red-500' : 'text-green-600'}`}>
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
          <aside className="space-y-3">
            <div className="rounded-md border border-border bg-card p-4">
              <h2 className="text-lg font-semibold">Clinic Details</h2>
              <p className="mt-2 text-sm text-foreground/80">123 Dental Street, City</p>
              <p className="text-sm text-foreground/80">(+1) 555-123-4567</p>
              <p className="text-sm text-foreground/80">hello@dentalclinic.com</p>
            </div>
            <div className="rounded-md border border-border bg-card p-4">
              <h2 className="text-lg font-semibold">Hours</h2>
              <p className="mt-2 text-sm text-foreground/80">Mon–Fri: 9:00–18:00</p>
              <p className="text-sm text-foreground/80">Sat: 10:00–14:00</p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}
