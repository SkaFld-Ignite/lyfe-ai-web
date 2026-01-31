"use client"

import { ReactNode } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface WorkflowStepProps {
  /** The icon component to display */
  icon: ReactNode
  /** The step title */
  title: string
  /** The step description */
  description: string
  /** The step number (1-4) */
  stepNumber: number
  /** Whether this step is currently active/highlighted */
  isActive?: boolean
  /** Optional additional className */
  className?: string
}

/**
 * WorkflowStep - A reusable component for displaying workflow steps
 * with icon, step number badge, title, and description.
 *
 * Features:
 * - Active state with highlighted border/background
 * - Hover effect with subtle scale transform
 * - Healthcare-appropriate styling with emerald accents
 */
export function WorkflowStep({
  icon,
  title,
  description,
  stepNumber,
  isActive = false,
  className,
}: WorkflowStepProps) {
  return (
    <motion.div
      className={cn(
        "relative flex flex-col items-center text-center p-6 rounded-xl border transition-colors duration-200",
        isActive
          ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-500/50 shadow-lg shadow-emerald-500/10"
          : "bg-card border-border hover:border-emerald-500/30",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Step number badge */}
      <div
        className={cn(
          "absolute -top-3 left-1/2 -translate-x-1/2 flex items-center justify-center",
          "w-6 h-6 rounded-full text-xs font-semibold",
          isActive
            ? "bg-emerald-500 text-white"
            : "bg-muted text-muted-foreground"
        )}
      >
        {stepNumber}
      </div>

      {/* Icon container */}
      <div
        className={cn(
          "mt-4 mb-4 p-4 rounded-full",
          isActive
            ? "bg-emerald-100 dark:bg-emerald-900/30"
            : "bg-muted/50"
        )}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className={cn(
          "text-lg font-semibold mb-2",
          isActive ? "text-emerald-700 dark:text-emerald-300" : "text-foreground"
        )}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
        {description}
      </p>
    </motion.div>
  )
}

export type { WorkflowStepProps }
