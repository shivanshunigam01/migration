import React from 'react'
import { GOLD, NAVY, CAT_PARTNER } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs, PageHero, KeyFactsStrip, SectionHeading, StepTimeline,
  FaqAccordion, RelatedPages, CtaBand, ComplianceDisclaimer, Callout,
} from '@/components/page'
import type { KeyFact, TimelineStep, FaqItem, RelatedPage } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'
import Icon from '@/components/ui/Icon'

const ACCENT = CAT_PARTNER
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'who-qualifies', label: 'Who qualifies' },
  { id: 'dependency', label: 'Dependency evidence' },
  { id: 'queue', label: 'Queue reality' },
  { id: 'alternatives', label: 'Alternatives' },
  { id: 'process', label: 'Process' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'shield',
    value: 'Permanent',
    label: 'Permanent residence for a single aged relative',
    note: 'Subclass 114 (offshore) and subclass 838 (onshore) both grant permanent residence with full work rights and Medicare access.',
  },
  {
    icon: 'user',
    value: 'Single',
    label: 'Must be widowed, divorced, separated, or never married',
    note: "The applicant must be 'single' at the time of application — widowed, divorced, legally separated, or never married. A de facto partner also counts as married for this purpose.",
  },
  {
    icon: 'calendar',
    value: '3+ years',
    label: 'Financial dependency for at least 3 continuous years',
    note: 'The relative must have been financially dependent on their Australian relative for basic needs — food, clothing, and shelter — for at least the 3 years immediately before the application.',
  },
  {
    icon: 'building',
    value: 'AoS required',
    label: 'Assurance of Support required before grant',
    note: 'An Assurance of Support must be arranged with Services Australia before the visa can be granted. Confirm current bond amounts on the Services Australia website.',
  },
]

