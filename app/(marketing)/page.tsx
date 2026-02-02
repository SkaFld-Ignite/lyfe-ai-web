import { Metadata } from "next"

import { getURL } from "@/lib/utils"
import { FadeIn } from "@/components/fade-in"
import { VideoSchema, FAQSchema } from "@/components/structured-data"
import { LandingHeroSection } from "@/app/(marketing)/marketing-hero"
import { MarketingSocialProof } from "./marketing-social-proof"
import { ProductWorkflow } from "./marketing-workflow"
import { HowItWorks } from "./marketing-how-it-works"
import FeaturesSection from "./marketing-features"
import { MarketingPricing } from "./marketing-pricing"
import MarketingFAQ from "./marketing-faq"
import { MarketingCTA } from "./marketing-cta"

// Demo video URL for SEO
const DEMO_VIDEO_URL = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL || ""

// FAQ items for structured data (provider-focused for SEO)
const faqItemsForSchema = [
  {
    question: "How does Lyfe AI aggregate patient records?",
    answer:
      "We connect to 95% of US healthcare providers through our FHIR R4 integration with Zus Health. When you request a patient's records, we pull from hospitals, labs, specialists, and pharmacies—all in one request, no faxes required.",
  },
  {
    question: "Is patient data secure and HIPAA compliant?",
    answer:
      "Yes. We maintain enterprise-grade security with row-level data isolation, PHI filtering, complete audit logging, encryption at rest and in transit, and role-based access controls. Our architecture is built for HIPAA compliance from day one.",
  },
  {
    question: "Which EHR systems do you integrate with?",
    answer:
      "Lyfe AI offers FHIR R4 integrations with major EHRs through SMART on FHIR (Epic, Cerner, and others) and direct integrations with DrChrono. We support bi-directional sync so you can write curated data back to your EMR.",
  },
  {
    question: "How does the AI-powered timeline work?",
    answer:
      "Our AI organizes fragmented records from multiple sources into a single, searchable Clinical Timeline. Filter by date, condition, provider, or procedure—find any piece of patient history in seconds, not hours.",
  },
  {
    question: "Is Lyfe AI free for patients?",
    answer:
      "Yes, completely free. Your health data belongs to you—we're just making it accessible. There's no cost, no catch, and no premium tier. We believe everyone deserves easy access to their own health information.",
  },
]

const ogImage = `${getURL()}og?title=${encodeURIComponent(
  "Lyfe AI - Complete Patient Stories"
)}`

export const metadata: Metadata = {
  title: {
    absolute: "Lyfe AI - Complete Patient Stories Before They Walk In",
  },
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
    <>
      {/* Structured Data for SEO */}
      <VideoSchema
        name="Lyfe AI Platform Demo - Complete Patient Stories"
        description="See how Lyfe AI aggregates scattered medical records into one searchable clinical timeline. Watch how providers can access complete patient histories before appointments."
        contentUrl={DEMO_VIDEO_URL}
        thumbnailUrl={`${getURL()}images/brand/macbook-display.png`}
      />
      <FAQSchema items={faqItemsForSchema} />

      {/* Hero Section - Full viewport, extends behind header */}
      <LandingHeroSection />

      {/* Page sections with consistent spacing */}
      <div className="container mx-auto max-w-7xl px-4 space-y-16 md:space-y-24 lg:space-y-32 pb-16">
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
    </>
  )
}
