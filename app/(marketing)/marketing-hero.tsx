"use client"

import { motion, AnimatePresence } from "motion/react"

import { useAudience } from "@/lib/context/audience-context"
import { AudienceToggle } from "@/components/audience-toggle"
import { ProviderHero } from "./hero-provider"
import { PatientHero } from "./hero-patient"

export function LandingHeroSection() {
  const { audience } = useAudience()

  return (
    <section id="hero" className="relative w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Audience Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex justify-center mb-8 md:mb-12"
        >
          <AudienceToggle />
        </motion.div>

        {/* Hero Content with Crossfade Animation */}
        <div className="relative min-h-[400px] md:min-h-[450px]">
          <AnimatePresence mode="wait">
            {audience === "provider" ? (
              <motion.div
                key="provider-hero"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                aria-labelledby="provider-content"
              >
                <ProviderHero />
              </motion.div>
            ) : (
              <motion.div
                key="patient-hero"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
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
