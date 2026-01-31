"use client"

import { AudienceProvider } from "@/lib/context/audience-context"
import { RequestAccessModalProvider } from "@/lib/context/request-access-modal-context"
import { RequestAccessModalContainer } from "@/components/request-access-modal-container"

interface MarketingProvidersProps {
  children: React.ReactNode
}

export function MarketingProviders({ children }: MarketingProvidersProps) {
  return (
    <AudienceProvider>
      <RequestAccessModalProvider>
        {children}
        <RequestAccessModalContainer />
      </RequestAccessModalProvider>
    </AudienceProvider>
  )
}
