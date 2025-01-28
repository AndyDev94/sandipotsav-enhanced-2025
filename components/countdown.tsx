"use client"

import { useEffect, useState } from "react"
import { LiveStream } from "./live-stream"

/**
 * Countdown Component
 * Displays a countdown timer to the event with live stream integration
 *
 * Features:
 * - Countdown display with days, hours, minutes, seconds
 * - Live stream button integration
 * - Responsive design
 * - Animated transitions
 *
 * Customization:
 * - Initial countdown values in useState
 * - Styling through Tailwind classes
 * - Live stream button appearance
 *
 * @component
 */
export const Countdown = () => {
  // Initial countdown values - MODIFY THESE TO CHANGE THE COUNTDOWN DURATION
  const [timeLeft, setTimeLeft] = useState({
    days: 37,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((current) => {
        // Check if countdown is complete
        if (current.days === 0 && current.hours === 0 && current.minutes === 0 && current.seconds === 0) {
          clearInterval(timer)
          setIsComplete(true)
          return current
        }

        // Calculate new time values
        let newSeconds = current.seconds - 1
        let newMinutes = current.minutes
        let newHours = current.hours
        let newDays = current.days

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
        }
        if (newMinutes < 0) {
          newMinutes = 59
          newHours -= 1
        }
        if (newHours < 0) {
          newHours = 23
          newDays -= 1
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {[
          { label: "DAYS", value: timeLeft.days },
          { label: "HOURS", value: timeLeft.hours },
          { label: "MINUTES", value: timeLeft.minutes },
          { label: "SECONDS", value: timeLeft.seconds },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center bg-[#1E293B]/90 backdrop-blur-md rounded-lg p-3 md:p-4 
              min-w-[80px] md:min-w-[100px] border border-[#FDB61A]/30 shadow-[0_0_15px_rgba(253,182,26,0.15)]"
          >
            <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_0_8px_rgba(253,182,26,0.5)]">
              {value.toString().padStart(2, "0")}
            </span>
            <span className="text-[10px] md:text-xs text-[#FDB61A] mt-1">{label}</span>
          </div>
        ))}
      </div>

      <LiveStream isCountdownComplete={isComplete} />
    </div>
  )
}

