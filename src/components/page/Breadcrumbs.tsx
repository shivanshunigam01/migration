import React from 'react'
import { Link } from 'react-router-dom'
import { NAVY } from '@/theme'
import { resolveRoute } from '@/lib/navigation'

export interface BreadcrumbItem {
  label: string
  page?: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  navigate: (page: string) => void
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-bar" style={{ background: '#f8f9fc', borderBottom: '1px solid #e8eaf0', padding: '10px 32px' }}>
      <ol style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#9ca3af', listStyle: 'none', padding: 0, flexWrap: 'nowrap' as const, overflow: 'hidden' }}>
        {items.map((item, i) => {
          const isMiddle = i > 0 && i < items.length - 1
          const href = item.page ? resolveRoute(item.page) : undefined
          return (
            <React.Fragment key={i}>
              {i > 0 && <li aria-hidden="true" className={isMiddle ? 'breadcrumb-middle' : undefined} style={{ userSelect: 'none', flexShrink: 0 }}>›</li>}
              <li className={isMiddle ? 'breadcrumb-middle' : undefined} style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const, flexShrink: i === items.length - 1 ? 1 : 0 }}>
                {href ? (
                  <Link
                    to={href}
                    style={{ color: '#6b7280', fontSize: 13, fontFamily: "'Gilroy', sans-serif", whiteSpace: 'nowrap' as const, textDecoration: 'none' }}
                  >
                    {item.label}
                  </Link>
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
