import React from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  KeyFactsStrip,
  SectionHeading,
  StepTimeline,
  ComparisonTable,
  EvidenceChecklist,
  Callout,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  ComplianceDisclaimer,
} from '@/components/page'
import type {
  KeyFact,
  TimelineStep,
  ComparisonColumn,
  ComparisonRow,
  ChecklistGroup,
  FaqItem,
  RelatedPage,
} from '@/components/page'
import { GOLD, NAVY, NAVY_DARK, CAT_EMPLOYER } from '@/theme'
import Icon from '@/components/ui/Icon'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'
import { SSIT_PLUS } from '@/lib/visa-constants'

const CURRENT_AS_AT = 'October 2026'
const SSIT_DISPLAY = `${SSIT_PLUS} p.a.`
const ACCENT = CAT_EMPLOYER
const BORDER = '#e8edf6'
const GREY_BG = '#fafbfe'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'exemptions', label: 'Exemptions' },
  { id: 'advertising', label: 'Advertising' },
  { id: 'process', label: 'Process' },
  { id: 'fees', label: 'Fees' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'calendar', value: '28 days', label: 'Minimum advertising period', note: 'Advertising must run for at least 28 days before the nomination is lodged.' },
  { icon: 'clock', value: '4 months', label: 'Look-back window', note: 'Advertising must have occurred within the four months before nomination lodgement.' },
  { icon: 'building', value: '2+ platforms', label: 'Required advertising channels', note: 'At least two advertisements on national recruitment platforms (for example Seek, LinkedIn or Indeed).' },
  { icon: 'calendar', value: '4 weeks', label: 'Minimum run time', note: 'Each advertisement must run for at least 4 weeks within the 4 months before nomination lodgement.' },
]

