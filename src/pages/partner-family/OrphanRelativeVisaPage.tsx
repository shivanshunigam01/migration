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
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'who-qualifies', label: 'Who qualifies' },
  { id: 'relative-definition', label: 'Relative definition' },
  { id: 'evidence', label: 'Required evidence' },
  { id: 'process', label: 'Process' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'shield',
    value: 'Permanent',
    label: 'Permanent residence for an orphaned child',
    note: 'Subclass 117 (offshore) and subclass 837 (onshore) both grant permanent residence, enabling the child to live in Australia permanently with their Australian relative.',
  },
  {
    icon: 'user',
    value: 'Under 18',
    label: 'Child must be under 18 and unmarried',
    note: "The applicant must be under 18, unmarried, and not in a de facto relationship. A child who turns 18 during processing may be affected — seek advice on timing.",
  },
  {
    icon: 'heart',
    value: 'Parents absent',
    label: 'Parents deceased, incapacitated, or of unknown whereabouts',
    note: "The child's parents must be deceased, permanently incapacitated, or of unknown whereabouts — not merely absent, separated, or unable to care financially. The circumstances must genuinely leave the child without parental support.",
  },
  {
    icon: 'home',
    value: 'Relative sponsor',
    label: 'Must be sponsored by an eligible Australian relative',
    note: "The sponsor must be a brother, sister, grandparent, aunt, uncle, step-equivalent, or the spouse of such a relative — settled in Australia as a citizen, permanent resident, or eligible New Zealand citizen.",
  },
]

const STEPS: TimelineStep[] = [
  {
    code: '01',
    title: 'Confirm the child meets the orphan definition',
    desc: "Verify that the parents are deceased, permanently incapacitated, or genuinely of unknown whereabouts. 'Unable to care' financially does not satisfy the orphan definition — the parents must be genuinely unavailable. Gather the relevant documents: death certificates, medical evidence of incapacity, or evidence of tracing attempts.",
  },
  {
    code: '02',
    title: 'Identify an eligible Australian sponsor',
    desc: "Confirm that the proposed sponsor is a brother, sister, grandparent, aunt, uncle, step-equivalent, or the partner of such a relative, and is an Australian citizen, permanent resident, or eligible New Zealand citizen settled in Australia. The sponsor lodges a sponsorship form with the Department.",
  },
  {
    code: '03',
    title: 'Gather evidence about the child and the parents',
    desc: "Collect the child's identity documents (birth certificate, passport), evidence of the child's relationship to the sponsor, and evidence about each parent's circumstances — death certificates, medical reports, or statutory declarations and tracing documentation where the parent's whereabouts are unknown.",
  },
  {
    code: '04',
    title: 'Arrange health and character assessments',
    desc: "The child must undergo a health examination at a Department-approved panel physician. A character assessment is also required, adapted for the child's age. The sponsor and any members of their household will also be assessed.",
  },
  {
    code: '05',
    title: 'Lodge the visa application',
    desc: "Lodge subclass 117 (if the child is offshore) or subclass 837 (if the child is already in Australia). The application is lodged through ImmiAccount. Pay the government charge — confirm current fees on the Department of Home Affairs website.",
  },
  {
    code: '06',
    title: 'Cooperate with case officer and await decision',
    desc: "Processing times vary. The Department will assess the best interests of the child as a primary consideration. Cooperate with any requests for further information. On grant, the child can travel to or remain in Australia permanently.",
  },
]

