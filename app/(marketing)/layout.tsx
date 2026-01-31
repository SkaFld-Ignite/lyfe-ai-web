import type { Metadata } from "next"

import { MarketingFooter } from "@/app/(marketing)/marketing-footer"
import { SiteHeader } from "@/app/(marketing)/marketing-header"
import { AudienceProvider } from "@/lib/context/audience-context"

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
    <AudienceProvider>
      <main className="bg-black md:bg-background ">
        <SiteHeader />
        <div className="container mx-auto max-w-7xl pt-1 md:pt-1 px-1">
          {children}
          <MarketingFooter />
        </div>
      </main>
    </AudienceProvider>
  )
}
