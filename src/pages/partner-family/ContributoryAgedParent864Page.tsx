import React from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_PARTNER } from '@/theme'
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

const CURRENT_AS_AT = 'August 2026'
const ACCENT = CAT_PARTNER
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'bridging-visa', label: 'Bridging visa' },
  { id: 'charges', label: 'Charges' },
  { id: 'vs-804', label: '864 vs 804' },
  { id: 'vs-870', label: 'vs 870' },
  { id: 'process', label: 'How to apply' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related' },
]

const KEY_FACTS: KeyFact[] = [
  {
    icon: 'clock',
    value: '12–15 years',
    label: 'Realistic processing wait for new 864 applications',
    note: 'New applications for the subclass 864 face a substantial queue. Confirm current processing times on the DoHA website — times change as the cohort progresses.',
  },
  {
    icon: 'dollar',
    value: '~$43,600',
    label: 'Second-instalment charge per adult (approx. — confirm on DoHA)',
    note: 'The contributory charge is paid in two instalments. The second instalment (payable when the visa is nearly ready to grant) is approximately $43,600 per adult. Confirm current charges on the DoHA website.',
  },
  {
    icon: 'shield',
    value: 'Medicare',
    label: 'Access to Medicare from the date the 864 is granted',
    note: 'Unlike the non-contributory 804, the contributory 864 includes Medicare access from the date of grant — not from the date of bridging visa.',
  },
  {
    icon: 'home',
    value: 'Onshore only',
    label: 'Parent must be in Australia at lodgement and at grant',
    note: 'The 864 is an onshore visa. The offshore contributory alternative is the subclass 143. The offshore two-stage path is via the 173 then 143.',
  },
]

const ELIGIBILITY_ITEMS = [
  {
    heading: 'Australian Age Pension age',
    detail: "The parent must have reached Australian Age Pension age at the time of application. As at August 2026, this is 67 for both men and women. Confirm the current threshold on the DoHA website.",
  },
  {
    heading: 'Balance of Family Test',
    detail: "More than half of the parent's children must be Australian citizens, permanent residents, or eligible New Zealand citizens, OR the number of children permanently in Australia must be at least equal to those who are not. This test is mandatory and cannot be waived.",
  },
  {
    heading: 'Sponsorship',
    detail: "The parent must be sponsored by an eligible child (Australian citizen, PR, or eligible NZ citizen) or the child's eligible partner. The sponsor must be willing to provide an Assurance of Support.",
  },
  {
    heading: 'In Australia at lodgement and at grant',
    detail: 'The parent must be physically in Australia when the 864 is lodged and must be in Australia when the visa is granted. Extended absences during the long wait must be managed carefully with a Bridging Visa B (BVB) if needed.',
  },
  {
    heading: 'Health and character',
    detail: "Standard health examinations and character requirements apply. Health examinations are valid for a limited period — if the 864 processing takes many years, health clearances will need to be renewed before grant.",
  },
]

const BVA_FEATURES = [
  {
    title: 'Work rights',
    body: 'The BVA granted while waiting for the 864 generally does not include work rights. The parent cannot take paid employment during the waiting period. This is the same restriction as the non-contributory 804.',
  },
  {
    title: 'Medicare on the BVA',
    body: 'Medicare is NOT available on the Bridging Visa while waiting for the 864. Medicare access is only available from the date the 864 is granted. During the long wait, private health insurance is essential.',
  },
  {
    title: 'Travel during the wait',
    body: 'The standard BVA does not permit travel outside Australia and re-entry. If the parent needs to travel, they must apply for a Bridging Visa B (BVB) in advance. Leaving on a BVA without a BVB ceases the BVA. Seek advice before any international travel.',
  },
  {
    title: 'Health re-examination before grant',
    body: "Health clearances are valid for a limited period. Given the 12–15 year wait for new 864 applications, the parent's initial health examination will expire well before the visa is ready to grant. The Department will request updated health examinations closer to the time of grant.",
  },
]

const CHARGES_ROWS = [
  {
    instalment: 'First instalment',
    when: 'At time of lodging the 864 application',
    amount: 'Several thousand dollars (confirm on DoHA)',
  },
  {
    instalment: 'Second instalment',
    when: 'When the Department notifies that the visa is ready to grant',
    amount: 'Approximately $43,600 per adult (confirm on DoHA)',
  },
]

