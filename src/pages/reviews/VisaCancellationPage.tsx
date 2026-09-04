import React from 'react'
import { GOLD, NAVY, NAVY_DARK } from '@/theme'
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
  { id: 'grounds', label: 'Grounds for cancellation' },
  { id: 'noicc', label: 'NOICC process' },
  { id: 'consequences', label: 'Consequences' },
  { id: 'response', label: 'Responding' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  { icon: 'alert', value: 'As little as 7 days', label: 'Typical response window for a NOICC', note: 'Time limits on NOICC responses vary — some are as short as 7 days. Read the notice carefully and contact a migration agent immediately on receipt.' },
  { icon: 'scale', value: 'Mandatory vs discretionary', label: 'Two types of cancellation power', note: 'Some cancellations (e.g. some section 501 character cancellations) are mandatory — the Minister must cancel if criteria are met. Others are discretionary — the delegate weighs the grounds and the response.' },
  { icon: 'shield', value: 'Section 48 bar', label: 'Cancellation may trigger the section 48 bar', note: 'A visa cancelled while the holder is onshore may trigger the section 48 bar — preventing most new visa applications from inside Australia.' },
  { icon: 'calendar', value: 'ART review available', label: 'Most cancellations can be reviewed at the ART', note: 'A cancellation decision may be reviewable at the Administrative Review Tribunal (ART) — but strict time limits apply. Review must generally be sought within 21 days of notification.' },
]

