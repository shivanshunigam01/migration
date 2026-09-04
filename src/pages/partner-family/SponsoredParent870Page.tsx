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

const ACCENT = CAT_PARTNER

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'fees', label: 'Fees' },
  { id: 'process', label: 'Process' },
  { id: 'limitations', label: 'Limitations' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  { icon: 'calendar', value: 'Up to 10 yrs', label: 'Maximum total stay in Australia', note: 'In grants of 3 years or 5 years, renewable up to a maximum of 10 years cumulative stay in Australia on the 870 visa.' },
  { icon: 'dollar', value: '~AUD 1,100 / 2,900', label: 'Government fees (3-year / 5-year)', note: 'Approximately AUD 1,100 for a 3-year grant and AUD 2,900 for a 5-year grant. Per applicant. Figures current at August 2026 — confirm on DoHA.' },
  { icon: 'check', value: 'No BoFT', label: 'No Balance of Family test', note: 'Unlike the permanent parent visa subclasses (103, 143, 173, 804, 864), the 870 does not require the Balance of Family test. It is available to parents who fail that test.' },
  { icon: 'alert', value: 'No work rights', label: 'The 870 grants no right to work in Australia', note: 'The visa holder must not work in Australia. Private health insurance is required for the full duration of the visa.' },
]

const STEPS: TimelineStep[] = [
  { code: '01', title: 'Assess whether the 870 suits your circumstances', desc: 'Consider the 10-year maximum, the no-work-rights limitation, and whether a permanent pathway is also available and worth pursuing in parallel. A registered migration agent can compare the 870 with the 143 or visitor visa options for your specific family.' },
  { code: '02', title: 'Child applies for sponsor approval', desc: 'The sponsoring child lodges a parent sponsorship application with the Department of Home Affairs, demonstrating they meet the income threshold and character requirements. This is processed separately from the visa application.' },
  { code: '03', title: 'Parent applies for the 870 visa', desc: 'Once the sponsor is approved (or the sponsor application is lodged, depending on circumstances), the parent lodges the 870 visa application with all required documents — identity documents, relationship evidence, health examination results, police clearances, and evidence of health insurance.' },
  { code: '04', title: 'Visa grant and entry to Australia', desc: 'Once granted, the parent can travel to Australia and live there for the duration of the 870 grant. The parent must maintain health insurance and cannot work during this period.' },
  { code: '05', title: 'Renewal before expiry', desc: 'Before the 870 expires, the family can apply for a renewal — provided the total time spent in Australia on the 870 does not exceed 10 years. There may be a requirement to spend 90 days outside Australia before a second 870 is granted in some circumstances — confirm current rules on DoHA or with your agent.' },
]

const FAQ: FaqItem[] = [
  { question: "Can my parent apply for the 870 if they cannot pass the Balance of Family test?", answer: "Yes — the Balance of Family test is not required for the subclass 870. This is one of the primary advantages of the 870 over the permanent parent visa subclasses. A parent whose family configuration fails the Balance of Family test (e.g. more children outside Australia than in Australia) can still apply for the 870, provided the sponsoring child meets the income threshold and other requirements." },
  { question: "Can my parent hold a 870 visa and also be in the permanent 143 queue at the same time?", answer: "Yes. A parent can simultaneously hold a subclass 870 visa (allowing them to live in Australia) and have a subclass 143 Contributory Parent permanent visa application in the queue. This is a common strategy — the parent lives in Australia on the 870 while waiting for the 143 to be processed, which currently takes approximately 12–15 years for new applications. When the 143 is granted, the parent becomes a permanent resident and the 870 is no longer needed." },
  { question: "Does the 870 count toward the residence requirement for citizenship?", answer: "No. Time spent in Australia on a temporary visa — including the subclass 870 — does not count toward the 4-year lawful residence required for Australian citizenship by conferral. Only time spent as a permanent resident counts toward the 12-month permanent residence component. If the parent's goal is citizenship, they need to become a permanent resident first (through the 143 or another permanent pathway), then accrue the required residence period." },
  { question: "What health insurance does my parent need?", answer: "The parent must hold comprehensive private health insurance that covers hospital treatment for the full duration of the 870 visa. The insurance must be from an approved provider. The Department assesses the adequacy of the coverage. The specific requirements for what counts as approved and adequate coverage should be confirmed with the Department of Home Affairs or your migration agent before purchasing a policy. Standard visitor travel insurance may not be sufficient." },
  { question: "Can both of my parents apply together on one 870 application?", answer: "Yes. Both parents can be included as applicants — one as the primary applicant and the other as a secondary applicant. Each applicant pays the visa application charge separately (~AUD 1,100 for 3 years or ~AUD 2,900 for 5 years per person). Each applicant must also meet health, character, and insurance requirements individually. Figures current at August 2026 — confirm on DoHA." },
  { question: "What if my parent's 870 expires and they have not applied for a renewal — are they unlawful?", answer: "If a 870 holder does not lodge a renewal application before their current visa expires, and they are still in Australia, they become unlawful — which can have serious consequences including removal from Australia and a re-entry bar. It is critical to apply for the renewal (or a bridging visa) before the 870 expires. An agent should monitor the expiry date and initiate renewal proceedings well in advance. If the parent's 870 has already expired while they are in Australia, they should seek urgent migration advice." },
]

