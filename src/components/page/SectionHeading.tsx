import { Reveal } from '@/components/motion'
import { NAVY } from '@/theme'

export interface SectionHeadingProps {
  kicker?: string
  title: string
  intro?: string
  accent?: string
  light?: boolean
  /** Extra bottom margin override (default 48 on light, 52 on no-intro) */
  marginBottom?: number
}

export function SectionHeading({ kicker, title, intro, accent = NAVY, light = false, marginBottom }: SectionHeadingProps) {
  const mb = marginBottom ?? (intro ? 48 : 52)
  return (
    <Reveal preset="up" style={{ textAlign: 'center', marginBottom: mb }}>
      {kicker && (
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
          textTransform: 'uppercase' as const, color: accent, marginBottom: 10,
        }}>{kicker}</div>
      )}
      <h2 style={{
        fontFamily: "'Gilroy', sans-serif",
        fontSize: 'clamp(26px, 3.5vw, 38px)',
        fontWeight: 700,
        color: light ? '#ffffff' : NAVY,
        margin: intro ? '0 0 12px' : 0,
        letterSpacing: '-0.02em',
        lineHeight: 1.15,
      }}>{title}</h2>
      {intro && (
        <p style={{
          color: light ? 'rgba(255,255,255,0.55)' : '#6b7280',
          fontSize: 16, maxWidth: 540, margin: '0 auto', lineHeight: 1.6,
        }}>{intro}</p>
      )}
    </Reveal>
  )
}
