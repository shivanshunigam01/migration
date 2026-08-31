import React, { useState } from 'react'
import { NAVY, GOLD } from '@/theme'

type EnglishLevel = 'Functional' | 'Vocational' | 'Competent' | 'Proficient' | 'Superior'

interface LevelSpec {
  level: EnglishLevel
  description: string
  color: string
  visaUses: string[]
}

const LEVELS: LevelSpec[] = [
  {
    level: 'Functional',
    description: 'Minimum level; limited visa eligibility.',
    color: '#fee2e2',
    visaUses: ['Some family visas'],
  },
  {
    level: 'Vocational',
    description: 'Satisfies basic skilled migration requirements.',
    color: '#fef3c7',
    visaUses: ['189', '190', '491 (lower scores may suffice)', '482 Core Skills (some occupations)'],
  },
  {
    level: 'Competent',
    description: 'Standard threshold for most employer-sponsored and skilled visas.',
    color: '#d1fae5',
    visaUses: ['186 ENS', '482 Skills in Demand', '189', '190', '491', '500 student visa (where required)'],
  },
  {
    level: 'Proficient',
    description: 'Required for points bonus and some regulated occupations.',
    color: '#dbeafe',
    visaUses: ['189/190/491 (bonus points)', 'Medical practitioners', 'Engineers (some assessment bodies)', 'Teachers'],
  },
  {
    level: 'Superior',
    description: 'Highest level; maximum points bonus.',
    color: '#ede9fe',
    visaUses: ['189/190/491 (maximum bonus points)', 'Some regulated health occupations'],
  },
]

interface TestThresholds {
  test: string
  metric: string
  thresholds: Record<EnglishLevel, number | string>
}

const TEST_DATA: TestThresholds[] = [
  {
    test: 'IELTS',
    metric: 'Average band (each component)',
    thresholds: {
      Functional: 4.5,
      Vocational: 5.0,
      Competent: 6.0,
      Proficient: 7.0,
      Superior: 8.0,
    },
  },
  {
    test: 'PTE Academic',
    metric: 'Score (each component)',
    thresholds: {
      Functional: 30,
      Vocational: 36,
      Competent: 50,
      Proficient: 65,
      Superior: 79,
    },
  },
  {
    test: 'TOEFL iBT',
    metric: 'Score (each component)',
    thresholds: {
      Functional: 'N/A',
      Vocational: 'N/A',
      Competent: 12,
      Proficient: 24,
      Superior: 28,
    },
  },
  {
    test: 'OET',
    metric: 'Grade (each component)',
    thresholds: {
      Functional: 'N/A',
      Vocational: 'N/A',
      Competent: 'B',
      Proficient: 'B+',
      Superior: 'A',
    },
  },
  {
    test: 'Cambridge C1 Advanced / C2',
    metric: 'Score (each component)',
    thresholds: {
      Functional: 'N/A',
      Vocational: 'N/A',
      Competent: 169,
      Proficient: 185,
      Superior: 200,
    },
  },
]

const LEVEL_ORDER: EnglishLevel[] = ['Functional', 'Vocational', 'Competent', 'Proficient', 'Superior']

const BORDER = '#e8edf6'
const GREY_BG = '#fafbfe'

function getOETGradeValue(grade: string): number {
  switch (grade) {
    case 'A': return 4
    case 'B+': return 3
    case 'B': return 2
    case 'C+': return 1
    default: return 0
  }
}

export interface EnglishScoreConverterProps {
  navigate?: (page: string) => void
}

