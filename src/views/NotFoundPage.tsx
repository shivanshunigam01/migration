import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { GOLD, NAVY, TEXT } from "@/theme"
import SiteHeader from "@/components/layout/SiteHeader"
import SiteFooter from "@/components/layout/SiteFooter"
import { NAV_ITEMS } from "@/data/navItems"
import { applySeoTags } from "@/lib/seoMeta"
import { absoluteUrl } from "@/data/site"
import { GlowButton } from "@/components/ui/GlowButton"

export default function NotFoundPage({ navigate }: { navigate: (page: string) => void }) {
  useEffect(() => {
    applySeoTags({
      title: "Page not found | Nanak Migration Group",
      description: "The page you requested could not be found on Nanak Migration Group.",
      canonicalUrl: absoluteUrl("404"),
    })
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null
    if (!robots) {
      robots = document.createElement("meta")
      robots.setAttribute("name", "robots")
      document.head.appendChild(robots)
    }
    robots.setAttribute("content", "noindex, follow")
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: "#fff", color: TEXT, minHeight: "100vh" }}>
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "96px 24px", textAlign: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: GOLD, marginBottom: 16 }}>
          404
        </div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: NAVY, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
          Page not found
        </h1>
        <p style={{ fontSize: 17, color: "#4b5563", lineHeight: 1.7, margin: "0 0 32px" }}>
          That URL doesn’t exist on this site. Try the homepage, browse visa pathways, or book a free consultation with a MARA-registered agent.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <GlowButton onClick={() => navigate("home")}>Go to homepage</GlowButton>
          <GlowButton as="a" href="/book-consultation" variant="navy" glow={false}>
            Book consultation
          </GlowButton>
        </div>
        <p style={{ marginTop: 28, fontSize: 14 }}>
          <Link to="/skilled-migration" style={{ color: NAVY, fontWeight: 600 }}>Skilled migration</Link>
          {" · "}
          <Link to="/employer-sponsored-visas" style={{ color: NAVY, fontWeight: 600 }}>Employer sponsored</Link>
          {" · "}
          <Link to="/blog" style={{ color: NAVY, fontWeight: 600 }}>Blog</Link>
          {" · "}
          <Link to="/contact" style={{ color: NAVY, fontWeight: 600 }}>Contact</Link>
        </p>
      </main>
      <SiteFooter navigate={navigate} />
    </div>
  )
}
