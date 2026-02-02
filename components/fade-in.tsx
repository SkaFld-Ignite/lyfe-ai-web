"use client"

import { ReactNode, useEffect, useState } from "react"
import { motion, useReducedMotion } from "motion/react"

import { useIsMobile } from "@/hooks/use-mobile"

interface FadeInProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
  children?: ReactNode
}

export function FadeIn({
  children,
  className,
  ...motionProps
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()
  const isMobile = useIsMobile()
  const [isClient, setIsClient] = useState(false)

  // Detect client-side hydration
  useEffect(() => {
    setIsClient(true)
  }, [])

  const viewport = {
    once: true,
    margin: isMobile ? "0px 0px -100px" : "0px 0px -200px",
  }

  // SEO Fix: On server/initial render, content is fully visible (no animation).
  // On client after hydration, enable scroll-triggered animations.
  // This ensures Googlebot sees all content while users get the animation.
  if (!isClient) {
    // SSR: Render visible content, no animation
    return <div className={className}>{children}</div>
  }

  // Client: Enable scroll-triggered animation
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
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}
