import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Lyfe AI Terms of Use - Terms and conditions for using our healthcare platform. Provider and patient agreements.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Use | Lyfe AI",
    description:
      "Terms and conditions for using Lyfe AI healthcare platform.",
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