const VS_804_ROWS = [
  { feature: 'Application charge', col864: 'Very large (two instalments, ~$43,600+ per adult second instalment)', col804: 'Low (few thousand — confirm DoHA)' },
  { feature: 'Processing wait', col864: '12–15 years (new applications)', col804: 'Decades (new applications)' },
  { feature: 'Work rights on BVA', col864: 'No', col804: 'No' },
  { feature: 'Medicare on BVA', col864: 'No', col804: 'No' },
  { feature: 'Medicare on grant', col864: 'Yes', col804: 'Yes' },
  { feature: 'Balance of Family Test', col864: 'Yes', col804: 'Yes' },
  { feature: 'Assurance of Support', col864: 'Yes', col804: 'Yes' },
  { feature: 'Pension age required', col864: 'Yes', col804: 'Yes' },
]

const VS_870_POINTS = [
  {
    heading: '870: No Balance of Family Test',
    detail: "The subclass 870 does not require the parent to pass the Balance of Family Test. This is a significant advantage for families where fewer than half of the parent's children are in Australia.",
  },
  {
    heading: '870: Shorter wait, lower cost per stage',
    detail: 'The 870 can be lodged and granted much more quickly than the 864. The application charge per stage is much lower than the 864 contributory charges.',
  },
  {
    heading: '870: Temporary — up to 10 years total',
    detail: 'The 870 is a temporary visa with a maximum stay of 10 years (two 5-year stages). It does not lead to permanent residence. If permanent residence is the ultimate goal, the parent (or the family) needs a long-term strategy alongside the 870.',
  },
  {
    heading: '870: No work rights or Medicare',
    detail: 'Like the 864, the 870 does not include work rights or Medicare. Private health insurance is required throughout the 870 stay.',
  },
]

const STEPS: TimelineStep[] = [
  {
    title: 'Confirm eligibility and balance of family test',
    desc: "Assess whether the balance of family test is met — count all the parent's children (biological, adopted, step) and confirm the majority are Australian citizens, PRs or eligible NZ citizens.",
  },
  {
    title: 'Arrange assurance of support',
    desc: 'The sponsoring child applies to the Department of Human Services for the Assurance of Support, including lodging the required security bond. This step should be started early — it can take time to arrange.',
  },
  {
    title: 'Lodge the 864 application and pay the first instalment',
    desc: 'Lodge the application online via ImmiAccount while the parent is in Australia. Pay the first instalment charge. The parent receives a Bridging Visa A on lodgement.',
  },
  {
    title: 'Wait — and prepare for the second instalment',
    desc: 'The application will be in the queue for 12–15 years (new applications). When the Department notifies that the visa is ready to grant, the second instalment must be paid before the visa can be granted. Plan for this payment well in advance.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'Is the subclass 864 faster than the 804?',
    answer: 'Yes — the 864 queue is shorter than the 804 non-contributory queue. New 864 applicants face approximately 12–15 years, whereas new 804 applicants face a wait measured in decades. However, neither is a fast pathway to permanent residence. Both are very long processes. Confirm current processing times on the DoHA website.',
  },
  {
    question: 'What happens if the parent cannot pay the second instalment when the time comes?',
    answer: 'The second instalment must be paid before the Department will grant the 864. If the family cannot pay when the time comes, the visa cannot be granted. Planning and saving for the second instalment over the 12–15 year waiting period is essential. Families should build a financial plan for this payment from the time of lodging.',
  },
  {
    question: 'Can the parent travel overseas while waiting for the 864?',
    answer: 'Not freely. The Bridging Visa A does not permit re-entry after travel. If the parent needs to travel internationally during the waiting period, they must apply for a Bridging Visa B (BVB) in advance. Multiple BVBs can be obtained over the years. Seek advice before each trip.',
  },
  {
    question: 'My parent is not yet pension age but is already in Australia — can they start the 864 process?',
    answer: 'No. The 864 requires the parent to have reached Australian Age Pension age at the time of application. If the parent has not yet reached pension age, they are not eligible for the 864 (or the non-contributory 804). Alternatives while waiting to reach pension age include successive temporary visas or the subclass 870 Sponsored Parent (Temporary) if the parent meets those requirements.',
  },
  {
    question: 'Does the 864 grant Medicare from day one?',
    answer: 'Medicare is available from the date the 864 is granted — not from the date of the Bridging Visa. During the 12–15 year waiting period on the Bridging Visa, the parent does not have Medicare access. Comprehensive private health insurance for the entire waiting period is strongly recommended.',
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Aged Parent (804)',
    desc: 'The non-contributory onshore alternative — much lower charge, much longer wait.',
    icon: 'clock',
    page: 'aged-parent-804',
    color: ACCENT,
  },
  {
    title: 'Sponsored Parent (Temporary) 870',
    desc: 'Up to 10 years in Australia — no Balance of Family test, no decade-long queue.',
    icon: 'calendar',
    page: 'sponsored-parent-870',
    color: ACCENT,
  },
  {
    title: 'Contributory Parent (Permanent) 143',
    desc: 'The offshore equivalent of the 864 — for parents not yet in Australia.',
    icon: 'award',
    page: 'contributory-parent-143',
    color: ACCENT,
  },
  {
    title: 'Balance of Family Test',
    desc: 'The test every parent visa applicant must pass — worked examples.',
    icon: 'check',
    page: 'balance-of-family-test',
    color: ACCENT,
  },
]

