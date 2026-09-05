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
  { id: 'what-counts', label: 'What counts as adverse information' },
  { id: 'timeframes', label: 'Response timeframes' },
  { id: 'how-to-respond', label: 'How to respond well' },
  { id: 's57-signals', label: 'What a s57 letter can signal' },
  { id: 'getting-help', label: 'Getting professional help' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'scale',
    value: 'Section 57',
    label: 'Department must put adverse information to applicant before refusing on it',
    note: 'Section 57 of the Migration Act requires the Department to give an applicant an opportunity to comment on adverse information that is credible, relevant, and significant — and that the Department would rely on in refusing the application.',
  },
  {
    icon: 'calendar',
    value: 'Strict deadline',
    label: 'The response window stated in the letter is typically not extendable',
    note: 'The timeframe given in a section 57 natural justice letter is set by regulation and is typically 28 days. Missing the deadline is not a formality — a response lodged after the deadline may not be considered, and the Department may proceed to refuse.',
  },
  {
    icon: 'alert',
    value: 'PIC 4020 risk',
    label: 'A section 57 letter often signals potential PIC 4020 findings or cancellation action',
    note: 'The most serious section 57 letters relate to documents or information the Department considers false or misleading — often raising PIC 4020 concerns. A positive PIC 4020 finding can result in refusal and a 10-year exclusion period.',
  },
  {
    icon: 'shield',
    value: 'Respond fully',
    label: 'A comprehensive, evidence-based response is critical — assertion alone is insufficient',
    note: 'The response to a section 57 letter must address every item of adverse information with specific evidence. A response that simply denies or asserts without corroborating evidence is unlikely to be sufficient to overcome the adverse information.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: "What is a section 57 natural justice letter?",
    answer: "Section 57 of the Migration Act requires the Department of Home Affairs to give a visa applicant an opportunity to respond to 'adverse information' before refusing the application on the basis of that information. The letter sets out the adverse information and gives the applicant a specified time to provide a response. The purpose is to give the applicant the opportunity to explain, challenge, or correct the information. The Department cannot rely on adverse information in a refusal unless it has first invited a response in accordance with section 57 and any prescribed procedures.",
  },
  {
    question: "What information counts as 'adverse information' for section 57 purposes?",
    answer: "The Migration Act and Regulations define adverse information as information that: (a) the decision-maker considers would be the reason, or a part of the reason, for refusing the application; (b) is credible, relevant, and significant in the context of the application. Adverse information commonly includes: discrepancies between information in the current application and information in a previous application or visa grant; results of document verification (DVR) that cast doubt on the authenticity of a document; allegations or tip-offs received about the applicant; data-matching results that conflict with claims made; and inconsistencies between the applicant's interview answers and other information on file. Not all concerning information is adverse information — only information that meets the credible, relevant and significant threshold.",
  },
  {
    question: "Can I ask for more time to respond to a section 57 letter?",
    answer: "Section 57 letters set a timeframe prescribed by regulation — typically 28 days. In limited circumstances the Department may grant an extension, but extensions are not a right. If you need additional time you should contact the Department promptly, explain the reason for the request, and request an extension in writing. Do not assume an extension will be granted. If the Department does not grant the extension, you must lodge your response by the original deadline. Missing the deadline can be fatal to the application — proceed as if no extension will be granted while simultaneously pursuing the request.",
  },
  {
    question: "Does a section 57 letter always mean my visa will be refused?",
    answer: "Not necessarily. A section 57 letter means the Department has identified adverse information that it considers relevant and potentially sufficient to support a refusal. It is a procedural step to ensure procedural fairness — it is not a decision. A thorough, well-evidenced response that genuinely addresses the adverse information may cause the decision-maker to be satisfied that the information does not warrant refusal, or that it is outweighed by other considerations. However, if the adverse information is serious — particularly allegations of document fraud or misrepresentation — the risk of refusal is real. Act urgently and seek professional advice.",
  },
  {
    question: "If the Department found a document I submitted is not genuine, what are my options?",
    answer: "If a document verification result (DVR) indicates a document you submitted is not genuine, the section 57 letter will typically invite you to respond. Your response must specifically address the DVR. Options may include: providing further evidence about how you obtained the document and its authenticity; providing an alternative document that achieves the same purpose if the original cannot be verified; or explaining circumstances that may account for the DVR result. If the document is not genuine, you must not maintain a false claim — deliberately maintaining a false claim can result in a finding under PIC 4020 that carries a 10-year exclusion. This is a situation where registered migration agent advice is urgently required.",
  },
  {
    question: "Can the ART review a section 57 natural justice finding?",
    answer: "The ART can review a decision to refuse a visa on the merits, including a refusal that relied on adverse information that was the subject of a section 57 letter. The ART process is not a review of whether section 57 was correctly followed — it is a merits review of the decision. The ART can consider all the evidence, including a response to section 57 that may not have been fully considered at the primary stage. ART applications must be lodged within strict time limits. If your visa is refused, seek advice immediately about ART review.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'PIC 4020', desc: 'The integrity criterion — how misrepresentation findings arise and the 10-year exclusion.', icon: 'shield', page: 'pic-4020', color: ACCENT },
  { title: 'Visa Cancellation', desc: 'Cancellation grounds and how to respond to a notice of intention to consider cancellation.', icon: 'alert', page: 'visa-cancellation', color: ACCENT },
  { title: 'ART Review', desc: 'Challenging a refusal or cancellation decision after a s57 finding.', icon: 'scale', page: 'art-review', color: ACCENT },
  { title: 'Re-entry Bans', desc: 'Exclusion periods that can follow a refusal or cancellation — counting and waiver.', icon: 'shield', page: 're-entry-bans', color: ACCENT },
]

