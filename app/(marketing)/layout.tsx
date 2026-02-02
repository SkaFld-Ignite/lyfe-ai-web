import { MarketingFooter } from "@/app/(marketing)/marketing-footer"
import { SiteHeader } from "@/app/(marketing)/marketing-header"
import { MarketingProviders } from "@/app/(marketing)/marketing-providers"
import { HomePageSchema } from "@/components/structured-data"

// Metadata is handled by root layout and individual pages
// Removed duplicate title to allow template to work correctly

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <MarketingProviders>
      <HomePageSchema />
      <main className="bg-background min-h-screen">
        <SiteHeader />
        {children}
        <div className="container mx-auto max-w-7xl px-4">
          <MarketingFooter />
        </div>
      </main>
    </MarketingProviders>
  )
}
