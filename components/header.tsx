"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "./button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
]

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu()
  }, [pathname])

  // Close mobile menu when clicking outside
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeMobileMenu()
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-white backdrop-blur shadow-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Dental Clinic Home">
            <Image 
              src="/favicon.png" 
              alt="Dental Care & Implant Clinic Rahim Yar Khan Logo" 
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-blue-900 leading-tight">DENTAL CARE & IMPLANT CLINIC</span>
              <span className="text-sm font-medium text-blue-700">RAHIM YAR KHAN</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors",
                  pathname === item.href && "text-blue-900 font-semibold",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Appointment Button */}
          <div className="hidden md:block">
            <Link href="#appointment">
              <Button variant="secondary" size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-none shadow-md">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 hover:bg-blue-100 rounded-md transition-all duration-200 hover:scale-110 relative z-[60]"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-blue-900 transform rotate-0 transition-transform duration-200" />
            ) : (
              <Menu className="h-6 w-6 text-blue-900 transform rotate-0 transition-transform duration-200" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={cn(
          "md:hidden bg-white border-b border-blue-200 transition-all duration-300 ease-in-out overflow-hidden shadow-xl",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={cn(
                  "text-sm font-medium text-blue-700 hover:text-blue-900 transition-all duration-200 py-3 px-4 rounded-lg hover:bg-blue-50 border-l-4 border-transparent hover:border-blue-600 block",
                  pathname === item.href && "text-blue-900 bg-blue-50 border-l-4 border-blue-600",
                )}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Appointment Button */}
            <div className="pt-4 border-t border-blue-200 mt-4">
              <Link href="#appointment" onClick={closeMobileMenu} className="block">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-none shadow-lg"
                >
                  📞 Book Appointment
                </Button>
              </Link>
              
              {/* Emergency Contact */}
              <div className="mt-3 text-center">
                <p className="text-xs text-blue-700 mb-1">Emergency? Call now:</p>
                <a 
                  href="tel:+92-68-5555555" 
                  className="text-sm font-medium text-blue-700 hover:text-blue-900 block py-2"
                  onClick={closeMobileMenu}
                >
                  +92-68-5555555
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay - positioned outside header */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-40"
          onClick={closeMobileMenu}
          style={{ top: '0' }}
        />
      )}
    </>
  )
}
