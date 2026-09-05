import React from 'react'
import { NAVY, NAVY_DARK, NAVY_GRAD, GOLD } from '@/theme'
import { Reveal } from '@/components/motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { resolveRoute } from '@/lib/navigation'

/* Shared decorative SVG — compass rose + Southern Cross arc */
export function CompassDecor({
  size = 340,
  compassColor = '#ffffff',
  compassOpacity = 0.05,
  starColor = GOLD,
  starOpacity = 0.15,
}: {
  size?: number
  compassColor?: string
  compassOpacity?: number
  starColor?: string
  starOpacity?: number
}) {
  const r = size / 2
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ position: 'absolute', pointerEvents: 'none', bottom: -size * 0.34, right: -size * 0.28, display: 'block' }}
    >
      <g opacity={compassOpacity} stroke={compassColor} fill="none" strokeWidth="1">
        {/* Concentric circles */}
        {[0.18, 0.32, 0.46, 0.60, 0.74, 0.88].map((f, i) => (
          <circle key={i} cx={r} cy={r} r={r * f} />
        ))}
        {/* 16 radial tick lines */}
        {Array.from({ length: 16 }).map((_, i) => {
          const ang = (i * 22.5 * Math.PI) / 180
          const inner = r * (i % 2 === 0 ? 0.60 : 0.70)
          return (
            <line key={i}
              x1={r + Math.sin(ang) * inner} y1={r - Math.cos(ang) * inner}
              x2={r + Math.sin(ang) * r * 0.88} y2={r - Math.cos(ang) * r * 0.88}
            />
          )
        })}
        {/* Cardinal cross */}
        <line x1={r} y1={r * 0.12} x2={r} y2={r * 1.88} />
        <line x1={r * 0.12} y1={r} x2={r * 1.88} y2={r} />
        {/* Intercardinal cross (45°) */}
        <line x1={r - r * 0.54} y1={r - r * 0.54} x2={r + r * 0.54} y2={r + r * 0.54} />
        <line x1={r + r * 0.54} y1={r - r * 0.54} x2={r - r * 0.54} y2={r + r * 0.54} />
        {/* North-east needle — slender double diamond */}
        <polygon points={`${r},${r - r * 0.68} ${r + r * 0.055},${r} ${r},${r + r * 0.14} ${r - r * 0.055},${r}`} strokeWidth="0.8" />
        <polygon points={`${r + r * 0.68},${r - r * 0.68} ${r + r * 0.055},${r} ${r + r * 0.14},${r} ${r + r * 0.68},${r - r * 0.68}`} strokeWidth="0.8" />
        {/* North point marker */}
        <circle cx={r} cy={r * 0.12} r={3} fill={compassColor} stroke="none" />
      </g>
      {/* Southern Cross — 5 four-pointed stars drifting up the right edge */}
      {[
        { cx: r * 1.55, cy: r * 0.30, s: 5.0 },
        { cx: r * 1.72, cy: r * 0.50, s: 4.0 },
        { cx: r * 1.62, cy: r * 0.68, s: 3.0 },
        { cx: r * 1.78, cy: r * 0.82, s: 3.5 },
        { cx: r * 1.50, cy: r * 0.95, s: 2.5 },
      ].map(({ cx, cy, s }, i) => (
        <g key={i} opacity={starOpacity} fill={starColor}>
          <polygon points={`${cx},${cy - s} ${cx + s * 0.22},${cy - s * 0.22} ${cx + s},${cy} ${cx + s * 0.22},${cy + s * 0.22} ${cx},${cy + s} ${cx - s * 0.22},${cy + s * 0.22} ${cx - s},${cy} ${cx - s * 0.22},${cy - s * 0.22}`} />
        </g>
      ))}
    </svg>
  )
}

export interface CtaBandCta {
  label: string
  page?: string
  href?: string
}

export interface CtaBandProps {
  title: React.ReactNode
  body: string
  primaryCta: CtaBandCta
  secondaryCta?: CtaBandCta
  /** Button accent colour */
  accent?: string
  /** Micro-text below the primary button */
  footnote?: string
  /** Language availability tags */
  languages?: string[]
  navigate: (page: string) => void
}

export function CtaBand({ title, body, primaryCta, secondaryCta, accent = GOLD, footnote, languages = ['Hindi', 'Punjabi', 'English'], navigate }: CtaBandProps) {
  function ctaHref(cta: CtaBandCta): string | undefined {
    if (cta.href) return cta.href
    if (cta.page) return resolveRoute(cta.page)
    return undefined
  }

  return (
    <section className="section-pad-mobile cta-band" style={{ background: NAVY_GRAD, padding: '88px 32px', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 0% 0%, rgba(232,160,23,0.2) 0%, transparent 55%), radial-gradient(ellipse 40% 50% at 100% 100%, rgba(255,255,255,0.07) 0%, transparent 50%)', pointerEvents: 'none' }} />
      <CompassDecor size={380} compassColor="#ffffff" compassOpacity={0.04} starColor={GOLD} starOpacity={0.12} />
      <Reveal preset="scale" className="cta-band-inner" style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div>
          <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 700, color: '#fff', margin: '0 0 14px', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
            {title}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: 17, lineHeight: 1.7, margin: 0, maxWidth: 480 }}>
            {body}
          </p>
          {languages.length > 0 && (
            <div style={{ display: 'flex', gap: 18, marginTop: 22, flexWrap: 'wrap' as const }}>
              {languages.map(lang => (
                <span key={lang} style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}>
                  Consultations in {lang}
                </span>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 14, flexShrink: 0, alignItems: 'stretch' }}>
          {(() => {
            const href = ctaHref(primaryCta)
            if (!href) return null
            const external = href.startsWith('http')
            return (
              <GlowButton
                as="a"
                href={href}
                size="lg"
                variant="gold"
                style={{ ['--glow-ring' as string]: accent }}
                onClick={(e) => {
                  if (external || href.startsWith('#')) {
                    if (href.startsWith('#')) {
                      e.preventDefault()
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
                    }
                    return
                  }
                  e.preventDefault()
                  navigate(primaryCta.page ?? (href.replace(/^\//, '') || 'home'))
                }}
              >
                {primaryCta.label}
              </GlowButton>
            )
          })()}
          {secondaryCta && (() => {
            const href = ctaHref(secondaryCta)
            if (!href) return null
            const external = href.startsWith('http')
            return (
              <GlowButton
                as="a"
                href={href}
                size="md"
                variant="outline"
                onClick={(e) => {
                  if (external || href.startsWith('#')) {
                    if (href.startsWith('#')) {
                      e.preventDefault()
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
                    }
                    return
                  }
                  e.preventDefault()
                  navigate(secondaryCta.page ?? (href.replace(/^\//, '') || 'home'))
                }}
              >
                {secondaryCta.label}
              </GlowButton>
            )
          })()}
          {footnote && (
            <div style={{ textAlign: 'center' as const, fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>{footnote}</div>
          )}
        </div>
      </Reveal>
    </section>
  )
}
