import React from 'react'
import { GOLD, NAVY, CAT_PARTNER } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs, PageHero, KeyFactsStrip, SectionHeading,
  FaqAccordion, RelatedPages, CtaBand, ComplianceDisclaimer, Callout,
} from '@/components/page'
import type { KeyFact, FaqItem, RelatedPage } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'
import Icon from '@/components/ui/Icon'

const CURRENT_AS_AT = 'August 2026'
const ACCENT = CAT_PARTNER
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'bridging-visa', label: 'Bridging visa' },
  { id: 'assurance', label: 'Assurance of support' },
  { id: 'queue', label: 'The queue' },
  { id: 'vs-alternatives', label: 'Comparison' },
  { id: 'fees', label: 'Fees' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related' },
]

const KEY_FACTS: KeyFact[] = [
  {
    icon: 'clock',
    value: 'Decades',
    label: 'Non-contributory queue — new applicants face very long waits',
    note: 'The non-contributory parent visa queue has a wait measured in decades for new applications. Confirm current processing times on the DoHA website.',
  },
  {
    icon: 'dollar',
    value: 'Low charge',
    label: 'Modest application charge — significantly less than contributory options',
    note: 'The 804 application charge is much lower than the contributory 143 or 864. However, the tradeoff is an extremely long wait.',
  },
  {
    icon: 'home',
    value: 'Onshore only',
    label: 'Parent must be in Australia at lodgement and at grant',
    note: 'The 804 is an onshore visa. The parent must be physically in Australia when the application is lodged.',
  },
  {
    icon: 'user',
    value: 'Pension age',
    label: 'Parent must have reached Australian Age Pension age',
    note: 'The parent must be of Australian Age Pension age at the time of application. Confirm the current age threshold on the DoHA website.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'My parent is on a visitor visa in Australia — can they apply for the 804 now?',
    answer: 'Yes, provided the parent meets all the eligibility requirements (pension age, balance of family test, sponsorship, assurance of support). Lodging the 804 while the parent holds a valid visitor visa is a common scenario. The parent receives a BVA on lodgement and can remain in Australia. Do not wait until the visitor visa is about to expire — lodge before expiry.',
  },
  {
    question: 'What happens if the parent needs medical care while waiting for the 804?',
    answer: 'The parent on a Bridging Visa waiting for the 804 generally does not have access to Medicare. Comprehensive private health insurance is strongly recommended. Medical costs in Australia can be substantial without Medicare or insurance. Factor this into the family\'s financial planning for the waiting period.',
  },
  {
    question: 'Can the parent work while waiting for the 804?',
    answer: 'Generally, no. The BVA granted while waiting for the 804 does not usually include work rights. The parent is not permitted to take paid employment. If the family needs the parent to have work rights and Medicare during the wait, the contributory subclass 864 (or the offshore 143 or 173) may be more suitable, despite the higher charge.',
  },
  {
    question: 'Is it possible to withdraw the 804 and apply for the 864 instead?',
    answer: 'Yes — an applicant can withdraw their 804 application and apply for the 864 instead, if they prefer the contributory route (with earlier processing and Medicare access) over the non-contributory route (with a much longer wait). However, the 804 application charge is generally not refundable. Seek migration advice before making this decision.',
  },
  {
    question: 'How does the Balance of Family Test work?',
    answer: "The Balance of Family Test requires that more than half of the parent's children live permanently in Australia as citizens or permanent residents, or that the number of children permanently in Australia is at least equal to the number who are not. 'Children' in this context includes biological children, adopted children, and step-children. The test looks at all the parent's children — not just those who are sponsoring the visa. Visit the Balance of Family Test page for worked examples.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Contributory Aged Parent (864)', desc: 'The onshore contributory alternative — shorter wait, much higher charge, Medicare from grant.', icon: 'award', page: 'contributory-aged-parent-864', color: ACCENT },
  { title: 'Sponsored Parent (Temporary) 870', desc: 'Up to 10 years in Australia — no Balance of Family test and no decade-long queue.', icon: 'calendar', page: 'sponsored-parent-870', color: ACCENT },
  { title: 'Balance of Family Test', desc: 'The test every parent visa applicant must pass — worked examples.', icon: 'check', page: 'balance-of-family-test', color: ACCENT },
  { title: 'Parent Visas', desc: 'Compare all parent visa options side by side.', icon: 'user', page: 'parent-visas', color: ACCENT },
]

export default function AgedParent804Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['aged-parent-804'].title }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Parent Visas', url: 'https://www.nanakmigration.com.au/parent-visas' },
          { name: 'Aged Parent Visa (804)', url: 'https://www.nanakmigration.com.au/aged-parent-804' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Aged Parent Visa Subclass 804',
          description: PAGE_META['aged-parent-804'].metaDescription,
          url: 'https://www.nanakmigration.com.au/aged-parent-804',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Partner & Family', page: 'partner-family-visas' },
          { label: 'Parent Visas', page: 'parent-visas' },
          { label: 'Aged Parent (804)' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Partner & Family"
        eyebrowSub="Parent Visas · Subclass 804 (Non-Contributory)"
        title={<>Aged Parent Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 804 — Onshore</em></>}
        deck="The Aged Parent visa (subclass 804) is a non-contributory permanent parent visa for pension-age parents who are already in Australia. It carries a very low application charge — and a wait measured in decades, not years. This guide explains honestly what the 804 offers and its main purpose."
        shortAnswer={<>The 804 is an onshore permanent visa for a parent who has reached <strong style={{ color: NAVY }}>Australian Age Pension age</strong> (currently 67 for both men and women — confirm current on DoHA), is already in Australia, and meets the balance of family test. It is <strong style={{ color: NAVY }}>non-contributory</strong> — the application charge is modest (a few thousand dollars) compared to the contributory routes. However, the <strong style={{ color: NAVY }}>non-contributory parent visa queue is extremely long</strong> — new applicants should expect to wait many decades before a grant. The 804's primary practical purpose is to allow the parent to live lawfully in Australia on a Bridging Visa while waiting, rather than as a quick path to permanent residence. During the wait on a Bridging Visa, the parent generally has <strong style={{ color: NAVY }}>no work rights and no Medicare</strong>. The assurance of support (AoS) is required. The parent must be in Australia at the time of lodgement and at the time of grant. Nanak Migration Group (MARN 2619467) can advise on the 804 and the alternatives. No outcome is guaranteed.</>}
        maraBadge={true}
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Sponsored Parent 870 →', page: 'sponsored-parent-870' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <ReviewedBy />
        </div>
      </section>

      {/* Sticky jump bar */}
      <div style={{ borderTop: '1px solid #e8edf6', borderBottom: '1px solid #e8edf6', background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 4, overflowX: 'auto', scrollbarWidth: 'none' as const }}>
          {TOC.map(sec => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap' as const, borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = ACCENT
                ;(e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'
                ;(e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent'
              }}
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>

      <div id="overview">
        <KeyFactsStrip facts={KEY_FACTS} accent={ACCENT} />
      </div>

      {/* ── OVERVIEW ─────────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Honest framing" title="What the Subclass 804 Actually Offers" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 24 }}>
            The subclass 804 Aged Parent visa is a non-contributory permanent visa for parents of pension age who are in Australia. It is an attractive option in terms of application charges — far cheaper than the contributory subclass 864 or the offshore subclass 143. However, the non-contributory parent visa queue is extraordinarily long.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 24 }}>
            For most new applicants, the subclass 804's primary practical value is not as a route to imminent permanent residence — it is as a mechanism for the parent to live in Australia lawfully on a Bridging Visa while the application is in the queue. The parent can remain in Australia for many years (potentially decades) on a Bridging Visa waiting for a grant, rather than having to return overseas or use a succession of temporary visas.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            This is not a criticism of the visa — for many families, a lawful long-term stay in Australia while eventually progressing toward permanent residence is exactly what they need. But it is important to enter the 804 pathway with clear expectations about the timeline.
          </p>
          <Callout variant="warning" panel={true} title="New 804 applicants face a very long wait — measured in decades">
            The non-contributory parent visa queue is one of the longest queues in the Australian visa system. Current published processing times indicate waits of many decades for new applications. Families who need the parent to have Medicare access, work rights, or permanent status sooner should consider the contributory alternatives (864 onshore, 143 offshore) or the temporary subclass 870 (Sponsored Parent) pathway.
          </Callout>
        </div>
      </section>

      {/* ── ELIGIBILITY ──────────────────────────────────────────── */}
      <section id="eligibility" style={{ background: GREY_BG, padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Requirements" title="Eligibility for the Subclass 804" accent={ACCENT} />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, marginTop: 32 }}>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fff', borderRadius: '0 8px 8px 0', padding: 20 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>1. Australian Age Pension age</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                The parent must have reached Australian Age Pension age at the time of application. As at August 2026, the Age Pension age is 67 for both men and women (recently equalised). Confirm the current age requirement on the DoHA website before lodging.
              </p>
            </div>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fff', borderRadius: '0 8px 8px 0', padding: 20 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>2. Balance of Family Test</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                More than half of the parent's children must be Australian citizens, permanent residents, or eligible New Zealand citizens — or the number of children who are Australian or eligible must be equal to or greater than those who are not. This is a hard requirement — it cannot be waived. See the Balance of Family Test page for worked examples.
              </p>
            </div>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fff', borderRadius: '0 8px 8px 0', padding: 20 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>3. Sponsorship by an eligible child</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                The parent must be sponsored by an Australian citizen, permanent resident, or eligible New Zealand citizen child (or the child's partner who is themselves eligible). The sponsor must meet the settlement requirement — they must have been living in Australia lawfully for a specified period.
              </p>
            </div>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fff', borderRadius: '0 8px 8px 0', padding: 20 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>4. In Australia at the time of application</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                The 804 is an onshore visa. The parent must be in Australia at lodgement. The parent must also be in Australia at the time of visa grant. If the parent is outside Australia when the Department is ready to grant, the visa cannot be granted until the parent returns.
              </p>
            </div>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fff', borderRadius: '0 8px 8px 0', padding: 20 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>5. Assurance of Support</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                The sponsor must provide an Assurance of Support (AoS), including a security bond. This is a legally binding financial commitment — the sponsor undertakes to support the parent and to repay certain Centrelink welfare payments if the parent accesses them within the AoS period. See the Assurance of Support section below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRIDGING VISA ────────────────────────────────────────── */}
      <section id="bridging-visa" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Waiting in Australia" title="The Bridging Visa — Staying Lawfully During the Long Wait" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            After the 804 application is lodged, the parent receives a Bridging Visa A (BVA) that allows them to remain in Australia lawfully while the application is in the queue. This is the key practical mechanism that makes the 804 useful despite the long wait.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              {
                icon: 'briefcase' as const,
                title: 'Work rights on the BVA',
                body: 'The BVA granted while waiting for the 804 generally does not include work rights. The parent cannot take employment in Australia during the wait. This is a significant limitation compared to the contributory pathways.',
              },
              {
                icon: 'shield' as const,
                title: 'Medicare on the BVA',
                body: 'Medicare access on the 804 Bridging Visa is limited. The parent does not generally have access to Medicare while waiting on a BVA for the 804. Health insurance is strongly recommended. This is another key difference from the contributory 864.',
              },
              {
                icon: 'plane' as const,
                title: 'Travel while on a BVA',
                body: 'The standard BVA does not allow the parent to leave and re-enter Australia without a Bridging Visa B (BVB). Leaving on a BVA without a BVB causes the BVA to cease. Seek advice before any international travel during the waiting period.',
              },
              {
                icon: 'clock' as const,
                title: 'The BVA continues until decision',
                body: 'The BVA remains valid for as long as the 804 application is in the queue — potentially for decades. The parent remains lawfully in Australia throughout this period, provided the BVA conditions are met.',
              },
            ].map((card, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, background: GREY_BG, borderTop: `4px solid ${ACCENT}` }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon name={card.icon} size={20} color={ACCENT} />
                </div>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 700, color: NAVY, margin: '0 0 12px' }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ASSURANCE OF SUPPORT ─────────────────────────────────── */}
      <section id="assurance" style={{ background: GREY_BG, padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Financial obligation" title="Assurance of Support" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            An Assurance of Support (AoS) is a legally binding commitment by the sponsor (the Australian child or their partner) to support the parent financially and to repay certain Centrelink welfare payments if the parent accesses them within a specified period. The AoS requires a security bond — a substantial sum deposited with the Department of Human Services.
          </p>
          <Callout variant="note" panel={true} title="Confirm current AoS amounts and bond requirements on DoHA">
            The security bond amount and the AoS terms are set by the Department and may change. Confirm the current requirements before proceeding.
          </Callout>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 32 }}>
            The AoS is a serious legal commitment. If the parent accesses certain Centrelink payments within the AoS period, the sponsor is liable to repay them. Sponsors should seek legal and financial advice before providing an AoS.
          </p>
        </div>
      </section>

      {/* ── THE QUEUE ────────────────────────────────────────────── */}
      <section id="queue" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="The honest reality" title="The Non-Contributory Parent Visa Queue" accent={ACCENT} />
          <Callout variant="danger" panel={true} title="The wait is measured in decades — not years">
            The Department of Home Affairs publishes current processing times on its website. Non-contributory parent visas (804, 103) face some of the longest queues in the Australian migration system. New applicants as at August 2026 should expect waits measured in decades — the queue is the result of decades of applications accumulating against a small annual planning level allocation. Confirm current processing times on the DoHA website.
          </Callout>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 32, marginBottom: 20 }}>
            Why is the queue so long? The annual planning level for non-contributory parent visas is very small — the number of visas granted each year is far exceeded by the number of applications in the queue. This creates a structural backlog that new applications join at the back of.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75 }}>
            Understanding this is essential for planning. The 804 is not a route to permanent residence within a foreseeable timeframe for most new applicants. It is a way to have the parent in Australia on a lawful Bridging Visa, with the eventual prospect of permanent residence many years in the future.
          </p>
        </div>
      </section>

      {/* ── VS ALTERNATIVES ──────────────────────────────────────── */}
      <section id="vs-alternatives" style={{ background: GREY_BG, padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading kicker="Comparing options" title="Subclass 804 vs Alternatives" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            Families considering the 804 should compare all available options:
          </p>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13 }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  <th style={{ padding: '14px 16px', textAlign: 'left' as const, color: '#fff', fontWeight: 700 }}>Feature</th>
                  <th style={{ padding: '14px 16px', textAlign: 'left' as const, color: '#fff', fontWeight: 700 }}>804 (Aged Parent, onshore non-contrib)</th>
                  <th style={{ padding: '14px 16px', textAlign: 'left' as const, color: '#fff', fontWeight: 700 }}>864 (Contrib Aged Parent, onshore)</th>
                  <th style={{ padding: '14px 16px', textAlign: 'left' as const, color: '#fff', fontWeight: 700 }}>870 (Sponsored Parent, temporary)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Outcome', v804: 'Permanent (after decades)', v864: 'Permanent', v870: 'Temporary (up to 10 years)' },
                  { feature: 'Application charge', v804: 'Low (few thousand)', v864: 'Very high (~$43,600+ per adult 2nd instalment — confirm)', v870: 'Moderate per stage' },
                  { feature: 'Wait for permanent', v804: 'Decades', v864: '12–15 years (new applications)', v870: 'N/A (temporary)' },
                  { feature: 'Work rights', v804: 'No', v864: 'No', v870: 'No' },
                  { feature: 'Medicare', v804: 'No', v864: 'Yes (from grant)', v870: 'No' },
                  { feature: 'Balance of Family Test', v804: 'Yes', v864: 'Yes', v870: 'No' },
                  { feature: 'Onshore/Offshore', v804: 'Onshore only', v864: 'Onshore only', v870: 'Either' },
                  { feature: 'Pension age required', v804: 'Yes', v864: 'Yes', v870: 'No' },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : GREY_BG }}>
                    <td style={{ padding: '13px 16px', fontWeight: 600, color: NAVY, borderBottom: `1px solid ${BORDER}`, verticalAlign: 'top' as const }}>{row.feature}</td>
                    <td style={{ padding: '13px 16px', color: '#374151', borderBottom: `1px solid ${BORDER}`, verticalAlign: 'top' as const }}>{row.v804}</td>
                    <td style={{ padding: '13px 16px', color: '#374151', borderBottom: `1px solid ${BORDER}`, verticalAlign: 'top' as const }}>{row.v864}</td>
                    <td style={{ padding: '13px 16px', color: '#374151', borderBottom: `1px solid ${BORDER}`, verticalAlign: 'top' as const }}>{row.v870}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: '#6b7280', marginTop: 16, fontStyle: 'italic' }}>
            Figures current at August 2026 — confirm all charges and processing times on the DoHA website.
          </p>
        </div>
      </section>

      {/* ── FEES ─────────────────────────────────────────────────── */}
      <section id="fees" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Application charges" title="Visa Application Charges" accent={ACCENT} />
          <Callout variant="note" panel={true} title="Confirm current charges on the DoHA website">
            Charges are updated annually. The figures below are indicative as at August 2026.
          </Callout>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 32, marginBottom: 32 }}>
            The 804 application charge is significantly lower than the contributory alternatives — one of its key practical attractions. The low charge reflects the non-contributory nature of the visa: no large financial contribution is required, but the tradeoff is the very long queue.
          </p>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: 'hidden' }}>
            {[
              { label: 'Primary applicant — 804 application charge', value: 'Confirm current amount on DoHA (significantly lower than contributory alternatives)' },
              { label: 'Secondary applicant (adult)', value: 'Confirm current amount on DoHA' },
              { label: 'Secondary applicant (child under 18)', value: 'Confirm current amount on DoHA' },
              { label: 'Assurance of Support bond', value: 'Substantial bond required — confirm current amount on DoHA' },
              { label: 'Health examination', value: 'Payable to Department-approved panel physician — not included in visa charge' },
            ].map((row, i, arr) => (
              <div key={i} style={{ display: 'flex', gap: 24, padding: '16px 24px', borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : 'none', background: i % 2 === 0 ? '#fff' : GREY_BG }}>
                <div style={{ fontSize: 14, color: '#6b7280', minWidth: 280, fontWeight: 500 }}>{row.label}</div>
                <div style={{ fontSize: 14, color: NAVY, flex: 1 }}>{row.value}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: '#6b7280', marginTop: 16, fontStyle: 'italic' }}>
            Figures current at August 2026 — confirm on the Department of Home Affairs website before lodging.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── RELATED ──────────────────────────────────────────────── */}
      <section id="related" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="See also" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand
        title="Navigating the parent visa options for a pension-age parent?"
        body="Nanak Migration Group (MARN 2619467) can advise on whether the 804, 864, or 870 best fits your family's timeline and financial situation."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
