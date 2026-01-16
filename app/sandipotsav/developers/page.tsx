"use client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

import dynamic from "next/dynamic";
import { ParallaxBackground } from "@/components/parallax-background";

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
];

const coordinationMessage = {
  title: "Message from the Coordination Committee",
  content: `We are immensely proud of our development team who has worked tirelessly to bring SANDIPOTSAV 2025 to the digital realm.`,
  signature: "- SANDIPOTSAV 2025 Coordination Committee",
};

export default function DevelopersPage() {
  return (
    <main className="relative min-h-screen pt-20 pb-16">
      <ParallaxBackground />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-[#FDB61A] to-[#E5A417] text-transparent bg-clip-text">
            The Developers
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {developers.map((dev, index) => (
              <MotionDiv
                key={dev.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl backdrop-blur-sm bg-[#1E293B]/90 border border-[#FDB61A]/20 hover:border-[#FDB61A]/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[#FDB61A] mb-2">{dev.name}</h3>
                <p className="text-white mb-2">{dev.role}</p>
                <p className="text-gray-300">{dev.contribution}</p>
              </MotionDiv>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-[#FDB61A] mb-6">
              {coordinationMessage.title}
            </h2>
            <p className="text-[#FDB61A] mt-6 font-semibold">
              {coordinationMessage.signature}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
