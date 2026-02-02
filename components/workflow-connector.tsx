"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"

interface WorkflowConnectorProps {
  /** Controls the flowing dash animation */
  isAnimating?: boolean
  /** Direction of data flow for animation direction */
  direction?: "forward" | "backward"
  /** Optional additional className */
  className?: string
}

/**
 * WorkflowConnector - Animated SVG line connecting workflow steps
 *
 * Features:
 * - Animated dash pattern flowing in data flow direction
 * - Horizontal on desktop, vertical on mobile
 * - Healthcare-appropriate blue color scheme
 * - Respects reduced motion preferences
 */
export function WorkflowConnector({
  isAnimating = false,
  direction = "forward",
  className,
}: WorkflowConnectorProps) {
  // Animation direction: forward = left-to-right (desktop) / top-to-bottom (mobile)
  const animationOffset = direction === "forward" ? [0, -20] : [-20, 0]

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        // Horizontal on desktop (default), vertical on mobile
        "w-8 md:w-16 lg:w-24 h-8 md:h-4",
        "flex-shrink-0",
        className
      )}
    >
      {/* Desktop: Horizontal connector */}
      <svg
        className="hidden md:block w-full h-full"
        viewBox="0 0 100 20"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="connector-gradient-h"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgb(37 99 235)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="rgb(37 99 235)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(37 99 235)" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Background line */}
        <line
          x1="0"
          y1="10"
          x2="100"
          y2="10"
          stroke="url(#connector-gradient-h)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Animated dashes */}
        <motion.line
          x1="0"
          y1="10"
          x2="100"
          y2="10"
          stroke="rgb(37 99 235)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8 12"
          initial={{ strokeDashoffset: 0 }}
          animate={
            isAnimating
              ? {
                  strokeDashoffset: animationOffset,
                }
              : { strokeDashoffset: 0 }
          }
          transition={{
            duration: 1,
            ease: "linear",
            repeat: isAnimating ? Infinity : 0,
          }}
        />

        {/* Arrow head */}
        <motion.polygon
          points="90,5 100,10 90,15"
          fill="rgb(37 99 235)"
          initial={{ opacity: 0.5 }}
          animate={isAnimating ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.5 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: isAnimating ? Infinity : 0,
          }}
        />
      </svg>

      {/* Mobile: Vertical connector */}
      <svg
        className="block md:hidden w-full h-full"
        viewBox="0 0 20 40"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="connector-gradient-v"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgb(37 99 235)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="rgb(37 99 235)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(37 99 235)" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Background line */}
        <line
          x1="10"
          y1="0"
          x2="10"
          y2="40"
          stroke="url(#connector-gradient-v)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Animated dashes */}
        <motion.line
          x1="10"
          y1="0"
          x2="10"
          y2="40"
          stroke="rgb(37 99 235)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 8"
          initial={{ strokeDashoffset: 0 }}
          animate={
            isAnimating
              ? {
                  strokeDashoffset: direction === "forward" ? [0, -14] : [-14, 0],
                }
              : { strokeDashoffset: 0 }
          }
          transition={{
            duration: 1,
            ease: "linear",
            repeat: isAnimating ? Infinity : 0,
          }}
        />

        {/* Arrow head */}
        <motion.polygon
          points="5,32 10,40 15,32"
          fill="rgb(37 99 235)"
          initial={{ opacity: 0.5 }}
          animate={isAnimating ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.5 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: isAnimating ? Infinity : 0,
          }}
        />
      </svg>
    </div>
  )
}

export type { WorkflowConnectorProps }
