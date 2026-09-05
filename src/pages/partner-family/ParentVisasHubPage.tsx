import React, { useState } from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_PARTNER } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs, PageHero, KeyFactsStrip, SectionHeading,
  FaqAccordion, RelatedPages, CtaBand, ComplianceDisclaimer, Callout,
} from '@/components/page'
import type { KeyFact, FaqItem, RelatedPage } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'
import Icon from '@/components/ui/Icon'

const ACCENT = CAT_PARTNER

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'visa-types', label: 'Visa types' },
  { id: 'queue-reality', label: 'Queue reality' },
  { id: 'comparison', label: 'Comparison' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'calendar',
    value: '12–15 yrs',
    label: 'Current wait for Contributory Parent (143)',
    note: 'New applications lodged today face approximately 12–15 years of processing. Non-contributory parent visas face a substantially longer queue. Figures current at August 2026 — confirm on DoHA.',
  },
  {
    icon: 'dollar',
    value: '~AUD 95,000',
    label: 'Government charges for a couple (143)',
    note: 'Payable in two instalments: approximately $5,040 at lodgement and $43,600 per adult applicant before grant. These are government charges only — agent fees are additional. Confirm current amounts on DoHA.',
  },
  {
    icon: 'calendar',
    value: '10 years',
    label: 'Maximum stay on the 870 Sponsored Parent visa',
    note: 'Up to 10 years in Australia via two grants of 3 years or 5 years. No Balance of Family test required. No work rights.',
  },
  {
    icon: 'check',
    value: 'No BoFT',
    label: 'Subclass 870 does not require the Balance of Family test',
    note: "The Balance of Family test — which requires at least half of a parent's children to be settled in Australia — is required for 103, 143, 173, 804 and 864 but NOT for the 870 temporary visa.",
  },
]

