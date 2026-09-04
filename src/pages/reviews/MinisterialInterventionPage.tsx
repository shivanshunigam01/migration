import React from 'react'
import { GOLD, NAVY } from '@/theme'
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

const CAT_COMPLEX = '#dc2626'
const ACCENT = CAT_COMPLEX
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'honest-assessment', label: 'Realistic expectations' },
  { id: 'guidelines', label: 'Ministerial guidelines' },
  { id: 'what-it-contains', label: 'What a request contains' },
  { id: 'process', label: 'Process' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'scale',
    value: 'Not a review',
    label: 'Ministerial intervention is not a review right — it is a discretionary power',
    note: 'Unlike an ART review, Ministerial intervention cannot be compelled. The Minister has the power but cannot be required to exercise it. This is an important distinction that affects realistic expectations.',
  },
  {
    icon: 'alert',
    value: 'Very few succeed',
    label: 'Only a small fraction of requests result in intervention',
    note: 'Each year, thousands of requests are made and only a small number result in the Minister exercising the power. A request is genuinely a last resort — not a routine appeal avenue.',
  },
  {
    icon: 'shield',
    value: 'No bridging visa',
    label: 'Lodging a request does not normally grant lawful status',
    note: 'Making a request for Ministerial intervention does not give the applicant a bridging visa or any right to remain in Australia. A person without a valid visa who lodges a request may still be unlawful and subject to detention and removal.',
  },
  {
    icon: 'calendar',
    value: 'Last resort',
    label: 'All other review avenues should be exhausted first',
    note: 'Ministerial intervention is designed for cases where all other avenues — ART review, judicial review — have been exhausted. It is not an alternative to those processes but a final avenue after they conclude.',
  },
]

const STEPS: TimelineStep[] = [
  {
    code: '01',
    title: 'Exhaust all other review avenues first',
    desc: "Ministerial intervention is a last resort. Before lodging a request, all available review avenues should be pursued — ART merits review, judicial review in the Federal Circuit and Family Court or Federal Court, and any other statutory right of review. A person with a pending review should focus on that review rather than directing energy toward Ministerial intervention at this stage.",
  },
  {
    code: '02',
    title: 'Assess whether your circumstances fall within the guidelines',
    desc: "The Minister has issued public interest guidelines describing the types of cases they are prepared to consider. These include compelling compassionate circumstances, Australian family ties, and exceptional economic, scientific, or cultural benefit to Australia. Assess whether the specific circumstances clearly fall within one or more of these categories — a general sense of unfairness is not sufficient.",
  },
  {
    code: '03',
    title: 'Prepare a clear, factual, concise request',
    desc: "The request must clearly identify the basis for seeking intervention — compassionate circumstances, family ties, or exceptional benefit — and provide supporting documentary evidence. Requests that are excessively long, unfocused, or repeat arguments already rejected by the tribunal are less likely to be considered. Quality and relevance matter more than volume.",
  },
  {
    code: '04',
    title: 'Address current lawful status',
    desc: "Before lodging, confirm whether the applicant has lawful status in Australia — a valid visa or a bridging visa. A Ministerial intervention request alone does not confer lawful status. If the person is or will become unlawful, take steps to address that separately — a bridging visa application (if available) or other measures — while the request is being prepared.",
  },
  {
    code: '05',
    title: 'Lodge the request with the Department of Home Affairs',
    desc: "Submit the Ministerial intervention request to the Department's Ministerial Intervention Unit along with all supporting documents. Requests are submitted under section 351 (visa refusal/cancellation) or section 417 (after an ART decision) depending on the circumstances. Confirm the current lodgement process and address on the Department of Home Affairs website.",
  },
  {
    code: '06',
    title: 'Await consideration — and prepare realistic expectations',
    desc: "The Department's Ministerial Intervention Unit reviews requests and recommends which cases are brought to the Minister's attention. The Minister then decides whether to exercise the power. There is no fixed timeframe and no right of follow-up. Repeat requests on the same grounds are generally not considered. Maintain focus on any remaining lawful options during this period.",
  },
]

