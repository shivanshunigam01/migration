import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Icon from '@/components/ui/Icon'
import { NAVY, GOLD, HERO_GRAD } from '@/theme'
import { GlowButton } from '@/components/ui/GlowButton'
import { fadeUp, slideRight, staggerContainer, easeOutExpo } from '@/components/motion/variants'

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
  const reduce = useReducedMotion()

  function handleCta(cta: PageHeroCtaButton) {
    if (cta.page) navigate(cta.page)
  }

  const leftContent = (
    <motion.div
      variants={staggerContainer}
      initial={reduce ? false : 'hidden'}
      animate="visible"
    >
      {maraBadge && (
        <motion.div variants={fadeUp} style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: NAVY, marginBottom: 6 }}>
            Nanak Migration Group
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 24, height: 1.5, background: accent, display: 'inline-block' }} />
            <span style={{ color: '#64748b', fontSize: 12, fontWeight: 600, letterSpacing: '0.04em' }}>
              MARA-registered · MARN 2619467
            </span>
          </div>
        </motion.div>
      )}

      {(eyebrow || eyebrowSub) && (
        <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          {eyebrow && (
            <span style={{ color: NAVY, borderBottom: `2px solid ${accent}`, fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, paddingBottom: 4 }}>
              {eyebrow}
            </span>
          )}
          {eyebrowSub && <span style={{ color: '#6b7280', fontSize: 13 }}>{eyebrowSub}</span>}
        </motion.div>
      )}

      <motion.h1 variants={fadeUp} className={variant === 'flagship' ? 'page-hero-h1 page-hero-h1-flagship' : 'page-hero-h1'} style={{ fontFamily: "'Gilroy', sans-serif", fontSize: variant === 'flagship' ? 'clamp(34px, 5vw, 52px)' : 'clamp(28px, 5vw, 56px)', fontWeight: 700, color: NAVY, lineHeight: 1.08, margin: '0 0 22px', letterSpacing: '-0.03em' }}>
        {title}
      </motion.h1>

      <motion.p variants={fadeUp} style={{ fontSize: 18, color: '#374151', lineHeight: 1.7, margin: '0 0 8px', maxWidth: variant === 'standard' ? 620 : 500 }}>
        {deck}
      </motion.p>

      {currentAsAt && (
        <motion.p variants={fadeUp} style={{ fontSize: 13, color: '#9ca3af', margin: '0 0 28px', fontStyle: 'italic' }}>
          General information current as at {currentAsAt}. Requirements are subject to change — verify with the Department of Home Affairs before lodging.
        </motion.p>
      )}

      {shortAnswer && (
        <motion.div
          variants={fadeUp}
          whileHover={reduce ? undefined : { y: -2, boxShadow: '0 8px 28px rgba(27,43,94,0.12)' }}
          transition={{ duration: 0.25 }}
          style={{ background: '#ffffff', border: `1px solid #e5e9f5`, borderLeft: `4px solid ${accent}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', marginBottom: 32, boxShadow: '0 2px 16px rgba(27,43,94,0.07)' }}
        >
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
            <Icon name="info" size={16} color={accent} />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: accent }}>The Short Answer</span>
          </div>
          <div style={{ fontSize: 15, color: '#374151', lineHeight: 1.75 }}>{shortAnswer}</div>
          {footnote && <p style={{ fontSize: 12.5, color: '#9ca3af', margin: '10px 0 0', fontStyle: 'italic' }}>{footnote}</p>}
        </motion.div>
      )}

      {(primaryCta || secondaryCta) && (
        <motion.div variants={fadeUp} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
          {primaryCta && (
            <GlowButton size="lg" variant="gold" onClick={() => handleCta(primaryCta)}>
              {primaryCta.label}
            </GlowButton>
          )}
          {secondaryCta && (
            <GlowButton size="lg" variant="navy" glow={false} onClick={() => handleCta(secondaryCta)}>
              {secondaryCta.label}
            </GlowButton>
          )}
        </motion.div>
      )}
    </motion.div>
  )

  if (variant === 'flagship') {
    return (
      <header className="page-hero-section page-hero-section-flagship" style={{ background: HERO_GRAD, padding: '72px 32px 0', overflow: 'hidden', position: 'relative' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 55% 45% at 90% 10%, rgba(232,160,23,0.1) 0%, transparent 55%), radial-gradient(ellipse 45% 50% at 0% 100%, rgba(21,36,72,0.06) 0%, transparent 50%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="hero-flagship-inner" style={{ display: 'flex', gap: 64, alignItems: 'flex-start' }}>
            <div className="hero-flagship-left" style={{ flex: '0 0 580px', minWidth: 0 }}>{leftContent}</div>
            {rightColumn && (
              <motion.div
                style={{ flex: 1, paddingBottom: 40, minWidth: 0 }}
                variants={slideRight}
                initial={reduce ? false : 'hidden'}
                animate="visible"
                transition={{ delay: 0.15, duration: 0.7, ease: easeOutExpo }}
              >
                {rightColumn}
              </motion.div>
            )}
          </div>
        </div>
        <div style={{ height: 40 }} />
      </header>
    )
  }

  // standard / hub / support
  return (
    <header className="page-hero-section" style={{ background: HERO_GRAD, padding: '72px 32px 60px', overflow: 'hidden', position: 'relative' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 40% at 85% 0%, rgba(232,160,23,0.09) 0%, transparent 55%), radial-gradient(ellipse 40% 45% at 5% 100%, rgba(21,36,72,0.05) 0%, transparent 50%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: variant === 'hub' ? 1000 : 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {leftContent}
      </div>
    </header>
  )
}