const STEPS: TimelineStep[] = [
  {
    code: '01',
    title: 'Confirm single status and pension age',
    desc: 'The applicant must be of Australian age pension age at time of application and must be single — widowed, divorced, legally separated, or never married. Confirm current age pension age thresholds on the Department of Social Services website.',
  },
  {
    code: '02',
    title: 'Document 3 years of continuous financial dependency',
    desc: 'Gather evidence showing the Australian sponsoring relative has been providing financial support for the applicant\'s basic needs — food, clothing, and shelter — for at least the 3 years immediately before lodgement. Remittance records, bank statements, and statutory declarations are typically required.',
  },
  {
    code: '03',
    title: 'Sponsor registration',
    desc: 'The Australian citizen, permanent resident, or eligible New Zealand citizen relative registers as the sponsor with the Department of Home Affairs. The sponsor must be willing and able to provide an Assurance of Support.',
  },
  {
    code: '04',
    title: 'Lodge the visa application',
    desc: 'Lodge the subclass 114 application (if offshore) or subclass 838 (if onshore) through ImmiAccount. Pay the government charge. Submit all supporting documents including identity documents, evidence of dependency, proof of single status, and health and police clearance results.',
  },
  {
    code: '05',
    title: 'Application enters the capped queue',
    desc: 'The Aged Dependent Relative visa is capped and queued. After lodgement, the application is placed in the queue and processed in order of lodgement. The wait is very long. Families should plan on the basis that no decision will be made for many years.',
  },
  {
    code: '06',
    title: 'AoS arranged before grant; health and character refreshed',
    desc: 'The sponsor arranges the Assurance of Support through Services Australia close to the time of grant. Health assessments and police clearances will need to be refreshed before the final decision. On satisfaction of all conditions, the Department grants the visa.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: "What does 'single' mean for the Aged Dependent Relative visa?",
    answer: "For the Aged Dependent Relative visa, 'single' means widowed, divorced, legally separated, or never married. Importantly, if the applicant has a de facto partner (living with someone in a couple relationship), they are treated as married for this purpose and are not eligible. The single status must be genuine and ongoing — if the applicant enters a relationship after lodgement, eligibility may be affected. Seek advice on your specific circumstances from a registered migration agent.",
  },
  {
    question: "How is financial dependency proven?",
    answer: "Financial dependency must be continuous for at least 3 years before the application. The applicant must have been dependent on their Australian relative for basic needs — food, clothing, and shelter. Evidence typically includes remittance records (international money transfers), bank statements showing regular deposits, a statutory declaration from the sponsoring relative describing the nature and extent of support, and any receipts or records of accommodation, food, or clothing expenses being met by the Australian relative. Where the applicant lives with the sponsoring relative in Australia (onshore subclass 838 applicants), evidence of the shared living arrangement may also be relevant. The Department assesses dependency on the facts — financial contributions that fall short of meeting basic needs, or irregular and small transfers, may not satisfy the test.",
  },
  {
    question: "Is there a minimum age?",
    answer: "Yes. The applicant must be of Australian age pension age at the time of application. The Australian age pension age is currently 67, though this threshold has changed historically. Confirm the current age pension age on the Department of Social Services or Services Australia website before assessing eligibility.",
  },
  {
    question: "How long is the processing queue?",
    answer: "The Aged Dependent Relative visa is capped and queued, and the queue is very long — realistically a multi-decade wait for new applications. The allocation of places each year is small. This means that even applicants who clearly satisfy all eligibility criteria should plan on a very long wait before a decision. For families where the sponsoring relative in Australia is elderly, the queue timeline is an important consideration in deciding whether to lodge. Confirm current processing time estimates on the Department of Home Affairs website.",
  },
  {
    question: "Can my spouse or children be included?",
    answer: "No. The defining characteristic of the Aged Dependent Relative visa is that the primary applicant must be single. A spouse or de facto partner cannot be included because having a spouse or de facto partner means the primary applicant is not single. Dependent children may be includable as secondary applicants — seek advice from a registered migration agent on whether dependants can be included in the specific circumstances.",
  },
  {
    question: "What alternatives exist if the relative doesn't meet the dependency or single requirements?",
    answer: "If the relative does not meet the eligibility criteria for the Aged Dependent Relative visa, alternatives to consider include: regular visitor visa visits to maintain family connection while other pathways are explored; the Remaining Relative visa (115/835) if all near relatives are settled in Australia; the Carer visa (116/836) if the relative provides care to an Australian citizen or permanent resident with a long-term medical condition; parent visas if the relative is a parent of an Australian citizen or permanent resident. A registered migration agent at Nanak Migration Group (MARN 2619467) can review the full circumstances and identify the most realistic option.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Assurance of Support',
    desc: 'How the AoS income test, bond amounts, and AoS period work.',
    icon: 'building',
    page: 'assurance-of-support',
    color: ACCENT,
  },
  {
    title: 'Remaining Relative Visa (115 & 835)',
    desc: 'For those whose only near relatives are all settled in Australia — strict test, long queue.',
    icon: 'user',
    page: 'remaining-relative-visa',
    color: ACCENT,
  },
  {
    title: 'Carer Visa (116 & 836)',
    desc: 'Permanent visa for a carer of an Australian relative with a long-term medical condition.',
    icon: 'heart',
    page: 'carer-visa',
    color: ACCENT,
  },
  {
    title: 'Partner & Family Visas',
    desc: 'Overview of all partner, parent, child, carer, and relative visa pathways.',
    icon: 'home',
    page: 'partner-family-visas',
    color: ACCENT,
  },
]

