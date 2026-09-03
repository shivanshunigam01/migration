import React, { useState, useEffect } from 'react'
import { NAVY, GOLD } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { PageHero } from '@/components/page/PageHero'
import { AnswerBox } from '@/components/page/AnswerBox'
import { Callout } from '@/components/page/Callout'
import { CtaBand } from '@/components/page/CtaBand'
import { ComplianceDisclaimer } from '@/components/page/ComplianceDisclaimer'
import { PointsCalculator } from '@/components/page/PointsCalculator'
import { OccupationTable } from '@/components/page/OccupationTable'
import { ResidenceCalculator } from '@/components/page/ResidenceCalculator'
import { EnglishScoreConverter } from '@/components/tools/EnglishScoreConverter'
import { VisaPathwayComparison } from '@/components/tools/VisaPathwayComparison'
import { ALL_OCCUPATIONS } from '@/data/occupations'
import { NAV_ITEMS } from '@/data/navItems'
import { PAGE_META } from '@/data/pageMeta'

/* ── Types ─────────────────────────────────────────────── */
export interface ToolsPageProps {
  navigate: (page: string) => void
}

/* ── Tool card data ─────────────────────────────────────── */
interface ToolCard {
  id: string
  name: string
  benefit: string
  bullets: string[]
  icon: React.ReactNode
}

function HashIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M12 4L8 28M24 4L20 28M4 12H28M4 20H28" stroke={NAVY} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function MagnifyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="9" stroke={NAVY} strokeWidth="2"/>
      <path d="M21 21L28 28" stroke={NAVY} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="24" height="22" rx="3" stroke={NAVY} strokeWidth="2"/>
      <path d="M4 13H28" stroke={NAVY} strokeWidth="2"/>
      <path d="M10 4V8M22 4V8" stroke={NAVY} strokeWidth="2" strokeLinecap="round"/>
      <rect x="9" y="18" width="4" height="4" rx="1" fill={NAVY}/>
      <rect x="19" y="18" width="4" height="4" rx="1" fill={NAVY}/>
    </svg>
  )
}

function SpeechIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M4 6C4 4.9 4.9 4 6 4H26C27.1 4 28 4.9 28 6V20C28 21.1 27.1 22 26 22H18L12 28V22H6C4.9 22 4 21.1 4 20V6Z" stroke={NAVY} strokeWidth="2" strokeLinejoin="round"/>
      <path d="M10 12H22M10 16H18" stroke={NAVY} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function ColumnsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="11" height="24" rx="2" stroke={NAVY} strokeWidth="2"/>
      <rect x="18" y="4" width="11" height="24" rx="2" stroke={NAVY} strokeWidth="2"/>
    </svg>
  )
}

const TOOL_CARDS: ToolCard[] = [
  {
    id: 'points-calculator',
    name: 'Points Calculator',
    benefit: 'Estimate your skilled migration points score in minutes.',
    bullets: [
      'Covers age, English, work experience, education',
      'Shows your score against 189/190/491 invitation benchmarks',
      'Includes bonus points for regional study and partner skills',
    ],
    icon: <HashIcon />,
  },
  {
    id: 'occupation-search',
    name: 'Occupation Search',
    benefit: 'Find your occupation and its ANZSCO classification.',
    bullets: [
      'Search by occupation name or ANZSCO code',
      'Shows skills assessment authority',
      'Filters by visa stream and category',
    ],
    icon: <MagnifyIcon />,
  },
  {
    id: 'residence-calculator',
    name: 'Residence Calculator',
    benefit: 'Check if you meet the 4-year residence requirement for citizenship.',
    bullets: [
      'Enter your travel history to calculate lawful residence',
      'Flags the 12-month permanent residency condition',
      'Colour-coded pass/fail output',
    ],
    icon: <CalendarIcon />,
  },
  {
    id: 'english-score-converter',
    name: 'English Score Converter',
    benefit: 'See which English proficiency level your test score generally meets.',
    bullets: [
      'Supports IELTS, PTE, TOEFL iBT, OET and Cambridge C1 Advanced',
      'Maps scores to Competent, Proficient, Superior and Functional levels',
      'Shows which visa subclasses generally accept each level',
    ],
    icon: <SpeechIcon />,
  },
  {
    id: 'visa-pathway-comparison',
    name: 'Visa Pathway Comparison',
    benefit: 'Compare two visa subclasses side by side.',
    bullets: [
      'Choose any two of 189, 190, 491, 482, 186, 485',
      'Compares permanence, nomination, points test, typical applicant',
      'Instant side-by-side table',
    ],
    icon: <ColumnsIcon />,
  },
]

/* ── Accordion panel data ───────────────────────────────── */
interface AccordionPanel {
  id: string
  title: string
  content: React.ReactNode
}

