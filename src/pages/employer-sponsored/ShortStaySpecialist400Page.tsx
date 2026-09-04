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

const ACCENT = CAT_EMPLOYER
const CURRENT_AS_AT = 'August 2026'
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'when-not', label: 'When not to use it' },
  { id: 'process', label: 'How to apply' },
  { id: 'conditions', label: 'Conditions' },
  { id: 'fees', label: 'Fees' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'clock', value: 'Up to 3 months', label: 'Standard maximum stay (up to 6 months in limited business cases)', note: 'Most subclass 400 visas are granted for up to 3 months. The Department may grant up to 6 months in limited circumstances for business-related specialist work.' },
  { icon: 'shield', value: 'No sponsorship', label: 'No formal Standard Business Sponsorship required', note: 'Unlike the 482, no approved employer sponsorship is required. The Australian business provides a supporting letter confirming the specialist need.' },
  { icon: 'star', value: 'Specialist skills', label: 'Work must be highly specialised and non-ongoing', note: 'The work must be of a highly specialised nature that cannot reasonably be performed by an Australian. Ongoing or routine positions do not qualify.' },
  { icon: 'dollar', value: 'Modest charge', label: 'Application charge — confirm current fee on DoHA', note: 'Figures current at August 2026 — confirm on the Department of Home Affairs website before lodging.' },
]

