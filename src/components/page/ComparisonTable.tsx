import { useState, useEffect } from 'react'
import { NAVY } from '@/theme'

export interface ComparisonColumn {
  key: string
  label: string
  /** Visual emphasis on this column (e.g. the page's visa subclass) */
  highlight?: boolean
}

export interface ComparisonRow {
  feature: string
  [key: string]: string
}

export interface ComparisonTableProps {
  columns: ComparisonColumn[]
  rows: ComparisonRow[]
  caption?: string
  /** Accent colour for highlighted column values */
  accent?: string
}

const GREY_BG = '#fafbfe'
const BORDER  = '#f0f2f8'

export function ComparisonTable({ columns, rows, caption, accent = NAVY }: ComparisonTableProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (isMobile) {
    // Stacked card layout — one card per row
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {rows.map((row, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 12px rgba(27,43,94,0.06)' }}>
              {/* Feature header */}
              <div style={{ background: NAVY, padding: '10px 16px' }}>
                <span style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>{row.feature}</span>
              </div>
              {/* Column values */}
              <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {columns.map(col => (
                  <div key={col.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ fontSize: 12, color: '#6b7280', fontWeight: 500, flexShrink: 0 }}>{col.label}</span>
                    <span style={{ fontSize: 13, fontWeight: col.highlight ? 600 : 400, color: col.highlight ? accent : '#4b5563', textAlign: 'right' }}>
                      {row[col.key] ?? '—'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {caption && (
          <p style={{ marginTop: 12, fontSize: 11, color: '#9ca3af', fontStyle: 'italic', textAlign: 'center' }}>
            {caption}
          </p>
        )}
      </div>
    )
  }

  return (
    <div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(27,43,94,0.07)', minWidth: 480, width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
          <thead>
            <tr style={{ background: NAVY }}>
              <th scope="col" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: 700, padding: '14px 24px', textAlign: 'left' }}>Feature</th>
              {columns.map(col => (
                <th key={col.key} scope="col" style={{ color: '#fff', fontSize: 13, fontWeight: 700, padding: '14px 24px', textAlign: 'left' }}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                style={{
                  borderBottom: i < rows.length - 1 ? `1px solid ${BORDER}` : 'none',
                  background: i % 2 === 0 ? GREY_BG : '#fff',
                }}
              >
                <th scope="row" style={{ fontSize: 12, color: '#6b7280', fontWeight: 500, padding: '12px 24px', textAlign: 'left' }}>{row.feature}</th>
                {columns.map(col => (
                  <td
                    key={col.key}
                    style={{
                      fontSize: 13,
                      fontWeight: col.highlight ? 600 : 400,
                      color: col.highlight ? accent : '#4b5563',
                      lineHeight: 1.5,
                      padding: '12px 24px',
                    }}
                  >
                    {row[col.key] ?? '—'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {caption && (
        <p style={{ marginTop: 12, fontSize: 11, color: '#9ca3af', fontStyle: 'italic', textAlign: 'center' }}>
          {caption}
        </p>
      )}
    </div>
  )
}
