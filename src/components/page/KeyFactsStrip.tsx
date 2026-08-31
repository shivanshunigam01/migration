import { motion, useReducedMotion } from 'framer-motion'
import Icon from '@/components/ui/Icon'
import { NAVY } from '@/theme'
import { Stagger, StaggerItem } from '@/components/motion'

export interface KeyFact {
  /** If provided, renders a fact-style tile (icon + small value). If absent, renders a stat-style tile (large accent value). */
  icon?: string
  value: string
  label: string
  note?: string
}

export interface KeyFactsStripProps {
  facts: KeyFact[]
  /** Accent colour used for icon backgrounds and (in stat-style) large values */
  accent?: string
  background?: string
}

const BORDER = '#eef0f8'

export function KeyFactsStrip({ facts, accent = NAVY, background = '#fff' }: KeyFactsStripProps) {
  const reduce = useReducedMotion()

  return (
    <section style={{ background, borderBottom: `1px solid ${BORDER}` }}>
      <Stagger className="key-facts-grid" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: `repeat(${facts.length}, 1fr)` }}>
        {facts.map((fact, i) => (
          <StaggerItem key={i} as="article">
            <motion.div className="key-facts-article"
              whileHover={reduce ? undefined : { y: -3 }}
              transition={{ duration: 0.22 }}
              style={{
                padding: fact.icon ? '36px 24px' : '32px 24px',
                borderRight: i < facts.length - 1 ? `1px solid ${BORDER}` : 'none',
                textAlign: 'center',
              }}
            >
              {fact.icon ? (
                <>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${accent}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                    <Icon name={fact.icon} size={20} color={accent} />
                  </div>
                  <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 21, fontWeight: 700, color: NAVY, lineHeight: 1.2, marginBottom: 4 }}>{fact.value}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: NAVY, marginBottom: fact.note ? 6 : 0 }}>{fact.label}</div>
                  {fact.note && <div style={{ fontSize: 13, color: '#9ca3af', lineHeight: 1.5 }}>{fact.note}</div>}
                </>
              ) : (
                <>
                  <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 38, fontWeight: 700, color: accent, lineHeight: 1, marginBottom: 6 }}>{fact.value}</div>
                  <div style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.4 }}>{fact.label}</div>
                </>
              )}
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
