"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "./button"
import { cn } from "@/lib/utils"

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
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Dental Clinic Home">
          <Image 
            src="/clinic-logo.png" 
            alt="Dental Care & Implant Clinic Rahim Yar Khan Logo" 
            width={48}
            height={48}
            className="h-12 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground leading-tight">DENTAL CARE & IMPLANT CLINIC</span>
            <span className="text-sm font-medium text-foreground/70">RAHIM YAR KHAN</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-foreground/80 hover:text-foreground",
                pathname === item.href && "text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="#appointment">
            <Button variant="secondary" size="sm">
              Book Appointment
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
