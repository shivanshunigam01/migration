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
  { id: 'countries', label: 'Partner countries' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'work-rights', label: 'Work rights' },
  { id: 'second-third-year', label: 'Second & third year' },
  { id: 'charges', label: 'Charges' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'plane',
    value: 'Subclass 417',
    label: 'Working Holiday visa',
    note: 'For passport holders from eligible partner countries who want to holiday and work in Australia for up to 12 months.',
  },
  {
    icon: 'user',
    value: '18–35',
    label: 'Age range (varies by country)',
    note: 'Standard age eligibility is 18–30 inclusive. Certain partner countries have an extended upper age limit of 35. Confirm current eligibility on the DoHA website.',
  },
  {
    icon: 'calendar',
    value: '12 months',
    label: 'Maximum stay per grant',
    note: 'Each 417 grant allows a stay of up to 12 months. A second and third year grant may be available after completing specified regional work.',
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
    title: 'Check eligibility',
    desc: 'Confirm your passport country is on the eligible partner country list, that you are within the age range, and that you meet the other eligibility requirements (no dependent children accompanying you, genuine temporary entrant intention).',
  },
  {
    title: 'Create an ImmiAccount and lodge online',
    desc: 'The 417 application is lodged online through ImmiAccount. You must be outside Australia at the time of application, or inside Australia on a current valid visa (in which case you must be outside Australia at the time the visa is granted).',
  },
  {
    title: 'Pay the application charge and provide biometrics if required',
    desc: 'Pay the current government application charge (~AUD 650 — confirm on DoHA). Some nationalities are required to provide biometrics. Check the DoHA website for current biometric requirements for your country.',
  },
  {
    title: 'Await decision',
    desc: 'Many 417 applications are granted within a few days to a few weeks. Processing times vary by country and application volume. Monitor your ImmiAccount for correspondence from the Department.',
  },
  {
    title: 'Arrive and work',
    desc: 'On arrival in Australia, you may work for any employer. Note the 6-month limit per employer and the 4-month study limit. Keep records if you plan to complete specified regional work for a second or third year grant.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'Can I apply for the Working Holiday (417) visa more than once?',
    answer: 'A first Working Holiday (417) visa can generally only be granted once. However, a second 417 visa is available if you have completed at least 88 days (3 months) of specified regional work in Australia on your first 417 visa. A third 417 visa is available if you have completed at least 6 months of specified regional work on your second 417 visa. Specified work must be in a designated regional area and in a qualifying industry (agriculture, forestry, fishing, mining, construction in some contexts). Keep careful records — the Department requires documentary evidence of your regional work.',
  },
  {
    question: 'What is the 6-month employer limit and does it apply to UK passport holders?',
    answer: 'The standard condition on the Working Holiday (417) visa is that you may not work for the same employer for more than 6 months — this applies to the same business, regardless of changes in your role or the location of the work. Working more than 6 months for the same employer is a visa condition breach. Note: as of recent policy changes, UK passport holders on the 417 visa are exempt from the 6-month per employer limit and from the specified work requirement for a second year grant. Confirm the current conditions for your specific visa grant on the DoHA website, as conditions can change.',
  },
  {
    question: "What counts as 'specified regional work' for a second or third year?",
    answer: "Specified work for a second year 417 visa is work in a qualifying industry undertaken in a designated regional area of Australia. Qualifying industries include: plant and animal cultivation (agriculture, fruit picking, harvesting, pruning, packing); fishing and pearling; tree farming and felling; mining; and construction (in some regional areas). The work must be for a genuine employer, genuinely performed, and paid at the correct rate. The Department requires payslips, tax records, employer contact details, and often a Statement of Earnings from the employer. Unpaid work does not qualify. Check the Department's current list of qualifying work and regional postcodes before starting regional work.",
  },
  {
    question: 'Am I eligible for Medicare on a Working Holiday (417) visa?',
    answer: 'Reciprocal healthcare arrangements with Medicare are available to nationals of certain countries on the Working Holiday (417) visa — including the United Kingdom, New Zealand, the Netherlands, Belgium, Finland, Italy, Malta, Norway, Sweden, and the Republic of Ireland. Nationals of other partner countries, including Germany, France, Japan, South Korea, and Canada, are not covered by Medicare on the 417 visa and should arrange private health insurance before travelling. Confirm the current reciprocal healthcare arrangements with Medicare Australia.',
  },
  {
    question: 'Can I study in Australia on the Working Holiday (417) visa?',
    answer: 'Yes, but study is limited to a maximum of 4 months in total across the visa period. This 4-month limit applies to any type of study or training, including English language courses and vocational courses. If you want to study for longer, you need a separate student visa. The 4-month study cap is a visa condition — exceeding it is a breach.',
  },
  {
    question: 'What happens if my Working Holiday visa expires while I am in Australia?',
    answer: "If your Working Holiday (417) visa expires while you are in Australia, you become unlawful — unless you have lodged a valid application for another visa before expiry (which creates a bridging visa). If you are eligible for a second or third year 417 visa and have completed the required regional work, you can apply for the next grant from inside Australia on a bridging visa. If you are not eligible for a further 417 visa and your current visa is about to expire, you must either depart Australia or apply for another visa you are eligible for. Do not overstay — the consequences include an exclusion bar on future applications.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Work and Holiday (462)',
    desc: 'The subclass 462 visa for nationals from countries with bilateral arrangements — including the USA, China, India, and others.',
    icon: 'plane',
    page: 'work-and-holiday-462',
    color: ACCENT,
  },
  {
    title: 'Visitor Visas Hub',
    desc: 'Compare all visitor and temporary options — find the right visa for your situation.',
    icon: 'plane',
    page: 'visitor-visas',
    color: ACCENT,
  },
  {
    title: 'Visitor Visa (600)',
    desc: 'The universal visitor visa for all nationalities — tourist, sponsored family, and business visitor streams.',
    icon: 'plane',
    page: 'visitor-visa-600',
    color: ACCENT,
  },
]

