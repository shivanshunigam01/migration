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

const CURRENT_AS_AT = 'August 2026'
const ACCENT = CAT_EMPLOYER
const BORDER = '#e8edf6'
const GREY_BG = '#fafbfe'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'rates', label: 'Rates' },
  { id: 'payment', label: 'Payment' },
  { id: 'exemptions', label: 'Exemptions' },
  { id: 'refunds', label: 'Refunds' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'building', value: '$1,200/yr', label: 'Small business rate', note: 'Annual turnover under $10 million. Paid upfront for the full visa period.' },
  { icon: 'trending', value: '$1,800/yr', label: 'Standard business rate', note: 'Annual turnover $10 million or more. Paid upfront for the full visa period.' },
  { icon: 'shield', value: 'Employer only', label: 'Who pays the SAF Levy', note: 'Employers are prohibited by law from passing the SAF Levy cost to the visa holder.' },
  { icon: 'dollar', value: 'Upfront', label: 'Payment timing', note: 'The full levy for the entire visa period is payable when the nomination is lodged — not annually.' },
]

const STEPS: TimelineStep[] = [
  {
    title: 'Confirm business turnover',
    desc: "Determine whether your business is a 'small business' (annual turnover under $10 million) to identify the applicable levy rate.",
  },
  {
    title: 'Calculate total levy',
    desc: 'Multiply the annual rate by the number of years of the visa period sought. For permanent visas (186), a flat fee applies.',
  },
  {
    title: 'Pay at nomination lodgement',
    desc: 'The full SAF Levy amount is paid when the employer lodges the nomination application through ImmiAccount. Payment cannot be deferred.',
  },
  {
    title: 'Retain payment receipt',
    desc: 'Keep the SAF Levy payment confirmation. This is required evidence in the nomination application and may be needed for refund claims.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'Can the employer ask me to repay the SAF Levy?',
    answer: 'No. Under the Migration Act, an approved sponsor is prohibited from taking or recovering the SAF Levy from the visa holder or any other person. If an employer attempts to recover the levy from you, this may constitute a sponsor breach. You can report this to the Department of Home Affairs.',
  },
  {
    question: 'Is the SAF Levy the same as the visa application charge?',
    answer: 'No. The SAF Levy is payable by the employer at nomination stage. The Visa Application Charge (VAC) is separate and is payable by the visa applicant when lodging the visa application. Both must be paid.',
  },
  {
    question: 'What is the SAF Levy for a 186 permanent visa?',
    answer: 'For the subclass 186 Employer Nomination Scheme, a flat SAF Levy applies rather than an annual rate: $5,000 for small businesses (annual turnover under $10 million) and $7,000 for other businesses. Figures current at August 2026 — confirm on the Department of Home Affairs website.',
  },
  {
    question: 'Is the SAF Levy refundable if the visa is refused?',
    answer: 'The SAF Levy is generally non-refundable once the nomination has been lodged and processed, even if the subsequent visa application is refused. Partial refunds may be available in limited circumstances such as a nomination withdrawal before processing or a Departmental error. You should confirm current refund rules on the Department of Home Affairs website.',
  },
  {
    question: 'Does the SAF Levy apply to all 482 streams?',
    answer: 'The SAF Levy applies to nominations for the Core Skills, Specialist and Foundation streams of the subclass 482. Certain exempt categories exist for non-profits and specific program nominations. Confirm whether any exemption applies to your situation before lodging.',
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Skills in Demand Visa (482)', desc: 'Full overview of the 482 — streams, eligibility and the nomination process.', icon: 'star', page: 'skills-in-demand-visa', color: CAT_EMPLOYER },
  { title: 'Labour Market Testing', desc: 'LMT advertising requirements for Core Skills stream nominations.', icon: 'clipboard', page: 'labour-market-testing', color: CAT_EMPLOYER },
  { title: 'Employer Nomination Scheme (186)', desc: 'Permanent residence via employer nomination — SAF Levy also applies to 186 nominations.', icon: 'award', page: 'employer-nomination-scheme', color: CAT_EMPLOYER },
  { title: 'Employer Obligations', desc: 'What approved sponsors must do to maintain their SBS approval.', icon: 'shield', page: 'sponsorship-obligations', color: CAT_EMPLOYER },
]

export default function SkillingAustraliansFundPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['saf-levy'].title }, [])
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored' },
          { name: 'Skilling Australians Fund Levy', url: 'https://www.nanakmigration.com.au/saf-levy' },
        ]}
        faqs={FAQ}
        service={{ name: 'Skilling Australians Fund Levy (SAF Levy)', description: PAGE_META['saf-levy'].metaDescription, url: 'https://www.nanakmigration.com.au/saf-levy' }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Employer Sponsored Visas', page: 'employer-sponsored-visas' },
        { label: 'Skilling Australians Fund Levy' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Visa Subclass 482 & 186"
        eyebrowSub="Nomination Requirement · Annual Levy"
        title={<>Skilling Australians Fund<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Levy (SAF Levy)</em></>}
        deck="The Skilling Australians Fund (SAF) Levy is a compulsory charge payable by sponsoring employers when nominating workers on a subclass 482 or subclass 186 visa. It funds Australian apprenticeships and vocational training."
        shortAnswer={<>The SAF Levy must be paid by the nominating employer — it cannot be passed on to the visa applicant by law. For small businesses (annual turnover under $10 million), the rate is $1,200 per year of the visa. For other businesses, the rate is $1,800 per year. As Nanak Migration Group (MARN 2619467) explains, the levy is paid in full upfront at the time of nomination lodgement.</>}
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
          <SectionHeading kicker="Overview" title="What is the SAF Levy?" accent={ACCENT}
            intro="The Skilling Australians Fund (SAF) Levy was introduced to help fund apprenticeships and vocational training for Australians. It is payable by employers who nominate overseas workers for temporary or permanent employer-sponsored visas." />
          <p style={{ fontSize: 16, lineHeight: 1.75, color: '#374151', marginTop: 24 }}>
            The SAF Levy is a mandatory component of the 482 and 186 nomination process. It is collected at the time of nomination lodgement through ImmiAccount. Employers cannot defer payment, and by law they cannot pass the cost to the visa holder.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: '#374151', marginTop: 16 }}>
            Nanak Migration Group (MARN 2619467) assists employers in calculating the correct levy amount and preparing nomination applications that satisfy all Departmental requirements.
          </p>
        </div>
      </section>

      {/* Rates */}
      <section id="rates" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading kicker="Rates" title="SAF Levy Rates by Visa Type" accent={ACCENT}
            intro="The levy rate depends on the employer's annual turnover and the visa type being nominated. The following figures are current at August 2026." />

          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {/* 482 Core Skills */}
            <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${BORDER}`, overflow: 'hidden' }}>
              <div style={{ background: ACCENT, padding: '16px 24px' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: 2 }}>482 Core Skills Stream</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>4-year visa</div>
              </div>
              <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: `1px solid ${BORDER}` }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>Small business</div>
                    <div style={{ fontSize: 12, color: '#9ca3af' }}>Turnover under $10 million</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: ACCENT }}>$4,800 total</div>
                    <div style={{ fontSize: 12, color: '#9ca3af' }}>$1,200 × 4 years</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>Standard business</div>
                    <div style={{ fontSize: 12, color: '#9ca3af' }}>Turnover $10 million or more</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: ACCENT }}>$7,200 total</div>
                    <div style={{ fontSize: 12, color: '#9ca3af' }}>$1,800 × 4 years</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 482 Foundation */}
            <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${BORDER}`, overflow: 'hidden' }}>
              <div style={{ background: ACCENT, padding: '16px 24px' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: 2 }}>482 Foundation Stream</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>2-year visa</div>
              </div>
              <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: `1px solid ${BORDER}` }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>Small business</div>
                    <div style={{ fontSize: 12, color: '#9ca3af' }}>Turnover under $10 million</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: ACCENT }}>$2,400 total</div>
                    <div style={{ fontSize: 12, color: '#9ca3af' }}>$1,200 × 2 years</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>Standard business</div>
                    <div style={{ fontSize: 12, color: '#9ca3af' }}>Turnover $10 million or more</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: ACCENT }}>$3,600 total</div>
                    <div style={{ fontSize: 12, color: '#9ca3af' }}>$1,800 × 2 years</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 186 ENS */}
            <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${BORDER}`, overflow: 'hidden' }}>
              <div style={{ background: NAVY, padding: '16px 24px' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: 2 }}>186 Employer Nomination Scheme</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>Permanent residence</div>
              </div>
              <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: `1px solid ${BORDER}` }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>Small business</div>
                    <div style={{ fontSize: 12, color: '#9ca3af' }}>Turnover under $10 million</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: NAVY }}>$5,000 flat</div>
                    <div style={{ fontSize: 12, color: '#9ca3af' }}>One-time payment</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>Standard business</div>
                    <div style={{ fontSize: 12, color: '#9ca3af' }}>Turnover $10 million or more</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: NAVY }}>$7,000 flat</div>
                    <div style={{ fontSize: 12, color: '#9ca3af' }}>One-time payment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p style={{ fontSize: 13, fontStyle: 'italic', color: '#9ca3af', marginTop: 24 }}>
            Figures current at August 2026 — confirm on the Department of Home Affairs website before lodging.
          </p>
        </div>
      </section>

      {/* Payment */}
      <section id="payment" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Payment" title="How and When to Pay" accent={ACCENT}
            intro="The SAF Levy is paid in full at the time of nomination lodgement. There is no option to pay in instalments or defer payment." />
          <StepTimeline steps={STEPS} variant="cards" accent={ACCENT} />
          <Callout variant="note" title="Employer cannot pass this cost to the visa holder">
            Under the Migration Act, an approved sponsor is legally prohibited from transferring or recovering the SAF Levy from the visa holder or any related person. Attempting to do so may result in sponsor sanctions or cancellation.
          </Callout>
        </div>
      </section>

      {/* Exemptions */}
      <section id="exemptions" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Exemptions" title="SAF Levy Exemptions" accent={ACCENT}
            intro="A limited number of nomination categories are exempt from the SAF Levy obligation." />
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              'Nominations by non-profit organisations approved as exempt by the Department',
              'Certain Pacific Australia Labour Mobility (PALM) scheme nominations',
              'Some government agency nominations',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '16px 20px', background: '#fff', borderRadius: 10, border: `1px solid ${BORDER}` }}>
                <div style={{ flexShrink: 0, marginTop: 2 }}>
                  <Icon name="check" size={18} color={ACCENT} />
                </div>
                <span style={{ fontSize: 15, color: '#374151', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, padding: '16px 20px', background: `${ACCENT}0d`, borderRadius: 10, border: `1px solid ${ACCENT}30` }}>
            <p style={{ fontSize: 14, color: '#374151', margin: 0, lineHeight: 1.65 }}>
              <strong>Note:</strong> Exemption eligibility is assessed by the Department of Home Affairs. Do not assume an exemption applies without confirming with the Department or a registered migration agent (MARN 2619467).
            </p>
          </div>
        </div>
      </section>

      {/* Refunds */}
      <section id="refunds" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Refunds" title="SAF Levy Refunds" accent={ACCENT}
            intro="The SAF Levy refund rules are narrow. Employers should understand these rules before lodging." />
          <Callout variant="warning" title="The SAF Levy is generally non-refundable">
            If a nomination is withdrawn or refused, the SAF Levy is generally not refundable unless specific circumstances apply (such as a technical error by the Department). The visa application charge (VAC) is a separate fee and has its own refund rules. Confirm current refund conditions on the Department of Home Affairs website before lodging.
          </Callout>
          <div style={{ marginTop: 24, padding: '20px 24px', background: GREY_BG, borderRadius: 12, border: `1px solid ${BORDER}` }}>
            <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 8 }}>Circumstances where a refund may be available</div>
            <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                'Nomination withdrawn before the Department begins processing',
                'Departmental administrative error in processing the nomination',
                'Other limited circumstances prescribed by the relevant legislative instrument',
              ].map(item => (
                <li key={item} style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="FAQ" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Related guides" title="You may also be interested in" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand
        title="Questions about the SAF Levy for your nomination?"
        body="As a registered migration agent (MARN 2619467), Nanak Migration Group can calculate your SAF Levy obligations and manage the nomination process on your behalf."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
