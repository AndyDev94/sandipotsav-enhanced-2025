"use client"

import { Card } from "@/components/ui/card"
import { ParallaxBackground } from "@/components/parallax-background"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { BackButton } from "@/components/back-button"

// UPDATE: Add your WhatsApp numbers here
const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: [
      "+91 (2594) 222513", // Main line
      "+91 (2594) 222514", // Secondary line
    ],
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: ["info@sandipuniversity.edu.in", "admissions@sandipuniversity.edu.in"],
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "WhatsApp Support",
    details: [
      {
        label: "General Queries",
        number: "+91 98765 43210", // UPDATE: Add your WhatsApp number
      },
      {
        label: "Registration Support",
        number: "+91 98765 43211", // UPDATE: Add your WhatsApp number
      },
      {
        label: "Technical Support",
        number: "+91 98765 43212", // UPDATE: Add your WhatsApp number
      },
      {
        label: "Complaints & Feedback",
        number: "+91 98765 43213", // UPDATE: Add your WhatsApp number
      },
    ],
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Address",
    details: ["Sandip University", "Nashik-Pune Highway", "Nashik, Maharashtra 422213"],
  },
]

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pt-20 pb-16">
      <ParallaxBackground />
      <BackButton />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#FDB61A] to-[#E5A417] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(253,182,26,0.3)]">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <Card
                key={item.title}
                className="p-6 backdrop-blur-sm bg-[#1E293B]/90 
                  border-[#FDB61A]/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-[#FDB61A]">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <div className="space-y-2">
                      {Array.isArray(item.details) &&
                        item.details.map((detail: any) => {
                          if (typeof detail === "string") {
                            return (
                              <p key={detail} className="text-gray-300">
                                {detail}
                              </p>
                            )
                          }
                          // WhatsApp numbers with labels
                          return (
                            <div key={detail.number} className="flex flex-col">
                              <span className="text-sm text-gray-400">{detail.label}:</span>
                              <a
                                href={`https://wa.me/${detail.number.replace(/[^0-9]/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#FDB61A] hover:text-[#E5A417] transition-colors flex items-center gap-2"
                              >
                                {detail.number}
                                <MessageCircle className="w-4 h-4" />
                              </a>
                            </div>
                          )
                        })}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Google Maps */}
          <div className="aspect-video relative rounded-lg overflow-hidden border border-[#FDB61A]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1870.4431027587799!2d73.66836600000002!3d19.967900299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdded432e59a9a3%3A0x545a803eb30e958a!2sSandip%20University!5e0!3m2!1sen!2sin!4v1710861367961!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sandip University Map"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

