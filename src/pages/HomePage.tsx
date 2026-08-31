import React, { useState, Fragment } from 'react'
import { useAppNavigate } from '@/lib/navigation'
import { intakeRefNumber, useIntakeSubmit } from '@/lib/api'
import ContactForm from '@/components/forms/ContactForm'

import navpreetPhoto from '@/imports/navpreet-aulakh.jpg'
import AustralianSkyline from '@/components/ui/AustralianSkyline'
import cardKangaroo from '/src/imports/card-kangaroo.png'
import { GOLD, GOLD_LIGHT, NAVY, NAVY_DARK, NAVY_MID, NAVY_GRAD, NAVY_GRAD_V, HERO_GRAD, CREAM, GREY_BAND, TEXT } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import NanakLogo from '@/components/layout/NanakLogo'
import Icon from '@/components/ui/Icon'
import { NAV_ITEMS } from '@/data/navItems'
import ProcessJourney from '@/components/ui/ProcessJourney'
import { CardGrid } from '@/components/page/CardGrid'
import { CtaBand } from '@/components/page/CtaBand'
import { ComplianceDisclaimer } from '@/components/page/ComplianceDisclaimer'
import { ROUTE } from '@/data/routes'
import { usePageSeo } from '@/hooks/usePageSeo'

/* ── Data ─────────────────────────────────────────────── */
const VISA_TYPES = [
  { code: '482', name: 'Skills in Demand', category: 'Work', desc: 'Sponsored by an approved Australian employer to fill a skills gap. SID replaced TSS in Dec 2024.', duration: 'Up to 4 years', color: NAVY, note: 'SID replaced TSS Dec 2024' },
  { code: '189', name: 'Skilled Independent', category: 'Permanent', desc: 'Points-tested permanent residency — no employer or sponsor required.', duration: 'Permanent', color: GOLD },
  { code: '500', name: 'Student Visa', category: 'Study', desc: 'Study full-time at an approved Australian educational institution.', duration: '2–8 years', color: NAVY_MID },
  { code: '186', name: 'Employer Nomination', category: 'Permanent', desc: 'Employer nominates you for permanent residency in Australia.', duration: 'Permanent', color: '#0e7490' },
  { code: '600', name: 'Visitor Visa', category: 'Tourist', desc: 'Tourism, family visits, or short business activities in Australia.', duration: 'Up to 12 months', color: '#0369a1' },
  { code: '820', name: 'Partner Visa', category: 'Family', desc: 'Join your Australian citizen or permanent resident partner.', duration: 'Permanent pathway', color: '#e11d48' },
]

const STEPS = [
  { num: '01', title: 'Free Assessment', body: 'We evaluate your profile, qualifications, and migration options in a 30-minute consultation — no obligation.' },
  { num: '02', title: 'Strategy & Planning', body: 'Our registered migration agents build a tailored pathway, including skills assessment, state nomination, and timeline.' },
  { num: '03', title: 'Document Preparation', body: "We compile and review every document required by the Department of Home Affairs to maximise approval odds." },
  { num: '04', title: 'Lodgement & Tracking', body: 'We lodge your application and liaise directly with Home Affairs, keeping you informed at every step.' },
]

const STATS = [
  { value: 'Free', label: 'Initial assessment' },
  { value: '3 languages', label: 'English, Punjabi & Hindi' },
  { value: '24 hrs', label: 'Average response time' },
  { value: '14 yrs', label: 'Industry experience' },
]

const TESTIMONIALS = [
  { name: 'Client name (placeholder)', origin: 'City, Country', flag: '🌐', visa: 'Subclass TBC', quote: 'Placeholder — replace with a consented client review.', initials: 'CP' },
  { name: 'Client name (placeholder)', origin: 'City, Country', flag: '🌐', visa: 'Subclass TBC', quote: 'Placeholder — replace with a consented client review.', initials: 'CP' },
  { name: 'Client name (placeholder)', origin: 'City, Country', flag: '🌐', visa: 'Subclass TBC', quote: 'Placeholder — replace with a consented client review.', initials: 'CP' },
]

const NEWS = [
  {
    date: '28 Jul 2026', category: 'Policy Update',
    title: "[DRAFT] Australia raises Skills in Demand visa salary threshold for 2026–27",
    standfirst: "The Department of Home Affairs has confirmed a revised income threshold for the Skills in Demand (subclass 482) Core Skills stream, taking effect from 1 July 2026. Employers nominating workers in most occupations will need to meet the updated Temporary Skilled Migration Income Threshold (TSMIT) to remain compliant.",
  },
  {
    date: '14 Jul 2026', category: 'State Nomination',
    title: '[DRAFT] Victoria opens new round of 190 nominations for healthcare workers',
    standfirst: "Victoria's state nomination program has reopened for a targeted cohort of registered nurses, midwives and allied health professionals under the subclass 190 (Skilled Nominated) visa. Eligible candidates must hold a current skills assessment and meet the state's work-in-Victoria requirement.",
  },
  {
    date: '02 Jul 2026', category: 'Student Visas',
    title: '[DRAFT] Changes to post-study work rights for 2026 graduates explained',
    standfirst: "Graduates completing Australian qualifications from 1 January 2026 onward are subject to revised Temporary Graduate (subclass 485) visa conditions, including updated stream eligibility and extended stay periods for regional and STEM graduates.",
  },
]

/* Practice navigation — rendered separately in header as utility links */
const PRACTICE_LINKS = [
  { label: 'About the Practice', icon: 'user', desc: 'Registered agent, credentials and our story.' },
  { label: 'Our Fees', icon: 'dollar', desc: 'Transparent fee schedules for all services.' },
  { label: 'Immigration News', icon: 'bell', desc: 'Policy updates, visa changes and DHA announcements.' },
  { label: 'Tools Hub', icon: 'tool', desc: 'Points calculator, fee estimator and document checklists.' },
  { label: 'Contact', icon: 'phone', desc: 'Get in touch with our team.' },
]

const TRUST_LOGOS = [
  { name: 'MARA Registered', label: 'MARN 2619467' },
  { name: 'OMARA Code of Conduct', label: 'Compliant member' },
  { name: 'Migration Institute of Australia', label: 'Member' },
  { name: 'Graduate Diploma in Migration Law and Practice', label: 'Qualified' },
]

