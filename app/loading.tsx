import { CircularLoader } from "@/components/circular-loader"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">
      <div className="transform scale-75">
        <CircularLoader />
      </div>
    </div>
  )
}

