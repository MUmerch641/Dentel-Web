import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/button"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { AppointmentForm } from "@/components/appointment-form"
import ServicesModal from "@/components/services-modal"
import { services } from "@/data/services"
import { testimonials } from "@/data/testimonials"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative">
          <div className="relative mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-8 py-12 md:grid-cols-2 md:py-20">
              <div>
                <h1 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
                  Modern Dental Care for Confident, Healthy Smiles
                </h1>
                <p className="mt-4 text-pretty text-foreground/80 md:text-lg">
                  Experience expert treatment, advanced technology, and a warm, supportive environment.
                </p>
                <div className="mt-6 flex gap-3">
                  <Link href="#appointment">
                    <Button size="lg" variant="primary">
                      Book Appointment
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="aspect-[4/3] w-full rounded-xl bg-secondary md:aspect-[5/4]">
                {/* Placeholder image */}
                <img
                  alt="Dental clinic hero"
                  src="/modern-dental-clinic.png"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="border-t border-border bg-secondary py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <header className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold md:text-3xl">Our Services</h2>
              <Link href="/services" className="text-accent hover:underline">
                View all
              </Link>
            </header>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((s) => (
                <ServiceCard key={s.slug} slug={s.slug} title={s.title} excerpt={s.excerpt} Icon={s.icon as any} />
              ))}
            </div>
          </div>
        </section>

        {/* About snippet */}
        <section className="py-12 md:py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-semibold md:text-3xl">Why Choose Us</h2>
              <p className="mt-3 text-foreground/80">
                We combine evidence-based dentistry with personalized care to deliver predictable, aesthetic results.
                From preventive care to full smile makeovers, our team prioritizes your comfort and long-term health.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-foreground/80">
                <li>• Experienced, compassionate clinicians</li>
                <li>• Modern technology and techniques</li>
                <li>• Transparent, customized treatment plans</li>
              </ul>
              <div className="mt-6">
                <Link href="/about">
                  <Button variant="outline">Learn more</Button>
                </Link>
              </div>
            </div>
            <div className="order-1 aspect-[4/3] rounded-xl bg-secondary md:order-2">
              <img
                alt="Our clinic"
                src="/dental-team-and-technology.jpg"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-y border-border bg-secondary py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Patient Stories</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <TestimonialCard key={i} name={t.name} text={t.text} rating={t.rating} />
              ))}
            </div>
          </div>
        </section>  

        {/* Appointment Form */}
        <section 
          id="appointment"
         className="py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl">Request an Appointment</h2>
                <p className="mt-3 text-foreground/80">
                  Share your details and preferred date; our team will reach out to confirm your visit.
                </p>
                <div className="mt-6 rounded-lg border border-border bg-card p-5">
                  <AppointmentForm />
                </div>
              </div>
              <div className="aspect-[4/3] w-full rounded-xl bg-secondary">
                <img
                  alt="Patient consultation"
                  src="/dentist-consultation-with-patient.jpg"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ServicesModal />
    </>
  )
}
