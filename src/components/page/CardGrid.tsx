import React from 'react'
import Icon from '@/components/ui/Icon'
import { NAVY } from '@/theme'

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
  return (
    <div className="card-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 20 }}>
      {cards.map((card, i) => {
        const color = accent
        const isButton = !!card.page && !!navigate
        const cardStyle: React.CSSProperties = {
          background: dark ? 'rgba(255,255,255,0.05)' : '#fff',
          border: dark
            ? `1px solid rgba(255,255,255,0.1)`
            : `1px solid #e8edf6`,
          borderTop: `4px solid ${color}`,
          borderRadius: '0 0 14px 14px',
          padding: '28px 28px 24px',
          boxShadow: dark ? 'none' : '0 2px 12px rgba(27,43,94,0.05)',
          cursor: isButton ? 'pointer' : 'default',
          textAlign: 'left' as const,
          fontFamily: 'Inter, system-ui, sans-serif',
          transition: 'box-shadow 0.15s',
        }

        const inner = (
          <>
            {/* Badge + title row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              {card.badge && (
                <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 28, fontWeight: 700, color, opacity: 0.3, lineHeight: 1, flexShrink: 0 }}>
                  {card.badge}
                </span>
              )}
              {card.icon && !card.badge && (
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={card.icon} size={18} color={color} />
                </div>
              )}
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 18, fontWeight: 700, color: dark ? '#fff' : NAVY, margin: 0, lineHeight: 1.3 }}>
                {card.title}
              </h3>
            </div>

            <p style={{ fontSize: 14, color: dark ? 'rgba(255,255,255,0.65)' : '#374151', lineHeight: 1.75, margin: card.note ? '0 0 14px' : 0 }}>
              {card.body}
            </p>

            {card.note && (
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: '10px 12px' }}>
                <Icon name="info" size={14} color={color} />
                <span style={{ fontSize: 12, color: dark ? 'rgba(255,255,255,0.55)' : '#4b5563', lineHeight: 1.6 }}>{card.note}</span>
              </div>
            )}
          </>
        )

        if (isButton) {
          return (
            <button
              key={i}
              onClick={() => navigate!(card.page!)}
              style={cardStyle}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(27,43,94,0.1)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = dark ? 'none' : '0 2px 12px rgba(27,43,94,0.05)' }}
            >
              {inner}
            </button>
          )
        }

        return <article key={i} style={cardStyle}>{inner}</article>
      })}
    </div>
  )
}
