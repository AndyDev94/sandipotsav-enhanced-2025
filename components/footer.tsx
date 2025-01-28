import Link from "next/link"
import { Instagram, Linkedin, Youtube, Facebook, Twitter } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/sandip.university",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/school/sandipuniversity",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/sandipuniversity",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/sandipuniversity",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    name: "X",
    href: "https://twitter.com/sandipuniv",
    icon: <Twitter className="w-5 h-5" />,
  },
]

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full py-3 px-4 bg-gradient-to-t from-[#0F172A] to-[#0F172A]/95 backdrop-blur-sm border-t border-[#FDB61A]/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/sandipotsav/developers" className="text-xs text-gray-400 hover:text-[#FDB61A] transition-colors">
          Made with ❤️ by Rohan, Aneesh, Aditya, Sushant
        </Link>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-[#FDB61A] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

