"use client";

import dynamic from "next/dynamic";
import { ParallaxBackground } from "@/components/parallax-background";
import Image from "next/image";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);


const developers = [
  {
    name: "Rohan Tiwari",
    role: "Lead Developer",
    contribution: "Led the development team and architected the core functionality of the website.",
  },
  {
    name: "Aneesh Gupta",
    role: "Lead Developer",
    contribution: "Led the frontend development and implemented responsive design patterns.",
  },
  {
    name: "Tanishq Tiwari",
    role: "Lead Developer",
    contribution: "Led the backend development and system architecture.",
  },
  {
    name: "Aditya Zalte",
    role: "UI/UX Developer",
    contribution: "Designed the user experience and created engaging animations.",
  },
  {
    name: "Sushant Shelke",
    role: "Backend Developer",
    contribution: "Implemented server-side logic and database integrations.",
  },
]

const coordinationMessage = {
  title: "Message from the Coordination Committee",
  content: `We are immensely proud of our development team who has worked tirelessly to bring SANDIPOTSAV 2025 to the digital realm. 
  Their dedication, innovation, and collaborative spirit have created a platform that truly represents the grandeur of our cultural festival. 
  This website stands as a testament to the technical excellence and creative vision of our students.
  
  As we prepare for SANDIPOTSAV 2025, we invite you to explore this digital gateway to our cultural extravaganza. The seamless integration 
  of technology and culture showcased here perfectly embodies the spirit of Sandip University - where tradition meets innovation.`,
  signature: "- SANDIPOTSAV 2025 Coordination Committee",
}

export default function DevelopersPage() {
  return (
    <main className="relative min-h-screen pt-20 pb-16">
      <ParallaxBackground />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-[#FDB61A] to-[#E5A417] text-transparent bg-clip-text">
            The Developers
          </h1>

          <div className="text-center mb-16">
            <p className="text-gray-300 text-lg leading-relaxed">
              Welcome to the story behind SANDIPOTSAV 2025's digital presence. This website represents countless hours
              of dedication, creativity, and collaborative effort from our talented team.
            </p>
          </div>

         <div className="grid md:grid-cols-2 gap-8 mb-16">
  {developers.map((dev, index) => (
    <MotionDiv
      key={dev.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="p-6 rounded-xl backdrop-blur-sm bg-[#1E293B]/90 border border-[#FDB61A]/20 
        hover:border-[#FDB61A]/40 transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-[#FDB61A] mb-2">{dev.name}</h3>
      <p className="text-white mb-2">{dev.role}</p>
      <p className="text-gray-300">{dev.contribution}</p>
    </MotionDiv>
  ))}
</div>

        

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-[#FDB61A] mb-6">{coordinationMessage.title}</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              {coordinationMessage.content.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p className="text-[#FDB61A] mt-6 font-semibold">{coordinationMessage.signature}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

