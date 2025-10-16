// app/privacy-policy/page.tsx

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <header className="mb-8">
          <h1 className="text-balance text-3xl font-semibold md:text-4xl">Privacy Policy</h1>
        </header>

        <div className="prose prose-neutral max-w-none">
          <p>
            Welcome to DENTAL CARE & IMPLANT CLINIC. We are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect personal information from you in a variety of ways, including, but not limited to, when you book an appointment, fill out a form, or communicate with us. The information we may collect includes:
          </p>
          <ul>
            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, date of birth.</li>
            <li><strong>Protected Health Information (PHI):</strong> Medical history, dental records, insurance information, and other health-related data as required for your treatment.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, and usage data collected automatically when you visit our website.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including to:</p>
          <ul>
            <li>Provide and manage your dental care and treatment.</li>
            <li>Process payments and insurance claims.</li>
            <li>Communicate with you about appointments, treatments, and other administrative matters.</li>
            <li>Improve our website and services.</li>
            <li>Comply with legal and regulatory requirements.</li>
          </ul>

          <h2>Disclosure of Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal identification information to others. We may share your information with third parties who perform services for us or on our behalf, including other healthcare providers, insurance companies, and billing services, but only as necessary for your treatment and payment. We may also disclose your information where we are legally required to do so.
          </p>

          <h2>Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal and health information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, review, and request correction of your personal and health information. Please contact us to make such a request.
          </p>

         
        </div>
      </main>
      <Footer />
    </>
  )
}