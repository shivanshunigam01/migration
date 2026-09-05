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
  { id: 'process', label: 'Process' },
  { id: 'staged-route', label: 'Staged route (173)' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'dollar',
    value: '~AUD 95,000',
    label: 'Total government charges for a couple',
    note: 'First instalment (~$5,040 per applicant) at lodgement; second instalment (~$43,600 per adult) before grant. Figures current at August 2026 — confirm on DoHA.',
  },
  {
    icon: 'calendar',
    value: '12–15 years',
    label: 'Estimated processing time for new applications',
    note: 'Applies to applications lodged today. The queue has been growing. These are indicative estimates — actual processing may differ. Confirm current estimates on DoHA.',
  },
  {
    icon: 'shield',
    value: 'BoFT required',
    label: 'Balance of Family test must be satisfied',
    note: "At least half of the parent's children must be settled in Australia — or more children must be settled in Australia than in any other single country.",
  },
  {
    icon: 'building',
    value: 'AoS required',
    label: 'Assurance of Support required from the sponsoring child',
    note: 'The child in Australia must lodge an Assurance of Support, including a bond with the Department of Human Services, as part of the sponsorship process.',
  },
]

const STEPS: TimelineStep[] = [
  {
    code: '01',
    title: 'Assess eligibility — before committing',
    desc: 'Check whether the Balance of Family test is satisfied, confirm the sponsoring child meets the settlement requirement, and assess whether an Assurance of Support is achievable. A mistake at this stage could mean a refused application and lost charges.',
  },
  {
    code: '02',
    title: 'Sponsor registration',
    desc: 'The sponsoring child lodges a Form 40 (Sponsorship for a Parent to Migrate to Australia) with the Department of Home Affairs. This is processed before or at the same time as the visa application.',
  },
  {
    code: '03',
    title: 'Assurance of Support',
    desc: 'The assurer applies to the Department of Human Services (Services Australia) for AoS approval and pays the required bond. The AoS must be approved before the visa can be granted.',
  },
  {
    code: '04',
    title: 'Visa application (first instalment)',
    desc: 'The parent lodges the visa application, pays the first instalment of charges, and submits all supporting documents — identity, relationship evidence, health assessments, and police clearances.',
  },
  {
    code: '05',
    title: 'Wait in queue; pay second instalment before grant',
    desc: 'The application sits in the queue for approximately 12–15 years (for new applications). When the Department is ready to grant, they request the second instalment (~$43,600 per adult). The visa is granted after payment and final checks.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: "Can I include my other parent (the other applicant's spouse) in the same application?",
    answer: "Yes. If both parents are applying, both can be included in the same application as primary and secondary applicants. Each adult applicant pays both the first and second instalment of charges — approximately $5,040 each at lodgement and approximately $43,600 each before grant, meaning a couple pays roughly $97,280 in total government charges. These figures are current at August 2026 — confirm on DoHA.",
  },
  {
    question: "What if my parent is refused — can the charges be refunded?",
    answer: "Visa application charges are generally non-refundable, even if the application is refused. The second instalment is only payable before grant and would not be paid if an application were refused before that point. However, the first instalment paid at lodgement is generally not refunded in the event of refusal. This is one reason why a thorough eligibility assessment before lodging is important — Nanak Migration Group (MARN 2619467) reviews eligibility before clients commit to the charges.",
  },
  {
    question: "My parent is already in Australia on a visitor visa — can they apply onshore?",
    answer: "The subclass 143 is generally an offshore visa — the applicant must be outside Australia when the visa is granted (although they can be in Australia when lodging). If the parent is onshore and of age pension age, the subclass 864 Contributory Aged Parent visa is the onshore contributory option. If the parent is not yet of age pension age, they generally need to be offshore at the time of grant for the 143. An agent can advise on the specific circumstances.",
  },
  {
    question: "Does my parent need to pass a health examination?",
    answer: "Yes. All visa applicants, including secondary applicants (spouses and dependent children), must undergo a medical examination at a Department-approved panel physician. The health examination assesses general health and checks for conditions that may place a significant cost on the Australian health system. Results are valid for a limited period — if the queue wait extends beyond the validity, a re-examination may be required.",
  },
  {
    question: "Can my parent apply for citizenship after getting the 143 visa?",
    answer: "Yes. After being granted the subclass 143, the parent is a permanent resident and begins accruing the residence required for citizenship. In general, a person must have been lawfully resident in Australia for 4 years (including 12 months as a permanent resident) to be eligible for citizenship by conferral. The 4-year period generally does not count time spent on a temporary visa — so time on a 870 or 173 does not count toward the citizenship residence requirement.",
  },
  {
    question: "What is the Assurance of Support bond and when is it returned?",
    answer: "The Assurance of Support bond is a financial deposit lodged with Services Australia (formerly DHS) by the assurer as part of the AoS process. The bond amount varies by visa type and number of applicants. For the 143, the AoS period is typically 10 years. If no recoverable welfare payments are made to the visa holder during the AoS period, the bond is refunded at the end of the period with interest. The bond is intended to reduce the risk that the parent becomes a burden on the welfare system.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Parent Visas Hub',
    desc: 'Overview of all parent visa pathways — comparison of cost, wait, and permanence.',
    icon: 'arrowright',
    page: 'parent-visas',
    color: ACCENT,
  },
  {
    title: 'Sponsored Parent (Temporary) 870',
    desc: 'Live in Australia for up to 10 years while waiting in the permanent queue.',
    icon: 'calendar',
    page: 'sponsored-parent-870',
    color: ACCENT,
  },
  {
    title: 'Balance of Family Test',
    desc: 'How the Balance of Family test works — and whether your family can pass it.',
    icon: 'check',
    page: 'balance-of-family-test',
    color: ACCENT,
  },
]

