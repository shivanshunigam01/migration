import React, { useState } from 'react'
import Icon from '@/components/ui/Icon'
import { NAVY } from '@/theme'

export interface FaqItem {
  question: string
  answer: React.ReactNode
}

export interface FaqAccordionProps {
  items: FaqItem[]
  accent?: string
  /** Render on a dark (navy) background */
  dark?: boolean
}

export function FaqAccordion({ items, accent = NAVY, dark = false }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: dark ? 6 : 3 }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            background: dark ? 'rgba(255,255,255,0.05)' : '#fff',
            border: dark
              ? `1px solid ${open === i ? accent + '50' : 'rgba(255,255,255,0.1)'}`
              : '1px solid #e8edf6',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: !dark && open === i ? '0 4px 24px rgba(27,43,94,0.09)' : 'none',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
              padding: '18px 24px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left' as const,
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            <span style={{ fontSize: 15, fontWeight: 600, color: dark ? '#ffffff' : NAVY, lineHeight: 1.4 }}>
              {item.question}
            </span>
            <span style={{
              width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
              background: open === i ? accent : (dark ? 'rgba(255,255,255,0.1)' : '#f0f2f8'),
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}>
              <Icon
                name={open === i ? 'minus' : 'plus'}
                size={14}
                color={open === i ? '#fff' : (dark ? 'rgba(255,255,255,0.6)' : NAVY)}
              />
            </span>
          </button>
          {open === i && (
            <div style={{ padding: '0 24px 20px', borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : '#f0f2f8'}` }}>
              <div style={{ paddingTop: 16, fontSize: 14, color: dark ? 'rgba(255,255,255,0.7)' : '#4b5563', lineHeight: 1.75 }}>
                {item.answer}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
