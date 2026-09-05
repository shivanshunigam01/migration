import React, { useState, useMemo } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  AnswerBox,
  FaqAccordion,
  CtaBand,
  ComplianceDisclaimer,
  RelatedPages,
} from '@/components/page'
import type { FaqItem, RelatedPage } from '@/components/page'
import { GOLD as THEME_GOLD, NAVY as THEME_NAVY, NAVY_DARK as THEME_NAVY_DARK, CAT_STUDENT } from '@/theme'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'
import Icon from '@/components/ui/Icon'

const CURRENT_AS_AT = 'August 2026'

const GOLD = THEME_GOLD
const GOLD_LIGHT = '#f7b84b'
const NAVY = THEME_NAVY
const NAVY_DARK = THEME_NAVY_DARK
const HERO_GRAD = 'linear-gradient(160deg, #f5f8fd 0%, #edf2f9 30%, #e2ecf7 60%, #d8e6f4 100%)'

const RELATED_PAGES: RelatedPage[] = [
  { title: 'Temporary Graduate Visa (485)', desc: 'The key runway from study to skilled migration — what it grants and how to use it.', icon: 'clock', page: 'temporary-graduate-485' },
  { title: 'Skilled Independent (189)', desc: 'Points-tested permanent residence without a sponsor or nomination.', icon: 'star', page: 'skilled-independent-189' },
  { title: 'Skilled Nominated (190)', desc: 'State nomination adds 5 points and may lower the score needed for an invitation.', icon: 'flag', page: 'skilled-nominated-190' },
  { title: 'Skills Assessment Advice', desc: 'Which authority assesses your occupation and how to prepare.', icon: 'check', page: 'skills-assessment' },
]

const STUDENT_PR_FAQS: FaqItem[] = [
  { question: 'How do international students get PR in Australia?', answer: 'The common road runs: Student Visa (500) → Temporary Graduate (485) → points-tested skilled visa (189, 190 or 491) or employer sponsorship (482 then 186). The critical insight is that the decisions that actually move the needle — occupation selection, English investment, regional study — happen during the student visa stage, not after it.' },
  { question: 'Does course choice affect PR chances?', answer: "Yes — substantially. Your qualification maps to an ANZSCO occupation code, which determines your assessing authority, your occupation lists (MLTSSL, CSML, STSOL), and which visa subclasses are available. A degree in an occupation on the Medium and Long-term Strategic Skills List (MLTSSL) opens the 189 (independent PR). One that's only on the Short-term list closes that door. This is a decision made at enrolment — it's rarely reversible." },
  { question: 'What should I do on my 485 to prepare for PR?', answer: 'Four things: (1) Get your skills assessment done before the 485 expires — never wait until the end. (2) Build Australian skilled work experience in your occupation — every year adds points and satisfies work requirements for some employer-sponsored routes. (3) Sit or re-sit your English test aiming for Superior (IELTS 8+) — the jump from Proficient to Superior is worth +10 points. (4) Lodge your EOI early — tie-breaking favours earlier submissions at equal scores.' },
  { question: 'Is regional study worth it for PR?', answer: 'The points bonus for regional study (+5 pts for an Australian qualification from a regional institution) is modest on its own. The real value is access to the 491 visa (state/regional nomination) and the regional work concessions on the 485 itself. If the occupation has genuine shortages in regional areas, the pathway can be significantly faster than metro routes.' },
  { question: 'Can I get PR while on a student visa (before the 485)?', answer: "You can apply for certain PR visas while on a student visa — most commonly a partner visa or an employer-nominated visa (186) if an employer sponsors you directly. For points-tested visas, you generally need a skills assessment and an invitation, which takes time. Most students use the 485 as the runway, not the destination." },
  { question: 'What if my occupation is not on any skilled list?', answer: "Employer sponsorship (482 → 186) becomes the primary pathway — no occupation list restriction applies to the 482 Core Skills stream for high-salary earners. Alternatively, a second qualification in a listed occupation is a genuine option some students pursue. This is exactly where early advice matters — course selection at the start of study, not at the end of a 485." },
]


