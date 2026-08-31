import React, { useState } from 'react'
import { VISA_PROFILES } from '@/data/visaComparison'
import { ComparisonTable } from '@/components/page/ComparisonTable'
import { NAVY, GOLD } from '@/theme'

const BORDER = '#e8edf6'

const ROWS_CONFIG: { feature: string; key: keyof import('../../data/visaComparison').VisaProfile }[] = [
  { feature: 'Subclass', key: 'subclass' },
  { feature: 'Permanence', key: 'permanence' },
  { feature: 'Nomination Required', key: 'nominationRequired' },
  { feature: 'Points Test', key: 'pointsTest' },
  { feature: 'Typical Applicant', key: 'typicalApplicant' },
  { feature: 'Processing Time', key: 'processingTime' },
  { feature: 'Pathway', key: 'pathwayFrom' },
  { feature: 'Notes', key: 'notes' },
]

const selectStyle: React.CSSProperties = {
  padding: '10px 32px 10px 12px',
  border: `1.5px solid ${BORDER}`,
  borderRadius: 8,
  fontSize: 15,
  color: NAVY,
  background: '#fff',
  cursor: 'pointer',
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 10px center',
  fontFamily: "'Gilroy', sans-serif",
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
}

export function VisaPathwayComparison() {
  const [visaA, setVisaA] = useState('189')
  const [visaB, setVisaB] = useState('482')
  const [compared, setCompared] = useState<{ a: string; b: string } | null>({ a: '189', b: '482' })

  const profileA = compared ? VISA_PROFILES.find(v => v.code === compared.a) ?? null : null
  const profileB = compared ? VISA_PROFILES.find(v => v.code === compared.b) ?? null : null

  const columns = profileA && profileB ? [
    { key: 'a', label: `${profileA.code} — ${profileA.name}`, highlight: false },
    { key: 'b', label: `${profileB.code} — ${profileB.name}`, highlight: false },
  ] : []

  const rows = profileA && profileB
    ? ROWS_CONFIG.map(r => ({
        feature: r.feature,
        a: profileA[r.key] as string,
        b: profileB[r.key] as string,
      }))
    : []

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 12, alignItems: 'flex-end', marginBottom: 24 }}>
        <div>
          <label style={{ fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 6, display: 'block', letterSpacing: '0.03em' }}>
            Visa A
          </label>
          <select value={visaA} onChange={e => setVisaA(e.target.value)} style={selectStyle} aria-label="Select Visa A">
            {VISA_PROFILES.map(v => (
              <option key={v.code} value={v.code}>{v.code} — {v.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={{ fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 6, display: 'block', letterSpacing: '0.03em' }}>
            Visa B
          </label>
          <select value={visaB} onChange={e => setVisaB(e.target.value)} style={selectStyle} aria-label="Select Visa B">
            {VISA_PROFILES.map(v => (
              <option key={v.code} value={v.code}>{v.code} — {v.name}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() => setCompared({ a: visaA, b: visaB })}
          style={{ padding: '10px 22px', background: NAVY, color: '#fff', border: 'none', borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif", whiteSpace: 'nowrap' as const }}
        >
          Compare
        </button>
      </div>

      {compared && profileA && profileB && visaA !== visaB && (
        <ComparisonTable
          columns={columns}
          rows={rows}
          caption="Indicative comparison only. Requirements are subject to change — verify with the Department of Home Affairs."
          accent={GOLD}
        />
      )}

      {compared && visaA === visaB && (
        <div style={{ padding: '16px 20px', background: 'rgba(245,161,36,0.08)', border: `1px solid rgba(245,161,36,0.3)`, borderRadius: 10 }}>
          <p style={{ margin: 0, fontSize: 14, color: '#0d1632' }}>Please select two different visa subclasses to compare.</p>
        </div>
      )}

      <p style={{ fontSize: 12, color: '#9ca3af', margin: '16px 0 0', lineHeight: 1.7 }}>
        Processing times are indicative only. The Department of Home Affairs publishes current processing times at immi.homeaffairs.gov.au.
        Eligibility criteria change regularly — verify all requirements before lodging any application.
      </p>
    </div>
  )
}
