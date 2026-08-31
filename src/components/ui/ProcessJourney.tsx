import React, { useEffect, useRef, useState } from 'react'
import { GOLD, NAVY, NAVY_DARK } from '@/theme'
import Icon from '@/components/ui/Icon'

type Step = {
  num: string
  timing: string
  title: string
  body: string
  youGet: string
  iconName: string
  tint: 'navy' | 'gold'
}

const STEPS: Step[] = [
  {
    num: '01',
    timing: 'DAY 0',
    title: 'Contact',
    body: 'Send your circumstances — current visa, your goal, any decision letters. Urgent matter? Include the date on the notice.',
    youGet: 'A reply within 1 business day',
    iconName: 'inbox',
    tint: 'navy',
  },
  {
    num: '02',
    timing: 'WITHIN 2 DAYS',
    title: 'Assessment',
    body: 'Your Registered Migration Agent assesses your position, your evidence and the pathways realistically open to you.',
    youGet: 'A written assessment of your options',
    iconName: 'eye',
    tint: 'gold',
  },
  {
    num: '03',
    timing: 'WITHIN 5 DAYS',
    title: 'The Honest Answer',
    body: 'Clear risks, viable options and next steps in writing — including when the answer is "not yet" or "not this way."',
    youGet: 'Risks and next steps — in writing',
    iconName: 'info',
    tint: 'navy',
  },
  {
    num: '04',
    timing: 'BEFORE WORK STARTS',
    title: 'Engagement in Writing',
    body: 'Scope, fees, government charges and disbursements itemised in a service agreement — agreed before any work commences.',
    youGet: 'Fixed scope and fees before any work',
    iconName: 'file',
    tint: 'gold',
  },
]

// Delays (ms) for when the gold rail line visually reaches each medallion
const RING_DELAYS = [120, 420, 720, 1020]

