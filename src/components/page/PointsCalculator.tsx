import React, { useState, useMemo, useEffect } from 'react'
import { POINTS_CATEGORIES, POINTS_MINIMUM } from '@/data/pointsTest'
import type { PointsCategory } from '@/data/pointsTest'
import { NAVY, GOLD } from '@/theme'
import Icon from '@/components/ui/Icon'
import { useIntakeSubmit } from '@/lib/api'

const BORDER  = '#e8edf6'
const GREY_BG = '#fafbfe'

export interface PointsCalculatorProps {
  accent?: string
  navigate?: (page: string) => void
}

type Selections = Record<string, string>

function categoryPoints(cat: PointsCategory, value: string): number {
  return cat.options.find(o => o.value === value)?.points ?? 0
}

// Step definitions — category IDs grouped by step
const STEP_CATEGORY_IDS: string[][] = [
  // Step 1: About you
  ['age', 'english'],
  // Step 2: Experience & education
  ['employment_australia', 'employment_overseas', 'education', 'specialist_education', 'partner'],
  // Step 3: Other points
  ['australian_study', 'professional_year', 'community_language', 'regional_study', 'nomination'],
]

const STEP_LABELS = ['About you', 'Experience & education', 'Other points']

export function PointsCalculator({ accent = NAVY, navigate }: PointsCalculatorProps) {
  const defaultSelections: Selections = Object.fromEntries(
    POINTS_CATEGORIES.map(c => [c.id, 'none'])
  )
  const [sel, setSel] = useState<Selections>(defaultSelections)
  const [step, setStep] = useState(0) // 0-indexed
  const [isMobile, setIsMobile] = useState(false)
  const [showEmailGate, setShowEmailGate] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const { submit, loading, error, success, reset: resetIntake } = useIntakeSubmit('pr-points-calculator')

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const total = useMemo(
    () => POINTS_CATEGORIES.reduce((sum, cat) => sum + categoryPoints(cat, sel[cat.id] ?? 'none'), 0),
    [sel]
  )

  const breakdown = useMemo(
    () => POINTS_CATEGORIES.map(cat => ({
      cat,
      points: categoryPoints(cat, sel[cat.id] ?? 'none'),
    })).filter(r => r.points > 0),
    [sel]
  )

  const maxPossible = POINTS_CATEGORIES.reduce((s, c) => s + c.maxPoints, 0)

  const totalColor =
    total === 0 ? '#9ca3af'
    : total < POINTS_MINIMUM ? '#dc2626'
    : '#f5a124'

  function resetAll() {
    setSel(defaultSelections)
    setStep(0)
    setShowEmailGate(false)
    setEmail('')
    setName('')
    resetIntake()
  }

  async function emailScore(e: React.FormEvent) {
    e.preventDefault()
    const em = email.trim()
    if (!em || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) return
    const breakdownSummary = breakdown.map(r => `${r.cat.heading}: ${r.points}`).join(', ')
    await submit({
      company_website: hp,
      fields: { selections: sel, breakdown: breakdownSummary },
      result: { summary: `Points score: ${total} / 65 minimum`, code: String(total) },
      lead: {
        name: name.trim() || 'Points calculator user',
        email: em,
        goal: `Points calculator score: ${total}`,
        consent: { email: true },
      },
    }).catch(() => {})
  }

  const selectStyle: React.CSSProperties = {
    width: '100%',
    padding: '9px 32px 9px 12px',
    border: `1.5px solid ${BORDER}`,
    borderRadius: 8,
    fontSize: 14,
    color: NAVY,
    background: '#fff',
    cursor: 'pointer',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    fontFamily: "'Gilroy', sans-serif",
    outline: 'none',
    boxSizing: 'border-box',
  }

  // Get categories for current step
  const currentCategoryIds = STEP_CATEGORY_IDS[step]
  const currentCategories = currentCategoryIds
    .map(id => POINTS_CATEGORIES.find(c => c.id === id))
    .filter((c): c is PointsCategory => c !== undefined)

  const isLastStep = step === STEP_CATEGORY_IDS.length - 1

  function renderCategory(cat: PointsCategory) {
    const pts = categoryPoints(cat, sel[cat.id] ?? 'none')
    const isActive = pts > 0
    return (
      <div key={cat.id}
        style={{ background: isActive ? `${cat.color}06` : '#fff', border: `1.5px solid ${isActive ? cat.color + '30' : BORDER}`, borderRadius: 12, padding: '14px 16px', transition: 'border-color 0.2s, background 0.2s' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, gap: 8 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 26, height: 26, borderRadius: 7, background: `${cat.color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name={cat.icon as Parameters<typeof Icon>[0]['name']} size={13} color={cat.color} />
            </div>
            <label htmlFor={`pts-${cat.id}`} style={{ fontSize: 14, fontWeight: 600, color: NAVY, lineHeight: 1.3, cursor: 'pointer' }}>
              {cat.heading}
            </label>
          </div>
          {isActive && (
            <div style={{ fontSize: 14, fontWeight: 800, color: cat.color, flexShrink: 0, minWidth: 48, textAlign: 'right' }}>
              +{pts} pts
            </div>
          )}
          {!isActive && (
            <div style={{ fontSize: 12, color: '#9ca3af', flexShrink: 0 }}>max {cat.maxPoints} pts</div>
          )}
        </div>
        <select
          id={`pts-${cat.id}`}
          value={sel[cat.id] ?? 'none'}
          onChange={e => setSel(prev => ({ ...prev, [cat.id]: e.target.value }))}
          style={selectStyle}
          aria-label={cat.heading}
        >
          {cat.options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}{opt.points > 0 ? ` (+${opt.points} pts)` : ''}</option>
          ))}
        </select>
        {(() => {
          const selectedOpt = cat.options.find(o => o.value === (sel[cat.id] ?? 'none'))
          return selectedOpt?.note ? (
            <p style={{ margin: '7px 0 0', fontSize: 12.5, color: '#6b7280', lineHeight: 1.5 }}>ℹ️ {selectedOpt.note}</p>
          ) : null
        })()}
      </div>
    )
  }

  const resultCard = (
    <div className="points-result-card" style={{ position: isMobile ? 'static' : 'sticky', top: 80, width: isMobile ? '100%' : 300, marginTop: isMobile ? 24 : 0 }}>
      {/* Total score */}
      <div style={{ background: '#fff', border: `2px solid ${total >= POINTS_MINIMUM ? accent : BORDER}`, borderRadius: 16, padding: '24px 22px', marginBottom: 16, boxShadow: '0 4px 20px rgba(27,43,94,0.08)', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: GOLD, marginBottom: 8 }}>Your estimated score</div>
        <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 48, fontWeight: 700, color: NAVY, lineHeight: 1, marginBottom: 4 }}>
          {total}
        </div>
        <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 16 }}>/ 65 minimum</div>

        {/* Progress bar */}
        <div style={{ height: 8, background: GREY_BG, borderRadius: 100, overflow: 'hidden', marginBottom: 12 }}>
          <div style={{ height: '100%', width: `${Math.min(100, (total / 100) * 100)}%`, background: GOLD, borderRadius: 100, transition: 'width 0.3s' }} />
        </div>

        {/* Status */}
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: totalColor, flexShrink: 0 }} />
          <span style={{ fontSize: 13, color: totalColor, fontWeight: 600 }}>
            {total === 0 ? 'Select your details'
              : total < POINTS_MINIMUM ? `${POINTS_MINIMUM - total} points below minimum`
              : `${total - POINTS_MINIMUM} points above minimum`}
          </span>
        </div>

        {total >= POINTS_MINIMUM && (
          <div style={{ marginTop: 12, padding: '8px 12px', background: 'rgba(245,161,36,0.08)', border: '1px solid rgba(245,161,36,0.3)', borderRadius: 8 }}>
            <div style={{ fontSize: 12.5, color: '#0d1632', lineHeight: 1.5 }}>
              <strong>Above the 65-point minimum</strong> — but invitation cutoffs in competitive rounds are often significantly higher. This is not an eligibility decision.
            </div>
          </div>
        )}

        {total > 0 && total < POINTS_MINIMUM && (
          <div style={{ marginTop: 12, padding: '8px 12px', background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.35)', borderRadius: 8 }}>
            <div style={{ fontSize: 12.5, color: '#dc2626', lineHeight: 1.5 }}>
              Below the 65-point minimum threshold. An EOI cannot generally be submitted with fewer than 65 points.
            </div>
          </div>
        )}
      </div>

      {/* Breakdown */}
      {breakdown.length > 0 && (
        <div style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 14, padding: '18px 16px', marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#9ca3af', marginBottom: 12 }}>Points breakdown</div>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
            {breakdown.map(r => (
              <div key={r.cat.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center', minWidth: 0 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: r.cat.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: '#374151', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.cat.heading}</span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: r.cat.color, flexShrink: 0 }}>+{r.points}</span>
              </div>
            ))}
            <div style={{ borderTop: `1px solid ${BORDER}`, marginTop: 4, paddingTop: 8, display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: NAVY }}>Total</span>
              <span style={{ fontSize: 14, fontWeight: 800, color: totalColor }}>{total} pts</span>
            </div>
          </div>
        </div>
      )}

      <p style={{ fontSize: 12, color: '#9ca3af', margin: '0 0 12px', lineHeight: 1.6, textAlign: 'center' }}>
        Indicative estimate only. Not a migration assessment. Obtain advice from MARN 2619467.
      </p>

      {/* Email my score gate */}
      {total > 0 && !success && (
        <div style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 14, padding: '16px 14px', marginBottom: 12 }}>
          {!showEmailGate ? (
            <button
              type="button"
              onClick={() => setShowEmailGate(true)}
              style={{ width: '100%', minHeight: 40, background: GREY_BG, border: `1.5px solid ${BORDER}`, borderRadius: 8, fontSize: 14, fontWeight: 600, color: NAVY, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif" }}
            >
              Email my score →
            </button>
          ) : (
            <form onSubmit={emailScore}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#9ca3af', marginBottom: 10 }}>Email my score</div>
              <input type="text" placeholder="Name (optional)" value={name} onChange={e => setName(e.target.value)}
                style={{ width: '100%', padding: '8px 10px', border: `1.5px solid ${BORDER}`, borderRadius: 8, fontSize: 14, marginBottom: 8, boxSizing: 'border-box' as const }} />
              <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required
                style={{ width: '100%', padding: '8px 10px', border: `1.5px solid ${BORDER}`, borderRadius: 8, fontSize: 14, marginBottom: 8, boxSizing: 'border-box' as const }} />
              <input type="text" name="company_website" value={hp} onChange={e => setHp(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true"
                style={{ position: 'absolute', left: -9999, opacity: 0, height: 0, width: 0 }} />
              {error && <div style={{ fontSize: 12, color: '#dc2626', marginBottom: 8 }}>{error}</div>}
              <button type="submit" disabled={loading}
                style={{ width: '100%', minHeight: 40, background: loading ? '#9ca3af' : GOLD, border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 700, color: NAVY, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: "'Gilroy', sans-serif" }}>
                {loading ? 'Sending…' : 'Send score →'}
              </button>
            </form>
          )}
        </div>
      )}
      {success && (
        <div style={{ background: 'rgba(245,161,36,0.12)', border: '1px solid rgba(245,161,36,0.35)', borderRadius: 10, padding: '10px 12px', marginBottom: 12, fontSize: 13, color: NAVY, textAlign: 'center' }}>
          Score emailed — we'll be in touch.
        </div>
      )}

      {/* CTA — shown on last step or when score >= 65 */}
      {(isLastStep || total >= POINTS_MINIMUM) && (
        <button
          onClick={() => navigate ? navigate('book-consultation') : undefined}
          style={{ width: '100%', minHeight: 44, background: NAVY, color: GOLD, border: 'none', borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif", padding: '0 16px', lineHeight: 1.4 }}
        >
          Discuss your score with a registered migration agent
        </button>
      )}

      {/* out of maxPossible note */}
      <p style={{ fontSize: 11, color: '#c4c9d4', margin: '8px 0 0', textAlign: 'center' }}>
        Max possible: {maxPossible} points
      </p>
    </div>
  )

  return (
    <div id="points-calculator">
      {/* Non-binding notice */}
      <div style={{ background: 'rgba(245,161,36,0.15)', border: '1.5px solid rgba(245,161,36,0.4)', borderRadius: 10, padding: '10px 14px', marginBottom: 24, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        <Icon name="alert" size={15} color="#0d1632" />
        <p style={{ margin: 0, fontSize: 13.5, color: '#0d1632', lineHeight: 1.6 }}>
          <strong>Indicative estimate only.</strong> This calculator is a general guide and is not an eligibility assessment, an immigration assessment, or an invitation to apply. Results do not predict whether you will receive an invitation in any particular round. The points test and invitation cutoffs are set by the Department of Home Affairs and are subject to change. Obtain advice from a registered migration agent (MARN 2619467) before making any decision about a visa application.
        </p>
      </div>

      {/* Step progress indicator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
        {STEP_LABELS.map((label, i) => (
          <React.Fragment key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: i < step ? GOLD : i === step ? NAVY : '#e5e7eb',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 700, color: i <= step ? '#fff' : '#9ca3af',
                flexShrink: 0,
                cursor: i < step ? 'pointer' : 'default',
                transition: 'background 0.2s',
              }}
              onClick={() => { if (i < step) setStep(i) }}
              >
                {i < step ? <Icon name="check" size={12} color="#fff" /> : i + 1}
              </div>
              <span style={{ fontSize: 13, fontWeight: i === step ? 700 : 400, color: i === step ? NAVY : '#9ca3af', display: isMobile && i !== step ? 'none' : 'inline' }}>
                {label}
              </span>
            </div>
            {i < STEP_LABELS.length - 1 && (
              <div style={{ flex: 1, height: 2, background: i < step ? GOLD : '#e5e7eb', borderRadius: 2, transition: 'background 0.2s' }} />
            )}
          </React.Fragment>
        ))}
        <span style={{ fontSize: 13, color: '#9ca3af', marginLeft: 8, flexShrink: 0 }}>Step {step + 1} of 3</span>
      </div>

      {/* Main layout */}
      <div className="points-layout" style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 28, alignItems: 'flex-start' }}>
        {/* Left: step inputs + nav */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 14 }}>
            {currentCategories.map(cat => renderCategory(cat))}
          </div>

          {/* Navigation buttons */}
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            {step > 0 && (
              <button
                onClick={() => setStep(s => s - 1)}
                style={{ flex: 1, minHeight: 44, background: '#fff', border: `2px solid ${NAVY}`, borderRadius: 8, fontSize: 15, fontWeight: 700, color: NAVY, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif" }}
              >
                ← Back
              </button>
            )}
            {!isLastStep ? (
              <button
                onClick={() => setStep(s => s + 1)}
                style={{ flex: 1, minHeight: 44, background: GOLD, border: 'none', borderRadius: 8, fontSize: 15, fontWeight: 700, color: NAVY, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif" }}
              >
                Continue →
              </button>
            ) : (
              <button
                onClick={resetAll}
                style={{ flex: 1, minHeight: 44, background: GREY_BG, border: `1.5px solid ${BORDER}`, borderRadius: 8, fontSize: 15, fontWeight: 500, color: '#6b7280', cursor: 'pointer', fontFamily: "'Gilroy', sans-serif" }}
              >
                Reset all
              </button>
            )}
          </div>
        </div>

        {/* Right: result card (sticky on desktop, below on mobile) */}
        {!isMobile && resultCard}
      </div>

      {/* Mobile result card below */}
      {isMobile && resultCard}
    </div>
  )
}
