"use client"

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { X, Phone, Calendar } from 'lucide-react'
import Image from 'next/image'

interface Service {
  title: string
  description: string
  image: string
  price?: string
  features?: string[]
}

const featuredServices: Service[] = [
  {
    title: "SCALING POLISHING & TEETH WHITENING",
    description: "Professional deep cleaning and whitening for a brighter, healthier smile",
    image: "/dentist-consultation-with-patient.jpg",
    price: "Starting from PKR 5,000",
    features: ["Deep cleaning", "Stain removal", "Professional whitening"]
  },
  {
    title: "VENEERS",
    description: "Transform your smile with ultra-thin porcelain shells",
    image: "/modern-dental-clinic.png",
    price: "Starting from PKR 25,000",
    features: ["Instant transformation", "Natural look", "Stain resistant"]
  },
  {
    title: "HIFU SCALING AND POLISHING",
    description: "Advanced ultrasonic cleaning technology for superior results",
    image: "/dental-team-and-technology.jpg", 
    price: "Starting from PKR 7,000",
    features: ["Ultrasonic technology", "Gentle treatment", "Deep cleaning"]
  },
  {
    title: "ALIGNERS",
    description: "Straighten your teeth discreetly with clear aligners",
    image: "/dental-gallery-.jpg",
    price: "Starting from PKR 80,000", 
    features: ["Nearly invisible", "Removable", "Comfortable fit"]
  }
]

export default function ServicesModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if modal has been shown before (within last 24 hours)
    const lastShown = localStorage.getItem('servicesModalLastShown')
    const now = Date.now()
    const oneDayAgo = now - (24 * 60 * 60 * 1000)
    
    if (lastShown && parseInt(lastShown) > oneDayAgo) {
      setHasShown(true)
      return
    }

    const handleScroll = () => {
      if (hasShown) return
      
      const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      
      // Show modal when user has scrolled 30% of the page
      if (scrollPercentage > 30) {
        setIsOpen(true)
        setHasShown(true)
        localStorage.setItem('servicesModalLastShown', now.toString())
      }
    }

    // Add delay to prevent immediate trigger
    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll)
    }, 3000) // Wait 3 seconds before enabling scroll trigger

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hasShown])

  const handleBookNow = (serviceName: string) => {
    // Add your booking logic here
    console.log(`Booking ${serviceName}`)
    // You can integrate with your appointment booking system
    setIsOpen(false)
  }

  const handleCall = () => {
    window.open('tel:+92-68-5555555', '_self') // Replace with your actual phone number
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="text-center">
            <DialogTitle className="text-2xl font-bold mb-2">
              Deal & Services
            </DialogTitle>
            <p className="text-blue-100 text-sm">
              Professional dental care with modern technology
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          {featuredServices.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-100">
                <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-semibold">
                  SPECIAL OFFER
                </div>
                <div className="flex items-center justify-center h-full text-gray-400">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.jpg"
                    }}
                  />
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-bold text-sm text-blue-900 mb-2 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                  {service.description}
                </p>
                
                {service.features && (
                  <div className="mb-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="text-xs text-gray-500 flex items-center">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                )}
                
                {service.price && (
                  <p className="text-xs text-green-600 font-semibold mb-3">
                    {service.price}
                  </p>
                )}
                
                <Button 
                  onClick={() => handleBookNow(service.title)}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white text-sm py-2"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 p-6 pt-0">
          <Button 
            onClick={handleCall}
            variant="outline" 
            className="flex-1 flex items-center justify-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
          
          <Button 
            onClick={() => {
              // Add your main booking page navigation
              window.location.href = '/consultation'
              setIsOpen(false)
            }}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800"
          >
            <Calendar className="h-4 w-4" />
            Book Consultation
          </Button>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 text-center">
          <p className="text-xs text-gray-700 font-medium">
            📍 Located in Rahim Yar Khan | 🕒 Open 9 AM - 8 PM | ⭐ 500+ Happy Patients
          </p>
          <p className="text-xs text-blue-600 mt-1">
            Emergency services available 24/7
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}