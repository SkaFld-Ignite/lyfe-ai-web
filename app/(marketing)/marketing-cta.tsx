"use client"

import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

import { GlowEffect } from "@/components/bg-glow"
import { GradientHeading } from "@/components/gradient-heading"
import { Magnetic } from "@/components/magnetic"
import { SectionCard } from "@/components/section-card"
import { useAudience } from "@/lib/context/audience-context"
import { useRequestAccessModal } from "@/lib/context/request-access-modal-context"

const contentByAudience = {
  provider: {
    headline: "Ready to stop chasing records?",
    subheadline:
      "Join the specialty practices that have transformed their patient intake with complete medical histories.",
    cta: "Request Access",
  },
  patient: {
    headline: "Ready to own your health data?",
    subheadline:
      "Get your complete medical history in one place—free. Share it with any doctor, anytime.",
    cta: "Get Started Free",
  },
}

export function MarketingCTA() {
  const { audience } = useAudience()
  const { openModal } = useRequestAccessModal()
  const content = contentByAudience[audience]

  return (
    <SectionCard
      className="md:container mx-auto max-w-7xl"
      innerClassName="pt-6 pb-4"
    >
      <div className="flex flex-col md:items-center justify-center gap-8 text-left md:text-center py-8 md:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col md:items-center gap-6"
          >
            <GradientHeading
              size="xxl"
              weight="base"
              className="max-w-2xl"
              innerClassName="lg:leading-[4.5rem] text-left md:text-center"
            >
              {content.headline}
            </GradientHeading>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl text-pretty">
              {content.subheadline}
            </p>
          </motion.div>
        </AnimatePresence>

        <div>
          <div className="relative mt-4">
            <GlowEffect
              scale={0.8}
              blur="strongest"
              colors={[
                "#2563eb",
                "#1d4ed8",
                "#1e40af",
                "#3b82f6",
                "#2563eb",
              ]}
              className="absolute inset-0 px-6 py-3.5 md:py-4.5 md:px-9"
            />
            <Magnetic>
              <button
                onClick={() => openModal(audience)}
                className="w-full relative z-10 sm:w-auto inline-flex items-center justify-center px-6 py-3.5 md:py-4.5 md:px-9 text-xl md:text-2xl tracking-tight text-white shadow-elevation-light dark:shadow-elevation-dark bg-blue-600 hover:bg-blue-700 transition-all duration-200 rounded-md"
              >
                <span className="flex items-center gap-2">
                  {content.cta} <ArrowRight className="size-5 md:size-6" />
                </span>
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </SectionCard>
  )
}
