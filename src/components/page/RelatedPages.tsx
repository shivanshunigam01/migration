import { motion, useReducedMotion } from 'framer-motion'
import Icon from '@/components/ui/Icon'
import { NAVY } from '@/theme'
import { Stagger, StaggerItem } from '@/components/motion'

export interface RelatedPage {
  title: string
  desc: string
  icon?: string
  page: string
  color?: string
}

export interface RelatedPagesProps {
  pages: RelatedPage[]
  navigate: (page: string) => void
  columns?: 2 | 3 | 4
}

const BORDER = '#e8edf6'

export function RelatedPages({ pages, navigate, columns = 4 }: RelatedPagesProps) {
  const reduce = useReducedMotion()

  return (
    <Stagger className="related-pages-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 16 }}>
      {pages.map((r, i) => {
        const color = r.color ?? NAVY
        return (
          <StaggerItem key={i} preset="scale">
            <motion.button
              onClick={() => navigate(r.page)}
              whileHover={reduce ? undefined : { y: -5, boxShadow: '0 12px 32px rgba(27,43,94,0.12)' }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.22 }}
              style={{
                background: '#fff',
                border: `1px solid ${BORDER}`,
                borderTop: `3px solid ${color}`,
                borderRadius: '0 0 14px 14px',
                padding: '22px 20px 20px',
                cursor: 'pointer',
                textAlign: 'left' as const,
                fontFamily: "'Gilroy', sans-serif",
                boxShadow: '0 1px 4px rgba(27,43,94,0.04)',
                width: '100%',
              }}
            >
              {r.icon && (
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon name={r.icon} size={18} color={color} />
                </div>
              )}
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 8, lineHeight: 1.3 }}>{r.title}</div>
              <div style={{ fontSize: 12.5, color: '#6b7280', lineHeight: 1.6 }}>{r.desc}</div>
              <div style={{ marginTop: 14, fontSize: 12, fontWeight: 700, color }}>Read more →</div>
            </motion.button>
          </StaggerItem>
        )
      })}
    </Stagger>
  )
}
