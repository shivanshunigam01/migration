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
  { id: 'condition-8107', label: 'Condition 8107' },
  { id: 'work-rights', label: 'Work rights' },
  { id: 'travel', label: 'Travel' },
  { id: 'secondary', label: 'Secondary applicants' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'briefcase', value: 'Condition 8107', label: 'Work restriction', note: 'Must work for the sponsoring employer in the nominated occupation only.' },
  { icon: 'globe', value: 'Multiple travel', label: 'Travel entitlement', note: 'Most 482 visas include multiple travel facilitation for the duration of the visa.' },
  { icon: 'user', value: 'Secondary visa', label: 'Family members', note: 'Dependent family members generally receive the same visa period and similar work/study rights.' },
  { icon: 'calendar', value: '60 days', label: 'Change-of-employer period', note: 'Visa holders who cease employment may have up to 60 days to find a new sponsor before departure is required.' },
]

const CAN_DO = [
  'Work in your nominated occupation for your sponsoring employer',
  'Take approved leave (annual, personal, parental)',
  'Travel overseas and return while the visa is valid',
  'Apply for a new 482 with a new sponsor',
  'Apply for a 186 ENS after meeting the 2-year threshold',
]

const CANNOT_DO = [
  'Work for a different employer',
  'Work in a different occupation to the one nominated',
  'Work a second job (even part-time) for a different employer without a separate visa authority',
]

