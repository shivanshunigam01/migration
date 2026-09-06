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
  { id: 'what-triggers', label: 'What triggers it' },
  { id: 'bans', label: 'The bans' },
  { id: 'waiver', label: 'Waiver' },
  { id: 'natural-justice', label: 'Natural justice letter' },
  { id: 'prevention', label: 'Prevention' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  { icon: 'alert', value: '3-year ban', label: 'PIC 4020 refusal triggers a 3-year visa ban', note: 'After a PIC 4020 refusal, the person generally cannot be granted most Australian visas for 3 years from the date of the refusal.' },
  { icon: 'alert', value: '10-year ban', label: 'Identity fraud triggers a 10-year ban', note: "Where PIC 4020 is triggered by identity fraud (using a false identity), a 10-year ban applies instead of the 3-year ban." },
  { icon: 'shield', value: 'No-knowledge no defence', label: 'PIC 4020 can apply even if the applicant did not know', note: "The applicant is responsible for the correctness of what is lodged on their behalf — even if an agent or employer provided false information without the applicant's knowledge." },
  { icon: 'check', value: 'Waiver available', label: 'A waiver can be sought in compelling or compassionate circumstances', note: 'The waiver requires compelling circumstances affecting Australian interests OR compassionate or compelling circumstances affecting the applicant. It is not automatic.' },
]

