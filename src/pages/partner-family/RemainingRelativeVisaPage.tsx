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

const ACCENT = CAT_PARTNER

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'near-relative', label: 'Near-relative test' },
  { id: 'eligibility', label: 'Full eligibility' },
  { id: 'queue', label: 'Queue reality' },
  { id: 'alternatives', label: 'Alternatives' },
  { id: 'process', label: 'Process' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'shield',
    value: 'Permanent',
    label: 'Permanent visa with full work rights on grant',
    note: 'Both subclass 115 (offshore) and subclass 835 (onshore) are permanent visas. The holder gains the right to live, work, and access Medicare in Australia indefinitely on grant.',
  },
  {
    icon: 'user',
    value: 'All near relatives',
    label: 'ALL living near relatives must be settled in Australia',
    note: "The strict eligibility requirement: the applicant's only near relatives (parents and siblings, including step and adoptive) must all be settled in Australia as citizens, PRs, or eligible NZ citizens. Even one overseas sibling or parent breaks eligibility.",
  },
  {
    icon: 'calendar',
    value: 'Decades',
    label: 'New applications realistically face a multi-decade processing wait',
    note: 'The Remaining Relative visa is capped and queued. The allocation of places each year is very small. New applications lodged today realistically face a multi-decade processing wait. Confirm current estimates on DoHA.',
  },
  {
    icon: 'building',
    value: 'AoS required',
    label: 'Assurance of Support required before grant',
    note: 'An Assurance of Support must be provided by the sponsoring relative before the visa can be granted. Confirm current AoS bond amounts and periods on the Services Australia website.',
  },
]

const STEPS: TimelineStep[] = [
  {
    code: '01',
    title: 'Confirm the near-relative test',
    desc: "Verify that all of the applicant's living near relatives (parents, siblings, step-parents, step-siblings, adoptive parents and adoptive siblings) are settled in Australia as citizens, permanent residents, or eligible New Zealand citizens. This must be true at the time of lodgement.",
  },
  {
    code: '02',
    title: 'Sponsor registration',
    desc: 'An eligible Australian relative of the applicant must register as the sponsor. The sponsor must be an Australian citizen, permanent resident, or eligible New Zealand citizen settled in Australia.',
  },
  {
    code: '03',
    title: 'Visa application',
    desc: 'The applicant lodges the subclass 115 application (if offshore) or subclass 835 (if onshore), pays the government charge, and submits supporting documents: identity documents, evidence of the near-relative relationships and their Australian status, relationship evidence with the sponsor, and health and police clearance assessments.',
  },
  {
    code: '04',
    title: 'Application enters the queue',
    desc: 'The Remaining Relative visa is a capped and queued visa. Applications are placed in the queue and processed in order of lodgement. The annual cap means that even after all eligibility criteria are met, the wait for a decision is very long — realistically multi-decade for new applications.',
  },
  {
    code: '05',
    title: 'Assurance of Support arranged before grant',
    desc: 'The sponsoring relative must provide an Assurance of Support through Services Australia before the visa can be granted. The AoS includes an income test and a refundable bond. It is arranged at the grant stage.',
  },
  {
    code: '06',
    title: 'Health and character refreshed; visa granted',
    desc: 'Medical assessments and police clearances are valid for limited periods and will need to be refreshed before the final grant decision. Once all conditions are met, the Department makes a decision.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: "Exactly who counts as a 'near relative' for the Remaining Relative visa?",
    answer: "For the Remaining Relative visa, 'near relatives' are: (1) the applicant's parents (including step-parents and adoptive parents), and (2) the applicant's siblings (including step-siblings and adoptive siblings). Half-siblings also count. The applicant's own children, spouse, or extended family (aunts, uncles, cousins) are not near relatives for this purpose. ALL living near relatives must be settled in Australia as Australian citizens, permanent residents, or eligible New Zealand citizens. Confirm the precise legal definition with your migration agent, as the specific statutory definition must be applied to your family's situation.",
  },
  {
    question: "What if I have one sibling overseas — does that immediately disqualify me?",
    answer: "Yes. If a single living near relative (including one sibling or one parent) is not settled in Australia as a citizen, permanent resident, or eligible New Zealand citizen, the applicant does not pass the near-relative test and is not eligible for the Remaining Relative visa. The test is strict — it is not sufficient for the majority of near relatives to be settled in Australia. All of them must be. This is why the Remaining Relative visa has a relatively small number of eligible applicants in any given year.",
  },
  {
    question: "Do deceased relatives count against me?",
    answer: "No. Near relatives who have passed away are not counted for the purposes of the near-relative test. Only living near relatives are relevant. If a parent or sibling has died, they are excluded from the near-relative count. Families where one of the applicant's parents has passed away and all other near relatives are settled in Australia may still be eligible, even though not all near relatives who ever existed are in Australia.",
  },
  {
    question: "Do step-parents and step-siblings count as near relatives?",
    answer: "Yes. Step-parents and step-siblings are included in the near-relative definition and count for the purposes of the test. Similarly, adoptive parents and adoptive siblings count. If any step-parent, step-sibling, adoptive parent, or adoptive sibling is living and not settled in Australia, the applicant would not pass the near-relative test. This can catch applicants who overlook step- or adoptive family members when assessing their eligibility.",
  },
  {
    question: "What alternatives should I consider if I don't qualify?",
    answer: "If the near-relative test is not met, the Remaining Relative visa is not available. Depending on circumstances, alternatives may include: a partner visa if there is an eligible Australian partner; a skilled visa if the applicant has an assessable occupation and sufficient points; an employer-sponsored visa if an Australian employer is willing to nominate the applicant; or other family visa subclasses if a different family relationship qualifies the applicant under another pathway. A registered migration agent can review the full picture and identify the most realistic option. Nanak Migration Group (MARN 2619467) can assess eligibility across multiple visa categories.",
  },
  {
    question: "Can my family members be included in the Remaining Relative visa application?",
    answer: "Yes. A spouse or de facto partner and dependent children can be included as secondary applicants in the Remaining Relative visa application. Secondary applicants must also meet health and character requirements. Including a spouse does not affect the near-relative test assessment — the test is applied to the primary applicant's near relatives, not the spouse's near relatives.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Partner & Family Visas',
    desc: 'Overview of all partner, parent, child, carer and relative visa pathways.',
    icon: 'heart',
    page: 'partner-family-visas',
    color: ACCENT,
  },
  {
    title: 'Assurance of Support',
    desc: 'How the AoS income test, bond amounts and AoS period work.',
    icon: 'building',
    page: 'assurance-of-support',
    color: ACCENT,
  },
  {
    title: 'Partner Visas Hub',
    desc: 'Onshore 820/801, offshore 309/100 and prospective marriage 300 visas.',
    icon: 'heart',
    page: 'partner-family-visas',
    color: ACCENT,
  },
]

