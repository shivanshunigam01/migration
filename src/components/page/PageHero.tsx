import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Icon from '@/components/ui/Icon'
import { NAVY, NAVY_DARK, GOLD, HERO_GRAD } from '@/theme'
import { ShieldGlow } from '@/components/motion'
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
        <motion.div variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, padding: '5px 14px 5px 8px', background: 'rgba(27,43,94,0.08)', border: '1px solid rgba(27,43,94,0.20)', borderRadius: 100 }}>
          <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon name="check" size={11} color="#fff" />
          </div>
          <span style={{ color: NAVY, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>MARA-Registered Agent · MARN 2619467</span>
        </motion.div>
      )}

      {(eyebrow || eyebrowSub) && (
        <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          {eyebrow && (
            <span style={{ background: 'rgba(27,43,94,0.08)', color: NAVY, border: '1px solid rgba(27,43,94,0.18)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '4px 12px', borderRadius: 20 }}>
              {eyebrow}
            </span>
          )}
          {eyebrowSub && <span style={{ color: '#6b7280', fontSize: 12 }}>{eyebrowSub}</span>}
        </motion.div>
      )}

      <motion.h1 variants={fadeUp} className={variant === 'flagship' ? 'page-hero-h1 page-hero-h1-flagship' : 'page-hero-h1'} style={{ fontFamily: "'Gilroy', sans-serif", fontSize: variant === 'flagship' ? 'clamp(32px, 5vw, 50px)' : 'clamp(26px, 5vw, 54px)', fontWeight: 700, color: NAVY, lineHeight: 1.1, margin: '0 0 22px', letterSpacing: '-0.02em' }}>
        {title}
      </motion.h1>

      <motion.p variants={fadeUp} style={{ fontSize: 17, color: '#374151', lineHeight: 1.7, margin: '0 0 8px', maxWidth: variant === 'standard' ? 620 : 500 }}>
        {deck}
      </motion.p>

      {currentAsAt && (
        <motion.p variants={fadeUp} style={{ fontSize: 12, color: '#9ca3af', margin: '0 0 28px', fontStyle: 'italic' }}>
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
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: accent }}>The Short Answer</span>
          </div>
          <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.75 }}>{shortAnswer}</div>
          {footnote && <p style={{ fontSize: 11.5, color: '#9ca3af', margin: '10px 0 0', fontStyle: 'italic' }}>{footnote}</p>}
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
      <header style={{ background: HERO_GRAD, padding: '64px 32px 0', overflow: 'hidden', position: 'relative' }}>
        <ShieldGlow tone="soft" size={640} top="-18%" right="-8%" opacity={0.9} />
        <ShieldGlow tone="gold" size={420} bottom="-20%" left="-6%" opacity={0.55} />
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
    <header style={{ background: HERO_GRAD, padding: '64px 32px 56px', overflow: 'hidden', position: 'relative' }}>
      <ShieldGlow tone="soft" size={560} top="-20%" right="-10%" opacity={0.85} />
      <ShieldGlow tone="navy" size={380} bottom="-30%" left="-8%" opacity={0.5} />
      <div style={{ maxWidth: variant === 'hub' ? 1000 : 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {leftContent}
      </div>
    </header>
  )
}
