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

const ACCENT = CAT_PARTNER
const CURRENT_AS_AT = 'August 2026'
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'charges', label: 'Charges' },
  { id: 'comparison', label: '884 vs 864 comparison' },
  { id: 'process', label: 'Application process' },
  { id: 'permanent-stage', label: 'Transition to 864' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'user',
    value: 'Subclass 884',
    label: 'Contributory Aged Parent (Temporary) — onshore two-stage pathway',
    note: 'The 884 is the onshore, pension-age version of the 173 temporary stage. It allows a pension-age parent in Australia to split the large contributory charges over two visa stages rather than paying the full amount upfront.',
  },
  {
    icon: 'calendar',
    value: '2 years',
    label: 'Duration of the 884 temporary visa before transitioning to 864',
    note: 'The 884 is valid for 2 years. The parent must lodge the permanent subclass 864 application before the 884 expires — otherwise the parent loses status and must depart or hold a bridging visa.',
  },
  {
    icon: 'dollar',
    value: '~AUD 5,040',
    label: 'Approximate first instalment charge (884 stage) — confirm on DoHA',
    note: 'The 884 first instalment is approximately AUD 5,040 per adult at the 884 stage. The second (larger) instalment of approximately AUD 43,600 per adult is payable at the 864 stage. Charges are indexed — confirm current amounts on the DoHA website.',
  },
  {
    icon: 'shield',
    value: 'Balance of Family',
    label: 'Balance of Family test required — same test as 864/804/864',
    note: 'The parent must satisfy the Balance of Family test — that is, more of their children live in Australia (or are deceased) than in any other single country. This is assessed at the 884 stage.',
  },
]

const STEPS: TimelineStep[] = [
  { code: '01', title: 'Confirm Balance of Family test', desc: 'Confirm that the parent passes the Balance of Family test — more of their children must be Australian permanent residents or citizens (or deceased) than residing in any other single country. Gather documents proving each child\'s location and status.' },
  { code: '02', title: 'Confirm pension-age eligibility', desc: 'The parent must have reached Australian pension age at the time of application. Pension age varies — confirm the current age threshold on the Services Australia website. The parent must also be physically in Australia when the 884 is lodged.' },
  { code: '03', title: 'Pay first instalment (884 stage)', desc: 'Approximately AUD 5,040 per adult applicant is payable at the 884 stage (plus the base application charge). Confirm current charges on the Department of Home Affairs website before lodging. Charges are indexed annually.' },
  { code: '04', title: 'Lodge the subclass 884 application', desc: 'The 884 is lodged through ImmiAccount while the parent is in Australia. Attach identity documents, Balance of Family evidence, health assessments, and character documents.' },
  { code: '05', title: 'Hold the 884 visa — plan for the 864 application', desc: 'The 884 is valid for 2 years. During this period the parent lives in Australia. Before the 884 expires, the parent (or their migration agent) must prepare and lodge the subclass 864 Contributory Aged Parent (permanent) application.' },
  { code: '06', title: 'Lodge the subclass 864 and pay second instalment', desc: 'The 864 is lodged while the 884 is still valid. The second and larger instalment (approximately AUD 43,600 per adult) is payable at this stage. Confirm current charges on DoHA. The parent receives a Bridging Visa A on lodgement of the 864 and remains in Australia while the 864 is processed.' },
]

