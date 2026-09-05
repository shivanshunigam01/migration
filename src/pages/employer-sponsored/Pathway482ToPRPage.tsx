import React from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  KeyFactsStrip,
  SectionHeading,
  StepTimeline,
  ComparisonTable,
  EvidenceChecklist,
  Callout,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  AnswerBox,
  ComplianceDisclaimer,
  OnThisPageNav,
} from '@/components/page'
import type {
  KeyFact,
  TimelineStep,
  ComparisonColumn,
  ComparisonRow,
  ChecklistGroup,
  FaqItem,
  RelatedPage,
  NavSection,
} from '@/components/page'
import { GOLD, NAVY, NAVY_DARK , CAT_EMPLOYER } from '@/theme'
import Icon from '@/components/ui/Icon'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const TEAL = CAT_EMPLOYER   /* accent for this page */
const AMBER   = '#f5a124'
const GREEN   = '#f5a124'
const ROSE    = '#e11d48'
const BORDER  = '#e8edf6'
const GREY_BG = '#fafbfe'
const CURRENT_AS_AT = 'July 2026'

/* ─── On-this-page ─── */
const TOC: NavSection[] = [
  { id: 'key-facts',        label: 'Key facts' },
  { id: 'timeline',         label: 'Timeline' },
  { id: 'trt-vs-de',        label: 'TRT vs Direct Entry' },
  { id: 'streams',          label: '482 streams & PR' },
  { id: 'pathway-risks',    label: 'What can break the pathway' },
  { id: 'evidence',         label: 'Evidence checklist' },
  { id: 'transitional',     label: 'Transitional arrangements' },
  { id: 'faq',              label: 'FAQ' },
  { id: 'related',          label: 'Related pages' },
]

/* ─── Key facts ─── */
const KEY_FACTS: KeyFact[] = [
  { icon: 'clock',     value: 'Generally 2 years',   label: 'Qualifying employment period',    note: 'With the same employer in the same occupation on a qualifying 482 visa.' },
  { icon: 'briefcase', value: 'Same employer',        label: 'Employer continuity required',    note: 'The 186 must be nominated by the same employer who held the 482 sponsorship.' },
  { icon: 'layers',    value: 'Same occupation',      label: 'Occupation continuity required',  note: 'The nominated occupation must generally match the 482 nominated occupation.' },
  { icon: 'user',      value: 'Generally under 45',  label: 'Age at 186 lodgement',            note: 'Limited exemptions exist — seek advice before the 186 application is lodged.' },
  { icon: 'globe',     value: 'Competent English',   label: 'English requirement',             note: 'Exemptions may apply — confirm your status with a registered migration agent.' },
  { icon: 'star',      value: 'No skills assessment', label: 'TRT stream advantage',           note: 'In most cases a separate skills assessment is not required for TRT.' },
]

