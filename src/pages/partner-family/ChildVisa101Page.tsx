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
  { id: 'sponsor', label: 'Sponsor' },
  { id: 'adoption', label: 'Adopted children' },
  { id: 'processing', label: 'Processing' },
  { id: 'fees', label: 'Fees' },
  { id: 'vs-802', label: '101 vs 802' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'user', value: 'Offshore', label: 'Child must be outside Australia when the application is lodged', note: 'The subclass 101 is an offshore visa. If the child is in Australia at the time of lodging, the correct visa is the subclass 802 (onshore).' },
  { icon: 'shield', value: 'Permanent', label: 'Grants permanent residence on approval', note: 'On grant of the 101, the child becomes a permanent resident of Australia with full work and study rights.' },
  { icon: 'clock', value: 'Months–1+ yr', label: 'Processing time varies — confirm current times on DoHA', note: 'Processing times for the 101 vary. Confirm current indicative processing times on the Department of Home Affairs website before lodging.' },
  { icon: 'home', value: 'Under 18 (or 18–25 student)', label: 'Age and dependency criteria must be met throughout processing', note: 'The child must continue to meet the age and dependency requirements throughout the processing period, not only at the time of application.' },
]

const STEPS: TimelineStep[] = [
  { title: 'Gather eligibility documents', desc: "Compile the child's birth certificate, the sponsoring parent's citizenship or PR evidence, proof of dependency (if the child is 18–25), and health and character documents as required." },
  { title: 'Sponsor lodges sponsorship application (if required)', desc: 'For 101 applications, the sponsor may need to lodge a sponsorship application separately before or alongside the visa application. Confirm the current process on DoHA.' },
  { title: 'Lodge the visa application online', desc: 'The visa application is lodged online via ImmiAccount. The child is the visa applicant; the parent or relative is the sponsor. Attach all supporting documents.' },
  { title: 'Health examinations and police clearances', desc: 'After lodging, the Department will request health examinations (if not already completed) and character documents. Respond promptly to any requests.' },
  { title: 'Await the decision', desc: 'Processing takes months to over a year. Once the visa is granted, the child has the right to travel to Australia as a permanent resident.' },
]

const FAQ: FaqItem[] = [
  { question: 'Can the child travel to Australia while the 101 application is being processed?', answer: 'Yes. The child can travel to Australia on a visitor visa or other temporary visa while the 101 application is being processed. If the child is in Australia when the 101 is granted, they become a permanent resident from that point. If the child needs to remain in Australia during processing, they may be entitled to a Bridging Visa E (BVE). Seek advice on the specific travel arrangements.' },
  { question: 'What happens if the child turns 18 during processing?', answer: 'If the child turns 18 during processing and is not enrolled full-time as a student at a recognised educational institution, or is not incapacitated for work, they may no longer meet the dependency criteria. The Department assesses eligibility at the time of decision, not only at the time of lodgement. It is critical to monitor the child\'s status and seek advice if they approach their 18th birthday during processing.' },
  { question: 'Can I include multiple children in one application?', answer: 'Each child must lodge a separate visa application. You cannot include multiple children in a single subclass 101 application in the way that family members can be added to some other visa types. Each child has their own application charge and processing timeline.' },
  { question: "My child was born overseas to an Australian citizen parent — do they need a 101?", answer: "Not necessarily. A child born overseas to an Australian citizen parent may themselves be an Australian citizen by descent, depending on the specific circumstances. If a child is an Australian citizen by descent, they do not need a 101 — they have citizenship. Seek advice on whether your child may already be an Australian citizen before lodging a 101 application." },
  { question: "The child's other parent has not consented to the child moving to Australia — is this an issue?", answer: "Yes, potentially. Where both parents have parental responsibility, both parents' consent (or a court order) may be required for a child under 18 to migrate to Australia. The Department may require evidence of the other parent's consent or a relevant court order. This is an important legal issue — seek both migration and family law advice if the other parent has not consented." },
]