/* ── AI Pathway Assessment widget ────────────────────── */
type ChatMsg = { from: 'bot' | 'user'; text: string }
type Step = {
  key: string
  question: string
  options: { label: string; next: string }[]
}
const ASSESSMENT_STEPS: Step[] = [
  {
    key: 'goal',
    question: "What's your main goal in Australia?",
    options: [
      { label: 'Work & Career', next: 'location_work' },
      { label: 'Study', next: 'location_study' },
      { label: 'Join Family', next: 'family_rel' },
      { label: 'Start a Business', next: 'business' },
      { label: 'Visit / Tourism', next: 'visit' },
    ],
  },
  {
    key: 'location_work',
    question: 'Where are you currently located?',
    options: [
      { label: 'In Australia (onshore)', next: 'job_offer' },
      { label: 'Overseas (offshore)', next: 'skills_assess' },
    ],
  },
  {
    key: 'job_offer',
    question: 'Do you have a job offer from an Australian employer?',
    options: [
      { label: 'Yes — employer sponsored', next: 'result_482' },
      { label: 'No — independent pathway', next: 'skills_assess' },
    ],
  },
  {
    key: 'skills_assess',
    question: 'Have you completed a skills assessment in your occupation?',
    options: [
      { label: 'Yes, assessment done', next: 'result_skilled' },
      { label: 'No / not sure', next: 'result_assess_first' },
    ],
  },
  {
    key: 'location_study',
    question: 'Are you currently in Australia or overseas?',
    options: [
      { label: 'In Australia (onshore)', next: 'current_visa' },
      { label: 'Overseas (offshore)', next: 'result_500' },
    ],
  },
  {
    key: 'current_visa',
    question: 'What visa do you currently hold?',
    options: [
      { label: 'Temporary Graduate (485)', next: 'result_485_study' },
      { label: 'Student (500)', next: 'result_extend_500' },
      { label: 'Working Holiday (417/462)', next: 'result_500' },
      { label: 'Other / Visitor', next: 'result_500' },
    ],
  },
  {
    key: 'family_rel',
    question: 'What is your relationship to the Australian sponsor?',
    options: [
      { label: 'Partner or Spouse', next: 'result_partner' },
      { label: 'Parent', next: 'result_parent' },
      { label: 'Child or Dependent', next: 'result_child' },
    ],
  },
  { key: 'business', question: 'What describes you best?', options: [
    { label: 'Investor ($2.5M+ assets)', next: 'result_888' },
    { label: 'Entrepreneur / Innovator', next: 'result_innovator' },
  ]},
  { key: 'visit', question: 'How long do you plan to stay?', options: [
    { label: 'Up to 12 months', next: 'result_600' },
    { label: 'Longer / may want to stay', next: 'goal' },
  ]},
  // Results
  { key: 'result_482', question: '', options: [] },
  { key: 'result_skilled', question: '', options: [] },
  { key: 'result_assess_first', question: '', options: [] },
  { key: 'result_500', question: '', options: [] },
  { key: 'result_485_study', question: '', options: [] },
  { key: 'result_extend_500', question: '', options: [] },
  { key: 'result_partner', question: '', options: [] },
  { key: 'result_parent', question: '', options: [] },
  { key: 'result_child', question: '', options: [] },
  { key: 'result_888', question: '', options: [] },
  { key: 'result_innovator', question: '', options: [] },
  { key: 'result_600', question: '', options: [] },
]
const RESULTS: Record<string, { visa: string; desc: string; code?: string }> = {
  result_482: { visa: 'Skills in Demand (SID)', code: '482', desc: 'Your employer can sponsor you for a 482 Skills in Demand (SID) visa — the most common work pathway for sponsored workers. SID replaced the TSS visa in Dec 2024. Usually 2–4 years with a pathway to permanent residence.' },
  result_skilled: { visa: 'Points-Tested Skilled Migration', code: '189 / 190 / 491', desc: 'With a positive skills assessment, you can submit an Expression of Interest via SkillSelect. Options include the independent 189, state-nominated 190, or regional 491 visa.' },
  result_assess_first: { visa: 'Skills Assessment Required', desc: 'Before lodging a skilled visa, you\'ll need a positive skills assessment from the relevant assessing authority for your occupation. Our agents can guide you through this step.' },
  result_500: { visa: 'Student Visa', code: '500', desc: 'The Subclass 500 allows full-time study at a registered Australian institution. You can include eligible family members and work up to 48 hours per fortnight.' },
  result_485_study: { visa: 'Temporary Graduate Visa', code: '485', desc: 'After completing studies you may be eligible for a 485 Graduate visa to work in Australia while you explore permanent residency pathways.' },
  result_extend_500: { visa: 'Student Visa Extension', code: '500', desc: 'If you\'re extending or changing your course, you may need to lodge a new 500 application. Our agents can review your current COE and advise on next steps.' },
  result_partner: { visa: 'Partner Visa', code: '820 / 801', desc: 'A two-stage partner visa for genuine couples. Stage 1 (820) grants temporary residence; Stage 2 (801) grants permanent residence, usually after 2 years.' },
  result_parent: { visa: 'Contributory Parent Visa', code: '143', desc: 'The Contributory Parent visa is the fastest parent pathway. It requires a significant government levy but processes within 5–8 years compared to 30+ for the standard parent visa.' },
  result_child: { visa: 'Child Visa', code: '101 / 802', desc: 'Dependent children of Australian citizens or permanent residents may be eligible for a child visa. Requirements vary by age and relationship.' },
  result_888: { visa: 'Business Innovation & Investment', code: '888', desc: 'For established business owners and investors with significant assets. State nomination is usually required. Our team can assess your eligibility against the criteria.' },
  result_innovator: { visa: 'Global Talent / Innovator', desc: 'High-achievers in tech, science, finance or creative sectors may qualify for the Global Talent visa program — no employer sponsor needed.' },
  result_600: { visa: 'Visitor Visa', code: '600', desc: 'The Subclass 600 allows stays of 3, 6 or 12 months depending on your circumstances. Multiple-entry options are available for frequent travellers.' },
}
function PathwayAssessment() {
  const navigate = useAppNavigate()
  const { submit, loading, error, success } = useIntakeSubmit('pathway-assessment')
  const chatRef = React.useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<ChatMsg[]>([
    { from: 'bot', text: "Hello — I'll ask a few quick questions and give you preliminary pathway guidance. Nothing here is migration advice." },
    { from: 'bot', text: ASSESSMENT_STEPS[0].question },
  ])
  const [step, setStep] = useState<string>('goal')
  const [done, setDone] = useState(false)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [consent, setConsent] = useState(false)
  const [hp, setHp] = useState('')
  const [localError, setLocalError] = useState<string | null>(null)
  const [briefRef, setBriefRef] = useState('')

  React.useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [messages, showLeadForm])

  const currentStep = ASSESSMENT_STEPS.find(s => s.key === step)
  const result = RESULTS[step]

  function choose(option: { label: string; next: string }) {
    const stepKey = step
    const next = ASSESSMENT_STEPS.find(s => s.key === option.next)
    const newMsgs: ChatMsg[] = [...messages, { from: 'user', text: option.label }]
    if (next && !option.next.startsWith('result_')) {
      newMsgs.push({ from: 'bot', text: next.question })
    } else {
      const r = RESULTS[option.next]
      if (r) newMsgs.push({ from: 'bot', text: `Based on your answers, the most likely pathway is the **${r.visa}${r.code ? ` (${r.code})` : ''}**. ${r.desc}` })
    }
    setAnswers(prev => ({ ...prev, [stepKey]: option.label }))
    setMessages(newMsgs)
    setStep(option.next)
    if (option.next.startsWith('result_')) {
      setDone(true)
      setShowLeadForm(true)
      setBriefRef(intakeRefNumber())
    }
  }

  async function submitLead(e: React.FormEvent) {
    e.preventDefault()
    setLocalError(null)
    const em = email.trim()
    if (!name.trim() || !mobile.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) {
      setLocalError('Please complete all fields with a valid email.')
      return
    }
    if (!consent) {
      setLocalError('Please tick the acknowledgement box.')
      return
    }
    const ref = briefRef || intakeRefNumber()
    const summary = result
      ? `${result.visa}${result.code ? ` (${result.code})` : ''}`
      : 'Pathway assessment completed'
    await submit({
      company_website: hp,
      fields: { ...answers, ref },
      result: { summary, ref, code: result?.code, title: 'Pathway Assessment' },
      lead: {
        name: name.trim(),
        email: em,
        mobile: mobile.trim(),
        goal: summary,
        subclass: result?.code || '',
        article: ref,
        consent: { email: true, sms: true, wa: false },
      },
    })
  }

  function restart() {
    setMessages([
      { from: 'bot', text: "Hello — I'll ask a few quick questions and give you preliminary pathway guidance. Nothing here is migration advice." },
      { from: 'bot', text: ASSESSMENT_STEPS[0].question },
    ])
    setStep('goal')
    setDone(false)
    setAnswers({})
    setShowLeadForm(false)
    setName('')
    setEmail('')
    setMobile('')
    setConsent(false)
    setLocalError(null)
    setBriefRef('')
  }

  return (
    <div style={{ background: '#ffffff', borderRadius: 16, boxShadow: '0 24px 64px rgba(13,22,50,0.22), 0 2px 8px rgba(13,22,50,0.08)', border: '1px solid #e8eaf0', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: 520 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1px solid #f0f0f5', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: '#f5a124', display: 'inline-block', boxShadow: '0 0 0 3px rgba(245,161,36,0.2)' }} />
          <span style={{ fontSize: 14, fontWeight: 700, color: NAVY_DARK }}>Pathway Assessment</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', color: '#9ca3af', textTransform: 'uppercase' }}>Preliminary</span>
          <span style={{ fontSize: 10, color: '#d1d5db' }}>·</span>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', color: '#9ca3af', textTransform: 'uppercase' }}>Not Advice</span>
        </div>
      </div>

      {/* Chat messages */}
      <div ref={chatRef} style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 8px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={{
              maxWidth: '82%',
              padding: '11px 14px',
              borderRadius: m.from === 'bot' ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
              background: m.from === 'bot' ? '#f3f4f8' : NAVY,
              color: m.from === 'bot' ? NAVY_DARK : '#ffffff',
              fontSize: 13.5,
              lineHeight: 1.55,
              fontWeight: m.from === 'bot' ? 400 : 500,
            }}>
              {m.text.replace(/\*\*(.*?)\*\*/g, '$1')}
            </div>
          </div>
        ))}
        {done && result && (
          <div style={{ marginTop: 4, padding: '12px 14px', background: 'linear-gradient(135deg, rgba(27,43,94,0.06) 0%, rgba(245,161,36,0.08) 100%)', border: '1px solid rgba(245,161,36,0.25)', borderRadius: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: GOLD, marginBottom: 4 }}>Suggested Pathway</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: NAVY }}>
              {result.visa}{result.code && <span style={{ marginLeft: 6, fontSize: 11, padding: '2px 7px', background: NAVY, color: GOLD, borderRadius: 100, fontWeight: 700 }}>{result.code}</span>}
            </div>
          </div>
        )}
      </div>

      {/* Options or result actions */}
      <div style={{ padding: '10px 14px 14px', borderTop: '1px solid #f0f0f5', flexShrink: 0 }}>
        {!done && currentStep && currentStep.options.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {currentStep.options.map(opt => (
              <button key={opt.label} onClick={() => choose(opt)} style={{
                padding: '9px 14px', background: '#ffffff', border: '1.5px solid #e4e6f0',
                borderRadius: 10, fontSize: 13, fontWeight: 500, color: NAVY_DARK,
                cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = GOLD; el.style.background = 'rgba(245,161,36,0.05)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#e4e6f0'; el.style.background = '#ffffff' }}
              >{opt.label}</button>
            ))}
          </div>
        )}
        {done && showLeadForm && !success && (
          <form onSubmit={submitLead} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: NAVY_DARK, marginBottom: 4 }}>Get your pathway summary emailed</div>
            <input type="text" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} required
              style={{ padding: '9px 12px', border: '1.5px solid #e4e6f0', borderRadius: 8, fontSize: 13, outline: 'none' }} />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required
              style={{ padding: '9px 12px', border: '1.5px solid #e4e6f0', borderRadius: 8, fontSize: 13, outline: 'none' }} />
            <input type="tel" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} required
              style={{ padding: '9px 12px', border: '1.5px solid #e4e6f0', borderRadius: 8, fontSize: 13, outline: 'none' }} />
            <label style={{ display: 'flex', gap: 8, alignItems: 'flex-start', cursor: 'pointer' }}>
              <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} style={{ marginTop: 2 }} />
              <span style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.5 }}>I consent to being contacted about my pathway assessment.</span>
            </label>
            <input type="text" name="company_website" value={hp} onChange={e => setHp(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true"
              style={{ position: 'absolute', left: -9999, opacity: 0, height: 0, width: 0 }} />
            {(localError || error) && <div style={{ fontSize: 11, color: '#dc2626' }}>{localError || error}</div>}
            <div style={{ display: 'flex', gap: 8 }}>
              <button type="submit" disabled={loading} style={{ flex: 1, padding: '11px 14px', background: loading ? '#9ca3af' : GOLD, color: NAVY_DARK, border: 'none', borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? 'Sending…' : 'Email my summary →'}
              </button>
              <button type="button" onClick={restart} style={{ padding: '11px 14px', background: '#f3f4f8', color: '#6b7280', border: 'none', borderRadius: 9, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                Start over
              </button>
            </div>
          </form>
        )}
        {done && success && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ padding: '12px 14px', background: 'rgba(245,161,36,0.12)', border: '1px solid rgba(245,161,36,0.35)', borderRadius: 9, fontSize: 13, color: NAVY_DARK }}>
              Summary sent — our team will be in touch.
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button type="button" onClick={() => navigate('book-consultation')} style={{ flex: 1, padding: '11px 14px', background: GOLD, color: NAVY_DARK, border: 'none', borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
                Book Free Consultation →
              </button>
              <button type="button" onClick={restart} style={{ padding: '11px 14px', background: '#f3f4f8', color: '#6b7280', border: 'none', borderRadius: 9, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                Start over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ── App ──────────────────────────────────────────────── */
function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  if (done) return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', borderRadius: 12, padding: '16px 24px', border: '1px solid rgba(255,255,255,0.3)' }}>
      <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5 6.5-7" stroke={NAVY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#ffffff' }}>You're subscribed — thank you!</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>We'll be in touch with the latest updates.</div>
      </div>
    </div>
  )
  return (
    <form onSubmit={e => { e.preventDefault(); if (email) setDone(true) }} style={{ display: 'flex', gap: 0, flexShrink: 0, boxShadow: '0 4px 24px rgba(13,22,50,0.2)', borderRadius: 10 }}>
      <input
        type="email" required value={email} onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        style={{ padding: '14px 20px', fontSize: 14, border: 'none', borderRadius: '10px 0 0 10px', outline: 'none', width: 260, color: NAVY_DARK, background: '#ffffff', fontFamily: 'Inter, system-ui, sans-serif' }}
      />
      <button type="submit" style={{ padding: '14px 26px', background: NAVY, color: '#fff', border: 'none', borderRadius: '0 10px 10px 0', fontSize: 14, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', letterSpacing: '0.02em', fontFamily: 'Inter, system-ui, sans-serif', transition: 'background 0.15s' }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = NAVY_MID}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = NAVY}
      >
        Subscribe →
      </button>
    </form>
  )
}

const FAQS = [
  { q: 'What is a MARA-registered migration agent and why does it matter?', a: 'A MARA-registered agent is authorised by the Office of the Migration Agents Registration Authority (OMARA) to provide migration advice in Australia. Only registered agents can legally charge for visa advice. Always verify your agent\'s registration at the OMARA register before engaging their services.' },
  { q: 'How do I know which visa is right for me?', a: 'The right visa depends on your occupation, skills assessment outcome, English proficiency, age, work experience, state nomination availability and your employer\'s sponsorship capacity. Our preliminary pathway assessment (above) gives you a starting point — but a formal eligibility review with a registered agent is the only reliable way to confirm your options.' },
  { q: 'What is the points test and how many points do I need?', a: 'The points test applies to skilled migration visas (189, 190, 491). Points are awarded for age, English, work experience, qualifications, Australian study, partner skills and other factors. The minimum score is 65 points, but invitation cutoffs are typically much higher — often 80–90+ depending on the occupation and visa type.' },
  { q: 'Can my employer sponsor me for a visa?', a: 'Yes. Employers can sponsor workers under the Skills in Demand (SID) visa (subclass 482) for approved occupations. SID replaced the Temporary Skill Shortage (TSS) visa in Dec 2024. The employer must be an approved sponsor, the occupation must be on the relevant list, and the salary must meet the Temporary Skilled Migration Income Threshold (TSMIT). We assist both employers and applicants through the sponsorship process.' },
  { q: 'How long does a skilled visa application take?', a: 'Processing times vary significantly. State nomination (190/491) can take 2–6 months. Employer-sponsored 482 visas typically take 2–4 months. Permanent employer nomination (186) can take 12–24 months. Times are indicative only — complex cases or requests for further information (RFIs) will extend processing.' },
  { q: 'What happens if my visa is refused?', a: 'A refusal is not necessarily the end. Many decisions can be reviewed at the Administrative Review Tribunal (ART) within strict timeframes. The ART replaced the Administrative Appeals Tribunal (AAT) on 14 October 2024. Grounds for review include merits review of the decision. We strongly advise seeking agent advice immediately on receipt of a refusal, as appeal windows are short.' },
  { q: 'Can my family come with me on my visa?', a: 'Most skilled and employer-sponsored visas allow you to include a de facto partner and dependent children as secondary applicants. Family members can generally work and study in Australia on the same visa. Partner visas (820/801 onshore or 309/100 offshore) are separate applications for partners of Australian citizens or permanent residents.' },
  { q: 'What is the difference between temporary and permanent residence?', a: 'Temporary residence grants the right to live and work in Australia for a set period. Permanent residence (PR) grants an ongoing right to remain, work, and access many government services — and is generally a prerequisite for citizenship after four years. Many temporary visas offer a pathway to PR, but this is not guaranteed and depends on meeting eligibility criteria at the time of application.' },
]

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)
  const [faqs, setFaqs] = useState(FAQS)

  React.useEffect(() => {
    import('@/lib/contentApi').then(({ fetchFaqByPageKey }) => {
      fetchFaqByPageKey('homepage').then((col) => {
        if (col?.items?.length) {
          setFaqs(col.items.map((item) => ({ q: item.q, a: item.a })))
        }
      })
    })
  }, [])

  return (
    <section style={{ background: '#ffffff', padding: '88px 24px', borderTop: '1px solid #eef0f6' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>Got Questions?</div>
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 400, lineHeight: 1.1, color: NAVY, margin: 0, letterSpacing: '-0.02em' }}>
            Frequently Asked <em style={{ fontStyle: 'italic', color: GOLD }}>Questions</em>
          </h2>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {faqs.map((faq, i) => (
            <div key={i}
              style={{ background: '#ffffff', border: open === i ? `1.5px solid ${GOLD}` : '1.5px solid #e8eaf0', borderRadius: 14, overflow: 'hidden', boxShadow: open === i ? '0 4px 20px rgba(245,161,36,0.1)' : '0 1px 4px rgba(27,43,94,0.04)', transition: 'border-color 0.2s, box-shadow 0.2s' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                <span style={{ fontSize: 15, fontWeight: 600, color: open === i ? NAVY : '#1a1a2e', lineHeight: 1.4, fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {faq.q}
                </span>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: open === i ? NAVY : '#f3f4f8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.2s, transform 0.2s', transform: open === i ? 'rotate(45deg)' : 'none' }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2v8M2 6h8" stroke={open === i ? '#fff' : '#6b7280'} strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
              </button>
              {open === i && (
                <div style={{ padding: '0 24px 22px', borderTop: '1px solid #f3f4f8' }}>
                  <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.75, margin: '16px 0 0', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}


export default function HomePage() {
  const [activeVisa, setActiveVisa] = useState<string | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [hoveredTile, setHoveredTile] = useState<string | null>(null)
  const [showSticky, setShowSticky] = useState(false)

  usePageSeo('home')

  React.useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY > 400
      const nearBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight - 200
      setShowSticky(scrolled && !nearBottom)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigate = useAppNavigate()

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#ffffff', color: TEXT }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': ['Organization', 'LegalService'],
            '@id': 'https://www.nanakmigration.com.au/#organization',
            name: 'Nanak Migration Group',
            url: 'https://www.nanakmigration.com.au',
            logo: 'https://www.nanakmigration.com.au/logo.png',
            description: 'MARA-registered migration agents helping individuals, families and employers navigate Australian immigration.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Level 8, 350 Collins Street',
              addressLocality: 'Melbourne',
              addressRegion: 'VIC',
              postalCode: '3000',
              addressCountry: 'AU',
            },
            telephone: '+61 1300 644 728',
            email: 'visa@nanakmigration.com.au',
            areaServed: 'AU',
            identifier: [
              { '@type': 'PropertyValue', name: 'MARN', value: '2619467' },
              { '@type': 'PropertyValue', name: 'ABN', value: '54 674 937 476' },
            ],
            sameAs: ['[TBC-LINKEDIN]', '[TBC-FACEBOOK]', '[TBC-INSTAGRAM]'],
          },
          {
            '@type': 'WebSite',
            '@id': 'https://www.nanakmigration.com.au/#website',
            url: 'https://www.nanakmigration.com.au',
            name: 'Nanak Migration Group',
            publisher: { '@id': 'https://www.nanakmigration.com.au/#organization' },
            potentialAction: {
              '@type': 'SearchAction',
              target: { '@type': 'EntryPoint', urlTemplate: 'https://www.nanakmigration.com.au/?s={search_term_string}' },
              'query-input': 'required name=search_term_string',
            },
          },
        ],
      }) }} />

      {/* ── SITE HEADER ───────────────────────────────────── */}
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: HERO_GRAD }}>
        {/* Soft radial glow blobs */}
        <div style={{ position: 'absolute', top: '-10%', left: '60%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '0', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(27,43,94,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        {/* Australian skyline — flush to bottom edge */}
        <AustralianSkyline />

        {/* Kangaroo — bottom-right accent */}
        <img
          src={cardKangaroo}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            right: '4%',
            width: 160,
            height: 'auto',
            opacity: 0.18,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />

        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '80px 24px', width: '100%' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 56, alignItems: 'center' }}>
            <div>
              {/* MARA badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28, padding: '6px 14px 6px 8px', background: 'rgba(27,43,94,0.08)', border: '1px solid rgba(27,43,94,0.15)', borderRadius: 100 }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="check" size={10} color={GOLD} />
                </div>
                <span style={{ color: NAVY, fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>MARA-Registered · MARN 2619467</span>
              </div>

              <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 300, lineHeight: 1.08, color: NAVY_MID, margin: '0 0 8px', letterSpacing: '-0.03em' }}>
                Your pathway
                <br /><em style={{ fontStyle: 'italic', color: GOLD }}>to Australia</em>
                <br />starts here.
              </h1>

              <p style={{ color: '#4a4560', fontSize: 17, lineHeight: 1.7, margin: '24px 0 0', maxWidth: 520 }}>
                Nanak Migration Group — MARA-registered agents with 14 years of experience helping skilled workers, students and families navigate Australia's visa system.
              </p>

              <div style={{
                background: 'rgba(27,43,94,0.04)',
                borderLeft: '4px solid #f5a124',
                borderRadius: '0 8px 8px 0',
                padding: '14px 20px',
                marginTop: 24,
                maxWidth: 640,
              }}>
                <span style={{ fontSize: 14, lineHeight: 1.6, color: '#1B2B5E' }}>
                  <strong>Nanak Migration Group</strong> is a MARA-registered migration agency (MARN 2619467) helping individuals, families and employers navigate Australian immigration from offices in Melbourne, Sydney, Brisbane and Perth.
                </span>
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36 }}>
                <a href="#contact" style={{ background: NAVY_GRAD, color: '#fff', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 14, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8, boxShadow: '0 4px 20px rgba(13,22,50,0.25)', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.88')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                >Book Free Consultation →</a>
                <a href="#visas" style={{ backgroundColor: GOLD, color: NAVY_DARK, padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 14, fontWeight: 700, display: 'inline-block', boxShadow: '0 4px 20px rgba(245,161,36,0.35)', transition: 'background-color 0.2s' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = GOLD_LIGHT)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = GOLD)}
                >Explore Visas</a>
              </div>

            </div>

            {/* AI Pathway Assessment — faded into hero */}
            <div style={{ position: 'relative' }}>
              <PathwayAssessment />
              {/* fade overlay — blends widget edges into hero gradient */}
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, ${HERO_GRAD.split(',')[0].replace('linear-gradient(160deg,', '').trim()} 0%, transparent 18%, transparent 72%, rgba(27,43,94,0.05) 100%)`, pointerEvents: 'none', borderRadius: 16 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(232,240,250,0.7) 0%, transparent 20%, transparent 80%, rgba(232,240,250,0.7) 100%)', pointerEvents: 'none', borderRadius: 16 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SEGMENTATION TILES ────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, marginBottom: 8 }}>Where are you starting from?</div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: NAVY, margin: '0 0 40px 0' }}>Choose your starting point</h2>
          </div>
          <div className="segmentation-grid">
            {([
              {
                id: 'skilled',
                label: 'I have skills and work experience',
                desc: 'Explore points-tested visas and skilled migration pathways.',
                cta: 'Explore skilled visas',
                route: 'skilled-migration',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ),
              },
              {
                id: 'employer',
                label: 'My employer wants to sponsor me',
                desc: 'Your employer can nominate you for temporary or permanent residence.',
                cta: 'Explore employer-sponsored visas',
                route: 'employer-sponsored-visas',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2"/>
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                    <line x1="8" y1="14" x2="16" y2="14"/>
                  </svg>
                ),
              },
              {
                id: 'student',
                label: 'I want to study in Australia',
                desc: 'Student visas and the pathway from study to permanent residence.',
                cta: 'Explore student visas',
                route: 'student-visas',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                ),
              },
              {
                id: 'partner',
                label: 'My partner or family is here',
                desc: 'Partner, prospective marriage and family visas explained.',
                cta: 'Explore partner and family visas',
                route: 'partner-family-visas',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                ),
              },
              {
                id: 'business',
                label: 'I am a business sponsoring staff',
                desc: 'Standard Business Sponsorship, nomination requirements and compliance.',
                cta: 'Explore sponsorship obligations',
                route: 'standard-business-sponsorship',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="1"/>
                    <path d="M9 22V12h6v10"/>
                    <rect x="8" y="6" width="2" height="2"/>
                    <rect x="14" y="6" width="2" height="2"/>
                    <rect x="8" y="10" width="2" height="2"/>
                    <rect x="14" y="10" width="2" height="2"/>
                  </svg>
                ),
              },
              {
                id: 'refused',
                label: 'My visa was refused or cancelled',
                desc: 'Review rights, AAT/ART applications and complex case options.',
                cta: 'Explore review options',
                route: 'visa-refusal-review',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                ),
              },
            ] as { id: string; label: string; desc: string; cta: string; route: string; icon: React.ReactNode }[]).map(tile => {
              const hovered = hoveredTile === tile.id
              return (
                <div
                  key={tile.id}
                  onMouseEnter={() => setHoveredTile(tile.id)}
                  onMouseLeave={() => setHoveredTile(null)}
                  onClick={() => navigate(tile.route)}
                  style={{
                    background: '#ffffff',
                    border: '1.5px solid #e8edf5',
                    borderRadius: 12,
                    borderTop: hovered ? '3px solid #f5a124' : '3px solid transparent',
                    padding: '24px',
                    transform: hovered ? 'translateY(-3px)' : 'none',
                    transition: 'transform 0.15s, border-top 0.15s, box-shadow 0.15s',
                    boxShadow: hovered ? '0 8px 24px rgba(27,43,94,0.10)' : '0 2px 8px rgba(27,43,94,0.05)',
                    cursor: 'pointer',
                  }}
                >
                  {tile.icon}
                  <div style={{ fontSize: 16, fontWeight: 700, color: NAVY, marginTop: 12 }}>{tile.label}</div>
                  <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>{tile.desc}</div>
                  <span
                    onClick={e => { e.stopPropagation(); navigate(tile.route) }}
                    style={{ display: 'block', color: '#f5a124', fontSize: 13, fontWeight: 600, marginTop: 14, cursor: 'pointer' }}
                  >{tile.cta} →</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── VISA PATHWAY HUB GRID ─────────────────────────── */}
      {(() => {
        const HUB_CARDS = [
          {
            title: 'Employer Sponsored',
            body: 'Sponsor overseas workers via the 482 and 186 visa pathways — 8 guides covering sponsorship, occupation lists and compliance.',
            icon: 'briefcase',
            page: ROUTE.employerSponsoredVisas,
          },
          {
            title: 'Skilled Migration',
            body: 'Points-tested permanent residence via subclass 189, 190 and 491 — 9 guides covering the points test, assessments and state nomination.',
            icon: 'star',
            page: ROUTE.skilledMigration,
          },
          {
            title: 'Student Visas',
            body: 'Study in Australia on a subclass 500 student visa with a clear pathway to PR — 4 guides.',
            icon: 'graduationcap',
            page: ROUTE.studentVisas,
          },
          {
            title: 'Partner & Family',
            body: 'Onshore 820/801, offshore 309/100 and prospective marriage 300 partner visas — 5 guides.',
            icon: 'heart',
            page: ROUTE.partnerFamilyVisas,
          },
          {
            title: 'Visitor & Other',
            body: 'Bridging visas and Australian citizenship — staying lawfully and transitioning to permanent status.',
            icon: 'flag',
            page: ROUTE.bridgingVisas,
          },
          {
            title: 'Reviews & Complex',
            body: 'Visa refusals, ART merits review and complex cases — 2 guides to protect your right to remain.',
            icon: 'scale',
            page: ROUTE.visaRefusalReview,
          },
        ]
        return (
          <>
            <section style={{ background: GREY_BAND, padding: '80px 24px' }}>
              <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 48 }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, marginBottom: 8 }}>Visa Pathways</div>
                  <h2 style={{ fontSize: 32, fontWeight: 700, color: NAVY, margin: 0 }}>Browse all visa categories</h2>
                </div>
                <CardGrid cards={HUB_CARDS} columns={3} accent={NAVY} navigate={navigate} />
              </div>
            </section>

            {/* ── TRUST BAND ────────────────────────────────────── */}
            <section style={{ background: NAVY, padding: '40px 24px' }}>
              <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px 64px', alignItems: 'center' }}>
                {[
                  { label: 'MARN 2619467', sub: 'MARA Registered Agent' },
                  { label: '14 Years', sub: 'Migration experience' },
                  { label: '4 Offices', sub: 'Melbourne · Sydney · Brisbane · Perth' },
                  { label: 'OMARA', sub: 'Code of Conduct Compliant' },
                ].map(item => (
                  <div key={item.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: GOLD, letterSpacing: '-0.01em' }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 4, letterSpacing: '0.04em' }}>{item.sub}</div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )
      })()}

      {/* ── LEGACY ZIG-ZAG REMOVED — replaced by hub grid above ── */}
      {false && <section style={{ background: '#f8fafd', padding: '80px 0', borderTop: '1px solid #e8edf5' }}>
        {([
          {
            tag: 'Skilled Migration',
            heading: 'Your skills deserve\na pathway to permanence',
            body: "Australia's skilled migration program is points-based and competitive. We analyse your profile against the current invitation rounds, advise on the right subclass — 189, 190 or 491 — and manage your Expression of Interest through to grant.",
            pills: [
              { label: 'General Skilled Migration', href: '/skilled-migration' },
              { label: 'Skills in Demand (482)', href: '/skills-in-demand' },
              { label: 'Employer Nomination (186)', href: '/employer-nomination' },
              { label: 'National Innovation Visa', href: '/national-innovation' },
            ],
            cta: 'Explore skilled pathways →',
            href: '/skilled-migration',
            imgLeft: false,
            illustration: (
              <svg aria-hidden="true" viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                {/* Background blobs */}
                <circle cx="380" cy="80" r="120" fill="rgba(245,161,36,0.08)"/>
                <circle cx="100" cy="300" r="90" fill="rgba(27,43,94,0.06)"/>
                {/* City skyline silhouette */}
                <rect x="30" y="240" width="30" height="80" rx="3" fill="rgba(27,43,94,0.12)"/>
                <rect x="70" y="200" width="40" height="120" rx="3" fill="rgba(27,43,94,0.15)"/>
                <rect x="120" y="220" width="25" height="100" rx="3" fill="rgba(27,43,94,0.10)"/>
                <rect x="155" y="180" width="50" height="140" rx="3" fill="rgba(27,43,94,0.18)"/>
                <rect x="215" y="210" width="35" height="110" rx="3" fill="rgba(27,43,94,0.12)"/>
                <rect x="260" y="190" width="45" height="130" rx="3" fill="rgba(27,43,94,0.16)"/>
                <rect x="315" y="230" width="28" height="90" rx="3" fill="rgba(27,43,94,0.10)"/>
                <rect x="353" y="200" width="55" height="120" rx="3" fill="rgba(27,43,94,0.14)"/>
                <rect x="418" y="215" width="32" height="105" rx="3" fill="rgba(27,43,94,0.11)"/>
                {/* Ground line */}
                <rect x="20" y="318" width="440" height="2" rx="1" fill="rgba(27,43,94,0.1)"/>
                {/* Central document card */}
                <rect x="155" y="60" width="170" height="220" rx="14" fill="#ffffff" filter="url(#shadow1)"/>
                <defs><filter id="shadow1" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="rgba(27,43,94,0.14)"/></filter></defs>
                <rect x="175" y="85" width="80" height="8" rx="4" fill={NAVY} opacity="0.15"/>
                <rect x="175" y="103" width="130" height="6" rx="3" fill={NAVY} opacity="0.08"/>
                <rect x="175" y="118" width="110" height="6" rx="3" fill={NAVY} opacity="0.08"/>
                <rect x="175" y="133" width="120" height="6" rx="3" fill={NAVY} opacity="0.08"/>
                {/* Points badge */}
                <circle cx="290" cy="88" r="22" fill={GOLD}/>
                <text x="290" y="94" textAnchor="middle" fill={NAVY_DARK} fontSize="12" fontWeight="800" fontFamily="Inter,sans-serif">85</text>
                <text x="290" y="105" textAnchor="middle" fill={NAVY_DARK} fontSize="7" fontWeight="600" fontFamily="Inter,sans-serif">PTS</text>
                {/* Visa subclass chips */}
                <rect x="175" y="158" width="42" height="20" rx="10" fill={NAVY}/>
                <text x="196" y="172" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">189</text>
                <rect x="224" y="158" width="42" height="20" rx="10" fill={NAVY} opacity="0.7"/>
                <text x="245" y="172" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">190</text>
                <rect x="273" y="158" width="42" height="20" rx="10" fill={NAVY} opacity="0.5"/>
                <text x="294" y="172" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">491</text>
                {/* Approval tick */}
                <circle cx="240" cy="230" r="28" fill="rgba(52,168,83,0.12)"/>
                <circle cx="240" cy="230" r="20" fill="#34A853"/>
                <path d="M229 230l7 7 15-15" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Floating stat */}
                <rect x="330" y="100" width="110" height="56" rx="12" fill="#ffffff" filter="url(#shadow1)"/>
                <text x="385" y="122" textAnchor="middle" fill={NAVY} fontSize="20" fontWeight="800" fontFamily="Inter,sans-serif">186</text>
                <text x="385" y="138" textAnchor="middle" fill="#9ca3af" fontSize="9" fontFamily="Inter,sans-serif">Visa Subclass</text>
                {/* Floating flag */}
                <rect x="40" y="130" width="90" height="44" rx="10" fill="#ffffff" filter="url(#shadow1)"/>
                <text x="85" y="148" textAnchor="middle" fontSize="18">🇦🇺</text>
                <text x="85" y="164" textAnchor="middle" fill={NAVY} fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">Australia PR</text>
              </svg>
            ),
          },
          {
            tag: 'Family Visas',
            heading: 'Bringing families together\nacross borders',
            body: 'Distance from the people you love should be temporary. We handle partner, spouse, parent and child visa applications with the care and precision they deserve — and we stay with you through every stage, including any Tribunal review.',
            pills: [
              { label: 'Partner Visa', href: '/partner-visa' },
              { label: 'Parent Visa', href: '/parent-visa' },
              { label: 'Child Visa', href: '/child-visa' },
              { label: 'Family Visa', href: '/family-visa' },
            ],
            cta: 'Explore family pathways →',
            href: '/family-visa',
            imgLeft: true,
            illustration: (
              <svg aria-hidden="true" viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <circle cx="240" cy="190" r="150" fill="rgba(245,161,36,0.06)"/>
                <circle cx="240" cy="190" r="100" fill="rgba(27,43,94,0.04)"/>
                {/* World map dots (simplified) */}
                {[40,70,100,130,160,190,220,250,280,310,340,370,400,430].map((x,i) => (
                  [80,110,140,170,200,230,260,290].map((y,j) => (
                    (i+j)%3===0 ? <circle key={`${i}-${j}`} cx={x} cy={y} r="2.5" fill="rgba(27,43,94,0.1)"/> : null
                  ))
                ))}
                {/* Connection arc */}
                <path d="M130 200 Q240 80 350 200" stroke={GOLD} strokeWidth="2.5" strokeDasharray="8 5" opacity="0.7"/>
                {/* Origin person */}
                <circle cx="120" cy="195" r="32" fill={NAVY}/>
                <circle cx="120" cy="183" r="10" fill="rgba(255,255,255,0.9)"/>
                <path d="M98 212 Q120 202 142 212" stroke="rgba(255,255,255,0.9)" strokeWidth="2" fill="none"/>
                <text x="120" y="240" textAnchor="middle" fill={NAVY} fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">Overseas</text>
                {/* Destination family */}
                <circle cx="360" cy="185" r="44" fill={GOLD}/>
                <circle cx="348" cy="172" r="9" fill="rgba(27,43,94,0.9)"/>
                <circle cx="368" cy="170" r="9" fill="rgba(27,43,94,0.9)"/>
                <circle cx="358" cy="186" r="6" fill="rgba(27,43,94,0.7)"/>
                <path d="M334 200 Q358 190 382 200" stroke="rgba(27,43,94,0.9)" strokeWidth="2" fill="none"/>
                <text x="360" y="242" textAnchor="middle" fill={NAVY} fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">Australia</text>
                {/* Visa card */}
                <rect x="160" y="260" width="160" height="90" rx="12" fill="#ffffff" filter="url(#shadow2)"/>
                <defs><filter id="shadow2" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="8" stdDeviation="14" floodColor="rgba(27,43,94,0.13)"/></filter></defs>
                <rect x="172" y="274" width="60" height="7" rx="3.5" fill={NAVY} opacity="0.2"/>
                <rect x="172" y="288" width="136" height="5" rx="2.5" fill={NAVY} opacity="0.1"/>
                <rect x="172" y="300" width="110" height="5" rx="2.5" fill={NAVY} opacity="0.1"/>
                <rect x="172" y="316" width="50" height="18" rx="9" fill={GOLD}/>
                <text x="197" y="329" textAnchor="middle" fill={NAVY_DARK} fontSize="8" fontWeight="700" fontFamily="Inter,sans-serif">GRANTED</text>
                {/* Hearts */}
                <text x="240" y="145" textAnchor="middle" fontSize="22">❤️</text>
                <text x="200" y="120" textAnchor="middle" fontSize="14" opacity="0.5">💛</text>
                <text x="278" y="125" textAnchor="middle" fontSize="11" opacity="0.4">❤️</text>
              </svg>
            ),
          },
          {
            tag: 'Employer Sponsorship',
            heading: 'Sponsor the talent\nyour business needs',
            body: "Australia's labour market has changed. We guide employers through sponsorship approval, nomination and visa lodgement — and advise on obligations, compliance, and the transition from temporary to permanent residence for your staff.",
            pills: [
              { label: 'Standard Business Sponsorship', href: '/employer-sponsored-visas' },
              { label: '482 Nomination', href: '/skills-in-demand' },
              { label: '186 Direct Entry', href: '/employer-nomination' },
              { label: 'Labour Agreement', href: '/labour-agreement' },
            ],
            cta: 'Talk to our employer team →',
            href: '/employer-sponsored-visas',
            imgLeft: false,
            illustration: (
              <svg aria-hidden="true" viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <defs><filter id="shadow3" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="rgba(27,43,94,0.12)"/></filter></defs>
                <circle cx="100" cy="100" r="100" fill="rgba(245,161,36,0.07)"/>
                <circle cx="380" cy="300" r="110" fill="rgba(27,43,94,0.05)"/>
                {/* Central handshake area */}
                <rect x="120" y="120" width="240" height="160" rx="20" fill="#ffffff" filter="url(#shadow3)"/>
                {/* Left person arm */}
                <rect x="100" y="175" width="110" height="32" rx="16" fill={NAVY} opacity="0.85"/>
                {/* Right person arm */}
                <rect x="270" y="175" width="110" height="32" rx="16" fill={GOLD}/>
                {/* Handshake overlap */}
                <ellipse cx="240" cy="191" rx="28" ry="18" fill={NAVY}/>
                <path d="M222 191 Q240 180 258 191 Q240 202 222 191z" fill={GOLD} opacity="0.9"/>
                {/* Labels */}
                <rect x="130" y="135" width="80" height="22" rx="11" fill="rgba(27,43,94,0.08)"/>
                <text x="170" y="150" textAnchor="middle" fill={NAVY} fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">EMPLOYER</text>
                <rect x="270" y="135" width="70" height="22" rx="11" fill="rgba(245,161,36,0.15)"/>
                <text x="305" y="150" textAnchor="middle" fill="#f5a124" fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">EMPLOYEE</text>
                {/* Tick approved */}
                <circle cx="240" cy="240" r="18" fill="#34A853"/>
                <path d="M231 240l6 6 13-12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Floating cards */}
                <rect x="30" y="200" width="88" height="60" rx="12" fill="#ffffff" filter="url(#shadow3)"/>
                <text x="74" y="222" textAnchor="middle" fill={NAVY} fontSize="18" fontWeight="800" fontFamily="Inter,sans-serif">482</text>
                <text x="74" y="238" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="Inter,sans-serif">TSS Visa</text>
                <rect x="362" y="200" width="88" height="60" rx="12" fill="#ffffff" filter="url(#shadow3)"/>
                <text x="406" y="222" textAnchor="middle" fill={GOLD} fontSize="18" fontWeight="800" fontFamily="Inter,sans-serif">186</text>
                <text x="406" y="238" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="Inter,sans-serif">Perm. Visa</text>
                {/* Arrow progression */}
                <path d="M118 231 L134 231" stroke={NAVY} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4"/>
                <path d="M346 231 L362 231" stroke={GOLD} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4"/>
                {/* People silhouettes top */}
                {[140,200,260,320].map((x,i) => (
                  <g key={x}>
                    <circle cx={x} cy="82" r="10" fill={i % 2 === 0 ? NAVY : GOLD} opacity={0.7 + i*0.05}/>
                    <path d={`M${x-10} 100 Q${x} 93 ${x+10} 100`} stroke={i % 2 === 0 ? NAVY : GOLD} strokeWidth="1.5" fill="none" opacity="0.6"/>
                  </g>
                ))}
              </svg>
            ),
          },
          {
            tag: 'Student Visas',
            heading: 'Study in Australia —\nwe handle the paperwork',
            body: 'From choosing the right course and institution to meeting genuine student criteria and planning your post-study pathway, we support international students at every step — and help you stay on after graduation.',
            pills: [
              { label: 'Student Visa (500)', href: '/student-visa' },
              { label: 'Post-Study Work Stream', href: '/graduate-visa' },
              { label: 'Student Guardian Visa', href: '/student-guardian' },
              { label: 'Graduate Visa (485)', href: '/graduate-visa' },
            ],
            cta: 'Explore study pathways →',
            href: '/student-visa',
            imgLeft: true,
            illustration: (
              <svg aria-hidden="true" viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <defs><filter id="shadow4" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="8" stdDeviation="14" floodColor="rgba(27,43,94,0.13)"/></filter></defs>
                <circle cx="350" cy="120" r="120" fill="rgba(245,161,36,0.07)"/>
                <circle cx="130" cy="300" r="80" fill="rgba(27,43,94,0.05)"/>
                {/* Graduation cap */}
                <rect x="180" y="130" width="120" height="10" rx="5" fill={NAVY}/>
                <polygon points="240,90 290,130 240,150 190,130" fill={NAVY}/>
                <line x1="290" y1="130" x2="290" y2="165" stroke={NAVY} strokeWidth="3"/>
                <circle cx="290" cy="170" r="7" fill={GOLD}/>
                {/* Tassel */}
                <line x1="240" y1="90" x2="270" y2="78" stroke={GOLD} strokeWidth="2"/>
                <rect x="266" y="68" width="12" height="20" rx="3" fill={GOLD}/>
                {/* Diploma scroll */}
                <rect x="130" y="185" width="220" height="140" rx="14" fill="#ffffff" filter="url(#shadow4)"/>
                <rect x="145" y="202" width="90" height="8" rx="4" fill={NAVY} opacity="0.2"/>
                <rect x="145" y="218" width="190" height="5" rx="2.5" fill={NAVY} opacity="0.08"/>
                <rect x="145" y="231" width="170" height="5" rx="2.5" fill={NAVY} opacity="0.08"/>
                <rect x="145" y="244" width="180" height="5" rx="2.5" fill={NAVY} opacity="0.08"/>
                {/* Gold seal */}
                <circle cx="290" cy="286" r="24" fill={GOLD} opacity="0.15"/>
                <circle cx="290" cy="286" r="17" fill={GOLD}/>
                <text x="290" y="291" textAnchor="middle" fill={NAVY_DARK} fontSize="9" fontWeight="800" fontFamily="Inter,sans-serif">500</text>
                {/* Pathway arrow cards */}
                <rect x="30" y="160" width="90" height="48" rx="12" fill="#ffffff" filter="url(#shadow4)"/>
                <text x="75" y="179" textAnchor="middle" fill={NAVY} fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">Student</text>
                <text x="75" y="192" textAnchor="middle" fill={GOLD} fontSize="12" fontWeight="800" fontFamily="Inter,sans-serif">500</text>
                <path d="M122 184 L138 184" stroke={NAVY} strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
                <path d="M136 181 L140 184 L136 187" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
                <rect x="355" y="160" width="96" height="48" rx="12" fill="#ffffff" filter="url(#shadow4)"/>
                <text x="403" y="179" textAnchor="middle" fill={NAVY} fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">Graduate</text>
                <text x="403" y="192" textAnchor="middle" fill={GOLD} fontSize="12" fontWeight="800" fontFamily="Inter,sans-serif">485</text>
                {/* Stars */}
                {[[60,80],[400,90],[430,220],[50,280]].map(([x,y],i) => (
                  <text key={i} x={x} y={y} textAnchor="middle" fontSize={i%2===0?16:11} opacity={0.3+i*0.08}>⭐</text>
                ))}
              </svg>
            ),
          },
        ] as { tag: string; heading: string; body: string; pills: { label: string; href: string }[]; cta: string; href: string; imgLeft: boolean; illustration: React.ReactNode }[]).map((row, i) => (
          <div key={row.tag as string} style={{
            maxWidth: 1160, margin: '0 auto', padding: '0 24px',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, alignItems: 'stretch',
            marginBottom: i < 3 ? 4 : 0,
          }}>
            {/* Illustration panel — left */}
            {row.imgLeft && (
              <div style={{ minHeight: 420, background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px', overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(248,250,253,0) 40%, #f8fafd 100%)', pointerEvents: 'none', zIndex: 1 }} />
                <div style={{ width: '100%', opacity: 0.92 }}>{row.illustration}</div>
              </div>
            )}
            {/* Text panel */}
            <div style={{ background: '#ffffff', padding: '60px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, marginBottom: 14 }}>{row.tag}</div>
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(26px, 2.8vw, 38px)', fontWeight: 300, lineHeight: 1.15, color: NAVY, margin: '0 0 20px', letterSpacing: '-0.02em', whiteSpace: 'pre-line' }}>
                {row.heading}
              </h2>
              <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.75, margin: '0 0 28px' }}>{row.body}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                {row.pills.map(p => (
                  <a key={p.label} href={p.href}
                    onClick={p.href === '/employer-sponsored-visas' ? (e) => { e.preventDefault(); navigate('employer-sponsored-visas') } : undefined}
                    style={{ padding: '6px 15px', borderRadius: 100, border: '1.5px solid rgba(27,43,94,0.22)', fontSize: 12, fontWeight: 500, color: NAVY, background: 'rgba(27,43,94,0.04)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.15s' }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = NAVY; el.style.color = '#fff'; el.style.borderColor = NAVY; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(27,43,94,0.04)'; el.style.color = NAVY; el.style.borderColor = 'rgba(27,43,94,0.22)'; }}
                  >{p.label}</a>
                ))}
              </div>
              <a href={row.href}
                onClick={row.href === '/employer-sponsored-visas' ? (e) => { e.preventDefault(); navigate('employer-sponsored-visas') } : undefined}
                style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, color: NAVY_DARK, textDecoration: 'none', borderBottom: `2px solid ${GOLD}`, paddingBottom: 2, transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#f5a124'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = NAVY_DARK}
              >
                {row.cta}
              </a>
            </div>
            {/* Illustration panel — right */}
            {!row.imgLeft && (
              <div style={{ minHeight: 420, background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px', overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(248,250,253,0) 40%, #f8fafd 100%)', pointerEvents: 'none', zIndex: 1 }} />
                <div style={{ width: '100%', opacity: 0.92 }}>{row.illustration}</div>
              </div>
            )}
          </div>
        ))}
      </section>}

      <ProcessJourney />

      {/* ── TOOLS STRIP ───────────────────────────────────── */}
      <section style={{ background: NAVY, padding: '48px 24px' }}>
        <div className="tools-strip-inner" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, marginBottom: 8 }}>FREE TOOLS</div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Check your position in minutes</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>Points calculator, occupation search, English score converter and more — free and indicative.</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {([
                { label: 'Points Calculator', route: 'tools' },
                { label: 'Occupation Search', route: 'tools' },
                { label: 'English Converter', route: 'tools' },
              ] as { label: string; route: string }[]).map(chip => (
                <button
                  key={chip.label}
                  onClick={() => navigate(chip.route)}
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', fontSize: 12, fontWeight: 600, padding: '6px 14px', borderRadius: 20, cursor: 'pointer' }}
                >{chip.label}</button>
              ))}
            </div>
          </div>
          <button
            onClick={() => navigate('tools')}
            style={{ background: GOLD, color: NAVY, border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}
          >Explore all tools →</button>
        </div>
      </section>

      {/* ── ACCREDITATIONS ────────────────────────────────── */}
      <section style={{ background: '#f8fafd', padding: '72px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>Registration</div>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 300, lineHeight: 1.1, color: NAVY, margin: '0 auto 14px', letterSpacing: '-0.03em' }}>
              Credentials &amp; <em style={{ fontStyle: 'italic', color: GOLD }}>Registration</em>
            </h2>
            <p style={{ fontSize: 14, color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
              Regulated and recognised by Australia's foremost professional bodies.
            </p>
          </div>

          {/* Badge cards */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', gap: 24, flexWrap: 'wrap' }}>

            {/* MARA badge */}
            <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 16, padding: '32px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, minWidth: 200, flex: '1 1 200px', maxWidth: 260, boxShadow: '0 2px 16px rgba(27,43,94,0.06)' }}>
              <div style={{ height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/src/imports/mara-badge-2619467-hires.png" alt="MARA Registration Badge — 2619467" style={{ maxHeight: 110, maxWidth: 160, objectFit: 'contain' }} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 3 }}>MARA Registered Agent</div>
                <div style={{ fontSize: 12, color: '#6b7280' }}>MARN 2619467</div>
                <a href="https://www.mara.gov.au" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: GOLD, fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: 6 }}>www.mara.gov.au →</a>
              </div>
            </div>

            {/* MIA */}
            <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 16, padding: '32px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, minWidth: 200, flex: '1 1 200px', maxWidth: 260, boxShadow: '0 2px 16px rgba(27,43,94,0.06)' }}>
              <div style={{ height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/src/imports/logo-preview-selection.png" alt="Migration Institute of Australia logo" style={{ maxHeight: 110, maxWidth: 160, objectFit: 'contain' }} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 3 }}>Migration Institute of Australia</div>
                <div style={{ fontSize: 12, color: '#6b7280' }}>Professional Member</div>
              </div>
            </div>

            {/* QEAC */}
            <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 16, padding: '32px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, minWidth: 200, flex: '1 1 200px', maxWidth: 260, boxShadow: '0 2px 16px rgba(27,43,94,0.06)' }}>
              <div style={{ height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/src/imports/Qualified-australian-agent-logo.png" alt="QEAC — Qualified Education Agent Counsellors logo" style={{ maxHeight: 110, maxWidth: 180, objectFit: 'contain' }} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 3 }}>QEAC Certified</div>
                <div style={{ fontSize: 12, color: '#6b7280' }}>Qualified Education Agent Counsellors</div>
              </div>
            </div>

            {/* DoHA / OMARA compliance */}
            <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 16, padding: '32px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, minWidth: 200, flex: '1 1 200px', maxWidth: 260, boxShadow: '0 2px 16px rgba(27,43,94,0.06)' }}>
              <div style={{ height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 96, height: 96, borderRadius: 20, background: `linear-gradient(135deg, ${NAVY} 0%, #1e3aaa 100%)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(245,161,36,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                  <span style={{ fontSize: 9, fontWeight: 800, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>DoHA</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 3 }}>DoHA Regulated</div>
                <div style={{ fontSize: 12, color: '#6b7280' }}>OMARA Code of Conduct Compliant</div>
              </div>
            </div>

          </div>

          {/* Credential chips — driven by TRUST_LOGOS */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12, marginTop: 36 }}>
            {TRUST_LOGOS.map(t => (
              <div key={t.name} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#f5f7fb', border: '1px solid #e2e8f0', borderRadius: 100, padding: '8px 18px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                <span style={{ fontSize: 13, fontWeight: 600, color: NAVY, fontFamily: 'Inter, system-ui, sans-serif' }}>{t.name}</span>
                <span style={{ fontSize: 11, color: '#6b7280', fontFamily: 'Inter, system-ui, sans-serif' }}>{t.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS REMOVED — placeholder reviews cannot be displayed.
          This section may return only when real, consented client reviews
          are collected and wired to the actual Google Business Profile.
          See PAGE_STANDARD.md pre-launch checklist. */}

      {/* ── NEWS ──────────────────────────────────────────── */}
      <section id="news" style={{ background: GREY_BAND, padding: '96px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, marginBottom: 14 }}>Latest Updates</div>
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 300, lineHeight: 1.08, color: NAVY, margin: 0, letterSpacing: '-0.03em' }}>
                Migration news &amp; <em style={{ fontStyle: 'italic', color: GOLD }}>policy changes</em>
              </h2>
            </div>
            <a href="#"
              style={{ fontSize: 13, fontWeight: 700, color: NAVY_DARK, textDecoration: 'none', borderBottom: `2px solid ${GOLD}`, paddingBottom: 2, whiteSpace: 'nowrap', flexShrink: 0, transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = GOLD}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = NAVY_DARK}
            >View all articles →</a>
          </div>

          {/* Featured + side cards */}
          <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'stretch' }}>

            {/* Featured card — navy panel, no image */}
            {NEWS[0] && (
              <article
                style={{ gridRow: '1 / 3', background: NAVY, borderRadius: 16, padding: '40px 36px 36px', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'box-shadow 0.2s, transform 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 16px 48px rgba(13,22,50,0.35)'; el.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = 'none'; el.style.transform = 'none'; }}
              >
                {/* Category + date */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                  <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: NAVY_DARK, background: GOLD, padding: '4px 12px', borderRadius: 100 }}>{NEWS[0].category}</span>
                  <span style={{ fontSize: 11, color: 'rgba(245,161,36,0.7)', fontWeight: 500 }}>{NEWS[0].date}</span>
                </div>
                {/* Headline */}
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(22px, 2.2vw, 30px)', fontWeight: 400, color: '#ffffff', margin: '0 0 20px', lineHeight: 1.2, letterSpacing: '-0.01em', flex: 1 }}>
                  {NEWS[0].title.startsWith('[DRAFT]') && (
                    <span style={{ display: 'inline-block', background: '#f59e0b', color: NAVY, fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 4, letterSpacing: '0.08em', marginRight: 8, verticalAlign: 'middle', marginBottom: 4 }}>DRAFT</span>
                  )}
                  {NEWS[0].title.startsWith('[DRAFT]') ? NEWS[0].title.replace('[DRAFT] ', '') : NEWS[0].title}
                </h3>
                {/* Standfirst */}
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: '0 0 32px', WebkitLineClamp: 3, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical' as const }}>
                  {NEWS[0].standfirst}
                </p>
                {/* Read more */}
                <a href="#" style={{ fontSize: 13, fontWeight: 700, color: GOLD, textDecoration: 'none', alignSelf: 'flex-start', borderBottom: `1.5px solid rgba(245,161,36,0.4)`, paddingBottom: 2, transition: 'border-color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = GOLD}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,161,36,0.4)'}
                >Read more →</a>
              </article>
            )}

            {/* Side cards — SURFACE, gold hairline top, no image */}
            {NEWS.slice(1).map((n, i) => (
              <article key={i}
                style={{ background: '#ffffff', borderRadius: 16, borderTop: `3px solid ${GOLD}`, padding: '28px 28px 28px', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'box-shadow 0.2s, transform 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 8px 32px rgba(27,43,94,0.1)'; el.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = 'none'; el.style.transform = 'none'; }}
              >
                {/* Category + date on one line */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, background: 'rgba(245,161,36,0.10)', border: `1px solid rgba(245,161,36,0.28)`, padding: '3px 10px', borderRadius: 100 }}>{n.category}</span>
                  <span style={{ fontSize: 11, color: '#9ca3af', fontWeight: 500 }}>{n.date}</span>
                </div>
                {/* Headline */}
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 400, color: NAVY, margin: '0 0 12px', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                  {n.title.startsWith('[DRAFT]') && (
                    <span style={{ display: 'inline-block', background: '#f59e0b', color: NAVY, fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 4, letterSpacing: '0.08em', marginRight: 8, verticalAlign: 'middle', marginBottom: 3 }}>DRAFT</span>
                  )}
                  {n.title.startsWith('[DRAFT]') ? n.title.replace('[DRAFT] ', '') : n.title}
                </h3>
                {/* One-line standfirst — clamped to 2 lines */}
                <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.65, margin: '0 0 20px', flex: 1, WebkitLineClamp: 2, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical' as const }}>
                  {n.standfirst}
                </p>
                {/* Read more */}
                <a href="#" style={{ fontSize: 12, fontWeight: 700, color: NAVY, textDecoration: 'none', alignSelf: 'flex-start', borderBottom: `1.5px solid ${GOLD}`, paddingBottom: 1, transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = GOLD}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = NAVY}
                >Read more →</a>
              </article>
            ))}

          </div>

          {/* Editorial footnote */}
          <p style={{ fontSize: 12, fontStyle: 'italic', color: '#9ca3af', marginTop: 24, textAlign: 'right' }}>
            Draft updates shown for layout — verified articles will replace these before launch.
          </p>

        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────── */}
      <section id="contact" style={{ background: HERO_GRAD, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 440, alignItems: 'center' }}>

          {/* LEFT — copy */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '72px 48px 72px 64px' }}>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(28px, 3.2vw, 46px)', fontWeight: 700, lineHeight: 1.1, color: '#1E1E2A', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
              Ready to start your<br />Australian journey?
            </h2>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.65, maxWidth: 380, margin: '0 0 28px' }}>
              Reach out to our registered migration experts, and we will be happy to guide you through the right visa pathway for your situation.
            </p>

            {/* CTA button */}
            <div style={{ marginBottom: 28 }}>
              <a href="#" onClick={(e) => { e.preventDefault(); document.querySelector('#contact form')?.scrollIntoView({ behavior: 'smooth' }) }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, backgroundColor: NAVY, color: '#fff', padding: '14px 28px', borderRadius: 7, fontSize: 15, fontWeight: 600, textDecoration: 'none', transition: 'background-color 0.2s, transform 0.15s' }}
                onMouseEnter={(e) => { const el = e.currentTarget; el.style.backgroundColor = GOLD; el.style.color = NAVY_DARK; el.style.transform = 'translateY(-2px)' }}
                onMouseLeave={(e) => { const el = e.currentTarget; el.style.backgroundColor = NAVY; el.style.color = '#fff'; el.style.transform = 'translateY(0)' }}
              >
                Book Free Consultation
              </a>
            </div>


          </div>

          {/* RIGHT — Founder panel */}
          <div style={{ position: 'relative', minHeight: 460, overflow: 'hidden', alignSelf: 'stretch', background: 'linear-gradient(135deg, #1B2B5E 0%, #0d1632 100%)' }}>
            <img
              src={navpreetPhoto}
              alt="Navpreet Aulakh — Registered Migration Agent, Nanak Migration Group"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,22,50,0.92) 0%, rgba(13,22,50,0.35) 45%, rgba(13,22,50,0.08) 100%)' }} />
            {/* credential card */}
            <div style={{ position: 'absolute', bottom: '12%', left: 24, zIndex: 2, display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.2)', borderLeft: `3px solid ${GOLD}`, borderRadius: 8, padding: '12px 18px' }}>
              <img src={navpreetPhoto} alt="Navpreet Aulakh" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top center', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>Navpreet Aulakh</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 1 }}>Founder, Registered Migration Agent</div>
                <div style={{ fontSize: 11, color: GOLD, fontWeight: 600, marginTop: 2, letterSpacing: '0.02em' }}>MARN 2619467</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form band below */}
        <div style={{ background: '#fff', padding: '48px 24px 64px', borderTop: '1px solid #e8eaf0' }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── OFFICE LOCATIONS ──────────────────────────────── */}
      <section style={{ background: '#F5F5F7', padding: '80px 24px', borderTop: '1px solid #e4e4e8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>Where to Find Us</div>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 400, lineHeight: 1.1, color: NAVY, margin: 0, letterSpacing: '-0.02em' }}>
              Our Offices Around <em style={{ fontStyle: 'italic', color: GOLD }}>Australia</em>
            </h2>
          </div>

          {/* 5 office cards */}
          <p style={{ textAlign: 'center', fontSize: 13, color: '#9ca3af', marginBottom: 20, lineHeight: 1.6 }}>
            Office addresses to be confirmed before launch.
          </p>
          <div className="grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
            {[
              { city: 'Melbourne', label: 'Head Office', address: 'Level 8, 350 Collins St', suburb: 'Melbourne VIC 3000', maps: 'https://maps.google.com/?q=350+Collins+St+Melbourne+VIC+3000' },
              { city: 'Sydney', label: 'NSW Office', address: '81–83 Campbell St', suburb: 'Surry Hills NSW 2010', maps: 'https://maps.google.com/?q=81+Campbell+St+Surry+Hills+NSW+2010' },
              { city: 'Brisbane', label: 'QLD Office', address: 'Suite 1681, 17 Gould Rd', suburb: 'Herston QLD 4006', maps: 'https://maps.google.com/?q=17+Gould+Road+Herston+QLD+4006' },
              { city: 'Perth', label: 'WA Office', address: 'Level 2, 1 Altona St', suburb: 'West Perth WA 6005', maps: 'https://maps.google.com/?q=1+Altona+St+West+Perth+WA+6005' },
              { city: 'Geelong', label: 'Regional VIC', address: 'Suite 1, 41 Malop St', suburb: 'Geelong VIC 3220', maps: 'https://maps.google.com/?q=41+Malop+St+Geelong+VIC+3220' },
            ].map((office, i) => (
              <div key={office.city} style={{
                background: '#ffffff',
                borderRadius: 16,
                padding: '28px 22px 24px',
                border: `1.5px solid rgba(245,161,36,0.35)`,
                boxShadow: '0 4px 20px rgba(245,161,36,0.08)',
                display: 'flex', flexDirection: 'column', gap: 0,
                position: 'relative',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 12px 36px rgba(27,43,94,0.13)'; el.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 4px 20px rgba(245,161,36,0.08)'; el.style.transform = 'none' }}
              >
                {/* Head office badge */}
                {i === 0 && (
                  <div style={{ position: 'absolute', top: -11, left: 18, fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', background: GOLD, color: NAVY_DARK, padding: '3px 10px', borderRadius: 100 }}>
                    Head Office
                  </div>
                )}

                {/* Pin icon */}
                <div style={{ marginBottom: 16 }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill={GOLD} opacity="0.2"/>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke={GOLD} strokeWidth="1.5" fill="none"/>
                    <circle cx="12" cy="9" r="2.5" fill={GOLD}/>
                  </svg>
                </div>

                {/* City + label */}
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 4 }}>{office.label}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 10px', letterSpacing: '-0.01em' }}>{office.city}</h3>

                {/* Address */}
                <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.55, margin: '0 0 20px', flexGrow: 1 }}>
                  {office.address},<br />{office.suburb}
                </p>

                {/* Directions CTA */}
                <a
                  href={office.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    padding: '10px 0', borderRadius: 9,
                    background: GOLD,
                    color: NAVY_DARK,
                    textDecoration: 'none', fontSize: 13, fontWeight: 700,
                    border: 'none',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = GOLD_LIGHT }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = GOLD }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                  </svg>
                  Get Directions
                </a>
              </div>
            ))}
          </div>

          {/* Subtext */}
          <p style={{ textAlign: 'center', fontSize: 12.5, color: '#9ca3af', marginTop: 32, lineHeight: 1.6 }}>
            All consultations available in-person or via video — Australia-wide and internationally.
          </p>

        </div>
      </section>

      <FaqSection />

      <CtaBand
        title="Ready to start your visa journey?"
        body="Book a no-obligation consultation with a registered migration agent."
        primaryCta={{ label: 'Book a Consultation', page: 'book-consultation' }}
        accent={GOLD}
        navigate={navigate}
      />
      <ComplianceDisclaimer />

      <SiteFooter navigate={navigate} />

      {/* ── STICKY MOBILE CTA ─────────────────────────────── */}
      {showSticky && (
        <div
          className="sticky-mobile-cta"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: NAVY,
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 999,
            boxShadow: '0 -4px 16px rgba(0,0,0,0.2)',
          }}
        >
          <span style={{ color: '#ffffff', fontSize: 12 }}>Free 30-minute consultation</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="tel:1300644728" style={{ display: 'flex', alignItems: 'center', color: '#ffffff' }} aria-label="Call us">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.29 6.29l.52-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
              </svg>
            </a>
            <button
              onClick={() => navigate('contact')}
              style={{ background: GOLD, color: NAVY, border: 'none', padding: '10px 20px', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}
            >Book Free Consultation</button>
          </div>
        </div>
      )}
    </div>
  )
}
