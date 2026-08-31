import React, { useState } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  SectionHeading,
  FaqAccordion,
  CtaBand,
  ComplianceDisclaimer,
  AnswerBox,
  RelatedPages,
} from '@/components/page'
import type { FaqItem, RelatedPage } from '@/components/page'
import { GOLD, NAVY, NAVY_DARK, NAVY_MID, CAT_EMPLOYER } from '@/theme'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'
import Icon from '@/components/ui/Icon'

const CURRENT_AS_AT = 'August 2026'

const EMPLOYER_RELATED: RelatedPage[] = [
  { title: 'Employer Nomination Scheme (186)', desc: 'Permanent residency via employer nomination.', icon: 'award', page: 'employer-nomination-scheme' },
  { title: 'Skills in Demand (482) Visa', desc: 'The main temporary employer-sponsored visa.', icon: 'star', page: 'skills-in-demand-visa' },
  { title: 'Standard Business Sponsorship', desc: 'How to become an approved employer sponsor.', icon: 'building', page: 'standard-business-sponsorship' },
  { title: '482 to PR Pathway', desc: 'Transition from 482 to permanent residence.', icon: 'arrowright', page: '482-to-pr-pathway' },
]

// ── Real 2024-25 DHA fee data ────────────────────────────────
const FEE_DATA: Record<string, {
  safLevy: { small: number; standard: number } | null
  nominationFee: number
  visaFee: { primary: number; secondary_adult: number; secondary_child: number }
  agentLow: number; agentHigh: number
  processingWeeks: { sbs: string; nomination: string; visa: string }
}> = {
  '482': {
    safLevy: { small: 1200, standard: 1800 },
    nominationFee: 0,
    visaFee: { primary: 3115, secondary_adult: 1555, secondary_child: 780 },
    agentLow: 3500, agentHigh: 6000,
    processingWeeks: { sbs: '4–8 wks', nomination: '2–6 wks', visa: '8–16 wks' },
  },
  '186': {
    safLevy: null,
    nominationFee: 540,
    visaFee: { primary: 4640, secondary_adult: 2320, secondary_child: 1160 },
    agentLow: 5000, agentHigh: 9000,
    processingWeeks: { sbs: '4–8 wks', nomination: '4–12 wks', visa: '12–24 mo' },
  },
  '494': {
    safLevy: { small: 1200, standard: 1800 },
    nominationFee: 330,
    visaFee: { primary: 3460, secondary_adult: 1730, secondary_child: 865 },
    agentLow: 4000, agentHigh: 7000,
    processingWeeks: { sbs: '4–8 wks', nomination: '4–8 wks', visa: '10–18 wks' },
  },
}

const VISA_INFO = [
  {
    code: '482',
    name: 'Skills in Demand',
    tag: 'Most Common',
    tagColor: GOLD,
    duration: 'Up to 4 years',
    prPathway: 'Yes — via 186',
    stream: 'Medium-term or Short-term',
    tsmit: '$73,150 (2024–25)',
    summary: 'The go-to visa for businesses needing to fill skill gaps quickly. Sponsor overseas workers in approved occupations while they build a pathway to permanent residence.',
    bestFor: ['Filling immediate skill shortages', 'Tech, healthcare, trades', 'Businesses of any size'],
    obligations: ['Pay equivalent local salary', 'Maintain sponsorship approval', 'Notify DHA of changes'],
    icon: 'briefcase',
  },
  {
    code: '186',
    name: 'Employer Nomination Scheme',
    tag: 'Permanent Residency',
    tagColor: '#f5a124',
    duration: 'Permanent',
    prPathway: 'This IS PR',
    stream: 'Direct Entry or TRT',
    tsmit: '$73,150 (2024–25)',
    summary: 'Nominate a skilled worker for permanent residence directly, or via the Temporary Residence Transition stream after 3 years on a 482 visa.',
    bestFor: ['Long-term retention of key staff', 'Rewarding 482 visa holders', 'Direct entry for experienced workers'],
    obligations: ['Genuine position must exist', 'Pay at least the nominated salary', 'Ongoing business operation'],
    icon: 'award',
  },
  {
    code: '494',
    name: 'Skilled Employer Sponsored Regional',
    tag: 'Regional',
    tagColor: '#2563eb',
    duration: '5 years',
    prPathway: 'Yes — via 191 after 3 yrs',
    stream: 'Employer Sponsored',
    tsmit: '$73,150 (2024–25)',
    summary: 'Sponsor skilled workers to live and work in designated regional Australia. Stronger occupation lists and a clear pathway to permanent residence via Subclass 191.',
    bestFor: ['Regional employers outside major cities', 'Agriculture, mining, healthcare in regions', 'Businesses wanting longer tenure'],
    obligations: ['Business must be in designated regional area', 'Worker must live and work regionally', 'Adhere to labour market requirements'],
    icon: 'mappin',
  },
]

