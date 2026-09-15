import React from "react"
import { Link } from "react-router-dom"
import { NAVY, TEXT, GOLD } from "@/theme"
import SiteHeader from "@/components/layout/SiteHeader"
import SiteFooter from "@/components/layout/SiteFooter"
import { PageHero } from "@/components/page/PageHero"
import { ComplianceDisclaimer } from "@/components/page/ComplianceDisclaimer"
import { NAV_ITEMS } from "@/data/navItems"
import { usePageSeo } from "@/lib/usePageSeo"

type LegalKind = "privacy" | "terms" | "accessibility"

const COPY: Record<LegalKind, { title: string; eyebrow: string; description: string; sections: { h: string; p: string }[] }> = {
  privacy: {
    title: "Privacy Policy",
    eyebrow: "Legal",
    description: "How 1313 Success Group Pty Ltd trading as Nanak Migration Group collects, uses and protects personal information.",
    sections: [
      {
        h: "Who we are",
        p: "1313 Success Group Pty Ltd trading as Nanak Migration Group (ABN 54 674 937 476) provides migration assistance through a Registered Migration Agent (MARN 2619467). Contact: visa@nanakmigration.com.au · 1300 644 728.",
      },
      {
        h: "Information we collect",
        p: "We collect information you provide via consultation forms, newsletter signup, phone and email — such as name, contact details, visa goals and related background needed to assess your enquiry.",
      },
      {
        h: "How we use it",
        p: "We use your information to respond to enquiries, provide migration assistance, send updates you opted into, and meet our professional and legal obligations. We do not sell personal information.",
      },
      {
        h: "Storage and security",
        p: "Information is stored using reasonable administrative and technical safeguards. Access is limited to authorised team members who need it to assist you.",
      },
      {
        h: "Your choices",
        p: "You may request access to, correction of, or deletion of personal information we hold (subject to legal retention requirements). Email visa@nanakmigration.com.au to make a request.",
      },
    ],
  },
  terms: {
    title: "Terms and Conditions",
    eyebrow: "Legal",
    description:
      "Terms and conditions governing use of the Nanak Migration Group website and related online services, operated by 1313 Success Group Pty Ltd trading as Nanak Migration Group.",
    sections: [
      {
        h: "1. Who we are",
        p: "This website (nanakmigration.com.au) is operated by 1313 Success Group Pty Ltd trading as Nanak Migration Group (ABN 54 674 937 476 · ACN 674 937 476). Migration assistance is provided by a Registered Migration Agent (MARN 2619467). Contact: visa@nanakmigration.com.au · 1300 644 728.",
      },
      {
        h: "2. Website information only",
        p: "Content on this website is general information only and is not immigration assistance or legal advice. Australian migration law and policy change frequently. Always verify current criteria with the Department of Home Affairs or obtain advice from a registered migration agent before lodging an application or making decisions based on website content.",
      },
      {
        h: "3. No client relationship from browsing or forms",
        p: "Using this website, booking a consultation online, submitting an enquiry, governance ticket or refund request does not by itself create an agent–client relationship. A professional relationship begins only when you engage us under a written agreement (for example a Form of Authority / costs agreement) that we accept.",
      },
      {
        h: "4. Accuracy of tools and content",
        p: "We aim to keep information current but do not warrant completeness, accuracy or fitness for a particular purpose. Calculators, checklists, eligibility tools and FAQ answers are indicative only and may not reflect your full circumstances.",
      },
      {
        h: "5. Online bookings and payments",
        p: "Paid consultations booked through this website are charged via our payment provider (Stripe) at the fee shown at checkout. By completing payment you confirm that the booking details are correct and that you have read these terms. Free eligibility calls, where offered, remain subject to availability and our fair-use practices.",
      },
      {
        h: "6. Cancellations and refunds",
        p: "If you need to cancel or reschedule a paid consultation, contact us as soon as possible on 1300 644 728 or visa@nanakmigration.com.au. Fees for consultations that have already been delivered are generally non-refundable. Unused paid bookings may be considered for refund or credit at our discretion, taking into account notice given, payment method and any written agreement. To request a refund, use the refund request form on this website or email us with your booking or invoice reference. Approved refunds are ordinarily returned to the original payment method.",
      },
      {
        h: "7. Governance and complaints",
        p: "We welcome feedback and take complaints seriously. You may lodge a governance ticket via this website. We aim to acknowledge tickets within two business days where practicable. You may also contact the Office of the Migration Agents Registration Authority (OMARA) regarding the conduct of a registered migration agent.",
      },
      {
        h: "8. Acceptable use",
        p: "You must not misuse this website — including attempting to disrupt services, scrape content at scale without permission, submit false or abusive information, or use automated means to overload forms. We may refuse or remove submissions that appear fraudulent or abusive.",
      },
      {
        h: "9. Privacy",
        p: "Personal information collected through forms, bookings and tickets is handled in accordance with our Privacy Policy. By submitting information you consent to us contacting you about your enquiry or request using the details you provide.",
      },
      {
        h: "10. Intellectual property",
        p: "Website text, branding, layout and materials are owned by or licensed to Nanak Migration Group. You may view and print pages for personal, non-commercial use. You must not reproduce or redistribute substantial content without prior written consent.",
      },
      {
        h: "11. Liability",
        p: "To the extent permitted by law, 1313 Success Group Pty Ltd trading as Nanak Migration Group is not liable for loss arising from reliance on website content alone, from third-party sites linked from this website, or from temporary unavailability of online services. Nothing in these terms excludes rights that cannot be excluded under Australian Consumer Law.",
      },
      {
        h: "12. Changes",
        p: "We may update these terms from time to time by publishing a revised version on this page. Continued use of the website after changes are posted constitutes acceptance of the updated terms. Last updated: September 2026.",
      },
    ],
  },
  accessibility: {
    title: "Accessibility",
    eyebrow: "Practice",
    description: "Our commitment to making nanakmigration.com.au usable for more people.",
    sections: [
      {
        h: "Our approach",
        p: "We design pages with clear typography, keyboard-friendly controls where practical, and meaningful link text. We continue improving contrast, focus states and mobile usability.",
      },
      {
        h: "Feedback",
        p: "If you experience a barrier on this site, email visa@nanakmigration.com.au with the page URL and a short description. We will work to address issues promptly.",
      },
      {
        h: "Alternatives",
        p: "You can also reach us by phone on 1300 644 728 for assistance accessing information about our services.",
      },
    ],
  },
}

export default function LegalPage({
  kind,
  navigate,
}: {
  kind: LegalKind
  navigate: (page: string) => void
}) {
  const c = COPY[kind]
  usePageSeo(kind, {
    title: `${c.title} | Nanak Migration Group`,
    metaDescription: c.description,
    primaryKeyword: c.title.toLowerCase(),
  })

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: "#fff", color: TEXT }}>
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <PageHero
        navigate={navigate}
        variant="support"
        eyebrow={c.eyebrow}
        title={c.title}
        deck={c.description}
        primaryCta={{ label: "Contact us", page: "contact" }}
      />
      <article style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px 72px" }}>
        {c.sections.map((s) => (
          <section key={s.h} style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: NAVY, margin: "0 0 10px" }}>{s.h}</h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#374151", margin: 0 }}>{s.p}</p>
          </section>
        ))}
        <p style={{ marginTop: 36, fontSize: 14, color: "#64748b" }}>
          Questions? <Link to="/contact" style={{ color: GOLD, fontWeight: 700 }}>Contact the practice</Link>.
        </p>
      </article>
      <ComplianceDisclaimer />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
