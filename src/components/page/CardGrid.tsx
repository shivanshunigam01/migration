import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Icon from '@/components/ui/Icon'
import { NAVY } from '@/theme'
import { Stagger, StaggerItem } from '@/components/motion'
import { resolveRoute } from '@/lib/navigation'

export interface PageCard {
  icon?: string
  title: string
  body: string
  /** Rendered below body — e.g. a callout note */
  note?: string
  /** Top accent strip colour */
  color?: string
  /** Ordinal badge (e.g. '01') */
  badge?: string
  page?: string
}

export interface CardGridProps {
  cards: PageCard[]
  columns?: 2 | 3 | 4
  accent?: string
  /** Dark (navy) background variant */
  dark?: boolean
  navigate?: (page: string) => void
}

export function CardGrid({ cards, columns = 2, accent = NAVY, dark = false, navigate }: CardGridProps) {
  const reduce = useReducedMotion()

  return (
    <Stagger className="card-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 20 }}>
      {cards.map((card, i) => {
        const color = accent
        const isButton = !!card.page && !!navigate
        const cardStyle: React.CSSProperties = {
          background: dark ? 'rgba(255,255,255,0.04)' : '#fff',
          border: dark
            ? `1px solid rgba(255,255,255,0.1)`
            : `1px solid rgba(21,36,72,0.08)`,
          borderBottom: dark ? `3px solid rgba(232,160,23,0.55)` : `3px solid ${color}`,
          borderRadius: 12,
          padding: '30px 26px 26px',
          boxShadow: dark ? 'none' : '0 8px 28px rgba(21,36,72,0.05)',
          cursor: isButton ? 'pointer' : 'default',
          textAlign: 'left' as const,
          fontFamily: "'Gilroy', sans-serif",
          width: '100%',
        }

        const inner = (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              {card.badge && (
                <span style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 29, fontWeight: 700, color, opacity: 0.3, lineHeight: 1, flexShrink: 0 }}>
                  {card.badge}
                </span>
              )}
              {card.icon && !card.badge && (
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={card.icon} size={18} color={color} />
                </div>
              )}
              <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 19, fontWeight: 700, color: dark ? '#fff' : NAVY, margin: 0, lineHeight: 1.3 }}>
                {card.title}
              </h3>
            </div>

            <p style={{ fontSize: 15, color: dark ? 'rgba(255,255,255,0.65)' : '#374151', lineHeight: 1.75, margin: card.note ? '0 0 14px' : 0 }}>
              {card.body}
            </p>

            {card.note && (
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: '10px 12px' }}>
                <Icon name="info" size={14} color={color} />
                <span style={{ fontSize: 13, color: dark ? 'rgba(255,255,255,0.55)' : '#4b5563', lineHeight: 1.6 }}>{card.note}</span>
              </div>
            )}
          </>
        )

        if (isButton) {
          const to = resolveRoute(card.page!)
          return (
            <StaggerItem key={i} preset="scale">
              <motion.div
                style={{ ...cardStyle, padding: 0, overflow: 'hidden' }}
                whileHover={reduce ? undefined : { y: -3, boxShadow: '0 18px 40px rgba(21,36,72,0.08)' }}
                whileTap={reduce ? undefined : { scale: 0.985 }}
                transition={{ duration: 0.22 }}
              >
                <Link
                  to={to}
                  style={{ display: 'block', padding: '30px 26px 26px', textDecoration: 'none', color: 'inherit', height: '100%' }}
                >
                  {inner}
                </Link>
              </motion.div>
            </StaggerItem>
          )
        }

        return (
          <StaggerItem key={i} preset="scale">
            <motion.div
              style={cardStyle}
              whileHover={reduce ? undefined : { y: -4, boxShadow: dark ? '0 12px 32px rgba(0,0,0,0.2)' : '0 12px 32px rgba(27,43,94,0.1)' }}
              transition={{ duration: 0.22 }}
            >
              {inner}
            </motion.div>
          </StaggerItem>
        )
      })}
    </Stagger>
  )
}
