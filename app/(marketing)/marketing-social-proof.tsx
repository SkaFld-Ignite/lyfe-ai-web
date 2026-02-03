"use client"

import { useRef } from "react"
import Image from "next/image"
import {
  Building2,
  Heart,
  Stethoscope,
  UserCheck,
  FileCheck,
  Quote,
  Shield,
  Clock,
  Smartphone,
  Users,
} from "lucide-react"
import { motion, useInView, AnimatePresence } from "motion/react"

import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"
import { useAudience } from "@/lib/context/audience-context"

// Provider-focused practice placeholders
const providerPlaceholders = [
  {
    name: "Cardiology Associates",
    icon: Heart,
  },
  {
    name: "Primary Care Group",
    icon: Stethoscope,
  },
  {
    name: "Specialty Medical Center",
    icon: Building2,
  },
  {
    name: "Patient First Clinic",
    icon: UserCheck,
  },
]

// Patient-focused benefit highlights
const patientBenefits = [
  {
    name: "Always Free",
    icon: Heart,
  },
  {
    name: "Your Data, Your Control",
    icon: Shield,
  },
  {
    name: "Access Anytime",
    icon: Clock,
  },
  {
    name: "Works Everywhere",
    icon: Smartphone,
  },
]

const trustBadges = [
  {
    title: "HIPAA Compliant",
    description: "Enterprise-grade security and privacy compliance",
    icon: null,
    image: "/images/brand/hipaa-logo.svg",
  },
  {
    title: "FHIR R4 Compliant",
    description: "Interoperable with modern healthcare systems",
    icon: FileCheck,
    image: null,
  },
]

const patientTrustBadges = [
  {
    title: "HIPAA Compliant",
    description: "Bank-level security protects your data",
    icon: null,
    image: "/images/brand/hipaa-logo.svg",
  },
  {
    title: "You're In Control",
    description: "Share only what you want, when you want",
    icon: Users,
    image: null,
  },
]

const contentByAudience = {
  provider: {
    headline: "Designed for Modern Practices",
    subheadline: "Built from the ground up for healthcare providers who need the complete patient picture.",
    testimonial: {
      quote: "Every patient deserves a healthcare provider who knows their full story. We're building the platform that makes this possible—connecting the dots across every doctor, hospital, and lab visit so providers can focus on what matters: better care.",
      author: "Lyfe AI",
      title: "Our Mission",
    },
  },
  patient: {
    headline: "Your Records, One Destination",
    subheadline: "Thousands of patients are taking control of their health data. Here's why they trust us.",
    testimonial: {
      quote: "Your health story shouldn't be scattered across dozens of patient portals and filing cabinets. We're building a future where you own your complete medical history and can share it with any doctor, anywhere, instantly.",
      author: "Lyfe AI",
      title: "Our Promise",
    },
  },
}

export function MarketingSocialProof() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const { audience } = useAudience()

  const content = contentByAudience[audience]
  const placeholders = audience === "provider" ? providerPlaceholders : patientBenefits
  const badges = audience === "provider" ? trustBadges : patientTrustBadges

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section ref={containerRef} id="social-proof">
      <SectionCard
        className="md:container mx-auto max-w-7xl relative overflow-hidden"
        innerClassName="py-12 md:py-20"
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-sky-50/20 dark:from-blue-950/20 dark:via-transparent dark:to-sky-950/10 pointer-events-none" />

        <motion.div
          className="relative z-10 space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            className="text-center space-y-4"
            variants={itemVariants}
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
                  className="max-w-3xl mx-auto px-4"
                >
                  {content.headline}
                </GradientHeading>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
                  {content.subheadline}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Practice Logos / Patient Benefits */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              {placeholders.map((item, index) => (
                <motion.div
                  key={`${audience}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col items-center justify-center gap-3 p-6 bg-card/50 border border-border/30 hover:border-blue-500/30 hover:bg-card/80 transition-all duration-200 group"
                  whileHover={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400, damping: 25 },
                  }}
                >
                  <div className="w-14 h-14 bg-muted/50 group-hover:bg-blue-500/10 flex items-center justify-center transition-colors duration-200">
                    <item.icon className="size-7 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors duration-200" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200 text-center">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Trust Badges Row */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              {badges.map((badge, index) => (
                <motion.div
                  key={`${audience}-badge-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 px-6 bg-blue-500/5 border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-200"
                  whileHover={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400, damping: 25 },
                  }}
                >
                  <div className="w-12 h-12 bg-blue-500/10 flex items-center justify-center">
                    {badge.image ? (
                      <Image
                        src={badge.image}
                        alt={badge.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    ) : badge.icon ? (
                      <badge.icon className="size-6 text-blue-600 dark:text-blue-500" />
                    ) : null}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {badge.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {badge.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Testimonial Quote */}
          <motion.div
            className="max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <div className="relative bg-card/50 border border-border/50 p-8 md:p-12">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-blue-500 flex items-center justify-center">
                <Quote className="size-4 text-white" />
              </div>

              {/* Quote Content */}
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={audience}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed italic">
                    &ldquo;{content.testimonial.quote}&rdquo;
                  </p>
                  <footer className="flex items-center gap-4">
                    {/* Avatar Placeholder */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
                      {content.testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <cite className="not-italic">
                        <span className="font-semibold text-foreground block">
                          {content.testimonial.author}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {content.testimonial.title}
                        </span>
                      </cite>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </SectionCard>
    </section>
  )
}