/* ─── Step timeline ─── */
const TIMELINE_STEPS: TimelineStep[] = [
  {
    code: '01',
    title: 'Subclass 482 granted',
    duration: 'Day zero',
    color: TEAL,
    points: [
      'Employer holds Approved Sponsor status and the nomination has been approved.',
      'The 482 is granted in the Core Skills, Specialist Skills, or Labour Agreement stream.',
      'The qualifying work period for TRT generally begins from the date of 482 grant — not from when employment commenced.',
      'Confirm with your employer that they intend to support a 186 TRT nomination when you become eligible.',
    ],
  },
  {
    code: '02',
    title: 'Qualifying work period',
    duration: 'Generally at least 2 years',
    color: TEAL,
    points: [
      'Full-time work in the nominated occupation with the same employer who holds the approved sponsorship.',
      'The work must be at the skill level matched to the 482 nominated occupation — duties should align with the ANZSCO description.',
      'Part-time or casual arrangements may not satisfy the full-time employment requirement; seek advice if your employment pattern changes.',
      'Maintain evidence throughout: payslips, group certificates, superannuation statements, and employment records.',
    ],
  },
  {
    code: '03',
    title: "Employer lodges 186 nomination",
    duration: 'After eligibility is reached',
    color: TEAL,
    points: [
      'The nominating employer must hold or renew Standard Business Sponsorship approval for subclass 186.',
      'The nomination must be for the same occupation as the 482 (or a closely related occupation — seek advice).',
      'The employer pays the Skilling Australians Fund (SAF) levy applicable to a permanent nomination.',
      'Nomination can be lodged concurrently with the 186 visa application or before it.',
    ],
  },
  {
    code: '04',
    title: '186 visa application lodged',
    duration: 'Concurrent with or after nomination',
    color: TEAL,
    points: [
      'The applicant lodges the 186 application, generally specifying the TRT stream.',
      'Health examinations (via HAP ID) and police clearances are required and must be arranged promptly.',
      'Family members to be included in the application should be named at lodgement.',
      'The 482 visa conditions continue to apply — the applicant must remain with the sponsoring employer while the 186 is pending.',
    ],
  },
  {
    code: '05',
    title: '186 visa decided',
    duration: 'Processing times vary',
    color: GREEN,
    points: [
      'If approved, permanent residence is granted — generally no further bridging period.',
      'Processing times for TRT stream 186 applications vary significantly and can take many months; the Department of Home Affairs is the authoritative source for current times.',
      'If a request for further information (RFI) is received, respond promptly and comprehensively.',
      'If refused, merits review at the Administrative Review Tribunal (ART) may be available within a strict timeframe.',
    ],
  },
]

/* ─── TRT vs Direct Entry comparison ─── */
const COMPARE_COLS: ComparisonColumn[] = [
  { key: 'trt', label: 'TRT Stream',    highlight: true },
  { key: 'de',  label: 'Direct Entry' },
]

const COMPARE_ROWS: ComparisonRow[] = [
  {
    feature: 'Who generally uses it',
    trt: 'Current 482 holders who have completed at least 2 years of full-time employment with the same nominating employer in the same occupation',
    de:  'Overseas applicants or Australian workers who have not completed 2 years of 482 employment with the nominating employer; those sponsored by a new employer',
  },
  {
    feature: 'Skills assessment',
    trt: 'Generally not required — employment history serves as evidence of skills',
    de:  'Positive skills assessment from the relevant assessing authority generally required',
  },
  {
    feature: 'Work experience',
    trt: 'At least 2 years full-time with the nominating employer on a qualifying 482 visa',
    de:  'At least 3 years full-time equivalent in the nominated occupation (overseas experience may count)',
  },
  {
    feature: 'Employer continuity',
    trt: 'Must be the same employer who held the 482 sponsorship; changing employer resets the clock',
    de:  'A new employer can nominate; no requirement for prior employment with that employer',
  },
  {
    feature: 'Occupation continuity',
    trt: 'Nominated occupation must generally match the 482 occupation; changes may disqualify the TRT pathway',
    de:  'Occupation must be on the relevant list and meet skills requirements; not tied to a prior 482 occupation',
  },
  {
    feature: 'Age',
    trt: 'Generally under 45 at time of 186 application; limited exemptions apply',
    de:  'Generally under 45 at time of 186 application; same limited exemptions',
  },
  {
    feature: 'Typical timing',
    trt: 'Nomination lodged once 2-year qualifying period is reached; 186 decision adds further processing time',
    de:  'Can lodge once skills assessment is obtained; no mandatory qualifying period with the current employer',
  },
]

