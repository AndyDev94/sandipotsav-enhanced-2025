"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

/**
 * AboutSection Component
 * Displays information about SANDIPOTSAV with animated cards
 *
 * CUSTOMIZATION:
 * - To modify section title: Look for "About SANDIPOTSAV"
 * - To change cards: Modify the array in the .map() function
 * - To adjust animations: Change the motion.div properties
 */
export const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Section Title - Change text here */}
        <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#D8B4FE] to-[#8B5CF6] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(216,180,254,0.3)]">
          About SANDIPOTSAV
        </h2>

        {/* Feature Cards - Modify array to add/remove/edit cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Innovation",
              description:
                "Experience cutting-edge technology and groundbreaking innovations at Maharashtra's premier tech festival.",
            },
            {
              title: "Collaboration",
              description:
                "Connect with industry leaders, brilliant minds, and fellow tech enthusiasts in an immersive environment.",
            },
            {
              title: "Excellence",
              description:
                "Experience the vibrant cultural showcase and artistic performances at Maharashtra's premier cultural festival.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 rounded-xl backdrop-blur-sm bg-[#1E293B]/90 hover:bg-[#1E293B]
                transition-all duration-300 border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 
                shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#D8B4FE]">{item.title}</h3>
              <p className="text-gray-200 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

