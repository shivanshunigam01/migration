"use client"

import SiteHeader from "@/components/layout/SiteHeader"
import SiteFooter from "@/components/layout/SiteFooter"
import { Breadcrumbs } from "@/components/page"
import StructuredData from "@/components/page/StructuredData"
import { NAV_ITEMS } from "@/data/navItems"
import { groupPublicPathsByCategory } from "@/data/publicPaths"
import { absoluteUrl } from "@/data/site"
import { NAVY, GOLD, TEXT } from "@/theme"
import { Link } from "react-router-dom"
import { usePageSeo } from "@/lib/usePageSeo"
import type { PageProps } from "@/types/navigation"

const CATEGORY_ORDER = [
  "Other",
  "Employer Sponsored",
  "Skilled",
  "Student",
  "Partner & Family",
  "Visitor & Other",
  "Reviews",
  "Practice",
  "Blog",
  "News",
  "Legal",
]

/**
 * Human + crawler HTML sitemap — every public page as a real <a href>.
 * Solves orphan-page discovery that XML alone cannot fix for link-graph crawlers.
 */
export default function HtmlSitemapPage({ navigate }: PageProps) {
  usePageSeo("site-map")
  const groups = groupPublicPathsByCategory()
  const ordered = CATEGORY_ORDER.filter((c) => groups.has(c)).concat(
    [...groups.keys()].filter((c) => !CATEGORY_ORDER.includes(c)),
  )

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: "#fff", color: TEXT, minHeight: "100vh" }}>
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: absoluteUrl("") },
          { name: "Sitemap", url: absoluteUrl("site-map") },
        ]}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs items={[{ label: "Home", page: "home" }, { label: "Sitemap" }]} navigate={navigate} />

      <section style={{ background: NAVY, padding: "56px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: 16,
            }}
          >
            Site index
          </div>
          <h1
            style={{
              fontFamily: "'Gilroy', sans-serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 14px",
              letterSpacing: "-0.02em",
            }}
          >
            All pages on Nanak Migration
          </h1>
          <p style={{ margin: 0, fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
            Complete directory of visa guides, hubs and resources — linked for visitors and search engines.
            Machine-readable feed:{" "}
            <a href="/sitemap.xml" style={{ color: GOLD, fontWeight: 600 }}>
              /sitemap.xml
            </a>
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 72px" }}>
        {ordered.map((category) => {
          const items = groups.get(category) || []
          if (!items.length) return null
          return (
            <div key={category} style={{ marginBottom: 40 }}>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: NAVY,
                  margin: "0 0 16px",
                  paddingBottom: 10,
                  borderBottom: `2px solid ${GOLD}`,
                }}
              >
                {category}
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                  gap: "8px 24px",
                }}
              >
                {items.map((item) => {
                  const href = item.path ? `/${item.path}` : "/"
                  return (
                    <li key={item.path || "home"}>
                      <Link
                        to={href}
                        style={{
                          color: NAVY,
                          textDecoration: "none",
                          fontSize: 14,
                          lineHeight: 1.45,
                          borderBottom: "1px solid transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderBottomColor = GOLD
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderBottomColor = "transparent"
                        }}
                      >
                        {item.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </section>

      <SiteFooter navigate={navigate} />
    </div>
  )
}
