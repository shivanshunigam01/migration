import React from 'react'
import { GOLD, NAVY, CAT_VISITOR } from '@/theme'
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

const ACCENT = CAT_VISITOR
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'eligibility', label: 'Eligible passports' },
  { id: 'conditions', label: 'Conditions' },
  { id: 'how-to-apply', label: 'How to apply' },
  { id: 'if-refused', label: 'If refused' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'plane',
    value: 'Multiple entry',
    label: 'Multiple visits of up to 3 months each within 12 months',
    note: 'Each stay can be up to 3 months. The ETA is valid for multiple entries within a 12-month period from the date of grant. Confirm current validity details on the Department of Home Affairs website.',
  },
  {
    icon: 'dollar',
    value: '~AUD 20',
    label: 'Small service charge via the Australian ETA app',
    note: 'A service charge (currently around AUD 20) applies when applying through the Australian ETA app. Some travel agents and airlines may also charge a booking fee. Confirm current charges on the Department of Home Affairs website.',
  },
  {
    icon: 'calendar',
    value: 'Minutes',
    label: 'Most applications decided within minutes',
    note: "For eligible passport holders with no adverse immigration history, the ETA is typically processed almost instantly. Complex cases or cases flagged for manual review take longer. There is no guarantee of a particular processing time.",
  },
  {
    icon: 'briefcase',
    value: 'Visitor only',
    label: 'Tourism and business visitor activities — no work',
    note: 'The ETA allows tourism and legitimate business visitor activities (attending conferences, meetings, negotiations). It does not allow paid work in Australia. Engaging in work would breach visa conditions.',
  },
]

const STEPS: TimelineStep[] = [
  {
    code: '01',
    title: 'Confirm your passport is eligible',
    desc: "Check the Department of Home Affairs website to confirm that your passport nationality is on the current ETA eligibility list. Eligible countries include USA, Canada, Japan, South Korea, Singapore, Hong Kong (SAR), Brunei, and Malaysia, among others. Confirm the current list on the Department of Home Affairs website as eligibility can change.",
  },
  {
    code: '02',
    title: 'Download the Australian ETA app',
    desc: "The primary application channel is the Australian ETA app, available from the Apple App Store and Google Play Store. The app is operated by the Australian Government. Some airlines and travel agents can also lodge ETA applications on your behalf.",
  },
  {
    code: '03',
    title: 'Complete the application in the app',
    desc: "Open the app, enter your passport details, and answer the required questions about health, character, and the purpose of your visit. The app may prompt you to take a photo of your passport's photo page and a live selfie.",
  },
  {
    code: '04',
    title: 'Pay the service charge',
    desc: "Pay the service charge through the app. Confirm the current amount on the Department of Home Affairs website before applying. Payment is by credit or debit card.",
  },
  {
    code: '05',
    title: 'Receive the outcome',
    desc: "Most applicants receive a decision within minutes. The ETA is electronically linked to your passport — there is no paper visa or stamp. You can check your ETA status through the VEVO (Visa Entitlement Verification Online) system or by re-entering the app.",
  },
]

const FAQ: FaqItem[] = [
  {
    question: "Which passports are eligible for the ETA?",
    answer: "Eligible countries include (but are not limited to) the United States, Canada, Japan, South Korea, Singapore, Hong Kong (SAR), Brunei, Malaysia, and several others. The list is set by the Australian Government and can change. Always confirm the current eligibility list on the Department of Home Affairs website before applying. Citizens of European Union member states and certain other European countries are generally eligible for the eVisitor (651) rather than the ETA — the two products serve different passport groups.",
  },
  {
    question: "Can I work in Australia on an ETA?",
    answer: "No. The ETA (subclass 601) allows tourism and business visitor activities only. 'Business visitor activities' means activities such as attending conferences, meetings, or business negotiations — not paid employment for an Australian employer. Working in Australia on an ETA is a breach of visa conditions and can have serious consequences, including cancellation and future visa refusals. If you intend to work in Australia, you need an appropriate work visa.",
  },
  {
    question: "How long can I stay on each visit?",
    answer: "Each visit under the ETA allows a stay of up to 3 months. The ETA is valid for 12 months from the date of grant, with multiple entries permitted during that period. Each time you enter Australia you can stay for up to 3 months. You can depart and re-enter within the 12-month validity. Confirm current conditions on the Department of Home Affairs website.",
  },
  {
    question: "What if my ETA is refused?",
    answer: "If your ETA application is refused, you can apply for a Visitor visa (subclass 600) instead. The subclass 600 is a full visa application with more opportunity to provide supporting information and explain your circumstances. A refusal of the ETA does not automatically mean a subclass 600 will also be refused — but the Department will consider any prior refusals as part of the 600 assessment. If you have had previous visa refusals for any country, or if there are factors in your background that may affect the assessment, seek advice from a registered migration agent before applying.",
  },
  {
    question: "Is the ETA a visa?",
    answer: "The ETA (subclass 601) is legally classified as a visa under the Migration Act 1958, though it differs from traditional visas in that it is electronically linked to your passport — there is no paper label or stamp. For practical purposes it functions as a visa: it authorises entry to Australia for the permitted period and activities. The VEVO system can confirm ETA status to hotels, employers, and airlines.",
  },
  {
    question: "Can I extend my stay beyond 3 months or apply for a different visa onshore?",
    answer: "The ETA cannot be extended within Australia beyond the 3-month per-visit limit. If you want to stay longer, you would need to depart Australia and re-enter (if your ETA is still valid and you are within the 12-month period) or apply for a different visa — such as a subclass 600 — before your current authorisation expires. Applying for a Visitor visa (600) from inside Australia is possible but requires demonstrating genuine temporary entry intent and is not guaranteed to succeed. Seek advice if you are considering staying longer than your ETA permits.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Visitor Visas Hub',
    desc: 'Compare eVisitor, ETA, and subclass 600 — find the right option for your passport.',
    icon: 'plane',
    page: 'visitor-visas',
    color: ACCENT,
  },
  {
    title: 'Visitor Visa (600)',
    desc: 'Universal visitor visa — for any passport, all streams, stays up to 12 months.',
    icon: 'dollar',
    page: 'visitor-visa-600',
    color: ACCENT,
  },
  {
    title: 'eVisitor (651)',
    desc: 'Free entry authority for eligible European passport holders — up to 3 months per visit.',
    icon: 'plane',
    page: 'evisitor-651',
    color: ACCENT,
  },
  {
    title: 'No Further Stay (8503)',
    desc: 'Condition 8503 bars another visa from inside Australia — waiver is rare.',
    icon: 'shield',
    page: 'no-further-stay-8503',
    color: ACCENT,
  },
]

