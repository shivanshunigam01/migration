import React from 'react'
import { GOLD, NAVY, NAVY_DARK } from '@/theme'
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

const CURRENT_AS_AT = 'August 2026'
const CAT_STUDENT = '#0369a1'
const ACCENT = CAT_STUDENT
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'funds-required', label: 'Funds required' },
  { id: 'acceptable-evidence', label: 'Acceptable evidence' },
  { id: 'genuine-access', label: 'Genuine access to funds' },
  { id: 'common-refusals', label: 'Common refusal reasons' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  { icon: 'dollar', value: 'AUD 29,710', label: 'Annual living costs (from 10 May 2024)', note: 'Indexed annually. Confirm current figure on the Department of Home Affairs website before applying. Does not include course fees or travel.' },
  { icon: 'dollar', value: 'AUD 10,394', label: 'Additional amount for a spouse or partner', note: 'Per year. Figures current at August 2026 — confirm on DoHA website. School costs for dependent children are additional.' },
  { icon: 'calendar', value: '3+ months', label: 'Minimum period funds must be held', note: 'Bank account balances must generally be held for at least 3 consecutive months prior to the visa application to demonstrate genuine access.' },
  { icon: 'dollar', value: 'AUD 87,856', label: 'Annual parental income option', note: 'If a parent or guardian earns at least this amount per year (before tax), this may be used as evidence of financial capacity in place of held funds.' },
]

