import React, { useState } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import { GOLD, NAVY, NAVY_DARK, CAT_EMPLOYER, GREY_BAND } from '@/theme'
import {
  Breadcrumbs,
  PageHero,
  SectionHeading,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  ComplianceDisclaimer,
  AnswerBox,
} from '@/components/page'
import type { RelatedPage, FaqItem } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'
import Icon from '@/components/ui/Icon'

const CURRENT_AS_AT = 'August 2026'

const BLUE = CAT_EMPLOYER


const THREE_STEPS = [
  {
    num: '01',
    label: 'Business Approval',
    sub: 'Standard Business Sponsorship (SBS)',
    icon: 'briefcase',
    color: BLUE,
    detail: 'The company applies to become an approved sponsor. DHA assesses: lawful operation, no adverse record, training record, and genuine need. Granted to the entity, not the individual. Validity: 5 years (standard) or 1 year (new entrant).',
    badge: 'SBS',
  },
  {
    num: '02',
    label: 'Position Approval',
    sub: 'Nomination',
    icon: 'list',
    color: '#4f46e5',
    detail: 'Each role nominated must be on the relevant occupation list, meet the TSMIT or annual earnings threshold, and demonstrate market salary rate via payroll evidence or an independent salary survey. This stage is where most employer sponsorship mistakes surface.',
    badge: 'NOM',
  },
  {
    num: '03',
    label: 'Person Approval',
    sub: 'Visa Application',
    icon: 'user',
    color: GOLD,
    detail: 'The worker applies for the visa (482 Skills in Demand, 186 ENS, 494 SESR). Health, character and skills assessment requirements apply to the individual. The SBS and nomination decisions are made before this stage — changes to either require refiling.',
    badge: 'VISA',
  },
]

const OBLIGATIONS = [
  {
    title: 'Pay market salary rate',
    detail: 'The sponsored worker must receive equivalent terms and conditions — including salary, allowances and loadings — to an Australian worker in the same role at the same location. Not just base pay: total package must match.',
    icon: 'dollar',
    color: BLUE,
  },
  {
    title: 'Keep records for five years',
    detail: 'Payslips, contract variations, leave records and any changes to the role must be retained for five years and produced on request. A DHA compliance audit can arrive without warning.',
    icon: 'file',
    color: '#4f46e5',
  },
  {
    title: 'Notify DHA of material changes',
    detail: 'Changes to the role title, duties, location, work hours or salary that are not minor must be notified to DHA. Missed notifications are a sponsorship obligation breach — even if the visa holder consented to the change.',
    icon: 'alert',
    color: '#dc2626',
  },
  {
    title: 'Pay travel costs on cessation',
    detail: "If employment ends before the visa expires — for any reason — the sponsoring employer is liable to pay reasonable travel costs to the worker's home country unless they have found another sponsor.",
    icon: 'trending',
    color: '#0e7490',
  },
  {
    title: 'No transfer of costs to worker',
    detail: 'Sponsorship application costs, migration agent fees, and training contributions cannot be transferred to or recouped from the sponsored worker — not at the start, during employment, or on departure. This includes the SAF levy.',
    icon: 'shield',
    color: '#f5a124',
  },
  {
    title: 'Not engage in discriminatory recruitment',
    detail: 'SBS holders must not adversely affect employment conditions or opportunities of Australian workers. Temporary skills shortage must be genuine — labour market testing is required for most 482 nominations.',
    icon: 'eye',
    color: GOLD,
  },
]

const ELIGIBILITY_YES = [
  'Lawfully operating in Australia — registered business with current ABN',
  'Employs or intends to employ workers in genuine positions',
  'No adverse administrative actions under migration law',
  'Training record or undertaking to maintain training spend',
  'No sanctions, deregistration or winding-up proceedings',
]

const ELIGIBILITY_SMALL = [
  'Small businesses and sole traders can apply — there is no minimum size or employee count',
  'Turnover thresholds are not used to assess SBS — operational legitimacy is what matters',
  'A business with one current employee can sponsor a second person',
  'Businesses that have not yet commenced trading may apply but face additional scrutiny',
]

