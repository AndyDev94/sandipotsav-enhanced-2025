"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export function BackButton() {
  const router = useRouter()

  return (
    <motion.button
      onClick={() => router.push("/")}
      className="fixed left-4 top-24 z-50 flex items-center gap-2 rounded-full bg-[#1E293B]/90 
        border border-[#FDB61A]/20 px-4 py-2 text-white backdrop-blur-sm transition-all
        hover:bg-[#1E293B] hover:border-[#FDB61A]/40 hover:text-[#FDB61A]
        focus:outline-none focus:ring-2 focus:ring-[#FDB61A]/50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="text-sm font-medium">Back</span>
    </motion.button>
  )
}

