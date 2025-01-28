"use client"

import { Component, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export const ErrorBoundary = class ErrorBoundaryComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error) {
    console.error("ErrorBoundary caught an error:", error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex items-center justify-center bg-[#1E293B] rounded-xl">
          <div className="text-center space-y-4">
            <AlertCircle className="w-8 h-8 text-red-500 mx-auto" />
            <h2 className="text-2xl font-bold text-[#FDB61A]">Something went wrong!</h2>
            <p className="text-gray-300">We apologize for the inconvenience.</p>
            <Button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="bg-[#FDB61A] hover:bg-[#E5A417] text-[#0F172A] font-semibold"
            >
              Try again
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

