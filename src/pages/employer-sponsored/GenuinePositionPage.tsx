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
  { id: 'what-is-assessed', label: 'What is Assessed' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'common-issues', label: 'Common Issues' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'briefcase', value: 'Mandatory', label: 'Assessed on every nomination', note: 'Every subclass 482 nomination is assessed against the genuine position criterion — there are no exceptions.' },
  { icon: 'clipboard', value: 'ANZSCO match', label: 'Duties must match the occupation', note: 'The actual duties of the role must correspond to the ANZSCO description for the nominated occupation.' },
  { icon: 'alert', value: 'High-risk', label: 'Common refusal ground', note: 'Failure to satisfy the genuine position test is one of the most common reasons for nomination refusal.' },
  { icon: 'file', value: 'Evidence-based', label: 'Documentation is essential', note: 'The stronger the documentation of business need, the better the nomination is supported.' },
]

const ASSESSMENT_FACTORS = [
  {
    heading: 'Does the position exist?',
    detail: 'Is there a current vacancy or identifiable business need? The Department will look at evidence of business activity, contracts, revenue, and staffing structure.',
  },
  {
    heading: 'Is the position full-time and ongoing?',
    detail: 'Casual or project-based positions may face greater scrutiny. The role should represent a genuine, continuing part of the business.',
  },
  {
    heading: 'Do the duties match the ANZSCO occupation?',
    detail: "If the duties described in the nomination don't align with the ANZSCO description, the Department may refuse on the grounds that the nominated occupation is incorrect.",
  },
  {
    heading: 'Is the salary consistent with the role?',
    detail: 'A salary significantly above or below market may prompt questions about whether the position is genuine or structured around a specific candidate.',
  },
  {
    heading: 'Is there a pre-arranged candidate?',
    detail: 'Having identified a candidate in advance is not itself a problem — the issue is whether the position was created for the candidate rather than reflecting genuine operational need.',
  },
]

const EVIDENCE_ITEMS = [
  'Organisational chart showing where the position sits in the business structure',
  'Position description with detailed duties and responsibilities',
  'Evidence of business activity: contracts, client agreements, trading records, financial statements',
  'Evidence of prior attempts to fill the role (relevant to LMT compliance too)',
  'Any previous employment in the same or similar position by Australian workers',
  'Payroll records for existing staff in comparable roles',
]

const COMMON_ISSUES = [
  "Duties that are generic or don't match the ANZSCO descriptor",
  'No evidence of prior attempts to fill the role',
  'Business is newly established with no trading history',
  'The nominee is a family member or co-director of the sponsoring business',
  'The position is classified as a different occupation on other documents (e.g. different job title on website or tax documents)',
  'Position duties span two or more ANZSCO occupations without proper justification',
]