const RELATED: RelatedPage[] = [
  { title: 'Child Visa (Onshore 802)', desc: 'For a dependent child who is already in Australia at the time of application.', icon: 'home', page: 'child-visa-802', color: ACCENT },
  { title: 'Partner & Family Visas', desc: 'Overview of all partner, parent, and child visa pathways.', icon: 'heart', page: 'partner-family-visas', color: ACCENT },
  { title: 'Parent Visas', desc: 'All parent visa options — contributory, sponsored temporary, and non-contributory.', icon: 'user', page: 'parent-visas', color: ACCENT },
  { title: 'Australian Citizenship', desc: 'Eligibility and requirements for Australian citizenship — including by descent.', icon: 'flag', page: 'australian-citizenship', color: ACCENT },
]

const ELIGIBILITY_ITEMS = [
  {
    heading: 'Dependent child of an eligible parent',
    detail: 'The child must be a biological child, step-child, or adopted child (see adoption note below) of an Australian citizen, Australian permanent resident, or eligible New Zealand citizen. The parent must be the primary sponsor.',
    subItems: null,
  },
  {
    heading: 'Age and dependency requirement — one of three categories must apply',
    detail: null,
    subItems: [
      'Under 18 and not married or in a de facto relationship (most common)',
      'Aged 18–25, enrolled full-time in a recognised educational institution, and financially dependent on the sponsoring parent or their partner',
      'Any age, incapacitated for work due to total or partial incapacity that existed before the child turned 18, and financially dependent on the parent',
    ],
  },
  {
    heading: 'Outside Australia at the time of application',
    detail: 'The child must be outside Australia when the application is lodged. If the child is in Australia at lodgement, the onshore subclass 802 is the correct pathway. The child may travel to Australia while the application is being processed (usually on a visitor or bridging visa).',
    subItems: null,
  },
  {
    heading: 'Single and dependent',
    detail: 'Children who are married or in a de facto relationship are generally not eligible as a dependent child for the 101 visa, regardless of age.',
    subItems: null,
  },
  {
    heading: 'Health and character',
    detail: "Standard health examinations and character requirements apply. Depending on the child's age and country of residence, health examinations and police clearances may be required before or during processing.",
    subItems: null,
  },
]

const SPONSOR_SCENARIOS = [
  {
    title: 'Scenario 1 — Biological or step parent who is Australian citizen/PR',
    desc: "The child's parent (or step-parent) who is an Australian citizen or permanent resident sponsors the child. This is the most common scenario — an Australian parent wants to bring their child from overseas to live with them permanently.",
  },
  {
    title: "Scenario 2 — The parent's Australian partner sponsors",
    desc: "The partner of the child's parent (who may themselves be an Australian citizen or PR) can also be the sponsor. This is common in blended family situations where the Australian partner is not the biological parent but is in a genuine relationship with the biological parent.",
  },
  {
    title: 'Scenario 3 — Relative of the child (limited cases)',
    desc: 'In limited circumstances, a relative of the child who is an Australian citizen, PR, or eligible NZ citizen can sponsor the child — for example, if both parents are deceased and the child is being raised by an aunt, uncle, or grandparent who is Australian. Seek advice on the specific requirements for relative-sponsored applications.',
  },
]

const COMPARISON_ROWS = [
  { feature: "Child's location at lodgement", sub101: 'Outside Australia', sub802: 'In Australia' },
  { feature: 'Outcome', sub101: 'Permanent residence', sub802: 'Permanent residence' },
  { feature: 'Bridging visa during processing', sub101: 'BVE if child enters Australia after lodging', sub802: 'BVA or BVB while waiting in Australia' },
  { feature: 'Travel to Australia after lodging', sub101: 'Permitted on a visitor or other visa', sub802: 'Not applicable — already in Australia' },
  { feature: 'Core eligibility requirements', sub101: 'Same as 802', sub802: 'Same as 101' },
  { feature: 'Processing times', sub101: 'Similar', sub802: 'Similar' },
]