const RELATED: RelatedPage[] = [
  { title: 'Parent Visas Hub', desc: 'Compare all parent visa pathways — cost, queue, and permanence.', icon: 'arrowright', page: 'parent-visas', color: ACCENT },
  { title: 'Contributory Parent Visa (143)', desc: 'The most common permanent parent pathway — charges and the 173 staged route.', icon: 'dollar', page: 'contributory-parent-143', color: ACCENT },
  { title: 'Balance of Family Test', desc: 'How the Balance of Family test works — and whether your family can pass it.', icon: 'check', page: 'balance-of-family-test', color: ACCENT },
]

export default function SponsoredParent870Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['sponsored-parent-870'].title }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au/' },
          { name: 'Partner & Family', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Sponsored Parent (Temporary) 870', url: 'https://www.nanakmigration.com.au/sponsored-parent-870' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: typeof f.answer === 'string' ? f.answer : String(f.answer) }))}
        service={{
          name: 'Sponsored Parent (Temporary) Visa — Subclass 870',
          description: PAGE_META['sponsored-parent-870'].metaDescription,
          url: 'https://www.nanakmigration.com.au/sponsored-parent-870',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Partner & Family', page: 'partner-family-visas' },
          { label: 'Sponsored Parent (Temporary) 870' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Parent Visas"
        eyebrowSub="Partner & Family · Subclass 870"
        title={<>Sponsored Parent (Temporary) Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 870 — Up to 10 Years in Australia</em></>}
        deck="The subclass 870 allows a parent to live in Australia for up to 10 years on a temporary basis — without the Balance of Family test, without entering the permanent parent visa queue, and at a fraction of the cost of permanent parent pathways. It requires an approved parent sponsor and comprehensive health insurance."
        shortAnswer={<>The subclass 870 Sponsored Parent (Temporary) visa allows a parent to live in Australia for <strong style={{ color: NAVY }}>up to 10 years</strong> — in consecutive grants of 3 or 5 years — without needing to pass the Balance of Family test. Government fees are approximately <strong style={{ color: NAVY }}>AUD 1,100 (3-year grant)</strong> or <strong style={{ color: NAVY }}>AUD 2,900 (5-year grant)</strong>. The parent's child in Australia must first be approved as a <strong style={{ color: NAVY }}>parent sponsor</strong> before the visa can be applied for. The 870 grants no work rights and requires the parent to hold private health insurance for the full duration of the visa. It does not lead to permanent residence on its own. Nanak Migration Group (MARN 2619467) can advise on whether the 870 suits your family's circumstances.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← All parent visas', page: 'parent-visas' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>

      {/* Key facts strip */}
      <KeyFactsStrip facts={FACTS} accent={ACCENT} />

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

      {/* ── OVERVIEW ───────────────────────────────────────── */}
      <section id="overview" style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="What it is" title="The Subclass 870 — A Temporary but Practical Pathway" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 20 }}>
            The subclass 870 Sponsored Parent (Temporary) visa was introduced in 2019 as a pragmatic option for families who want a parent to spend extended time in Australia — without the complexity, cost, or queue of the permanent parent visa pathways. It is temporary and provides no direct pathway to permanent residence, but it allows a parent to live in Australia alongside their family for up to 10 years in total.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 40 }}>
            The 870 is also commonly used as a &quot;bridge&quot; strategy while a parent is waiting in the permanent parent visa queue. A parent can hold a subclass 870 and be in the permanent queue for a 143 simultaneously — meaning they can live in Australia while waiting for their permanent application to be processed. This requires the sponsoring child to be an approved parent sponsor.
          </p>

          {/* 2-column feature grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {/* Left column */}
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="check" size={20} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 6 }}>No Balance of Family test</div>
                  <div style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.7 }}>The 870 is the only parent visa that does not require the Balance of Family test. Parents whose family configuration fails the test for permanent visas can still access the 870.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="shield" size={20} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 6 }}>Health insurance is mandatory for the full stay</div>
                  <div style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.7 }}>The parent must hold private health insurance (equivalent to OSHC-level cover or approved equivalent) for the entire duration of the visa. Medicare access is not included.</div>
                </div>
              </div>
            </div>
            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="building" size={20} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 6 }}>Sponsor approval must come first</div>
                  <div style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.7 }}>The sponsoring child must apply to become an approved parent sponsor and be approved before the parent applies for the 870. Sponsor applications and visa applications are separate.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="calendar" size={20} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 6 }}>Maximum 10 years — not a permanent visa</div>
                  <div style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.7 }}>The 870 can be granted for 3 or 5 years and renewed, but the total time spent in Australia on the 870 cannot exceed 10 years. It is a temporary visa with no automatic pathway to permanent residence.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ───────────────────────────────────── */}
      <section id="eligibility" style={{ background: '#f8fafd', padding: '64px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Requirements" title="Eligibility Requirements" />

          <h3 style={{ fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 16, marginTop: 0 }}>The parent</h3>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 0, marginBottom: 40 }}>
            {[
              "The parent must be the biological, adoptive, or step-parent of the sponsoring child in Australia. The relationship must be genuine.",
              "The parent must hold, or have held, a visa that allowed them to enter Australia legally — OR be applying from outside Australia. The visa cannot be applied for by a person who is unlawfully in Australia.",
              "The parent must meet health requirements (medical examination required) and character requirements (police clearances).",
              "The parent must hold comprehensive health insurance for the full duration of the visa and must not have access to Medicare.",
            ].map((text, i) => (
              <div
                key={i}
                style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fafbfe', borderRadius: 8, padding: 20, marginBottom: 12, fontSize: 15, color: '#374151', lineHeight: 1.75 }}
              >
                {text}
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 16, marginTop: 0 }}>The sponsor (the child in Australia)</h3>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 0, marginBottom: 36 }}>
            {[
              "The sponsor must be an Australian citizen, Australian permanent resident, or eligible New Zealand citizen, and must be 18 years or older.",
              "The sponsor must meet a household income threshold (to demonstrate they can support the parent). The threshold is set annually — confirm current amounts on the Department of Home Affairs website. As at August 2026, the household income threshold is approximately AUD 83,454.80 per year for one sponsored parent, with additional amounts for each additional sponsored family member.",
              "The sponsor must not have been subject to a Family Violence Order or a domestic violence-related criminal conviction — and must have no adverse criminal history in relation to children.",
            ].map((text, i) => (
              <div
                key={i}
                style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fafbfe', borderRadius: 8, padding: 20, marginBottom: 12, fontSize: 15, color: '#374151', lineHeight: 1.75 }}
              >
                {text}
              </div>
            ))}
          </div>

          <Callout variant="note" panel={true} title="Sponsor approval is a separate process">
            The child in Australia must apply to be an approved parent sponsor — this is a separate application from the parent&apos;s visa application. The sponsorship approval must be granted before the parent applies for the 870 visa (or can be applied for concurrently in some circumstances, but the visa cannot be granted until the sponsor is approved). Allow additional processing time for the sponsor approval.
          </Callout>
        </div>
      </section>

      {/* ── FEES ──────────────────────────────────────────── */}
      <section id="fees" style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="What it costs" title="Government Fees" />

          <div style={{ overflowX: 'auto', marginBottom: 28 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
              <thead>
                <tr style={{ background: NAVY, color: '#fff' }}>
                  <th style={{ padding: '14px 20px', textAlign: 'left' as const, fontWeight: 700, borderRadius: '8px 0 0 0' }}>Grant length</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left' as const, fontWeight: 700 }}>Government fee per applicant</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left' as const, fontWeight: 700, borderRadius: '0 8px 0 0' }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#fafbfe' }}>
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid #e8edf6', fontWeight: 600 }}>3-year grant</td>
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid #e8edf6' }}>~AUD 1,100</td>
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid #e8edf6', color: '#6b7280', fontSize: 13 }}>Per applicant. Confirm on DoHA.</td>
                </tr>
                <tr style={{ background: '#fff' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600 }}>5-year grant</td>
                  <td style={{ padding: '14px 20px' }}>~AUD 2,900</td>
                  <td style={{ padding: '14px 20px', color: '#6b7280', fontSize: 13 }}>Per applicant. Confirm on DoHA.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, marginBottom: 28 }}>
            If both parents are applying, each pays the visa application charge separately. A couple applying for a 5-year 870 visa would pay approximately AUD 5,800 in total government charges. Agent fees are separate.
          </p>

          <Callout variant="warning" panel={true} title="Health insurance costs are additional and ongoing">
            The parent must maintain comprehensive private health insurance for the entire duration of the 870 visa. Health insurance costs are not included in the visa application charge. For a parent staying 5 years, ongoing health insurance can amount to a significant additional cost — families should budget accordingly. Nanak Migration Group (MARN 2619467) can provide indicative health insurance cost estimates for planning purposes.
          </Callout>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────── */}
      <section id="process" style={{ background: '#f8fafd', padding: '64px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="How to apply" title="The Application Process" />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* ── LIMITATIONS ───────────────────────────────────── */}
      <section id="limitations" style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="What to know" title="Key Limitations of the Subclass 870" />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>

            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="alert" size={18} color="#d97706" />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 6 }}>No work rights</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.75 }}>The parent must not work in Australia on the 870 visa. There is no exception. Working while holding the 870 would be a breach of visa conditions and could result in visa cancellation.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="alert" size={18} color="#d97706" />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 6 }}>No Medicare</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.75 }}>The parent is not entitled to Medicare during the 870 period. Comprehensive private health insurance is mandatory and must be maintained for the full visa duration. Health costs for an elderly parent can be substantial — families should assess insurance costs before applying.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="alert" size={18} color="#d97706" />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 6 }}>No direct pathway to permanent residence</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.75 }}>Holding the 870 does not make the parent eligible for any permanent parent visa. If the family wants the parent to become a permanent resident, they must lodge a separate application in the relevant permanent parent visa queue (e.g. 143), which operates independently of the 870. The 870 and a permanent parent application can be held simultaneously.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="alert" size={18} color="#d97706" />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 6 }}>90-day gap may be required between grants</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.75 }}>In some circumstances, a parent who has used their full 870 grant must spend 90 days outside Australia before being granted another 870. The rules on this are set by the Department — confirm with your agent before planning to renew.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="alert" size={18} color="#d97706" />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 6 }}>10-year cumulative cap</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.75 }}>The total time spent in Australia on all 870 visas combined cannot exceed 10 years. Once the cap is reached, the parent cannot apply for another 870. Families should track days spent in Australia carefully.</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#f8fafd', padding: '64px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Frequently Asked Questions" />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── RELATED PAGES ─────────────────────────────────── */}
      <section id="related" style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Explore further" title="Related Pages" />
          <RelatedPages pages={RELATED} navigate={navigate} columns={3} />
        </div>
      </section>

      <CtaBand
        title="Assess the 870 for your family"
        body="Nanak Migration Group (MARN 2619467) can compare the 870 with permanent options and advise on the sponsor approval process."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
