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
    description: "How Nanak Migration Group Pty Ltd collects, uses and protects personal information.",
    sections: [
      {
        h: "Who we are",
        p: "Nanak Migration Group Pty Ltd (ABN 54 674 937 476) provides migration assistance through a MARA-registered agent (MARN 2619467). Contact: visa@nanakmigration.com.au · 1300 644 728.",
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
    title: "Terms of Use",
    eyebrow: "Legal",
    description: "Terms governing use of the Nanak Migration Group website.",
    sections: [
      {
        h: "Website information",
        p: "Content on this website is general information only and is not immigration assistance or legal advice. Requirements change — verify current criteria with the Department of Home Affairs or obtain advice from a registered migration agent before lodging.",
      },
      {
        h: "No client relationship",
        p: "Using this website or submitting an enquiry form does not create an agent–client relationship. A relationship begins only when you engage us under a written agreement.",
      },
      {
        h: "Accuracy",
        p: "We aim to keep information current but do not warrant completeness or fitness for a particular purpose. Tools and calculators are indicative only.",
      },
      {
        h: "Liability",
        p: "To the extent permitted by law, Nanak Migration Group Pty Ltd is not liable for loss arising from reliance on website content alone.",
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
