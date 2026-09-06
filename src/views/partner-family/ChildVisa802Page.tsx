import React from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_PARTNER } from '@/theme'
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

const ACCENT = CAT_PARTNER
const CURRENT_AS_AT = 'August 2026'
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'bridging-visa', label: 'Bridging visa' },
  { id: 'common-scenarios', label: 'Common scenarios' },
  { id: 'adoption', label: 'Adopted children' },
  { id: 'processing', label: 'Processing' },
  { id: 'fees', label: 'Fees' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'home', value: 'Onshore', label: 'Child must be in Australia when the application is lodged', note: 'The 802 is an onshore visa. If the child is outside Australia at lodgement, the offshore subclass 101 is the correct pathway.' },
  { icon: 'shield', value: 'Permanent', label: 'Grants permanent residence on approval', note: 'On grant of the 802, the child becomes a permanent resident with full rights to live, work, and study in Australia.' },
  { icon: 'link', value: 'Bridging Visa A', label: 'Child receives a BVA on lodgement to stay lawfully', note: 'The Bridging Visa A is granted automatically on lodgement and allows the child to remain in Australia while the 802 application is processed.' },
  { icon: 'clock', value: 'Months–1+ yr', label: 'Processing time varies — confirm current times on DoHA', note: 'Confirm current indicative processing times on the Department of Home Affairs website before lodging.' },
]

const FAQ: FaqItem[] = [
  { question: "My child's visitor visa is about to expire — should I lodge the 802 now?", answer: "If the child is in Australia and meets the 802 eligibility criteria, lodging before the visitor visa expires is important. Once the 802 is lodged, the child receives a BVA that allows them to stay during processing. If the visitor visa expires before the 802 is lodged, the child becomes unlawful — they cannot access a BVA in the normal way. Seek urgent advice if expiry is imminent." },
  { question: 'Can the child travel internationally after the 802 is lodged?', answer: 'Not freely. The BVA granted on lodgement of the 802 generally does not allow the child to leave and re-enter Australia. If the child needs to travel, they must apply for a Bridging Visa B (BVB) before departing. Leaving without a BVB will generally cause the BVA to cease on departure. Seek advice before any international travel while on a BVA.' },
  { question: 'What work rights does the child have on the Bridging Visa A?', answer: "The BVA generally reflects the work rights of the child's previous substantive visa. If the child was on a student visa with work rights, the BVA typically includes those rights. If the child was on a visitor visa (which generally has no work rights), the BVA may also be without work rights. Check the BVA grant notice for the specific conditions." },
  { question: 'My child is 17 and will turn 18 during processing — should I be concerned?', answer: 'Yes. If the child turns 18 during processing and is not enrolled full-time in a recognised educational institution, they will no longer meet the dependency criteria for the 802. Monitor the processing timeline carefully and ensure the child is enrolled full-time as a student before they turn 18 if they are approaching that age. Seek advice on how to manage this risk.' },
  { question: 'Can both parents apply to sponsor the child on a 802, or only one?', answer: "Generally, one parent (or the parent's partner who is an Australian citizen or PR) is the sponsor. The other parent does not need to be Australian to support the child's 802 application — the key requirement is that the sponsoring parent (or their partner) is an Australian citizen, PR or eligible NZ citizen. If both parents are Australian, either can be the sponsor." },
]

const RELATED: RelatedPage[] = [
  { title: 'Child Visa (Offshore 101)', desc: 'For a dependent child applying from outside Australia.', icon: 'plane', page: 'child-visa-101', color: ACCENT },
  { title: 'Partner & Family Visas', desc: 'Overview of all partner, parent, and child visa pathways.', icon: 'heart', page: 'partner-family-visas', color: ACCENT },
  { title: 'Bridging Visas', desc: 'What bridging visas allow and how they work while you wait for a decision.', icon: 'link', page: 'bridging-visas', color: ACCENT },
  { title: 'Parent Visas', desc: 'All parent visa options — contributory, sponsored temporary, and non-contributory.', icon: 'user', page: 'parent-visas', color: ACCENT },
]

const ELIGIBILITY_ITEMS = [
  {
    heading: 'Dependent child of an eligible parent',
    detail: 'The child must be a biological child, step-child, or adopted child (see adoption note) of an Australian citizen, Australian permanent resident, or eligible New Zealand citizen.',
    subItems: null,
  },
  {
    heading: 'Age and dependency — one of three categories',
    detail: null,
    subItems: [
      'Under 18 and not married or in a de facto relationship',
      'Aged 18–25, enrolled full-time in a recognised educational institution, and financially dependent on the sponsoring parent or their partner',
      'Any age, incapacitated for work, and financially dependent on the parent',
    ],
  },
  {
    heading: 'In Australia at the time of application',
    detail: 'The child must be in Australia when the 802 application is lodged. If the child is outside Australia at lodgement, the offshore subclass 101 is required.',
    subItems: null,
  },
  {
    heading: 'Single and dependent',
    detail: 'Children who are married or in a de facto relationship are generally not eligible as a dependent child for the 802, regardless of age.',
    subItems: null,
  },
  {
    heading: 'Health and character',
    detail: 'Health examinations (if required) and character documents apply. The timing of health examinations is coordinated by the Department after lodging.',
    subItems: null,
  },
]

