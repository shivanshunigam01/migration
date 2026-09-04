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
  { id: 'overview', label: 'Overview' },
  { id: 'pic4005-vs-4007', label: 'PIC 4005 vs 4007' },
  { id: 'waiver-test', label: 'The waiver test' },
  { id: 'process', label: 'Process and timeframes' },
  { id: 'evidence', label: 'Evidence that helps' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'shield',
    value: 'PIC 4005 / 4007',
    label: 'Two health criteria — only one has a waiver',
    note: 'PIC 4005 (the standard health criterion) does not have a waiver available. PIC 4007 applies to a defined set of visa classes and has a waiver discretion based on undue cost and undue prejudice.',
  },
  {
    icon: 'user',
    value: 'MOC opinion',
    label: 'Medical Officer of the Commonwealth makes the health assessment',
    note: 'The health assessment is conducted by a Medical Officer of the Commonwealth (MOC), who provides an opinion on whether the applicant meets the health criterion. Applicants cannot dispute the medical finding itself.',
  },
  {
    icon: 'scale',
    value: 'Waiver discretion',
    label: "Undue cost and undue prejudice are the two waiver grounds",
    note: 'Even after a negative health opinion, a decision-maker can waive PIC 4007 if the cost or prejudice is not "undue" having regard to relevant factors including the applicant\'s likely economic and social contributions.',
  },
  {
    icon: 'alert',
    value: 'Sensitive topic',
    label: 'Health assessments are conducted fairly and individually',
    note: 'Health waivers require careful, respectful presentation of the facts. Evidence of community support, carer arrangements, and economic contribution is more effective than disputing medical findings.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: "What is PIC 4007 and which visas use it?",
    answer: "PIC 4007 (Public Interest Criterion 4007) is the health criterion that applies to certain visa classes — most notably partner visas (subclasses 820/801 and 309/100), child visas (101 and 802), some employer-sponsored visas, regional visas (494, 491), and protection visas. PIC 4007 requires that the applicant meets the health criterion OR that the decision-maker is satisfied that the cost or prejudice involved is not 'undue' having regard to relevant factors. The second limb is the waiver. Not all visa classes use PIC 4007 — most skilled and employer-sponsored visa classes use PIC 4005, which has no waiver. If you are affected by a health issue in your visa application, identifying which PIC applies is the first critical step.",
  },
  {
    question: "Can I dispute the Medical Officer of the Commonwealth opinion?",
    answer: "No — the MOC's opinion on whether an applicant's health condition meets the health criterion is a medical finding that cannot be directly disputed in a waiver submission. The decision-maker is bound to accept the MOC's opinion as to health. What applicants can and should do is provide evidence relevant to the waiver test: evidence of the likely costs of treatment (which can be offset by other evidence), evidence of the applicant's likely economic and social contributions, evidence of family support and care arrangements that reduce the burden on public services, and evidence of the applicant's particular circumstances. The focus shifts from the medical finding to the waiver factors.",
  },
  {
    question: "What do 'undue cost' and 'undue prejudice' mean in practice?",
    answer: "Undue cost refers to whether the health-related costs to the Australian community — health care, community services, special education — would be disproportionate (undue) in the circumstances. The decision-maker considers the likely costs over the expected lifetime of the applicant's residence in Australia against the applicant's likely economic and social contributions, family support structure, and any arrangements in place to reduce the public cost. Undue prejudice refers to prejudice to Australian citizens or permanent residents in their access to healthcare or other services that are in limited supply — for example, if the applicant's condition would compete for scarce specialist medical resources. In most cases, the primary consideration is the cost limb, not the prejudice limb.",
  },
  {
    question: "What kind of evidence helps a health waiver case?",
    answer: "Evidence that is most useful in a PIC 4007 waiver includes: (1) Evidence of the applicant's likely economic contributions — employment history, skills, tax contributions, professional qualifications; (2) Evidence of the applicant's social contributions — volunteering, community involvement, family role; (3) Evidence that family members will fund treatment and care privately, reducing the public cost; (4) Evidence of medical insurance arrangements; (5) Medical evidence confirming the specific treatment or care needs and their likely cost — this can be used to demonstrate the cost is within normal ranges; (6) Statutory declarations from the sponsor and family confirming care arrangements; (7) Evidence of the impact on the Australian sponsor and family if the applicant cannot remain. The waiver is a holistic assessment and all these factors are weighed together.",
  },
  {
    question: "How long does the health waiver process take?",
    answer: "The health waiver process is not a separate standalone application — it is part of the visa application process. When the Department's health assessment team (or the MOC) determines that an applicant does not satisfy the health criterion, the Department sends a notice inviting the applicant to comment before a decision is made. The time between this notice and a final decision varies significantly. In complex cases, the process from health assessment referral to decision can take months to over a year. Processing times are not guaranteed and vary with case complexity and Department workload.",
  },
  {
    question: "If my PIC 4007 waiver is refused, can the decision be reviewed?",
    answer: "Yes. A refusal of a visa application on the basis that PIC 4007 is not satisfied (including that the waiver discretion was not exercised) may be reviewable at the Administrative Review Tribunal (ART) for visa classes that carry ART review rights. The ART can consider the waiver factors afresh and may exercise the discretion differently from the primary decision-maker. A strict time limit applies to applying to the ART after a refusal — the deadline is stated in the refusal letter. Legal and migration agent advice should be sought promptly after any health-related refusal.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Partner Visa Onshore (820/801)', desc: 'PIC 4007 applies to partner visas — process, evidence and requirements.', icon: 'heart', page: 'partner-visa-820-801', color: ACCENT },
  { title: 'ART Review', desc: 'Seeking merits review of a health-related visa refusal at the ART.', icon: 'scale', page: 'art-review', color: ACCENT },
  { title: 'PIC 4020', desc: 'The integrity criterion — false information and document fraud in visa applications.', icon: 'shield', page: 'pic-4020', color: ACCENT },
  { title: 'Visa Cancellation', desc: 'Health conditions can also lead to visa cancellation — understanding s116 grounds.', icon: 'alert', page: 'visa-cancellation', color: ACCENT },
]

