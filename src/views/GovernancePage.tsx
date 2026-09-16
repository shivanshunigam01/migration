import React from "react"
import { Link } from "react-router-dom"
import { GOLD, NAVY, TEXT, HERO_GRAD } from "@/theme"
import SiteHeader from "@/components/layout/SiteHeader"
import SiteFooter from "@/components/layout/SiteFooter"
import { PageHero } from "@/components/page/PageHero"
import GovernanceForm from "@/components/forms/GovernanceForm"
import { PolicyArticle } from "@/components/page/PolicyArticle"
import { GOVERNANCE_POLICY } from "@/data/legalPolicies"
import { ComplianceDisclaimer } from "@/components/page/ComplianceDisclaimer"
import StructuredData from "@/components/page/StructuredData"
import { NAV_ITEMS } from "@/data/navItems"
import { usePageSeo } from "@/lib/usePageSeo"

export default function GovernancePage({ navigate }: { navigate: (page: string) => void }) {
  usePageSeo("governance", {
    title: "Governance | Nanak Migration Group",
    metaDescription: GOVERNANCE_POLICY.description,
    primaryKeyword: "migration agent governance Australia",
  })

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: "#fff", color: TEXT }}>
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://www.nanakmigration.com.au/" },
          { name: "Governance", url: "https://www.nanakmigration.com.au/governance" },
        ]}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <PageHero
        navigate={navigate}
        variant="support"
        maraBadge
        eyebrow={GOVERNANCE_POLICY.eyebrow}
        title={GOVERNANCE_POLICY.title}
        deck={GOVERNANCE_POLICY.description}
        primaryCta={{ label: "Contact the practice", page: "contact" }}
        accent={GOLD}
      />

      <PolicyArticle doc={GOVERNANCE_POLICY} />

      <section style={{ background: HERO_GRAD, padding: "48px 24px 80px", borderTop: "1px solid rgba(21,36,72,0.08)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 48 }} className="grid-2">
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: NAVY, margin: "0 0 16px" }}>Raise a complaint or feedback ticket</h2>
            <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.75, marginBottom: 16 }}>
              Use the form to lodge a complaint, feedback or service concern. We aim to acknowledge tickets within five business days.
            </p>
            <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>
              Looking for a refund? See our{" "}
              <Link to="/refund-request" style={{ color: GOLD, fontWeight: 700 }}>
                Refund Policy and request form
              </Link>
              .
            </p>
          </div>
          <GovernanceForm />
        </div>
      </section>

      <ComplianceDisclaimer />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
