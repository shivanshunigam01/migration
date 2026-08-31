import React, { useState } from 'react'
import { GOLD, GOLD_LIGHT, NAVY, NAVY_DARK, NAVY_MID, NAVY_GRAD, HERO_GRAD, CAT_REVIEWS, CAT_SKILLED, CAT_EMPLOYER, GREY_BAND } from '@/theme'
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
import type { RelatedPage, FaqItem } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const CURRENT_AS_AT = 'August 2026'

const RED = CAT_REVIEWS
const RED_LIGHT = 'rgba(220,38,38,0.12)'
const RED_DARK = CAT_REVIEWS
const AMBER = GOLD
const GREEN = GOLD
const PURPLE = CAT_SKILLED
const TEAL = CAT_EMPLOYER

const DISCLAIMER = 'Figures current as at 1 July 2026 — verify with Home Affairs'

/* ── Triage widget ───────────────────────────────────────── */
type TriageResult = {
  heading: string
  deadline: string
  deadlineUrgent: boolean
  action: string
  route?: string
  routeLabel?: string
  note: string
  color: string
}

const TRIAGE_RESULTS: Record<string, TriageResult> = {
  refused_onshore: {
    heading: 'Visa refused — onshore',
    deadline: 'Usually 28 days from notification',
    deadlineUrgent: true,
    action: 'You likely have merits review rights at the Administrative Review Tribunal (ART). Lodge an ART application before the deadline — it is strict and non-extendable.',
    route: 'art-review',
    routeLabel: 'Read: ART Review →',
    note: 'Protection visa refusals: 35 days. Some visa classes have different timeframes. Count from the date stated on your decision record.',
    color: RED,
  },
  refused_offshore: {
    heading: 'Visa refused — offshore',
    deadline: 'Check decision record immediately',
    deadlineUrgent: true,
    action: 'Offshore refusals are generally not reviewable at the ART. Limited options: a new application addressing the refusal grounds, or ministerial intervention in exceptional cases. Seek advice immediately.',
    note: 'Some offshore decisions — e.g. partner visa offshore Stage 2 — may carry review rights. The decision record will state whether review is available.',
    color: AMBER,
  },
  cancelled: {
    heading: 'Visa cancelled',
    deadline: 'Varies — check your cancellation notice',
    deadlineUrgent: true,
    action: 'Visa cancellation carries separate rights from refusal. If cancelled via s116 or s109, you may have ART merits review rights. If cancelled via s501 (character), different processes apply. Read your cancellation notice carefully — it states your rights and timeframe.',
    route: 'art-review',
    routeLabel: 'Read: ART Review →',
    note: 'If you received a Notice of Intention to Consider Cancellation (NOICC) — you have not yet been cancelled. Respond to the NOICC before the deadline.',
    color: RED,
  },
  noicc: {
    heading: 'NOICC letter received',
    deadline: 'Deadline stated on the notice — do not miss it',
    deadlineUrgent: true,
    action: 'A Notice of Intention to Consider Cancellation (NOICC) means DHA is considering cancelling your visa — it has not been cancelled yet. You must respond by the deadline, addressing each adverse finding. A strong, documented response can prevent cancellation.',
    note: 'Do not ignore a NOICC. Failure to respond means DHA will decide without your input — almost always resulting in cancellation.',
    color: RED,
  },
  s48: {
    heading: 'Section 48 bar applies',
    deadline: 'Seek advice before lodging anything',
    deadlineUrgent: false,
    action: 'If you were refused a visa while onshore, the s48 bar may prevent you from lodging most visa applications in Australia. Exceptions exist for certain subclasses. Lodging the wrong visa under s48 can worsen your position.',
    note: 'Common exceptions: protection visas, resolution of status, partner visas (in some circumstances), special category. Get advice before lodging.',
    color: PURPLE,
  },
}

type TriageQ = { key: string; q: string; opts: { label: string; next: string }[] }
const TRIAGE_QS: TriageQ[] = [
  {
    key: 'what',
    q: 'What happened with your visa?',
    opts: [
      { label: 'My visa application was refused — I am in Australia', next: 'result_refused_onshore' },
      { label: 'My visa application was refused — I am overseas', next: 'result_refused_offshore' },
      { label: 'My visa was cancelled', next: 'result_cancelled' },
      { label: 'I received a NOICC letter (Notice of Intention to Consider Cancellation)', next: 'result_noicc' },
      { label: 'I was refused onshore and think I may be s48 barred', next: 'result_s48' },
    ],
  },
]

