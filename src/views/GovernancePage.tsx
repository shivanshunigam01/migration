import React from "react"
import { Link } from "react-router-dom"
import { GOLD, NAVY, TEXT, HERO_GRAD } from "@/theme"
import SiteHeader from "@/components/layout/SiteHeader"
import SiteFooter from "@/components/layout/SiteFooter"
import { PageHero } from "@/components/page/PageHero"
import GovernanceForm from "@/components/forms/GovernanceForm"
import { ComplianceDisclaimer } from "@/components/page/ComplianceDisclaimer"
import StructuredData from "@/components/page/StructuredData"
import { NAV_ITEMS } from "@/data/navItems"
import { usePageSeo } from "@/lib/usePageSeo"

export default function GovernancePage({ navigate }: { navigate: (page: string) => void }) {
  usePageSeo("governance", {
    title: "Governance & Complaints | Nanak Migration Group",
    metaDescription:
      "Raise a complaint, feedback or service concern with Nanak Migration Group. Tickets are reviewed by our practice team. MARN 2619467.",
    primaryKeyword: "migration agent complaints Australia",
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
        eyebrow="Practice governance"
        title="Complaints, feedback and service concerns"
        deck="We take client feedback seriously. Lodge a ticket below and our practice team will review it. For urgent matters call 1300 644 728."
        primaryCta={{ label: "Contact the practice", page: "contact" }}
        accent={GOLD}
      />

      <section style={{ background: HERO_GRAD, padding: "48px 24px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 48 }} className="grid-2">
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: NAVY, margin: "0 0 16px" }}>How we handle tickets</h2>
            <ul style={{ margin: 0, paddingLeft: 18, color: "#4b5563", fontSize: 15, lineHeight: 1.75 }}>
              <li style={{ marginBottom: 10 }}>We acknowledge new tickets within two business days where possible.</li>
              <li style={{ marginBottom: 10 }}>You will receive a reference number to quote in follow-up.</li>
              <li style={{ marginBottom: 10 }}>Serious complaints may be escalated to the principal agent (MARN 2619467).</li>
              <li style={{ marginBottom: 10 }}>
                You may also contact OMARA for registered migration agent complaints:{" "}
                <a href="https://www.mara.gov.au/" target="_blank" rel="noopener noreferrer" style={{ color: NAVY, fontWeight: 600 }}>
                  mara.gov.au
                </a>
                .
              </li>
            </ul>
            <p style={{ marginTop: 24, fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>
              Looking for a refund? Use our{" "}
              <Link to="/refund-request" style={{ color: GOLD, fontWeight: 700 }}>
                refund request form
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
