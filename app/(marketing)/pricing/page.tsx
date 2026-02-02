import { Metadata } from "next"

import { FadeIn } from "@/components/fade-in"

import { MarketingPricing } from "../marketing-pricing"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Lyfe AI pricing for healthcare providers. Free for patients, flexible plans for practices. HIPAA compliant medical records aggregation and EMR integration.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Lyfe AI",
    description:
      "Lyfe AI pricing for healthcare providers. Free for patients, flexible plans for practices.",
  },
}

// Prices are fresh for one hour max
export const revalidate = 3600

export default async function PricingPage() {
  return (
    <div className="space-y-4">
      <FadeIn key="pricing">
        <MarketingPricing />
      </FadeIn>
    </div>
  )
}