// ── Occupation / Course data ──────────────────────────────────
const OCCUPATION_PATHWAYS = [
  {
    field: 'Nursing & Midwifery',
    anzsco: '2544x',
    authority: 'ANMAC',
    onCSML: true, onMTSL: true,
    visaOptions: ['189', '190', '491', '482→186'],
    prSpeed: 'Fast',
    color: '#f5a124',
    note: 'Critical shortage — consistently invited at lower points scores. Strong regional concessions.',
    courses: ['Bachelor of Nursing', 'Master of Midwifery'],
  },
  {
    field: 'Software Engineering',
    anzsco: '261313',
    authority: 'ACS',
    onCSML: true, onMTSL: false,
    visaOptions: ['189', '190', '491', '482→186'],
    prSpeed: 'Moderate–Fast',
    color: '#2563eb',
    note: 'High competition in pool. Superior English (+20 pts) and Australian work exp are decisive.',
    courses: ['Bachelor of CS / IT', 'Master of IT / Data Science'],
  },
  {
    field: 'Civil / Structural Engineering',
    anzsco: '233211',
    authority: 'Engineers Australia',
    onCSML: true, onMTSL: false,
    visaOptions: ['189', '190', '491', '482→186'],
    prSpeed: 'Moderate',
    color: '#4f46e5',
    note: 'CDR assessment (EA). State nomination available in most states. Good employer sponsorship demand.',
    courses: ['BE Civil', 'ME Structural'],
  },
  {
    field: 'Accounting & Auditing',
    anzsco: '2211x',
    authority: 'CPA / ICAA / IPA',
    onCSML: false, onMTSL: true,
    visaOptions: ['190', '491', '482→186'],
    prSpeed: 'Slower',
    color: '#f5a124',
    note: 'Removed from MLTSSL — 189 not available. State nomination and employer sponsorship key pathways.',
    courses: ['Bachelor of Accounting', 'CPA program alongside degree'],
  },
  {
    field: 'Early Childhood Education',
    anzsco: '241111',
    authority: 'AITSL',
    onCSML: true, onMTSL: false,
    visaOptions: ['190', '491', '482→186'],
    prSpeed: 'Fast (regional)',
    color: '#0e7490',
    note: 'Shortage acute in regional areas. 491 + regional study bonus strong combination.',
    courses: ['Bachelor of Early Childhood Education'],
  },
  {
    field: 'Cook / Chef',
    anzsco: '351311',
    authority: 'TRA',
    onCSML: true, onMTSL: true,
    visaOptions: ['189', '190', '491', '482→186'],
    prSpeed: 'Moderate',
    color: '#dc2626',
    note: 'Trade assessment via TRA. Employer sponsorship (482) often the fastest route in practice.',
    courses: ['Certificate III / IV Commercial Cookery', 'TAFE pathways'],
  },
]

// ── 485 runway planner ────────────────────────────────────────
function monthsFromNow(months: number) {
  const d = new Date()
  d.setMonth(d.getMonth() + months)
  return d.toLocaleDateString('en-AU', { month: 'short', year: 'numeric' })
}


const DRIFT_RISKS = [
  { title: 'Choosing a course for prestige, not occupation mapping', detail: 'MBA, commerce or law degrees can map to occupations with limited or no skilled list presence. The PR pathway narrows significantly.', severity: 'high' },
  { title: 'Waiting until end of 485 to get skills assessed', detail: "Skills assessments take 4–16 weeks. If your 485 expires before you're assessed, you may lose the occupational category that gives you maximum points.", severity: 'high' },
  { title: 'Settling for Proficient English (IELTS 7)', detail: 'The gap between Proficient (+10) and Superior (+20) is 10 points — often the difference between waiting years in the pool versus being invited in the first rounds.', severity: 'medium' },
  { title: 'Not lodging an EOI immediately upon eligibility', detail: 'Tie-breaking at equal scores favours the earliest EOI submission. Every month of delay costs you position in the queue at that score.', severity: 'medium' },
  { title: 'Ignoring regional study bonuses at enrolment', detail: 'A regional campus qualification adds +5 points and opens 491 nomination. Many regional universities offer the same AQF-level degrees as metro institutions.', severity: 'low' },
]

