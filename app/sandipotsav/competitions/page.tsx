import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ParallaxBackground } from "@/components/parallax-background"
import { BackButton } from "@/components/back-button"
import { ExternalLink } from "lucide-react"

const competitions = [
  {
    category: "Technical Competitions",
    items: [
      {
        name: "Hackathon",
        description: "24-hour coding competition to solve real-world problems",
        prize: "₹50,000",
        teamSize: "2-4 members",
        deadline: "Registration Deadline: TBA",
        registrationLink: "https://forms.gle/your-hackathon-form", // UPDATE: Add your Google Form link
      },
      {
        name: "Robotics Challenge",
        description: "Design and program robots for specific tasks and challenges",
        prize: "₹30,000",
        teamSize: "2-3 members",
        deadline: "Registration Deadline: TBA",
        registrationLink: "https://forms.gle/your-robotics-form", // UPDATE: Add your Google Form link
      },
      {
        name: "Project Exhibition",
        description: "Showcase innovative technical projects and research work",
        prize: "₹25,000",
        teamSize: "Individual/Team",
        deadline: "Registration Deadline: TBA",
        registrationLink: "https://forms.gle/your-project-form", // UPDATE: Add your Google Form link
      },
    ],
  },
  {
    category: "Cultural Competitions",
    items: [
      {
        name: "Battle of Bands",
        description: "Inter-college band competition featuring original compositions",
        prize: "₹40,000",
        teamSize: "4-8 members",
        deadline: "Registration Deadline: TBA",
        registrationLink: "https://forms.gle/your-band-form", // UPDATE: Add your Google Form link
      },
      {
        name: "Dance Face-Off",
        description: "Group dance competition across multiple styles",
        prize: "₹35,000",
        teamSize: "6-12 members",
        deadline: "Registration Deadline: TBA",
        registrationLink: "https://forms.gle/your-dance-form", // UPDATE: Add your Google Form link
      },
      {
        name: "Voice of Sandip",
        description: "Solo singing competition for aspiring vocalists",
        prize: "₹20,000",
        teamSize: "Individual",
        deadline: "Registration Deadline: TBA",
        registrationLink: "https://forms.gle/your-singing-form", // UPDATE: Add your Google Form link
      },
    ],
  },
  {
    category: "Sports Competitions",
    items: [
      {
        name: "Cricket Tournament",
        description: "Inter-department cricket championship",
        prize: "₹45,000",
        teamSize: "15 members",
        deadline: "Registration Deadline: TBA",
        registrationLink: "https://forms.gle/your-cricket-form", // UPDATE: Add your Google Form link
      },
      {
        name: "Football League",
        description: "5-day football tournament between colleges",
        prize: "₹40,000",
        teamSize: "16 members",
        deadline: "Registration Deadline: TBA",
        registrationLink: "https://forms.gle/your-football-form", // UPDATE: Add your Google Form link
      },
      {
        name: "Chess Championship",
        description: "Individual chess tournament with multiple rounds",
        prize: "₹15,000",
        teamSize: "Individual",
        deadline: "Registration Deadline: TBA",
        registrationLink: "https://forms.gle/your-chess-form", // UPDATE: Add your Google Form link
      },
    ],
  },
]

export default function CompetitionsPage() {
  return (
    <main className="relative min-h-screen pt-20 pb-16">
      <ParallaxBackground />
      <BackButton />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#D8B4FE] to-[#8B5CF6] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(216,180,254,0.3)]">
          Competitions
        </h1>
        <div className="space-y-16">
          {competitions.map((section) => (
            <div key={section.category} className="space-y-8">
              <h2 className="text-3xl font-bold text-[#D8B4FE] text-center">{section.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((competition) => (
                  <Card
                    key={competition.name}
                    className="p-6 backdrop-blur-sm bg-[#1E293B]/90 hover:bg-[#1E293B] 
                      border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{competition.name}</h3>
                    <p className="text-gray-300 mb-4">{competition.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[#D8B4FE] font-semibold">Prize Pool:</span>
                        <span className="text-gray-300">{competition.prize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#D8B4FE] font-semibold">Team Size:</span>
                        <span className="text-gray-300">{competition.teamSize}</span>
                      </div>
                      <p className="text-gray-400 text-sm mt-2">{competition.deadline}</p>
                      {/* Registration Button */}
                      <Button asChild className="w-full mt-4 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">
                        <a
                          href={competition.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Register Now
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

