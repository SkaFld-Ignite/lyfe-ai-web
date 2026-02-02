"use client"

import { useState, useLayoutEffect } from "react"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import { motion, useReducedMotion, useAnimation } from "motion/react"

import { useIsMobile } from "@/hooks/use-mobile"
import { GlowEffect } from "@/components/bg-glow"
import { Magnetic } from "@/components/magnetic"
import { VideoModal } from "@/components/video-modal"
import { useRequestAccessModal } from "@/lib/context/request-access-modal-context"

// Video URL - Update this after uploading to Supabase Storage
const DEMO_VIDEO_URL = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL || ""

export function ProviderHero() {
  const isMobile = useIsMobile()
  const { openModal } = useRequestAccessModal()
  const shouldReduceMotion = useReducedMotion()
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  // Animation controls for each element
  const headlineControls = useAnimation()
  const subheadlineControls = useAnimation()
  const ctaControls = useAnimation()
  const mockupControls = useAnimation()

  // Animation values
  const duration = isMobile ? 0.3 : 0.5
  const yOffset = 20
  const staggerDelay = 0.15

  // useLayoutEffect runs synchronously before paint, avoiding the flash
  useLayoutEffect(() => {
    if (shouldReduceMotion) return

    // Set initial hidden state and animate in sequence
    const animate = async () => {
      // Set all to hidden state (happens before paint)
      headlineControls.set({ opacity: 0, y: yOffset })
      subheadlineControls.set({ opacity: 0, y: yOffset })
      ctaControls.set({ opacity: 0, y: yOffset })
      mockupControls.set({ opacity: 0, x: 30 })

      // Small delay to ensure Googlebot can capture (they get SSR HTML first)
      await new Promise(resolve => setTimeout(resolve, 50))

      // Animate in with stagger
      headlineControls.start({ opacity: 1, y: 0, transition: { duration, ease: "easeOut" } })

      await new Promise(resolve => setTimeout(resolve, staggerDelay * 1000))
      subheadlineControls.start({ opacity: 1, y: 0, transition: { duration, ease: "easeOut" } })
      mockupControls.start({ opacity: 1, x: 0, transition: { duration: duration * 1.2, ease: "easeOut" } })

      await new Promise(resolve => setTimeout(resolve, staggerDelay * 1000))
      ctaControls.start({ opacity: 1, y: 0, transition: { duration, ease: "easeOut" } })
    }

    animate()
  }, [shouldReduceMotion, headlineControls, subheadlineControls, ctaControls, mockupControls, duration, yOffset, staggerDelay])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Left Column - Text Content */}
      <div className="flex flex-col space-y-6 text-center lg:text-left">
        {/* Headline */}
        <motion.h1
          animate={headlineControls}
          className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground"
        >
          Complete Patient Stories.{" "}
          <span className="text-blue-600 dark:text-blue-500">
            Before They Walk In.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          animate={subheadlineControls}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 lg:max-w-none"
        >
          AI-powered platform that aggregates scattered medical records into one searchable timeline—and syncs back to your EMR.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          animate={ctaControls}
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
                onClick={() => openModal("provider")}
                className="relative z-10 inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-500/25"
              >
                Request Access
                <ArrowRight className="size-5" />
              </button>
            </Magnetic>
          </div>

          {/* Secondary CTA - Watch Demo */}
          <Magnetic>
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-foreground bg-secondary hover:bg-secondary/80 transition-colors duration-200 border border-border"
            >
              <Play className="size-5" />
              Watch Demo
            </button>
          </Magnetic>
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={DEMO_VIDEO_URL}
        title="Lyfe AI Platform Demo"
      />

      {/* Right Column - Device Mockup */}
      <motion.div
        animate={mockupControls}
        className="relative"
      >
        {/* Glow effect behind the mockup - hidden on mobile to prevent dark overlay */}
        <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full scale-90 hidden lg:block" />
        <Image
          src="/images/brand/macbook-display.png"
          alt="Lyfe AI dashboard showing patient timeline"
          width={1631}
          height={1076}
          className="relative w-full h-auto drop-shadow-2xl"
          priority
        />
      </motion.div>
    </div>
  )
}
