"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"
import { useAudience } from "@/lib/context/audience-context"
import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"
import {
  FragmentedRecordsIcon,
  AiAggregationIcon,
  TimelineIcon,
  EmrSyncIcon,
  ShareWithDoctorsIcon,
} from "@/components/icons/workflow"

interface WorkflowStepData {
  id: string
  title: string
  providerTitle?: string // Override title for providers
  patientTitle?: string // Override title for patients
  providerDescription: string
  patientDescription: string
  providerHighlight?: string
  patientHighlight?: string
  icon: React.ComponentType<{ className?: string }>
  patientIcon?: React.ComponentType<{ className?: string }> // Alternative icon for patients
}

const workflowSteps: WorkflowStepData[] = [
  {
    id: "fragmented",
    title: "Fragmented Records",
    providerDescription:
      "Patient history scattered across hospitals, specialists, labs, and pharmacies. Hours wasted tracking down records before appointments.",
    patientDescription:
      "Your health records are scattered everywhere—different doctors, hospitals, and clinics. It's impossible to keep track.",
    providerHighlight: "The problem you face daily",
    patientHighlight: "Sound familiar?",
    icon: FragmentedRecordsIcon,
  },
  {
    id: "aggregation",
    title: "AI Aggregation",
    providerDescription:
      "Lyfe AI connects to 95% of US healthcare providers. One request pulls complete patient history automatically.",
    patientDescription:
      "We pull records from all your doctors, hospitals, and labs—bringing everything into one place automatically.",
    providerHighlight: "95% of US providers",
    patientHighlight: "One place for all records",
    icon: AiAggregationIcon,
  },
  {
    id: "timeline",
    title: "Clinical Timeline",
    providerDescription:
      "AI-organized timeline shows ER visits, medication changes, lab trends, and diagnoses—searchable and summarized.",
    patientDescription:
      "All your records organized in one searchable timeline. AI summaries help you understand your health in plain language.",
    providerHighlight: "Complete context at point of care",
    patientHighlight: "Understand your health",
    icon: TimelineIcon,
  },
  {
    id: "sync",
    title: "EMR Sync",
    providerTitle: "EMR Sync",
    patientTitle: "Share with Doctors",
    providerDescription:
      "Write curated data directly back to your EMR. No copy-paste, no duplicate entry. Bi-directional EMR sync keeps records current.",
    patientDescription:
      "Easy sharing with any doctor—send your complete history instantly. They get what they need, you save time.",
    providerHighlight: "Bi-directional EMR sync",
    patientHighlight: "Easy sharing",
    icon: EmrSyncIcon,
    patientIcon: ShareWithDoctorsIcon,
  },
]

export function ProductWorkflow() {
  const { audience } = useAudience()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const [activeStep, setActiveStep] = useState<string | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            staggerChildren: 0.2,
            delayChildren: 0.1,
          },
    },
  }

  const stepVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            type: "spring",
            stiffness: 100,
            damping: 15,
          },
    },
  }

  const connectorVariants = {
    hidden: { scaleX: shouldReduceMotion ? 1 : 0 },
    visible: {
      scaleX: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            duration: 0.5,
            ease: "easeOut",
          },
    },
  }

  return (
    <section ref={containerRef} id="how-it-works">
      <SectionCard
        className="md:container mx-auto max-w-7xl"
        innerClassName="py-12 md:py-20"
      >
        <div className="space-y-12">
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
                    ? "How Lyfe AI Works for Your Practice"
                    : "How Lyfe AI Brings Your Records Together"}
                </GradientHeading>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
                  {audience === "provider"
                    ? "From fragmented records to complete patient stories—automatically."
                    : "From scattered health records to one complete picture—free."}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Workflow Steps - Desktop (Horizontal) */}
          <motion.div
            className="hidden lg:block"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="relative">
              {/* Connector Line */}
              <motion.div
                className="absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-emerald-500/30 via-emerald-500 to-emerald-500/30"
                variants={connectorVariants}
                style={{ originX: 0 }}
              />

              {/* Steps Grid */}
              <div className="grid grid-cols-4 gap-6">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    variants={stepVariants}
                    className="relative"
                  >
                    <WorkflowStepCard
                      step={step}
                      index={index}
                      audience={audience}
                      isActive={activeStep === step.id}
                      onClick={() =>
                        setActiveStep(activeStep === step.id ? null : step.id)
                      }
                      reduceMotion={shouldReduceMotion ?? false}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Workflow Steps - Mobile (Vertical) */}
          <motion.div
            className="lg:hidden"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="relative space-y-6">
              {/* Vertical Connector Line */}
              <motion.div
                className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-emerald-500/30 via-emerald-500 to-emerald-500/30"
                variants={{
                  hidden: { scaleY: shouldReduceMotion ? 1 : 0 },
                  visible: {
                    scaleY: 1,
                    transition: shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.8, ease: "easeOut" },
                  },
                }}
                style={{ originY: 0 }}
              />

              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  variants={stepVariants}
                  className="relative pl-20"
                >
                  {/* Step Number Circle */}
                  <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-semibold z-10">
                    {index + 1}
                  </div>

                  <WorkflowStepCard
                    step={step}
                    index={index}
                    audience={audience}
                    isActive={activeStep === step.id}
                    onClick={() =>
                      setActiveStep(activeStep === step.id ? null : step.id)
                    }
                    variant="mobile"
                    reduceMotion={shouldReduceMotion ?? false}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionCard>
    </section>
  )
}

