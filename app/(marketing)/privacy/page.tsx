"use client"

import { FadeIn } from "@/components/fade-in"
import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8 pb-2">
      <FadeIn key="privacy">
        <SectionCard>
          <div className="space-y-6">
            <GradientHeading size="xl" weight="bold">
              Privacy Policy
            </GradientHeading>

            <p className="text-sm text-muted-foreground">
              Last Updated November 17, 2025
            </p>

            <div className="space-y-8 text-foreground/80">
              <p className="leading-relaxed">
                This Privacy Policy for LyfeVault, Inc. dba Lyfe AI (&quot;Lyfe&quot;) describes the collection and use of Personal Data through Lyfe&apos;s healthcare application and platform (&quot;Platform&quot;) and your interactions with Lyfe in any manner (collectively, the &quot;Services&quot;). This Privacy Policy is governed by and part of our Terms of Use. <strong>By accessing our Services in any manner, you agree to our privacy practices as described in this Privacy Policy.</strong> If you do not agree with this Privacy Policy, do not access or use our Services. If you have questions about our privacy practices, please contact Lyfe at{" "}
                <a href="mailto:hello@lyfeco.ai" className="text-blue-600 hover:text-blue-700 underline">
                  hello@lyfeco.ai
                </a>.
              </p>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  1. Health Privacy
                </h2>
                <p className="leading-relaxed">
                  Lyfe offers a web-based healthcare platform that integrates with multiple electronic medical record or electronic health record (&quot;EMR&quot;) systems to provide a unified interface for accessing and managing health data. The Platform allows (a) licensed healthcare providers subject to our Terms of Service (&quot;Providers&quot;) to access aggregated patient data from multiple EMR sources and AI-powered clinical decision support tools; (b) patients of Providers (&quot;Patients&quot;) to view and manage their own health information and care preferences on the Platform; and (c) legally authorized caregivers of Patients who are granted delegated access to manage a Patient&apos;s account on the Platform (&quot;Caregivers&quot;). Patients grant their Caregiver(s) access to the Patient&apos;s information on the Platform and identify the Caregiver&apos;s permission, scope of access, and relationship to the Patient.
                </p>
                <p className="leading-relaxed">
                  Lyfe collects and processes health data from the Patient&apos;s Provider. For purposes the Health Insurance Portability and Accountability Act of 1996 (&quot;HIPAA&quot;), Lyfe is a business associate to the Provider subject to a Business Associate Agreement. A Patient may withdraw their consent to their Provider to process their health data on the Services at any time by contacting their Provider. If you are a Patient and you have questions about health privacy, please contact your Provider.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  2. Minors
                </h2>
                <p className="leading-relaxed">
                  A parent or legal guardian may use the Services for a minor Patient who is their child as a Caregiver to that minor Patient. Caregivers of minor Patients establish access to the Platform on behalf of the minor Patient, subject to documentation and relationship verification. Caregivers of minor Patients are solely responsible for determining and providing authorization to other Users for Provider, Caregiver, or Patient access to data through the Platform. Lyfe will never knowingly collect Personal Data from a child online without prior express consent from the child&apos;s parent or legal guardian. If we learn we have collected or received Personal Data from a child without authorization, we will delete that information.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  3. Personal Data
                </h2>
                <p className="leading-relaxed">
                  As used in this Privacy Policy, &quot;Personal Data&quot; means any information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or household. Personal Data is typically described in categories, for example:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Identifiers</strong> (e.g., name, email, telephone number, address)</li>
                  <li><strong>Sensitive information</strong> (e.g., health information; government ID; racial or ethnic origin; religious beliefs; contents of messages when we are not the recipient; in some cases, information about a known child)</li>
                  <li><strong>Legally protected information</strong> (e.g., race, citizenship, marital status, sex)</li>
                  <li><strong>Biometrics</strong> (e.g., DNA, face/voice prints, health data) and audio, electronic, visual, thermal, or olfactory information</li>
                  <li><strong>Employment-related information</strong> (e.g., current or past employment)</li>
                  <li><strong>Non-public educational information</strong>, including information protected under the Family Educational Rights and Privacy Act (20 U.S.C. § 1232g, 34 C.F.R. Part 99)</li>
                  <li><strong>Commercial information</strong> (e.g., products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies)</li>
                  <li><strong>Internet or other similar activity</strong> (e.g., browsing history; content interactions)</li>
                  <li><strong>Inferences</strong> drawn from Personal Data to create a profile about preferences, characteristics, trends, predispositions, behavior, attitudes, intelligence, and aptitudes</li>
                </ul>
                <p className="leading-relaxed">
                  Information that is sometimes not protected by law as Personal Data includes publicly available information; aggregated information (meaning data summaries or reports with Personal Data removed); or anonymized information that cannot be linked back to an individual.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  4. Lyfe&apos;s Privacy Practices
                </h2>
                <p className="leading-relaxed">
                  Lyfe collects and uses Personal Data from Patients as described in this section. During the preceding 12 months, Lyfe has collected Patient identifiers, sensitive information (including health data), commercial information, and other categories of Personal Data that might be disclosed to us as a business associate to our Providers. We will not collect additional categories of Personal Data or use already collected Personal Data for purposes that are materially different, unrelated, or not reasonably necessary or compatible with the original purpose without notice and consent to you as required by law.
                </p>
                <p className="leading-relaxed">
                  Lyfe collects your Personal Data (a) with your consent when you opt-in to use our Services; (b) if we have a legitimate interest in doing so, like providing the Services to our Providers; or (c) as authorized or required by law. We only collect, use, retain, and disclose Personal Data as is adequate and relevant to the specific, express purpose of providing the Services to our Providers or as reasonably necessary and proportionate to achieve our internal business or other purposes permitted by applicable law.
                </p>
                <p className="leading-relaxed">
                  <strong>Providers.</strong> Providers and their Authorized Users register with Lyfe directly during the onboarding process. At registration, Lyfe collects the Authorized User&apos;s name, login credentials, professional credentials, license number, practice details, and contact information. Providers use the Services to manage their Patients&apos; EMR. The Provider will disclose any health data or other Personal Data contained in their Patient&apos;s EMR to Lyfe through secure integrations between the Platform and health information exchanges or other technology platforms. Lyfe applies HIPAA standards and requirements to all protected health information (&quot;PHI&quot;) on the Platform.
                </p>
                <p className="leading-relaxed">
                  <strong>Patients.</strong> Patients register with Lyfe to create their account and use the Platform. At registration, Lyfe collects the Patient&apos;s full name, login credentials, date of birth, email address, phone number, and details necessary to verify the patient&apos;s identity. The Patient also has the option to include in their profile additional contact details, emergency contact information, and their communication preferences.
                </p>
                <p className="leading-relaxed">
                  <strong>Caregivers.</strong> Patients may request access for a Caregiver to help manage the Patient&apos;s health data on the Platform. When the Caregiver accepts access, the Caregiver creates an account on the Platform. At registration, Lyfe collects the Caregiver&apos;s full name, login credentials, email address, phone number, and relationship to the Patient.
                </p>
                <p className="leading-relaxed">
                  <strong>Communications with Lyfe.</strong> If you contact Lyfe for any reason, we will collect your full name, account ID or email address, and any other information you choose to include in your message to us. We use this information to provide customer support, technical assistance, account management, and to respond to privacy requests.
                </p>
                <p className="leading-relaxed">
                  <strong>Automatically Collected Through the Services.</strong> Lyfe collects technical data to improve platform performance, user experience, and system reliability. The data collected for this purpose includes session information, page views, feature usage, system performance metrics, performance data, device information (type, operating system, browser), IP address, and generalized geographic location.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  5. Cookie Notice
                </h2>
                <p className="leading-relaxed">
                  Cookies are small text files downloaded and stored on your computer or mobile device when you visit or use an online platform. Cookies help the platform recognize your device, store your preferences, or perform certain functions for the platform. Lyfe deploys the following cookies:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential cookies</strong> such as session authentication tokens, User ID/account identifier, login state information, and security tokens for CSRF protection. Essential cookies cannot be disabled because they are necessary for platform security and basic functionality.</li>
                  <li><strong>Functional cookies</strong> to enhance user experience, including user interface preferences, language settings, display preferences, recently viewed items. Functional cookies are configurable by the user.</li>
                  <li><strong>Analytics cookies</strong> to improve performance, such as use patterns and navigation paths, feature interaction data, performance metrics, and error logging data. Analytics cookies are configurable by the user.</li>
                </ul>
                <p className="leading-relaxed">
                  You can directly control how cookies interact with your device by changing your permissions and settings when presented with a cookie consent pop-up or by changing your device or browser settings.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  6. Data Retention
                </h2>
                <p className="leading-relaxed">
                  Lyfe only retains Personal Data for the minimum period necessary to provide our Services or achieve our business goals. Our retention periods are governed by our contracts with Providers, HIPAA and other applicable laws, and Lyfe company policies. For example:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Patient accounts are retained while the account remains active and the Patient is an active user of the Platform. Inactive Patient accounts are deleted after 3 years of inactivity.</li>
                  <li>Caregiver account information is retained while the account is active. Personal Data is deleted 30 days after a Caregiver&apos;s account is closed.</li>
                  <li>EMR data is retained for 6 years from the date of creation or last Patient encounter. If the Patient was a minor at the time of treatment, their EMR data is retained until they reach age 18 or 6 years from the date of creation or last Patient encounter, whichever is longer.</li>
                  <li>HIPAA-required audit logs are retained for 6 years from the date of creation or last Patient encounter.</li>
                  <li>Access logs, security event logs, and audit trails are retained for 7 years.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  7. Disclosures of Personal Data
                </h2>
                <p className="leading-relaxed">
                  Lyfe will only disclose Personal Data to third parties as described in this section, with your permission, or as required by law. In the preceding 12 months, we have disclosed Personal Data for a business purpose to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Your Provider.</strong> Providers associated with a Patient will have access to the Patient&apos;s EMR data and other Personal Data on the Platform.</li>
                  <li><strong>Your Caregiver.</strong> If a Patient authorizes a Caregiver to use the Platform in connection with the Patient&apos;s account, the Caregiver will have access to the Personal Data within the scope of access and permissions selected by the Patient.</li>
                  <li><strong>Lyfe&apos;s service providers.</strong> Lyfe&apos;s service providers like cloud hosting, data security, analytics platforms, payment processing, and technical infrastructure may have access to Personal Data as needed to perform their contractual obligations to us.</li>
                  <li><strong>Law enforcement</strong> and other governmental agencies, as permitted or required by law.</li>
                  <li><strong>Other third parties</strong>, as permitted by applicable law, for example: if we go through a business transition; to comply with a legal requirement or a court order; when we believe it is appropriate to take action regarding illegal activities or prevent fraud or harm.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  8. Controlling Your Personal Data
                </h2>
                <p className="leading-relaxed">
                  Lyfe provides you a variety of methods and options to directly control how we collect and use your Personal Data, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Your Provider.</strong> Patients can contact their Provider to access, correct, delete, or control their Personal Data associated with their EMR.</li>
                  <li><strong>Your Account.</strong> Patients and Providers can access, modify, and delete certain data through their Platform account.</li>
                  <li><strong>Privacy Requests.</strong> If you want to exercise your rights under HIPAA or related to your relationship with a Provider, please contact your Provider. For concerns about Lyfe, please contact{" "}
                    <a href="mailto:hello@lyfeco.ai" className="text-blue-600 hover:text-blue-700 underline">
                      hello@lyfeco.ai
                    </a>.
                  </li>
                  <li><strong>Device Settings.</strong> You can control the data we collect through cookies by adjusting your device settings or your cookie preferences on our website.</li>
                  <li><strong>Emails.</strong> You can unsubscribe from promotional emails via the links provided or send a request to{" "}
                    <a href="mailto:hello@lyfeco.ai" className="text-blue-600 hover:text-blue-700 underline">
                      hello@lyfeco.ai
                    </a>.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  9. Your Privacy Rights
                </h2>
                <p className="leading-relaxed">
                  In the United States, consumer privacy is governed by federal privacy laws covering specific industries or data uses (like HIPAA) and state privacy laws providing with general consumer privacy rights. This section provides informational notices for state consumer privacy laws that require companies to inform consumers about their privacy rights and provide a method to exercise those rights.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right to Correct.</strong> You have the right to request that we correct inaccurate Personal Data about you on our systems.</li>
                  <li><strong>Right to Deletion.</strong> You may have the right to request that we delete your Personal Data that we collected and retained, with certain exceptions.</li>
                  <li><strong>Right to Access.</strong> You may have the right to request confirmation that we have collected Personal Data about you and that we provide you with access to that Personal Data.</li>
                  <li><strong>Health Data Rights.</strong> Some state laws entitle consumers to certain details about health data collected about them.</li>
                  <li><strong>No Selling or Sharing Personal Data.</strong> Lyfe does not sell your Personal Data or share it to third parties for cross-contextual behavioral advertising purposes.</li>
                  <li><strong>Right to Opt-Out of Profiling.</strong> Lyfe does not process your Personal Data to evaluate, analyze, or predict your interests and preferences.</li>
                  <li><strong>Right to Nondiscrimination.</strong> We will not discriminate against you for exercising your privacy rights.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  10. Services Offered in the United States Only
                </h2>
                <p className="leading-relaxed">
                  Lyfe is a United States company with technical infrastructure in the United States. We design and market the Services for use by Providers, Patients, and Caregivers in the United States. If you access the Services from outside the United States, please be aware that your Personal Data may be transferred to, processed, stored, and used in the United States or other jurisdictions.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  11. Third-Party Services
                </h2>
                <p className="leading-relaxed">
                  This Privacy Policy only applies to Lyfe Services. It does not apply to any third-party platforms or services, or any third-party services linked or accessible from the Services. We have no control over third-party websites, apps, devices, or systems, and you should exercise caution when deciding to disclose your Personal Data to anyone.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  12. Security
                </h2>
                <p className="leading-relaxed">
                  Lyfe has implemented and maintains reasonable security measures to safeguard your Personal Data from accidental loss and unauthorized access, use, alteration, and disclosure. We maintain security measures that are appropriate to the volume, scope, and nature of the personal data processed. This includes a reasonable standard of care to protect the confidentiality, integrity, and accessibility of the health data we collect. Lyfe maintains compliance with SOC2 standards, and we provide the Services to Providers that are covered entities as business associates in compliance with HIPAA.
                </p>
                <p className="leading-relaxed">
                  Please remember that no submission of information over the Internet is entirely secure. You are responsible for keeping your device access and login information confidential.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  13. Updates
                </h2>
                <p className="leading-relaxed">
                  Lyfe may update this Privacy Policy from time to time. You can see when this Privacy Policy was last updated by checking the &quot;last updated&quot; date displayed at the top of this page. We will notify you about material changes to this Privacy Policy within the Services or by other measures that are appropriate to provide you with notice.
                </p>
              </section>

              <section className="space-y-4 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at{" "}
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
