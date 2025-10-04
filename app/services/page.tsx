import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { services } from "@/data/services"
import { ServiceCard } from "@/components/service-card"

export default function ServicesListPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <header className="mb-6">
          <h1 className="text-balance text-3xl font-semibold md:text-4xl">All Services</h1>
          <p className="mt-3 max-w-2xl text-foreground/80">
            Explore treatments designed to protect, restore, and enhance your smile.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} title={s.title} excerpt={s.excerpt} Icon={s.icon as any} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
