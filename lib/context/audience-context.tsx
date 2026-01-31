"use client"

import * as React from "react"

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
  const [audience, setAudienceState] = React.useState<Audience>("provider")
  const [isInitialized, setIsInitialized] = React.useState(false)

  // Read hash on initial load
  React.useEffect(() => {
    const hash = window.location.hash
    if (hash === "#patients") {
      setAudienceState("patient")
    } else if (hash === "#providers") {
      setAudienceState("provider")
    }
    setIsInitialized(true)
  }, [])

  // Sync with URL hash on change
  const setAudience = React.useCallback((newAudience: Audience) => {
    setAudienceState(newAudience)
    const newHash = newAudience === "patient" ? "#patients" : "#providers"
    window.history.replaceState(null, "", newHash)
  }, [])

  // Listen for hash changes (e.g., browser back/forward)
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === "#patients") {
        setAudienceState("patient")
      } else if (hash === "#providers") {
        setAudienceState("provider")
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const value = React.useMemo(
    () => ({
      audience,
      setAudience,
    }),
    [audience, setAudience]
  )

  // Prevent hydration mismatch by rendering consistent content until initialized
  if (!isInitialized) {
    return (
      <AudienceContext.Provider value={{ audience: "provider", setAudience }}>
        {children}
      </AudienceContext.Provider>
    )
  }

  return (
    <AudienceContext.Provider value={value}>
      {children}
    </AudienceContext.Provider>
  )
}
