// app/about/page.tsx

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image" // Import the Image component for a professional touch

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* --- Main Header --- */}
        <header className="mb-12 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Where Your Health and Smile Come First
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
            Welcome to DENTAL CARE & IMPLANT CLINIC, a place where advanced dental science meets a gentle, personalized touch. We are dedicated to providing you and your family with exceptional care in a modern and comfortable environment.
          </p>
        </header>

        {/* --- You can add an image of the clinic or the lead dentist here --- */}
        {/* 
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-12">
          <Image
            src="/path-to-your-clinic-image.jpg" // Replace with your image path
            alt="Interior of [Clinic Name]"
            layout="fill"
            objectFit="cover"
          />
        </div>
        */}

        <div className="prose prose-neutral lg:prose-lg max-w-none grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {/* --- Section 1: Our Philosophy --- */}
          <section>
            <h2>Our Philosophy</h2>
            <p>
              At the core of our practice is a simple belief: every patient deserves to be heard. We blend evidence-based dentistry with a patient-first approach, ensuring that your concerns are addressed and your goals are understood. We don’t just treat teeth; we care for people. Our commitment is to provide transparent, honest, and effective treatments that enhance your oral health and give you the confidence to share your smile with the world.
            </p>
          </section>

          {/* --- Section 2: Our Commitment --- */}
          <section>
            <h2>Our Commitment to You</h2>
            <ul>
              <li>
                <strong>Personalized Care:</strong> We create tailored treatment plans that are unique to your individual needs, lifestyle, and budget. There is no one-size-fits-all solution in quality dentistry.
              </li>
              <li>
                <strong>Advanced Technology:</strong> We invest in state-of-the-art technology, from digital X-rays to 3D imaging, to make your diagnosis more precise and your treatment less invasive and more comfortable.
              </li>
              <li>
                <strong>Patient Comfort & Education:</strong> We understand that a visit to the dentist can be daunting. Our team is trained to provide a relaxing and anxiety-free experience. We also empower you with knowledge, explaining every procedure so you can make informed decisions about your health.
              </li>
            </ul>
          </section>
        </div>

        {/* --- Meet the Team Section (Highly Recommended) --- */}
        {/* <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Meet Our Lead Clinician</h2>
          <p className="max-w-2xl mx-auto text-foreground/80 mb-8">
            Our practice is led by a team of dedicated and compassionate professionals.
          </p>
          <div className="max-w-sm mx-auto bg-gray-50 p-6 rounded-lg border">
          
            <h3 className="mt-4 text-xl font-semibold">Dr. Jane Doe</h3>
            <p className="text-accent font-medium">DDS, Specialist in Cosmetic Dentistry</p>
            <p className="mt-2 text-sm text-foreground/70">
              "My greatest reward is seeing the transformative power of a healthy, confident smile. I am committed to lifelong learning and bringing the best techniques to my patients every day."
            </p>
          </div>
        </section> */}

      </main>
      <Footer />
    </>
  )
}