const FAQ: FaqItem[] = [
  {
    question: 'Can family members be sponsored by a family business?',
    answer: 'Yes, but these nominations receive heightened scrutiny. The Department will look carefully at whether the position is genuine and whether the nominated salary reflects what an arm\'s-length employee would receive. Comprehensive documentation is essential.',
  },
  {
    question: 'What if our business is new?',
    answer: 'New businesses can sponsor workers, but the absence of trading history makes it harder to demonstrate genuine operational need. The Department will look at business plans, executed contracts, and other evidence of genuine commercial activity.',
  },
  {
    question: 'Does the position have to be exactly as described in the ANZSCO?',
    answer: "The nominated duties must substantially align with the ANZSCO descriptor — they do not need to match word-for-word, but the core duties must be consistent. Roles that blend two ANZSCO codes may require a careful assessment of which code is most appropriate.",
  },
  {
    question: 'Can a position be refused even if we have done LMT?',
    answer: 'Yes. Labour Market Testing (LMT) and the genuine position test are separate requirements. Satisfying LMT does not mean the genuine position test is automatically passed. Both criteria must be met independently.',
  },
  {
    question: 'What happens if a nomination is refused on this ground?',
    answer: 'If a nomination is refused because the genuine position test was not satisfied, the employer may re-lodge a new nomination with stronger evidence. There is no merits review of nomination refusals — they cannot be reviewed by the Administrative Review Tribunal. It is therefore important to get the documentation right before the initial lodgement.',
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Labour Market Testing', desc: 'LMT advertising requirements — separate from but related to the genuine position test.', icon: 'clipboard', page: 'labour-market-testing', color: CAT_EMPLOYER },
  { title: 'Skills in Demand Visa (482)', desc: 'Full guide to the subclass 482 — streams, nomination and eligibility.', icon: 'star', page: 'skills-in-demand-visa', color: CAT_EMPLOYER },
  { title: 'Standard Business Sponsorship', desc: 'Employer must hold SBS before lodging any 482 nomination.', icon: 'briefcase', page: 'standard-business-sponsorship', color: CAT_EMPLOYER },
  { title: 'Employer Obligations', desc: 'What approved sponsors must do to maintain their SBS.', icon: 'shield', page: 'sponsorship-obligations', color: CAT_EMPLOYER },
]

export default function GenuinePositionPage({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: 'Genuine Position Test', url: 'https://www.nanakmigration.com.au/genuine-position-test' },
        ]}
        faqs={FAQ}
        service={{ name: 'Genuine Position Test for 482 Nominations', description: PAGE_META['genuine-position-test'].metaDescription, url: 'https://www.nanakmigration.com.au/genuine-position-test' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Employer Sponsored Visas', page: 'employer-sponsored-visas' },
        { label: 'Genuine Position Test' },
      ]} />
      <PageHero
        variant="standard"
        eyebrow="Subclass 482 Nomination"
        eyebrowSub="Department Assessment · Key Criterion"
        title={<>Genuine Position Test<br /><em style={{ fontStyle: 'italic', color: GOLD }}>for 482 Nominations</em></>}
        deck="When an employer nominates a position for a subclass 482 visa, the Department of Home Affairs assesses whether the position is a genuine vacancy — meaning a real, continuing business need, not created to facilitate a visa outcome."
        shortAnswer={<>The genuine position test requires the employer to demonstrate that: (1) the position genuinely exists in their business; (2) the duties match the nominated ANZSCO occupation; (3) the position reflects genuine business operations; and (4) it is not created solely or primarily to help a specific person obtain a visa. Nanak Migration Group (MARN 2619467) can review your nomination documentation to ensure the genuine position criterion is well supported before lodgement.</>}
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

      <section id="what-is-assessed" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Assessment" title="What the Department Assesses" accent={ACCENT}
            intro="The Department considers multiple factors when evaluating whether a position is genuine. Each factor is considered in the context of the overall nomination." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
            {ASSESSMENT_FACTORS.map((item, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 10, padding: '22px 24px', background: GREY_BG, display: 'flex', gap: 16 }}>
                <div style={{ minWidth: 28, height: 28, borderRadius: '50%', background: ACCENT, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 6 }}>{item.heading}</div>
                  <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="evidence" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Documentation" title="Evidence to Support a Genuine Position" accent={ACCENT}
            intro="The following types of evidence can help establish that the nominated position reflects genuine business need. This list is indicative — your specific case may require additional or different documents." />
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {EVIDENCE_ITEMS.map((item, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: '14px 20px', background: '#fff', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 6 }} />
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="common-issues" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Watch out" title="Common Issues That Trigger Refusal" accent={ACCENT}
            intro="Nominations that share these characteristics are at greater risk of refusal on the genuine position ground. Address each of these potential issues before lodgement." />
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {COMMON_ISSUES.map((item, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: '16px 20px', background: GREY_BG, display: 'flex', gap: 14, alignItems: 'flex-start', borderLeft: `4px solid ${ACCENT}` }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: ACCENT, minWidth: 22 }}>{i + 1}.</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      <section id="related" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="See also" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand
        title="Get your nomination documentation right the first time"
        body="Nanak Migration Group (MARN 2619467) reviews 482 nomination packages to identify gaps in genuine position evidence before you lodge."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
