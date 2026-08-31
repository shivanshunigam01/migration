import React, { useState } from 'react'
import { GOLD, GOLD_LIGHT, NAVY, NAVY_DARK, NAVY_MID, NAVY_GRAD, HERO_GRAD, CAT_STUDENT, CAT_SKILLED, CAT_EMPLOYER } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import Icon from '@/components/ui/Icon'
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
import type { FaqItem, RelatedPage } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const CURRENT_AS_AT = 'August 2026'

const GREEN = GOLD
const BLUE = CAT_STUDENT
const PURPLE = CAT_SKILLED
const TEAL = CAT_EMPLOYER

const DISCLAIMER = 'Figures current as at 1 July 2026 — verify with Home Affairs'

const SKILLED_RELATED: RelatedPage[] = [
  { title: 'Skilled Independent (189)', desc: 'Points-tested permanent residence — no sponsor required.', icon: 'shield', page: 'skilled-independent-189' },
  { title: 'Skilled Nominated (190)', desc: 'State or territory nominated permanent skilled visa.', icon: 'flag', page: 'skilled-nominated-190' },
  { title: 'Skilled Work Regional (491)', desc: 'Live and work regionally with a pathway to PR.', icon: 'mappin', page: 'skilled-work-regional-491' },
  { title: 'Points Test Explained', desc: 'How the points test works and what scores are needed.', icon: 'hash', page: 'points-test' },
]

/* ── Visa cards data ─────────────────────────────────────── */
const VISAS = [
  {
    code: '189',
    name: 'Skilled Independent',
    type: 'Permanent',
    typeColor: GREEN,
    pts: '+0 bonus',
    ptsColor: '#6b7280',
    oneLine: 'Points-tested permanent residency — no employer or state sponsor required.',
    sponsor: false,
    stateNom: false,
    regional: false,
    prTiming: 'Immediate',
    route: 'skilled-independent-189',
  },
  {
    code: '190',
    name: 'Skilled Nominated',
    type: 'Permanent',
    typeColor: GREEN,
    pts: '+5 pts',
    ptsColor: BLUE,
    oneLine: 'State or territory nominates you, adding 5 points and opening a direct pathway to PR.',
    sponsor: false,
    stateNom: true,
    regional: false,
    prTiming: 'Immediate',
    route: null,
  },
  {
    code: '491',
    name: 'Skilled Work Regional',
    type: 'Provisional — 5 yr',
    typeColor: BLUE,
    pts: '+15 pts',
    ptsColor: PURPLE,
    oneLine: 'Largest points bonus. Live and work in a designated regional area — pathway to 191 PR.',
    sponsor: false,
    stateNom: true,
    regional: true,
    prTiming: 'After 3 yrs on 491',
    route: null,
  },
  {
    code: '191',
    name: 'Permanent Residence (Skilled Regional)',
    type: 'Permanent',
    typeColor: GREEN,
    pts: '—',
    ptsColor: '#9ca3af',
    oneLine: 'Permanent residence after 3 years on a 491 or 494 visa with an income threshold met.',
    sponsor: false,
    stateNom: false,
    regional: true,
    prTiming: 'After 3 yrs on 491/494',
    route: null,
  },
  {
    code: '485',
    name: 'Temporary Graduate',
    type: 'Temporary — 2–6 yr',
    typeColor: TEAL,
    pts: '—',
    ptsColor: '#9ca3af',
    oneLine: 'Work in Australia after graduating from an Australian institution — pathway to skilled visas.',
    sponsor: false,
    stateNom: false,
    regional: false,
    prTiming: 'Step toward PR',
    route: 'temporary-graduate-485',
  },
  {
    code: '858',
    name: 'National Innovation Visa',
    type: 'Permanent',
    typeColor: GREEN,
    pts: '—',
    ptsColor: '#9ca3af',
    oneLine: 'For exceptional scientists, researchers, technologists — merit-assessed, no occupation list.',
    sponsor: false,
    stateNom: false,
    regional: false,
    prTiming: 'Immediate',
    route: null,
  },
]

/* ── Points factors ──────────────────────────────────────── */
const FACTORS = [
  {
    label: 'Age',
    icon: 'user',
    color: NAVY,
    max: 30,
    note: '25–32 yrs → 30 pts (max). 18–24 or 33–39 → 25 pts. 40–44 → 15 pts. 45+ → 0 pts.',
  },
  {
    label: 'English',
    icon: 'bookopen',
    color: BLUE,
    max: 20,
    note: 'IELTS 8+ in all bands (Superior) → 20 pts. Proficient → 0 pts (minimum required). Competent not eligible.',
  },
  {
    label: 'Skilled Work Experience',
    icon: 'briefcase',
    color: GREEN,
    max: 20,
    note: 'Australian experience 8+ yrs → 20 pts. Overseas experience 8+ yrs → 15 pts. Points stack for both.',
  },
  {
    label: 'Qualifications',
    icon: 'graduationcap',
    color: PURPLE,
    max: 20,
    note: 'PhD → 20 pts. Bachelor or Masters → 15 pts. Diploma or trade qualification → 10 pts.',
  },
  {
    label: 'Australian Study',
    icon: 'star',
    color: TEAL,
    max: 5,
    note: '2+ years of Australian study → 5 pts. Study must be at a registered institution in a principal course.',
  },
  {
    label: 'Partner / Regional / NAATI',
    icon: 'layers',
    color: '#f5a124',
    max: 15,
    note: 'Skilled partner → 10 pts. State nom (190) → +5. Regional nom (491) → +15. NAATI credentialled interpreter → 5 pts.',
  },
]

