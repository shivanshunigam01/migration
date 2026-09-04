import React from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_EMPLOYER } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs, PageHero, KeyFactsStrip, SectionHeading, StepTimeline,
  FaqAccordion, RelatedPages, CtaBand, ComplianceDisclaimer, Callout, EvidenceChecklist,
} from '@/components/page'
import type { KeyFact, TimelineStep, FaqItem, RelatedPage, ChecklistGroup } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'
import Icon from '@/components/ui/Icon'

const CURRENT_AS_AT = 'August 2026'
const ACCENT = CAT_EMPLOYER
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'occupations', label: 'Eligible occupations' },
  { id: 'process', label: 'Application process' },
  { id: 'fees', label: 'Fees' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const KEY_FACTS: KeyFact[] = [
  {
    icon: 'dollar',
    value: '$146,717 p.a.',
    label: 'Specialist Skills Income Threshold (SSIT)',
    note: 'Minimum annual earnings from 1 July 2026. Figures current at August 2026 — confirm on the Department of Home Affairs website.',
  },
  {
    icon: 'star',
    value: 'No LMT required',
    label: 'Labour Market Testing exempt',
    note: 'The Specialist Skills stream is exempt from Labour Market Testing. No advertising is required before nominating.',
  },
  {
    icon: 'calendar',
    value: 'Up to 4 years',
    label: 'Maximum visa period',
    note: 'Specialist Skills stream visas are granted for up to four years. Secondary applicants receive the same period.',
  },
  {
    icon: 'shield',
    value: 'Priority processing',
    label: 'Faster assessment',
    note: 'Specialist Skills stream nominations and visa applications generally receive priority processing by the Department.',
  },
]

const STEPS: TimelineStep[] = [
  {
    code: '01',
    title: 'Confirm salary meets SSIT',
    desc: 'Before engaging a migration agent, confirm that the total guaranteed annual remuneration for the role will be at least $146,717 (SSIT from 1 July 2026). Discretionary bonuses generally do not count toward the threshold.',
  },
  {
    code: '02',
    title: 'Employer confirms or obtains SBS',
    desc: 'The employer must hold Standard Business Sponsorship. No Labour Market Testing is required for the Specialist Skills stream — the employer can proceed directly to nomination.',
  },
  {
    code: '03',
    title: 'Employer lodges nomination',
    desc: 'The nomination is lodged through ImmiAccount. The SAF Levy is payable by the employer at this stage. Priority processing generally applies to Specialist Skills stream nominations.',
  },
  {
    code: '04',
    title: 'Nominee lodges visa application',
    desc: 'The nominee lodges the subclass 482 visa application, providing health, character, English, and skills/experience evidence. The application may be lodged concurrently with the nomination.',
  },
  {
    code: '05',
    title: 'Visa grant',
    desc: 'On grant, the nominee (and any secondary applicants) may enter Australia and commence work. The employer must ensure the nominee is employed in the nominated occupation and paid at least the nominated salary.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'What counts towards the SSIT salary threshold?',
    answer: "The SSIT is based on guaranteed annual earnings — typically base salary plus guaranteed loadings. Discretionary bonuses, non-cash benefits, and employer superannuation contributions generally do not count toward the threshold. The nominated salary on the nomination application must meet the SSIT; the employer is bound to pay at least that amount.",
  },
  {
    question: 'Is Labour Market Testing ever required for the Specialist Skills stream?',
    answer: 'No. The Specialist Skills stream is explicitly exempt from Labour Market Testing. Employers do not need to advertise the role before lodging a nomination. This is one of the key advantages of the Specialist Skills stream over the Core Skills stream.',
  },
  {
    question: 'Do I need a skills assessment for the Specialist Skills stream?',
    answer: "No mandatory skills assessment is prescribed for the Specialist Skills stream. However, the Department will assess whether the nominee has qualifications and experience relevant to the nominated occupation. Employers should ensure the nominee's resume and qualifications clearly demonstrate relevant skills before lodging.",
  },
  {
    question: 'Can a trade occupation be nominated in the Specialist Skills stream?',
    answer: 'No. Occupations in ANZSCO major group 3 (Technicians and Trades Workers) — which includes electricians, plumbers, carpenters and similar trades — are excluded from the Specialist Skills stream regardless of salary. These occupations may be eligible for the Core Skills stream if they appear on the CSOL.',
  },
  {
    question: 'What is the PR pathway from the Specialist Skills stream?',
    answer: 'After holding a Specialist Skills stream 482 visa for at least two years, working for the same employer in the same occupation, you and your employer may apply for the subclass 186 Employer Nomination Scheme (ENS) via the Temporary Residence Transition (TRT) stream. Meeting the two-year threshold is not a guarantee of a 186 ENS grant — each application is assessed on its merits.',
  },
]

const RELATED: RelatedPage[] = [
  {
    title: '482 Core Skills Stream',
    desc: 'The most widely used 482 stream — for CSOL occupations meeting the CSIT salary threshold.',
    icon: 'briefcase',
    page: '482-core-skills-stream',
    color: CAT_EMPLOYER,
  },
  {
    title: 'Skills in Demand Visa (482)',
    desc: 'Full overview of all three 482 streams — Core Skills, Specialist Skills and Foundation.',
    icon: 'star',
    page: 'skills-in-demand-visa',
    color: CAT_EMPLOYER,
  },
  {
    title: 'Employer Nomination Scheme (186)',
    desc: 'Permanent residence via employer nomination — available after 2 years in the Specialist Skills stream.',
    icon: 'award',
    page: 'employer-nomination-scheme',
    color: CAT_EMPLOYER,
  },
  {
    title: 'Standard Business Sponsorship',
    desc: 'Your employer must hold SBS before lodging a Specialist Skills nomination.',
    icon: 'building',
    page: 'standard-business-sponsorship',
    color: CAT_EMPLOYER,
  },
]

const ELIGIBILITY_CARDS = [
  {
    icon: 'briefcase',
    title: 'Approved sponsor',
    desc: 'The sponsoring employer must hold Standard Business Sponsorship (SBS). There is no LMT obligation, but the employer must still be an approved sponsor before lodging a nomination.',
  },
  {
    icon: 'dollar',
    title: 'Specialist Skills Income Threshold (SSIT)',
    desc: "The nominee's annual earnings must meet or exceed the SSIT — $146,717 per annum from 1 July 2026. Annual earnings include base salary and guaranteed loadings, but generally exclude discretionary bonuses. Figures current at August 2026 — confirm on the Department of Home Affairs website.",
  },
  {
    icon: 'layers',
    title: 'ANZSCO major group restriction',
    desc: 'The nominated occupation may be in any ANZSCO skill level, but occupations in ANZSCO major groups 3 (Technicians and Trades Workers), 7 (Machinery Operators and Drivers), or 8 (Labourers) are excluded from the Specialist Skills stream.',
  },
  {
    icon: 'user',
    title: 'Skills and qualifications',
    desc: 'No mandatory skills assessment is prescribed for the Specialist Skills stream, but the nominee must have qualifications and experience relevant to the nominated occupation. The Department assesses whether the role is genuine and the nominee is appropriately qualified.',
  },
  {
    icon: 'globe',
    title: 'English language',
    desc: 'Competent English is generally required (IELTS 6 or equivalent). High-income earners may qualify for an English exemption in some circumstances — confirm current rules with a migration agent.',
  },
]

export default function SpecialistSkillsStreamPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['482-specialist-skills-stream'].title }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: '482 Specialist Skills Stream', url: 'https://www.nanakmigration.com.au/482-specialist-skills-stream' },
        ]}
        faqs={FAQ}
        service={{
          name: '482 Specialist Skills Stream — Skills in Demand Visa',
          description: PAGE_META['482-specialist-skills-stream'].metaDescription,
          url: 'https://www.nanakmigration.com.au/482-specialist-skills-stream',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Employer Sponsored Visas', page: 'employer-sponsored-visas' },
        { label: '482 Specialist Skills Stream' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Subclass 482 — Skills in Demand"
        eyebrowSub="Specialist Skills Stream · No Labour Market Testing"
        title={<>482 Specialist Skills Stream<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Skills in Demand Visa</em></>}
        deck="The Specialist Skills stream of the subclass 482 Skills in Demand visa is designed for high-income earners in skilled roles across most ANZSCO occupations. It requires no Labour Market Testing and offers priority processing."
        shortAnswer={<>The Specialist Skills stream requires that the nominee's annual earnings will meet or exceed the Specialist Skills Income Threshold (SSIT) of <strong style={{ color: NAVY }}>$146,717 per annum from 1 July 2026</strong>. The position may be in any ANZSCO occupation <strong style={{ color: NAVY }}>except</strong> those in ANZSCO major groups 3 (Technicians and Trades Workers), 7 (Machinery Operators and Drivers), or 8 (Labourers). Labour Market Testing is not required. Priority processing applies. The visa is granted for up to four years, and holders are eligible for permanent residence via the subclass 186 ENS. Nanak Migration Group, a registered migration agent (MARN 2619467), can assess whether your role and remuneration qualify for the Specialist Skills stream before lodgement.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Skills in Demand (482) overview →', page: 'skills-in-demand-visa' }}
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
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>

      {/* Overview / Key Facts */}
      <div id="overview">
        <KeyFactsStrip facts={KEY_FACTS} accent={ACCENT} />
      </div>

      {/* Eligibility */}
      <section id="eligibility" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Requirements" title="Specialist Skills Stream Eligibility Criteria" accent={ACCENT} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {ELIGIBILITY_CARDS.map((card, i) => (
              <div
                key={i}
                style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20, display: 'flex', gap: 16, alignItems: 'flex-start' }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={card.icon} size={18} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{card.title}</div>
                  <div style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65 }}>{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligible occupations */}
      <section id="occupations" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Occupation eligibility" title="Which Occupations are Eligible?" accent={ACCENT} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 28 }}>
            {/* Eligible groups card */}
            <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 14, padding: '24px 28px' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#166534', marginBottom: 12, textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>
                Eligible ANZSCO groups
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                {[
                  'Managers (Group 1)',
                  'Professionals (Group 2)',
                  'Community & personal service workers (Group 4)',
                  'Clerical & administrative (Group 5)',
                  'Sales workers (Group 6)',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#16a34a20', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name="check" size={10} color="#16a34a" />
                    </div>
                    <span style={{ fontSize: 14, color: '#14532d', fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Excluded groups card */}
            <div style={{ background: '#fff1f2', border: '1px solid #fca5a5', borderRadius: 14, padding: '24px 28px' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#991b1b', marginBottom: 12, textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>
                Excluded ANZSCO groups
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                {[
                  'Group 3 — Technicians and Trades Workers',
                  'Group 7 — Machinery Operators and Drivers',
                  'Group 8 — Labourers',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#dc262620', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name="x" size={10} color="#dc2626" />
                    </div>
                    <span style={{ fontSize: 14, color: '#7f1d1d', fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Callout variant="note" title="No CSOL required for Specialist Skills">
            Unlike the Core Skills stream, the Specialist Skills stream does not require the occupation to appear on the CSOL. Any ANZSCO occupation in the eligible major groups can be nominated, provided the salary threshold is met. However, the genuine position test still applies — the role must be a genuine business need.
          </Callout>
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="How to apply" title="Application Process — Specialist Skills Stream" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="cards" accent={ACCENT} />
        </div>
      </section>

      {/* Fees */}
      <section id="fees" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Costs" title="Specialist Skills Stream Fees" accent={ACCENT} />
          <div style={{ background: GREY_BG, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: 'hidden' }}>
            {[
              { label: 'Nomination application charge', value: '$330 per nominee' },
              { label: 'SAF Levy — small business (turnover < $10M)', value: '$1,200 per year × visa period (e.g. 4 years = $4,800 upfront)' },
              { label: 'SAF Levy — standard business (turnover ≥ $10M)', value: '$1,800 per year × visa period (e.g. 4 years = $7,200 upfront)' },
              { label: 'Visa Application Charge — base (primary applicant)', value: '$3,115 approximate — check current VAC on DoHA website' },
            ].map((row, i) => (
              <div
                key={i}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24, padding: '18px 28px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#fff' : GREY_BG, flexWrap: 'wrap' as const }}
              >
                <span style={{ fontSize: 14, color: '#374151', fontWeight: 500, lineHeight: 1.4 }}>{row.label}</span>
                <span style={{ fontSize: 14, color: NAVY, fontWeight: 700, whiteSpace: 'nowrap' as const }}>{row.value}</span>
              </div>
            ))}
            <div style={{ padding: '20px 28px', background: '#fff8ed', borderTop: `2px solid ${GOLD}40` }}>
              <p style={{ margin: 0, fontSize: 13, color: '#92400e', lineHeight: 1.6 }}>
                Figures current at August 2026 — confirm on the Department of Home Affairs website before lodging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Related pages */}
      <section id="related" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Assess Specialist Skills stream eligibility"
        body="Nanak Migration Group (MARN 2619467) can confirm whether your role and salary qualify for the Specialist Skills stream and manage the nomination and visa application process."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