const FAQ: FaqItem[] = [
  {
    question: "What is the subclass 884 and how does it differ from the subclass 864?",
    answer: "The subclass 884 Contributory Aged Parent (Temporary) visa is a 2-year temporary visa that acts as the first stage of the onshore contributory aged parent pathway. It is the onshore, pension-age equivalent of the subclass 173 (which is the offshore contributory parent temporary stage). Like the 173, the 884 allows the parent to split the large government charges over two stages — paying a smaller first instalment with the 884 and the larger second instalment when lodging the subclass 864 Contributory Aged Parent (permanent) visa. The subclass 864 is the permanent destination visa — it is the onshore, pension-age equivalent of the subclass 143. The 884 alone does not result in permanent residence.",
  },
  {
    question: "Does the parent need to be in Australia to apply for the 884?",
    answer: "Yes — the subclass 884 is an onshore visa. The parent must be physically in Australia when the 884 application is lodged. This distinguishes it from the subclass 173, which is an offshore temporary contributory parent visa. The parent must also be in Australia on a substantive visa (or a bridging visa in some circumstances — confirm current requirements with a migration agent). The parent must remain in Australia during processing of the 884 application.",
  },
  {
    question: "What happens if the parent does not lodge the subclass 864 before the 884 expires?",
    answer: "If the parent does not lodge the 864 application before the 884 expires, the parent will no longer hold a substantive visa. They would then need to either depart Australia or, if a 864 application has been lodged (even late), hold a Bridging Visa A while the 864 is processed. The status of a bridging visa after the 884 expires but before a 864 is lodged is a technical and time-sensitive matter — if the parent finds themselves in this situation, they should seek urgent advice from a registered migration agent. The safest approach is to prepare and lodge the 864 well before the 884 expires, not at the last moment.",
  },
  {
    question: "Why would a family choose the 884-then-864 route instead of the direct 864?",
    answer: "The principal reason is cash-flow management. The direct subclass 864 requires payment of the full second instalment charge (approximately AUD 43,600 per adult) upfront as part of a single application. The 884-then-864 route splits this into two payments over two stages — a smaller first instalment at the 884 stage and the larger second instalment at the 864 stage. This gives the family approximately two years between the two large payments. The total charges payable are slightly higher through the two-stage route than the direct 864 route because of the additional 884 charge, but the cash-flow benefit of spreading payments can be significant for many families.",
  },
  {
    question: "What is the Balance of Family test and how is it assessed for the 884?",
    answer: "The Balance of Family test requires that more of the parent's children are Australian permanent residents or Australian citizens, or are deceased, than are living in any other single country. For example, if a parent has four children — two living in Australia as permanent residents, one in the UK, and one in India — the parent passes because Australia (2) has more children than any other single country. If instead two children were in Australia and two were in the UK, the parent would fail because Australia does not have more than the UK. All children (biological and adopted) are counted. Step-children are generally not counted. Evidence of each child's location, status, and (if deceased) death certificate is required.",
  },
  {
    question: "Can the parent work in Australia on the subclass 884?",
    answer: "The subclass 884 does not include work rights as a standard entitlement — the visa is for temporary residence pending the permanent stage, not for employment. The parent may request work rights to be included if there are circumstances that warrant it, but this is not a standard feature of the 884. Confirm current conditions on the Department of Home Affairs website. During the period on the 864 bridging visa (after lodging the 864 and while it is being processed), standard bridging visa conditions apply.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Contributory Aged Parent (864)', desc: 'The permanent destination — lodge this before your 884 expires.', icon: 'award', page: 'contributory-aged-parent-864', color: ACCENT },
  { title: 'Aged Parent (804)', desc: 'Non-contributory onshore alternative — lower charges but a much longer queue.', icon: 'clock', page: 'aged-parent-804', color: ACCENT },
  { title: 'Balance of Family Test', desc: 'Whether your family passes — worked examples with different family spreads.', icon: 'check', page: 'balance-of-family-test', color: ACCENT },
  { title: 'Parent Visas Hub', desc: 'Compare all seven parent visa pathways side by side.', icon: 'user', page: 'parent-visas', color: ACCENT },
]

export default function ContributoryAgedParent884Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['contributory-aged-parent-884'].title }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Parent Visas', url: 'https://www.nanakmigration.com.au/parent-visas' },
          { name: 'Contributory Aged Parent Visa (884)', url: 'https://www.nanakmigration.com.au/contributory-aged-parent-884' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{ name: 'Contributory Aged Parent Temporary Visa (Subclass 884) Advice', description: PAGE_META['contributory-aged-parent-884'].metaDescription, url: 'https://www.nanakmigration.com.au/contributory-aged-parent-884' }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Partner & Family', page: 'partner-family-visas' },
          { label: 'Parent Visas', page: 'parent-visas' },
          { label: 'Contributory Aged Parent Temp (884)' },
        ]}
      />

      <PageHero
        variant="standard"
        eyebrow="Partner & Family"
        eyebrowSub="Parent Visas · Subclass 884"
        title={<>Contributory Aged Parent<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 884 — Temporary stage before permanent 864</em></>}
        deck="The subclass 884 is a 2-year onshore temporary visa for pension-age parents, allowing them to split the large contributory charges over two stages before transitioning to the permanent subclass 864. The Balance of Family test applies. The 884 must be followed by a 864 application before it expires."
        shortAnswer={<>The <strong style={{ color: NAVY }}>subclass 884 Contributory Aged Parent (Temporary) visa</strong> is the onshore, pension-age equivalent of the subclass 173. It is a <strong style={{ color: NAVY }}>2-year temporary visa</strong> that splits the large contributory charges: a first instalment of approximately <strong style={{ color: NAVY }}>AUD 5,040</strong> at the 884 stage, and the larger instalment of approximately <strong style={{ color: NAVY }}>AUD 43,600 per adult</strong> when the permanent <strong style={{ color: NAVY }}>subclass 864</strong> is lodged. The <strong style={{ color: NAVY }}>Balance of Family test</strong> is required. The parent must be in Australia and have reached <strong style={{ color: NAVY }}>Australian pension age</strong>. The 864 must be lodged before the 884 expires. Confirm current charges and pension-age thresholds on the Department of Home Affairs and Services Australia websites. Nanak Migration Group (MARN 2619467) can advise. No outcome guarantees.</>}
        maraBadge={true}
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Permanent 864 →', page: 'contributory-aged-parent-864' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <KeyFactsStrip facts={FACTS} accent={ACCENT} />

      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>

      {/* Sticky jump bar */}
      <div style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, background: GREY_BG, position: 'sticky', top: 64, zIndex: 20 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 4, overflowX: 'auto', scrollbarWidth: 'none' as const }}>
          {TOC.map(sec => (
            <a key={sec.id} href={`#${sec.id}`}
              style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap' as const, borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}
            >{sec.label}</a>
          ))}
        </div>
      </div>

      {/* ── Overview ─────────────────────────────────────────────── */}
      <section id="overview" style={{ padding: '64px 32px 48px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="The two-stage approach" title="How the Subclass 884 Works as a Two-Stage Route to Permanent Residence" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 20 }}>
            Contributory aged parent visas involve some of the highest government charges in the Australian immigration system. The subclass 864 (permanent) requires payment of approximately AUD 43,600 per adult as the second instalment at the time the permanent visa is lodged. For many families, paying the entire second instalment at the point of the 864 application is financially demanding.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            The subclass 884 exists as a stepping stone. By lodging the 884 first, the family pays a smaller first instalment (~AUD 5,040 per adult) and the parent can live in Australia for 2 years on the 884. Before the 884 expires, the family lodges the 864 and pays the larger second instalment at that point. This spreads the financial commitment over two stages.
          </p>
          <Callout variant="warning" panel={true} title="The 864 must be lodged before the 884 expires — do not leave this late">
            The 884 is valid for 2 years. If the subclass 864 is not lodged before the 884 expires, the parent will no longer hold a substantive visa. Start preparing the 864 application well before the 884 expiry date.
          </Callout>
        </div>
      </section>

      {/* ── Eligibility ──────────────────────────────────────────── */}
      <section id="eligibility" style={{ background: GREY_BG, padding: '64px 32px 56px', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Who can apply" title="Eligibility for the Subclass 884" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              {
                heading: 'Parent requirements',
                items: [
                  'Is a parent of an Australian citizen, Australian permanent resident, or eligible NZ citizen',
                  'Has reached Australian pension age at the time of application',
                  'Is physically in Australia when the 884 is lodged',
                  'Satisfies the Balance of Family test',
                  'Satisfies health and character requirements',
                  'Is sponsored by an eligible sponsor',
                ],
              },
              {
                heading: 'Sponsor requirements',
                items: [
                  'Is an Australian citizen, Australian permanent resident, or eligible NZ citizen',
                  'Is a child of the parent (or the partner of the parent\'s child)',
                  'Must be of appropriate age and not be subject to any sponsorship bar',
                  'Must satisfy character requirements',
                  'Can provide an Assurance of Support if required — confirm current requirements on DoHA',
                ],
              },
            ].map(col => (
              <div key={col.heading} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 12 }}>{col.heading}</div>
                {col.items.map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{p}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Charges ──────────────────────────────────────────────── */}
      <section id="charges" style={{ padding: '64px 32px 56px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Costs" title="Approximate Charges — 884 and 864 Stages" />
          <div style={{ overflowX: 'auto' as const, marginBottom: 20 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13, minWidth: 500 }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  {['Charge', 'Approx. amount (per adult)', 'When payable'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', color: '#fff', fontWeight: 700, fontSize: 12, textAlign: 'left' as const, letterSpacing: '0.04em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { charge: '884 base application charge', amount: '~AUD 5,040 per adult', when: 'At lodgement of the 884' },
                  { charge: '884 additional charge (first contributory instalment)', amount: 'Included in above figure — confirm on DoHA', when: 'At lodgement of the 884' },
                  { charge: '864 second (main contributory) instalment', amount: '~AUD 43,600 per adult', when: 'At lodgement of the 864 (before the 884 expires)' },
                  { charge: 'Assurance of Support bond', amount: '~AUD 10,000 main + ~AUD 4,000 per additional adult', when: 'At 864 stage — lodged with Services Australia' },
                ].map((row, i) => (
                  <tr key={row.charge} style={{ background: i % 2 === 0 ? '#fff' : GREY_BG, borderBottom: `1px solid ${BORDER}` }}>
                    <td style={{ padding: '13px 16px', color: NAVY, fontWeight: 500 }}>{row.charge}</td>
                    <td style={{ padding: '13px 16px', color: '#374151', fontWeight: 600 }}>{row.amount}</td>
                    <td style={{ padding: '13px 16px', color: '#374151', fontSize: 12 }}>{row.when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Callout variant="note" panel={true} title="Confirm current charges on the Department of Home Affairs website">
            Visa application charges are updated annually. The figures above are indicative only as at {CURRENT_AS_AT}. Always confirm current charges on the Department of Home Affairs website before lodging either stage. Assurance of Support bond amounts are set by Services Australia — confirm current figures on the Services Australia website.
          </Callout>
        </div>
      </section>

      {/* ── Comparison ───────────────────────────────────────────── */}
      <section id="comparison" style={{ background: GREY_BG, padding: '64px 32px 56px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Which route?" title="884-then-864 vs Direct 864 — Comparison" />
          <div style={{ overflowX: 'auto' as const }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13, minWidth: 540 }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  {['Factor', '884 then 864 (two-stage)', 'Direct 864 (single application)'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', color: '#fff', fontWeight: 700, fontSize: 12, textAlign: 'left' as const, letterSpacing: '0.04em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'First payment', a: '~AUD 5,040 at 884 stage', b: 'Full second instalment ~AUD 43,600 at lodgement' },
                  { factor: 'Second payment', a: '~AUD 43,600 at 864 stage (~2 years later)', b: 'No second payment — all paid upfront' },
                  { factor: 'Total charges', a: 'Slightly higher — additional 884 base charge', b: 'Slightly lower — no 884 charge' },
                  { factor: 'Cash-flow benefit', a: 'Significant — spreads large payment over 2 years', b: 'None — full amount required at lodgement' },
                  { factor: 'Processing complexity', a: 'Two separate applications required', b: 'Single application' },
                  { factor: 'Risk of status gap', a: 'Yes — if 864 not lodged before 884 expires', b: 'No such risk — single application' },
                  { factor: 'Work rights', a: 'Generally no work rights on 884', b: 'Subject to 864 grant conditions' },
                ].map((row, i) => (
                  <tr key={row.factor} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafd', borderBottom: `1px solid ${BORDER}` }}>
                    <td style={{ padding: '13px 16px', color: NAVY, fontWeight: 600 }}>{row.factor}</td>
                    <td style={{ padding: '13px 16px', color: '#374151' }}>{row.a}</td>
                    <td style={{ padding: '13px 16px', color: '#374151' }}>{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: '#6b7280', marginTop: 12, fontStyle: 'italic' }}>
            Figures indicative only at {CURRENT_AS_AT} — confirm current charges on the Department of Home Affairs website before committing to either pathway.
          </p>
        </div>
      </section>

      {/* ── Application process ───────────────────────────────────── */}
      <section id="process" style={{ padding: '64px 32px 56px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Step by step" title="The 884 and 864 Application Process" />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* ── Permanent stage ───────────────────────────────────────── */}
      <section id="permanent-stage" style={{ background: GREY_BG, padding: '64px 32px 56px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Before the 884 expires" title="Transitioning to the Subclass 864" />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {[
              { code: '01', title: 'Know your 884 expiry date', body: 'The 884 is granted for exactly 2 years from the date of grant. Note the expiry date and set a target lodgement date for the 864 well in advance — aim for at least 3–6 months before expiry to allow for document preparation.' },
              { code: '02', title: 'Update health assessments if expired', body: 'Health assessments for visa purposes expire after a set period. If the original health assessments from the 884 application are no longer valid at the time the 864 is lodged, fresh assessments will be required. Plan for this.' },
              { code: '03', title: 'Arrange the Assurance of Support', body: 'The 864 requires an Assurance of Support (AoS) — a commitment by a sponsor to repay the Australian government for certain welfare benefits paid to the parent during the AoS period. An AoS bond (approximately AUD 10,000 for the main applicant) must be deposited with Services Australia before the 864 can be granted. Confirm current AoS requirements on the Services Australia website.' },
              { code: '04', title: 'Lodge the 864 before the 884 expires', body: "On lodgement of the 864, the parent receives a Bridging Visa A (BVA) which allows them to remain in Australia while the 864 is processed. The BVA's conditions depend on the 884's conditions — seek advice on what work or travel rights apply during this bridging period." },
            ].map(step => (
              <div key={step.code} style={{ borderLeft: `4px solid ${ACCENT}`, background: '#fff', padding: '20px 24px', borderRadius: '0 12px 12px 0', border: `1px solid ${BORDER}`, borderLeftWidth: 4, borderLeftColor: ACCENT }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: ACCENT, letterSpacing: '0.1em' }}>{step.code}</span>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY }}>{step.title}</div>
                </div>
                <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.75, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: '64px 32px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Subclass 884 Questions Answered" />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── Related ───────────────────────────────────────────────── */}
      <section id="related" style={{ background: GREY_BG, padding: '64px 32px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Explore further" title="Related Pages" accent={ACCENT} marginBottom={36} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Considering the 884 pathway for a pension-age parent?"
        body="Nanak Migration Group (MARN 2619467) can assess whether the 884-then-864 route is appropriate, confirm Balance of Family eligibility, and guide the two-stage application process. No outcome can be guaranteed."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
