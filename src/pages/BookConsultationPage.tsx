import React, { useEffect, useRef } from "react"
import { createTimeline } from "animejs"
import SiteHeader from "@/components/layout/SiteHeader"
import SiteFooter from "@/components/layout/SiteFooter"
import BookConsultationForm from "@/components/forms/BookConsultationForm"
import { NAV_ITEMS } from "@/data/navItems"
import { GOLD, NAVY, NAVY_DARK, HERO_GRAD } from "@/theme"
import { ShieldGlow } from "@/components/motion"
import { GlowButton } from "@/components/ui/GlowButton"
import { startCtaTheatreBreath } from "@/lib/theatreCta"

export default function BookConsultationPage({ navigate }: { navigate: (page: string) => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stopBreath = startCtaTheatreBreath(2600)
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return () => stopBreath()

    const tl = createTimeline({ defaults: { ease: "out(3)" } })
    if (headingRef.current) {
      tl.add(headingRef.current, {
        opacity: [0, 1],
        translateY: [28, 0],
        duration: 650,
      }, 0)
    }
    if (cardRef.current) {
      tl.add(cardRef.current, {
        opacity: [0, 1],
        translateY: [40, 0],
        scale: [0.96, 1],
        duration: 720,
      }, 120)
    }

    return () => {
      stopBreath()
      tl.cancel()
    }
  }, [])

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", backgroundColor: "#ffffff", color: NAVY }}>
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <div style={{ background: "#f8f9fc", borderBottom: "1px solid #e8eaf0", padding: "10px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#9ca3af" }}>
          <button
            onClick={() => navigate("home")}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#6b7280", fontSize: 12, padding: 0, fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Home
          </button>
          <span>›</span>
          <span style={{ color: NAVY, fontWeight: 500 }}>Book Consultation</span>
        </div>
      </div>

      <section style={{ background: HERO_GRAD, padding: "64px 24px 80px", position: "relative", overflow: "hidden" }}>
        <ShieldGlow tone="gold" size={520} top="-15%" left="55%" opacity={0.45} />
        <ShieldGlow tone="navy" size={420} bottom="-20%" left="-8%" opacity={0.35} />

        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div ref={headingRef} style={{ textAlign: "center", marginBottom: 40, opacity: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: 12 }}>
              Registered Migration Agents
            </div>
            <h1
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 700,
                color: NAVY_DARK,
                margin: "0 0 16px",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Book a consultation
            </h1>
            <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.65, maxWidth: 520, margin: "0 auto 22px" }}>
              Speak with a registered migration agent (MARN 2619467) about your visa pathway. Submit your details and our team will confirm a time.
            </p>
            <GlowButton
              as="a"
              href="#book-form"
              size="md"
              variant="gold"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("book-form")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Start booking →
            </GlowButton>
          </div>

          <div
            id="book-form"
            ref={cardRef}
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "36px 40px",
              boxShadow: "0 8px 40px rgba(13,22,50,0.10), 0 0 0 1px rgba(245,161,36,0.18)",
              border: "1px solid #e8eaf0",
              opacity: 0,
            }}
          >
            <BookConsultationForm />
          </div>

          <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center", marginTop: 24, lineHeight: 1.6 }}>
            General information only. Not legal or migration advice. Consult a registered migration agent before acting.
          </p>
        </div>
      </section>

      <SiteFooter navigate={navigate} />
    </div>
  )
}
