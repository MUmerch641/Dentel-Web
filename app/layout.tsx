import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Dental Care & Implant Clinic Rahim Yar Khan - Professional Dental Services",
  description: "Professional dental care and implant services in Rahim Yar Khan with experienced dentists and modern technology. Book your appointment today!",
  generator: "Next.js",
  keywords: ["dental care", "dental clinic", "implants", "dentist", "Rahim Yar Khan", "teeth cleaning", "oral health"],
  authors: [{ name: "Dental Care & Implant Clinic" }],
  creator: "Dental Care & Implant Clinic Rahim Yar Khan",
  publisher: "Dental Care & Implant Clinic",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  metadataBase: new URL("https://dentalcare-rahimyarkhan.com"),
  openGraph: {
    title: "Dental Care & Implant Clinic Rahim Yar Khan",
    description: "Professional dental care and implant services with experienced dentists and modern technology",
    type: "website",
    locale: "en_US",
    siteName: "Dental Care & Implant Clinic",
    images: [
      {
        url: "/dental-logo.png",
        width: 1200,
        height: 630,
        alt: "Dental Care & Implant Clinic Rahim Yar Khan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Care & Implant Clinic Rahim Yar Khan",
    description: "Professional dental care and implant services with experienced dentists and modern technology",
    images: ["/dental-logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