export default function Eta601Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => {
    document.title = PAGE_META['eta-601'].title
  }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Visitor Visas', url: 'https://www.nanakmigration.com.au/visitor-visas' },
          { name: 'Electronic Travel Authority (601)', url: 'https://www.nanakmigration.com.au/eta-601' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Electronic Travel Authority Subclass 601',
          description: PAGE_META['eta-601'].metaDescription,
          url: 'https://www.nanakmigration.com.au/eta-601',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Visitor & Other', page: 'visitor-visas' },
          { label: 'ETA (601)' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Visitor & Other Visas"
        eyebrowSub="Subclass 601"
        title={<>Electronic Travel Authority<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 601</em></>}
        deck="The fastest way for eligible passport holders to get entry authority for Australia — applied through the Australian ETA app, typically processed within minutes, allowing multiple 3-month visits over 12 months."
        shortAnswer={<>The Electronic Travel Authority (subclass 601) is a digital entry authority for <strong style={{ color: NAVY }}>eligible passport holders</strong> — including USA, Canada, Japan, South Korea, Singapore, Hong Kong, Brunei, and Malaysia, among others. Applied via the <strong style={{ color: NAVY }}>Australian ETA app</strong> with a small service charge (~AUD 20 — confirm on DoHA). Allows <strong style={{ color: NAVY }}>multiple visits of up to 3 months each</strong> within 12 months from grant. <strong style={{ color: NAVY }}>Tourism and business visitor activities only — no work.</strong> If refused, the subclass 600 Visitor visa is the alternative. Nanak Migration Group (MARN 2619467) can assist if your ETA is refused or if you need a Visitor visa (600) for a longer or more complex visit. Confirm all current details on the Department of Home Affairs website.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← Visitor Visas', page: 'visitor-visas' }}
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
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}
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
          <SectionHeading kicker="What it provides" title="What the ETA (601) Provides" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 24 }}>
            The Electronic Travel Authority (ETA) is Australia's digital entry system for eligible passport holders. Unlike a traditional visa, the ETA carries no paper label or passport stamp — it is electronically linked to your passport number and verified at the border automatically.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            For most eligible applicants with no adverse immigration history, the ETA is granted within minutes of applying through the app. It allows multiple visits to Australia for up to 3 months each within a 12-month validity period — covering both tourism and legitimate business visitor activities.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 32 }}>
            {[
              { icon: 'plane', title: 'Tourism', body: 'Holidaying, visiting family and friends, sightseeing. Cannot include paid activities.' },
              { icon: 'briefcase', title: 'Business visitor', body: 'Attending conferences, meetings, negotiations, or exploratory business visits. Not paid employment.' },
              { icon: 'minus', title: 'Work — not permitted', body: 'Paid work of any kind is not permitted on the ETA. An appropriate work visa is required for employment.' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: '#fafbfe', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={item.icon as any} size={17} color={ACCENT} />
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

      {/* ── ELIGIBLE PASSPORTS ─────────────────────────────────── */}
      <section id="eligibility" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Passport eligibility" title="Which Passports Are Eligible" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 28 }}>
            The ETA is available to citizens of a specific list of countries determined by the Australian Government. The list below shows commonly eligible nationalities — confirm the current complete list on the Department of Home Affairs website before applying.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
            {[
              'United States', 'Canada', 'Japan', 'South Korea',
              'Singapore', 'Hong Kong (SAR)', 'Brunei', 'Malaysia',
              'United Kingdom', 'Norway', 'Iceland', 'Liechtenstein',
              'Switzerland', 'Vatican City', 'San Marino', 'Monaco',
            ].map(country => (
              <div key={country} style={{ background: '#ffffff', border: `1px solid ${BORDER}`, borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 16, height: 16, borderRadius: '50%', background: `${ACCENT}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="check" size={8} color={ACCENT} />
                </div>
                <span style={{ fontSize: 13, color: NAVY, fontWeight: 500 }}>{country}</span>
              </div>
            ))}
          </div>

          <Callout variant="note" panel={true} title="Confirm the current eligibility list on the Department of Home Affairs website">
            The list of ETA-eligible countries is maintained by the Department of Home Affairs and can be updated. Always confirm your passport country is currently eligible before applying. European Union passport holders are generally directed to the eVisitor (651) rather than the ETA.
          </Callout>
        </div>
      </section>

      {/* ── CONDITIONS ─────────────────────────────────────────── */}
      <section id="conditions" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Key conditions" title="ETA Conditions and Restrictions" accent={ACCENT} />

          <div style={{ overflowX: 'auto' as const, borderRadius: 12, border: `1px solid ${BORDER}`, marginBottom: 32 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 14 }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left' as const, color: '#fff', fontWeight: 600 }}>Condition</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' as const, color: '#fff', fontWeight: 600 }}>Detail</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cond: 'Maximum stay per visit', detail: 'Up to 3 months from date of entry. Cannot be extended within Australia.' },
                  { cond: 'Validity', detail: '12 months from date of grant, or until passport expires — whichever is earlier. Multiple entries permitted within the validity period.' },
                  { cond: 'Purpose', detail: 'Tourism, holiday, and business visitor activities only.' },
                  { cond: 'Work', detail: 'Work in Australia is not permitted. Breach of this condition can result in cancellation and future visa refusals.' },
                  { cond: 'Study', detail: 'Short-term study of less than 3 months permitted — longer courses require a student visa.' },
                  { cond: 'No Further Stay', detail: 'Some ETAs may be granted with a No Further Stay condition (Condition 8503), which prevents applying for most visas from inside Australia.' },
                ].map((row, i) => (
                  <tr key={row.cond} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafd' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: NAVY, borderBottom: `1px solid ${BORDER}` }}>{row.cond}</td>
                    <td style={{ padding: '12px 16px', color: '#374151', borderBottom: `1px solid ${BORDER}` }}>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout variant="note" panel={true} title="Confirm current conditions on the Department of Home Affairs website">
            ETA conditions are set at the time of grant and can vary. Always check your ETA grant notice and confirm conditions via VEVO before travelling to or departing Australia.
          </Callout>
        </div>
      </section>

      {/* ── HOW TO APPLY ───────────────────────────────────────── */}
      <section id="how-to-apply" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Application" title="How to Apply" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
          <div style={{ marginTop: 32 }}>
            <Callout variant="note" panel={true} title="Confirm the current service charge on the Department of Home Affairs website">
              The service charge for the ETA is set by the Australian Government and may change. Always confirm the current amount on the Department of Home Affairs website before applying.
            </Callout>
          </div>
        </div>
      </section>

      {/* ── IF REFUSED ─────────────────────────────────────────── */}
      <section id="if-refused" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Refusal" title="If Your ETA Is Refused" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 28 }}>
            An ETA can be refused if the Department assesses that the applicant does not meet the character, health, or genuine temporary entry requirements. A refusal is not the end of the road — but understanding your options matters.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {[
              { title: 'Apply for a Visitor visa (subclass 600)', body: "The subclass 600 is a full visa application and allows you to provide supporting documents, a personal statement, and other information to support your case. The Department will consider any prior ETA refusal as part of the 600 assessment — but a refusal of the ETA does not automatically result in refusal of the 600. The subclass 600 takes longer to process and carries a government charge, but it is the appropriate pathway if the ETA has been refused." },
              { title: "Understand why the ETA was refused", body: "ETA refusals are often brief in their stated reasons. Common causes include previous visa refusals (Australia or elsewhere), previous overstays, character concerns, or failure to satisfy genuine temporary entry requirements. Understanding the likely reason helps prepare a stronger subclass 600 application. A registered migration agent can assist with this assessment." },
              { title: 'Seek advice before applying again', body: "Submitting multiple ETA applications in quick succession after a refusal is unlikely to produce a different result and may complicate a future subclass 600 application. Seek advice from a registered migration agent before applying for any further visa after an ETA refusal. Nanak Migration Group (MARN 2619467) can assess your circumstances and advise on the strongest approach." },
            ].map(item => (
              <div key={item.title} style={{ background: '#fafbfe', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
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

      {/* ── RELATED ────────────────────────────────────────────── */}
      <section id="related" style={{ background: '#fafbfe', padding: '80px 32px', borderTop: `1px solid #eef0f6` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also on this site" title="Related pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Refused an ETA, or need help with a subclass 600?"
        body="If your ETA has been refused, or if you need a more complex visitor visa — sponsored family, longer stay, previous refusals — Nanak Migration Group (MARN 2619467) can assess your situation and advise on the strongest approach."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
