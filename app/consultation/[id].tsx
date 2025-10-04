"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { JitsiMeeting } from "@jitsi/react-sdk"

export default function ConsultationPage() {
  const { id } = useParams()  // appointment id from URL
  const [appointment, setAppointment] = useState<any>(null)
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser()
      setUser(user)

      // get appointment details
      const { data, error } = await supabase
        .from("appointments")
        .select("id, patient_id, dentist_id, room_name, scheduled_time, status")
        .eq("id", id)
        .single()

      if (error) {
        console.error(error)
      } else {
        // security: check if current user is allowed
        if (user && (user.id === data.patient_id || user.id === data.dentist_id)) {
          setAppointment(data)
        } else {
          alert("Access denied: You are not part of this consultation.")
        }
      }

      setLoading(false)
    }

    fetchData()
  }, [id])

  if (loading) return <p className="p-4">Loading...</p>
  if (!appointment) return <p className="p-4 text-red-500">No appointment found</p>

  return (
    <div className="h-screen w-full">
      <JitsiMeeting
        roomName={appointment.room_name as string}
        userInfo={{ 
          displayName: (user?.email as string) || "Guest",
          email: (user?.email as string) || "guest@example.com"
        }}
        configOverwrite={{
          startWithAudioMuted: true,
          startWithVideoMuted: false,
        }}
        getIFrameRef={(parentNode: HTMLDivElement) => {
          const iframe = parentNode.querySelector('iframe');
          if (iframe) {
            iframe.style.height = "100vh";
            iframe.style.width = "100%";
          }
        }}
      />
    </div>
  )
}
