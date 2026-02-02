import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"

import { ThemeProvider } from "@/components/ui/theme-provider"

const alphaLyra = localFont({
  src: "../public/fonts/AlphaLyrae-Medium.woff2",
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Lyfe AI - Complete Patient Stories Before They Walk In",
    template: "%s | Lyfe AI",
  },
  description:
    "AI-powered platform that aggregates scattered medical records into one searchable timeline and syncs back to your EMR. HIPAA compliant, FHIR R4 integrated.",
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
    "electronic health records",
    "patient data",
    "healthcare technology",
  ],
  authors: [{ name: "Lyfe AI" }],
  creator: "Lyfe AI",
  publisher: "Lyfe AI",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lyfe AI",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@lyfeai",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${geistMono.variable} ${alphaLyra.variable} antialiased  font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
