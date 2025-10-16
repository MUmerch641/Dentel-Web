import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
        
            <div className="flex flex-col">
              <span className="text-sm font-bold leading-tight">DENTAL CARE & IMPLANT CLINIC</span>
              <span className="text-xs opacity-80">RAHIM YAR KHAN</span>
            </div>
          </div>
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
              <a href="/privacy-policy" aria-disabled>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions" aria-disabled>
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">Contact</h3>
          <p className="text-sm opacity-90">Naveed Clinic</p>
          <p className="text-sm opacity-90">Abu Dhabi Road, Behind PIA office</p>
          <p className="text-sm opacity-90">Razi Road, Rahimyar Khan</p>
          <p className="text-sm opacity-90">Pakistan</p>
          <p className="text-sm opacity-90">0315 5775320</p>
          <p className="text-sm opacity-90">dentalcare_ryk</p>
        </div>
      </div>
      <div className="border-t border-border/20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs opacity-80">
          <p>© {new Date().getFullYear()} Dental Care & Implant Clinic Rahim Yar Khan. All rights reserved.</p>
            <p>
            Developed by{" "}
            <a
              href="https://www.upward.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-primary-foreground hover:bg-primary/80 rounded px-1"
            >
              Upward Co.
            </a>
            </p>
        </div>
      </div>
    </footer>
  )
}
