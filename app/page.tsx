import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/button"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { AppointmentForm } from "@/components/appointment-form"
import ServicesModal from "@/components/services-modal"
import { services } from "@/data/services"
import { testimonials } from "@/data/testimonials"
import ProfileSection from "@/components/profile-section"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <Header />

      <main>












        {/* Hero */}
        <section
          className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 overflow-hidden"
          style={{
            backgroundImage: `url('/back-pic.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Refined animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-5 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-5 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10 flex items-center min-h-screen">
            <div className="grid items-center gap-16 py-20 lg:grid-cols-2 w-full">
              {/* Left Content */}
              <div className="space-y-10">
                {/* Clinic Badge */}
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-full px-4 py-2.5 border border-white/30 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-slate-700">Open Now • 4 PM - 8 PM</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-black leading-tight text-white drop-shadow-lg">
                    Dental Care &<br />
                    <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-transparent">
                      Implant Clinic
                    </span>
                  </h1>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>
                    <p className="text-2xl font-bold text-white drop-shadow">Rahim Yar Khan</p>
                  </div>
                </div>

                {/* Tagline Box */}
                <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-white/40 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
                  <p className="text-2xl font-bold text-slate-900 italic leading-relaxed">
                    "Quality Dentistry Cannot Be Rushed"
                  </p>
                  <p className="text-slate-600 mt-3 text-lg font-medium">
                    We want you to smile Healthier & Brighter
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="#appointment">
                    <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300 border border-cyan-300 flex items-center justify-center gap-3 group">
                      <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Book Appointment</span>
                    </button>
                  </Link>

                  <Link href="/services">
                    <button className="w-full sm:w-auto bg-white/95 backdrop-blur-md hover:bg-white text-slate-900 px-10 py-4 rounded-xl font-bold text-lg shadow-xl border border-white/40 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group">
                      <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2M7 7h10" />
                      </svg>
                      <span>Our Services</span>
                    </button>
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-white/20">
                  <a href="tel:0315-5775320" className="flex items-center gap-3 text-white hover:text-cyan-300 transition-colors group">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Call Us</p>
                      <p className="font-bold text-lg">0315-5775320</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-white">
                    <div className="w-12 h-12 bg-blue-500/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Location</p>
                      <p className="font-bold text-lg">Abu Dhabi Road</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-2 border border-white/30 shadow-2xl">
                  <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-200 shadow-2xl">
                    <img
                      alt="Modern Dental Clinic - Dr. Ramsha Saeed"
                      src="./hero.jpeg"
                      className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Floating Stats */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-white/40 backdrop-blur-lg hover:shadow-cyan-500/30 transition-shadow">
                    <div className="text-center">
                      <div className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">1200+</div>
                      <div className="text-sm font-semibold text-slate-600 mt-1">Happy Patients</div>
                    </div>
                  </div>

                  <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-2xl p-5 shadow-2xl border border-cyan-300/50 hover:shadow-cyan-500/40 transition-shadow">
                    <div className="text-center">
                      <div className="text-3xl font-black">12+</div>
                      <div className="text-sm font-semibold opacity-95 mt-1">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-sm font-semibold drop-shadow">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>





















        <ProfileSection />

        {/* Services */}
        <section className="border-t border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <header className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold md:text-3xl text-blue-900">Our Services</h2>
              <Link href="/services" className="text-blue-700 hover:text-blue-800 font-semibold hover:underline transition-colors">
                View all
              </Link>
            </header>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((s) => (
                <ServiceCard key={s.slug} slug={s.slug} title={s.title} excerpt={s.excerpt} Icon={s.icon as any} />
              ))}
            </div>
          </div>
        </section>

        {/* About snippet */}
        <section className="py-12 md:py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold md:text-3xl text-blue-900">Why Choose Us</h2>
              <p className="mt-3 text-blue-800">
                We combine evidence-based dentistry with personalized care to deliver predictable, aesthetic results.
                From preventive care to full smile makeovers, our team prioritizes your comfort and long-term health.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-blue-700">
                <li>• Experienced, compassionate clinicians</li>
                <li>• Modern technology and techniques</li>
                <li>• Transparent, customized treatment plans</li>
              </ul>
              <div className="mt-6">
                <Link href="/about">
                  <Button variant="outline">Learn more</Button>
                </Link>
              </div>
            </div>
            <div className="order-1 aspect-[4/3] rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 md:order-2 shadow-lg border-2 border-blue-200/50">
              <img
                alt="Our clinic"
                src="/dental-team-and-technology.jpeg"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-y border-blue-200 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl text-blue-900">Patient Stories</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <TestimonialCard key={i} name={t.name} text={t.text} rating={t.rating} />
              ))}
            </div>
          </div>
        </section>

        {/* Social Media & Contact */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Stay Connected With Us</h2>
              <p className="text-blue-800">Follow us on social media for dental tips, updates, and patient stories</p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center items-center gap-6 mb-12">
              <a
                href="https://facebook.com/dentalcareandimplantclinicrahimyarkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                title="@dentalcareandimplantclinicrahimyarkhan"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/ramsha_ryk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                title="@ramsha_ryk"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.566-3.239-1.469-.79-.902-1.239-2.12-1.239-3.519s.449-2.617 1.239-3.519c.791-.902 1.942-1.469 3.239-1.469s2.448.566 3.239 1.469c.79.902 1.239 2.12 1.239 3.519s-.449 2.617-1.239 3.519c-.791.903-1.942 1.469-3.239 1.469zm7.072 0c-1.297 0-2.448-.566-3.239-1.469-.79-.902-1.239-2.12-1.239-3.519s.449-2.617 1.239-3.519c.791-.902 1.942-1.469 3.239-1.469s2.448.566 3.239 1.469c.79.902 1.239 2.12 1.239 3.519s-.449 2.617-1.239 3.519c-.791.903-1.942 1.469-3.239 1.469z" />
                </svg>
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.76 20.8a6.34 6.34 0 0 0 10.86-4.43V8.56a8.16 8.16 0 0 0 4.77 1.51V6.69a4.84 4.84 0 0 1-1.8-.02z" />
                </svg>
              </a>

              <a
                href="https://wa.me/923155775320"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                title="WhatsApp: 0315-5775320"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488" />
                </svg>
              </a>
            </div>

            {/* Our Services from Brochure */}
            <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-blue-200 mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Our Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Scaling & Polishing</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Teeth Filling</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Root Canal Treatment</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Fixed Crown & Bridge</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Teeth Whitening</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Metal Braces</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Invisible Braces (Aligners)</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Veneers (Emax / Zirconia)</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Dental Implants</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Removable Denture</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Complete Denture</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Wisdom Tooth Extraction</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Kids Tooth Treatment</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>CAD / CAM Dentures</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Flexible Dentures</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Digital Radiography (X-Ray)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Phone */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">Phone</h3>
                <p className="text-blue-700">0315-5775320</p>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">Email</h3>
                <p className="text-blue-700">dentalcare.ryk@gmail.com</p>
              </div>

              {/* Opening Hours */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">Timing</h3>
                <p className="text-blue-700 font-semibold">Evening:</p>
                <p className="text-blue-700">4 PM to 8 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Find Our Location</h2>
              <p className="text-blue-700">Visit us at our modern clinic in Rahim Yar Khan</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Address Info */}
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-2 rounded-full">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Address</h4>
                      <p className="text-blue-800">Inside Naveed Clinic Complex, Abu Dhabi Road,</p>
                      <p className="text-blue-800">Rahim Yar Khan</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-2 rounded-full">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">WhatsApp</h4>
                      <p className="text-blue-800">0315-5775320</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTISCAEQLhgnGK8BGMcBGIAEGIoFMggIAhAAGBYYHjINCAMQABiGAxiABBiKBTINCAQQABiGAxiABBiKBTIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDE3NzFqMGo0qAIAsAIB&um=1&ie=UTF-8&fb=1&gl=pk&sa=X&geocode=Ka9l6c1WWzc5MU-Z5wpGQPQx&daddr=Abu+Dhabi+road,+Razi+Rd,+behind+PIA+office,+Officers+Colony+Rahim+Yar+Khan,+64200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="bg-white p-4 rounded-xl shadow-xl">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28071.568695938044!2d70.28207531083982!3d28.420883600000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375b56cde965af%3A0x31f440460ae7994f!2sDental%20Care%20%26%20Implant%20Clinic%20Rahim%20Yar%20Khan!5e0!3m2!1sen!2s!4v1763738255053!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dental Care & Implant Clinic Location Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Appointment Form */}
        <section
          id="appointment"
          className="py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold md:text-3xl text-blue-900">Request an Appointment</h2>
                <p className="mt-3 text-blue-800">
                  Share your details and preferred date; our team will reach out to confirm your visit.
                </p>

                <div className="mt-6 rounded-lg border-2 border-blue-200 bg-gradient-to-br from-white to-blue-50 p-5 shadow-lg">
                  <AppointmentForm
                    {...({ minTime: "16:00", maxTime: "20:00", timeStep: 30 } as any)}
                  />
                </div>
              </div>
              <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg border-2 border-blue-200/50">
                <img
                  alt="Patient consultation"
                  src="/hero.jpeg"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ServicesModal />
    </>
  )
}