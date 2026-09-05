import React, { useState, useMemo } from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_SKILLED, CAT_REVIEWS, GREY_BAND } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
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
import type { RelatedPage } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'
import Icon from '@/components/ui/Icon'

const CURRENT_AS_AT = 'August 2026'

const PURPLE = CAT_SKILLED
const GREEN = GOLD
const RED = CAT_REVIEWS
const AMBER = GOLD


// ── Streams (renamed mid-2024) ───────────────────────────────
const STREAMS = [
  {
    code: 'PHEW',
    name: 'Post-Higher Education Work',
    oldName: 'Post-Study Work stream',
    color: PURPLE,
    duration: { bachelor: 2, honours: 2, masters: 3, phd: 4 },
    ageLimit: 35,
    requirements: [
      'Australian bachelor, bachelor honours, master by coursework, or doctoral degree',
      'Degree from an Australian institution in Australia (not offshore delivery)',
      'Competent English (IELTS 6 or equivalent)',
      'Genuine student throughout enrolment (GSR)',
      'Apply within 6 months of results release',
      'Under 35 at time of application (exemptions apply)',
    ],
    workRights: 'Unlimited — no restriction on hours or employer',
    studyRights: 'Yes — can enrol in further study',
    pathways: ['189 / 190 / 491 skilled visas', '482 → 186 employer sponsorship'],
    note: 'The most common stream. Duration varies by degree level — a bachelor gives 2 years, a PhD gives 4.',
  },
  {
    code: 'PVEW',
    name: 'Post-Vocational Education Work',
    oldName: 'Graduate Work stream',
    color: '#0e7490',
    duration: { cert3: 1, diploma: 1, advancedDiploma: 1.5 },
    ageLimit: 35,
    requirements: [
      'Australian Certificate III or above, or diploma or higher vocational qualification',
      'Qualification in an occupation on the relevant skilled occupation list',
      'Skills assessment from the relevant assessing authority',
      'Competent English (IELTS 6 or equivalent)',
      'Apply within 6 months of results release',
      'Under 35 at time of application',
    ],
    workRights: 'Unlimited',
    studyRights: 'Yes',
    pathways: ['189 / 190 / 491', '482 → 186', 'TAFE-to-trade pathways'],
    note: 'Requires a skills assessment — this takes time. Plan your assessment concurrently with your final study semester.',
  },
  {
    code: '2PHEW',
    name: 'Second Post-Higher Education Work',
    oldName: 'Second 485 (new stream mid-2024)',
    color: GREEN,
    duration: { standard: 2 },
    ageLimit: 50,
    requirements: [
      'Already held a Subclass 485 (PHEW stream) in the past',
      'Completed a further Australian bachelor or higher degree',
      'Degree in a field relating to a designated regional area need',
      'Must intend to live, work or study in a designated regional area',
      'Competent English',
      'Under 50 at time of application',
    ],
    workRights: 'Unlimited — but regional living intended',
    studyRights: 'Yes',
    pathways: ['491 regional nomination', '494 regional employer sponsorship', '191 permanent regional'],
    note: 'The regional second-chance stream. Higher age limit (50). Requires the further degree to relate to a regional need.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'When do I have to apply for the 485 visa?',
    a: 'You must apply within six months of your course results being officially released — not from your graduation ceremony date, which is often months later. Results release is typically the date your institution formally notifies you of your academic results, not the conferral date. Check your institution\'s records and academic transcript for the earliest documented results date.',
    featured: true,
  },
  {
    q: 'Does the six months start from graduation or results?',
    a: 'Results — not the graduation ceremony. This is one of the most common misunderstandings about the 485 deadline. Graduation ceremonies can happen 3–6 months after results are released. If you calculate your 6-month window from the ceremony, you may have already missed the real deadline. Use the calculator above: enter the date your institution released your results (usually visible in your student portal).',
    featured: true,
  },
  {
    q: 'What is the 485 age limit?',
    a: 'For the PHEW (Post-Higher Education Work) and PVEW (Post-Vocational Education Work) streams, you must be under 35 at the time you apply. For the Second PHEW stream, the limit is under 50. Exemptions exist for: doctoral (PhD) graduates from any institution; research masters graduates; and holders of Hong Kong BNO passports. The age test applies at lodgement — if you turn 35 the day before you apply, you are ineligible (subject to exemptions).',
    featured: false,
  },
  {
    q: 'Can I get a second 485 visa?',
    a: 'Yes — if you qualify for the Second Post-Higher Education Work (2PHEW) stream. You must have previously held a 485 PHEW visa, completed a further Australian bachelor or higher degree in a field relating to designated regional area needs, and intend to live in a regional area. The age limit is 50 (not 35). This is specifically designed to encourage graduates to regional Australia and build toward a 491 or 191.',
    featured: false,
  },
  {
    q: 'What English do I need for the 485?',
    a: 'Competent English — IELTS 6.0 overall with no band below 5.0, or equivalent in PTE Academic (50), TOEFL iBT (36), OET (B), or Cambridge (169). The 485 does not require Proficient or Superior English. However, if your PR strategy involves a points-tested visa, investing in Superior English (IELTS 8+) during the 485 runway is worth +10 extra points compared to Proficient.',
    featured: false,
  },
  {
    q: 'Does studying in a regional area help my 485 application?',
    a: 'Regional study does not affect the 485 itself — the grant conditions are the same. Where it helps is the Second PHEW stream (you need a regionally relevant further qualification) and the PR pathway: a degree from a regional campus adds +5 points to a skilled visa application, and regional study opens the 491 pathway with state/territory nomination. Plan the region at enrolment, not at the 485 stage.',
    featured: false,
  },
  {
    q: 'I am on a student visa. Will I have a bridging visa while my 485 is processed?',
    a: 'Yes — if you lodge your 485 application before your student visa expires and within the six-month results window, a Bridging Visa A activates and allows you to remain in Australia while DHA assesses the 485. The BVA generally carries the same work rights as the student visa (post-completion). Once the 485 is granted, you move to full 485 work rights.',
    featured: false,
  },
  {
    q: 'Can I work full-time on the 485?',
    a: 'Yes — the 485 grants unlimited work rights. There are no restrictions on hours, employer, industry or location (except the 2PHEW stream which intends regional living). This is a significant upgrade from student visa work-hour limits. Medicare access is also typically available from 485 grant day.',
    featured: false,
  },
]