export default function ChildVisa101Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['child-visa-101'].title }, [])
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Child Visa (Subclass 101)', url: 'https://www.nanakmigration.com.au/child-visa-101' },
        ]}
        faqs={FAQ}
        service={{ name: 'Child Visa Subclass 101 Offshore', description: PAGE_META['child-visa-101'].metaDescription, url: 'https://www.nanakmigration.com.au/child-visa-101' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Partner & Family Visas', page: 'partner-family-visas' },
        { label: 'Child Visa (Subclass 101)' },
      ]} />
      <PageHero
        variant="standard"
        eyebrow="Partner & Family"
        eyebrowSub="Child Visa · Subclass 101 (Offshore)"
        title={<>Child Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 101 — Offshore</em></>}
        deck="The Child visa (subclass 101) grants permanent residence to a dependent child who is outside Australia at the time of application. The child's parent must be an Australian citizen, permanent resident, or eligible New Zealand citizen."
        shortAnswer={<>The subclass 101 is an offshore permanent visa for a dependent child of an Australian citizen, PR, or eligible NZ citizen. "Dependent" means under 18 (and not married or de facto partnered), or aged 18–25 and a full-time student who is financially dependent on the sponsoring parent, or any age and incapacitated for work and financially dependent. The child must be outside Australia at application lodgement. The parent (or the parent's partner who is also an Australian citizen or PR) must sponsor the child. Health and character requirements apply. Processing can take many months to over a year — confirm current times on DoHA. The child usually receives a Bridging Visa E (BVE) if they enter Australia after lodging but before a decision is made. Adopted children may need the subclass 102 (Adoption visa) rather than 101 — see the Adopted children section. Nanak Migration Group (MARN 2619467) can advise on the 101 application. No outcome guarantees.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Child Visa 802 (Onshore) →', page: 'child-visa-802' }}
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
          <SectionHeading kicker="What it is" title="The Subclass 101 Child Visa (Offshore)" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginTop: 32, marginBottom: 20 }}>
            The subclass 101 Child visa is a permanent residence visa for a dependent child of an Australian citizen, permanent resident, or eligible New Zealand citizen. The visa is designed for situations where the child is outside Australia and the parent wants the child to join them in Australia permanently.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>
            On grant of the 101 visa, the child becomes a permanent resident of Australia. They gain the right to live, work, and study in Australia indefinitely, access Medicare, and — after meeting the citizenship residence requirement — apply for Australian citizenship.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 0 }}>
            The 101 visa is the offshore counterpart to the subclass 802 (Child — onshore). The choice between 101 and 802 depends entirely on where the child is located when the application is lodged — not on which is faster or preferable.
          </p>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Requirements" title="Eligibility for the Subclass 101" accent={ACCENT} />
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
          <div style={{ marginTop: 28 }}>
            <Callout variant="note" panel={true} title="The child must remain eligible throughout processing">
              The child must continue to meet the age and dependency requirements throughout the entire processing period. A child who turns 18 during processing and is not enrolled full-time as a student, or who marries before the visa is granted, may no longer be eligible. Monitor the child's status throughout and seek advice promptly if circumstances change.
            </Callout>
          </div>
        </div>
      </section>

      {/* Sponsor */}
      <section id="sponsor" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Sponsorship" title="Who Sponsors the Child?" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginTop: 32, marginBottom: 28 }}>
            The child must be sponsored by a parent or a relative of the child. For the 101 visa, the sponsor is typically:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {SPONSOR_SCENARIOS.map((scenario, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, padding: '24px 24px', background: GREY_BG, borderTop: `4px solid ${ACCENT}` }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 10 }}>{scenario.title}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.7 }}>{scenario.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adoption */}
      <section id="adoption" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Adopted children" title="Adopted Children — Is the 101 Correct?" accent={ACCENT} />
          <div style={{ marginTop: 32, marginBottom: 24 }}>
            <Callout variant="warning" panel={true} title="Adopted children may require the subclass 102 — not the 101">
              If the child was adopted or is in the process of being adopted, the correct visa may be the subclass 102 (Adoption visa) rather than the subclass 101. The 102 is specifically designed for children being adopted by Australian citizens through approved overseas adoption processes. Using the 101 for an adoption that required an approved process may not be appropriate. Seek migration advice before lodging if adoption is involved.
            </Callout>
          </div>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginTop: 24 }}>
            For children who were legally adopted before the sponsoring parent became an Australian citizen or PR, and where the adoption was finalised under applicable law, the child may be eligible for the 101 if they otherwise meet the dependent child criteria. However, the specific circumstances of each adoption case must be assessed. Nanak Migration Group (MARN 2619467) can advise on which visa is appropriate for adopted children.
          </p>
        </div>
      </section>

      {/* Processing */}
      <section id="processing" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Timeline" title="Processing Times and What to Expect" accent={ACCENT} />
          <div style={{ maxWidth: 860, margin: '24px auto 0' }}>
            <Callout variant="note" panel={true} title="Confirm current processing times on the Department of Home Affairs website">
              Processing times for the subclass 101 vary and are updated regularly. The information below reflects general expectations as at August 2026. Always confirm current indicative times on the DoHA website before lodging.
            </Callout>
            <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginTop: 28, marginBottom: 20 }}>
              The subclass 101 is a permanent visa with variable processing times. In many cases, processing takes many months to over a year. Processing time depends on the complexity of the application, the completeness of evidence lodged, whether health examinations are required, and the Department's current workload.
            </p>
            <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
              While the application is being processed, the child can travel to Australia (on a visitor or other temporary visa) and, if the application has been lodged, may be entitled to a Bridging Visa E (BVE) that allows them to stay in Australia while awaiting the decision. However, the BVE conditions must be monitored carefully — seek advice on travel while the application is pending.
            </p>
          </div>
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* Fees */}
      <section id="fees" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Application charges" title="Visa Application Charges" accent={ACCENT} />
          <div style={{ marginTop: 32, marginBottom: 24 }}>
            <Callout variant="note" panel={true} title="Confirm current charges on the Department of Home Affairs website">
              Visa application charges are updated periodically. The figures below are indicative only as at August 2026 — confirm current charges on the DoHA website before lodging.
            </Callout>
          </div>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginTop: 24 }}>
            The base application charge for the subclass 101 is several thousand Australian dollars for the primary applicant (the child). The exact charge should be confirmed on the DoHA website. There is no second visa application charge (VAC2) instalment — the 101 is a permanent visa with a single application charge.
          </p>
        </div>
      </section>

      {/* 101 vs 802 */}
      <section id="vs-802" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="101 vs 802" title="Subclass 101 (Offshore) vs Subclass 802 (Onshore)" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginTop: 32, marginBottom: 28 }}>
            The core difference is simple: where is the child when the application is lodged?
          </p>
          <div style={{ overflowX: 'auto', borderRadius: 10, border: `1px solid ${BORDER}` }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, color: '#374151' }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  <th style={{ padding: '14px 20px', textAlign: 'left', color: '#fff', fontWeight: 600, fontSize: 13 }}>Feature</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', color: '#fff', fontWeight: 600, fontSize: 13 }}>Subclass 101 (Offshore)</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', color: '#fff', fontWeight: 600, fontSize: 13 }}>Subclass 802 (Onshore)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : GREY_BG }}>
                    <td style={{ padding: '14px 20px', fontWeight: 600, color: NAVY, borderBottom: i < COMPARISON_ROWS.length - 1 ? `1px solid ${BORDER}` : 'none', verticalAlign: 'top' }}>{row.feature}</td>
                    <td style={{ padding: '14px 20px', borderBottom: i < COMPARISON_ROWS.length - 1 ? `1px solid ${BORDER}` : 'none', verticalAlign: 'top' }}>{row.sub101}</td>
                    <td style={{ padding: '14px 20px', borderBottom: i < COMPARISON_ROWS.length - 1 ? `1px solid ${BORDER}` : 'none', verticalAlign: 'top' }}>{row.sub802}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 28 }}>
            <Callout variant="note" panel={true} title="Choose based on location — not preference">
              The choice between 101 and 802 is determined by where the child is physically located at the time the application is lodged — not by which visa is perceived to be faster. Lodging the wrong subclass (e.g. lodging a 802 when the child is offshore) can result in the application being invalid.
            </Callout>
          </div>
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
        title="Bringing a dependent child to Australia permanently?"
        body="Nanak Migration Group (MARN 2619467) can advise on the 101 application requirements and help prepare a complete evidence package."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
