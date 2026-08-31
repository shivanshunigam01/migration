import React, { useState } from 'react'
import { GOLD, GOLD_LIGHT, NAVY, NAVY_DARK, NAVY_MID, NAVY_GRAD, HERO_GRAD, CAT_STUDENT, CAT_SKILLED } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import Icon from '@/components/ui/Icon'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  SectionHeading,
  FaqAccordion,
  CtaBand,
  ComplianceDisclaimer,
  AnswerBox,
  RelatedPages,
} from '@/components/page'
import type { RelatedPage } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const CURRENT_AS_AT = 'August 2026'

const STUDENT_RELATED: RelatedPage[] = [
  { title: 'Student Visa (500)', desc: 'Full details of the subclass 500 student visa.', icon: 'graduationcap', page: 'student-visa-500' },
  { title: 'Genuine Student Requirement', desc: 'The GS assessment every student visa applicant must pass.', icon: 'check', page: 'genuine-student-requirement' },
  { title: 'Student to PR Pathway', desc: 'How to transition from student to permanent resident.', icon: 'arrowright', page: 'student-to-pr-pathway' },
  { title: 'Temporary Graduate (485)', desc: 'Work in Australia after completing your degree.', icon: 'star', page: 'temporary-graduate-485' },
]

const GREEN = GOLD
const BLUE = CAT_STUDENT
const PURPLE = CAT_SKILLED
const TEAL = CAT_STUDENT

const DISCLAIMER = 'Figures current as at 1 July 2026 — verify with Home Affairs'

/* ── Checklist items ─────────────────────────────────────── */
const CHECKLIST = [
  {
    label: 'Confirmation of Enrolment (CoE)',
    desc: 'Issued by your CRICOS-registered institution after accepting an offer and paying a deposit. Required before you can lodge.',
    icon: 'clipboard',
  },
  {
    label: 'Genuine Student (GS) statement',
    desc: 'Written statement addressing your reasons for studying in Australia, ties to home country, and plans after your course. Replaced GTE on 23 March 2024.',
    icon: 'bookopen',
  },
  {
    label: 'Financial capacity evidence',
    desc: 'Bank statements covering tuition, living costs (~$29,710/yr) and return airfare. DHA assesses your ability to fund the entire course duration.',
    icon: 'dollar',
  },
  {
    label: 'English test results',
    desc: 'IELTS, TOEFL, PTE Academic or Cambridge. Minimum scores vary by institution and course. Some nationalities are exempt.',
    icon: 'hash',
  },
  {
    label: 'Overseas Student Health Cover (OSHC)',
    desc: 'Mandatory health insurance for the full duration of your visa. Must be purchased before lodgement from a DHA-approved provider.',
    icon: 'shield',
  },
  {
    label: 'Health and character checks',
    desc: 'Chest X-ray or medical examination (depends on country of passport and duration of stay). Police clearance may be required.',
    icon: 'check',
  },
]

