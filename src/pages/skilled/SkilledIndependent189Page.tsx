import React, { useState, useMemo } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import { GOLD, NAVY, NAVY_DARK, CAT_SKILLED, GREY_BAND } from '@/theme'
import {
  Breadcrumbs,
  PageHero,
  SectionHeading,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  ComplianceDisclaimer,
  AnswerBox,
} from '@/components/page'
import type { RelatedPage, FaqItem } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'
import Icon from '@/components/ui/Icon'

const CURRENT_AS_AT = 'August 2026'

// ── Official DHA Points Table (2024–25) ─────────────────────
const POINTS_CATEGORIES = [
  {
    heading: 'Age',
    icon: 'age',
    items: [
      { label: '18–24', pts: 25 },
      { label: '25–32', pts: 30, highlight: true },
      { label: '33–39', pts: 25 },
      { label: '40–44', pts: 15 },
      { label: '45+', pts: 0, dim: true },
    ],
  },
  {
    heading: 'English',
    icon: 'english',
    items: [
      { label: 'Competent (IELTS 6)', pts: 0 },
      { label: 'Proficient (IELTS 7)', pts: 10 },
      { label: 'Superior (IELTS 8)', pts: 20, highlight: true },
    ],
  },
  {
    heading: 'Skilled Employment (overseas)',
    icon: 'work',
    items: [
      { label: '< 3 years', pts: 0 },
      { label: '3–4 years', pts: 5 },
      { label: '5–7 years', pts: 10 },
      { label: '8+ years', pts: 15, highlight: true },
    ],
  },
  {
    heading: 'Skilled Employment (in Australia)',
    icon: 'aus',
    items: [
      { label: '1–2 years', pts: 5 },
      { label: '3–4 years', pts: 10 },
      { label: '5–7 years', pts: 15 },
      { label: '8+ years', pts: 20, highlight: true },
    ],
  },
  {
    heading: 'Educational Qualifications',
    icon: 'edu',
    items: [
      { label: 'PhD — Australian / Recognised', pts: 20 },
      { label: 'Bachelor or higher — Australian', pts: 15 },
      { label: 'Diploma or trade — Australian', pts: 10 },
      { label: 'Recognised qualification', pts: 10 },
      { label: 'Study in regional Australia', pts: 5 },
    ],
  },
  {
    heading: 'Other Factors',
    icon: 'other',
    items: [
      { label: 'Community language (NAATI)', pts: 5 },
      { label: 'Professional year (Australia)', pts: 5 },
      { label: 'Partner skills assessment + English', pts: 10 },
      { label: 'Single / partner no points', pts: 10 },
      { label: 'State/territory nomination (190)', pts: 5 },
    ],
  },
]

// Recent invitation round data (approximate, indicative)
const RECENT_ROUNDS = [
  { month: 'Jul 2025', lowest: 85, invited: 1750 },
  { month: 'Jun 2025', lowest: 85, invited: 1820 },
  { month: 'May 2025', lowest: 80, invited: 1690 },
  { month: 'Apr 2025', lowest: 85, invited: 1580 },
  { month: 'Mar 2025', lowest: 80, invited: 1740 },
  { month: 'Feb 2025', lowest: 80, invited: 1610 },
  { month: 'Jan 2025', lowest: 85, invited: 1450 },
  { month: 'Dec 2024', lowest: 75, invited: 1820 },
]