const FAQ: FaqItem[] = [
  {
    question: "What does 'orphan' mean for this visa — do both parents need to be dead?",
    answer: "No — both parents do not need to be deceased. 'Orphan' in this context is broader than the everyday meaning. A child can qualify if each parent is either: (1) deceased; (2) permanently incapacitated and unable to care for the child; or (3) of unknown whereabouts, with genuine attempts having been made to locate them. The parents do not both need to share the same reason — one parent may be deceased and the other of unknown whereabouts, for example. Importantly, a parent who is alive and able to be located but who is simply unwilling or unable to provide financial support does not satisfy the 'unknown whereabouts' test. The reason for the parent's absence must genuinely make parental care impossible.",
  },
  {
    question: "What if one parent is alive but the other has passed away?",
    answer: "If one parent is alive, able to be located, and is not permanently incapacitated, the child may not satisfy the orphan definition even if the other parent is deceased. The definition requires that each parent is deceased, permanently incapacitated, or of unknown whereabouts — the death of one parent alone is generally not sufficient unless the surviving parent also meets one of these conditions. Seek advice from a registered migration agent about the specific circumstances.",
  },
  {
    question: "Who counts as an eligible Australian relative for sponsorship?",
    answer: "An eligible sponsor for the Orphan Relative visa is a brother, sister, grandparent, aunt, uncle, or the step-equivalent of any of these (step-brother, step-sister, step-grandparent, step-aunt, step-uncle). The sponsor's spouse or de facto partner may also be counted where the spouse or partner has the relevant relationship with the child. The sponsor must be an Australian citizen, permanent resident, or eligible New Zealand citizen settled in Australia.",
  },
  {
    question: "What is the 'best interests of the child' consideration?",
    answer: "Australia's migration law requires the Department to treat the best interests of a child as a primary consideration in decisions involving children. This means the Department will assess whether granting or refusing the visa serves the child's wellbeing — not just whether the technical eligibility criteria are met. In practice, this means the Department will consider the child's welfare arrangements, the suitability of the proposed sponsor, and whether living in Australia with the sponsor is genuinely in the child's best interests. A well-documented application that addresses the child's circumstances and the sponsor's capacity to provide a stable, nurturing environment will support a positive decision.",
  },
  {
    question: "What happens if the child turns 18 during processing?",
    answer: "If the child turns 18 while the application is being processed, the child may cease to be eligible as a dependent child. The Orphan Relative visa is for children under 18 who are unmarried. If processing times are long and the child is approaching 18, seek urgent advice from a registered migration agent about options. In some circumstances, a child who turns 18 during processing may still be granted the visa if they otherwise continue to meet requirements — but this depends on the specific provisions applicable at the time. Do not assume the application will automatically succeed if the child ages during a long processing period.",
  },
  {
    question: "Is this visa available if the child is already in Australia?",
    answer: "Yes. Subclass 837 is the onshore version of this visa, for a child who is already in Australia on a substantive visa. Subclass 117 is the offshore version, for a child outside Australia. The eligibility criteria are otherwise the same. For the onshore application, the child would typically receive a Bridging Visa A (BVA) allowing them to remain in Australia lawfully while the application is processed.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Child Visa (Offshore 101)',
    desc: 'Permanent child visa for a dependent child of an Australian citizen or permanent resident applying from outside Australia.',
    icon: 'user',
    page: 'child-visa-101',
    color: ACCENT,
  },
  {
    title: 'Child Visa (Onshore 802)',
    desc: 'Permanent child visa for a dependent child already in Australia.',
    icon: 'home',
    page: 'child-visa-802',
    color: ACCENT,
  },
  {
    title: 'Adoption Visa (102)',
    desc: 'Permanent visa for a child adopted outside Australia by an Australian parent.',
    icon: 'heart',
    page: 'adoption-visa-102',
    color: ACCENT,
  },
  {
    title: 'Partner & Family Visas',
    desc: 'Overview of all partner, parent, child, carer, and relative visa pathways.',
    icon: 'shield',
    page: 'partner-family-visas',
    color: ACCENT,
  },
]

