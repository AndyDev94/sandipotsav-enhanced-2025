"use client"

import { Bell } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

type Notification = {
  id: string
  title: string
  message: string
  date: string
  isNew?: boolean
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "Registration Open!",
    message: "Early bird registration for SANDIPOTSAV 2025 is now open.",
    date: "2024-03-25",
    isNew: true,
  },
  {
    id: "2",
    title: "New Event Added",
    message: "Horror Day & Famous Duo Day added to the schedule.",
    date: "2024-03-24",
    isNew: true,
  },
  {
    id: "3",
    title: "Venue Update",
    message: "All events will be held at the main campus auditorium.",
    date: "2024-03-23",
  },
]

export const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false)
  const newNotifications = notifications.filter((n) => n.isNew).length

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-200 hover:text-[#FDB61A] transition-colors"
      >
        <Bell className="w-6 h-6" />
        {newNotifications > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute right-0 mt-2 w-80 bg-[#1E293B] border border-[#FDB61A]/20 rounded-lg shadow-lg overflow-hidden z-50"
            >
              <div className="p-4 border-b border-[#FDB61A]/20">
                <h3 className="text-lg font-semibold text-white">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-4 border-b border-[#FDB61A]/20 hover:bg-[#0F172A] transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="text-sm font-medium text-white">{notification.title}</h4>
                      {notification.isNew && (
                        <span className="px-2 py-1 text-xs bg-red-500/10 text-red-500 rounded-full">New</span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-400">{notification.message}</p>
                    <p className="mt-2 text-xs text-gray-500">{notification.date}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