const FAQ_ITEMS: FaqItem[] = [
  { question: 'How many points do I need for the 189 visa?', answer: 'The legislated minimum to enter the SkillSelect pool is 65 points. However, the 189 is rank-based — each invitation round invites the highest-scoring candidates from the pool, so the effective score sits well above 65 (typically 75–90+ depending on occupation). Reaching 65 gets you in the pool; reaching a competitive score gets you invited.' },
  { question: 'When do age points change?', answer: 'Age points drop on your birthday — the exact day. At 33 you drop from 30 to 25 points. At 40 you drop from 25 to 15. At 45 you become ineligible for the 189. Plan your EOI submission so your total remains competitive after the birthday drop.' },
  { question: 'What is a competitive 189 score in 2025?', answer: 'Across most occupations, 80–90 points has been the competitive range in recent rounds. Some in-demand occupations (nurses, engineers) have seen invitations at 70–75 points. High-competition ANZSCO codes regularly require 90+. Use our Points Expiry Planner to know your effective score through time.' },
  { question: 'How long is my skills assessment valid?', answer: 'Most assessing authorities issue assessments valid for 3 years from the date of assessment (not the date of application). Some bodies (e.g. Engineers Australia CDR) are valid indefinitely but require an updated Professional Membership or Provisional Membership date. Check your specific authority — this affects when you must submit your EOI.' },
  { question: 'Can I improve my score while in the pool?', answer: 'Yes. You can update your EOI at any time. Common upgrades: gaining an extra year of Australian work experience, re-sitting an English test to reach Superior, completing a Professional Year, or your partner completing a skills assessment. Each update resets your tie-breaking date (date of invitation), so weigh the score gain against the time cost.' },
  { question: 'What is the 189 tie-breaking rule?', answer: 'When candidates share the same points score, DHA invites those who submitted their EOI earliest — date-of-invite tie-breaking. This means that if you have 85 points and are unlikely to reach 90, submitting your EOI immediately is beneficial so your tie-breaking position improves with time.' },
]

const RELATED: RelatedPage[] = [
  { title: 'Points Test Explained', desc: 'Full breakdown of every points category and an indicative calculator.', icon: 'hash', page: 'points-test', color: CAT_SKILLED },
  { title: 'Skills Assessment', desc: 'Required for most 189 applicants — occupations, authorities, and process.', icon: 'check', page: 'skills-assessment', color: CAT_SKILLED },
  { title: 'Skilled Nominated (190)', desc: 'State nomination adds 5 points and opens an alternative PR pathway.', icon: 'mappin', page: 'skilled-nominated-190', color: CAT_SKILLED },
  { title: 'English Requirements', desc: 'Proficient or Superior English adds 10 or 20 points to your EOI score.', icon: 'globe', page: 'english-requirements', color: CAT_SKILLED },
]


// ── Points Builder ────────────────────────────────────────────
const BUILDER_FIELDS = [
  { id: 'age', label: 'Age at time of invitation', options: [{ label: '18–24', val: 25 }, { label: '25–32', val: 30 }, { label: '33–39', val: 25 }, { label: '40–44', val: 15 }, { label: '45+', val: 0 }] },
  { id: 'english', label: 'English proficiency', options: [{ label: 'Competent (IELTS 6)', val: 0 }, { label: 'Proficient (IELTS 7)', val: 10 }, { label: 'Superior (IELTS 8)', val: 20 }] },
  { id: 'overseasWork', label: 'Overseas skilled employment', options: [{ label: 'Less than 3 years', val: 0 }, { label: '3–4 years', val: 5 }, { label: '5–7 years', val: 10 }, { label: '8+ years', val: 15 }] },
  { id: 'ausWork', label: 'Australian skilled employment', options: [{ label: 'None', val: 0 }, { label: '1–2 years', val: 5 }, { label: '3–4 years', val: 10 }, { label: '5–7 years', val: 15 }, { label: '8+ years', val: 20 }] },
  { id: 'edu', label: 'Educational qualifications', options: [{ label: 'None or below diploma', val: 0 }, { label: 'Diploma / trade — Australian', val: 10 }, { label: 'Bachelor — Australian', val: 15 }, { label: 'PhD — Australian / recognised', val: 20 }] },
  { id: 'partner', label: 'Partner situation', options: [{ label: 'Single / partner not applying', val: 10 }, { label: 'Partner — no skills points', val: 0 }, { label: 'Partner — skills assessed + Proficient English', val: 10 }] },
  { id: 'naati', label: 'NAATI community language', options: [{ label: 'No', val: 0 }, { label: 'Yes (accredited)', val: 5 }] },
  { id: 'profYear', label: 'Professional Year in Australia', options: [{ label: 'No', val: 0 }, { label: 'Yes (completed)', val: 5 }] },
]

// ── Expiry planner ────────────────────────────────────────────
function addYears(date: Date, years: number) {
  const d = new Date(date)
  d.setFullYear(d.getFullYear() + years)
  return d
}
function formatDate(d: Date) {
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })
}
function monthsUntil(d: Date) {
  const now = new Date()
  const diff = (d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24 * 30.44)
  return Math.round(diff)
}