/* ─── 482 streams and PR pathway ─── */
const STREAMS = [
  {
    name: 'Core Skills stream',
    code: 'Core Skills',
    color: TEAL,
    eligible: true,
    body: "Holders of a 482 in the Core Skills stream are generally eligible for the TRT pathway once they have completed at least two years of full-time employment with the same employer in the same nominated occupation. The occupation must be on the Core Skills Occupation List (CSOL) at the time of the 186 nomination — it is not sufficient that it was on the list at the time the 482 was granted.",
    note: 'Verify the occupation remains on the CSOL at the time of the 186 nomination, not only at 482 grant.',
  },
  {
    name: 'Specialist Skills stream',
    code: 'Specialist Skills',
    color: '#4f46e5',
    eligible: true,
    body: "Workers sponsored under the Specialist Skills stream (high-earning specialists, no occupation list requirement) may be eligible for the TRT pathway, though the specific conditions may differ. The nominated occupation for the 186 must generally be on a relevant list unless covered by a Labour Agreement. Specialist Skills 482 holders considering a 186 TRT pathway should obtain specialist advice, as the interaction between the stream conditions and the 186 eligibility criteria is complex.",
    note: 'Specialist Skills 482 holders should obtain targeted advice — stream-specific conditions apply to the TRT pathway.',
  },
  {
    name: 'Labour Agreement stream',
    code: 'Labour Agreement',
    color: AMBER,
    eligible: true,
    body: "Where a worker holds a 482 under a Labour Agreement, the PR pathway — including whether TRT or Direct Entry applies, the qualifying period, and the relevant occupation requirements — is generally determined by the terms of the specific labour agreement. Some labour agreements include explicit 186 TRT provisions; others require a Direct Entry nomination or a bespoke arrangement. The terms of the agreement and any modifications should be reviewed carefully.",
    note: 'The specific labour agreement governs the PR pathway; its terms override standard CSOL requirements in most cases.',
  },
]

/* ─── Pathway risks ─── */
const RISKS = [
  {
    title: 'Changing employer',
    icon: 'briefcase',
    severity: 'high' as const,
    body: "The TRT stream requires the 186 nomination to come from the same employer who held the 482 sponsorship. If you change employers — even to a related entity — the qualifying period generally resets. The new employer must become an approved sponsor, nominate you for a 482, and you will generally need to complete a further two years before they can nominate you for a 186 under TRT. Direct Entry from a new employer may be an alternative but requires a skills assessment.",
  },
  {
    title: 'Changing occupation',
    icon: 'layers',
    severity: 'high' as const,
    body: "Working in duties that no longer match the ANZSCO unit group of the 482 nominated occupation can undermine the TRT pathway. The Department of Home Affairs assesses whether the work actually performed matches the nominated occupation, not just the job title. Gradual role changes in technology, management, or evolving industries are a common risk. If duties have materially changed, seek advice before the 186 nomination is lodged.",
  },
  {
    title: 'Gaps in employment',
    icon: 'clock',
    severity: 'medium' as const,
    body: "The qualifying work period generally requires continuous full-time employment. Extended leave without pay, stand-down periods, or breaks in employment may reduce the qualifying period or not count towards it. Statutory leave — such as annual leave, personal leave, and parental leave — is generally included in the qualifying period, but the specific rules should be confirmed. Gaps should be documented and, if material, discussed with a migration agent before the nomination is lodged.",
  },
  {
    title: 'Approaching visa expiry',
    icon: 'alert',
    severity: 'high' as const,
    body: "The 482 visa must generally be in effect at the time the 186 application is lodged. If the 482 expires before the 186 is decided, a bridging visa may apply — but only if the 186 was lodged before the 482 expired and while the holder was in Australia. Lodging the 186 in sufficient time before the 482 expires is important. If the 482 expires while the 186 is pending and no bridging visa applies, the applicant would generally need to depart Australia.",
  },
  {
    title: 'Employer withdrawing the nomination',
    icon: 'xcirc',
    severity: 'high' as const,
    body: "The 186 nomination is lodged by the employer, not the applicant. If the employer withdraws the approved nomination — for example, because the business closes, the employment relationship ends, or the employer decides not to proceed — the 186 application may be refused or become invalid. The applicant has limited ability to prevent a nomination withdrawal. Maintaining a good employment relationship and seeking advice promptly if there are any signs of difficulty is advisable.",
  },
]

