"use client"

import { useRef } from "react"
import {
  Check,
  Calendar,
  Users,
  RefreshCw,
  ShieldCheck,
  Headphones,
} from "lucide-react"
import { motion, useInView } from "motion/react"

import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"
import { Button } from "@/components/ui/button"
import { useRequestAccessModal } from "@/lib/context/request-access-modal-context"

const pricingFeatures = [
  { text: "Unlimited record aggregation", icon: Check },
  { text: "Bi-directional EMR sync", icon: RefreshCw },
  { text: "Clinical Timeline View", icon: Calendar },
  { text: "HIPAA compliant & FHIR R4", icon: ShieldCheck },
  { text: "Dedicated onboarding support", icon: Headphones },
  { text: "Up to 10 provider accounts", icon: Users },
]

export function ProviderPricing() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const { openModal } = useRequestAccessModal()

  return (
    <section ref={containerRef} id="pricing">
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
              Simple, Transparent Pricing
            </GradientHeading>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              One plan. Complete access. No hidden fees.
            </p>
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative bg-card border border-border/50 p-8 md:p-10 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-shadow duration-200 overflow-hidden">
              {/* Popular badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-blue-500/10 text-blue-600 dark:text-blue-500 px-3 py-1 text-xs font-medium">
                  Most Popular
                </div>
              </div>

              {/* Price Display */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-bold text-foreground">
                    $1,500
                  </span>
                  <span className="text-muted-foreground text-lg">/month</span>
                </div>
                <p className="text-muted-foreground mt-2">
                  per 10 provider accounts
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {pricingFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                    }
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-blue-600 dark:text-blue-500">
                      <feature.icon className="size-4" strokeWidth={2} />
                    </div>
                    <span className="text-foreground/80">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button
                  size="lg"
                  onClick={() => openModal("provider")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
                >
                  Request Access
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => openModal("provider")}
                  className="w-full border-blue-600/30 text-blue-600 dark:text-blue-500 hover:bg-blue-500/10"
                >
                  Start 90-Day Pilot
                </Button>
              </div>

              {/* Subtle bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
            </div>

            {/* Custom Pricing Note */}
            <motion.p
              className="text-center text-sm text-muted-foreground mt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              Need more than 10 providers?{" "}
              <a
                href="mailto:hello@lyfe.ai"
                className="text-blue-600 dark:text-blue-500 hover:underline font-medium"
              >
                Contact us for custom pricing
              </a>
            </motion.p>
          </motion.div>
        </div>
      </SectionCard>
    </section>
  )
}