export default function NaturalJusticeS57Page({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Reviews & Complex', url: 'https://www.nanakmigration.com.au/visa-refusal-review' },
          { name: 'Natural Justice and Section 57 Letters', url: 'https://www.nanakmigration.com.au/natural-justice-s57' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{ name: 'Natural Justice and Section 57 Advice', description: PAGE_META['natural-justice-s57'].metaDescription, url: 'https://www.nanakmigration.com.au/natural-justice-s57' }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Reviews & Complex', page: 'visa-refusal-review' },
          { label: 'Natural Justice & Section 57' },
        ]}
      />

      <PageHero
        variant="standard"
        eyebrow="Reviews & Complex"
        eyebrowSub="Guides & Rules · Natural Justice"
        title={<>Natural Justice and Section 57 Letters<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Your right to respond before a refusal</em></>}
        deck="A section 57 natural justice letter means the Department has found adverse information about your application and must give you the opportunity to respond before refusing. Acting immediately — with a thorough, evidence-based response — is critical."
        shortAnswer={<><strong style={{ color: NAVY }}>Section 57</strong> of the Migration Act requires the Department to put adverse information to an applicant before relying on it in a refusal — this is the procedural fairness obligation. Adverse information includes <strong style={{ color: NAVY }}>document verification failures, inconsistent claims, data-matching discrepancies, and tip-offs</strong>. The response deadline is strict — typically <strong style={{ color: NAVY }}>28 days</strong> — and missing it can mean the Department proceeds to refuse without considering your explanation. A section 57 letter commonly signals a <strong style={{ color: NAVY }}>PIC 4020 (misrepresentation)</strong> or cancellation risk. Respond to every item of adverse information with specific evidence. Nanak Migration Group (MARN 2619467) can help you prepare a comprehensive response.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request urgent advice', page: 'home' }}
        secondaryCta={{ label: 'PIC 4020 explained →', page: 'pic-4020' }}
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
          <SectionHeading kicker="Your right to respond" title="What Section 57 Requires and Why It Matters" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 20 }}>
            Section 57 of the <em>Migration Act 1958</em> gives legislative form to the common-law principle of procedural fairness (natural justice). It requires the Department of Home Affairs to give an applicant the opportunity to comment on adverse information before that information is used as the basis for refusing the application.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            Receiving a section 57 letter is a serious event — it means the Department has found something concerning enough to consider refusing the application, and it wants to hear from you before it does so. The letter is an opportunity, but it carries a strict deadline and requires a specific, evidence-based response.
          </p>
          <Callout variant="danger" panel={true} title="Act immediately — do not wait and do not miss the deadline">
            The timeframe in a section 57 letter is prescribed by regulation and is typically 28 days. If the Department does not receive your response by the stated deadline, it is entitled to proceed to determine the application without your explanation. In most cases, a refusal that follows will be based on the adverse information unchallenged. Do not delay in seeking advice.
          </Callout>
        </div>
      </section>

      {/* ── What counts as adverse information ───────────────────── */}
      <section id="what-counts" style={{ background: '#f8fafd', padding: '64px 32px 56px', borderTop: '1px solid #e8edf5', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Scope of the obligation" title="What Counts as Adverse Information Under Section 57" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 24 }}>
            Not all unfavourable facts are adverse information for section 57 purposes. The obligation applies to information that is <strong>credible</strong>, <strong>relevant</strong>, and <strong>significant</strong> in the context of the application — and that the decision-maker would rely on in refusing.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              {
                title: 'Document verification results (DVR)',
                body: 'Where the Department has verified a document with the issuing authority and received a response that the document does not appear genuine or cannot be verified. DVR results are a common and serious form of adverse information.',
              },
              {
                title: 'Inconsistent or contradictory claims',
                body: "Where information in the current application differs from information in a previous application, visa grant, or departmental record — for example, a different date of birth, different marital status, or inconsistent employment history.",
              },
              {
                title: 'Data-matching discrepancies',
                body: "Where information obtained from government databases (tax records, social security, Medicare, court records) conflicts with claims made in the application — for example, claiming to reside in a relationship when records show otherwise.",
              },
              {
                title: 'Allegations or tip-offs',
                body: "Where a third party has provided information to the Department alleging something adverse about the applicant — for example, that a relationship is not genuine, or that the applicant has worked without authorisation.",
              },
              {
                title: 'Adverse assessment from another agency',
                body: 'Where ASIO or another government agency has assessed the applicant as a risk to Australian national security or interests. These matters are complex and require specialist advice.',
              },
              {
                title: 'Interview inconsistencies',
                body: "Where the applicant's answers at a departmental interview are inconsistent with each other or with the documents on file. Interview records may be relied upon as adverse information in the refusal.",
              },
            ].map(card => (
              <div key={card.title} style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: '18px 22px' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: ACCENT, marginBottom: 8 }}>{card.title}</div>
                <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Response timeframes ───────────────────────────────────── */}
      <section id="timeframes" style={{ padding: '64px 32px 56px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Deadlines matter" title="Response Timeframes and Why Missing Them Is Usually Fatal" />
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 24 }}>
            <div>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>
                The timeframe for responding to a section 57 natural justice letter is set by the <em>Migration Regulations 1994</em>. The prescribed period is typically <strong>28 days</strong> from the date the letter is taken to have been received. The letter may also specify a different period where a regulation provides for a longer or shorter timeframe.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12, marginBottom: 20 }}>
                {[
                  { label: 'When does the clock start?', body: "The period runs from the date the applicant is taken to have received the letter. Regulations prescribe how receipt is counted — typically 3 days for domestic post, or the date of receipt if by email or in person. Check the date carefully." },
                  { label: "What if I haven't received the letter?", body: "If you have a migration agent on record, the letter will be sent to the agent. If you are unrepresented, ensure the Department has your current contact details. Failure to receive a letter because contact details are out of date does not excuse missing the deadline." },
                  { label: 'Can the Department proceed without waiting?', body: "If the deadline expires without a response, the Department is entitled to proceed to determine the application. In most cases this means a refusal. The Department is not required to follow up or remind the applicant." },
                ].map(item => (
                  <div key={item.label} style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 16 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{item.label}</div>
                    <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.65, margin: 0 }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 12, padding: 22, alignSelf: 'start' as const }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: ACCENT, letterSpacing: '0.06em', marginBottom: 10 }}>Timeline from receiving the letter</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  { day: 'Day 1', text: 'Contact a registered migration agent immediately' },
                  { day: 'Days 1–3', text: 'Agent reviews letter and adverse information items' },
                  { day: 'Days 3–14', text: 'Gather all evidence, statutory declarations, supporting documents' },
                  { day: 'Days 14–21', text: 'Draft and finalise the written response — address every item' },
                  { day: 'Day 21–24', text: 'Submit response via correct channel — keep delivery proof' },
                  { day: 'Day 28', text: 'Hard deadline — no extensions assumed' },
                ].map(row => (
                  <div key={row.day} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: ACCENT, minWidth: 54, marginTop: 1 }}>{row.day}</span>
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{row.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to respond well ───────────────────────────────────── */}
      <section id="how-to-respond" style={{ background: '#f8fafd', padding: '64px 32px 56px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Responding effectively" title="How to Respond to a Section 57 Letter" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            A section 57 response must be specific, honest, and evidence-based. A response that simply denies or asserts without corroborating evidence is unlikely to overcome adverse information that the Department considers credible. The following principles apply to a well-prepared response.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {[
              {
                num: '01',
                title: 'Address every item of adverse information',
                body: "The letter will typically itemise each piece of adverse information. Each item must be addressed in your response — failing to address an item can be taken as acceptance of it or inability to explain it. Do not respond generally without tying your response to each specific allegation or concern.",
              },
              {
                num: '02',
                title: 'Evidence over assertion',
                body: "A bare assertion that adverse information is incorrect is rarely sufficient. Support every claim with documentary evidence — original documents, certified copies, records from government or authoritative sources, photographs, receipts, correspondence. Where original documents are in question, seek alternative evidence that proves the underlying fact.",
              },
              {
                num: '03',
                title: 'Use statutory declarations where appropriate',
                body: "For factual matters that cannot be proven by documents alone — for example, the circumstances under which a document was obtained — a statutory declaration from the applicant, sponsor, or a witness with direct knowledge can carry weight. A statutory declaration is a legal document and must be truthful.",
              },
              {
                num: '04',
                title: 'Expert reports where relevant',
                body: "For technical matters — such as whether a document could be authenticated by expert forensic analysis — an expert report from a suitably qualified person may assist. For relationship visa cases, a relationship counsellor or expert on cultural practices may provide useful context.",
              },
              {
                num: '05',
                title: 'Do not maintain a false claim',
                body: "If the adverse information relates to something that is in fact true — for example, that a document is not genuine or that a claim was inaccurate — do not attempt to maintain the false position. Persisting with a false claim after a section 57 notice is strong evidence of deliberate misrepresentation and is likely to result in a PIC 4020 finding and a 10-year exclusion. Seek advice on the implications of correcting the record.",
              },
            ].map(step => (
              <div key={step.num} style={{ borderLeft: `4px solid ${ACCENT}`, background: '#fff', padding: '20px 24px', borderRadius: '0 12px 12px 0' }}>
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

      {/* ── What a s57 letter signals ─────────────────────────────── */}
      <section id="s57-signals" style={{ padding: '64px 32px 56px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Reading the signals" title="What a Section 57 Letter Can Signal" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 28 }}>
            The content of the adverse information in a section 57 letter can indicate the type of decision the Department is considering. Understanding what a letter is signalling can help focus the response.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            {[
              {
                label: 'PIC 4020 — misrepresentation',
                body: "If the letter refers to a document the Department believes is not genuine, to information that appears to have been deliberately false, or to identity concerns — it is likely signalling a potential PIC 4020 finding. A PIC 4020 finding can result in refusal and a 10-year exclusion period for the applicant (and can affect associated applicants). This is the highest-risk category of section 57 letter.",
                border: ACCENT,
              },
              {
                label: 'Visa cancellation action',
                body: "If the applicant already holds a visa and the letter relates to a visa condition breach or a change in circumstances affecting the visa grant, the section 57 process may be part of a cancellation process. The notice will typically be issued under a different provision (section 119 for on-shore cancellations) but the obligation to respond is similar.",
                border: ACCENT,
              },
              {
                label: 'Relationship genuineness concerns',
                body: "For partner and prospective marriage visas, a section 57 letter relating to a tip-off or inconsistent information about the relationship typically signals that the decision-maker is not satisfied the relationship is genuine. The response must focus on the specific concern raised — not simply general evidence of the relationship.",
                border: '#d97706',
              },
              {
                label: 'Public interest criteria — health, character, or security',
                body: "A section 57 letter relating to health information, a criminal record, or a security assessment signals that the Department is considering whether a PIC relating to health, character, or security is satisfied. Each of these areas has specific procedural requirements and may require specialist advice beyond standard migration.",
                border: '#d97706',
              },
            ].map(card => (
              <div key={card.label} style={{ background: '#fff', border: `1px solid #e8edf6`, borderLeft: `4px solid ${card.border}`, borderRadius: '4px 12px 12px 4px', padding: '18px 22px' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{card.label}</div>
                <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
          <Callout variant="warning" panel={true} title="Confirm current information on the Department of Home Affairs website">
            The thresholds, procedures, and visa-specific natural justice requirements may be updated. Always confirm current procedures and timeframes on the Department of Home Affairs website or through a registered migration agent.
          </Callout>
        </div>
      </section>

      {/* ── Getting professional help ─────────────────────────────── */}
      <section id="getting-help" style={{ background: '#f8fafd', padding: '64px 32px 56px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Seek advice immediately" title="Why Speed Matters and What a Registered Migration Agent Can Do" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              {
                icon: 'calendar' as const,
                title: 'Time is the critical resource',
                body: "Most of the time available for a section 57 response should be spent gathering evidence and preparing the written submission — not deciding whether to seek advice. By the time the response must be lodged, there is no time to rebuild. Contact a registered migration agent immediately on receipt of the letter.",
              },
              {
                icon: 'scale' as const,
                title: 'Assessing the true nature of the risk',
                body: "A registered migration agent can read the section 57 letter and identify what finding the Department is moving toward — PIC 4020, character, relationship genuineness — and calibrate the response accordingly. The response strategy for a DVR letter is different from a tip-off letter.",
              },
              {
                icon: 'shield' as const,
                title: 'Building the evidence base',
                body: "A registered migration agent can advise specifically on what categories of evidence are likely to be persuasive for the type of adverse information in question — and what gaps in the evidence file need to be filled before the deadline.",
              },
              {
                icon: 'info' as const,
                title: 'No outcome can be guaranteed',
                body: "A registered migration agent can prepare the strongest possible response on the available facts and evidence. But no agent can guarantee that the Department will be satisfied or that the application will succeed. If you are refused, the agent can advise on ART review rights and timeframes.",
              },
            ].map(card => (
              <div key={card.title} style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: '22px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={card.icon} size={15} color={ACCENT} />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, paddingTop: 6 }}>{card.title}</div>
                </div>
                <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: '64px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Section 57 Natural Justice Questions Answered" />
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
        title="Received a section 57 letter? Get advice before the deadline."
        body="Nanak Migration Group (MARN 2619467) can review the adverse information, identify the risk, and prepare the strongest available response on the facts. No outcome can be guaranteed, but acting now is essential."
        primaryCta={{ label: 'Request urgent advice', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
