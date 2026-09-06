import React from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_EMPLOYER } from '@/theme'
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
const ACCENT = CAT_EMPLOYER
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'types', label: 'Types' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'process', label: 'Process' },
  { id: 'fees', label: 'Fees' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'file', value: 'Negotiated', label: 'Custom Government arrangement', note: 'Each Labour Agreement sets out specific conditions, including occupation, numbers, salary, and any concessions.' },
  { icon: 'clock', value: '5 years', label: 'Maximum agreement term', note: 'Company-specific Labour Agreements are generally approved for up to 5 years.' },
  { icon: 'building', value: 'Industry peak body', label: 'Endorsement typically required', note: 'Most Labour Agreements require support from the relevant industry peak body before the Department will negotiate.' },
  { icon: 'shield', value: 'Limited concessions', label: 'Age, English, salary', note: 'Labour Agreements can include concessions on standard visa requirements, subject to negotiation.' },
]

const STEPS: TimelineStep[] = [
  {
    title: 'Confirm standard pathways are unavailable',
    desc: 'Identify why the subclass 482 or 186 standard pathways do not meet the workforce need. The Department will require this justification.',
  },
  {
    title: 'Identify the appropriate Labour Agreement type',
    desc: 'Choose from: Company-Specific, Designated Area Migration Agreement (DAMA), Industry Agreement, or On-Hire Agreement. Each has different requirements.',
  },
  {
    title: 'Engage industry peak body',
    desc: 'For most types, secure an endorsement or letter of support from the relevant industry peak body (e.g. the relevant union or employer association).',
  },
  {
    title: 'Apply to negotiate with the Department',
    desc: 'Submit a Labour Agreement proposal to the Department of Home Affairs. The Department will assess the proposal, consult with relevant government agencies, and negotiate terms.',
  },
  {
    title: 'Sponsor workers under the approved Agreement',
    desc: 'Once the Labour Agreement is in place, the employer nominates workers under the agreed terms and workers apply for the relevant visa (482 or 186 LA stream).',
  },
]

