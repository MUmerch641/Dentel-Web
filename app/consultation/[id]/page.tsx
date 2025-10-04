// app/consultation/[id]/page.tsx
"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { JitsiMeeting } from "@jitsi/react-sdk"
import { SupabaseClient } from "@supabase/supabase-js"

// Define a type for our appointment data
type Appointment = {
  room_name: string | null;
};

// This function safely handles fetching and creating the room name
async function getOrCreateRoomName(supabase: SupabaseClient, appointmentId: string): Promise<string | null> {
  // 1. Fetch the appointment to see if a room name already exists
  let { data, error } = await supabase
    .from("Appointments") // Use correct table name with capital 'A'
    .select("room_name")
    .eq("id", appointmentId)
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 means "not found", which is ok
    console.error("Error fetching room name:", error);
    return null;
  }

  // 2. If a room name already exists, return it
  if (data && data.room_name) {
    return data.room_name;
  }

  // 3. If no room name exists, create a new unique one
  const newRoomName = `dental-consult-secure-${appointmentId}-${Date.now()}`;

  // 4. Save the new room name back to the database for this appointment
  const { error: updateError } = await supabase
    .from("Appointments")
    .update({ room_name: newRoomName })
    .eq("id", appointmentId);

  if (updateError) {
    console.error("Error saving new room name:", updateError);
    return null;
  }

  return newRoomName;
}


export default function ConsultationPage() {
  const params = useParams();
  const id = params.id as string;
  const [roomName, setRoomName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getOrCreateRoomName(supabase, id).then(name => {
      setRoomName(name);
      setLoading(false);
    });

  }, [id]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen"><p>Setting up your secure consultation room...</p></div>
  }

  if (!roomName) {
    return <div className="flex items-center justify-center h-screen"><p className="text-red-500">Could not initialize consultation. Please try again.</p></div>
  }

  return (
    <div className="h-screen w-full">
      <JitsiMeeting
        roomName={roomName}
        userInfo={{
          displayName: "Participant", // Keeps names generic for privacy
          email: "participant@example.com" // Add a placeholder or actual user email
        }}
        configOverwrite={{
          startWithAudioMuted: false,
          startWithVideoMuted: true, // Allow user to enable their video manually
          prejoinPageEnabled: true, // Let's user set up mic/camera before joining
        }}
        getIFrameRef={(parentNode: HTMLDivElement) => {
          // Make the iframe take up the full screen
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