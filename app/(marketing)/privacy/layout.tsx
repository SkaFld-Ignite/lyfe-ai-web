import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Lyfe AI Privacy Policy - Learn how we protect your health data. HIPAA compliant, enterprise-grade security for patient medical records.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Lyfe AI",
    description:
      "Learn how Lyfe AI protects your health data with HIPAA compliant, enterprise-grade security.",
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