export default function StudentToPRPage({ navigate }: { navigate: (page: string) => void }) {
  const [selectedOcc, setSelectedOcc] = useState<number | null>(null)
  const [degreeLevel, setDegreeLevel] = useState<'bachelor' | 'master' | 'phd'>('bachelor')
  const [regional, setRegional] = useState(false)
  const [superiorEnglish, setSuperiorEnglish] = useState(false)
  const [ausWork1yr, setAusWork1yr] = useState(false)
  const [ausWork3yr, setAusWork3yr] = useState(false)
  const [profYear, setProfYear] = useState(false)
  const [studyStart, setStudyStart] = useState('')
  const [graduationDate, setGraduationDate] = useState('')

  // Indicative points from study phase
  const eduPts = degreeLevel === 'phd' ? 20 : degreeLevel === 'master' ? 15 : 15
  const regionalPts = regional ? 5 : 0
  const engPts = superiorEnglish ? 20 : 10
  const ausWorkPts = ausWork3yr ? 10 : ausWork1yr ? 5 : 0
  const profYearPts = profYear ? 5 : 0
  const agePts = 30 // assume 25–32 as indicative base
  const totalIndicative = agePts + eduPts + regionalPts + engPts + ausWorkPts + profYearPts + 10 // +10 partner placeholder

  const scoreZone = totalIndicative >= 90 ? 'excellent' : totalIndicative >= 80 ? 'strong' : totalIndicative >= 65 ? 'eligible' : 'below'
  const scoreColor = scoreZone === 'excellent' ? '#f5a124' : scoreZone === 'strong' ? GOLD : scoreZone === 'eligible' ? '#2563eb' : '#dc2626'
  const scoreLabel = scoreZone === 'excellent' ? 'Highly Competitive' : scoreZone === 'strong' ? 'Competitive' : scoreZone === 'eligible' ? 'Eligible (in pool)' : 'Below Minimum'

  const gradDate = graduationDate ? new Date(graduationDate) : null
  const visa485Start = gradDate ? new Date(gradDate) : null
  const visa485End = visa485Start ? (() => { const d = new Date(visa485Start); d.setFullYear(d.getFullYear() + (degreeLevel === 'bachelor' ? 2 : degreeLevel === 'master' ? 3 : 4)); return d })() : null

  const timelineEvents = useMemo(() => {
    if (!gradDate) return []
    const events = [
      { label: 'Graduation / degree completion', offset: 0, note: 'Apply for 485 within 6 months' },
      { label: 'Skills assessment — aim to complete', offset: 4, note: 'Most authorities: 4–16 weeks' },
      { label: 'Re-sit English if needed (Superior target)', offset: 6, note: degreeLevel === 'phd' ? 'Exempt from English in some streams' : 'IELTS 8+ = +20 pts vs +10' },
      { label: 'Lodge EOI in SkillSelect', offset: 8, note: 'Tie-breaking starts from this date' },
      { label: '1 yr Australian work exp reached', offset: 13, note: '+5 points, some employer pathways open' },
      { label: '485 expiry — PR application must be lodged', offset: degreeLevel === 'phd' ? 48 : degreeLevel === 'master' ? 36 : 24, note: 'Hard deadline' },
    ]
    return events.map(ev => {
      const d = new Date(gradDate)
      d.setMonth(d.getMonth() + ev.offset)
      return { ...ev, date: d }
    })
  }, [gradDate, degreeLevel])

  const visaChainWidget = (
    <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 8px 48px rgba(27,43,94,0.12)', border: '1px solid #e8edf6', overflow: 'hidden' }}>
      <div style={{ background: NAVY, padding: '18px 24px' }}>
        <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>The Typical Roadmap</div>
        <div style={{ color: '#fff', fontSize: 17, fontWeight: 700 }}>Your visa chain at a glance</div>
      </div>
      <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 0 }}>
        {[
          { code: '500', label: 'Student Visa', duration: '4–8 years (course length)', color: '#2563eb', key: 'enrolment + OSHC + GTE → GSR' },
          { code: '485', label: 'Temporary Graduate', duration: '2–4 years (by degree level)', color: '#4f46e5', key: 'Skills assessment · English · EOI · work exp' },
          { code: '189 / 190 / 491', label: 'Skilled (Points) or 482 → 186', duration: 'Permanent or pathway to PR', color: GOLD, key: 'Invitation or employer nomination' },
        ].map((stage, i) => (
          <div key={i}>
            <div style={{ display: 'flex', gap: 14, padding: '14px 0', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${stage.color}18`, border: `2px solid ${stage.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: stage.color }}>{stage.code}</span>
                </div>
                {i < 2 && <div style={{ width: 2, height: 20, background: `${stage.color}30`, marginTop: 4 }} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 2 }}>{stage.label}</div>
                <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 4 }}>{stage.duration}</div>
                <div style={{ fontSize: 12, color: stage.color, fontWeight: 600, background: `${stage.color}10`, border: `1px solid ${stage.color}25`, padding: '3px 10px', borderRadius: 6, display: 'inline-block' }}>{stage.key}</div>
              </div>
            </div>
            {i < 2 && <div style={{ height: 1, background: '#f0f2f8', margin: '0 0 0 58px' }} />}
          </div>
        ))}
      </div>
      <div style={{ background: '#f8f9fc', padding: '14px 24px', borderTop: '1px solid #f0f2f8' }}>
        <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>
          <strong style={{ color: NAVY }}>Key insight:</strong> Each stage has decisions that affect the next. Poor choices at stage 1 can close doors at stage 3 entirely.
        </div>
      </div>
    </div>
  )
  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#ffffff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Student Visas', url: 'https://www.nanakmigration.com.au/student-visas' },
          { name: 'Student to PR Pathway', url: 'https://www.nanakmigration.com.au/student-to-pr-pathway' },
        ]}
        faqs={STUDENT_PR_FAQS}
        service={{ name: 'Student to PR Pathway Australia', description: PAGE_META['student-to-pr-pathway'].metaDescription, url: 'https://www.nanakmigration.com.au/student-to-pr-pathway' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Student Visas', page: 'student-visa' },
          { label: 'Student to PR Pathway' },
        ]}
      />
      <PageHero
        variant="flagship"
        eyebrow="Student Pathway"
        eyebrowSub="500 → 485 → PR"
        title={<>Student to PR:<br /><em style={{ fontStyle: 'italic', color: GOLD }}>The Whole Journey,</em><br />Mapped</>}
        deck="The decisions that move the needle are made during study, not after it. Course choice, English, regional study — here is the honest map."
        shortAnswer={<><strong style={{ color: NAVY }}>500 → 485 → 189 / 190 / 491 or 482 → 186.</strong> The occupation your qualification maps to decides your assessing authority, your occupation lists and your realistic pathways — a decision made at enrolment. English scores, regional study, and how the 485 runway is used set your position <em>before any PR application exists.</em></>}
        primaryCta={{ label: 'See the Pathway Map', href: '#pathway-map' }}
        secondaryCta={{ label: 'Course → PR Explorer →', href: '#course-explorer' }}
        accent={GOLD}
        currentAsAt={CURRENT_AS_AT}
        rightColumn={visaChainWidget}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox routeKey="student-to-pr-pathway">
            A common student to PR pathway is Temporary Graduate (subclass 485), then a skills assessment, then Skilled Independent (subclass 189) or Skilled Nominated (subclass 190) — or employer-sponsored visas where a business will nominate you, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* ── PATHWAY MAP VISUAL ── */}
      <div id="pathway-map" style={{ background: NAVY, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 10 }}>Decision Architecture</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 38, fontWeight: 700, color: '#fff', margin: '0 0 12px' }}>Every Fork in the Road</h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 17, maxWidth: 560, margin: '0 auto' }}>The decisions that shape your outcome — and when they're actually made.</p>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {[
              {
                stage: 'Before You Enrol',
                color: '#2563eb',
                icon: 'book',
                decisions: [
                  { label: 'Pick an occupation on MLTSSL', impact: 'Opens 189 (independent PR) — the widest door', positive: true },
                  { label: 'Choose a regional campus (if possible)', impact: '+5 points, 491 regional nomination access', positive: true },
                  { label: 'AQF level: bachelor vs master vs PhD', impact: 'Affects 485 length (2, 3 or 4 yrs) and edu points', positive: true },
                  { label: "Choose a course for prestige, not occupation", impact: 'May leave you with no occupation list options', positive: false },
                ],
              },
              {
                stage: 'During the 485',
                color: '#4f46e5',
                icon: 'zap',
                decisions: [
                  { label: 'Get skills assessed early (first 12 months)', impact: 'Removes the biggest 485 time-risk', positive: true },
                  { label: 'Re-sit English → Superior (IELTS 8+)', impact: '+10 points vs Proficient — often invitation-deciding', positive: true },
                  { label: 'Build Australian work experience in your occupation', impact: '1–2 yrs = +5 pts; 3–4 yrs = +10 pts', positive: true },
                  { label: 'Complete a Professional Year (where applicable)', impact: '+5 pts, preferred employer networks', positive: true },
                  { label: 'Lodge EOI early', impact: 'Tie-breaking favours earliest submission at same score', positive: true },
                  { label: 'Wait until 485 is expiring to act', impact: 'Common — and often catastrophic for options', positive: false },
                ],
              },
              {
                stage: 'PR Application Stage',
                color: GOLD,
                icon: 'flag',
                decisions: [
                  { label: '189 (Independent) — highest scores', impact: 'No sponsor, no nomination needed — pool-based', positive: true },
                  { label: '190 (State Nominated)', impact: '+5 pts, but must meet state-specific requirements', positive: true },
                  { label: '491 (Regional) — fastest option often', impact: 'Lower scores accepted; regional living required', positive: true },
                  { label: '482 → 186 (Employer Sponsored)', impact: 'Occupation-list-free at higher salary bands', positive: true },
                  { label: 'Apply to multiple streams simultaneously', impact: 'Not possible — understand timing before committing', positive: false },
                ],
              },
            ].map((col, ci) => (
              <div key={ci} style={{
                background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(255,255,255,0.1)`,
                borderRadius: ci === 0 ? '16px 0 0 16px' : ci === 2 ? '0 16px 16px 0' : '0',
                padding: '28px 24px', borderRight: ci < 2 ? '1px solid rgba(255,255,255,0.08)' : undefined,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${col.color}25`, border: `1px solid ${col.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={col.icon} size={16} color={col.color} />
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{col.stage}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {col.decisions.map((dec, di) => (
                    <div key={di} style={{
                      background: dec.positive ? 'rgba(255,255,255,0.04)' : 'rgba(220,38,38,0.08)',
                      border: `1px solid ${dec.positive ? 'rgba(255,255,255,0.08)' : 'rgba(220,38,38,0.2)'}`,
                      borderRadius: 10, padding: '10px 12px',
                    }}>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <div style={{ width: 18, height: 18, borderRadius: '50%', background: dec.positive ? `${col.color}30` : 'rgba(220,38,38,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                          <Icon name={dec.positive ? 'check' : 'x'} size={10} color={dec.positive ? col.color : '#dc2626'} />
                        </div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: dec.positive ? 'rgba(255,255,255,0.9)' : 'rgba(220,38,38,0.4)', lineHeight: 1.3, marginBottom: 3 }}>{dec.label}</div>
                          <div style={{ fontSize: 12, color: dec.positive ? 'rgba(255,255,255,0.45)' : 'rgba(220,38,38,0.4)', lineHeight: 1.4 }}>{dec.impact}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── COURSE → PR EXPLORER ── */}
      <div id="course-explorer" style={{ background: '#fafbfe', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 10 }}>Interactive Tool</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 38, fontWeight: 700, color: NAVY, margin: '0 0 12px' }}>Course → PR Explorer</h2>
            <p style={{ fontSize: 17, color: '#6b7280', maxWidth: 500, margin: '0 auto' }}>Select a field of study to see your occupation mapping, assessing authority, occupation list status and realistic PR routes.</p>
          </div>

          {/* Field selector */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 36 }}>
            {OCCUPATION_PATHWAYS.map((occ, i) => (
              <button key={i} onClick={() => setSelectedOcc(selectedOcc === i ? null : i)}
                style={{
                  padding: '10px 20px', borderRadius: 10,
                  border: `2px solid ${selectedOcc === i ? occ.color : '#e0e4ef'}`,
                  background: selectedOcc === i ? `${occ.color}12` : '#fff',
                  color: selectedOcc === i ? occ.color : '#374151',
                  fontSize: 15, fontWeight: selectedOcc === i ? 700 : 500,
                  cursor: 'pointer', transition: 'all 0.15s',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: occ.color, flexShrink: 0 }} />
                {occ.field}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          {selectedOcc !== null && (() => {
            const occ = OCCUPATION_PATHWAYS[selectedOcc]
            return (
              <div style={{ background: '#fff', border: `2px solid ${occ.color}30`, borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 40px rgba(27,43,94,0.1)', maxWidth: 900, margin: '0 auto' }}>
                <div style={{ background: `linear-gradient(135deg, ${occ.color}15 0%, ${occ.color}08 100%)`, padding: '24px 32px', borderBottom: '1px solid #f0f2f8' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: occ.color, marginBottom: 6 }}>ANZSCO {occ.anzsco}</div>
                      <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 29, fontWeight: 700, color: NAVY, margin: '0 0 4px' }}>{occ.field}</h3>
                      <div style={{ fontSize: 15, color: '#6b7280' }}>Assessed by: <strong style={{ color: NAVY }}>{occ.authority}</strong></div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-end' }}>
                      <span style={{ background: occ.prSpeed.includes('Fast') ? 'rgba(245,161,36,0.12)' : occ.prSpeed === 'Moderate' ? 'rgba(245,161,36,0.15)' : 'rgba(220,38,38,0.12)', color: occ.prSpeed.includes('Fast') ? '#f5a124' : occ.prSpeed === 'Moderate' ? '#f5a124' : '#dc2626', padding: '5px 14px', borderRadius: 20, fontSize: 13, fontWeight: 700 }}>PR Speed: {occ.prSpeed}</span>
                    </div>
                  </div>
                </div>

                <div className="grid-2" style={{ padding: '28px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 14 }}>Occupation List Status</div>
                    <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                      {[
                        { label: 'MLTSSL (189 eligible)', active: occ.onCSML },
                        { label: 'STSOL / Short-term', active: occ.onMTSL },
                      ].map(lst => (
                        <div key={lst.label} style={{ flex: 1, padding: '12px 14px', borderRadius: 10, border: `1.5px solid ${lst.active ? occ.color : '#e0e4ef'}`, background: lst.active ? `${occ.color}08` : '#f8f9fc', textAlign: 'center' }}>
                          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}><Icon name={lst.active ? 'check' : 'x'} size={11} color={lst.active ? occ.color : '#9ca3af'} /></div>
                          <div style={{ fontSize: 12, color: lst.active ? NAVY : '#9ca3af', fontWeight: 600, lineHeight: 1.3 }}>{lst.label}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 12 }}>PR Pathways Available</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {occ.visaOptions.map(v => (
                        <span key={v} style={{ padding: '5px 14px', borderRadius: 20, fontSize: 13, fontWeight: 700, background: `${occ.color}12`, color: occ.color, border: `1px solid ${occ.color}30` }}>{v}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 14 }}>Typical Courses</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
                      {occ.courses.map(c => (
                        <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#374151' }}>
                          <Icon name="book" size={14} color={occ.color} /> {c}
                        </div>
                      ))}
                    </div>
                    <div style={{ background: `${occ.color}08`, border: `1px solid ${occ.color}25`, borderRadius: 10, padding: '14px 16px' }}>
                      <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.65 }}>{occ.note}</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}

          {selectedOcc === null && (
            <div style={{ textAlign: 'center', padding: '32px', color: '#9ca3af', fontSize: 15 }}>← Select a field above to explore the PR pathway</div>
          )}
        </div>
      </div>

      {/* ── 485 RUNWAY PLANNER ── */}
      <div style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="grid-sidebar" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>Interactive Planner</div>
              <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 37, fontWeight: 700, color: NAVY, margin: '0 0 16px', lineHeight: 1.2 }}>Your 485 Runway Planner</h2>
              <p style={{ color: '#6b7280', fontSize: 16, lineHeight: 1.7, margin: '0 0 28px' }}>Enter your graduation date. We map the key milestones to hit before your 485 expires — so you arrive at PR well before the deadline.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#6b7280', display: 'block', marginBottom: 6 }}>Graduation / completion date</label>
                  <input type="date" value={graduationDate} onChange={e => setGraduationDate(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 8, fontSize: 14, border: '1.5px solid #e0e4ef', color: NAVY, outline: 'none', fontFamily: "'Gilroy', sans-serif", boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#6b7280', display: 'block', marginBottom: 8 }}>Degree level (determines 485 length)</label>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {[{ val: 'bachelor' as const, label: "Bachelor's (2 yrs)" }, { val: 'master' as const, label: "Master's (3 yrs)" }, { val: 'phd' as const, label: 'PhD (4 yrs)' }].map(opt => (
                      <button key={opt.val} onClick={() => setDegreeLevel(opt.val)}
                        style={{ flex: 1, padding: '9px 8px', borderRadius: 8, border: `1.5px solid ${degreeLevel === opt.val ? NAVY : '#e0e4ef'}`, background: degreeLevel === opt.val ? NAVY : '#fff', color: degreeLevel === opt.val ? '#fff' : '#374151', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {visa485End && (
                <div style={{ marginTop: 24, background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: '16px 20px' }}>
                  <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 4 }}>Your 485 visa will expire approximately</div>
                  <div style={{ fontSize: 21, fontWeight: 800, color: NAVY, fontFamily: "'Gilroy', sans-serif" }}>
                    {visa485End.toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}
                  </div>
                  <div style={{ fontSize: 13, color: GOLD, marginTop: 4, fontWeight: 600 }}>PR lodgement must occur before this date</div>
                </div>
              )}
            </div>

            <div>
              {timelineEvents.length > 0 ? (
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: 20, top: 20, bottom: 20, width: 2, background: 'linear-gradient(180deg, #2563eb 0%, #4f46e5 40%, rgba(245,161,36,0.4) 100%)' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {timelineEvents.map((ev, i) => {
                      const isPast = ev.date < new Date()
                      const isLast = i === timelineEvents.length - 1
                      return (
                        <div key={i} style={{ display: 'flex', gap: 20, paddingLeft: 0 }}>
                          <div style={{ flexShrink: 0, width: 42, display: 'flex', justifyContent: 'center', paddingTop: 14 }}>
                            <div style={{
                              width: 14, height: 14, borderRadius: '50%',
                              border: `2px solid ${isLast ? '#dc2626' : isPast ? '#d1d5db' : '#4f46e5'}`,
                              background: isPast ? '#d1d5db' : isLast ? '#dc2626' : '#fff',
                              zIndex: 1,
                            }} />
                          </div>
                          <div style={{ flex: 1, background: isLast ? 'rgba(220,38,38,0.08)' : isPast ? '#f8f9fc' : '#fff', border: `1px solid ${isLast ? 'rgba(220,38,38,0.35)' : '#e8edf6'}`, borderRadius: 12, padding: '14px 18px', marginBottom: 8 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                              <div style={{ fontSize: 14, fontWeight: 700, color: isLast ? '#dc2626' : isPast ? '#9ca3af' : NAVY, lineHeight: 1.3, marginBottom: 4 }}>{ev.label}</div>
                              <div style={{ fontSize: 13, fontWeight: 700, color: isLast ? '#dc2626' : '#6b7280', whiteSpace: 'nowrap', marginLeft: 12 }}>
                                {ev.date.toLocaleDateString('en-AU', { month: 'short', year: 'numeric' })}
                              </div>
                            </div>
                            <div style={{ fontSize: 13, color: isPast ? '#9ca3af' : '#6b7280' }}>{ev.note}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <div style={{ background: '#f8f9fc', border: '1px dashed #e0e4ef', borderRadius: 16, padding: '48px 32px', textAlign: 'center' }}>
                  <Icon name="calendar" size={32} color="#d1d5db" />
                  <div style={{ marginTop: 16, fontSize: 16, color: '#9ca3af' }}>Enter your graduation date to see your personalised 485 milestone map</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── POINTS FROM STUDY ── */}
      <div style={{ background: '#fafbfe', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 10 }}>Points Projection</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 38, fontWeight: 700, color: NAVY, margin: '0 0 12px' }}>What Study Can Build for You</h2>
            <p style={{ fontSize: 17, color: '#6b7280', maxWidth: 500, margin: '0 auto' }}>Toggle your study and work profile to see the indicative points total you can build through the student pathway.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 40, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Regional study (campus in designated regional area)', val: regional, set: setRegional, pts: 5, badge: '+5 pts' },
                { label: 'English: Superior — IELTS 8+ / PTE 79+ (vs Proficient)', val: superiorEnglish, set: setSuperiorEnglish, pts: 10, badge: '+10 pts vs Proficient' },
                { label: '1–2 years Australian skilled work experience', val: ausWork1yr, set: setAusWork1yr, pts: 5, badge: '+5 pts' },
                { label: '3–4 years Australian skilled work experience', val: ausWork3yr, set: setAusWork3yr, pts: 10, badge: '+10 pts' },
                { label: 'Professional Year completed (ICT, accounting, engineering)', val: profYear, set: setProfYear, pts: 5, badge: '+5 pts' },
              ].map((field, i) => (
                <div key={i} onClick={() => {
                  if (field.label.includes('1–2')) { field.set(!field.val); if (!field.val) setAusWork3yr(false) }
                  else if (field.label.includes('3–4')) { field.set(!field.val); if (!field.val) setAusWork1yr(false) }
                  else field.set(!field.val)
                }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px',
                    background: field.val ? `${GOLD}08` : '#fff',
                    border: `1.5px solid ${field.val ? GOLD : '#e0e4ef'}`,
                    borderRadius: 12, cursor: 'pointer', transition: 'all 0.15s',
                  }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, border: `2px solid ${field.val ? GOLD : '#d1d5db'}`, background: field.val ? GOLD : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.15s' }}>
                    {field.val && <Icon name="check" size={12} color={NAVY_DARK} />}
                  </div>
                  <span style={{ flex: 1, fontSize: 15, color: NAVY, fontWeight: 500 }}>{field.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: field.val ? GOLD : '#9ca3af', background: field.val ? `${GOLD}18` : '#f0f2f8', padding: '3px 12px', borderRadius: 20, whiteSpace: 'nowrap' }}>{field.badge}</span>
                </div>
              ))}

              <div style={{ padding: '14px 20px', background: 'rgba(27,43,94,0.04)', borderRadius: 12, fontSize: 14, color: '#6b7280', lineHeight: 1.6, marginTop: 4 }}>
                <strong style={{ color: NAVY }}>Base included:</strong> Age 25–32 (+30 pts), Bachelor/Master qual (+15 pts), single/no-pts partner (+10 pts), Proficient English (+10 pts). Toggle the above to add study-phase gains.
              </div>
            </div>

            {/* Score card */}
            <div style={{ position: 'sticky', top: 72 }}>
              <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 8px 40px rgba(27,43,94,0.12)', border: `2px solid ${scoreColor}30`, overflow: 'hidden' }}>
                <div style={{ background: `${scoreColor}12`, padding: '28px 24px', textAlign: 'center', borderBottom: '1px solid #f0f2f8' }}>
                  <div style={{ fontSize: 64, fontWeight: 800, color: scoreColor, lineHeight: 1, fontFamily: "'Gilroy', sans-serif" }}>{totalIndicative}</div>
                  <div style={{ fontSize: 14, color: '#6b7280', marginTop: 4 }}>indicative points</div>
                  <div style={{ display: 'inline-block', marginTop: 12, background: `${scoreColor}18`, color: scoreColor, border: `1px solid ${scoreColor}40`, fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20 }}>{scoreLabel}</div>
                </div>
                <div style={{ padding: '16px 24px' }}>
                  {[
                    { label: 'Age (25–32 base)', pts: agePts },
                    { label: 'Qualification', pts: eduPts },
                    { label: 'English', pts: engPts },
                    { label: 'Australian work', pts: ausWorkPts },
                    { label: 'Regional study', pts: regionalPts },
                    { label: 'Professional Year', pts: profYearPts },
                    { label: 'Partner (base)', pts: 10 },
                  ].map((row, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid #f5f5f9' }}>
                      <span style={{ fontSize: 13, color: '#6b7280' }}>{row.label}</span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: row.pts > 0 ? NAVY : '#d1d5db' }}>{row.pts > 0 ? `+${row.pts}` : '—'}</span>
                    </div>
                  ))}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0 0', marginTop: 4 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: NAVY }}>Total (indicative)</span>
                    <span style={{ fontSize: 19, fontWeight: 800, color: scoreColor }}>{totalIndicative}</span>
                  </div>
                </div>
                <div style={{ padding: '0 24px 20px' }}>
                  <a href="#contact" style={{ display: 'block', textAlign: 'center', backgroundColor: GOLD, color: NAVY_DARK, padding: '12px 20px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: '0 4px 16px rgba(245,161,36,0.35)' }}>
                    Get My Real Score Assessed
                  </a>
                  <div style={{ textAlign: 'center', fontSize: 12, color: '#9ca3af', marginTop: 8 }}>Navpreet Aulakh · MARN 2619467</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── DRIFT RISK CARDS ── */}
      <div style={{ background: NAVY, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 10 }}>Avoid These</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 38, fontWeight: 700, color: '#fff', margin: '0 0 12px' }}>Common Student-to-PR Drift Risks</h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 17, maxWidth: 520, margin: '0 auto' }}>The decisions students most often get wrong — and the cost of each.</p>
          </div>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {DRIFT_RISKS.map((risk, i) => {
              const sev = risk.severity === 'high' ? { bg: 'rgba(220,38,38,0.1)', border: 'rgba(220,38,38,0.25)', dot: '#dc2626', label: 'High risk' }
                : risk.severity === 'medium' ? { bg: 'rgba(245,161,36,0.08)', border: 'rgba(245,161,36,0.25)', dot: GOLD, label: 'Medium risk' }
                : { bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.1)', dot: '#0369a1', label: 'Low risk' }
              return (
                <div key={i} style={{ background: sev.bg, border: `1px solid ${sev.border}`, borderRadius: 16, padding: '22px 22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: `${sev.dot}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="alert" size={15} color={sev.dot} />
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: sev.dot, background: `${sev.dot}15`, border: `1px solid ${sev.dot}30`, padding: '2px 10px', borderRadius: 20 }}>{sev.label}</span>
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', lineHeight: 1.4, marginBottom: 8 }}>{risk.title}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{risk.detail}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div style={{ background: '#fafbfe', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 10 }}>Questions</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 38, fontWeight: 700, color: NAVY, margin: 0 }}>Student to PR — FAQ</h2>
          </div>
          <FaqAccordion items={STUDENT_PR_FAQS} accent={GOLD} />
        </div>
      </div>

      <section style={{ background: '#ffffff', padding: '64px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <RelatedPages pages={RELATED_PAGES} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title={<>The right course.<br /><span style={{ color: GOLD }}>The right moves on your 485.</span><br />The outcome you planned.</>}
        body="Navpreet Aulakh (MARN 2619467) maps your full student-to-PR sequence before you enrol — and walks alongside you at every stage of the journey."
        primaryCta={{ label: 'Book a Pathway Assessment', page: 'book-consultation' }}
        footnote="Free initial consultation · No obligation"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