const FAQ: FaqItem[] = [
  {
    question: "Can my parent come to Australia while waiting for their permanent visa to be processed?",
    answer: "Yes — the subclass 870 Sponsored Parent (Temporary) visa is specifically designed for this purpose. It allows a parent to live in Australia for up to 3 or 5 years at a time, renewable to a maximum of 10 years total stay. The parent can apply for the 870 while also being in the permanent visa queue. The 870 requires an approved sponsor and health insurance for the duration of the stay. There is a 90-day gap required outside Australia before applying for a second 870 in some circumstances — your agent can advise on the specific rules for your situation.",
  },
  {
    question: "What is the Assurance of Support and do all parent visas require it?",
    answer: "An Assurance of Support (AoS) is a legally binding undertaking by an Australian citizen, permanent resident, or eligible New Zealand citizen (the 'assurer') to repay to the Australian Government any certain welfare payments made to the sponsored person during the AoS period. All permanent parent visas (103, 143, 173-to-143, 804, 864) require an AoS. The assurer must demonstrate sufficient income and lodge a bond with the Department of Human Services. The bond is refunded after the AoS period if no welfare payments were made. The AoS is assessed as part of the sponsorship process.",
  },
  {
    question: "What if my parent fails the Balance of Family test?",
    answer: "If a parent cannot pass the Balance of Family test — because more of their children live outside Australia than in it — they are not eligible for the permanent parent visa subclasses that require it (103, 143, 173, 804, 864). In this situation, the subclass 870 Sponsored Parent (Temporary) visa is the only parent visa available, as it does not require the Balance of Family test. Alternatively, if the family situation is close to passing — for example, if one additional sibling could settle in Australia — a migration agent can assess whether the test could be satisfied in the future.",
  },
  {
    question: "Can my parent work in Australia on a parent visa?",
    answer: "Permanent parent visas (103, 143, 804, 864) grant full work rights on grant. The subclass 173 (Contributory Parent Temporary) grants limited work rights. The subclass 870 (Sponsored Parent Temporary) grants no work rights — the visa holder must not work in Australia. For parents who wish to work, the permanent visa grant is the trigger for work rights. Parents waiting in the permanent queue on a subclass 870 do not have work rights during that period.",
  },
  {
    question: "How does the 173-to-143 staged pathway work?",
    answer: "The subclass 173 Contributory Parent (Temporary) allows a parent to come to Australia while their permanent 143 application is processed. Rather than waiting offshore for 12–15 years, the parent lodges a 173 application (first instalment of charges only), is granted the temporary 173 visa, and can live in Australia while the permanent queue processes. When the 143 is ready to be granted, the second instalment of charges becomes payable (~$43,600 per adult). This staged approach splits the financial burden and allows the parent to be in Australia while waiting. The parent is in the same permanent queue as a direct 143 applicant — the 173 does not provide a separate faster queue.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Contributory Parent (143)',
    desc: 'The most common permanent parent pathway — eligibility, charges, and the 173 staged route.',
    icon: 'dollar',
    page: 'contributory-parent-143',
    color: ACCENT,
  },
  {
    title: 'Contributory Parent Temporary (173)',
    desc: 'Lodge the 173 first, live in Australia, convert to permanent 143 when processed.',
    icon: 'calendar',
    page: 'contributory-parent-173',
    color: ACCENT,
  },
  {
    title: 'Parent (103)',
    desc: 'Non-contributory offshore permanent parent visa — lower charges, several-decade queue.',
    icon: 'clock',
    page: 'parent-visa-103',
    color: ACCENT,
  },
  {
    title: 'Aged Parent (804)',
    desc: 'Onshore non-contributory permanent visa for pension-age parents in Australia.',
    icon: 'user',
    page: 'aged-parent-804',
    color: ACCENT,
  },
  {
    title: 'Contributory Aged Parent (864)',
    desc: 'Onshore contributory permanent visa for pension-age parents — faster but much higher charges.',
    icon: 'award',
    page: 'contributory-aged-parent-864',
    color: ACCENT,
  },
  {
    title: 'Sponsored Parent Temporary (870)',
    desc: 'Live in Australia for up to 10 years — no Balance of Family test, no permanent queue.',
    icon: 'calendar',
    page: 'sponsored-parent-870',
    color: ACCENT,
  },
  {
    title: 'Balance of Family Test',
    desc: 'Whether your family passes — worked examples with different family spreads.',
    icon: 'check',
    page: 'balance-of-family-test',
    color: ACCENT,
  },
  {
    title: 'Assurance of Support',
    desc: 'Income test, refundable bond, and AoS period for permanent parent visas.',
    icon: 'shield',
    page: 'assurance-of-support',
    color: ACCENT,
  },
  {
    title: 'Contributory Aged Parent Temp (884)',
    desc: 'Two-stage onshore route — split the contributory charge before transitioning to permanent 864.',
    icon: 'dollar',
    page: 'contributory-aged-parent-884',
    color: ACCENT,
  },
]

/* Visa card data */
interface VisaCardData {
  code: string
  title: string
  tag: string
  tagColor: string
  fields: { label: string; value: string }[]
  warning?: string
  route?: string
  note?: string
}

