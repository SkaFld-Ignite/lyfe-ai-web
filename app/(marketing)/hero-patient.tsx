"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, BookOpen } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

import { useIsMobile } from "@/hooks/use-mobile"
import { GlowEffect } from "@/components/bg-glow"
import { Magnetic } from "@/components/magnetic"
import { useRequestAccessModal } from "@/lib/context/request-access-modal-context"

export function PatientHero() {
  const isMobile = useIsMobile()
  const { openModal } = useRequestAccessModal()
  const shouldReduceMotion = useReducedMotion()
  const [isClient, setIsClient] = useState(false)

  // Detect client-side hydration for animations
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Stagger animation values - disabled when reduced motion preferred
  const baseDelay = shouldReduceMotion ? 0 : isMobile ? 0.1 : 0.2
  const staggerDelay = shouldReduceMotion ? 0 : 0.15
  const duration = shouldReduceMotion ? 0 : isMobile ? 0.3 : 0.5
  const yOffset = shouldReduceMotion ? 0 : 20

  // Animation config: SSR renders visible, client enables animations
  // Using key to force re-mount and trigger animation when client hydrates
  const animationKey = isClient ? "animated" : "static"

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Left Column - Text Content */}
      <div className="flex flex-col space-y-6 text-center lg:text-left">
        {/* Headline */}
        <motion.h1
          key={`headline-${animationKey}`}
          initial={isClient ? { opacity: 0, y: yOffset } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration,
            delay: baseDelay,
            ease: "easeOut"
          }}
          className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground"
        >
          Your Health Records.{" "}
          <span className="text-blue-600 dark:text-blue-500">
            Finally In One Place.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          key={`subheadline-${animationKey}`}
          initial={isClient ? { opacity: 0, y: yOffset } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration,
            delay: baseDelay + staggerDelay,
            ease: "easeOut"
          }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 lg:max-w-none"
        >
          Access, understand, and share your complete medical history—free.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          key={`cta-${animationKey}`}
          initial={isClient ? { opacity: 0, y: yOffset } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration,
            delay: baseDelay + staggerDelay * 2,
            ease: "easeOut"
          }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start lg:items-start gap-4 pt-2"
        >
          {/* Primary CTA - Request Access */}
          <div className="relative">
            <GlowEffect
              scale={0.9}
              mode="rotate"
              blur="strongest"
              colors={["#2563eb", "#1d4ed8", "#1e40af", "#3b82f6", "#2563eb"]}
              className="absolute inset-0"
            />
            <Magnetic>
              <button
                type="button"
                onClick={() => openModal("patient")}
                className="relative z-10 inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-500/25"
              >
                Request Access
                <ArrowRight className="size-5" />
              </button>
            </Magnetic>
          </div>

          {/* Secondary CTA - Learn How It Works */}
          <Magnetic>
            <button
              type="button"
              onClick={() => {
                const section = document.getElementById("how-it-works-detail")
                section?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-foreground bg-secondary hover:bg-secondary/80 transition-colors duration-200 border border-border"
            >
              <BookOpen className="size-5" />
              Learn How It Works
            </button>
          </Magnetic>
        </motion.div>
      </div>

      {/* Right Column - Mobile App Mockup */}
      <motion.div
        key={`mockup-${animationKey}`}
        initial={isClient ? { opacity: 0, x: 30 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: duration * 1.2,
          delay: baseDelay + staggerDelay,
          ease: "easeOut"
        }}
        className="relative flex justify-center"
      >
        {/* Glow effect behind the mockup - hidden on mobile to prevent dark overlay */}
        <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full scale-75 hidden lg:block" />
        <Image
          src="/images/brand/mobile-app-display.png"
          alt="Lyfe AI mobile app showing health timeline"
          width={800}
          height={715}
          className="relative w-full max-w-md h-auto drop-shadow-2xl"
          priority
        />
      </motion.div>
    </div>
  )
}
