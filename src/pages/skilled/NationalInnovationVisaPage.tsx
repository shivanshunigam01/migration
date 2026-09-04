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
const ACCENT = NAVY
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

/* ─── On-this-page ─── */
const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'fields', label: 'Eligible fields' },
  { id: 'nomination', label: 'Nomination' },
  { id: 'process', label: 'Application process' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

/* ─── Key facts ─── */
const FACTS: KeyFact[] = [
  { icon: 'shield', value: 'Permanent', label: 'Visa type', note: 'The subclass 858 grants permanent residence from the date of grant.' },
  { icon: 'star', value: 'No points test', label: 'No age or points requirement', note: 'The 858 is assessed on exceptional achievement — not age, points, or skills assessments.' },
  { icon: 'user', value: 'Nomination required', label: 'Must be nominated by an eligible nominator', note: 'Your nominator must be an Australian citizen, PR holder, eligible NZ citizen, or Australian organisation with a national reputation in the relevant field.' },
  { icon: 'flag', value: 'Invitation-based', label: 'Expression of interest required', note: 'You must submit an EOI and receive an invitation to apply before lodging a subclass 858 application.' },
]

/* ─── Step timeline ─── */
const STEPS: TimelineStep[] = [
  {
    code: '01',
    title: 'Prepare evidence of exceptional achievement',
    desc: "Compile documentation of your achievements: international awards and prizes, peer-reviewed publications and citation records, media coverage, critical reviews, competition results, rankings, patents, or venture documentation. The evidence must be independently verifiable and internationally relevant.",
  },
  {
    code: '02',
    title: 'Identify and engage a nominator',
    desc: "Identify an eligible nominator — an Australian citizen, PR, eligible NZ citizen, or Australian organisation with a national reputation in your field. The nominator submits a formal nomination letter setting out your achievements and why you meet the exceptional threshold.",
  },
  {
    code: '03',
    title: 'Submit an Expression of Interest',
    desc: "Submit your EOI through the Department of Home Affairs portal. Your EOI sets out your field of exceptional achievement, your nominator's details, and the key evidence of your outstanding record. Priority consideration is given to candidates in certain technology and research fields.",
  },
  {
    code: '04',
    title: 'Receive an invitation to apply',
    desc: "If your EOI is competitive, you will receive an invitation to apply for the subclass 858 visa. The invitation is not a grant of the visa — you must then lodge a full application within the timeframe specified in the invitation.",
  },
  {
    code: '05',
    title: 'Lodge the visa application',
    desc: "Lodge the subclass 858 application with full evidence of your achievements, the nomination, health examinations, and character documentation for yourself and any secondary applicants. The Department will assess your application against the exceptional and outstanding threshold.",
  },
  {
    code: '06',
    title: 'Visa decision',
    desc: "If approved, the subclass 858 grants permanent residence from the date of decision. You are free to live, work, and study anywhere in Australia. Secondary applicants (your partner and dependent children) receive the same visa.",
  },
]

/* ─── FAQ ─── */
const FAQ: FaqItem[] = [
  {
    question: 'How does the subclass 858 differ from the points-tested 189 or 190 visa?',
    answer: "The subclass 189 and 190 visas are points-tested — eligibility depends on your points score for age, English, work experience, qualifications, and other factors, as assessed against the current invitation cutoffs. The subclass 858 has no points test. Eligibility is based entirely on the quality and international standing of your achievements in an eligible field. This means the 858 can be accessible to individuals who would not score competitively under the points test — but the exceptional achievement threshold is high and is assessed qualitatively by the Department.",
  },
  {
    question: "How recent do my achievements need to be?",
    answer: "There is no fixed recency requirement for subclass 858 achievements. Past achievements of enduring significance — such as a Nobel Prize, an Olympic medal, or a body of widely-cited research — continue to count. However, more recent evidence of ongoing contribution to the field generally strengthens a 858 application. The Department considers the totality of your record, not just recent activity.",
  },
  {
    question: "Can I nominate myself, or do I need someone else to nominate me?",
    answer: "You cannot nominate yourself for the subclass 858. The nomination must come from an eligible third party — an Australian citizen, permanent resident, eligible NZ citizen, or Australian organisation with a national reputation in the relevant field. The nominator must be a genuine peer or authority who can independently attest to your achievements and standing.",
  },
  {
    question: "What evidence is typically required?",
    answer: "Evidence varies by field but typically includes: for academia — peer-reviewed publications, citation counts (e.g. h-index), grant records, and awards; for sport — competition results, world rankings, and coaching appointments; for the arts — critical reviews, awards, major commissions, and exhibition or performance records; for technology — patents, venture documentation, and recognition in global technology forums or publications. Evidence must be independently verifiable and demonstrably international in scope.",
  },
  {
    question: "Does holding a subclass 858 lead to citizenship?",
    answer: "Yes. Like other permanent residence visas, the subclass 858 counts toward the four-year lawful residence requirement for Australian citizenship by conferral. Of that four years, the final twelve months must be as a permanent resident. Meeting the residence requirement does not automatically confer citizenship — an application must be lodged and approved.",
  },
]

/* ─── Related pages ─── */
const RELATED: RelatedPage[] = [
  { title: 'Skilled Migration (hub)', desc: 'Overview of all points-tested and skilled visa pathways.', icon: 'star', page: 'skilled-migration', color: NAVY },
  { title: 'Skilled Independent (189)', desc: 'Points-tested permanent residence without a sponsor.', icon: 'shield', page: 'skilled-independent-189', color: NAVY },
  { title: 'SkillSelect and EOI', desc: 'How Expressions of Interest and invitation rounds work for the 189, 190 and 491.', icon: 'clipboard', page: 'skillselect-eoi', color: NAVY },
  { title: 'Australian Citizenship', desc: 'Requirements to become an Australian citizen after permanent residence.', icon: 'flag', page: 'australian-citizenship', color: NAVY },
]

/* ─── Eligible fields data ─── */
const ELIGIBLE_FIELDS = [
  {
    icon: 'bookopen',
    heading: 'Academia and Research',
    body: "Researchers, scientists, and academics with an internationally recognised body of work — typically demonstrated by peer-reviewed publications, citations, research grants, or awards of international standing. The impact of the research, not merely its volume, is assessed.",
  },
  {
    icon: 'star',
    heading: 'Sport',
    body: "Elite athletes and sporting coaches or officials with an internationally recognised record at the highest level of their sport — typically demonstrated by international competition representation, world rankings, or elite-level coaching appointments. Past and current achievements are both assessed.",
  },
  {
    icon: 'heart',
    heading: 'The Arts',
    body: "Artists, performers, writers, musicians, filmmakers, and other creative practitioners with an internationally recognised body of work — demonstrated by critical recognition, major awards, prestigious commissions, or representation in international venues and publications.",
  },
  {
    icon: 'layers',
    heading: 'Innovative Technology',
    body: "Technology entrepreneurs, inventors, and technical leaders with an internationally recognised record of innovation — demonstrated by patents of international significance, recognition in global technology awards, leadership of ventures with international traction, or pioneering contributions to emerging technology fields.",
  },
]

/* ─── Eligibility rows ─── */
const ELIGIBILITY_ROWS = [
  {
    heading: 'Exceptional and outstanding achievement',
    body: "You must have an internationally recognised record of exceptional and outstanding achievement in your field. This is a high threshold — isolated or localised recognition is unlikely to be sufficient. The Department looks for achievements that distinguish you from other highly capable practitioners globally.",
  },
  {
    heading: 'Eligible field',
    body: "Your achievements must be in one of the four eligible fields: academia and research; sport; the arts; or innovative technology sectors. Achievements in multiple fields may be combined if they relate to a coherent body of work.",
  },
  {
    heading: 'Nomination',
    body: "You must be nominated by an eligible nominator: an Australian citizen, Australian permanent resident, eligible New Zealand citizen, or an Australian organisation with a national reputation in the relevant field. A nominator does not sponsor you in the employer sense — they provide a formal nomination letter attesting to your achievements and reputation.",
  },
  {
    heading: 'Expression of interest and invitation',
    body: "You must submit an EOI through the Department of Home Affairs and receive an invitation to apply before you can lodge the visa application. Priority consideration applies for candidates in nominated priority sectors.",
  },
  {
    heading: 'Character and health',
    body: "Standard character and health requirements apply. A police clearance from your country of residence and health examinations are required for you and any secondary applicants.",
  },
]

/* ─── Page ─── */
export default function NationalInnovationVisaPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['national-innovation-visa'].title }, [])
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Skilled Migration', url: 'https://www.nanakmigration.com.au/skilled-migration' },
          { name: 'National Innovation Visa (858)', url: 'https://www.nanakmigration.com.au/national-innovation-visa' },
        ]}
        faqs={FAQ}
        service={{ name: 'National Innovation Visa (Subclass 858)', description: PAGE_META['national-innovation-visa'].metaDescription, url: 'https://www.nanakmigration.com.au/national-innovation-visa' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Skilled Migration', page: 'skilled-migration' },
        { label: 'National Innovation Visa (858)' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Subclass 858"
        eyebrowSub="Permanent Residence · Skilled Migration"
        title={<>National Innovation Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Permanent Residence for Exceptional Achievers</em></>}
        deck="The National Innovation Visa (subclass 858) is a permanent residence visa for individuals with an internationally recognised record of exceptional and outstanding achievement in academia and research, sport, the arts, or innovative technology sectors. It replaced the former Global Talent Independent program in December 2024."
        shortAnswer={<>The National Innovation Visa (subclass 858) requires an internationally recognised record of exceptional and outstanding achievement in an eligible field — academia and research, sport, the arts, or innovative technology. The applicant must be nominated by an eligible Australian citizen, permanent resident, eligible New Zealand citizen, or Australian organisation with a national reputation in the relevant field. The visa is invitation-based: applicants first submit an Expression of Interest, and an invitation to apply is required before lodging. There is no age requirement, no points test, and no skills assessment. The exceptional achievement threshold is high — the Department is looking for achievements that distinguish the applicant from other practitioners in the field, such as international prizes and awards, peer-reviewed publications of significant impact, or elite-level sporting representation. Nanak Migration Group, a registered migration agent (MARN 2619467), can assess whether your career profile meets the threshold before you submit an Expression of Interest.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Skilled migration overview →', page: 'skilled-migration' }}
        accent={NAVY}
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
              style={{
                display: 'inline-block',
                padding: '12px 14px',
                fontSize: 13,
                fontWeight: 500,
                color: '#6b7280',
                textDecoration: 'none',
                whiteSpace: 'nowrap' as const,
                borderBottom: '2px solid transparent',
                transition: 'color 0.15s, border-color 0.15s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = NAVY
                ;(e.currentTarget as HTMLAnchorElement).style.borderBottomColor = NAVY
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

      {/* Key facts */}
      <div id="overview">
        <KeyFactsStrip facts={FACTS} accent={NAVY} />
      </div>

      {/* Eligibility */}
      <section id="eligibility" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading
            kicker="Who can apply"
            title="Subclass 858 Eligibility Requirements"
            accent={NAVY}
          />
          <div style={{ marginTop: 32 }}>
            {ELIGIBILITY_ROWS.map((row, i) => (
              <div
                key={i}
                style={{
                  borderLeft: '3px solid ' + NAVY,
                  paddingLeft: 20,
                  marginBottom: 24,
                }}
              >
                <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{row.heading}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{row.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligible fields */}
      <section id="fields" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading
            kicker="Eligible fields"
            title="Which Fields Are Covered by the Subclass 858?"
            accent={NAVY}
          />
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 24, marginTop: 32 }}>
            {ELIGIBLE_FIELDS.map((field, i) => (
              <div
                key={i}
                style={{
                  flex: '1 1 calc(50% - 12px)',
                  minWidth: 280,
                  background: '#fff',
                  border: `1.5px solid ${BORDER}`,
                  borderRadius: 16,
                  padding: '24px 22px',
                  boxShadow: '0 2px 12px rgba(27,43,94,0.05)',
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${NAVY}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon name={field.icon} size={20} color={NAVY} />
                </div>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{field.heading}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{field.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Callout variant="note" title="No specific occupation list" panel={true}>
              Unlike points-tested skilled visas, the subclass 858 is not tied to an ANZSCO occupation code or occupation list. The assessment is qualitative and holistic — the Department assesses the totality of your achievements against the exceptional and outstanding threshold in your nominated field.
            </Callout>
          </div>
        </div>
      </section>

      {/* Nomination */}
      <section id="nomination" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Who can nominate you"
            title="Subclass 858 Nomination Requirements"
            accent={NAVY}
          />
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 24, marginTop: 32, marginBottom: 32 }}>
            {/* Individual nominator card */}
            <div style={{ flex: '1 1 calc(50% - 12px)', minWidth: 280, background: GREY_BG, border: `1.5px solid ${BORDER}`, borderRadius: 16, padding: '24px 22px' }}>
              <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Individual nominator</div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                An Australian citizen, Australian permanent resident, or eligible New Zealand citizen who has a national reputation in the relevant field. The nominator must be able to attest to your achievements and standing in the field — they should be a peer, senior figure, or recognised authority, not merely a personal reference.
              </p>
            </div>
            {/* Organisation nominator card */}
            <div style={{ flex: '1 1 calc(50% - 12px)', minWidth: 280, background: GREY_BG, border: `1.5px solid ${BORDER}`, borderRadius: 16, padding: '24px 22px' }}>
              <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Organisation nominator</div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                An Australian organisation with a national reputation in the relevant field — for example, a peak sporting body, a major arts institution, a research university, a national academy of science or arts, or a technology industry body. The organisation must be able to speak authoritatively to your standing and achievements.
              </p>
            </div>
          </div>
          <Callout variant="warning" title="Nomination is not employment sponsorship" panel={true}>
            A subclass 858 nominator is not an employer sponsor. The nominator does not take on ongoing compliance obligations, and the visa holder is not tied to the nominator's organisation. The nomination is a formal attestation of the applicant's achievements and standing — nothing more. You do not need to work for or with the nominator after grant.
          </Callout>
        </div>
      </section>

      {/* Application process */}
      <section id="process" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading
            kicker="How to apply"
            title="Subclass 858 Application Process"
            accent={NAVY}
          />
          <div style={{ marginTop: 40 }}>
            <StepTimeline steps={STEPS} variant="flow" accent={NAVY} />
          </div>
          <div style={{ marginTop: 40, maxWidth: 860, margin: '40px auto 0' }}>
            <Callout variant="note" title="Subclass 858 Visa Application Charge" panel={true}>
              The Visa Application Charge (VAC) for the subclass 858 is approximately $4,640 for the primary applicant. Additional applicant charges apply. Figures current at August 2026 — confirm on the Department of Home Affairs website before lodging. Professional fees: Nanak Migration Group provides a fixed-fee quote after assessing each matter.
            </Callout>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading
            kicker="Questions"
            title="Frequently Asked Questions"
            accent={NAVY}
          />
          <div style={{ marginTop: 32 }}>
            <FaqAccordion items={FAQ} accent={NAVY} />
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section id="related" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading
            kicker="Also useful"
            title="Related Pages"
            accent={NAVY}
          />
          <div style={{ marginTop: 32 }}>
            <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Assess your National Innovation Visa eligibility"
        body="Nanak Migration Group (MARN 2619467) can review your career profile and achievements to assess whether your record meets the exceptional and outstanding threshold for the subclass 858."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={NAVY}
        footnote="Free initial assessment · MARA-registered · MARN 2619467"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
