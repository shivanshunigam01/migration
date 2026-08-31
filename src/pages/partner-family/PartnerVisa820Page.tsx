import React, { useState } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  KeyFactsStrip,
  SectionHeading,
  StepTimeline,
  ComparisonTable,
  CardGrid,
  FaqAccordion,
  CtaBand,
  ComplianceDisclaimer,
  AnswerBox,
} from '@/components/page'
import type { TimelineStep, ComparisonRow, PageCard, FaqItem, KeyFact } from '@/components/page'
import { GOLD, NAVY, NAVY_DARK, HERO_GRAD , CAT_PARTNER } from '@/theme'
import Icon from '@/components/ui/Icon'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const ROSE = CAT_PARTNER
const AMBER = GOLD

// Local Ico alias removed — use global Icon directly

/* ─── Eligibility checker (page-specific interactive widget — stays local) ─── */
type CheckerQ = { id: string; text: string }
const CHECKER_QS: CheckerQ[] = [
  { id: 'inAus',       text: 'Are you currently in Australia?' },
  { id: 'substantive', text: 'Do you hold a substantive visa or a bridging visa?' },
  { id: 'sponsor',     text: 'Is your partner an Australian citizen, permanent resident, or eligible NZ citizen?' },
  { id: 'relationship',text: 'Are you married, in a registered relationship, or in a de facto relationship of 12+ months?' },
  { id: 'noRefusal',   text: 'Have you had no visa refusal or cancellation since your last entry to Australia?' },
]

