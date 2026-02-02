"use client"

import { motion, AnimatePresence, useReducedMotion } from "motion/react"

import { useAudience } from "@/lib/context/audience-context"
import { AudienceToggle } from "@/components/audience-toggle"
import { ProviderHero } from "./hero-provider"
import { PatientHero } from "./hero-patient"

export function LandingHeroSection() {
  const { audience } = useAudience()
  const shouldReduceMotion = useReducedMotion()

  // Animation values - reduced when user prefers reduced motion
  const yOffset = shouldReduceMotion ? 0 : 10
  const duration = shouldReduceMotion ? 0 : 0.3

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-start pb-12"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-full h-32 md:h-32 lg:h-[130px] shrink-0" aria-hidden="true" />
      <div className="container mx-auto px-4 max-w-7xl py-8 md:py-12">
        {/* Audience Toggle - initial={false} prevents opacity:0 on first render for SEO */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, ease: "easeOut" }}
          className="flex justify-center mb-8 md:mb-12"
        >
          <AudienceToggle />
        </motion.div>

        {/* Hero Content with Crossfade Animation */}
        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            {audience === "provider" ? (
              <motion.div
                key="provider-hero"
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -yOffset }}
                transition={{ duration, ease: "easeInOut" }}
                aria-labelledby="provider-content"
              >
                <ProviderHero />
              </motion.div>
            ) : (
              <motion.div
                key="patient-hero"
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -yOffset }}
                transition={{ duration, ease: "easeInOut" }}
                aria-labelledby="patient-content"
              >
                <PatientHero />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