const VISA_CARDS: VisaCardData[] = [
  {
    code: '143',
    title: 'Contributory Parent',
    tag: 'Permanent',
    tagColor: '#16a34a',
    fields: [
      { label: 'Onshore/Offshore', value: 'Offshore (or after 173 temporary stage)' },
      { label: 'Balance of Family test', value: 'Required' },
      { label: 'Charges', value: '~AUD 5,040 (first instalment) + ~AUD 43,600/adult (second instalment before grant)' },
      { label: 'Current queue', value: '12–15 years (new applications)' },
      { label: 'Work rights', value: 'Yes (on grant)' },
    ],
    route: 'contributory-parent-143',
  },
  {
    code: '173',
    title: 'Contributory Parent (Temporary)',
    tag: 'Temporary',
    tagColor: '#d97706',
    fields: [
      { label: 'Onshore/Offshore', value: 'Offshore' },
      { label: 'Balance of Family test', value: 'Required' },
      { label: 'Charges', value: '~AUD 3,400 first instalment; second instalment payable when applying for 143' },
      { label: 'Current queue', value: 'Same permanent queue as 143 (effectively)' },
    ],
    note: 'Designed as a staged route — lodge 173 first, live in Australia temporarily, then convert to permanent 143 when processed, paying the balance of charges.',
    route: 'contributory-parent-173',
  },
  {
    code: '103',
    title: 'Parent',
    tag: 'Permanent',
    tagColor: '#16a34a',
    fields: [
      { label: 'Onshore/Offshore', value: 'Offshore' },
      { label: 'Balance of Family test', value: 'Required' },
      { label: 'Charges', value: '~AUD 4,990 (much lower than contributory)' },
      { label: 'Current queue', value: 'Several decades (extremely long)' },
      { label: 'Work rights', value: 'Yes (on grant)' },
    ],
    warning: "New applications lodged today may not be decided within the applicant's lifetime.",
    route: 'parent-visa-103',
  },
  {
    code: '804',
    title: 'Aged Parent',
    tag: 'Permanent',
    tagColor: '#16a34a',
    fields: [
      { label: 'Onshore/Offshore', value: 'Onshore only' },
      { label: 'Balance of Family test', value: 'Required' },
      { label: 'Charges', value: '~AUD 4,990' },
      { label: 'Queue', value: 'Extremely long (similar to 103)' },
    ],
    note: 'Must be of Australian age pension age at time of application and must be in Australia on a substantive visa.',
    route: 'aged-parent-804',
  },
  {
    code: '864',
    title: 'Contributory Aged Parent',
    tag: 'Permanent',
    tagColor: '#16a34a',
    fields: [
      { label: 'Onshore/Offshore', value: 'Onshore only' },
      { label: 'Balance of Family test', value: 'Required' },
      { label: 'Charges', value: '~AUD 5,040 first + ~AUD 43,600/adult second instalment' },
      { label: 'Queue', value: 'Faster than 804 but currently still 10+ years for new applications' },
    ],
    note: 'Must be age pension age and in Australia on a substantive visa.',
    route: 'contributory-aged-parent-864',
  },
  {
    code: '884',
    title: 'Contributory Aged Parent (Temporary)',
    tag: 'Temporary',
    tagColor: '#d97706',
    fields: [
      { label: 'Onshore/Offshore', value: 'Onshore only' },
      { label: 'Balance of Family test', value: 'Required' },
      { label: 'Charges', value: '~AUD 5,040 first instalment; second (~AUD 43,600/adult) paid at 864 stage' },
      { label: 'Duration', value: '2 years — must lodge 864 before expiry' },
    ],
    note: 'Two-stage route for pension-age parents onshore — splits contributory charges over the 884 temporary stage and the permanent 864.',
    route: 'contributory-aged-parent-884',
  },
  {
    code: '870',
    title: 'Sponsored Parent (Temporary)',
    tag: 'Temporary',
    tagColor: '#2563eb',
    fields: [
      { label: 'Onshore/Offshore', value: 'Onshore or Offshore' },
      { label: 'Balance of Family test', value: 'NOT required' },
      { label: 'Charges', value: '~AUD 1,100 (3-year) or ~AUD 2,900 (5-year)' },
      { label: 'Duration', value: 'Up to 10 years total (consecutive grants, 90-day gap required between grants in some scenarios)' },
      { label: 'Work rights', value: 'None' },
      { label: 'PR pathway', value: 'No pathway to permanent through the 870 itself' },
    ],
    route: 'sponsored-parent-870',
  },
]

/* Comparison table rows */
const COMPARISON_ROWS = [
  { visa: '143 Contributory Parent', permanent: 'Yes', boft: 'Yes', location: 'Offshore', charges: '~$5,040 + ~$43,600/adult', queue: '12–15 years', work: 'Yes (on grant)', highlight: true },
  { visa: '173 Contributory Parent (Temp)', permanent: 'No (leads to 143)', boft: 'Yes', location: 'Offshore', charges: '~$3,400 first instalment', queue: 'Same queue as 143', work: 'Limited', highlight: false },
  { visa: '103 Parent', permanent: 'Yes', boft: 'Yes', location: 'Offshore', charges: '~$4,990', queue: 'Several decades', work: 'Yes (on grant)', highlight: false },
  { visa: '804 Aged Parent', permanent: 'Yes', boft: 'Yes', location: 'Onshore only', charges: '~$4,990', queue: 'Several decades', work: 'Yes (on grant)', highlight: false },
  { visa: '864 Contributory Aged Parent', permanent: 'Yes', boft: 'Yes', location: 'Onshore only', charges: '~$5,040 + ~$43,600/adult', queue: '10+ years', work: 'Yes (on grant)', highlight: false },
  { visa: '870 Sponsored Parent (Temp)', permanent: 'No', boft: 'No', location: 'Both', charges: '~$1,100 (3yr) / ~$2,900 (5yr)', queue: 'Relatively quick', work: 'None', highlight: true },
  { visa: '884 Contributory Aged Parent (Temp)', permanent: 'No (leads to 864)', boft: 'Yes', location: 'Onshore only', charges: '~$5,040 first + ~$43,600/adult at 864 stage', queue: 'Same as 864', work: 'Generally none', highlight: false },
]

