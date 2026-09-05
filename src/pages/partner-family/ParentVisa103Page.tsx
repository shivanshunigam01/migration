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

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'charges', label: 'Charges' },
  { id: 'queue', label: 'Queue reality' },
  { id: 'comparison', label: '103 vs 143 vs 870' },
  { id: 'process', label: 'Process' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'dollar',
    value: '~AUD 4,990',
    label: 'Government charge (much lower than contributory)',
    note: 'Single instalment payable at lodgement. Significantly lower than the contributory parent visa but the trade-off is an extremely long processing queue. Confirm current amount on DoHA.',
  },
  {
    icon: 'calendar',
    value: '~30 years',
    label: 'Realistic wait for new applications',
    note: 'New applications lodged today realistically face a wait of around 30 years before a decision is made. This estimate reflects the current state of the queue — confirm current times on DoHA.',
  },
  {
    icon: 'check',
    value: 'BoFT required',
    label: 'Balance of Family test must be satisfied',
    note: "At least half of the parent's children must be settled in Australia — or more children settled in Australia than in any other single country.",
  },
  {
    icon: 'building',
    value: 'AoS at grant',
    label: 'Assurance of Support required before the visa is granted',
    note: 'Unlike the 143, the AoS for the 103 is typically arranged closer to the grant stage rather than at lodgement — but the sponsoring child must be capable of providing it when required.',
  },
]