export function EnglishScoreConverter({ navigate }: EnglishScoreConverterProps) {
  const [selectedTest, setSelectedTest] = useState('IELTS')
  const [score, setScore] = useState('')
  const [result, setResult] = useState<LevelSpec | null>(null)
  const [calculated, setCalculated] = useState(false)

  const testData = TEST_DATA.find(t => t.test === selectedTest)!
  const isOET = selectedTest === 'OET'

  function calculate() {
    if (!score.trim()) return
    setCalculated(true)

    let achievedLevel: LevelSpec | null = null

    if (isOET) {
      const inputGrade = score.trim().toUpperCase()
      const inputVal = getOETGradeValue(inputGrade)
      for (let i = LEVEL_ORDER.length - 1; i >= 0; i--) {
        const lvl = LEVEL_ORDER[i]
        const threshold = testData.thresholds[lvl]
        if (threshold === 'N/A') continue
        const threshVal = getOETGradeValue(threshold as string)
        if (inputVal >= threshVal) {
          achievedLevel = LEVELS.find(l => l.level === lvl) ?? null
          break
        }
      }
    } else {
      const numeric = parseFloat(score.trim())
      if (isNaN(numeric)) { setResult(null); return }
      for (let i = LEVEL_ORDER.length - 1; i >= 0; i--) {
        const lvl = LEVEL_ORDER[i]
        const threshold = testData.thresholds[lvl]
        if (threshold === 'N/A') continue
        if (numeric >= (threshold as number)) {
          achievedLevel = LEVELS.find(l => l.level === lvl) ?? null
          break
        }
      }
    }

    setResult(achievedLevel)
  }

  const selectStyle: React.CSSProperties = {
    width: '100%',
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
    boxSizing: 'border-box',
  }

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
        <div>
          <label style={{ fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 6, display: 'block', letterSpacing: '0.03em' }}>
            English test
          </label>
          <select
            value={selectedTest}
            onChange={e => { setSelectedTest(e.target.value); setScore(''); setResult(null); setCalculated(false) }}
            style={selectStyle}
            aria-label="Select English test"
          >
            {TEST_DATA.map(t => (
              <option key={t.test} value={t.test}>{t.test}</option>
            ))}
          </select>
          <p style={{ margin: '5px 0 0', fontSize: 12, color: '#9ca3af' }}>{testData.metric}</p>
        </div>

        <div>
          <label style={{ fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 6, display: 'block', letterSpacing: '0.03em' }}>
            {isOET ? 'Your grade (e.g. B, B+, A)' : 'Your score'}
          </label>
          <input
            type="text"
            value={score}
            onChange={e => { setScore(e.target.value); setCalculated(false); setResult(null) }}
            placeholder={isOET ? 'e.g. B+' : 'e.g. 7.0'}
            style={{ width: '100%', padding: '10px 14px', border: `1.5px solid ${BORDER}`, borderRadius: 8, fontSize: 15, color: NAVY, fontFamily: "'Gilroy', sans-serif", outline: 'none', boxSizing: 'border-box' }}
            aria-label="Enter your score or grade"
          />
        </div>
      </div>

      <button
        onClick={calculate}
        style={{ padding: '11px 28px', background: NAVY, color: '#fff', border: 'none', borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif", marginBottom: 24 }}
      >
        Convert score
      </button>

      {calculated && result && (
        <div style={{ border: `2px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden', marginBottom: 20 }}>
          <div style={{ background: result.color, padding: '20px 24px', borderBottom: `1px solid ${BORDER}` }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#374151', marginBottom: 6 }}>
              Indicative English level
            </div>
            <div style={{ fontSize: 29, fontWeight: 800, color: NAVY, marginBottom: 4 }}>{result.level}</div>
            <div style={{ fontSize: 15, color: '#374151' }}>{result.description}</div>
          </div>
          <div style={{ background: '#fff', padding: '16px 24px' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#9ca3af', marginBottom: 10 }}>
              Generally accepted for
            </div>
            <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column' as const, gap: 4 }}>
              {result.visaUses.map(use => (
                <li key={use} style={{ fontSize: 14, color: '#374151', lineHeight: 1.5 }}>{use}</li>
              ))}
            </ul>
            {navigate && (
              <button
                onClick={() => navigate('english-requirements')}
                style={{ marginTop: 16, padding: '9px 18px', background: 'transparent', border: `1.5px solid ${GOLD}`, color: GOLD, borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif" }}
              >
                English requirements guide →
              </button>
            )}
          </div>
        </div>
      )}

      {calculated && !result && (
        <div style={{ padding: '16px 20px', background: 'rgba(220,38,38,0.06)', border: '1px solid rgba(220,38,38,0.25)', borderRadius: 10, marginBottom: 20 }}>
          <p style={{ margin: 0, fontSize: 14, color: '#dc2626', lineHeight: 1.6 }}>
            {isOET
              ? "Enter a valid OET grade (A, B+, B, C+, C). Grades below Competent (B) generally do not meet visa requirements."
              : "The score entered does not meet the minimum threshold for the visas listed above, or is not a valid number. Please check your score and try again."}
          </p>
        </div>
      )}

      {/* Score reference table */}
      <div style={{ overflowX: 'auto', borderRadius: 12, border: `1.5px solid ${BORDER}`, marginBottom: 16 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ background: NAVY }}>
              <th style={{ padding: '10px 14px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>Level</th>
              {TEST_DATA.map(t => (
                <th key={t.test} style={{ padding: '10px 14px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>{t.test}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {LEVEL_ORDER.map((lvl, i) => {
              const spec = LEVELS.find(l => l.level === lvl)!
              return (
                <tr key={lvl} style={{ background: i % 2 === 0 ? GREY_BG : '#fff', borderBottom: `1px solid ${BORDER}` }}>
                  <td style={{ padding: '10px 14px', fontWeight: 700, color: NAVY }}>
                    <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 6, background: spec.color, fontSize: 12 }}>{lvl}</span>
                  </td>
                  {TEST_DATA.map(t => (
                    <td key={t.test} style={{ padding: '10px 14px', color: '#374151' }}>
                      {String(t.thresholds[lvl])}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.7, margin: 0 }}>
        Thresholds are general guidance only. The Department of Home Affairs publishes the authoritative benchmark requirements. Current as at July 2026.
      </p>
    </div>
  )
}
