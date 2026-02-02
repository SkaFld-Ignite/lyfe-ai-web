"use client"

import { useRef } from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import {
  Link2,
  Database,
  Layers,
  ArrowLeftRight,
  Share2,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { useAudience } from "@/lib/context/audience-context"
import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"

interface HowItWorksStep {
  id: string
  number: number
  title: string
  providerDescription: string
  patientDescription: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  // Step 4 has audience-specific title and icon
  providerTitle?: string
  patientTitle?: string
  patientIcon?: React.ComponentType<{ className?: string; strokeWidth?: number }>
}

const steps: HowItWorksStep[] = [
  {
    id: "connect",
    number: 1,
    title: "Connect",
    providerDescription:
      "Link your EMR system with a few clicks. Our FHIR R4 integration works with all major platforms—Epic, Cerner, Allscripts, and more.",
    patientDescription:
      "Create your free account and verify your identity. We use bank-level security to protect your information.",
    icon: Link2,
  },
  {
    id: "aggregate",
    number: 2,
    title: "Aggregate",
    providerDescription:
      "Request patient records from our network covering 95% of US healthcare providers. Records arrive automatically—no faxes, no phone calls.",
    patientDescription:
      "We pull your records from every doctor, hospital, and lab you've visited. One request brings everything together.",
    icon: Database,
  },
  {
    id: "unify",
    number: 3,
    title: "Unify",
    providerDescription:
      "AI organizes fragmented data into a searchable Clinical Timeline. Filter by date, condition, or provider—find anything in seconds.",
    patientDescription:
      "AI creates your personal health timeline with clear summaries. Understand your health history in plain language.",
    icon: Layers,
  },
  {
    id: "sync-share",
    number: 4,
    title: "Sync",
    providerTitle: "Sync",
    patientTitle: "Share",
    providerDescription:
      "Write curated clinical data back to your EMR. Bi-directional sync keeps patient records current across systems.",
    patientDescription:
      "Share your complete history with any doctor instantly. No more filling out forms or tracking down old records.",
    icon: ArrowLeftRight,
    patientIcon: Share2,
  },
]

export function HowItWorks() {
  const { audience } = useAudience()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section ref={containerRef} id="how-it-works-detail">
      <SectionCard
        className="md:container mx-auto max-w-7xl"
        innerClassName="py-12 md:py-20"
      >
        <div className="space-y-12 md:space-y-16">
          {/* Section Header */}
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={audience}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <GradientHeading
                  size="lg"
                  weight="bold"
                  className="max-w-3xl mx-auto"
                >
                  {audience === "provider"
                    ? "Get Started in Four Simple Steps"
                    : "Your Health Records in Four Easy Steps"}
                </GradientHeading>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
                  {audience === "provider"
                    ? "From setup to complete patient stories—we make it seamless."
                    : "From signup to total health clarity—it's easier than you think."}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Steps with Alternating Layout */}
          <motion.div
            className="space-y-8 md:space-y-0"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {steps.map((step, index) => (
              <HowItWorksStepRow
                key={step.id}
                step={step}
                index={index}
                audience={audience}
                isLast={index === steps.length - 1}
              />
            ))}
          </motion.div>
        </div>
      </SectionCard>
    </section>
  )
}

interface HowItWorksStepRowProps {
  step: HowItWorksStep
  index: number
  audience: "provider" | "patient"
  isLast: boolean
}

function HowItWorksStepRow({
  step,
  index,
  audience,
  isLast,
}: HowItWorksStepRowProps) {
  // Determine which icon, title, and description to use based on audience
  const Icon =
    audience === "patient" && step.patientIcon ? step.patientIcon : step.icon
  const title =
    audience === "provider"
      ? step.providerTitle || step.title
      : step.patientTitle || step.title
  const description =
    audience === "provider" ? step.providerDescription : step.patientDescription

  // Alternating layout: even index = icon left, odd index = icon right
  const isIconLeft = index % 2 === 0

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  }

  return (
    <motion.div variants={stepVariants} className="relative">
      {/* Desktop Layout - Alternating */}
      <div className="hidden md:block">
        <div
          className={cn(
            "flex items-center gap-8 lg:gap-16",
            isIconLeft ? "flex-row" : "flex-row-reverse"
          )}
        >
          {/* Icon Side */}
          <div className="flex-1 flex justify-center">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center relative overflow-hidden group">
                {/* Background gradient animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                {/* Icon */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${step.id}-${audience}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <Icon
                      className="w-12 h-12 lg:w-16 lg:h-16 text-blue-600 dark:text-blue-500"
                      strokeWidth={1.5}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Step Number Badge */}
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold shadow-lg">
                {step.number}
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${step.id}-${audience}-content`}
                initial={{ opacity: 0, x: isIconLeft ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isIconLeft ? -20 : 20 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "max-w-md",
                  isIconLeft ? "text-left" : "text-right ml-auto"
                )}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Animated Connector Line - Desktop */}
        {!isLast && (
          <div className="flex justify-center py-6">
            <motion.div
              className="relative w-px h-16 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={isIconLeft ? { opacity: 1 } : { opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {/* Static background line */}
              <div className="absolute inset-0 bg-blue-200 dark:bg-blue-800/30" />

              {/* Animated flowing line */}
              <motion.div
                className="absolute inset-0 w-full bg-gradient-to-b from-blue-500 via-blue-500 to-transparent"
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </div>
        )}
      </div>

      {/* Mobile Layout - Vertical */}
      <div className="md:hidden">
        <div className="flex gap-4">
          {/* Left side - Number and connector */}
          <div className="flex flex-col items-center">
            {/* Step Number */}
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">
              {step.number}
            </div>

            {/* Connector Line */}
            {!isLast && (
              <div className="flex-1 w-px bg-blue-200 dark:bg-blue-800/30 my-2 relative overflow-hidden min-h-[40px]">
                <motion.div
                  className="absolute inset-0 w-full bg-gradient-to-b from-blue-500 via-blue-500 to-transparent"
                  initial={{ y: "-100%" }}
                  animate={{ y: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            )}
          </div>

          {/* Right side - Content */}
          <div className="flex-1 pb-6">
            <div className="flex items-start gap-4 mb-3">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${step.id}-${audience}-mobile`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon
                      className="w-6 h-6 text-blue-600 dark:text-blue-500"
                      strokeWidth={1.5}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Title */}
              <AnimatePresence mode="wait">
                <motion.h3
                  key={`${step.id}-${audience}-title-mobile`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl font-bold text-foreground pt-2"
                >
                  {title}
                </motion.h3>
              </AnimatePresence>
            </div>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`${step.id}-${audience}-desc-mobile`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-muted-foreground leading-relaxed"
              >
                {description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export type { HowItWorksStep }
