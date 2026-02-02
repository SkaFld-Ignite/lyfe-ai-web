"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"

export type Audience = "provider" | "patient"

type AudienceContextProps = {
  audience: Audience
  setAudience: (audience: Audience) => void
}

const AudienceContext = React.createContext<AudienceContextProps | null>(null)

export function useAudience() {
  const context = React.useContext(AudienceContext)
  if (!context) {
    throw new Error("useAudience must be used within an AudienceProvider.")
  }
  return context
}

export function AudienceProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()

  // Determine audience from route: /patients = patient, everything else = provider
  // This works on both server and client with Next.js App Router
  const audienceFromRoute: Audience = pathname === "/patients" ? "patient" : "provider"

  // Initialize state from route for correct SSR
  const [audience, setAudienceState] = React.useState<Audience>(audienceFromRoute)

  // Sync state with route on route changes (for client-side navigation)
  React.useEffect(() => {
    setAudienceState(audienceFromRoute)
  }, [audienceFromRoute])

  // Navigate to the appropriate route when audience changes
  const setAudience = React.useCallback((newAudience: Audience) => {
    const targetPath = newAudience === "patient" ? "/patients" : "/"
    if (pathname !== targetPath) {
      router.push(targetPath)
    }
    setAudienceState(newAudience)
  }, [pathname, router])

  const value = React.useMemo(
    () => ({
      audience,
      setAudience,
    }),
    [audience, setAudience]
  )

  return (
    <AudienceContext.Provider value={value}>
      {children}
    </AudienceContext.Provider>
  )
}