function TriageWidget({ navigate }: { navigate: (page: string) => void }) {
  const [step, setStep] = useState('what')
  const [history, setHistory] = useState<string[]>([])

  const isResult = step.startsWith('result_')
  const result = isResult ? TRIAGE_RESULTS[step.replace('result_', '')] : null
  const q = TRIAGE_QS.find(f => f.key === step)

  function choose(next: string) { setHistory(h => [...h, step]); setStep(next) }
  function back() {
    const prev = history[history.length - 1]
    if (!prev) return
    setHistory(h => h.slice(0, -1))
    setStep(prev)
  }
  function restart() { setStep('what'); setHistory([]) }

  return (
    <div style={{ background: '#ffffff', borderRadius: 18, boxShadow: '0 24px 64px rgba(13,22,50,0.22)', border: `1.5px solid ${RED}22`, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ background: `linear-gradient(135deg, ${NAVY_DARK} 0%, ${NAVY} 100%)`, padding: '18px 22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.7)', display: 'inline-block', boxShadow: '0 0 0 3px rgba(255,255,255,0.2)', flexShrink: 0 }} />
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', fontFamily: "'Gilroy', sans-serif" }}>Urgent triage</div>
        </div>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', fontFamily: "'Gilroy', sans-serif" }}>"What happened?" — get your next step now</div>
      </div>

      <div style={{ padding: '20px 22px 4px', flex: 1 }}>
        {history.length > 0 && (
          <button onClick={back} style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'none', border: 'none', cursor: 'pointer', fontSize: 12.5, color: '#9ca3af', fontFamily: "'Gilroy', sans-serif", padding: 0, marginBottom: 12 }}>
            <Icon name="arrow-left" size={12} />
            Back
          </button>
        )}

        {!isResult && q && (
          <>
            <p style={{ fontSize: 15, fontWeight: 600, color: NAVY_DARK, lineHeight: 1.45, margin: '0 0 14px', fontFamily: "'Gilroy', sans-serif" }}>{q.q}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {q.opts.map(opt => (
                <button key={opt.label} onClick={() => choose(opt.next)}
                  style={{ padding: '11px 14px', background: 'rgba(220,38,38,0.08)', border: `1.5px solid ${RED}22`, borderRadius: 10, fontSize: 14, fontWeight: 500, color: NAVY_DARK, cursor: 'pointer', textAlign: 'left', fontFamily: "'Gilroy', sans-serif", transition: 'all 0.15s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = RED; el.style.background = RED_LIGHT }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${RED}22`; el.style.background = 'rgba(220,38,38,0.08)' }}
                >{opt.label}</button>
              ))}
            </div>
          </>
        )}

        {isResult && result && (
          <div>
            {result.deadlineUrgent && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: RED_LIGHT, border: `1.5px solid ${RED}`, borderRadius: 10, marginBottom: 14 }}>
                <Icon name="alert" size={14} color={RED} />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: RED_DARK, fontFamily: "'Gilroy', sans-serif" }}>Deadline</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: RED_DARK, fontFamily: "'Gilroy', sans-serif" }}>{result.deadline}</div>
                </div>
              </div>
            )}

            <div style={{ padding: '14px 16px', borderRadius: 12, border: `1.5px solid ${result.color}22`, background: `${result.color}06`, marginBottom: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: result.color, marginBottom: 6, fontFamily: "'Gilroy', sans-serif" }}>Next step</div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.62, margin: 0, fontFamily: "'Gilroy', sans-serif" }}>{result.action}</p>
              {result.route && (
                <button onClick={() => navigate(result.route!)}
                  style={{ marginTop: 10, background: 'none', border: 'none', cursor: 'pointer', fontSize: 13.5, fontWeight: 700, color: result.color, fontFamily: "'Gilroy', sans-serif", padding: 0, display: 'flex', alignItems: 'center', gap: 5 }}>
                  {result.routeLabel}
                  <Icon name="arrow-right" size={12} />
                </button>
              )}
            </div>

            <div style={{ fontSize: 12.5, color: '#6b7280', lineHeight: 1.55, fontFamily: "'Gilroy', sans-serif", fontStyle: 'italic', marginBottom: 14 }}>{result.note}</div>

            <div style={{ display: 'flex', gap: 8 }}>
              <a href="#contact" style={{ flex: 1, padding: '12px 14px', background: RED, color: '#ffffff', border: 'none', borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: 'pointer', textAlign: 'center', textDecoration: 'none', fontFamily: "'Gilroy', sans-serif" }}>
                Request same-day triage →
              </a>
              <button onClick={restart} style={{ padding: '12px 14px', background: '#f3f4f8', color: '#6b7280', border: 'none', borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif" }}>
                Start over
              </button>
            </div>
          </div>
        )}
      </div>
      <div style={{ padding: '14px 22px', fontSize: 11.5, color: '#9ca3af', fontFamily: "'Gilroy', sans-serif", fontStyle: 'italic' }}>
        Preliminary guidance only — not migration advice. {DISCLAIMER}.
      </div>
    </div>
  )
}

