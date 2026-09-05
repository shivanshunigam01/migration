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

const ACCENT = CAT_PARTNER
const CURRENT_AS_AT = 'August 2026'
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'scenario', label: 'Typical scenario' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'process', label: 'Application process' },
  { id: 'permanent-stage', label: 'Permanent stage' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'user',
    value: 'Subclass 445',
    label: 'Dependent Child — temporary visa to join a parent on a temporary partner visa',
    note: 'The 445 is a temporary visa. It does not itself lead to permanent residence — the child must be included in the parent\'s permanent partner visa application (subclass 100 or 801) to obtain permanent residence.',
  },
  {
    icon: 'calendar',
    value: 'Until permanent stage',
    label: 'Visa valid until the parent\'s temporary partner visa ceases',
    note: 'The 445 visa generally remains valid until the parent\'s temporary partner visa (309 or 820) is replaced by the permanent stage (100 or 801). The child is then included in the permanent application.',
  },
  {
    icon: 'heart',
    value: 'Parent on 309 or 820',
    label: 'Parent must hold or have applied for a temporary partner visa',
    note: 'The 445 is designed specifically for children of a parent who holds or has applied for a temporary partner visa — subclass 309 (offshore) or 820 (onshore). The child then follows the parent through to the permanent stage.',
  },
  {
    icon: 'shield',
    value: 'Sponsor required',
    label: "Parent's partner sponsor — the Australian citizen or PR sponsoring the parent",
    note: "The 445 visa is sponsored by the same person sponsoring the parent's partner visa — the Australian citizen or permanent resident who is the parent's partner.",
  },
]

const STEPS: TimelineStep[] = [
  { code: '01', title: 'Parent\'s temporary partner visa is lodged or granted', desc: 'The child\'s parent (the primary applicant on the partner visa) either has a pending or granted subclass 309 or 820 visa. The 445 application is typically lodged after or at the same time as the partner visa.' },
  { code: '02', title: 'Confirm the child\'s dependency', desc: 'The child must be a dependent child — under 18, or 18–25 and a full-time student financially dependent on the parent, or any age and incapacitated for work and financially dependent. Gather documents confirming the relationship to the parent.' },
  { code: '03', title: 'Confirm sponsor eligibility', desc: "The sponsor is the Australian citizen or PR who is the parent's partner. The same sponsor assessment that applies to the partner visa generally covers the 445 — confirm current sponsorship requirements with a migration agent." },
  { code: '04', title: 'Lodge the subclass 445 application', desc: 'Lodge the 445 application through ImmiAccount, attaching identity documents, evidence of dependency, health assessments, and character documents. The application is linked to the parent\'s partner visa.' },
  { code: '05', title: 'Child travels to Australia on the 445 visa', desc: 'Once the 445 is granted, the child can travel to and remain in Australia. The child must be added to the parent\'s permanent partner visa application before that permanent stage is decided.' },
]

