"use client"

import { useEffect, useRef } from "react"

/**
 * CircularLoader Component
 * Creates an animated loading spinner with a glowing effect
 *
 * CUSTOMIZATION TIPS:
 * - Change colors: Look for #FDB61A (golden) and modify to your color
 * - Adjust size: Look for width/height: 400 values
 * - Change speed: Look for rotation += 0.02 value
 */
export const CircularLoader = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let rotation = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      canvas.width = 400 // Change this value to adjust width
      canvas.height = 400 // Change this value to adjust height

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      ctx.beginPath()
      ctx.arc(centerX, centerY, 180, 0, Math.PI * 2)
      ctx.strokeStyle = "#ffffff" // Change this color for outer ring
      ctx.lineWidth = 1
      ctx.stroke()

      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      // Glowing effect settings - Modify these values to change the glow
      ctx.strokeStyle = "#FDB61A" // Change this color for main segments
      ctx.shadowColor = "#FDB61A" // Change this color for glow
      ctx.shadowBlur = 15 // Change this value for glow intensity
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
      ctx.lineWidth = 20 // Change this value for line thickness

      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.arc(0, 0, 150, (i * Math.PI * 2) / 3, (i * Math.PI * 2) / 3 + Math.PI / 4)
        ctx.stroke()
      }

      ctx.restore()

      // Animation speed - Change 0.02 to adjust rotation speed
      rotation += 0.02

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="mx-auto" style={{ width: "400px", height: "400px" }} />
}