const FAQ: FaqItem[] = [
  {
    question: "My visa was cancelled at the airport — what are my rights?",
    answer: "Visa cancellation at the border (also called 'entry interview' or 'airport cancellation') can happen if an officer suspects you have provided false information, do not meet entry criteria, or fail the character test. You have the right to be informed of the reasons and — in most cases — to seek review. Cancellation at the border triggers immediate unlawful status and may result in removal from Australia. If your visa has been cancelled at the border, seek urgent advice from a migration agent or migration lawyer immediately. Do not sign any documents you do not fully understand.",
  },
  {
    question: "Can I stay in Australia while I appeal the cancellation?",
    answer: "A merits review application at the ART generally keeps you lawfully in Australia on a bridging visa while the review is pending — provided the review is lodged within the strict deadline (generally 21 days). This is one of the most important reasons to act quickly after a cancellation decision. If you miss the review deadline, you may become unlawful with no pending application to protect your status. Do not delay — seek advice immediately.",
  },
  {
    question: "What is the difference between a cancellation under section 116 and section 501?",
    answer: "Section 116 covers general grounds for cancellation — visa condition breaches, incorrect circumstances, or failure to meet ongoing criteria. It is usually discretionary. Section 501 is specifically the character cancellation power — it applies where the visa holder fails the character test due to a criminal record or association with criminal groups. Some section 501 cancellations are mandatory (the Minister must cancel). The distinction matters because the review rights, the applicable policy, and the strength of different types of submissions vary between the two sections.",
  },
  {
    question: "My visa was cancelled because of a mistake my agent made — can I challenge this?",
    answer: "Yes. The fact that incorrect information was provided by your agent without your knowledge or instruction is a relevant factor — both in the natural justice response and in any ART review. The delegate and the ART can take into account whether you were personally responsible for the incorrect information. This does not guarantee the cancellation will be set aside — but it is a relevant mitigating factor that should be raised in the response. You may also have a complaint or civil claim against the agent.",
  },
  {
    question: "What happens if I ignore the NOICC and do not respond?",
    answer: "If you do not respond to a NOICC by the deadline, the delegate will make a decision based on the information available — which may not include any mitigating factors you could have provided. In discretionary cancellations, failing to respond almost certainly means the delegate will proceed with cancellation. In mandatory cancellations, the outcome may be the same regardless — but the absence of a response means you lose the opportunity to raise any relevant considerations. There is no upside to ignoring a NOICC.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'ART Review', desc: 'Apply to the Administrative Review Tribunal for merits review of a cancellation decision.', icon: 'scale', page: 'art-review', color: ACCENT },
  { title: 'Section 48 Bar', desc: 'What the section 48 bar means and which visas are exempt from it.', icon: 'shield', page: 'section-48-bar', color: ACCENT },
  { title: 'Visa Refusal & Review Hub', desc: 'Overview of all review rights, ART applications and complex case options.', icon: 'arrowright', page: 'visa-refusal-review', color: ACCENT },
]

export default function VisaCancellationPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['visa-cancellation'].title }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Reviews & Complex', url: 'https://www.nanakmigration.com.au/visa-refusal-review' },
          { name: 'Visa Cancellation', url: 'https://www.nanakmigration.com.au/visa-cancellation' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{ name: 'Visa Cancellation Advice', description: PAGE_META['visa-cancellation'].metaDescription, url: 'https://www.nanakmigration.com.au/visa-cancellation' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Reviews & Complex', page: 'visa-refusal-review' },
          { label: 'Visa Cancellation' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Reviews & Complex"
        eyebrowSub="Visa Cancellation · Urgent"
        title={<>Visa Cancellation<br /><em style={{ fontStyle: 'italic', color: GOLD }}>What It Means and What to Do</em></>}
        deck="Australian visa cancellation can happen swiftly and with serious consequences — including unlawful status, possible detention, and the Section 48 bar. If you have received a Notice of Intention to Consider Cancellation (NOICC) or your visa has already been cancelled, response deadlines are short and professional help matters."
        shortAnswer={<>The Department of Home Affairs has wide powers to cancel Australian visas — including under <strong style={{ color: NAVY }}>section 116</strong> (general grounds: breach of condition, failure to meet criteria, or changed circumstances), <strong style={{ color: NAVY }}>section 109</strong> (incorrect information given in the application), and <strong style={{ color: NAVY }}>section 501</strong> (character grounds, including criminal convictions). Before most cancellations, the Department issues a <strong style={{ color: NAVY }}>Notice of Intention to Consider Cancellation (NOICC)</strong> — you will have a limited time (often as little as 7 days) to respond. A strong, timely response can make a significant difference. If your visa is cancelled, you may be subject to the Section 48 bar, re-entry bans, and detention risk. <strong style={{ color: NAVY }}>Do not wait</strong> — seek advice from a registered migration agent immediately. Nanak Migration Group (MARN 2619467) assists with NOICC responses and cancellation appeals.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request urgent discussion', page: 'home' }}
        secondaryCta={{ label: 'ART Review →', page: 'art-review' }}
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
            <a
              key={sec.id}
              href={`#${sec.id}`}
              style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap' as const, borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>

      {/* Overview */}
      <section id="overview" style={{ padding: '64px 32px 48px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="The powers" title="What Visa Cancellation Is" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 20 }}>
            Visa cancellation is the revocation of an Australian visa by the Department of Home Affairs. When a visa is cancelled, the holder immediately becomes unlawful in Australia — they have no visa and no right to remain. Cancellation is different from visa refusal (which is a decision not to grant a visa in the first place) — cancellation withdraws a visa that was already granted.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            The Migration Act 1958 contains several distinct cancellation powers, each with different grounds, triggers, and processes. The most commonly encountered are sections 116, 109, and 501. Understanding which power is being used is the first step in assessing your options.
          </p>
          <Callout variant="warning" panel={true} title="Seek advice immediately — do not wait for the deadline">
            If you have received a NOICC (Notice of Intention to Consider Cancellation) or any communication from the Department about possible cancellation, do not wait until the deadline to seek help. A migration agent needs time to review your case, gather evidence, and prepare a substantive response. Nanak Migration Group (MARN 2619467) treats cancellation matters as urgent.
          </Callout>
        </div>
      </section>

      {/* Grounds */}
      <section id="grounds" style={{ background: '#f8fafd', padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Legal basis" title="The Three Main Cancellation Powers" />

          {/* Section 116 */}
          <div style={{ borderLeft: `4px solid ${ACCENT}`, background: '#fafbfe', borderRadius: 8, padding: 24, marginBottom: 20 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Section 116: General Grounds</div>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 12 }}>
              Section 116 is the broadest cancellation power. A delegate may cancel a visa if one or more grounds exist at the time of decision. Common section 116 grounds include:
            </p>
            <ul style={{ paddingLeft: 20, margin: '0 0 12px', display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
              <li style={{ fontSize: 15, lineHeight: 1.7, color: '#374151' }}>The visa holder is no longer in the class of persons who can hold the visa (e.g. a sponsored worker who has left their sponsoring employer)</li>
              <li style={{ fontSize: 15, lineHeight: 1.7, color: '#374151' }}>The visa holder has breached a visa condition (e.g. working more than the permitted hours on a student visa, or working without permission)</li>
              <li style={{ fontSize: 15, lineHeight: 1.7, color: '#374151' }}>The visa was granted based on circumstances that no longer exist (e.g. a student visa granted for a course the holder is no longer enrolled in)</li>
              <li style={{ fontSize: 15, lineHeight: 1.7, color: '#374151' }}>The visa holder has been convicted of a criminal offence in Australia</li>
            </ul>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', margin: 0 }}>
              Section 116 cancellation is discretionary — the delegate must consider whether to cancel even if grounds exist. A strong response addressing the grounds and demonstrating the consequences of cancellation can influence the outcome.
            </p>
          </div>

          {/* Section 109 */}
          <div style={{ borderLeft: `4px solid ${ACCENT}`, background: '#fafbfe', borderRadius: 8, padding: 24, marginBottom: 20 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Section 109: Incorrect Information</div>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 12 }}>
              Section 109 allows cancellation where a visa was granted based on false or misleading information or a bogus document provided by the applicant or someone on their behalf. Unlike section 116, section 109 cancellation can be mandatory in some circumstances — if the criteria are met, the delegate may be required to cancel.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 8 }}>Key aspects of section 109:</p>
            <ul style={{ paddingLeft: 20, margin: '0 0 12px', display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
              <li style={{ fontSize: 15, lineHeight: 1.7, color: '#374151' }}>The provision applies even if the incorrect information was provided innocently — for example, by a migration agent without the applicant's knowledge</li>
              <li style={{ fontSize: 15, lineHeight: 1.7, color: '#374151' }}>The applicant need not have known the information was false for section 109 to apply</li>
              <li style={{ fontSize: 15, lineHeight: 1.7, color: '#374151' }}>However, whether the applicant knew can be a relevant factor in the delegate's discretion and in the natural justice response</li>
              <li style={{ fontSize: 15, lineHeight: 1.7, color: '#374151' }}>See also PIC 4020 — the related criterion that applies at the visa grant stage for false information</li>
            </ul>
          </div>

          {/* Section 501 */}
          <div style={{ borderLeft: `4px solid ${ACCENT}`, background: '#fafbfe', borderRadius: 8, padding: 24, marginBottom: 0 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Section 501: Character Grounds</div>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 12 }}>
              Section 501 is the character cancellation power. It applies where the Department is satisfied the visa holder does not pass the character test — or where a Minister has the personal power to cancel on character grounds.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 8 }}>The character test is failed if:</p>
            <ul style={{ paddingLeft: 20, margin: '0 0 12px', display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
              <li style={{ fontSize: 15, lineHeight: 1.7, color: '#374151' }}>The person has a "substantial criminal record" (generally 12 months or more total imprisonment for single or multiple sentences)</li>
              <li style={{ fontSize: 15, lineHeight: 1.7, color: '#374151' }}>The person has been convicted of a sex offence against a child</li>
              <li style={{ fontSize: 15, lineHeight: 1.7, color: '#374151' }}>The person is or has been a member of a group that the Minister reasonably suspects is involved in criminal conduct</li>
              <li style={{ fontSize: 15, lineHeight: 1.7, color: '#374151' }}>The person has been convicted of an offence committed in immigration detention</li>
            </ul>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', margin: 0 }}>
              Some section 501 cancellations are mandatory — the Minister must cancel in certain circumstances (e.g. sentences of 2 years or more). Others are discretionary. Section 501 cancellations can be reviewed at the ART (if the decision was not made personally by the Minister) or in some cases are subject to a non-revocation power held by the Minister personally.
            </p>
          </div>
        </div>
      </section>

      {/* NOICC */}
      <section id="noicc" style={{ padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="The process" title="The NOICC — Notice of Intention to Consider Cancellation" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 40 }}>
            Before most visa cancellations, the Department issues a NOICC (Notice of Intention to Consider Cancellation). This is a natural justice document — it gives the visa holder an opportunity to respond before a final decision is made. The NOICC is not a cancellation notice — it is an invitation to respond.
          </p>

          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 0 }}>
            {[
              {
                num: '1',
                title: 'Receipt of NOICC',
                desc: 'Read the NOICC carefully. It will state: the grounds being considered for cancellation, the legislative provision (s116, s109, s501), the evidence the Department is relying on, and the deadline for response. Note the deadline immediately — it is often 7, 14, or 28 days but can be shorter in urgent cases. Do not ignore a NOICC.',
              },
              {
                num: '2',
                title: 'Contact a migration agent immediately',
                desc: 'Do not attempt to respond to a NOICC without professional advice. The response is a legal submission — it must address the specific grounds, provide evidence, and make submissions on discretion (where applicable). A poorly written response can make the situation worse. Nanak Migration Group (MARN 2619467) can prepare a substantive response.',
              },
              {
                num: '3',
                title: 'Prepare the response',
                desc: 'A strong NOICC response typically includes: a written submission addressing each ground, factual evidence rebutting the grounds where possible, character references and evidence of community ties, evidence of the consequences of cancellation (for the visa holder and their family), and submissions on discretionary factors. The response must be lodged by the deadline.',
              },
              {
                num: '4',
                title: 'Decision',
                desc: 'After the response deadline passes, a delegate reviews the response and makes a decision — either to cancel or not to cancel the visa. If the decision is to cancel, the visa holder has review rights at the ART (generally within 21 days). If the decision is not to cancel, the visa continues. The outcome depends on the strength of the response and the specific grounds.',
              },
            ].map((step, i, arr) => (
              <div key={i} style={{ display: 'flex', gap: 20, paddingBottom: i < arr.length - 1 ? 0 : 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 16, flexShrink: 0 }}>
                    {step.num}
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ width: 2, flex: 1, minHeight: 32, background: `${ACCENT}30`, marginTop: 4, marginBottom: 4 }} />
                  )}
                </div>
                <div style={{ paddingBottom: 32, flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 8, marginTop: 8 }}>{step.title}</div>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consequences */}
      <section id="consequences" style={{ background: '#f8fafd', padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What happens" title="Consequences of Visa Cancellation" />

          {[
            { title: 'Unlawful status', desc: 'When a visa is cancelled, the holder immediately becomes an unlawful non-citizen in Australia. An unlawful non-citizen has no right to remain in Australia and may be detained by the Australian Border Force.' },
            { title: 'Detention risk', desc: 'An unlawful non-citizen — including a person whose visa has just been cancelled — is subject to mandatory immigration detention under the Migration Act. While not all unlawful non-citizens are immediately detained, the risk is real and the Department has wide powers to detain.' },
            { title: 'Section 48 bar', desc: 'A visa cancellation while the holder is onshore triggers the section 48 bar — preventing them from applying for most visas from inside Australia. Limited exemptions apply (see the Section 48 Bar guide). The section 48 bar means the person generally must leave Australia before they can apply for a new visa.' },
            { title: 'Re-entry bans', desc: 'Some cancellations — particularly section 501 character cancellations — result in a formal re-entry ban or exclusion period. This prevents the person from returning to Australia for a specified period (or permanently in some cases). The length of any ban depends on the grounds and the delegate\'s decision.' },
            { title: 'Impact on future visa applications', desc: 'A cancelled visa is a significant adverse immigration history factor. It will be disclosed in any future visa applications and will be considered by the Department when assessing good character and genuine intent. A cancellation for section 109 (false information) is particularly serious — it is closely related to PIC 4020 and may trigger the 3-year or 10-year ban.' },
          ].map((item, i) => (
            <div key={i} style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fff5f5', borderRadius: 8, padding: 16, marginBottom: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{item.title}</div>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: '#374151', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Response */}
      <section id="response" style={{ padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What to do" title="Responding to a Cancellation — What a Strong Response Contains" />
          <div style={{ marginBottom: 36 }}>
            <Callout variant="note" panel={true} title="A response cannot guarantee an outcome — but no response almost certainly means cancellation">
              A strong NOICC response does not guarantee that cancellation will not proceed. Some grounds are mandatory and the outcome is prescribed by law. However, in discretionary cancellations, a substantive and evidenced response is the primary tool available to the visa holder. Failing to respond — or submitting a generic response — significantly reduces the chance of a favourable outcome.
            </Callout>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>
            {[
              { title: 'Direct rebuttal of the stated grounds', desc: 'Address each ground specifically. If the Department says you breached a condition, provide evidence that you did not (or an explanation of what occurred). Bare denials without evidence are rarely persuasive.' },
              { title: 'Character evidence', desc: 'References from employers, community organisations, religious institutions, or other credible sources that speak to your character and contributions. Character evidence is particularly important in discretionary section 116 and mandatory section 501 matters where the Minister weighs character submissions.' },
              { title: 'Consequences of cancellation', desc: 'Explain clearly who would be affected and how. A spouse and children who are Australian citizens or PRs, dependent children in Australian schools, a serious medical condition requiring ongoing treatment, or long-term community ties are all relevant factors the delegate must consider in discretionary cancellations.' },
              { title: 'Relevant circumstances', desc: 'If the breach occurred due to circumstances beyond your control (e.g. an employer error, a medical emergency, or third-party fraud), explain this with supporting evidence. Context matters.' },
              { title: 'Expert migration law submissions', desc: 'Where relevant, legal submissions on the scope of the cancellation power, applicable policy guidelines (the Department publishes PAM3 guidance on discretion), and relevant Tribunal decisions should be included. This is where professional representation adds significant value.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: `${ACCENT}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="check" size={16} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{item.title}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: '#4b5563', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#f8fafd', padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Frequently Asked Questions" />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Explore further" title="Related Pages" />
          <RelatedPages pages={RELATED} navigate={navigate} columns={3} />
        </div>
      </section>

      <CtaBand
        title="Received a NOICC? Act now."
        body="Time limits on cancellation matters are short. Nanak Migration Group (MARN 2619467) treats cancellation and NOICC matters as urgent — contact us immediately on receipt of any cancellation notice."
        primaryCta={{ label: 'Request urgent discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