const FAQ: FaqItem[] = [
  {
    question: "What is the subclass 445 Dependent Child visa and who is it for?",
    answer: "The subclass 445 Dependent Child visa is a temporary visa for a child whose parent holds or is applying for a temporary partner visa — subclass 309 (Partner visa offshore, temporary stage) or subclass 820 (Partner visa onshore, temporary stage). It allows the child to join the parent in Australia while the parent's partner visa is at the temporary stage — that is, while the couple's relationship is being assessed and the permanent stage has not yet been granted. The 445 is a bridging arrangement for the child, not a permanent outcome. The child must subsequently be included in the parent's permanent partner visa application.",
  },
  {
    question: "Does the subclass 445 lead to permanent residence?",
    answer: "The subclass 445 itself is a temporary visa and does not lead directly to permanent residence. For the child to obtain permanent residence, they must be included as a dependent in the parent's permanent partner visa application (subclass 100 or 801) when that application is lodged or when the child is added to it. If the parent's permanent partner visa is granted and the child has been properly included, the child's permanent visa will also be granted. It is important to ensure the child is included in the permanent stage application — if the child is not included, they may need to apply for a separate permanent child visa (subclass 101 or 802).",
  },
  {
    question: "What is the difference between the subclass 445 and the subclass 101/802 child visa?",
    answer: "The subclass 445 is specifically for children of a parent on a temporary partner visa (309 or 820). It is a temporary visa that follows the parent through to the permanent stage of the partner visa. The subclass 101 (offshore) and 802 (onshore) are standalone permanent child visas available to dependent children of Australian citizens, PRs, or eligible NZ citizens — they do not depend on a parent being on a partner visa. If a parent already holds a permanent partner visa (or is an Australian citizen/PR by some other pathway), a subclass 101 or 802 would generally be the appropriate child visa, not the 445.",
  },
  {
    question: "What happens to the subclass 445 if the parent's partner visa is refused?",
    answer: "If the parent's temporary partner visa application is refused, the subclass 445 would cease to have a basis — the 445 is dependent on the parent's partner visa. The child would no longer hold a valid visa once any appeal rights on the parent's matter are exhausted and the parent is required to leave. This is one of the reasons it is important that the parent's partner visa application is well-prepared and that the underlying relationship is genuine. If the parent's matter is under ART review, the 445 may remain valid during that process — seek advice on what applies in the specific circumstances.",
  },
  {
    question: "Can the child travel outside Australia on the subclass 445 visa?",
    answer: "The subclass 445 generally allows for multiple travel to and from Australia while it remains valid — but confirm current conditions on the Department of Home Affairs website. The child should not travel outside Australia without understanding whether they will be able to re-enter on the visa. If the visa is about to expire or conditions have changed, travel outside Australia could result in the child needing to apply for a new visa before returning. Check visa conditions in VEVO before any international travel.",
  },
  {
    question: "Does the child need to be added to the parent's permanent partner visa application separately?",
    answer: "Yes — the child does not automatically become part of the permanent partner visa application. The child must be included as a member of the family unit in the permanent stage application (subclass 100 or 801). This should be done at lodgement of the permanent application, or as soon as the child is born or becomes a dependent during the processing period. Failing to include the child can mean the child misses out on the permanent visa at that stage and would need to apply for a separate visa. Seek advice on timing and process from a registered migration agent.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Partner Visa Onshore (820/801)', desc: 'The parent\'s visa — onshore partner visa pathways that the 445 follows.', icon: 'home', page: 'partner-visa-820-801', color: ACCENT },
  { title: 'Partner Visa Offshore (309/100)', desc: 'The offshore partner visa pathway — 445 applies where the parent holds a 309.', icon: 'plane', page: 'partner-visa-309-100', color: ACCENT },
  { title: 'Child Visa (Offshore 101)', desc: 'Standalone permanent offshore child visa for biological and adopted dependent children.', icon: 'plane', page: 'child-visa-101', color: ACCENT },
  { title: 'Adoption Visa (102)', desc: 'Permanent visa for children adopted outside Australia by an Australian parent.', icon: 'heart', page: 'adoption-visa-102', color: ACCENT },
]

export default function DependentChild445Page({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Dependent Child Visa (445)', url: 'https://www.nanakmigration.com.au/dependent-child-445' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{ name: 'Dependent Child Visa (Subclass 445) Advice', description: PAGE_META['dependent-child-445'].metaDescription, url: 'https://www.nanakmigration.com.au/dependent-child-445' }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Partner & Family Visas', page: 'partner-family-visas' },
          { label: 'Dependent Child (445)' },
        ]}
      />

      <PageHero
        variant="standard"
        eyebrow="Partner & Family"
        eyebrowSub="Child Visas · Subclass 445"
        title={<>Dependent Child Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 445 — Joining a parent on a temporary partner visa</em></>}
        deck="The subclass 445 allows a dependent child to join a parent who holds or is applying for a temporary partner visa (subclass 309 or 820) in Australia. It is a temporary visa — the child must then be included in the parent's permanent partner visa application to obtain permanent residence."
        shortAnswer={<>The <strong style={{ color: NAVY }}>subclass 445 Dependent Child visa</strong> is for a child whose parent holds a <strong style={{ color: NAVY }}>temporary partner visa — subclass 309 (offshore) or 820 (onshore)</strong>. It lets the child join the parent in Australia while the couple's relationship is assessed and the permanent partner visa stage (100 or 801) is pending. The 445 is <strong style={{ color: NAVY }}>temporary</strong> — it does not lead to permanent residence on its own. The child must be <strong style={{ color: NAVY }}>included in the parent's permanent partner visa application</strong> to obtain permanent residence. The sponsor is the Australian citizen or PR who is the parent's partner. Nanak Migration Group (MARN 2619467) can advise on the 445 and how to coordinate it with the permanent stage. No outcome guarantees.</>}
        maraBadge={true}
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Partner Visa Onshore →', page: 'partner-visa-820-801' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <KeyFactsStrip facts={FACTS} accent={ACCENT} />

      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>

      {/* Sticky jump bar */}
      <div style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, background: GREY_BG, position: 'sticky', top: 64, zIndex: 20 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 4, overflowX: 'auto', scrollbarWidth: 'none' as const }}>
          {TOC.map(sec => (
            <a key={sec.id} href={`#${sec.id}`}
              style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap' as const, borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}
            >{sec.label}</a>
          ))}
        </div>
      </div>

      {/* ── Overview ─────────────────────────────────────────────── */}
      <section id="overview" style={{ padding: '64px 32px 48px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What this visa does" title="The Subclass 445 — Following a Parent Through the Partner Visa Process" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 20 }}>
            When a person marries or is in a de facto relationship with an Australian citizen or permanent resident and applies for a partner visa, the process often takes years from the initial temporary stage to the permanent stage. If that person has a dependent child who is not also included in the partner visa application, the child would otherwise have no visa basis to be in Australia during that period.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            The subclass 445 fills this gap. It is a temporary visa specifically for children of a parent who holds or is applying for a temporary partner visa (subclass 309 or 820). It allows the child to be in Australia with the parent while the permanent stage of the partner visa is pending.
          </p>
          <Callout variant="note" panel={true} title="The 445 is temporary — include the child in the permanent partner visa application">
            The 445 does not result in permanent residence by itself. To ensure the child achieves permanent status alongside the parent, the child must be properly included as a dependent in the parent's permanent partner visa application (subclass 100 or 801) before that application is decided.
          </Callout>
        </div>
      </section>

      {/* ── Typical scenario ─────────────────────────────────────── */}
      <section id="scenario" style={{ background: GREY_BG, padding: '64px 32px 56px', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="How it typically works" title="A Typical Subclass 445 Scenario" />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 0 }}>
            {[
              { label: 'The situation', body: "Ana is a citizen of a third country with a dependent child, Mia (aged 8). Ana marries an Australian citizen, Ben. Ana applies for a subclass 820 (onshore) partner visa. Mia is not Australian and has no Australian visa." },
              { label: 'The problem without the 445', body: "If Mia is not included in Ana's 820 application and does not have her own visa, she cannot lawfully remain in Australia. Ana would be on the 820 (temporary stage) waiting for the permanent 801 — which can take 2 or more years." },
              { label: 'The 445 solution', body: "Mia applies for a subclass 445 Dependent Child visa. Ben (Ana's sponsor) also sponsors Mia. The 445 allows Mia to live in Australia with Ana while Ana's partner visa is at the temporary stage." },
              { label: 'At the permanent stage', body: "When Ana's permanent 801 partner visa is ready to be decided, Mia must already be included as a member of the family unit in that application. If Mia has been properly included, both Ana and Mia receive the permanent 801 visa together." },
              { label: 'If Mia is not included in time', body: "If Mia is not properly included in Ana's permanent partner application, she will not receive the permanent visa as part of that process. She may need to apply for a separate child visa (subclass 802) at additional cost and processing time. This is avoidable with careful planning." },
            ].map((step, i) => (
              <div key={step.label} style={{ borderLeft: `4px solid ${i === 4 ? '#d97706' : ACCENT}`, background: '#fff', padding: '18px 24px', borderRadius: '0 12px 12px 0', marginBottom: 12 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: i === 4 ? '#d97706' : ACCENT, letterSpacing: '0.08em', marginBottom: 6 }}>{step.label.toUpperCase()}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Eligibility ──────────────────────────────────────────── */}
      <section id="eligibility" style={{ padding: '64px 32px 56px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Who qualifies" title="Eligibility Requirements" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div style={{ background: GREY_BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 12 }}>The child (applicant)</div>
              {[
                'Is a dependent child of the partner visa holder — biological, step, or adopted',
                'Under 18, OR 18–25 and a full-time student financially dependent on the parent',
                'OR any age, incapacitated for work, and financially dependent on the parent',
                'Is not married or in a de facto relationship (under-18 requirement)',
                'Satisfies health and character requirements for the visa',
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 6 }} />
                  <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{p}</span>
                </div>
              ))}
            </div>
            <div style={{ background: GREY_BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 12 }}>The sponsor</div>
              {[
                "Is the same sponsor as the parent's partner visa — the Australian citizen or PR who is the parent's partner",
                'Must not be prohibited from sponsoring under Australian law',
                'The sponsor must remain the sponsor throughout the temporary and permanent stages',
                "Sponsorship approval for the parent's visa generally extends to the 445 — confirm current requirements with a migration agent",
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 6 }} />
                  <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Application process ───────────────────────────────────── */}
      <section id="process" style={{ background: GREY_BG, padding: '64px 32px 56px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Step by step" title="Applying for the Subclass 445" />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* ── Permanent stage ───────────────────────────────────────── */}
      <section id="permanent-stage" style={{ padding: '64px 32px 56px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What comes next" title="The Permanent Stage — Getting the Child to Permanent Residence" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 28 }}>
            The subclass 445 is a stepping stone, not a destination. To convert the child's status to permanent, the following must happen at the permanent stage of the parent's partner visa.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {[
              { code: '01', title: 'Child must be included in the permanent application', body: 'When the parent\'s permanent partner visa application (subclass 100 or 801) is lodged or when the permanent stage is being processed, the child must be properly included as a member of the family unit. This requires notification to the Department if the child was not included at lodgement.' },
              { code: '02', title: 'Updated health and character assessments', body: 'Health assessments have an expiry period. If the child\'s health assessment from the 445 application has expired by the time the permanent stage is decided, a new assessment may be required. Plan for this when timing the permanent application.' },
              { code: '03', title: 'Child\'s permanent visa is decided with the parent\'s', body: "If the parent's permanent 100 or 801 visa is granted and the child has been properly included, the child's permanent visa is granted at the same time. Both parent and child become permanent residents together." },
              { code: '04', title: 'If the child turns 18 during processing', body: 'If the child turns 18 while the parent\'s permanent application is pending, the child may cease to be a dependent child for visa purposes unless they are a full-time student financially dependent on the parent. Monitor this carefully and seek advice if the child is approaching 18 during a long processing period.' },
            ].map(step => (
              <div key={step.code} style={{ borderLeft: `4px solid ${ACCENT}`, background: '#fff', padding: '20px 24px', borderRadius: '0 12px 12px 0', border: `1px solid ${BORDER}`, borderLeftWidth: 4, borderLeftColor: ACCENT }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: ACCENT, letterSpacing: '0.1em' }}>{step.code}</span>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY }}>{step.title}</div>
                </div>
                <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.75, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: '64px 32px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Subclass 445 Questions Answered" />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── Related ───────────────────────────────────────────────── */}
      <section id="related" style={{ background: GREY_BG, padding: '64px 32px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Explore further" title="Related Pages" accent={ACCENT} marginBottom={36} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Child joining a parent on a temporary partner visa? Plan the 445 early."
        body="Nanak Migration Group (MARN 2619467) can advise on the 445 application and ensure the child is correctly included in the permanent partner visa stage. No outcome can be guaranteed."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
