"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

/**
 * SponsorsSection Component
 * Displays sponsor information in an animated grid
 *
 * CUSTOMIZATION:
 * - To modify sponsors: Update the sponsors array below
 * - To change colors: Look for color values like #D8B4FE
 * - To adjust animations: Modify motion.div properties
 */
export const SponsorsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Modify this array to add/remove sponsors
  const sponsors = [
    { name: "Tech Corp", level: "Platinum" },
    { name: "Innovation Labs", level: "Gold" },
    { name: "Future Systems", level: "Gold" },
    { name: "Digital Solutions", level: "Silver" },
    { name: "Next Gen", level: "Silver" },
    { name: "Smart Tech", level: "Silver" },
  ]

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Section Title - Change text here */}
        <h2 className="text-4xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-[#D8B4FE] to-[#8B5CF6] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(216,180,254,0.3)]">
          Our Sponsors
        </h2>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl backdrop-blur-sm bg-[#1E293B]/90 hover:bg-[#1E293B]
                transition-all duration-300 border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 
                shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            >
              <div
                className="aspect-square rounded-lg bg-gradient-to-br from-[#D8B4FE]/10 to-[#8B5CF6]/10 
                flex items-center justify-center mb-4 border border-[#8B5CF6]/20"
              >
                <span className="text-2xl font-bold text-[#D8B4FE]">{sponsor.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{sponsor.name}</h3>
              <p className="text-sm text-[#D8B4FE]">{sponsor.level} Sponsor</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

