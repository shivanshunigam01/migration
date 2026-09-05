import React from "react"
import { GOLD, NAVY, TEXT, HERO_GRAD } from "@/theme"
import SiteHeader from "@/components/layout/SiteHeader"
import SiteFooter from "@/components/layout/SiteFooter"
import { PageHero } from "@/components/page/PageHero"
import ContactForm from "@/components/forms/ContactForm"
import { ComplianceDisclaimer } from "@/components/page/ComplianceDisclaimer"
import StructuredData from "@/components/page/StructuredData"
import { NAV_ITEMS } from "@/data/navItems"
import { usePageSeo } from "@/lib/usePageSeo"

const OFFICES = [
  { city: "Truganina", detail: "8 Tallis Cct, Truganina VIC 3029" },
  { city: "Geelong", detail: "Suite 1, 41 Malop St, Geelong VIC 3220" },
  { city: "Cranbourne", detail: "Unit 2/207 S Gippsland Hwy, Cranbourne VIC 3977" },
  { city: "Canning Vale", detail: "150 Canna Dr, Canning Vale WA 6155" },
  { city: "Craigieburn", detail: "21 Ravenwoods Way, Craigieburn VIC 3064" },
]

export default function ContactPage({ navigate }: { navigate: (page: string) => void }) {
  usePageSeo("contact", {
    title: "Contact Nanak Migration Group | Truganina, Geelong, Cranbourne, Canning Vale, Craigieburn",
    metaDescription:
      "Contact Nanak Migration Group — phone 1300 644 728 or email visa@nanakmigration.com.au. Offices in Truganina, Geelong, Cranbourne, Canning Vale and Craigieburn. MARN 2619467.",
    primaryKeyword: "contact migration agent Australia",
  })

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: "#fff", color: TEXT }}>
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://www.nanakmigration.com.au/" },
          { name: "Contact", url: "https://www.nanakmigration.com.au/contact" },
        ]}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <PageHero
        navigate={navigate}
        variant="support"
        maraBadge
        eyebrow="Contact"
        title="Talk to a registered migration agent"
        deck="Call 1300 644 728, email visa@nanakmigration.com.au, or send a message below. We advise in English, Hindi and Punjabi."
        primaryCta={{ label: "Book free consultation", page: "book-consultation" }}
        accent={GOLD}
      />

      <section style={{ background: HERO_GRAD, padding: "48px 24px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 48 }} className="grid-2">
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: NAVY, margin: "0 0 20px" }}>Get in touch</h2>
            <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.7, marginBottom: 24 }}>
              <a href="tel:1300644728" style={{ color: NAVY, fontWeight: 700, textDecoration: "none" }}>1300 644 728</a>
              <br />
              <a href="mailto:visa@nanakmigration.com.au" style={{ color: NAVY, fontWeight: 700 }}>visa@nanakmigration.com.au</a>
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              {OFFICES.map((o) => (
                <div key={o.city} style={{ padding: "16px 18px", background: "#fff", borderRadius: 12, border: "1px solid rgba(21,36,72,0.08)" }}>
                  <div style={{ fontWeight: 700, color: NAVY, marginBottom: 4 }}>{o.city}</div>
                  <div style={{ fontSize: 14, color: "#64748b" }}>{o.detail}</div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 20, fontSize: 13, color: "#94a3b8" }}>MARN 2619467 · ABN 54 674 937 476</p>
          </div>
          <div style={{ background: "#fff", borderRadius: 16, padding: 28, border: "1px solid rgba(21,36,72,0.08)", boxShadow: "0 12px 40px rgba(21,36,72,0.06)" }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: NAVY, margin: "0 0 8px" }}>Send a message</h2>
            <p style={{ fontSize: 14, color: "#64748b", marginBottom: 20 }}>We typically respond within one business day.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <ComplianceDisclaimer />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
