import React from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_VISITOR } from '@/theme'
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

const CAT_VISITOR_LOCAL = CAT_VISITOR
const ACCENT = CAT_VISITOR_LOCAL

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'visa-types', label: 'Visa types' },
  { id: 'which-one', label: 'Which one fits you' },
  { id: 'longer-stays', label: 'Longer stays' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'plane',
    value: 'Free',
    label: 'eVisitor (651) — free for eligible European passports',
    note: 'No visa application charge. Available to citizens of eligible European countries. Allows stays of up to 3 months per visit within a 12-month period.',
  },
  {
    icon: 'plane',
    value: 'Small charge',
    label: 'ETA (601) — for eligible passport holders via app',
    note: 'A small service charge applies (currently around AUD 20 via the Australian ETA app — confirm on DoHA). For eligible passport holders — UK, USA, Canada, Japan, Singapore and others.',
  },
  {
    icon: 'dollar',
    value: '~AUD 200',
    label: 'Visitor visa (600) tourist stream — offshore',
    note: 'Base government charge for the tourist stream from outside Australia. Charges differ for onshore applications and sponsored streams. Figures current at August 2026 — confirm on DoHA.',
  },
  {
    icon: 'calendar',
    value: 'Up to 12 months',
    label: 'Maximum stay on a single-entry 600 tourist visa',
    note: 'Most tourist stream 600 visas are granted for 3 or 6 months. A 12-month stay period is possible in some circumstances — but it is not guaranteed and depends on individual assessment.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'Do I need a visa to visit Australia if I have a UK or US passport?',
    answer: 'Most UK and US passport holders are eligible for the Electronic Travel Authority (subclass 601), which is applied for via the Australian ETA app with a small service charge. The ETA is not technically a visa — it is an electronic travel authority linked to your passport. It allows up to 3 months per visit, multiple entries, within a 12-month period. Nationals of some countries are instead eligible for the eVisitor (651), which is free. If you are not eligible for either, you need to apply for the Visitor visa (subclass 600). Confirm current eligibility on the Department of Home Affairs website.',
  },
  {
    question: 'Can I extend my tourist visa while I am in Australia?',
    answer: 'It is possible to apply for a new visitor visa (subclass 600) from inside Australia — this is called an onshore application. However, if your current visa has a "No Further Stay" condition (Condition 8503), you cannot be granted another visitor visa from inside Australia without first obtaining a waiver of that condition (which is only granted in compelling and compassionate circumstances). The onshore 600 tourist stream generally has higher charges than the offshore application. Approval is not guaranteed. Visitors who want to extend their stay should seek migration advice before their current visa expires.',
  },
  {
    question: 'Is the eVisitor or ETA the same as a visa?',
    answer: 'No. The eVisitor (651) and the Electronic Travel Authority (601) are electronic travel authorisations, not traditional visas. They are electronically linked to your passport — there is no stamp or label in the passport. For immigration purposes, they function like visas — they allow entry and stay in Australia for up to 3 months per visit. They are different from the Visitor visa (subclass 600), which is a formal visa application with a government charge and a broader range of streams and stay periods.',
  },
  {
    question: 'My parent wants to live with me in Australia for a year — what is the best option?',
    answer: 'For a one-year stay, the Visitor visa (subclass 600) can be requested with a 12-month stay period — but this is assessed individually and not guaranteed. For stays beyond 12 months, or for parents who want a more reliable pathway to extended stays, the Sponsored Parent (Temporary) visa (subclass 870) allows up to 5 years per grant (renewable to 10 years total). The 870 requires the child in Australia to be an approved parent sponsor and meet a household income threshold. It grants no work rights and requires private health insurance.',
  },
  {
    question: 'I was refused a visitor visa previously — can I apply again?',
    answer: 'Yes — a previous refusal does not permanently bar you from applying again. However, the Department may consider previous refusals when assessing a new application, and the same underlying issues that led to the first refusal (e.g. insufficient ties to home country, inadequate funds, suspected immigration intent) may affect the new application unless they are addressed. A registered migration agent can review the reasons for the previous refusal and advise on whether and how to strengthen a new application. Nanak Migration Group (MARN 2619467) assists with applications that have a complex history.',
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Visitor Visa (Subclass 600)',
    desc: 'The universal visitor visa — tourist, business, sponsored family and frequent traveller streams.',
    icon: 'plane',
    page: 'visitor-visa-600',
    color: ACCENT,
  },
  {
    title: 'Sponsored Parent (Temporary) 870',
    desc: 'For parents who want extended stays — up to 10 years without the Balance of Family test.',
    icon: 'user',
    page: 'sponsored-parent-870',
    color: ACCENT,
  },
  {
    title: 'Bridging Visas',
    desc: 'Stay lawfully in Australia while another application is being processed.',
    icon: 'link',
    page: 'bridging-visas',
    color: ACCENT,
  },
]