function EligibilityChecker({ navigate }: { navigate: (page: string) => void }) {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({
    inAus: null, substantive: null, sponsor: null, relationship: null, noRefusal: null,
  })
  const [showResult, setShowResult] = useState(false)

  const allAnswered    = Object.values(answers).every(v => v !== null)
  const noSubstantive  = answers.substantive === false
  const refused        = answers.noRefusal   === false
  const notInAus       = answers.inAus       === false
  const noSponsor      = answers.sponsor     === false
  const noRelationship = answers.relationship === false
  const ineligible     = notInAus || noSponsor || noRelationship

  function toggle(id: string, val: boolean) {
    setAnswers(prev => ({ ...prev, [id]: prev[id] === val ? null : val }))
    setShowResult(false)
  }

  return (
    <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 8px 48px rgba(27,43,94,0.12)', border: '1px solid #e8edf6', overflow: 'hidden' }}>
      <div style={{ background: NAVY, padding: '18px 24px' }}>
        <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: 3 }}>Eligibility Check</div>
        <div style={{ color: '#fff', fontSize: 17, fontWeight: 700 }}>Are you eligible onshore?</div>
      </div>
      <div style={{ padding: '20px 24px' }}>
        {CHECKER_QS.map(q => (
          <div key={q.id} style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 14, color: NAVY, fontWeight: 600, lineHeight: 1.45, marginBottom: 8 }}>{q.text}</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[{ label: 'Yes', val: true }, { label: 'No', val: false }].map(opt => (
                <button key={opt.label} onClick={() => toggle(q.id, opt.val)}
                  style={{ flex: 1, padding: '8px', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s', border: `1.5px solid ${answers[q.id] === opt.val ? ROSE : '#e5e9f5'}`, background: answers[q.id] === opt.val ? `${ROSE}12` : '#f8fafd', color: answers[q.id] === opt.val ? ROSE : '#6b7280', fontFamily: "'Gilroy', sans-serif" }}>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
        {allAnswered && (
          <button onClick={() => setShowResult(true)}
            style={{ width: '100%', marginTop: 4, padding: '12px', background: ROSE, color: '#fff', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif" }}>
            Check my eligibility →
          </button>
        )}
        {showResult && (
          <div style={{ marginTop: 16 }}>
            {ineligible ? (
              <div style={{ background: 'rgba(220,38,38,0.08)', border: '1.5px solid rgba(220,38,38,0.4)', borderRadius: 12, padding: '16px 18px' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#dc2626', marginBottom: 6 }}>820/801 may not be available</div>
                <div style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.65 }}>
                  {notInAus       && <div style={{ marginBottom: 4 }}>• You must be in Australia at lodgement for the 820. Consider the offshore 309/100 instead.</div>}
                  {noSponsor      && <div style={{ marginBottom: 4 }}>• Your partner must be an Australian citizen, permanent resident, or eligible NZ citizen.</div>}
                  {noRelationship && <div>• The relationship must be married, registered, or de facto for at least 12 months.</div>}
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                <div style={{ background: 'rgba(245,161,36,0.08)', border: '1.5px solid rgba(245,161,36,0.3)', borderRadius: 12, padding: '14px 18px' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#0d1632', marginBottom: 4 }}>You appear eligible for the 820/801</div>
                  <div style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.65 }}>Your basic eligibility looks good. A full assessment by a registered agent is always recommended before lodgement.</div>
                </div>
                {noSubstantive && (
                  <div style={{ background: 'rgba(245,161,36,0.08)', border: '1.5px solid rgba(245,161,36,0.5)', borderRadius: 12, padding: '14px 18px' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: AMBER, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 4 }}><Icon name="alert" size={12} color={AMBER} /> Schedule 3 warning — no substantive visa</div>
                    <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.65 }}>Bridging visa holders who were not the holder of a substantive visa immediately before lodgement may attract Schedule 3 criteria. You will need to demonstrate compelling reasons for a waiver.{' '}<button onClick={() => navigate('visa-refusal-review')} style={{ background: 'none', border: 'none', color: ROSE, fontSize: 13, fontWeight: 700, cursor: 'pointer', padding: 0, textDecoration: 'underline', fontFamily: "'Gilroy', sans-serif" }}>See our review hub →</button></div>
                  </div>
                )}
                {refused && (
                  <div style={{ background: 'rgba(245,161,36,0.08)', border: '1.5px solid rgba(245,161,36,0.5)', borderRadius: 12, padding: '14px 18px' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: AMBER, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 4 }}><Icon name="alert" size={12} color={AMBER} /> Section 48 bar may apply</div>
                    <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.65 }}>If you have had a visa refused while onshore, the section 48 bar may prevent you from lodging most onshore applications. Certain visa subclasses including the 820 are exempt, but this depends on your specific history. Obtain advice before proceeding.{' '}<button onClick={() => navigate('visa-refusal-review')} style={{ background: 'none', border: 'none', color: ROSE, fontSize: 13, fontWeight: 700, cursor: 'pointer', padding: 0, textDecoration: 'underline', fontFamily: "'Gilroy', sans-serif" }}>See our review hub →</button></div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        <div style={{ marginTop: 14, fontSize: 11, color: '#9ca3af', lineHeight: 1.5 }}>This checker provides preliminary guidance only and is not migration advice. Always consult a registered agent.</div>
      </div>
    </div>
  )
}

/* ─── Evidence pillars (page-specific tabbed widget — stays local) ─── */
const PILLARS = [
  { title: 'Financial', color: '#2563eb', icon: 'dollar', examples: ["Joint bank accounts or regular transfers between partners", "Co-ownership of property or a vehicle", "Shared financial obligations — rent, bills, loans in both names", "Named as beneficiary on each other's insurance or superannuation", "Evidence of financially supporting each other during periods apart"] },
  { title: 'Household', color: '#0e7490', icon: 'home',   examples: ["Shared lease or mortgage in both names", "Division of household tasks and domestic responsibilities", "Utility accounts, rates notices showing shared address", "Care for children or dependants together", "Written statutory declarations describing shared domestic arrangements"] },
  { title: 'Social',   color: '#4f46e5', icon: 'users',   examples: ["Photos together across time — trips, family events, everyday moments", "Social media and online profiles showing relationship publicly", "Invitations, cards, correspondence addressed to you as a couple", "Statutory declarations from friends and family who know you as a couple", "Recognition by each other's family — contact records, visit evidence"] },
  { title: 'Commitment', color: ROSE,   icon: 'heart',   examples: ["Duration and history of the relationship — timeline narrative", "Future plans: property, children, shared goals", "Knowledge of each other's personal circumstances and daily life", "Marriage certificate or de facto relationship registration document", "Evidence of mutual commitment during periods of separation"] },
]

function PillarSelector() {
  const [openPillar, setOpenPillar] = useState<number>(0)
  const p = PILLARS[openPillar]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 24, maxWidth: 960, margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
        {PILLARS.map((pillar, i) => (
          <button key={i} onClick={() => setOpenPillar(i)}
            style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', background: openPillar === i ? '#fff' : '#f0f2f8', border: `2px solid ${openPillar === i ? pillar.color : 'transparent'}`, borderRadius: 12, cursor: 'pointer', textAlign: 'left' as const, boxShadow: openPillar === i ? '0 4px 20px rgba(27,43,94,0.1)' : 'none', transition: 'all 0.15s', fontFamily: "'Gilroy', sans-serif" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: openPillar === i ? `${pillar.color}15` : '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name={pillar.icon} size={16} color={openPillar === i ? pillar.color : '#9ca3af'} />
            </div>
            <span style={{ fontSize: 15, fontWeight: 700, color: openPillar === i ? pillar.color : '#6b7280' }}>{pillar.title}</span>
          </button>
        ))}
      </div>
      <div style={{ background: '#fff', border: `2px solid ${p.color}25`, borderRadius: 16, padding: '28px 32px', boxShadow: '0 4px 24px rgba(27,43,94,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: `${p.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name={p.icon} size={20} color={p.color} />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: p.color, marginBottom: 2 }}>Pillar {openPillar + 1} of 4</div>
            <div style={{ fontSize: 19, fontWeight: 700, color: NAVY }}>{p.title} Evidence</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
          {p.examples.map((ex, ei) => (
            <div key={ei} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 14px', background: '#f8f9fc', borderRadius: 10, border: '1px solid #f0f2f8' }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: `${p.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                <Icon name="check" size={11} color={p.color} />
              </div>
              <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.5 }}>{ex}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, background: `${p.color}08`, border: `1px solid ${p.color}25`, borderRadius: 12, padding: '14px 16px' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: p.color, marginBottom: 4 }}>For Both Stages</div>
          <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>Begin building this evidence from the first day of your 820 grant. DHA will request an updated {p.title.toLowerCase()} evidence statement when it assesses the 801 stage approximately two years from lodgement.</div>
        </div>
      </div>
    </div>
  )
}

/* ─── Data ─── */
const STATS: KeyFact[] = [
  { value: '1',       label: 'Application for both stages' },
  { value: '1',       label: 'Government charge paid' },
  { value: '~2 yrs',  label: 'Before 801 assessment' },
  { value: 'Onshore', label: 'Required at lodgement & 820 grant' },
]

const FLOW_STAGES: TimelineStep[] = [
  { code: 'LODGE', title: '820 Lodgement',   color: '#6b7280', duration: 'Day 0',          desc: 'Lodge Form 47SP + 40SP via ImmiAccount. Pay one government fee. Must be onshore. Bridging Visa A activates automatically. Two-year clock starts.' },
  { code: 'BVA',   title: 'Bridging Visa A', color: '#2563eb', duration: 'While pending',   desc: "Grants lawful stay in Australia while the 820 is assessed. Work rights preserved. Apply for a BVB before any overseas travel — BVA alone won't allow re-entry." },
  { code: '820',   title: '820 Grant',       color: '#4f46e5', duration: '20–36+ months',   desc: 'Temporary Partner visa granted. Must be in Australia at the time of grant. Full work rights, Medicare access, unlimited travel (with BVB).' },
  { code: '2YR',   title: '2-Year Mark',     color: AMBER,     duration: 'From lodgement',  desc: 'Two years from lodgement date — not from 820 grant. DHA may now assess the 801 stage and will request updated evidence of the ongoing relationship.' },
  { code: '801',   title: '801 Assessment',  color: '#0e7490', duration: 'Automatic',        desc: 'DHA reassesses the relationship. Updated evidence required. Exceptions for family violence or children apply if relationship ended.' },
  { code: 'PR',    title: '801 Grant',       color: '#0d1632', duration: 'Permanent',        desc: 'Permanent Partner visa granted. Right to live, work and study in Australia indefinitely. Pathway to citizenship after 4 years as a PR.' },
]

const COMPARE_COLS = [
  { key: 'v820', label: 'Subclass 820/801 (Onshore)', highlight: true },
  { key: 'v309', label: 'Subclass 309/100 (Offshore)' },
]

const COMPARE_ROWS: ComparisonRow[] = [
  { feature: 'Where at lodgement',         v820: 'Must be in Australia (onshore)',                   v309: 'Must be outside Australia (offshore)' },
  { feature: 'Where at first-stage grant', v820: 'Can be anywhere',                                   v309: 'Must be outside Australia' },
  { feature: 'First stage visa',           v820: 'Subclass 820 — Temporary Partner',                  v309: 'Subclass 309 — Temporary Partner' },
  { feature: 'Permanent stage',            v820: 'Subclass 801',                                       v309: 'Subclass 100' },
  { feature: '2-year clock starts',        v820: 'Date of lodgement',                                  v309: 'Date of lodgement' },
  { feature: 'Travel rights on temp visa', v820: 'Unlimited travel',                                   v309: 'Unlimited travel' },
  { feature: 'Work rights',                v820: 'Full — any job, any hours',                          v309: 'Full — any job, any hours' },
  { feature: 'Medicare',                   v820: 'Yes — from grant of 820',                            v309: 'Yes (where reciprocal agreement exists)' },
  { feature: 'Bridging visa on lodgement', v820: 'Yes — Bridging Visa A activates automatically',      v309: 'N/A (applicant is offshore)' },
  { feature: 'Govt fee (2025–26)',          v820: 'AUD $9,095 primary applicant*',                     v309: 'AUD $9,095 primary applicant*' },
  { feature: 'Current processing',         v820: '20–36+ months (75th percentile)',                    v309: '18–36+ months (75th percentile)' },
]

const STAGE_801_CARDS: PageCard[] = [
  { title: 'The 2-year rule and timing', color: GOLD, body: 'The two-year qualifying period runs from the date the original 820 application was lodged — not from the date the 820 was granted. If the 820 takes 24 months to be decided, the 801 assessment could commence shortly after the 820 grant. DHA will write to you when it is ready to assess the 801 stage and will request updated evidence of the relationship.' },
  { title: 'Evidence refresh for the 801', color: '#0369a1', body: 'DHA will want to see evidence of the continuing relationship across the post-820 period. This includes: updated bank statements, evidence of cohabitation, new photos with dates and context, updated statutory declarations from people who know you as a couple, and a narrative describing how the relationship has developed since the 820 was granted. Begin building this file from day one of your 820 grant.' },
  { title: 'Family violence provisions', color: 'rgba(79,70,229,0.5)', body: "If the applicant has experienced family violence perpetrated by the Australian sponsor (or a member of the sponsor's family unit), the 801 may still be granted even if the relationship has ended. The applicant must provide relevant evidence — medical records, police reports, restraining orders, or statutory declarations. Seek specialist advice immediately if this situation applies." },
  { title: 'If the relationship ends', color: '#dc2626', body: 'If the relationship breaks down genuinely before the 801 is decided, the 801 will generally not be granted — unless the family violence or children exceptions apply. If children of the relationship are involved, DHA has a discretion to grant the 801 in the best interests of those children even if the couple has separated. Document all child-related matters carefully throughout the process.' },
]

const FAQ_ITEMS: FaqItem[] = [
  { question: 'Do I need to be in Australia on a substantive visa when I lodge?', answer: 'You must be onshore at lodgement. If you hold a bridging visa rather than a substantive visa at lodgement, Schedule 3 criteria may apply, which requires you to demonstrate compelling reasons. This is a significant legal hurdle. A registered agent should assess your specific situation before you lodge.' },
  { question: 'What happens to my current visa when I lodge the 820?', answer: "On lodgement of a valid 820 application, a Bridging Visa A (BVA) is automatically granted if you hold a substantive visa. The BVA allows you to remain in Australia lawfully while the application is processed and carries the same conditions as your previous substantive visa (including work rights) unless varied. If you hold a BVA already, your BVA conditions continue." },
  { question: 'Can I travel overseas while the 820 is pending?', answer: "A Bridging Visa A does not allow re-entry to Australia. If you want to travel and return while your 820 is being processed, you need to apply for a Bridging Visa B (BVB) before you depart. Failure to do this means you cannot return to Australia on the BVA. Your agent should flag the BVB requirement before any overseas travel." },
  { question: 'When does the permanent 801 stage get assessed?', answer: 'The two-year qualifying period runs from the date the application was lodged — not from the 820 grant date. DHA will reassess the 801 stage once that period has elapsed and your relationship still meets the criteria. You do not need to lodge a separate application. DHA will write to you to request updated evidence.' },
  { question: 'What evidence do I need to submit at the 801 stage?', answer: 'At the 801 stage DHA will request an updated evidence statement covering the period since your 820 was granted. This typically includes updated financial evidence (bank statements, joint accounts), proof of cohabitation, social evidence (photos, declarations), and a narrative describing how your relationship has continued. Begin building this evidence file from day one of your 820 grant.' },
  { question: 'What if the relationship ends before the 801 is decided?', answer: 'If the relationship breaks down genuinely and you separate, the 801 will generally not be granted. However, there are important exceptions: if there are dependent children of the relationship, or if the Australian sponsor or their family member subjected the applicant to family violence, the 801 may still be granted on those grounds. Seek urgent advice from a registered agent if your relationship ends before the 801 decision.' },
  { question: 'What is the section 48 bar and does it affect me?', answer: 'Section 48 of the Migration Act prevents certain applicants who have had a visa refused or cancelled while onshore from making further visa applications in Australia. The 820 is one of a limited class of visa subclasses that can still be applied for despite the s48 bar — but only in specific circumstances. If you have a prior refusal while in Australia, you must get qualified advice before lodging.' },
  { question: 'How is the 820/801 different from the 309/100?', answer: "The only practical difference is location. The 820/801 is for applicants already in Australia; the 309/100 is for applicants offshore. Both cost the same government fee, both follow the same two-stage structure, and both lead to permanent residence. The 820 grants a Bridging Visa A automatically on lodgement; the 309 does not (the applicant remains offshore). Choose based solely on where you are — and where you plan to be — at lodgement." },
]

/* ─── Page ─── */
export default function PartnerVisa820Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => {
    document.title = PAGE_META['partner-visa-820-801'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#ffffff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Partner Visa Onshore (820/801)', url: 'https://www.nanakmigration.com.au/partner-visa-820-801' },
        ]}
        faqs={FAQ_ITEMS}
        service={{ name: 'Partner Visa Onshore (Subclass 820/801)', description: PAGE_META['partner-visa-820-801'].metaDescription, url: 'https://www.nanakmigration.com.au/partner-visa-820-801' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Partner & Family', page: 'partner-family-visas' },
          { label: 'Partner Visa Onshore 820/801' },
        ]}
      />

      {/* ── HERO (flagship: two-column) ── */}
      <div style={{ background: HERO_GRAD, padding: '64px 32px 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 580px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <span style={{ background: `${ROSE}18`, color: ROSE, border: `1px solid ${ROSE}40`, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '4px 12px', borderRadius: 20 }}>Subclass 820 / 801</span>
                <span style={{ color: '#6b7280', fontSize: 13 }}>Onshore · One application · Two stages</span>
              </div>
              <h1 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 50, fontWeight: 700, color: NAVY, lineHeight: 1.1, margin: '0 0 22px' }}>
                Partner Visa Onshore —{' '}
                <em style={{ fontStyle: 'italic', color: ROSE }}>820 and 801</em>
              </h1>
              <p style={{ fontSize: 18, color: '#374151', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 500 }}>
                The onshore two-stage partner visa. Lodge once from inside Australia and receive the temporary 820 first — the permanent 801 follows approximately two years after lodgement.
              </p>
              <div style={{ background: '#ffffff', border: '1px solid #e5e9f5', borderLeft: `4px solid ${ROSE}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', marginBottom: 32, boxShadow: '0 2px 16px rgba(27,43,94,0.07)' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                  <Icon name="info" size={16} color={ROSE} />
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ROSE }}>The Short Answer</span>
                </div>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                  The <strong style={{ color: NAVY }}>820/801 is the onshore two-stage partner visa</strong> for people already in Australia. You lodge <strong>one application</strong> and pay <strong>one government charge</strong>. The temporary 820 is decided first; the permanent 801 is assessed approximately two years after the original lodgement date. You must be <strong>sponsored by an Australian citizen, permanent resident, or eligible NZ citizen</strong>, and you must be <strong>onshore at lodgement and onshore at the time the 820 is granted</strong>.
                </p>
                <p style={{ fontSize: 12.5, color: '#9ca3af', margin: '10px 0 0', fontStyle: 'italic' }}>Verified as at 1 July 2026 — verify current fees and processing times with the Department of Home Affairs.</p>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <a href="#eligibility-checker" style={{ backgroundColor: GOLD, color: NAVY_DARK, padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, boxShadow: "0 4px 20px rgba(245,161,36,0.40)" }}>Check My Eligibility</a>
                <a href="#evidence-pillars"    style={{ backgroundColor: 'transparent', color: NAVY, border: `2px solid ${NAVY}30`, padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 600 }}>Evidence Guide →</a>
              </div>
            </div>
            <div id="eligibility-checker" style={{ flex: 1, paddingBottom: 40 }}>
              <EligibilityChecker navigate={navigate} />
            </div>
          </div>
        </div>
        <div style={{ height: 40 }} />
      </div>

      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            The Partner Visa Onshore (subclass 820/801) is a two-stage visa for applicants already in Australia who are in a genuine relationship with an Australian citizen, permanent resident, or eligible New Zealand citizen, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. You lodge one application and pay one government fee — the temporary subclass 820 is granted first, and the permanent subclass 801 is assessed automatically approximately two years from the lodgement date. You must generally be in Australia at both lodgement and at the time the 820 is granted.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* ── STAT TILES ── */}
      <KeyFactsStrip facts={STATS} accent={ROSE} />

      {/* ── HOW THE TWO STAGES WORK ── */}
      <section style={{ background: '#fafbfe', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading kicker="Section 1" title="How the Two Stages Work" intro="One lodgement. Two assessments. The 801 is assessed automatically — you never re-apply." accent={ROSE} />
          <StepTimeline steps={FLOW_STAGES} variant="flow" accent={ROSE} />
          <div style={{ maxWidth: 800, margin: '32px auto 0', background: `${ROSE}08`, border: `2px solid ${ROSE}25`, borderRadius: 16, padding: '20px 28px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `${ROSE}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name="alert" size={16} color={ROSE} />
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 4 }}>Must be onshore at both lodgement and the 820 grant</div>
              <div style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.7 }}>Unlike the 309/100 offshore route, the 820 requires you to be in Australia at lodgement. You must also be in Australia when the 820 is granted. If you depart Australia during the processing period without a Bridging Visa B (BVB) and your 820 is granted while you are offshore, you will not meet the grant location requirement.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 820 vs 309 COMPARISON ── */}
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeading kicker="Section 2" title="820 vs 309 — Which Applies to You?" intro="Same destination. Same government fee. The only practical difference is where you are at lodgement — and where you must be at the first grant." accent={ROSE} />
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <button onClick={() => navigate('partner-visa-309-100')} style={{ background: 'none', border: 'none', color: ROSE, fontSize: 15, fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', fontFamily: "'Gilroy', sans-serif" }}>Read the full 309/100 guide →</button>
          </div>
          <ComparisonTable columns={COMPARE_COLS} rows={COMPARE_ROWS} accent={ROSE} caption="* Verified as at 1 July 2026 — verify current fees with the Department of Home Affairs before lodgement." />
        </div>
      </section>

      {/* ── FOUR EVIDENCE PILLARS ── */}
      <section id="evidence-pillars" style={{ background: '#fafbfe', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading kicker="Section 3" title="The Four Evidence Pillars" intro="DHA assesses genuineness across four domains. Select each pillar to see five example documents that count. Strong evidence in all four pillars is critical for both the 820 and 801 stages." accent={ROSE} />
          <PillarSelector />
        </div>
      </section>

      {/* ── SCHEDULE 3 AND SECTION 48 BAR ── */}
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Section 4" title="Schedule 3 and the Section 48 Bar" intro="Two legal provisions that can significantly complicate an onshore 820 application. Both require specialist advice before lodgement." accent={ROSE} />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>
            {/* Schedule 3 */}
            <div style={{ background: 'rgba(245,161,36,0.08)', border: `2px solid ${AMBER}40`, borderRadius: 16, padding: '28px 32px' }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${AMBER}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="alert" size={18} color={AMBER} />
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: AMBER, marginBottom: 4 }}>Schedule 3 Criteria</div>
                  <div style={{ fontSize: 19, fontWeight: 700, color: NAVY }}>When does Schedule 3 apply?</div>
                </div>
              </div>
              <div style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                <p style={{ margin: 0 }}>Schedule 3 is triggered when an applicant was <strong>not the holder of a substantive visa</strong> immediately before lodging the 820 application. In practice this means applicants who let their substantive visa expire (and are holding a Bridging Visa) before lodgement, or who entered on one visa and allowed it to lapse before lodging.</p>
                <p style={{ margin: 0 }}>If Schedule 3 applies, the applicant must demonstrate <strong>compelling reasons</strong> why it would be in the public interest to waive the criteria. This is a genuinely difficult threshold to meet and is assessed case by case.</p>
                <p style={{ margin: 0 }}>Common compelling reasons include: length and genuineness of the relationship, Australian-citizen children, significant hardship to the sponsor, and medical or humanitarian circumstances. There is no guaranteed waiver — the decision-maker has broad discretion.</p>
                <div style={{ background: `${AMBER}10`, borderRadius: 10, padding: '12px 16px', display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 4 }}>
                  <Icon name="info" size={14} color={AMBER} />
                  <div style={{ fontSize: 14, color: '#0d1632' }}>If you are currently on a Bridging Visa, seek registered agent advice <strong>before</strong> lodging. The window to lodging a substantive visa may still be open depending on your situation. <button onClick={() => navigate('visa-refusal-review')} style={{ background: 'none', border: 'none', color: ROSE, fontSize: 14, fontWeight: 700, cursor: 'pointer', padding: 0, textDecoration: 'underline', fontFamily: "'Gilroy', sans-serif" }}>See our review hub</button> for complex onshore cases.</div>
                </div>
              </div>
            </div>

            {/* Section 48 bar */}
            <div style={{ background: 'rgba(220,38,38,0.08)', border: `2px solid ${ROSE}30`, borderRadius: 16, padding: '28px 32px' }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${ROSE}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="x" size={18} color={ROSE} />
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ROSE, marginBottom: 4 }}>Section 48 Bar</div>
                  <div style={{ fontSize: 19, fontWeight: 700, color: NAVY }}>Previous onshore refusal or cancellation?</div>
                </div>
              </div>
              <div style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                <p style={{ margin: 0 }}>Section 48 of the Migration Act 1958 bars certain applicants who have had a visa refused or cancelled while in Australia from lodging most further visa applications onshore. The bar is triggered by the refusal or cancellation itself — not by the reason for it.</p>
                <p style={{ margin: 0 }}>The <strong>Subclass 820 is one of a limited class of visa subclasses that is exempt from the s48 bar</strong> — meaning you may still be able to lodge an 820 application even if you have had a prior refusal. However, the exemption is not automatic and depends on your specific circumstances.</p>
                <p style={{ margin: 0 }}>If a section 48 bar applies to you, you should also understand whether the <strong>Administrative Review Tribunal (ART)</strong> review option for your prior refusal is still open. Both strategies should be considered together before any lodgement decision.</p>
                <div style={{ background: `${ROSE}08`, borderRadius: 10, padding: '12px 16px', display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 4 }}>
                  <Icon name="info" size={14} color={ROSE} />
                  <div style={{ fontSize: 14, color: '#0d1632' }}>Do not lodge blindly if you have had a prior onshore refusal. A wrongly lodged application can have consequences. <button onClick={() => navigate('visa-refusal-review')} style={{ background: 'none', border: 'none', color: ROSE, fontSize: 14, fontWeight: 700, cursor: 'pointer', padding: 0, textDecoration: 'underline', fontFamily: "'Gilroy', sans-serif" }}>Speak to our review team first</button>.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT CHANGES AT THE 801 STAGE ── */}
      <section style={{ background: NAVY, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Section 5" title="What Changes at the 801 Stage" intro="The 801 is not a new application — it is DHA reassessing your case automatically. But several things require active attention." accent={ROSE} light />
          <CardGrid cards={STAGE_801_CARDS} columns={2} dark />
          <div style={{ marginTop: 28, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '16px 24px', textAlign: 'center' }}>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>All information verified as at 1 July 2026. Processing times and fees change regularly — always verify with the Department of Home Affairs before lodgement.</span>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#fafbfe', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="820 / 801 FAQ" accent={ROSE} />
          <FaqAccordion items={FAQ_ITEMS} accent={ROSE} />
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBand
        title={<>Your relationship is real.<br /><span style={{ color: ROSE }}>Your evidence should prove it.</span></>}
        body="Navpreet Aulakh (MARN 2619467) reviews onshore partner visa cases from evidence structuring through to the 801 grant — including Schedule 3 waiver submissions and complex onshore histories."
        primaryCta={{ label: 'Book a Relationship Evidence Review', page: 'home' }}
        accent={ROSE}
        footnote="Free initial assessment · MARN 2619467"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="July 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