/* ── Card grid ───────────────────────────────────────────── */
const CARDS = [
  {
    code: 'ART',
    name: 'ART Merits Review',
    tag: '28-day window',
    tagColor: RED,
    body: 'The Administrative Review Tribunal can substitute a more favourable decision. The lodgement deadline is strict — typically 28 days from notification. Fee ~$3,272 (refundable on success).',
    route: 'art-review' as string | null,
    urgent: true,
  },
  {
    code: 'Cancel',
    name: 'Visa Cancellation',
    tag: 'Separate rights',
    tagColor: RED,
    body: 'Cancellation under s109 (incorrect information) or s116 (condition breach) each carry different review rights and timeframes. A NOICC is your last chance to respond before cancellation.',
    route: null as string | null,
    urgent: true,
  },
  {
    code: 's48',
    name: 'Section 48 Bar',
    tag: 'Bars onshore lodgement',
    tagColor: PURPLE,
    body: 'If refused onshore, s48 bars most further visa applications in Australia. Exceptions exist — protection visas, some family visas. Do not lodge without advice.',
    route: null as string | null,
    urgent: false,
  },
  {
    code: 'Sch3',
    name: 'Schedule 3 Criteria',
    tag: 'High bar to waive',
    tagColor: PURPLE,
    body: 'Triggered when an applicant is unlawful or held a bridging visa at lodgement. Requires compelling reasons to waive. The standard is high; evidence is critical.',
    route: null as string | null,
    urgent: false,
  },
  {
    code: '4020',
    name: 'PIC 4020 — Fraud',
    tag: '3 or 10 yr ban',
    tagColor: RED,
    body: 'A finding of fraud or misrepresentation can result in a 3-year or 10-year bar on certain visa applications. Character of the misrepresentation determines which ban applies.',
    route: null as string | null,
    urgent: false,
  },
  {
    code: '8503',
    name: 'No Further Stay (8503)',
    tag: 'Prevents onshore lodgement',
    tagColor: AMBER,
    body: 'Condition 8503 prevents you from applying for another visa in Australia. Waivers are available in exceptional circumstances — compelling reasons required; rarely granted.',
    route: null as string | null,
    urgent: false,
  },
  {
    code: 'MI',
    name: 'Ministerial Intervention',
    tag: 'Last resort',
    tagColor: TEAL,
    body: 'After ART rights are exhausted, the Minister may substitute a more favourable decision in the public interest under s351 or s417. Discretionary — not a right. Exceptional circumstances only.',
    route: null as string | null,
    urgent: false,
  },
  {
    code: 's57',
    name: 'Natural Justice (s57) Letters',
    tag: 'Respond — do not ignore',
    tagColor: AMBER,
    body: 'DHA invites you to comment on adverse information before a decision is made. The response deadline is fixed. Failure to respond almost guarantees an adverse decision.',
    route: null as string | null,
    urgent: true,
  },
  {
    code: 'Federal',
    name: 'Judicial Review',
    tag: 'Legal error only',
    tagColor: NAVY_MID,
    body: 'Federal Court review is available only for legal error — not to re-argue the merits. Requires legal representation. Costs can be significant. Not a substitute for ART review.',
    route: null as string | null,
    urgent: false,
  },
]

/* ── 72-hour checklist ───────────────────────────────────── */
const URGENT_STEPS = [
  {
    num: '01',
    title: 'Read the decision record carefully',
    body: 'The decision record states the refusal grounds, review rights, and the deadline. Do not assume you know the deadline — read it. Count from the date stated, not the date you received it.',
    timing: 'Day 1',
    urgent: true,
  },
  {
    num: '02',
    title: 'Note your visa and bridging visa status',
    body: 'If you are onshore, check whether you hold a Bridging Visa. Lodging an ART application typically grants a Bridging Visa A. If you are unlawful, contact us before lodging anything.',
    timing: 'Day 1',
    urgent: true,
  },
  {
    num: '03',
    title: 'Contact a registered migration agent — same day',
    body: 'ART applications require a decision record reference, correct fee, and precise lodgement. A registered agent assesses whether review rights exist, prepares the application, and advises on bridging visa conditions.',
    timing: 'Day 1–2',
    urgent: true,
  },
  {
    num: '04',
    title: 'Lodge the ART application before the deadline',
    body: 'The ART deadline is non-extendable. The Tribunal has no discretion to accept a late application — not even by one day. Once lodged, a Bridging Visa A is typically issued while the review proceeds.',
    timing: 'Before deadline',
    urgent: true,
  },
]

/* ── Review rights table ─────────────────────────────────── */
const REVIEW_RIGHTS = [
  { type: 'Onshore visa refusal (most classes)', art: 'Yes — 28 days', federal: 'Legal error only', ministerial: 'After ART exhausted', color: RED },
  { type: 'Protection visa refusal (onshore)', art: 'Yes — 35 days', federal: 'Legal error only', ministerial: 'Limited — s417', color: RED },
  { type: 'Offshore visa refusal', art: 'Generally no', federal: 'Rarely available', ministerial: 'Exceptional cases', color: AMBER },
  { type: 'Visitor visa refusal (offshore)', art: 'No', federal: 'No', ministerial: 'No', color: '#9ca3af' },
  { type: 'Visa cancellation (s116)', art: 'Yes — check notice', federal: 'Legal error only', ministerial: 'After ART exhausted', color: RED },
  { type: 'Character cancellation (s501)', art: 'Different process', federal: 'Legal error only', ministerial: 's501CA process', color: PURPLE },
  { type: 'Refusal while s48 barred', art: 'Yes, if review rights exist', federal: 'Legal error only', ministerial: 'After ART exhausted', color: PURPLE },
  { type: 'NOICC (before cancellation)', art: 'Respond — not yet cancelled', federal: '—', ministerial: '—', color: AMBER },
]