const STEPS: TimelineStep[] = [
  {
    title: 'Confirm LMT applies',
    desc: 'Check whether the occupation and salary level require LMT or qualify for an exemption under the regulations.',
  },
  {
    title: 'Prepare position description',
    desc: 'Draft a genuine job ad matching the nominated occupation title and ANZSCO code; salary must meet or exceed TSMIT.',
  },
  {
    title: 'Advertise on required platforms',
    desc: 'Place at least 2 advertisements on national recruitment platforms (for example Seek, LinkedIn or Indeed) for at least 4 weeks within the 4 months before lodgement.',
  },
  {
    title: 'Record outcomes',
    desc: 'Document all applications received, interviews conducted, and reasons for not selecting Australian applicants. Retain records for at least 5 years.',
  },
  {
    title: 'Lodge nomination with evidence',
    desc: 'Submit the 482 nomination including LMT evidence: ad copies, screenshots, dates, applicant counts, and outcome summaries.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'Does LMT apply to all 482 nominations?',
    answer: `LMT applies to both the Core Skills and Specialist Skills streams of the subclass 482 unless an exemption under Australia's international trade obligations applies. Labour Agreement streams follow the agreement terms. A registered migration agent can confirm whether your nomination requires advertising.`,
  },
  {
    question: 'What counts as a compliant advertising platform?',
    answer: 'You need at least 2 advertisements on national recruitment platforms that are likely to reach suitably qualified Australian workers — commonly Seek, LinkedIn, or Indeed. Workforce Australia is not mandatory. Each ad must run for at least 4 weeks within the 4 months before lodgement.',
  },
  {
    question: 'How long must the advertising run?',
    answer: 'Each advertisement must run for a minimum of 28 days. The advertising must have occurred within the four months before the nomination is lodged. Advertising that is too old or too short will not satisfy LMT requirements.',
  },
  {
    question: 'What records must the employer keep?',
    answer: 'Employers must retain evidence of LMT for at least five years. This includes copies of advertisements, screenshots showing dates and platforms, a record of applications received, interview notes, and documented reasons why Australian applicants were not selected.',
  },
  {
    question: 'Can LMT be waived in urgent cases?',
    answer: "There is no general urgency exemption. However, specific occupations listed in Australia's international trade agreements (for example, certain nationals of China, Japan, Singapore, Thailand or the United Kingdom under the relevant agreements) may be exempt from LMT requirements. If your nominee's home country has a relevant trade agreement with Australia, this should be assessed before advertising begins.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Skills in Demand Visa (482)', desc: 'Full guide to the subclass 482 — streams, salary thresholds, eligibility and process.', icon: 'star', page: 'skills-in-demand-visa', color: CAT_EMPLOYER },
  { title: 'Skilling Australians Fund Levy', desc: 'Understand SAF Levy rates, payment process and exemptions for 482 nominations.', icon: 'dollar', page: 'saf-levy', color: CAT_EMPLOYER },
  { title: 'Genuine Position Test', desc: 'How the Department assesses whether a nominated position is genuine.', icon: 'clipboard', page: 'genuine-position-test', color: CAT_EMPLOYER },
  { title: 'Standard Business Sponsorship', desc: 'Employers must hold SBS before lodging a 482 nomination.', icon: 'briefcase', page: 'standard-business-sponsorship', color: CAT_EMPLOYER },
]

export default function LabourMarketTestingPage({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored' },
          { name: 'Labour Market Testing', url: 'https://www.nanakmigration.com.au/labour-market-testing' },
        ]}
        faqs={FAQ}
        service={{ name: 'Labour Market Testing (LMT) Requirements', description: PAGE_META['labour-market-testing'].metaDescription, url: 'https://www.nanakmigration.com.au/labour-market-testing' }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Employer Sponsored Visas', page: 'employer-sponsored-visas' },
        { label: 'Labour Market Testing' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Visa Subclass 482"
        eyebrowSub="Core Skills Stream · Nomination Requirement"
        title={<>Labour Market Testing<br /><em style={{ fontStyle: 'italic', color: GOLD }}>(LMT) Requirements</em></>}
        deck="Before nominating an overseas worker for a subclass 482 Core Skills stream visa, most Australian employers must complete Labour Market Testing — demonstrating genuine attempts to recruit Australian citizens and permanent residents first."
        shortAnswer={<>LMT requires employers to place at least 2 advertisements on national recruitment platforms for at least 4 weeks within the 4 months before the nomination is lodged. Exemptions may apply under international trade obligations. A registered migration agent (MARN 2619467) can advise on whether your nomination requires advertising and how to structure compliant evidence.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Skills in Demand Visa (482)', page: 'skills-in-demand-visa' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <ReviewedBy />
        </div>
      </section>

      {/* Horizontal sticky jump-to-section bar */}
      <div style={{ borderTop: '1px solid #e8edf6', borderBottom: '1px solid #e8edf6', background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 4, overflowX: 'auto', scrollbarWidth: 'none' }}>
          {TOC.map(sec => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap', borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>

      {/* Key Facts */}
      <div id="key-facts">
        <KeyFactsStrip facts={KEY_FACTS} accent={ACCENT} />
      </div>

      {/* Overview */}
      <section id="overview" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Overview" title="What is Labour Market Testing?" accent={ACCENT}
            intro="Labour Market Testing (LMT) is a requirement under the Migration Regulations that compels employers to demonstrate they have genuinely tried to recruit Australian citizens or permanent residents before turning to an overseas worker on a subclass 482 visa." />
          <p style={{ fontSize: 16, lineHeight: 1.75, color: '#374151', marginTop: 24 }}>
            The Department of Home Affairs assesses LMT evidence as part of the nomination application. If LMT evidence is absent, incomplete or does not meet the regulatory standards, the nomination may be refused. Nanak Migration Group (MARN 2619467) assists employers in preparing LMT-compliant advertising strategies and nomination documentation.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: '#374151', marginTop: 16 }}>
            LMT applies to nominations for the Core Skills stream of the subclass 482 visa. The Specialist Skills stream is generally exempt where the nominee will meet the SSIT ({SSIT_DISPLAY}).
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Requirements" title="LMT Advertising Requirements" accent={ACCENT}
            intro="To satisfy LMT, employers must meet each of the following requirements at the time of nomination lodgement." />
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { icon: 'calendar' as const, heading: '28-day minimum', detail: 'Each advertisement must run for a minimum of 28 consecutive days. Advertisements that were live for fewer than 28 days do not satisfy the LMT requirement, regardless of the number of applications received.' },
              { icon: 'clock' as const, heading: '4-month look-back window', detail: 'The advertising must have taken place within the four months immediately before the nomination is lodged. Older advertising will not satisfy LMT even if it otherwise meets the requirements.' },
              { icon: 'building' as const, heading: 'Two or more platforms', detail: 'Place at least 2 advertisements on national recruitment platforms (for example Seek, LinkedIn or Indeed) that are likely to reach suitably qualified Australian workers.' },
              { icon: 'file' as const, heading: 'Genuine job advertisement', detail: "The advertisement must accurately describe the position — including the occupation title consistent with the nominated ANZSCO code, the location, the salary or salary range, if the annual earnings for the position are lower than AUD96,400, and the employer's identity." },
            ].map(item => (
              <div key={item.heading} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fff', borderRadius: 12, padding: '20px 24px', border: `1px solid ${BORDER}` }}>
                <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 10, background: `${ACCENT}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={item.icon} size={20} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 4 }}>{item.heading}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.65, color: '#6b7280' }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exemptions */}
      <section id="exemptions" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Exemptions" title="When LMT Does Not Apply" accent={ACCENT}
            intro="Certain nominations are exempt from LMT requirements under the Migration Regulations or international trade obligations." />
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { heading: `Specialist Skills stream (SSIT ${SSIT_PLUS})`, detail: `Nominations where the nominee will meet the Specialist Skills Income Threshold (${SSIT_DISPLAY}) under the subclass 482 are generally exempt from LMT.` },
              { heading: 'International trade obligations', detail: "Nationals of countries with relevant free trade agreements (FTAs) with Australia may be exempt. This includes certain categories under the Australia–United States Free Trade Agreement (AUSFTA), the China–Australia Free Trade Agreement (ChAFTA), the Singapore–Australia Free Trade Agreement (SAFTA), the Thailand–Australia Free Trade Agreement (TAFTA), and the ASEAN–Australia–New Zealand Free Trade Agreement (AANZFTA). Each agreement has its own conditions and occupation lists." },
              { heading: 'Occupations on the LMT exemption list', detail: 'There are no occupation-based LMT exemptions for the 482 or 494. Some medical practitioner and paramedic nominations can meet LMT through a written submission instead of advertising. Employers should check the current legislative instrument before commencing advertising.' },
            ].map(item => (
              <div key={item.heading} style={{ padding: '20px 24px', borderRadius: 12, border: `1px solid ${BORDER}`, background: GREY_BG }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 6 }}>{item.heading}</div>
                <div style={{ fontSize: 14, lineHeight: 1.65, color: '#6b7280' }}>{item.detail}</div>
              </div>
            ))}
          </div>
          <Callout variant="warning" title="Do not assume an exemption applies">
            Exemption eligibility depends on the specific occupation, the nominee&apos;s nationality, and the current legislative instrument in force at the time of lodgement. Always confirm with a registered migration agent (MARN 2619467) before deciding not to conduct LMT.
          </Callout>
        </div>
      </section>

      {/* Advertising */}
      <section id="advertising" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Advertising" title="Compliant Advertising Platforms" accent={ACCENT}
            intro="Not all job advertising platforms satisfy the LMT requirement. The following guidance reflects current Departmental expectations." />
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              { platform: 'Seek', mandatory: false, detail: "One of Australia's largest job boards and widely accepted as a compliant national platform. National reach satisfies the requirement that advertising is likely to attract suitably qualified Australian workers." },
              { platform: 'LinkedIn', mandatory: false, detail: 'Widely accepted as a compliant national platform for professional and specialist roles. Paid postings help demonstrate genuine advertising effort.' },
              { platform: 'Indeed', mandatory: false, detail: 'A national platform with broad coverage. Generally accepted as a compliant second platform. Sponsored postings are recommended to demonstrate genuine effort.' },
            ].map(item => (
              <div key={item.platform} style={{ background: '#fff', borderRadius: 12, padding: '20px 22px', border: `1px solid ${BORDER}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span style={{ fontWeight: 700, fontSize: 15, color: NAVY }}>{item.platform}</span>
                  {item.mandatory && (
                    <span style={{ fontSize: 11, fontWeight: 600, background: `${ACCENT}18`, color: ACCENT, borderRadius: 6, padding: '2px 8px' }}>Mandatory</span>
                  )}
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: '#6b7280', margin: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Process" title="Step-by-Step LMT Process" accent={ACCENT}
            intro="Follow these steps to complete LMT before lodging a 482 nomination." />
          <StepTimeline steps={STEPS} variant="cards" accent={ACCENT} />
        </div>
      </section>

      {/* Fees */}
      <section id="fees" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Costs" title="Fees & Costs" accent={ACCENT}
            intro="The following fees are associated with a 482 nomination. LMT itself does not attract a separate charge, but nomination-related fees apply." />
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: '#fff', borderRadius: 12, border: `1px solid ${BORDER}`, overflow: 'hidden' }}>
              <div style={{ padding: '16px 24px', borderBottom: `1px solid ${BORDER}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: NAVY }}>Nomination application charge (Base Application Charge)</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: ACCENT }}>$330 per nominee</span>
              </div>
              <div style={{ padding: '16px 24px', borderBottom: `1px solid ${BORDER}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: NAVY }}>SAF Levy</span>
                <span style={{ fontSize: 14, color: '#6b7280' }}>Separate to LMT — see the Skilling Australians Fund guide</span>
              </div>
              <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: NAVY }}>Professional fees (Nanak Migration Group)</span>
                <span style={{ fontSize: 14, color: '#6b7280' }}>Variable — fixed-fee quote provided after case assessment</span>
              </div>
            </div>
            <p style={{ fontSize: 13, fontStyle: 'italic', color: '#9ca3af', margin: 0 }}>
              Figures current at October 2026 — confirm on the Department of Home Affairs website before lodging.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="FAQ" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Related guides" title="You may also be interested in" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand
        title="Unsure whether your position requires LMT?"
        body="As a registered migration agent (MARN 2619467), Nanak Migration Group can assess your nomination and advise on LMT compliance before you advertise."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
