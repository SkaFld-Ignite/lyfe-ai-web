import { Metadata } from "next"

import { getURL } from "@/lib/utils"
import { FadeIn } from "@/components/fade-in"
import { ProductWorkflow } from "./marketing-workflow"
import { LandingHeroSection } from "@/app/(marketing)/marketing-hero"

import { MarketingCTA } from "./marketing-cta"
import MarketingFAQ from "./marketing-faq"
import { MarketingSocialProof } from "./marketing-social-proof"
import { MarketingPricing } from "./marketing-pricing"
import { MarketingQuote } from "./marketing-quote"
import { MarketingTestimonial } from "./marketing-testimonial"

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
    <div className="space-y-1 md:space-y-4 ">
      <LandingHeroSection />
      <FadeIn>
        <MarketingSocialProof />
      </FadeIn>
      <FadeIn>
        <ProductWorkflow />
      </FadeIn>
      <FadeIn>
        <MarketingQuote />
      </FadeIn>
      <FadeIn>
        <MarketingPricing />
      </FadeIn>
      <FadeIn>
        <MarketingFAQ />
      </FadeIn>
      <FadeIn>
        <MarketingTestimonial />
      </FadeIn>
      <FadeIn>
        <MarketingCTA />
      </FadeIn>
    </div>
  )
}
