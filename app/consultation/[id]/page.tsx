// app/consultation/[id]/page.tsx
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

// Generate static params for consultation pages at build time
export async function generateStaticParams() {
  // Return a dummy param to satisfy static export requirements
  return [{ id: 'placeholder' }]
}

export default async function ConsultationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  // Video consultations require server-side functionality
  // They cannot work with static export
  
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-2xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Video Consultation</h1>
          <p className="text-gray-600 mb-6">
            Video consultations require a server to function properly.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            To enable video consultation functionality:
          </p>
          <ul className="text-left max-w-md mx-auto list-disc pl-6 space-y-2 text-sm text-gray-600">
            <li>Remove <code className="bg-gray-100 px-1 rounded">output: 'export'</code> from next.config.mjs</li>
            <li>Deploy to Vercel, Netlify, or another platform that supports server-side rendering</li>
            <li>Ensure your Supabase configuration is properly set up</li>
          </ul>
          <p className="mt-6 text-sm text-gray-500">Consultation ID: {id}</p>
        </div>
      </div>
      <Footer />
    </>
  )
}