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
  { id: 'occupations', label: 'Occupations (CSOL)' },
  { id: 'process', label: 'Application process' },
  { id: 'fees', label: 'Fees' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const KEY_FACTS: KeyFact[] = [
  {
    icon: 'dollar',
    value: '$79,499 p.a.',
    label: 'Core Skills Income Threshold (CSIT)',
    note: 'Minimum annual earnings for Core Skills stream from 1 July 2026. Annual market salary rate must also be met. Figures current at August 2026.',
  },
  {
    icon: 'calendar',
    value: 'Up to 4 years',
    label: 'Maximum visa period',
    note: 'Core Skills stream may be granted for up to four years. Secondary applicants receive the same period.',
  },
  {
    icon: 'briefcase',
    value: '1 year',
    label: 'Relevant work experience required',
    note: 'The nominee must have at least one year of relevant work experience in the past five years in the nominated occupation.',
  },
  {
    icon: 'shield',
    value: 'PR pathway',
    label: 'Via 186 ENS after 2 years',
    note: 'After holding a Core Skills 482 for two years with the same employer in the same occupation, holders are generally eligible for the 186 Employer Nomination Scheme.',
  },
]

const STEPS: TimelineStep[] = [
  {
    code: '01',
    title: 'Employer obtains Standard Business Sponsorship (SBS)',
    desc: 'The sponsoring employer must hold or apply for SBS through ImmiAccount. SBS approval typically takes 4–8 weeks for new applicants.',
  },
  {
    code: '02',
    title: 'Employer completes Labour Market Testing',
    desc: 'Before lodging the nomination, the employer must advertise the role on Workforce Australia plus at least one other national platform for at least 28 consecutive days.',
  },
  {
    code: '03',
    title: 'Employer lodges the nomination',
    desc: 'The employer submits the nomination application through ImmiAccount, including LMT evidence, position description, and SAF Levy payment. The nomination must meet CSIT salary requirements.',
  },
  {
    code: '04',
    title: 'Nominee lodges the visa application',
    desc: 'Once the nomination is lodged (or concurrently), the nominee lodges the subclass 482 visa application with health, character and English evidence.',
  },
  {
    code: '05',
    title: 'Visa grant and commencement',
    desc: 'On grant, the nominee (and any secondary applicants) may enter Australia and commence work in the nominated occupation. Work must begin within 90 days of grant or first entry.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'What is the CSIT and how does it differ from the TSMIT?',
    answer: 'The Core Skills Income Threshold (CSIT) is the minimum annual earnings that must be paid to a Core Skills stream worker. From 1 July 2026, the CSIT is $79,499 per annum. The TSMIT (Temporary Skilled Migration Income Threshold) was the predecessor to the CSIT and was used under the former TSS visa regime. The CSIT must be met in addition to the annual market salary rate for the occupation — meaning the nominee must be paid at least the CSIT and at least what an equivalent Australian worker would earn.',
  },
  {
    question: 'Can I change jobs while on a Core Skills 482?',
    answer: "Your Core Skills stream 482 visa ties you to your sponsoring employer and nominated occupation under visa condition 8107. If you change employers, your new employer must hold SBS and lodge a new nomination. You generally have up to 60 days after your employment ceases to find a new sponsor. Changing employers may reset the two-year qualifying period for the 186 ENS Temporary Residence Transition stream.",
  },
  {
    question: 'What is the PR pathway from the Core Skills stream?',
    answer: 'After holding a Core Skills stream 482 visa for at least two years, working for the same employer in the same occupation, you and your employer can apply for the subclass 186 Employer Nomination Scheme (ENS) via the Temporary Residence Transition (TRT) stream. This requires the employer to remain an approved sponsor and nominate you. Assessment is on the merits of your application — meeting the threshold does not guarantee an outcome.',
  },
  {
    question: 'Does Labour Market Testing always apply?',
    answer: 'LMT applies to most Core Skills stream nominations. Exemptions exist for certain high-income positions, specific trade agreements (e.g. some nationalities under the AUSFTA or ChAFTA), and other prescribed circumstances. The Specialist Skills stream of the 482 is exempt from LMT. LMT exemption eligibility should be confirmed with a migration agent before the employer decides not to advertise.',
  },
  {
    question: 'Can my family members work in Australia on my 482?',
    answer: 'Yes. Your spouse or de facto partner and dependent children can be included as secondary applicants and receive the same visa period. Secondary applicants generally have open work rights — they are not restricted to your employer or occupation. This is one of the advantages of the 482 over some other temporary visa pathways.',
  },
]

const RELATED: RelatedPage[] = [
  {
    title: '482 Specialist Skills Stream',
    desc: 'Exempt from Labour Market Testing — for high-earning roles across most occupations.',
    icon: 'star',
    page: '482-specialist-skills-stream',
    color: CAT_EMPLOYER,
  },
  {
    title: 'Core Skills Occupation List (CSOL)',
    desc: 'Full list of ANZSCO occupations eligible for the Core Skills stream, with caveats.',
    icon: 'layers',
    page: 'core-skills-occupation-list',
    color: CAT_EMPLOYER,
  },
  {
    title: 'Employer Nomination Scheme (186)',
    desc: 'Permanent residence via employer nomination — the most common pathway from Core Skills 482.',
    icon: 'award',
    page: 'employer-nomination-scheme',
    color: CAT_EMPLOYER,
  },
  {
    title: 'Occupation Caveats',
    desc: 'How CSOL occupation caveats work and why they matter before lodging a nomination.',
    icon: 'clipboard',
    page: 'occupation-caveats',
    color: CAT_EMPLOYER,
  },
]

const ELIGIBILITY_CARDS = [
  {
    icon: 'briefcase',
    title: 'Approved sponsor',
    desc: 'Your employer must hold Standard Business Sponsorship (SBS) or apply for it concurrently with the nomination. Without SBS, the nomination cannot be approved.',
  },
  {
    icon: 'layers',
    title: 'CSOL occupation',
    desc: 'The nominated occupation must appear on the Core Skills Occupation List (CSOL). Occupations are identified by their ANZSCO code. Check for any applicable caveats before lodging.',
  },
  {
    icon: 'dollar',
    title: 'Core Skills Income Threshold (CSIT)',
    desc: "The nominee's annual earnings must meet or exceed the CSIT ($79,499 from 1 July 2026) and must not be less than the annual market salary rate for that occupation. Figures current at August 2026 — confirm on the Department of Home Affairs website.",
  },
  {
    icon: 'user',
    title: '1 year relevant experience',
    desc: 'The nominee must demonstrate at least one year of relevant work experience in the nominated occupation within the past five years. Evidence typically includes employment references and payslips.',
  },
  {
    icon: 'globe',
    title: 'English language',
    desc: 'Competent English is required (typically IELTS 6 or equivalent in each band, or PTE Academic 50 in each communicative skill). Some exemptions may apply — confirm current requirements with a migration agent.',
  },
  {
    icon: 'clipboard',
    title: 'Labour Market Testing',
    desc: 'For most Core Skills nominations, the employer must have conducted LMT — advertising the role on Workforce Australia and at least one other national platform for a minimum of 28 days within the four months before nomination lodgement.',
  },
]

export default function CoreSkillsStreamPage({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: '482 Core Skills Stream', url: 'https://www.nanakmigration.com.au/482-core-skills-stream' },
        ]}
        faqs={FAQ}
        service={{
          name: '482 Core Skills Stream — Skills in Demand Visa',
          description: PAGE_META['482-core-skills-stream'].metaDescription,
          url: 'https://www.nanakmigration.com.au/482-core-skills-stream',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Employer Sponsored Visas', page: 'employer-sponsored-visas' },
        { label: '482 Core Skills Stream' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Subclass 482 — Skills in Demand"
        eyebrowSub="Core Skills Stream · Employer Sponsored"
        title={<>482 Core Skills Stream<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Skills in Demand Visa</em></>}
        deck="The Core Skills stream of the subclass 482 Skills in Demand visa allows Australian employers to sponsor skilled workers in occupations listed on the Core Skills Occupation List (CSOL). It is the most widely used employer-sponsored temporary visa pathway."
        shortAnswer={<>The Core Skills stream requires that the nominated occupation appears on the Core Skills Occupation List (CSOL), that the nominee's annual earnings will meet or exceed the Core Skills Income Threshold (CSIT) of <strong style={{ color: NAVY }}>$79,499 per annum from 1 July 2026</strong> (and the annual market salary rate), that the nominee has at least one year of relevant work experience in the past five years, and that the sponsoring employer holds Standard Business Sponsorship and has completed Labour Market Testing. The visa is granted for up to four years. After two years in the Core Skills stream, holders are generally eligible to apply for the subclass 186 ENS for permanent residence. Nanak Migration Group, a registered migration agent (MARN 2619467), can assess whether your occupation and salary meet the current CSIT before your employer lodges a nomination.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'View CSOL occupations →', page: 'core-skills-occupation-list' }}
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
          <SectionHeading kicker="Requirements" title="Core Skills Stream Eligibility Criteria" accent={ACCENT} />
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

      {/* Occupations / CSOL */}
      <section id="occupations" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Occupation list" title="Core Skills Occupation List (CSOL)" accent={ACCENT} />
          <Callout variant="note" title="How the CSOL works">
            The CSOL is a legislative instrument that lists ANZSCO occupations eligible for the Core Skills stream. Each occupation may carry a caveat that restricts the kinds of businesses or positions that can use it. A caveat is not immediately obvious — it requires checking the current legislative instrument, not just confirming the occupation is listed. Nanak Migration Group (MARN 2619467) checks for caveats as part of every nomination assessment.
          </Callout>
          <div style={{ marginTop: 24, background: GREY_BG, border: `1px solid ${BORDER}`, borderRadius: 14, padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' as const }}>
            <p style={{ margin: 0, fontSize: 15, color: NAVY, fontWeight: 500, lineHeight: 1.5 }}>
              Consult the full CSOL — including caveats — before confirming a nomination is possible.
            </p>
            <div
              role="button"
              tabIndex={0}
              onClick={() => navigate('core-skills-occupation-list')}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate('core-skills-occupation-list') }}
              style={{ display: 'inline-block', backgroundColor: ACCENT, color: '#fff', padding: '12px 24px', borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' as const, flexShrink: 0 }}
            >
              View CSOL &amp; occupation caveats →
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="How to apply" title="Application Process — Core Skills Stream" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="cards" accent={ACCENT} />
        </div>
      </section>

      {/* Fees */}
      <section id="fees" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Costs" title="Core Skills Stream Fees" accent={ACCENT} />
          <div style={{ background: GREY_BG, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: 'hidden' }}>
            {[
              { label: 'Nomination application charge', value: '$330 per nominee' },
              { label: 'SAF Levy — small business (turnover < $10M)', value: '$1,200 per year × visa period (e.g. 4 years = $4,800 upfront)' },
              { label: 'SAF Levy — standard business (turnover ≥ $10M)', value: '$1,800 per year × visa period (e.g. 4 years = $7,200 upfront)' },
              { label: 'Visa Application Charge — base (primary applicant)', value: '$3,115 approximate — check current VAC on DoHA website' },
              { label: 'Secondary applicant VAC', value: 'Varies by age — check DoHA website' },
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
              <p style={{ margin: '0 0 8px', fontSize: 13, color: '#92400e', lineHeight: 1.6 }}>
                Figures current at August 2026 — confirm on the Department of Home Affairs website before lodging.
              </p>
              <p style={{ margin: 0, fontSize: 13, color: '#374151', lineHeight: 1.6 }}>
                <strong>Professional fees:</strong> Nanak Migration Group provides a fixed-fee quote after assessing each matter. Contact us to discuss.
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
        title="Assess your Core Skills stream eligibility"
        body="Nanak Migration Group (MARN 2619467) checks CSOL occupation eligibility, CSIT salary compliance, and LMT requirements before your employer lodges a nomination."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
