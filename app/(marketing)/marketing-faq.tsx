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
    question: "How does Lyfe AI collect patient information?",
    answer:
      "Lyfe AI uses a secure, HIPAA-compliant AI assistant that engages patients via text message before their appointment. Patients answer questions about their symptoms, medical history, and current medications in a conversational format.",
  },
  {
    question: "Is the patient data secure and HIPAA compliant?",
    answer:
      "Absolutely. Lyfe AI is fully HIPAA compliant with end-to-end encryption, secure data storage, and strict access controls. We follow industry best practices for healthcare data security and undergo regular security audits.",
  },
  {
    question: "How does this integrate with my existing EHR system?",
    answer:
      "Lyfe AI integrates seamlessly with major EHR systems including Epic, Cerner, and Athenahealth. Patient intake data is automatically formatted and can be imported directly into your existing workflow.",
  },
  {
    question: "How much time does this actually save per patient?",
    answer:
      "On average, providers save 5-10 minutes per patient visit by having comprehensive intake information ready before the appointment. This translates to seeing more patients or spending more quality time with each one.",
  },
  {
    question: "What if a patient doesn't complete the intake?",
    answer:
      "Lyfe AI sends gentle reminders and can pause and resume conversations. If a patient doesn't complete intake, you'll still have partial information, and traditional intake methods remain available as a backup.",
  },
  {
    question: "Can I customize the questions asked to patients?",
    answer:
      "Yes! You can customize intake questions based on specialty, visit type, or specific conditions. Our AI adapts follow-up questions based on patient responses to gather the most relevant information.",
  },
  {
    question: "What's the pricing structure for providers?",
    answer:
      "We offer flexible pricing based on practice size and volume. Contact us for a customized quote. Most practices see ROI within the first month through improved efficiency and reduced no-shows.",
  },
  {
    question: "How do patients typically respond to AI-assisted intake?",
    answer:
      "Patient satisfaction scores are consistently high. Many patients prefer the convenience of completing intake from their phone at their own pace, rather than filling out clipboards in the waiting room.",
  },
]

// Patient-specific FAQ items
const patientFaqItems = [
  {
    question: "How do I use Lyfe AI before my appointment?",
    answer:
      "After scheduling your appointment, you'll receive a text message from Lyfe AI. Simply respond to the questions about your health, symptoms, and medical history. It's like texting with a helpful assistant.",
  },
  {
    question: "Is my health information kept private?",
    answer:
      "Yes, your privacy is our top priority. Lyfe AI is fully HIPAA compliant, meaning your health information is encrypted and protected by the same strict standards as your doctor's office.",
  },
  {
    question: "Do I have to use this instead of talking to my doctor?",
    answer:
      "Not at all! Lyfe AI helps your doctor prepare for your visit by gathering information beforehand. You'll still have your full appointment time to discuss concerns directly with your healthcare provider.",
  },
  {
    question: "What if I don't want to answer a question?",
    answer:
      "You can skip any question you're not comfortable answering. Your participation is voluntary, and you can always discuss sensitive topics directly with your doctor during your appointment.",
  },
  {
    question: "How long does the intake process take?",
    answer:
      "Most patients complete the intake in 5-10 minutes. You can do it anytime before your appointment - on your couch, during your commute, or whenever is convenient for you.",
  },
  {
    question: "What happens to my information after my visit?",
    answer:
      "Your information becomes part of your medical record at your healthcare provider's office, just like any other intake form. It's stored securely and used only for your care.",
  },
  {
    question: "Can I update my information if something changes?",
    answer:
      "Yes! If your symptoms change or you remember something important before your appointment, you can text Lyfe AI to update your information. Your doctor will see the latest version.",
  },
  {
    question: "What if I have trouble using the text system?",
    answer:
      "Our AI is designed to be simple and conversational. If you have any issues, you can always complete traditional paperwork at your appointment, or contact your provider's office for assistance.",
  },
]
