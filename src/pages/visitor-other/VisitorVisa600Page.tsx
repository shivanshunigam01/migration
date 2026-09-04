import React from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_VISITOR } from '@/theme'
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

const CAT_VISITOR_LOCAL = CAT_VISITOR
const ACCENT = CAT_VISITOR_LOCAL

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'streams', label: 'Streams' },
  { id: 'genuine-visitor', label: 'Genuine visitor' },
  { id: 'charges', label: 'Charges' },
  { id: 'condition-8503', label: 'Condition 8503' },
  { id: 'refusals', label: 'Avoiding refusal' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'plane',
    value: '4 streams',
    label: 'Tourist, Sponsored Family, Business Visitor, Frequent Traveller',
    note: 'Each stream has different eligibility requirements, charges, and stay periods. The Tourist stream is the most commonly used.',
  },
  {
    icon: 'dollar',
    value: '~AUD 200',
    label: 'Tourist stream charge (offshore)',
    note: 'Base government charge for the offshore tourist stream application. Onshore applications and sponsored family stream applications have different charges. Figures current at August 2026 — confirm on DoHA.',
  },
  {
    icon: 'calendar',
    value: '3–12 months',
    label: 'Possible stay periods',
    note: 'Stay periods of 3, 6 or 12 months are possible. 12 months is not automatic — it is granted based on individual assessment. Most applications are granted 3 or 6 months.',
  },
  {
    icon: 'alert',
    value: '8503',
    label: 'Condition 8503 — No Further Stay',
    note: 'Many tourist stream grants carry Condition 8503, which prevents the holder from applying for another visa from inside Australia (with very limited exceptions).',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'How long does it take to get a visitor visa (600)?',
    answer: 'Processing times for the subclass 600 vary significantly. Simple applications from low-risk applicants can be decided within a few days to a few weeks. Applications from higher-risk countries or applicants with complex immigration histories can take several months. The Department publishes processing time estimates on its website — but actual times vary. Applying well in advance of your intended travel date is strongly recommended. Nanak Migration Group (MARN 2619467) can advise on realistic timelines based on your passport and circumstances.',
  },
  {
    question: 'Can my family members be included in the same application?',
    answer: 'Yes. Eligible family members (a spouse or de facto partner and dependent children) can be included as secondary applicants in the same subclass 600 application. Each secondary applicant pays their own visa application charge. Each secondary applicant is assessed individually — the approval of the primary applicant does not automatically mean secondary applicants will be approved. Each person must individually satisfy the genuine visitor and financial capacity requirements.',
  },
  {
    question: 'Can I work in Australia on a visitor visa?',
    answer: 'No. The subclass 600 does not allow the holder to work in Australia — paid or unpaid. Business visitor activities (attending meetings, conferences, seminars, negotiations, trade fairs) are permitted but must not constitute employment or contracting for an Australian entity. A person who will be performing paid or unpaid work for an Australian employer or client needs a work visa — not a visitor visa. Working on a visitor visa is a serious visa condition breach.',
  },
  {
    question: 'What is a security bond and will I need one?',
    answer: 'A security bond (also called a "guarantee") is a financial deposit required from the Australian sponsor in the Sponsored Family stream of the 600 visa. The bond amount is typically AUD 5,000 to AUD 15,000 (confirm on DoHA — amounts vary). The bond is held by the Department until the visitor departs Australia — it is then refunded to the sponsor. The bond is intended to provide a financial incentive for the sponsor to ensure the visitor departs as required. Not all Sponsored Family stream applications require a bond — the Department assesses this on a case-by-case basis.',
  },
  {
    question: 'My visitor visa application was refused — what can I do?',
    answer: 'A decision to refuse a visitor visa (subclass 600) may be reviewable at the Administrative Review Tribunal (ART) in some circumstances — but not all refusals carry review rights. The review rights available depend on whether you are onshore or offshore and the basis of the refusal. If you were onshore when the decision was made, review rights are more likely to be available. The most practical option for offshore applicants is generally to address the reasons for refusal and lodge a new application with improved supporting evidence. Nanak Migration Group (MARN 2619467) can review the refusal reasons and advise on the best next step.',
  },
  {
    question: 'Can I apply for a visitor visa if I have previously been refused one?',
    answer: 'Yes. A previous refusal does not permanently bar you from applying for a visitor visa. You can apply again — but the Department will take the previous refusal into account. The key is to understand WHY the application was refused and to address those specific issues in the new application. If the previous refusal was due to insufficient ties to home country, the new application should provide stronger evidence of those ties. If it was due to inadequate funds, provide better financial evidence. Simply resubmitting the same application that was previously refused is unlikely to succeed.',
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Visitor Visas Hub',
    desc: 'Compare all visitor options — eVisitor, ETA, subclass 600 and transit visas.',
    icon: 'plane',
    page: 'visitor-visas',
    color: ACCENT,
  },
  {
    title: 'Bridging Visas',
    desc: 'Stay lawfully in Australia while another application is being processed.',
    icon: 'link',
    page: 'bridging-visas',
    color: ACCENT,
  },
  {
    title: 'Sponsored Parent (Temporary) 870',
    desc: 'For parents who want extended stays in Australia — up to 10 years.',
    icon: 'user',
    page: 'sponsored-parent-870',
    color: ACCENT,
  },
]

