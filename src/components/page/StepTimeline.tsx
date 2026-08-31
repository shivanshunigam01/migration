import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Icon from '@/components/ui/Icon'
import { NAVY } from '@/theme'
import { Stagger, StaggerItem } from '@/components/motion'

export interface TimelineStep {
  code?: string
  title: string
  duration?: string
  /** Bullet points (shown in 'cards' variant) */
  points?: string[]
  /** Descriptive paragraph (shown in 'flow' variant) */
  desc?: string
  color?: string
}

export interface StepTimelineProps {
  steps: TimelineStep[]
  /** 'cards' — 309-style tall cards with checklist points and circle-arrow dividers.
   *  'flow'  — 820-style compact center-aligned cards with SVG-arrow dividers. */
  variant?: 'cards' | 'flow'
  accent?: string
}

export function StepTimeline({ steps, variant = 'cards', accent = NAVY }: StepTimelineProps) {
  const n = steps.length
  const dividers = n - 1
  const reduce = useReducedMotion()

  if (variant === 'flow') {
    const cols = Array.from({ length: n + dividers }, (_, i) => (i % 2 === 0 ? '1fr' : '40px')).join(' ')
    return (
      <Stagger className="step-timeline" style={{ display: 'grid', gridTemplateColumns: cols, gap: 0, alignItems: 'center', maxWidth: 1100, margin: '0 auto' }} fast>
        {steps.map((stage, i) => {
          const color = stage.color ?? accent
          return (
            <React.Fragment key={i}>
              <StaggerItem preset="scale">
                <motion.div
                  whileHover={reduce ? undefined : { y: -4 }}
                  transition={{ duration: 0.22 }}
                  style={{
                    background: '#fff',
                    border: `2px solid ${color}25`,
                    borderRadius: 14,
                    padding: '18px 16px',
                    boxShadow: '0 4px 20px rgba(27,43,94,0.06)',
                    textAlign: 'center',
                  }}
                >
                  {stage.code && (
                    <div style={{ display: 'inline-block', background: `${color}15`, border: `1px solid ${color}30`, borderRadius: 6, padding: '3px 10px', marginBottom: 10 }}>
                      <span style={{ fontSize: 13, fontWeight: 800, color }}>{stage.code}</span>
                    </div>
                  )}
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{stage.title}</div>
                  {stage.duration && <div style={{ fontSize: 11, color, fontWeight: 600, marginBottom: 8 }}>{stage.duration}</div>}
                  {stage.desc && <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.5 }}>{stage.desc}</div>}
                </motion.div>
              </StaggerItem>
              {i < n - 1 && (
                <div className="step-timeline-divider" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10h10M11 6l4 4-4 4" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          )
        })}
      </Stagger>
    )
  }

  // 'cards' variant — 309-style, up to 3 stages with circle dividers
  const cardCols = Array.from({ length: n + dividers }, (_, i) => (i % 2 === 0 ? '1fr' : '48px')).join(' ')
  return (
    <Stagger className="step-timeline" style={{ display: 'grid', gridTemplateColumns: cardCols, gap: 0, alignItems: 'center', maxWidth: 1000, margin: '0 auto' }}>
      {steps.map((stage, i) => {
        const color = stage.color ?? accent
        return (
          <React.Fragment key={i}>
            <StaggerItem preset="scale">
              <motion.div
                whileHover={reduce ? undefined : { y: -5 }}
                transition={{ duration: 0.22 }}
                style={{
                  background: '#fff',
                  border: `2px solid ${color}30`,
                  borderRadius: 16,
                  padding: '24px 22px',
                  boxShadow: '0 4px 24px rgba(27,43,94,0.07)',
                }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 8, padding: '4px 12px', marginBottom: 14 }}>
                  {stage.code && <span style={{ fontSize: 14, fontWeight: 800, color }}>{stage.code}</span>}
                  {stage.duration && <span style={{ fontSize: 12, color, opacity: 0.7 }}>· {stage.duration}</span>}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 14 }}>{stage.title}</div>
                {stage.points && (
                  <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 7 }}>
                    {stage.points.map((pt, pi) => (
                      <div key={pi} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <div style={{ width: 16, height: 16, borderRadius: '50%', background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                          <Icon name="check" size={9} color={color} />
                        </div>
                        <span style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.5 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
                {stage.desc && <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>{stage.desc}</p>}
              </motion.div>
            </StaggerItem>
            {i < n - 1 && (
              <div className="step-timeline-divider" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="arrowright" size={14} color="#fff" />
                </div>
              </div>
            )}
          </React.Fragment>
        )
      })}
    </Stagger>
  )
}