const FAQ: FaqItem[] = [
  {
    question: "What is Ministerial intervention and how does it differ from an ART review?",
    answer: "An ART (Administrative Review Tribunal) review is a statutory right — if eligible, a person has a legal entitlement to apply and have their case reviewed on its merits. Ministerial intervention under sections 351 and 417 of the Migration Act is different: it is a discretionary power. The Minister may intervene, but cannot be compelled to do so, even if a request is made. The Minister is not required to consider every request, is not obliged to give reasons for deciding not to intervene, and cannot be taken to court for refusing to exercise the power. This is fundamentally different from a review right.",
  },
  {
    question: "What are the 'unique and exceptional circumstances' guidelines?",
    answer: "The Minister for Immigration has issued public interest guidelines describing the kinds of cases in which they are prepared to consider exercising the Ministerial intervention power. The guidelines typically cover: (1) compelling compassionate circumstances that were not or could not have been put before the tribunal; (2) significant Australian family ties (particularly involving Australian citizen children or other immediate family); and (3) cases where granting a visa would result in exceptional economic, scientific, cultural, or other benefit to Australia. The guidelines are not exhaustive, and they are subject to change by each new Minister. Confirm current guidelines on the Department of Home Affairs website.",
  },
  {
    question: "Does lodging a Ministerial intervention request give me a right to stay in Australia?",
    answer: "No. Lodging a Ministerial intervention request does not give the applicant a bridging visa, a right to remain in Australia, or any other form of lawful status. A person who is unlawful at the time of lodging the request remains unlawful. A person who becomes unlawful after lodging the request also does not receive automatic lawful status. This means that a person without a valid visa who relies solely on a Ministerial intervention request remains at risk of detention and removal. If there is a risk of becoming unlawful, address it separately — seek advice on whether a bridging visa application is available.",
  },
  {
    question: "Can I make more than one request?",
    answer: "Generally, repeat requests on the same or substantially similar grounds are not considered. If an initial request is not taken up, lodging a substantially identical request is unlikely to produce a different result. A further request may be considered only where there are genuinely new and significant circumstances that were not available at the time of the initial request. Before lodging a repeat request, seek advice on whether new circumstances genuinely justify it.",
  },
  {
    question: "What section of the Migration Act covers Ministerial intervention?",
    answer: "There are two main provisions: section 351 and section 417. Section 351 applies where the Minister is considering a case after a decision to refuse or cancel a visa (including cases that have not yet gone to the ART). Section 417 applies where the case has been decided by the ART (Refugee Review — Migration & Refugee Division) and the tribunal has affirmed a refusal. Different provisions apply to different case types. The Department of Home Affairs website provides guidance on which provision applies and how to make a request.",
  },
  {
    question: "Are there circumstances where Ministerial intervention cannot help?",
    answer: "Yes. Ministerial intervention is not available in all cases, and even where it is available, the Minister cannot override all legal constraints. In particular: the Minister must still act consistently with Australia's international obligations; a person who has been removed from Australia cannot be the subject of an intervention that requires them to remain; and some mandatory cancellations (such as under section 501) are subject to separate procedures. Ministerial intervention cannot undo a character bar in some circumstances. Seek advice on whether intervention is even a legally available option in the specific circumstances before investing effort in preparing a request.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'ART Review',
    desc: 'Apply to the Administrative Review Tribunal for a merits review of a refusal or cancellation.',
    icon: 'scale',
    page: 'art-review',
    color: ACCENT,
  },
  {
    title: 'Visa Cancellation',
    desc: 'Cancellation powers (s116, s501, s109), the NOICC process, and how to respond.',
    icon: 'alert',
    page: 'visa-cancellation',
    color: ACCENT,
  },
  {
    title: 'Section 48 Bar',
    desc: 'Barred from most onshore applications — exempt visas, strategies, and waiver options.',
    icon: 'shield',
    page: 'section-48-bar',
    color: ACCENT,
  },
  {
    title: 'Visa Refusal and Review',
    desc: 'What to do when a visa is refused or cancelled — review options and realistic expectations.',
    icon: 'home',
    page: 'visa-refusal-review',
    color: ACCENT,
  },
]

