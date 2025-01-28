import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-[#FDB61A]">404</h2>
        <p className="text-xl text-white">Page Not Found</p>
        <Button asChild className="bg-[#FDB61A] hover:bg-[#E5A417] text-[#0F172A] font-semibold">
          <Link href="/sandipotsav">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}

