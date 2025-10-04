import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <div className="mb-3 h-9 w-9 rounded-md bg-accent" aria-hidden="true" />
          <p className="text-sm opacity-90">
            Premium dental care with a focus on aesthetics, comfort, and long-term health.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">Clinic</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">Resources</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <a href="#" aria-disabled>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" aria-disabled>
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">Contact</h3>
          <p className="text-sm opacity-90">123 Dental Street, City</p>
          <p className="text-sm opacity-90">(+1) 555-123-4567</p>
          <p className="text-sm opacity-90">hello@dentalclinic.com</p>
        </div>
      </div>
      <div className="border-t border-border/20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs opacity-80">
          <p>© {new Date().getFullYear()} Dental Aesthetics. All rights reserved.</p>
          <p>Designed for performance and accessibility.</p>
        </div>
      </div>
    </footer>
  )
}
