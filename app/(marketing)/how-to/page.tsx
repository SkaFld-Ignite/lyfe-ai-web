"use client"

import { FadeIn } from "@/components/fade-in"
import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"

export default function HowToPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 pb-16">
      <div className="w-full h-24 md:h-28 lg:h-[120px]" aria-hidden="true" />
      <FadeIn key="how-to">
        <SectionCard>
          <div className="space-y-6">
            <GradientHeading size="xl" weight="bold">
              How to Use Lyfe AI
            </GradientHeading>

            <p className="text-muted-foreground">
              Follow the step-by-step guide below to get started with Lyfe AI
              for OC Gastrocare.
            </p>

            <div className="w-full">
              <iframe
                src="https://scribehow.com/embed/How_to_Use_Lyfe_AI__jwYXWrhtQZOZGQL8qSNUAg?as=scrollable"
                width="100%"
                height={800}
                allow="fullscreen"
                style={{ border: 0, minHeight: 640 }}
                title="How to Use Lyfe AI - Step by Step Guide"
              />
            </div>
          </div>
        </SectionCard>
      </FadeIn>
    </div>
  )
}
