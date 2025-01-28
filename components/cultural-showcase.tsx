"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { AlertCircle } from "lucide-react"

export function CulturalShowcase() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const imageUrl = "https://s13.gifyu.com/images/SeiFe.gif"

  return (
    <div className="relative w-full min-h-[300px] md:min-h-[400px] overflow-hidden rounded-xl">
      {/* Background container */}
      <div className="absolute inset-0">
        {/* Fallback background color while loading */}
        <div className="absolute inset-0 bg-[#1E293B]" />

        {/* GIF with proper next/image handling */}
        {!hasError && (
          <div className="absolute inset-0">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt="Aerial view of Cultural Night at SANDIPOTSAV"
              fill
              style={{ objectFit: "cover" }}
              priority
              onLoadingComplete={() => setIsLoading(false)}
              onError={() => {
                setHasError(true)
                setIsLoading(false)
              }}
            />
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />
      </div>

      {/* Content overlay */}
      <motion.div
        className="relative z-10 p-4 md:p-8 flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px] text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Experience the Magic</h3>
        <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto px-4">
          Witness the spectacular performances and cultural extravaganza at SANDIPOTSAV 2025. Join us for an
          unforgettable celebration of talent, creativity, and diversity.
        </p>
      </motion.div>

      {/* Loading state overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-[#1E293B] animate-pulse flex items-center justify-center">
          <div className="text-white">Loading showcase...</div>
        </div>
      )}

      {/* Error state with retry option */}
      {hasError && (
        <div className="absolute inset-0 bg-[#1E293B] flex flex-col items-center justify-center gap-4 p-4">
          <AlertCircle className="w-8 h-8 text-red-500" />
          <p className="text-white text-center">Unable to load showcase image</p>
          <button
            onClick={() => {
              setHasError(false)
              setIsLoading(true)
            }}
            className="px-4 py-2 bg-[#FDB61A] text-[#0F172A] rounded-md hover:bg-[#E5A417] transition-colors"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  )
}