export default function ContributoryAgedParent864Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['contributory-aged-parent-864'].title }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Parent Visas', url: 'https://www.nanakmigration.com.au/parent-visas' },
          { name: 'Contributory Aged Parent Visa (864)', url: 'https://www.nanakmigration.com.au/contributory-aged-parent-864' },
        ]}
        faqs={FAQ}
        service={{
          name: 'Contributory Aged Parent Visa (Subclass 864)',
          description: PAGE_META['contributory-aged-parent-864'].metaDescription,
          url: 'https://www.nanakmigration.com.au/contributory-aged-parent-864',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Partner & Family', page: 'partner-family-visas' },
        { label: 'Parent Visas', page: 'parent-visas' },
        { label: 'Contributory Aged Parent 864' },
      ]} />
      <PageHero
        variant="standard"
        eyebrow="Partner & Family"
        eyebrowSub="Parent Visas · Subclass 864 (Contributory Onshore)"
        title={<>Contributory Aged Parent<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 864</em></>}
        deck="The Contributory Aged Parent visa (subclass 864) is the onshore counterpart to the offshore subclass 143 — for pension-age parents who are already in Australia. It involves a substantial contributory charge and a 12–15 year processing queue for new applications."
        shortAnswer={<>The subclass 864 Contributory Aged Parent visa is an onshore permanent visa for parents who have reached Australian Age Pension age and are already in Australia. It is the contributory parent visa — meaning a large application charge (approximately $43,600 per adult as the second instalment — confirm current on DoHA) is payable before the visa is granted. The parent must meet the balance of family test and provide an assurance of support. While the 864 processes, the parent remains in Australia on a Bridging Visa and has access to Medicare from grant. Processing for new applications is realistically 12–15 years — both the 864 and the non-contributory 804 face long queues, but the 864 queue is somewhat shorter. The 864 is the onshore equivalent of the 143 (offshore). The offshore two-stage option (173 + 143) is not available for pension-age parents onshore — they must use the 864 if they want the contributory route in Australia. The temporary subclass 870 is an alternative for families who want the parent in Australia sooner without the very long wait, at a fraction of the cost but only temporarily. Nanak Migration Group (MARN 2619467) can advise on the full comparison. No outcome guarantees.</>}
        maraBadge={true}
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Sponsored Parent 870 →', page: 'sponsored-parent-870' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>

      {/* Sticky jump bar */}
      <div style={{ borderTop: '1px solid #e8edf6', borderBottom: '1px solid #e8edf6', background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 4, overflowX: 'auto', scrollbarWidth: 'none' as const }}>
          {TOC.map(sec => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap' as const, borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>

      <div id="overview">
        <KeyFactsStrip facts={KEY_FACTS} accent={ACCENT} />
      </div>

      {/* ── OVERVIEW ──────────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What it is" title="The Subclass 864 — Onshore Contributory Parent Visa" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>
            The subclass 864 Contributory Aged Parent visa is an onshore permanent visa for pension-age parents of Australian citizens, permanent residents, or eligible New Zealand citizens. It is the onshore equivalent of the offshore subclass 143 (Contributory Parent — permanent).
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>
            The 864 involves a large contributory application charge, paid in two instalments. The first instalment is payable at the time of lodging the application. The second instalment (the larger of the two) is payable when the Department notifies the applicant that the visa is ready to grant — which, for new applications, is approximately 12–15 years away.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            During the processing period, the parent lives in Australia on a Bridging Visa. On grant of the 864, the parent becomes a permanent resident with full rights, including Medicare access.
          </p>
          <Callout variant="note" panel={true} title="Both 864 and 804 face very long queues — the 864 is shorter but still substantial">
            The subclass 864 queue is shorter than the non-contributory 804 queue, but both involve waits measured in many years for new applications. The 864 is not a fast path to permanent residence. Families who need a shorter-term solution should consider the subclass 870 (Sponsored Parent — Temporary).
          </Callout>
        </div>
      </section>

      {/* ── ELIGIBILITY ───────────────────────────────────────────── */}
      <section id="eligibility" style={{ background: GREY_BG, padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Who can apply" title="Eligibility for the Subclass 864" accent={ACCENT} />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, marginTop: 32 }}>
            {ELIGIBILITY_ITEMS.map((item, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 10, padding: '22px 24px', background: '#fff' }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 6 }}>{item.heading}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRIDGING VISA ─────────────────────────────────────────── */}
      <section id="bridging-visa" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="During the wait" title="Living on a Bridging Visa While the 864 Processes" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, maxWidth: 760, marginBottom: 40 }}>
            After lodging the 864, the parent receives a Bridging Visa A (BVA) that allows them to remain in Australia lawfully throughout the processing period. Given the 12–15 year wait for new applications, the parent will spend a significant period on a Bridging Visa.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {BVA_FEATURES.map((item, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, padding: '28px 28px', background: GREY_BG, borderTop: `4px solid ${ACCENT}` }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: NAVY, marginBottom: 12 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.7 }}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHARGES ───────────────────────────────────────────────── */}
      <section id="charges" style={{ background: GREY_BG, padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="The cost" title="Contributory Charges — Two Instalments" accent={ACCENT} />
          <Callout variant="note" panel={true} title="Confirm all current charges on the DoHA website before lodging">
            Visa application charges are set by the Department and increase annually. The figures below are indicative as at August 2026. Always confirm the current charges on the DoHA website before lodging the application.
          </Callout>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, marginTop: 28, marginBottom: 16 }}>
            The 864 involves two application charge instalments:
          </p>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: 'hidden', marginBottom: 24 }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr 1.4fr', background: NAVY, padding: '12px 20px', gap: 8 }}>
              {['Instalment', 'When payable', 'Amount (indicative — confirm on DoHA)'].map((h, i) => (
                <div key={h} style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>
                  {h}
                </div>
              ))}
            </div>
            {CHARGES_ROWS.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr 1.4fr', padding: '14px 20px', gap: 8, background: i % 2 === 0 ? '#fff' : GREY_BG, borderTop: '1px solid #f0f2f7' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>{row.instalment}</div>
                <div style={{ fontSize: 13, color: '#4b5563' }}>{row.when}</div>
                <div style={{ fontSize: 13, color: '#4b5563' }}>{row.amount}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7 }}>
            Secondary applicants (the parent's partner, if included) pay a reduced second-instalment charge. The second instalment is a substantial sum — families should plan for this expense many years in advance and factor it into their financial planning.
          </p>
        </div>
      </section>

      {/* ── VS 804 ────────────────────────────────────────────────── */}
      <section id="vs-804" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading kicker="864 vs 804" title="Subclass 864 vs Subclass 804 — Which to Choose?" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, marginBottom: 24 }}>
            Both the 864 and the 804 are onshore permanent parent visas for pension-age parents. The key differences:
          </p>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: 'hidden', marginBottom: 28 }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.6fr 1.6fr', background: NAVY, padding: '12px 20px', gap: 8 }}>
              {['Feature', '864 (Contributory)', '804 (Non-Contributory)'].map((h, i) => (
                <div key={h} style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>
                  {h}
                </div>
              ))}
            </div>
            {VS_804_ROWS.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.6fr 1.6fr', padding: '13px 20px', gap: 8, background: i % 2 === 0 ? '#fff' : GREY_BG, borderTop: '1px solid #f0f2f7' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>{row.feature}</div>
                <div style={{ fontSize: 13, color: '#4b5563' }}>{row.col864}</div>
                <div style={{ fontSize: 13, color: '#4b5563' }}>{row.col804}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7 }}>
            The 864 processes faster than the 804 but costs significantly more. Neither includes work rights or Medicare during the waiting period. For families who need the parent in Australia with Medicare access sooner, neither the 864 nor the 804 is a fast solution — the subclass 870 (Sponsored Parent — Temporary) may be more appropriate.
          </p>
        </div>
      </section>

      {/* ── VS 870 ────────────────────────────────────────────────── */}
      <section id="vs-870" style={{ background: GREY_BG, padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="vs 870 temporary" title="Comparing to the Subclass 870 Sponsored Parent (Temporary)" accent={ACCENT} />
          <Callout variant="tip" panel={true} title="The subclass 870 is the faster, lower-cost temporary alternative">
            For families who want the parent in Australia sooner — and are prepared to accept a temporary visa rather than pursuing the very long permanent residence queues — the subclass 870 Sponsored Parent (Temporary) visa may be a more practical near-term solution.
          </Callout>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, marginTop: 32 }}>
            {VS_870_POINTS.map((item, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 10, padding: '22px 24px', background: '#fff' }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 6 }}>{item.heading}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────── */}
      <section id="process" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Application" title="How to Apply for the Subclass 864" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── RELATED ───────────────────────────────────────────────── */}
      <section id="related" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="See also" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand
        title="Is the subclass 864 the right route for your family?"
        body="Nanak Migration Group (MARN 2619467) can help you compare the 864, 804, and 870 options and advise on the assurance of support requirements."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