export default function VisitorVisasHubPage({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://nanakmigration.com.au/' },
          { name: 'Visitor & Other', url: 'https://nanakmigration.com.au/visitor-hub' },
          { name: 'Visitor Visas Hub', url: 'https://nanakmigration.com.au/visitor-visas' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Visitor Visas Hub — eVisitor, ETA and Subclass 600',
          description: PAGE_META['visitor-visas'].metaDescription,
          url: 'https://nanakmigration.com.au/visitor-visas',
        }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Visitor & Other', page: 'visitor-visas' },
          { label: 'Visitor Visas Hub' },
        ]}
      />

      <PageHero
        variant="hub"
        eyebrow="Visitor & Other Visas"
        eyebrowSub="Tourism · Business · Family Visits"
        title={<>Visitor Visas<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Hub</em></>}
        deck="Australia offers several ways to visit — from free electronic authorisations for eligible passport holders to a paid Visitor visa (subclass 600) that covers tourists, business visitors, and family visits from any country. Choosing the right option depends on your passport, how long you want to stay, and whether you have family in Australia."
        shortAnswer={<>Most visitors to Australia use one of three options: the <strong style={{ color: NAVY }}>eVisitor (subclass 651)</strong> — free, for eligible European passport holders, up to 3 months per visit; the <strong style={{ color: NAVY }}>Electronic Travel Authority (subclass 601)</strong> — a small service charge applies, for eligible passport holders, up to 3 months per visit; or the <strong style={{ color: NAVY }}>Visitor visa (subclass 600)</strong> — available to all passport holders, covering tourist, business visitor, sponsored family, and frequent traveller streams, with stays of 3, 6 or 12 months and multi-year multiple entry in some cases. Transit visas are also available for short airport transits. Nanak Migration Group (MARN 2619467) assists primarily with the subclass 600 — particularly for sponsored family visitors, longer-stay applications, and applicants with previous refusals.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Visitor Visa 600 →', page: 'visitor-visa-600' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <KeyFactsStrip facts={FACTS} accent={ACCENT} />

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

      {/* ── SECTION: Overview ───────────────────────────────────── */}
      <section id="overview" style={{ background: '#f8fafd', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Entry options" title="How to Visit Australia — Three Main Routes" accent={ACCENT} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 32 }}>
            {/* Card 1 — eVisitor */}
            <div style={{ border: '1px solid #e8edf6', padding: 24, borderRadius: 12, background: '#fafbfe' }}>
              <div style={{ width: 44, height: 44, borderRadius: 11, background: `${ACCENT}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon name="plane" size={20} color={ACCENT} />
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ACCENT, marginBottom: 6 }}>Subclass 651</div>
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 16px', lineHeight: 1.25 }}>eVisitor</h3>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  { label: 'Cost', value: 'Free' },
                  { label: 'Passport eligibility', value: 'Citizens of eligible European countries (EU member states and others — check DoHA)' },
                  { label: 'Stay', value: 'Up to 3 months per visit; valid 12 months from grant; multiple entries' },
                  { label: 'Application', value: 'Online, no fee' },
                  { label: 'Not available for', value: 'Nationals of countries not on the eligibility list' },
                ].map(item => (
                  <div key={item.label}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: NAVY, lineHeight: 1.5 }}>{item.value}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 14, padding: '10px 14px', background: 'rgba(3,105,161,0.05)', borderRadius: 8, fontSize: 12, color: '#4b5563', lineHeight: 1.55 }}>
                No paper visa label — electronically linked to passport.
              </div>
              <button onClick={() => navigate('evisitor-651')} style={{ marginTop: 14, width: '100%', padding: '10px 0', background: ACCENT, color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Full eVisitor guide</button>
            </div>

            {/* Card 2 — ETA */}
            <div style={{ border: '1px solid #e8edf6', padding: 24, borderRadius: 12, background: '#fafbfe' }}>
              <div style={{ width: 44, height: 44, borderRadius: 11, background: `${ACCENT}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon name="plane" size={20} color={ACCENT} />
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ACCENT, marginBottom: 6 }}>Subclass 601</div>
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 16px', lineHeight: 1.25 }}>Electronic Travel Authority (ETA)</h3>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  { label: 'Cost', value: 'Small service charge (~AUD 20 via app — confirm on DoHA)' },
                  { label: 'Passport eligibility', value: 'Citizens of eligible countries including UK, USA, Canada, Japan, South Korea, Singapore, Hong Kong, Brunei, Malaysia — check DoHA' },
                  { label: 'Stay', value: 'Up to 3 months per visit; multiple entries; generally valid 12 months from grant' },
                  { label: 'Application', value: 'Via the Australian ETA app (or travel agents/airlines)' },
                ].map(item => (
                  <div key={item.label}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: NAVY, lineHeight: 1.5 }}>{item.value}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 14, padding: '10px 14px', background: 'rgba(3,105,161,0.05)', borderRadius: 8, fontSize: 12, color: '#4b5563', lineHeight: 1.55 }}>
                Fastest way to get entry authority — typically processed within minutes.
              </div>
              <button onClick={() => navigate('eta-601')} style={{ marginTop: 14, width: '100%', padding: '10px 0', background: ACCENT, color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Full ETA guide</button>
            </div>

            {/* Card 3 — Subclass 600 */}
            <div style={{ border: '1px solid #e8edf6', padding: 24, borderRadius: 12, background: '#fafbfe' }}>
              <div style={{ width: 44, height: 44, borderRadius: 11, background: `${ACCENT}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon name="dollar" size={20} color={ACCENT} />
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ACCENT, marginBottom: 6 }}>Subclass 600</div>
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 16px', lineHeight: 1.25 }}>Visitor Visa</h3>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  { label: 'Cost', value: 'From ~AUD 200 (tourist stream offshore); varies by stream and location — confirm on DoHA' },
                  { label: 'Passport eligibility', value: 'All passport holders' },
                  { label: 'Stay', value: '3, 6 or 12 months depending on stream and assessment' },
                  { label: 'Application', value: 'Online via ImmiAccount' },
                  { label: 'Streams', value: 'Tourist (onshore/offshore), Sponsored Family, Business Visitor, Frequent Traveller' },
                ].map(item => (
                  <div key={item.label}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: NAVY, lineHeight: 1.5 }}>{item.value}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 14, padding: '10px 14px', background: 'rgba(3,105,161,0.05)', borderRadius: 8, fontSize: 12, color: '#4b5563', lineHeight: 1.55 }}>
                The universal option — required if you are not eligible for the ETA or eVisitor.
              </div>
            </div>
          </div>

          {/* Transit visa note */}
          <div style={{ borderLeft: `4px solid ${ACCENT}`, background: '#f0f9ff', padding: '16px 20px', borderRadius: '0 8px 8px 0' }}>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>
              <strong>Transit visas</strong> are available for passengers transiting through Australia to a third country. Most transit passengers with eligible passports do not need a visa — but nationals of some countries require a Subclass 771 (Transit visa) or must hold a valid Australian visa. If you are transiting and unsure, confirm on the DoHA website or seek advice.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION: Visa types ─────────────────────────────────── */}
      <section id="visa-types" style={{ background: '#ffffff', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Detail" title="Visitor Visa Types Compared" accent={ACCENT} />

          <div style={{ overflowX: 'auto' as const }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13, minWidth: 720 }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  {['Visa', 'Who can use it', 'Cost', 'Max stay', 'Multiple entry', 'Notes'].map(h => (
                    <th key={h} style={{ padding: '12px 14px', color: '#fff', fontWeight: 700, fontSize: 12, textAlign: 'left' as const, letterSpacing: '0.04em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    visa: 'eVisitor 651',
                    who: 'Eligible European passport holders',
                    cost: 'Free',
                    stay: '3 months per visit',
                    multi: 'Yes (within 12 months)',
                    notes: 'Electronically linked; cannot extend onshore',
                  },
                  {
                    visa: 'ETA 601',
                    who: 'Eligible passport holders (UK, USA, Japan, etc.)',
                    cost: '~AUD 20 service charge',
                    stay: '3 months per visit',
                    multi: 'Yes (within 12 months)',
                    notes: 'Via AUS ETA app; fastest option',
                  },
                  {
                    visa: 'Visitor 600 — Tourist (offshore)',
                    who: 'All nationalities',
                    cost: '~AUD 200',
                    stay: '3–12 months',
                    multi: 'Possible',
                    notes: 'Most common path for ineligible passport holders',
                  },
                  {
                    visa: 'Visitor 600 — Tourist (onshore)',
                    who: 'All nationalities (already in Australia)',
                    cost: 'Higher charge',
                    stay: 'Extension to current stay',
                    multi: 'No (usually)',
                    notes: 'Condition 8503 may prevent further stay',
                  },
                  {
                    visa: 'Visitor 600 — Sponsored Family',
                    who: 'Any nationality; family in Australia sponsors',
                    cost: '~AUD 200+ (bond may apply)',
                    stay: '3–12 months',
                    multi: 'Yes',
                    notes: 'Sponsor in Australia; bond possible for higher-risk applicants',
                  },
                  {
                    visa: 'Visitor 600 — Business',
                    who: 'Business-related travel (not employed in Australia)',
                    cost: '~AUD 200',
                    stay: '3 months typical',
                    multi: 'Yes',
                    notes: 'Must not work in Australia',
                  },
                  {
                    visa: 'Transit 771',
                    who: 'Nationals of specified countries transiting',
                    cost: 'Free',
                    stay: 'Up to 72 hours',
                    multi: 'No',
                    notes: 'Most passengers with ETAs/eVisitor do not need this',
                  },
                ].map((row, i) => (
                  <tr key={row.visa} style={{ background: i % 2 === 0 ? '#f8fafd' : '#fff', borderBottom: '1px solid #e8edf6' }}>
                    <td style={{ padding: '12px 14px', fontWeight: 600, color: NAVY }}>{row.visa}</td>
                    <td style={{ padding: '12px 14px', color: '#374151' }}>{row.who}</td>
                    <td style={{ padding: '12px 14px', color: '#374151' }}>{row.cost}</td>
                    <td style={{ padding: '12px 14px', color: '#374151' }}>{row.stay}</td>
                    <td style={{ padding: '12px 14px', color: '#374151' }}>{row.multi}</td>
                    <td style={{ padding: '12px 14px', color: '#6b7280', fontSize: 12 }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 14, lineHeight: 1.6 }}>
            All charges and eligibility rules are subject to change. Confirm on the Department of Home Affairs website before applying.
          </p>
        </div>
      </section>

      {/* ── SECTION: Which one fits you ─────────────────────────── */}
      <section id="which-one" style={{ background: '#f8fafd', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Decision guide" title="Which Visitor Visa Fits Your Situation?" accent={ACCENT} />

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>
            {/* Scenario 1 */}
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 10 }}>My passport is from a European country (EU or eligible country)</div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: '0 0 10px' }}>
                You are likely eligible for the <strong>eVisitor (651)</strong> — free, applied online. Check the DoHA eligibility list. If eligible, the eVisitor is the simplest option.
              </p>
              <div style={{ fontSize: 13, color: ACCENT, fontWeight: 500 }}>
                Check the current eligibility list on the Department of Home Affairs website before applying.
              </div>
            </div>

            {/* Scenario 2 */}
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 10 }}>My passport is from the UK, USA, Canada, Japan, South Korea, Singapore or similar</div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                You are likely eligible for the <strong>ETA (601)</strong> — small charge, applied via the AUS ETA app, typically processed in minutes. Check the DoHA eligibility list for your specific passport.
              </p>
            </div>

            {/* Scenario 3 */}
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 10 }}>My passport is from India, China, Philippines, Pakistan, Nepal, or another country not on the ETA/eVisitor list</div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: '0 0 14px' }}>
                You need the <strong>Visitor visa (600)</strong> — tourist stream, offshore application. Charges from ~AUD 200. Apply online via ImmiAccount. Ensure you have evidence of ties to home country, financial capacity, and purpose of visit.
              </p>
              <button
                onClick={() => navigate('visitor-visa-600')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 8, border: `1.5px solid ${ACCENT}`, background: 'transparent', color: ACCENT, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Learn about the 600 visa →
              </button>
            </div>

            {/* Scenario 4 */}
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 10 }}>I want to visit my son/daughter/family who lives in Australia</div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: '0 0 14px' }}>
                The <strong>Visitor visa (600) — Sponsored Family stream</strong> may be available. Your family member in Australia can act as sponsor. In some cases, a security bond may be required. Alternatively, a standard tourist stream application can also cover family visits.
              </p>
              <button
                onClick={() => navigate('visitor-visa-600')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 8, border: `1.5px solid ${ACCENT}`, background: 'transparent', color: ACCENT, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Subclass 600 Sponsored Family stream →
              </button>
            </div>

            {/* Scenario 5 */}
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 10 }}>My parent wants to stay longer than 3 months — maybe up to a year or more</div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: '0 0 14px' }}>
                For stays of up to 12 months, the <strong>Visitor visa 600</strong> with a longer stay period can be requested — though not guaranteed. For parents wanting to live in Australia for extended periods, the <strong>Subclass 870 Sponsored Parent (Temporary) visa</strong> allows up to 10 years (in 3- or 5-year grants) without the Balance of Family test. See also the Parent Visas hub.
              </p>
              <button
                onClick={() => navigate('sponsored-parent-870')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 8, border: `1.5px solid ${ACCENT}`, background: 'transparent', color: ACCENT, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Subclass 870 for parents →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: Longer stays ───────────────────────────────── */}
      <section id="longer-stays" style={{ background: '#ffffff', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Extended visits" title="Options for Longer Stays in Australia" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32, textAlign: 'center' as const }}>
            Standard visitor visas are generally granted for 3 or 6 months. Visitors who want to stay longer have limited options — but some pathways exist.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {/* Card 1 */}
            <div style={{ border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: `${ACCENT}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Icon name="calendar" size={20} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 8 }}>Visitor visa (600) — 12-month stay</div>
                  <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                    The subclass 600 tourist stream can, in some cases, be granted with a 12-month maximum stay period rather than the standard 3 or 6 months. This is not automatic — the Department assesses whether a longer stay period is appropriate based on your individual circumstances, ties to home country, and purpose of visit. A 12-month stay period on a single 600 entry is not guaranteed. Applying for a 12-month period and receiving only 3 months is common.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: `${ACCENT}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Icon name="user" size={20} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 8 }}>Sponsored Parent (Temporary) visa (870)</div>
                  <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: '0 0 14px' }}>
                    For parents of Australian citizens or permanent residents, the subclass 870 allows stays of up to 3 years or 5 years per grant, renewable to a maximum of 10 years total stay in Australia. This is specifically for parents — not for siblings, friends, or other visitors. The 870 requires an approved parent sponsor, has no Balance of Family test requirement, and grants no work rights. Private health insurance is mandatory.
                  </p>
                  <button
                    onClick={() => navigate('sponsored-parent-870')}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 16px', borderRadius: 8, border: `1.5px solid ${ACCENT}`, background: 'transparent', color: ACCENT, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    Learn about the subclass 870 →
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: `${ACCENT}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Icon name="link" size={20} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 8 }}>Bridging visa while another application is pending</div>
                  <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: '0 0 14px' }}>
                    If a visitor lodges another visa application while in Australia (e.g. a partner visa, student visa, or another visitor visa), they may be granted a Bridging Visa A (BVA) while that application is processed. The BVA allows lawful stay in Australia during processing — but it does not allow travel out of Australia (a Bridging Visa B is needed for that). Visitor visa holders who apply for an extension onshore should be aware of the limitations of the onshore extension pathway.
                  </p>
                  <button
                    onClick={() => navigate('bridging-visas')}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 16px', borderRadius: 8, border: `1.5px solid ${ACCENT}`, background: 'transparent', color: ACCENT, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    About bridging visas →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: FAQ ────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#f8fafd', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Visitor Visa Questions Answered" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── More pages in this section ── */}
      <section style={{ background: '#f4f6fb', padding: '48px 32px 40px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, marginBottom: 14 }}>More visitor and other visa pages</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10 }}>
            {([
              { label: 'Work and Holiday (462)', desc: 'Work and holiday visa for USA, China, India, Vietnam and other bilateral arrangement countries.', page: 'work-and-holiday-462' },
              { label: 'Resident Return Visa (155 & 157)', desc: 'Re-enter Australia as a PR after your travel facility expires — subclasses 155 and 157.', page: 'resident-return-visa' },
            ] as { label: string; desc: string; page: string }[]).map(p => (
              <button key={p.page} onClick={() => navigate(p.page)}
                style={{ textAlign: 'left', background: '#ffffff', border: '1px solid #dde3f0', borderRadius: 10, padding: '12px 14px', cursor: 'pointer', transition: 'border-color 0.15s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = ACCENT }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#dde3f0' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#1E1E2A', fontFamily: 'Inter, system-ui, sans-serif', marginBottom: 3 }}>{p.label}</div>
                <div style={{ fontSize: 11.5, color: '#9890b0', fontFamily: 'Inter, system-ui, sans-serif', lineHeight: 1.4 }}>{p.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: Related pages ──────────────────────────────── */}
      <section id="related" style={{ background: '#ffffff', padding: '64px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Explore further" title="Related Visa Pages" accent={ACCENT} marginBottom={36} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={3} />
        </div>
      </section>

      <CtaBand
        title="Help with your visitor visa application"
        body="Nanak Migration Group (MARN 2619467) assists with subclass 600 applications — particularly for sponsored family visitors, longer-stay requests, and applicants with a previous refusal."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
