"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

/**
 * Event data configuration
 * CUSTOMIZATION:
 * - To add/modify events: Edit the events array below
 * - To change dates: Update the "date" field for each event
 * - To update registration: Change the "formLink" URLs
 * - To modify images: Update the "image" URLs
 */
const events = [
  {
    title: "Day 1",
    date: "March 1, 2025", // Change this date as needed
    description: "Saree, Tie, Chocolate, Film & Rose Day",
    icon: "🌹",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suna1.jpg-DZmOna3iQV9Bh5lYaIYqpv8LUFZZN9.jpeg",
    formLink: "https://forms.gle/your-form-link-1", // Replace with actual Google Form link
  },
  {
    title: "Day 2",
    date: "March 2, 2025",
    description: "Horror Day & Famous Duo Day",
    icon: "👻",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snapinst.app_429677731_737424735159407_7334236709554030437_n_1080.jpg-TMqNLHTG750guKYO7BilKUE3qrqdmB.jpeg", // Horror day image
    formLink: "https://forms.gle/your-form-link-2", // Replace with actual Google Form link
  },
  {
    title: "Day 3",
    date: "March 3, 2025",
    description: "Cosplay & Retro Day",
    icon: "🎭",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suna3.jpg-A8ykoypgfs5129UaWhKI10FM8VXLPj.jpeg",
    formLink: "https://forms.gle/your-form-link-3", // Replace with actual Google Form link
  },
  {
    title: "Day 4",
    date: "March 4, 2025",
    description: "Traditional Day & Group Day",
    icon: "👔",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suna2.jpg-x8rmB0sa2C5w6OglI9CBjis3izMGL0.jpeg",
    formLink: "https://forms.gle/your-form-link-4", // Replace with actual Google Form link
  },
  {
    title: "Day 5",
    date: "March 5, 2025",
    description: "Foundation's Cultural Night",
    icon: "🎪",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sun2.jpg-3nHoi8a2bBvtiBMB3Xx0ncXVPNElYm.jpeg",
    formLink: "https://forms.gle/your-form-link-5", // Replace with actual Google Form link
  },
  {
    title: "Day 6",
    date: "March 6, 2025",
    description: "University's Cultural Night",
    icon: "✨",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunhq720.jpg-xW4ohMjoTdZgtJrvKZwWxxM3OcgbMO.jpeg", // Cultural night image
    formLink: "https://forms.gle/your-form-link-6", // Replace with actual Google Form link
  },
]

/**
 * EventsSection Component
 * Displays a grid of event cards with images, descriptions, and registration buttons
 *
 * CUSTOMIZATION:
 * - To modify card styles: Look for className values
 * - To change animations: Adjust motion.div properties
 * - To update colors: Look for color values like #FDB61A
 */
export const EventsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Title - Change text and styles here */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-[#FDB61A] drop-shadow-[0_0_10px_rgba(253,182,26,0.3)]">
          Event Schedule
        </h2>

        {/* Event Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden"
            >
              {/* Event Image - Aspect ratio 4:3 */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.description}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient Overlay - Modify colors here */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>

              {/* Event Details */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{event.icon}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FDB61A] transition-colors">
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-300">{event.date}</p>
                  <p className="text-white/90">{event.description}</p>

                  {/* Registration Button - Modify styles here */}
                  <Button asChild className="mt-4 bg-[#FDB61A] hover:bg-[#E5A417] text-[#0F172A] font-semibold w-full">
                    <a href={event.formLink} target="_blank" rel="noopener noreferrer">
                      Register Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

