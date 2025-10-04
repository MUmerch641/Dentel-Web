import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { testimonials } from "@/data/testimonials"
import { TestimonialCard } from "@/components/testimonial-card"

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <header className="mb-6">
          <h1 className="text-balance text-3xl font-semibold md:text-4xl">Testimonials</h1>
          <p className="mt-3 max-w-2xl text-foreground/80">
            Real experiences from patients who trusted us with their smiles.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} name={t.name} text={t.text} rating={t.rating} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
