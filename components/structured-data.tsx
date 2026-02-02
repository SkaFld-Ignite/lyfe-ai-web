import { getURL } from "@/lib/utils"

const baseUrl = getURL()

interface OrganizationSchemaProps {
  name?: string
  description?: string
  email?: string
  logo?: string
}

export function OrganizationSchema({
  name = "Lyfe AI",
  description = "AI-powered platform that aggregates scattered medical records into one searchable timeline and syncs back to your EMR.",
  email = "hello@lyfeco.ai",
  logo = `${baseUrl}images/brand/lyfe-logo.png`,
}: OrganizationSchemaProps = {}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    description,
    url: baseUrl,
    logo,
    email,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email,
      contactType: "customer service",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lyfe AI",
    url: baseUrl,
    description:
      "AI-powered platform that aggregates scattered medical records into one searchable timeline and syncs back to your EMR.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Lyfe AI",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    description:
      "AI-powered healthcare platform that aggregates scattered medical records into one searchable clinical timeline and syncs back to your EMR.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free for patients, subscription for providers",
    },
    featureList: [
      "Medical records aggregation from 95% of US healthcare providers",
      "AI-powered clinical timeline",
      "Bi-directional EMR sync",
      "HIPAA compliant security",
      "FHIR R4 integration",
      "Drug interaction checking",
      "Care gap detection",
    ],
    screenshot: `${baseUrl}images/brand/macbook-display.png`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface VideoSchemaProps {
  name?: string
  description?: string
  thumbnailUrl?: string
  contentUrl?: string
  uploadDate?: string
  duration?: string
  /** The URL of the page where the video can be watched */
  watchUrl?: string
}

export function VideoSchema({
  name = "Lyfe AI Platform Demo",
  description = "See how Lyfe AI aggregates scattered medical records into one searchable clinical timeline. Watch the complete platform walkthrough.",
  thumbnailUrl = `${baseUrl}images/brand/macbook-display.png`,
  contentUrl,
  uploadDate = "2026-02-01T00:00:00Z",
  duration = "PT3M30S",
  watchUrl = baseUrl,
}: VideoSchemaProps = {}) {
  if (!contentUrl) return null

  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${watchUrl}#video`,
    name,
    description,
    thumbnailUrl,
    contentUrl,
    // embedUrl tells Google where this video can be watched/embedded
    embedUrl: watchUrl,
    uploadDate,
    duration,
    // Tells Google this video is the main content of the specified page
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": watchUrl,
    },
    // Indicates how users can watch the video (clicking the demo button)
    potentialAction: {
      "@type": "WatchAction",
      target: watchUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Lyfe AI",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}images/brand/lyfe-logo.png`,
        width: 512,
        height: 512,
      },
    },
    // Additional fields for Google video indexing
    inLanguage: "en-US",
    isFamilyFriendly: true,
    isAccessibleForFree: true,
    requiresSubscription: false,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  items: FAQItem[]
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Combined schema for the homepage
export function HomePageSchema() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <SoftwareApplicationSchema />
    </>
  )
}
