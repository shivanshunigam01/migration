import React from 'react'
import { GOLD, NAVY, CAT_PARTNER } from '@/theme'
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

const CURRENT_AS_AT = 'October 2026'
const ACCENT = CAT_PARTNER
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'two-stage', label: 'Two-stage path' },
  { id: 'cost-comparison', label: 'Cost comparison' },
  { id: 'work-medicare', label: 'Work and Medicare' },
  { id: 'transition', label: 'Transition to 143' },
  { id: 'processing', label: 'Processing' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related' },
]

const KEY_FACTS: KeyFact[] = [
  {
    icon: 'calendar',
    value: '2 years',
    label: 'Temporary visa — parent must then apply for the permanent 143',
    note: 'The 173 allows the parent to live in Australia for 2 years. Before the 173 expires, the parent must apply for the subclass 143 to obtain permanent residence.',
  },
  {
    icon: 'dollar',
    value: 'Split charges',
    label: 'Two-stage payment — smaller first, larger second installment',
    note: 'The 173+143 two-stage route splits the large contributory charge. The total is slightly higher than direct 143, but the cash-flow is spread across two applications.',
  },
  {
    icon: 'briefcase',
    value: 'Work rights',
    label: 'The parent can work and access Medicare while on the 173',
    note: 'Unlike the non-contributory 804, the 173 includes work rights and access to Medicare from grant.',
  },
  {
    icon: 'plane',
    value: 'In or outside Australia',
    label: 'Parent can apply from in or outside Australia',
    note: 'The parent and family members can be in or outside Australia (but not in immigration clearance) when they apply for the 173. The onshore aged contributory alternative is subclass 884/864.',
  },
]