const STEPS: TimelineStep[] = [
  {
    code: '01',
    title: 'Check eligibility — Balance of Family test and sponsor',
    desc: 'Confirm the parent passes the Balance of Family test, that the sponsoring child is settled in Australia (citizen or PR for at least 2 years), and that the family can realistically provide an Assurance of Support when required many years in the future.',
  },
  {
    code: '02',
    title: 'Sponsor registration',
    desc: 'The sponsoring child lodges Form 40 (Sponsorship for a Parent to Migrate to Australia) with the Department of Home Affairs. Sponsorship registration can be lodged before or at the same time as the visa application.',
  },
  {
    code: '03',
    title: 'Visa application — pay charge and lodge documents',
    desc: 'The parent lodges the subclass 103 application, pays the government charge (~AUD 4,990 — confirm on DoHA), and submits supporting documents: identity, relationship evidence, and health and police clearance assessments.',
  },
  {
    code: '04',
    title: 'Application enters the queue',
    desc: 'The application is placed in the processing queue in order of lodgement date. New applications are realistically waiting approximately 30 years before a decision. There is no mechanism to speed up a non-contributory parent visa application.',
  },
  {
    code: '05',
    title: 'Assurance of Support arranged prior to grant',
    desc: 'When the Department reaches the application, it will request an Assurance of Support. At that point the sponsoring child (or another assurer) must apply to Services Australia for AoS approval and lodge the required bond.',
  },
  {
    code: '06',
    title: 'Health and character checks refreshed; visa granted',
    desc: 'Health assessments and police clearances are time-limited and will likely need to be refreshed before the final grant decision. Once all conditions are met and the AoS is approved, the Department makes a grant decision.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: "What is the difference between the subclass 103 and the subclass 143?",
    answer: "The subclass 103 (Parent) and subclass 143 (Contributory Parent) are both offshore permanent parent visas requiring the Balance of Family test and an Assurance of Support. The key difference is cost versus queue time. The 103 charges approximately AUD 4,990 (single instalment) — substantially less than the 143, which charges approximately AUD 5,040 at lodgement plus approximately AUD 43,600 per adult before grant. In exchange for the higher charges, the 143 queue is much shorter: approximately 12–15 years for new applications compared to approximately 30 years for the 103. The 870 Sponsored Parent (Temporary) visa is the only parent option without the Balance of Family test. Confirm current charges and queue estimates on DoHA.",
  },
  {
    question: "If I lodge a 103 application now, can I switch to a 143 later and keep my place in the queue?",
    answer: "No. The 103 and 143 are in entirely separate processing queues. Time spent waiting in the 103 queue does not transfer to, and does not give any advantage in, the 143 queue. If a family decides to lodge a 143 application after lodging a 103, the 143 application would join the 143 queue from the date it is lodged — not from the 103 lodgement date. This is a critical point for families who lodge a 103 as a placeholder while planning to switch to a contributory pathway.",
  },
  {
    question: "Can my parent visit Australia while their 103 application is pending?",
    answer: "Yes. The parent can apply for visitor visas (such as the subclass 600 Visitor visa) to visit Australia while the 103 is pending. Alternatively, the sponsoring child may be able to apply for a subclass 870 Sponsored Parent (Temporary) visa to allow the parent to live in Australia for up to 10 years. Holding a 103 application and a 870 visa at the same time is permissible — these are separate visa streams. The 870 does not affect the 103 queue position.",
  },
  {
    question: "When does the Assurance of Support need to be arranged for the 103?",
    answer: "For the subclass 103, the Assurance of Support is required to be in place before the Department of Home Affairs will grant the visa — not at the time of lodgement. In practice this means the AoS is arranged many years after the application is lodged, when the Department's processing reaches the application. Families should be aware that the assurer's circumstances may have changed significantly over the ~30-year wait, and the assurer will need to demonstrate they can still meet the income requirement at the time the AoS is actually assessed.",
  },
  {
    question: "Is the Balance of Family test the same for the 103 as for the 143?",
    answer: "Yes. The Balance of Family test applies equally to both subclass 103 and subclass 143 applications. The test requires that at least half of the parent's children (or more children than in any other single country) are Australian citizens, Australian permanent residents, or eligible New Zealand citizens settled in Australia. Step-children and legally adopted children count. If the parent fails the Balance of Family test, neither the 103 nor the 143 pathway is available — the subclass 870 Sponsored Parent (Temporary) visa is the only parent pathway that does not require the Balance of Family test.",
  },
  {
    question: "Should I lodge a 103 application if the queue is so long?",
    answer: "Whether lodging a 103 is worthwhile depends on the family's specific circumstances. Some families lodge a 103 as an early placeholder in the queue, particularly if the parent is relatively young and the family expects permanent migration to be a long-term goal. Others choose to focus on the 870 Sponsored Parent (Temporary) visa for near-term extended stays, with the understanding that a permanent outcome through the 103 may not be realistic within a normal planning horizon. Nanak Migration Group (MARN 2619467) can discuss the options for your family's specific situation.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Parent Visas Hub',
    desc: 'Overview of all parent visa pathways — compare cost, wait time, and permanence.',
    icon: 'user',
    page: 'parent-visas',
    color: ACCENT,
  },
  {
    title: 'Contributory Parent Visa (143)',
    desc: 'Higher charges, shorter queue — the most common permanent parent pathway.',
    icon: 'dollar',
    page: 'contributory-parent-143',
    color: ACCENT,
  },
  {
    title: 'Balance of Family Test',
    desc: 'Worked examples of whether a parent can pass the Balance of Family test.',
    icon: 'check',
    page: 'balance-of-family-test',
    color: ACCENT,
  },
  {
    title: 'Assurance of Support',
    desc: 'How the AoS income test and bond work — amounts and periods by visa type.',
    icon: 'building',
    page: 'assurance-of-support',
    color: ACCENT,
  },
]

