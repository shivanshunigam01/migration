import React, { useState, useEffect, useMemo } from 'react'
import type { Occupation, OccupationList } from '@/data/occupations'
import { NAVY, GOLD } from '@/theme'
import Icon from '@/components/ui/Icon'

const BORDER = '#e8edf6'
const GREY_BG = '#fafbfe'

const LIST_LABELS: Record<OccupationList, string> = {
  CSOL:   'Core Skills (CSOL)',
  MLTSSL: 'MLTSSL',
  STSOL:  'STSOL',
  ROL:    'ROL',
}

const LIST_COLORS: Record<OccupationList, string> = {
  CSOL:   '#f5a124',
  MLTSSL: '#2563eb',
  STSOL:  '#f5a124',
  ROL:    '#4f46e5',
}

export interface OccupationTableProps {
  occupations: Occupation[]
  accent?: string
  /** Show only occupations that include this visa subclass in their visas array */
  defaultVisaFilter?: string
  /** Lock the visa filter so the user cannot change it */
  lockVisaFilter?: boolean
}

export function OccupationTable({
  occupations,
  accent = NAVY,
  defaultVisaFilter = 'All',
  lockVisaFilter = false,
}: OccupationTableProps) {
  const [search, setSearch]       = useState('')
  const [listFilter, setListFilter] = useState<OccupationList | 'All'>('All')
  const [visaFilter, setVisaFilter] = useState(defaultVisaFilter)
  const [isMobile, setIsMobile]   = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 700)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const allVisas = useMemo(() => {
    const set = new Set<string>()
    occupations.forEach(o => o.visas.forEach(v => set.add(v)))
    return Array.from(set).sort()
  }, [occupations])

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return occupations.filter(o => {
      if (q && !o.title.toLowerCase().includes(q) && !o.anzscoCode.includes(q)) return false
      if (listFilter !== 'All' && o.list !== listFilter) return false
      if (visaFilter !== 'All' && !o.visas.includes(visaFilter)) return false
      return true
    })
  }, [occupations, search, listFilter, visaFilter])

  const selectStyle: React.CSSProperties = {
    padding: '9px 32px 9px 12px',
    border: `1.5px solid ${BORDER}`,
    borderRadius: 8,
    fontSize: 13,
    color: NAVY,
    background: '#fff',
    cursor: 'pointer',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    fontFamily: "'Gilroy', sans-serif",
    outline: 'none',
  }

  return (
    <div>
      {/* Search + filters */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20, alignItems: 'center' }}>
        {/* Search */}
        <div style={{ position: 'relative', flex: '1 1 220px', minWidth: 200 }}>
          <svg aria-hidden="true" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="6" cy="6" r="4.5" stroke="#9ca3af" strokeWidth="1.5"/>
            <path d="M9.5 9.5l2.5 2.5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            type="search"
            placeholder="Search by title or ANZSCO code…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: '100%', padding: '9px 12px 9px 34px', border: `1.5px solid ${BORDER}`, borderRadius: 8, fontSize: 13, color: NAVY, fontFamily: "'Gilroy', sans-serif", outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        {/* List filter */}
        <select value={listFilter} onChange={e => setListFilter(e.target.value as OccupationList | 'All')} style={selectStyle} aria-label="Filter by occupation list">
          <option value="All">All lists</option>
          {(['CSOL','MLTSSL','STSOL','ROL'] as OccupationList[]).map(l => (
            <option key={l} value={l}>{LIST_LABELS[l]}</option>
          ))}
        </select>

        {/* Visa filter */}
        {!lockVisaFilter && (
          <select value={visaFilter} onChange={e => setVisaFilter(e.target.value)} style={selectStyle} aria-label="Filter by visa subclass">
            <option value="All">All visas</option>
            {allVisas.map(v => <option key={v} value={v}>{v} visa</option>)}
          </select>
        )}

        {/* Result count */}
        <div style={{ fontSize: 12, color: '#6b7280', marginLeft: 'auto', whiteSpace: 'nowrap' }}>
          <strong style={{ color: accent }}>{filtered.length}</strong> of {occupations.length} occupation{occupations.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 24px', background: GREY_BG, borderRadius: 12, border: `1.5px dashed ${BORDER}` }}>
          <div style={{ marginBottom: 12, display: 'flex', justifyContent: 'center' }}><Icon name="eye" size={32} color={NAVY} /></div>
          <div style={{ fontSize: 16, fontWeight: 600, color: NAVY, marginBottom: 6 }}>No occupations match your search</div>
          <div style={{ fontSize: 13, color: '#9ca3af' }}>Try different keywords, or clear the filters to see all occupations.</div>
          <button onClick={() => { setSearch(''); setListFilter('All'); if (!lockVisaFilter) setVisaFilter('All') }}
            style={{ marginTop: 16, padding: '8px 18px', background: accent, color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif" }}>
            Clear filters
          </button>
        </div>
      )}

      {/* Mobile card view */}
      {isMobile && filtered.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filtered.map(o => (
            <div key={o.anzscoCode} style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 12, padding: '16px 18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: NAVY, lineHeight: 1.4 }}>{o.title}</div>
                <ListBadge list={o.list} />
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 12px', marginBottom: 8 }}>
                <span style={{ fontSize: 11, color: '#6b7280' }}><strong>ANZSCO</strong> {o.anzscoCode}</span>
                <span style={{ fontSize: 11, color: '#6b7280' }}><strong>Assessing body</strong> {o.assessingAuthority}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: o.caveats ? 8 : 0 }}>
                {o.visas.map(v => (
                  <span key={v} style={{ fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 100, background: `${accent}12`, color: accent, border: `1px solid ${accent}30` }}>{v}</span>
                ))}
              </div>
              {o.caveats && (
                <div style={{ fontSize: 11, color: '#f5a124', background: 'rgba(245,161,36,0.12)', border: '1px solid rgba(245,161,36,0.3)', borderRadius: 6, padding: '5px 9px', lineHeight: 1.5 }}>
                  {o.caveats}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Desktop table */}
      {!isMobile && filtered.length > 0 && (
        <div style={{ overflowX: 'auto', borderRadius: 12, border: `1.5px solid ${BORDER}`, boxShadow: '0 2px 12px rgba(27,43,94,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, tableLayout: 'fixed' }}>
            <colgroup>
              <col style={{ width: '10%' }} />
              <col style={{ width: '30%' }} />
              <col style={{ width: '12%' }} />
              <col style={{ width: '22%' }} />
              <col style={{ width: '14%' }} />
              <col style={{ width: '12%' }} />
            </colgroup>
            <thead>
              <tr style={{ background: NAVY, position: 'sticky', top: 0, zIndex: 2 }}>
                {['ANZSCO', 'Occupation title', 'List', 'Assessing authority', 'Visas', 'Caveats'].map(h => (
                  <th key={h} style={{ padding: '12px 14px', textAlign: 'left', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', color: '#fff', whiteSpace: 'nowrap', textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((o, i) => (
                <tr key={o.anzscoCode} style={{ background: i % 2 === 0 ? '#fff' : GREY_BG, borderBottom: `1px solid ${BORDER}`, transition: 'background 0.1s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = `${accent}06`}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? '#fff' : GREY_BG}
                >
                  <td style={{ padding: '11px 14px', fontFamily: 'monospace', fontSize: 12, color: '#6b7280', whiteSpace: 'nowrap' }}>{o.anzscoCode}</td>
                  <td style={{ padding: '11px 14px', fontWeight: 500, color: NAVY, lineHeight: 1.4 }}>{o.title}</td>
                  <td style={{ padding: '11px 14px' }}>
                    <ListBadge list={o.list} />
                  </td>
                  <td style={{ padding: '11px 14px', color: '#374151', fontSize: 12 }}>{o.assessingAuthority}</td>
                  <td style={{ padding: '11px 14px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                      {o.visas.map(v => (
                        <span key={v} style={{ fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: 100, background: `${accent}10`, color: accent, border: `1px solid ${accent}28` }}>{v}</span>
                      ))}
                    </div>
                  </td>
                  <td style={{ padding: '11px 14px' }}>
                    {o.caveats ? (
                      <span style={{ fontSize: 11, color: '#0d1632', background: 'rgba(245,161,36,0.12)', border: '1px solid rgba(245,161,36,0.3)', borderRadius: 6, padding: '3px 7px', display: 'inline-flex', alignItems: 'center', gap: 3, lineHeight: 1.5 }}>
                        <Icon name="alert" size={11} color="#0d1632" /> See note
                      </span>
                    ) : (
                      <span style={{ fontSize: 11, color: '#6b7280' }}>—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Caveats legend (desktop) */}
      {!isMobile && filtered.some(o => o.caveats) && (
        <div style={{ marginTop: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#0d1632', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Occupation caveats</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {filtered.filter(o => o.caveats).map(o => (
              <div key={o.anzscoCode} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 12 }}>
                <span style={{ fontFamily: 'monospace', color: '#6b7280', flexShrink: 0 }}>{o.anzscoCode}</span>
                <span style={{ color: '#374151', lineHeight: 1.6 }}>{o.caveats}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <p style={{ fontSize: 11, color: '#9ca3af', margin: '16px 0 0', lineHeight: 1.7 }}>
        Sample data only. Occupation lists are published and updated by the Department of Home Affairs.
        Verify current lists at immi.homeaffairs.gov.au before relying on this information.
      </p>
    </div>
  )
}

function ListBadge({ list }: { list: OccupationList }) {
  return (
    <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 100, background: `${LIST_COLORS[list]}14`, color: LIST_COLORS[list], border: `1px solid ${LIST_COLORS[list]}30`, whiteSpace: 'nowrap' }}>
      {list}
    </span>
  )
}