export default function ContributoryParent143Page({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Parent Visas', url: 'https://www.nanakmigration.com.au/parent-visas' },
          { name: 'Contributory Parent Visa (143)', url: 'https://www.nanakmigration.com.au/contributory-parent-143' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Contributory Parent Visa Subclass 143',
          description: PAGE_META['contributory-parent-143'].metaDescription,
          url: 'https://www.nanakmigration.com.au/contributory-parent-143',
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
          { label: 'Contributory Parent (143)' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Parent Visas"
        eyebrowSub="Partner & Family · Subclass 143"
        title={<>Contributory Parent Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 143 — Permanent Residence</em></>}
        deck="The subclass 143 Contributory Parent visa grants permanent residence to parents of settled Australian citizens, permanent residents, or eligible New Zealand citizens. It is the most common permanent parent pathway — but applicants must be prepared for significant government charges and a processing queue currently estimated at 12–15 years for new applications."
        shortAnswer={<>The subclass 143 Contributory Parent visa grants <strong style={{ color: NAVY }}>permanent residence</strong> to parents whose child is a settled Australian citizen, permanent resident, or eligible New Zealand citizen — provided the parent can pass the <strong style={{ color: NAVY }}>Balance of Family test</strong> and the sponsoring child can provide an Assurance of Support. Government charges are approximately <strong style={{ color: NAVY }}>AUD 5,040 at lodgement</strong> (first instalment) and approximately <strong style={{ color: NAVY }}>AUD 43,600 per adult applicant</strong> (second instalment, payable before grant) — meaning a couple faces roughly <strong style={{ color: NAVY }}>AUD 95,000 in total government charges</strong>. Current processing times for new applications are approximately 12–15 years. Nanak Migration Group (MARN 2619467) can assess your eligibility before you commit to the charges.</>}
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
          <SectionHeading kicker="What it grants" title="What the Subclass 143 Provides" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            The subclass 143 Contributory Parent visa, once granted, gives the holder permanent residence in Australia — the right to live, work, and access Medicare in Australia indefinitely. It also grants an automatic travel facility (generally 5 years) and places the holder on the pathway to Australian citizenship (after 4 years of lawful residence in Australia, including 12 months as a permanent resident).
          </p>

          {/* 3-item feature row */}
          <div style={{ display: 'flex', gap: 24, marginBottom: 48, flexWrap: 'wrap' as const }}>
            <div style={{ flex: 1, minWidth: 220, display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="shield" size={20} color={ACCENT} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 700, color: NAVY, margin: '0 0 6px' }}>Permanent residence</h3>
                <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65, margin: 0 }}>Indefinite right to live in Australia, access Medicare, and work without restriction.</p>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 220, display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="plane" size={20} color={ACCENT} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 700, color: NAVY, margin: '0 0 6px' }}>5-year travel facility</h3>
                <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65, margin: 0 }}>Travel to and from Australia freely for 5 years from the date of grant; renewable thereafter as a Resident Return Visa (RRV).</p>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 220, display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="arrowright" size={20} color={ACCENT} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 700, color: NAVY, margin: '0 0 6px' }}>Pathway to citizenship</h3>
                <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65, margin: 0 }}>Eligible for Australian citizenship after 4 years of lawful residence (including 12 months as a permanent resident), subject to character and other requirements.</p>
              </div>
            </div>
          </div>

          <Callout variant="warning" panel={true} title="The processing queue — an honest assessment">
            The subclass 143 is a popular visa with a long processing queue. The Department of Home Affairs processes applications in queue order (generally by application date). Families who lodge today should plan for a wait of approximately 12–15 years before the visa is granted. During this time, the parent can visit Australia on visitor visas or apply for the subclass 870 Sponsored Parent (Temporary) visa, or use the subclass 173 staged route to live in Australia while the permanent queue processes. Figures current at August 2026 — confirm on DoHA.
          </Callout>
        </div>
      </section>

      {/* ── ELIGIBILITY ────────────────────────────────────────── */}
      <section id="eligibility" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Who can apply" title="Eligibility Requirements" accent={ACCENT} />

          {/* 4 requirement cards */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fafbfe', borderRadius: '0 8px 8px 0', padding: 20 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>1. The sponsoring child must be settled in Australia</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                The applicant must have at least one child who is an Australian citizen, Australian permanent resident, or eligible New Zealand citizen, AND who has been settled in Australia (i.e. lawfully resident) for at least 2 years before the visa application is lodged. Step-children and legally adopted children count.
              </p>
            </div>

            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fafbfe', borderRadius: '0 8px 8px 0', padding: 20 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>2. The Balance of Family test must be satisfied</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                The parent must pass the Balance of Family test. This requires either: (a) at least half of the parent's children are Australian citizens, Australian permanent residents, or eligible New Zealand citizens settled in Australia; OR (b) more of the parent's children are settled in Australia than in any other single country. If the parent fails this test, the 143 pathway is not available — the 870 is the alternative. See the Balance of Family Test guide for worked examples.
              </p>
            </div>

            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fafbfe', borderRadius: '0 8px 8px 0', padding: 20 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>3. Assurance of Support must be provided</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                The sponsoring child (or another eligible person) must be willing and able to provide an Assurance of Support — a legally binding undertaking to support the parent financially. The assurer must meet income requirements and lodge a bond with the Department of Human Services. The AoS period for the 143 is generally 10 years.
              </p>
            </div>

            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fafbfe', borderRadius: '0 8px 8px 0', padding: 20 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>4. Health and character requirements</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                All applicants must meet Australian health requirements (medical examination required) and character requirements (police clearances from each country lived in for 12 months or more in the past 10 years).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHARGES ────────────────────────────────────────────── */}
      <section id="charges" style={{ background: '#ffffff', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What it costs" title="Government Charges — the Two-Instalment Structure" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The Contributory Parent visa charges are paid in two instalments. These are government charges set by the Department of Home Affairs and are separate from any agent fees.
          </p>

          {/* 2-card layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
            {/* First instalment */}
            <div style={{ border: '1px solid #e8edf6', borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 12px rgba(27,43,94,0.05)' }}>
              <div style={{ background: NAVY, padding: '16px 24px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: 4 }}>First instalment</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Payable at lodgement</div>
              </div>
              <div style={{ padding: 24 }}>
                {[
                  { label: 'Primary applicant', value: '~AUD 5,040' },
                  { label: 'Each secondary adult', value: '~AUD 5,040' },
                  { label: 'Each secondary child (under 18)', value: '~AUD 1,260' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < 2 ? '1px solid #f0f2f7' : 'none' }}>
                    <span style={{ fontSize: 13, color: '#374151' }}>{row.label}</span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: NAVY }}>{row.value}</span>
                  </div>
                ))}
                <div style={{ marginTop: 16, padding: '12px 16px', background: '#f8fafd', borderRadius: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: NAVY }}>Example: parent couple</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: ACCENT }}>~AUD 10,080</span>
                </div>
              </div>
            </div>

            {/* Second instalment */}
            <div style={{ border: '1px solid #e8edf6', borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 12px rgba(27,43,94,0.05)' }}>
              <div style={{ background: NAVY, padding: '16px 24px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: 4 }}>Second instalment</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Payable before grant</div>
              </div>
              <div style={{ padding: 24 }}>
                {[
                  { label: 'Primary applicant', value: '~AUD 43,600' },
                  { label: 'Each secondary adult', value: '~AUD 43,600' },
                  { label: 'Each secondary child', value: 'Confirm on DoHA' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < 2 ? '1px solid #f0f2f7' : 'none' }}>
                    <span style={{ fontSize: 13, color: '#374151' }}>{row.label}</span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: NAVY }}>{row.value}</span>
                  </div>
                ))}
                <div style={{ marginTop: 16, padding: '12px 16px', background: '#f8fafd', borderRadius: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: NAVY }}>Example: parent couple</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: ACCENT }}>~AUD 87,200</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bold total callout */}
          <div style={{ padding: '20px 24px', background: `${ACCENT}08`, border: `1.5px solid ${ACCENT}30`, borderRadius: 12, marginBottom: 24 }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: NAVY, lineHeight: 1.65, margin: 0 }}>
              A couple applying together faces total government charges of approximately AUD 97,280 (AUD 10,080 first instalment + AUD 87,200 second instalment). These figures are current at August 2026 and are subject to annual indexation.
            </p>
          </div>

          <Callout variant="warning" panel={true} title="Charges are indexed annually and non-refundable">
            Government visa charges are indexed in July each year. The amounts above are current at August 2026 — confirm on the Department of Home Affairs website before lodging. Visa application charges are generally non-refundable even if the application is refused. Nanak Migration Group (MARN 2619467) will confirm current charges before you commit.
          </Callout>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section id="process" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="How to apply" title="The Application Process" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* ── STAGED ROUTE ───────────────────────────────────────── */}
      <section id="staged-route" style={{ background: '#ffffff', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="The 173 option" title="The Staged Route — Subclass 173 to Subclass 143" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            Rather than waiting offshore for the entire processing time, some families use the subclass 173 Contributory Parent (Temporary) visa as a staging mechanism. The 173 allows the parent to live in Australia temporarily while the permanent 143 application is processed in the same queue.
          </p>

          {/* 2 side-by-side cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
            {/* How it works */}
            <div style={{ border: '1px solid #e8edf6', borderRadius: 14, padding: 28, background: '#fafbfe' }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 20px' }}>How it works</h3>
              <ol style={{ margin: 0, padding: '0 0 0 20px', display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
                {[
                  'Lodge the 173 application (first instalment only — ~$3,400 per applicant; lower than the 143 first instalment)',
                  'The 173 is processed faster than the 143 (typically 2–5 years for the temporary stage)',
                  'The parent is granted the 173 temporary visa and can live in Australia',
                  'The permanent 143 queue continues processing',
                  'When the 143 is ready to be granted, the second instalment becomes payable',
                  'The 173 is converted to the permanent 143',
                ].map((step, i) => (
                  <li key={i} style={{ fontSize: 13, color: '#374151', lineHeight: 1.65 }}>{step}</li>
                ))}
              </ol>
            </div>

            {/* Trade-offs */}
            <div style={{ border: '1px solid #e8edf6', borderRadius: 14, padding: 28, background: '#fafbfe' }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 20px' }}>Trade-offs</h3>

              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#16a34a', marginBottom: 10 }}>Pros</div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                  {[
                    'Parent can live in Australia while waiting rather than offshore',
                    'First instalment is lower than direct 143 path',
                    '173 temporary visa gives limited work rights',
                  ].map((pro, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <Icon name="check" size={10} color="#16a34a" />
                      </div>
                      <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{pro}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#dc2626', marginBottom: 10 }}>Cons</div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                  {[
                    'Total charges over the staged route may be marginally higher than a direct 143 application (different first-instalment amounts)',
                    'The permanent queue wait is the same — 173 does not provide a shorter queue',
                    'Parent must maintain health insurance during the 173 period',
                  ].map((con, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <Icon name="minus" size={10} color="#dc2626" />
                      </div>
                      <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Callout variant="note" panel={true} title="173 and 143 share the same permanent queue">
            Lodging a 173 does not place you in a faster queue. The permanent 143 grant date is determined by when the permanent application was lodged — the 173 simply allows the parent to be in Australia during the wait rather than waiting offshore.
          </Callout>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #eef0f6' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── RELATED PAGES ──────────────────────────────────────── */}
      <section id="related" style={{ background: '#ffffff', padding: '80px 32px', borderTop: '1px solid #eef0f6' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also on this site" title="Related pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={3} />
        </div>
      </section>

      <CtaBand
        title="Check your family's eligibility before paying charges"
        body="Nanak Migration Group (MARN 2619467) reviews the Balance of Family test, Assurance of Support eligibility, and charge commitments before families lodge."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
