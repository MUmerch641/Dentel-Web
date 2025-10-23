"use client"

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { X, Phone, Calendar, Sparkles, Shield, Clock, Award } from 'lucide-react'
import Image from 'next/image'

interface Service {
  title: string
  subtitle?: string
  description: string
  image: string
  originalPrice?: string
  discountedPrice?: string
  discount?: string
  bookingNote?: string
}

const featuredServices: Service[] = [
  {
    title: "SCALING POLISHING & TEETH WHITENING",
    subtitle: "3 procedures",
    description: "Complete dental cleaning and whitening package for a brighter smile",
    image: "https://media.istockphoto.com/id/528740755/photo/professional-teeth-cleaning.jpg?s=612x612&w=0&k=20&c=snFQ6XhQWamHVbnQD6jClnAEvy3Gaoz6-esTaactGZA=",
    originalPrice: "35,000",
    discountedPrice: "25,000",
    bookingNote: "Discount only through Online booking"
  },
  {
    title: "VENEERS",
    subtitle: "Hydra Facial/ 1 Laser Session",
    description: "Transform your smile with custom-designed porcelain veneers",
    image: "https://media.istockphoto.com/id/1602825167/photo/dental-veneer-placement-over-frontal-teeth-3d-illustration.jpg?s=612x612&w=0&k=20&c=4tui2AZmKJB0_TC2oHNrclvD0CsbTlTJ7kI0mko7tk0=",
    discount: "20% OFF",
    bookingNote: "on the treatment that is booked online"
  },
  {
    title: "HIFU",
    subtitle: "Scaling and Polishing",
    description: "Advanced ultrasonic cleaning technology for deep cleaning",
    image: "https://media.istockphoto.com/id/1029340434/photo/professional-teeth-cleaning-ultrasonic-teeth-cleaning-machine-delete-dental-calculus-from.jpg?s=612x612&w=0&k=20&c=XaQ2Cn6lXmUwDiOa3vbjxi8uKqw2xMQVLMIHCUzGTA0=",
    originalPrice: "9,000",
    discountedPrice: "5,000",
    bookingNote: "Per tooth - Online booking discount"
  },
  {
    title: "ALIGNERS",
    subtitle: "Hydra Facial/ Teeth Whitening",
    description: "Invisible orthodontic treatment for straightening teeth discreetly",
    image: "https://media.istockphoto.com/id/1429256190/photo/clear-aligner-dental-night-guard.jpg?s=612x612&w=0&k=20&c=lyGXownUrxDI22u5D13sGWLFsuXQSdwzvKDUQ1YEG6Y=",
    discount: "20% OFF",
    bookingNote: "on the treatment that is booked online"
  }
];