/* ── Card grid ───────────────────────────────────────────── */
const CARDS = [
  {
    code: '500',
    name: 'Student Visa',
    tag: 'Core visa',
    tagColor: NAVY,
    summary: 'Study full-time at a CRICOS-registered institution. Work up to 48 hours per fortnight during term. Bring eligible dependants.',
    route: 'student-visa-500',
  },
  {
    code: '590',
    name: 'Student Guardian Visa',
    tag: 'For parents',
    tagColor: PURPLE,
    summary: 'Allows a parent or relative to accompany a student under 18 studying in Australia. Must not work more than a limited amount.',
    route: null,
  },
  {
    code: 'GS',
    name: 'Genuine Student Requirement',
    tag: 'Since 23 Mar 2024',
    tagColor: TEAL,
    summary: 'Replaced the Genuine Temporary Entrant (GTE) test. Assessed holistically — your statement, course choice, financial position, and ties to home country.',
    route: null,
  },
  {
    code: '$$$',
    name: 'Financial Capacity',
    tag: 'Common refusal reason',
    tagColor: '#dc2626',
    summary: 'DHA requires evidence of funds for tuition, living costs (~$29,710/yr) and return airfare for each year of the course. Incomplete evidence is a leading cause of refusal.',
    route: null,
  },
  {
    code: '→PR',
    name: 'Student to PR Pathway',
    tag: 'After graduation',
    tagColor: GREEN,
    summary: '500 → 485 Temporary Graduate → skills assessment → EOI → 189/190/491 permanent visa. Course choice and occupation are critical to this pathway.',
    route: 'student-to-pr-pathway',
  },
  {
    code: 'PR↑',
    name: 'Courses with PR Prospects',
    tag: 'Planning ahead',
    tagColor: GOLD,
    summary: 'Not all qualifications lead to skilled migration. ANZSCO demand, skills assessment body, and state nomination lists determine whether your degree opens a PR pathway.',
    route: null,
  },
]

/* ── Costs table ─────────────────────────────────────────── */
const COSTS = [
  { item: 'Visa application charge (primary applicant)', amount: '~$710', note: 'As at 1 July 2026' },
  { item: 'Visa application charge (secondary — adult)', amount: '~$530', note: 'Per additional adult' },
  { item: 'Visa application charge (secondary — child)', amount: '~$180', note: 'Per dependent child' },
  { item: 'OSHC — single, 12 months', amount: '~$636–$760', note: 'Provider-dependent; budget ~$65/month' },
  { item: 'OSHC — couple, 12 months', amount: '~$1,440–$1,700', note: 'Provider-dependent' },
  { item: 'Living-cost evidence threshold', amount: '$29,710 / yr', note: 'Per student; additional amounts for dependants' },
  { item: 'Tuition — undergraduate degree', amount: '$20,000–$45,000/yr', note: 'Varies by institution and course; CRICOS-registered only' },
  { item: 'Tuition — postgraduate research', amount: '$18,000–$42,000/yr', note: 'Varies; some scholarships available' },
  { item: 'Tuition — vocational (TAFE/RTO)', amount: '$4,000–$22,000/yr', note: 'Certificate to Advanced Diploma level' },
]

/* ── Process steps ───────────────────────────────────────── */
const STEPS = [
  {
    num: '01',
    title: 'Choose your course and institution',
    body: 'Your institution must be CRICOS-registered and your course must lead to a CRICOS-listed qualification. Course choice affects your work rights, PR pathway prospects, and Genuine Student assessment.',
    timing: 'Before anything else',
  },
  {
    num: '02',
    title: 'Receive your Confirmation of Enrolment (CoE)',
    body: 'After accepting the offer and paying a deposit, your institution issues a CoE. You cannot lodge without it. Check the CoE details carefully — errors can cause delays.',
    timing: 'After offer accepted',
  },
  {
    num: '03',
    title: 'Prepare your Genuine Student statement and documents',
    body: "Write a clear, honest GS statement addressing why you're studying in Australia, your plans for your study, and your ties to home. Compile financial evidence, English results, OSHC, and health checks.",
    timing: '4–8 weeks',
  },
  {
    num: '04',
    title: 'Lodge your application via ImmiAccount',
    body: 'Your registered migration agent lodges the application through ImmiAccount, attaches all documents, and pays the visa application charge. A bridging visa is granted if you are already onshore.',
    timing: 'Day of lodgement',
  },
  {
    num: '05',
    title: 'Decision and travel',
    body: 'DHA processes your application. Median processing for straightforward 500 applications is 4–8 weeks, but complex cases can take longer. Once granted, check your visa grant notice for conditions — especially Condition 8105 (work restriction).',
    timing: '4–16 weeks (median)',
  },
]