const SEVERITY_COLORS = { high: ROSE, medium: AMBER, low: TEAL }

/* ─── Evidence checklist ─── */
const EVIDENCE_GROUPS: ChecklistGroup[] = [
  {
    title: 'Identity and visa status',
    icon: 'user',
    color: NAVY,
    items: [
      'Applicant passport (all pages, including old passports if applicable)',
      'Current 482 visa grant notice',
      'Evidence of approved nomination for the qualifying 482 position',
      'Visa entitlement record from VEVO confirming current 482 status',
    ],
  },
  {
    title: 'Qualifying employment with the nominating employer',
    icon: 'briefcase',
    color: TEAL,
    items: [
      'Payslips covering the full two-year qualifying period (every pay period)',
      'Superannuation statements for the qualifying period',
      'ATO income statements or payment summaries for each financial year of qualifying employment',
      'Employment contract or contracts covering the qualifying period',
      'Employer statutory declaration or reference letter confirming dates of employment, duties performed, and hours worked',
    ],
  },
  {
    title: "Employer's sponsorship and nomination",
    icon: 'building',
    color: TEAL,
    items: [
      "Current Standard Business Sponsorship approval (employer must renew if expired)",
      'Approved 186 nomination notice from the Department of Home Affairs',
      'Evidence of SAF levy payment for the 186 nomination',
      'Evidence that the nominated occupation matches the 482 nominated occupation',
    ],
  },
  {
    title: 'Age',
    icon: 'user',
    color: AMBER,
    items: [
      'Birth certificate or passport confirming date of birth',
      'If relying on an age exemption — documentary evidence supporting the exemption claim',
    ],
  },
  {
    title: 'English proficiency',
    icon: 'globe',
    color: '#2563eb',
    items: [
      'English language test results within the validity period (IELTS, PTE Academic, TOEFL iBT, or OET)',
      'Evidence of citizenship of an exempt country if relying on a citizenship exemption',
      'Evidence of five or more years of full-time study in English if relying on that exemption',
    ],
  },
  {
    title: 'Health and character',
    icon: 'shield',
    color: GREEN,
    items: [
      'HAP ID confirmation and medical examination results from a DHA-approved panel physician',
      'Police clearances for all countries where the applicant has lived for 12+ months since age 16',
      'AFP National Police Certificate (for Australian periods of residence)',
    ],
  },
]

