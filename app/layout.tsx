import type { Metadata, Viewport } from "next"
import { Russo_One } from "next/font/google" // Using Russo One as an alternative bold font
import "./globals.css"

// Initialize the font
const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-russo-one",
})

// Metadata configuration
export const metadata: Metadata = {
  title: {
    template: "%s | SANDIPOTSAV 2025",
    default: "SANDIPOTSAV 2025",
  },
  description: "The Annual Cultural Festival of Sandip University",
  keywords: ["Sandip University", "Cultural Festival", "College Fest", "SANDIPOTSAV", "Nashik"],
  authors: [{ name: "Sandip University" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sandipotsav.vercel.app",
    siteName: "SANDIPOTSAV 2025",
    title: "SANDIPOTSAV 2025",
    description: "The Annual Cultural Festival of Sandip University",
  },
  twitter: {
    card: "summary_large_image",
    title: "SANDIPOTSAV 2025",
    description: "The Annual Cultural Festival of Sandip University",
  },
}

// Viewport configuration
export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

/**
 * Root Layout Component
 * Provides the base structure for all pages
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${russoOne.variable} bg-[#0F172A] text-white min-h-screen`}>{children}</body>
    </html>
  )
}

