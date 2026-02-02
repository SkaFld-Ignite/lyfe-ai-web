"use client"

import { motion, useReducedMotion } from "motion/react"

import { useIsMobile } from "@/hooks/use-mobile"

export function FadeIn(
  props: React.ComponentPropsWithoutRef<typeof motion.div>
) {
  const shouldReduceMotion = useReducedMotion()
  const isMobile = useIsMobile()

  const viewport = {
    once: true,
    margin: isMobile ? "0px 0px -100px" : "0px 0px -200px",
  }

  // Use initial={false} so content is visible on first render for SEO (Googlebot).
  // The whileInView animation will still work for users who scroll.
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: isMobile ? 0.5 : 0,
          y: shouldReduceMotion ? 0 : isMobile ? 4 : 24,
        },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: isMobile ? 0.35 : 0.5 }}
      initial={false}
      whileInView="visible"
      viewport={viewport}
      {...props}
    />
  )
}