const OBLIGATIONS = [
  { title: 'Pay Market Salary Rate', desc: 'You must pay the sponsored worker at least the annual market salary rate — or the Temporary Skilled Migration Income Threshold (TSMIT), whichever is higher.', icon: 'dollar', status: 'critical' },
  { title: 'Equivalent Terms & Conditions', desc: "The sponsored worker's employment conditions must not be less favourable than those you'd offer an equivalent Australian citizen in the same role.", icon: 'scale', status: 'critical' },
  { title: 'Cooperate with Inspectors', desc: 'You must allow DHA inspectors access to your premises and records to verify compliance with sponsorship obligations.', icon: 'eye', status: 'important' },
  { title: 'Keep Records', desc: 'Maintain records of all employment terms, payslips, and taxation documents for each sponsored worker for the duration of sponsorship.', icon: 'file', status: 'important' },
  { title: 'Notify DHA of Changes', desc: 'Notify the Department of Home Affairs within 28 days of changes to the sponsored worker\'s employment: termination, role change, location change.', icon: 'clipboard', status: 'important' },
  { title: 'No Cost Recovery from Worker', desc: 'You cannot make the sponsored worker pay or reimburse you for any sponsorship-related costs — including the Skilling Australians Fund levy.', icon: 'xcirc', status: 'critical' },
]

const CASE_STUDIES = [
  {
    sector: 'Technology',
    company: 'SaaS Scale-up — Melbourne',
    headcount: '80 staff',
    challenge: 'Critical shortage of senior software engineers. Local recruitment yielded 3 candidates in 6 months — none suitable.',
    solution: '482 Skills in Demand (SID) visas for 4 engineers from India and the Philippines. Standard Business Sponsorship obtained in 5 weeks, nominations processed in 3 weeks each.',
    outcome: 'All 4 engineers joined within 6 months of decision to sponsor. Two are now transitioning to 186 permanent residence via the Temporary Residence Transition stream.',
    timeline: '5 months to first visa grant',
    visas: ['482', '186 (in progress)'],
  },
  {
    sector: 'Healthcare',
    company: 'Aged Care Provider — Regional SA',
    headcount: '240 staff',
    challenge: 'Persistent shortage of registered nurses in a designated regional area. High agency costs and poor continuity of care.',
    solution: '494 Skilled Employer Sponsored Regional visas for 8 nurses from the Philippines. Employer received regional concessions on occupation list requirements.',
    outcome: 'All 8 nurses in place within 7 months. Average agency cost saving of $65,000 per nurse per year. Three nurses have now applied for Subclass 191 permanent residence.',
    timeline: '7 months to all grants',
    visas: ['494', '191 (3 workers)'],
  },
]

