import React from 'react'
import { GOLD, NAVY } from '@/theme'
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

const CAT_COMPLEX = '#dc2626'
const ACCENT = CAT_COMPLEX

const TOC = [
  { id: 'overview', label: 'What it is' },
  { id: 'criteria', label: 'The criteria' },
  { id: 'waiver', label: 'Compelling reasons waiver' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'waensila', label: 'Waensila decision' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'shield',
    value: 'Schedule 3',
    label: 'Extra criteria for unlawful or bridging-visa applicants',
    note: 'Schedule 3 criteria apply when a person applies for a visa (most commonly a partner visa) from inside Australia while not holding a substantive visa — that is, while unlawful or on a bridging visa.',
  },
  {
    icon: 'calendar',
    value: '28 days',
    label: 'Critical time limit under criterion 3001',
    note: 'A person applying for a partner visa onshore as an unlawful non-citizen must do so within 28 days of ceasing to hold a substantive visa. After 28 days unlawful, criterion 3001 cannot be met and a waiver of Schedule 3 is required.',
  },
  {
    icon: 'scale',
    value: 'Waiver available',
    label: "Compelling reasons waiver — discretion, not a guarantee",
    note: 'A decision-maker may waive Schedule 3 criteria if there are compelling reasons not to apply them. The discretion is real but waiver is genuinely difficult to obtain without strong, specific evidence.',
  },
  {
    icon: 'alert',
    value: 'Hard-fought',
    label: 'Schedule 3 waivers require thorough preparation',
    note: 'Generic submissions rarely succeed. A well-prepared waiver request addresses every Schedule 3 criterion individually, ties evidence to compelling reasons specific to the applicant, and anticipates counter-arguments.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'What is Schedule 3 and why does it apply to my partner visa?',
    answer: 'Schedule 3 of the Migration Regulations 1994 contains criteria that apply to certain visa classes — most commonly the Partner visa (subclass 820/801 onshore) — when the applicant does not hold a substantive visa at the time of application. A substantive visa is a visa other than a bridging visa. If you are unlawful (no visa at all) or are on a bridging visa when you apply for a partner visa onshore, you must satisfy or obtain a waiver of the Schedule 3 criteria in addition to the usual partner visa requirements. Schedule 3 is essentially an extra hurdle for people who are not in a lawful substantive visa status.',
  },
  {
    question: 'What is the 28-day rule under criterion 3001?',
    answer: 'Criterion 3001 requires that an unlawful non-citizen applying for a partner visa onshore must make the application within 28 days of ceasing to hold their last substantive visa. If you overstayed or became unlawful and more than 28 days have passed, you cannot satisfy criterion 3001 and must instead obtain a waiver of Schedule 3. The 28 days run from the date you ceased to hold a substantive visa — not from the date your bridging visa (if any) expires. This distinction can be critical and is a reason to seek advice promptly.',
  },
  {
    question: 'What are "compelling reasons" for a Schedule 3 waiver?',
    answer: "The decision-maker has a discretion to waive Schedule 3 criteria if there are compelling reasons not to apply them. What counts as compelling is assessed on the specific facts — there is no fixed list. Commonly accepted compelling reasons include: having Australian-citizen or permanent-resident children (particularly where the children are dependent on the relationship); the impact of the separation on the Australian sponsor and any children; circumstances that arose after the person\'s visa expired and that are specific to the family rather than general hardship; and where departure would expose a sponsor or child to disproportionate hardship. Mere inconvenience of leaving Australia and re-applying offshore is generally not a compelling reason. The strength of the relationship and how long it existed are relevant but are not compelling reasons in themselves.",
  },
  {
    question: 'Can I get a Schedule 3 waiver if my Australian-born children would be affected?',
    answer: 'Having Australian-citizen children is one of the most commonly raised and accepted compelling reason categories. The decision-maker must consider the best interests of minor children as a primary consideration. However, the presence of Australian-citizen children does not automatically guarantee a waiver — the decision-maker must still assess the specific circumstances and evidence, including the nature of the relationship between the applicant and the children, the practical impact of departure, and the overall circumstances. Thorough evidence of the parental relationship and the impact on the children is essential.',
  },
  {
    question: 'Does the Waensila Full Federal Court decision help my Schedule 3 waiver?',
    answer: "Yes — the Full Federal Court decision in Waensila v Minister for Immigration and Border Protection [2016] FCAFC 32 established that when deciding whether to waive Schedule 3 criteria, the decision-maker must consider all circumstances relevant to whether there are compelling reasons, including circumstances that arose after the visa application was lodged. Before Waensila, there was a view that only pre-lodgement circumstances could be considered. Waensila means that events occurring during the processing period — such as the birth of a child, the development of a medical condition, or changed family circumstances — can be put to the decision-maker as part of the compelling reasons argument. This significantly expanded the evidence base available to applicants.",
  },
  {
    question: 'What happens if my Schedule 3 waiver is refused?',
    answer: "If the decision-maker refuses to waive Schedule 3 and refuses the partner visa on this basis, the refusal may be reviewable at the Administrative Review Tribunal (ART). The review is a merits review — the ART can itself consider whether there are compelling reasons and can exercise the waiver discretion afresh. A strict time limit applies to lodging the ART application (stated in the refusal letter). Getting professional advice promptly after a Schedule 3 refusal is critical. No outcome can be guaranteed at the ART, but a well-prepared review that presents stronger evidence and arguments than the original submission has better prospects than a poorly prepared one.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Partner Visa Onshore (820/801)', desc: 'The partner visa most commonly affected by Schedule 3 — process, evidence and requirements.', icon: 'heart', page: 'partner-visa-820-801', color: ACCENT },
  { title: 'Section 48 Bar', desc: 'The provision that prevents most onshore visa applications after a refusal or cancellation.', icon: 'shield', page: 'section-48-bar', color: ACCENT },
  { title: 'Visa Cancellation', desc: 'Understanding cancellation powers, the NOICC process and how to respond.', icon: 'alert', page: 'visa-cancellation', color: ACCENT },
  { title: 'ART Review', desc: 'Seek merits review of a Schedule 3 waiver refusal at the Administrative Review Tribunal.', icon: 'scale', page: 'art-review', color: ACCENT },
]

export default function Schedule3Page({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Reviews & Complex', url: 'https://www.nanakmigration.com.au/visa-refusal-review' },
          { name: 'Schedule 3', url: 'https://www.nanakmigration.com.au/schedule-3' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{ name: 'Schedule 3 Criteria and Waiver Advice', description: PAGE_META['schedule-3'].metaDescription, url: 'https://www.nanakmigration.com.au/schedule-3' }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Reviews & Complex', page: 'visa-refusal-review' },
          { label: 'Schedule 3' },
        ]}
      />

      <PageHero
        variant="standard"
        eyebrow="Reviews & Complex"
        eyebrowSub="Guides & Rules · Schedule 3"
        title={<>Schedule 3 Criteria<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Extra Hurdles for Unlawful Applicants</em></>}
        deck="Schedule 3 of the Migration Regulations contains extra criteria that apply when a person applies for a visa (most commonly a partner visa) while not holding a substantive visa. Understanding the 28-day rule, criteria 3001/3003/3004, and the compelling reasons waiver is essential before lodging."
        shortAnswer={<>Schedule 3 criteria apply when a person applies for an onshore visa — most commonly the <strong style={{ color: NAVY }}>Partner visa (subclass 820)</strong> — while they are <strong style={{ color: NAVY }}>unlawful</strong> or <strong style={{ color: NAVY }}>on a bridging visa</strong>. The key criterion is <strong style={{ color: NAVY }}>3001</strong>: an unlawful non-citizen must apply within <strong style={{ color: NAVY }}>28 days</strong> of ceasing to hold a substantive visa. If more than 28 days have elapsed, the applicant must obtain a <strong style={{ color: NAVY }}>waiver of Schedule 3</strong> based on compelling reasons — a discretion that is genuinely difficult to obtain without careful, evidence-rich preparation. The Full Federal Court in <em>Waensila</em> confirmed that compelling reasons can include circumstances arising <strong style={{ color: NAVY }}>after</strong> lodgement. Nanak Migration Group (MARN 2619467) strongly recommends professional advice before lodging or responding to a Schedule 3 issue.</>}
        maraBadge={true}
        currentAsAt="August 2026"
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
      <div style={{ borderTop: '1px solid #e8edf6', borderBottom: '1px solid #e8edf6', background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
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
          <SectionHeading kicker="The provision" title="What Is Schedule 3?" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 20 }}>
            Schedule 3 of the <em>Migration Regulations 1994</em> contains criteria that apply to certain onshore visa applications — most commonly the Partner visa (subclass 820/801) — when the applicant does not hold a substantive visa at the time of application. A substantive visa is any visa other than a bridging visa. If you are unlawful (your visa has expired and you have no bridging visa) or are on a bridging visa, Schedule 3 applies to your partner visa application.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            Schedule 3 is in addition to — not instead of — the standard partner visa requirements. Even if you meet all the ordinary requirements for a partner visa, Schedule 3 creates an additional layer that must also be addressed. The Schedule 3 criteria exist to discourage people from remaining in Australia unlawfully and then seeking to regularise their status by applying for a visa from inside.
          </p>
          <Callout variant="warning" panel={true} title="Act quickly — time limits are critical under Schedule 3">
            The 28-day window under criterion 3001 runs from the date you ceased to hold a substantive visa. Every day that passes without lodging a partner visa application (if you are unlawful) increases the difficulty of your position. Seek advice immediately if your visa has expired or is about to expire and you are in Australia.
          </Callout>
        </div>
      </section>

      {/* ── The criteria ──────────────────────────────────────────── */}
      <section id="criteria" style={{ background: '#f8fafd', padding: '64px 32px 56px', borderTop: '1px solid #e8edf5', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Schedule 3 in plain English" title="The Three Schedule 3 Criteria" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The three Schedule 3 criteria that commonly apply to partner visa (subclass 820) applications are set out below. An applicant must either satisfy each criterion or obtain a waiver of it. Criteria 3001, 3003 and 3004 are all relevant — the specific criteria that apply depend on whether the applicant is an unlawful non-citizen or a bridging visa holder.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {[
              {
                code: '3001',
                heading: 'Criterion 3001 — The 28-day rule (unlawful non-citizens)',
                body: 'An unlawful non-citizen must apply for the visa within 28 days of ceasing to hold their last substantive visa. If more than 28 days have elapsed since the person became unlawful, criterion 3001 cannot be satisfied and a waiver is required. The 28-day period is measured from the date the last substantive visa expired, was cancelled, or ceased — not from when any bridging visa expired.',
                badge: 'Unlawful non-citizens',
              },
              {
                code: '3003',
                heading: 'Criterion 3003 — Compelling reasons (unlawful non-citizens)',
                body: "Requires that there are compelling reasons for not applying Schedule 3 to the person. This is the criterion that gives the decision-maker a discretion to waive Schedule 3 requirements. If criterion 3001 cannot be met, the applicant must satisfy criterion 3003 — and criterion 3003 is also the vehicle for waiver of criterion 3001. The decision-maker considers whether, in all the circumstances, there are compelling reasons not to apply the Schedule 3 criteria. 'Compelling' is a high bar — inconvenience, preference, or the general difficulty of applying offshore are not sufficient.",
                badge: 'Waiver criterion',
              },
              {
                code: '3004',
                heading: 'Criterion 3004 — Compelling reasons (bridging visa holders)',
                body: 'Similar to criterion 3003 but applies to applicants who are on a bridging visa (rather than unlawful). A person on a bridging visa when they apply for a partner visa must satisfy criterion 3004 — compelling reasons not to apply Schedule 3. In practice, criterion 3004 is somewhat more commonly met than criterion 3003 because the applicant at least has lawful status, but the compelling reasons threshold still applies and must be addressed with evidence.',
                badge: 'Bridging visa holders',
              },
            ].map(item => (
              <div key={item.code} style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 14, overflow: 'hidden' }}>
                <div style={{ padding: '16px 22px', background: NAVY, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: GOLD, letterSpacing: '0.08em' }}>Criterion {item.code}</span>
                  <span style={{ fontSize: 11, background: 'rgba(255,255,255,0.15)', color: '#fff', borderRadius: 20, padding: '3px 10px', letterSpacing: '0.04em' }}>{item.badge}</span>
                </div>
                <div style={{ padding: '20px 22px' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{item.heading}</div>
                  <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compelling reasons waiver ────────────────────────────── */}
      <section id="waiver" style={{ padding: '64px 32px 56px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Discretion explained" title="The Compelling Reasons Waiver" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The compelling reasons discretion is real — the decision-maker genuinely has the power to waive Schedule 3 criteria where compelling reasons exist. However, the threshold is high and waivers are not routinely granted. The following factors are commonly considered compelling; the list is not exhaustive and individual circumstances always matter.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#166534', marginBottom: 14 }}>Factors commonly accepted as compelling</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Australian-citizen or permanent-resident children who are dependent on the relationship — particularly where the child\'s best interests are affected by the applicant\'s departure',
                  'Hardship to the Australian sponsor that goes beyond the ordinary difficulty of being separated from a partner',
                  'Long duration of the relationship and shared life built in Australia',
                  'Circumstances that make departure disproportionately difficult — e.g. a medical condition of the sponsor or children, caring responsibilities',
                  'Events that arose after lodgement that change the family\'s situation (confirmed by Waensila)',
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="check" size={10} color="#fff" />
                    </div>
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#991b1b', marginBottom: 14 }}>Factors generally not sufficient alone</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'General inconvenience of leaving Australia and re-applying offshore',
                  'Financial cost of applying offshore (without exceptional circumstances)',
                  'The fact that the relationship is genuine — genuineness is a partner visa requirement, not a compelling reason in itself',
                  'Long residence in Australia without other connecting factors',
                  'The emotional difficulty of being separated — without specific evidence of particular hardship',
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#991b1b', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="alert" size={10} color="#fff" />
                    </div>
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Callout variant="warning" panel={true} title="Schedule 3 waivers are hard-fought — professional preparation matters">
            A generic submission that simply says the relationship is genuine and the applicant has been in Australia a long time is unlikely to succeed. A well-prepared compelling reasons argument addresses the Schedule 3 criteria specifically, connects evidence to the particular circumstances of the family, and anticipates the arguments a decision-maker might use to reject the waiver. Nanak Migration Group (MARN 2619467) can assist with preparing compelling reasons submissions — no outcome can be guaranteed, but preparation quality directly affects prospects.
          </Callout>
        </div>
      </section>

      {/* ── Evidence ─────────────────────────────────────────────── */}
      <section id="evidence" style={{ background: '#f8fafd', padding: '64px 32px 56px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What supports the waiver" title="Evidence That Helps a Schedule 3 Waiver Request" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            Evidence in a compelling reasons submission should be specific, documented, and tied directly to the factual circumstances that make departure disproportionately difficult. Generic statutory declarations about how much the couple loves each other are not sufficient.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {[
              {
                title: 'Children and family',
                points: [
                  "Children\'s birth certificates and evidence of Australian citizenship or permanent residency",
                  "Evidence of the applicant\'s active parenting role — school records, medical appointments attended, family photos",
                  'Evidence of the child\'s dependency on the relationship — letters from school, health professionals',
                  "Evidence that the sponsor cannot adequately care for the children without the applicant",
                ],
              },
              {
                title: 'Sponsor hardship',
                points: [
                  "Medical evidence of the sponsor\'s health conditions or mental health vulnerabilities that would be exacerbated by separation",
                  "Evidence of financial dependency or shared financial obligations (mortgage, business) that cannot be simply paused",
                  "Evidence of caring responsibilities the sponsor provides for the applicant\'s family or vice versa",
                  "Statutory declarations from the sponsor detailing specific hardship — with supporting documentation",
                ],
              },
              {
                title: 'Post-lodgement circumstances',
                points: [
                  "Documents showing circumstances that arose after the visa application was lodged (birth certificates, medical diagnoses, carer assessments)",
                  "Evidence of the timeline of events — particularly where the compelling circumstances developed during the processing period",
                  "Letters from treating practitioners or social workers addressing the specific impact of the applicant\'s possible departure",
                ],
              },
              {
                title: 'Why offshore application is disproportionately difficult',
                points: [
                  'Evidence specific to the applicant\'s home country — not just general difficulty',
                  "Processing time evidence showing the offshore wait would cause specific harm (not just inconvenience)",
                  'Evidence that the applicant\'s specific circumstances in their home country — safety, health access, family connections — would be significantly affected',
                ],
              },
            ].map(card => (
              <div key={card.title} style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 12 }}>{card.title}</div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                  {card.points.map((p, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.6 }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Waensila decision ────────────────────────────────────── */}
      <section id="waensila" style={{ padding: '64px 32px 56px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Key case law" title="The Waensila Decision and Post-Lodgement Circumstances" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>
            In <em>Waensila v Minister for Immigration and Border Protection</em> [2016] FCAFC 32, the Full Federal Court confirmed that when assessing whether compelling reasons exist to waive Schedule 3 criteria, the decision-maker must take into account all circumstances relevant to the question — including circumstances that arose after the visa application was lodged.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            Before this decision, there was an argument that only circumstances that existed at the time of lodgement could be considered. <em>Waensila</em> rejected this view. This is practically significant: if your circumstances change during the processing period — for example, a child is born, a sponsor develops a medical condition, or caring responsibilities emerge — these developments can and should be raised in your compelling reasons submission.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div style={{ background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 12 }}>What Waensila means for you</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Circumstances that arise during processing can be included in the compelling reasons argument',
                  'The birth of an Australian-citizen child during the processing period is squarely within what can be considered',
                  'Updated statutory declarations and evidence can be submitted to the decision-maker as circumstances change',
                  'This does not mean fabricating post-lodgement events — the evidence must be genuine',
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: `${ACCENT}14`, border: `1px solid ${ACCENT}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="info" size={10} color={ACCENT} />
                    </div>
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 12 }}>What Waensila does not do</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'It does not lower the "compelling" threshold — post-lodgement circumstances must still be compelling, not just inconvenient',
                  'It does not require the decision-maker to grant the waiver — the discretion remains with the decision-maker',
                  'It does not apply to the ART automatically — the ART conducts its own merits assessment and you still need to present the evidence',
                  'It does not convert ordinary changes in circumstance into compelling reasons',
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: `${ACCENT}14`, border: `1px solid ${ACCENT}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="alert" size={10} color={ACCENT} />
                    </div>
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: '64px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Schedule 3 Questions Answered" />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── Related ───────────────────────────────────────────────── */}
      <section id="related" style={{ background: '#f8fafd', padding: '64px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Explore further" title="Related Pages" accent={ACCENT} marginBottom={36} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Facing a Schedule 3 issue? Get advice before lodging."
        body="Nanak Migration Group (MARN 2619467) can advise on whether Schedule 3 applies to your situation and help you prepare the strongest possible compelling reasons submission. No outcome can be guaranteed — but the quality of the submission matters."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
