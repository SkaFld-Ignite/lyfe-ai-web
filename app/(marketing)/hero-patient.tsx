"use client"

import { ArrowRight, BookOpen } from "lucide-react"
import { motion } from "motion/react"

import { useIsMobile } from "@/hooks/use-mobile"
import { GlowEffect } from "@/components/bg-glow"
import { Magnetic } from "@/components/magnetic"

export function PatientHero() {
  const isMobile = useIsMobile()

  // Stagger animation values - same as ProviderHero
  const baseDelay = isMobile ? 0.1 : 0.2
  const staggerDelay = 0.15

  return (
    <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: isMobile ? 0.3 : 0.5,
          delay: baseDelay,
          ease: "easeOut"
        }}
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground max-w-4xl"
      >
        Your Health Records.{" "}
        <span className="text-emerald-600 dark:text-emerald-500">
          Finally In One Place.
        </span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: isMobile ? 0.3 : 0.5,
          delay: baseDelay + staggerDelay,
          ease: "easeOut"
        }}
        className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
      >
        Access, understand, and share your complete medical history—free.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: isMobile ? 0.3 : 0.5,
          delay: baseDelay + staggerDelay * 2,
          ease: "easeOut"
        }}
        className="flex flex-col sm:flex-row items-center gap-4 pt-4"
      >
        {/* Primary CTA - Request Access */}
        <div className="relative">
          <GlowEffect
            scale={0.9}
            mode="rotate"
            blur="strongest"
            colors={["#10b981", "#059669", "#047857", "#34d399", "#10b981"]}
            className="absolute inset-0"
          />
          <Magnetic>
            <button
              type="button"
              className="relative z-10 inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200 shadow-lg shadow-emerald-500/25"
            >
              Request Access
              <ArrowRight className="size-5" />
            </button>
          </Magnetic>
        </div>

        {/* Secondary CTA - Learn How It Works */}
        <Magnetic>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-foreground bg-secondary hover:bg-secondary/80 transition-colors duration-200 border border-border"
          >
            <BookOpen className="size-5" />
            Learn How It Works
          </button>
        </Magnetic>
      </motion.div>
    </div>
  )
}
