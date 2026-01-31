# PRD: Lyfe AI Marketing Website Redesign

## Introduction

Redesign the Lyfe AI marketing website to serve as the primary marketing site for lyfeco.ai. The site will feature dual-audience messaging (providers and patients) with a tab-based toggle, rich animations and interactivity inspired by jointrybe.com, and an interactive product visualization showing how Lyfe AI transforms fragmented medical records into complete patient stories.

**Key Principle**: Marketing-focused, not investor-focused. Concise messaging. No overengineering.

## Goals

- Create a compelling marketing site that clearly communicates Lyfe AI's value proposition
- Separate messaging for providers (revenue-generating) and patients (free users)
- Implement smooth animations and interactive elements for modern feel
- Visualize the product workflow through engaging animated graphics
- Drive "Request Access" conversions for both audiences
- Establish trust through HIPAA compliance messaging and social proof

## User Stories

### US-001: Implement Audience Toggle Component
**Description:** As a visitor, I want to switch between provider and patient views so I can see messaging relevant to my role.

**Acceptance Criteria:**
- [ ] Tab-based toggle in hero section with "For Providers" and "For Patients" options
- [ ] Toggle persists selection across page sections
- [ ] Smooth transition animation when switching (fade/slide)
- [ ] URL hash updates to reflect selection (#providers / #patients)
- [ ] Default to provider view on initial load
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-002: Redesign Hero Section - Provider View
**Description:** As a healthcare provider, I want to immediately understand what Lyfe AI does so I can evaluate if it solves my problem.

**Acceptance Criteria:**
- [ ] Headline: "Complete Patient Stories. Before They Walk In."
- [ ] Subheadline: "AI-powered platform that aggregates scattered medical records into one searchable timeline—and syncs back to your EMR."
- [ ] Primary CTA: "Request Access" button with glow effect
- [ ] Secondary CTA: "Watch Demo" linking to product video
- [ ] Hero image/animation showing Clinical Timeline View interface
- [ ] Entrance animations using Framer Motion (staggered fade-in)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-003: Redesign Hero Section - Patient View
**Description:** As a patient, I want to understand how Lyfe AI helps me so I can decide to sign up.

**Acceptance Criteria:**
- [ ] Headline: "Your Health Records. Finally In One Place."
- [ ] Subheadline: "Access, understand, and share your complete medical history—free."
- [ ] Primary CTA: "Request Access" button
- [ ] Secondary CTA: "Learn How It Works"
- [ ] Hero visual showing patient-facing app interface
- [ ] Consistent animation style with provider view
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-004: Create Interactive Product Workflow Visualization
**Description:** As a visitor, I want to see how Lyfe AI works visually so I can understand the product without reading lengthy explanations.

**Acceptance Criteria:**
- [ ] Animated infographic showing: Fragmented Records → AI Aggregation → Clinical Timeline → EMR Sync
- [ ] Scroll-triggered animation stages (each stage animates as user scrolls into view)
- [ ] Clickable/tappable steps for detailed explanations
- [ ] Provider view emphasizes: "95% of US providers" data access, bi-directional EMR sync
- [ ] Patient view emphasizes: "One place for all records", easy sharing with doctors
- [ ] SVG-based graphics with Framer Motion animations
- [ ] Mobile-responsive layout (vertical flow on mobile)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-005: Build Provider Value Proposition Section
**Description:** As a provider, I want to see specific benefits so I can justify the investment.

**Acceptance Criteria:**
- [ ] 3-4 benefit cards with icons and concise copy:
  - "Stop Chasing Records" - Aggregate from 95% of US healthcare providers
  - "Complete Context at Point of Care" - ER visits, med changes, lab results
  - "Bi-directional EMR Sync" - Write curated data back to your system
  - "HIPAA Certified & FHIR R4 Compliant" - Enterprise-grade security
- [ ] Hover animations on cards (subtle lift/glow)
- [ ] Staggered entrance animations on scroll
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-006: Build Patient Value Proposition Section
**Description:** As a patient, I want to understand what I get for free so I feel confident signing up.

**Acceptance Criteria:**
- [ ] 3-4 benefit cards:
  - "All Your Records, One Place" - Every doctor, hospital, lab
  - "Understand Your Health" - AI-powered summaries in plain language
  - "Share Easily" - Send records to any provider instantly
  - "Always Free" - No cost, no catch
- [ ] Visual consistency with provider section
- [ ] Scroll-triggered animations
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-007: Create Provider Pricing Section
**Description:** As a provider evaluating Lyfe AI, I want to see pricing so I can assess fit for my practice.

**Acceptance Criteria:**
- [ ] Single pricing tier displayed: "$1,500/month per 10 providers"
- [ ] Feature list under pricing:
  - Unlimited patient records
  - Bi-directional EMR sync
  - Clinical Timeline View
  - HIPAA compliant
  - Dedicated onboarding
- [ ] CTA: "Request Access" or "Start 90-Day Pilot"
- [ ] Note: "Custom pricing for larger practices"
- [ ] Only visible when provider toggle is selected
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-008: Build Social Proof Section
**Description:** As a visitor, I want to see that others trust Lyfe AI so I feel confident in the platform.

**Acceptance Criteria:**
- [ ] "Trusted by specialty practices" or similar header
- [ ] Placeholder for practice logos (can use generic medical icons initially)
- [ ] Quote/testimonial area (can use founder quote initially)
- [ ] Trust badges: HIPAA Certified, FHIR R4, SOC 2 (if applicable)
- [ ] Subtle background animation or gradient
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-009: Redesign Navigation Header
**Description:** As a visitor, I want clear navigation so I can find what I need quickly.

**Acceptance Criteria:**
- [ ] Lyfe AI logo (left)
- [ ] Nav links: How It Works, For Providers, For Patients, Pricing (provider only), About
- [ ] Login button (text link style)
- [ ] "Request Access" CTA button (primary style)
- [ ] Mobile hamburger menu with smooth slide-in animation
- [ ] Sticky header with blur background on scroll
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-010: Redesign Footer
**Description:** As a visitor, I want standard footer information for credibility and navigation.

**Acceptance Criteria:**
- [ ] Company info: Lyfe AI, Nashville TN
- [ ] Quick links: Home, How It Works, Providers, Patients, Pricing, About
- [ ] Legal links: Privacy Policy, Terms of Service, HIPAA Notice
- [ ] Contact: Email link
- [ ] Social links (if applicable)
- [ ] Copyright with current year
- [ ] Clean, minimal design
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-011: Create "How It Works" Detailed Section
**Description:** As a visitor who wants more detail, I want a comprehensive explanation of the product flow.

**Acceptance Criteria:**
- [ ] Step-by-step breakdown with animations:
  1. Connect - Link your EMR or create patient account
  2. Aggregate - We pull records from across the healthcare system
  3. Unify - AI creates searchable Clinical Timeline
  4. Sync - Curated data writes back to provider EMR (provider view only)
- [ ] Each step has icon, headline, 1-2 sentence description
- [ ] Animated connectors between steps
- [ ] Alternating left/right layout on desktop
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-012: Implement Request Access Modal/Form
**Description:** As an interested visitor, I want to request access so I can get on the waitlist.

**Acceptance Criteria:**
- [ ] Modal or inline form with fields:
  - Name
  - Email
  - Role (Provider/Patient dropdown)
  - Practice Name (conditional, shown for providers)
  - Practice Size (conditional, shown for providers)
- [ ] Form validation with clear error messages
- [ ] Submit button with loading state
- [ ] Success state with confirmation message
- [ ] Stores submission (Supabase table or email service)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-013: Add Page Transition Animations
**Description:** As a visitor, I want smooth page transitions so the site feels polished and modern.

**Acceptance Criteria:**
- [ ] Fade transitions between routes
- [ ] Scroll-triggered section animations (FadeIn component exists, enhance usage)
- [ ] Parallax effects on hero images (subtle)
- [ ] Smooth scroll behavior for anchor links
- [ ] Respect user's reduced-motion preferences
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-014: Update Metadata and SEO
**Description:** As a search engine, I want proper metadata so the site ranks well for relevant queries.

**Acceptance Criteria:**
- [ ] Update page title: "Lyfe AI - Complete Patient Stories Before They Walk In"
- [ ] Meta description focused on provider pain point
- [ ] Open Graph images updated with Lyfe AI branding
- [ ] Structured data for healthcare software
- [ ] Remove all "Cult Polar Starter" references
- [ ] Typecheck passes

---

### US-015: Mobile Responsiveness Audit
**Description:** As a mobile visitor, I want the site to work perfectly on my device.

**Acceptance Criteria:**
- [ ] All sections responsive from 320px to 1920px+
- [ ] Touch-friendly tap targets (min 44px)
- [ ] Audience toggle works on mobile
- [ ] Product visualization adapts to vertical layout
- [ ] No horizontal scroll issues
- [ ] Fast load times on mobile (< 3s)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

## Functional Requirements

- FR-1: Audience toggle must persist selection across all page sections
- FR-2: All animations must use Framer Motion for consistency
- FR-3: Request Access form must validate email format and required fields
- FR-4: Pricing section must only render when provider view is active
- FR-5: Navigation must include working login link to /auth/login
- FR-6: All images must have alt text for accessibility
- FR-7: Site must work without JavaScript (graceful degradation for core content)
- FR-8: Form submissions must be stored persistently (Supabase recommended)

## Non-Goals

- No blog redesign in this phase (keep existing)
- No authentication flow changes
- No dashboard/app changes
- No investor-focused content (pitch deck stats, funding info)
- No video production (use placeholders or existing demo video)
- No custom CMS for content editing
- No A/B testing infrastructure
- No analytics implementation (separate task)

## Design Considerations

### Visual Style
- Clean, modern healthcare aesthetic
- Trust-building color palette (blues, greens, whites)
- Generous whitespace
- Sharp, professional typography
- Subtle gradients and shadows (existing design system)

### Animation Guidelines
- Entrance animations: 300-500ms duration
- Hover effects: 150-200ms duration
- Scroll triggers: Intersection Observer with 20% threshold
- Easing: ease-out for entrances, ease-in-out for interactions
- Respect prefers-reduced-motion

### Reference Sites
- jointrybe.com - Audience segmentation pattern, animation style
- Existing Lyfe AI pitch deck - Product flow visualization

### Reusable Components (existing)
- FadeIn, GlowEffect, GradientHeading, Magnetic, Tilt
- TextShimmerWave, ProximityHoverText, ProgressiveBlur

## Technical Considerations

- Next.js 15 with App Router (existing)
- Framer Motion for animations (existing)
- Tailwind CSS for styling (existing)
- shadcn/ui components (existing)
- Supabase for form submissions (existing infrastructure)
- Keep existing auth flow intact

## Success Metrics

- Clear value proposition understood within 5 seconds (user testing)
- Request Access form completion rate > 10% of visitors
- Mobile bounce rate < 50%
- Page load time < 2s on desktop, < 3s on mobile
- Zero accessibility violations (axe-core audit)

## Open Questions

1. Do we have a product demo video URL to embed?
2. Are there any existing practice logos we can use for social proof?
3. Should "Request Access" go to a Typeform/external form or custom built?
4. Do we have brand guidelines (specific colors, fonts) or should we establish them?
5. Is there a preferred contact email for the footer?

---

## Implementation Order

Recommended sequence for development:

1. **Foundation** (US-009, US-010, US-014) - Nav, Footer, SEO
2. **Core Experience** (US-001, US-002, US-003) - Toggle + Hero sections
3. **Product Story** (US-004, US-011) - Workflow visualization
4. **Value Props** (US-005, US-006, US-007, US-008) - Benefits + Pricing + Social Proof
5. **Conversion** (US-012) - Request Access form
6. **Polish** (US-013, US-015) - Animations + Mobile audit
