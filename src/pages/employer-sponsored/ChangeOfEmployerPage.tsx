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

const CURRENT_AS_AT = 'August 2026'
const ACCENT = CAT_EMPLOYER
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'process', label: 'Process' },
  { id: 'fees', label: 'Fees' },
  { id: 'risks', label: 'Risks' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'calendar', value: '60 days', label: 'Grace period after employment ends', note: 'You generally have up to 60 days to secure a new sponsor after your employment ceases.' },
  { icon: 'briefcase', value: 'SBS required', label: 'New employer must be approved', note: 'Your new employer must hold (or apply for) Standard Business Sponsorship before nominating you.' },
  { icon: 'file', value: 'New nomination', label: 'Required for each transfer', note: 'A new nomination application must be lodged by the new employer for your nominated occupation.' },
  { icon: 'shield', value: 'Stay compliant', label: 'Condition 8107 continues', note: 'You must comply with condition 8107 until a new nomination and any required visa change is in effect.' },
]

const STEPS: TimelineStep[] = [
  {
    title: 'Confirm new employer has SBS',
    desc: 'Your new employer must hold current Standard Business Sponsorship (or apply for it concurrently). Check their SBS approval status and renewal date.',
  },
  {
    title: 'Agree on role and salary',
    desc: 'Confirm the new role is in the same or a closely related ANZSCO occupation and that the offered salary meets the Temporary Skilled Migration Income Threshold (TSMIT) or the applicable stream threshold.',
  },
  {
    title: 'New employer lodges nomination',
    desc: 'The new employer lodges a 482 nomination through ImmiAccount. If you are remaining in the same occupation and your current visa period is sufficient, you may not need a new visa — but confirm with a migration agent.',
  },
  {
    title: 'Await nomination approval',
    desc: 'The Department processes the new nomination. During this time you should remain employed with your current employer if still employed, or comply with the 60-day rule if employment has already ended.',
  },
  {
    title: 'Commence work with new employer',
    desc: 'Once the new nomination is approved (and any required visa granted), you may commence work with the new employer in the nominated occupation.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'Can I start working for my new employer straight away?',
    answer: 'No. You must wait until your new employer\'s nomination is approved before commencing work with them, unless your current visa conditions otherwise permit it. Starting work before the nomination is approved may breach condition 8107.',
  },
  {
    question: 'Does my new employer need to pay the SAF Levy?',
    answer: "Yes. The SAF Levy is payable by each employer at the time of nominating. If you change employers, your new employer must pay the SAF Levy for the period of the new nomination — even if you have only recently transferred.",
  },
  {
    question: 'What if I cannot find a new sponsor within 60 days?',
    answer: 'If you cannot find a new sponsor within the 60-day grace period, you may be required to depart Australia. You should seek advice promptly if your employment ends unexpectedly. Do not wait until day 60 to start the process.',
  },
  {
    question: 'Can my new employer be in a different industry?',
    answer: 'Yes, provided the nominated occupation appears on the relevant occupation list for your visa stream and the role meets salary and skill requirements. The occupation must match your qualifications and experience.',
  },
  {
    question: 'Will changing employers affect my 186 PR application?',
    answer: 'If you are partway through the 2-year qualifying period for the 186 Temporary Residence Transition (TRT) stream, changing employers resets the clock. You would need to work with the new employer for 2 years (in most cases) before a 186 TRT application can be lodged. Seek advice on your specific situation.',
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Skills in Demand Visa (482)', desc: 'Full guide to the 482 — streams, eligibility and the nomination process.', icon: 'star', page: 'skills-in-demand-visa', color: CAT_EMPLOYER },
  { title: '482 Visa Conditions', desc: 'What condition 8107 means and how to stay compliant on your 482 visa.', icon: 'clipboard', page: 'visa-conditions-482', color: CAT_EMPLOYER },
  { title: 'Employer Obligations', desc: 'What your current and future sponsors must do to remain compliant.', icon: 'shield', page: 'sponsorship-obligations', color: CAT_EMPLOYER },
  { title: '482 to PR Pathway', desc: 'Transition from the 482 to permanent residence via the 186 TRT stream.', icon: 'trending', page: '482-to-pr-pathway', color: CAT_EMPLOYER },
]

const RISKS = [
  {
    title: 'Gap in sponsorship',
    desc: 'Working without a valid nomination for your new employer is a breach of condition 8107. Do not start working for the new employer until the nomination is approved (unless a migration agent advises otherwise based on your specific visa grant).',
  },
  {
    title: '60-day rule',
    desc: 'The 60-day period is not a visa — it is an administrative grace period. If you remain in Australia beyond 60 days after employment ends without a new sponsor, you may accrue unlawful status.',
  },
  {
    title: 'Occupation mismatch',
    desc: 'If your new role is in a materially different ANZSCO code, a new visa application may be required in addition to the new nomination. Confirm the occupation code before accepting the offer.',
  },
  {
    title: 'SBS renewal',
    desc: "Check that your new employer's SBS has not lapsed. A lapsed SBS means the employer cannot lodge a valid nomination until SBS is renewed.",
  },
]

export default function ChangeOfEmployerPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['change-of-employer'].title }, [])
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: 'Change of Employer', url: 'https://www.nanakmigration.com.au/change-of-employer' },
        ]}
        faqs={FAQ}
        service={{ name: 'Change of Employer on Subclass 482', description: PAGE_META['change-of-employer'].metaDescription, url: 'https://www.nanakmigration.com.au/change-of-employer' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Employer Sponsored Visas', page: 'employer-sponsored-visas' },
        { label: 'Change of Employer' },
      ]} />
      <PageHero
        variant="standard"
        eyebrow="Subclass 482"
        eyebrowSub="Skills in Demand Visa · Sponsor Transfer"
        title={<>Change of Employer<br /><em style={{ fontStyle: 'italic', color: GOLD }}>on a Subclass 482 Visa</em></>}
        deck="If you hold a subclass 482 Skills in Demand visa and your employment ends — or you wish to move to a new employer — you may be able to transfer your sponsorship without leaving Australia. Your new employer must be an approved sponsor."
        shortAnswer={<>Changing employers on a subclass 482 requires your new employer to hold Standard Business Sponsorship and to lodge a new nomination for you. You can remain in Australia while the new nomination is being processed, provided you continue to comply with your current visa conditions. If your employment has already ended, you generally have up to 60 days before departure is required. Nanak Migration Group (MARN 2619467) can assess your situation and help coordinate the transfer process.</>}
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

      <section id="eligibility" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Eligibility" title="Who Can Transfer to a New Employer?" accent={ACCENT}
            intro="Not every 482 holder can transfer their sponsorship. The following conditions apply." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
            {[
              { heading: 'You hold a current subclass 482 visa', detail: 'Your visa must be valid at the time the new nomination is lodged. A cancelled or expired 482 visa cannot be transferred — you would need to apply for a new visa.' },
              { heading: 'Your new employer must hold SBS', detail: 'Standard Business Sponsorship must be current. If the employer is not yet approved, they can apply for SBS concurrently with the nomination, but the nomination cannot be approved until SBS is granted.' },
              { heading: 'The role must meet occupation and salary requirements', detail: 'The new position must appear on the relevant occupation list for your visa stream and must meet the Temporary Skilled Migration Income Threshold (TSMIT) or the applicable stream salary floor.' },
              { heading: 'You must be within the 60-day period (if employment has ended)', detail: 'If your employment with your previous sponsor has already ended, you have a 60-day period in which to find and be nominated by a new employer before departure from Australia is generally required.' },
            ].map((item, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 10, padding: '20px 24px', background: GREY_BG }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 6 }}>{item.heading}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Process" title="Steps to Transfer Your Sponsorship" accent={ACCENT}
            intro="An indicative process only. Individual circumstances may vary — obtain personalised advice from a registered migration agent." />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      <section id="fees" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Costs" title="Fees for Changing Employers" accent={ACCENT} />
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: 'hidden', marginTop: 32 }}>
            {[
              { label: 'Nomination application charge', value: '$330 (indicative, subject to change)' },
              { label: 'SAF Levy', value: '$1,200 per year (small business) or $1,800 per year (other businesses) — payable by the new employer' },
              { label: 'New visa application charge', value: 'May apply if a new subclass 482 visa application is required (check current VAC on DoHA website)' },
              { label: 'Professional fees', value: 'Variable — contact Nanak Migration Group for a fixed-fee quote' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: 24, padding: '16px 24px', borderBottom: i < 3 ? `1px solid ${BORDER}` : 'none', background: i % 2 === 0 ? '#fff' : GREY_BG }}>
                <div style={{ fontSize: 14, color: '#6b7280', minWidth: 220, fontWeight: 500 }}>{row.label}</div>
                <div style={{ fontSize: 14, color: NAVY, flex: 1 }}>{row.value}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: '#6b7280', marginTop: 16, fontStyle: 'italic' }}>
            Figures current at August 2026 — confirm on the Department of Home Affairs website before lodging.
          </p>
        </div>
      </section>

      <section id="risks" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Important" title="Risks and Common Issues" accent={ACCENT}
            intro="Be aware of the following issues before and during the employer transfer process." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 20, marginTop: 32 }}>
            {RISKS.map((risk, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 10, padding: '22px 24px', background: '#fff', borderLeft: `4px solid ${ACCENT}` }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 8 }}>{risk.title}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{risk.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      <section id="related" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="See also" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand
        title="Ready to transfer your 482 sponsorship?"
        body="Nanak Migration Group (MARN 2619467) can assess your situation, advise on timing, and coordinate the new nomination with your prospective employer."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
