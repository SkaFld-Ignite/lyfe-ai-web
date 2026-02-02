import { Metadata } from "next"

import { FadeIn } from "@/components/fade-in"
import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"
import { BlogPosts } from "@/app/(marketing)/blog/blog-posts"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Lyfe AI blog - Insights on healthcare technology, medical records management, EMR integration, and AI in healthcare.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Lyfe AI",
    description:
      "Insights on healthcare technology, medical records management, and AI in healthcare.",
  },
}

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 pt-24 md:pt-28 pb-16 space-y-4 md:space-y-8">
      <FadeIn key="blog">
        <SectionCard>
          <GradientHeading size="xxl" weight="base" className="">
            Blog
          </GradientHeading>
        </SectionCard>
      </FadeIn>

      <FadeIn key="blog-posts">
        <SectionCard innerClassName="pt-2 pb-2">
          <div className="md:max-w-3xl md:mx-auto">
            <BlogPosts />
          </div>
        </SectionCard>
      </FadeIn>
    </div>
  )
}
