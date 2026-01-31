"use client"

import { useRef } from "react"
import { FolderOpen, Brain, Share2, Gift } from "lucide-react"
import { motion, useInView } from "motion/react"

import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"

const patientFeatures = [
  {
    title: "All Your Records",
    description:
      "Every doctor, hospital, and lab in one place. No more hunting through filing cabinets or patient portals.",
    icon: FolderOpen,
  },
  {
    title: "Understand Your Health",
    description:
      "AI-powered summaries explain your records in plain language. Know what matters without medical jargon.",
    icon: Brain,
  },
  {
    title: "Share Easily",
    description:
      "Send your complete history to any provider instantly. No faxes, no paperwork, no waiting.",
    icon: Share2,
  },
  {
    title: "Always Free",
    description:
      "No cost, no catch. Your health data belongs to you—we just make it accessible.",
    icon: Gift,
  },
]

export function PatientFeatures() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section ref={containerRef}>
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
            <GradientHeading
              size="lg"
              weight="bold"
              className="max-w-3xl mx-auto"
            >
              Your Health, Your Way
            </GradientHeading>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take control of your medical history with tools built for real
              people.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {patientFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  },
                }}
                className="group relative bg-card border border-border/50 p-6 shadow-sm hover:shadow-lg hover:shadow-emerald-500/10 transition-shadow duration-200"
              >
                {/* Icon Container */}
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 group-hover:bg-emerald-500/20 transition-colors duration-200">
                    <feature.icon className="size-6" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionCard>
    </section>
  )
}
