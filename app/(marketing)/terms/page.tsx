"use client"

import { FadeIn } from "@/components/fade-in"
import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"

export default function TermsOfUsePage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 pt-24 md:pt-28 pb-16">
      <FadeIn key="terms">
        <SectionCard>
          <div className="space-y-6">
            <GradientHeading size="xl" weight="bold">
              Terms of Use
            </GradientHeading>

            <p className="text-sm text-muted-foreground">
              Last Updated November 17, 2025
            </p>

            <div className="space-y-8 text-foreground/80">
              <p className="leading-relaxed">
                These Terms of Use (or &quot;Terms&quot;) are a binding contract between LyfeVault, Inc. dba Lyfe AI (&quot;Lyfe&quot;) and you as a current or potential new Provider, Patient, or Caregiver (collectively referred to herein as &quot;Users&quot;) or a visitor to our website. These Terms, and together with our{" "}
                <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                  Privacy Policy
                </a>, govern your use of Lyfe&apos;s healthcare application and platform (&quot;Platform&quot;), our mobile application (&quot;App&quot;), and your interactions with Lyfe in any manner (collectively, the &quot;Services&quot;).
              </p>

              <p className="leading-relaxed font-semibold">
                THESE TERMS INCLUDE A CLASS ACTION WAIVER AND AN ARBITRATION PROVISION THAT GOVERNS ANY DISPUTES BETWEEN YOU AND LYFE.
              </p>

              <p className="leading-relaxed">
                If you have questions about any of our Services or these Terms of Use, please contact us through your account on the Platform or at{" "}
                <a href="mailto:hello@lyfeco.ai" className="text-blue-600 hover:text-blue-700 underline">
                  hello@lyfeco.ai
                </a>.
              </p>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  1. Acceptance
                </h2>
                <p className="leading-relaxed">
                  By clicking &quot;Accept&quot; or using the Services, you agree to these Terms in their entirety. You must be at least 18 years old or have permission from your parent/legal guardian.
                </p>
                <p className="leading-relaxed">
                  To use the Services, you must agree to be unconditionally bound by these Terms. To use the Services, you must reside in the United States or any of its territories or possessions and (a) you must be at least 18 years old and of legal capacity to form a binding contract or (b) if you are less than 18 years old, your parent or legal guardian must authorize your use of the Services through their Caregiver account. A parent/legal guardian is fully responsible for all use of the Services by their minor User. If you do not agree with any of these Terms, do not access or use the Services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  2. Services
                </h2>
                <p className="leading-relaxed">
                  You can visit our website or online channels as a website visitor. The Platform is a web-based healthcare platform that integrates with multiple electronic medical record systems to provide a unified interface for accessing and managing health data. The Platform allows (a) licensed healthcare providers (&quot;Providers&quot;) to access aggregated patient data from multiple EMR sources and AI-powered clinical decision support tools; (b) patients of Providers (&quot;Patients&quot;) to view and manage their own health information and care preferences on the Platform; and (c) legally authorized caregivers (&quot;Caregivers&quot;) to manage a Patient&apos;s account on the Platform.
                </p>
                <p className="leading-relaxed">
                  By using the Services in any capacity, you represent and warrant that (a) any information you submit to us is truthful and accurate; (b) you will maintain the accuracy of that information; (c) you will be entirely responsible for maintaining the security of your login credentials; and (d) your use of our Services does not and will not violate any applicable law, rule or regulation.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  3. Registration
                </h2>
                <p className="leading-relaxed">
                  Each User must register and create an account to access and use the Platform. You may not use false identities, false information, or impersonate any other person or use credentials that you are not authorized to use. You are responsible for maintaining the confidentiality of your login credentials. Your login credentials are for your personal use only and shall not be shared. You accept responsibility for all activity that occurs under your account.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  4. Not Medical Treatment or Advice
                </h2>
                <p className="leading-relaxed">
                  You understand and agree that (a) the Services are not medical, health care, legal, accounting, financial, or other professional advice and (b) the Services do not diagnose, treat, cure, or guarantee prevention of any injury or illness. Lyfe does not offer professional advice or any medical services, healthcare, or health insurance services. THE SERVICES ARE PROVIDED FOR INFORMATIONAL PURPOSES ONLY. LYFE DOES NOT OFFER PROFESSIONAL ADVICE. You are advised to seek diagnosis, treatment, and advice regarding medical or mental conditions from licensed healthcare professionals.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  5. Health Privacy
                </h2>
                <p className="leading-relaxed">
                  A Provider that is a covered entity under the Health Insurance Portability and Accountability Act of 1996 (&quot;HIPAA&quot;) is solely responsible for (i) confirming that the Services meet the Provider&apos;s HIPAA standards; (ii) using the Services in compliance with HIPAA and other applicable health privacy laws; (iii) ensuring that Provider has executed and complies with a Business Associate Agreement with Lyfe; and (iv) training its Authorized Users to use the Services in compliance with HIPAA.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  6. Patient-Provider Relationship
                </h2>
                <p className="leading-relaxed">
                  Your use of the Services as a Patient does not change your relationship with your Provider through which you are using the Services, and it does not make Lyfe a party to any relationship or transactions you have with a Provider. Any medical care, treatment, purchases, or services sought or received by a Patient from a Provider is governed by the Provider&apos;s terms and conditions and policies.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  7. Provider Authorized Users
                </h2>
                <p className="leading-relaxed">
                  If you access the Services through the Provider&apos;s contractual relationship with Lyfe (&quot;Authorized User&quot;), your access to the Services is paid by the Provider, and you will be able to use the Services subject to the Provider&apos;s policies. As an Authorized User, you understand you have no employment relationship with Lyfe and that you and Lyfe are independent contractors under these Terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  8. Artificial Intelligence
                </h2>
                <p className="leading-relaxed">
                  Lyfe incorporates certain technology powered by generative or predictive artificial intelligence, large language models, or machine learning (&quot;AI&quot;) to the Platform chat feature and other features. You hereby consent to the processing of your data on the Platform using AI as described in this section and our Privacy Policy.
                </p>
                <p className="leading-relaxed">
                  You understand and agree that AI-generated outputs are not human-created and are not a substitute for human oversight; AI may generate the same or similar output for multiple Users; outputs may provide incomplete, incorrect, or offensive information; and each output must be confirmed for accuracy prior to use. A PATIENT SHOULD DIRECT QUESTIONS ABOUT THEIR PROVIDER&apos;S USE OF AI VIA THE SERVICES OR OTHERWISE TO THE PROVIDER. User relies on AI outputs at the User&apos;s own risk.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  9. App
                </h2>
                <p className="leading-relaxed">
                  To use the App, you must have a compatible mobile telephone or handheld device, Internet access, and the necessary minimum specifications (&quot;Software Requirements&quot;). The App may be upgraded from time to time to add support for new functions and services. Data and messaging charges may apply to your use of the Services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  10. Privacy Policy
                </h2>
                <p className="leading-relaxed">
                  You acknowledge that you have read and understand our{" "}
                  <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                    Privacy Policy
                  </a>. You may review our Privacy Policy at any time by visiting our website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  11. Lyfe Intellectual Property
                </h2>
                <p className="leading-relaxed">
                  Unless otherwise expressly indicated, the Services, which includes all information, data, software, images, content, text, designs, graphics, and other materials contained in the Services, as well as names, logos, and trademarks displayed on the Services, are intellectual property owned, controlled, or licensed by Lyfe (collectively, the &quot;Lyfe IP&quot;).
                </p>
                <p className="leading-relaxed">
                  Subject to these Terms, Lyfe hereby grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access, download, install, and use the Services for your own personal or internal business purposes. You may not resell, sublicense, or otherwise commercialize the Services in any manner. The Services are licensed to you, not sold.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  12. User Content
                </h2>
                <p className="leading-relaxed">
                  Users may have the opportunity to publish, transmit, submit or otherwise post comments, feedback, photos, data, or other materials via the Services (&quot;User Content&quot;). With respect to any User Content posted by you, you represent that (a) you created and own the rights to the content, or you have the owner&apos;s express permission; and (b) the content does not infringe any other person&apos;s or entity&apos;s rights.
                </p>
                <p className="leading-relaxed">
                  You are solely responsible for your User Content and the consequences of posting it online. We reserve the right, but have no obligation, to monitor, review, screen, post, remove, reject, modify, or store User Content at any time and for any reason without notice.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  13. Acceptable Use
                </h2>
                <p className="leading-relaxed">
                  You agree not to: (a) rent, retransmit, disclose, publish, sell, assign, lease, sublicense, market, or transfer Lyfe IP; (b) copy, reverse engineer, translate, port, modify, or make derivative works of any portion of the Services; (c) violate or attempt to violate the security features of the Services; (d) use any device, software, or routine to interfere with the proper working of the Services; or (e) use any unauthorized device or mechanism to navigate or search the Services. Tampering with the Services, conducting fraudulent activities, and all other illegal activities are prohibited.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  14. DMCA Notice
                </h2>
                <p className="leading-relaxed">
                  Lyfe respects the intellectual property rights of others. If you are a copyright owner or an agent thereof and believe that any Lyfe IP infringe upon your copyrights, you may submit a notification pursuant to the Digital Millennium Copyright Act (&quot;DMCA&quot;) to the address provided in Section 23.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  15. Availability
                </h2>
                <p className="leading-relaxed">
                  Lyfe will use commercially reasonable efforts to maintain availability of the Services. You agree and understand that there will be times when the Services will not be available, such as scheduled maintenance times, outages, emergency maintenance, and causes beyond our reasonable control. Lyfe is not liable for any delays, interruptions, or other transmission errors.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  16. Third-Party Content
                </h2>
                <p className="leading-relaxed">
                  The Services may include third-party content and/or hyperlinks to websites, resources, or content owned or operated by third parties (&quot;Third-Party Content&quot;). We are not responsible for the content of any Third-Party Content. Inclusion of Third-Party Content does not imply our approval or endorsement.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  17. Legal Compliance; Void Where Prohibited
                </h2>
                <p className="leading-relaxed">
                  Lyfe administers and operates the Services from its headquarters in the United States. If you choose to access the Services from outside the United States, you do so on your own initiative and are solely responsible for complying with applicable local laws. Not all features, products or services discussed, referenced, provided, or offered via the Services are available to all persons or in all geographic locations.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  18. Term and Termination
                </h2>
                <p className="leading-relaxed">
                  These Terms begin on the date you first access the Services and remain in full force and effect as long as you use the Services. On termination, you lose the right to access or use the Services. All provisions of these Terms that by its nature would survive expiration or termination will survive.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  19. Limitation of Liability
                </h2>
                <p className="leading-relaxed">
                  TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOU EXPRESSLY UNDERSTAND AND AGREE THAT IN NO EVENT SHALL LYFE, ITS EMPLOYEES, AGENTS, SUPPLIERS OR INDEPENDENT CONTRACTORS (THE &quot;DISCLAIMING ENTITIES&quot;) BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES. BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH JURISDICTIONS, OUR LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  20. Disclaimer of Warranties
                </h2>
                <p className="leading-relaxed">
                  EXCEPT AS EXPRESSLY PROVIDED HEREIN, THE SERVICES ARE PROVIDED &quot;AS-IS&quot; AND LYFE DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, ORAL OR WRITTEN, INCLUDING, WITHOUT LIMITATION, ANY WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, THAT THE SERVICES ARE ERROR-FREE, FAULT-TOLERANT, OR FAIL-SAFE, OR OF NONINTERFERENCE, SYSTEM INTEGRATION, OR NONINFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS. YOU AGREE THAT YOUR USE OF THE SERVICES IS AT YOUR SOLE DISCRETION AND RISK.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  21. Indemnification
                </h2>
                <p className="leading-relaxed">
                  YOU AGREE TO INDEMNIFY, DEFEND, AND HOLD HARMLESS LYFE AND THE DISCLAIMING ENTITIES FROM ALL CLAIMS, LOSSES, DAMAGES, PENALTIES, LIABILITY AND COSTS, INCLUDING REASONABLE ATTORNEYS&apos; FEES, ARISING OUT OF OR RELATED TO A CLAIM (A) ALLEGING THAT YOUR USE OF THE SERVICES INFRINGES OR VIOLATES THE RIGHTS OF A THIRD PARTY OR VIOLATES APPLICABLE LAW; OR (B) ARISING OUT OF YOUR BREACH OF THESE TERMS OF USE.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  22. Dispute Resolution
                </h2>
                <p className="leading-relaxed font-semibold">
                  PLEASE READ THE FOLLOWING SECTION CAREFULLY BECAUSE IT CONTAINS A CLASS ACTION WAIVER, REQUIRES YOU TO ARBITRATE CERTAIN DISPUTES, AND LIMITS THE MANNER IN WHICH YOU CAN SEEK RELIEF FROM US.
                </p>
                <p className="leading-relaxed">
                  <strong>Informal Dispute Resolution.</strong> We want to address your concerns without the necessity of a formal legal case. Before filing a claim against Lyfe, you agree to try to resolve the Dispute informally by contacting{" "}
                  <a href="mailto:hello@lyfeco.ai" className="text-blue-600 hover:text-blue-700 underline">
                    hello@lyfeco.ai
                  </a>. If a Dispute is not resolved within 30 days after submission, you or Lyfe may bring a formal proceeding.
                </p>
                <p className="leading-relaxed">
                  <strong>Arbitration Agreement.</strong> You and Lyfe each agree to resolve any Disputes through final and binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules. The arbitration will be held in Nashville, Tennessee, United States, or any other location we agree to.
                </p>
                <p className="leading-relaxed">
                  <strong>Class Action Waiver.</strong> You may only resolve Disputes with Lyfe on an individual basis and may not bring a claim as a plaintiff or a class member in a class, consolidated, or representative action. Class arbitrations, class actions, private attorney general actions, and consolidation with other arbitrations are not allowed.
                </p>
                <p className="leading-relaxed">
                  <strong>Legal Fees.</strong> If any dispute arises between the parties which leads to a proceeding, the prevailing party shall be entitled to receive its reasonable attorneys&apos; fees, expert witness fees, and out-of-pocket costs.
                </p>
                <p className="leading-relaxed">
                  <strong>Limitation on Claims.</strong> Regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to your use of the Services must be filed within one (1) year after such claim or cause of action arose, or else that claim will be barred forever.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  23. General
                </h2>
                <p className="leading-relaxed">
                  <strong>Relationship of Parties.</strong> The parties&apos; relationship is solely that of independent contractors. No joint venture, partnership, employment, or agency relationship exists between you and Lyfe.
                </p>
                <p className="leading-relaxed">
                  <strong>Geographic Restrictions.</strong> The Services are based in the United States. You may not be able to access all or some of the Services outside of the United States.
                </p>
                <p className="leading-relaxed">
                  <strong>Governing Law; Venue.</strong> These Terms shall be governed by the internal laws of the State of Tennessee without regard to conflicts of law principles. If federal jurisdiction exists, the parties consent to exclusive jurisdiction and venue in the federal courts in Davidson County, Tennessee.
                </p>
                <p className="leading-relaxed">
                  <strong>No Assignment.</strong> No right or obligation pursuant to these Terms may be assigned by either party without the other party&apos;s written consent, and any such attempted assignment shall be void.
                </p>
                <p className="leading-relaxed">
                  <strong>Entire Agreement.</strong> These Terms and the agreements and documents incorporated by reference constitute the entire agreement between you and Lyfe with respect to the Services. Lyfe reserves the right to revise these Terms of Service by updating this posting without prior notice.
                </p>
                <p className="leading-relaxed">
                  <strong>Severability; Waiver.</strong> Lyfe&apos;s failure to enforce any right or provision of these Terms will not be considered a waiver. If any provision is held invalid or unenforceable, the remainder of the provision shall be amended to achieve as closely as possible the economic effect of the original term.
                </p>
                <p className="leading-relaxed">
                  <strong>Notices.</strong> Any notice shall be deemed given when delivered in person, sent by United States registered or certified mail, or received by courier. If to Lyfe: LyfeVault Inc, d.b.a Lyfe AI, 1030 16th Avenue S, 2nd Floor, Nashville, TN 37212.
                </p>
                <p className="leading-relaxed">
                  <strong>Force Majeure.</strong> Lyfe will not be liable for failure to perform any obligation under these Terms to the extent such failure is caused by a force majeure event, including but not limited to acts of God, natural disasters, war, pandemic, strike, and other causes beyond Lyfe&apos;s reasonable control.
                </p>
                <p className="leading-relaxed">
                  <strong>Electronic Records and Signature.</strong> By clicking &quot;ACCEPT&quot;, you consent to: (a) the terms and conditions of these Terms; (b) Lyfe communicating with you electronically; (c) receiving all applications, notices, disclosures and authorizations from Lyfe electronically; and (d) entering into agreements using electronic Records and signatures. Electronic signatures have the same legal force as paper signatures.
                </p>
              </section>

              <section className="space-y-4 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  If you have questions about these Terms of Use, please contact us at{" "}
                  <a href="mailto:hello@lyfeco.ai" className="text-blue-600 hover:text-blue-700 underline">
                    hello@lyfeco.ai
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </SectionCard>
      </FadeIn>
    </div>
  )
}