const AGREEMENT_TYPES = [
  {
    title: 'Company-Specific Labour Agreement',
    desc: "Tailored for a single employer. Allows recruitment for specific occupations not otherwise available. Used where industry-wide agreement does not cover the employer's needs.",
  },
  {
    title: 'Designated Area Migration Agreement (DAMA)',
    desc: 'Regional Labour Agreements negotiated by state, territory, or local governments. Allow recruitment of workers into regional areas, often with greater concessions than standard pathways. Examples: Northern Territory DAMA, South Australian DAMA.',
  },
  {
    title: 'Industry Labour Agreement',
    desc: 'Negotiated for a sector rather than a single employer. Individual employers access the agreement by making an on-hire arrangement. Examples: restaurant sector, fishing industry.',
  },
  {
    title: 'On-Hire Labour Agreement',
    desc: 'Used by labour-hire companies that on-hire workers to client businesses. Allows flexibility in deployment of sponsored workers across multiple work sites.',
  },
  {
    title: 'Project Labour Agreement',
    desc: 'Designed for large construction, engineering, or resource projects where peak demand for specialist overseas workers exists for a defined project period. The agreement is tied to the project rather than the employer generally. Typically used for major infrastructure projects where the occupation or scale cannot be met through standard sponsorship pathways.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'What occupations can be included in a Labour Agreement?',
    answer: 'Labour Agreements can include occupations at ANZSCO Skill Levels 4 and 5, which are generally not eligible under the standard 482 pathway. They can also include Skill Level 1–3 occupations where specific concessions (age, English, salary) are required. The specific occupations must be justified and agreed with the Department.',
  },
  {
    question: 'How long does it take to negotiate a Labour Agreement?',
    answer: 'Negotiations typically take 6 to 18 months, depending on the complexity of the agreement and whether industry peak body endorsement is readily available. Employers should factor this timeframe into their workforce planning.',
  },
  {
    question: 'Can a small business access a Labour Agreement?',
    answer: 'Yes, but small businesses may find it more practical to access an existing Industry or Designated Area Migration Agreement rather than negotiating a Company-Specific agreement. DAMAs in particular are designed to assist regional employers of all sizes.',
  },
  {
    question: 'What concessions can be included?',
    answer: 'Depending on the type of agreement and the industry, concessions may include: a lower age limit (e.g. up to 55 instead of 45); lower English proficiency requirements; salary below the standard TSMIT; and access to occupations not on standard lists. All concessions are subject to negotiation and Departmental approval.',
  },
  {
    question: 'Does a Labour Agreement guarantee visa grants?',
    answer: 'No. A Labour Agreement establishes the framework for employer sponsorship — it does not guarantee that individual nominations or visa applications will be approved. Each nomination and visa application is assessed on its merits by the Department of Home Affairs.',
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Skills in Demand Visa (482)', desc: 'The standard employer-sponsored temporary visa — most employers start here.', icon: 'star', page: 'skills-in-demand-visa', color: CAT_EMPLOYER },
  { title: 'Employer Nomination Scheme (186)', desc: 'Permanent residence via employer nomination — also available under Labour Agreements.', icon: 'award', page: 'employer-nomination-scheme', color: CAT_EMPLOYER },
  { title: 'Standard Business Sponsorship', desc: 'The standard sponsorship framework required before most 482 nominations.', icon: 'briefcase', page: 'standard-business-sponsorship', color: CAT_EMPLOYER },
  { title: 'Employer Obligations', desc: 'Ongoing compliance obligations for approved sponsors and Labour Agreement holders.', icon: 'shield', page: 'sponsorship-obligations', color: CAT_EMPLOYER },
]

export default function LabourAgreementPage({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: 'Labour Agreements', url: 'https://www.nanakmigration.com.au/labour-agreements' },
        ]}
        faqs={FAQ}
        service={{ name: 'Labour Agreements for Employer Sponsorship', description: PAGE_META['labour-agreements'].metaDescription, url: 'https://www.nanakmigration.com.au/labour-agreements' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Employer Sponsored Visas', page: 'employer-sponsored-visas' },
        { label: 'Labour Agreements' },
      ]} />
      <PageHero
        variant="standard"
        eyebrow="Employer Sponsored"
        eyebrowSub="Alternative Sponsorship Pathway"
        title={<>Labour Agreements<br /><em style={{ fontStyle: 'italic', color: GOLD }}>for Employer Sponsorship</em></>}
        deck="A Labour Agreement is a formal arrangement between an employer and the Australian Government that allows the employer to recruit a set number of overseas workers in occupations not available under the standard subclass 482 or 186 pathways."
        shortAnswer={<>Labour Agreements are used where standard employer sponsorship pathways cannot meet the employer's needs — for example, for occupations below ANZSCO Skill Level 3, or where specific concessions on age, English, or salary are required. They are negotiated between the employer and the Department of Home Affairs, with input from the relevant industry peak body. Nanak Migration Group (MARN 2619467) can advise on whether a Labour Agreement may be appropriate for your workforce needs.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Skills in Demand (482) →', page: 'skills-in-demand-visa' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>
      <div style={{ borderTop: '1px solid #e8edf6', borderBottom: '1px solid #e8edf6', background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 4, overflowX: 'auto', scrollbarWidth: 'none' }}>
          {TOC.map(sec => (
            <a key={sec.id} href={`#${sec.id}`} style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap' as const, borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}>{sec.label}</a>
          ))}
        </div>
      </div>

      <div id="overview">
        <KeyFactsStrip facts={KEY_FACTS} accent={ACCENT} />
      </div>

      <section id="types" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Agreement Types" title="Types of Labour Agreement" accent={ACCENT}
            intro="There are four main types of Labour Agreement. The appropriate type depends on the employer's industry, location, and workforce needs." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24, marginTop: 40 }}>
            {AGREEMENT_TYPES.map((type, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, padding: '28px 28px', background: GREY_BG, borderTop: `4px solid ${ACCENT}` }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: NAVY, marginBottom: 12 }}>{type.title}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.7 }}>{type.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="eligibility" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Eligibility" title="When Is a Labour Agreement Appropriate?" accent={ACCENT}
            intro="Labour Agreements are not available to all employers. The Department expects employers to demonstrate that standard pathways are genuinely insufficient before a Labour Agreement will be considered." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
            {[
              { heading: 'Standard pathways are unavailable or insufficient', detail: 'The nominated occupation is not on any relevant occupation list for the subclass 482, or the employer requires concessions (e.g. on age or English) that the standard pathway does not permit.' },
              { heading: 'Genuine business need', detail: "The employer must demonstrate a genuine, ongoing need for overseas workers in the relevant occupation. The Department is not satisfied by short-term or project-based workforce gaps in most cases." },
              { heading: 'Industry peak body support', detail: 'For Company-Specific and most Industry Agreements, the relevant industry peak body (e.g. union or employer association) must provide endorsement or a letter of support. This requirement ensures labour market protections are maintained.' },
              { heading: 'Compliance track record', detail: "Employers with a poor compliance history — including previous sponsor obligations breaches — may find it more difficult to secure a Labour Agreement. The Department considers the employer's past conduct as a sponsor." },
            ].map((item, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 10, padding: '22px 24px', background: '#fff' }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 6 }}>{item.heading}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Process" title="How to Obtain a Labour Agreement" accent={ACCENT}
            intro="Negotiating a Labour Agreement is a multi-step process that typically takes 6 to 18 months. Early preparation and professional advice are strongly recommended." />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      <section id="fees" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Costs" title="Fees and Timeframes" accent={ACCENT} />
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: 'hidden', marginTop: 32 }}>
            {[
              { label: 'Department fee for Labour Agreement proposal', value: 'Nil (no application fee), but significant preparation costs' },
              { label: 'Nomination and visa application charges', value: 'Standard 482 rates apply once the Agreement is in place' },
              { label: 'SAF Levy', value: 'Applies to nominations under a Labour Agreement at standard rates' },
              { label: 'Professional fees', value: 'Variable and significant — contact Nanak Migration Group for a scope discussion' },
              { label: 'Timeframe', value: 'Typically 6–18 months for negotiations; complex agreements may take longer' },
            ].map((row, i, arr) => (
              <div key={i} style={{ display: 'flex', gap: 24, padding: '16px 24px', borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : 'none', background: i % 2 === 0 ? '#fff' : GREY_BG }}>
                <div style={{ fontSize: 14, color: '#6b7280', minWidth: 260, fontWeight: 500 }}>{row.label}</div>
                <div style={{ fontSize: 14, color: NAVY, flex: 1 }}>{row.value}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: '#6b7280', marginTop: 16, fontStyle: 'italic' }}>
            Figures current at August 2026 — confirm on the Department of Home Affairs website before lodging.
          </p>
        </div>
      </section>

      <section id="faq" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      <section id="related" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="See also" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand
        title="Explore whether a Labour Agreement suits your workforce needs"
        body="Nanak Migration Group (MARN 2619467) can assess whether a Labour Agreement — or an existing DAMA — may provide a pathway for occupations outside the standard 482 or 186 lists."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
