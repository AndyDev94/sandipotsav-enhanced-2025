"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Video } from 'lucide-react'

/**
 * LiveStream Component
 * Displays a YouTube live stream button and modal for Cultural Night
 * 
 * Features:
 * - Red button appears below countdown
 * - Modal with YouTube embed
 * - Responsive design
 * - Animated transitions
 * 
 * IMPORTANT: Update the YouTube URL before the event!
 * Replace the channel ID in the iframe src with your actual YouTube channel or video ID
 * 
 * @component
 */
export const LiveStream = ({ isCountdownComplete = false }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Live Stream Button - Appears prominently after countdown */}
      <button
        onClick={() => setIsOpen(true)}
        className={`
          bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-all relative z-20
          flex items-center gap-2 mx-auto mt-8 font-medium
          ${isCountdownComplete ? 'px-8 py-4 text-lg scale-110' : 'px-6 py-3 text-base'}
        `}
      >
        <Video className={`${isCountdownComplete ? "w-6 h-6" : "w-5 h-5"} animate-pulse`} />
        WATCH CULTURAL NIGHT LIVE
      </button>

      {/* Live Stream Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl z-50"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden border border-[#FDB61A]/20">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 bg-[#1E293B] rounded-full text-white 
                    hover:text-[#FDB61A] transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* 
                  IMPORTANT: Update this URL before the event!
                  Replace UCxxxxxxxxxxx with your actual YouTube channel ID or video ID
                */}
                <iframe
                  src="https://www.youtube.com/embed/live_stream?channel=UCxxxxxxxxxxx"
                  width="100%"
                  height="100%"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="bg-black"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