export default function ParentVisasHubPage({ navigate }: { navigate: (page: string) => void }) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Parent Visas', url: 'https://www.nanakmigration.com.au/parent-visas' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Parent Visas Australia',
          description: PAGE_META['parent-visas'].metaDescription,
          url: 'https://www.nanakmigration.com.au/parent-visas',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Partner & Family', page: 'partner-family-visas' },
          { label: 'Parent Visas' },
        ]}
      />
      <PageHero
        variant="hub"
        eyebrow="Partner & Family Visas"
        eyebrowSub="Parent Migration"
        title={<>Parent Visas<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Hub</em></>}
        deck="Australia offers multiple pathways for parents to join their children — ranging from long-term temporary visits to permanent residence. The right pathway depends on whether you can pass the Balance of Family test, how much you can pay in government charges, and how long you are prepared to wait."
        shortAnswer={<>Australia has several parent visa pathways, but they vary significantly in cost, processing time, and permanence. The non-contributory <strong style={{ color: NAVY }}>Parent visa (subclass 103)</strong> and <strong style={{ color: NAVY }}>Aged Parent visa (subclass 804)</strong> have extremely long queues — new applications lodged today could wait several decades. The <strong style={{ color: NAVY }}>Contributory Parent (subclass 143)</strong> is faster but carries government charges of approximately <strong style={{ color: NAVY }}>AUD 95,000 for a couple</strong> and currently processes in 12–15 years for new applications. The <strong style={{ color: NAVY }}>Sponsored Parent (Temporary) visa (subclass 870)</strong> allows stays of up to 10 years (in 3-year or 5-year grants) with no Balance of Family test — making it the most accessible option for parents who want extended visits without entering the permanent queue. Nanak Migration Group (MARN 2619467) can assess your family's situation and recommend the most realistic pathway.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Contributory Parent (143) →', page: 'contributory-parent-143' }}
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
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Parent migration" title="Which visa is right for your family?" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, maxWidth: 760, marginBottom: 48 }}>
            Reuniting families is one of the most important — and most difficult — parts of the Australian migration program. Parent visas are in very high demand, processing queues are long, and government charges are substantial. Understanding the differences between the available pathways before applying is essential.
          </p>

          {/* 2-column info grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {/* Left column */}
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 24 }}>
              <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="check" size={20} color={ACCENT} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 8px', lineHeight: 1.3 }}>Balance of Family test applies to most permanent pathways</h3>
                  <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.7, margin: 0 }}>The Balance of Family test requires that at least half of a parent's children are settled in Australia (or more children are settled in Australia than in any other single country). Most permanent parent visa subclasses require it — only the subclass 870 is exempt.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="calendar" size={20} color={ACCENT} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 8px', lineHeight: 1.3 }}>Temporary visa as a pragmatic alternative</h3>
                  <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.7, margin: 0 }}>Many families use the subclass 870 Sponsored Parent (Temporary) visa as a practical solution while they wait in the permanent queue or assess whether permanent migration is achievable.</p>
                </div>
              </div>
            </div>
            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 24 }}>
              <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="dollar" size={20} color={ACCENT} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 8px', lineHeight: 1.3 }}>Contributory parent visas have high charges — but shorter queues</h3>
                  <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.7, margin: 0 }}>The contributory pathways (143, 173, 864) require substantially higher government charges than non-contributory pathways (103, 804), but their queues, while still long, are currently shorter. The trade-off is explicit: pay more, wait less.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="building" size={20} color={ACCENT} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 8px', lineHeight: 1.3 }}>Assurance of Support required for permanent visas</h3>
                  <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.7, margin: 0 }}>All permanent parent visas require the sponsor (the child in Australia) to lodge an Assurance of Support — a legally binding undertaking to support the parent financially if they claim certain government benefits. A bond is required.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISA TYPES ─────────────────────────────────────────── */}
      <section id="visa-types" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="The pathways" title="Parent visa types at a glance" accent={ACCENT} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 40 }}>
            {VISA_CARDS.map(card => {
              const isHovered = hoveredCard === card.code
              const clickable = !!card.route
              return (
                <div
                  key={card.code}
                  onMouseEnter={() => setHoveredCard(card.code)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => { if (clickable && card.route) navigate(card.route) }}
                  style={{
                    border: `1px solid ${isHovered && clickable ? ACCENT : '#e8edf6'}`,
                    borderRadius: 12,
                    padding: 24,
                    background: '#ffffff',
                    cursor: clickable ? 'pointer' : 'default',
                    boxShadow: isHovered && clickable ? '0 8px 32px rgba(27,43,94,0.10)' : '0 1px 4px rgba(27,43,94,0.04)',
                    transition: 'all 0.18s',
                    display: 'flex',
                    flexDirection: 'column' as const,
                    gap: 0,
                  }}
                >
                  {/* Top stripe with code */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, padding: '5px 14px', borderRadius: 100, background: NAVY, color: GOLD, letterSpacing: '0.04em' }}>
                      {card.code}
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 100, background: `${card.tagColor}14`, color: card.tagColor, border: `1px solid ${card.tagColor}28` }}>
                      {card.tag}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 14px', lineHeight: 1.25 }}>
                    {card.title}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 6, marginBottom: card.warning || card.note || card.route ? 16 : 0 }}>
                    {card.fields.map((field, fi) => (
                      <div key={fi} style={{ display: 'flex', gap: 8, fontSize: 13 }}>
                        <span style={{ fontWeight: 600, color: NAVY, flexShrink: 0, minWidth: 140 }}>{field.label}:</span>
                        <span style={{ color: '#4b5563', lineHeight: 1.5 }}>{field.value}</span>
                      </div>
                    ))}
                  </div>
                  {card.warning && (
                    <div style={{ marginTop: 4, marginBottom: card.route ? 12 : 0, padding: '10px 14px', background: '#fef2f2', borderLeft: '3px solid #dc2626', borderRadius: '0 6px 6px 0', fontSize: 13, fontWeight: 700, color: '#dc2626', lineHeight: 1.5 }}>
                      {card.warning}
                    </div>
                  )}
                  {card.note && (
                    <div style={{ marginTop: 4, marginBottom: card.route ? 12 : 0, fontSize: 12, color: '#6b7280', fontStyle: 'italic', lineHeight: 1.5 }}>
                      {card.note}
                    </div>
                  )}
                  {clickable && (
                    <div style={{ marginTop: 'auto', paddingTop: 4 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: ACCENT, textDecoration: 'none' }}>
                        View details →
                      </span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <Callout variant="warning" panel={true} title="Figures current at August 2026 — confirm on DoHA">
            All government charge amounts and processing time estimates on this page are current at August 2026 and may change without notice. Always confirm current amounts and processing times on the Department of Home Affairs website before lodging an application. Nanak Migration Group (MARN 2619467) verifies current figures before advising clients.
          </Callout>
        </div>
      </section>

      {/* ── QUEUE REALITY ──────────────────────────────────────── */}
      <section id="queue-reality" style={{ background: '#ffffff', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Honest assessment" title="The Queue Reality — What Families Need to Know" accent={ACCENT} />

          {/* Bold warning bar */}
          <div style={{ borderLeft: '4px solid #dc2626', background: '#fef2f2', padding: '16px 20px', borderRadius: '0 8px 8px 0', marginBottom: 32 }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: '#991b1b', lineHeight: 1.7, margin: 0 }}>
              Planning for parent migration requires an honest assessment of realistic timeframes. The Department of Home Affairs publishes indicative processing times, but these can understate real-world waits for new applications at the back of a long queue.
            </p>
          </div>

          {/* 3 stacked cards */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            <div style={{ background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 12px' }}>Non-contributory pathways (103, 804)</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                The subclass 103 (Parent) and subclass 804 (Aged Parent) are non-contributory pathways with much lower government charges (~AUD 4,990). The trade-off is a processing queue that is extraordinarily long. The Department has publicly stated that wait times for non-contributory parent applications currently extend to several decades. For a parent who is already in their 60s, a non-contributory permanent visa is not a realistic near-term option. Nanak Migration Group does not recommend lodging a non-contributory parent application if the family expects a decision within 10–15 years.
              </p>
            </div>
            <div style={{ background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 12px' }}>Contributory pathways (143, 173, 864)</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                The subclass 143 (Contributory Parent) is the most common permanent parent pathway. The higher charges fund the contributory queue, which is shorter — but still currently estimated at 12–15 years for new applications at the back of the queue. A child who sponsors a parent today should plan for the parent to spend those 12–15 years visiting on visitor visas or living in Australia on the subclass 870 while the permanent application is processed. The 173 Contributory Parent Temporary visa allows the parent to live in Australia on a temporary basis while the permanent 143 application processes.
              </p>
            </div>
            <div style={{ background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 12px' }}>The 870 as a bridge strategy</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                For many families, the most practical near-term solution is the subclass 870 Sponsored Parent (Temporary) visa. This allows the parent to live in Australia for up to 10 years in total (via 3-year or 5-year grants) while waiting in the permanent queue. The 870 has no Balance of Family test, is significantly cheaper than any permanent option, and can be applied for relatively quickly once the sponsor is approved. However, it provides no work rights, no Medicare access (private health insurance required for the full stay), and no direct pathway to permanent residence — the parent must still qualify for and be processed in a permanent parent visa queue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ───────────────────────────────────── */}
      <section id="comparison" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Side by side" title="Visa Comparison Table" accent={ACCENT} />

          <div style={{ borderRadius: 14, overflow: 'hidden', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 24px rgba(27,43,94,0.07)', marginBottom: 16 }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 0.8fr 0.8fr 1fr 1.4fr 1fr 0.9fr', background: NAVY, padding: '14px 20px', gap: 8 }}>
              {['Visa', 'Permanent?', 'BoFT?', 'Onshore / Offshore', 'Approx govt charges', 'Approx queue (new)', 'Work rights'].map((h, i) => (
                <div key={h} style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' as const, letterSpacing: '0.08em', lineHeight: 1.3, textAlign: i === 0 ? 'left' : 'center' as const }}>
                  {h}
                </div>
              ))}
            </div>
            {/* Rows */}
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.6fr 0.8fr 0.8fr 1fr 1.4fr 1fr 0.9fr',
                  padding: '13px 20px',
                  gap: 8,
                  alignItems: 'center',
                  background: row.highlight ? `${ACCENT}08` : (i % 2 === 0 ? '#ffffff' : '#fafbfe'),
                  borderTop: '1px solid #f0f2f7',
                  borderLeft: row.highlight ? `3px solid ${ACCENT}` : '3px solid transparent',
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>{row.visa}</div>
                <div style={{ fontSize: 12.5, color: row.permanent === 'Yes' ? '#16a34a' : '#374151', fontWeight: 600, textAlign: 'center' as const }}>{row.permanent}</div>
                <div style={{ fontSize: 12.5, color: row.boft === 'No' ? '#16a34a' : '#374151', fontWeight: row.boft === 'No' ? 700 : 400, textAlign: 'center' as const }}>{row.boft}</div>
                <div style={{ fontSize: 12, color: '#4b5563', textAlign: 'center' as const }}>{row.location}</div>
                <div style={{ fontSize: 12, color: '#4b5563', textAlign: 'center' as const }}>{row.charges}</div>
                <div style={{ fontSize: 12, color: '#4b5563', textAlign: 'center' as const }}>{row.queue}</div>
                <div style={{ fontSize: 12, color: '#4b5563', textAlign: 'center' as const }}>{row.work}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: '#9ca3af', fontStyle: 'italic', margin: 0 }}>
            Figures current at August 2026 — confirm on the Department of Home Affairs website before relying on these amounts.
          </p>
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
        title="Assess your parent visa options"
        body="Every family's situation is different. Nanak Migration Group (MARN 2619467) can assess whether the Balance of Family test applies to your family, whether the 143 or 870 pathway is more realistic, and whether an Assurance of Support is achievable."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