/* ── ToolsPage ──────────────────────────────────────────── */
export default function ToolsPage({ navigate }: ToolsPageProps) {
  const [activePanel, setActivePanel] = useState<string | null>(null)

  const meta = PAGE_META['tools']
  useEffect(() => {
    document.title = meta.title
  }, [meta.title])

  function openPanel(id: string) {
    setActivePanel(id)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '')
    if (hash && TOOL_CARDS.some(c => c.id === hash)) {
      openPanel(hash)
    }
  }, [])

  const DISCLAIMER_TEXT = "These results are indicative only — not an assessment, not migration advice. Contact a registered migration agent (MARN 2619467) for advice tailored to your circumstances."

  const PANELS: AccordionPanel[] = [
    {
      id: 'points-calculator',
      title: 'Points Calculator',
      content: (
        <div style={{ marginTop: 8 }}>
          <PointsCalculator accent={NAVY} navigate={navigate} />
        </div>
      ),
    },
    {
      id: 'occupation-search',
      title: 'Occupation Search',
      content: (
        <>
          <Callout variant="warning">{DISCLAIMER_TEXT}</Callout>
          <div style={{ marginTop: 24 }}>
            <OccupationTable occupations={ALL_OCCUPATIONS} accent={NAVY} />
          </div>
        </>
      ),
    },
    {
      id: 'residence-calculator',
      title: 'Residence Calculator',
      content: (
        <>
          <Callout variant="warning">{DISCLAIMER_TEXT}</Callout>
          <div style={{ marginTop: 24 }}>
            <ResidenceCalculator accent={NAVY} />
          </div>
        </>
      ),
    },
    {
      id: 'english-score-converter',
      title: 'English Score Converter',
      content: (
        <>
          <Callout variant="warning">{DISCLAIMER_TEXT}</Callout>
          <div style={{ marginTop: 24 }}>
            <EnglishScoreConverter navigate={navigate} />
          </div>
        </>
      ),
    },
    {
      id: 'visa-pathway-comparison',
      title: 'Visa Pathway Comparison',
      content: (
        <>
          <Callout variant="warning">{DISCLAIMER_TEXT}</Callout>
          <div style={{ marginTop: 24 }}>
            <VisaPathwayComparison />
          </div>
        </>
      ),
    },
  ]

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#ffffff', color: '#1E1E2A' }}>
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <PageHero
        variant="standard"
        title="Migration Tools"
        deck="Free interactive tools to explore your options before you speak to an agent — indicative only, never an assessment."
        maraBadge
        accent={NAVY}
        navigate={navigate}
        eyebrow="Free Tools"
        eyebrowSub="Home / Tools"
      />

      {/* ── Body ───────────────────────────────────────────── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 24px' }}>

        {/* Answer box */}
        <div style={{ marginBottom: 48 }}>
          <AnswerBox>
            Nanak Migration Group (MARN 2619467) offers five free interactive migration tools to help individuals and employers explore Australian visa options before seeking registered migration advice.
            {' '}Each tool is indicative only and is not a migration assessment or immigration advice.
          </AnswerBox>
        </div>

        {/* ── Product card grid ─────────────────────────────── */}
        <div className="tools-card-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24, marginBottom: 56 }}
        >
          {TOOL_CARDS.map(card => (
            <div
              key={card.id}
              style={{
                background: '#fff',
                border: '1.5px solid #e8edf5',
                borderRadius: 12,
                borderTop: `3px solid ${NAVY}`,
                padding: 28,
                display: 'flex',
                flexDirection: 'column' as const,
                gap: 12,
              }}
            >
              {/* Icon */}
              <div>{card.icon}</div>

              {/* Name */}
              <div style={{ fontSize: 19, fontWeight: 700, color: NAVY }}>{card.name}</div>

              {/* Benefit */}
              <div style={{ fontSize: 15, color: '#6b7280', fontStyle: 'italic', lineHeight: 1.5 }}>{card.benefit}</div>

              {/* Bullets */}
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
                {card.bullets.map(b => (
                  <li key={b} style={{ fontSize: 14, color: NAVY, lineHeight: 1.5 }}>
                    <span style={{ color: GOLD, fontWeight: 700, marginRight: 6 }}>·</span>{b}
                  </li>
                ))}
              </ul>

              {/* Open tool button */}
              <button
                onClick={() => openPanel(card.id)}
                style={{
                  marginTop: 'auto',
                  alignSelf: 'flex-start',
                  background: 'transparent',
                  border: `1.5px solid ${GOLD}`,
                  color: GOLD,
                  borderRadius: 8,
                  padding: '10px 20px',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: "'Gilroy', sans-serif",
                  transition: 'background 0.15s, color 0.15s',
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = GOLD; el.style.color = '#0d1632' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = GOLD }}
              >
                Open tool
              </button>
            </div>
          ))}
        </div>

        {/* ── Accordion panels ─────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
          {PANELS.map(panel => {
            const isOpen = activePanel === panel.id
            return (
              <div key={panel.id} id={panel.id}>
                {/* Header */}
                <button
                  onClick={() => setActivePanel(isOpen ? null : panel.id)}
                  style={{
                    width: '100%',
                    background: NAVY,
                    color: '#fff',
                    padding: '16px 24px',
                    borderRadius: isOpen ? '12px 12px 0 0' : 12,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: 'none',
                    fontFamily: "'Gilroy', sans-serif",
                    fontSize: 17,
                    fontWeight: 700,
                    textAlign: 'left' as const,
                    transition: 'border-radius 0.2s',
                  }}
                >
                  <span>{panel.title}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none', flexShrink: 0 }}
                  >
                    <path d="M5 7.5l5 5 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Body */}
                {isOpen && (
                  <div style={{
                    background: '#fff',
                    border: '1.5px solid #e8edf5',
                    borderTop: 'none',
                    borderRadius: '0 0 12px 12px',
                    padding: '32px 24px',
                  }}>
                    {panel.content}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <CtaBand
        title="Ready to move from estimates to advice?"
        body="Our MARA-registered migration agents can review your profile and give you advice tailored to your circumstances — not just a calculator result."
        primaryCta={{ label: 'Book Free Consultation', href: '#contact' }}
        secondaryCta={{ label: 'Learn about our fees', page: 'resources' }}
        navigate={navigate}
      />

      <ComplianceDisclaimer
        pageNote="Results from the interactive tools on this page are indicative estimates only and do not constitute migration advice or an eligibility assessment."
      />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