const FAQ: FaqItem[] = [
  {
    question: "Do I need to show funds in my own bank account, or can my parents' account be used?",
    answer: "Funds in a parent's or guardian's account can be used as evidence, provided there is documentation showing the parent's intention to support your study and their capacity to do so. Typically this means providing the parent's bank statements (with the funds held for at least 3 months) together with a sponsor letter. Alternatively, if a parent earns at least AUD 87,856 per year (before tax), their income can be used as evidence in place of held funds — subject to documentary verification. All figures are current at August 2026 — confirm on the Department of Home Affairs website.",
  },
  {
    question: "Do I need to show funds for the full duration of my course?",
    answer: "You need to demonstrate sufficient funds for your first year of study (living costs + course fees + travel), not necessarily for the entire course. However, if your course is more than one year, some assessors will consider whether your demonstrated financial capacity is plausible for the full duration. A scholarship or ongoing parental income can help establish longer-term capacity without requiring large held savings for every year.",
  },
  {
    question: "Does a scholarship reduce how much I need to show?",
    answer: "Yes. If your scholarship covers tuition fees, the funds evidence requirement is reduced by the covered tuition amount. If the scholarship also covers living costs (e.g. a stipend), this further reduces the requirement. You should include the scholarship letter as part of your financial evidence package and ensure it clearly states the amount, duration, and what it covers.",
  },
  {
    question: "My family has assets (property, business) but not liquid savings — can I use those?",
    answer: "The Department generally requires evidence of liquid or accessible funds — not illiquid assets such as property or shares that are not easily convertible. A property valuation or business asset does not itself demonstrate financial capacity. If the family's liquid savings are insufficient, consider whether a bank loan, education loan, or parental income option is more appropriate. An agent can advise on the best evidential approach for your circumstances.",
  },
  {
    question: "If my financial situation changes after I lodge, will this affect my visa?",
    answer: "Yes. The Department assesses financial capacity at the time of decision, not just at lodgement. If your financial position deteriorates significantly after lodging — for example, if the bank account from which you demonstrated capacity is significantly drawn down — this could affect the decision. If your circumstances change materially after lodging, seek advice from your migration agent promptly.",
  },
  {
    question: "Can a refusal based on financial capacity be reviewed?",
    answer: "A refusal of a student visa may be reviewable at the Administrative Review Tribunal (ART), subject to meeting the review criteria and strict deadlines (generally 21 days from notification of the decision). Review rights vary depending on the basis of refusal and your circumstances. If your visa is refused, seek advice from a registered migration agent immediately — do not wait, as appeal windows are short.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Student Visa (Subclass 500)', desc: 'Full overview of the 500 student visa — conditions, work rights, and genuine student requirement.', icon: 'bookopen', page: 'student-visa-500', color: CAT_STUDENT },
  { title: 'Student Visas Hub', desc: 'Overview of all student visa options and pathways to study in Australia.', icon: 'graduationcap', page: 'student-visas', color: CAT_STUDENT },
  { title: 'Genuine Student Requirement', desc: 'The Genuine Student requirement — what it is and what the Department assesses.', icon: 'check', page: 'genuine-student-requirement', color: CAT_STUDENT },
  { title: 'Student to PR Pathway', desc: 'Step-by-step guide from student visa to permanent residence in Australia.', icon: 'arrowright', page: 'student-to-pr-pathway', color: CAT_STUDENT },
]

const EVIDENCE_CARDS = [
  {
    icon: 'building',
    title: 'Personal or family bank account statements',
    desc: "Statements showing the required funds held in your name (or a family member's name) for at least 3 consecutive months before lodging. The account must show regular activity — a large deposit immediately before the application period without prior history may be questioned.",
    note: "Most reliable type of evidence. The 3-month hold period is not an absolute legal requirement but is a strong indicator of genuine access that assessors look for.",
  },
  {
    icon: 'star',
    title: 'Australian government or institutional scholarship letters',
    desc: "A scholarship covering tuition and/or living costs from an Australian government program, the Australian Awards program, or a recognised educational institution. The scholarship letter must state the amount, duration, and what it covers.",
    note: "A scholarship that covers full tuition and living allowance significantly reduces (or eliminates) the funds evidence required for the covered components.",
  },
  {
    icon: 'clipboard',
    title: 'Approved education loan documentation',
    desc: "A loan from a financial institution that is specifically for educational purposes — showing the loan amount, terms, and that funds are available for use in Australia. The loan must be from an institution recognised by the Department.",
    note: "The loan must be genuine and the repayment terms must be consistent with your apparent financial situation. An education loan from an unrecognised or informal source may not be accepted.",
  },
  {
    icon: 'dollar',
    title: 'Parental or guardian annual income statement',
    desc: "If your parent or guardian earns at least AUD 87,856 per year (before tax), this can be used as evidence of financial capacity in place of held funds. Evidence typically includes tax returns, employment contracts, or payslips. Figures current at August 2026 — confirm on DoHA website.",
    note: "This option is particularly useful for applicants whose parents have high incomes but who have not yet accumulated personal savings.",
  },
  {
    icon: 'briefcase',
    title: 'Sponsor (non-parental) support letter and evidence',
    desc: "If a sponsor other than a parent or guardian (e.g. an employer, government body, or other organisation) is supporting your study financially, you will need both a sponsor letter and evidence of the sponsor's capacity to fund the stated amount.",
    note: "Third-party sponsor support is subject to higher scrutiny — the Department will assess whether the sponsor's capacity is genuine and the arrangement is credible.",
  },
]

const GENUINE_ACCESS_FLAGS = [
  {
    title: 'Large, unexplained deposits immediately before the application',
    desc: "A bank account showing a single large deposit shortly before the application period, with no prior history of such balances, will often be questioned by assessors. This pattern suggests the funds may not be genuinely available long-term.",
  },
  {
    title: "Funds in a third party's account you cannot access",
    desc: "If the funds are in a family member's account but the account holder has not provided consent and evidence of their willingness to make the funds available, genuine access may not be established.",
  },
  {
    title: 'Funds that are pledged elsewhere',
    desc: "If the same funds are used to demonstrate capacity for multiple applications (e.g. by different family members), or if the funds are subject to liens or encumbrances, genuine access is not established.",
  },
  {
    title: 'Inconsistency between stated financial situation and broader circumstances',
    desc: "If your stated financial capacity is inconsistent with your sponsor's apparent income, occupation, or assets, the Department may find the evidence not credible. Financial evidence is assessed in context.",
  },
]

const REFUSAL_REASONS = [
  {
    title: 'Insufficient funds',
    desc: "The total funds demonstrated do not cover the required living costs + course fees + travel costs for the duration of study. A common error is demonstrating living costs but forgetting to account for full course fees.",
  },
  {
    title: 'Funds held for less than 3 months',
    desc: "Bank statements showing a large balance for only a short period (e.g. less than 3 months) before lodging, with a prior balance well below the required amount, may not be accepted as evidence of genuine access.",
  },
  {
    title: 'Unexplained source of funds',
    desc: "Where the funds appear to have been deposited from an unknown source in a single transaction shortly before the application, the Department may request an explanation of the source. An inability to explain the source adequately may result in the financial evidence being disregarded.",
  },
  {
    title: 'Parental income not in approved form',
    desc: "Parental income evidence that is informal (e.g. a letter from an employer without payslips or tax returns), or that does not clearly show the gross annual income, may not meet the standard required.",
  },
  {
    title: 'School costs for children not accounted for',
    desc: "Applicants who include school-age children as secondary applicants but fail to account for the schooling cost component of financial capacity. Each school-age child requires evidence of additional funds to cover schooling costs (approximately AUD 8,000 per year — verify on DoHA website).",
  },
]

const FEE_ROWS = [
  { component: 'Primary applicant living costs', amount: 'AUD 29,710 per year (from 10 May 2024, indexed)' },
  { component: 'Spouse or de facto partner', amount: 'AUD 10,394 per year additional' },
  { component: 'Each dependent child (under 18)', amount: 'AUD 4,449 per year additional' },
  { component: 'School costs for each school-age child', amount: 'Approximately AUD 8,000 per year (varies by state — check DoHA)' },
  { component: 'Course fees', amount: 'Full annual tuition as stated in your Confirmation of Enrolment (CoE)' },
  { component: 'Travel costs', amount: 'Return airfare to Australia for you and any secondary applicants (actual cost estimate)' },
]

export default function StudentFinancialCapacityPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['student-financial-capacity'].title }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Student Visas', url: 'https://www.nanakmigration.com.au/student-visas' },
          { name: 'Financial Capacity for Student Visas', url: 'https://www.nanakmigration.com.au/student-financial-capacity' },
        ]}
        faqs={FAQ}
        service={{ name: 'Financial Capacity for Student Visas', description: PAGE_META['student-financial-capacity'].metaDescription, url: 'https://www.nanakmigration.com.au/student-financial-capacity' }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Student Visas', page: 'student-visas' },
        { label: 'Financial Capacity for Student Visas' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Student Visa"
        eyebrowSub="Subclass 500 · Financial Capacity"
        title={<>Financial Capacity for Student Visas<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Funds Evidence Required for the Subclass 500</em></>}
        deck="The subclass 500 student visa requires evidence that you can meet your living costs, tuition fees, and travel costs while studying in Australia. The Department assesses financial capacity as part of the Genuine Student requirement — and insufficient or unreliable evidence is a common reason for refusal."
        shortAnswer={<>The minimum living costs component for the subclass 500 is <strong style={{ color: NAVY }}>AUD 29,710 per year</strong> (from 10 May 2024, indexed annually), plus course fees and travel costs. If you are bringing a spouse or partner, add <strong style={{ color: NAVY }}>AUD 10,394</strong>. For each dependent child, add <strong style={{ color: NAVY }}>AUD 4,449</strong>, plus school costs. These figures are indexed and may have been updated — <strong style={{ color: NAVY }}>always confirm current amounts on the Department of Home Affairs website before applying</strong>. Acceptable evidence includes funds held in a bank account for at least 3 months, education loans from approved institutions, scholarships, or evidence that a parent or guardian earns at least AUD 87,856 per year. Nanak Migration Group, a registered migration agent (MARN 2619467), can review your financial evidence before you lodge.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Student visa overview →', page: 'student-visa-500' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>

      {/* TOC bar */}
      <div style={{ borderTop: '1px solid #e8edf6', borderBottom: '1px solid #e8edf6', background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 4, overflowX: 'auto', scrollbarWidth: 'none' as const }}>
          {TOC.map(sec => (
            <a key={sec.id} href={`#${sec.id}`}
              style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap' as const, borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}
            >{sec.label}</a>
          ))}
        </div>
      </div>

      {/* Key Facts */}
      <div id="overview">
        <KeyFactsStrip facts={FACTS} accent={ACCENT} />
      </div>

      {/* Section: Overview */}
      <section style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="The requirement" title="Financial Capacity — What the Department Is Assessing" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, marginBottom: 28 }}>
            The subclass 500 student visa requires the applicant to demonstrate financial capacity — the ability to meet their living costs, course fees, and travel costs for the duration of their study. The Department assesses financial capacity as part of the broader Genuine Student requirement. An applicant who cannot demonstrate sufficient, genuine financial capacity may be refused on the grounds that they do not satisfy the financial requirement, or that the financial evidence undermines their genuine student status.
          </p>
          <Callout variant="note" panel={true} title="Financial capacity is assessed at the time of decision, not just at lodgement">
            You should ensure your financial evidence is current at the time the Department makes a decision on your application — not just at the time you lodge. If your bank balance falls significantly between lodgement and decision, this may affect the outcome. Providing evidence of ongoing income (e.g. salary statements, scholarship letters) can help demonstrate sustained capacity.
          </Callout>
        </div>
      </section>

      {/* Section: Funds required */}
      <section id="funds-required" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Amounts" title="How Much Money Do You Need?" accent={ACCENT} />
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: 'hidden', marginBottom: 28 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: ACCENT, padding: '12px 20px' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Component</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Amount per year</div>
            </div>
            {FEE_ROWS.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '14px 20px', background: i % 2 === 0 ? '#ffffff' : '#fafbfe', borderTop: `1px solid ${BORDER}` }}>
                <div style={{ fontSize: 13.5, color: NAVY, fontWeight: 500 }}>{row.component}</div>
                <div style={{ fontSize: 13.5, color: '#374151' }}>{row.amount}</div>
              </div>
            ))}
          </div>
          <Callout variant="warning" panel={true} title="These figures are indexed and may have changed">
            The living costs figures are indexed annually by the Department of Home Affairs. The amounts stated above (AUD 29,710 / AUD 10,394 / AUD 4,449) applied from 10 May 2024. Confirm the current figures on the Department of Home Affairs website before preparing your financial evidence or lodging your application. Nanak Migration Group (MARN 2619467) will always verify current figures before advising clients on financial preparation.
          </Callout>
        </div>
      </section>

      {/* Section: Acceptable evidence */}
      <section id="acceptable-evidence" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading kicker="Evidence types" title="Acceptable Evidence of Financial Capacity" accent={ACCENT} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {EVIDENCE_CARDS.map((card, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, background: '#ffffff', display: 'flex', flexDirection: 'column' as const, gap: 0 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={card.icon} size={18} color={ACCENT} />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, paddingTop: 6, lineHeight: 1.3 }}>{card.title}</div>
                </div>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.75, margin: '0 0 12px' }}>{card.desc}</p>
                <div style={{ fontSize: 12.5, color: '#6b7280', lineHeight: 1.65, borderTop: `1px solid ${BORDER}`, paddingTop: 10, marginTop: 'auto' }}>
                  {card.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Genuine access */}
      <section id="genuine-access" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Scrutiny" title="Genuine Access to Funds — What This Means" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, marginBottom: 28 }}>
            The Department does not only look at whether the required amount is in an account — it assesses whether you have genuine access to the funds and whether the financial situation is consistent with the broader application. "Genuine access" means the money is actually available to you for your study costs, not merely deposited temporarily to meet the requirement.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {GENUINE_ACCESS_FLAGS.map((flag, i) => (
              <div key={i} style={{ borderLeft: '3px solid #dc2626', padding: '14px 20px', marginBottom: 0, background: '#fff5f5', borderRadius: 8 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#991b1b', marginBottom: 6 }}>{flag.title}</div>
                <div style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.7 }}>{flag.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Common refusals */}
      <section id="common-refusals" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Pitfalls" title="Common Financial Evidence Refusal Reasons" accent={ACCENT} />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {REFUSAL_REASONS.map((reason, i) => (
              <div key={i} style={{ background: GREY_BG, border: `1px solid ${BORDER}`, padding: 20, borderRadius: 12 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: `${ACCENT}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 13, fontWeight: 800, color: ACCENT, marginTop: 1 }}>
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{reason.title}</div>
                    <div style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.75 }}>{reason.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: FAQ */}
      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Section: Related */}
      <section id="related" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Review your financial evidence before lodging"
        body="Nanak Migration Group (MARN 2619467) reviews financial evidence packages for student visa applications to identify gaps before you lodge."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