const RUNWAY_ACTIONS = [
  {
    timing: 'Before 485 is granted',
    title: 'Get your skills assessed',
    detail: 'Most assessing authorities take 4–16 weeks. Starting after the 485 is granted costs you runway time.',
    priority: 'critical',
    icon: 'shield',
  },
  {
    timing: 'First 3 months on 485',
    title: 'Re-sit English if below Superior',
    detail: 'IELTS 8+ gives +20 pts (vs +10 for Proficient). One re-sit can decide how many rounds you wait in SkillSelect.',
    priority: 'high',
    icon: 'book',
  },
  {
    timing: 'First 6 months on 485',
    title: 'Lodge your EOI in SkillSelect',
    detail: 'Tie-breaking favours earliest submission at equal scores. Lodge as soon as your score is competitive.',
    priority: 'high',
    icon: 'trending',
  },
  {
    timing: 'Months 12–24',
    title: 'Build Australian work experience',
    detail: '1–2 yrs = +5 pts. 3–4 yrs = +10 pts. Work in your occupation from day one — every month counts.',
    priority: 'medium',
    icon: 'briefcase',
  },
  {
    timing: 'Ongoing',
    title: 'Consider a Professional Year',
    detail: '+5 pts and employer networks. Only available in ICT, accounting and engineering. Runs 12 months.',
    priority: 'medium',
    icon: 'star',
  },
  {
    timing: 'Before 485 expires',
    title: 'Have a lodged PR application',
    detail: "Don't ride the 485 to expiry without a submitted PR application or an employer sponsorship in place.",
    priority: 'critical',
    icon: 'zap',
  },
]

