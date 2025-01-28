/**
 * Home Page Component
 * Main landing page for SANDIPOTSAV website
 *
 * Features:
 * - Parallax background effect
 * - Animated title with circular loader
 * - Countdown timer
 * - Live stream button
 * - Responsive sections
 *
 * Sections:
 * - Hero with animated title
 * - About section
 * - Events section
 * - Sponsors section
 *
 * @component
 */
import { Suspense } from "react"
import { CircularLoader } from "@/components/circular-loader"
import { Footer } from "@/components/footer"
import { Nav } from "@/components/nav"
import { ParallaxBackground } from "@/components/parallax-background"
import { WaveBackground } from "@/components/wave-background"
import { ErrorBoundary } from "@/components/error-boundary"
import { AnimatedTitle } from "@/components/animated-title"
import { EventsSection } from "@/components/sections/events-section"
import { AboutSection } from "@/components/sections/about-section"
import { SponsorsSection } from "@/components/sections/sponsors-section"
import { Countdown } from "@/components/countdown"
import { LiveStream } from "@/components/live-stream"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParallaxBackground />

      <div className="relative z-10">
        <Nav />

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center relative">
          <div className="text-center space-y-8">
            {/* Loader and Title */}
            <Suspense fallback={<div className="w-[400px] h-[400px] animate-pulse bg-[#1E293B]/50 rounded-full" />}>
              <div className="relative w-[400px] h-[400px]">
                <CircularLoader />
                <div className="absolute inset-0">
                  <AnimatedTitle />
                </div>
              </div>
            </Suspense>

            {/* Event date and countdown */}
            <div className="space-y-6">
              <p className="text-sm md:text-base text-[#E2E8F0] font-medium tracking-wider">March 1-6, 2025</p>
              <Countdown />
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <Suspense fallback={<div className="min-h-screen animate-pulse bg-[#1E293B]/50" />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen animate-pulse bg-[#1E293B]/50" />}>
          <EventsSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen animate-pulse bg-[#1E293B]/50" />}>
          <SponsorsSection />
        </Suspense>

        <Footer />
      </div>
    </main>
  )
}