export default function ParentVisa103Page({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Parent Visas', url: 'https://www.nanakmigration.com.au/parent-visas' },
          { name: 'Parent Visa (Subclass 103)', url: 'https://www.nanakmigration.com.au/parent-visa-103' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Parent Visa Subclass 103',
          description: PAGE_META['parent-visa-103'].metaDescription,
          url: 'https://www.nanakmigration.com.au/parent-visa-103',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Partner & Family', page: 'partner-family-visas' },
          { label: 'Parent Visas', page: 'parent-visas' },
          { label: 'Parent Visa (103)' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Parent Visas"
        eyebrowSub="Partner & Family · Subclass 103"
        title={<>Parent Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 103 — Offshore Permanent</em></>}
        deck="The subclass 103 Parent visa grants permanent residence to parents of settled Australian citizens, permanent residents, or eligible New Zealand citizens. Government charges are substantially lower than the contributory parent pathways — but new applications realistically face a processing wait of around 30 years."
        shortAnswer={<>The subclass 103 Parent visa is a <strong style={{ color: NAVY }}>non-contributory offshore permanent</strong> parent visa. It requires the <strong style={{ color: NAVY }}>Balance of Family test</strong> and an <strong style={{ color: NAVY }}>Assurance of Support</strong> (arranged prior to grant). Government charges are approximately <strong style={{ color: NAVY }}>AUD 4,990</strong> — much lower than the contributory subclass 143, but the queue for new applications is realistically around <strong style={{ color: NAVY }}>30 years</strong>. Importantly, time spent waiting in the 103 queue does <strong style={{ color: NAVY }}>not</strong> give any advantage in the contributory queue — the 103 and 143 are entirely separate programs. Nanak Migration Group (MARN 2619467) can assess whether lodging a 103, pursuing the contributory pathway, or using the 870 Sponsored Parent (Temporary) visa is the most realistic strategy for your family. Confirm all current figures on the Department of Home Affairs website.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← Back to Parent Visas', page: 'parent-visas' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <ReviewedBy />
        </div>
      </section>

      {/* Sticky jump bar */}
      <div style={{ borderTop: '1px solid #e8edf6', borderBottom: '1px solid #e8edf6', background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
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
          <SectionHeading kicker="What it grants" title="What the Subclass 103 Provides" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            The subclass 103 Parent visa, once granted, gives the holder permanent residence in Australia — the right to live, work, and access Medicare indefinitely. It also provides a 5-year travel facility from the date of grant and places the holder on the pathway to Australian citizenship after 4 years of lawful residence (including 12 months as a permanent resident).
          </p>

          <div style={{ display: 'flex', gap: 24, marginBottom: 48, flexWrap: 'wrap' as const }}>
            {[
              { icon: 'shield', title: 'Permanent residence', body: 'Indefinite right to live in Australia, access Medicare, and work without restriction on grant.' },
              { icon: 'dollar', title: 'Lower government charges', body: 'Approximately AUD 4,990 — significantly lower than the contributory parent visa pathways. Confirm current amount on DoHA.' },
              { icon: 'arrowright', title: 'Pathway to citizenship', body: 'Eligible for Australian citizenship after 4 years of lawful residence, including 12 months as a permanent resident.' },
            ].map(item => (
              <div key={item.title} style={{ flex: 1, minWidth: 220, display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
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

          <Callout variant="warning" panel={true} title="The queue — an honest assessment">
            The subclass 103 is a capped and queued visa with an extremely long processing wait. The Department of Home Affairs processes applications in lodgement order. New applications realistically face a wait of approximately 30 years before a decision. Families whose parent is already in their 60s or 70s should carefully assess whether a non-contributory permanent parent visa represents a realistic outcome. Figures current at August 2026 — confirm current processing times on DoHA.
          </Callout>
        </div>
      </section>

      {/* ── ELIGIBILITY ────────────────────────────────────────── */}
      <section id="eligibility" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Who can apply" title="Eligibility Requirements" accent={ACCENT} />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {[
              {
                num: '1',
                title: 'The sponsoring child must be settled in Australia',
                body: "The applicant must have at least one child who is an Australian citizen, Australian permanent resident, or eligible New Zealand citizen and who has been settled in Australia for at least 2 years before the application is lodged. Step-children and legally adopted children count as 'children' for this purpose.",
              },
              {
                num: '2',
                title: 'The Balance of Family test must be satisfied',
                body: "The parent must pass the Balance of Family test: either (a) at least half of the parent's children are settled in Australia as citizens or PRs, or (b) more of the parent's children are settled in Australia than in any other single country. If the parent cannot pass this test, the 103 is not available — the 870 Sponsored Parent (Temporary) visa does not require it.",
              },
              {
                num: '3',
                title: 'Assurance of Support must be provided before grant',
                body: "The sponsoring child (or another eligible assurer) must be able to provide an Assurance of Support — a legally binding undertaking to repay certain welfare payments if the parent accesses them. For the 103, the AoS is arranged at the grant stage (years after lodgement), not at lodgement. The assurer must meet an income test and lodge a bond with Services Australia.",
              },
              {
                num: '4',
                title: 'Health and character requirements',
                body: "All applicants must meet health requirements (medical examination at a Department-approved panel physician) and character requirements (police clearances). These assessments have limited validity and will likely need to be refreshed before the final decision, given the length of the processing queue.",
              },
            ].map(req => (
              <div key={req.num} style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fafbfe', borderRadius: '0 8px 8px 0', padding: 20 }}>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>{req.num}. {req.title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{req.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHARGES ────────────────────────────────────────────── */}
      <section id="charges" style={{ background: '#ffffff', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What it costs" title="Government Charges" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The subclass 103 has a single instalment of government charges payable at the time of lodgement — there is no second instalment before grant. This is a key financial difference from the contributory pathways.
          </p>

          <div style={{ border: '1px solid #e8edf6', borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 12px rgba(27,43,94,0.05)', marginBottom: 24 }}>
            <div style={{ background: NAVY, padding: '16px 24px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: 4 }}>Government charge</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Payable at lodgement — single instalment</div>
            </div>
            <div style={{ padding: 24 }}>
              {[
                { label: 'Primary applicant', value: '~AUD 4,990' },
                { label: 'Each secondary adult', value: '~AUD 4,990' },
                { label: 'Each secondary child (under 18)', value: 'Confirm on DoHA' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < 2 ? '1px solid #f0f2f7' : 'none' }}>
                  <span style={{ fontSize: 13, color: '#374151' }}>{row.label}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: NAVY }}>{row.value}</span>
                </div>
              ))}
              <div style={{ marginTop: 16, padding: '12px 16px', background: '#f8fafd', borderRadius: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: NAVY }}>Example: parent couple</span>
                <span style={{ fontSize: 14, fontWeight: 800, color: ACCENT }}>~AUD 9,980</span>
              </div>
            </div>
          </div>

          <Callout variant="note" panel={true} title="Charges are indexed annually — confirm on DoHA">
            Government charges are indexed each financial year. The amounts above are indicative at August 2026. Always confirm current charges on the Department of Home Affairs website before lodging. Nanak Migration Group (MARN 2619467) confirms current charges before clients commit.
          </Callout>
        </div>
      </section>

      {/* ── QUEUE REALITY ──────────────────────────────────────── */}
      <section id="queue" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Honest assessment" title="Queue Reality — What Families Must Understand" accent={ACCENT} />

          <div style={{ borderLeft: '4px solid #dc2626', background: '#fef2f2', padding: '16px 20px', borderRadius: '0 8px 8px 0', marginBottom: 32 }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: '#991b1b', lineHeight: 1.7, margin: 0 }}>
              New subclass 103 applications lodged today are realistically waiting approximately 30 years before a decision. For an applicant who is currently in their 60s, this means a permanent residence outcome through the 103 may not occur within a realistic planning horizon. Confirm current estimates on DoHA.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {[
              {
                title: 'Why the queue is so long',
                body: "The 103 is a non-contributory visa — the lower government charges mean the program receives less funding relative to the contributory pathways. The Department of Home Affairs allocates a fixed number of places across all parent visa subclasses each year, and the vast majority of permanent places go to the contributory queue (143). Non-contributory applications (103, 804) share a relatively small allocation of the remaining places, resulting in an extremely long queue.",
              },
              {
                title: 'The 103 queue does not feed into the 143 queue',
                body: "This is frequently misunderstood. Time spent waiting in the subclass 103 queue does not transfer to the subclass 143 queue and does not give any priority in the contributory program. If a family decides after lodging a 103 to pursue the contributory 143 pathway instead, they would need to lodge a fresh 143 application and join the 143 queue from the date of the new lodgement — with no benefit from the earlier 103 lodgement date.",
              },
              {
                title: 'Strategies while in the queue',
                body: "Families with a 103 application pending may consider using the subclass 870 Sponsored Parent (Temporary) visa to allow the parent to live in Australia for up to 10 years while the permanent queue processes. Visitor visas (subclass 600) can also be used for shorter stays. These options run in parallel with the 103 queue and do not affect the 103 lodgement date.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: '#ffffff', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 12px' }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ─────────────────────────────────────────── */}
      <section id="comparison" style={{ background: '#ffffff', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Side by side" title="Subclass 103 vs 143 vs 870" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The three main parent visa options differ significantly in cost, wait time, permanence, and the Balance of Family test requirement. Confirm all current figures on the Department of Home Affairs website.
          </p>

          <div style={{ borderRadius: 14, overflow: 'hidden', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 24px rgba(27,43,94,0.07)', marginBottom: 24 }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 0.9fr', background: NAVY, padding: '14px 20px', gap: 8 }}>
              {['', '103 Parent', '143 Contributory Parent', '870 Sponsored Parent (Temp)'].map((h, i) => (
                <div key={i} style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' as const, letterSpacing: '0.08em', lineHeight: 1.3, textAlign: i === 0 ? 'left' : 'center' as const }}>
                  {h}
                </div>
              ))}
            </div>
            {/* Rows */}
            {[
              { label: 'Permanent?', vals: ['Yes', 'Yes', 'No — temp only'] },
              { label: 'Balance of Family test', vals: ['Required', 'Required', 'Not required'] },
              { label: 'Govt charge (approx)', vals: ['~$4,990', '~$5,040 + ~$43,600/adult', '~$1,100 or ~$2,900'] },
              { label: 'Queue (new applications)', vals: ['~30 years', '~12–15 years', 'Relatively quick'] },
              { label: 'Work rights', vals: ['Yes (on grant)', 'Yes (on grant)', 'None'] },
              { label: 'Assurance of Support', vals: ['Yes (at grant)', 'Yes (at lodgement)', 'No'] },
            ].map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', padding: '13px 20px', gap: 8, alignItems: 'center', background: i % 2 === 0 ? '#ffffff' : '#fafbfe', borderTop: '1px solid #f0f2f7' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>{row.label}</div>
                {row.vals.map((v, vi) => (
                  <div key={vi} style={{ fontSize: 12.5, color: '#4b5563', textAlign: 'center' as const, lineHeight: 1.4 }}>{v}</div>
                ))}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: '#9ca3af', fontStyle: 'italic', margin: 0 }}>
            Figures current at August 2026 — confirm on the Department of Home Affairs website before relying on these amounts.
          </p>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section id="process" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="How to apply" title="The Application Process" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#ffffff', padding: '80px 32px', borderTop: '1px solid #eef0f6' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── RELATED PAGES ──────────────────────────────────────── */}
      <section id="related" style={{ background: '#fafbfe', padding: '80px 32px', borderTop: '1px solid #eef0f6' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also on this site" title="Related pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Assess whether the subclass 103 is right for your family"
        body="Nanak Migration Group (MARN 2619467) can assess the Balance of Family test, the realistic queue timeframe, and whether the 103, 143, or 870 is the most appropriate pathway given your family's circumstances."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
