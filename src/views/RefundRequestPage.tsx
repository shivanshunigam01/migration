import React from "react"
import { Link } from "react-router-dom"
import { GOLD, NAVY, TEXT, HERO_GRAD } from "@/theme"
import SiteHeader from "@/components/layout/SiteHeader"
import SiteFooter from "@/components/layout/SiteFooter"
import { PageHero } from "@/components/page/PageHero"
import RefundForm from "@/components/forms/RefundForm"
import { PolicyArticle } from "@/components/page/PolicyArticle"
import { REFUND_POLICY } from "@/data/legalPolicies"
import { ComplianceDisclaimer } from "@/components/page/ComplianceDisclaimer"
import StructuredData from "@/components/page/StructuredData"
import { NAV_ITEMS } from "@/data/navItems"
import { usePageSeo } from "@/lib/usePageSeo"

export default function RefundRequestPage({ navigate }: { navigate: (page: string) => void }) {
  usePageSeo("refund-request", {
    title: "Refund Policy | Nanak Migration Group",
    metaDescription: REFUND_POLICY.description,
    primaryKeyword: "migration agent refund policy",
  })

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: "#fff", color: TEXT }}>
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://www.nanakmigration.com.au/" },
          { name: "Refund Policy", url: "https://www.nanakmigration.com.au/refund-request" },
        ]}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <PageHero
        navigate={navigate}
        variant="support"
        maraBadge
        eyebrow={REFUND_POLICY.eyebrow}
        title={REFUND_POLICY.title}
        deck={REFUND_POLICY.description}
        primaryCta={{ label: "Read terms of use", page: "terms" }}
        accent={GOLD}
      />

      <PolicyArticle doc={REFUND_POLICY} />

      <section style={{ background: HERO_GRAD, padding: "48px 24px 80px", borderTop: "1px solid rgba(21,36,72,0.08)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 48 }} className="grid-2">
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: NAVY, margin: "0 0 16px" }}>Submit a refund request</h2>
            <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.75, marginBottom: 16 }}>
              Complete the form below with your payment details and reason. We acknowledge requests within five business days and respond in writing, usually within 30 days.
            </p>
            <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>
              Service or complaint issues? Use our{" "}
              <Link to="/governance" style={{ color: GOLD, fontWeight: 700 }}>
                Governance page
              </Link>
              .
            </p>
          </div>
          <RefundForm />
        </div>
      </section>

      <ComplianceDisclaimer />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
