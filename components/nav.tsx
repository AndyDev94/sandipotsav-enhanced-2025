"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Notifications } from "./notifications"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const mainNavItems = [
  { name: "EVENTS", href: "/sandipotsav/events" },
  { name: "COMPETITIONS", href: "/sandipotsav/competitions" },
  { name: "CONTACT", href: "/sandipotsav/contact" },
]

const moreNavItems = [
  { name: "ABOUT US", href: "/sandipotsav/about" },
  { name: "SPONSORS", href: "/sandipotsav/sponsors" },
]

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#0F172A] to-[#0F172A]/95 backdrop-blur-sm border-b border-[#FDB61A]/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/sandipotsav"
            className="text-2xl font-bold text-white font-title drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          >
            SANDIPOTSAV
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-200 hover:text-[#FDB61A] transition-colors drop-shadow-[0_0_8px_rgba(253,182,26,0.5)]"
              >
                {item.name}
              </Link>
            ))}

            {/* More Menu Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-gray-200 hover:text-[#FDB61A] transition-colors">
                MORE <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[#1E293B] border-[#FDB61A]/20">
                {moreNavItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      href={item.href}
                      className="text-gray-200 hover:text-[#FDB61A] transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Notifications />
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <Notifications />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-200 hover:text-[#FDB61A] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[#FDB61A]/20"
            >
              <div className="py-4 space-y-2">
                {[...mainNavItems, ...moreNavItems].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-gray-200 hover:text-[#FDB61A] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

