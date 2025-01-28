"use client"

import { useEffect, useState } from "react"

/**
 * AnimatedTitle Component
 * Displays the main title with glitch animation effects centered within the rotating circle
 *
 * Features:
 * - Centered text positioning
 * - Glitch animation effects
 * - Responsive sizing
 * - Perfect alignment with circular loader
 *
 * Customization:
 * - Adjust text size via text-[size] classes
 * - Modify animations in globals.css
 * - Change colors in gradient and shadow effects
 */
export const AnimatedTitle = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      <h1
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 text-center
          ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
      >
        <span className="block text-xl md:text-2xl animate-glitch-1 text-white mix-blend-difference font-title drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
          SANDIPOTSAV
        </span>
        <span className="block text-lg md:text-xl animate-glitch-2 bg-gradient-to-r from-[#D8B4FE] to-[#8B5CF6] text-transparent bg-clip-text font-title drop-shadow-[0_0_15px_rgba(216,180,254,0.7)]">
          2025
        </span>
      </h1>
      <div className="glitch-lines absolute inset-0"></div>
    </div>
  )
}

