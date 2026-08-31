import React, { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Icon from '@/components/ui/Icon'
import { NAVY } from '@/theme'
import { Stagger, StaggerItem } from '@/components/motion'

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
  const reduce = useReducedMotion()

  return (
    <Stagger style={{ display: 'flex', flexDirection: 'column' as const, gap: dark ? 6 : 3 }}>
      {items.map((item, i) => (
        <StaggerItem key={i}>
          <div
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
                fontFamily: "'Gilroy', sans-serif",
              }}
            >
              <span style={{ fontSize: 16, fontWeight: 600, color: dark ? '#ffffff' : NAVY, lineHeight: 1.4 }}>
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: open === i ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  background: open === i ? accent : (dark ? 'rgba(255,255,255,0.1)' : '#f0f2f8'),
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Icon
                  name={open === i ? 'minus' : 'plus'}
                  size={14}
                  color={open === i ? '#fff' : (dark ? 'rgba(255,255,255,0.6)' : NAVY)}
                />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="content"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 24px 20px', borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : '#f0f2f8'}` }}>
                    <div style={{ paddingTop: 16, fontSize: 15, color: dark ? 'rgba(255,255,255,0.7)' : '#4b5563', lineHeight: 1.75 }}>
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  )
}
