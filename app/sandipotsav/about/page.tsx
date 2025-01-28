import { Card } from "@/components/ui/card"
import { ParallaxBackground } from "@/components/parallax-background"
import { BackButton } from "@/components/back-button"

const aboutSections = [
  {
    title: "About SANDIPOTSAV",
    content: `SANDIPOTSAV is the annual cultural festival of Sandip University, one of Maharashtra's premier educational institutions. 
Started in 2017, it has grown to become one of the largest cultural festivals in the region, attracting participants from 
colleges across India. The festival celebrates creativity, artistic expression, and cultural diversity through various events, 
performances, and competitions.`,
  },
  {
    title: "About Sandip University",
    content: `Sandip University, established under the Maharashtra Government Act of 2015, is a prestigious institution committed 
    to excellence in education. Located in Nashik, the university offers various undergraduate and postgraduate programs across 
    multiple disciplines. With state-of-the-art infrastructure and experienced faculty, Sandip University has established itself 
    as a leading center for quality education.`,
  },
]

const highlights = [
  {
    number: "10,000+",
    label: "Participants",
    description: "Students from across India",
  },
  {
    number: "50+",
    label: "Events",
    description: "Cultural & Technical competitions",
  },
  {
    number: "20+",
    label: "Colleges",
    description: "Participating institutions",
  },
  {
    number: "₹5L+",
    label: "Prize Pool",
    description: "Worth of prizes to be won",
  },
]

const features = [
  {
    title: "Cultural Showcase",
    description:
      "Experience diverse cultural performances, art exhibitions, and creative competitions that showcase talent from across the country.",
  },
  {
    title: "Technical Innovation",
    description:
      "Participate in hackathons, robotics competitions, and technical workshops led by industry experts and academic leaders.",
  },
  {
    title: "Professional Development",
    description:
      "Attend career-focused seminars, networking events, and skill development workshops to enhance your professional growth.",
  },
  {
    title: "Entertainment",
    description:
      "Enjoy celebrity performances, DJ nights, and various entertainment activities throughout the festival duration.",
  },
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-20 pb-16">
      <ParallaxBackground />
      <BackButton />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#D8B4FE] to-[#8B5CF6] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(216,180,254,0.3)]">
          About Us
        </h1>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* About Sections */}
          {aboutSections.map((section) => (
            <Card
              key={section.title}
              className="p-8 backdrop-blur-sm bg-[#1E293B]/90 
                border-[#8B5CF6]/20 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-[#D8B4FE] mb-4">{section.title}</h2>
              <p className="text-gray-300 leading-relaxed">{section.content}</p>
            </Card>
          ))}

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((highlight) => (
              <Card
                key={highlight.label}
                className="p-6 text-center backdrop-blur-sm bg-[#1E293B]/90 
                  border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-[#D8B4FE] mb-2">{highlight.number}</div>
                <div className="text-white font-semibold mb-1">{highlight.label}</div>
                <div className="text-sm text-gray-400">{highlight.description}</div>
              </Card>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="p-6 backdrop-blur-sm bg-[#1E293B]/90 
                  border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

