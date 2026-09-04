import React from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_EMPLOYER } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs, PageHero, KeyFactsStrip, SectionHeading, StepTimeline,
  FaqAccordion, RelatedPages, CtaBand, ComplianceDisclaimer, Callout, EvidenceChecklist,
} from '@/components/page'
import type { KeyFact, TimelineStep, FaqItem, RelatedPage, ChecklistGroup } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'
import Icon from '@/components/ui/Icon'

const CURRENT_AS_AT = 'August 2026'
const ACCENT = CAT_EMPLOYER
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'obligations', label: 'Sponsor obligations' },
  { id: 'monitoring', label: 'Monitoring & audits' },
  { id: 'breaches', label: 'Breaches & sanctions' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'shield', value: '5 years', label: 'SBS approval period', note: 'Standard Business Sponsorship is granted for up to 5 years and must be renewed before expiry.' },
  { icon: 'clock', value: '28 days', label: 'Notification window', note: 'Many reportable events must be notified to the Department within 28 days of occurrence.' },
  { icon: 'dollar', value: '$93,900', label: 'Maximum civil penalty (individual)', note: 'Civil penalties apply for each sponsor obligation breach. Figures current at August 2026.' },
  { icon: 'building', value: '$469,500', label: 'Maximum civil penalty (body corporate)', note: 'Body corporate penalties are five times the individual penalty. Figures current at August 2026.' },
]

