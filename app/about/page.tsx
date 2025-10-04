import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <header className="mb-6">
          <h1 className="text-balance text-3xl font-semibold md:text-4xl">About Our Clinic</h1>
          <p className="mt-3 max-w-2xl text-foreground/80">
            We provide comprehensive dental care with a focus on aesthetics, comfort, and long-term outcomes.
          </p>
        </header>

        <section className="prose prose-neutral max-w-none">
          <p>
            Our philosophy blends evidence-based dentistry with a patient-first approach. From routine check-ups to
            complex restorative and cosmetic treatments, we’re committed to your oral health and confidence.
          </p>
          <ul>
            <li>Experienced clinicians and caring support staff</li>
            <li>Modern technology and materials</li>
            <li>Personalized treatment planning</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