export default function ServicesModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    // Check if modal was already shown in this session
    const wasShown = sessionStorage.getItem('servicesModalShown')
    if (wasShown) {
      setHasTriggered(true)
      return
    }

    const handleScroll = () => {
      // Trigger modal when user scrolls down 300px from top (only once per session)
      if (window.scrollY > 300 && !hasTriggered) {
        setIsOpen(true)
        setHasTriggered(true)
        // Remember that modal was shown this session
        sessionStorage.setItem('servicesModalShown', 'true')
      }
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hasTriggered])

  // Handle modal close - don't show again this session
  const handleModalClose = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      // Mark as permanently closed for this session
      setHasTriggered(true)
      sessionStorage.setItem('servicesModalShown', 'true')
    }
  }


  const handleBookNow = (serviceName: string) => {
    // Add your booking logic here
    // You can integrate with your appointment booking system
    handleModalClose(false)
    // scroll to booking section
    const bookingSection = document.getElementById('appointment')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }


  return (
    <Dialog open={isOpen} onOpenChange={handleModalClose}>
      <DialogContent showCloseButton={false} className="max-w-xl sm:max-w-2xl md:max-w-3xl max-h-[90vh] overflow-y-auto p-0 gap-0 bg-white rounded-xl">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white p-4 sm:p-6">
          <button
            onClick={() => handleModalClose(false)}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 p-2 hover:bg-white/20 rounded-full transition-all z-10 bg-white/10"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          
          <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-center pr-8">
            Deal & Services
          </DialogTitle>
        </div>

        {/* Services Grid - 2 columns on all screen sizes */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 bg-white">
          {featuredServices.map((service, index) => (
            <Card key={index} className="overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 bg-white rounded-lg">
              {/* Image Section with Ribbon */}
              <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 bg-gray-100 overflow-hidden">
                {/* Gold Ribbon */}
                {service.discount && (
                  <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 overflow-hidden z-10">
                    <div className="absolute top-4 sm:top-5 md:top-6 -left-6 sm:-left-7 md:-left-8 w-24 sm:w-28 md:w-32 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 text-[9px] sm:text-[10px] md:text-xs font-bold py-1 sm:py-1.5 transform -rotate-45 shadow-lg text-center">
                      {service.discount}
                    </div>
                  </div>
                )}
                
                {service.originalPrice && service.discountedPrice && (
                  <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 overflow-hidden z-10">
                    <div className="absolute top-4 sm:top-5 md:top-6 -left-6 sm:-left-7 md:-left-8 w-24 sm:w-28 md:w-32 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 text-[9px] sm:text-[10px] md:text-xs font-bold py-1 sm:py-1.5 transform -rotate-45 shadow-lg text-center">
                      SPECIAL
                    </div>
                  </div>
                )}
                
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/dental-team-and-technology.jpeg"
                  }}
                />
              </div>
              
              {/* Content Section */}
              <CardContent className="p-2 sm:p-3 md:p-4 lg:p-5">
                <div className="text-center mb-2 sm:mb-3 md:mb-4">
                  <h3 className="font-bold text-[10px] sm:text-xs md:text-sm lg:text-base text-blue-900 uppercase mb-0.5 sm:mb-1 leading-tight">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="text-[8px] sm:text-[9px] md:text-xs text-gray-600 leading-tight">
                      {service.subtitle}
                    </p>
                  )}
                </div>
                
                {/* Pricing Section */}
                {service.originalPrice && service.discountedPrice && (
                  <div className="mb-2 sm:mb-3 md:mb-4 text-center">
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 mb-1 sm:mb-1.5 md:mb-2">
                      <span className="text-red-500 line-through text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
                        {service.originalPrice} ❌
                      </span>
                      <span className="text-green-600 text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                        {service.discountedPrice} ✔️
                      </span>
                    </div>
                    {service.bookingNote && (
                      <p className="text-[7px] sm:text-[8px] md:text-xs text-blue-600 italic leading-tight px-1">
                        {service.bookingNote}
                      </p>
                    )}
                  </div>
                )}
                
                {/* Discount Only */}
                {service.discount && service.bookingNote && (
                  <div className="mb-2 sm:mb-3 md:mb-4 text-center">
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-1 sm:p-1.5 md:p-2 mb-1 sm:mb-1.5 md:mb-2">
                      <p className="text-[9px] sm:text-xs md:text-sm font-bold text-yellow-800">
                        {service.discount}
                      </p>
                    </div>
                    <p className="text-[7px] sm:text-[8px] md:text-xs text-blue-600 italic leading-tight px-1">
                      {service.bookingNote}
                    </p>
                  </div>
                )}
                
                {/* Book Button */}
                <Button 
                  onClick={() => handleBookNow(service.title)}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white text-[9px] sm:text-xs md:text-sm font-bold py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-md transition-all duration-300"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="bg-blue-50 px-3 sm:px-4 py-2 sm:py-3 text-center border-t border-blue-100">
          <p className="text-[9px] sm:text-xs text-blue-900 font-semibold">
            💎 Discount only through Online booking
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}