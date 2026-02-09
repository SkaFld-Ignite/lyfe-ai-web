import { Metadata } from "next"

export const metadata: Metadata = {
  title: "How To Use Lyfe AI | OC Gastrocare",
  description:
    "Step-by-step guide on how to use Lyfe AI for OC Gastrocare.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function HowToLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
