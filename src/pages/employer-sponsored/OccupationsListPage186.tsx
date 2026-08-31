import React from 'react'
import Icon from '@/components/ui/Icon'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import { ALL_OCCUPATIONS } from '@/data/occupations'
import {
  Breadcrumbs,
  PageHero,
  SectionHeading,
  OnThisPageNav,
  Callout,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  AnswerBox,
  ComplianceDisclaimer,
  OccupationTable,
} from '@/components/page'
import type { FaqItem, RelatedPage, NavSection } from '@/components/page'
import { GOLD, NAVY, NAVY_DARK , CAT_EMPLOYER } from '@/theme'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const GREEN = CAT_EMPLOYER
const BORDER = '#e8edf6'
const GREY_BG = '#fafbfe'
const CURRENT_AS_AT = 'July 2026'

// 186-relevant occupations: those with '186' in their visas array
const OCCS_186 = ALL_OCCUPATIONS.filter(o => o.visas.includes('186'))

const TOC: NavSection[] = [
  { id: 'occupation-table',   label: 'Search occupations' },
  { id: 'how-to-read',        label: 'How to read this list' },
  { id: 'list-caveat-note',   label: 'Important caveat' },
  { id: 'faq',                label: 'FAQ' },
  { id: 'related',            label: 'Related pages' },
]

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is the difference between CSOL, MLTSSL and STSOL?',
    answer: 'The Core Skills Occupation List (CSOL) is used for the Core Skills stream of the Skills in Demand (482) visa and for the Employer Nomination Scheme (186) Direct Entry stream. The Medium and Long-term Strategic Skills List (MLTSSL) is used for points-tested permanent visas (189, 190, 491) and for employer-sponsored visas including the 186. The Short-term Skilled Occupation List (STSOL) is generally used for the short-term stream of the 482 visa and in most cases does not confer a pathway to 186 permanent residence. The lists are administered separately and updated at different times — always check the current version on the Department of Home Affairs website.',
  },
  {
    question: 'My occupation is on the STSOL. Can I still apply for a 186?',
    answer: 'In most cases, STSOL occupations do not qualify for the 186 Employer Nomination Scheme via the Direct Entry stream. However, some STSOL occupations may be available under a Labour Agreement pathway if a specific agreement covers that occupation, or under the Temporary Residence Transition (TRT) stream if a sponsoring employer has separately arranged a pathway. The eligibility of each specific occupation should be verified against the current legislative instrument and any applicable labour agreement.',
  },
  {
    question: 'How often are the occupation lists updated?',
    answer: "The occupation lists are updated by the Department of Home Affairs periodically — changes can occur without prior public notice. An occupation may be added, removed, or made subject to additional caveats at any time. It is important to verify the current list on the Department's website (immi.homeaffairs.gov.au) before the nomination is lodged, not just before deciding to pursue a 186 pathway.",
  },
  {
    question: 'What is an ANZSCO code and why does it matter?',
    answer: "ANZSCO stands for the Australian and New Zealand Standard Classification of Occupations. Every occupation nominated under a 186 is matched to a specific ANZSCO unit group code (generally a six-digit number). The code determines which occupation list the role falls under, which assessing authority must assess the applicant's skills (for Direct Entry), and what caveats may apply. Choosing the wrong ANZSCO code for a nomination is a common source of refusals.",
  },
  {
    question: 'What is an assessing authority and do I need a skills assessment?',
    answer: 'An assessing authority is the body designated to assess whether an applicant has the skills required for a particular ANZSCO occupation. For the 186 Direct Entry stream, a positive skills assessment from the correct assessing authority is generally required. For the Temporary Residence Transition (TRT) stream, a formal skills assessment is in most cases not required — the period of employment with the sponsoring employer serves as the skills evidence. The assessing authority for each occupation is set by the relevant legislative instrument.',
  },
  {
    question: 'What does "caveats" mean next to an occupation?',
    answer: "A caveat is a restriction or additional condition that applies to a specific occupation on the list. Caveats may limit who can be nominated (for example, a minimum number of years of post-qualification experience), restrict the geographic location of employment, require a minimum salary above the standard threshold, or restrict the occupation to specific industry sectors. Caveats are specified in the legislative instrument and must be satisfied in addition to the general visa requirements.",
  },
]

