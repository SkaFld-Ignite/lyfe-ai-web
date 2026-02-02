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
  /** The URL of the page where the video can be watched (embedUrl for Google) */
  embedUrl?: string
}

export function VideoSchema({
  name = "Lyfe AI Platform Demo",
  description = "See how Lyfe AI aggregates scattered medical records into one searchable clinical timeline. Watch the complete platform walkthrough.",
  thumbnailUrl = `${baseUrl}images/brand/macbook-display.png`,
  contentUrl,
  uploadDate = "2026-02-01T00:00:00Z",
  duration = "PT3M30S",
  embedUrl = baseUrl,
}: VideoSchemaProps = {}) {
  if (!contentUrl) return null

  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${baseUrl}#video`,
    name,
    description,
    thumbnailUrl,
    contentUrl,
    embedUrl,
    uploadDate,
    duration,
    // Critical: tells Google this page is a watch page for the video
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": baseUrl,
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
    // Additional fields for better Google indexing
    inLanguage: "en-US",
    isFamilyFriendly: true,
    isAccessibleForFree: true,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Hidden video element for SEO crawlers.
 * Google requires a detectable video element on the page to index it as a "watch page".
 * This component renders a visually hidden but crawlable video element.
 */
interface SEOVideoElementProps {
  src: string
  poster?: string
  title?: string
}

export function SEOVideoElement({
  src,
  poster,
  title = "Lyfe AI Platform Demo",
}: SEOVideoElementProps) {
  if (!src) return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    >
      <video
        src={src}
        poster={poster}
        preload="none"
        playsInline
        title={title}
      >
        <track kind="captions" label="English" srcLang="en" />
      </video>
    </div>
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
