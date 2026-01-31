"use client"

import { useReducedMotion as useMotionReducedMotion } from "motion/react"

/**
 * Custom hook to detect user's motion preference.
 * Wraps Framer Motion's useReducedMotion for consistent usage across the app.
 *
 * Returns true when:
 * - User has enabled "Reduce Motion" in their OS accessibility settings
 * - Browser supports prefers-reduced-motion media query and it's set to "reduce"
 *
 * Usage:
 * ```tsx
 * const shouldReduceMotion = useReducedMotion()
 *
 * // Conditionally apply animations
 * const animation = shouldReduceMotion
 *   ? { opacity: 1 }
 *   : { opacity: 1, y: 0 }
 * ```
 */
export function useReducedMotion(): boolean {
  // Framer Motion's useReducedMotion returns null during SSR
  // We default to false (allow animations) when null
  const prefersReducedMotion = useMotionReducedMotion()
  return prefersReducedMotion ?? false
}

/**
 * Get animation variants that respect reduced motion preference.
 * Returns simplified animations when reduced motion is preferred.
 *
 * @param shouldReduceMotion - The result of useReducedMotion()
 * @param normalVariants - Standard animation variants
 * @param reducedVariants - Simplified variants for reduced motion (defaults to instant opacity changes)
 */
export function getMotionSafeVariants<T extends Record<string, unknown>>(
  shouldReduceMotion: boolean,
  normalVariants: T,
  reducedVariants?: Partial<T>
): T {
  if (!shouldReduceMotion) return normalVariants

  // Default reduced variants: instant opacity transitions, no movement
  const defaultReducedVariants: Record<string, unknown> = {}

  for (const key of Object.keys(normalVariants)) {
    const variant = normalVariants[key]
    if (typeof variant === "object" && variant !== null) {
      // Remove y, x, scale transforms; keep opacity but make it instant
      const { y, x, scale, transition, ...rest } = variant as Record<string, unknown>
      defaultReducedVariants[key] = {
        ...rest,
        transition: { duration: 0 },
      }
    } else {
      defaultReducedVariants[key] = variant
    }
  }

  return { ...normalVariants, ...defaultReducedVariants, ...reducedVariants } as T
}

/**
 * Get a transition config that respects reduced motion preference.
 * Returns instant transition when reduced motion is preferred.
 */
export function getMotionSafeTransition(
  shouldReduceMotion: boolean,
  normalTransition: Record<string, unknown>
): Record<string, unknown> {
  if (!shouldReduceMotion) return normalTransition

  return {
    duration: 0,
    delay: 0,
  }
}
