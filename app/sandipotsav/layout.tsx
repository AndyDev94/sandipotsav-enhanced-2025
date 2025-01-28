import type { Metadata, Viewport } from "next"
import { Space_Grotesk } from "next/font/google"
import "../globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

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

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function SandipotsavLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.className} bg-[#0F172A] text-white min-h-screen`}>{children}</body>
    </html>
  )
}

