import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  // Array of actual images from the Gallery folder
  const galleryImages = [
    "WhatsApp Image 2025-10-11 at 7.25.37 PM.jpeg",
    "WhatsApp Image 2025-10-11 at 7.25.38 PM.jpeg",
    "WhatsApp Image 2025-10-11 at 7.25.39 PM.jpeg",
    "WhatsApp Image 2025-10-11 at 7.25.40 PM (1).jpeg",
    "WhatsApp Image 2025-10-11 at 7.25.40 PM.jpeg"
  ]

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <header className="mb-6">
          <h1 className="text-balance text-3xl font-semibold md:text-4xl">Gallery</h1>
          
        </header>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((imageName, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-md border border-border bg-secondary hover:scale-105 transition-transform duration-300">
              <img
                alt={`Gallery image ${index + 1}`}
                src={`/Gallery/${imageName}`}
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
