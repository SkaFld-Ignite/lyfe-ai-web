"use client"

import { useRef } from "react"
import {
  FileSearch,
  History,
  RefreshCw,
  ShieldCheck,
} from "lucide-react"
import { motion, useInView } from "motion/react"

import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"

const providerFeatures = [
  {
    title: "Stop Chasing Records",
    description:
      "Aggregate from 95% of US healthcare providers. One request, complete history.",
    icon: FileSearch,
  },
  {
    title: "Complete Context",
    description:
      "ER visits, medication changes, lab results—all in a searchable timeline before the appointment.",
    icon: History,
  },
  {
    title: "Bi-directional Sync",
    description:
      "Write curated data back to your EMR. No copy-paste, no duplicate entry.",
    icon: RefreshCw,
  },
  {
    title: "HIPAA Compliant",
    description:
      "Enterprise-grade security with FHIR R4 compliance. Your data stays protected.",
    icon: ShieldCheck,
  },
]

export function ProviderFeatures() {
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
        innerClassName="py-16 md:py-24 px-6 md:px-12 lg:px-16"
      >
        <div className="space-y-16">
          {/* Section Header */}
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <GradientHeading
              size="lg"
              weight="bold"
              className="max-w-3xl mx-auto"
            >
              Everything You Need for Better Patient Care
            </GradientHeading>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Purpose-built for healthcare providers who want the full picture.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {providerFeatures.map((feature, index) => (
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
                className="group relative bg-card border border-border/50 p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-shadow duration-200"
              >
                {/* Icon Container */}
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 text-blue-600 dark:text-blue-500 group-hover:bg-blue-500/20 transition-colors duration-200">
                    <feature.icon className="size-6" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionCard>
    </section>
  )
}