const FAQ: FaqItem[] = [
  {
    question: "My previous migration agent submitted a fake document without my knowledge — am I still subject to PIC 4020?",
    answer: "Potentially, yes. PIC 4020 applies to the application regardless of who provided the false document — the applicant bears responsibility for what is lodged on their behalf. However, the fact that you were not aware of the fraudulent document is a highly relevant factor in the waiver assessment. A waiver submission should explain the circumstances clearly, provide evidence that you did not authorise or know about the document, and demonstrate the compassionate or compelling circumstances affecting you. Separately, you may have a complaint to the OMARA (if the agent is Australian-registered) or a civil claim against the agent.",
  },
  {
    question: "I received a natural justice letter about PIC 4020 — what should I do first?",
    answer: "Read the letter immediately and note the deadline for response. Contact a migration agent urgently — do not attempt to respond without professional advice. The response to a PIC 4020 natural justice letter is a legal submission that must address the specific concern, potentially include a waiver request, and be lodged by a strict deadline. A late or poorly constructed response can result in a refusal and the associated ban without the waiver being properly considered. Nanak Migration Group (MARN 2619467) treats PIC 4020 matters as urgent.",
  },
  {
    question: "Can a PIC 4020 refusal be reviewed at the ART?",
    answer: "Yes — in most cases, a PIC 4020 refusal is reviewable at the Administrative Review Tribunal (ART) within 21 days of being notified of the refusal. At the ART, the Tribunal can review the merits of the decision — including whether PIC 4020 was correctly applied, and whether the waiver grounds are made out. ART review is often worth pursuing, as the Tribunal can set aside a refusal where the Department's decision was incorrect or the waiver grounds are compelling. Seek advice immediately — the 21-day deadline is strict.",
  },
  {
    question: "If my visa is refused on PIC 4020 grounds, can I apply for another visa immediately?",
    answer: "No — not for most visa types. A PIC 4020 refusal triggers a 3-year (or 10-year for identity fraud) ban on most Australian visa applications. Applying for another visa during the ban period will result in refusal on PIC 4020 grounds (because the ban is itself a criterion that must be satisfied). The ban can potentially be lifted if the original refusal is overturned on ART review, or if a waiver is granted. Submitting multiple applications during the ban period does not remove or shorten the ban.",
  },
  {
    question: "How does PIC 4020 relate to section 109 visa cancellation?",
    answer: "Section 109 and PIC 4020 both concern false information or bogus documents — but they operate at different stages. PIC 4020 applies at the grant stage — it is a refusal ground. Section 109 applies to a visa that has already been granted — it is a cancellation ground, allowing the Department to cancel a visa that was granted on the basis of false information. In practice, both can apply to the same underlying facts. For example: a bogus document provided in a visa application triggers PIC 4020 at grant; if the visa was already granted before the fraud was discovered, section 109 could be used to cancel it.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Visa Cancellation', desc: 'Section 109 (incorrect information) and other grounds for visa cancellation.', icon: 'alert', page: 'visa-cancellation', color: ACCENT },
  { title: 'ART Review', desc: 'PIC 4020 refusals can be reviewed at the ART — strict time limits apply.', icon: 'scale', page: 'art-review', color: ACCENT },
  { title: 'Section 48 Bar', desc: 'A PIC 4020 refusal may trigger the section 48 bar if you are onshore.', icon: 'shield', page: 'section-48-bar', color: ACCENT },
  { title: 'Visa Refusal & Review Hub', desc: 'Overview of all review rights and complex case options.', icon: 'arrowright', page: 'visa-refusal-review', color: ACCENT },
]

export default function Pic4020Page({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Reviews & Complex', url: 'https://www.nanakmigration.com.au/visa-refusal-review' },
          { name: 'PIC 4020', url: 'https://www.nanakmigration.com.au/pic-4020' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{ name: 'PIC 4020 Waiver & Natural Justice Advice', description: PAGE_META['pic-4020'].metaDescription, url: 'https://www.nanakmigration.com.au/pic-4020' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Reviews & Complex', page: 'visa-refusal-review' },
          { label: 'PIC 4020' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Reviews & Complex"
        eyebrowSub="Integrity Criterion · Support Guide"
        title={<>PIC 4020<br /><em style={{ fontStyle: 'italic', color: GOLD }}>The Integrity Criterion — False Information and Bogus Documents</em></>}
        deck="PIC 4020 (Public Interest Criterion 4020) applies to most Australian skilled, family and student visa applications. A visa will generally be refused — and a multi-year ban applied — if a bogus document or false or misleading information was provided in the application or the 12 months before it, even if the applicant did not know."
        shortAnswer={<>PIC 4020 is an integrity criterion in the Migration Regulations that applies to most skilled, family, and student visa applications. A visa must generally be refused if a <strong style={{ color: NAVY }}>bogus document</strong> or <strong style={{ color: NAVY }}>false or misleading information</strong> was given in connection with the application — or in the 12-month period before the application was made. A PIC 4020 refusal triggers a <strong style={{ color: NAVY }}>3-year ban</strong> on most Australian visa applications; identity fraud triggers a <strong style={{ color: NAVY }}>10-year ban</strong>. Crucially, PIC 4020 can apply even if the information was provided by a migration agent or employer <strong style={{ color: NAVY }}>without the applicant's knowledge</strong> — the applicant bears the risk of what is lodged on their behalf. A waiver exists for compelling or compassionate circumstances — but it is not automatically available. Nanak Migration Group (MARN 2619467) can review PIC 4020 natural justice letters and advise on waiver applications.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← ART Review', page: 'art-review' }}
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
          <SectionHeading kicker="The criterion" title="What Is PIC 4020?" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 20 }}>
            PIC 4020 stands for Public Interest Criterion 4020, a criterion prescribed in Schedule 4 of the Migration Regulations 1994. It applies to most skilled, family, student, and visitor visa subclasses. To be granted one of these visas, an applicant must satisfy PIC 4020 — meaning they must not have given a bogus document or false or misleading information in connection with the application or the visa application made in the 12 months before.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            If PIC 4020 is not satisfied — because a bogus document or false information was involved — the visa must generally be refused, and a 3-year (or 10-year) ban is imposed. The criterion is broad: it covers information given by the applicant, by a migration agent acting on their behalf, by an employer who provided a support letter, and by anyone else involved in the application.
          </p>
          <Callout variant="warning" panel={true} title="PIC 4020 is one of the most serious visa refusal grounds">
            A PIC 4020 refusal is not a minor procedural failure — it is an integrity finding. It will be recorded in the Department's systems and will be an adverse factor in every future visa application for at least 3 years (or 10 years for identity fraud). It can also affect the applicant's credibility in other migration contexts. Prevention — ensuring all information lodged is accurate and complete — is far preferable to dealing with a PIC 4020 refusal after the fact.
          </Callout>
        </div>
      </section>

      {/* What triggers it */}
      <section id="what-triggers" style={{ background: '#f8fafd', padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Triggers" title="What Can Trigger PIC 4020?" />

          {[
            {
              title: 'A bogus document',
              desc: "A 'bogus document' is defined in the Migration Act as a document that has been obtained by fraud, was not issued to the person, or has been altered by someone other than the person who issued it. Examples: a fake degree certificate, an altered bank statement, a counterfeit police clearance, or an employment letter from a company that does not exist.",
            },
            {
              title: 'False or misleading information',
              desc: "Information is false or misleading if it incorrectly represents a fact material to the visa decision — for example, overstating work experience, understating periods of prior visa non-compliance, providing an incorrect salary in a sponsorship arrangement, or omitting a previous visa refusal.",
            },
            {
              title: 'Information from a 12-month look-back period',
              desc: "PIC 4020 does not only look at the current application — it also covers the 12-month period before the current application was lodged. If a bogus document or false information was submitted in a visa application made in the 12 months before the current application, PIC 4020 can still apply to the current application.",
            },
            {
              title: 'Documents or information provided by third parties',
              desc: "The criterion applies regardless of who provided the false information or document. If your migration agent lodged a supporting document that turned out to be fraudulent — even without your knowledge — PIC 4020 may still apply to your application. The applicant bears the risk of what is lodged on their behalf, which is why the choice of migration agent matters.",
            },
            {
              title: 'Minor or inadvertent errors',
              desc: "PIC 4020 can technically apply even to innocent or inadvertent errors — though in those cases, the waiver (discussed below) is more likely to be available. An incorrect date in an employment history, an honest mistake about a prior visa refusal, or a minor discrepancy in a document translation can all be scrutinised under PIC 4020. This is why every document lodged should be reviewed carefully before submission.",
            },
          ].map((item, i) => (
            <div key={i} style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fafbfe', borderRadius: 8, padding: 20, marginBottom: 14 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{item.title}</div>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: '#374151', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bans */}
      <section id="bans" style={{ padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="The consequences" title="The 3-Year and 10-Year Bans" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            A PIC 4020 refusal automatically triggers a ban on most Australian visas. The length of the ban depends on the nature of the integrity concern.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            {/* 3-year ban card */}
            <div style={{ border: `2px solid ${ACCENT}`, borderRadius: 12, padding: 28 }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: ACCENT, fontFamily: 'Fraunces, Georgia, serif', marginBottom: 4 }}>3-Year Ban</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: NAVY, marginBottom: 16 }}>Standard — bogus document or false/misleading information (not identity fraud)</div>
              <ul style={{ paddingLeft: 18, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                <li style={{ fontSize: 14, lineHeight: 1.7, color: '#374151' }}>For 3 years from the date of the PIC 4020 refusal, the person generally cannot be granted most Australian visas</li>
                <li style={{ fontSize: 14, lineHeight: 1.7, color: '#374151' }}>The ban applies to applications made by the person in any country — not just applications from inside Australia</li>
                <li style={{ fontSize: 14, lineHeight: 1.7, color: '#374151' }}>The ban applies to most substantive visa subclasses</li>
                <li style={{ fontSize: 14, lineHeight: 1.7, color: '#374151' }}>Some visa types are exempt from the ban (primarily humanitarian/protection visas)</li>
                <li style={{ fontSize: 14, lineHeight: 1.7, color: '#374151' }}>A waiver can be sought to overcome the ban</li>
              </ul>
            </div>

            {/* 10-year ban card */}
            <div style={{ border: `2px solid ${NAVY}`, borderRadius: 12, padding: 28, background: '#fafbfe' }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: NAVY, fontFamily: 'Fraunces, Georgia, serif', marginBottom: 4 }}>10-Year Ban</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: NAVY, marginBottom: 16 }}>Identity fraud — applying under a false identity or using fraudulent identity documents</div>
              <ul style={{ paddingLeft: 18, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                <li style={{ fontSize: 14, lineHeight: 1.7, color: '#374151' }}>For 10 years from the date of the refusal, most Australian visa applications cannot be granted</li>
                <li style={{ fontSize: 14, lineHeight: 1.7, color: '#374151' }}>This is significantly more serious than the standard 3-year ban</li>
                <li style={{ fontSize: 14, lineHeight: 1.7, color: '#374151' }}>The 10-year ban applies where the integrity concern goes to the applicant's identity — not just to supporting documents</li>
              </ul>
            </div>
          </div>

          <Callout variant="warning" panel={true} title="The ban clock starts from the refusal date — not from when you apply">
            The 3-year or 10-year period runs from the date of the PIC 4020 refusal — it does not reset or extend each time you make a new application. If the ban is in force, any new visa application will be refused on PIC 4020 grounds (because the ban is itself an integrity criterion). Pursuing an ART review of the original PIC 4020 refusal can be important to potentially have the refusal set aside and prevent the ban from running.
          </Callout>
        </div>
      </section>

      {/* Waiver */}
      <section id="waiver" style={{ background: '#f8fafd', padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Overcoming it" title="The PIC 4020 Waiver" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 28 }}>
            A waiver from PIC 4020 can be granted in two circumstances:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
            <div style={{ border: '1px solid #e8edf6', borderTop: `3px solid ${ACCENT}`, borderRadius: '0 0 12px 12px', padding: 24 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Compelling circumstances affecting Australian interests</div>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: '#374151', margin: 0 }}>
                The Minister (or delegate) may waive the PIC 4020 bar if there are compelling circumstances affecting the interests of Australia. This includes situations where Australia would lose a significant economic, scientific, cultural, or humanitarian benefit if the visa were refused. This ground is rarely successful for standard applicants — it is more relevant for high-value investors, researchers, or people with exceptional skills.
              </p>
            </div>
            <div style={{ border: '1px solid #e8edf6', borderTop: `3px solid ${ACCENT}`, borderRadius: '0 0 12px 12px', padding: 24 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Compassionate or compelling circumstances</div>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: '#374151', margin: 0 }}>
                The waiver may also be granted where there are compassionate or compelling circumstances affecting the applicant — usually involving serious hardship to the applicant or their close family members. Examples: a dependent child in Australia who would be severely affected by the refusal, a serious medical condition, or other significant personal hardship. The waiver is not automatic — it requires a substantive and evidenced submission.
              </p>
            </div>
          </div>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>
            To apply for a waiver, you must make a submission to the delegate (or the ART, if the matter is under review) demonstrating that the waiver grounds are met. The submission must be specific and evidenced — generic assertions of hardship are rarely successful. Nanak Migration Group (MARN 2619467) prepares PIC 4020 waiver submissions.
          </p>
        </div>
      </section>

      {/* Natural justice */}
      <section id="natural-justice" style={{ padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Responding" title="Responding to a Natural Justice Letter About PIC 4020" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 36 }}>
            Before refusing a visa on PIC 4020 grounds, the Department generally issues a natural justice letter (sometimes called a "section 57" letter or "invitation to comment") giving the applicant an opportunity to address the concern. This is a critical opportunity — and the response must be substantive.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>
            {[
              {
                title: 'Address the specific document or information in question',
                desc: "Identify exactly what the Department is concerned about and address it directly. If the document was provided by a third party, explain your role (or lack thereof) in its provision. If it is an error, explain how it occurred.",
              },
              {
                title: 'Provide evidence rebutting the concern',
                desc: "If the document is genuine, provide evidence of its authenticity (original, notarised copy, issuer confirmation). If there was an innocent error, provide evidence of the correct position and an explanation of how the error occurred.",
              },
              {
                title: 'Submit the waiver ground (if applicable)',
                desc: "If a waiver of PIC 4020 is sought, include the waiver submission in the same response. Address both the specific concern and the waiver ground together.",
              },
              {
                title: 'Act quickly — the deadline is strict',
                desc: "Natural justice letters typically give 28 days to respond, though shorter periods can apply. A late response may not be considered. If you receive a PIC 4020 natural justice letter, contact a migration agent immediately.",
              },
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

      {/* Prevention */}
      <section id="prevention" style={{ background: '#f8fafd', padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Avoid it" title="Prevention — Never Let a PIC 4020 Situation Arise" />

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>
            {[
              {
                title: 'Read everything before you sign',
                desc: "Never sign a visa application or a form lodged with the Department without reading every field carefully. You are responsible for the accuracy of the application regardless of who prepared it.",
              },
              {
                title: 'Verify what your agent is lodging',
                desc: "Ask to see and approve every document before it is submitted. A registered migration agent should provide you with copies of everything submitted on your behalf. An agent who refuses to show you what is being lodged is a serious warning sign.",
              },
              {
                title: 'Disclose all prior refusals',
                desc: "Visa applications require disclosure of all prior visa refusals in Australia and overseas. Even a refusal you consider minor or long ago must be disclosed. Omitting a prior refusal is a common PIC 4020 trigger.",
              },
              {
                title: 'Do not use documents from unreliable sources',
                desc: "Do not use fake or enhanced educational certificates, employment letters from companies that did not employ you, or financial documents that misrepresent your position. The consequences — a 3-year ban and a refusal — far outweigh any perceived benefit.",
              },
              {
                title: 'Choose your migration agent carefully',
                desc: "The Migration Agents Registration Authority (OMARA) registers agents in Australia. Verify that your agent is registered at the OMARA register (mara.gov.au) before engaging them. Third-party or offshore agent fraud — where an agent submits fraudulent documents on your behalf — can still result in a PIC 4020 finding against you, even if you were the victim.",
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(34,197,94,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="check" size={16} color="#16a34a" />
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
      <section id="faq" style={{ padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Frequently Asked Questions" />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: '#f8fafd', padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Explore further" title="Related Pages" />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Received a PIC 4020 natural justice letter?"
        body="Nanak Migration Group (MARN 2619467) prepares PIC 4020 waiver submissions and responses to natural justice letters — contact us urgently."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
