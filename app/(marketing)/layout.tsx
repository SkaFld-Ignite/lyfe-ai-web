import type { Metadata } from "next"

import { MarketingFooter } from "@/app/(marketing)/marketing-footer"
import { SiteHeader } from "@/app/(marketing)/marketing-header"
import { MarketingProviders } from "@/app/(marketing)/marketing-providers"

export const metadata: Metadata = {
  title: "Lyfe AI",
  description: "Complete Patient Stories Before They Walk In",
}

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <MarketingProviders>
      <main className="bg-background">
        <SiteHeader />
        <div className="container mx-auto max-w-7xl pt-1 md:pt-1 px-1">
          {children}
          <MarketingFooter />
        </div>
      </main>
    </MarketingProviders>
  )
}
