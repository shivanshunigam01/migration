export interface NavSection {
  id: string
  label: string
}

export interface OnThisPageNavProps {
  sections: NavSection[]
  /** Currently active section id */
  active?: string
  accent?: string
}

const BORDER = '#e8edf6'

export function OnThisPageNav({ sections, active, accent = '#f5a124' }: OnThisPageNavProps) {
  return (
    <nav
      aria-label="On this page"
      className="on-this-page-nav-wrap"
      style={{ position: 'sticky', top: 88, width: 200, flexShrink: 0, alignSelf: 'flex-start' as const }}
    >
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#9ca3af', marginBottom: 14 }}>
        On this page
      </div>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' as const, gap: 2 }}>
        {sections.map(sec => {
          const isActive = active === sec.id
          return (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                style={{
                  display: 'block',
                  padding: '6px 10px',
                  fontSize: 13,
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? accent : '#6b7280',
                  textDecoration: 'none',
                  borderLeft: `2px solid ${isActive ? accent : BORDER}`,
                  background: isActive ? `${accent}08` : 'transparent',
                  borderRadius: '0 6px 6px 0',
                  transition: 'all 0.15s',
                }}
              >
                {sec.label}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