const COSTS = [
  { item: 'SBS application fee', amount: '$420', note: 'Per sponsor entity, not per worker. One-time for the approval period.' },
  { item: 'Nomination application fee', amount: '$330', note: 'Per nominated position. Lodged each time a role is nominated.' },
  { item: 'SAF levy — small business (< $10M turnover)', amount: '$1,200 / year', note: 'Per sponsored worker per year of visa duration, paid upfront.' },
  { item: 'SAF levy — all other businesses', amount: '$1,800 / year', note: 'Per sponsored worker per year of visa duration, paid upfront.' },
  { item: 'Visa application charge', amount: 'Varies', note: '482 base: $3,115 (primary) + $1,545 (secondary applicant). Paid by visa applicant — cannot be recouped from worker.' },
]

const FAQS: FaqItem[] = [
  {
    question: 'What is Standard Business Sponsorship?',
    answer: "Standard Business Sponsorship (SBS) is the company-level approval that allows an Australian business to sponsor overseas workers on visas such as the Skills in Demand (482). It assesses that the business is lawfully operating with no adverse record, and once granted it generally covers multiple nominations across its validity period. It is the first of three approvals in employer sponsorship — the business (SBS), the position (nomination), and the person (visa) — and the first two are decided substantially on the business's own records.",
  },
  {
    question: 'What are the employer sponsorship obligations?',
    answer: 'SBS holders must pay market salary rates, retain employment records for five years, notify DHA of material changes to the role, pay return travel costs on cessation of employment, not transfer sponsorship costs to the worker, and not adversely affect Australian workers\' conditions. Breaches can result in an infringement notice, bar on further nominations, or cancellation of sponsorship.',
  },
  {
    question: 'Can a small business sponsor a worker?',
    answer: 'Yes. There is no minimum business size, turnover threshold, or employee count required to hold SBS. A sole trader or micro-business with a genuine need for a skilled overseas worker is eligible. The SAF levy rate is lower for businesses with annual turnover under $10 million.',
  },
  {
    question: 'How long does the SBS application take?',
    answer: 'DHA does not publish a fixed processing time for SBS. In practice, straightforward applications from established businesses have been processed within 2–8 weeks. Complex applications, adverse history, or additional information requests extend this. Nomination and visa stages run after SBS — total employer sponsorship time is typically 3–6 months from SBS lodgement.',
  },
  {
    question: 'Does SBS need to be renewed?',
    answer: 'Yes. Standard Business Sponsorship is granted for 5 years (established businesses) or 1 year (new entrants). Renewal must be lodged before expiry. Importantly, if SBS lapses, existing sponsored workers can continue on their current visa but new nominations cannot be lodged until SBS is restored.',
  },
  {
    question: "What happens if we change the sponsored worker's role?",
    answer: "If the change is material — different duties, different occupation ANZSCO code, change in hours, significant salary variation — a new nomination may be required. Minor changes within the scope of the original nomination may not require refiling but should be documented. When in doubt, notify DHA rather than assume the change is covered.",
  },
  {
    question: 'Can the worker change employer after being sponsored?',
    answer: 'A sponsored worker on a subclass 482 is tied to the sponsoring employer for the occupation nominated. They can change employers if the new employer holds SBS and lodges a nomination for them. There is no sponsorship-free "portability" period on the 482 — the worker must have a new sponsor before leaving the current one.',
  },
  {
    question: 'What is the SAF levy and who pays it?',
    answer: 'The Skilling Australians Fund (SAF) levy is a contribution paid by the sponsoring employer at the time of nomination. It is calculated per sponsored worker per year of visa duration and cannot be passed to the worker. Rates: $1,200/year for small businesses (annual turnover under $10M); $1,800/year for others. It is separate from the DHA application fees and is not refundable.',
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Skills in Demand (482)', desc: 'The most common visa that requires SBS — temporary sponsorship up to 4 years.', icon: 'zap', page: 'skills-in-demand-482', color: CAT_EMPLOYER },
  { title: 'Employer Nomination (186)', desc: 'Permanent residence for nominated skilled workers.', icon: 'shield', page: 'employer-nomination-186', color: CAT_EMPLOYER },
  { title: 'Employer Sponsorship Hub', desc: 'Overview of all employer-sponsored visa options.', icon: 'briefcase', page: 'employer-sponsorship', color: CAT_EMPLOYER },
]

type Obligation = typeof OBLIGATIONS[0]

export default function StandardBusinessSponsorshipPage({ navigate }: { navigate: (page: string) => void }) {
  const [activeObligation, setActiveObligation] = useState<Obligation>(OBLIGATIONS[0])

  React.useEffect(() => {
    document.title = PAGE_META['standard-business-sponsorship'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#ffffff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: 'Standard Business Sponsorship', url: 'https://www.nanakmigration.com.au/standard-business-sponsorship' },
        ]}
        faqs={FAQS}
        service={{ name: 'Standard Business Sponsorship', description: PAGE_META['standard-business-sponsorship'].metaDescription, url: 'https://www.nanakmigration.com.au/standard-business-sponsorship' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Employer Sponsored', page: 'employer-sponsorship' },
        { label: 'Standard Business Sponsorship' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Employer Sponsored · For Employers"
        title={<>Standard Business<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Sponsorship</em></>}
        deck="The foundational employer approval that unlocks access to the Skills in Demand (482), Employer Nomination Scheme (186), and regional employer-sponsored (494) visa streams."
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
            Standard Business Sponsorship (SBS) is the approval an Australian business must obtain from the Department of Home Affairs before it can nominate overseas workers for a Skills in Demand (subclass 482) temporary visa, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Approval is generally valid for five years and carries ongoing sponsorship obligations, including paying at least the market salary rate, not recovering sponsorship costs from the worker, and cooperating with inspections. Businesses must meet lawful operation, financial viability and training benchmarks to be approved.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* ── ELIGIBILITY ── */}
      <div style={{ background: '#fff', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: BLUE, marginBottom: 12 }}>Who Can Apply</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 34, fontWeight: 700, color: NAVY, margin: '0 0 16px', lineHeight: 1.2 }}>SBS eligibility requirements</h2>
            <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.8, margin: '0 0 24px' }}>
              DHA assesses the business — not the size of it. The questions are about lawful operation, genuine need, and whether the business has an adverse migration history.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {ELIGIBILITY_YES.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 0', borderBottom: i < ELIGIBILITY_YES.length - 1 ? '1px solid #f0f2f8' : 'none' }}>
                  <div style={{ width: 24, height: 24, borderRadius: 7, background: `${BLUE}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <Icon name="check" size={12} color={BLUE} />
                  </div>
                  <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f5a124', marginBottom: 12 }}>Small Business &amp; Sole Traders</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 28, fontWeight: 700, color: NAVY, margin: '0 0 16px', lineHeight: 1.2 }}>Can a small business sponsor a worker?</h2>
            <div style={{ background: 'rgba(245,161,36,0.08)', border: '1.5px solid rgba(245,161,36,0.3)', borderRadius: 14, padding: '20px 20px', marginBottom: 20 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#0d1632', marginBottom: 8 }}>Yes — no minimum size required.</div>
              <div style={{ fontSize: 14, color: '#0d1632', lineHeight: 1.7 }}>There is no employee count, turnover floor, or trading history minimum to become an SBS holder. A sole trader or business with a single employee can apply.</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {ELIGIBILITY_SMALL.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 20, height: 20, borderRadius: 6, background: 'rgba(245,161,36,0.08)', border: '1px solid rgba(245,161,36,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <Icon name="check" size={11} color="#f5a124" />
                  </div>
                  <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, background: `${GOLD}08`, border: `1px solid ${GOLD}25`, borderRadius: 12, padding: '14px 16px', display: 'flex', gap: 10 }}>
              <Icon name="alert" size={14} color={GOLD} />
              <div style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65 }}>
                Businesses not yet trading will face additional evidence requirements. Early-stage startups and businesses with ABNs under 12 months typically require more documentation.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── THREE APPROVALS DEEP DIVE ── */}
      <div style={{ background: GREY_BAND, padding: '72px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="The Sequence" title="Three approvals. One sequence." intro="Each stage is a separate DHA decision. A refusal at Stage 1 does not prevent reapplication but resets the clock for every stage that follows." accent={GOLD} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {THREE_STEPS.map((step, i) => (
              <div key={i} style={{ background: '#fff', border: `2px solid ${i === 0 ? step.color + '40' : '#e8edf6'}`, borderRadius: 18, overflow: 'hidden', boxShadow: i === 0 ? '0 6px 32px rgba(14,116,144,0.1)' : '0 1px 8px rgba(27,43,94,0.04)' }}>
                <div style={{ height: 5, background: step.color, width: '100%' }} />
                <div style={{ padding: '28px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: `${step.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name={step.icon} size={20} color={step.color} />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: step.color }}>{step.num} · {step.badge}</div>
                      <div style={{ fontSize: 16, fontWeight: 800, color: NAVY }}>{step.label}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 10 }}>{step.sub}</div>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.75, margin: 0 }}>{step.detail}</p>
                  {i === 0 && (
                    <div style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 6, background: `${BLUE}10`, border: `1px solid ${BLUE}25`, borderRadius: 7, padding: '5px 12px' }}>
                      <Icon name="zap" size={11} color={BLUE} />
                      <span style={{ fontSize: 11, fontWeight: 700, color: BLUE }}>This page covers SBS in detail</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── OBLIGATIONS ── */}
      <div id="obligations" style={{ background: NAVY, padding: '72px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Ongoing Duties" title="Sponsorship obligations" intro="SBS approval is not a one-time event. These obligations continue for the life of each sponsored worker's visa — and beyond, in some cases." accent={GOLD} light />

          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 24 }}>
            {/* Sidebar nav */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {OBLIGATIONS.map((ob) => (
                <button key={ob.title}
                  onClick={() => setActiveObligation(ob)}
                  style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: activeObligation.title === ob.title ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)', border: activeObligation.title === ob.title ? `1.5px solid ${ob.color}60` : '1.5px solid rgba(255,255,255,0.07)', borderRadius: 10, cursor: 'pointer', textAlign: 'left', width: '100%', transition: 'background 0.15s' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: activeObligation.title === ob.title ? ob.color : `${ob.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={ob.icon} size={14} color={activeObligation.title === ob.title ? '#fff' : ob.color} />
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: activeObligation.title === ob.title ? '#fff' : 'rgba(255,255,255,0.6)', lineHeight: 1.35 }}>{ob.title}</span>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div style={{ background: 'rgba(255,255,255,0.06)', border: `1.5px solid ${activeObligation.color}40`, borderRadius: 16, padding: '36px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: `${activeObligation.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Icon name={activeObligation.icon} size={24} color={activeObligation.color} />
              </div>
              <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', margin: '0 0 14px', lineHeight: 1.2 }}>{activeObligation.title}</h3>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, margin: '0 0 24px' }}>{activeObligation.detail}</p>
              <div style={{ display: 'flex', gap: 10, padding: '14px 18px', background: 'rgba(255,255,255,0.05)', borderRadius: 10, alignItems: 'flex-start' }}>
                <Icon name="alert" size={15} color={GOLD} />
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>
                  Breaching a sponsorship obligation may result in an infringement notice ($9,400 for a company), a bar on further nominations, or cancellation of the SBS altogether.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── COSTS ── */}
      <div style={{ background: '#fff', padding: '72px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Fees" title="What does employer sponsorship cost?" intro="Government application fees only — migration agent fees are separate. Costs below are indicative and current as at the date on this page." accent={GOLD} />

          <div style={{ background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 0, background: NAVY, padding: '12px 20px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Item</div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', minWidth: 120, textAlign: 'right' }}>Amount</div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', minWidth: 200, textAlign: 'right' }}>Note</div>
            </div>
            {COSTS.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 0, padding: '16px 20px', borderBottom: i < COSTS.length - 1 ? '1px solid #e8edf6' : 'none', background: i % 2 === 0 ? '#fff' : '#fafbfe', alignItems: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: NAVY }}>{row.item}</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: BLUE, minWidth: 120, textAlign: 'right' }}>{row.amount}</div>
                <div style={{ fontSize: 12, color: '#6b7280', minWidth: 200, textAlign: 'right', paddingLeft: 20 }}>{row.note}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, display: 'flex', gap: 10, padding: '14px 18px', background: 'rgba(245,161,36,0.08)', border: `1px solid ${GOLD}30`, borderRadius: 12, alignItems: 'flex-start' }}>
            <Icon name="alert" size={15} color={GOLD} />
            <div style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.7 }}>
              <strong>SAF levy cannot be passed to the worker</strong> — it is unlawful to deduct or recoup the SAF levy from a sponsored employee's wages at any time. The $1,200/$1,800 per year per worker is an employer cost.
            </div>
          </div>
          <p style={{ fontSize: 11, color: '#9ca3af', marginTop: 10, lineHeight: 1.6 }}>
            Figures current as at 1 July 2026 — verify with Home Affairs.
          </p>
        </div>
      </div>

      {/* ── TIMELINE ── */}
      <div style={{ background: GREY_BAND, padding: '72px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Process" title="SBS to visa — the sequence" intro="Employer sponsorship runs in strict sequence. SBS must be approved before nomination can be lodged; nomination must be approved before the visa can be granted." accent={GOLD} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { step: 'Assess eligibility & collect business documents', time: 'Week 1–2', icon: 'file', color: '#6b7280', note: 'ASIC certificate, ATO records, payroll summary, existing workforce details, training documentation.' },
              { step: 'Lodge SBS application', time: 'Week 2–3', icon: 'layers', color: BLUE, note: 'Online via ImmiAccount. Pay $420 government fee. Applications cannot be expedited after lodgement.' },
              { step: 'SBS decision', time: 'Week 4–10', icon: 'shield', color: BLUE, note: 'DHA processing time is not published. Straightforward cases have been decided in 2–8 weeks.' },
              { step: 'Prepare nomination evidence', time: 'Post-SBS', icon: 'list', color: '#4f46e5', note: 'Salary evidence, labour market testing results, TSMIT or annual earnings check, position description, employment contract.' },
              { step: 'Lodge nomination', time: 'Week 10–12', icon: 'briefcase', color: '#4f46e5', note: 'Nomination is lodged after SBS is approved. $330 government fee per nomination.' },
              { step: 'Lodge visa application', time: 'Week 12+', icon: 'user', color: GOLD, note: 'Worker lodges visa application. Health and character assessments commence. Bridging visa issued if worker is in Australia.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, position: 'relative' }}>
                {/* Left — step indicator */}
                <div style={{ flexShrink: 0, width: 60, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff', border: `2px solid ${item.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, boxShadow: '0 2px 8px rgba(27,43,94,0.08)' }}>
                    <Icon name={item.icon} size={16} color={item.color} />
                  </div>
                  {i < 5 && <div style={{ width: 2, flex: 1, background: '#e8edf6', margin: '4px 0' }} />}
                </div>

                {/* Right — content */}
                <div style={{ flex: 1, paddingBottom: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 6 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>{item.step}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: item.color, background: `${item.color}10`, border: `1px solid ${item.color}25`, borderRadius: 6, padding: '3px 10px', whiteSpace: 'nowrap' }}>{item.time}</div>
                  </div>
                  <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.65 }}>{item.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section style={{ background: '#fff', padding: '72px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="FAQ" title="Employer questions answered" accent={GOLD} />
          <FaqAccordion items={FAQS} accent={CAT_EMPLOYER} />
        </div>
      </section>

      {/* ── RELATED PAGES ── */}
      <section style={{ background: '#ffffff', padding: '56px 32px 64px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <RelatedPages pages={RELATED} navigate={navigate} columns={3} />
        </div>
      </section>

      <CtaBand
        title={<>Need help getting <em style={{ fontStyle: 'italic', color: GOLD }}>SBS approved?</em></>}
        body="Navpreet Aulakh (MARN 2619467) guides employers through the SBS process, nomination, and visa stages — handling the compliance requirements so your business can focus on hiring."
        primaryCta={{ label: 'Book an Employer Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Skills in Demand (482) →', page: 'skills-in-demand-482' }}
        accent={CAT_EMPLOYER}
        footnote="MARA-registered · MARN 2619467 · Employer sponsorship specialists"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