export default function WorkingHoliday417Page({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://nanakmigration.com.au/' },
          { name: 'Visitor & Other', url: 'https://nanakmigration.com.au/visitor-visas' },
          { name: 'Working Holiday Visa (417)', url: 'https://nanakmigration.com.au/working-holiday-417' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Working Holiday Visa (Subclass 417)',
          description: PAGE_META['working-holiday-417'].metaDescription,
          url: 'https://nanakmigration.com.au/working-holiday-417',
        }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Visitor & Other', page: 'visitor-visas' },
          { label: 'Working Holiday Visa (417)' },
        ]}
      />

      <PageHero
        variant="standard"
        eyebrow="Visitor & Other"
        eyebrowSub="Working Holiday · Subclass 417"
        title={<>Working Holiday Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 417</em></>}
        deck="The Working Holiday visa (subclass 417) allows eligible young people from partner countries to holiday in Australia for up to 12 months while funding their trip through temporary employment. A second and third year is available after completing specified regional work."
        shortAnswer={<>The subclass 417 Working Holiday visa is available to passport holders from a set of <strong style={{ color: NAVY }}>partner countries</strong>, generally aged <strong style={{ color: NAVY }}>18 to 30</strong> (or 35 for nationals of some countries including the United Kingdom, Canada, Ireland, France, Italy, and Denmark — confirm current eligibility on the DoHA website). The visa allows a <strong style={{ color: NAVY }}>12-month stay</strong> with full work rights, subject to a <strong style={{ color: NAVY }}>6-month limit per employer</strong> (UK passport holders are currently exempt from this limit). Study is capped at <strong style={{ color: NAVY }}>4 months</strong>. The government application charge is approximately <strong style={{ color: NAVY }}>AUD 650</strong> — confirm the current figure on DoHA. A second or third year grant is available after completing the required regional work. Nanak Migration Group (MARN 2619467) can advise on eligibility and the regional work requirements.</>}
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
          <SectionHeading kicker="What it is" title="The Working Holiday Visa (Subclass 417)" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 16 }}>
            The Working Holiday visa (subclass 417) is a temporary visa that lets eligible young people from partner countries travel and work in Australia. It is designed for people who want to holiday in Australia and fund their travels through temporary employment — not for people seeking to work full-time in a career role throughout their stay, though it does allow genuine employment.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            The 417 is one of two working holiday visa types available for Australia — the other being the Work and Holiday visa (subclass 462), which is available to passport holders from a different set of countries and has somewhat different eligibility requirements. If your passport country is not on the 417 partner country list, you may be eligible for the 462 — or you may not be eligible for either working holiday option.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              {
                icon: 'briefcase',
                title: 'Work for any employer',
                desc: 'You may work for any employer in Australia — there are no restrictions on the type of work or industry. The key limit is 6 months per employer (except for UK passport holders who are currently exempt).',
              },
              {
                icon: 'calendar',
                title: '12 months per grant',
                desc: 'Each Working Holiday (417) visa allows a stay of up to 12 months from the date of first entry into Australia. Multiple entries are generally permitted.',
              },
              {
                icon: 'star',
                title: 'Second and third year available',
                desc: 'After completing 88 days of specified regional work on the first visa, a second year grant is available. A third year is available after 6 months of specified regional work on the second visa.',
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

      {/* ── SECTION: Partner countries ──────────────────────────── */}
      <section id="countries" style={{ background: '#f8fafd', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Eligible nationalities" title="Partner Countries for the Subclass 417" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The subclass 417 is available to passport holders from countries that have a Working Holiday Arrangement with Australia. The list below reflects long-established partner countries — always confirm your country is currently on the list and check your age limit on the DoHA website, as arrangements and age thresholds can change.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginBottom: 32 }}>
            {/* Standard age (18-30) */}
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ padding: '16px 20px', background: NAVY }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>Standard age limit: 18–30</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 4 }}>Confirm on DoHA — arrangements may change</div>
              </div>
              <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap' as const, gap: '8px 12px' }}>
                {['Belgium', 'Cyprus', 'Estonia', 'Finland', 'Germany', 'Hong Kong', 'Iceland', 'Israel', 'Japan', 'Malta', 'Netherlands', 'Norway', 'Portugal', 'Republic of Korea', 'Spain', 'Sweden', 'Taiwan', 'United States of America*'].map(c => (
                  <span key={c} style={{ fontSize: 13, color: '#374151', background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 6, padding: '4px 10px', lineHeight: 1.4 }}>{c}</span>
                ))}
                <div style={{ width: '100%', fontSize: 12, color: '#9ca3af', marginTop: 4 }}>* USA nationals may be eligible for the 417 — confirm on DoHA as arrangements are subject to change.</div>
              </div>
            </div>

            {/* Extended age (18-35) */}
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ padding: '16px 20px', background: ACCENT }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>Extended age limit: 18–35</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', marginTop: 4 }}>These countries have a higher upper age limit — confirm on DoHA</div>
              </div>
              <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap' as const, gap: '8px 12px' }}>
                {['Canada', 'Denmark', 'France', 'Hong Kong', 'Ireland', 'Italy', 'Republic of Korea', 'Taiwan', 'United Kingdom'].map(c => (
                  <span key={c} style={{ fontSize: 13, color: '#374151', background: `${ACCENT}10`, border: `1px solid ${ACCENT}30`, borderRadius: 6, padding: '4px 10px', lineHeight: 1.4 }}>{c}</span>
                ))}
              </div>
            </div>
          </div>

          <Callout variant="warning" panel={true} title="Confirm your country and age limit on DoHA">
            The partner country list and age eligibility thresholds for the subclass 417 can change as Australia enters or updates working holiday arrangements. Before applying, confirm on the Department of Home Affairs website that your country is currently listed and check which age upper limit applies to your passport. Some countries appear in both tables above — always rely on the DoHA website for the definitive current position.
          </Callout>
        </div>
      </section>

      {/* ── SECTION: Eligibility ────────────────────────────────── */}
      <section id="eligibility" style={{ background: '#ffffff', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Who can apply" title="Eligibility Requirements" accent={ACCENT} />

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12, marginBottom: 40 }}>
            {[
              {
                num: '01',
                title: 'Passport from an eligible partner country',
                desc: 'You must hold a passport from a country with a Working Holiday Arrangement with Australia. The arrangement must be in place at the time of application — confirm the current list on the DoHA website.',
              },
              {
                num: '02',
                title: 'Age requirement',
                desc: 'You must be aged 18 to 30 inclusive at the time of application (or 18 to 35 for nationals of certain countries). The relevant date is the date the application is lodged — you cannot lodge if you have already turned 31 (or 36 for eligible countries) even if you were under the age limit at some earlier point.',
              },
              {
                num: '03',
                title: 'No dependent children accompanying you',
                desc: "You must not have any children accompanying you during your stay. The 417 is not designed for people travelling with dependent children. If you have dependent children, you will need to consider a different visa pathway.",
              },
              {
                num: '04',
                title: 'Primary purpose of entry is holiday',
                desc: 'The 417 is a working holiday visa — not a work visa. Your primary purpose in Australia must be holiday and travel, with work as a means of funding that travel. People whose primary purpose is full-time employment throughout the stay are not the intended applicants, though the visa does allow genuine employment.',
              },
              {
                num: '05',
                title: 'Health and character requirements',
                desc: 'You must meet the standard health and character requirements that apply to all Australian visa applications. Health checks (medical examination) are not always required for the 417 but may be requested by the Department in some cases. You must not have any criminal convictions that would raise character concerns.',
              },
              {
                num: '06',
                title: 'First 417 visa not previously held (for first-grant applications)',
                desc: 'A first Working Holiday (417) visa can generally only be granted once. A second or third 417 visa requires completion of the relevant specified regional work — these are separate criteria. You cannot simply reapply for the 417 as a way to extend your stay in Australia without meeting the regional work requirements.',
              },
            ].map(factor => (
              <div
                key={factor.num}
                style={{ borderLeft: `4px solid ${ACCENT}`, background: '#f8fafd', padding: '20px 24px', borderRadius: '0 12px 12px 0' }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: ACCENT, letterSpacing: '0.1em' }}>{factor.num}</span>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>{factor.title}</div>
                </div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: Work rights ────────────────────────────────── */}
      <section id="work-rights" style={{ background: '#f8fafd', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Employment conditions" title="Work Rights on the Working Holiday (417) Visa" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The subclass 417 grants full work rights in Australia — you may work in any industry and for any employer, without requiring a specific employer to sponsor you. However, several conditions apply to how long you can stay with a single employer and what activities are allowed.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 32 }}>
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 14 }}>6-month employer limit</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'You may not work for the same employer for more than 6 months',
                  'The limit applies to the same business entity regardless of role, location, or business name changes',
                  'Sub-contracting through a labour-hire firm counts as working for the end employer',
                  'Exceeding 6 months with the same employer is a visa condition breach',
                  'UK passport holders: currently exempt from the 6-month limit — confirm your specific visa conditions on grant',
                ].map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: `${ACCENT}14`, border: `1px solid ${ACCENT}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="info" size={10} color={ACCENT} />
                    </div>
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 14 }}>Study limit and other conditions</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Study is permitted for up to 4 months in total across the entire visa period',
                  'The 4-month study cap covers any type of study or training, including English language and vocational courses',
                  'Exceeding 4 months of study is a visa condition breach',
                  'The visa does not impose a limit on the type of work, industry, or earnings',
                  'Tax obligations — income earned in Australia is taxable; ensure you have an Australian Tax File Number (TFN)',
                ].map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: `${ACCENT}14`, border: `1px solid ${ACCENT}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="info" size={10} color={ACCENT} />
                    </div>
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Callout variant="note" panel={true} title="Superannuation (retirement savings)">
            Employers must pay superannuation contributions for all employees, including Working Holiday visa holders, once earnings exceed the relevant threshold. When you depart Australia permanently, you can claim your accumulated superannuation balance as a Departing Australia Superannuation Payment (DASP) — though a tax withholding rate applies. Keep your superannuation fund details for when you depart.
          </Callout>
        </div>
      </section>

      {/* ── SECTION: Second and third year ─────────────────────── */}
      <section id="second-third-year" style={{ background: '#ffffff', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Extending your stay" title="Second and Third Year Working Holiday Grants" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            The Working Holiday (417) visa can be extended for a second and then a third year if you complete the required specified regional work in Australia. The regional work requirement ensures that holders spend time working in regional areas that have genuine labour needs in qualifying industries.
          </p>

          <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 14, minWidth: 600 }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  {['Grant', 'Required regional work', 'Key notes'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', color: '#fff', fontWeight: 700, fontSize: 12, textAlign: 'left' as const, letterSpacing: '0.04em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    grant: 'Second 417 visa',
                    work: '88 days (3 months) of specified regional work completed on the first 417 visa',
                    notes: 'UK passport holders are currently exempt from the specified work requirement for a second year — confirm conditions on DoHA.',
                  },
                  {
                    grant: 'Third 417 visa',
                    work: '6 months of specified regional work completed on the second 417 visa',
                    notes: 'Available to most eligible nationalities. Confirm current eligibility on DoHA.',
                  },
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

          <div style={{ background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 12, padding: 24, marginBottom: 24 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 14 }}>Qualifying industries for specified regional work</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
              {[
                'Plant and animal cultivation (agriculture, horticulture, fruit picking, pruning)',
                'Fishing and pearling',
                'Tree farming and felling',
                'Mining',
                'Construction in regional areas (confirm current list on DoHA)',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 6 }} />
                  <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Callout variant="warning" panel={true} title="Keep detailed records of your regional work">
            The Department requires clear documentary evidence of specified regional work: payslips, employer details, bank records showing payment, and often a Statement of Earnings. Casual and seasonal workers in agriculture are at risk of having their work not accepted if records are incomplete. Do not rely solely on your employer to provide records later — collect and retain documents as you go.
          </Callout>
        </div>
      </section>

      {/* ── SECTION: Application process ────────────────────────── */}
      <section id="charges" style={{ background: '#f8fafd', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Applying" title="How to Apply and What It Costs" accent={ACCENT} />

          <StepTimeline steps={STEPS} accent={ACCENT} />

          <div style={{ overflowX: 'auto' as const, marginTop: 40, marginBottom: 24 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 14, minWidth: 500 }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  {['Item', 'Approximate amount', 'Notes'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', color: '#fff', fontWeight: 700, fontSize: 12, textAlign: 'left' as const, letterSpacing: '0.04em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { item: 'First 417 visa (all nationalities)', amount: '~AUD 650', notes: 'Per application — confirm on DoHA' },
                  { item: 'Second 417 visa', amount: '~AUD 650', notes: 'Same charge applies — confirm on DoHA' },
                  { item: 'Third 417 visa', amount: '~AUD 650', notes: 'Same charge applies — confirm on DoHA' },
                ].map((row, i) => (
                  <tr key={row.item} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafd', borderBottom: '1px solid #e8edf6' }}>
                    <td style={{ padding: '13px 16px', fontWeight: 500, color: NAVY }}>{row.item}</td>
                    <td style={{ padding: '13px 16px', color: '#374151', fontWeight: 600 }}>{row.amount}</td>
                    <td style={{ padding: '13px 16px', color: '#6b7280', fontSize: 13 }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout variant="warning" panel={true} title="Confirm current charges on the Department of Home Affairs website">
            All charges listed above are approximate amounts current at August 2026. Government visa charges are indexed annually and change. Confirm the current application charge on the DoHA ImmiAccount system before lodging your application.
          </Callout>
        </div>
      </section>

      {/* ── SECTION: FAQ ────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#ffffff', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Working Holiday (417) Questions Answered" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── SECTION: Related pages ──────────────────────────────── */}
      <section id="related" style={{ background: '#f8fafd', padding: '64px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Explore further" title="Related Visa Pages" accent={ACCENT} marginBottom={36} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={3} />
        </div>
      </section>

      <CtaBand
        title="Questions about the Working Holiday (417) visa?"
        body="Nanak Migration Group (MARN 2619467) can advise on eligibility, regional work requirements, and what to do if your application is refused or a condition is breached."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
