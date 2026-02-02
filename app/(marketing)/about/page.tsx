"use client"

import { motion } from "motion/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AnimatedGroup } from "@/components/animated-group"
import { FadeIn } from "@/components/fade-in"
import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"

import { MarketingCTA } from "../marketing-cta"

// Note: Metadata must be in a separate file for client components
// See app/(marketing)/about/metadata.ts

export default function AboutPage() {
  // TODO: Replace with actual team member photos and info
  const teamMembers = [
    {
      name: "Mike Belloli",
      role: "Founder & CEO",
      image: "/images/team/placeholder.png",
    },
    {
      name: "Team Member",
      role: "Engineering",
      image: "/images/team/placeholder.png",
    },
    {
      name: "Team Member",
      role: "Product",
      image: "/images/team/placeholder.png",
    },
    {
      name: "Team Member",
      role: "Operations",
      image: "/images/team/placeholder.png",
    },
  ]

  return (
    <div className="container mx-auto max-w-7xl px-4 pt-24 md:pt-28 pb-16 space-y-8 md:space-y-12">
      <FadeIn key="about">
        {/* <SectionCard innerClassName="py-0 md:py-0 pt-16 md:pt-24 pb-8 md:pb-6"> */}
        <div className="space-y-1 md:space-y-4">
          <SectionCard innerClassName="py-0 md:py-0 pt-16 md:pt-16 pb-8 md:pb-12">
            <div className="space-y-8 ">
              <FadeIn>
                <GradientHeading size="xxxl" weight="base">
                  About
                </GradientHeading>
              </FadeIn>

              {/* Vision and Story */}
              <div className="grid gap-8 md:grid-cols-2">
                <FadeIn>
                  <div className="space-y-4">
                    <GradientHeading size="sm" weight="base">
                      Our Vision
                    </GradientHeading>
                    <p className="text-muted-foreground leading-relaxed text-pretty text-lg lg:text-xl">
                      We believe every patient deserves providers who know their
                      complete story. And every provider deserves instant access
                      to the records they need. Lyfe AI is building the bridge
                      between fragmented healthcare data and better care outcomes.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn>
                  <div className="space-y-4">
                    <GradientHeading size="sm" weight="base">
                      Our Story
                    </GradientHeading>
                    <p className="text-muted-foreground leading-relaxed text-pretty text-lg lg:text-xl">
                      Born from firsthand experience with the broken state of
                      medical records, we set out to solve the problem at its
                      root. Healthcare providers waste hours chasing records
                      while patients struggle to share their own health stories.
                      We&apos;re changing that—one complete patient history at a time.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </SectionCard>

          {/* Team */}
          <SectionCard innerClassName="py-0 md:py-0 pt-16 md:pt-12 pb-8 md:pb-12">
            <div className="space-y-12 ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <GradientHeading size="xxl" weight="base" className="mb-4">
                  The Team
                </GradientHeading>
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "13.2rem" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    type: "spring",
                    bounce: 0,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-[1px] bg-primary/20 mb-8"
                />
                <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
                  A team of healthcare innovators, engineers, and patient advocates
                  working to make complete medical records accessible to everyone.
                </p>
              </motion.div>

              <AnimatedGroup className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 * index,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-center gap-7"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-card to-muted rounded-sm blur-md opacity-70 scale-90"></div>
                      <Avatar className="h-20 w-20 rounded-sm border border-border/50 shadow-elevation-light dark:shadow-elevation-dark-two relative bg-card/20 overflow-hidden">
                        <AvatarImage
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="object-cover scale-[1.02]"
                        />
                        <AvatarFallback className="bg-muted text-foreground">
                          {member.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium tracking-tight mb-1">
                        {member.name}
                      </h3>
                      <p className="text-muted-foreground font-normal tracking-tight">
                        {member.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatedGroup>
            </div>
          </SectionCard>

          {/* Values */}
          <SectionCard innerClassName="py-0 md:py-0 pt-16 md:pt-12 pb-8 md:pb-6">
            <div className="space-y-12 ">
              <FadeIn>
                <GradientHeading size="xxl" weight="base" className="mb-4">
                  Values
                </GradientHeading>
              </FadeIn>

              <AnimatedGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Patient First",
                    description:
                      "Every decision starts with what's best for patients. Their data, their control, their care.",
                  },
                  {
                    title: "Provider Partnership",
                    description:
                      "We build tools that fit into real healthcare workflows, not the other way around.",
                  },
                  {
                    title: "Security & Trust",
                    description:
                      "HIPAA compliance is just the start. We exceed standards to earn and keep trust.",
                  },
                  {
                    title: "Simplicity",
                    description:
                      "Complex problems deserve elegant solutions. One click should be enough.",
                  },
                  {
                    title: "Interoperability",
                    description:
                      "Healthcare data should flow freely—between providers, systems, and to patients themselves.",
                  },
                  {
                    title: "Accessibility",
                    description:
                      "Free for patients, always. Everyone deserves access to their own health information.",
                  },
                ].map((value, index) => (
                  <div key={index}>
                    <SectionCard
                      //   innerClassName="dark:shadow-elevation-dark-two bg-card/20"
                      innerClassName="dark:shadow-elevation-dark-two bg-card/20"
                      className="dark:shadow-xl bg-card/20"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </SectionCard>
                  </div>
                ))}
              </AnimatedGroup>
            </div>
          </SectionCard>
        </div>
        {/* </div> */}
      </FadeIn>
      <FadeIn>
        <MarketingCTA />
      </FadeIn>
    </div>
  )
}
