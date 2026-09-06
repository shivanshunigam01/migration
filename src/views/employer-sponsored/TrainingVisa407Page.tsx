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
  { id: 'training-types', label: 'Training types' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'sponsor', label: 'Sponsor' },
  { id: 'conditions', label: 'Conditions' },
  { id: 'fees', label: 'Fees' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'clock', value: 'Up to 2 years', label: 'Maximum stay for most training activities', note: 'Stay is limited to the approved training period. Extensions may be possible if training requirements are not yet complete.' },
  { icon: 'building', value: 'Approved sponsor', label: 'An approved temporary activities sponsor must nominate you', note: 'Either an approved temporary activities sponsor or the training organisation itself (if approved) must nominate the training activity.' },
  { icon: 'check', value: 'Genuine training', label: 'Training must be the primary purpose of the stay', note: 'The visa is not a substitute for a work visa. The Department scrutinises whether the training activity is genuine and structured.' },
  { icon: 'dollar', value: 'Modest charge', label: 'Application charge — confirm current fee on DoHA', note: 'Figures current at August 2026 — confirm on the Department of Home Affairs website before lodging.' },
]

const FAQ: FaqItem[] = [
  {
    question: 'Can I work while on a subclass 407 visa?',
    answer: "Yes — but only as part of your approved training activity. The work must be directly related to and necessary for the training program nominated by your sponsor. You cannot take on additional employment outside the training activity. If your visa includes Condition 8543, you must work only for the approved sponsor in the approved training. Working outside these bounds can result in visa cancellation.",
  },
  {
    question: 'Is the subclass 407 a pathway to permanent residence?',
    answer: "The 407 is a temporary visa and does not directly lead to permanent residence. However, time spent in Australia on the 407 may support future visa applications if the person subsequently qualifies for a skilled or employer-sponsored visa on the basis of their enhanced skills. There is no automatic PR pathway from the 407.",
  },
  {
    question: 'How long can I stay on a subclass 407 visa?',
    answer: "The maximum stay is determined by the approved training period, up to a maximum of 2 years. The actual visa grant period will match the duration of the approved training activity. Extensions beyond the initial grant are possible if the training is not yet complete — but a new nomination and visa application must be lodged.",
  },
  {
    question: "Can my employer use the subclass 407 instead of the 482 to bring workers to Australia?",
    answer: "No — not legitimately. The 407 is for genuine training purposes only. Using a 407 to fill an ongoing position that should be filled under a 482 Skills in Demand visa is a misuse of the visa program and can result in refusal, cancellation, and sanctions against the sponsor. The Department scrutinises 407 nominations carefully to distinguish genuine training from disguised employment.",
  },
  {
    question: 'What is the difference between a subclass 407 and a subclass 408?',
    answer: "Both are temporary activity visas, but they serve different purposes. The 407 is specifically for occupational training — structured skill development in a workplace or formal training program. The 408 covers a broader range of temporary activities including entertainment, sport, research, religious work, and event participation. If the purpose is training in an occupation, the 407 is the correct visa. If the purpose is a specific activity (performing, competing, researching), the 408 is more likely appropriate.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Temporary Activity (408)', desc: 'The broader temporary activity visa — for entertainment, sport, research, religious work and events.', icon: 'star', page: 'temporary-activity-408', color: ACCENT },
  { title: 'Short Stay Specialist (400)', desc: 'For highly specialised non-ongoing work — typically up to 3 months.', icon: 'clock', page: 'short-stay-specialist-400', color: ACCENT },
  { title: 'Skills in Demand (482)', desc: 'The standard employer-sponsored temporary work visa — for genuine ongoing positions.', icon: 'briefcase', page: 'skills-in-demand-visa', color: ACCENT },
  { title: 'Employer Sponsored Visas', desc: 'Overview of all employer sponsorship pathways — start here.', icon: 'arrowright', page: 'employer-sponsored-visas', color: ACCENT },
]

const TRAINING_TYPES = [
  {
    title: 'Type 1 — Training required for registration or licensing',
    body: [
      'Training required to obtain registration or licensing in a profession or trade in Australia — for example, where an overseas-qualified professional needs supervised practical training in Australia to obtain Australian professional registration (such as a medical specialist completing an Australian fellowship program). Key points:',
      'Must be training required by a professional or regulatory body in Australia',
      'Common in medicine, allied health, engineering, and law',
      'The training provider must be able to demonstrate the requirement exists',
      'Duration matches the registration/licensing requirement',
    ],
  },
  {
    title: 'Type 2 — Structured workplace training to enhance skills in an eligible skilled occupation',
    body: [
      'Structured training in an Australian workplace to develop or enhance skills in an eligible occupation listed at ANZSCO Skill Levels 1-3. This is the most commonly used training activity type. Key points:',
      'The occupation must be at ANZSCO Skill Level 1, 2 or 3',
      'Training must be structured — it must follow a formal training plan with defined objectives, timelines and assessment milestones',
      'Training cannot be ordinary employment — the employer must be providing genuine skill development beyond day-to-day work duties',
      'A training plan must be prepared and approved as part of the nomination',
    ],
  },
  {
    title: 'Type 3 — Capacity building overseas (overseas placements and government-supported programs)',
    body: [
      'Training programs aimed at building the capacity of workers for overseas employment — including internships or placements in Australian organisations for workers whose positions are overseas-based, and government-supported training programs. Key points:',
      'Includes placements funded or supported by the Australian government, a foreign government, or an international organisation',
      'The trainee must have an overseas employment position to return to',
      'Includes programs such as those run under the Australia Awards, Pacific Australia Labour Mobility scheme components, and similar',
      'Maximum stay is generally up to 2 years',
    ],
  },
]

const ELIGIBILITY_ITEMS = [
  {
    heading: 'Approved training activity',
    detail: 'The training must fall into one of the three approved activity categories and must be nominated by an approved sponsor.',
  },
  {
    heading: 'Genuine temporary entrant',
    detail: 'The applicant must genuinely intend to stay temporarily. The Department considers whether the applicant has strong ties to their home country and whether their circumstances are consistent with a temporary stay.',
  },
  {
    heading: 'Skills and qualifications',
    detail: 'The applicant must have the skills and experience appropriate for the level of training proposed. For skill-enhancement training, the applicant should already have some base-level skills in the occupation.',
  },
  {
    heading: 'Health and character',
    detail: 'Standard health and character requirements apply, including health examinations and police clearances as required for the visa subclass.',
  },
  {
    heading: 'English language',
    detail: 'A minimum level of English may be required depending on the training type. For most occupational training, a functional level of English is expected. Check the current requirements on the DoHA website.',
  },
]

const SPONSOR_SCENARIOS = [
  {
    title: 'Scenario 1 — The training employer becomes the sponsor',
    desc: 'The Australian business where training will occur applies to become an approved temporary activities sponsor, nominates the training activity, and the overseas worker applies for the 407 visa. This is the most common arrangement for structured workplace training.',
  },
  {
    title: 'Scenario 2 — A third-party sponsor (such as a professional body)',
    desc: 'A professional body or educational institution sponsors the training placement and nominates the training activity. The trainee is placed in a host organisation. Common in medicine and other regulated professions.',
  },
  {
    title: 'Scenario 3 — Government-supported programs',
    desc: 'The Australian government, a foreign government, or an international organisation sponsors the trainee. The employer where training occurs is the host, not the sponsor. Common in capacity-building and development programs.',
  },
]

export default function TrainingVisa407Page({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: 'Training Visa (407)', url: 'https://www.nanakmigration.com.au/training-visa-407' },
        ]}
        faqs={FAQ}
        service={{ name: 'Training Visa (Subclass 407)', description: PAGE_META['training-visa-407'].metaDescription, url: 'https://www.nanakmigration.com.au/training-visa-407' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Employer Sponsored Visas', page: 'employer-sponsored-visas' },
        { label: 'Training Visa (407)' },
      ]} />
      <PageHero
        variant="standard"
        eyebrow="Employer Sponsored"
        eyebrowSub="Training Visa · Subclass 407"
        title={<>Training Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 407</em></>}
        deck="The Training visa (subclass 407) allows eligible people to travel to Australia to undertake occupational training in a workplace, study for tertiary qualifications, or participate in a professional development program. It is not a work visa — training must be the main activity."
        shortAnswer={<>The subclass 407 Training visa is a temporary visa for occupational training in Australia. It requires an approved temporary activities sponsor and a nomination for an approved training activity. There are three types of approved training activity: training required for professional registration or licensing, structured workplace training to enhance skills in an eligible skilled occupation, and capacity-building programs for overseas workers. Visa holders may stay for up to 2 years (limited to the approved training period). Applicants must be genuine temporary entrants with strong ties to their home country. Work is permitted only as part of the approved training program — the 407 cannot be used as a backdoor work visa. Nanak Migration Group (MARN 2619467) can advise on whether the 407 suits your situation. No outcomes can be guaranteed.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Temporary Activity 408 →', page: 'temporary-activity-408' }}
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
          <SectionHeading kicker="What it is" title="The Subclass 407 Training Visa" accent={ACCENT} />
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 20, marginTop: 32 }}>
            The subclass 407 Training visa is a temporary visa that allows eligible people to undertake a structured occupational training program in Australia. It is available to people who need to complete training in Australia to gain skills needed for a job, area of study, or professional development. The visa is administered under the temporary activities framework — the same framework as the subclass 408 Temporary Activity visa.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            The 407 is not a general work visa. While training participants may perform some work as part of their approved training program, the primary purpose of the stay must be training. The Department of Home Affairs assesses applications closely to ensure the training is genuine, structured, and consistent with the approved activity.
          </p>
          <Callout variant="warning" panel={true} title="Not a substitute for a work visa">
            The subclass 407 is frequently misused by employers who want to bring workers to Australia without going through the standard employer sponsorship pathway. The Department of Home Affairs scrutinises 407 applications carefully. If a person's primary purpose is to fill a genuine ongoing position, the subclass 482 Skills in Demand visa is the correct pathway.
          </Callout>
        </div>
      </section>

      {/* Training Types */}
      <section id="training-types" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Three categories" title="Approved Training Activity Types" accent={ACCENT}
            intro="The subclass 407 covers three distinct categories of approved training activity. The type determines the eligibility requirements, nomination process, and duration of stay." />
          <div style={{ marginTop: 40 }}>
            {TRAINING_TYPES.map((type, i) => (
              <div key={i} style={{ borderLeft: `4px solid ${ACCENT}`, background: '#fafbfe', borderRadius: 8, padding: 24, marginBottom: 20 }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: NAVY, marginBottom: 16 }}>{type.title}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, marginBottom: 12 }}>{type.body[0]}</p>
                <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {type.body.slice(1).map((point, j) => (
                    <li key={j} style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Who can apply" title="Eligibility Requirements" accent={ACCENT}
            intro="All of the following requirements must be met for the subclass 407 application to succeed. The Department assesses each requirement at the time of decision." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
            {ELIGIBILITY_ITEMS.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '20px 24px', background: GREY_BG }}>
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
          <div style={{ marginTop: 32 }}>
            <Callout variant="note" panel={true} title="Training plan is essential">
              For structured workplace training (Type 2), a formal training plan must be attached to the nomination. The plan must specify the training objectives, duration, assessment milestones, and the qualifications of the trainer. Generic or vague training plans are a common reason for refusal.
            </Callout>
          </div>
        </div>
      </section>

      {/* Sponsor */}
      <section id="sponsor" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Sponsorship" title="Who Must Sponsor the Training Visa?" accent={ACCENT} />
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 20, marginTop: 32 }}>
            Most subclass 407 visa holders must be nominated by an approved temporary activities sponsor. Unlike the subclass 482 (which requires a Standard Business Sponsor), the 407 uses the temporary activities sponsor framework — a different approval process.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            The following organisations can act as approved temporary activities sponsors for the 407: Australian-registered businesses, government agencies, educational institutions, professional bodies, and some not-for-profit organisations. Individual employers who want to bring a trainee to their workplace must first obtain approval as a temporary activities sponsor.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {SPONSOR_SCENARIOS.map((scenario, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: 20, background: '#fff' }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 8 }}>{scenario.title}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{scenario.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section id="conditions" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What you can and cannot do" title="Visa Conditions and Limitations" accent={ACCENT} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginTop: 32 }}>
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 10, padding: 24, background: GREY_BG, borderTop: `4px solid #16a34a` }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#16a34a', marginBottom: 16 }}>Can Do</div>
              <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <li style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>Perform work as part of the approved training program (Condition 8543 or similar — confirm on DoHA)</li>
                <li style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>Bring dependent family members (partner and dependent children may be able to join on the same visa — check DoHA)</li>
                <li style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>Travel in and out of Australia during the visa validity</li>
                <li style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>Complete the approved training and then depart or apply for another visa if eligible</li>
              </ul>
            </div>
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 10, padding: 24, background: GREY_BG, borderTop: `4px solid #dc2626` }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#dc2626', marginBottom: 16 }}>Cannot Do</div>
              <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <li style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>Work outside the scope of the approved training activity</li>
                <li style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>Use the visa as a general work visa</li>
                <li style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>Change the training activity without Department approval</li>
                <li style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>Sponsor the visa holder as an employee — they are a trainee, not an employee, and employment law obligations differ from standard employment</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: 32 }}>
            <Callout variant="warning" panel={true} title="Condition 8543 — stay and work for approved sponsor">
              Subclass 407 visa holders are typically subject to Condition 8543 (or a similar condition) requiring them to remain employed by and work only for the approved sponsor in the approved training activity. Working outside the approved activity can result in visa cancellation.
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
              Visa application charges are updated periodically by the Department. The information below reflects the position as at August 2026 and should be confirmed on the Department of Home Affairs website before lodging any application.
            </Callout>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151' }}>
            The base application charge for the subclass 407 Training visa is a few hundred Australian dollars for the main applicant, with reduced charges for secondary applicants (dependants). Exact figures should be confirmed on the DoHA website. There is no Skills in Demand levy (SAF levy) requirement for the 407 — that levy applies to subclass 482 and 186 nominations, not to the temporary activities framework.
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
        title="Is the Training visa right for your situation?"
        body="Nanak Migration Group (MARN 2619467) can advise whether the subclass 407 or another pathway suits your training or workforce needs."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