/* ─── FAQ ─── */
const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Does the two-year qualifying period count from when I started working or from when my 482 was granted?",
    answer: "In most cases, only employment while holding the qualifying 482 visa counts towards the two-year period for the Temporary Residence Transition stream. Work performed before the 482 was granted — including work on a bridging visa or a prior temporary visa — is generally not counted. The qualifying period typically begins on the date the 482 visa is granted, not the date employment commenced.",
  },
  {
    question: "My 482 is about to expire before I reach the two-year mark. What should I do?",
    answer: "If your 482 will expire before you reach the two-year qualifying period, your employer may be able to renew or lodge a new 482 nomination to extend your stay. You would generally need to have the new 482 granted (or be on a bridging visa associated with a pending 482 application) and continue the qualifying employment to accumulate the full two-year period. Once the two years is reached, the 186 can be lodged. Seek advice from a registered migration agent before your current 482 expires — the timing is critical.",
  },
  {
    question: "I changed employers and lost my TRT eligibility. Can I still get PR through a different stream?",
    answer: "Yes, in many cases. If you no longer qualify for TRT with your current employer, the Direct Entry stream of the 186 may be an alternative, provided you have at least three years of relevant full-time equivalent work experience in the nominated occupation (overseas experience can count), have a skills assessment from the correct assessing authority, and meet the other requirements. The new employer would need to become an approved sponsor and nominate you. Separately, points-tested permanent visa pathways (189, 190, 491) do not require employer continuity.",
  },
  {
    question: "Does my occupation need to still be on the CSOL at the time of the 186 nomination?",
    answer: "In most cases, yes. The occupation nominated for the 186 generally must be eligible for the 186 visa at the time the nomination is lodged — not merely at the time the 482 was granted. If an occupation is removed from the relevant list between your 482 grant and your 186 nomination lodgement, it may not meet the list requirement for the 186 Direct Entry stream. For TRT, the interaction between the stream conditions and the occupation list is nuanced — seek specialist advice if your occupation has changed lists.",
  },
  {
    question: "Can my partner and children be included in the 186 application?",
    answer: "Yes. Eligible secondary applicants — including a de facto partner and dependent children — can generally be included in the 186 application. They will need to meet health and character requirements, and will be granted permanent residence if the primary application is approved. Secondary applicants who were not included in the original 482 application can still be added to the 186 application, provided they are identified at the time of lodgement.",
  },
  {
    question: "Is there an age limit and what exemptions exist?",
    answer: "Applicants are generally required to be under 45 years of age at the time the 186 visa application is lodged. Limited legislative exemptions apply, including for certain academics nominated by an Australian university and for some high-earning specialists. These exemptions are assessed on a case-by-case basis and have strict qualifying criteria. If you are 45 or older, obtain specialist advice before the nomination is lodged — the nomination itself may be affected by the age requirement.",
  },
  {
    question: "What if the Department asks for more information after I lodge?",
    answer: "Requests for further information (RFIs) from the Department of Home Affairs are common in 186 applications. They typically ask for additional evidence about employment, English, health, or character. Responding promptly and comprehensively is important — incomplete or late responses can delay the application significantly or result in a decision being made on limited information. Your migration agent should assist you in preparing a thorough response.",
  },
  {
    question: "How long does the 186 TRT take to be decided?",
    answer: "Processing times for subclass 186 applications vary and can be significant — commonly many months to over a year. The Department of Home Affairs publishes indicative processing times on its website, but these are not guarantees. Complex cases, requests for further information, or periods of high application volumes can all extend processing. The applicant generally remains lawfully in Australia on a bridging visa if the 482 expires while the 186 is pending, provided the 186 was lodged before the 482 expired and the applicant was in Australia at the time.",
  },
]

/* ─── Related pages ─── */
const RELATED: RelatedPage[] = [
  { title: 'Skills in Demand (482) Visa',  desc: 'Overview of the 482 visa streams, sponsorship requirements, and work conditions.',                icon: 'zap',       page: 'skills-in-demand-visa' },
  { title: 'Employer Nomination (186)',     desc: 'The 186 visa — streams, eligibility, nomination process, and the pathway to permanent residence.', icon: 'award',     page: 'employer-nomination-scheme' },
  { title: '186 Skill Requirements',       desc: 'Skill tests, experience, English, and age requirements for the 186 visa.',                         icon: 'clipboard', page: '186-skill-requirements' },
  { title: 'Standard Business Sponsorship', desc: "How to become an approved sponsor — and what an employer's obligations are.",                      icon: 'building',  page: 'standard-business-sponsorship' },
]

