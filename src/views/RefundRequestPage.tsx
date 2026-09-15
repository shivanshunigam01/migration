import React from "react"
import { Link } from "react-router-dom"
import { GOLD, NAVY, TEXT, HERO_GRAD } from "@/theme"
import SiteHeader from "@/components/layout/SiteHeader"
import SiteFooter from "@/components/layout/SiteFooter"
import { PageHero } from "@/components/page/PageHero"
import RefundForm from "@/components/forms/RefundForm"
import { ComplianceDisclaimer } from "@/components/page/ComplianceDisclaimer"
import StructuredData from "@/components/page/StructuredData"
import { NAV_ITEMS } from "@/data/navItems"
import { usePageSeo } from "@/lib/usePageSeo"

export default function RefundRequestPage({ navigate }: { navigate: (page: string) => void }) {
  usePageSeo("refund-request", {
    title: "Refund Request | Nanak Migration Group",
    metaDescription:
      "Request a refund for consultation fees or services with Nanak Migration Group. Submissions are reviewed by our practice team. MARN 2619467.",
    primaryKeyword: "migration agent refund request",
  })

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: "#fff", color: TEXT }}>
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://www.nanakmigration.com.au/" },
          { name: "Refund request", url: "https://www.nanakmigration.com.au/refund-request" },
        ]}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <PageHero
        navigate={navigate}
        variant="support"
        maraBadge
        eyebrow="Billing"
        title="Request a refund"
        deck="Tell us about the payment and why you are requesting a refund. We review each request against our terms and any written service agreement."
        primaryCta={{ label: "Read terms of use", page: "terms" }}
        accent={GOLD}
      />

      <section style={{ background: HERO_GRAD, padding: "48px 24px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 48 }} className="grid-2">
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: NAVY, margin: "0 0 16px" }}>Before you submit</h2>
            <ul style={{ margin: 0, paddingLeft: 18, color: "#4b5563", fontSize: 15, lineHeight: 1.75 }}>
              <li style={{ marginBottom: 10 }}>Have your booking reference, invoice number or payment receipt ready if available.</li>
              <li style={{ marginBottom: 10 }}>Consultation fees may be non-refundable once the consult has been delivered — see our terms.</li>
              <li style={{ marginBottom: 10 }}>We aim to acknowledge refund requests within two business days.</li>
              <li style={{ marginBottom: 10 }}>Approved refunds are returned to the original payment method where possible.</li>
            </ul>
            <p style={{ marginTop: 24, fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>
              Service or complaint issues? Use our{" "}
              <Link to="/governance" style={{ color: GOLD, fontWeight: 700 }}>
                governance ticket form
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
