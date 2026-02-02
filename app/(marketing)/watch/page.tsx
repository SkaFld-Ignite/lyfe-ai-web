import { Metadata } from "next"
import Link from "next/link"

import { getURL } from "@/lib/utils"

// Video configuration - centralized for SEO consistency
const VIDEO_CONFIG = {
  name: "Lyfe AI Platform Demo - Complete Patient Stories",
  description:
    "See how Lyfe AI aggregates scattered medical records into one searchable clinical timeline. Watch how providers can access complete patient histories before appointments, eliminate duplicate tests, and make better-informed clinical decisions.",
  contentUrl:
    process.env.NEXT_PUBLIC_DEMO_VIDEO_URL ||
    "https://bzbtfrlvgxhkrxlwwhu.supabase.co/storage/v1/object/public/demo-video/Lyfe%20AI%20Demo%20Video.mov",
  thumbnailUrl: `${getURL()}images/brand/macbook-display.png`,
  uploadDate: "2026-02-01T00:00:00Z",
  duration: "PT3M30S", // ISO 8601 duration format (3 minutes 30 seconds)
  durationSeconds: 210,
}

const baseUrl = getURL()
const ogImage = `${baseUrl}og?title=${encodeURIComponent(VIDEO_CONFIG.name)}`

// Enhanced metadata for video watch page
export const metadata: Metadata = {
  title: VIDEO_CONFIG.name,
  description: VIDEO_CONFIG.description,
  keywords: [
    "Lyfe AI demo",
    "medical records demo",
    "healthcare AI video",
    "patient history demo",
    "EMR integration demo",
    "clinical timeline demo",
    "health data aggregation",
    "HIPAA compliant platform",
  ],
  alternates: {
    canonical: `${baseUrl}watch`,
  },
  openGraph: {
    title: VIDEO_CONFIG.name,
    description: VIDEO_CONFIG.description,
    type: "video.other",
    url: `${baseUrl}watch`,
    videos: [
      {
        url: VIDEO_CONFIG.contentUrl,
        width: 1920,
        height: 1080,
        type: "video/mp4",
      },
    ],
    images: [
      {
        url: VIDEO_CONFIG.thumbnailUrl,
        width: 1631,
        height: 1076,
        alt: VIDEO_CONFIG.name,
      },
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: VIDEO_CONFIG.name,
      },
    ],
    siteName: "Lyfe AI",
    locale: "en_US",
  },
  twitter: {
    card: "player",
    title: VIDEO_CONFIG.name,
    description: VIDEO_CONFIG.description,
    images: [VIDEO_CONFIG.thumbnailUrl],
    players: [
      {
        playerUrl: `${baseUrl}watch`,
        streamUrl: VIDEO_CONFIG.contentUrl,
        width: 1920,
        height: 1080,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    // Additional video-specific meta tags for Google
    "video:duration": String(VIDEO_CONFIG.durationSeconds),
    "video:release_date": VIDEO_CONFIG.uploadDate,
    "video:tag": "medical records, healthcare AI, patient history, EMR",
  },
}

// Enhanced VideoObject schema with all Google-required fields for watch page indexing
function WatchPageVideoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${baseUrl}watch#video`,
    name: VIDEO_CONFIG.name,
    description: VIDEO_CONFIG.description,
    thumbnailUrl: VIDEO_CONFIG.thumbnailUrl,
    contentUrl: VIDEO_CONFIG.contentUrl,
    embedUrl: `${baseUrl}watch`,
    uploadDate: VIDEO_CONFIG.uploadDate,
    duration: VIDEO_CONFIG.duration,
    // Interaction statistics
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: { "@type": "WatchAction" },
      userInteractionCount: 0,
    },
    // Publisher info
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
    // Indicates this is on a dedicated watch page (critical for Google)
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}watch`,
    },
    // Video category
    about: [
      { "@type": "Thing", name: "Healthcare Technology" },
      { "@type": "Thing", name: "Medical Records Management" },
      { "@type": "Thing", name: "Electronic Health Records" },
    ],
    // Keywords/tags
    keywords:
      "medical records, healthcare AI, patient history, EMR integration, HIPAA, clinical timeline",
    // Accessibility features
    accessibilityFeature: ["captions"],
    inLanguage: "en-US",
    // Free to watch
    isAccessibleForFree: true,
    // Production info
    productionCompany: {
      "@type": "Organization",
      name: "Lyfe AI",
      url: baseUrl,
    },
    // Regions available
    regionsAllowed: "US",
    // Content rating
    isFamilyFriendly: true,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// WebPage schema indicating this is a dedicated video watch page
function WatchPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}watch`,
    name: VIDEO_CONFIG.name,
    description: VIDEO_CONFIG.description,
    url: `${baseUrl}watch`,
    isPartOf: {
      "@type": "WebSite",
      "@id": baseUrl,
      name: "Lyfe AI",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: VIDEO_CONFIG.thumbnailUrl,
    },
    mainEntity: {
      "@type": "VideoObject",
      "@id": `${baseUrl}watch#video`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Watch Demo",
          item: `${baseUrl}watch`,
        },
      ],
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "p"],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Watch Page - SEO-optimized video landing page
 *
 * This page exists primarily for Google Video indexing requirements.
 * Google requires videos to be on a "watch page" where the video is
 * the main content to properly index them for video search results.
 *
 * The page contains:
 * - Full VideoObject structured data (JSON-LD)
 * - OpenGraph video tags
 * - Twitter player card
 * - Minimal visible content with the actual video player
 *
 * This satisfies Google's "watch page" requirement while keeping
 * the main user experience on the homepage.
 */
export default function WatchPage() {
  return (
    <>
      {/* Structured Data for Google Video Indexing */}
      <WatchPageVideoSchema />
      <WatchPageSchema />

      {/* Minimal visible content - video player for Google to detect */}
      <main className="min-h-screen bg-background">
        <div className="container mx-auto max-w-5xl px-4 py-16">
          {/* Page header - visible to search engines */}
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {VIDEO_CONFIG.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {VIDEO_CONFIG.description}
            </p>
          </header>

          {/* Video player - the main content Google needs to see */}
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl mb-8">
            <video
              src={VIDEO_CONFIG.contentUrl}
              controls
              playsInline
              poster={VIDEO_CONFIG.thumbnailUrl}
              className="w-full h-full"
              preload="metadata"
            >
              <track kind="captions" label="English" srcLang="en" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Navigation back to main site */}
          <nav className="text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-md"
            >
              Learn More About Lyfe AI
            </Link>
          </nav>

          {/* Additional SEO content - visible to crawlers */}
          <section className="mt-16 prose prose-gray dark:prose-invert max-w-2xl mx-auto">
            <h2>About This Demo</h2>
            <p>
              This demonstration shows how Lyfe AI transforms the way healthcare
              providers access patient information. Watch as we aggregate
              scattered medical records from multiple sources into a single,
              searchable clinical timeline.
            </p>
            <h3>What You&apos;ll See</h3>
            <ul>
              <li>
                One-click record retrieval from 95% of US healthcare providers
              </li>
              <li>AI-powered organization of complex medical histories</li>
              <li>Bi-directional EMR sync capabilities</li>
              <li>HIPAA-compliant security measures</li>
            </ul>
            <h3>Ready to Get Started?</h3>
            <p>
              <Link href="/" className="text-blue-600 hover:text-blue-700">
                Request access
              </Link>{" "}
              to see how Lyfe AI can help your practice deliver better patient
              care with complete information at your fingertips.
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
