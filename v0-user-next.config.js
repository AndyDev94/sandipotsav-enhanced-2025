/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image configuration for remote patterns
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s13.gifyu.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "v0.blob.com",
        pathname: "/**",
      },
    ],
  },
}

module.exports = nextConfig