export default function HealthWaiverPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['health-waiver'].title }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Reviews & Complex', url: 'https://www.nanakmigration.com.au/visa-refusal-review' },
          { name: 'Health Requirement Waiver (PIC 4007)', url: 'https://www.nanakmigration.com.au/health-waiver' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{ name: 'Health Waiver (PIC 4007) Advice', description: PAGE_META['health-waiver'].metaDescription, url: 'https://www.nanakmigration.com.au/health-waiver' }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Reviews & Complex', page: 'visa-refusal-review' },
          { label: 'Health Requirement Waiver' },
        ]}
      />

      <PageHero
        variant="standard"
        eyebrow="Reviews & Complex"
        eyebrowSub="Guides & Rules · Health Waiver"
        title={<>Health Requirement Waiver<br /><em style={{ fontStyle: 'italic', color: GOLD }}>PIC 4007 — When a Waiver Is Possible</em></>}
        deck="A health condition does not automatically end a visa application. For visa classes that use PIC 4007, a decision-maker has a discretion to waive the health requirement if the cost or prejudice involved is not 'undue' in the circumstances. Understanding the waiver test and what evidence helps is essential."
        shortAnswer={<>Australia requires visa applicants to meet a health criterion. For most skilled visas, the criterion is <strong style={{ color: NAVY }}>PIC 4005</strong> — and there is <strong style={{ color: NAVY }}>no waiver available</strong>. For <strong style={{ color: NAVY }}>partner visas, child visas, and some employer-sponsored and regional visas</strong>, the criterion is <strong style={{ color: NAVY }}>PIC 4007</strong>, which includes a <strong style={{ color: NAVY }}>waiver discretion</strong>. The waiver test focuses on whether the health-related cost or prejudice to the Australian community would be <strong style={{ color: NAVY }}>undue</strong> having regard to the applicant's likely economic and social contributions, family support arrangements, and broader circumstances. The <strong style={{ color: NAVY }}>Medical Officer of the Commonwealth opinion</strong> on the health condition itself cannot be disputed — but the waiver factors can be argued with evidence. Nanak Migration Group (MARN 2619467) can assist with health waiver submissions — no outcome can be guaranteed.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'ART Review guide →', page: 'art-review' }}
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
          <SectionHeading kicker="The health criterion" title="Health Requirements in Australian Visa Applications" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 20 }}>
            Australian visa applicants must generally satisfy a health criterion as part of the visa requirements. The health criterion exists to protect public health and to ensure that the health-related costs and demands on Australian services are managed appropriately. The assessment is conducted by health officers approved by the Department of Home Affairs, whose opinion is provided to a Medical Officer of the Commonwealth (MOC).
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            There are two main health criteria in the <em>Migration Regulations 1994</em>: PIC 4005 and PIC 4007. The key difference is that PIC 4007 includes a waiver discretion — the decision-maker can waive the health requirement in defined circumstances — while PIC 4005 does not. Identifying which criterion applies to your visa class is the first step.
          </p>
          <Callout variant="warning" panel={true} title="Health assessments are conducted with respect and without discrimination">
            The health criterion is applied to all visa applicants and their family members regardless of the nature of the health condition. The assessment is a structured administrative process, not a personal judgment. Submissions in response to a health issue should be factual, evidence-based, and focused on the waiver factors — not on challenging the medical process or making emotional appeals.
          </Callout>
        </div>
      </section>

      {/* ── PIC 4005 vs 4007 ─────────────────────────────────────── */}
      <section id="pic4005-vs-4007" style={{ background: '#f8fafd', padding: '64px 32px 56px', borderTop: '1px solid #e8edf5', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Which criterion applies" title="PIC 4005 vs PIC 4007 — The Critical Difference" />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            <div style={{ background: '#fff', border: `2px solid ${ACCENT}`, borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ padding: '16px 22px', background: ACCENT }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>PIC 4005 — No waiver available</div>
              </div>
              <div style={{ padding: 22 }}>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, marginBottom: 14 }}>The standard health criterion. If PIC 4005 applies and the applicant does not meet it, the visa cannot be granted — there is no discretion to waive.</p>
                <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 8 }}>Visa classes that typically use PIC 4005</div>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8 }}>
                  {['Skilled Independent (189)', 'Skilled Nominated (190)', 'Skilled Work Regional (491)', 'Temporary Graduate (485)', 'Student Visa (500)', 'Visitor Visa (600)', 'Business Innovation (188)'].map(v => (
                    <span key={v} style={{ fontSize: 12, color: '#374151', background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 6, padding: '3px 8px' }}>{v}</span>
                  ))}
                </div>
                <div style={{ marginTop: 14, fontSize: 12, color: '#9ca3af' }}>Confirm which PIC applies to your specific visa class on the DoHA website.</div>
              </div>
            </div>

            <div style={{ background: '#fff', border: `2px solid #16a34a`, borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ padding: '16px 22px', background: '#16a34a' }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>PIC 4007 — Waiver available</div>
              </div>
              <div style={{ padding: 22 }}>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, marginBottom: 14 }}>A modified health criterion with a waiver discretion. If PIC 4007 applies and the applicant does not meet the health criterion, the decision-maker may still grant the visa if waiver conditions are met.</p>
                <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 8 }}>Visa classes that typically use PIC 4007</div>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8 }}>
                  {['Partner Visa (820/801)', 'Partner Visa (309/100)', 'Child Visa (101)', 'Child Visa (802)', 'Regional Employer Sponsored (494)', 'Protection Visa (866)', 'Carer Visa (116/836)'].map(v => (
                    <span key={v} style={{ fontSize: 12, color: '#374151', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 6, padding: '3px 8px' }}>{v}</span>
                  ))}
                </div>
                <div style={{ marginTop: 14, fontSize: 12, color: '#9ca3af' }}>Confirm which PIC applies to your specific visa class on the DoHA website.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The waiver test ──────────────────────────────────────── */}
      <section id="waiver-test" style={{ padding: '64px 32px 56px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="The legal test" title="The PIC 4007 Waiver Test — Undue Cost and Undue Prejudice" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The PIC 4007 waiver allows the decision-maker to grant the visa even where the health criterion is not met, if satisfied that granting the visa would not result in undue cost or undue prejudice. "Undue" means disproportionate in the circumstances — not simply that there is some cost or prejudice, but that it rises to a level that is unreasonable given all the relevant factors.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, marginBottom: 32 }}>
            {[
              {
                num: '01',
                title: 'Undue cost to the Australian community',
                body: 'The decision-maker weighs the likely health and community services costs related to the applicant\'s condition against the likely economic and social benefits the applicant would bring. A highly skilled applicant with significant earning potential, family support to fund treatment, and a condition that does not require intensive public resources may well not represent undue cost. The assessment is forward-looking and considers the expected period of residence.',
              },
              {
                num: '02',
                title: 'Undue prejudice to access to health care or community services',
                body: 'This limb is concerned with whether the applicant\'s health needs would compete with and crowd out access to scarce health or community services for other Australian residents. It is most relevant where the applicant\'s condition would require access to services that are genuinely limited in supply. In many health waiver cases, the cost limb is the primary focus.',
              },
              {
                num: '03',
                title: 'Relevant factors the decision-maker considers',
                body: "The regulations direct the decision-maker to consider specific factors including: the costs that would be incurred; the extent to which the community would benefit from the grant; the applicant's likely economic contribution; the degree of family support available; and the impact on the Australian sponsor or family member. These factors create the structure for a well-organised waiver submission.",
              },
            ].map(step => (
              <div key={step.num} style={{ borderLeft: `4px solid ${ACCENT}`, background: '#f8fafd', padding: '20px 24px', borderRadius: '0 12px 12px 0' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: ACCENT, letterSpacing: '0.1em' }}>{step.num}</span>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>{step.title}</div>
                </div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>

          <Callout variant="warning" panel={true} title="You cannot dispute the Medical Officer's opinion — focus on the waiver factors">
            The MOC's opinion that an applicant does not satisfy the health criterion is a medical finding that the decision-maker accepts. Submissions that argue the medical opinion is wrong are unlikely to assist and may waste the applicant's opportunity to present waiver evidence. The productive approach is to focus entirely on the waiver factors: economic contribution, family support, private funding of treatment, and the circumstances that make the cost not undue.
          </Callout>
        </div>
      </section>

      {/* ── Process and timeframes ────────────────────────────────── */}
      <section id="process" style={{ background: '#f8fafd', padding: '64px 32px 56px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What to expect" title="Process and Timeframes After a Health Issue Is Raised" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            When the Department identifies a health concern in a visa application, the following stages typically follow. Timeframes are indicative and vary significantly by case complexity.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {[
              { num: '01', title: 'Health assessment referral', body: 'The Department refers the applicant (or family member) for a medical examination by an approved panel doctor. The panel doctor\'s report is provided to the MOC.' },
              { num: '02', title: 'MOC opinion', body: 'The MOC reviews the panel doctor\'s report and forms an opinion on whether the applicant satisfies the health criterion. This opinion is provided to the case officer.' },
              { num: '03', title: 'Natural justice notice (PIC 4007 cases)', body: 'For visa classes where the health criterion is PIC 4007, the Department sends a notice (sometimes called a "health limitation notice" or "natural justice letter") inviting the applicant to respond before a decision is made. The response period is limited — typically 28 days — and is critical. This is the opportunity to present the waiver submission.' },
              { num: '04', title: 'Waiver submission', body: 'The applicant prepares and lodges a response addressing the waiver factors — economic contribution, family support, private treatment funding, and other relevant circumstances. The submission should be comprehensive and supported by evidence.' },
              { num: '05', title: 'Decision', body: 'The decision-maker considers the MOC opinion and the waiver submission and decides whether to grant or refuse the visa. If the visa is refused, the refusal letter will state the reasons and the review rights available.' },
            ].map(step => (
              <div key={step.num} style={{ borderLeft: `4px solid ${ACCENT}`, background: '#fff', padding: '20px 24px', marginBottom: 0, borderRadius: '0 12px 12px 0' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: ACCENT, letterSpacing: '0.1em' }}>{step.num}</span>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>{step.title}</div>
                </div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Evidence ─────────────────────────────────────────────── */}
      <section id="evidence" style={{ padding: '64px 32px 56px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Building the case" title="Evidence That Helps a PIC 4007 Waiver Submission" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {[
              {
                title: 'Economic contribution',
                points: [
                  'Employment history — payslips, employment contract, employer reference',
                  'Professional qualifications and skills — certificates, transcripts',
                  'Tax records showing prior contributions if applicable',
                  'Evidence of a job offer or employment prospects in Australia',
                  'Business ownership or investment history',
                ],
              },
              {
                title: 'Family support and private funding',
                points: [
                  'Statutory declarations from the sponsor confirming commitment to fund treatment costs',
                  'Bank records demonstrating financial capacity to meet treatment costs privately',
                  'Evidence of private health insurance arrangements',
                  'Letters from family confirming care arrangements',
                  'Evidence that the applicant would not rely on publicly funded residential care',
                ],
              },
              {
                title: 'Medical evidence and cost context',
                points: [
                  'Treating practitioner\'s report confirming the specific treatment or medication needed',
                  'Evidence of the estimated cost of treatment — showing it is within ranges the community regularly meets',
                  'Evidence that treatment will be accessed privately, not through the public system',
                  'Evidence of the applicant\'s current functional capacity and prognosis',
                ],
              },
              {
                title: 'Impact on the Australian sponsor and family',
                points: [
                  'Evidence of the sponsor\'s reliance on the applicant — caring responsibilities, family role',
                  'Evidence of the impact on any dependent children in Australia',
                  'Letters from the sponsor\'s employer, doctor, or treating practitioner where relevant',
                  'Evidence of the length and depth of the relationship',
                ],
              },
            ].map(card => (
              <div key={card.title} style={{ background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 12, padding: 20 }}>
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

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: '64px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Health Waiver Questions Answered" />
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
        title="Facing a health issue in your visa application? Get expert advice."
        body="Nanak Migration Group (MARN 2619467) can advise on whether your visa class uses PIC 4007 and help you prepare a comprehensive waiver submission. No outcome can be guaranteed — but the quality of the evidence and submission makes a difference."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