export default function VisitorVisa600Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['visitor-visa-600'].title }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://nanakmigration.com.au/' },
          { name: 'Visitor & Other', url: 'https://nanakmigration.com.au/visitor-hub' },
          { name: 'Visitor Visas', url: 'https://nanakmigration.com.au/visitor-visas' },
          { name: 'Visitor Visa (Subclass 600)', url: 'https://nanakmigration.com.au/visitor-visa-600' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Visitor Visa (Subclass 600)',
          description: PAGE_META['visitor-visa-600'].metaDescription,
          url: 'https://nanakmigration.com.au/visitor-visa-600',
        }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Visitor & Other', page: 'visitor-visas' },
          { label: 'Visitor Visas', page: 'visitor-visas' },
          { label: 'Visitor Visa (Subclass 600)' },
        ]}
      />

      <PageHero
        variant="standard"
        eyebrow="Visitor Visas"
        eyebrowSub="Visitor & Other · Subclass 600"
        title={<>Visitor Visa (Subclass 600)<br /><em style={{ fontStyle: 'italic', color: GOLD }}>{"Australia's Universal Visitor Visa"}</em></>}
        deck="The subclass 600 Visitor visa is available to all nationalities — making it the option for passport holders who are not eligible for the ETA or eVisitor. It covers tourism, business visits, family visits, and some frequent traveller applications, with stay periods of 3, 6 or 12 months."
        shortAnswer={<>The subclass 600 Visitor visa has four main streams: <strong style={{ color: NAVY }}>Tourist</strong> (for tourism, recreation, and family visits), <strong style={{ color: NAVY }}>Sponsored Family</strong> (with an Australian resident as sponsor, where a security bond may apply), <strong style={{ color: NAVY }}>Business Visitor</strong> (for short-term business activities — not employment), and <strong style={{ color: NAVY }}>Frequent Traveller</strong> (for some regular visitors from certain countries). Base government charges start at approximately <strong style={{ color: NAVY }}>AUD 200</strong> for the tourist stream offshore. The key eligibility requirement is satisfying the Department that you are a <strong style={{ color: NAVY }}>genuine visitor</strong> — that you intend to stay temporarily and have sufficient ties to home country to ensure your departure. Nanak Migration Group (MARN 2619467) can review your application before you lodge.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← All visitor visas', page: 'visitor-visas' }}
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
          <SectionHeading kicker="The universal option" title="What the Subclass 600 Covers" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 16 }}>
            The Visitor visa (subclass 600) is the most widely applicable visitor visa for Australia. Unlike the eVisitor (651) or ETA (601), which are restricted to citizens of eligible countries, the subclass 600 is available to all nationalities. It is the standard visitor visa for nationals of countries including India, China, the Philippines, Pakistan, Bangladesh, Sri Lanka, Nepal, and many others.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 48 }}>
            The subclass 600 does not allow the holder to work in Australia (paid or unpaid). It is for tourism, recreation, visiting family, and short-term business activities (such as attending meetings, conferences, or negotiations — but not performing work). Work rights require a separate visa.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              {
                icon: 'plane',
                title: 'Onshore and offshore applications',
                desc: 'The 600 can be applied for from outside Australia (offshore) or from inside Australia (onshore) if the applicant is currently lawfully in Australia on another visa.',
              },
              {
                icon: 'calendar',
                title: 'Multiple entry possible',
                desc: 'Many subclass 600 grants allow multiple entries to Australia within the validity period (typically up to 12 months), though this depends on the stream and assessment.',
              },
              {
                icon: 'shield',
                title: 'No work rights',
                desc: 'Visa holders cannot perform work (paid or unpaid) in Australia. Business visitor activities (meetings, conferences) are permitted but employment is not.',
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

      {/* ── SECTION: Streams ────────────────────────────────────── */}
      <section id="streams" style={{ background: '#f8fafd', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading kicker="Streams" title="The Four Streams of the Subclass 600" accent={ACCENT} />

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>
            {/* Stream 1 — Tourist (offshore) */}
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ padding: '18px 24px', background: NAVY, display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 17, fontWeight: 700, color: '#fff' }}>Tourist Stream (Offshore)</div>
                <span style={{ fontSize: 11, fontWeight: 700, background: '#22c55e', color: '#fff', borderRadius: 20, padding: '3px 10px', letterSpacing: '0.04em' }}>Most common</span>
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
                  {[
                    { label: 'For', value: 'Nationals of all countries applying from outside Australia' },
                    { label: 'Purpose', value: 'Tourism, recreation, visiting family or friends' },
                    { label: 'Charge', value: '~AUD 200 (confirm on DoHA)' },
                    { label: 'Stay', value: '3, 6 or 12 months (12 months is not automatic)' },
                    { label: 'Multiple entry', value: 'Possible (within validity period)' },
                    { label: 'Condition 8503', value: 'Often applied — prevents further stay application from inside Australia' },
                  ].map(item => (
                    <div key={item.label} style={{ borderBottom: '1px solid #f0f2f8', paddingBottom: 12 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontSize: 13, color: NAVY, lineHeight: 1.5 }}>{item.value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 16, padding: '12px 16px', background: '#f8fafd', borderRadius: 8, fontSize: 13, color: '#4b5563', lineHeight: 1.65 }}>
                  <strong>Key evidence required:</strong> Financial capacity, ties to home country, purpose of visit, accommodation details.
                </div>
              </div>
            </div>

            {/* Stream 2 — Tourist (onshore) */}
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ padding: '18px 24px', background: '#374151', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 17, fontWeight: 700, color: '#fff' }}>Tourist Stream (Onshore)</div>
                <span style={{ fontSize: 11, fontWeight: 700, background: ACCENT, color: '#fff', borderRadius: 20, padding: '3px 10px', letterSpacing: '0.04em' }}>Extends current stay</span>
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
                  {[
                    { label: 'For', value: 'Visitors already lawfully in Australia who want to extend their stay' },
                    { label: 'Purpose', value: 'Continue tourism or family visit' },
                    { label: 'Charge', value: 'Higher than offshore application (confirm on DoHA)' },
                    { label: 'Condition 8503', value: 'If existing visa has 8503, onshore extension generally requires a waiver (rarely granted)' },
                  ].map(item => (
                    <div key={item.label} style={{ borderBottom: '1px solid #f0f2f8', paddingBottom: 12 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontSize: 13, color: NAVY, lineHeight: 1.5 }}>{item.value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 16, padding: '12px 16px', background: 'rgba(245,161,36,0.07)', border: '1px solid rgba(245,161,36,0.3)', borderRadius: 8, fontSize: 13, color: '#374151', lineHeight: 1.65 }}>
                  Cannot be used to circumvent intent to remain permanently in Australia.
                </div>
              </div>
            </div>

            {/* Stream 3 — Sponsored Family */}
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ padding: '18px 24px', background: '#374151', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 17, fontWeight: 700, color: '#fff' }}>Sponsored Family Stream</div>
                <span style={{ fontSize: 11, fontWeight: 700, background: ACCENT, color: '#fff', borderRadius: 20, padding: '3px 10px', letterSpacing: '0.04em' }}>For family visitors</span>
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
                  {[
                    { label: 'For', value: 'Visitors whose close family member is an Australian citizen, permanent resident, or eligible NZ citizen living in Australia and is willing to sponsor them' },
                    { label: 'Purpose', value: 'Visiting family in Australia' },
                    { label: 'Charge', value: 'Similar to tourist stream; sponsor may be required to lodge a security bond (confirm on DoHA)' },
                    { label: 'Stay', value: '3, 6 or 12 months' },
                    { label: 'Security bond', value: 'Department may require AUD 5,000 to AUD 15,000 bond (confirm on DoHA) — refunded when visitor departs' },
                    { label: 'Key evidence', value: 'Relationship to sponsor, sponsor\'s status in Australia, financial capacity of both applicant and sponsor' },
                  ].map(item => (
                    <div key={item.label} style={{ borderBottom: '1px solid #f0f2f8', paddingBottom: 12 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontSize: 13, color: NAVY, lineHeight: 1.5 }}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stream 4 — Business Visitor */}
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ padding: '18px 24px', background: '#374151', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 17, fontWeight: 700, color: '#fff' }}>Business Visitor Stream</div>
                <span style={{ fontSize: 11, fontWeight: 700, background: ACCENT, color: '#fff', borderRadius: 20, padding: '3px 10px', letterSpacing: '0.04em' }}>Short-term business</span>
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
                  {[
                    { label: 'For', value: 'People who want to attend short-term business activities in Australia' },
                    { label: 'Purpose', value: 'Meetings, conferences, negotiations, training, trade fairs (not employment or contracting)' },
                    { label: 'Charge', value: 'Similar to tourist stream (confirm on DoHA)' },
                    { label: 'Stay', value: '3 months typical' },
                    { label: 'Condition 8503', value: 'Often applies' },
                  ].map(item => (
                    <div key={item.label} style={{ borderBottom: '1px solid #f0f2f8', paddingBottom: 12 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontSize: 13, color: NAVY, lineHeight: 1.5 }}>{item.value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 16, padding: '12px 16px', background: 'rgba(220,38,38,0.06)', border: '1px solid rgba(220,38,38,0.2)', borderRadius: 8, fontSize: 13, color: '#374151', lineHeight: 1.65 }}>
                  "Business visitor" activities must not constitute employment. A person who will be paid by an Australian entity for work performed in Australia is not a business visitor — they require a work visa.
                </div>
              </div>
            </div>

            {/* Stream 5 — Frequent Traveller */}
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ padding: '18px 24px', background: '#374151', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 17, fontWeight: 700, color: '#fff' }}>Frequent Traveller Stream</div>
                <span style={{ fontSize: 11, fontWeight: 700, background: ACCENT, color: '#fff', borderRadius: 20, padding: '3px 10px', letterSpacing: '0.04em' }}>For repeat visitors</span>
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, marginBottom: 16 }}>
                  {[
                    { label: 'For', value: 'Regular visitors to Australia from certain countries' },
                    { label: 'Eligibility', value: 'Available only to nationals of specific countries — check DoHA eligibility list' },
                  ].map(item => (
                    <div key={item.label} style={{ borderBottom: '1px solid #f0f2f8', paddingBottom: 12 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontSize: 13, color: NAVY, lineHeight: 1.5 }}>{item.value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65 }}>
                  Allows multiple short visits over an extended validity period. Confirm eligibility on the DoHA website before applying.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: Genuine visitor ────────────────────────────── */}
      <section id="genuine-visitor" style={{ background: '#ffffff', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Key requirement" title="The Genuine Visitor Requirement" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 40, textAlign: 'center' as const }}>
            The most important eligibility criterion for the subclass 600 is that the applicant must be a "genuine visitor" — a person who genuinely intends to stay temporarily in Australia and who will depart when required. This is assessed holistically by the Department of Home Affairs.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 0 }}>
            {[
              {
                num: '01',
                title: 'Ties to home country',
                body: 'The Department considers how strong your connections are to your country of residence. Strong ties include: current employment, a business you own or manage, property you own or lease, family members (especially dependent children or spouse) remaining at home, and ongoing financial obligations. Weak or absent ties are a common reason for visa refusal.',
              },
              {
                num: '02',
                title: 'Financial capacity',
                body: 'You must demonstrate that you can fund your stay in Australia — accommodation, food, activities, and return travel — without needing to work. Evidence: bank statements showing regular balances (not just a single large deposit), income evidence, or a sponsor\'s financial declaration.',
              },
              {
                num: '03',
                title: 'Previous immigration history',
                body: 'The Department considers any previous visa applications to Australia or other countries — including any previous refusals, overstays, or compliance issues. A history of overstaying previous visas in any country is a significant adverse factor. A clean immigration history is a positive indicator.',
              },
              {
                num: '04',
                title: 'Purpose of visit',
                body: 'The stated purpose of the visit must be consistent with visitor activities (tourism, recreation, family visit, short business activities). A purpose that is inconsistent with a visitor visa — for example, to seek employment, to remain permanently, or to receive medical treatment paid for by Medicare — will indicate the applicant is not a genuine visitor.',
              },
              {
                num: '05',
                title: 'Country of residence and passport',
                body: 'Citizens of some countries face higher refusal rates due to historical rates of overstaying, working illegally, or applying for protection after arrival. This does not mean a visa cannot be granted — but it means applications from nationals of certain countries are assessed more carefully and require stronger supporting evidence.',
              },
            ].map((factor, i) => (
              <div
                key={factor.num}
                style={{
                  borderLeft: `4px solid ${ACCENT}`,
                  background: '#f8fafd',
                  padding: '20px 24px',
                  marginBottom: 12,
                  borderRadius: '0 12px 12px 0',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: ACCENT, letterSpacing: '0.1em', fontVariantNumeric: 'tabular-nums' }}>{factor.num}</span>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>{factor.title}</div>
                </div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{factor.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: Charges ────────────────────────────────────── */}
      <section id="charges" style={{ background: '#f8fafd', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="What it costs" title="Visitor Visa 600 Charges" accent={ACCENT} />

          <div style={{ overflowX: 'auto' as const, marginBottom: 24 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 14, minWidth: 600 }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  {['Application scenario', 'Approximate charge', 'Notes'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', color: '#fff', fontWeight: 700, fontSize: 12, textAlign: 'left' as const, letterSpacing: '0.04em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    scenario: 'Tourist stream — offshore primary applicant',
                    charge: '~AUD 200',
                    notes: 'Per person; confirm on DoHA',
                  },
                  {
                    scenario: 'Tourist stream — offshore secondary applicant (adult)',
                    charge: '~AUD 200',
                    notes: 'Per additional adult',
                  },
                  {
                    scenario: 'Tourist stream — onshore',
                    charge: 'Higher than offshore',
                    notes: 'Confirm on DoHA',
                  },
                  {
                    scenario: 'Sponsored Family stream',
                    charge: '~AUD 200 + possible bond',
                    notes: 'Bond may be required — confirm on DoHA',
                  },
                  {
                    scenario: 'Business Visitor stream',
                    charge: '~AUD 200',
                    notes: 'Confirm on DoHA',
                  },
                ].map((row, i) => (
                  <tr key={row.scenario} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafd', borderBottom: '1px solid #e8edf6' }}>
                    <td style={{ padding: '13px 16px', fontWeight: 500, color: NAVY }}>{row.scenario}</td>
                    <td style={{ padding: '13px 16px', color: '#374151', fontWeight: 600 }}>{row.charge}</td>
                    <td style={{ padding: '13px 16px', color: '#6b7280', fontSize: 13 }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout variant="warning" panel={true} title="Charges are indexed and subject to change">
            All charges above are approximate amounts current at August 2026. Government visa charges are indexed annually and may change. Confirm the current charge on the Department of Home Affairs ImmiAccount system before lodging. Security bond amounts (for the Sponsored Family stream) are set by the Department and vary by applicant — confirm before applying.
          </Callout>
        </div>
      </section>

      {/* ── SECTION: Condition 8503 ──────────────────────────────── */}
      <section id="condition-8503" style={{ background: '#ffffff', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="No Further Stay" title="Condition 8503 — What It Means for Your Visit" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 16 }}>
            Many subclass 600 grants (particularly offshore tourist stream grants) carry Condition 8503, also known as the "No Further Stay" condition. This condition prevents the visa holder from applying for any other substantive visa while they are in Australia — with very limited exceptions.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            If your tourist visa has Condition 8503, you cannot simply apply for a new visitor visa extension from inside Australia. You would need to either depart Australia before your visa expires, or apply for a waiver of Condition 8503 — which is only available in "compelling and compassionate circumstances" and is rarely granted.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
            {/* Card 1 */}
            <div style={{ background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 14 }}>What triggers Condition 8503?</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Usually applied to offshore tourist stream grants',
                  'The Department has discretion whether to impose it',
                  'Applicants with strong ties to home and clear temporary intent are less likely to have it imposed',
                  'It is not appealed separately — it is part of the visa grant decision',
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

            {/* Card 2 */}
            <div style={{ background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 14 }}>{"What are 'compelling and compassionate circumstances' for a waiver?"}</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Serious medical condition that prevents travel',
                  'Death or serious illness of a close family member in Australia',
                  'Unexpected events that could not have been foreseen at time of grant',
                  'Waiver applications are assessed individually — there is no guaranteed outcome',
                  'Do not plan to use a waiver as a routine extension strategy',
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

          <Callout variant="warning" panel={true} title="Do not overstay your visitor visa">
            Overstaying a visitor visa — remaining in Australia after the visa expiry date — is a serious immigration breach. It results in becoming unlawful, is recorded on your immigration record, and can lead to an exclusion bar preventing future visa applications. If your visa is about to expire and you are still in Australia, seek urgent migration advice before the expiry date, not after.
          </Callout>
        </div>
      </section>

      {/* ── SECTION: Avoiding refusal ───────────────────────────── */}
      <section id="refusals" style={{ background: '#f8fafd', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Strengthening your application" title="Common Refusal Reasons and How to Address Them" accent={ACCENT} />

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {[
              {
                num: 1,
                title: 'Insufficient ties to home country',
                body: 'The most common reason. Fix: Provide evidence of your current employment (employment letter, payslips), property ownership or lease agreement, dependent family remaining at home (partner, children), business ownership documents, or other ongoing obligations that require you to return.',
              },
              {
                num: 2,
                title: 'Inadequate financial evidence',
                body: 'Fix: Provide bank statements covering at least 3 months, showing regular account activity and sufficient balances — not just a single large deposit before the application. Include income evidence (payslips, tax returns, business financials). If a sponsor in Australia is helping with costs, include a sponsor\'s financial declaration.',
              },
              {
                num: 3,
                title: 'Previous visa refusals or overstays',
                body: 'A history of immigration non-compliance in Australia or other countries will be assessed. Fix: Be transparent about your immigration history. Provide an explanation of the circumstances of any previous refusal. Demonstrate that the circumstances have changed and that the previous issues no longer apply.',
              },
              {
                num: 4,
                title: 'Inconsistent purpose of visit',
                body: 'If the stated purpose of the visit is not consistent with what the evidence shows — for example, the stated purpose is tourism but the applicant has no return booking and no evidence of planned activities — the Department may not be satisfied the visit is genuine. Fix: Provide a detailed travel itinerary, accommodation bookings, and evidence of activities planned.',
              },
              {
                num: 5,
                title: 'Risk of not departing',
                body: 'This encompasses all the above factors — the Department forms an overall view of whether the applicant will depart at the end of the visa. A clean immigration history, strong home ties, and a specific, time-limited purpose of visit all support this. A credible, honest application is far more effective than a generic one.',
              },
            ].map(item => (
              <div
                key={item.num}
                style={{
                  background: '#fafbfe',
                  border: '1px solid #e8edf6',
                  borderRadius: 10,
                  padding: 20,
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: ACCENT, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, flexShrink: 0 }}>
                  {item.num}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{item.title}</div>
                  <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: FAQ ────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#ffffff', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Subclass 600 Questions Answered" accent={ACCENT} />
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
        title="Get your visitor visa application right the first time"
        body="Nanak Migration Group (MARN 2619467) reviews visitor visa applications before lodgement — particularly for complex cases, previous refusals, and sponsored family applications."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
