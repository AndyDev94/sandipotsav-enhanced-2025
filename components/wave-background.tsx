"use client"

/**
 * WaveBackground Component
 * Creates an animated background with multiple wave layers
 */
export const WaveBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CROPPEDIMG-20240303-WA0015.jpg-1l20MdX5z8xK6EsY72qISJ2znwYUlz.jpeg")',
        }}
      />

      <div className="absolute inset-0 opacity-20">
        <div className="wave wave1" />
        <div className="wave wave2" />
        <div className="wave wave3" />
      </div>

      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}