const STEPS: TimelineStep[] = [
  {
    title: 'Apply for the subclass 173 (offshore)',
    desc: 'The parent applies for the 173 from in or outside Australia. The 173 charges (AUD4,245 at lodgement and AUD29,130 before grant) are the first stage of the two-step contributory route. The balance of family test, assurance of support, and all eligibility documents are submitted at this stage.',
  },
  {
    title: '173 granted — parent moves to Australia',
    desc: 'On grant of the 173, the parent enters Australia and can live, work, and access Medicare. The 173 is valid for 2 years. The parent can make multiple trips in and out of Australia during this period.',
  },
  {
    title: 'Apply for the subclass 143 (before the 173 expires)',
    desc: 'Before the 173 expires, the parent must lodge a 143 application from within Australia (or offshore — confirm current lodgement options). The second contributory charge (a larger amount) is payable at this stage. The 143 application is assessed using the same eligibility criteria.',
  },
  {
    title: '143 granted — permanent residence',
    desc: 'On grant of the 143, the parent becomes a permanent resident of Australia. They retain the right to live, work, access Medicare, and eventually apply for citizenship.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'Can I apply for the 173 from within Australia?',
    answer: 'Yes. The parent and any family members can be in or outside Australia (but not in immigration clearance) when they apply for the 173. If the parent is in Australia on a visa with a no further stay condition, the application will be invalid unless the condition is waived. If the parent is of pension age and in Australia, the onshore contributory aged route (884/864) may be more appropriate.',
  },
  {
    question: 'Does the 173 give me a faster pathway to permanent residence than the direct 143?',
    answer: 'No. The 173 is capped and queued in the same contributory parent queue as the 143 — it is not granted sooner. Once a 173 holder applies for the 143, Home Affairs currently processes that permanent stage quickly. The 173 route still allows the parent to live in Australia with work rights and Medicare while waiting.',
  },
  {
    question: 'What is the assurance of support and how does it work?',
    answer: "The Assurance of Support (AoS) is a legally binding commitment by the sponsor (the Australian child or their partner) to support the parent financially and to repay Centrelink payments if the parent accesses certain government benefits within a specified period. The AoS requires a security bond lodged with the Department of Human Services. The AoS is a firm obligation — seek legal and financial advice before the sponsor commits.",
  },
  {
    question: 'Can the parent include their partner in the 173 application?',
    answer: 'Yes. A partner (spouse or de facto partner) who is also a parent of the sponsoring child can be included as a secondary applicant in the 173 application. A secondary applicant charge applies. Both the parent and their partner must meet health and character requirements.',
  },
  {
    question: 'What happens to the 173 charge if the 143 is refused?',
    answer: 'If the subsequent 143 application is refused, the parent does not get the 173 application charge refunded. The charges paid for the 173 are not recoverable. It is important to ensure the parent genuinely meets the eligibility criteria for the 143 before proceeding with the 173 route. Nanak Migration Group (MARN 2619467) can advise on the strength of the eligibility case.',
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Contributory Parent (Permanent) 143', desc: 'The permanent destination visa — apply direct or via 173.', icon: 'award', page: 'contributory-parent-143', color: ACCENT },
  { title: 'Balance of Family Test', desc: 'The test every parent visa applicant must pass — worked examples.', icon: 'check', page: 'balance-of-family-test', color: ACCENT },
  { title: 'Sponsored Parent (Temporary) 870', desc: 'A lower-cost temporary alternative — up to 10 years with no Balance of Family test.', icon: 'calendar', page: 'sponsored-parent-870', color: ACCENT },
  { title: 'Parent Visas', desc: 'Overview and comparison of all parent visa options.', icon: 'user', page: 'parent-visas', color: ACCENT },
]

export default function ContributoryParent173Page({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Parent Visas', url: 'https://www.nanakmigration.com.au/parent-visas' },
          { name: 'Contributory Parent (Temporary) Visa 173', url: 'https://www.nanakmigration.com.au/contributory-parent-173' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Contributory Parent (Temporary) Visa Subclass 173',
          description: PAGE_META['contributory-parent-173'].metaDescription,
          url: 'https://www.nanakmigration.com.au/contributory-parent-173',
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
          { label: 'Contributory Parent (Temporary) 173' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Partner & Family"
        eyebrowSub="Parent Visas · Subclass 173 (Temporary)"
        title={<>Contributory Parent<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Temporary — Subclass 173</em></>}
        deck="The Contributory Parent (Temporary) visa (subclass 173) is a 2-year temporary visa that forms the first stage of the two-step path to permanent contributory parent residence (subclass 143). It lets families manage the large application charges in two installments rather than all at once."
        shortAnswer={<>The subclass 173 is a <strong style={{ color: NAVY }}>temporary visa — it is not permanent residence</strong>, and the parent must apply for the permanent 143 before the 173 expires. The 173 and 143 share the same eligibility requirements: the balance of family test, sponsorship by an eligible child, assurance of support, and health and character clearances. The difference is cost and timing — instead of paying the full contributory charge upfront for the 143, the family pays the 173 charges (AUD4,245 at lodgement and AUD29,130 before the 173 is granted) and then a smaller amount for the 143 (AUD555 at lodgement and AUD19,420 before grant). The <strong style={{ color: NAVY }}>total cost via 173+143 is slightly higher than going direct-143</strong> (two application charges rather than one), but the cash-flow advantage of splitting the charge can be significant for some families. While on the 173, the parent has <strong style={{ color: NAVY }}>work rights and can access Medicare</strong>. The 173 must be applied for offshore — the parent must be outside Australia at the time of lodging — but the parent can travel to Australia during processing and while holding the 173. Nanak Migration Group (MARN 2619467) can advise on whether the 173 route is appropriate for your family. No outcome is guaranteed.</>}
        maraBadge={true}
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Permanent 143 →', page: 'contributory-parent-143' }}
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
          <SectionHeading kicker="What it is" title="The Two-Stage Contributory Parent Route" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 24 }}>
            The subclass 173 is a 2-year temporary visa that forms the first stage of the two-step path to permanent contributory parent residence in Australia. The second stage is the subclass 143 (Contributory Parent — permanent). The 173 exists as an option for families who prefer to split the large contributory application charges over two applications rather than paying the full amount for a direct 143 application.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 24 }}>
            The 173 is not permanent residence. The parent must apply for the 143 before the 173 visa expires. If the parent does not apply for the 143 in time, they will need to depart Australia when the 173 expires — having paid the 173 application charge and lost the pathway to permanent residence on this route.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            The eligibility requirements for the 173 are the same as for the 143 — both require the balance of family test, sponsorship by an eligible child, assurance of support, and health and character clearances.
          </p>
          <Callout variant="warning" panel={true} title="The 173 is temporary — you must apply for the 143 before it expires">
            If you hold a subclass 173 and do not apply for the subclass 143 before the 173 expires, you will need to leave Australia. The 173 application charge is not refundable. Ensure you apply for the 143 with enough time before the 173 expires — do not wait until the last moment.
          </Callout>
        </div>
      </section>

      {/* ── ELIGIBILITY ──────────────────────────────────────────── */}
      <section id="eligibility" style={{ background: GREY_BG, padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Who can apply" title="Eligibility Requirements (Same as Subclass 143)" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The eligibility requirements for the 173 are the same as for the permanent 143. The parent must meet all of the following:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fff', borderRadius: '0 8px 8px 0', padding: 20 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>1. Balance of Family Test</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                More than half of the parent's children must be Australian citizens, permanent residents, or eligible New Zealand citizens — or the number of children who are Australian citizens, permanent residents, or eligible New Zealand citizens must be equal to or greater than the number who are not. The balance of family test is a hard requirement and cannot be waived.
              </p>
            </div>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fff', borderRadius: '0 8px 8px 0', padding: 20 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>2. Sponsorship by an eligible child</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                The parent must be sponsored by an Australian citizen, Australian permanent resident, or eligible New Zealand citizen child (or the child's partner who is themselves eligible). The sponsor must agree to provide support for the parent and meet the sponsorship settlement requirements.
              </p>
            </div>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fff', borderRadius: '0 8px 8px 0', padding: 20 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>3. Assurance of Support</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                The sponsor must lodge an Assurance of Support (AoS) with the Department of Human Services. This is a legally binding commitment to support the parent and repay certain Centrelink payments if they are accessed. A security bond — a substantial sum — is required as part of the AoS process.
              </p>
            </div>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fff', borderRadius: '0 8px 8px 0', padding: 20 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>4. Outside Australia at the time of application</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                The 173 is an offshore visa. The parent must be outside Australia when the application is lodged. If the parent is already in Australia and wishes to pursue a contributory parent pathway, the onshore alternative is the subclass 864 (Contributory Aged Parent), subject to meeting the pension age requirement.
              </p>
            </div>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fff', borderRadius: '0 8px 8px 0', padding: 20 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>5. Health and character</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                Standard health examinations and character requirements (police clearances) apply to the parent and any secondary applicants included in the application. Health assessments are conducted at a Department-approved panel physician.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TWO-STAGE ────────────────────────────────────────────── */}
      <section id="two-stage" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="The pathway" title="How the 173 to 143 Two-Stage Route Works" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* ── COST COMPARISON ──────────────────────────────────────── */}
      <section id="cost-comparison" style={{ background: GREY_BG, padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeading kicker="Direct 143 vs 173 + 143" title="Cost Comparison: Two Paths to Permanent Contributory Parent Residence" accent={ACCENT} />
          <Callout variant="note" panel={true} title="Confirm all current charges on the DoHA website before lodging">
            Visa application charges change annually and are updated by the Department. The figures below are indicative of the structure as at October 2026. Always confirm current charges on the DoHA website before making any decisions.
          </Callout>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '32px 0 24px' }}>
            Both routes lead to the same permanent 143 outcome, but the cost structure and timing differ:
          </p>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: 'hidden', marginBottom: 32 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 14 }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  <th style={{ padding: '14px 20px', textAlign: 'left' as const, color: '#fff', fontWeight: 700, fontSize: 13 }}></th>
                  <th style={{ padding: '14px 20px', textAlign: 'left' as const, color: '#fff', fontWeight: 700, fontSize: 13 }}>Direct 143</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left' as const, color: '#fff', fontWeight: 700, fontSize: 13 }}>173 then 143</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: 'First payment',
                    direct: 'AUD6,300 first instalment (main applicant) — confirm Home Affairs',
                    staged: '173 application charge (smaller first instalment — confirm DoHA)',
                  },
                  {
                    label: 'Second payment',
                    direct: 'AUD43,600 per adult second instalment, payable before the 143 is granted',
                    staged: '143 application charge (larger second instalment — confirm DoHA)',
                  },
                  {
                    label: 'Total cost',
                    direct: 'Lower overall',
                    staged: 'Slightly higher overall (two application charges)',
                  },
                  {
                    label: 'Cash-flow',
                    direct: 'Large upfront payment',
                    staged: 'Spread across two applications over ~2+ years',
                  },
                  {
                    label: 'Time to permanent residence',
                    direct: 'Longer queue — direct 143 queue',
                    staged: '173 queue + 143 processing after',
                  },
                  {
                    label: 'Work rights before PR',
                    direct: 'None (waiting offshore or on another visa)',
                    staged: 'Yes — full work rights on the 173',
                  },
                  {
                    label: 'Medicare before PR',
                    direct: 'No',
                    staged: 'Yes — from grant of 173',
                  },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : GREY_BG }}>
                    <td style={{ padding: '14px 20px', fontWeight: 600, color: NAVY, borderBottom: `1px solid ${BORDER}`, verticalAlign: 'top' as const }}>{row.label}</td>
                    <td style={{ padding: '14px 20px', color: '#374151', borderBottom: `1px solid ${BORDER}`, verticalAlign: 'top' as const }}>{row.direct}</td>
                    <td style={{ padding: '14px 20px', color: '#374151', borderBottom: `1px solid ${BORDER}`, verticalAlign: 'top' as const }}>{row.staged}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75 }}>
            The 173 + 143 route makes sense for families who want the parent in Australia with work rights and Medicare as soon as possible and prefer to spread the cost. The direct 143 may be preferable for families who want to minimise total cost and do not mind the parent waiting offshore. Both routes ultimately face the same queue for the underlying permanent 143 grant — the 173 does not jump the 143 queue.
          </p>
        </div>
      </section>

      {/* ── WORK AND MEDICARE ────────────────────────────────────── */}
      <section id="work-medicare" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Entitlements on the 173" title="Work Rights and Medicare While on the Temporary 173" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            One of the meaningful advantages of the 173 route over waiting for a direct 143 or the non-contributory pathways is that the parent can live in Australia with full rights while waiting for the permanent 143 to be processed.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              {
                icon: 'briefcase' as const,
                title: 'Work rights',
                body: "The subclass 173 includes full work rights. The parent can take any employment — full-time, part-time, or self-employed — during the 2-year period. This is a significant advantage over the non-contributory 804 and 864 onshore pathways, which have no work rights.",
              },
              {
                icon: 'shield' as const,
                title: 'Medicare',
                body: 'Subclass 173 holders can enrol in Medicare. Services Australia lists the Contributory Parent visas (including subclass 173) among the temporary visas covered by a Ministerial Order, so the parent can enrol once the 173 is granted and they are in Australia. This provides access to subsidised medical and hospital care in Australia — a significant benefit for parents who require ongoing healthcare.',
              },
              {
                icon: 'plane' as const,
                title: 'Travel',
                body: 'The 173 is a multiple-entry visa. The parent can travel in and out of Australia during the 2-year visa period without restriction on trip frequency, subject to the visa expiry date.',
              },
            ].map((card, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, background: GREY_BG, borderTop: `4px solid ${ACCENT}` }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon name={card.icon} size={20} color={ACCENT} />
                </div>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 12px' }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRANSITION ───────────────────────────────────────────── */}
      <section id="transition" style={{ background: GREY_BG, padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Transitioning to permanent" title="What Happens if You Do Not Apply for the 143 in Time?" accent={ACCENT} />
          <Callout variant="danger" panel={true} title="Do not let the 173 expire without lodging the 143">
            If the subclass 173 expires without the parent having lodged a subclass 143 application, the parent must depart Australia. The 173 application charge is not refunded, and the parent loses the two-stage pathway advantage they paid for. The parent would then need to reapply from the beginning — including new application charges. Seek advice well before the 173 expires.
          </Callout>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 32 }}>
            The 143 application should be lodged from within Australia (confirm current lodgement rules on DoHA) before the 173 expires. The parent receives a Bridging Visa A (BVA) on lodgement of the 143, which allows them to remain in Australia while the 143 is processed. Once the 143 is granted, the parent becomes a permanent resident.
          </p>
        </div>
      </section>

      {/* ── PROCESSING ───────────────────────────────────────────── */}
      <section id="processing" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Timeline" title="Processing Times for the 173 and 143" accent={ACCENT} />
          <Callout variant="note" panel={true} title="Confirm current processing times on DoHA">
            Processing times change regularly. The information below is current at October 2026 — always confirm on the DoHA website.
          </Callout>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 32, marginBottom: 20 }}>
            The subclass 173 is capped and queued in the same contributory parent queue as the 143, so it does not get the parent to Australia sooner. Home Affairs currently estimates about 18 years for new contributory parent applications.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75 }}>
            The subclass 143 queue is substantial — new applications typically face a processing time of about 18 years. The 173 itself processes faster, but the underlying permanent 143 grant still requires the same wait. Planning for the long-term total timeline is essential.
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
        title="Is the 173 + 143 two-stage route right for your family?"
        body="Nanak Migration Group (MARN 2619467) can compare the 173 and direct 143 options for your circumstances and advise on the assurance of support requirements."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
