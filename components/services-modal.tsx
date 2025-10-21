"use client"

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { X, Phone, Calendar, Sparkles, Shield, Clock, Award } from 'lucide-react'
import Image from 'next/image'

interface Service {
  title: string
  description: string
  image: string
  features?: string[]
}

const featuredServices: Service[] = [
  {
    title: "Teeth Whitening & Cleaning",
    description: "Professional deep cleaning and whitening treatment for a radiant, confident smile",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=300&fit=crop",
    features: ["Deep cleaning", "Stain removal", "Instant whitening", "Polish & fluoride"]
  },
  {
    title: "Porcelain Veneers",
    description: "Transform your smile with custom-designed, natural-looking porcelain veneers",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&h=300&fit=crop",
    features: ["Custom design", "Natural appearance", "Stain resistant", "Long-lasting"]
  },
  {
    title: "Dental Implants",
    description: "Permanent tooth replacement solution with titanium implants for lasting results",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&h=300&fit=crop",
    features: ["Permanent solution", "Natural feel", "Bone preservation", "High success rate"]
  },
  {
    title: "Clear Aligners",
    description: "Invisible orthodontic treatment to straighten teeth discreetly and comfortably",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=500&h=300&fit=crop",
    features: ["Nearly invisible", "Removable", "No metal", "Comfortable"]
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
      <DialogContent showCloseButton={false} className="max-w-5xl max-h-[95vh] overflow-y-auto p-0 gap-0 bg-white sm:rounded-lg rounded-none">
        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white p-4 sm:p-6 md:p-8 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 hover:bg-white/20 rounded-full transition-all hover:rotate-90 duration-300 z-10"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold mb-2 sm:mb-3 animate-pulse">
              <Sparkles className="h-3 w-3" />
              <span className="hidden xs:inline">LIMITED TIME OFFERS</span>
              <span className="xs:hidden">SPECIAL OFFERS</span>
            </div>
            <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Premium Dental Services
            </DialogTitle>
            <p className="text-blue-100 text-xs sm:text-sm max-w-2xl mx-auto px-2">
              Transform your smile with our expert dental care
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-3 sm:mt-4 text-xs px-2">
              <div className="flex items-center gap-1.5">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-300" />
                <span className="hidden sm:inline">Certified Dentists</span>
                <span className="sm:hidden">Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-300" />
                <span>1200+ Patients</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-300" />
                <span className="hidden sm:inline">Same-Day Appointments</span>
                <span className="sm:hidden">Same-Day</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 p-4 sm:p-6 bg-gradient-to-b from-gray-50 to-white">
          {featuredServices.map((service, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 bg-white">
              <div className="relative h-40 sm:h-48 md:h-52 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
                {/* Image with hover effect */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/dental-team-and-technology.jpeg"
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-5">
                <h3 className="font-bold text-sm sm:text-base text-blue-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                  {service.description}
                </p>
                
                {/* Features with icons */}
                {service.features && (
                  <div className="mb-3 sm:mb-4 space-y-1 sm:space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="text-xs text-gray-700 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Book Button */}
                <Button 
                  onClick={() => handleBookNow(service.title)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs sm:text-sm py-2.5 sm:py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
                >
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  Book This Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}