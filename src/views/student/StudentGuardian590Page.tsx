import React from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_STUDENT } from '@/theme'
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

const ACCENT = CAT_STUDENT
const CURRENT_AS_AT = 'August 2026'
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'who-can-sponsor', label: 'Who can sponsor' },
  { id: 'conditions', label: 'Conditions' },
  { id: 'siblings', label: 'Multiple students' },
  { id: 'temporary-absence', label: 'Temporary absence' },
  { id: 'fees', label: 'Fees' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related' },
]

const KEY_FACTS: KeyFact[] = [
  {
    icon: 'user',
    value: 'Under 18',
    label: 'Primarily for guardians of students under 18 years of age',
    note: 'The visa is designed for students who are minors. When the student turns 18, the guardian visa is affected — confirm the current rules on DoHA.',
  },
  {
    icon: 'shield',
    value: 'No work rights',
    label: 'The guardian cannot work in Australia on this visa',
    note: 'The subclass 590 does not include work rights. The guardian must have sufficient funds to support themselves during their stay without employment.',
  },
  {
    icon: 'calendar',
    value: 'Tied to student visa',
    label: "Visa duration matches the student's visa grant period",
    note: "The 590 is granted for the same period as the student's visa. It does not automatically extend if the student extends their study.",
  },
  {
    icon: 'home',
    value: 'Must cohabit',
    label: 'The guardian must live with the student',
    note: 'A guardian who does not live with the student is not meeting the visa conditions. The Department expects the guardian to be the primary carer living in the same residence.',
  },
]