const FAQS = [
  { q: 'How long does it take to become an approved Standard Business Sponsor?', a: 'SBS approval typically takes 4–8 weeks from lodgement of a complete application. We prepare your application to maximise the quality of your submission — complex cases or businesses with a compliance history may take longer.' },
  { q: 'Can I sponsor workers in any occupation?', a: 'No. Each employer-sponsored visa has an approved occupation list. The 482 visa uses the MLTSSL and STSOL lists (Short-Term and Medium-Long Term Strategic Skill Lists). The 186 visa (Direct Entry) uses the MLTSSL. The 494 uses a broader regional list. We check your specific role against the current lists as part of our assessment.' },
  { q: 'What is the Skilling Australians Fund (SAF) levy and who pays it?', a: 'The SAF levy is a training levy paid by the employer — not the worker. For small businesses (turnover under $10M), it\'s $1,200 per year per worker sponsored. For standard businesses it\'s $1,800 per year. You pay for the full visa period upfront. Critically, you cannot recover this cost from the sponsored worker.' },
  { q: 'What happens if I need to terminate a sponsored worker\'s employment?', a: 'You must notify DHA within 28 days of the worker\'s employment ceasing. You may also be liable to pay reasonable costs of the sponsored worker\'s return travel to their home country. We advise sponsors on their obligations before and when employment ends.' },
  { q: 'Can a sponsored worker change employers?', a: 'A 482 visa holder can change to a new sponsor — but the new employer must apply for sponsorship and nomination in their own right. The worker cannot work for an unapproved employer under any circumstances.' },
  { q: 'Is there a limit on how many workers I can sponsor?', a: 'There is no formal cap on the number of workers an approved sponsor can nominate, provided each nomination meets the genuine position, market salary rate, and occupation list requirements. However, large-scale sponsorship programmes may attract additional scrutiny.' },
  { q: 'What is Labour Market Testing and when is it required?', a: 'Labour Market Testing (LMT) requires you to demonstrate you advertised the position locally before sponsoring an overseas worker. LMT is generally required for 482 nominations (with limited exemptions) and some 186 Direct Entry nominations. We guide you through LMT requirements so your nomination is not refused on procedural grounds.' },
]

