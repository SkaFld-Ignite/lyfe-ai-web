"use client"

import { cn } from "@/lib/utils"

type LyfeLogoProps = {
  className?: string
  showText?: boolean
}

export function LyfeLogo({ className, showText = true }: LyfeLogoProps) {
  return (
    <div className={cn("flex items-center space-x-2 group", className)}>
      {/* Logo Mark - Abstract L shape representing life/flow */}
      <div className="relative h-8 w-8 transition-all duration-300 ease-in-out group-hover:scale-105">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-80 blur-sm group-hover:opacity-100 transition-opacity" />
        <div className="relative h-full w-full rounded-lg bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5 text-white"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Stylized L that looks like a pulse/lifeline */}
            <path d="M4 4v12a4 4 0 0 0 4 4h12" />
            <path d="M8 12l3-4 3 6 3-4 3 2" className="opacity-80" />
          </svg>
        </div>
      </div>

      {showText && (
        <span className="font-semibold text-lg tracking-tight text-foreground">
          Lyfe<span className="text-emerald-500">AI</span>
        </span>
      )}
    </div>
  )
}
