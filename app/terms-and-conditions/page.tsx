// app/terms-and-conditions/page.tsx

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <header className="mb-8">
          <h1 className="text-balance text-3xl font-semibold md:text-4xl">Terms and Conditions</h1>
        </header>

        <div className="prose prose-neutral max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this site.
          </p>

          <h2>2. Website Content</h2>
          <p>
            The information provided on this website is for general informational and educational purposes only. It is not a substitute for professional dental advice, diagnosis, or treatment. Always seek the advice of your dentist or other qualified health provider with any questions you may have regarding a medical condition.
          </p>

          <h2>3. Appointments and Cancellation Policy</h2>
          <p>
            When you book an appointment, you are holding a space in our calendar that is no longer available to our other patients. We require at least [e.g., 48 hours] notice for any cancellations or changes to your appointment. Appointments cancelled with less than [e.g., 48 hours] notice may be subject to a cancellation fee.
          </p>

          <h2>4. Payments and Insurance</h2>
          <p>
            Payment for services is due at the time of treatment unless other arrangements have been made in advance. We accept [List of payment methods, e.g., cash, credit cards]. As a courtesy, we will help you process your insurance claims. However, you are fully responsible for all fees charged by this office regardless of your insurance coverage.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            The content on this website, including text, graphics, logos, and images, is the property of [Clinic Name] and is protected by copyright and other intellectual property laws.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall DENTAL CARE & IMPLANT CLINIC, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of, or inability to access or use, the website or any content on the website.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms and conditions at any time. We will notify you of any changes by posting the new terms on this site. Your continued use of the website after any such changes constitutes your acceptance of the new terms.
          </p>
          
         
        </div>
      </main>
      <Footer />
    </>
  )
}