const BVA_CARDS = [
  {
    title: 'What the BVA allows',
    desc: 'The BVA allows the child to remain in Australia lawfully while the 802 application is pending. The BVA typically includes work and study rights consistent with the rights the child had on their previous substantive visa — for example, if the child was on a student visa with work rights, the BVA generally preserves those work rights.',
  },
  {
    title: 'Travel on a BVA',
    desc: 'A standard BVA does not permit the holder to leave and re-enter Australia. If the child leaves Australia on a BVA, the BVA typically ceases on departure. The child would then need to apply for a Bridging Visa B (BVB) before travelling — which allows re-entry within a specified period. Seek advice before the child travels internationally while on a BVA.',
  },
  {
    title: 'When the BVA ends',
    desc: 'The BVA ends when the 802 application is decided — either when the visa is granted (in which case the child becomes a permanent resident) or if the application is refused (in which case the child must depart or seek a review).',
  },
  {
    title: 'Conditions on the BVA',
    desc: "The conditions on the BVA depend on the substantive visa the child held before the BVA was granted. If the child's previous visa had restrictions (e.g. a student visa without work rights), the BVA may reflect those restrictions. Check the BVA grant notice carefully.",
  },
]

const COMMON_SCENARIOS = [
  {
    title: 'Scenario 1 — Child on a visitor visa visiting the Australian parent',
    desc: 'A child from overseas is visiting their Australian citizen parent on a subclass 600 visitor visa. While in Australia, the parent and child decide to pursue permanent residence for the child. The parent lodges a 802 application while the child is still in Australia on the visitor visa. The child receives a BVA on lodgement and can remain in Australia while the 802 is processed.',
  },
  {
    title: "Scenario 2 — Child on a student visa whose parent becomes an Australian PR or citizen",
    desc: "A child has been studying in Australia on a subclass 500 student visa. During their studies, their parent is granted Australian permanent residence or citizenship. The child now meets the sponsorship requirement and can apply for the 802. On lodgement, the child receives a BVA (generally with the same conditions as the student visa).",
  },
  {
    title: 'Scenario 3 — Child born in Australia to a parent who later becomes an Australian citizen or PR',
    desc: 'A child was born in Australia to parents who were on temporary visas and therefore is not an Australian citizen by birth. One parent later becomes an Australian PR or citizen. The child, if still in Australia, can apply for the 802.',
  },
  {
    title: 'Scenario 4 — Family reunification after a parent\'s permanent residence grant',
    desc: "A parent migrates to Australia on their own first, obtains permanent residence, and then wants to sponsor their child who is still overseas. If the child comes to visit and is in Australia at the time of lodging, the 802 is appropriate. If the child remains overseas, the 101 is used instead.",
  },
]

