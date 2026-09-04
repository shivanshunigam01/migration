import React from 'react'
import { GOLD, NAVY, CAT_VISITOR } from '@/theme'
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

const ACCENT = CAT_VISITOR

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'countries', label: 'Eligible countries' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'ballot', label: 'Ballot system' },
  { id: 'work-rights', label: 'Work rights' },
  { id: 'second-third-year', label: 'Second & third year' },
  { id: 'comparison', label: '417 vs 462' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'plane',
    value: 'Subclass 462',
    label: 'Work and Holiday visa',
    note: 'For eligible nationals from countries with a bilateral arrangement — separate from the 417 partner country list.',
  },
  {
    icon: 'user',
    value: '18–30',
    label: 'Age requirement',
    note: 'Must be aged 18 to 30 inclusive at time of application. No extended age range for any 462 country as of August 2026 — confirm on DoHA.',
  },
  {
    icon: 'calendar',
    value: '12 months',
    label: 'Maximum stay per grant',
    note: 'Each 462 grant allows a stay of up to 12 months. Second and third year grants are available after specified regional work.',
  },
  {
    icon: 'dollar',
    value: '~AUD 650',
    label: 'Application charge',
    note: 'Approximate government charge at August 2026. Confirm the current charge on the Department of Home Affairs website before lodging.',
  },
]

const STEPS: TimelineStep[] = [
  {
    title: 'Check eligibility — including any country-specific requirements',
    desc: 'The 462 has both universal eligibility criteria and country-specific additional requirements. Many countries require applicants to have a tertiary qualification (or be enrolled in tertiary study), demonstrate functional English, and hold a government support letter. Check DoHA for the current requirements for your country.',
  },
  {
    title: 'Check for annual caps and ballot requirements',
    desc: 'Several 462 countries have annual caps on the number of places available. If your country uses a ballot system, you must enter the ballot during the open period and receive an invitation before lodging an application. Confirm whether your country requires a ballot on the DoHA website.',
  },
  {
    title: 'Obtain required supporting documents',
    desc: 'Depending on your country of passport, you may need: a government support letter (issued by your home country government), evidence of tertiary qualifications, an English language test result, a health clearance, and biometrics. Gather these before lodging.',
  },
  {
    title: 'Lodge online through ImmiAccount',
    desc: 'The 462 application is lodged online through ImmiAccount. You must hold a valid invitation if your country uses a ballot system. Pay the application charge at time of lodgement.',
  },
  {
    title: 'Await decision and arrive',
    desc: 'Processing times vary by country and application volume. Once granted, you may enter Australia and commence work and holiday activities. Keep records of any specified regional work for a second year application.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: "What is a 'government support letter' and how do I get one?",
    answer: "Many 462 countries require applicants to obtain a government support letter from their home country government as part of the visa application. The letter confirms that the home country government approves the applicant's participation in the Work and Holiday arrangement with Australia. The process for obtaining the letter varies by country — in some countries it is issued through a government ministry, in others through an embassy or an online application. You must obtain this letter before lodging your 462 application. The letter is not the same as a ballot invitation. Check the DoHA website for the current requirements for your country and contact your home country government for the specific process.",
  },
  {
    question: 'How does the ballot system work for the Work and Holiday (462) visa?',
    answer: "Some 462 countries have annual caps on the number of places available — more applicants want the visa each year than there are places. For these countries, the Department runs a ballot (lottery) system. Each year, the Department opens a ballot registration window — typically for a few weeks — during which eligible applicants can register their interest. Registrations are randomly drawn and successful registrants receive an invitation to apply. The ballot window and invitation timing vary each year — for recent popular countries like India and China, ballots typically open mid-year (around July to September). Confirm the current ballot schedule on the DoHA website. Registering in the ballot is not the same as lodging a visa application — you must wait for the invitation before applying.",
  },
  {
    question: "What is the 'functional English' requirement for the 462?",
    answer: "Several 462 countries require applicants to demonstrate functional English as part of the eligibility requirements. Functional English can be demonstrated by: an IELTS score of at least 4.5 in each component (or equivalent in another accepted test); completing at least 5 years of secondary or tertiary education conducted in English; or being a national of a country where English is an official language. The specific English evidence accepted varies by country — confirm on the DoHA website the current requirement for your country of passport.",
  },
  {
    question: "What is the difference between the 462 and the 417?",
    answer: "The key differences are: (1) Eligible countries — the 462 is available to nationals from countries that are not on the 417 partner country list (including the USA, China, India, Vietnam, Indonesia, Thailand, Malaysia, Singapore, Argentina, Chile, and others); (2) Additional requirements — the 462 has country-specific requirements (tertiary education, English test, government support letter) that the 417 generally does not; (3) Annual caps and ballots — some 462 countries have annual place limits and use a ballot system; the 417 generally does not have caps; (4) Age — both require applicants to be 18-30, but some 417 countries allow up to 35; the 462 age limit is consistently 18-30. The work conditions (6 months per employer, 4 months study cap, second/third year regional work) are similar across both.",
  },
  {
    question: 'Am I eligible for a second or third year 462 visa?',
    answer: 'A second 462 visa is available if you complete 88 days (3 months) of specified regional work in Australia on your first 462 visa. A third 462 visa is available after completing 6 months of specified regional work on your second 462 visa. The specified work and regional area requirements are the same as for the 417 — qualifying industries include agriculture, fishing, mining, and others in designated regional areas. Keep detailed records of your regional work. Confirm the current eligibility requirements on the DoHA website as they can change.',
  },
  {
    question: 'Can I apply for the 462 visa from inside Australia?',
    answer: 'The 462 visa can generally be lodged from outside Australia (offshore). Whether an onshore lodgement is possible depends on your specific circumstances and whether your country allows it — this is not available for all 462 nationalities. You should also be aware that for countries using a ballot system, lodging without a valid invitation is not permitted. If you are currently in Australia and want to stay on, you may need to depart to lodge, or explore other visa options. Seeking advice from a registered migration agent before your current visa expires is strongly recommended.',
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Working Holiday (417)',
    desc: 'The subclass 417 for partner country passport holders — the other working holiday visa type.',
    icon: 'plane',
    page: 'working-holiday-417',
    color: ACCENT,
  },
  {
    title: 'Visitor Visas Hub',
    desc: 'Compare all visitor and temporary options for Australia.',
    icon: 'plane',
    page: 'visitor-visas',
    color: ACCENT,
  },
  {
    title: 'Visitor Visa (600)',
    desc: 'The universal visitor visa for all nationalities — tourist, sponsored family, business and frequent traveller streams.',
    icon: 'plane',
    page: 'visitor-visa-600',
    color: ACCENT,
  },
]

