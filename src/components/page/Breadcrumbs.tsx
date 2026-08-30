import React from 'react'
import { NAVY } from '@/theme'

export interface BreadcrumbItem {
  label: string
  page?: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  navigate: (page: string) => void
}

export function Breadcrumbs({ items, navigate }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" style={{ background: '#f8f9fc', borderBottom: '1px solid #e8eaf0', padding: '10px 32px' }}>
      <ol style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#9ca3af', listStyle: 'none', padding: 0, flexWrap: 'nowrap' as const, overflow: 'hidden' }}>
        {items.map((item, i) => {
          // Middle items (not first, not last) are hidden on small screens via CSS
          const isMiddle = i > 0 && i < items.length - 1
          return (
            <React.Fragment key={i}>
              {i > 0 && <li aria-hidden="true" className={isMiddle ? 'breadcrumb-middle' : undefined} style={{ userSelect: 'none', flexShrink: 0 }}>›</li>}
              <li className={isMiddle ? 'breadcrumb-middle' : undefined} style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const, flexShrink: i === items.length - 1 ? 1 : 0 }}>
                {item.page ? (
                  <button
                    onClick={() => navigate(item.page!)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', fontSize: 12, padding: 0, fontFamily: 'Inter, system-ui, sans-serif', whiteSpace: 'nowrap' as const }}
                  >
                    {item.label}
                  </button>
                ) : (
                  <span style={{ color: NAVY, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }}>{item.label}</span>
                )}
              </li>
            </React.Fragment>
          )
        })}
      </ol>
    </nav>
  )
}
