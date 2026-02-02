"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"
import { useAudience } from "@/lib/context/audience-context"

export default function MarketingFAQ() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const { audience } = useAudience()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  // Select FAQ items based on audience
  const faqItems = audience === "provider" ? providerFaqItems : patientFaqItems

  return (
    <section>
      <div className="w-full" ref={containerRef}>
        <SectionCard
          className="container mx-auto max-w-7xl"
          innerClassName="px-1 sm:px-1 md:px-1 py-1 md:py-1 h-full w-full"
        >
          <motion.div
            className=""
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="mx-auto space-y-4">
              {/* Mobile Accordion */}
              <div className="md:hidden">
                <div className="py-6 px-2">
                  <GradientHeading size="xxl" weight="base">
                    F.A.Q
                  </GradientHeading>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-muted/50 rounded-lg overflow-hidden border-none"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                        <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.question}
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-foreground/80 text-base leading-relaxed">
                          {item.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Desktop Grid */}
              <motion.div
                className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[minmax(min-content,max-content)]"
                variants={containerVariants}
              >
                {faqItems.slice(0, 4).map((item, index) => (
                  <motion.div
                    key={index}
                    className="group shadow-elevation-light dark:shadow-elevation-dark dark:hover:shadow-elevation-dark-two p-1 bg-card"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                  >
                    <div className="h-full p-6 shadow-elevation-light dark:shadow-elevation-dark hover:shadow-elevation-medium dark:hover:shadow-elevation-dark-two transition-all duration-200 bg-muted/50">
                      <h3 className="text-2xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.question}
                      </h3>
                      <p className="text-foreground/80 text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  className="flex justify-center items-center dark:bg-background p-1"
                  variants={itemVariants}
                >
                  <GradientHeading
                    size="xxl"
                    weight="base"
                    className="leading-[1.5rem] md:leading-[1.5rem] lg:leading-[1.5rem] mb-4"
                  >
                    F.A.Q
                  </GradientHeading>
                </motion.div>

                {faqItems.slice(4, 8).map((item, index) => (
                  <motion.div
                    key={index}
                    className="group shadow-elevation-light dark:shadow-elevation-dark dark:hover:shadow-elevation-dark-two p-1 bg-card"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                  >
                    <div className="h-full bg-muted/50 p-6 shadow-elevation-light dark:shadow-elevation-dark dark:hover:shadow-elevation-dark-two transition-all duration-200">
                      <h3 className="text-2xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.question}
                      </h3>
                      <p className="text-foreground/80 text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </SectionCard>
      </div>
    </section>
  )
}

// Provider-specific FAQ items
const providerFaqItems = [
  {
    question: "How does Lyfe AI aggregate patient records?",
    answer:
      "We connect to 95% of US healthcare providers through our FHIR R4 integration with Zus Health. When you request a patient's records, we pull from hospitals, labs, specialists, and pharmacies—all in one request, no faxes required.",
  },
  {
    question: "Is patient data secure and HIPAA compliant?",
    answer:
      "Yes. We maintain enterprise-grade security with row-level data isolation, PHI filtering, complete audit logging, encryption at rest and in transit, and role-based access controls. Our architecture is built for HIPAA compliance from day one.",
  },
  {
    question: "Which EHR systems do you integrate with?",
    answer:
      "Lyfe AI offers FHIR R4 integrations with major EHRs through SMART on FHIR (Epic, Cerner, and others) and direct integrations with DrChrono. We support bi-directional sync so you can write curated data back to your EMR.",
  },
  {
    question: "How does the AI-powered timeline work?",
    answer:
      "Our AI organizes fragmented records from multiple sources into a single, searchable Clinical Timeline. Filter by date, condition, provider, or procedure—find any piece of patient history in seconds, not hours.",
  },
  {
    question: "What clinical intelligence features are available?",
    answer:
      "Lyfe AI provides drug interaction checking, risk assessment scoring, care gap detection, and clinical insights generation. These tools help you identify potential issues and opportunities for preventive care before the visit.",
  },
  {
    question: "Can I control which staff members access what data?",
    answer:
      "Absolutely. We provide 20+ granular permissions across Admin, Doctor, Nurse, and Staff roles. Multi-tenant isolation ensures complete organizational separation between clinics, with row-level security enforced at the database level.",
  },
  {
    question: "What's the pricing for practices?",
    answer:
      "We're currently piloting with select specialty practices. Contact us to discuss joining our pilot program and help shape the platform as we prepare for broader launch.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most practices can be up and running within a week. Our FHIR R4 integration connects with your EMR in a few clicks, and patient records start flowing immediately. We provide guided onboarding and demo data to get your team comfortable.",
  },
]

// Patient-specific FAQ items
const patientFaqItems = [
  {
    question: "What does Lyfe AI do for me?",
    answer:
      "Lyfe AI brings all your medical records together in one place—every doctor visit, lab result, medication, and procedure from any provider you've seen. You can finally see your complete health story without hunting through filing cabinets or multiple patient portals.",
  },
  {
    question: "Is Lyfe AI really free for patients?",
    answer:
      "Yes, completely free. Your health data belongs to you—we're just making it accessible. There's no cost, no catch, and no premium tier. We believe everyone deserves easy access to their own health information.",
  },
  {
    question: "Is my health information kept private?",
    answer:
      "Absolutely. Lyfe AI is built to HIPAA standards with bank-level encryption, secure data storage, and strict access controls. Your data is never sold or shared without your explicit consent.",
  },
  {
    question: "How do I share my records with a new doctor?",
    answer:
      "With one click, you can share your complete health history with any healthcare provider. No more faxing records, filling out the same forms repeatedly, or trying to remember every medication and procedure from your past.",
  },
  {
    question: "What's the AI health summary feature?",
    answer:
      "Our AI reads through your medical records and creates plain-language summaries of your health history. You'll understand what's in your records without needing to decode medical jargon or complex lab results.",
  },
  {
    question: "Does Lyfe AI replace my doctor?",
    answer:
      "Not at all. Lyfe AI helps you and your doctors by making your health information more accessible and understandable. You'll still work with your healthcare providers for all medical decisions and treatment.",
  },
  {
    question: "Can I get medication reminders?",
    answer:
      "Yes! Once your records are connected, you can set up personalized medication reminders to help you stay on track with your prescriptions and never miss a dose.",
  },
  {
    question: "How do I get started?",
    answer:
      "Patient features are coming soon—request access now to be notified when we launch. Once available, you'll verify your identity securely, and we'll pull your records from hospitals, labs, and doctors across the country. Most patients will see their complete timeline within minutes.",
  },
]