export default function SkilledIndependent189Page({ navigate }: { navigate: (page: string) => void }) {
  const [builderVals, setBuilderVals] = useState<Record<string, number>>({
    age: 30, english: 10, overseasWork: 0, ausWork: 0, edu: 15, partner: 10, naati: 0, profYear: 0,
  })

  // Expiry planner state
  const [dob, setDob] = useState('')
  const [engTestDate, setEngTestDate] = useState('')
  const [skillsAssessDate, setSkillsAssessDate] = useState('')
  const [profYearDate, setProfYearDate] = useState('')

  const totalPoints = Object.values(builderVals).reduce((a, b) => a + b, 0)
  const scoreZone = totalPoints >= 90 ? 'excellent' : totalPoints >= 80 ? 'strong' : totalPoints >= 65 ? 'eligible' : 'below'

  const expiryEvents = useMemo(() => {
    const events: { label: string; date: Date; type: 'drop' | 'expiry' | 'milestone'; urgency: 'red' | 'amber' | 'green' }[] = []
    if (dob) {
      const birth = new Date(dob)
      const age33 = new Date(birth); age33.setFullYear(birth.getFullYear() + 33)
      const age40 = new Date(birth); age40.setFullYear(birth.getFullYear() + 40)
      const age45 = new Date(birth); age45.setFullYear(birth.getFullYear() + 45)
      const now = new Date()
      if (age33 > now) events.push({ label: 'Age points drop: 30 → 25 pts (turning 33)', date: age33, type: 'drop', urgency: 'amber' })
      if (age40 > now) events.push({ label: 'Age points drop: 25 → 15 pts (turning 40)', date: age40, type: 'drop', urgency: 'red' })
      if (age45 > now) events.push({ label: '189 eligibility ends (turning 45)', date: age45, type: 'drop', urgency: 'red' })
    }
    if (engTestDate) {
      const expiry = addYears(new Date(engTestDate), 3)
      const mo = monthsUntil(expiry)
      events.push({ label: 'English test result expires (3 yr validity)', date: expiry, type: 'expiry', urgency: mo < 6 ? 'red' : mo < 12 ? 'amber' : 'green' })
    }
    if (skillsAssessDate) {
      const expiry = addYears(new Date(skillsAssessDate), 3)
      const mo = monthsUntil(expiry)
      events.push({ label: 'Skills assessment expires (3 yr validity)', date: expiry, type: 'expiry', urgency: mo < 6 ? 'red' : mo < 12 ? 'amber' : 'green' })
    }
    if (profYearDate) {
      events.push({ label: 'Professional Year completed — +5 pts now active', date: new Date(profYearDate), type: 'milestone', urgency: 'green' })
    }
    return events.sort((a, b) => a.date.getTime() - b.date.getTime())
  }, [dob, engTestDate, skillsAssessDate, profYearDate])

  const scoreColor = scoreZone === 'excellent' ? '#f5a124' : scoreZone === 'strong' ? GOLD : scoreZone === 'eligible' ? '#2563eb' : '#dc2626'
  const scoreLabel = scoreZone === 'excellent' ? 'Highly Competitive' : scoreZone === 'strong' ? 'Competitive' : scoreZone === 'eligible' ? 'In the Pool (65+)' : 'Below Minimum'

  const urgencyColor = (u: string) => u === 'red' ? '#dc2626' : u === 'amber' ? '#f5a124' : '#f5a124'
  const urgencyBg = (u: string) => u === 'red' ? 'rgba(220,38,38,0.08)' : u === 'amber' ? 'rgba(245,161,36,0.08)' : 'rgba(245,161,36,0.08)'

  React.useEffect(() => {
    document.title = PAGE_META['skilled-independent-189'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#ffffff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Skilled Migration', url: 'https://www.nanakmigration.com.au/skilled-migration' },
          { name: 'Skilled Independent (189)', url: 'https://www.nanakmigration.com.au/skilled-independent-189' },
        ]}
        faqs={FAQ_ITEMS}
        service={{ name: 'Skilled Independent Visa (Subclass 189)', description: PAGE_META['skilled-independent-189'].metaDescription, url: 'https://www.nanakmigration.com.au/skilled-independent-189' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Skilled', page: 'skilled-migration' },
        { label: 'Skilled Independent (189)' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Skilled Migration · Points-Tested"
        title={<>Skilled Independent Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 189</em></>}
        deck="A points-tested permanent residence visa for skilled workers — no employer or state sponsor required. The purest pathway to Australian PR through the points system."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Book a Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Calculate your points', page: 'points-test' }}
        accent={CAT_SKILLED}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            The Skilled Independent visa (subclass 189) is a permanent residence visa for skilled workers who are not sponsored by an employer, state or territory, or family member, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. It is a points-tested visa — you must submit an Expression of Interest (EOI) through SkillSelect and receive an invitation to apply before you can lodge a visa application. In most cases you need a minimum points score of 65, a relevant skills assessment, and occupation on the Medium and Long-term Strategic Skills List (MLTSSL).
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* ── KEY FACTS CARD ── */}
      <div style={{ background: '#fff', padding: '48px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 8px 48px rgba(27,43,94,0.12)', border: '1px solid #e8edf6', overflow: 'hidden' }}>
            <div style={{ background: NAVY, padding: '20px 24px' }}>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>At a Glance</div>
              <div style={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>Subclass 189 — Key Facts</div>
            </div>
            <div style={{ padding: '4px 0' }}>
              {[
                { label: 'Visa type', val: 'Permanent Residence', icon: 'shield' },
                { label: 'Minimum points', val: '65 (pool entry)', icon: 'hash' },
                { label: 'Effective cutoff (2025)', val: '75–90+ depending on occupation', icon: 'trending' },
                { label: 'Age limit', val: 'Under 45 at invitation', icon: 'calendar' },
                { label: 'Sponsor required', val: 'No — fully independent', icon: 'check' },
                { label: 'State nomination', val: 'Not for 189 (use 190/491)', icon: 'check' },
                { label: 'Work rights', val: 'Unlimited — anywhere in Australia', icon: 'check' },
                { label: 'Medicare', val: 'Immediate access', icon: 'check' },
                { label: 'Pathway to citizenship', val: 'Yes — 4 years PR residence', icon: 'star' },
                { label: 'Govt fee (2024–25)', val: 'AUD $4,640 (primary applicant)', icon: 'hash' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 24px', borderBottom: i < 9 ? '1px solid #f3f4f8' : 'none' }}>
                  <span style={{ width: 24, height: 24, borderRadius: 6, background: `${NAVY}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={row.icon} size={13} color={NAVY} />
                  </span>
                  <span style={{ fontSize: 13, color: '#6b7280', flex: '0 0 160px' }}>{row.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>{row.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── POINTS CALCULATOR ── */}
      <div id="calculator" style={{ background: GREY_BAND, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading kicker="Interactive Tool" title="Your Points Builder" intro="Select your situation in each category. Your total updates in real time." accent={GOLD} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 32, alignItems: 'start' }}>
            {/* Fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {BUILDER_FIELDS.map(field => (
                <div key={field.id} style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: '16px 20px', boxShadow: '0 1px 6px rgba(27,43,94,0.04)' }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#6b7280', letterSpacing: '0.03em', marginBottom: 10 }}>{field.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {field.options.map(opt => {
                      const isSelected = builderVals[field.id] === opt.val && field.options.indexOf(opt) === field.options.findIndex(o => o.val === builderVals[field.id])
                      return (
                        <button key={opt.label}
                          onClick={() => setBuilderVals(v => ({ ...v, [field.id]: opt.val }))}
                          style={{
                            padding: '7px 14px', borderRadius: 8, fontSize: 13, fontWeight: 500,
                            border: `1.5px solid ${isSelected ? NAVY : '#e0e4ef'}`,
                            background: isSelected ? NAVY : '#f8f9fc',
                            color: isSelected ? '#fff' : '#374151',
                            cursor: 'pointer', transition: 'all 0.15s',
                            display: 'flex', alignItems: 'center', gap: 7,
                          }}>
                          {opt.label}
                          <span style={{ fontSize: 11, fontWeight: 700, color: isSelected ? GOLD : '#9ca3af', background: isSelected ? 'rgba(245,161,36,0.2)' : '#eef0f6', padding: '1px 7px', borderRadius: 10 }}>{opt.val > 0 ? `+${opt.val}` : '0'}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Score card */}
            <div style={{ position: 'sticky', top: 72 }}>
              <div style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 40px rgba(27,43,94,0.12)', border: `2px solid ${scoreColor}30` }}>
                {/* Score display */}
                <div style={{ background: `linear-gradient(135deg, ${scoreColor}15 0%, ${scoreColor}08 100%)`, padding: '32px 28px', textAlign: 'center', borderBottom: '1px solid #f0f2f8' }}>
                  <div style={{ fontSize: 72, fontWeight: 800, color: scoreColor, lineHeight: 1, fontFamily: "'Gilroy', sans-serif" }}>{totalPoints}</div>
                  <div style={{ fontSize: 14, color: '#6b7280', marginTop: 6 }}>points</div>
                  <div style={{ display: 'inline-block', marginTop: 14, background: `${scoreColor}18`, color: scoreColor, border: `1px solid ${scoreColor}40`, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 20 }}>{scoreLabel}</div>
                </div>

                {/* Breakdown */}
                <div style={{ padding: '16px 24px' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 12 }}>Breakdown</div>
                  {BUILDER_FIELDS.map(f => {
                    const pts = builderVals[f.id] ?? 0
                    return (
                      <div key={f.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0', borderBottom: '1px solid #f5f5f9' }}>
                        <span style={{ fontSize: 12, color: '#6b7280', flex: 1 }}>{f.label.split(' ')[0]}</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: pts > 0 ? NAVY : '#d1d5db', minWidth: 36, textAlign: 'right' }}>{pts > 0 ? `+${pts}` : '—'}</span>
                      </div>
                    )
                  })}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0 0', marginTop: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: NAVY }}>Total</span>
                    <span style={{ fontSize: 18, fontWeight: 800, color: scoreColor }}>{totalPoints}</span>
                  </div>
                </div>

                {/* Benchmarks */}
                <div style={{ background: '#f8f9fc', padding: '16px 24px', borderTop: '1px solid #f0f2f8' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 10 }}>2025 Benchmarks</div>
                  {[
                    { label: 'Pool entry minimum', score: 65, color: '#2563eb' },
                    { label: 'Recent round avg.', score: 80, color: GOLD },
                    { label: 'High competition occ.', score: 90, color: '#dc2626' },
                  ].map(b => (
                    <div key={b.label} style={{ marginBottom: 8 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                        <span style={{ fontSize: 11, color: '#6b7280' }}>{b.label}</span>
                        <span style={{ fontSize: 11, fontWeight: 700, color: b.color }}>{b.score} pts</span>
                      </div>
                      <div style={{ height: 5, background: '#e8eaf2', borderRadius: 3, overflow: 'hidden' }}>
                        <div style={{ height: '100%', borderRadius: 3, background: b.color, width: `${Math.min((totalPoints / b.score) * 100, 100)}%`, transition: 'width 0.4s ease' }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ padding: '16px 24px' }}>
                  <a href="#contact" style={{ display: 'block', textAlign: 'center', backgroundColor: GOLD, color: NAVY_DARK, padding: '13px 20px', borderRadius: 10, textDecoration: 'none', fontSize: 14, fontWeight: 700, boxShadow: '0 4px 16px rgba(245,161,36,0.35)' }}>Book a Strategy Session</a>
                  <div style={{ textAlign: 'center', fontSize: 11, color: '#9ca3af', marginTop: 10 }}>Registered Agent · MARN 2619467</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── POINTS EXPIRY PLANNER ── */}
      <div id="expiry" style={{ background: NAVY, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <SectionHeading kicker="The Moat Feature" title="Points Expiry Planner" intro="Your 189 score is not static. Age points fall on your birthday. English tests expire. Skills assessments lapse. Enter your dates below — we map every event that changes your competitive position." accent={GOLD} light marginBottom={32} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {[
                  { label: 'No competitor computes "when your points change"', icon: 'zap' },
                  { label: 'Exact birthday-level precision for age drops', icon: 'calendar' },
                  { label: 'Expiry warnings with months remaining', icon: 'clock' },
                  { label: 'Plan your EOI submission before the cliff', icon: 'trending' },
                ].map((pt, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <span style={{ width: 32, height: 32, borderRadius: 8, background: `${GOLD}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name={pt.icon} size={15} color={GOLD} />
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>{pt.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 20, padding: 28, border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Enter your dates</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { label: 'Date of birth', val: dob, set: setDob, required: true },
                    { label: 'English test date', val: engTestDate, set: setEngTestDate, required: false },
                    { label: 'Skills assessment date', val: skillsAssessDate, set: setSkillsAssessDate, required: false },
                    { label: 'Professional Year completion', val: profYearDate, set: setProfYearDate, required: false },
                  ].map(field => (
                    <div key={field.label}>
                      <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', display: 'block', marginBottom: 6, fontWeight: 500 }}>
                        {field.label} {field.required && <span style={{ color: GOLD }}>*</span>}
                      </label>
                      <input type="date" value={field.val} onChange={e => field.set(e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: 8, fontSize: 13, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', outline: 'none', fontFamily: "'Gilroy', sans-serif", boxSizing: 'border-box' }} />
                    </div>
                  ))}
                </div>

                {/* Results */}
                {expiryEvents.length > 0 && (
                  <div style={{ marginTop: 24 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Your Points Timeline</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {expiryEvents.map((ev, i) => {
                        const mo = monthsUntil(ev.date)
                        const past = mo < 0
                        return (
                          <div key={i} style={{ background: past ? 'rgba(255,255,255,0.04)' : urgencyBg(ev.urgency) + 'dd', border: `1px solid ${past ? 'rgba(255,255,255,0.08)' : urgencyColor(ev.urgency) + '44'}`, borderRadius: 10, padding: '12px 14px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                            <span style={{ width: 8, height: 8, borderRadius: '50%', background: past ? '#6b7280' : urgencyColor(ev.urgency), flexShrink: 0, marginTop: 4 }} />
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 12, fontWeight: 600, color: past ? '#9ca3af' : NAVY, lineHeight: 1.3 }}>{ev.label}</div>
                              <div style={{ fontSize: 11, color: past ? '#9ca3af' : '#6b7280', marginTop: 3 }}>
                                {formatDate(ev.date)} {past ? '(passed)' : `· ${mo} months away`}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
                {expiryEvents.length === 0 && dob && (
                  <div style={{ marginTop: 20, textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Enter your dates above to see your timeline</div>
                )}
                {!dob && (
                  <div style={{ marginTop: 20, padding: '14px', background: 'rgba(245,161,36,0.08)', borderRadius: 10, border: '1px solid rgba(245,161,36,0.2)' }}>
                    <div style={{ fontSize: 12, color: GOLD, fontWeight: 600, marginBottom: 4 }}>Start with date of birth</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Age is the most volatile component of your 189 score — it drops exactly on your birthday.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FULL POINTS TABLE ── */}
      <div style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading kicker="DHA Official 2024–25" title="Complete Points Schedule" accent={GOLD} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {POINTS_CATEGORIES.map(cat => (
              <div key={cat.heading} style={{ background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 16, overflow: 'hidden' }}>
                <div style={{ background: NAVY, padding: '14px 20px' }}>
                  <div style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>{cat.heading}</div>
                </div>
                <div>
                  {cat.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 20px', borderBottom: i < cat.items.length - 1 ? '1px solid #f0f2f8' : 'none', background: item.highlight ? `${GOLD}0a` : 'transparent' }}>
                      <span style={{ fontSize: 13, color: (item as any).dim ? '#9ca3af' : '#374151' }}>{item.label}</span>
                      <span style={{ fontSize: 14, fontWeight: 800, color: item.highlight ? GOLD : (item as any).dim ? '#d1d5db' : NAVY, background: item.highlight ? `${GOLD}18` : 'transparent', padding: item.highlight ? '2px 10px' : '2px 10px', borderRadius: 20, minWidth: 48, textAlign: 'center' }}>
                        {item.pts > 0 ? `+${item.pts}` : '0'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RECENT INVITATION ROUNDS ── */}
      <div style={{ background: GREY_BAND, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>SkillSelect</div>
              <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 36, fontWeight: 700, color: NAVY, margin: '0 0 16px', lineHeight: 1.2 }}>Recent Invitation Rounds</h2>
              <p style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.7, margin: '0 0 24px' }}>
                DHA runs monthly invitation rounds. The lowest score invited each round gives you the real floor — not the 65-point legislative minimum. Rounds vary by occupation group.
              </p>
              <div style={{ background: `${GOLD}12`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: '16px 20px' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <Icon name="alert" size={15} color={GOLD} />
                  <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>
                    <strong>Tie-breaking rule:</strong> When candidates share the same score, DHA invites those whose EOI was submitted earliest. Submit as soon as you reach a competitive score.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(27,43,94,0.07)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: NAVY, padding: '12px 24px' }}>
                  {['Month', 'Lowest Score', 'Invitations Issued'].map(h => (
                    <div key={h} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{h}</div>
                  ))}
                </div>
                {RECENT_ROUNDS.map((row, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '13px 24px', borderBottom: i < RECENT_ROUNDS.length - 1 ? '1px solid #f0f2f8' : 'none', background: i === 0 ? `${GOLD}08` : 'transparent' }}>
                    <span style={{ fontSize: 13, fontWeight: i === 0 ? 700 : 400, color: NAVY }}>{row.month}{i === 0 && <span style={{ marginLeft: 6, fontSize: 10, background: GOLD, color: NAVY_DARK, padding: '1px 7px', borderRadius: 10, fontWeight: 700 }}>Latest</span>}</span>
                    <span style={{ fontSize: 14, fontWeight: 800, color: i === 0 ? GOLD : NAVY }}>{row.lowest} pts</span>
                    <span style={{ fontSize: 13, color: '#6b7280' }}>{row.invited.toLocaleString()}</span>
                  </div>
                ))}
                <div style={{ padding: '12px 24px', background: '#f8f9fc', borderTop: '1px solid #f0f2f8' }}>
                  <span style={{ fontSize: 11, color: '#9ca3af' }}>* Indicative figures. Actual scores vary by ANZSCO code. Source: DHA SkillSelect.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PROCESS STEPS ── */}
      <div style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading kicker="How It Works" title="The 189 Journey" accent={GOLD} />
          <div style={{ position: 'relative' }}>
            {/* Connector */}
            <div style={{ position: 'absolute', top: 32, left: 'calc(10% + 28px)', right: 'calc(10% + 28px)', height: 2, background: `linear-gradient(90deg, ${GOLD} 0%, ${NAVY}30 100%)`, zIndex: 0 }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20, position: 'relative', zIndex: 1 }}>
              {[
                { step: '01', title: 'Skills Assessment', body: 'Get your occupation assessed by the relevant authority (e.g. Engineers Australia, VETASSESS).', time: '4–16 weeks' },
                { step: '02', title: 'English Test', body: 'Sit IELTS, PTE, TOEFL or OET to meet at least Competent (IELTS 6) — aim for Superior for +20 pts.', time: '1–4 weeks' },
                { step: '03', title: 'Calculate & Plan', body: 'Use our Points Builder. Know your current score and your expiry timeline before submitting.', time: 'Your call' },
                { step: '04', title: 'Submit EOI', body: 'Lodge your Expression of Interest in SkillSelect. Positions you in the pool for monthly invitation rounds.', time: 'Instant' },
                { step: '05', title: 'Invitation → Apply', body: 'Receive an invitation from DHA. You have 60 days to lodge a full visa application with documents.', time: '12–36 months' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: i === 0 ? GOLD : '#fff', border: `2px solid ${i === 0 ? GOLD : '#e0e4ef'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, fontSize: 15, fontWeight: 800, color: i === 0 ? NAVY_DARK : NAVY, boxShadow: i === 0 ? '0 4px 16px rgba(245,161,36,0.4)' : '0 2px 8px rgba(27,43,94,0.08)', fontFamily: "'Gilroy', sans-serif" }}>{s.step}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{s.title}</div>
                  <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, marginBottom: 10 }}>{s.body}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: GOLD, background: `${GOLD}12`, border: `1px solid ${GOLD}30`, padding: '3px 10px', borderRadius: 20 }}>{s.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section style={{ background: GREY_BAND, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Common Questions" title="189 FAQ" accent={GOLD} />
          <FaqAccordion items={FAQ_ITEMS} accent={CAT_SKILLED} />
        </div>
      </section>

      {/* ── RELATED PAGES ── */}
      <section style={{ background: '#ffffff', padding: '56px 32px 64px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand
        title={<>Thinking about the <em style={{ fontStyle: 'italic', color: GOLD }}>189 visa?</em></>}
        body="Navpreet Aulakh (MARN 2619467) can assess your points score, identify whether your occupation is on the list, and advise on your realistic chances of receiving an invitation in the current round."
        primaryCta={{ label: 'Book a Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Points Test →', page: 'points-test' }}
        accent={CAT_SKILLED}
        footnote="MARA-registered · MARN 2619467 · General information only"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