const FAQ: FaqItem[] = [
  {
    question: 'Can I do any work for a different employer on my 482?',
    answer: "Generally no. Condition 8107 restricts you to your sponsoring employer and nominated occupation. Working for a different employer without a new nomination is a breach of your visa conditions. An exception may apply if you also hold another visa that grants broader work rights, but this is rare. Seek advice before accepting any secondary employment.",
  },
  {
    question: 'What happens if I lose my job while on a 482?',
    answer: "If your employment ends, you generally have up to 60 days to find a new approved sponsor and have a new nomination lodged, or to depart Australia. The 60-day period is not guaranteed and depends on individual circumstances. Nanak Migration Group (MARN 2619467) can advise on your options if your employment ends unexpectedly.",
  },
  {
    question: "Does my partner have to work for my employer too?",
    answer: "No. Secondary applicants (spouse, de facto partner) on a subclass 482 are generally permitted to work for any employer in any occupation. Condition 8107 applies only to the primary visa holder.",
  },
  {
    question: 'Can I change employers and keep my 482 visa?',
    answer: 'Yes, but your new employer must hold Standard Business Sponsorship (SBS) and must lodge a new nomination for you in the new role. Your current visa continues while the new nomination and any concurrent visa application are processed, provided you remain in Australia and comply with your current conditions.',
  },
  {
    question: "What does 'commence work within 90 days' mean?",
    answer: "Condition 8107 generally requires you to commence work with your sponsoring employer within 90 days of your visa being granted (or your first entry if you were offshore at grant). If you are delayed starting work — for example, due to a late start date or relocation — you should document the reason and seek advice to ensure you are not considered to have breached your conditions.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Change of Employer', desc: 'Step-by-step guide to changing sponsors while on a subclass 482.', icon: 'arrowright', page: 'change-of-employer', color: CAT_EMPLOYER },
  { title: 'Skills in Demand Visa (482)', desc: 'Full guide to the 482 — streams, eligibility and how to apply.', icon: 'star', page: 'skills-in-demand-visa', color: CAT_EMPLOYER },
  { title: 'Employer Obligations', desc: 'What your sponsoring employer must do to remain an approved sponsor.', icon: 'shield', page: 'sponsorship-obligations', color: CAT_EMPLOYER },
  { title: '482 to PR Pathway', desc: 'Transition from the 482 to permanent residence via the 186 TRT stream.', icon: 'trending', page: '482-to-pr-pathway', color: CAT_EMPLOYER },
]

export default function Visa482ConditionsPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['visa-conditions-482'].title }, [])
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored' },
          { name: '482 Visa Conditions', url: 'https://www.nanakmigration.com.au/visa-conditions-482' },
        ]}
        faqs={FAQ}
        service={{ name: 'Subclass 482 Visa Conditions', description: PAGE_META['visa-conditions-482'].metaDescription, url: 'https://www.nanakmigration.com.au/visa-conditions-482' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Employer Sponsored Visas', page: 'employer-sponsored-visas' },
        { label: '482 Visa Conditions' },
      ]} />
      <PageHero
        variant="standard"
        eyebrow="Subclass 482"
        eyebrowSub="Skills in Demand Visa · Visa Conditions"
        title={<>482 Visa Conditions<br /><em style={{ fontStyle: 'italic', color: GOLD }}>What You Must Comply With</em></>}
        deck="The subclass 482 Skills in Demand visa is subject to specific conditions that govern where you can work, how long you can stay, and what your family members are permitted to do in Australia."
        shortAnswer="The most important condition on a subclass 482 visa is condition 8107, which restricts the visa holder to working for the sponsoring employer in the nominated occupation. Condition 8107 does not prevent you from working for a different employer entirely — but it does mean you must obtain a new nomination before starting work with a new employer. Nanak Migration Group (MARN 2619467) can advise on your specific conditions and how to remain compliant."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Get condition-specific advice', page: 'home' }}
        secondaryCta={{ label: 'View 482 visa guide', page: 'skills-in-demand-visa' }}
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

      {/* Condition 8107 section */}
      <section id="condition-8107" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Key condition" title="Condition 8107 — Work Restriction" accent={ACCENT}
            intro="Condition 8107 is attached to every primary subclass 482 visa holder. Understanding what it requires is essential for maintaining visa compliance." />
          <div style={{ border: `2px solid ${ACCENT}`, borderRadius: 12, padding: '28px 32px', background: GREY_BG, marginTop: 32 }}>
            <p style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 600, color: NAVY_DARK }}>Condition 8107 requires you to:</p>
            <ol style={{ margin: 0, paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li style={{ fontSize: 15, color: NAVY, lineHeight: 1.65 }}>Work only for your sponsoring employer;</li>
              <li style={{ fontSize: 15, color: NAVY, lineHeight: 1.65 }}>Work only in your nominated occupation;</li>
              <li style={{ fontSize: 15, color: NAVY, lineHeight: 1.65 }}>Commence employment within 90 days of your visa grant or entry (whichever is later).</li>
            </ol>
            <p style={{ margin: '16px 0 0', fontSize: 15, color: NAVY, lineHeight: 1.65 }}>You must not work for a different employer unless a new nomination has been approved or you hold another visa that permits broader work rights.</p>
          </div>
          <div style={{ marginTop: 20, padding: '14px 18px', background: '#fef9ec', border: '1px solid #fde68a', borderRadius: 8, fontSize: 14, color: '#78350f', lineHeight: 1.65 }}>
            <strong>Note:</strong> Short periods of unpaid leave, sick leave, parental leave, or a brief transition between sponsors do not automatically constitute a breach — but you should seek advice before your employment ends.
          </div>
        </div>
      </section>

      {/* Work rights section */}
      <section id="work-rights" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading kicker="Work rights" title="What You Can and Cannot Do" accent={ACCENT}
            intro="Your work rights on a subclass 482 are defined by your visa conditions and your nomination. The following applies to the primary visa holder." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginTop: 40 }}>
            {/* Can do card */}
            <div style={{ background: '#fff', border: `1px solid #bbf7d0`, borderRadius: 12, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 8, background: '#dcfce7', color: '#16a34a' }}>
                  <Icon name="check" size={18} />
                </span>
                <strong style={{ fontSize: 16, color: '#15803d' }}>What you CAN do</strong>
              </div>
              <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {CAN_DO.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: NAVY, lineHeight: 1.55 }}>
                    <span style={{ color: '#16a34a', flexShrink: 0, marginTop: 2 }}>
                      <Icon name="check" size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Cannot do card */}
            <div style={{ background: '#fff', border: `1px solid #fecaca`, borderRadius: 12, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 8, background: '#fee2e2', color: '#dc2626' }}>
                  <Icon name="close" size={18} />
                </span>
                <strong style={{ fontSize: 16, color: '#b91c1c' }}>What you CANNOT do (without a new nomination)</strong>
              </div>
              <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {CANNOT_DO.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: NAVY, lineHeight: 1.55 }}>
                    <span style={{ color: '#dc2626', flexShrink: 0, marginTop: 2 }}>
                      <Icon name="close" size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Travel section */}
      <section id="travel" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Travel" title="Travel on a Subclass 482" accent={ACCENT}
            intro="Your travel entitlement is set out on your visa grant notice. Most subclass 482 holders receive multiple-entry travel facilitation." />
          <div style={{ marginTop: 32, padding: '28px 32px', border: `1px solid ${BORDER}`, borderRadius: 12, background: GREY_BG, fontSize: 15, color: NAVY, lineHeight: 1.75 }}>
            <p style={{ margin: 0 }}>
              Most subclass 482 visas include multiple-entry travel entitlement for the life of the visa, allowing holders to leave and re-enter Australia freely. Travel facilitation is shown on the visa grant notice — check your ImmiAccount to confirm. If you travel while an associated 186 permanent application is on hand, you may need a Bridging Visa B (BVB) to return.
            </p>
          </div>
        </div>
      </section>

      {/* Secondary applicants section */}
      <section id="secondary" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Family" title="Secondary Applicants" accent={ACCENT}
            intro="Your spouse or de facto partner and dependent children can be included as secondary applicants on your subclass 482 visa." />
          <div style={{ marginTop: 32, border: `1px solid ${BORDER}`, borderRadius: 12, background: '#fff', overflow: 'hidden' }}>
            <div style={{ padding: '20px 28px', borderBottom: `1px solid ${BORDER}`, background: ACCENT + '0d' }}>
              <strong style={{ fontSize: 15, color: NAVY_DARK }}>Secondary applicant entitlements</strong>
            </div>
            <div style={{ padding: '24px 28px' }}>
              <p style={{ margin: '0 0 16px', fontSize: 15, color: NAVY, lineHeight: 1.7 }}>
                Your spouse or de facto partner and dependent children can be included as secondary applicants on your subclass 482 visa. Secondary applicants generally receive:
              </p>
              <ol style={{ margin: 0, paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <li style={{ fontSize: 15, color: NAVY, lineHeight: 1.65 }}>The same visa period as the primary holder;</li>
                <li style={{ fontSize: 15, color: NAVY, lineHeight: 1.65 }}>The right to work for any employer in any occupation;</li>
                <li style={{ fontSize: 15, color: NAVY, lineHeight: 1.65 }}>The right to enrol in study at any institution.</li>
              </ol>
              <p style={{ margin: '20px 0 0', fontSize: 14, color: '#4b5563', lineHeight: 1.65, padding: '12px 16px', background: GREY_BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                Secondary applicants do not hold condition 8107 — only the primary visa holder does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Related pages */}
      <section id="related" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Explore" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand title="Understand your 482 visa conditions" body="Nanak Migration Group (MARN 2619467) can review your visa conditions and advise on compliance with condition 8107 and any proposed employment change." primaryCta={{ label: 'Request a discussion', page: 'home' }} accent={ACCENT} navigate={navigate} />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
