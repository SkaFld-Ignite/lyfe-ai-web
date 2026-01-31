import { Metadata } from "next"

import { getURL } from "@/lib/utils"
import { FadeIn } from "@/components/fade-in"
import { LandingHeroSection } from "@/app/(marketing)/marketing-hero"
import { MarketingSocialProof } from "./marketing-social-proof"
import { ProductWorkflow } from "./marketing-workflow"
import { HowItWorks } from "./marketing-how-it-works"
import FeaturesSection from "./marketing-features"
import { MarketingPricing } from "./marketing-pricing"
import MarketingFAQ from "./marketing-faq"
import { MarketingCTA } from "./marketing-cta"

const ogImage = `${getURL()}og?title=${encodeURIComponent(
  "Lyfe AI - Complete Patient Stories"
)}`

export const metadata: Metadata = {
  title: "Lyfe AI - Complete Patient Stories Before They Walk In",
  description:
    "AI-powered platform that aggregates scattered medical records into one searchable timeline and syncs back to your EMR. Stop chasing records.",
  keywords: [
    "medical records",
    "patient history",
    "EMR integration",
    "healthcare AI",
    "clinical timeline",
    "health data aggregation",
    "HIPAA compliant",
    "FHIR",
    "health information exchange",
  ],
  openGraph: {
    title: "Lyfe AI - Complete Patient Stories Before They Walk In",
    description:
      "AI-powered platform that aggregates scattered medical records into one searchable timeline and syncs back to your EMR. Stop chasing records.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Lyfe AI - Complete Patient Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyfe AI - Complete Patient Stories Before They Walk In",
    description:
      "AI-powered platform that aggregates scattered medical records into one searchable timeline and syncs back to your EMR. Stop chasing records.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function LandingPage() {
  return (
    <div className="space-y-1 md:space-y-4">
      {/* Hero Section with Audience Toggle */}
      <LandingHeroSection />

      {/* Social Proof - Trust badges and testimonials */}
      <FadeIn>
        <MarketingSocialProof />
      </FadeIn>

      {/* Workflow - Visual product explanation */}
      <FadeIn>
        <ProductWorkflow />
      </FadeIn>

      {/* How It Works - Detailed 4-step guide */}
      <FadeIn>
        <HowItWorks />
      </FadeIn>

      {/* Features - Audience-specific value propositions */}
      <FadeIn>
        <FeaturesSection />
      </FadeIn>

      {/* Pricing - Provider only (conditionally shown) */}
      <FadeIn>
        <MarketingPricing />
      </FadeIn>

      {/* FAQ Section */}
      <FadeIn>
        <MarketingFAQ />
      </FadeIn>

      {/* Final CTA */}
      <FadeIn>
        <MarketingCTA />
      </FadeIn>
    </div>
  )
}
