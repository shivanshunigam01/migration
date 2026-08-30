import React from 'react'
import Icon from '@/components/ui/Icon'
import { NAVY, NAVY_DARK, GOLD, HERO_GRAD } from '@/theme'

export interface PageHeroCtaButton {
  label: string
  page?: string
  href?: string
  variant?: 'primary' | 'secondary'
}

export interface PageHeroProps {
  /** 'flagship': two-column hero with rightColumn slot (309/820 style).
   *  'standard': single-column (186 style).
   *  'hub': wider hero for landing pages. */
  variant?: 'flagship' | 'standard' | 'hub' | 'support'
  /** Pill badge text (e.g. "Subclass 186") */
  eyebrow?: string
  eyebrowSub?: string
  title: React.ReactNode
  deck: string
  /** Rendered as the "The Short Answer" card below the deck */
  shortAnswer?: React.ReactNode
  primaryCta?: PageHeroCtaButton
  secondaryCta?: PageHeroCtaButton
  accent?: string
  /** Show MARA-registered badge at top */
  maraBadge?: boolean
  /** "Current as at …" tagline below the deck */
  currentAsAt?: string
  /** Right-column slot (flagship only) */
  rightColumn?: React.ReactNode
  /** Small italic footnote beneath the short-answer card */
  footnote?: string
  navigate: (page: string) => void
}

export function PageHero({
  variant = 'standard',
  eyebrow,
  eyebrowSub,
  title,
  deck,
  shortAnswer,
  primaryCta,
  secondaryCta,
  accent = GOLD,
  maraBadge = false,
  currentAsAt,
  rightColumn,
  footnote,
  navigate,
}: PageHeroProps) {
  function handleCta(cta: PageHeroCtaButton) {
    if (cta.page) navigate(cta.page)
  }

  const leftContent = (
    <>
      {maraBadge && (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, padding: '5px 14px 5px 8px', background: 'rgba(27,43,94,0.08)', border: '1px solid rgba(27,43,94,0.20)', borderRadius: 100 }}>
          <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon name="check" size={11} color="#fff" />
          </div>
          <span style={{ color: NAVY, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>MARA-Registered Agent · MARN 2619467</span>
        </div>
      )}

      {(eyebrow || eyebrowSub) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          {eyebrow && (
            <span style={{ background: 'rgba(27,43,94,0.08)', color: NAVY, border: '1px solid rgba(27,43,94,0.18)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '4px 12px', borderRadius: 20 }}>
              {eyebrow}
            </span>
          )}
          {eyebrowSub && <span style={{ color: '#6b7280', fontSize: 12 }}>{eyebrowSub}</span>}
        </div>
      )}

      <h1 className={variant === 'flagship' ? 'page-hero-h1 page-hero-h1-flagship' : 'page-hero-h1'} style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: variant === 'flagship' ? 'clamp(32px, 5vw, 50px)' : 'clamp(26px, 5vw, 54px)', fontWeight: 700, color: NAVY, lineHeight: 1.1, margin: '0 0 22px', letterSpacing: '-0.02em' }}>
        {title}
      </h1>

      <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.7, margin: '0 0 8px', maxWidth: variant === 'standard' ? 620 : 500 }}>
        {deck}
      </p>

      {currentAsAt && (
        <p style={{ fontSize: 12, color: '#9ca3af', margin: '0 0 28px', fontStyle: 'italic' }}>
          General information current as at {currentAsAt}. Requirements are subject to change — verify with the Department of Home Affairs before lodging.
        </p>
      )}

      {shortAnswer && (
        <div style={{ background: '#ffffff', border: `1px solid #e5e9f5`, borderLeft: `4px solid ${accent}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', marginBottom: 32, boxShadow: '0 2px 16px rgba(27,43,94,0.07)' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
            <Icon name="info" size={16} color={accent} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: accent }}>The Short Answer</span>
          </div>
          <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.75 }}>{shortAnswer}</div>
          {footnote && <p style={{ fontSize: 11.5, color: '#9ca3af', margin: '10px 0 0', fontStyle: 'italic' }}>{footnote}</p>}
        </div>
      )}

      {(primaryCta || secondaryCta) && (
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
          {primaryCta && (
            <button
              onClick={() => handleCta(primaryCta)}
              style={{ backgroundColor: GOLD, color: NAVY_DARK, border: 'none', borderRadius: 8, padding: '14px 32px', fontSize: 16, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, system-ui, sans-serif', boxShadow: '0 4px 20px rgba(245,161,36,0.40)' }}
            >
              {primaryCta.label}
            </button>
          )}
          {secondaryCta && (
            <button
              onClick={() => handleCta(secondaryCta)}
              style={{ background: 'transparent', color: NAVY, border: `2px solid ${NAVY}30`, borderRadius: 10, padding: '14px 28px', fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {secondaryCta.label}
            </button>
          )}
        </div>
      )}
    </>
  )

  if (variant === 'flagship') {
    return (
      <header style={{ background: HERO_GRAD, padding: '64px 32px 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="hero-flagship-inner" style={{ display: 'flex', gap: 64, alignItems: 'flex-start' }}>
            <div className="hero-flagship-left" style={{ flex: '0 0 580px', minWidth: 0 }}>{leftContent}</div>
            {rightColumn && <div style={{ flex: 1, paddingBottom: 40, minWidth: 0 }}>{rightColumn}</div>}
          </div>
        </div>
        <div style={{ height: 40 }} />
      </header>
    )
  }

  // standard / hub / support
  return (
    <header style={{ background: HERO_GRAD, padding: '64px 32px 56px', overflow: 'hidden' }}>
      <div style={{ maxWidth: variant === 'hub' ? 1000 : 800, margin: '0 auto' }}>
        {leftContent}
      </div>
    </header>
  )
}