export default function TemporaryGraduate485Page({ navigate }: { navigate: (page: string) => void }) {
  const [selectedStream, setSelectedStream] = useState(0)
  const [dob, setDob] = useState('')
  const [resultsDate, setResultsDate] = useState('')
  const [degreeLevel, setDegreeLevel] = useState<'bachelor' | 'honours' | 'masters' | 'phd' | 'diploma'>('bachelor')
  const [stream2, setStream2] = useState(false)

  const calc = useMemo(() => {
    const now = new Date()

    // Age clock
    let ageDeadline: Date | null = null
    let ageLeftDays: number | null = null
    let currentAge: number | null = null
    if (dob) {
      const birth = new Date(dob)
      const ageLimit = stream2 ? 50 : 35
      ageDeadline = new Date(birth)
      ageDeadline.setFullYear(birth.getFullYear() + ageLimit)
      ageLeftDays = Math.floor((ageDeadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      const ageDiff = now.getTime() - birth.getTime()
      currentAge = Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365.25))
    }

    // Results clock
    let resultsDeadline: Date | null = null
    let resultsLeftDays: number | null = null
    if (resultsDate) {
      const rd = new Date(resultsDate)
      resultsDeadline = new Date(rd)
      resultsDeadline.setMonth(resultsDeadline.getMonth() + 6)
      resultsLeftDays = Math.floor((resultsDeadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    }

    // 485 duration
    const durationMap: Record<string, number> = { bachelor: 2, honours: 2, masters: 3, phd: 4, diploma: 1 }
    const visaDurationYears = durationMap[degreeLevel] ?? 2

    // True deadline = whichever is earlier (if both exist)
    let trueDeadline: Date | null = null
    let trueDeadlineType: string = ''
    if (ageDeadline && resultsDeadline) {
      if (ageDeadline < resultsDeadline) { trueDeadline = ageDeadline; trueDeadlineType = 'age' }
      else { trueDeadline = resultsDeadline; trueDeadlineType = 'results' }
    } else if (ageDeadline) { trueDeadline = ageDeadline; trueDeadlineType = 'age' }
    else if (resultsDeadline) { trueDeadline = resultsDeadline; trueDeadlineType = 'results' }

    const trueLeftDays = trueDeadline ? Math.floor((trueDeadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) : null

    // 485 end date
    let visa485End: Date | null = null
    if (resultsDate) {
      const rd = new Date(resultsDate)
      visa485End = new Date(rd)
      visa485End.setFullYear(visa485End.getFullYear() + visaDurationYears)
    }

    return { ageDeadline, ageLeftDays, currentAge, resultsDeadline, resultsLeftDays, trueDeadline, trueDeadlineType, trueLeftDays, visaDurationYears, visa485End }
  }, [dob, resultsDate, degreeLevel, stream2])

  const urgencyColor = (days: number | null) => {
    if (days === null) return '#9ca3af'
    if (days < 0) return '#6b7280'
    if (days <= 30) return RED
    if (days <= 60) return AMBER
    return GREEN
  }
  const urgencyLabel = (days: number | null, type?: string) => {
    if (days === null) return '—'
    if (days < 0) return type === 'age' ? 'Ineligible' : 'Expired'
    if (days === 0) return 'TODAY'
    return `${days} days`
  }

  const stream = STREAMS[selectedStream]
  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#ffffff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Skilled Migration', url: 'https://www.nanakmigration.com.au/skilled-migration' },
          { name: 'Temporary Graduate (485)', url: 'https://www.nanakmigration.com.au/temporary-graduate-485' },
        ]}
        faqs={FAQ_ITEMS.map((f: { q: string; a: string; featured?: boolean }) => ({ question: f.q, answer: f.a }))}
        service={{ name: 'Temporary Graduate Visa (Subclass 485)', description: PAGE_META['temporary-graduate-485'].metaDescription, url: 'https://www.nanakmigration.com.au/temporary-graduate-485' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs items={[
        { label: 'Home', page: 'home' },
        { label: 'Skilled' },
        { label: 'Temporary Graduate (485)' },
      ]} navigate={navigate} />

      {/* ── INFO BANNER ── */}
      <div style={{ background: PURPLE, padding: '9px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
        <Icon name="info" size={14} color="#fff" />
        <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>
          Streams renamed mid-2024 — PHEW, PVEW and 2PHEW replace the old Graduate Work / Post-Study Work names.
        </span>
        <a href="#streams" style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.35)', color: '#fff', borderRadius: 6, padding: '3px 12px', fontSize: 13, fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>See 2026 Streams →</a>
      </div>

      <PageHero
        variant="flagship"
        eyebrow="Skilled Migration · Post-Study Work"
        title={<>Temporary Graduate Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 485</em></>}
        deck="A post-study work visa for international graduates of Australian institutions, providing 2–4 years of work rights to gain Australian experience."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Book a Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Check your stream', page: 'temporary-graduate-485' }}
        accent={PURPLE}
        rightColumn={
          <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 8px 48px rgba(27,43,94,0.12)', border: '1px solid #e8edf6', overflow: 'hidden' }}>
            <div style={{ background: NAVY, padding: '18px 24px' }}>
              <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>At a Glance — 2026</div>
              <div style={{ color: '#fff', fontSize: 17, fontWeight: 700 }}>Subclass 485 Key Facts</div>
            </div>
            {[
              { label: 'Visa type', val: 'Temporary Graduate (work rights)', icon: 'briefcase', hi: false },
              { label: 'Streams (from mid-2024)', val: 'PHEW · PVEW · 2PHEW', icon: 'refresh', hi: false },
              { label: 'Application window', val: '6 months from results release', icon: 'calendar', hi: true },
              { label: 'Age limit (PHEW / PVEW)', val: 'Under 35 at time of application', icon: 'alert', hi: true },
              { label: 'Age limit (2PHEW)', val: 'Under 50', icon: 'info', hi: false },
              { label: 'Duration — Bachelor / Honours', val: '2 years', icon: 'clock', hi: false },
              { label: "Duration — Master's by coursework", val: '3 years', icon: 'clock', hi: false },
              { label: 'Duration — PhD / Doctoral', val: '4 years', icon: 'clock', hi: false },
              { label: 'Work rights', val: 'Unlimited — any employer, any hours', icon: 'zap', hi: false },
              { label: 'English requirement', val: 'Competent (IELTS 6 or equivalent)', icon: 'book', hi: false },
              { label: 'Medicare', val: 'Yes (from grant)', icon: 'shield', hi: false },
              { label: 'PhD age exemption', val: 'No age limit for PhD graduates', icon: 'star', hi: true },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 22px', borderBottom: i < 11 ? '1px solid #f3f4f8' : 'none', background: row.hi ? `${PURPLE}06` : 'transparent' }}>
                <span style={{ width: 26, height: 26, borderRadius: 6, background: row.hi ? `${PURPLE}15` : '#f0f2f8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={row.icon} size={13} color={row.hi ? PURPLE : '#6b7280'} />
                </span>
                <span style={{ fontSize: 13, color: '#6b7280', flex: '0 0 170px' }}>{row.label}</span>
                <span style={{ fontSize: 14, fontWeight: row.hi ? 700 : 600, color: row.hi ? PURPLE : NAVY }}>{row.val}</span>
              </div>
            ))}
          </div>
        }
        navigate={navigate}
      />

      {/* ── ANSWER BOX ── */}
      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox routeKey="temporary-graduate-485">
            The Temporary Graduate (subclass 485) visa lets eligible graduates who held a student visa (subclass 500) live and work in Australia after study, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Many graduates later seek a skills assessment and skilled migration options such as Skilled Independent (subclass 189), or follow a planned student to PR pathway.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* ── DOUBLE DEADLINE CALCULATOR ── */}
      <div id="deadline-calc" style={{ background: NAVY, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <SectionHeading kicker="The Format Edge" title="Your Double Deadline Calculator" accent={PURPLE} />
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 17, maxWidth: 520, margin: '0 auto' }}>Two clocks run at once. Your true deadline is whichever expires first. No competitor computes both simultaneously.</p>
          </div>

          <div className="grid-sidebar" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 40, alignItems: 'start' }}>
            {/* Inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: 6 }}>Date of birth <span style={{ color: 'rgba(79,70,229,0.5)' }}>*</span></label>
                <input type="date" value={dob} onChange={e => setDob(e.target.value)}
                  style={{ width: '100%', padding: '11px 14px', borderRadius: 8, fontSize: 14, background: 'rgba(255,255,255,0.08)', border: `1.5px solid ${dob ? 'rgba(79,70,229,0.5)' : 'rgba(255,255,255,0.15)'}`, color: '#fff', outline: 'none', fontFamily: "'Gilroy', sans-serif", boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: 6 }}>
                  Results release date <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>(not graduation ceremony)</span>
                </label>
                <input type="date" value={resultsDate} onChange={e => setResultsDate(e.target.value)}
                  style={{ width: '100%', padding: '11px 14px', borderRadius: 8, fontSize: 14, background: 'rgba(255,255,255,0.08)', border: `1.5px solid ${resultsDate ? 'rgba(79,70,229,0.5)' : 'rgba(255,255,255,0.15)'}`, color: '#fff', outline: 'none', fontFamily: "'Gilroy', sans-serif", boxSizing: 'border-box' }} />
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 5 }}>Check your student portal or academic transcript for the official results date</div>
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: 8 }}>Degree level (determines 485 duration)</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {[
                    { val: 'bachelor' as const, label: "Bachelor's", yrs: 2 },
                    { val: 'honours' as const, label: "Bachelor Honours", yrs: 2 },
                    { val: 'masters' as const, label: "Master's by coursework", yrs: 3 },
                    { val: 'phd' as const, label: 'PhD / Doctoral (no age limit)', yrs: 4 },
                    { val: 'diploma' as const, label: 'Diploma / Certificate III+', yrs: 1 },
                  ].map(opt => (
                    <button key={opt.val} onClick={() => setDegreeLevel(opt.val)}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 14px', borderRadius: 8, border: `1.5px solid ${degreeLevel === opt.val ? 'rgba(79,70,229,0.5)' : 'rgba(255,255,255,0.1)'}`, background: degreeLevel === opt.val ? 'rgba(79,70,229,0.2)' : 'rgba(255,255,255,0.04)', color: degreeLevel === opt.val ? 'rgba(79,70,229,0.3)' : 'rgba(255,255,255,0.65)', fontSize: 14, fontWeight: degreeLevel === opt.val ? 700 : 400, cursor: 'pointer', textAlign: 'left' }}>
                      <span>{opt.label}</span>
                      <span style={{ fontSize: 12, opacity: 0.7 }}>{opt.yrs} yr{opt.yrs !== 1 ? 's' : ''} 485</span>
                    </button>
                  ))}
                </div>
              </div>
              <div onClick={() => setStream2(!stream2)}
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px', background: stream2 ? 'rgba(245,161,36,0.1)' : 'rgba(255,255,255,0.04)', border: `1.5px solid ${stream2 ? 'rgba(245,161,36,0.4)' : 'rgba(255,255,255,0.1)'}`, borderRadius: 10, cursor: 'pointer' }}>
                <div style={{ width: 18, height: 18, borderRadius: 4, border: `2px solid ${stream2 ? GREEN : 'rgba(255,255,255,0.3)'}`, background: stream2 ? GREEN : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {stream2 && <Icon name="check" size={10} color="#fff" />}
                </div>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>I'm applying for the Second 485 (2PHEW) — age limit 50</span>
              </div>
            </div>

            {/* Results panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Two clock cards side by side */}
              <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {/* Results clock */}
                <div style={{ background: 'rgba(255,255,255,0.05)', border: `2px solid ${urgencyColor(calc.resultsLeftDays)}30`, borderRadius: 16, padding: '22px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: urgencyColor(calc.resultsLeftDays), marginBottom: 12 }}>Results Clock</div>
                  <div style={{ fontSize: 56, fontWeight: 900, color: urgencyColor(calc.resultsLeftDays), lineHeight: 1, fontFamily: "'Gilroy', sans-serif", marginBottom: 4 }}>
                    {calc.resultsLeftDays !== null ? (calc.resultsLeftDays < 0 ? <Icon name="xcirc" size={56} color={urgencyColor(calc.resultsLeftDays)} /> : calc.resultsLeftDays) : '—'}
                  </div>
                  <div style={{ fontSize: 14, color: urgencyColor(calc.resultsLeftDays), fontWeight: 700, marginBottom: 10 }}>
                    {urgencyLabel(calc.resultsLeftDays)}
                  </div>
                  {calc.resultsDeadline && (
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>
                      Deadline:<br />
                      <strong style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13 }}>
                        {calc.resultsDeadline.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </strong>
                    </div>
                  )}
                  {!resultsDate && <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>Enter results date above</div>}
                </div>

                {/* Age clock */}
                <div style={{ background: 'rgba(255,255,255,0.05)', border: `2px solid ${urgencyColor(calc.ageLeftDays)}30`, borderRadius: 16, padding: '22px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: urgencyColor(calc.ageLeftDays), marginBottom: 12 }}>Age Clock</div>
                  <div style={{ fontSize: 56, fontWeight: 900, color: urgencyColor(calc.ageLeftDays), lineHeight: 1, fontFamily: "'Gilroy', sans-serif", marginBottom: 4 }}>
                    {calc.ageLeftDays !== null ? (calc.ageLeftDays < 0 ? <Icon name="xcirc" size={56} color={urgencyColor(calc.ageLeftDays)} /> : calc.ageLeftDays) : '—'}
                  </div>
                  <div style={{ fontSize: 14, color: urgencyColor(calc.ageLeftDays), fontWeight: 700, marginBottom: 10 }}>
                    {urgencyLabel(calc.ageLeftDays, 'age')}
                  </div>
                  {calc.ageDeadline && (
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>
                      Age {stream2 ? '50' : '35'} on:<br />
                      <strong style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13 }}>
                        {calc.ageDeadline.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </strong>
                    </div>
                  )}
                  {!dob && <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>Enter date of birth above</div>}
                  {degreeLevel === 'phd' && (
                    <div style={{ marginTop: 8, background: `${GREEN}15`, border: `1px solid ${GREEN}30`, borderRadius: 8, padding: '5px 8px' }}>
                      <div style={{ fontSize: 11, color: 'rgba(245,161,36,0.4)', fontWeight: 700 }}>PhD — no age limit</div>
                    </div>
                  )}
                </div>
              </div>

              {/* True deadline */}
              {calc.trueDeadline && (
                <div style={{ background: `${urgencyColor(calc.trueLeftDays)}12`, border: `2px solid ${urgencyColor(calc.trueLeftDays)}35`, borderRadius: 16, padding: '20px 24px' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: urgencyColor(calc.trueLeftDays), marginBottom: 8 }}>
                    Your True Deadline — Limited by the {calc.trueDeadlineType === 'age' ? 'Age Clock' : 'Results Clock'}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: 25, fontWeight: 800, color: '#fff', fontFamily: "'Gilroy', sans-serif" }}>
                      {calc.trueDeadline.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 29, fontWeight: 800, color: urgencyColor(calc.trueLeftDays) }}>
                        {calc.trueLeftDays !== null && calc.trueLeftDays >= 0 ? calc.trueLeftDays : '0'}
                      </div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>days remaining</div>
                    </div>
                  </div>
                </div>
              )}

              {/* 485 end date */}
              {calc.visa485End && resultsDate && (
                <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 3 }}>Your 485 visa would expire approximately</div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: '#fff' }}>
                      {calc.visa485End.toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>Duration</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: 'rgba(79,70,229,0.3)' }}>{calc.visaDurationYears} years</div>
                  </div>
                </div>
              )}

              {!dob && !resultsDate && (
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: 16, padding: '40px 24px', textAlign: 'center' }}>
                  <Icon name="clock" size={36} color="rgba(255,255,255,0.15)" />
                  <div style={{ marginTop: 14, fontSize: 16, color: 'rgba(255,255,255,0.3)' }}>Enter your details on the left to see both deadlines</div>
                </div>
              )}

              <a href="#contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, backgroundColor: GOLD, color: NAVY_DARK, padding: '14px 24px', borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 800, boxShadow: `0 4px 20px rgba(245,161,36,0.4)` }}>
                Book a 485 Strategy Session — MARN 2619467
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── STREAMS ── */}
      <div id="streams" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <SectionHeading kicker="Updated mid-2024" title="The Three 485 Streams" accent={PURPLE} />
            <p style={{ color: '#6b7280', fontSize: 17, maxWidth: 520, margin: '0 auto' }}>The old stream names were replaced in mid-2024. Select your stream to see requirements and duration.</p>
          </div>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 32, flexWrap: 'wrap' }}>
            {STREAMS.map((s, i) => (
              <button key={i} onClick={() => setSelectedStream(i)}
                style={{ padding: '11px 20px', borderRadius: 10, border: `2px solid ${selectedStream === i ? s.color : '#e0e4ef'}`, background: selectedStream === i ? `${s.color}10` : '#fff', color: selectedStream === i ? s.color : '#374151', fontSize: 15, fontWeight: selectedStream === i ? 700 : 500, cursor: 'pointer', transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 13, background: selectedStream === i ? s.color : '#f0f2f8', color: selectedStream === i ? '#fff' : '#6b7280', padding: '2px 8px', borderRadius: 6, fontWeight: 700 }}>{s.code}</span>
                {s.name}
              </button>
            ))}
          </div>

          {/* Stream detail */}
          <div style={{ background: '#fafbfe', border: `2px solid ${stream.color}20`, borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 32px rgba(27,43,94,0.08)', maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ background: `linear-gradient(135deg, ${stream.color}15 0%, ${stream.color}06 100%)`, padding: '24px 32px', borderBottom: '1px solid #f0f2f8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
                <div>
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: stream.color }}>Previously: {stream.oldName}</span>
                  <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 27, fontWeight: 700, color: NAVY, margin: '4px 0' }}>{stream.name} ({stream.code})</h3>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <span style={{ background: `${stream.color}15`, color: stream.color, border: `1px solid ${stream.color}30`, padding: '5px 14px', borderRadius: 20, fontSize: 13, fontWeight: 700 }}>Age limit: {stream.ageLimit}</span>
                </div>
              </div>
              <p style={{ margin: '12px 0 0', fontSize: 15, color: '#4b5563', lineHeight: 1.65 }}>{stream.note}</p>
            </div>
            <div className="grid-2" style={{ padding: '28px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 14 }}>Requirements</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {stream.requirements.map((req, ri) => (
                    <div key={ri} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <div style={{ width: 20, height: 20, borderRadius: 5, background: `${stream.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <Icon name="check" size={10} color={stream.color} />
                      </div>
                      <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.5 }}>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 14 }}>Duration by Degree</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
                  {Object.entries(stream.duration).map(([key, yrs]) => (
                    <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 14px', background: '#fff', borderRadius: 8, border: '1px solid #f0f2f8' }}>
                      <span style={{ fontSize: 14, color: '#6b7280', textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span style={{ fontSize: 15, fontWeight: 700, color: stream.color }}>{yrs} yr{yrs !== 1 ? 's' : ''}</span>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 10 }}>PR Pathways</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {stream.pathways.map(p => (
                    <span key={p} style={{ background: `${stream.color}10`, color: stream.color, border: `1px solid ${stream.color}25`, fontSize: 13, fontWeight: 700, padding: '4px 12px', borderRadius: 20 }}>{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── AGE LIMIT ── */}
      <div style={{ background: '#fafbfe', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
            <div>
              <SectionHeading kicker="From mid-2024" title="The 485 Age Limit: 35, With Exemptions" accent={PURPLE} />

              <p style={{ color: '#6b7280', fontSize: 16, lineHeight: 1.7, margin: '0 0 24px' }}>
                The age limit of 35 was introduced in mid-2024 for the PHEW and PVEW streams. It is tested at the time of application — not at grant. If you turn 35 on the day before you lodge, you are ineligible (subject to exemptions below).
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { label: 'PHEW stream', limit: 35, note: 'Under 35 at application date' },
                  { label: 'PVEW stream', limit: 35, note: 'Under 35 at application date' },
                  { label: '2PHEW (Second 485)', limit: 50, note: 'Under 50 — higher limit for regional pathway' },
                  { label: 'PhD / doctoral graduates', limit: null, note: 'No age limit — applies regardless of age' },
                  { label: 'Hong Kong / BNO passport holders', limit: 45, note: 'Special arrangements — check DHA guidelines' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 18px', background: '#fff', border: '1px solid #e8edf6', borderRadius: 10 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 15, fontWeight: 600, color: NAVY }}>{row.label}</div>
                      <div style={{ fontSize: 13, color: '#6b7280', marginTop: 1 }}>{row.note}</div>
                    </div>
                    <span style={{
                      fontSize: 15, fontWeight: 800, padding: '5px 14px', borderRadius: 20,
                      background: row.limit === null ? 'rgba(245,161,36,0.12)' : row.limit === 35 ? `${PURPLE}12` : `${GREEN}12`,
                      color: row.limit === null ? GREEN : row.limit === 35 ? PURPLE : GREEN,
                      border: `1px solid ${row.limit === null ? GREEN + '30' : row.limit === 35 ? PURPLE + '30' : GREEN + '30'}`,
                      whiteSpace: 'nowrap',
                    }}>
                      {row.limit === null ? 'No limit' : `Under ${row.limit}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ background: NAVY, borderRadius: 20, padding: '28px 28px' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Icon name="alert" size={15} color={GOLD} /> Practitioner note — first-hand
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    {
                      title: 'The age test is at lodgement, not grant',
                      body: "There can be months between lodgement and grant. If you lodge the day before your 35th birthday, you have lodged in time — even if the 485 is granted after your birthday. The critical date is lodgement.",
                    },
                    {
                      title: 'The PhD exemption is categorical',
                      body: "Doctoral graduates have no age limit on the PHEW stream. If you completed a PhD in Australia, the age test does not apply — this is one of the more useful exemptions and is often misunderstood.",
                    },
                    {
                      title: 'Age and results: both must pass',
                      body: "Meeting the age limit is necessary but not sufficient. You must also be within 6 months of results release. Candidates sometimes focus on one clock and forget the other.",
                    },
                    {
                      title: 'Enrolment date vs results date confusion',
                      body: "Results release is the date your institution formally releases results — often 1–4 weeks before graduation. It appears on your academic transcript. The graduation ceremony date is not the relevant date.",
                    },
                  ].map((note, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '16px 18px' }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: GOLD, marginBottom: 6 }}>{note.title}</div>
                      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>{note.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── RUNWAY ACTIONS ── */}
      <div style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <SectionHeading kicker="Using the 485 Well" title="Your 485 Runway — What to Do When" accent={PURPLE} />
            <p style={{ color: '#6b7280', fontSize: 17, maxWidth: 520, margin: '0 auto' }}>The 485 is not a waiting room. It is your PR preparation window. Here is how to use every month of it.</p>
          </div>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {RUNWAY_ACTIONS.map((action, i) => {
              const priorityColor = action.priority === 'critical' ? RED : action.priority === 'high' ? AMBER : '#6b7280'
              const priorityBg = action.priority === 'critical' ? 'rgba(220,38,38,0.08)' : action.priority === 'high' ? 'rgba(245,161,36,0.08)' : '#fafbfe'
              return (
                <div key={i} style={{ background: priorityBg, border: `1.5px solid ${priorityColor}20`, borderRadius: 16, padding: '22px 22px', position: 'relative', overflow: 'hidden' }}>
                  {action.priority === 'critical' && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: RED }} />}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: `${priorityColor}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name={action.icon} size={16} color={priorityColor} />
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: priorityColor, background: `${priorityColor}12`, border: `1px solid ${priorityColor}25`, padding: '2px 10px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {action.priority}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: priorityColor, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>{action.timing}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 8, lineHeight: 1.3 }}>{action.title}</div>
                  <div style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}>{action.detail}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section style={{ background: GREY_BAND, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="485 Visa FAQ" accent={PURPLE} />
          <FaqAccordion items={FAQ_ITEMS.map(f => ({ question: f.q, answer: f.a }))} accent={PURPLE} />
        </div>
      </section>

      {/* ── RELATED PAGES ── */}
      <section style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also Useful" title="Related Pages" accent={PURPLE} />
          <RelatedPages pages={[
            { title: 'Student Visa (500)', desc: 'The subclass 500 you need before applying for the 485.', icon: 'file', page: 'student-visa-500', color: PURPLE },
            { title: 'Skilled Independent (189)', desc: 'Points-tested permanent residence — a common destination after 485 work experience.', icon: 'shield', page: 'skilled-independent-189', color: PURPLE },
            { title: 'Skills Assessment', desc: 'Needed for the Graduate Work stream and skilled migration pathways.', icon: 'check', page: 'skills-assessment', color: PURPLE },
            { title: 'Student to PR Pathways', desc: 'From subclass 500/485 to permanent residence — the common routes.', icon: 'trending', page: 'student-to-pr', color: PURPLE },
          ] as RelatedPage[]} navigate={navigate} />
        </div>
      </section>

      <CtaBand
        title={<>Planning your <em style={{ fontStyle: 'italic', color: GOLD }}>post-study work path?</em></>}
        body="Navpreet Aulakh (MARN 2619467) can advise on which 485 stream applies to your degree, confirm your application window, and manage your application end-to-end."
        primaryCta={{ label: 'Book a Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Student to PR Pathways →', page: 'student-to-pr' }}
        accent={PURPLE}
        footnote="MARA-registered · MARN 2619467 · General information only"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
