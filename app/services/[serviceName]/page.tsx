import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { services } from "@/data/services"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return services.map((service) => ({
    serviceName: service.slug,
  }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ serviceName: string }> }) {
  const { serviceName } = await params
  const service = services.find((s) => s.slug === serviceName)
  if (!service) return notFound()

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <header className="mb-6">
          <h1 className="text-balance text-3xl font-semibold md:text-4xl">{service.title}</h1>
          <p className="mt-3 max-w-2xl text-foreground/80">{service.excerpt}</p>
        </header>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="prose prose-neutral md:col-span-2">
            <h2>Description</h2>
            <p>{service.details.description}</p>

            <h2>Advantages</h2>
            <ul>
              {service.details.advantages.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>

            <h2>Aftercare</h2>
            <ul>
              {service.details.aftercare.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>

            <h2>FAQs</h2>
            {service.details.faqs.map((f, i) => (
              <details key={i} className="rounded-md border border-border bg-card p-4 mb-4">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-foreground/80">{f.a}</p>
              </details>
            ))}
          </div>

          <aside className="space-y-4">
            <div className="aspect-[4/3] rounded-md bg-secondary">
              <img
                alt={`${service.title} illustrative`}
                src="/dental-team-and-technology.jpg"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div className="rounded-md border border-border bg-card p-4">
              <h3 className="text-lg font-semibold">Ready to begin?</h3>
              <p className="mt-2 text-sm text-foreground/80">
                Book a consultation to discuss if {service.title.toLowerCase()} is right for you.
              </p>
              <a href="/#appointment" className="mt-3 inline-block text-sm font-medium text-accent hover:underline">
                Request appointment →
              </a>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  )
}
