"use client"

import { motion, AnimatePresence } from "motion/react"

import { useAudience } from "@/lib/context/audience-context"
import { ProviderFeatures } from "./features-provider"
import { PatientFeatures } from "./features-patient"

export default function FeaturesSection() {
  const { audience } = useAudience()

  return (
    <section id="features" className="relative">
      <AnimatePresence mode="wait">
        {audience === "provider" ? (
          <motion.div
            key="provider-features"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            aria-labelledby="provider-features-content"
          >
            <ProviderFeatures />
          </motion.div>
        ) : (
          <motion.div
            key="patient-features"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            aria-labelledby="patient-features-content"
          >
            <PatientFeatures />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