export default function ProcessJourney() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)
  const [rings, setRings] = useState([false, false, false, false])
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    // Respect prefers-reduced-motion — skip animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAnimated(true)
      setRings([true, true, true, true])
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          RING_DELAYS.forEach((delay, i) =>
            setTimeout(() =>
              setRings(prev => { const next = [...prev]; next[i] = true; return next }), delay)
          )
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ background: '#ffffff', padding: '100px 24px 88px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Subtle dot pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(27,43,94,0.032) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative' }}>

        {/* ── Header (left-aligned) ─────────────────────────── */}
        <div className="pj-header" style={{ marginBottom: 72, maxWidth: 560 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: GOLD, marginBottom: 14, fontFamily: "'Gilroy', sans-serif" }}>
            HOW WE WORK
          </div>
          <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 700, lineHeight: 1.08, color: NAVY, margin: '0 0 16px', letterSpacing: '-0.03em', maxWidth: 640 }}>
            Four steps.{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: GOLD }}>No surprises.</em>
          </h2>
          <p style={{ fontSize: 16, color: '#6b7a8d', lineHeight: 1.7, margin: 0, fontFamily: "'Gilroy', sans-serif", maxWidth: 560 }}>
            From first message to signed engagement — here is exactly what happens and when.
          </p>
        </div>

        {/* ── Journey area ──────────────────────────────────── */}
        <div style={{ position: 'relative' }}>

          {/* Horizontal rail — desktop only */}
          <div className="pj-rail-h"
            style={{ position: 'absolute', top: 23, left: 'calc(12.5% - 6px)', right: 'calc(12.5% - 6px)', height: 2, background: '#e8edf6', zIndex: 0, overflow: 'visible', borderRadius: 2 }}
          >
            <div className={`pj-rail-progress${animated ? ' pj-animated' : ''}`} />
          </div>

          {/* Vertical rail — mobile only */}
          <div className="pj-rail-v">
            <div className={`pj-rail-progress${animated ? ' pj-animated' : ''}`} />
          </div>

          {/* Steps grid */}
          <div className="pj-grid grid-4"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, position: 'relative', zIndex: 1 }}
          >
            {STEPS.map((step, i) => {
              const isHovered = hovered === i
              const ringActive = rings[i] || isHovered
              const navyTint = step.tint === 'navy'

              return (
                <div
                  key={step.num} className="pj-step"
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  {/* Medallion column (becomes flex row child on mobile) */}
                  <div className="pj-medallion-col">
                    <div className="pj-medallion"
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: NAVY,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 20,
                        flexShrink: 0,
                        boxShadow: ringActive ? '0 0 0 6px rgba(245,161,36,0.18)' : '0 0 0 0px rgba(245,161,36,0)',
                        transition: 'box-shadow 0.4s ease',
                        position: 'relative',
                        zIndex: 2,
                      }}
                    >
                      <span style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 18, fontWeight: 700, color: GOLD, lineHeight: 1 }}>
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="pj-card"
                    tabIndex={0}
                    role="article"
                    aria-label={`Step ${step.num}: ${step.title}`}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                    style={{
                      background: '#ffffff',
                      border: `1px solid ${isHovered ? GOLD : '#e8edf6'}`,
                      borderTop: `2.5px solid ${isHovered ? GOLD : '#e8edf6'}`,
                      borderRadius: 16,
                      padding: 28,
                      width: '100%',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                      boxShadow: isHovered
                        ? '0 16px 40px rgba(27,43,94,0.12)'
                        : '0 1px 6px rgba(27,43,94,0.05)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                      outline: 'none',
                      cursor: 'default',
                    }}
                  >
                    {/* Focus visible ring via outline on :focus-visible */}
                    {/* Timing tag */}
                    <div style={{
                      position: 'absolute', top: 16, right: 18,
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                      textTransform: 'uppercase', color: '#9ca3af',
                      fontFamily: "'Gilroy', sans-serif",
                      whiteSpace: 'nowrap',
                    }}>
                      {step.timing}
                    </div>

                    {/* Icon tile */}
                    <div style={{
                      width: 52, height: 52, borderRadius: 13,
                      background: navyTint ? 'rgba(27,43,94,0.08)' : 'rgba(245,161,36,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 18,
                    }}>
                      <Icon name={step.iconName} size={22} color={navyTint ? NAVY : '#f5a124'} />
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: "'Gilroy', sans-serif",
                      fontSize: 21, fontWeight: 700,
                      color: NAVY, margin: '0 0 10px', lineHeight: 1.25,
                    }}>
                      {step.title}
                    </h3>

                    {/* Body — flex:1 pushes YOU GET to bottom */}
                    <p style={{
                      fontSize: 14.5, color: '#6b7a8d',
                      lineHeight: 1.72, margin: 0,
                      fontFamily: "'Gilroy', sans-serif",
                      flex: 1,
                    }}>
                      {step.body}
                    </p>

                    {/* YOU GET chip — pinned to bottom */}
                    <div style={{ marginTop: 'auto', paddingTop: 22 }}>
                      <div style={{
                        fontSize: 11, fontWeight: 800, letterSpacing: '0.15em',
                        textTransform: 'uppercase', color: '#9ca3af', marginBottom: 7,
                        fontFamily: "'Gilroy', sans-serif",
                      }}>
                        YOU GET
                      </div>
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 7,
                        background: 'rgba(245,161,36,0.09)',
                        border: '1px solid rgba(245,161,36,0.35)',
                        borderRadius: 100, padding: '6px 12px',
                      }}>
                        <Icon name="check" size={11} color={GOLD} />
                        <span style={{
                          fontSize: 13, fontWeight: 600,
                          color: '#0d1632',
                          fontFamily: "'Gilroy', sans-serif", lineHeight: 1,
                        }}>
                          {step.youGet}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Reassurance + CTA ─────────────────────────────── */}
        <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <div style={{
            display: 'flex', alignItems: 'flex-start', gap: 12,
            maxWidth: 640, padding: '16px 22px',
            background: 'rgba(27,43,94,0.03)',
            border: '1px solid rgba(27,43,94,0.09)',
            borderRadius: 12,
          }}>
            <div style={{ flexShrink: 0, marginTop: 1 }}>
              <Icon name="shield" size={16} color={NAVY} />
            </div>
            <p style={{
              fontSize: 14, color: '#4b5563', lineHeight: 1.65,
              margin: 0, fontFamily: "'Gilroy', sans-serif", textAlign: 'left',
            }}>
              Every step is handled by a Registered Migration Agent (MARN&nbsp;2619467). Nothing is lodged without your written approval.
            </p>
          </div>

          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              padding: '15px 34px', borderRadius: 8,
              background: GOLD, color: NAVY_DARK,
              textDecoration: 'none', fontSize: 15, fontWeight: 700,
              fontFamily: "'Gilroy', sans-serif",
              boxShadow: '0 4px 22px rgba(245,161,36,0.38)',
              transition: 'transform 0.18s ease, box-shadow 0.18s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 8px 30px rgba(245,161,36,0.48)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.transform = 'none'
              el.style.boxShadow = '0 4px 22px rgba(245,161,36,0.38)'
            }}
          >
            Start Step 01 — Send your circumstances
            <Icon name="arrow-right" size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}
