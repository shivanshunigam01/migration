import React, { useState, useEffect } from 'react'
import { NAVY } from '@/theme'
import Icon from '@/components/ui/Icon'

export interface ResidenceCalculatorProps {
  accent?: string
}

const BORDER  = '#e8edf6'
const GREY_BG = '#fafbfe'

function addYears(date: Date, years: number): Date {
  const d = new Date(date)
  d.setFullYear(d.getFullYear() + years)
  return d
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

function daysBetween(a: Date, b: Date): number {
  return Math.ceil((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
}

export function ResidenceCalculator({ accent = NAVY }: ResidenceCalculatorProps) {
  const [arrivalStr, setArrivalStr] = useState('')
  const [prStr, setPrStr] = useState('')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  let result: {
    eligibilityDate: Date
    fromArrival: Date
    fromPR: Date
    drivingFactor: 'arrival' | 'pr'
    daysRemaining: number
    eligible: boolean
  } | null = null

  let inputError: string | null = null

  if (arrivalStr && prStr) {
    const arrival = new Date(arrivalStr)
    const pr = new Date(prStr)
    if (pr < arrival) {
      inputError = 'The permanent residence date cannot be earlier than the first arrival date.'
    } else {
      const fromArrival = addYears(arrival, 4)
      const fromPR = addYears(pr, 1)
      const eligibilityDate = fromArrival > fromPR ? fromArrival : fromPR
      const drivingFactor: 'arrival' | 'pr' = fromArrival >= fromPR ? 'arrival' : 'pr'
      const eligible = eligibilityDate <= today
      const daysRemaining = daysBetween(today, eligibilityDate)
      result = { eligibilityDate, fromArrival, fromPR, drivingFactor, daysRemaining, eligible }
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 14px',
    border: `1.5px solid ${BORDER}`,
    borderRadius: 9,
    fontSize: 14,
    color: NAVY,
    background: '#fff',
    fontFamily: "'Gilroy', sans-serif",
    outline: 'none',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 700,
    color: '#374151',
    marginBottom: 6,
    display: 'block',
    letterSpacing: '0.03em',
  }

  return (
    <div>
      {/* Non-binding notice */}
      <div style={{ background: 'rgba(245,161,36,0.15)', border: '1.5px solid rgba(245,161,36,0.4)', borderRadius: 10, padding: '10px 14px', marginBottom: 24, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        <Icon name="alert" size={15} color="#0d1632" />
        <p style={{ margin: 0, fontSize: 12.5, color: '#0d1632', lineHeight: 1.6 }}>
          <strong>Indicative estimate only.</strong> This calculator applies a simplified general formula and does not account for absences, unlawful periods, discretionary factors, or legislative changes. Results are not an eligibility assessment or a decision by the Department of Home Affairs. Obtain advice from a registered migration agent (MARN 2619467) before lodging any application.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16, marginBottom: 20 }}>
        <div>
          <label htmlFor="arrival-date" style={labelStyle}>Date you first arrived in Australia lawfully</label>
          <input
            id="arrival-date"
            type="date"
            value={arrivalStr}
            onChange={e => setArrivalStr(e.target.value)}
            style={inputStyle}
            aria-label="First lawful arrival date in Australia"
          />
          <p style={{ margin: '5px 0 0', fontSize: 11, color: '#9ca3af', lineHeight: 1.5 }}>This is the start of your lawful residence period</p>
        </div>
        <div>
          <label htmlFor="pr-date" style={labelStyle}>Date permanent residence was granted</label>
          <input
            id="pr-date"
            type="date"
            value={prStr}
            onChange={e => setPrStr(e.target.value)}
            style={inputStyle}
            aria-label="Permanent residence grant date"
          />
          <p style={{ margin: '5px 0 0', fontSize: 11, color: '#9ca3af', lineHeight: 1.5 }}>The date the PR visa was granted — not the date you were invited</p>
        </div>
      </div>

      {inputError && (
        <div style={{ padding: '10px 14px', background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.35)', borderRadius: 9, marginBottom: 20 }}>
          <p style={{ margin: 0, fontSize: 13, color: '#dc2626' }}>{inputError}</p>
        </div>
      )}

      {result && !inputError && (
        <div style={{ border: `2px solid ${result.eligible ? 'rgba(245,161,36,0.3)' : accent}`, borderRadius: 16, overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ background: result.eligible ? 'rgba(245,161,36,0.08)' : `${accent}08`, padding: '20px 24px', borderBottom: `1px solid ${result.eligible ? 'rgba(245,161,36,0.3)' : BORDER}` }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: result.eligible ? '#0d1632' : accent, marginBottom: 6 }}>
              Indicative result — not an eligibility assessment
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' as const }}>
              <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 32, fontWeight: 800, color: result.eligible ? '#0d1632' : accent, lineHeight: 1 }}>
                {formatDate(result.eligibilityDate)}
              </div>
              {result.eligible ? (
                <div style={{ padding: '4px 12px', background: 'rgba(245,161,36,0.12)', border: '1px solid rgba(245,161,36,0.3)', borderRadius: 100, fontSize: 12, fontWeight: 700, color: '#0d1632' }}>
                  Indicative date has passed
                </div>
              ) : (
                <div style={{ padding: '4px 12px', background: `${accent}12`, border: `1px solid ${accent}30`, borderRadius: 100, fontSize: 12, fontWeight: 700, color: accent }}>
                  In {result.daysRemaining} days
                </div>
              )}
            </div>
            <p style={{ margin: '8px 0 0', fontSize: 12.5, color: '#6b7280', lineHeight: 1.6 }}>
              {result.eligible
                ? "The indicative 4-year and 12-month periods have generally passed based on the dates entered. This does not confirm eligibility — absences, unlawful periods, and other factors are not accounted for."
                : `Based on the dates entered, the indicative eligibility date has not yet passed. The ${result.drivingFactor === 'arrival' ? '4-year total residence' : '12-month PR'} requirement is the determining factor.`}
            </p>
          </div>

          {/* Breakdown */}
          <div style={{ padding: '16px 24px', background: '#fff', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
            <div style={{ padding: '12px 14px', background: GREY_BG, borderRadius: 10, border: `1px solid ${BORDER}` }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#9ca3af', marginBottom: 4 }}>4 years from first arrival</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: result.drivingFactor === 'arrival' ? accent : '#374151' }}>{formatDate(result.fromArrival)}</div>
              {result.drivingFactor === 'arrival' && <div style={{ fontSize: 11, color: accent, marginTop: 3, fontWeight: 600 }}>← determines eligibility date</div>}
            </div>
            <div style={{ padding: '12px 14px', background: GREY_BG, borderRadius: 10, border: `1px solid ${BORDER}` }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#9ca3af', marginBottom: 4 }}>12 months from PR grant</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: result.drivingFactor === 'pr' ? accent : '#374151' }}>{formatDate(result.fromPR)}</div>
              {result.drivingFactor === 'pr' && <div style={{ fontSize: 11, color: accent, marginTop: 3, fontWeight: 600 }}>← determines eligibility date</div>}
            </div>
          </div>

          {/* Absences note */}
          <div style={{ padding: '12px 24px', background: 'rgba(245,161,36,0.08)', borderTop: '1px solid rgba(245,161,36,0.12)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            <Icon name="alert" size={13} color="#0d1632" />
            <p style={{ margin: 0, fontSize: 12, color: '#0d1632', lineHeight: 1.65 }}>
              <strong>Absences are not included in this calculation.</strong> Generally, absences of more than 12 months in the 4 years — or more than 90 days in the 12 months before applying — may affect eligibility. Unlawful periods do not count towards residence. A registered migration agent can calculate your absences accurately.
            </p>
          </div>
        </div>
      )}

      {!arrivalStr && !prStr && (
        <div style={{ padding: '32px 24px', background: GREY_BG, border: `1.5px dashed ${BORDER}`, borderRadius: 14, textAlign: 'center' }}>
          <div style={{ fontSize: 13, color: '#9ca3af', lineHeight: 1.7 }}>Enter your arrival and permanent residence dates above to see an indicative calculation.</div>
        </div>
      )}
    </div>
  )
}