export default function AgedDependentRelativePage({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Aged Dependent Relative Visa (114 & 838)', url: 'https://www.nanakmigration.com.au/aged-dependent-relative' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Aged Dependent Relative Visa Subclass 114 and 838',
          description: PAGE_META['aged-dependent-relative'].metaDescription,
          url: 'https://www.nanakmigration.com.au/aged-dependent-relative',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Partner & Family', page: 'partner-family-visas' },
          { label: 'Aged Dependent Relative (114 & 838)' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Partner & Family Visas"
        eyebrowSub="Subclasses 114 & 838"
        title={<>Aged Dependent Relative Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclasses 114 (Offshore) & 838 (Onshore)</em></>}
        deck="A permanent visa for a single, pension-age relative who has been financially dependent on their Australian relative for basic needs for at least 3 years. The visa is capped and queued — honest expectations about the wait are essential."
        shortAnswer={<>The Aged Dependent Relative visa (subclass 114 offshore, 838 onshore) grants <strong style={{ color: NAVY }}>permanent residence</strong> to a <strong style={{ color: NAVY }}>single</strong> (widowed, divorced, separated, or never married) relative of pension age who has been <strong style={{ color: NAVY }}>financially dependent on their Australian relative for at least 3 continuous years</strong>. Sponsorship and an Assurance of Support are required. The visa is capped and queued, and new applications realistically face a <strong style={{ color: NAVY }}>multi-decade processing wait</strong>. Nanak Migration Group (MARN 2619467) can assess eligibility and discuss alternatives. Confirm all current figures on the Department of Home Affairs website.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← Partner & Family', page: 'partner-family-visas' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <ReviewedBy />
        </div>
      </section>

      {/* Sticky jump bar */}
      <div style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 4, overflowX: 'auto', scrollbarWidth: 'none' as const }}>
          {TOC.map(sec => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap' as const, borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = ACCENT
                ;(e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'
                ;(e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent'
              }}
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>

      <KeyFactsStrip facts={FACTS} accent={ACCENT} />

      {/* ── OVERVIEW ───────────────────────────────────────────── */}
      <section id="overview" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What it provides" title="What the Aged Dependent Relative Visa Grants" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            The Aged Dependent Relative visa recognises a specific family situation: a single, pension-age relative overseas who is genuinely reliant on an Australian citizen or permanent resident for their basic living expenses. Both subclass 114 (for applicants offshore at time of decision) and subclass 838 (for applicants already in Australia) grant permanent residence with full work rights and Medicare access.
          </p>

          <div style={{ display: 'flex', gap: 24, marginBottom: 40, flexWrap: 'wrap' as const }}>
            {[
              { icon: 'shield', title: 'Permanent residence', body: 'Full work rights and Medicare access from the date of grant. The holder can live in Australia indefinitely.' },
              { icon: 'home', title: 'Offshore or onshore', body: 'Subclass 114 is for applicants outside Australia at decision; subclass 838 is for applicants already in Australia. Eligibility criteria are the same.' },
              { icon: 'arrowright', title: 'Pathway to citizenship', body: 'On grant, the holder begins accruing the residence needed for citizenship — eligible after 4 years of lawful residence including 12 months as a permanent resident.' },
            ].map(item => (
              <div key={item.title} style={{ flex: 1, minWidth: 220, display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fafbfe', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={item.icon as any} size={20} color={ACCENT} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 700, color: NAVY, margin: '0 0 6px' }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65, margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout variant="warning" panel={true} title="Honest assessment: the queue is extremely long">
            The Aged Dependent Relative visa is subject to an annual cap that is very small relative to demand. New applications realistically face a multi-decade wait. Families should plan accordingly and consider whether alternative pathways may be more realistic. Confirm current processing time estimates on the Department of Home Affairs website.
          </Callout>
        </div>
      </section>

      {/* ── WHO QUALIFIES ──────────────────────────────────────── */}
      <section id="who-qualifies" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Eligibility criteria" title="Who Can Apply" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            There are three core criteria for the primary applicant — and each must be satisfied at the time of application.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20, marginBottom: 32 }}>
            {[
              {
                num: '1',
                title: 'Pension age',
                body: 'The applicant must be of Australian age pension age at the time of application. The current age pension age is 67. Confirm the current threshold on the Department of Social Services or Services Australia website before assessing eligibility.',
              },
              {
                num: '2',
                title: 'Single status',
                body: "The applicant must be single — widowed, divorced, legally separated, or never married. Having a de facto partner is treated the same as being married for this purpose and will disqualify the applicant. The single status must be genuine.",
              },
              {
                num: '3',
                title: 'Financial dependency for 3 continuous years',
                body: "The applicant must have been financially dependent on their Australian relative for basic needs — food, clothing, and shelter — for at least the 3 years immediately before the application is lodged. Partial financial support or irregular contributions may not satisfy the test. The dependency must be for basic needs, not merely gifts or discretionary support.",
              },
              {
                num: '4',
                title: 'Australian sponsor',
                body: "The applicant must have a sponsoring relative in Australia who is an Australian citizen, permanent resident, or eligible New Zealand citizen. The sponsor must be willing and able to provide an Assurance of Support.",
              },
              {
                num: '5',
                title: 'Health and character',
                body: "All applicants must meet Australian health requirements (medical examination at a Department-approved panel physician) and character requirements (police clearances from all relevant countries).",
              },
            ].map(req => (
              <div key={req.num} style={{ borderLeft: `3px solid ${ACCENT}`, background: '#ffffff', borderRadius: '0 8px 8px 0', padding: '20px 24px' }}>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>{req.num}. {req.title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{req.body}</p>
              </div>
            ))}
          </div>

          <Callout variant="note" panel={true} title="Confirm current age pension age on the Department of Social Services website">
            The age pension age has changed over time. Before assessing whether this visa is available to a particular relative, confirm the current qualifying age on the Department of Social Services or Services Australia website.
          </Callout>
        </div>
      </section>

      {/* ── DEPENDENCY EVIDENCE ────────────────────────────────── */}
      <section id="dependency" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Key evidence" title="Proving Financial Dependency" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The financial dependency requirement is the most commonly contested aspect of an Aged Dependent Relative application. The Department assesses whether the applicant genuinely relied on the Australian relative for basic needs over the 3-year period. Strong, contemporaneous evidence is essential.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            {[
              { icon: 'dollar', title: 'Remittance records', body: 'Bank transfer records, wire transfer receipts, and records from remittance services (e.g. Western Union, bank international transfers) showing regular, material transfers from the Australian relative to the applicant over the 3-year period.' },
              { icon: 'clipboard', title: 'Bank statements', body: "Both the Australian relative's and the applicant's bank statements showing transfers received and used for living expenses. The statements should cover the full 3-year dependency period." },
              { icon: 'home', title: 'Living arrangements', body: "Evidence of the applicant's living situation — rent receipts, utility bills, or statutory declarations — showing that their accommodation and basic needs were funded by the Australian relative." },
              { icon: 'user', title: 'Statutory declarations', body: 'Written declarations from the sponsoring relative and, where available, independent witnesses (neighbours, community members, local officials) attesting to the nature and extent of financial support provided.' },
              { icon: 'shield', title: 'Proof of single status', body: "Documents confirming single status: death certificate (if widowed), divorce order, statutory declaration (if never married or permanently separated). Must be official or certified documents." },
              { icon: 'calendar', title: 'Evidence of pension age', body: "Official identity documents (passport, birth certificate) confirming the applicant's age and that they were of pension age at the time of application." },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fafbfe', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={item.icon as any} size={18} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>

          <Callout variant="note" panel={true} title="Confirm current document requirements on the Department of Home Affairs website">
            The specific documents required for an Aged Dependent Relative application may vary and are subject to change. Always confirm current requirements with the Department of Home Affairs and with a registered migration agent before lodging.
          </Callout>
        </div>
      </section>

      {/* ── QUEUE REALITY ──────────────────────────────────────── */}
      <section id="queue" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Honest assessment" title="Queue Reality" accent={ACCENT} />

          <div style={{ borderLeft: '4px solid #dc2626', background: '#fef2f2', padding: '16px 20px', borderRadius: '0 8px 8px 0', marginBottom: 32 }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: '#991b1b', lineHeight: 1.7, margin: 0 }}>
              The Aged Dependent Relative visa is capped and queued, with a very small annual allocation. New applications lodged today realistically face a multi-decade wait. Even where all eligibility criteria are clearly met, a decision may be 20 years or more away. This is an important consideration for a pension-age applicant. Confirm current processing time estimates on the Department of Home Affairs website.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {[
              { title: 'Visitor patterns as an interim measure', body: "While in the queue, the relative may be able to visit Australia on a Visitor visa (subclass 600) for periods of up to 12 months at a time, subject to visa conditions and the Department's assessment of genuine temporary entry intent. Repeated long visits may attract scrutiny. This is not a long-term substitute for permanent residence, but may allow significant time with family during the queue period." },
              { title: 'Onshore applicants on a Bridging Visa', body: "An applicant who lodged the subclass 838 while in Australia on a substantive visa will generally receive a Bridging Visa A (BVA) allowing them to remain in Australia while the application is processed. The conditions of the BVA depend on the underlying substantive visa. Note that the BVA does not confer a right to work unless the substantive visa included work rights." },
              { title: 'Consider lodging early to secure a queue position', body: "Some families choose to lodge as early as possible to secure a queue position — even if alternative visa strategies are also being pursued in parallel. If an alternative pathway succeeds first, the Aged Dependent Relative application can be withdrawn. The government charge for the Aged Dependent Relative visa is not refunded if the application is withdrawn, so this decision should be made carefully." },
            ].map(item => (
              <div key={item.title} style={{ background: '#ffffff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 12px' }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALTERNATIVES ───────────────────────────────────────── */}
      <section id="alternatives" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Other pathways" title="Alternatives Worth Considering" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 28 }}>
            Given the long queue, families should consider whether any other pathways might be more realistic or could run in parallel.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {[
              { title: 'Remaining Relative Visa (115/835)', body: "If all of the applicant's near relatives (parents and siblings) are settled in Australia as citizens or permanent residents, the Remaining Relative visa may be another option. It has a similarly long queue, but the eligibility criterion is different — it focuses on the near-relative test rather than dependency. The applicant need not be single for this visa." },
              { title: 'Carer Visa (116/836)', body: "If a relative in Australia has a long-term medical condition and requires ongoing care that cannot reasonably be provided by other means, the Carer visa may be available regardless of the age or marital status of the carer. Eligibility depends on the medical condition of the Australian relative, not the age of the applicant." },
              { title: 'Visitor visa patterns', body: "For families where the relative is in good health and can travel, regular visitor visa stays allow significant time together while other pathways are explored. Visitor visas for parents and relatives may be granted for periods allowing stays of up to 12 months, depending on circumstances. Confirm current visitor visa policy on the Department of Home Affairs website." },
              { title: 'Parent visas (if applicable)', body: "If the relative is a parent of an Australian citizen or permanent resident, parent visa pathways (143, 173, 864, 804) may be more appropriate. Parent visas have their own tests (Balance of Family test, pension age for aged parent subclasses) and their own queues. A registered migration agent can compare pathways." },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 16, background: '#fafbfe', border: `1px solid ${BORDER}`, borderRadius: 10, padding: 20 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Icon name="arrowright" size={16} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section id="process" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="How to apply" title="The Application Process" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
          <div style={{ marginTop: 32 }}>
            <Callout variant="note" panel={true} title="Confirm current government charges on the Department of Home Affairs website">
              Government charges for the Aged Dependent Relative visa subclasses 114 and 838 change periodically. Always confirm current fees on the Department of Home Affairs website before lodging.
            </Callout>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #eef0f6` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── RELATED PAGES ──────────────────────────────────────── */}
      <section id="related" style={{ background: '#fafbfe', padding: '80px 32px', borderTop: `1px solid #eef0f6` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also on this site" title="Related pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Assess the Aged Dependent Relative visa for your family"
        body="Dependency evidence and single-status requirements can be complex to satisfy and document. Nanak Migration Group (MARN 2619467) can assess eligibility, advise on evidence gathering, and discuss whether the queue timeline is realistic given your family's circumstances."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