const SPONSOR_STEPS: TimelineStep[] = [
  {
    title: "Student's education provider accepts a welfare arrangement",
    desc: 'The student must be enrolled at a registered Australian education provider (CRICOS-registered). The provider must agree that the student requires a guardian in Australia and must accept the welfare arrangement — naming the specific proposed guardian.',
  },
  {
    title: 'Confirmation of Enrolment (CoE) and welfare documentation',
    desc: "The student's CoE (Confirmation of Enrolment) and the provider's welfare documentation should confirm the welfare arrangement. The guardian's 590 application relies on this documentation.",
  },
  {
    title: 'The guardian applies for the 590',
    desc: "With the welfare documentation in hand, the guardian applies for the 590 visa. The application requires the student's visa details, the education provider's documentation, financial evidence, and health/character documents.",
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'Can the guardian work part-time while on the 590?',
    answer: 'No. The subclass 590 does not include any work rights. The guardian cannot take paid employment of any kind — including part-time, casual, or contractor arrangements — during their stay in Australia. A guardian who works in Australia is breaching their visa conditions, which can result in cancellation and future visa bars. Financial planning for the guardian\'s stay must account for living costs without any Australian income.',
  },
  {
    question: 'What happens when the student turns 18?',
    answer: 'The subclass 590 is primarily for guardians of students under 18. When the student turns 18, the welfare basis for the 590 changes significantly. In most cases, the guardian will need to depart Australia or apply for a different visa once the student turns 18 — the 590 does not automatically continue simply because the student\'s studies continue. Confirm the exact current rules on the DoHA website, and seek advice if the student is approaching their 18th birthday during the study period.',
  },
  {
    question: 'Can both parents hold a 590 at the same time?',
    answer: 'Generally, only one guardian at a time is expected to hold a 590 for a given student. Having both parents simultaneously in Australia in a guardian capacity under 590 visas for the same student is unusual and may not be supported by the education provider. If both parents wish to be in Australia, the second parent would need to consider an alternative visa (such as a visitor visa). Seek advice on the specific circumstances.',
  },
  {
    question: 'Can the guardian study while in Australia on a 590?',
    answer: 'The 590 does not specifically include study rights for the guardian. However, a guardian may be able to undertake limited incidental study. If the guardian wants to study substantively, they would need to apply for a student visa in their own right. Seek advice before enrolling in any course.',
  },
  {
    question: 'What if the student changes schools?',
    answer: 'If the student transfers to a new education provider, the welfare arrangement must be updated with the new provider. The new provider must agree to accept the existing guardian arrangement. Depending on the circumstances, the guardian may need to provide additional documentation. Notify the Department and the new provider promptly when a change of school occurs.',
  },
  {
    question: 'What financial evidence is required?',
    answer: 'The guardian must demonstrate sufficient funds to cover their living expenses in Australia for the full duration of the stay without working. Evidence may include: bank statements showing savings, evidence of overseas income (investments, rental income, salary that will continue remotely), a support letter from a sponsor outside Australia, or a combination of these. The specific evidence requirements are set by the Department — confirm on the DoHA website.',
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Student Visa (500)', desc: 'The main student visa for international students enrolled in Australian institutions.', icon: 'graduationcap', page: 'student-visa-500', color: ACCENT },
  { title: 'Student Visas Hub', desc: 'Overview of all student visa pathways — start here.', icon: 'star', page: 'student-visas', color: ACCENT },
  { title: 'Genuine Student Requirement', desc: 'What students must demonstrate to satisfy the Genuine Student requirement.', icon: 'check', page: 'genuine-student-requirement', color: ACCENT },
  { title: 'Student Financial Capacity', desc: 'What funds evidence is required for a student visa application.', icon: 'dollar', page: 'student-financial-capacity', color: ACCENT },
]

const ELIGIBILITY_ITEMS = [
  {
    heading: "Nominated by the student's education provider",
    detail: "The student's registered Australian education provider (school, college, or ELICOS provider) must confirm that the student requires a guardian in Australia and name the proposed guardian in the student's welfare arrangements.",
  },
  {
    heading: 'Relationship to the student',
    detail: "The guardian must be a parent, step-parent, custodian, or other close relative of the student. In limited cases, the guardian may be an adult who has been formally identified as the student's carer — but this is less common. The relationship must be genuine.",
  },
  {
    heading: 'Student is under 18 (in most cases)',
    detail: 'The primary purpose of the visa is to provide welfare support for a student who is a minor. In limited circumstances (welfare arrangements), a guardian may support an over-18 student, but this requires a specific welfare arrangement with the education provider and is uncommon.',
  },
  {
    heading: 'Financial capacity',
    detail: 'The guardian must demonstrate they have sufficient funds to cover their living expenses in Australia for the duration of the stay without working. The Department assesses financial capacity carefully — proof of funds (savings, income from overseas sources, or support from the family) is required.',
  },
  {
    heading: 'Health and character requirements',
    detail: 'Standard health examinations and character requirements apply to the guardian. The guardian must meet Australian health and character standards, including police clearances as required.',
  },
]

const CAN_DO = [
  'Live in Australia with the student for the duration of the student\'s enrolled study period',
  'Travel in and out of Australia (subject to multiple-entry being granted — check the visa grant notice)',
  'Accompany the student on travel within Australia',
  'Undertake unpaid volunteer activities in limited circumstances (seek advice)',
  'Apply for a different visa from within Australia if eligible',
]

const CANNOT_DO = [
  'Work in Australia in any paid capacity — no employment, no freelance, no contracting',
  'Study for their own purposes (limited personal study may be possible — seek advice)',
  'Allow another adult to take over the guardian role without following the correct process with the education provider and Department',
  "Stay in Australia after the student's visa expires or after the student turns 18 (in most cases)",
]

const ABSENCE_CONSIDERATIONS = [
  {
    heading: 'Check the visa conditions',
    detail: 'The 590 grant notice states whether the visa includes multiple-entry conditions. If not, the guardian cannot re-enter on the same visa — they would need to apply for a new 590.',
  },
  {
    heading: "Welfare arrangement for the student during absence",
    detail: "If the guardian leaves Australia, the student's education provider must be satisfied that adequate welfare arrangements are in place for the student during the guardian's absence. Schools and ELICOS providers have strict obligations regarding the welfare of under-18 students. The guardian cannot simply leave without notifying and making alternative arrangements with the school.",
  },
  {
    heading: 'Guardian under 18 threshold',
    detail: 'If the student turns 18 while the guardian is absent, the basis for the 590 may end. The guardian should return to Australia before the student turns 18 (or before the 590 visa expires, whichever is sooner) to assess the situation.',
  },
  {
    heading: 'Second parent as an alternative',
    detail: 'If one parent must leave, the other parent (or another qualified adult) may be able to apply for a new 590 to take over the guardian role — but this requires a new application and the education provider\'s agreement.',
  },
]

export default function StudentGuardian590Page({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Student Visas', url: 'https://www.nanakmigration.com.au/student-visas' },
          { name: 'Student Guardian (590)', url: 'https://www.nanakmigration.com.au/student-guardian-590' },
        ]}
        faqs={FAQ}
        service={{
          name: 'Student Guardian Visa (590)',
          description: PAGE_META['student-guardian-590'].metaDescription,
          url: 'https://www.nanakmigration.com.au/student-guardian-590',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Student Visas', page: 'student-visas' },
        { label: 'Student Guardian (590)' },
      ]} />
      <PageHero
        variant="standard"
        eyebrow="Student Visas"
        eyebrowSub="Student Guardian · Subclass 590"
        title={<>Student Guardian Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 590</em></>}
        deck="The Student Guardian visa (subclass 590) allows a parent, custodian, or close relative to live in Australia to care for an international student who is under 18 years of age — or in limited welfare arrangement cases, over 18."
        shortAnswer={<>The subclass 590 is a temporary visa for a parent or nominated guardian of an international student. The guardian must live with and provide welfare support for the student. The visa is primarily for students under 18 — once the student turns 18 (or their student visa expires) the 590 visa ends or the guardian must depart. In limited circumstances, a welfare arrangement may allow a guardian to support an over-18 student, but this is uncommon. The guardian generally has NO work rights on the 590 — they cannot take employment in Australia. The visa is granted for the same duration as the student's subclass 500 visa (or other student visa). Financial capacity to support the guardian's stay without working must be demonstrated. One guardian can cover multiple sibling students at the same institution (subject to requirements). If the guardian must leave Australia temporarily (e.g. for a family emergency), they may be able to re-enter before the visa expires. Nanak Migration Group (MARN 2619467) can advise on the 590 application requirements. No outcome guarantees.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Student Visa (500) →', page: 'student-visa-500' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>

      {/* Sticky TOC jump bar */}
      <div style={{ borderTop: '1px solid #e8edf6', borderBottom: '1px solid #e8edf6', background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 4, overflowX: 'auto', scrollbarWidth: 'none' }}>
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

      <div id="overview">
        <KeyFactsStrip facts={KEY_FACTS} accent={ACCENT} />
      </div>

      {/* Overview */}
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What it is" title="The Subclass 590 Student Guardian Visa" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>
            The subclass 590 Student Guardian visa is a temporary visa that allows a parent, relative, or nominated welfare guardian to live in Australia to care for an international student who is under 18 years of age. It is designed to ensure that young international students have an appropriate guardian physically present in Australia during their studies.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>
            {"The visa is tied to the student's enrollment and visa grant period. The guardian's primary obligation is to live with, care for, and support the student throughout the student's time in Australia. The guardian cannot take paid employment during their stay — they must have sufficient financial resources to support themselves for the duration without working."}
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The 590 visa is not a pathway to permanent residence and is not a work visa. It is a pastoral, welfare-focused visa that exists entirely in connection with the student's enrollment and wellbeing.
          </p>
          <Callout variant="note" panel={true} title="The visa ends when the student turns 18 or their enrollment ends">
            The subclass 590 is tied to the student's welfare needs. When the student turns 18 years of age, the basis for the 590 is significantly affected. In most cases, the guardian will need to depart or apply for a different visa once the student turns 18 — the 590 does not automatically continue simply because the student's studies continue. Confirm the current rules on the DoHA website.
          </Callout>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Requirements" title="Who Can Apply for the Subclass 590?" accent={ACCENT}
            intro="To be eligible for the subclass 590, the proposed guardian must meet each of the following requirements." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
            {ELIGIBILITY_ITEMS.map((item, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 10, padding: '22px 24px', background: '#fff', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="check" size={16} color="#fff" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 6 }}>{item.heading}</div>
                  <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who can sponsor */}
      <section id="who-can-sponsor" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="The student's role" title="How the Student Nominates a Guardian" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>
            {"The subclass 590 does not work in isolation. The student's education provider plays a central role in the 590 process — they must confirm the welfare arrangement and agree to the nominated guardian."}
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The process generally works as follows:
          </p>
          <StepTimeline steps={SPONSOR_STEPS} variant="flow" accent={ACCENT} />
          <div style={{ marginTop: 40 }}>
            <Callout variant="note" panel={true} title="Only one guardian at a time">
              Generally, only one guardian can hold a 590 visa for a single student at any time. If parents wish to rotate (e.g. both parents taking turns), only one can hold the visa at once — the other cannot be in Australia in a guardian capacity simultaneously. One guardian covering multiple sibling students (below) is an exception to the one-at-a-time structure, not a permission for both parents to be present together.
            </Callout>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section id="conditions" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What you can and cannot do" title="Visa Conditions for the Subclass 590" accent={ACCENT} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24, marginTop: 40 }}>
            {/* Can do */}
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, padding: '28px 28px', background: '#fff', borderTop: `4px solid #16a34a` }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: '#15803d', marginBottom: 20 }}>The guardian CAN:</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {CAN_DO.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ flexShrink: 0, marginTop: 2 }}>
                      <Icon name="check" size={16} color="#16a34a" />
                    </div>
                    <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Cannot do */}
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, padding: '28px 28px', background: '#fff', borderTop: `4px solid #dc2626` }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: '#dc2626', marginBottom: 20 }}>The guardian CANNOT:</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {CANNOT_DO.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ flexShrink: 0, marginTop: 2 }}>
                      <Icon name="x" size={16} color="#dc2626" />
                    </div>
                    <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: 32 }}>
            <Callout variant="warning" panel={true} title="Working on a 590 is a serious breach">
              Working in Australia while holding a 590 visa — including cash-in-hand, freelance, or online work for overseas clients — is a breach of visa conditions and can result in visa cancellation and future visa bars. The guardian must have sufficient savings or overseas income to cover their stay without working.
            </Callout>
          </div>
        </div>
      </section>

      {/* Multiple students / siblings */}
      <section id="siblings" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Multiple students" title="One Guardian for Multiple Sibling Students" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>
            If two or more sibling students are enrolled at the same school or institution in Australia, it is generally possible for a single guardian to hold a 590 visa covering all of them — rather than requiring two separate 590 applications.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>
            {"For this to work, the education provider must confirm the welfare arrangement covering all siblings. Each student should have the same guardian named in their welfare documentation. The guardian's 590 visa is then granted for a period that reflects all students' enrollment periods."}
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            {"If the siblings are at different schools or institutions, the guardian's welfare arrangement must be accepted by each institution. This can be more complex — seek migration advice on the documentation requirements."}
          </p>
          <Callout variant="note" panel={true} title="Confirm multi-student arrangements with the education provider first">
            The education provider must agree to the welfare arrangement covering all siblings before the guardian applies. Do not apply for the 590 without first obtaining confirmation from each relevant institution. Nanak Migration Group (MARN 2619467) can advise on documenting multi-student arrangements.
          </Callout>
        </div>
      </section>

      {/* Temporary absence */}
      <section id="temporary-absence" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Leaving Australia temporarily" title="What Happens if the Guardian Must Leave?" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>
            {"Family emergencies, medical needs, or other circumstances may require the guardian to leave Australia during the student's enrollment period. The subclass 590 may be granted with multiple-entry conditions, allowing the guardian to re-enter Australia before the visa expiry date."}
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            Key considerations if the guardian must leave:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {ABSENCE_CONSIDERATIONS.map((item, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 10, padding: '22px 24px', background: '#fff' }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 8 }}>{item.heading}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Application charge" title="Visa Application Charge" accent={ACCENT} />
          <div style={{ marginTop: 32, marginBottom: 24 }}>
            <Callout variant="note" panel={true} title="Confirm current fees on the Department of Home Affairs website">
              Visa application charges are updated periodically. The information below is current at August 2026 and should be confirmed before lodging.
            </Callout>
          </div>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75 }}>
            The subclass 590 application charge is payable by the guardian at the time of lodging the application. The charge is modest compared to many other visa categories. Where the guardian includes dependants in the application, secondary applicant charges apply. Confirm the current charge on the Department of Home Affairs website before lodging.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="See also" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand
        title="Arranging guardianship for an under-18 student?"
        body="Nanak Migration Group (MARN 2619467) can advise on the 590 application requirements and help coordinate the welfare documentation with the student's education provider."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