const OBLIGATION_CARDS = [
  {
    icon: 'dollar' as const,
    title: 'Pay equivalent terms and conditions',
    desc: 'The sponsored worker must receive pay and conditions no less favourable than an equivalent Australian worker in the same role and location. Underpayment is a serious breach.',
  },
  {
    icon: 'briefcase' as const,
    title: 'Use the worker in the nominated occupation',
    desc: 'The worker may only perform duties in the occupation for which they were nominated. Placing a sponsored worker in a different role without a new nomination is a breach.',
  },
  {
    icon: 'shield' as const,
    title: 'Not recover prohibited costs',
    desc: 'Sponsors must not require the visa holder to pay or reimburse the SAF Levy, nomination application charge, or sponsorship costs. This prohibition applies even if the worker agrees in writing.',
  },
  {
    icon: 'clipboard' as const,
    title: 'Keep required records',
    desc: 'Sponsors must retain records about the sponsored worker\'s employment, including payslips, for the duration of the sponsorship and for two years after it ends.',
  },
  {
    icon: 'alert' as const,
    title: 'Notify the Department of certain events',
    desc: 'Reportable events include: the worker ceasing employment, a change in business structure, an application for voluntary administration, or a change in the worker\'s duties. Most must be notified within 28 days.',
  },
  {
    icon: 'user' as const,
    title: 'Cooperate with inspectors',
    desc: 'Sponsors must allow Department inspectors access to premises and records, provide information when requested, and must not obstruct or mislead compliance activities.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'What happens if we make the sponsored worker redundant?',
    answer: 'If a sponsored worker is made redundant, the employer must notify the Department within 28 days. The visa holder is not immediately required to leave Australia and may have a period to find a new sponsor or depart. The employer must cooperate in facilitating the worker\'s departure costs in certain circumstances.',
  },
  {
    question: 'Can we reduce the sponsored worker\'s salary?',
    answer: 'The sponsored worker must receive pay and conditions no less favourable than equivalent Australian workers. Reducing salary below the nominated amount — or below the Temporary Skilled Migration Income Threshold — without a new nomination may constitute a breach. Seek advice before making any change.',
  },
  {
    question: 'Do obligations continue after the sponsorship ends?',
    answer: 'Some obligations continue for a period after the sponsorship ends, including record-keeping obligations (two years after the sponsorship period) and certain notification requirements. You should seek professional advice if you are unsure of your ongoing obligations.',
  },
  {
    question: 'What is an equivalent terms and conditions breach?',
    answer: 'This occurs when a sponsored worker receives less pay, fewer leave entitlements, or worse working conditions than an equivalent Australian employee in the same role and location would receive. It is one of the most commonly investigated sponsor breaches.',
  },
  {
    question: 'Can we recover visa costs from the sponsored worker?',
    answer: 'No. Sponsors are prohibited from recovering the nomination application charge, the SAF Levy, or sponsorship application costs from the sponsored worker. You may agree with the worker that they contribute to their own visa application charge (VAC), but this must be documented carefully and not imposed as a condition of employment.',
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Standard Business Sponsorship', desc: 'How to apply for and maintain your SBS approval.', icon: 'briefcase', page: 'standard-business-sponsorship', color: CAT_EMPLOYER },
  { title: 'Skilling Australians Fund Levy', desc: 'SAF Levy rates, payment and the prohibition on recovery from workers.', icon: 'dollar', page: 'saf-levy', color: CAT_EMPLOYER },
  { title: 'Change of Employer', desc: 'What happens when a sponsored worker changes to a new employer.', icon: 'arrowright', page: 'change-of-employer', color: CAT_EMPLOYER },
  { title: 'Skills in Demand Visa (482)', desc: 'Full guide to the subclass 482 employer-sponsored visa.', icon: 'star', page: 'skills-in-demand-visa', color: CAT_EMPLOYER },
]

const SANCTION_TYPES = [
  { label: 'Infringement notice', desc: 'Administrative fine — does not require court proceedings.' },
  { label: 'Civil penalty order', desc: 'Sought through the Federal Court.' },
  { label: 'Enforceable undertaking', desc: 'Formal commitment to remedy the breach.' },
  { label: 'Suspension or cancellation of sponsorship approval', desc: 'The Department may suspend or cancel SBS approval.' },
  { label: 'Bar on future sponsorship applications', desc: 'A sanction may prevent the business from applying for sponsorship in the future.' },
]

export default function EmployerObligationsPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['sponsorship-obligations'].title }, [])
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored' },
          { name: 'Employer Obligations', url: 'https://www.nanakmigration.com.au/sponsorship-obligations' },
        ]}
        faqs={FAQ}
        service={{ name: 'Employer Obligations for Approved Sponsors', description: PAGE_META['sponsorship-obligations'].metaDescription, url: 'https://www.nanakmigration.com.au/sponsorship-obligations' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Employer Sponsored Visas', page: 'employer-sponsored-visas' },
        { label: 'Employer Obligations' },
      ]} />
      <PageHero
        variant="standard"
        eyebrow="Standard Business Sponsorship"
        eyebrowSub="Compliance · Ongoing Requirements"
        title={<>Employer Obligations<br /><em style={{ fontStyle: 'italic', color: GOLD }}>for Approved Sponsors</em></>}
        deck="Becoming an approved Standard Business Sponsor (SBS) carries ongoing legal obligations. Sponsors who fail to meet these obligations risk sanctions, suspension, or cancellation of their sponsorship approval."
        shortAnswer="Approved sponsors must cooperate with inspectors, ensure the nominated position is genuine, pay the sponsored worker the nominated salary, meet equivalent terms and conditions of employment, not recover the SAF Levy or certain costs from the worker, keep required records, and notify the Department of certain events. Nanak Migration Group (MARN 2619467) can conduct a compliance health-check for your business."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a compliance health-check', page: 'home' }}
        secondaryCta={{ label: 'View employer sponsored visas', page: 'employer-sponsored-visas' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>

      {/* sticky jump bar */}
      <div style={{ borderTop: '1px solid #e8edf6', borderBottom: '1px solid #e8edf6', background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 4, overflowX: 'auto', scrollbarWidth: 'none' }}>
          {TOC.map(sec => (
            <a key={sec.id} href={`#${sec.id}`} style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap' as const, borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}>{sec.label}</a>
          ))}
        </div>
      </div>

      <div id="overview">
        <KeyFactsStrip facts={KEY_FACTS} accent={ACCENT} />
      </div>

      {/* Obligations section */}
      <section id="obligations" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Compliance" title="Sponsor Obligations" accent={ACCENT}
            intro="As an approved Standard Business Sponsor, your business is legally required to meet the following ongoing obligations for each sponsored worker." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginTop: 40 }}>
            {OBLIGATION_CARDS.map(card => (
              <div key={card.title} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 8, background: GREY_BG, color: ACCENT, flexShrink: 0 }}>
                    <Icon name={card.icon} size={20} />
                  </span>
                  <strong style={{ fontSize: 15, color: NAVY_DARK, lineHeight: 1.3 }}>{card.title}</strong>
                </div>
                <p style={{ margin: 0, fontSize: 14, color: '#4b5563', lineHeight: 1.65 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring section */}
      <section id="monitoring" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Compliance" title="Monitoring and Audits" accent={ACCENT}
            intro="The Department of Home Affairs actively monitors approved sponsors to ensure ongoing compliance with sponsorship obligations." />
          <Callout variant="note">
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: NAVY }}>
              The Department of Home Affairs conducts both reactive and proactive audits of approved sponsors. Audits may be triggered by a worker complaint, an application for a new nomination, or random selection. During an audit, the Department may request payroll records, employment contracts, timesheets, and records of any training provided.
            </p>
          </Callout>
        </div>
      </section>

      {/* Breaches section */}
      <section id="breaches" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Sanctions" title="Breaches and Sanctions" accent={ACCENT}
            intro="Where the Department finds a sponsor has failed to meet an obligation, it may impose a range of sanctions depending on the severity and nature of the breach." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 32 }}>
            {SANCTION_TYPES.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '16px 20px', border: `1px solid ${BORDER}`, borderRadius: 10, background: GREY_BG }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: 6, background: ACCENT + '18', color: ACCENT, flexShrink: 0, fontWeight: 700, fontSize: 14 }}>{i + 1}</span>
                <div>
                  <strong style={{ fontSize: 15, color: NAVY_DARK, display: 'block', marginBottom: 4 }}>{s.label}</strong>
                  <span style={{ fontSize: 14, color: '#4b5563' }}>{s.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28, fontSize: 14, color: '#6b7280', lineHeight: 1.65, padding: '14px 18px', background: '#fef9ec', border: '1px solid #fde68a', borderRadius: 8 }}>
            <strong>Note:</strong> A breach finding may also affect existing visa holders sponsored by the employer. Nanak Migration Group (MARN 2619467) can advise on your obligations and help you respond to a Department inquiry.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Related pages */}
      <section id="related" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Explore" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand title="Discuss your employer obligations" body="Nanak Migration Group (MARN 2619467) assists sponsors and visa holders navigate compliance requirements." primaryCta={{ label: 'Request a discussion', page: 'home' }} accent={ACCENT} navigate={navigate} />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