/* ─── Streams section (page-specific, kept local) ─── */
function StreamsSection() {
  return (
    <section id="streams" style={{ background: GREY_BG, padding: '80px 32px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <SectionHeading
          kicker="Section 3"
          title="How Your 482 Stream Affects the PR Pathway"
          intro="The 482 visa has three streams. Which stream you hold affects the conditions of your TRT eligibility and the requirements that apply to the 186 nomination."
          accent={TEAL}
        />
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
          {STREAMS.map(s => (
            <div key={s.name} style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderLeft: `5px solid ${NAVY}`, borderRadius: 14, padding: '24px 26px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24, alignItems: 'start', boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 100, background: 'rgba(27,43,94,0.07)', border: '1.5px solid rgba(27,43,94,0.16)', marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: NAVY, letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>{s.code}</span>
                </div>
                <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY, lineHeight: 1.3 }}>{s.name}</div>
              </div>
              <div>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 10px' }}>{s.body}</p>
                <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', background: 'rgba(27,43,94,0.05)', border: '1px solid rgba(27,43,94,0.12)', borderRadius: 8, padding: '9px 12px' }}>
                  <Icon name="alert" size={13} color={NAVY} />
                  <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{s.note}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Pathway risks section (page-specific) ─── */
function PathwayRisksSection() {
  const severityLabel = { high: 'High risk', medium: 'Moderate risk', low: 'Lower risk' }
  return (
    <section id="pathway-risks" style={{ background: '#fff', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <SectionHeading
          kicker="Section 4"
          title="What Can Break the Pathway"
          intro="Several circumstances can interrupt or permanently disqualify the TRT pathway. Awareness of these risks — and seeking advice early — can prevent costly mistakes."
          accent={TEAL}
        />
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 14 }}>
          {RISKS.map(r => {
            const color = SEVERITY_COLORS[r.severity]
            return (
              <div key={r.title} style={{ border: `1.5px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', background: `${color}08`, borderBottom: `1.5px solid ${color}20` }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={r.icon} size={16} color={color} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY }}>{r.title}</div>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: color, background: `${color}14`, border: `1px solid ${color}30`, padding: '3px 10px', borderRadius: 100 }}>
                    {severityLabel[r.severity]}
                  </div>
                </div>
                <div style={{ padding: '16px 20px', background: '#fff' }}>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>{r.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Right column widget for flagship hero ─── */
function PathwaySummaryWidget() {
  const steps = [
    { label: '482 granted', sub: 'Core Skills / Specialist / LA', icon: 'zap', color: TEAL },
    { label: '2 years qualifying employment', sub: 'Same employer · same occupation', icon: 'clock', color: TEAL },
    { label: '186 nomination lodged', sub: 'By the same employer', icon: 'briefcase', color: TEAL },
    { label: '186 application lodged', sub: 'TRT stream · health & police', icon: 'file', color: TEAL },
    { label: 'Permanent residence granted', sub: '186 visa decided', icon: 'shield', color: GREEN },
  ]
  return (
    <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 24px 64px rgba(13,22,50,0.18), 0 2px 8px rgba(13,22,50,0.06)', border: '1px solid #e8eaf0', padding: '28px 26px' }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: TEAL, marginBottom: 18 }}>TRT Pathway at a Glance</div>
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 0 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', position: 'relative' as const, paddingBottom: i < steps.length - 1 ? 20 : 0 }}>
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div style={{ position: 'absolute', left: 17, top: 36, width: 2, height: 'calc(100% - 16px)', background: 'rgba(27,43,94,0.15)' }} />
            )}
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(27,43,94,0.08)', border: '2px solid rgba(27,43,94,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative' as const, zIndex: 1 }}>
              <Icon name={s.icon} size={15} color={NAVY} />
            </div>
            <div style={{ paddingTop: 6 }}>
              <div style={{ fontSize: 14.5, fontWeight: 600, color: NAVY_DARK, lineHeight: 1.3 }}>{s.label}</div>
              <div style={{ fontSize: 12.5, color: '#9ca3af', marginTop: 2 }}>{s.sub}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, padding: '12px 14px', background: `${TEAL}08`, border: `1px solid ${TEAL}20`, borderRadius: 10 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: TEAL, marginBottom: 4 }}>Key eligibility figures</div>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 12px' }}>
          {[
            { val: '2 yrs', lbl: 'Qualifying period' },
            { val: 'Under 45', lbl: 'Age at lodgement' },
            { val: 'Same employer', lbl: 'Sponsorship' },
            { val: 'Competent', lbl: 'English' },
          ].map(f => (
            <div key={f.lbl}>
              <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 17, fontWeight: 700, color: TEAL }}>{f.val}</div>
              <div style={{ fontSize: 11, color: '#9ca3af' }}>{f.lbl}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 14, fontSize: 12, color: '#9ca3af', fontStyle: 'italic', lineHeight: 1.6 }}>
        General guide only. Requirements may vary — obtain advice for your circumstances.
      </div>
    </div>
  )
}

/* ─── Page ─── */
export default function Pathway482ToPRPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => {
    document.title = PAGE_META['482-to-pr-pathway'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: '482 to PR Pathway', url: 'https://www.nanakmigration.com.au/482-to-pr-pathway' },
        ]}
        faqs={FAQ_ITEMS}
        service={{ name: '482 Visa to Permanent Residence Pathway', description: PAGE_META['482-to-pr-pathway'].metaDescription, url: 'https://www.nanakmigration.com.au/482-to-pr-pathway' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Employer Sponsored', page: 'employer-sponsored-visas' },
          { label: '482 to PR Pathway' },
        ]}
      />

      <PageHero
        variant="flagship"
        eyebrow="Subclass 482 → Subclass 186"
        eyebrowSub="Employer Sponsored · TRT Stream"
        title={<>482 to PR Pathway<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Temporary to Permanent</em></>}
        deck="A Skills in Demand (482) visa holder can generally move to permanent residence through the Employer Nomination Scheme (186) Temporary Residence Transition stream after completing at least two years of full-time employment with the same employer in the same nominated occupation."
        shortAnswer={<>The TRT stream is generally the <strong style={{ color: NAVY }}>most straightforward permanent residence pathway</strong> for 482 holders: <strong>no separate skills assessment</strong> is required in most cases, and the qualifying period is <strong>two years</strong> rather than the three years of relevant experience required for Direct Entry. However, the pathway depends on the employer remaining a willing and eligible sponsor — changes to employer, occupation, or visa status can disrupt or permanently end TRT eligibility.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Plan your 482 to PR transition', page: 'book-consultation' }}
        secondaryCta={{ label: 'See the full 186 overview →', page: 'employer-nomination-scheme' }}
        accent={TEAL}
        rightColumn={<PathwaySummaryWidget />}
        footnote="General information only. Requirements are subject to legislative change. Obtain advice from MARN 2619467 for your circumstances."
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox routeKey="482-to-pr-pathway">
            The usual 482 to PR pathway is Temporary Residence Transition to the Employer Nomination Scheme (subclass 186) after holding a Skills in Demand (subclass 482) visa with the same employer, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. The employer must keep Standard Business Sponsorship current and meet nomination rules. Direct Entry 186 applicants should review 186 skill requirements instead.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* TOC */}
      <div style={{ maxWidth: 1260, margin: '0 auto', padding: '48px 32px 0', display: 'flex', gap: 48 }}>
        <OnThisPageNav sections={TOC} accent={TEAL} />
        <div style={{ flex: 1 }} />
      </div>

      {/* ── KEY FACTS ── */}
      <div id="key-facts">
        <KeyFactsStrip facts={KEY_FACTS} accent={TEAL} />
      </div>

      {/* ── STEP TIMELINE ── */}
      <section id="timeline" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading
            kicker="Section 1"
            title="The TRT Pathway — Step by Step"
            intro="An indicative sequence of the steps from 482 grant to 186 permanent residence via the TRT stream. Timing varies — the Department of Home Affairs is the authoritative source for current processing times."
            accent={TEAL}
          />
          <StepTimeline steps={TIMELINE_STEPS} variant="cards" accent={TEAL} />
        </div>
      </section>

      {/* ── TRT vs DIRECT ENTRY ── */}
      <section id="trt-vs-de" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeading
            kicker="Section 2"
            title="TRT Stream vs Direct Entry"
            intro="Both streams lead to the same 186 permanent visa. Which generally suits you depends on your employment history and whether you have a skills assessment."
            accent={TEAL}
          />
          <ComparisonTable columns={COMPARE_COLS} rows={COMPARE_ROWS} accent={TEAL} caption={`Current as at ${CURRENT_AS_AT}. Requirements are subject to legislative change — verify with the Department of Home Affairs before lodging.`} />
        </div>
      </section>

      {/* ── STREAMS ── */}
      <StreamsSection />

      {/* ── PATHWAY RISKS ── */}
      <PathwayRisksSection />

      {/* ── EVIDENCE CHECKLIST ── */}
      <section id="evidence" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading
            kicker="Section 5"
            title="Evidence Checklist"
            intro="An indicative list. Your specific circumstances may require additional documents. Confirm requirements with your registered migration agent before lodging."
            accent={TEAL}
          />
          <EvidenceChecklist groups={EVIDENCE_GROUPS} accent={TEAL} defaultOpen={0} />
        </div>
      </section>

      {/* ── TRANSITIONAL ARRANGEMENTS ── */}
      <section id="transitional" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading
            kicker="Section 6"
            title="Transitional Arrangements — Legacy TSS (482) and 457 Holders"
            intro="Former TSS visa holders and legacy subclass 457 holders may have different qualifying conditions for the TRT stream."
            accent={TEAL}
          />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            <Callout variant="note" panel title="Former TSS (482) visa holders">
              <p style={{ margin: '0 0 10px', fontSize: 15, lineHeight: 1.7, color: '#374151' }}>
                The Skills in Demand (SID) visa replaced the Temporary Skill Shortage (TSS) visa in December 2024. In most cases, former TSS holders continue to be eligible for the TRT pathway under the 186 visa, subject to meeting the two-year qualifying employment period and other standard TRT conditions. TSS holders whose visas were granted in the short-term stream should seek specific advice, as not all short-term stream TSS holders have a TRT pathway to 186 permanent residence.
              </p>
              <p style={{ margin: 0, fontSize: 14, color: '#374151', lineHeight: 1.7 }}>
                The specific transitional provisions that apply depend on the visa subclass, grant date, and stream. Obtain advice from a registered migration agent for your specific circumstances.
              </p>
            </Callout>
            <Callout variant="note" panel title="Legacy subclass 457 holders">
              <p style={{ margin: '0 0 10px', fontSize: 15, lineHeight: 1.7, color: '#374151' }}>
                Legacy subclass 457 holders who have not yet transitioned to the 186 TRT stream may have specific transitional provisions available to them depending on their grant date and the terms of any applicable legislative instrument. In general, 457 holders who were employed in the same occupation with the same employer for the required period may have been eligible for TRT — those who did not lodge before their 457 ceased may now need to explore alternative pathways.
              </p>
              <p style={{ margin: 0, fontSize: 14, color: '#1B2B5E', lineHeight: 1.7, background: 'rgba(14,116,144,0.08)', padding: '8px 12px', borderRadius: 8 }}>
                If you hold or previously held a 457 and are uncertain about your current options, obtain specialist advice from a registered migration agent (MARN 2619467) as soon as possible.
              </p>
            </Callout>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={TEAL} />
          <FaqAccordion items={FAQ_ITEMS} accent={TEAL} />
        </div>
      </section>

      {/* ── RELATED ── */}
      <section id="related" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={TEAL} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title={<>Plan your 482 to PR<br /><em style={{ fontStyle: 'italic', color: GOLD }}>transition</em></>}
        body="Navpreet Aulakh (MARN 2619467) can review your 482 grant date, qualifying employment period, employer sponsorship status, and occupation against current 186 TRT requirements — and identify any risks to your pathway before the nomination is lodged."
        primaryCta={{ label: 'Book a 482 to PR consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'See 186 skill requirements →', page: '186-skill-requirements' }}
        accent={TEAL}
        footnote="Free initial assessment · MARA-registered · MARN 2619467"
        navigate={navigate}
      />

      <ComplianceDisclaimer
        currentAsAt={CURRENT_AS_AT}
        pageNote="Occupation lists, legislative instruments, and processing times are subject to change. This page does not publish visa application fees or SAF levy rates."
      />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
