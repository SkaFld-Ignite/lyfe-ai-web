"use client"

import Link from "next/link"
import { Mail } from "lucide-react"
import { motion } from "motion/react"

import { LyfeLogo } from "@/components/lyfe-logo"
import { SectionCard } from "@/components/section-card"

const footerConfig = {
  brand: {
    name: "Lyfe AI",
    description: "Complete patient stories. Before they walk in.",
    location: "Nashville, TN",
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { text: "Home", href: "/" },
      { text: "How It Works", href: "#how-it-works" },
      { text: "For Providers", href: "#providers" },
      { text: "For Patients", href: "#patients" },
      { text: "About", href: "#about" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Terms of Service", href: "/terms" },
      { text: "HIPAA Notice", href: "/hipaa" },
    ],
  },
  contact: {
    title: "Contact",
    email: "hello@lyfe.ai",
  },
} as const

export function MarketingFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-1 md:pt-4">
      <SectionCard className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <LyfeLogo />
            <p className="text-foreground/80 text-sm leading-relaxed">
              {footerConfig.brand.description}
            </p>
            <p className="text-foreground/60 text-sm">
              {footerConfig.brand.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {footerConfig.quickLinks.title}
            </h3>
            <ul className="space-y-2">
              {footerConfig.quickLinks.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-emerald-500 transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {footerConfig.legal.title}
            </h3>
            <ul className="space-y-2">
              {footerConfig.legal.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-emerald-500 transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {footerConfig.contact.title}
            </h3>
            <motion.a
              href={`mailto:${footerConfig.contact.email}`}
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-emerald-500 transition-colors text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="h-4 w-4" />
              {footerConfig.contact.email}
            </motion.a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-center text-foreground/60 text-sm">
            © {currentYear} {footerConfig.brand.name}. All rights reserved.
          </p>
        </div>
      </SectionCard>
    </footer>
  )
}
