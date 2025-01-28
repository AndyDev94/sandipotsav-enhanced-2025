import { Card } from "@/components/ui/card"
import { ParallaxBackground } from "@/components/parallax-background"
import { BackButton } from "@/components/back-button"

const sponsorLevels = [
  {
    level: "Title Sponsors",
    sponsors: [
      {
        name: "Sandip Foundation",
        description: "Parent organization supporting education and innovation",
        logo: "/placeholder.svg?height=100&width=200",
      },
    ],
  },
  {
    level: "Platinum Sponsors",
    sponsors: [
      {
        name: "Maharashtra Industrial Development Corporation",
        description: "Government body promoting industrial development",
        logo: "/placeholder.svg?height=100&width=200",
      },
      {
        name: "Bank of Maharashtra",
        description: "Leading public sector bank",
        logo: "/placeholder.svg?height=100&width=200",
      },
    ],
  },
  {
    level: "Gold Sponsors",
    sponsors: [
      {
        name: "Nashik Industries & Manufacturers Association",
        description: "Association of local industries",
        logo: "/placeholder.svg?height=100&width=200",
      },
      {
        name: "Tech Mahindra",
        description: "Global IT services and consulting company",
        logo: "/placeholder.svg?height=100&width=200",
      },
      {
        name: "Infosys",
        description: "Leading technology company",
        logo: "/placeholder.svg?height=100&width=200",
      },
    ],
  },
]

export default function SponsorsPage() {
  return (
    <main className="relative min-h-screen pt-20 pb-16">
      <ParallaxBackground />
      <BackButton />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#D8B4FE] to-[#8B5CF6] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(216,180,254,0.3)]">
          Our Sponsors
        </h1>

        <div className="space-y-16 max-w-6xl mx-auto">
          {sponsorLevels.map((level) => (
            <div key={level.level} className="space-y-8">
              <h2 className="text-3xl font-bold text-[#D8B4FE] text-center">{level.level}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {level.sponsors.map((sponsor) => (
                  <Card
                    key={sponsor.name}
                    className="p-6 backdrop-blur-sm bg-[#1E293B]/90 hover:bg-[#1E293B] 
                      border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 transition-all duration-300"
                  >
                    <div className="aspect-video relative mb-4 bg-[#0F172A] rounded-lg overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={`${sponsor.name} logo`}
                        className="absolute inset-0 w-full h-full object-contain p-4"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
                    <p className="text-gray-300">{sponsor.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#D8B4FE] mb-4">Become a Sponsor</h2>
          <p className="text-gray-300 mb-8">
            Join us in supporting the largest cultural festival at Sandip University. Contact our sponsorship team to
            learn about the benefits and opportunities.
          </p>
          <a
            href="mailto:sponsors@sandipotsav.com"
            className="inline-block px-6 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-lg transition-colors"
          >
            Contact Sponsorship Team
          </a>
        </div>
      </div>
    </main>
  )
}

