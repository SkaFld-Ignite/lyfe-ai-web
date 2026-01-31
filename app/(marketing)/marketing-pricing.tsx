"use client"

import { motion, AnimatePresence } from "motion/react"

import { useAudience } from "@/lib/context/audience-context"
import { ProviderPricing } from "./pricing-provider"

export function MarketingPricing() {
  const { audience } = useAudience()

  return (
    <AnimatePresence mode="wait">
      {audience === "provider" && (
        <motion.div
          key="provider-pricing"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: 1,
            height: "auto",
            transition: {
              height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.3, delay: 0.1, ease: "easeOut" }
            }
          }}
          exit={{
            opacity: 0,
            height: 0,
            transition: {
              opacity: { duration: 0.2, ease: "easeIn" },
              height: { duration: 0.3, delay: 0.1, ease: [0.4, 0, 0.2, 1] }
            }
          }}
          className="overflow-hidden"
        >
          <ProviderPricing />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