/* ── Finder ──────────────────────────────────────────────── */
type FinderQ = { key: string; q: string; opts: { label: string; next: string }[] }
type FinderResult = { visa: string; code: string; why: string; color: string }

const FINDER_QS: FinderQ[] = [
  {
    key: 'sponsor',
    q: 'Does an Australian employer want to sponsor you right now?',
    opts: [
      { label: 'Yes — employer ready to sponsor', next: 'result_482_hub' },
      { label: 'No — I want an independent pathway', next: 'regional' },
    ],
  },
  {
    key: 'regional',
    q: 'Are you willing to live and work in a regional area of Australia?',
    opts: [
      { label: 'Yes — happy to go regional', next: 'result_491' },
      { label: "I'd prefer a major city", next: 'stateNom' },
    ],
  },
  {
    key: 'stateNom',
    q: 'Is your occupation on a state nomination list and do you meet state-specific criteria?',
    opts: [
      { label: 'Yes — I can get state nomination', next: 'result_190' },
      { label: "No or I'm not sure", next: 'graduate' },
    ],
  },
  {
    key: 'graduate',
    q: 'Have you recently completed an Australian degree or qualification?',
    opts: [
      { label: 'Yes — Australian graduate', next: 'result_485' },
      { label: 'No — overseas qualifications', next: 'result_189' },
    ],
  },
]

const FINDER_RESULTS: Record<string, FinderResult> = {
  result_482_hub: {
    visa: 'Employer-Sponsored (Skills in Demand)',
    code: '482',
    why: "With an employer ready to sponsor, the 482 Skills in Demand visa is likely your fastest pathway. Your employer must be an approved sponsor and your occupation on the CSOL or Specialist Skills stream. This is an employer sponsorship visa — not a skilled migration visa.",
    color: GOLD,
  },
  result_491: {
    visa: 'Skilled Work Regional',
    code: '491',
    why: 'The 491 gives you the largest points bonus (+15) and the most accessible invitation scores. You must live and work in a designated regional area. After 3 years, you can transition to the permanent 191 visa.',
    color: PURPLE,
  },
  result_190: {
    visa: 'Skilled Nominated',
    code: '190',
    why: 'State nomination adds 5 points and grants a permanent visa directly. Nomination criteria vary by state — some target specific occupations and employment arrangements. Our agents check each state\'s current requirements.',
    color: BLUE,
  },
  result_485: {
    visa: 'Temporary Graduate',
    code: '485',
    why: 'As an Australian graduate, the 485 lets you work in Australia for 2–6 years (depending on your qualification) while you build points and, if eligible, submit an EOI for a permanent skilled visa.',
    color: TEAL,
  },
  result_189: {
    visa: 'Skilled Independent',
    code: '189',
    why: 'With overseas qualifications and a positive skills assessment, you can submit an EOI via SkillSelect for the independent 189. No sponsor or state nomination needed — just a competitive points score. Cutoffs have historically run 75–90+ for popular occupations.',
    color: GREEN,
  },
}

