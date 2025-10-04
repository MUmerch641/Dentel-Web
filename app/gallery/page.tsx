import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  const items = Array.from({ length: 12 }).map((_, i) => i)
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <header className="mb-6">
          <h1 className="text-balance text-3xl font-semibold md:text-4xl">Gallery</h1>
          <p className="mt-3 max-w-2xl text-foreground/80">
            Before and after transformations and our clinic environment.
          </p>
        </header>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-md border border-border bg-secondary">
              <img
                alt={`Gallery image ${i + 1}`}
                src={`/dental-gallery-.jpg?height=400&width=400&query=dental%20gallery%20${i + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
