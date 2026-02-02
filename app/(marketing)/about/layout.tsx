import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Lyfe AI - our mission to give every patient a healthcare provider who knows their full story. Complete patient medical records aggregation.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Lyfe AI",
    description:
      "Learn about Lyfe AI - our mission to give every patient a healthcare provider who knows their full story.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