function VisaFinder({ navigate }: { navigate: (page: string) => void }) {
  const [step, setStep] = useState<string>('sponsor')
  const [history, setHistory] = useState<string[]>([])
  const isResult = step.startsWith('result_')
  const result = FINDER_RESULTS[step]
  const q = FINDER_QS.find(f => f.key === step)

  function choose(next: string, label: string) {
    setHistory(h => [...h, `${step}:${label}`])
    setStep(next)
  }

  function restart() { setStep('sponsor'); setHistory([]) }

  React.useEffect(() => {
    document.title = PAGE_META['skilled-migration'].title
  }, [])

  return (
    <div style={{ background: '#ffffff', borderRadius: 18, boxShadow: '0 24px 64px rgba(13,22,50,0.22)', border: '1px solid #e8eaf0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MID} 100%)`, padding: '18px 22px' }}>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD, marginBottom: 4, fontFamily: "'Gilroy', sans-serif" }}>Which skilled visa?</div>
        <div style={{ fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,0.85)', fontFamily: "'Gilroy', sans-serif" }}>Answer 3 questions → get a pathway</div>
      </div>

      {/* Progress dots */}
      <div style={{ display: 'flex', gap: 6, padding: '12px 22px 0', alignItems: 'center' }}>
        {['sponsor', 'regional', 'stateNom', 'graduate'].map((k, i) => {
          const done = history.some(h => h.startsWith(k + ':'))
          const active = step === k
          return (
            <div key={k} style={{ width: done ? 18 : active ? 14 : 8, height: 8, borderRadius: 4, background: done ? GOLD : active ? NAVY : '#e5e7eb', transition: 'all 0.3s' }} />
          )
        })}
        <span style={{ fontSize: 12, color: '#9ca3af', fontFamily: "'Gilroy', sans-serif", marginLeft: 4 }}>
          {isResult ? 'Done' : `Step ${history.length + 1} of 4`}
        </span>
      </div>

      <div style={{ padding: '16px 22px 22px', flex: 1 }}>
        {!isResult && q && (
          <>
            <p style={{ fontSize: 15, fontWeight: 600, color: NAVY_DARK, lineHeight: 1.4, margin: '0 0 14px', fontFamily: "'Gilroy', sans-serif" }}>{q.q}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {q.opts.map(opt => (
                <button key={opt.label} onClick={() => choose(opt.next, opt.label)}
                  style={{ padding: '11px 14px', background: '#f8fafd', border: '1.5px solid #e4e6f0', borderRadius: 10, fontSize: 14, fontWeight: 500, color: NAVY_DARK, cursor: 'pointer', textAlign: 'left', fontFamily: "'Gilroy', sans-serif", transition: 'all 0.15s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = GOLD; el.style.background = 'rgba(245,161,36,0.05)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#e4e6f0'; el.style.background = '#f8fafd' }}
                >{opt.label}</button>
              ))}
            </div>
          </>
        )}

        {isResult && result && (
          <div>
            <div style={{ padding: '14px 16px', borderRadius: 12, border: `2px solid ${result.color}22`, background: `${result.color}08`, marginBottom: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: result.color, marginBottom: 6, fontFamily: "'Gilroy', sans-serif" }}>Likely pathway</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 18, fontWeight: 700, color: NAVY }}>{result.visa}</span>
                <span style={{ fontSize: 12, fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: result.color, color: '#fff', fontFamily: "'Gilroy', sans-serif" }}>{result.code}</span>
              </div>
              <p style={{ fontSize: 13.5, color: '#4b5563', lineHeight: 1.6, margin: 0, fontFamily: "'Gilroy', sans-serif" }}>{result.why}</p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <a href="#contact" style={{ flex: 1, padding: '11px 14px', background: GOLD, color: NAVY_DARK, border: 'none', borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: 'pointer', textAlign: 'center', textDecoration: 'none', fontFamily: "'Gilroy', sans-serif" }}>
                Get my points assessed →
              </a>
              <button onClick={restart} style={{ padding: '11px 14px', background: '#f3f4f8', color: '#6b7280', border: 'none', borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif" }}>
                Start over
              </button>
            </div>
          </div>
        )}
      </div>
      <div style={{ padding: '0 22px 14px', fontSize: 11.5, color: '#9ca3af', fontFamily: "'Gilroy', sans-serif", fontStyle: 'italic' }}>
        Preliminary guidance only — not migration advice. {DISCLAIMER}.
      </div>
    </div>
  )
}

/* ── FAQ accordion ──────────────────────────────────────── */
const FAQS = [
  {
    q: 'What is the minimum points score to be invited to apply?',
    a: "The minimum to register an Expression of Interest via SkillSelect is 65 points. However, invitation cutoffs — the lowest score actually invited in a round — have historically run 75–90+ depending on the occupation and visa type. Popular occupations in the 189 independent stream have seen cutoffs of 85–90 in recent rounds. Having 65 points gets you into the system; having a competitive score gets you invited. Figures current as at 1 July 2026 — verify with Home Affairs.",
  },
  {
    q: 'What is the difference between the 189, 190 and 491 visas?',
    a: "The 189 is fully independent — no employer or state sponsor needed, and it grants permanent residence immediately. The 190 requires state or territory nomination, adds 5 points to your score, and also grants PR directly. The 491 requires state, territory or family regional nomination, adds 15 points, but grants a provisional 5-year visa — you transition to the permanent 191 visa after 3 years of living and working in a designated regional area. The bigger the points boost, the greater the obligation.",
  },
  {
    q: 'How does SkillSelect work and how do I submit an EOI?',
    a: "SkillSelect is the Department of Home Affairs online system for managing skilled migration. You submit an Expression of Interest (EOI) — not a visa application — by entering your details, occupation, and points claims. DHA runs invitation rounds (the frequency and quotas vary) and invites the highest-scoring EOIs. If invited, you then lodge a visa application. An EOI is valid for 2 years and can be updated at any time. Our agents ensure your EOI reflects your strongest possible score.",
  },
  {
    q: 'Do I need a skills assessment before submitting an EOI?',
    a: "Yes — a positive skills assessment from the relevant assessing authority is generally required before you can submit an EOI. The assessing authority depends on your ANZSCO occupation code. For example, Engineers Australia for engineers, ACS for ICT professionals, ANMAC for nurses. The assessment confirms your qualifications and experience meet Australian standards. Processing times for assessments vary from 4 weeks to 6+ months depending on the authority.",
  },
  {
    q: 'Can I claim points for my partner?',
    a: "Yes. If your partner has a positive skills assessment and competent English, you can claim 10 bonus points for a skilled partner. Both partners must meet the requirement at the time of invitation — not just at the time of EOI submission. If your partner does not have a positive skills assessment, you claim 0 points in this category (not negative points).",
  },
  {
    q: 'Can I apply for a state nominated visa without living in that state?',
    a: "Nomination requires a genuine intention to live and work in the nominating state or territory. Many states also require you to already be working in that state, have a job offer, or have a demonstrated connection. Simply picking the state with the lowest points cutoff without genuine intent to live there is not acceptable and carries legal risk. Our agents advise on each state's current requirements and genuine connection criteria.",
  },
]

/* ── Points Estimator data ───────────────────────────────── */
type AgeBand = '18-24' | '25-32' | '33-39' | '40-44'
type EnglishLevel = 'Competent' | 'Proficient' | 'Superior' | 'IELTS 8+'
type OverseasExp = '0-2' | '3-4' | '5-7' | '8+'
const AGE_PTS: Record<AgeBand, number> = { '18-24': 25, '25-32': 30, '33-39': 25, '40-44': 15 }
const ENG_PTS: Record<EnglishLevel, number> = { 'Competent': 0, 'Proficient': 0, 'Superior': 10, 'IELTS 8+': 20 }
const OVS_PTS: Record<OverseasExp, number> = { '0-2': 0, '3-4': 5, '5-7': 10, '8+': 15 }

const ASSESSORS = [
  { name: 'Engineers Australia', covers: 'Engineering occupations', icon: 'tool' },
  { name: 'ACS', covers: 'ICT occupations', icon: 'globe' },
  { name: 'ANMAC', covers: 'Nursing and midwifery', icon: 'heart' },
  { name: 'TRA', covers: 'Trades (electricians, plumbers, etc.)', icon: 'briefcase' },
  { name: 'VETASSESS', covers: 'Diverse professional occupations', icon: 'layers' },
  { name: 'ACWA', covers: 'Social work and community services', icon: 'users' },
]

const INV_ROUNDS = [
  { round: '2026-05', date: 'May 2026', visa: '189', score: 90, invites: '2,000' },
  { round: '2026-04', date: 'Apr 2026', visa: '189', score: 85, invites: '1,500' },
  { round: '2026-03', date: 'Mar 2026', visa: '189', score: 80, invites: '2,200' },
]

/* ── Page ────────────────────────────────────────────────── */
export default function SkilledMigrationHubPage({ navigate }: { navigate: (page: string) => void }) {
  const [activeVisa, setActiveVisa] = useState<string | null>(null)
  const [age, setAge] = useState<AgeBand>('25-32')
  const [english, setEnglish] = useState<EnglishLevel>('Proficient')
  const [overseas, setOverseas] = useState<OverseasExp>('0-2')
  const totalPts = AGE_PTS[age] + ENG_PTS[english] + OVS_PTS[overseas]
  const ptsMsg = totalPts >= 65 ? 'Eligible to submit an EOI — book an assessment' : totalPts >= 50 ? 'Close — strategies exist to improve' : "More time needed — let's map a path"
  const ptsMsgColor = totalPts >= 65 ? '#f5a124' : totalPts >= 50 ? GOLD : '#dc2626'

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: '#ffffff', color: '#1E1E2A' }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Skilled Migration', url: 'https://www.nanakmigration.com.au/skilled-migration' },
        ]}
        faqs={FAQS.map((f: { q: string; a: string }) => ({ question: f.q, answer: f.a }))}
        service={{ name: 'Skilled Migration to Australia', description: PAGE_META['skilled-migration'].metaDescription, url: 'https://www.nanakmigration.com.au/skilled-migration' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      {/* ── Breadcrumb row ──────────────────────────────────── */}
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Skilled Migration' },
        ]}
      />

      {/* ── Hero ────────────────────────────────────────────── */}
      <PageHero
        variant="hub"
        eyebrow="Skilled Migration"
        title={<>Skilled Migration<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Hub</em></>}
        deck="Points-tested permanent and provisional visas for skilled workers — from choosing an occupation and getting a skills assessment to submitting an EOI and receiving an invitation."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Book a Skilled Migration Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Points Test →', page: 'points-test' }}
        accent={CAT_SKILLED}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            Skilled migration to Australia is primarily managed through the SkillSelect system, which uses a points test to rank candidates for the subclass 189 (Skilled Independent), subclass 190 (Skilled Nominated) and subclass 491 (Skilled Work Regional) visas, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. To enter the pool you generally need a valid skills assessment, a nominated occupation on an eligible occupation list, and a minimum score of 65 points. Invitation cut-off scores vary by occupation and visa type, and the Department of Home Affairs draws from the pool periodically.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* ── Section 1: Visa cards ────────────────────────────── */}
      <section id="visas" style={{ background: '#f8fafd', padding: '88px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Visa Subclasses" title="Six pathways. One points system." accent={CAT_SKILLED} />

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {VISAS.map(v => {
              const isHovered = activeVisa === v.code
              const clickable = v.route !== null
              return (
                <div key={v.code}
                  onMouseEnter={() => setActiveVisa(v.code)}
                  onMouseLeave={() => setActiveVisa(null)}
                  onClick={() => clickable && v.route && navigate(v.route)}
                  style={{
                    background: '#ffffff',
                    border: `1.5px solid ${isHovered ? GOLD : '#e8edf6'}`,
                    borderRadius: 16,
                    padding: '28px 24px',
                    cursor: clickable ? 'pointer' : 'default',
                    transform: isHovered && clickable ? 'translateY(-4px)' : 'none',
                    boxShadow: isHovered ? '0 16px 40px rgba(27,43,94,0.11)' : '0 1px 6px rgba(27,43,94,0.05)',
                    transition: 'all 0.2s',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Subclass pill */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', padding: '4px 12px', borderRadius: 100, background: NAVY, color: GOLD, fontFamily: "'Gilroy', sans-serif" }}>
                      {v.code}
                    </span>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 100, background: `${v.typeColor}14`, color: v.typeColor, border: `1px solid ${v.typeColor}30`, fontFamily: "'Gilroy', sans-serif" }}>
                        {v.type}
                      </span>
                      {v.pts !== '—' && (
                        <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 100, background: `${v.ptsColor}12`, color: v.ptsColor, border: `1px solid ${v.ptsColor}28`, fontFamily: "'Gilroy', sans-serif" }}>
                          {v.pts}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 20, fontWeight: 700, color: NAVY, margin: '0 0 10px', lineHeight: 1.2 }}>{v.name}</h3>
                  <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65, margin: '0 0 18px', fontFamily: "'Gilroy', sans-serif" }}>{v.oneLine}</p>

                  {/* Attribute chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {[
                      { label: v.regional ? 'Regional required' : 'No regional req.', ok: !v.regional },
                      { label: v.stateNom ? 'State nomination' : 'No nomination', ok: !v.stateNom },
                      { label: `PR: ${v.prTiming}`, ok: v.type === 'Permanent' },
                    ].map(chip => (
                      <span key={chip.label} style={{ fontSize: 11.5, fontWeight: 600, padding: '4px 10px', borderRadius: 100, background: '#f1f5f9', color: '#475569', fontFamily: "'Gilroy', sans-serif" }}>{chip.label}</span>
                    ))}
                  </div>

                  {clickable && (
                    <div style={{ position: 'absolute', bottom: 22, right: 22, opacity: isHovered ? 1 : 0, transition: 'opacity 0.2s' }}>
                      <Icon name="arrowright" size={16} color={GOLD} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <p style={{ fontSize: 11.5, color: '#9ca3af', fontStyle: 'italic', marginTop: 20, fontFamily: "'Gilroy', sans-serif" }}>{DISCLAIMER}</p>
        </div>
      </section>

      {/* ── Section 2: Points system ─────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '88px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div className="grid-2 hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, marginBottom: 14, fontFamily: "'Gilroy', sans-serif" }}>The Points System</div>
              <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(30px, 3vw, 42px)', fontWeight: 700, color: NAVY, margin: '0 0 20px', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
                How the points test works
              </h2>
              <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.75, margin: '0 0 16px', fontFamily: "'Gilroy', sans-serif" }}>
                The points test assigns a numeric score to your profile based on six factors. The minimum to register an Expression of Interest (EOI) in SkillSelect is 65 points — but in practice, invitation cutoffs for popular occupations run considerably higher.
              </p>
              <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.75, margin: '0 0 16px', fontFamily: "'Gilroy', sans-serif" }}>
                Points are claimed at EOI submission and must be supported by documentation at visa lodgement. Overclaiming points is a serious matter — it can result in visa refusal and a PIC 4020 fraud finding.
              </p>
              <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.75, margin: 0, fontFamily: "'Gilroy', sans-serif" }}>
                Our agents calculate your verified score, identify legitimate strategies to improve it, and submit your EOI to reflect the strongest defensible position.
              </p>

              <div style={{ marginTop: 28, padding: '16px 20px', background: `${NAVY}06`, border: `1px solid ${NAVY}14`, borderRadius: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 6, fontFamily: "'Gilroy', sans-serif" }}>Maximum points: 80+</div>
                <div style={{ fontSize: 13.5, color: '#4b5563', lineHeight: 1.6, fontFamily: "'Gilroy', sans-serif" }}>
                  A 33-year-old with an IELTS 8 score, a Bachelor's degree, 8 years of overseas experience, and state nomination (190) can score well above 80. Age and English are the two factors most often within reach of improvement.
                </div>
              </div>
            </div>

            {/* Factor tiles */}
            <div className="grid-2 table-scroll-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {FACTORS.map(f => (
                <div key={f.label} style={{ background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 14, padding: '18px 18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: `${f.color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name={f.icon} size={16} color={f.color} />
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, fontFamily: "'Gilroy', sans-serif", lineHeight: 1.2 }}>{f.label}</div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: f.color, fontFamily: "'Gilroy', sans-serif" }}>up to {f.max} pts</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 12.5, color: '#6b7280', lineHeight: 1.55, margin: 0, fontFamily: "'Gilroy', sans-serif" }}>{f.note}</p>
                </div>
              ))}
            </div>
          </div>
          <p style={{ fontSize: 11.5, color: '#9ca3af', fontStyle: 'italic', marginTop: 28, fontFamily: "'Gilroy', sans-serif" }}>{DISCLAIMER}</p>
        </div>
      </section>

      {/* ── Section 3: Comparison table ─────────────────────── */}
      <section style={{ background: '#f8fafd', padding: '88px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, marginBottom: 12, fontFamily: "'Gilroy', sans-serif" }}>Side by Side</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700, color: NAVY, margin: 0, letterSpacing: '-0.02em' }}>
              189 vs 190 vs <em style={{ fontStyle: 'italic', fontWeight: 300, color: GOLD }}>491</em>
            </h2>
          </div>

          <div style={{ borderRadius: 16, overflow: 'hidden', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 24px rgba(27,43,94,0.07)' }}>
            <div className="table-scroll-min">
            {/* Header row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', background: NAVY }}>
              <div style={{ padding: '16px 20px', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'Gilroy', sans-serif" }}>Factor</div>
              {[
                { code: '189', name: 'Independent', color: GREEN },
                { code: '190', name: 'Nominated', color: BLUE },
                { code: '491', name: 'Regional', color: PURPLE },
              ].map(col => (
                <div key={col.code} style={{ padding: '16px 20px', borderLeft: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                  <div style={{ fontSize: 19, fontWeight: 800, color: col.color, fontFamily: "'Gilroy', sans-serif" }}>{col.code}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontFamily: "'Gilroy', sans-serif" }}>{col.name}</div>
                </div>
              ))}
            </div>

            {[
              { label: 'Employer sponsor required', vals: ['No', 'No', 'No'], hi: [false, false, false] },
              { label: 'State/territory nomination', vals: ['Not required', 'Required', 'Required (or family)'], hi: [false, true, true] },
              { label: 'Points bonus', vals: ['—', '+5 pts', '+15 pts'], hi: [false, true, true] },
              { label: 'Regional residence obligation', vals: ['None', 'Some states', 'Yes — 3 years'], hi: [false, false, true] },
              { label: 'Visa type', vals: ['Permanent', 'Permanent', 'Provisional 5 yr'], hi: [true, true, false] },
              { label: 'PR timing', vals: ['Immediate', 'Immediate', 'After 3 yrs on 491'], hi: [true, true, false] },
            ].map((row, ri) => (
              <div key={ri} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', background: ri % 2 === 0 ? '#ffffff' : '#fafbfe', borderTop: '1px solid #f0f2f7' }}>
                <div style={{ padding: '14px 20px', fontSize: 14, color: '#374151', fontWeight: 500, fontFamily: "'Gilroy', sans-serif" }}>{row.label}</div>
                {row.vals.map((v, vi) => (
                  <div key={vi} style={{ padding: '14px 20px', borderLeft: '1px solid #f0f2f7', textAlign: 'center', fontSize: 13.5, fontWeight: row.hi[vi] ? 700 : 400, color: row.hi[vi] ? NAVY : '#6b7280', fontFamily: "'Gilroy', sans-serif" }}>{v}</div>
                ))}
              </div>
            ))}
            </div>
          </div>
          <p style={{ fontSize: 11.5, color: '#9ca3af', fontStyle: 'italic', marginTop: 16, fontFamily: "'Gilroy', sans-serif" }}>{DISCLAIMER}</p>
        </div>
      </section>

      {/* ── Section 4: Points Estimator ─────────────────────── */}
      <section style={{ background: '#ffffff', padding: '88px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div className="grid-2 hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, marginBottom: 14, fontFamily: "'Gilroy', sans-serif" }}>Points Estimator</div>
              <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700, color: NAVY, margin: '0 0 18px', letterSpacing: '-0.02em' }}>
                How many points might you score?
              </h2>
              <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.75, margin: '0 0 20px', fontFamily: "'Gilroy', sans-serif" }}>
                This estimator covers three factors — age, English, and overseas experience. A full score also includes qualifications, Australian experience, and nomination bonuses. Use this to get a baseline before a formal assessment.
              </p>
              <div className="table-scroll-wrap grid-3" style={{ borderRadius: 16, overflow: 'hidden', border: '1.5px solid #e2e8f0' }}>
                <div className="table-scroll-min">
                <div style={{ background: NAVY, padding: '14px 20px', display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr', gap: 8 }}>
                  {['Category', 'Description', 'Max pts'].map(h => (
                    <div key={h} style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "'Gilroy', sans-serif" }}>{h}</div>
                  ))}
                </div>
                {[
                  { cat: 'Age', desc: '25–32 → 30 pts · 18–24/33–39 → 25 · 40–44 → 15', max: 30 },
                  { cat: 'English (Superior)', desc: 'IELTS 8+ → 20 pts · Superior → 10 · Proficient → 0', max: 20 },
                  { cat: 'Overseas experience', desc: '8+ yrs → 15 · 5–7 → 10 · 3–4 → 5', max: 15 },
                  { cat: 'Australian experience', desc: '8+ yrs → 20 · 5–7 → 15 · 3–4 → 10 · 1–2 → 5', max: 20 },
                  { cat: 'Qualifications', desc: 'PhD → 20 · Bachelor/Masters → 15 · Diploma → 10', max: 20 },
                  { cat: 'Nomination bonus', desc: '190 state nom → +5 · 491 regional nom → +15', max: 15 },
                  { cat: 'Partner skills', desc: 'Skilled partner assessment → +10 pts', max: 10 },
                ].map((row, i) => (
                  <div key={row.cat} style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr', padding: '11px 20px', background: i % 2 === 0 ? '#ffffff' : '#fafbfe', borderTop: '1px solid #f0f2f7', gap: 8, alignItems: 'center' }}>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: NAVY, fontFamily: "'Gilroy', sans-serif" }}>{row.cat}</div>
                    <div style={{ fontSize: 12, color: '#6b7280', fontFamily: "'Gilroy', sans-serif", lineHeight: 1.5 }}>{row.desc}</div>
                    <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY }}>{row.max} pts</div>
                  </div>
                ))}
                </div>
              </div>
              <p style={{ fontSize: 11.5, color: '#9ca3af', fontStyle: 'italic', marginTop: 10, fontFamily: "'Gilroy', sans-serif" }}>{DISCLAIMER}</p>
            </div>

            {/* Interactive estimator */}
            <div style={{ background: '#ffffff', border: '1.5px solid #e8edf6', borderRadius: 20, padding: '32px 28px', boxShadow: '0 8px 32px rgba(27,43,94,0.08)' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: GOLD, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8, fontFamily: "'Gilroy', sans-serif" }}>Quick Estimator</div>
              <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 19, fontWeight: 600, color: NAVY, marginBottom: 24, lineHeight: 1.3 }}>Age, English, overseas experience</div>

              {/* Age */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: NAVY, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8, fontFamily: "'Gilroy', sans-serif" }}>Age band</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {(['18-24','25-32','33-39','40-44'] as AgeBand[]).map(b => (
                    <button key={b} onClick={() => setAge(b)} style={{ padding: '8px 12px', borderRadius: 8, border: `1.5px solid ${age === b ? NAVY : '#e5eaf4'}`, background: age === b ? NAVY : '#f8fafd', color: age === b ? '#fff' : '#374151', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif", transition: 'all 0.15s' }}>
                      {b} <span style={{ opacity: 0.6, fontSize: 11 }}>({AGE_PTS[b]} pts)</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* English */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: NAVY, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8, fontFamily: "'Gilroy', sans-serif" }}>English level</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {(['Competent','Proficient','Superior','IELTS 8+'] as EnglishLevel[]).map(lvl => (
                    <button key={lvl} onClick={() => setEnglish(lvl)} style={{ padding: '8px 12px', borderRadius: 8, border: `1.5px solid ${english === lvl ? NAVY : '#e5eaf4'}`, background: english === lvl ? NAVY : '#f8fafd', color: english === lvl ? '#fff' : '#374151', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif", transition: 'all 0.15s' }}>
                      {lvl} <span style={{ opacity: 0.6, fontSize: 11 }}>({ENG_PTS[lvl]} pts)</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Overseas experience */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: NAVY, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8, fontFamily: "'Gilroy', sans-serif" }}>Overseas experience</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {(['0-2','3-4','5-7','8+'] as OverseasExp[]).map(exp => (
                    <button key={exp} onClick={() => setOverseas(exp)} style={{ padding: '8px 12px', borderRadius: 8, border: `1.5px solid ${overseas === exp ? NAVY : '#e5eaf4'}`, background: overseas === exp ? NAVY : '#f8fafd', color: overseas === exp ? '#fff' : '#374151', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif", transition: 'all 0.15s' }}>
                      {exp} yrs <span style={{ opacity: 0.6, fontSize: 11 }}>({OVS_PTS[exp]} pts)</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Score display */}
              <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MID} 100%)`, borderRadius: 14, padding: '20px 22px', marginBottom: 14 }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4, fontFamily: "'Gilroy', sans-serif" }}>Estimated points (partial)</div>
                <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 44, fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 8 }}>{totalPts}</div>
                <div style={{ display: 'inline-block', background: `${ptsMsgColor}22`, border: `1px solid ${ptsMsgColor}44`, borderRadius: 8, padding: '6px 12px' }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: ptsMsgColor, lineHeight: 1.4, fontFamily: "'Gilroy', sans-serif" }}>{ptsMsg}</span>
                </div>
              </div>

              <a href="#contact" style={{ display: 'block', textAlign: 'center', background: GOLD, color: NAVY_DARK, padding: '12px', borderRadius: 9, textDecoration: 'none', fontSize: 15, fontWeight: 700, fontFamily: "'Gilroy', sans-serif" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = GOLD_LIGHT }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = GOLD }}
              >Get a full assessment →</a>
              <p style={{ fontSize: 11.5, color: '#9ca3af', fontStyle: 'italic', marginTop: 10, marginBottom: 0, textAlign: 'center', lineHeight: 1.5, fontFamily: "'Gilroy', sans-serif" }}>
                Partial score only — full score includes qualifications, Australian experience, nomination bonuses. {DISCLAIMER}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: SkillSelect process ──────────────────── */}
      <section style={{ background: `linear-gradient(160deg, ${NAVY_DARK} 0%, ${NAVY} 55%, ${NAVY_MID} 100%)`, padding: '88px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative' }}>
          <SectionHeading kicker="The Process" title="SkillSelect — from EOI to visa grant" intro="Four clear stages. We prepare and manage each one." accent={CAT_SKILLED} />

          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 36, left: '12.5%', right: '12.5%', height: 2, background: `rgba(245,161,36,0.3)`, zIndex: 0 }} />
            {[
              { num: '01', title: 'EOI Submitted', desc: 'Complete your Expression of Interest in SkillSelect. Declare your occupation, points claims, and personal details. We verify every claim before lodgement.' },
              { num: '02', title: 'Invite Received', desc: 'DHA runs invitation rounds. The highest-scoring EOIs in each occupation are invited to apply. Rounds are irregular — your EOI must always be current.' },
              { num: '03', title: 'Application Lodged', desc: 'You have 60 days to lodge your visa application after receiving an invitation. We compile your full document package — identity, health, character, skills assessment.' },
              { num: '04', title: 'Visa Granted', desc: 'DHA assesses your application and grants the visa. For the 189, this means permanent residence from the date of grant, anywhere in Australia.' },
            ].map((step, i) => (
              <div key={step.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 18px', position: 'relative', zIndex: 1 }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: i === 3 ? GOLD : 'rgba(255,255,255,0.1)', border: `2px solid ${i === 3 ? GOLD : 'rgba(245,161,36,0.35)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <span style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 21, fontWeight: 800, color: i === 3 ? NAVY_DARK : '#fff' }}>{step.num}</span>
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 10, lineHeight: 1.25, fontFamily: "'Gilroy', sans-serif" }}>{step.title}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, fontFamily: "'Gilroy', sans-serif" }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Skills assessment bodies ─────────────── */}
      <section style={{ background: '#ffffff', padding: '88px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading kicker="Skills Assessments" title="Skills assessment before you apply" intro="Most skilled visa applicants must obtain a positive skills assessment from the relevant Australian assessing authority before submitting an EOI. The body depends on your ANZSCO occupation code." accent={CAT_SKILLED} />

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {ASSESSORS.map(body => (
              <div key={body.name} style={{ background: '#f8fafd', borderRadius: 14, border: '1.5px solid #e5eaf4', padding: '20px 20px', display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: 'rgba(27,43,94,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={body.icon} size={18} color={NAVY} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 3, lineHeight: 1.25, fontFamily: "'Gilroy', sans-serif" }}>{body.name}</div>
                  <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.5, fontFamily: "'Gilroy', sans-serif" }}>{body.covers}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 24, background: `${NAVY}08`, border: `1.5px solid ${NAVY}14`, borderRadius: 12, padding: '14px 20px' }}>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0, fontFamily: "'Gilroy', sans-serif", fontStyle: 'italic' }}>
              <strong style={{ fontStyle: 'normal' }}>Which body applies to you?</strong> The relevant assessing authority depends on your ANZSCO occupation code — not just your job title. Our registered agents confirm the correct body and manage the assessment on your behalf.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 7: Invitation rounds ────────────────────── */}
      <section style={{ background: '#f8fafd', padding: '88px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div className="grid-sidebar hero-grid" style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 56, alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, marginBottom: 12, fontFamily: "'Gilroy', sans-serif" }}>Invitation Rounds</div>
              <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, color: NAVY, margin: '0 0 18px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                Rounds and points cutoffs
              </h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, marginBottom: 16, fontFamily: "'Gilroy', sans-serif" }}>
                DHA runs SkillSelect invitation rounds at irregular intervals — typically monthly for the 189, but timing and cutoff scores change with policy priorities. Being registered with an up-to-date EOI is essential; you cannot be invited if your EOI has lapsed.
              </p>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, fontFamily: "'Gilroy', sans-serif" }}>
                Cutoff scores for popular occupations — software engineering, nursing, accounting — have historically been higher than the 65-point minimum. Our agents track live round data and advise on when to update your EOI.
              </p>
            </div>
            <div>
              <div style={{ background: 'rgba(245,161,36,0.08)', border: '1.5px solid rgba(245,161,36,0.3)', borderRadius: 10, padding: '10px 16px', marginBottom: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0d1632' }}>[DRAFT]</span>
                <span style={{ fontSize: 13, color: '#0d1632', marginLeft: 8 }}>Replace with verified DHA data before launch.</span>
              </div>
              <div className="table-scroll-wrap" style={{ borderRadius: 14, overflow: 'hidden', border: '1.5px solid #e5eaf4' }}>
                <div className="table-scroll-min">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 0.8fr 1fr 1fr', background: NAVY, padding: '12px 20px', gap: 8 }}>
                  {['Round','Date','Visa','Score','Invites'].map(h => (
                    <div key={h} style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Gilroy', sans-serif" }}>{h}</div>
                  ))}
                </div>
                {INV_ROUNDS.map((row, i) => (
                  <div key={row.round} style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 0.8fr 1fr 1fr', padding: '13px 20px', gap: 8, borderTop: '1px solid #f0f2f8', background: i % 2 === 0 ? '#fff' : '#f8fafd' }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: NAVY, fontFamily: "'Gilroy', sans-serif" }}>{row.round}</div>
                    <div style={{ fontSize: 14, color: '#374151', fontFamily: "'Gilroy', sans-serif" }}>{row.date}</div>
                    <div style={{ fontSize: 14, color: '#374151', fontFamily: "'Gilroy', sans-serif" }}>{row.visa}</div>
                    <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY }}>{row.score}</div>
                    <div style={{ fontSize: 14, color: '#374151', fontFamily: "'Gilroy', sans-serif" }}>{row.invites}</div>
                  </div>
                ))}
                </div>
              </div>
              <p style={{ fontSize: 11.5, color: '#9ca3af', fontStyle: 'italic', marginTop: 10, fontFamily: "'Gilroy', sans-serif" }}>{DISCLAIMER}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionHeading kicker="FAQ" title="Skilled migration FAQs" accent={CAT_SKILLED} />
          <FaqAccordion
            items={FAQS.map(f => ({ question: f.q, answer: f.a }))}
            accent={CAT_SKILLED}
          />
        </div>
      </section>

      {/* ── Related ── */}
      <section style={{ background: '#fafbfe', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <RelatedPages pages={SKILLED_RELATED} navigate={navigate} columns={2} />
        </div>
      </section>

      {/* ── CTA Band ────────────────────────────────────────── */}
      <CtaBand
        title="Ready to check your score?"
        body="Book a free points assessment — our registered agents review your full profile, confirm every points claim, and identify the fastest path to an invitation."
        primaryCta={{ label: 'Book a Skilled Migration Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Back to Home', page: 'home' }}
        navigate={navigate}
        accent={CAT_SKILLED}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