export default function OrphanRelativeVisaPage({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Orphan Relative Visa (117 & 837)', url: 'https://www.nanakmigration.com.au/orphan-relative-visa' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Orphan Relative Visa Subclass 117 and 837',
          description: PAGE_META['orphan-relative-visa'].metaDescription,
          url: 'https://www.nanakmigration.com.au/orphan-relative-visa',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Partner & Family', page: 'partner-family-visas' },
          { label: 'Orphan Relative Visa (117 & 837)' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Partner & Family Visas"
        eyebrowSub="Subclasses 117 & 837"
        title={<>Orphan Relative Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclasses 117 (Offshore) & 837 (Onshore)</em></>}
        deck="A permanent visa for a child under 18 whose parents are deceased, permanently incapacitated, or of unknown whereabouts — sponsored by an eligible Australian relative to provide the child with a stable, permanent home."
        shortAnswer={<>The Orphan Relative visa (subclass 117 offshore, 837 onshore) grants <strong style={{ color: NAVY }}>permanent residence</strong> to a child under 18 who is unmarried and whose parents are <strong style={{ color: NAVY }}>deceased, permanently incapacitated, or genuinely of unknown whereabouts</strong>. The child must be sponsored by an eligible Australian relative — a brother, sister, grandparent, aunt, uncle, step-equivalent, or their partner. The best interests of the child are a primary consideration. These cases are sensitive and require careful, compassionate preparation of evidence. Nanak Migration Group (MARN 2619467) can guide families through the process. Confirm all current requirements on the Department of Home Affairs website.</>}
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
      <div style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
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
          <SectionHeading kicker="What it provides" title="What the Orphan Relative Visa Grants" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The Orphan Relative visa exists for situations where a child has been left without meaningful parental support due to the death, permanent incapacity, or disappearance of both parents. It provides a pathway to permanent residence in Australia with an eligible Australian relative who can give the child a stable home.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            Both subclass 117 (for applicants offshore at time of decision) and subclass 837 (for applicants already in Australia) are permanent visas. On grant, the child can live in Australia permanently, access healthcare, and attend school alongside Australian citizens.
          </p>

          <Callout variant="note" panel={true} title="Best interests of the child — a primary consideration">
            Australian migration law requires the Department to treat the best interests of a child as a primary consideration in decisions affecting children. Applications for the Orphan Relative visa should be prepared with this in mind — documentation should clearly address the child's circumstances, wellbeing needs, and the suitability of the proposed sponsoring relative to provide a stable home.
          </Callout>
        </div>
      </section>

      {/* ── WHO QUALIFIES ──────────────────────────────────────── */}
      <section id="who-qualifies" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Eligibility" title="Who Can Apply" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            Each of the following criteria must be satisfied for the child applicant.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20, marginBottom: 32 }}>
            {[
              {
                title: 'Child under 18',
                body: "The applicant must be under 18 years old. Age is generally assessed at the time of application, though a child who turns 18 during processing may be affected — seek advice if timing is a concern.",
              },
              {
                title: 'Unmarried and not in a de facto relationship',
                body: "The child must be single — unmarried and not living in a de facto relationship. A child who is married or in a de facto relationship is not eligible.",
              },
              {
                title: "Parents deceased, incapacitated, or of unknown whereabouts",
                body: "Each parent must be deceased (evidenced by a death certificate), permanently incapacitated and unable to care for the child (evidenced by medical documentation), or of unknown whereabouts after genuine attempts to locate them. Parents who are alive and locatable but simply unwilling or financially unable to care for the child do not satisfy this criterion.",
              },
              {
                title: 'Eligible Australian sponsor',
                body: "The child must be sponsored by a relative in Australia who is an Australian citizen, permanent resident, or eligible New Zealand citizen. See the Relative Definition section below for who qualifies as a sponsor.",
              },
              {
                title: 'Health and character requirements',
                body: "The child must meet Australian health requirements (medical examination at a Department-approved panel physician). A character assessment is also required, adapted for the child's age. Household members of the sponsor are also subject to character requirements.",
              },
            ].map((req, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${ACCENT}`, background: '#ffffff', borderRadius: '0 8px 8px 0', padding: '20px 24px' }}>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>{req.title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{req.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATIVE DEFINITION ────────────────────────────────── */}
      <section id="relative-definition" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Who can sponsor" title="Who Counts as an Eligible Relative" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The definition of who can sponsor an Orphan Relative visa is broader than the everyday meaning of "relative." The following relationships are eligible (all must be settled in Australia as a citizen, permanent resident, or eligible New Zealand citizen):
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
            {[
              { title: 'Brother or sister', body: 'Including step-brothers and step-sisters, and their spouses or de facto partners.' },
              { title: 'Grandparent', body: 'Including step-grandparents and their spouses or de facto partners.' },
              { title: 'Aunt or uncle', body: "An aunt or uncle of the child (parent's sibling), including step-aunts and step-uncles, and their spouses or de facto partners." },
            ].map(item => (
              <div key={item.title} style={{ background: `${ACCENT}08`, border: `1px solid ${ACCENT}25`, borderRadius: 12, padding: 20 }}>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 700, color: NAVY, margin: '0 0 8px' }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <Callout variant="note" panel={true} title="Step-equivalents and the sponsor's partner can also qualify">
            Step-relationships are included — step-brothers, step-sisters, step-grandparents, step-aunts, and step-uncles. The spouse or de facto partner of an eligible relative can also be the sponsor. Confirm the precise definition with a registered migration agent to ensure the proposed sponsor qualifies in your specific family structure.
          </Callout>
        </div>
      </section>

      {/* ── EVIDENCE ───────────────────────────────────────────── */}
      <section id="evidence" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Key evidence" title="Evidence Required" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            These cases are sensitive and often involve difficult circumstances. The evidence must genuinely establish the basis for the application — the Department will assess each case on its specific facts.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, marginBottom: 32 }}>
            {[
              {
                category: 'Parent is deceased',
                items: [
                  'Official death certificate from the relevant country, translated into English',
                  "Where no death certificate is available, evidence of the parent's death may include media reports, official records, or a statutory declaration from reliable witnesses",
                ],
              },
              {
                category: 'Parent is permanently incapacitated',
                items: [
                  "Medical reports from qualified medical practitioners describing the nature of the incapacity and its permanent character",
                  "Evidence that the incapacity prevents the parent from caring for the child",
                  "Where relevant, evidence of the parent's current care arrangements and why care of the child is not possible",
                ],
              },
              {
                category: "Parent's whereabouts are unknown",
                items: [
                  "Evidence of genuine attempts to locate the parent — contact with relevant authorities, missing persons registers, family inquiries",
                  "Statutory declarations from family members or community witnesses confirming the parent's disappearance",
                  "Any records of when the parent was last seen or heard from",
                ],
              },
              {
                category: "Child's identity and relationship to sponsor",
                items: [
                  "Child's birth certificate and passport",
                  "Documents establishing the child's relationship to the sponsoring relative (family tree, official documents)",
                  "Evidence that the child is unmarried and not in a de facto relationship",
                ],
              },
            ].map(group => (
              <div key={group.category} style={{ background: '#ffffff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 14px' }}>{group.category}</h3>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                  {group.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <div style={{ width: 20, height: 20, borderRadius: '50%', background: `${ACCENT}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <Icon name="check" size={10} color={ACCENT} />
                      </div>
                      <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.65 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Callout variant="note" panel={true} title="Confirm current document requirements on the Department of Home Affairs website">
            Document requirements for orphan relative applications can be complex and may vary depending on the country of origin and the specific circumstances of the parents. Always confirm current requirements with the Department of Home Affairs before lodging.
          </Callout>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section id="process" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="How to apply" title="The Application Process" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
          <div style={{ marginTop: 32 }}>
            <Callout variant="note" panel={true} title="Confirm current government charges on the Department of Home Affairs website">
              Government charges for the Orphan Relative visa subclasses 117 and 837 change periodically. Always confirm current fees on the Department of Home Affairs website before lodging.
            </Callout>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #eef0f6` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── RELATED PAGES ──────────────────────────────────────── */}
      <section id="related" style={{ background: '#fafbfe', padding: '80px 32px', borderTop: `1px solid #eef0f6` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also on this site" title="Related pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Compassionate, careful guidance for orphan relative applications"
        body="These cases involve difficult circumstances and sensitive evidence. Nanak Migration Group (MARN 2619467) can help families document the application thoroughly and navigate the process with care."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