export default function RemainingRelativeVisaPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => {
    document.title = PAGE_META['remaining-relative-visa'].title
  }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Remaining Relative Visa (115 & 835)', url: 'https://www.nanakmigration.com.au/remaining-relative-visa' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Remaining Relative Visa Subclass 115 and 835',
          description: PAGE_META['remaining-relative-visa'].metaDescription,
          url: 'https://www.nanakmigration.com.au/remaining-relative-visa',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Partner & Family', page: 'partner-family-visas' },
          { label: 'Remaining Relative Visa (115 & 835)' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Partner & Family Visas"
        eyebrowSub="Subclasses 115 & 835"
        title={<>Remaining Relative Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclasses 115 (Offshore) & 835 (Onshore)</em></>}
        deck="The Remaining Relative visa is for people whose only near relatives — parents and siblings — are all settled in Australia as citizens or permanent residents. Eligibility is strict: a single living overseas sibling or parent breaks qualification. The visa is capped and queued — new applications realistically face a multi-decade processing wait."
        shortAnswer={<>The Remaining Relative visa (subclass 115 offshore, 835 onshore) grants <strong style={{ color: NAVY }}>permanent residence</strong> to a person whose <strong style={{ color: NAVY }}>only living near relatives</strong> (parents and siblings, including step and adoptive) are all settled in Australia as citizens or permanent residents. The test is strict — <strong style={{ color: NAVY }}>even one overseas sibling or living parent breaks eligibility</strong>. The visa is capped and queued, and new applications realistically face a <strong style={{ color: NAVY }}>multi-decade processing wait</strong>. An Assurance of Support is required before the visa is granted. Families who do not qualify for the Remaining Relative visa should explore alternative pathways. Nanak Migration Group (MARN 2619467) can assess eligibility and discuss realistic alternatives. Confirm all current figures on the Department of Home Affairs website.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← Partner & Family', page: 'partner-family-visas' }}
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

      <KeyFactsStrip facts={FACTS} accent={ACCENT} />

      {/* ── OVERVIEW ───────────────────────────────────────────── */}
      <section id="overview" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What it provides" title="What the Remaining Relative Visa Grants" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            The Remaining Relative visa grants permanent residence to people who are genuinely the remaining relatives outside Australia — their family is already in Australia and they are the last to join. Both subclass 115 (for applicants offshore at time of grant) and subclass 835 (for applicants already in Australia) are permanent visas with full work rights and Medicare access.
          </p>

          <div style={{ display: 'flex', gap: 24, marginBottom: 40, flexWrap: 'wrap' as const }}>
            {[
              { icon: 'shield', title: 'Permanent residence', body: 'Indefinite right to live in Australia with full work rights and Medicare access from the date of grant.' },
              { icon: 'home', title: 'Offshore or onshore', body: 'Subclass 115 is for applicants outside Australia; subclass 835 is for applicants already in Australia. Eligibility criteria are the same.' },
              { icon: 'arrowright', title: 'Pathway to citizenship', body: 'On grant, the holder begins accruing the residence required for citizenship — eligible after 4 years of lawful residence including 12 months as a permanent resident.' },
            ].map(item => (
              <div key={item.title} style={{ flex: 1, minWidth: 220, display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={item.icon as any} size={20} color={ACCENT} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 700, color: NAVY, margin: '0 0 6px' }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65, margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout variant="warning" panel={true} title="Honest assessment: the queue is extremely long">
            The Remaining Relative visa is subject to an annual cap that is very small relative to demand. New applications lodged today realistically face a multi-decade processing wait. Families should assess carefully whether waiting in this queue is the most realistic strategy for their circumstances. Confirm current processing times on the Department of Home Affairs website.
          </Callout>
        </div>
      </section>

      {/* ── NEAR-RELATIVE TEST ─────────────────────────────────── */}
      <section id="near-relative" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Central criterion" title="The Near-Relative Test" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The defining characteristic of the Remaining Relative visa is the near-relative test. This test is strict and applied precisely.
          </p>

          {/* Definition card */}
          <div style={{ border: `1.5px solid ${ACCENT}30`, background: `${ACCENT}06`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: ACCENT, marginBottom: 12 }}>Definition</div>
            <p style={{ fontSize: 15, color: NAVY, lineHeight: 1.75, margin: '0 0 16px', fontWeight: 600 }}>
              "Near relatives" means: the applicant's parents (including step-parents and adoptive parents) and the applicant's siblings (including step-siblings, adoptive siblings, and half-siblings).
            </p>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              ALL living near relatives of the applicant must be settled in Australia as Australian citizens, Australian permanent residents, or eligible New Zealand citizens. If even one living near relative is outside Australia — or is not a citizen or permanent resident — the applicant does not pass the test.
            </p>
          </div>

          {/* Pass / fail examples */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#16a34a', marginBottom: 12 }}>Test can be satisfied — example</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                {[
                  'Both parents are Australian citizens settled in Australia',
                  'Two siblings are Australian permanent residents in Australia',
                  'A third sibling passed away (excluded from count)',
                  'No other living near relatives',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="check" size={10} color="#16a34a" />
                    </div>
                    <span style={{ fontSize: 13, color: '#15803d', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#dc2626', marginBottom: 12 }}>Test cannot be satisfied — example</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                {[
                  'Parents are Australian citizens in Australia',
                  'One sibling is an Australian PR in Australia',
                  'One sibling lives in India — not a citizen or PR',
                  'The overseas sibling breaks the test immediately',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="minus" size={10} color="#dc2626" />
                    </div>
                    <span style={{ fontSize: 13, color: '#991b1b', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Callout variant="note" panel={true} title="Step-parents, step-siblings and adoptive relatives count">
            The near-relative definition includes step-parents, step-siblings, adoptive parents, and adoptive siblings. Applicants often overlook step or adoptive family members when assessing eligibility. If any such relative is living and not settled in Australia, the test fails. Confirm the precise definition and how it applies to your family with a registered migration agent.
          </Callout>
        </div>
      </section>

      {/* ── FULL ELIGIBILITY ───────────────────────────────────── */}
      <section id="eligibility" style={{ background: '#ffffff', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="All requirements" title="Full Eligibility Requirements" accent={ACCENT} />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {[
              {
                num: '1',
                title: 'Near-relative test (primary criterion)',
                body: "All living near relatives must be settled in Australia as Australian citizens, PRs, or eligible New Zealand citizens. See the section above for the full definition and examples.",
              },
              {
                num: '2',
                title: 'Australian sponsor',
                body: "The applicant must have an Australian citizen, permanent resident, or eligible New Zealand citizen relative settled in Australia who is willing to act as sponsor. The sponsor lodges a sponsorship form with the Department of Home Affairs.",
              },
              {
                num: '3',
                title: 'Assurance of Support',
                body: "The sponsor (or another eligible assurer) must be willing and able to provide an Assurance of Support — a legally binding undertaking to repay any recoverable welfare payments made to the visa holder during the AoS period. The AoS is arranged prior to grant, not at lodgement.",
              },
              {
                num: '4',
                title: 'Health and character requirements',
                body: "All applicants must meet Australian health requirements (medical examination at a Department-approved panel physician) and character requirements (police clearances). These will need to be refreshed given the length of the processing queue.",
              },
            ].map(req => (
              <div key={req.num} style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fafbfe', borderRadius: '0 8px 8px 0', padding: 20 }}>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>{req.num}. {req.title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{req.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUEUE REALITY ──────────────────────────────────────── */}
      <section id="queue" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Honest assessment" title="Queue Reality — Set Expectations Carefully" accent={ACCENT} />

          <div style={{ borderLeft: '4px solid #dc2626', background: '#fef2f2', padding: '16px 20px', borderRadius: '0 8px 8px 0', marginBottom: 32 }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: '#991b1b', lineHeight: 1.7, margin: 0 }}>
              The Remaining Relative visa is subject to a very small annual cap on the number of places. The queue of applications waiting to be processed is correspondingly long. New applications lodged today realistically face a multi-decade wait before a decision. Even applicants who clearly satisfy all eligibility criteria may wait 20, 30, or more years for a grant. Confirm current processing time estimates on the Department of Home Affairs website.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {[
              {
                title: 'Why the cap exists',
                body: "The Department of Home Affairs caps the number of Remaining Relative visas granted each year as part of its overall migration program planning. The cap has historically been small, and applications have accumulated over many years. The result is a processing queue that significantly exceeds what most families anticipate when they lodge.",
              },
              {
                title: 'What families can do while in the queue',
                body: "Applicants in the onshore queue (835) can generally remain in Australia on a bridging visa while their application is processed, provided they were in Australia on a substantive visa when they applied and continue to meet bridging visa conditions. Applicants in the offshore queue (115) would need to visit Australia on visitor visas during the wait. The long wait may make this practically difficult, particularly if the applicant's personal or family circumstances change significantly.",
              },
              {
                title: 'Is lodging worth it?',
                body: "Whether lodging a Remaining Relative application is worthwhile depends heavily on the applicant's circumstances, age, and whether there are other visa pathways available. For some applicants, lodging as early as possible to secure a queue position may make sense as a long-term strategy. For others, pursuing a different pathway — partner visa, skilled visa, or employer sponsorship — may produce a result in a far shorter timeframe. A registered migration agent can help assess the realistic options.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: '#ffffff', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 12px' }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALTERNATIVES ───────────────────────────────────────── */}
      <section id="alternatives" style={{ background: '#ffffff', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Other pathways" title="Alternatives Worth Considering" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            Given the very long processing queue, many families who are eligible for the Remaining Relative visa also explore parallel or alternative pathways. Even if the Remaining Relative visa is eventually the right outcome, pursuing a faster alternative in parallel may be worthwhile.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {[
              { title: 'Partner visa (820/801 or 309/100)', body: 'If the applicant has an Australian citizen or permanent resident partner, a partner visa can be processed significantly faster than the Remaining Relative queue. The partner visa processes in 2–4 years for most applicants.' },
              { title: 'Skilled migration (189, 190, 491)', body: "If the applicant has a skills-assessable occupation and enough points under the points test, a skilled migration pathway can often produce a permanent residence outcome in a much shorter timeframe than the Remaining Relative queue." },
              { title: 'Employer-sponsored visa (482 / 186)', body: "If an Australian employer is willing to sponsor the applicant, the employer-sponsored pathway can produce both temporary and permanent outcomes in a timeframe that is orders of magnitude shorter than the Remaining Relative queue." },
              { title: 'Lodging the Remaining Relative application as a parallel strategy', body: "Some applicants choose to lodge a Remaining Relative application to secure a queue position, while simultaneously pursuing a faster pathway. If a faster pathway succeeds first, the Remaining Relative application may be withdrawn — but at least the queue position was secured." },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 16, background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 10, padding: 20 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Icon name="arrowright" size={16} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section id="process" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="How to apply" title="The Application Process" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#ffffff', padding: '80px 32px', borderTop: '1px solid #eef0f6' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── RELATED PAGES ──────────────────────────────────────── */}
      <section id="related" style={{ background: '#fafbfe', padding: '80px 32px', borderTop: '1px solid #eef0f6' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also on this site" title="Related pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={3} />
        </div>
      </section>

      <CtaBand
        title="Assess whether the Remaining Relative visa is right for you"
        body="The near-relative test is strict and easy to misread. Nanak Migration Group (MARN 2619467) can map out your family relationships, confirm whether the test is met, and discuss alternative visa pathways if the queue is too long."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
