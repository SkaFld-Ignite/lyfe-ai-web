import { Metadata } from "next"

import { getURL } from "@/lib/utils"
import { FadeIn } from "@/components/fade-in"
import { VideoSchema, FAQSchema } from "@/components/structured-data"
import { LandingHeroSection } from "@/app/(marketing)/marketing-hero"
import { MarketingSocialProof } from "../marketing-social-proof"
import { ProductWorkflow } from "../marketing-workflow"
import { HowItWorks } from "../marketing-how-it-works"
import FeaturesSection from "../marketing-features"
import MarketingFAQ from "../marketing-faq"
import { MarketingCTA } from "../marketing-cta"

// Demo video URL for SEO
const DEMO_VIDEO_URL = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL || ""

// FAQ items for structured data (patient-focused for SEO)
const patientFaqItemsForSchema = [
  {
    question: "Is Lyfe AI free for patients?",
    answer:
      "Yes, completely free. Your health data belongs to you—we're just making it accessible. There's no cost, no catch, and no premium tier. We believe everyone deserves easy access to their own health information.",
  },
  {
    question: "How do I access my medical records with Lyfe AI?",
    answer:
      "Simply sign up and we'll securely connect to your healthcare providers. We aggregate records from hospitals, labs, specialists, and pharmacies into one searchable timeline. No more calling offices or waiting for faxes.",
  },
  {
    question: "Is my health data secure and private?",
    answer:
      "Absolutely. We use enterprise-grade security with encryption at rest and in transit, complete audit logging, and strict access controls. Your data is yours—we never sell it or share it without your explicit consent.",
  },
  {
    question: "What health records can I access?",
    answer:
      "You can access records from hospitals, clinics, labs, pharmacies, and specialists. This includes visit summaries, lab results, medications, immunizations, procedures, and more—all organized in a searchable timeline.",
  },
  {
    question: "Can I share my records with my doctors?",
    answer:
      "Yes! You can easily share your complete health history with any healthcare provider. This helps your doctors make better decisions with full context, especially when seeing a new specialist or in emergencies.",
  },
]

const ogImage = `${getURL()}og?title=${encodeURIComponent(
  "Lyfe AI - Your Health Records in One Place"
)}`

export const metadata: Metadata = {
  title: {
    absolute: "Lyfe AI - Free Access to Your Complete Medical Records",
  },
  description:
    "Access, understand, and share your complete medical history for free. All your health records from every doctor, hospital, and lab in one searchable timeline.",
  keywords: [
    "free health records",
    "medical records app",
    "health history",
    "patient portal",
    "medical records access",
    "health data",
    "personal health records",
    "PHR",
    "medical history",
    "health timeline",
    "free medical records",
  ],
  openGraph: {
    title: "Lyfe AI - Free Access to Your Complete Medical Records",
    description:
      "Access, understand, and share your complete medical history for free. All your health records from every doctor, hospital, and lab in one searchable timeline.",
    type: "website",
    locale: "en_US",
    url: `${getURL()}patients`,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Lyfe AI - Your Health Records in One Place",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyfe AI - Free Access to Your Complete Medical Records",
    description:
      "Access, understand, and share your complete medical history for free. All your health records from every doctor, hospital, and lab in one searchable timeline.",
    images: [ogImage],
  },
  alternates: {
    canonical: `${getURL()}patients`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function PatientsPage() {
  return (
    <>
      {/* Structured Data for SEO - Patient focused */}
      <VideoSchema
        name="Lyfe AI - Access Your Health Records for Free"
        description="See how Lyfe AI gives you free access to all your medical records in one place. View your complete health history from every doctor, hospital, and lab."
        contentUrl={DEMO_VIDEO_URL}
        thumbnailUrl={`${getURL()}images/brand/mobile-app-display.png`}
      />
      <FAQSchema items={patientFaqItemsForSchema} />

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
