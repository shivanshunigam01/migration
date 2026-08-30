import React, { useState } from 'react'
import Icon from '@/components/ui/Icon'
import { NAVY } from '@/theme'

export interface ChecklistGroup {
  title: string
  icon?: string
  color?: string
  items: string[]
}

export interface EvidenceChecklistProps {
  groups: ChecklistGroup[]
  /** Dark (navy) background variant */
  dark?: boolean
  accent?: string
  /** Open the first group by default */
  defaultOpen?: number | null
}

export function EvidenceChecklist({ groups, dark = false, accent = NAVY, defaultOpen = 0 }: EvidenceChecklistProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
      {groups.map((grp, i) => {
        const color = grp.color ?? accent
        const isOpen = open === i
        return (
          <div
            key={i}
            style={{
              background: dark ? 'rgba(255,255,255,0.05)' : '#fff',
              border: dark
                ? `1px solid ${isOpen ? color + '50' : 'rgba(255,255,255,0.1)'}`
                : `1px solid ${isOpen ? color + '40' : '#e8edf6'}`,
              borderRadius: 12,
              overflow: 'hidden',
              transition: 'border-color 0.2s',
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding: '16px 20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left' as const,
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
              {grp.icon && (
                <div style={{ width: 34, height: 34, borderRadius: 9, background: `${color}${dark ? '20' : '18'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={grp.icon} size={15} color={color} />
                </div>
              )}
              <span style={{ flex: 1, fontSize: 14, fontWeight: 700, color: dark ? '#fff' : NAVY }}>{grp.title}</span>
              <span style={{ fontSize: 11, color: dark ? 'rgba(255,255,255,0.4)' : '#9ca3af', marginRight: 8 }}>{grp.items.length} items</span>
              <div style={{
                width: 24, height: 24, borderRadius: '50%',
                background: isOpen ? color : (dark ? 'rgba(255,255,255,0.1)' : '#f0f2f8'),
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.15s',
              }}>
                <Icon name={isOpen ? 'minus' : 'plus'} size={12} color={isOpen ? '#fff' : (dark ? 'rgba(255,255,255,0.6)' : '#6b7280')} />
              </div>
            </button>

            {isOpen && (
              <div style={{ padding: '0 20px 18px', borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : '#e8edf6'}` }}>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8, paddingTop: 14 }}>
                  {grp.items.map((item, ii) => (
                    <div key={ii} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <div style={{ width: 20, height: 20, borderRadius: 5, border: `1.5px solid ${color}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <Icon name="check" size={10} color={color} />
                      </div>
                      <span style={{ fontSize: 13, color: dark ? 'rgba(255,255,255,0.75)' : '#374151', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
