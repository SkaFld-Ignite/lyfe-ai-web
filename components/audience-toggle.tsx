"use client"

import * as React from "react"
import { useAudience, type Audience } from "@/lib/context/audience-context"
import { cn } from "@/lib/utils"

type AudienceToggleProps = {
  className?: string
}

export function AudienceToggle({ className }: AudienceToggleProps) {
  const { audience, setAudience } = useAudience()

  return (
    <div
      className={cn(
        "bg-muted inline-flex h-12 sm:h-14 w-fit items-center justify-center rounded-lg p-1",
        className
      )}
      role="tablist"
      aria-label="Select audience type"
    >
      <AudienceToggleButton
        value="provider"
        isActive={audience === "provider"}
        onClick={() => setAudience("provider")}
      >
        For Providers
      </AudienceToggleButton>
      <AudienceToggleButton
        value="patient"
        isActive={audience === "patient"}
        onClick={() => setAudience("patient")}
      >
        For Patients
      </AudienceToggleButton>
    </div>
  )
}

type AudienceToggleButtonProps = {
  value: Audience
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}

function AudienceToggleButton({
  value,
  isActive,
  onClick,
  children,
}: AudienceToggleButtonProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`${value}-content`}
      onClick={onClick}
      className={cn(
        "inline-flex h-10 sm:h-12 min-w-[88px] sm:min-w-[100px] items-center justify-center rounded-md px-3 sm:px-4 text-sm font-medium transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        isActive
          ? "bg-background text-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </button>
  )
}
