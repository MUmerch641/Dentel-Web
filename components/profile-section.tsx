"use client"

export default function ProfileSection() {
  const qualifications = [
    {
      name: "AAOM",
      logo: "https://pmdc.pk/ThemeContent/images/PMDC%20Logo-Green.png",
    },
    {
      name: "Eastman",
      logo: "https://upload.wikimedia.org/wikipedia/en/6/65/College_of_Physicians_%26_Surgeons_Pakistanlogo.png",
    },
    {
      name: "PMDC",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/ce/Shaikh_Zayed_Medical_College.png",
    },
  ]

  const credentials = [
    "Consultant Dental Surgeon",
    "Esthetic & Restorative Dental Surgeon",
    "MSc equivalent qualifications",
    "9+ years experience",
  ]

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Main Profile Card */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white border-2 border-blue-100">
          {/* Profile Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-96 md:min-h-full">
            {/* Left: Professional Image with Overlay */}

            <div className="relative order-1 md:order-1">
              <img alt="Dr. Ramsha Saeed" src="/intro-pic.jpeg" className="w-full h-full md:h-full object-cover" />
              
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70"></div>

              {/* Logos at Top Right */}
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                {qualifications.map((qual, idx) => (
                  <div
                    key={idx}
                    className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center p-2"
                  >
                    <img
                      src={qual.logo || "/placeholder.svg"}
                      alt={qual.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Text Overlay at Bottom */}
              <div
                style={{ backgroundColor: "rgba(37, 38, 36, 0.75)" }}
                className="absolute bottom-0 left-0 right-0 z-20 backdrop-blur-sm p-6 md:p-8"
              >
                <h3 className="text-white text-2xl md:text-4xl font-bold mb-2">Dr. Ramsha Saeed</h3>
                <p className="text-white text-lg md:text-xl mb-3">Consultant Dental Surgeon</p>
                <p className="text-white text-sm md:text-base">B.D.S. R.D.S.</p>
                <p className="text-white text-sm md:text-base">M.C.P.S (CPSP)</p>
                <p className="text-white text-sm md:text-base">Member College of Physicians and Surgeon Pakistan</p>
              </div>
            </div>

            {/* Right: Content Section */}
            <div className="order-2 md:order-2 p-6 md:p-8 flex flex-col justify-between bg-white md:bg-gradient-to-l md:from-white md:to-gray-50">
              {/* Credentials Header */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Dr. Ramsha Saeed</h2>
                <p className="text-lg font-semibold text-blue-700 mb-1">Consultant Dental Surgeon</p>
                <p className="text-base text-gray-600 mb-6">Esthetic & Restorative Dental Surgeon</p>

                {/* Credentials List */}
                <div className="space-y-2 mb-8">
                  {credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm">{cred}</p>
                    </div>
                  ))}
                </div>

                {/* Key Achievements */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg mb-8">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-blue-900">Registered:</span> Pakistan Medical & Dental
                    Commission
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <span className="font-semibold text-blue-900">Specialization:</span> Comprehensive dental care with
                    focus on esthetic and restorative treatments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section Below Main Card */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Dr. Ramsha */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-4">About Dr. Ramsha Saeed</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <p>✓ Graduated from CMH Lahore Medical & Dental College</p>
              <p>✓ MCPS in Family Dentistry from College of Physicians & Surgeons, Pakistan</p>
              <p>✓ 9+ years experience in Sheikh Zayed Hospital, Rahim Yar Khan</p>
              <p>✓ Consulting with leading telemedicine platforms</p>
              <p>✓ Diplomate in Clinical Orthodontics, Restorative & Esthetic Dentistry, and Clinical Implantology</p>
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Areas of Expertise</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Cosmetic Dentistry</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Restorative Dentistry</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Implant Dentistry</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Orthodontic Braces</span>
              </div>
              <p className="text-center text-blue-600 italic font-medium mt-6">"Quality Dentistry Cannot Be Rushed"</p>
            </div>
          </div>

          {/* Professional Certificates */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Professional Certificates</h3>
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-200">
              <img
                alt="Dr. Ramsha Saeed - Professional Certificates"
                src="/all-certificates.jpeg"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-xs text-gray-600 mt-3 text-center">
              Certified in Clinical Orthodontics, Restorative & Esthetic Dentistry, and Clinical Implantology
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