// ── Component ────────────────────────────────────────────────
export default function EmployerSponsorshipPage({ navigate }: { navigate: (page: string) => void }) {
  const [selectedVisa, setSelectedVisa] = useState<string | null>(null)
  const [calcVisa, setCalcVisa] = useState<'482' | '186' | '494'>('482')
  const [calcBizSize, setCalcBizSize] = useState<'small' | 'standard'>('small')
  const [calcWorkers, setCalcWorkers] = useState(1)
  const [calcYears, setCalcYears] = useState(2)
  const [calcAdults, setCalcAdults] = useState(0)
  const [calcChildren, setCalcChildren] = useState(0)
  const fees = FEE_DATA[calcVisa]
  const safTotal = fees.safLevy
    ? fees.safLevy[calcBizSize] * calcYears * calcWorkers
    : 0
  const nomTotal = fees.nominationFee * calcWorkers
  const visaTotal = (fees.visaFee.primary + fees.visaFee.secondary_adult * calcAdults + fees.visaFee.secondary_child * calcChildren) * calcWorkers
  const totalGov = safTotal + nomTotal + visaTotal
  const agentMid = Math.round((fees.agentLow + fees.agentHigh) / 2) * calcWorkers

  React.useEffect(() => {
    document.title = PAGE_META['employer-sponsored-visas'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#ffffff', color: '#1a1a2e' }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
        ]}
        faqs={FAQS.map(f => ({ question: f.q, answer: f.a }))}
        service={{ name: 'Employer Sponsored Visas', description: PAGE_META['employer-sponsored-visas'].metaDescription, url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Employer Sponsored' },
        ]}
      />

      <PageHero
        variant="hub"
        eyebrow="Employer Sponsored"
        title={<>Employer Sponsored<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Visas</em></>}
        deck="Everything employers and skilled workers need to know about sponsoring or being sponsored under Australia's employer-sponsored migration system."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Book an Employer Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Skills in Demand (482) →', page: 'skills-in-demand-482' }}
        accent={CAT_EMPLOYER}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            Employer-sponsored visas allow Australian businesses to nominate skilled overseas workers to fill positions they cannot fill from the local labour market, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. The two main pathways are the Skills in Demand (subclass 482) temporary visa and the Employer Nomination Scheme (subclass 186) permanent visa. To sponsor workers, a business must first be approved as a Standard Business Sponsor (SBS) and meet ongoing sponsorship obligations.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* ── VISA CARDS ───────────────────────────────────────── */}
      <section style={{ background: '#f8fafd', padding: '80px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeading
            kicker="Employer Sponsored Visas"
            title="Employer Sponsored Visa Subclasses"
            intro="Temporary, permanent, or regional — each visa is designed for different business circumstances and workforce planning goals."
            accent={CAT_EMPLOYER}
          />

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {VISA_INFO.map((visa) => {
              const isOpen = selectedVisa === visa.code
              return (
                <div key={visa.code} style={{ background: '#fff', borderRadius: 18, border: isOpen ? `2px solid ${GOLD}` : '1.5px solid #e5eaf4', boxShadow: isOpen ? '0 12px 48px rgba(245,161,36,0.12)' : '0 4px 20px rgba(27,43,94,0.06)', transition: 'all 0.25s', overflow: 'hidden' }}>

                  {/* Card header */}
                  <div style={{ padding: '28px 28px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                      <div style={{ width: 52, height: 52, borderRadius: 13, background: `rgba(27,43,94,0.07)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: NAVY }}>
                        <Icon name={visa.icon} size={28} color={NAVY} />
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 700, color: visa.tagColor, background: `${visa.tagColor}18`, border: `1px solid ${visa.tagColor}44`, borderRadius: 100, padding: '4px 10px', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{visa.tag}</span>
                    </div>
                    <div style={{ fontSize: 12, color: '#9ca3af', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Subclass {visa.code}</div>
                    <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 21, fontWeight: 700, color: NAVY, margin: '0 0 12px', lineHeight: 1.25 }}>{visa.name}</h3>
                    <p style={{ fontSize: 14, color: '#6b7a8d', lineHeight: 1.7, margin: '0 0 20px' }}>{visa.summary}</p>

                    <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 20 }}>
                      {[
                        { label: 'Duration', val: visa.duration },
                        { label: 'PR Pathway', val: visa.prPathway },
                        { label: 'Stream', val: visa.stream },
                        { label: 'Min Salary', val: visa.tsmit },
                      ].map(item => (
                        <div key={item.label} style={{ background: '#f8fafd', borderRadius: 8, padding: '10px 12px' }}>
                          <div style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>{item.label}</div>
                          <div style={{ fontSize: 13, color: NAVY, fontWeight: 600, lineHeight: 1.3 }}>{item.val}</div>
                        </div>
                      ))}
                    </div>

                    <button onClick={() => setSelectedVisa(isOpen ? null : visa.code)}
                      style={{ width: '100%', padding: '12px', borderRadius: 9, border: `1.5px solid ${isOpen ? GOLD : '#e5eaf4'}`, background: isOpen ? GOLD : 'transparent', color: isOpen ? NAVY_DARK : NAVY, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif", transition: 'all 0.2s' }}
                    >
                      {isOpen ? 'Hide details ↑' : 'See full details →'}
                    </button>
                  </div>

                  {/* Expanded details */}
                  {isOpen && (
                    <div style={{ borderTop: `1px solid rgba(245,161,36,0.2)`, padding: '20px 28px 28px', background: 'rgba(245,161,36,0.08)' }}>
                      <div style={{ marginBottom: 20 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: NAVY, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Best suited for</div>
                        {visa.bestFor.map(b => (
                          <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 7 }}>
                            <Icon name="check" size={14} color={GOLD} />
                            <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.5 }}>{b}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: NAVY, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Key employer obligations</div>
                        {visa.obligations.map(o => (
                          <div key={o} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 7 }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: NAVY, marginTop: 5, flexShrink: 0 }} />
                            <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.5 }}>{o}</span>
                          </div>
                        ))}
                      </div>
                      <a href="#contact-cta" style={{ display: 'block', marginTop: 20, textAlign: 'center', backgroundColor: NAVY, color: '#fff', padding: '12px', borderRadius: 8, textDecoration: 'none', fontSize: 14, fontWeight: 700 }}>
                        Enquire about {visa.code} sponsorship →
                      </a>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── COST ESTIMATOR ───────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="grid-sidebar" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 56, alignItems: 'start' }}>

            {/* Left — controls */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>Government Fee Estimator</div>
              <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(28px, 3vw, 38px)', fontWeight: 700, color: NAVY, margin: '0 0 14px', letterSpacing: '-0.02em' }}>
                Know your costs before you commit
              </h2>
              <p style={{ fontSize: 15, color: '#6b7a8d', lineHeight: 1.7, marginBottom: 32 }}>
                Real 2024–25 DHA fee data. Adjust the inputs to estimate total government charges for your sponsorship. Agent fees are shown separately as a range.
              </p>

              {/* Visa type */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: NAVY, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Visa Subclass</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  {(['482', '186', '494'] as const).map(v => (
                    <button key={v} onClick={() => setCalcVisa(v)}
                      style={{ flex: 1, padding: '10px 4px', borderRadius: 8, border: `1.5px solid ${calcVisa === v ? NAVY : '#e5eaf4'}`, background: calcVisa === v ? NAVY : '#fff', color: calcVisa === v ? '#fff' : '#6b7a8d', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif", transition: 'all 0.15s' }}
                    >{v}</button>
                  ))}
                </div>
              </div>

              {/* Business size */}
              {FEE_DATA[calcVisa].safLevy && (
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: NAVY, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Business Size (SAF Levy)</label>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {[{ val: 'small', label: 'Small (&lt;$10M turnover)' }, { val: 'standard', label: 'Standard ($10M+)' }].map(opt => (
                      <button key={opt.val} onClick={() => setCalcBizSize(opt.val as 'small' | 'standard')}
                        style={{ flex: 1, padding: '10px 8px', borderRadius: 8, border: `1.5px solid ${calcBizSize === opt.val ? NAVY : '#e5eaf4'}`, background: calcBizSize === opt.val ? NAVY : '#fff', color: calcBizSize === opt.val ? '#fff' : '#6b7a8d', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif", transition: 'all 0.15s' }}
                        dangerouslySetInnerHTML={{ __html: opt.label }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Workers */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: NAVY, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Number of Workers: <span style={{ color: GOLD }}>{calcWorkers}</span></label>
                <input type="range" min={1} max={10} value={calcWorkers} onChange={e => setCalcWorkers(Number(e.target.value))}
                  style={{ width: '100%', accentColor: GOLD }} />
              </div>

              {/* Visa years */}
              {FEE_DATA[calcVisa].safLevy && (
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: NAVY, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Visa Duration (years): <span style={{ color: GOLD }}>{calcYears}</span></label>
                  <input type="range" min={1} max={4} value={calcYears} onChange={e => setCalcYears(Number(e.target.value))}
                    style={{ width: '100%', accentColor: GOLD }} />
                </div>
              )}

              {/* Family members */}
              <div style={{ marginBottom: 8 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: NAVY, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Secondary Adult Applicants: <span style={{ color: GOLD }}>{calcAdults}</span></label>
                <input type="range" min={0} max={4} value={calcAdults} onChange={e => setCalcAdults(Number(e.target.value))}
                  style={{ width: '100%', accentColor: GOLD }} />
              </div>
              <div style={{ marginBottom: 0 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: NAVY, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Child Applicants: <span style={{ color: GOLD }}>{calcChildren}</span></label>
                <input type="range" min={0} max={6} value={calcChildren} onChange={e => setCalcChildren(Number(e.target.value))}
                  style={{ width: '100%', accentColor: GOLD }} />
              </div>
            </div>

            {/* Right — results */}
            <div>
              {/* Total banner */}
              <div style={{ background: `linear-gradient(135deg, ${NAVY_DARK} 0%, ${NAVY} 100%)`, borderRadius: 16, padding: '28px 32px', marginBottom: 20 }}>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Estimated Government Charges</div>
                <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(38px, 4vw, 54px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
                  ${totalGov.toLocaleString()}
                </div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', marginTop: 4 }}>
                  + agent fees est. ${(fees.agentLow * calcWorkers).toLocaleString()} – ${(fees.agentHigh * calcWorkers).toLocaleString()}
                </div>
              </div>

              {/* Fee breakdown */}
              <div style={{ border: '1.5px solid #e5eaf4', borderRadius: 14, overflow: 'hidden' }}>
                <div style={{ padding: '16px 24px', background: '#f8fafd', borderBottom: '1px solid #e5eaf4', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: NAVY, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Fee Breakdown</span>
                  <span style={{ fontSize: 12, color: '#9ca3af' }}>2024–25 DHA rates</span>
                </div>

                {[
                  fees.safLevy && {
                    label: `SAF Levy (${calcWorkers} worker${calcWorkers > 1 ? 's' : ''} × ${calcYears} yr${calcYears > 1 ? 's' : ''} × $${fees.safLevy[calcBizSize].toLocaleString()}/yr)`,
                    amount: safTotal,
                    note: 'Skilling Australians Fund — non-refundable',
                    highlight: true,
                  },
                  fees.nominationFee > 0 && {
                    label: `Nomination Fee (${calcWorkers} × $${fees.nominationFee})`,
                    amount: nomTotal,
                    note: 'Per nomination lodged',
                    highlight: false,
                  },
                  {
                    label: `Visa Application Fee (${calcWorkers} primary${calcAdults > 0 ? ` + ${calcAdults * calcWorkers} adult` : ''}${calcChildren > 0 ? ` + ${calcChildren * calcWorkers} child` : ''})`,
                    amount: visaTotal,
                    note: 'Per applicant including family members',
                    highlight: false,
                  },
                  {
                    label: `Agent Fees (estimate — ${calcWorkers} worker${calcWorkers > 1 ? 's' : ''})`,
                    amount: agentMid,
                    note: 'Varies by complexity — SBS + nominations + visa',
                    highlight: false,
                    isAgent: true,
                  },
                ].filter(Boolean).map((row: any) => (
                  <div key={row.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 24px', borderBottom: '1px solid #f0f2f8', background: row.highlight ? 'rgba(245,161,36,0.04)' : '#fff' }}>
                    <div style={{ flex: 1, minWidth: 0, paddingRight: 16 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: NAVY, marginBottom: 2 }}>{row.label}</div>
                      <div style={{ fontSize: 12, color: '#9ca3af' }}>{row.note}</div>
                    </div>
                    <div style={{ flexShrink: 0, textAlign: 'right' }}>
                      <div style={{ fontSize: 16, fontWeight: 700, color: row.isAgent ? '#6b7a8d' : NAVY }}>
                        {row.isAgent ? `~$${row.amount.toLocaleString()}` : `$${row.amount.toLocaleString()}`}
                      </div>
                    </div>
                  </div>
                ))}

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', background: NAVY }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>Total estimated cost</div>
                  <div style={{ fontSize: 19, fontWeight: 800, color: GOLD }}>${(totalGov + agentMid).toLocaleString()}</div>
                </div>
              </div>

              <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 12, lineHeight: 1.6, display: 'flex', alignItems: 'flex-start', gap: 4 }}>
                <Icon name="alert" size={11} color="#9ca3af" /><span>Estimates only. Government fees change periodically. Health insurance (OVHC), skills assessment, English test, and medicals are not included. Contact us for a precise quote.</span>
              </p>
              <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 6, lineHeight: 1.6 }}>
                Figures current as at 1 July 2026 — verify with Home Affairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESSING TIMELINE ──────────────────────────────── */}
      <section style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading
            kicker="The Process"
            title="From decision to visa grant — what to expect"
            intro="Employer sponsorship happens in three distinct phases. We manage all three concurrently where possible to reduce total elapsed time."
            accent={CAT_EMPLOYER}
          />

          {/* Phase rows */}
          {[
            {
              phase: '01',
              name: 'Standard Business Sponsorship',
              color: NAVY,
              timing482: '4–8 wks', timing186: '4–8 wks', timing494: '4–8 wks',
              desc: 'Your business must be approved as a Standard Business Sponsor before any nomination can be lodged. We compile your business evidence, trading history, and HR documentation to support a strong application.',
              steps: ['Business trading evidence', 'Lawful business declaration', 'Training activities evidence', 'DHA lodgement & tracking'],
              note: 'SBS approval is valid for 5 years and covers all visa subclasses.',
            },
            {
              phase: '02',
              name: 'Nomination',
              color: NAVY_MID,
              timing482: '2–6 wks', timing186: '4–12 wks', timing494: '4–8 wks',
              desc: 'You nominate a specific worker for a specific position. We prepare the position description, conduct Labour Market Testing (where required), and ensure all occupation and salary criteria are met.',
              steps: ['Position & occupation verification', 'Labour Market Testing (if required)', 'Salary benchmarking', 'Nomination lodgement'],
              note: 'For 482, the worker can lodged their visa application simultaneously with the nomination.',
            },
            {
              phase: '03',
              name: 'Visa Application',
              color: GOLD,
              timing482: '8–16 wks', timing186: '12–24 mo', timing494: '10–18 wks',
              desc: "The sponsored worker lodges their visa application. We prepare the worker's evidence package — identity, health, character, skills, and English — and liaise with DHA through to grant.",
              steps: ["Worker's identity & character documents", 'Health examination coordination', 'Skills assessment (if required)', 'DHA correspondence & grant'],
              note: 'For 482, family members can be included in the same application.',
            },
          ].map((phase, i) => (
            <div key={phase.phase} className="grid-sidebar" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 32, marginBottom: i < 2 ? 32 : 0, position: 'relative' }}>
              {/* Connector line */}
              {i < 2 && <div style={{ position: 'absolute', left: 28, top: '100%', width: 2, height: 32, background: 'linear-gradient(to bottom, #e5eaf4, transparent)' }} />}

              {/* Phase label */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: phase.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 4px 16px ${phase.color}44` }}>
                  <span style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 19, fontWeight: 800, color: '#fff' }}>{phase.phase}</span>
                </div>
                <div style={{ paddingTop: 4 }}>
                  <div style={{ fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 4, lineHeight: 1.2 }}>{phase.name}</div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {[{ label: '482', val: phase.timing482 }, { label: '186', val: phase.timing186 }, { label: '494', val: phase.timing494 }].map(t => (
                      <span key={t.label} style={{ fontSize: 11, fontWeight: 700, color: '#6b7a8d', background: '#f0f2f8', borderRadius: 100, padding: '2px 8px', whiteSpace: 'nowrap' }}>{t.label}: {t.val}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phase content */}
              <div style={{ background: '#fff', borderRadius: 14, border: '1.5px solid #e5eaf4', padding: '24px 28px' }}>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>{phase.desc}</p>
                <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, marginBottom: 14 }}>
                  {phase.steps.map(s => (
                    <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Icon name="check" size={13} color={GOLD} />
                      <span style={{ fontSize: 13, color: '#374151' }}>{s}</span>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 13, color: '#9ca3af', background: '#f8fafd', borderRadius: 7, padding: '8px 12px', borderLeft: `3px solid ${GOLD}` }}>{phase.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OBLIGATIONS DASHBOARD ────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="grid-sidebar" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>Compliance</div>
              <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, color: NAVY, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                Employer obligations you must meet
              </h2>
              <p style={{ fontSize: 15, color: '#6b7a8d', lineHeight: 1.7, marginBottom: 24 }}>
                Approved sponsors have ongoing legal obligations. Breaches can result in sanctions, cancellation, and bars on future sponsorship. We brief every client employer thoroughly before work commences.
              </p>
              <div style={{ background: 'rgba(245,161,36,0.08)', border: '1.5px solid rgba(245,161,36,0.3)', borderRadius: 12, padding: '16px 18px' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0d1632', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 4 }}><Icon name="alert" size={12} color="#0d1632" /> DHA Compliance Checks</div>
                <div style={{ fontSize: 13, color: '#0d1632', lineHeight: 1.6 }}>
                  The Department of Home Affairs conducts unannounced workplace inspections of approved sponsors. Non-compliance penalties include fines up to $93,900 per breach.
                </div>
              </div>
            </div>

            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {OBLIGATIONS.map(ob => (
                <div key={ob.title} style={{ background: '#f8fafd', borderRadius: 13, border: ob.status === 'critical' ? `1.5px solid rgba(220,38,38,0.2)` : '1.5px solid #e5eaf4', padding: '20px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                    <span style={{ flexShrink: 0 }}><Icon name={ob.icon} size={22} color={NAVY} /></span>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, lineHeight: 1.2 }}>{ob.title}</div>
                        {ob.status === 'critical' && <span style={{ fontSize: 10, fontWeight: 800, color: '#dc2626', background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.35)', borderRadius: 100, padding: '1px 7px', letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Critical</span>}
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: '#6b7a8d', lineHeight: 1.65, margin: 0 }}>{ob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────────── */}
      <section style={{ background: `linear-gradient(160deg, ${NAVY_DARK} 0%, ${NAVY} 55%, ${NAVY_MID} 100%)`, padding: '80px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <SectionHeading
            kicker="Case Studies"
            title="Employers we've helped sponsor"
            accent={CAT_EMPLOYER}
          />

          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {CASE_STUDIES.map(cs => (
              <div key={cs.company} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 18, padding: '28px 28px', backdropFilter: 'blur(12px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 11, background: 'rgba(245,161,36,0.15)', border: '1px solid rgba(245,161,36,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19 }}>
                    <Icon name={cs.sector === 'Technology' ? 'briefcase' : 'heart'} size={20} color={NAVY} />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: GOLD, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{cs.sector}</div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{cs.company}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', fontSize: 12, color: 'rgba(255,255,255,0.4)', textAlign: 'right' }}>{cs.headcount}</div>
                </div>

                {[
                  { label: 'Challenge', text: cs.challenge, color: '#dc2626' },
                  { label: 'Solution', text: cs.solution, color: GOLD },
                  { label: 'Outcome', text: cs.outcome, color: '#f5a124' },
                ].map(block => (
                  <div key={block.label} style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: block.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 5 }}>{block.label}</div>
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>{block.text}</div>
                  </div>
                ))}

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>⏱ {cs.timeline}</div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {cs.visas.map(v => (
                      <span key={v} style={{ fontSize: 11, fontWeight: 700, color: GOLD, background: 'rgba(245,161,36,0.12)', border: '1px solid rgba(245,161,36,0.3)', borderRadius: 100, padding: '3px 9px' }}>{v}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionHeading
            kicker="FAQ"
            title="Questions employers ask us most"
            accent={CAT_EMPLOYER}
          />
          <FaqAccordion
            items={FAQS.map(f => ({ question: f.q, answer: f.a }))}
            accent={CAT_EMPLOYER}
          />
        </div>
      </section>

      {/* ── Related ── */}
      <section style={{ background: '#fafbfe', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <RelatedPages pages={EMPLOYER_RELATED} navigate={navigate} columns={2} />
        </div>
      </section>

      <CtaBand
        title="Ready to build your workforce with employer sponsorship?"
        body="Book a free 30-minute consultation with Navpreet Aulakh (MARN 2619467). We'll assess your position, recommend the right visa pathway, and outline next steps — at no obligation."
        primaryCta={{ label: 'Book Free Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Back to Home', page: 'home' }}
        navigate={navigate}
        accent={CAT_EMPLOYER}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}

