"use client"

import { useEffect, useState } from "react"

/**
 * ParallaxBackground Component
 * Creates a dynamic, scrolling background effect with multiple visual layers
 */
export const ParallaxBackground = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#0F172A] opacity-95" />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out opacity-40"
        style={{
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CROPPEDIMG-20240303-WA0015.jpg-1l20MdX5z8xK6EsY72qISJ2znwYUlz.jpeg")',
          transform: `scale(${1 + scrollPosition * 0.0005}) translate3d(0, ${scrollPosition * 0.2}px, 0)`,
        }}
      />

      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#FDB61A]/20 to-transparent opacity-30 blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#FDB61A]/20 to-transparent opacity-30 blur-3xl transform -translate-y-1/2" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A]/70 to-[#FDB61A]/20" />
    </div>
  )
}