/* ── FAQs ────────────────────────────────────────────────── */
const FAQS: FaqItem[] = [
  {
    question: 'How long do I have to lodge an ART review application?',
    answer: 'In most cases, 28 days from the date of notification of the refusal decision. Protection visa refusals have a 35-day window. Some visa classes carry different timeframes — always read your decision record, which states the specific deadline and review rights available. The ART deadline is strict and non-extendable — the Tribunal cannot accept late applications, even by one day. Figures current as at 1 July 2026 — verify with Home Affairs.',
  },
  {
    question: 'Can the ART grant me a visa?',
    answer: "The ART does not issue visas directly. It reviews the decision and can: affirm the delegate's decision (outcome unchanged), set aside and substitute a different decision, or remit the matter back to DHA with directions. If the ART sets aside the refusal and substitutes a decision to grant, DHA then processes the visa grant. A successful ART review practically results in visa grant in most cases.",
  },
  {
    question: 'What is the ART application fee and do I get it back if I win?',
    answer: "The ART lodgement fee for migration and refugee cases is approximately $3,272 as at 1 July 2026. If you are successful — the decision is set aside — the fee is refunded. If the application is withdrawn before hearing, a partial refund may apply. Verify current fees with the ART before lodging. Figures current as at 1 July 2026 — verify with Home Affairs.",
  },
  {
    question: 'What is the difference between a visa refusal and a visa cancellation?',
    answer: "A refusal is where a visa application you lodged is rejected — you were never granted the visa. A cancellation is where a visa you currently hold is taken away. They are distinct legal events with different provisions, different review rights, and different consequences. Cancellation under s109 (incorrect information provided) and s116 (condition breach) each carry separate procedures. If your visa is cancelled, do not assume your review rights are the same as for a refusal.",
  },
  {
    question: 'What is a NOICC and what should I do if I receive one?',
    answer: "A Notice of Intention to Consider Cancellation (NOICC) is a formal letter from DHA advising they are considering cancelling your visa and inviting you to respond. You have not been cancelled yet — this is your opportunity to prevent it. The NOICC states the adverse information, the grounds being considered, and the response deadline. You must respond to each specific issue raised, with supporting evidence, before the deadline. Our agents draft and review NOICC responses the same day.",
  },
  {
    question: 'My visa was refused offshore — do I have any options?',
    answer: "Offshore refusals are generally not reviewable at the ART. The decision record will confirm whether any review rights apply — some offshore decisions, such as a partner visa Stage 2 refusal, may carry ART rights. Where review is not available, options include: lodging a new application addressing the original refusal grounds, or requesting ministerial intervention in exceptional cases under s417. Ministerial intervention is discretionary — it is not a guaranteed pathway and success requires truly exceptional circumstances.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'ART Review', desc: 'The Administrative Review Tribunal — the main merits review body for visa refusals.', icon: 'scale', page: 'art-review', color: CAT_REVIEWS },
  { title: 'Bridging Visas', desc: 'Bridging visa rights while an ART review or appeal is pending.', icon: 'clock', page: 'bridging-visas', color: CAT_REVIEWS },
  { title: 'Partner Visa Onshore (820/801)', desc: 'Partner visa applicants face specific review provisions — understand the options.', icon: 'heart', page: 'partner-visa-820-801', color: CAT_REVIEWS },
]

/* ── Page ────────────────────────────────────────────────── */
export default function VisaRefusalReviewHubPage({ navigate }: { navigate: (page: string) => void }) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  React.useEffect(() => {
    document.title = PAGE_META['visa-refusal-review'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: '#ffffff', color: '#1E1E2A' }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Visa Refusal & Review', url: 'https://www.nanakmigration.com.au/visa-refusal-review' },
        ]}
        faqs={FAQS}
        service={{ name: 'Visa Refusal and Review Options', description: PAGE_META['visa-refusal-review'].metaDescription, url: 'https://www.nanakmigration.com.au/visa-refusal-review' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Reviews & Complex', page: 'home' },
        { label: 'Visa Refusals & Reviews' },
      ]} />

      <PageHero
        variant="hub"
        eyebrow="Reviews & Complex Cases"
        title={<>Visa Refusal &<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Review Hub</em></>}
        deck="Understand your options after a visa refusal or cancellation — review rights, time limits, and the right strategy for your specific situation."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Get urgent advice', page: 'book-consultation' }}
        secondaryCta={{ label: 'ART Review →', page: 'art-review' }}
        accent={CAT_REVIEWS}
        navigate={navigate}
      />

      {/* ── AnswerBox ─────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            If your Australian visa application has been refused or your visa has been cancelled, you may have rights to review, appeal, or reapply — depending on the type of decision, whether you are onshore or offshore, and the time elapsed since the decision, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. In most cases, onshore refusals carry a 28-day window to lodge an application at the Administrative Review Tribunal (ART), and this deadline is non-extendable. Always check the decision record immediately.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* ── Hero triage widget + stat tiles ── */}
      <section style={{ background: HERO_GRAD, padding: '56px 24px 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-5%', left: '55%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${RED}0a 0%, transparent 65%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-8%', right: '20%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.88) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div className="hero-grid" style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 420px', gap: 56, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, padding: '5px 14px 5px 6px', background: RED_LIGHT, border: `1.5px solid ${RED}55`, borderRadius: 100 }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: RED, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="alert" size={11} color="#ffffff" />
              </span>
              <span style={{ fontSize: 12, fontWeight: 700, color: RED_DARK, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Gilroy', sans-serif" }}>Time-critical — deadlines are strict</span>
            </div>

            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(30px, 3.5vw, 46px)', fontWeight: 700, color: NAVY, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
              Use the triage tool to find your next step
            </h2>

            <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.68, margin: '0 0 24px', fontFamily: "'Gilroy', sans-serif" }}>
              A refusal is not necessarily the end — but every pathway has a hard deadline. The ART review window is typically 28 days, non-extendable. The day you receive the decision, the clock starts.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#contact"
                style={{ background: RED, color: '#ffffff', padding: '14px 30px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8, boxShadow: `0 4px 20px ${RED}44`, fontFamily: "'Gilroy', sans-serif" }}>
                Request same-day triage →
              </a>
              <button onClick={() => navigate('art-review')}
                style={{ background: '#ffffff', color: NAVY, padding: '14px 30px', borderRadius: 8, fontSize: 15, fontWeight: 700, fontFamily: "'Gilroy', sans-serif", border: `1.5px solid ${NAVY}22`, cursor: 'pointer', boxShadow: '0 2px 8px rgba(27,43,94,0.08)' }}>
                ART Review guide →
              </button>
            </div>
          </div>

          <TriageWidget navigate={navigate} />
        </div>

        {/* Stat tiles */}
        <div style={{ maxWidth: 1160, margin: '40px auto 0' }}>
          <div style={{ height: 1, background: 'rgba(27,43,94,0.12)', marginBottom: 28 }} />
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
            {[
              { val: '28 days', label: 'ART lodgement window (most visas)', note: '35 days for protection' },
              { val: '~$3,272', label: 'ART application fee', note: 'refunded if successful' },
              { val: '9 mo', label: 'Median ART processing', note: '2025–26 estimate' },
              { val: '0 days', label: 'Extension available', note: 'deadline is absolute' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '16px 24px', borderRight: i < 3 ? '1px solid rgba(27,43,94,0.1)' : 'none' }}>
                <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(22px, 2.2vw, 32px)', fontWeight: 800, color: i === 3 ? RED : NAVY, lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: 13, color: '#6b7280', marginTop: 4, fontFamily: "'Gilroy', sans-serif", lineHeight: 1.4 }}>{s.label}<span style={{ fontSize: 11, display: 'block', color: '#9ca3af' }}>{s.note}</span></div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11.5, color: '#9ca3af', fontStyle: 'italic', margin: '10px 0 0', fontFamily: "'Gilroy', sans-serif" }}>{DISCLAIMER}</p>
        </div>
      </section>

      {/* ── Section 1: Card grid ─────────────────────────────── */}
      <section style={{ background: GREY_BAND, padding: '88px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="All Pathways" title="Every pathway after a refusal or cancellation." accent={GOLD} />

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {CARDS.map(card => {
              const isHovered = hoveredCard === card.code
              const clickable = card.route !== null
              return (
                <div key={card.code}
                  onMouseEnter={() => setHoveredCard(card.code)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => { if (clickable && card.route) navigate(card.route) }}
                  style={{ background: '#ffffff', border: `1.5px solid ${isHovered ? card.tagColor : '#e8edf6'}`, borderRadius: 16, padding: '26px 22px', cursor: clickable ? 'pointer' : 'default', transform: isHovered && clickable ? 'translateY(-4px)' : 'none', boxShadow: isHovered ? '0 16px 40px rgba(27,43,94,0.11)' : '0 1px 6px rgba(27,43,94,0.05)', transition: 'all 0.2s', position: 'relative', display: 'flex', flexDirection: 'column' }}
                >
                  {card.urgent && (
                    <div style={{ position: 'absolute', top: 16, right: 16, width: 8, height: 8, borderRadius: '50%', background: RED, boxShadow: `0 0 0 3px ${RED}22` }} />
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, padding: '4px 12px', borderRadius: 100, background: NAVY, color: GOLD, fontFamily: "'Gilroy', sans-serif", whiteSpace: 'nowrap' }}>{card.code}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 100, background: `${card.tagColor}14`, color: card.tagColor, border: `1px solid ${card.tagColor}28`, fontFamily: "'Gilroy', sans-serif" }}>{card.tag}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 19, fontWeight: 700, color: NAVY, margin: '0 0 10px', lineHeight: 1.2 }}>{card.name}</h3>
                  <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65, margin: 0, fontFamily: "'Gilroy', sans-serif", flex: 1 }}>{card.body}</p>
                  {clickable && (
                    <div style={{ position: 'absolute', bottom: 20, right: 20, opacity: isHovered ? 1 : 0, transition: 'opacity 0.2s' }}>
                      <Icon name="arrowright" size={15} color={card.tagColor} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 20 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: RED, boxShadow: `0 0 0 3px ${RED}22`, flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: '#6b7280', fontFamily: "'Gilroy', sans-serif" }}>Indicates a time-critical item — deadlines apply</span>
          </div>
        </div>
      </section>

      {/* ── Section 2: ART process steps ─────────────────────── */}
      <section style={{ background: '#ffffff', padding: '88px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: 56, alignItems: 'start' }} className="hero-grid">
            <div>
              <SectionHeading kicker="ART Review" title="How the ART review process works" accent={GOLD} marginBottom={18} />
              <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.75, marginBottom: 16, fontFamily: "'Gilroy', sans-serif" }}>
                When you receive a visa refusal, you may have the right to apply to the Administrative Review Tribunal (ART) for a merits review. The Tribunal is an independent body that examines the facts, law and policy afresh.
              </p>
              <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.75, marginBottom: 20, fontFamily: "'Gilroy', sans-serif" }}>
                The Tribunal can affirm the delegate's decision, vary it, set it aside and substitute its own decision, or remit the matter back to DHA with directions. A successful ART review leads to a visa grant in most cases.
              </p>
              <div style={{ background: `${GOLD}14`, border: `1.5px solid ${GOLD}44`, borderRadius: 12, padding: '14px 16px' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0d1632', marginBottom: 4, fontFamily: "'Gilroy', sans-serif" }}>ART Processing Time 2025–26</div>
                <div style={{ fontSize: 14, color: '#0d1632', lineHeight: 1.6, fontFamily: "'Gilroy', sans-serif" }}>
                  Median ~9 months for migration cases. Lodge as early as possible — do not wait for the deadline. {DISCLAIMER}.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { num: '01', title: 'Refusal received', desc: 'Read the decision record carefully; note the review deadline (usually 28 days). Contact us immediately — do not wait.' },
                { num: '02', title: 'ART application lodged', desc: 'We prepare and file the application on your behalf. The Tribunal fee (~$3,272 as at 1 July 2026) is paid at lodgement.' },
                { num: '03', title: 'Review conference or hearing', desc: 'We represent you before the Tribunal. Depending on the case, this may be a document review or a full hearing with oral evidence.' },
                { num: '04', title: 'Decision', desc: 'The Tribunal affirms, sets aside or remits the decision. If set aside, DHA proceeds to grant the visa.' },
              ].map((step, i) => (
                <div key={step.num} style={{ display: 'flex', gap: 20, position: 'relative', paddingBottom: i < 3 ? 32 : 0 }}>
                  {i < 3 && <div style={{ position: 'absolute', left: 20, top: 44, width: 2, height: 'calc(100% - 12px)', background: 'linear-gradient(to bottom, rgba(27,43,94,0.15), rgba(27,43,94,0.04))' }} />}
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                    <span style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 14, fontWeight: 800, color: '#fff' }}>{step.num}</span>
                  </div>
                  <div style={{ paddingTop: 6, flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 6, fontFamily: "'Gilroy', sans-serif" }}>{step.title}</div>
                    <div style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65, fontFamily: "'Gilroy', sans-serif" }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Bars & Conditions ──────────────────────── */}
      <section style={{ background: `linear-gradient(160deg, ${NAVY_DARK} 0%, ${NAVY} 55%, ${NAVY_MID} 100%)`, padding: '88px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative' }}>
          <SectionHeading kicker="Bars & Conditions" title="Common bars that limit your options" intro="These provisions can significantly limit your ability to lodge further applications or access review. Identifying which bars apply to you is critical before taking any action." accent={GOLD} light />

          <div className="grid-2 hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              { title: 'Section 48 Bar', impact: 'HIGH', desc: 'If you were refused a visa while onshore, this bar prevents you from applying for most visas in Australia. Exceptions exist for certain subclasses — protection, resolution of status, some family visas.', impactColor: RED },
              { title: 'Schedule 3 Criteria', impact: 'HIGH', desc: 'Triggered by unlawful presence or certain circumstances at application. Requires compelling reasons to waive. The standard is very high and rarely met without evidence.', impactColor: RED },
              { title: 'PIC 4020 — Fraud / Misrepresentation', impact: 'HIGH', desc: 'A finding of fraud or misrepresentation can result in a 3-year or 10-year bar on certain visa applications. The character and extent of the misrepresentation determines which ban applies.', impactColor: RED },
              { title: 'Condition 8503 — No Further Stay', impact: 'MEDIUM', desc: 'Prevents lodging a further visa application in Australia. Waivers are available only in compelling circumstances and are rarely granted. Check your visa grant notice.', impactColor: AMBER },
            ].map(bar => (
              <div key={bar.title} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 18, padding: '24px 24px', backdropFilter: 'blur(12px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.25, fontFamily: "'Gilroy', sans-serif" }}>{bar.title}</div>
                  <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 100, padding: '3px 9px', flexShrink: 0, color: bar.impactColor, background: `${bar.impactColor}22`, border: `1px solid ${bar.impactColor}44`, fontFamily: "'Gilroy', sans-serif", marginLeft: 10 }}>
                    {bar.impact}
                  </span>
                </div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 12px', fontFamily: "'Gilroy', sans-serif" }}>{bar.desc}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: `${RED}18`, border: `1px solid ${RED}30`, borderRadius: 100, padding: '3px 10px' }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: RED, flexShrink: 0 }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(220,38,38,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Gilroy', sans-serif" }}>Time limits apply</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginTop: 20, fontFamily: "'Gilroy', sans-serif" }}>{DISCLAIMER}</p>
        </div>
      </section>

      {/* ── Section 4: Natural Justice (s57) ──────────────────── */}
      <section style={{ background: GREY_BAND, padding: '88px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: 56, alignItems: 'start' }} className="hero-grid">
            <div>
              <SectionHeading kicker="Natural Justice" title="Received a natural justice letter?" accent={GOLD} marginBottom={18} />
              <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.75, marginBottom: 16, fontFamily: "'Gilroy', sans-serif" }}>
                A section 57 (s57) letter is DHA's formal invitation for you to comment on adverse information before a decision is made on your visa application. It is your last opportunity to address concerns before refusal.
              </p>
              <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.75, marginBottom: 16, fontFamily: "'Gilroy', sans-serif" }}>
                These letters typically allow 28 days for a written response. Deadlines are strict and extensions are not normally granted. If you do not respond, DHA will almost certainly refuse based on the adverse information without further notice.
              </p>
              <div style={{ background: 'rgba(220,38,38,0.08)', border: `1.5px solid ${RED}44`, borderRadius: 12, padding: '14px 16px' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: RED, marginBottom: 4, fontFamily: "'Gilroy', sans-serif" }}>Response deadlines are not extended.</div>
                <div style={{ fontSize: 13, color: '#0d1632', lineHeight: 1.6, fontFamily: "'Gilroy', sans-serif" }}>Contact us the day you receive the letter.</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: '#ffffff', borderRadius: 16, border: '1.5px solid rgba(245,161,36,0.12)', padding: '22px 22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#f5a124', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name="check" size={13} color="#fff" />
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#0d1632', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Gilroy', sans-serif" }}>Do</div>
                </div>
                {['Respond within the timeframe stated in the letter', 'Address each specific adverse finding individually', 'Provide supporting documents and statutory declarations', 'Have a registered agent review your response before submission'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 9 }}>
                    <Icon name="check" size={13} color="#f5a124" />
                    <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, fontFamily: "'Gilroy', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: '#ffffff', borderRadius: 16, border: `1.5px solid ${RED}44`, padding: '22px 22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <div style={{ width: 26, height: 26, borderRadius: '50%', background: RED, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name="x" size={12} color="#fff" />
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: RED, letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Gilroy', sans-serif" }}>{"Don't"}</div>
                </div>
                {['Ignore the letter — refusal is almost certain if you do not respond', 'Provide information inconsistent with your original application', 'Submit a response without addressing the specific issues raised'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 9 }}>
                    <Icon name="x" size={12} color={RED} />
                    <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, fontFamily: "'Gilroy', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Character & Compliance ────────────────── */}
      <section style={{ background: '#ffffff', padding: '88px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeading kicker="Character & Compliance" title="Other issues that affect your visa" intro="Beyond refusals and bars, character, health, and re-entry bans can close visa pathways entirely. Early advice is essential." accent={GOLD} />

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {[
              { title: 'Character Test (s501)', icon: 'shield', desc: 'Persons with substantial criminal records (12+ months imprisonment), associations with criminal groups, or not of good character may fail the character test. A visa can be refused or cancelled.' },
              { title: 'Health Requirements', icon: 'heart', desc: 'Most visas require meeting health criteria. Waivers exist for some subclasses where the cost or prejudice to Australia is deemed acceptable. Our agents advise on waiver prospects.' },
              { title: 'Re-entry Bans', icon: 'clock', desc: 'Overstaying by 28+ days (under 12 months) triggers a 3-year exclusion from Australia. Overstaying by 12+ months triggers a 5-year ban. Waivers exist in some circumstances.' },
            ].map(issue => (
              <div key={issue.title} style={{ background: GREY_BAND, borderRadius: 16, border: '1.5px solid #e5eaf4', padding: '26px 24px' }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: 'rgba(27,43,94,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: NAVY, marginBottom: 14, flexShrink: 0 }}>
                  <Icon name={issue.icon} size={20} color={NAVY} />
                </div>
                <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 10px', lineHeight: 1.3 }}>{issue.title}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7, margin: 0, fontFamily: "'Gilroy', sans-serif" }}>{issue.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11.5, color: '#9ca3af', textAlign: 'center', marginTop: 20, fontFamily: "'Gilroy', sans-serif" }}>{DISCLAIMER}</p>
        </div>
      </section>

      {/* ── Section 6: First 72 hours ─────────────────────────── */}
      <section style={{ background: `linear-gradient(160deg, ${NAVY_DARK} 0%, ${NAVY} 55%, ${NAVY_MID} 100%)`, padding: '88px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: GOLD, marginBottom: 12, fontFamily: "'Gilroy', sans-serif" }}>Act immediately</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              Your first <em style={{ fontStyle: 'italic', fontWeight: 300, color: GOLD_LIGHT }}>72 hours</em>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {URGENT_STEPS.map((step, i) => (
              <div key={step.num} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                    <span style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 18, fontWeight: 800, color: '#ffffff' }}>{step.num}</span>
                  </div>
                  {i < URGENT_STEPS.length - 1 && (
                    <div style={{ width: 2, flex: 1, minHeight: 24, background: 'rgba(255,255,255,0.15)', margin: '4px 0' }} />
                  )}
                </div>
                <div style={{ paddingBottom: i < URGENT_STEPS.length - 1 ? 36 : 0, paddingLeft: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                    <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 20, fontWeight: 700, color: '#ffffff', margin: 0, lineHeight: 1.2 }}>{step.title}</h3>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 100, background: 'rgba(255,255,255,0.15)', color: GOLD, fontFamily: "'Gilroy', sans-serif", whiteSpace: 'nowrap', flexShrink: 0 }}>{step.timing}</span>
                  </div>
                  <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, margin: 0, fontFamily: "'Gilroy', sans-serif" }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 44, display: 'flex', justifyContent: 'center' }}>
            <a href="#contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#ffffff', color: NAVY_DARK, padding: '16px 40px', borderRadius: 9, fontSize: 16, fontWeight: 700, textDecoration: 'none', boxShadow: '0 6px 28px rgba(0,0,0,0.2)', fontFamily: "'Gilroy', sans-serif" }}>
              Request same-day triage
              <Icon name="arrow-right" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Section 7: Review rights table ────────────────────── */}
      <section style={{ background: '#ffffff', padding: '88px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeading kicker="Review Rights" title="Who can review a decision?" intro="Review rights depend on the decision type, where you are, and which visa was refused or cancelled. The decision record states your rights." accent={GOLD} />

          <div style={{ borderRadius: 16, overflow: 'hidden', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 24px rgba(27,43,94,0.07)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr', background: NAVY, padding: '14px 20px', gap: 12 }}>
              {['Decision type', 'ART review', 'Federal Court', 'Ministerial'].map(h => (
                <div key={h} style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "'Gilroy', sans-serif" }}>{h}</div>
              ))}
            </div>
            {REVIEW_RIGHTS.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr', padding: '13px 20px', background: i % 2 === 0 ? '#ffffff' : '#fafbfe', borderTop: '1px solid #f0f2f7', gap: 12, alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: row.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: '#374151', fontFamily: "'Gilroy', sans-serif", fontWeight: 500 }}>{row.type}</span>
                </div>
                <div style={{ fontSize: 13.5, color: row.art.startsWith('Yes') ? GREEN : row.art === 'No' || row.art === 'Generally no' ? '#dc2626' : AMBER, fontWeight: 600, fontFamily: "'Gilroy', sans-serif" }}>{row.art}</div>
                <div style={{ fontSize: 13.5, color: '#6b7280', fontFamily: "'Gilroy', sans-serif" }}>{row.federal}</div>
                <div style={{ fontSize: 13.5, color: '#6b7280', fontFamily: "'Gilroy', sans-serif" }}>{row.ministerial}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, padding: '14px 18px', background: `${RED}08`, border: `1px solid ${RED}22`, borderRadius: 10, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <Icon name="alert" size={14} color={RED} />
            <p style={{ fontSize: 13, color: RED_DARK, lineHeight: 1.6, margin: 0, fontFamily: "'Gilroy', sans-serif" }}>
              <strong>This table is a general guide only.</strong> Review rights depend on the specific visa subclass, decision-maker, and jurisdiction. Always read your decision record. {DISCLAIMER}.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section style={{ background: GREY_BAND, padding: '88px 24px', borderTop: '1px solid #eef0f6' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common Questions" title="Refusal & review FAQs" accent={GOLD} />
          <FaqAccordion items={FAQS} accent={CAT_REVIEWS} />
        </div>
      </section>

      {/* ── Related pages ─────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '56px 32px 64px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <RelatedPages pages={RELATED} navigate={navigate} columns={3} />
        </div>
      </section>

      <CtaBand
        title={<>Visa refused? <em style={{ fontStyle: 'italic', color: GOLD }}>{"Don't wait."}</em></>}
        body="Navpreet Aulakh (MARN 2619467) handles urgent visa refusal cases — from ART lodgement through to hearing. The 28-day deadline is non-extendable. Contact us today."
        primaryCta={{ label: 'Get urgent advice', page: 'book-consultation' }}
        secondaryCta={{ label: 'ART Review →', page: 'art-review' }}
        accent={CAT_REVIEWS}
        footnote="MARA-registered · MARN 2619467 · Urgent cases welcome"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
