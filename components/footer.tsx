import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-white text-blue-900">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
        
            <div className="flex flex-col">
              <span className="text-sm font-bold leading-tight text-blue-900">DENTAL CARE & IMPLANT CLINIC</span>
              <span className="text-xs text-blue-700">RAHIM YAR KHAN</span>
            </div>
          </div>
          <p className="text-sm text-blue-800">
            Premium dental care with a focus on aesthetics, comfort, and long-term health.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-900">Clinic</h3>
          <ul className="space-y-2 text-sm text-blue-700">
            <li>
              <Link href="/about" className="hover:text-blue-900">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-900">Services</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-blue-900">Gallery</Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-blue-900">Testimonials</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-900">Resources</h3>
          <ul className="space-y-2 text-sm text-blue-700">
            <li>
              <Link href="/blog" className="hover:text-blue-900">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-900">Contact</Link>
            </li>
            <li>
              <a href="/privacy-policy" aria-disabled className="hover:text-blue-900">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions" aria-disabled className="hover:text-blue-900">
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-900">Contact</h3>
          <p className="text-sm text-blue-700">Inside Naveed Clinic Complex</p>
          <p className="text-sm text-blue-700">Abu Dhabi Road, Behind PIA office</p>
          <p className="text-sm text-blue-700">Razi Road, Rahimyar Khan</p>
          <p className="text-sm text-blue-700">Pakistan</p>
          <p className="text-sm text-blue-700">0315 5775320</p>
          <p className="text-sm text-blue-700">dentalcare_ryk</p>
        </div>
      </div>
      <div className="border-t border-blue-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-blue-700">
          <p>© {new Date().getFullYear()} Dental Care & Implant Clinic Rahim Yar Khan. All rights reserved.</p>
            <p>
            Developed by{" "}
            <a
              href="https://aksocialmediamarketingagency.website"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-blue-900 hover:bg-blue-50 rounded px-1"
            >
               akmarketingagency
            </a>
            </p>
        </div>
      </div>
    </footer>
  )
}