export default function WorkAndHoliday462Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['work-and-holiday-462'].title }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://nanakmigration.com.au/' },
          { name: 'Visitor & Other', url: 'https://nanakmigration.com.au/visitor-visas' },
          { name: 'Work and Holiday Visa (462)', url: 'https://nanakmigration.com.au/work-and-holiday-462' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Work and Holiday Visa (Subclass 462)',
          description: PAGE_META['work-and-holiday-462'].metaDescription,
          url: 'https://nanakmigration.com.au/work-and-holiday-462',
        }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Visitor & Other', page: 'visitor-visas' },
          { label: 'Work and Holiday Visa (462)' },
        ]}
      />

      <PageHero
        variant="standard"
        eyebrow="Visitor & Other"
        eyebrowSub="Work and Holiday · Subclass 462"
        title={<>Work and Holiday Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 462</em></>}
        deck="The Work and Holiday visa (subclass 462) allows eligible young people from countries with bilateral arrangements to holiday and work in Australia for up to 12 months. Many 462 countries have additional eligibility requirements and some use an annual ballot (lottery) system to manage demand."
        shortAnswer={<>The subclass 462 Work and Holiday visa is available to nationals from eligible countries including the <strong style={{ color: NAVY }}>USA, China, India, Vietnam, Indonesia, Thailand, Malaysia, Singapore, Argentina, Chile</strong>, and others (confirm the current list on DoHA). Applicants must be aged <strong style={{ color: NAVY }}>18 to 30</strong> and meet any <strong style={{ color: NAVY }}>country-specific requirements</strong> — which for many countries include tertiary education evidence, a functional English demonstration, and a <strong style={{ color: NAVY }}>government support letter</strong> from the home country. Several countries have <strong style={{ color: NAVY }}>annual caps and a ballot system</strong> — places are allocated by lottery, and applicants must hold an invitation before lodging. The government charge is approximately <strong style={{ color: NAVY }}>AUD 650</strong> — confirm the current figure on DoHA. Nanak Migration Group (MARN 2619467) can advise on your country's specific requirements and ballot timing.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← Visitor & Other', page: 'visitor-visas' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <KeyFactsStrip facts={FACTS} accent={ACCENT} />

      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>

      {/* Sticky jump bar */}
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

      {/* ── SECTION: Overview ───────────────────────────────────── */}
      <section id="overview" style={{ background: '#ffffff', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="What it is" title="The Work and Holiday Visa (Subclass 462)" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 16 }}>
            The Work and Holiday visa (subclass 462) enables eligible young people from countries with bilateral work and holiday arrangements with Australia to travel and work here for up to 12 months. It is parallel to the Working Holiday visa (subclass 417) but covers a different set of countries — generally those that are not on the 417 partner country list.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            A key difference from the 417 is that the 462 has additional country-specific eligibility requirements, and for many high-demand countries, places are limited by an annual cap with a ballot (lottery) to determine who receives an invitation to apply. Understanding whether your country requires a ballot, and when the ballot opens, is critical to planning your application.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              {
                icon: 'globe',
                title: 'Bilateral arrangements',
                desc: 'Australia has Work and Holiday arrangements with a specific set of countries. Unlike the 417, the 462 is not a single type — each country has its own arrangement, eligibility requirements, and in some cases, its own annual cap.',
              },
              {
                icon: 'briefcase',
                title: 'Full work rights',
                desc: 'Like the 417, the 462 allows you to work for any employer in Australia. The 6-month per employer limit applies. Study is capped at 4 months.',
              },
              {
                icon: 'star',
                title: 'Second and third year available',
                desc: 'After completing 88 days of specified regional work, a second year 462 visa is available. A third year follows 6 months of specified regional work on the second visa.',
              },
            ].map(feat => (
              <div key={feat.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 20, background: '#f8fafd', borderRadius: 12, border: '1px solid #e8edf6' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${ACCENT}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={feat.icon} size={18} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{feat.title}</div>
                  <div style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65 }}>{feat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: Eligible countries ─────────────────────────── */}
      <section id="countries" style={{ background: '#f8fafd', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Which nationalities" title="Countries with Work and Holiday (462) Arrangements" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            Australia has Work and Holiday arrangements with the following countries (list current at August 2026 — confirm on the Department of Home Affairs website before applying, as arrangements can change and new countries may be added):
          </p>

          <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 14, padding: 28, marginBottom: 32 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '10px 14px' }}>
              {[
                'Argentina', 'Bangladesh', 'Chile', "China (People's Republic)", 'Ecuador', 'India',
                'Indonesia', 'Israel', 'Malaysia', 'Mongolia', 'Nepal', 'Oman', 'Peru', 'Philippines',
                'Poland', 'Portugal', 'Singapore', 'Spain', 'Sri Lanka', 'Thailand', 'Turkey',
                'United Arab Emirates', 'United States of America', 'Uruguay', 'Vietnam',
              ].map(c => (
                <span key={c} style={{ fontSize: 13, color: '#374151', background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 6, padding: '5px 12px', lineHeight: 1.4 }}>{c}</span>
              ))}
            </div>
          </div>

          <Callout variant="warning" panel={true} title="Confirm your country's current status and requirements on DoHA">
            The 462 country list, annual caps, and ballot arrangements change from time to time as Australia negotiates or amends bilateral agreements. Some countries listed above have annual place limits and require applicants to enter a ballot before applying — and the ballot rules, timing, and quota for each country are set each year. Always confirm the current position for your specific country on the Department of Home Affairs website before making any plans.
          </Callout>
        </div>
      </section>

      {/* ── SECTION: Eligibility ────────────────────────────────── */}
      <section id="eligibility" style={{ background: '#ffffff', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Requirements" title="Eligibility for the Subclass 462" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The subclass 462 has both universal requirements that apply to all applicants, and country-specific additional requirements that depend on the arrangement Australia has with your home country. Both sets of requirements must be met.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            <div style={{ background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 14 }}>Universal requirements (all countries)</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Passport from a country with a 462 arrangement',
                  'Aged 18 to 30 inclusive at time of application',
                  'No dependent children accompanying you during stay',
                  'Primary purpose of visit is holiday',
                  'Meet health and character requirements',
                  'Have not previously held the 462 (for a first grant)',
                  'Have sufficient funds to support yourself in Australia',
                ].map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: `${ACCENT}14`, border: `1px solid ${ACCENT}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="check" size={10} color={ACCENT} />
                    </div>
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 14 }}>Country-specific additional requirements</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Government support letter from home country government (required for many countries)',
                  'Tertiary qualification or current tertiary enrolment (required for many countries)',
                  'Functional English — IELTS 4.5+ in each band or equivalent (required for many countries)',
                  'Health examination (required for some countries)',
                  'Ballot invitation (required if your country has an annual cap)',
                ].map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(245,161,36,0.12)', border: '1px solid rgba(245,161,36,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="alert" size={10} color={GOLD} />
                    </div>
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 14, fontSize: 12, color: '#9ca3af', lineHeight: 1.5 }}>Confirm the specific requirements for your country on the DoHA website.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: Ballot system ──────────────────────────────── */}
      <section id="ballot" style={{ background: '#f8fafd', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Annual caps and lotteries" title="How the 462 Ballot System Works" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            For high-demand countries where the number of applicants exceeds the annual cap, the Department of Home Affairs uses a ballot (lottery) system to determine who receives an invitation to apply. Understanding how this works is essential for planning your 462 application.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 0 }}>
            {[
              {
                num: '01',
                title: 'Annual caps are set each financial year',
                desc: "Each year, the Department sets the number of 462 places available for each capped country. The cap can change from year to year. For high-demand countries like India, China, and Vietnam, demand has consistently exceeded the annual cap — meaning not all eligible applicants who register will receive an invitation. The cap for your country in the current year is published on the DoHA website.",
              },
              {
                num: '02',
                title: 'Ballot registration opens at a specific time each year',
                desc: "The ballot registration window — the period during which eligible people can register their interest — typically opens mid-year (often July to September) but the exact dates vary each year and by country. When the registration window opens, eligible applicants can submit a registration online. This is not a visa application — it is registration for the ballot only. No charge applies for ballot registration itself.",
              },
              {
                num: '03',
                title: 'Random selection determines who receives an invitation',
                desc: "Once the registration window closes, the Department randomly draws registrations up to the cap for that country. There is no merit-based selection — it is a lottery. Meeting all the eligibility requirements does not guarantee selection. If you are selected, you receive an invitation to apply for the 462 visa and must lodge the visa application within the invitation validity period.",
              },
              {
                num: '04',
                title: 'Unselected registrants must wait until the next year',
                desc: "If you register and are not selected, you cannot simply apply without an invitation. You would need to register again in the next year's ballot — if you still meet the age requirement. This means applicants should register as early as possible each year the ballot opens, and factor in the possibility of not being selected in their planning.",
              },
              {
                num: '05',
                title: 'After receiving an invitation',
                desc: "Once you have an invitation, you lodge the 462 application in the normal way through ImmiAccount, providing all required documents (government support letter, English evidence, tertiary qualification, health checks if required) and paying the application charge. The invitation is time-limited — you must lodge within the period specified in the invitation.",
              },
            ].map(step => (
              <div
                key={step.num}
                style={{ borderLeft: `4px solid ${ACCENT}`, background: '#fff', padding: '20px 24px', marginBottom: 12, borderRadius: '0 12px 12px 0' }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: ACCENT, letterSpacing: '0.1em' }}>{step.num}</span>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>{step.title}</div>
                </div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <Callout variant="warning" panel={true} title="Confirm current ballot dates and caps on DoHA">
            Ballot opening dates, registration periods, and annual caps change each year. The information above describes how the system generally operates — for the specific dates and caps for your country in the current year, confirm on the Department of Home Affairs website. Missing the registration window means waiting until the next year.
          </Callout>
        </div>
      </section>

      {/* ── SECTION: Work rights ────────────────────────────────── */}
      <section id="work-rights" style={{ background: '#ffffff', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Employment conditions" title="Work Rights on the Work and Holiday (462) Visa" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The subclass 462 grants full work rights in Australia — you may work for any employer in any industry without a sponsor. The conditions are essentially the same as the 417.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {[
              {
                title: '6-month employer limit',
                points: [
                  'You may not work for the same employer for more than 6 months',
                  'Applies to the same business entity regardless of your role or location',
                  'Sub-contracting through a labour-hire firm to the same end employer counts',
                  'Exceeding 6 months with the same employer is a visa condition breach',
                ],
              },
              {
                title: 'Study and other conditions',
                points: [
                  'Study is capped at 4 months in total across the visa period',
                  'The 4-month cap covers all types of study and training',
                  'There is no restriction on industry type, earnings, or number of employers',
                  'Tax obligations apply — ensure you have an Australian Tax File Number',
                ],
              },
            ].map(card => (
              <div key={card.title} style={{ background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 14 }}>{card.title}</div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                  {card.points.map((point, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <div style={{ width: 20, height: 20, borderRadius: '50%', background: `${ACCENT}14`, border: `1px solid ${ACCENT}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <Icon name="info" size={10} color={ACCENT} />
                      </div>
                      <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: Second and third year ─────────────────────── */}
      <section id="second-third-year" style={{ background: '#f8fafd', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Extending your stay" title="Second and Third Year Work and Holiday Grants" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            Like the 417, the 462 can be extended for a second and third year through the completion of specified regional work. The requirements are the same as for the 417.
          </p>

          <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 14, minWidth: 500 }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  {['Grant', 'Specified work required', 'Notes'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', color: '#fff', fontWeight: 700, fontSize: 12, textAlign: 'left' as const, letterSpacing: '0.04em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { grant: 'Second 462 visa', work: '88 days (3 months) of specified regional work on first 462', notes: 'Confirm qualifying work and regional areas on DoHA' },
                  { grant: 'Third 462 visa', work: '6 months of specified regional work on second 462', notes: 'Confirm current eligibility on DoHA' },
                ].map((row, i) => (
                  <tr key={row.grant} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafd', borderBottom: '1px solid #e8edf6' }}>
                    <td style={{ padding: '13px 16px', fontWeight: 600, color: NAVY }}>{row.grant}</td>
                    <td style={{ padding: '13px 16px', color: '#374151' }}>{row.work}</td>
                    <td style={{ padding: '13px 16px', color: '#6b7280', fontSize: 13 }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout variant="warning" panel={true} title="Keep detailed records of your regional work">
            Payslips, employer contact details, bank records, and a Statement of Earnings are needed to demonstrate regional work. Collect records as you go — do not rely on obtaining them later. Qualifying industries include agriculture, horticulture, fishing, pearling, tree farming, mining, and some construction in regional areas.
          </Callout>
        </div>
      </section>

      {/* ── SECTION: 417 vs 462 Comparison ─────────────────────── */}
      <section id="comparison" style={{ background: '#ffffff', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading kicker="Which one applies to you" title="Working Holiday (417) vs Work and Holiday (462)" accent={ACCENT} />

          <div style={{ overflowX: 'auto' as const }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 14, minWidth: 640 }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  {['Feature', 'Subclass 417 (Working Holiday)', 'Subclass 462 (Work and Holiday)'].map(h => (
                    <th key={h} style={{ padding: '14px 18px', color: '#fff', fontWeight: 700, fontSize: 12, textAlign: 'left' as const, letterSpacing: '0.04em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Eligible countries', v417: 'Partner country passport holders (UK, Germany, Japan, South Korea, France, etc.)', v462: 'Countries with bilateral arrangements (USA, China, India, Vietnam, Indonesia, Thailand, etc.)' },
                  { feature: 'Age range', v417: '18–30 (up to 35 for some countries including UK, Canada, Ireland, France, Italy)', v462: '18–30 (no country has an extended upper age limit as at August 2026 — confirm on DoHA)' },
                  { feature: 'Additional requirements', v417: 'Generally none beyond the universal criteria', v462: 'Government support letter, tertiary education, functional English (requirements vary by country)' },
                  { feature: 'Annual caps and ballot', v417: 'Generally no annual cap or ballot system', v462: 'Some countries have annual caps and a ballot (lottery) — applicants must hold an invitation before applying' },
                  { feature: '6-month employer limit', v417: 'Yes (UK passport holders currently exempt — confirm)', v462: 'Yes (no current exemptions)' },
                  { feature: 'Study cap', v417: '4 months', v462: '4 months' },
                  { feature: 'Second year', v417: '88 days regional work (UK exempt from regional work requirement)', v462: '88 days regional work' },
                  { feature: 'Third year', v417: '6 months regional work', v462: '6 months regional work' },
                  { feature: 'Application charge', v417: '~AUD 650 (confirm on DoHA)', v462: '~AUD 650 (confirm on DoHA)' },
                ].map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafd', borderBottom: '1px solid #e8edf6' }}>
                    <td style={{ padding: '13px 18px', fontWeight: 600, color: NAVY, whiteSpace: 'nowrap' as const }}>{row.feature}</td>
                    <td style={{ padding: '13px 18px', color: '#374151', fontSize: 13 }}>{row.v417}</td>
                    <td style={{ padding: '13px 18px', color: '#374151', fontSize: 13 }}>{row.v462}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 16, fontSize: 12, color: '#9ca3af', lineHeight: 1.5 }}>
            All figures and conditions current at August 2026 — confirm on the Department of Home Affairs website before applying.
          </div>
        </div>
      </section>

      {/* ── SECTION: FAQ ────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#f8fafd', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Work and Holiday (462) Questions Answered" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── SECTION: Related pages ──────────────────────────────── */}
      <section id="related" style={{ background: '#ffffff', padding: '64px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Explore further" title="Related Visa Pages" accent={ACCENT} marginBottom={36} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={3} />
        </div>
      </section>

      <CtaBand
        title="Need help navigating the 462 ballot or requirements?"
        body="Nanak Migration Group (MARN 2619467) can advise on your country's specific requirements, ballot timing, and what to do if your application is refused."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
