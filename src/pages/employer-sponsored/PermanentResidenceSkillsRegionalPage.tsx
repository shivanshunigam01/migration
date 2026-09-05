import React from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_EMPLOYER } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  KeyFactsStrip,
  SectionHeading,
  StepTimeline,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  ComplianceDisclaimer,
  Callout,
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
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'income-requirement', label: 'Income requirement' },
  { id: 'process', label: 'How to apply' },
  { id: 'fees', label: 'Fees' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const KEY_FACTS: KeyFact[] = [
  {
    icon: 'calendar',
    value: '3 years',
    label: 'Qualifying period in a regional area',
    note: 'You must have lived and worked in a designated regional area for at least 3 years while holding a 491 or 494 visa.',
  },
  {
    icon: 'dollar',
    value: '$53,900 p.a.',
    label: 'Income requirement (from 1 July 2025)',
    note: 'Your annual income must have met this threshold for at least 3 of the past 5 years. The threshold is indexed annually. Figures current at August 2026 — confirm on DoHA website.',
  },
  {
    icon: 'shield',
    value: 'Permanent',
    label: 'Direct permanent residence',
    note: 'The 191 grants permanent residence from the date of grant — no further provisional stage.',
  },
  {
    icon: 'flag',
    value: 'No sponsor needed',
    label: 'No employer sponsorship at 191 stage',
    note: 'Unlike the 494, the 191 does not require employer involvement. Eligibility is based on meeting the qualifying period and income conditions.',
  },
]

const STEPS: TimelineStep[] = [
  {
    code: '01',
    title: 'Confirm your qualifying period',
    desc: 'Verify that you have held a 491 or 494 visa for at least three years and have lived and worked in a designated regional area for that period. Check your travel history — time outside Australia may not count toward the qualifying period.',
  },
  {
    code: '02',
    title: 'Gather income evidence',
    desc: 'Obtain ATO Notices of Assessment for each income year in your qualifying period. Confirm that your taxable income met the income threshold for at least three years.',
  },
  {
    code: '03',
    title: 'Confirm regional area compliance',
    desc: 'Your residential address and place of work during the qualifying period must be in a designated regional area. Compile evidence of your address (e.g. utility bills, lease agreements) and employment location (e.g. payslips, employer letters).',
  },
  {
    code: '04',
    title: 'Lodge the 191 application',
    desc: 'Submit the subclass 191 application through ImmiAccount with all supporting evidence. Health examinations are required. Character requirements (including a police clearance for time spent in Australia) apply.',
  },
  {
    code: '05',
    title: 'Visa grant — permanent residence',
    desc: 'Once approved, you receive permanent residence from the date of grant. No further qualifying conditions apply after grant — you are free to live, work and study anywhere in Australia.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'Can I apply for the 191 before three years have passed?',
    answer: 'No. The three-year qualifying period must be completed before you can lodge a subclass 191 application. Applications lodged before the qualifying period is complete will not meet the time requirement. You should begin planning your 191 application several months before the three-year mark to ensure all income records and evidence are in order.',
  },
  {
    question: 'Does time outside Australia count toward the three-year period?',
    answer: 'Time spent outside Australia generally does not count toward the three-year regional living and working requirement. You should minimise extended absences during your qualifying period and keep records of all travel. If you have spent extended periods overseas, seek advice on whether your qualifying period is affected.',
  },
  {
    question: 'What if my income did not meet the threshold in one year?',
    answer: 'The income requirement must be met for at least three of the five years before you apply — not necessarily all three years of your qualifying period. If your income fell below the threshold in one year, you may still be eligible provided you met the threshold in at least three other years in the five-year window.',
  },
  {
    question: 'Can my family members be included in a 191 application?',
    answer: 'Yes. Secondary applicants — your spouse or de facto partner and dependent children — can be included in your subclass 191 application. They will receive permanent residence on grant. Each secondary applicant must meet health and character requirements.',
  },
  {
    question: 'Do I need a new employer to sponsor me for the 191?',
    answer: 'No. Unlike the subclass 494 (which requires employer sponsorship), the subclass 191 does not require employer involvement. Eligibility is based solely on meeting the qualifying period, income, and compliance conditions. Your employer does not need to lodge any documentation for the 191 application.',
  },
]

const RELATED: RelatedPage[] = [
  {
    title: '494 Regional Employer Sponsored',
    desc: '5-year provisional visa for employer-sponsored workers in designated regional areas — the most common pathway to the 191.',
    icon: 'briefcase',
    page: '494-visa',
    color: CAT_EMPLOYER,
  },
  {
    title: 'Skilled Work Regional (491)',
    desc: 'Points-tested provisional visa for regional areas — also a pathway to the subclass 191.',
    icon: 'flag',
    page: 'skilled-work-regional-491',
    color: CAT_EMPLOYER,
  },
  {
    title: 'Employer Nomination Scheme (186)',
    desc: 'Alternative permanent residence pathway via employer nomination for 482 holders.',
    icon: 'award',
    page: 'employer-nomination-scheme',
    color: CAT_EMPLOYER,
  },
  {
    title: 'Australian Citizenship',
    desc: 'After permanent residence is granted, citizenship eligibility begins.',
    icon: 'flag',
    page: 'australian-citizenship',
    color: CAT_EMPLOYER,
  },
]

const ELIGIBILITY_ITEMS = [
  {
    heading: 'Hold a subclass 491 or 494 visa',
    body: 'You must currently hold a valid subclass 491 (Skilled Work Regional) or subclass 494 (Employer Sponsored Regional) visa at the time of application. The 191 is not available to other temporary visa holders.',
  },
  {
    heading: 'Three years in a designated regional area',
    body: 'You must have resided and worked in a designated regional area of Australia for at least three years during the qualifying period. Regional areas for the 191 are determined by the same regional definitions as the 491 and 494 visas.',
  },
  {
    heading: 'Income requirement met for three years',
    body: 'Your taxable income must have met the income threshold (currently $53,900 p.a. from 1 July 2025, indexed annually) for at least three of the five years before you apply. Evidence includes ATO notices of assessment or income statements. Figures current at August 2026.',
  },
  {
    heading: 'No Australian criminal convictions',
    body: 'You must not have been convicted of a criminal offence in Australia during the qualifying period.',
  },
  {
    heading: 'Visa condition compliance',
    body: 'You must have complied with the conditions of your subclass 491 or 494 visa throughout the qualifying period. Breaches of visa conditions may affect eligibility.',
  },
]

const FEE_ROWS = [
  { label: 'Visa Application Charge — primary applicant', value: 'Approximately $4,640' },
  { label: 'Secondary applicant over 18', value: 'Approximately $2,320' },
  { label: 'Secondary applicant under 18', value: 'Approximately $1,155' },
]

export default function PermanentResidenceSkillsRegionalPage({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: 'Permanent Residence (Skilled Regional) 191', url: 'https://www.nanakmigration.com.au/191-visa' },
        ]}
        faqs={FAQ}
        service={{
          name: 'Permanent Residence (Skilled Regional) Subclass 191',
          description: PAGE_META['191-visa'].metaDescription,
          url: 'https://www.nanakmigration.com.au/191-visa',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Employer Sponsored Visas', page: 'employer-sponsored-visas' },
          { label: 'Permanent Residence (Skilled Regional) — 191' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Subclass 191"
        eyebrowSub="Permanent Residence (Skilled Regional)"
        title={<>Permanent Residence<br /><em style={{ fontStyle: 'italic', color: GOLD }}>(Skilled Regional) — Subclass 191</em></>}
        deck="The subclass 191 Permanent Residence (Skilled Regional) visa provides a pathway to permanent residence for holders of a subclass 491 or subclass 494 visa who have lived, worked, and met income requirements in a designated regional area of Australia for at least three years."
        shortAnswer={<>To be eligible for the subclass 191, you must currently hold a subclass 491 or 494 visa, have lived and worked in a designated regional area of Australia for at least three years, and have met the income threshold (currently <strong style={{ color: NAVY }}>$53,900 per annum</strong> from 1 July 2025, indexed annually) for at least three of the past five years. You must not have had any criminal convictions in Australia during the qualifying period and must have complied with your visa conditions. No employer sponsorship is required at this stage. Nanak Migration Group, a registered migration agent (MARN 2619467), can assess whether your qualifying period and income records meet the current requirements.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '494 Regional Employer Sponsored →', page: '494-visa' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>

      {/* On-this-page bar */}
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

      {/* Overview — Key Facts */}
      <div id="overview">
        <KeyFactsStrip facts={KEY_FACTS} accent={ACCENT} />
      </div>

      {/* Eligibility */}
      <section id="eligibility" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Who can apply" title="Subclass 191 Eligibility Requirements" accent={ACCENT} />
          <div style={{ marginTop: 32 }}>
            {ELIGIBILITY_ITEMS.map((item, i) => (
              <div
                key={i}
                style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 20, marginBottom: 16 }}
              >
                <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{item.heading}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Income requirement */}
      <section id="income-requirement" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Income evidence" title="Meeting the Income Requirement" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, marginTop: 24, marginBottom: 28 }}>
            The income requirement must be met for at least three of the five years before you apply for the subclass 191. The Department will assess your taxable income, which is broadly your gross income less allowable deductions as reported to the ATO.
          </p>
          <div style={{ marginBottom: 20 }}>
            <Callout variant="note" title="What counts as income" panel={true}>
              Taxable income for the 191 income requirement is based on your Australian Tax Office (ATO) income, as shown on your Notice of Assessment for each income year. This includes wages and salary, rental income, business income, and other assessable amounts. Non-assessable income (e.g. some government payments) generally does not count. Maintain ATO records carefully throughout your qualifying period.
            </Callout>
          </div>
          <Callout variant="warning" title="Income threshold is indexed annually" panel={true}>
            The income threshold is indexed each year on 1 July. The figure of $53,900 applies from 1 July 2025 and may be updated. Always confirm the current threshold on the Department of Home Affairs website before applying.
          </Callout>
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Application" title="How to Apply for the Subclass 191" accent={ACCENT} />
          <div style={{ marginTop: 40 }}>
            <StepTimeline steps={STEPS} variant="cards" accent={ACCENT} />
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Costs" title="Subclass 191 Application Fees" accent={ACCENT} />
          <div style={{ marginTop: 32, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden' }}>
            {FEE_ROWS.map((row, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 24px',
                  background: i % 2 === 0 ? '#fff' : GREY_BG,
                  borderBottom: i < FEE_ROWS.length - 1 ? `1px solid ${BORDER}` : 'none',
                  gap: 24,
                }}
              >
                <span style={{ fontSize: 14, color: NAVY, fontWeight: 500 }}>{row.label}</span>
                <span style={{ fontSize: 14, color: ACCENT, fontWeight: 700, whiteSpace: 'nowrap' as const }}>{row.value}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
              <Icon name="info" size={14} color={ACCENT} />
              <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.65, margin: 0 }}>
                Figures current at August 2026 — confirm on the Department of Home Affairs website before lodging.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <Icon name="info" size={14} color={ACCENT} />
              <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.65, margin: 0 }}>
                Professional fees: Nanak Migration Group provides a fixed-fee quote after assessing each matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <div style={{ marginTop: 32 }}>
            <FaqAccordion items={FAQ} accent={ACCENT} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={ACCENT} />
          <div style={{ marginTop: 32 }}>
            <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Preparing your subclass 191 application"
        body="Nanak Migration Group (MARN 2619467) can review your income records, regional compliance history, and visa conditions to assess whether you are ready to apply."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