export default function MinisterialInterventionPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => {
    document.title = PAGE_META['ministerial-intervention'].title
  }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Reviews & Complex', url: 'https://www.nanakmigration.com.au/visa-refusal-review' },
          { name: 'Ministerial Intervention', url: 'https://www.nanakmigration.com.au/ministerial-intervention' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Ministerial Intervention Sections 351 and 417',
          description: PAGE_META['ministerial-intervention'].metaDescription,
          url: 'https://www.nanakmigration.com.au/ministerial-intervention',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Reviews & Complex', page: 'visa-refusal-review' },
          { label: 'Ministerial Intervention' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Reviews & Complex"
        eyebrowSub="Sections 351 & 417"
        title={<>Ministerial Intervention<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Sections 351 and 417 Requests</em></>}
        deck="A last-resort mechanism asking the Minister to intervene after a tribunal decision — not a review right, cannot be compelled, only a small fraction succeed, and lodging a request does not normally give you bridging visa status."
        shortAnswer={<>Ministerial intervention under sections 351 and 417 of the Migration Act allows a person to ask the Minister to intervene after a tribunal (ART) decision. It is <strong style={{ color: NAVY }}>not a review right</strong> — the Minister cannot be compelled to consider the request and cannot be challenged for declining to intervene. Only a <strong style={{ color: NAVY }}>small fraction</strong> of requests result in intervention. <strong style={{ color: NAVY }}>Lodging a request does not give bridging visa status or any right to remain in Australia.</strong> Requests should be based on unique and exceptional circumstances — compelling compassion, Australian family ties, or exceptional benefit to Australia — and all other review avenues should have been exhausted first. Nanak Migration Group (MARN 2619467) can assess whether your circumstances justify a request and help prepare it. Confirm all current details on the Department of Home Affairs website.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← Reviews & Complex', page: 'visa-refusal-review' }}
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
            <a key={sec.id} href={`#${sec.id}`}
              style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap' as const, borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}
            >{sec.label}</a>
          ))}
        </div>
      </div>

      <KeyFactsStrip facts={FACTS} accent={ACCENT} />

      {/* ── OVERVIEW ───────────────────────────────────────────── */}
      <section id="overview" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What it is" title="Understanding Ministerial Intervention" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 24 }}>
            The Migration Act gives the Minister for Immigration a personal, non-compellable power to intervene in certain cases where a tribunal has made a decision that the Minister considers warrants a different outcome in the public interest. This is not a right of appeal or review — it is a discretionary power that sits outside the normal review hierarchy.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The two main provisions are section 351 (which applies in a broader range of cases including some that have not yet gone to tribunal) and section 417 (which applies after a tribunal decision in a protection-related case). Each provision has its own rules about who can request intervention and when.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div style={{ background: '#fafbfe', border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: ACCENT, marginBottom: 12 }}>Section 351</div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>Applies to cases involving a decision of the ART (previously Migration Review Tribunal) on a non-protection visa refusal or cancellation. The Minister may substitute a more favourable decision if satisfied it is in the public interest.</p>
            </div>
            <div style={{ background: '#fafbfe', border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: ACCENT, marginBottom: 12 }}>Section 417</div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>Applies to cases involving a decision of the ART (previously Refugee Review Tribunal) on a protection visa application. The Minister may substitute a more favourable decision if satisfied it is in the public interest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HONEST ASSESSMENT ──────────────────────────────────── */}
      <section id="honest-assessment" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Realistic expectations" title="Honest Assessment — What Ministerial Intervention Is Not" accent={ACCENT} />

          <div style={{ borderLeft: '4px solid #dc2626', background: '#fef2f2', padding: '20px 24px', borderRadius: '0 10px 10px 0', marginBottom: 32 }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: '#991b1b', lineHeight: 1.75, margin: 0 }}>
              Ministerial intervention is not a review right, not a routine appeal mechanism, and not a pathway available to people who simply feel their case was decided incorrectly. It is reserved for genuinely exceptional cases. The overwhelming majority of requests do not result in intervention. Setting realistic expectations from the outset is essential.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {[
              {
                icon: 'alert',
                title: 'The Minister cannot be compelled',
                body: "The intervention power is personal and non-compellable. Courts have confirmed that the Minister is not required to consider any particular request, is not required to give reasons for declining, and cannot be judicially reviewed for the decision not to intervene. This is fundamentally different from a review right.",
              },
              {
                icon: 'alert',
                title: 'Lodging a request does not give lawful status',
                body: "A Ministerial intervention request is not a visa application and does not trigger a bridging visa. A person who is unlawful when they lodge a request remains unlawful. This is a critical distinction — a person in this situation must address their lawful status separately, as a request alone will not protect them from removal.",
              },
              {
                icon: 'alert',
                title: "Repetition does not improve prospects",
                body: "Repeat requests on the same grounds are generally not considered. The process is not designed to be used iteratively — making the same request multiple times in the hope of a different outcome is unlikely to succeed and may waste time that could be spent on other options.",
              },
              {
                icon: 'check',
                title: 'When it can genuinely help',
                body: "Cases with genuinely compelling and exceptional circumstances that were not available to the tribunal — a significant change in family circumstances, evidence of exceptional cultural or economic contribution, or a situation not contemplated by the standard visa framework — are more likely to attract consideration. Preparation matters: a well-documented request that clearly articulates the exceptional circumstances has a better chance than a general submission.",
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, background: '#ffffff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: i === 3 ? '#f0fdf4' : '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={item.icon as any} size={17} color={i === 3 ? '#16a34a' : '#dc2626'} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUIDELINES ─────────────────────────────────────────── */}
      <section id="guidelines" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="When the Minister may consider" title="The Public Interest Guidelines" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 28 }}>
            The Minister has issued public guidelines describing the categories of cases they are prepared to consider. These are not exhaustive and are subject to change by each new Minister. The broad categories typically include:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, marginBottom: 32 }}>
            {[
              {
                title: 'Compelling compassionate circumstances',
                body: "Circumstances that were not considered by the tribunal (because they arose after the decision, or because they could not reasonably have been raised at the time). Examples might include a serious medical diagnosis affecting the applicant or an immediate family member, or a humanitarian situation that has materially changed. Circumstances that were considered and rejected by the tribunal are unlikely to succeed on this ground alone.",
              },
              {
                title: 'Australian family ties',
                body: "Significant ties to Australia — particularly where the applicant has Australian citizen or permanent resident children, or where removal would cause exceptional hardship to Australian family members. The threshold is high: ordinary family ties that exist in many cases are not sufficient. The family connection must be genuinely exceptional and the hardship must be severe.",
              },
              {
                title: 'Exceptional economic, scientific, cultural, or other benefit to Australia',
                body: "Cases where the applicant has demonstrated an exceptional contribution to Australia — for example, recognised achievement in science, the arts, academia, sport, or business — that would be lost if the applicant were required to leave. The contribution must be genuinely exceptional, not merely positive.",
              },
            ].map((item, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fafbfe', borderRadius: '0 10px 10px 0', padding: '20px 24px' }}>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <Callout variant="note" panel={true} title="Confirm current Ministerial guidelines on the Department of Home Affairs website">
            The public interest guidelines are issued by the Minister personally and may change when a new Minister is appointed or when policy priorities change. Always confirm the current guidelines on the Department of Home Affairs website before preparing a request.
          </Callout>
        </div>
      </section>

      {/* ── WHAT IT CONTAINS ───────────────────────────────────── */}
      <section id="what-it-contains" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Preparation" title="What a Well-Prepared Request Contains" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 28 }}>
            Quality and focus matter far more than length. A concise, well-documented request that clearly identifies the exceptional circumstance and supports it with evidence is more effective than a lengthy document that repeats arguments already rejected by the tribunal.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
            {[
              { icon: 'clipboard', title: 'Clear identification of the ground', body: "Which guideline category the request falls under — compassionate circumstances, Australian family ties, or exceptional benefit — clearly stated at the outset." },
              { icon: 'shield', title: 'Only new or exceptional circumstances', body: "Circumstances that were not raised before the tribunal, or that have materially changed since the tribunal decision. Do not repeat arguments the tribunal has already considered and rejected." },
              { icon: 'user', title: 'Documentary evidence', body: "Medical reports, statutory declarations, letters from Australian family members, evidence of community ties, evidence of exceptional contribution — whatever is relevant to the specific ground." },
              { icon: 'home', title: 'Impact statement', body: "A factual statement of what the consequences of not intervening would be — for the applicant and for Australian family members or the community — without exaggeration." },
              { icon: 'calendar', title: 'Timeline of the case', body: "A brief chronology of the visa application, any review proceedings, and the current situation — to orient the reader without requiring them to search through decision records." },
              { icon: 'check', title: 'Lawful status confirmation', body: "Confirmation of the applicant's current lawful status in Australia, or an explanation of their situation if they are unlawful. This is relevant to how the request is assessed." },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: '#ffffff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: `${ACCENT}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={item.icon as any} size={16} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: '#4b5563', lineHeight: 1.65 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section id="process" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Steps" title="The Process" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #eef0f6` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── RELATED ────────────────────────────────────────────── */}
      <section id="related" style={{ background: '#fafbfe', padding: '80px 32px', borderTop: `1px solid #eef0f6` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also on this site" title="Related pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Considering a Ministerial intervention request?"
        body="Preparation and honest assessment of prospects matter. Nanak Migration Group (MARN 2619467) can review your circumstances, advise whether a request is genuinely warranted, and help prepare a focused, well-documented submission."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