const FAQ: FaqItem[] = [
  {
    question: 'How long can I stay on a subclass 400 visa?',
    answer: "The standard maximum stay is 3 months. In limited circumstances — where the specialist work genuinely requires a longer period — the Department may grant up to 6 months. The visa is granted for the period required to complete the specific approved work and cannot be extended to cover ongoing employment.",
  },
  {
    question: 'Does my employer need to be an approved sponsor?',
    answer: "No. Unlike the subclass 482, the subclass 400 does not require the employer to be an approved Standard Business Sponsor. The Australian organisation provides a supporting letter explaining the specialist need. The visa is applied for directly by the worker. However, if the employer has an ongoing need for the role, the standard 482 sponsorship pathway should be used instead.",
  },
  {
    question: 'Can I work for multiple employers on a subclass 400?',
    answer: "No. The subclass 400 is granted for a specific activity with a specific organisation. Working for a different employer or performing different work than approved would be a breach of the visa conditions. Each new specialist engagement with a different organisation would require a new visa application.",
  },
  {
    question: "Can I use the subclass 400 to assess whether to bring someone on a 482?",
    answer: "Potentially — but only if the initial short-term work is genuinely specialist and non-ongoing. Using successive 400 visas as a trial run for ongoing employment is a misuse of the visa. If the assessment period leads to an ongoing role, the correct pathway is a subclass 482 nomination through Standard Business Sponsorship.",
  },
  {
    question: 'What evidence of specialist skills do I need?',
    answer: "The evidence package should demonstrate that the skills are highly specialised and genuine. Typically this includes: academic qualifications (degrees, certifications), professional memberships or registrations, a detailed CV showing the depth of experience in the specific specialist field, reference letters from clients or employers attesting to the specialist nature of the work, and any publications, patents, or other evidence of expertise. The evidence must be tailored to the specific work described in the supporting letter.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Skills in Demand (482)', desc: 'The correct pathway for ongoing specialist positions — requires Standard Business Sponsorship.', icon: 'briefcase', page: 'skills-in-demand-visa', color: ACCENT },
  { title: 'Training Visa (407)', desc: 'For structured occupational training in an Australian workplace — up to 2 years.', icon: 'star', page: 'training-visa-407', color: ACCENT },
  { title: 'Temporary Activity (408)', desc: 'For short-term non-work activities — entertainment, research, sport, religious work.', icon: 'calendar', page: 'temporary-activity-408', color: ACCENT },
  { title: 'Employer Sponsored Visas', desc: 'Overview of all employer sponsorship pathways — start here.', icon: 'arrowright', page: 'employer-sponsored-visas', color: ACCENT },
]

const STEPS: TimelineStep[] = [
  {
    title: 'Obtain a supporting letter from the Australian business',
    desc: 'The Australian organisation prepares a detailed letter explaining: the nature of the specialist work, why the specific person was chosen, why the work cannot be performed by an Australian, the proposed duration, and the proposed remuneration.',
  },
  {
    title: 'Gather evidence of specialist qualifications and experience',
    desc: 'Compile qualifications, professional certifications, work history, and any other evidence that demonstrates the highly specialised nature of the skills. The evidence package should directly address the specialist work described in the supporting letter.',
  },
  {
    title: 'Lodge the visa application online',
    desc: "The subclass 400 application is lodged online by the worker (not the employer). The supporting letter, evidence of qualifications, identity documents, and health/character documents are attached.",
  },
  {
    title: 'Await the decision',
    desc: 'Processing times are generally faster than the 482 pathway — often days to weeks rather than months. Once granted, the visa specifies the activity, location, and stay period.',
  },
]

const ELIGIBILITY_ITEMS = [
  {
    heading: 'Highly specialised skills',
    detail: "The worker must have specialist skills, qualifications, or experience that are highly specific to the work to be performed. A general professional or tradesperson does not qualify — the specialist requirement must be genuine and demonstrable.",
  },
  {
    heading: 'Non-ongoing work',
    detail: 'The work must be short-term and non-ongoing. If the Australian business has an ongoing need for the role, the subclass 482 Skills in Demand visa (with employer sponsorship) is the appropriate pathway — not the 400.',
  },
  {
    heading: 'Work cannot reasonably be done by an Australian',
    detail: 'The employer must be able to demonstrate that the specialist work cannot reasonably be performed by an available Australian worker. This is assessed by the Department and should be substantiated in the supporting letter.',
  },
  {
    heading: 'Invitation or support letter from the Australian business',
    detail: "A supporting letter from the Australian organisation is required, explaining the nature of the work, the specialist need, why the specific person was chosen, and why the work cannot be done by an Australian.",
  },
  {
    heading: 'Health, character and temporary entrant requirements',
    detail: "Standard health and character requirements apply. The applicant must also demonstrate a genuine intent to stay temporarily and return to their home country on completion of the work.",
  },
]

const CANNOT_DO_ITEMS = [
  {
    heading: 'Filling an ongoing position',
    detail: 'If the business has a continuing need for the role — even if the individual worker changes — the 400 is not appropriate. Ongoing roles require a 482 nomination.',
  },
  {
    heading: 'Hands-on trade and construction work',
    detail: 'The 400 is for highly specialist, typically knowledge-based or technical work. It is not appropriate for standard trade roles, labourers, or construction workers, even if they are experienced.',
  },
  {
    heading: 'Repeated or back-to-back stays',
    detail: 'The same worker cannot be brought to Australia on successive 400 visas to perform the same ongoing role. The Department treats this as a pattern of employment, not a succession of short-term specialist engagements.',
  },
  {
    heading: 'Roles that meet the 482 CSOL',
    detail: 'If the occupation is on the Core Skills Occupation List (CSOL), the standard 482 Skills in Demand pathway should be used. The 400 is for specialist work outside or beyond the standard sponsorship framework.',
  },
  {
    heading: 'Underpaid or below-market-rate engagements',
    detail: 'The worker must be paid market-rate remuneration for the work performed in Australia. The 400 cannot be used to bring in cheap labour under the guise of specialist work.',
  },
]

const CONDITION_CARDS = [
  {
    title: 'Work restriction (Condition 8107 variant / 8108)',
    desc: 'The 400 visa holder must work only in the specific activity and for the specific organisation stated in the visa. They cannot take on other employment, work for a different employer, or perform different work.',
  },
  {
    title: 'Stay period',
    desc: 'The visa is granted for the period of the approved specialist work — typically up to 3 months. Where the work requires a longer period, the Department may grant up to 6 months in limited circumstances. The worker must depart Australia on or before the visa expiry.',
  },
  {
    title: 'No multiple-entry by default',
    desc: "The subclass 400 may or may not permit multiple entries, depending on what is granted. Check the visa grant notice carefully.",
  },
]

export default function ShortStaySpecialist400Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['short-stay-specialist-400'].title }, [])
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: 'Short Stay Specialist (400)', url: 'https://www.nanakmigration.com.au/short-stay-specialist-400' },
        ]}
        faqs={FAQ}
        service={{ name: 'Short Stay Specialist Visa (Subclass 400)', description: PAGE_META['short-stay-specialist-400'].metaDescription, url: 'https://www.nanakmigration.com.au/short-stay-specialist-400' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Employer Sponsored Visas', page: 'employer-sponsored-visas' },
        { label: 'Short Stay Specialist (400)' },
      ]} />
      <PageHero
        variant="standard"
        eyebrow="Employer Sponsored"
        eyebrowSub="Short Stay Specialist · Subclass 400"
        title={<>Short Stay Specialist<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 400</em></>}
        deck="The Temporary Work (Short Stay Specialist) visa (subclass 400) enables highly specialised overseas workers to come to Australia for short-term, non-ongoing work that cannot reasonably be performed by an Australian. No formal sponsorship is required — but the work must be genuinely specialist and temporary."
        shortAnswer={<>The subclass 400 is a temporary visa for specialist non-ongoing work — typically up to 3 months, extendable to 6 months in limited circumstances. No Standard Business Sponsorship is required. Instead, the Australian business provides a supporting letter or invitation confirming the specialist nature of the work and why it cannot be performed by an Australian. Evidence of specialist qualifications and experience is required. Processing is typically faster than a 482 nomination. The visa cannot be used for ongoing positions, roles that should be filled under a 482, or repeated back-to-back stays that amount to ongoing employment. Nanak Migration Group (MARN 2619467) can advise on whether the 400 is appropriate for your situation. No outcomes can be guaranteed.</>}
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
      {/* Sticky TOC jump bar */}
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

      {/* Overview + KeyFacts */}
      <div id="overview">
        <KeyFactsStrip facts={KEY_FACTS} accent={ACCENT} />
      </div>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What it is" title="The Subclass 400 Temporary Work Visa" accent={ACCENT} />
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 20, marginTop: 32 }}>
            The subclass 400 Temporary Work (Short Stay Specialist) visa is a temporary visa designed for highly specialised overseas workers who need to come to Australia to perform specific, non-ongoing work for an Australian organisation. It is a flexible, relatively fast option for short-term specialist needs — but it is strictly limited to genuine specialist, temporary work.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151' }}>
            Unlike most employer-sponsored visas, the 400 does not require the employer to be an approved Standard Business Sponsor. The Australian business invites or requests the specialist worker, provides a supporting letter, and the worker applies for the visa directly. The simplicity of this process makes it attractive — but misuse is also common, and the Department applies scrutiny to ensure it is not being used as a substitute for the standard 482 pathway.
          </p>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Requirements" title="Who Qualifies for the Subclass 400?" accent={ACCENT}
            intro="All of the following requirements must be satisfied. The Department assesses the application holistically — meeting most but not all requirements may result in refusal." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
            {ELIGIBILITY_ITEMS.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '20px 24px', background: '#fff' }}>
                <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="check" size={16} color="#fff" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 4 }}>{item.heading}</div>
                  <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When not to use it */}
      <section id="when-not" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Important limitations" title="When the Subclass 400 CANNOT Be Used" accent={ACCENT} />
          <div style={{ marginTop: 32, marginBottom: 32 }}>
            <Callout variant="danger" panel={true} title="Misuse of the subclass 400 carries serious consequences">
              Using the subclass 400 to circumvent the standard employer sponsorship pathway is a misuse of the visa program. The Department of Home Affairs is alert to patterns of 400 visa use that amount to ongoing employment — repeated or back-to-back 400 visas for the same worker doing the same role will attract scrutiny and can result in refusal, cancellation, and bars on future sponsorship applications.
            </Callout>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {CANNOT_DO_ITEMS.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '20px 24px', background: GREY_BG }}>
                <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="x" size={16} color="#fff" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 4 }}>{item.heading}</div>
                  <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Application" title="How to Apply for the Subclass 400" accent={ACCENT}
            intro="The subclass 400 application is lodged by the worker directly. The Australian organisation provides the supporting letter but is not the applicant. Preparation quality determines outcome quality." />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* Conditions */}
      <section id="conditions" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Visa conditions" title="Conditions on the Subclass 400" accent={ACCENT} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
            {CONDITION_CARDS.map((card, i) => (
              <div key={i} style={{ borderLeft: `4px solid ${ACCENT}`, background: GREY_BG, borderRadius: 8, padding: 24 }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 8 }}>{card.title}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{card.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Callout variant="note" panel={true} title="Confirm current visa conditions on DoHA">
              Visa conditions are set at grant and may be updated by legislative instrument. Confirm the current conditions applicable to the subclass 400 on the Department of Home Affairs website.
            </Callout>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Application charge" title="Visa Application Charge" accent={ACCENT} />
          <div style={{ marginTop: 32, marginBottom: 24 }}>
            <Callout variant="note" panel={true} title="Confirm current fees on the Department of Home Affairs website">
              Visa application charges are updated periodically by the Department of Home Affairs. The information below is current at August 2026 and should be confirmed before lodging any application.
            </Callout>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151' }}>
            The subclass 400 has a modest base application charge (a few hundred Australian dollars). There is no SAF levy payable by the employer — the SAF levy applies to subclass 482 and 186 nominations only. Where dependants accompany the primary applicant, reduced secondary applicant charges apply.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="See also" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand
        title="Is the subclass 400 right for your specialist need?"
        body="Nanak Migration Group (MARN 2619467) can assess whether the subclass 400 is appropriate — or advise on the correct employer-sponsored pathway."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