/* ── FAQs ────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'What is the Genuine Student (GS) requirement and how is it different from the old GTE test?',
    a: "The Genuine Student requirement replaced the Genuine Temporary Entrant (GTE) test on 23 March 2024. Both assess whether your primary purpose is study, but the GS requirement is evaluated as a holistic, positive test — DHA assesses whether you are a genuine student, not merely whether you intend to leave Australia after your course. Your GS statement, choice of course, financial position, ties to your home country, and immigration history are all considered. There is no set word count or format for the statement — but it must directly and honestly address the relevant factors. Our agents review every GS statement before lodgement.",
  },
  {
    q: 'How many hours can I work on a student visa?',
    a: "From 1 July 2023, the work limit returned to 48 hours per fortnight during term time after a temporary unlimited work period during the pandemic. During scheduled course breaks (holidays), there is no work restriction. If you breach the 48-hour condition, your visa may be cancelled. Note that 48 hours per fortnight applies per student — your partner on a secondary application may also have work rights, but these are separate. Figures current as at 1 July 2026 — verify with Home Affairs.",
  },
  {
    q: 'Can my family come with me on my student visa?',
    a: "A partner (spouse or de facto) and dependent children can be included as secondary applicants on your student visa. Your partner will typically receive limited work rights (not unlimited). A parent or relative accompanying a student under 18 must apply for the Subclass 590 Student Guardian Visa separately — they cannot be included as a secondary applicant on the 500.",
  },
  {
    q: 'What financial evidence does DHA require?',
    a: "DHA requires evidence that you can fund your tuition, living costs and return airfare for the entire course duration. The living-cost evidence threshold is approximately $29,710 per year per student as at 1 July 2026, with additional amounts for a partner (~$10,345/yr) and each child (~$4,449/yr). Evidence typically includes 3–6 months of bank statements, scholarship letters, loan approvals, or statutory declarations from sponsors. Figures current as at 1 July 2026 — verify with Home Affairs.",
  },
  {
    q: 'What is OSHC and is it mandatory?',
    a: "Overseas Student Health Cover (OSHC) is mandatory health insurance for all international students in Australia on a student visa. It must cover the full duration of your visa — from the day you arrive until the day you leave. OSHC must be purchased from a DHA-approved provider before your visa is granted. Students from Belgium, Norway and Sweden may use reciprocal health care arrangements instead. OSHC typically costs $60–$80 per month for a single student as at 1 July 2026.",
  },
  {
    q: 'What is the pathway from a student visa to permanent residence?',
    a: "The most common pathway is: Subclass 500 Student Visa → Subclass 485 Temporary Graduate Visa (2–6 years depending on qualification) → skills assessment in your occupation → Expression of Interest via SkillSelect → invitation to apply for 189, 190 or 491. The 485 gives you work experience to build points and complete your skills assessment. Your course must be a CRICOS-listed qualification in an occupation on the relevant skilled migration occupation list. Not all courses lead to a viable PR pathway — course choice at the start is critical.",
  },
]

/* ── Page ────────────────────────────────────────────────── */
export default function StudentVisasHubPage({ navigate }: { navigate: (page: string) => void }) {
  const [checked, setChecked] = useState<boolean[]>(Array(CHECKLIST.length).fill(false))
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const checkedCount = checked.filter(Boolean).length
  const allDone = checkedCount === CHECKLIST.length

  function toggle(i: number) {
    setChecked(prev => { const next = [...prev]; next[i] = !next[i]; return next })
  }

  React.useEffect(() => {
    document.title = PAGE_META['student-visas'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: '#ffffff', color: '#1E1E2A' }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Student Visas', url: 'https://www.nanakmigration.com.au/student-visas' },
        ]}
        faqs={FAQS.map((f: { q: string; a: string }) => ({ question: f.q, answer: f.a }))}
        service={{ name: 'Australian Student Visas', description: PAGE_META['student-visas'].metaDescription, url: 'https://www.nanakmigration.com.au/student-visas' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Student Visas' },
        ]}
      />

      <PageHero
        variant="hub"
        eyebrow="Student Visas"
        title={<>Student Visas<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Hub</em></>}
        deck="Everything international students need to know about studying in Australia — from the subclass 500 application to the Genuine Student requirement and the pathway to permanent residence."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Book a Student Visa Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Student Visa 500 →', page: 'student-visa-500' }}
        accent={CAT_STUDENT}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            The Student visa (subclass 500) allows international students to study full-time in a registered course at an Australian education provider that holds CRICOS registration, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. To be eligible, you generally need an enrolment confirmation from your education provider, evidence of financial capacity to support yourself and dependants, health insurance (OSHC), and must satisfy the Genuine Student requirement. Work rights are included with most student visas, currently allowing up to 48 hours of work per fortnight during study.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>


{/* ── Section 1: Card grid ─────────────────────────────── */}
      <section style={{ background: '#f8fafd', padding: '88px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading
            kicker="What you need to know"
            title="Six topics. Every student needs them."
            accent={CAT_STUDENT}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
            {CARDS.map(card => {
              const hovered = activeCard === card.code
              const clickable = card.route !== null
              return (
                <div key={card.code}
                  onMouseEnter={() => setActiveCard(card.code)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() => clickable && card.route && navigate(card.route)}
                  style={{ background: '#ffffff', border: `1.5px solid ${hovered ? GOLD : '#e8edf6'}`, borderRadius: 16, padding: '28px 24px', cursor: clickable ? 'pointer' : 'default', transform: hovered && clickable ? 'translateY(-4px)' : 'none', boxShadow: hovered ? '0 16px 40px rgba(27,43,94,0.11)' : '0 1px 6px rgba(27,43,94,0.05)', transition: 'all 0.2s', position: 'relative' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.04em', padding: '4px 12px', borderRadius: 100, background: NAVY, color: GOLD, fontFamily: "'Gilroy', sans-serif" }}>{card.code}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 100, background: `${card.tagColor}14`, color: card.tagColor, border: `1px solid ${card.tagColor}28`, fontFamily: "'Gilroy', sans-serif" }}>{card.tag}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 20, fontWeight: 700, color: NAVY, margin: '0 0 10px', lineHeight: 1.2 }}>{card.name}</h3>
                  <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65, margin: 0, fontFamily: "'Gilroy', sans-serif" }}>{card.summary}</p>
                  {clickable && (
                    <div style={{ position: 'absolute', bottom: 22, right: 22, opacity: hovered ? 1 : 0, transition: 'opacity 0.2s' }}>
                      <Icon name="arrowright" size={16} color={GOLD} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Section 2: Costs table ───────────────────────────── */}
      <section id="costs" style={{ background: '#ffffff', padding: '88px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading
            kicker="Financial Planning"
            title="Costs to plan for"
            intro="DHA requires evidence of sufficient funds. Knowing the actual figures — visa charge, OSHC, living costs — prevents a refusal on financial grounds."
            accent={CAT_STUDENT}
          />

          <div style={{ borderRadius: 16, overflow: 'hidden', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 24px rgba(27,43,94,0.07)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', background: NAVY, padding: '14px 24px' }}>
              {['Cost item', 'Amount (AUD)', 'Notes'].map((h, i) => (
                <div key={h} style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'Gilroy', sans-serif", textAlign: i > 0 ? 'right' : 'left', minWidth: i === 1 ? 130 : i === 2 ? 200 : 'auto' }}>{h}</div>
              ))}
            </div>
            {COSTS.map((row, i) => {
              const isLiving = row.item.includes('Living-cost')
              return (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', padding: '14px 24px', background: i % 2 === 0 ? '#ffffff' : '#fafbfe', borderTop: '1px solid #f0f2f7', alignItems: 'center' }}>
                  <div style={{ fontSize: 14, color: isLiving ? NAVY : '#374151', fontWeight: isLiving ? 700 : 400, fontFamily: "'Gilroy', sans-serif" }}>{row.item}</div>
                  <div style={{ fontSize: 14.5, fontWeight: 700, color: NAVY, fontFamily: "'Gilroy', sans-serif", textAlign: 'right', minWidth: 130, paddingLeft: 24 }}>{row.amount}</div>
                  <div style={{ fontSize: 12.5, color: '#9ca3af', fontFamily: "'Gilroy', sans-serif", textAlign: 'right', minWidth: 200, paddingLeft: 20 }}>{row.note}</div>
                </div>
              )
            })}
          </div>

          <div style={{ marginTop: 16, padding: '14px 18px', background: `${GOLD}0e`, border: `1px solid ${GOLD}33`, borderRadius: 10, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <Icon name="alert" size={14} color={GOLD} />
            <p style={{ fontSize: 13, color: '#0d1632', lineHeight: 1.6, margin: 0, fontFamily: "'Gilroy', sans-serif" }}>
              <strong>{DISCLAIMER}.</strong> Tuition figures are indicative ranges — contact your institution for exact fees. OSHC rates vary by provider. Agent fees are additional.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3: Process steps ─────────────────────────── */}
      <section style={{ background: `linear-gradient(160deg, ${NAVY_DARK} 0%, ${NAVY} 55%, ${NAVY_MID} 100%)`, padding: '88px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, marginBottom: 12, fontFamily: "'Gilroy', sans-serif" }}>The Process</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(30px, 3.5vw, 44px)', fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>
              Five steps from offer to <em style={{ fontStyle: 'italic', fontWeight: 300, color: GOLD }}>visa grant</em>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {STEPS.map((step, i) => (
              <div key={step.num} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 0, position: 'relative' }}>
                {/* Left: number + connector */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                    <span style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 18, fontWeight: 800, color: NAVY_DARK }}>{step.num}</span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div style={{ width: 2, flex: 1, minHeight: 24, background: 'rgba(255,255,255,0.12)', margin: '4px 0' }} />
                  )}
                </div>
                {/* Right: content */}
                <div style={{ paddingBottom: i < STEPS.length - 1 ? 36 : 0, paddingLeft: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 20, fontWeight: 700, color: '#ffffff', margin: 0, lineHeight: 1.2 }}>{step.title}</h3>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 100, background: 'rgba(245,161,36,0.18)', color: GOLD, fontFamily: "'Gilroy', sans-serif", whiteSpace: 'nowrap', flexShrink: 0 }}>{step.timing}</span>
                  </div>
                  <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.68)', lineHeight: 1.7, margin: 0, fontFamily: "'Gilroy', sans-serif" }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 44, padding: '16px 22px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, textAlign: 'center' }}>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, fontFamily: "'Gilroy', sans-serif", fontStyle: 'italic' }}>
              {DISCLAIMER}. Processing times are estimates and may vary for complex cases or additional information requests.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: '#ffffff', padding: '88px 24px', borderTop: '1px solid #eef0f6' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading
            kicker="Common Questions"
            title="Student visa FAQs"
            accent={CAT_STUDENT}
          />
          <FaqAccordion
            items={FAQS.map(f => ({ question: f.q, answer: f.a }))}
            accent={CAT_STUDENT}
          />
        </div>
      </section>

      {/* ── Related ── */}
      <section style={{ background: '#fafbfe', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <RelatedPages pages={STUDENT_RELATED} navigate={navigate} columns={2} />
        </div>
      </section>

      <CtaBand
        title="Check your Genuine Student case"
        body="The GS requirement is assessed holistically — your statement, course choice, financial position, and ties to home country all factor in. Our registered agents review your complete profile before lodgement."
        primaryCta={{ label: 'Book a Student Visa Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Back to Home', page: 'home' }}
        navigate={navigate}
        accent={CAT_STUDENT}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