interface WorkflowStepCardProps {
  step: WorkflowStepData
  index: number
  audience: "provider" | "patient"
  isActive: boolean
  onClick: () => void
  variant?: "desktop" | "mobile"
  reduceMotion?: boolean
}

function WorkflowStepCard({
  step,
  index,
  audience,
  isActive,
  onClick,
  variant = "desktop",
  reduceMotion = false,
}: WorkflowStepCardProps) {
  // Use audience-specific icon if available, otherwise default icon
  const Icon =
    audience === "patient" && step.patientIcon ? step.patientIcon : step.icon
  // Use audience-specific title if available, otherwise default title
  const title =
    audience === "provider"
      ? step.providerTitle || step.title
      : step.patientTitle || step.title
  const description =
    audience === "provider" ? step.providerDescription : step.patientDescription
  const highlight =
    audience === "provider" ? step.providerHighlight : step.patientHighlight

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "w-full text-left relative bg-card border border-border/50 p-6 shadow-sm transition-all duration-300 cursor-pointer group",
        isActive
          ? "border-emerald-500/50 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-lg shadow-emerald-500/10"
          : "hover:border-emerald-500/30 hover:shadow-md"
      )}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Step Number Badge - Desktop only */}
      {variant === "desktop" && (
        <div
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold transition-colors duration-300",
            isActive
              ? "bg-emerald-500 text-white"
              : "bg-muted text-muted-foreground group-hover:bg-emerald-500/20"
          )}
        >
          {index + 1}
        </div>
      )}

      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div
          className={cn(
            "p-3 rounded-xl transition-colors duration-300",
            isActive
              ? "bg-emerald-100 dark:bg-emerald-900/30"
              : "bg-muted/50 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20"
          )}
        >
          <Icon className="w-12 h-12" />
        </div>
      </div>

      {/* Title - with animation for audience changes */}
      <AnimatePresence mode="wait">
        <motion.h3
          key={`${step.id}-${audience}-title`}
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -5 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          className={cn(
            "text-lg font-semibold text-center mb-2 transition-colors duration-300",
            isActive
              ? "text-emerald-700 dark:text-emerald-300"
              : "text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
          )}
        >
          {title}
        </motion.h3>
      </AnimatePresence>

      {/* Highlight Badge */}
      {highlight && (
        <AnimatePresence mode="wait">
          <motion.div
            key={`${step.id}-${audience}`}
            initial={{ opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0.95 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="flex justify-center mb-3"
          >
            <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
              {highlight}
            </span>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Description */}
      <AnimatePresence mode="wait">
        <motion.p
          key={`${step.id}-${audience}-desc`}
          initial={{ opacity: reduceMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: reduceMotion ? 1 : 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          className="text-sm text-muted-foreground text-center leading-relaxed"
        >
          {description}
        </motion.p>
      </AnimatePresence>

      {/* Expand indicator - pauses when reduced motion is enabled */}
      <div className="mt-4 flex justify-center">
        <motion.div
          className={cn(
            "w-1.5 h-1.5 rounded-full transition-colors duration-300",
            isActive ? "bg-emerald-500" : "bg-muted-foreground/30"
          )}
          animate={{
            scale: isActive && !reduceMotion ? [1, 1.2, 1] : 1,
          }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: 1,
                  repeat: isActive ? Infinity : 0,
                  repeatType: "loop",
                }
          }
        />
      </div>

      {/* Bottom accent line */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 transition-transform duration-300 origin-left",
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        )}
      />
    </motion.button>
  )
}

export type { WorkflowStepData }