const RELATED: RelatedPage[] = [
  { title: '186 Skill Requirements',         desc: 'Detailed guide to the skills, experience and English requirements for the 186 visa.',           icon: 'clipboard',  page: '186-skill-requirements' },
  { title: 'Employer Nomination Scheme (186)', desc: 'Overview of the 186 visa streams, the nomination process and the pathway to permanent residence.', icon: 'award',      page: 'employer-nomination-scheme' },
  { title: 'Core Skills Occupation List',    desc: 'Full list of occupations eligible for the Core Skills stream of the 482 visa.',                  icon: 'layers',     page: 'core-skills-occupation-list' },
  { title: 'Skills Assessment Advice',       desc: 'Which assessing authority covers your occupation and how to prepare your assessment.',             icon: 'check',      page: 'employer-nomination-scheme' },
]

/* ─── How-to-read explainer ─── */
function HowToRead() {
  const cols = [
    { icon: 'hash', heading: 'ANZSCO code', body: 'A six-digit code that uniquely identifies the occupation unit group under the Australian and New Zealand Standard Classification of Occupations. The code must match the actual duties performed — not just the job title. Choosing the wrong code for a nomination is a common reason for refusal.' },
    { icon: 'layers', heading: 'Occupation list', body: "Shows which list the occupation currently appears on — CSOL, MLTSSL, STSOL, or ROL. The list determines which visa subclasses are available and what skill-level evidence is required. Occupation lists are updated by the Department of Home Affairs; always verify the current version before lodging." },
    { icon: 'clipboard', heading: 'Assessing authority', body: "The body designated to assess skills for this occupation. For the 186 Direct Entry stream, a positive assessment from the correct authority is generally required. Choosing the wrong authority is a costly mistake — the assessment fee is typically non-refundable and obtaining a new assessment takes time." },
    { icon: 'alert', heading: 'Caveats', body: "Additional conditions that apply to specific occupations. Caveats may require a minimum salary, restrict the occupation to a specific industry, require a minimum period of post-qualification experience, or limit the geographic location of the position. Caveats must be satisfied in addition to the standard visa requirements — they are not optional conditions." },
  ]
  return (
    <section id="how-to-read" style={{ background: GREY_BG, padding: '72px 32px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <SectionHeading kicker="Guide" title="How to Read This List" accent={GREEN} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {cols.map(c => (
            <div key={c.heading} style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 14, padding: '24px 22px', boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
              <div style={{ marginBottom: 10 }}><Icon name={c.icon} size={28} color={GREEN} /></div>
              <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{c.heading}</div>
              <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function OccupationsListPage186({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => {
    document.title = PAGE_META['186-occupations-list'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: 'Employer Nomination Scheme (186)', url: 'https://www.nanakmigration.com.au/employer-nomination-scheme' },
          { name: '186 Occupations List', url: 'https://www.nanakmigration.com.au/186-occupations-list' },
        ]}
        faqs={FAQ_ITEMS}
        service={{ name: '186 Visa Occupations List', description: PAGE_META['186-occupations-list'].metaDescription, url: 'https://www.nanakmigration.com.au/186-occupations-list' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Employer Sponsored', page: 'employer-sponsored-visas' },
          { label: 'Employer Nomination Scheme (186)', page: 'employer-nomination-scheme' },
          { label: '186 Occupations List' },
        ]}
      />

      <PageHero
        variant="standard"
        eyebrow="Subclass 186 · Direct Entry & TRT"
        eyebrowSub="Employer Nomination Scheme"
        title={<>186 Occupations List<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Eligible occupations</em></>}
        deck="Occupation eligibility for the subclass 186 Employer Nomination Scheme depends on the stream and the occupation list that applies. This page shows occupations on the CSOL and MLTSSL that are generally available for the 186 visa."
        shortAnswer={<>Most 186 Direct Entry nominations require the occupation to appear on the <strong>Core Skills Occupation List (CSOL)</strong> or <strong>MLTSSL</strong>. For the Temporary Residence Transition (TRT) stream, the requirement is generally employment with the same sponsoring employer in the same occupation for at least two years on a qualifying 482 visa — the occupation list requirement may differ. Eligibility is subject to the legislative instrument current at the time the nomination is lodged; lists change without notice.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Check your 186 eligibility', page: 'home' }}
        secondaryCta={{ label: 'See 186 skill requirements →', page: '186-skill-requirements' }}
        accent={GREEN}
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            The Employer Nomination Scheme (subclass 186) visa Direct Entry stream requires the nominated occupation to appear on the list of eligible skilled occupations published by the Department of Home Affairs, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. The list is updated periodically and different occupations may carry additional requirements, such as a relevant skills assessment from the applicable assessing authority. If your occupation does not appear on the list, you may be able to apply through the Temporary Residence Transition stream if you have held a subclass 482 visa with the same employer.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* TOC + body layout */}
      <div style={{ maxWidth: 1260, margin: '0 auto', padding: '48px 32px 0', display: 'flex', gap: 48, alignItems: 'flex-start' }}>
        <OnThisPageNav sections={TOC} accent={GREEN} />
        <div style={{ flex: 1 }} />
      </div>

      {/* ── OCCUPATION TABLE ── */}
      <section id="occupation-table" style={{ background: '#fff', padding: '64px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading
            kicker={`${OCCS_186.length} occupations shown`}
            title="Search 186 Eligible Occupations"
            intro="Filtered to occupations on the CSOL or MLTSSL that are generally available for the 186 Employer Nomination Scheme. STSOL occupations appear where a Labour Agreement or other specific pathway may apply."
            accent={GREEN}
          />
          <OccupationTable
            occupations={OCCS_186}
            accent={GREEN}
            defaultVisaFilter="186"
            lockVisaFilter
          />
        </div>
      </section>

      <HowToRead />

      {/* ── IMPORTANT CAVEAT ── */}
      <section id="list-caveat-note" style={{ background: '#fff', padding: '48px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Callout
            variant="warning"
            panel
            title="The Department's published list prevails"
          >
            <p style={{ margin: '0 0 10px', fontSize: 14, lineHeight: 1.7, color: '#374151' }}>
              This page shows <strong>sample data only</strong> — it is not the current Department of Home Affairs occupation list. Occupation lists for the 186 visa are published and updated by the Department at immi.homeaffairs.gov.au. Lists may change at any time, including removing occupations, adding new caveats, or changing assessing authority assignments.
            </p>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: '#0d1632' }}>
              Always verify the current occupation list on the Department of Home Affairs website before a nomination is lodged. Do not rely solely on this page for compliance decisions.
            </p>
          </Callout>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={GREEN} />
          <FaqAccordion items={FAQ_ITEMS} accent={GREEN} />
        </div>
      </section>

      {/* ── RELATED ── */}
      <section id="related" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={GREEN} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title={<>Not sure your occupation qualifies<br /><em style={{ fontStyle: 'italic', color: GOLD }}>for the 186 visa?</em></>}
        body="Navpreet Aulakh (MARN 2619467) can review your ANZSCO code, occupation list status, and stream eligibility against current Department of Home Affairs requirements before the nomination is lodged."
        primaryCta={{ label: 'Book a 186 eligibility consultation', page: 'home' }}
        secondaryCta={{ label: 'Read 186 skill requirements →', page: '186-skill-requirements' }}
        accent={GREEN}
        footnote="Free initial assessment · MARA-registered · MARN 2619467"
        navigate={navigate}
      />

      <ComplianceDisclaimer
        currentAsAt={CURRENT_AS_AT}
        pageNote="Occupation lists, assessing authority assignments and caveats are subject to change by the Department of Home Affairs. This page does not publish visa application fees."
      />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
