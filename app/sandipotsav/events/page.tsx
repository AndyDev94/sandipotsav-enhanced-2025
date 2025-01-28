import { ParallaxBackground } from "@/components/parallax-background"
import { BackButton } from "@/components/back-button"
import { CulturalShowcase } from "@/components/cultural-showcase"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react" // Fix: Import from lucide-react instead

const eventCategories = [
  {
    title: "Cultural Events",
    description: "Celebrate the rich diversity of Indian culture",
    events: [
      {
        name: "Classical Dance",
        description: "Solo and group performances in various classical dance forms",
        date: "March 2, 2025",
        time: "5:00 PM",
        venue: "Main Auditorium",
        registrationLink: "https://forms.gle/your-classical-dance-form", // UPDATE: Add your form link
      },
      {
        name: "Folk Music",
        description: "Traditional folk music performances from different states",
        date: "March 3, 2025",
        time: "6:00 PM",
        venue: "Open Air Theatre",
        registrationLink: "https://forms.gle/your-folk-music-form", // UPDATE: Add your form link
      },
      {
        name: "Fashion Show",
        description: "Showcase of traditional and fusion Indian fashion",
        date: "March 4, 2025",
        time: "7:00 PM",
        venue: "Main Stage",
        registrationLink: "https://forms.gle/your-fashion-show-form", // UPDATE: Add your form link
      },
    ],
  },
  {
    title: "Literary Events",
    description: "Express yourself through words and poetry",
    events: [
      {
        name: "कवि सम्मेलन",
        description: "Hindi, English and Marathi poetry recitation",
        date: "March 3, 2025",
        time: "3:00 PM",
        venue: "Seminar Hall",
        registrationLink: "https://forms.gle/your-kav-sammelan-form",
      },
      {
        name: "Debate Competition",
        description: "Bilingual debate on contemporary topics",
        date: "March 4, 2025",
        time: "2:00 PM",
        venue: "Conference Room",
        registrationLink: "https://forms.gle/your-debate-competition-form",
      },
      {
        name: "Story Writing",
        description: "Creative writing competition in multiple languages",
        date: "March 5, 2025",
        time: "11:00 AM",
        venue: "Library",
        registrationLink: "https://forms.gle/your-story-writing-form",
      },
    ],
  },
  {
    title: "Art Events",
    description: "Showcase your artistic talents",
    events: [
      {
        name: "Rangoli Making",
        description: "Traditional Indian art form competition",
        date: "March 2, 2025",
        time: "9:00 AM",
        venue: "College Square",
        registrationLink: "https://forms.gle/your-rangoli-making-form",
      },
      {
        name: "Mehendi Design",
        description: "Intricate henna art competition",
        date: "March 3, 2025",
        time: "10:00 AM",
        venue: "Art Gallery",
        registrationLink: "https://forms.gle/your-mehendi-design-form",
      },
      {
        name: "Painting Exhibition",
        description: "Display of student artworks",
        date: "March 4-6, 2025",
        time: "10:00 AM - 6:00 PM",
        venue: "Exhibition Hall",
        registrationLink: "https://forms.gle/your-painting-exhibition-form",
      },
    ],
  },
]

export default function EventsPage() {
  return (
    <main className="relative min-h-screen pt-20 pb-16">
      <ParallaxBackground />
      <BackButton />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-[#FDB61A] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(253,182,26,0.3)]">
          Events
        </h1>

        <div className="max-w-6xl mx-auto space-y-16">
          <CulturalShowcase />

          {eventCategories.map((category) => (
            <div key={category.title} className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#FDB61A] mb-2">{category.title}</h2>
                <p className="text-gray-400">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.events.map((event) => (
                  <div
                    key={event.name}
                    className="p-6 rounded-xl backdrop-blur-sm bg-[#1E293B]/90 border border-[#FDB61A]/20 
                      hover:border-[#FDB61A]/40 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{event.name}</h3>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <div className="space-y-1 text-sm">
                      <p className="text-[#FDB61A]">
                        <span className="font-semibold">Date:</span> {event.date}
                      </p>
                      <p className="text-[#FDB61A]">
                        <span className="font-semibold">Time:</span> {event.time}
                      </p>
                      <p className="text-[#FDB61A]">
                        <span className="font-semibold">Venue:</span> {event.venue}
                      </p>
                    </div>

                    {/* Registration Button */}
                    <Button
                      asChild
                      className="w-full mt-4 bg-[#FDB61A] hover:bg-[#E5A417] text-[#0F172A] font-semibold"
                    >
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Register Now
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