export default function ChildVisa802Page({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Child Visa (Subclass 802)', url: 'https://www.nanakmigration.com.au/child-visa-802' },
        ]}
        faqs={FAQ}
        service={{ name: 'Child Visa Subclass 802 Onshore', description: PAGE_META['child-visa-802'].metaDescription, url: 'https://www.nanakmigration.com.au/child-visa-802' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Partner & Family Visas', page: 'partner-family-visas' },
        { label: 'Child Visa (Subclass 802)' },
      ]} />
      <PageHero
        variant="standard"
        eyebrow="Partner & Family"
        eyebrowSub="Child Visa · Subclass 802 (Onshore)"
        title={<>Child Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 802 — Onshore</em></>}
        deck="The Child visa (subclass 802) grants permanent residence to a dependent child who is already in Australia at the time of application. The child typically receives a Bridging Visa A while the 802 is being processed, allowing them to remain in Australia lawfully."
        shortAnswer={<>The 802 is the onshore permanent child visa — it has the same core eligibility criteria as the offshore 101 (under 18 and not married or de facto; or 18–25 full-time student financially dependent; or any age incapacitated for work and financially dependent) but applies where the child is physically in Australia at the time of lodgement. The child is usually on a visitor, student, or other temporary visa when the 802 is lodged. On lodging the 802, the child receives a Bridging Visa A (BVA) that keeps them in Australia lawfully during processing. The BVA generally includes the same work and study rights as the substantive visa the child held before. Processing takes many months to over a year — confirm current times on DoHA. Nanak Migration Group (MARN 2619467) can advise on the 802 application and Bridging Visa management. No outcome guarantees.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Child Visa 101 (Offshore) →', page: 'child-visa-101' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>
      {/* sticky TOC jump bar */}
      <div style={{ borderTop: '1px solid #e8edf6', borderBottom: '1px solid #e8edf6', background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 4, overflowX: 'auto', scrollbarWidth: 'none' as const }}>
          {TOC.map(sec => (
            <a key={sec.id} href={`#${sec.id}`} style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap' as const, borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}>
              {sec.label}
            </a>
          ))}
        </div>
      </div>

      {/* Overview — Key Facts */}
      <div id="overview">
        <KeyFactsStrip facts={KEY_FACTS} accent={ACCENT} />
      </div>

      {/* Overview section */}
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What it is" title="The Subclass 802 Child Visa (Onshore)" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginTop: 32, marginBottom: 20 }}>
            The subclass 802 Child visa is the onshore counterpart to the offshore subclass 101. It grants permanent residence to a dependent child of an Australian citizen, permanent resident, or eligible New Zealand citizen who is physically in Australia at the time the application is lodged.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>
            A significant practical advantage of the 802 is that the child can remain in Australia lawfully throughout the processing period. On lodgement of the 802, the child is generally granted a Bridging Visa A (BVA) that keeps them in Australia with work and study rights consistent with their previous substantive visa.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 0 }}>
            The 802 is not a faster or "better" pathway than the 101 — it is simply the correct pathway when the child is in Australia. The core eligibility requirements are the same.
          </p>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Requirements" title="Eligibility for the Subclass 802" accent={ACCENT} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
            {ELIGIBILITY_ITEMS.map((item, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 10, padding: '22px 24px', background: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <Icon name="check" size={14} color="#fff" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: item.detail || item.subItems ? 8 : 0 }}>{item.heading}</div>
                    {item.detail && (
                      <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item.detail}</div>
                    )}
                    {item.subItems && (
                      <ul style={{ margin: '8px 0 0', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {item.subItems.map((sub, j) => (
                          <li key={j} style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{sub}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridging Visa */}
      <section id="bridging-visa" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Remaining in Australia" title="The Bridging Visa A — Staying Lawfully During Processing" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginTop: 32, marginBottom: 28 }}>
            One of the key practical advantages of the subclass 802 is that the child can stay in Australia while the application is processed. When the 802 application is lodged, the child is typically granted a Bridging Visa A (BVA) automatically.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20, marginBottom: 32 }}>
            {BVA_CARDS.map((card, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, padding: '24px 24px', background: GREY_BG, borderTop: `4px solid ${ACCENT}` }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 10 }}>{card.title}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.7 }}>{card.desc}</div>
              </div>
            ))}
          </div>
          <Callout variant="warning" panel={true} title="Do not let the child's visa lapse before lodging">
            If the child's substantive visa expires before the 802 is lodged, the child may become unlawful. An unlawful child cannot access a BVA in the normal way. If the child's visa is approaching expiry, lodging the 802 before expiry is critical. Seek urgent advice if a visa has already expired.
          </Callout>
        </div>
      </section>

      {/* Common Scenarios */}
      <section id="common-scenarios" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="When 802 is used" title="Common Scenarios for the Subclass 802" accent={ACCENT} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
            {COMMON_SCENARIOS.map((scenario, i) => (
              <div key={i} style={{ borderLeft: `4px solid ${ACCENT}`, background: GREY_BG, borderRadius: 8, padding: 20, marginBottom: 0, border: `1px solid ${BORDER}`, borderLeftWidth: 4, borderLeftColor: ACCENT }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 10 }}>{scenario.title}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.7 }}>{scenario.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adoption */}
      <section id="adoption" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Adopted children" title="Adopted Children and the Subclass 802" accent={ACCENT} />
          <div style={{ marginTop: 32 }}>
            <Callout variant="warning" panel={true} title="Adopted children may require the subclass 102 — seek advice before lodging">
              If the child was adopted or is in the process of being adopted, the correct visa may be the subclass 102 (Adoption visa) rather than the 802. The 102 is designed for children being adopted through approved overseas adoption processes. Seek migration advice before lodging a 802 for an adopted child to confirm which visa is correct.
            </Callout>
          </div>
        </div>
      </section>

      {/* Processing */}
      <section id="processing" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Timeline" title="Processing Times" accent={ACCENT} />
          <div style={{ marginTop: 32, marginBottom: 24 }}>
            <Callout variant="note" panel={true} title="Confirm current processing times on the DoHA website">
              Processing times are updated regularly. The figures below are general guidance as at August 2026 — always check current indicative times on the DoHA website.
            </Callout>
          </div>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginTop: 24 }}>
            The subclass 802 processing time is similar to the offshore 101. Processing typically takes many months to over a year. The child remains in Australia on a BVA during this period. The Department may request additional information (RFFI) during processing — respond promptly to avoid delays.
          </p>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Application charges" title="Visa Application Charges" accent={ACCENT} />
          <div style={{ marginTop: 32, marginBottom: 24 }}>
            <Callout variant="note" panel={true} title="Confirm current charges on the DoHA website">
              Visa application charges are updated periodically. Confirm current charges on the Department of Home Affairs website before lodging.
            </Callout>
          </div>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginTop: 24 }}>
            The base application charge for the 802 is similar to the 101 — several thousand Australian dollars. Each child requires a separate application and a separate application charge. There is no second-instalment charge for the 802 — it is a single-charge permanent visa.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="See also" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand
        title="Applying for permanent residence for a child in Australia?"
        body="Nanak Migration Group (MARN 2619467) can advise on the 802 application and help manage the Bridging Visa during processing."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
