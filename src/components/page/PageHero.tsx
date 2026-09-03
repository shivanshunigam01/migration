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
        <motion.div variants={fadeUp} style={{ marginBottom: 26 }}>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: NAVY, marginBottom: 8 }}>
            Nanak Migration Group
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 32, height: 2, background: accent, display: 'inline-block', borderRadius: 1 }} />
            <span style={{ color: '#64748b', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.05em' }}>
              MARA-registered · MARN 2619467
            </span>
          </div>
        </motion.div>
      )}

      {(eyebrow || eyebrowSub) && (
        <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          {eyebrow && (
            <span style={{ color: NAVY, borderBottom: `2px solid ${accent}`, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, paddingBottom: 5 }}>
              {eyebrow}
            </span>
          )}
          {eyebrowSub && <span style={{ color: '#6b7280', fontSize: 13 }}>{eyebrowSub}</span>}
        </motion.div>
      )}

      <motion.h1 variants={fadeUp} className={variant === 'flagship' ? 'page-hero-h1 page-hero-h1-flagship' : 'page-hero-h1'} style={{ fontFamily: "'Gilroy', sans-serif", fontSize: variant === 'flagship' ? 'clamp(36px, 5vw, 54px)' : 'clamp(30px, 5vw, 56px)', fontWeight: 700, color: NAVY, lineHeight: 1.06, margin: '0 0 24px', letterSpacing: '-0.035em' }}>
        {title}
      </motion.h1>

      <motion.p variants={fadeUp} style={{ fontSize: 18.5, color: '#3f4b5f', lineHeight: 1.72, margin: '0 0 8px', maxWidth: variant === 'standard' ? 640 : 520 }}>
        {deck}
      </motion.p>

      {currentAsAt && (
        <motion.p variants={fadeUp} style={{ fontSize: 13, color: '#8b93a7', margin: '0 0 30px', fontStyle: 'italic' }}>
          General information current as at {currentAsAt}. Requirements are subject to change — verify with the Department of Home Affairs before lodging.
        </motion.p>
      )}

      {shortAnswer && (
        <motion.div
          variants={fadeUp}
          whileHover={reduce ? undefined : { y: -2 }}
          transition={{ duration: 0.25 }}
          style={{ background: 'rgba(255,255,255,0.92)', border: `1px solid rgba(21,36,72,0.08)`, borderLeft: `4px solid ${accent}`, borderRadius: '0 14px 14px 0', padding: '22px 26px', marginBottom: 34, boxShadow: '0 8px 32px rgba(21,36,72,0.06)' }}
        >
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
            <Icon name="info" size={16} color={accent} />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: accent }}>The Short Answer</span>
          </div>
          <div style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75 }}>{shortAnswer}</div>
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
      <header className="page-hero-section page-hero-section-flagship" style={{ background: HERO_GRAD, padding: '80px 32px 0', overflow: 'hidden', position: 'relative' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 48% at 88% 8%, rgba(232,160,23,0.14) 0%, transparent 55%), radial-gradient(ellipse 48% 52% at 0% 100%, rgba(21,36,72,0.07) 0%, transparent 52%), linear-gradient(180deg, transparent 70%, rgba(255,255,255,0.45) 100%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(21,36,72,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(21,36,72,0.025) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.4), transparent 80%)', WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,0.4), transparent 80%)', pointerEvents: 'none' }} />
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
    <header className="page-hero-section" style={{ background: HERO_GRAD, padding: '80px 32px 68px', overflow: 'hidden', position: 'relative' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 55% 42% at 85% 0%, rgba(232,160,23,0.12) 0%, transparent 55%), radial-gradient(ellipse 42% 48% at 5% 100%, rgba(21,36,72,0.06) 0%, transparent 50%)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(21,36,72,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(21,36,72,0.022) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.35), transparent 78%)', WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,0.35), transparent 78%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: variant === 'hub' ? 1000 : 820, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {leftContent}
      </div>
    </header>
  )
}
