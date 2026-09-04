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
  { id: 'pic4013-4014', label: 'PIC 4013 & 4014' },
  { id: '28-day-rule', label: 'The 28-day departure rule' },
  { id: 'section-501', label: 'Section 501 exclusions' },
  { id: 'waiver', label: 'Waiver and exceptions' },
  { id: 'planning-return', label: 'Planning a lawful return' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'alert',
    value: 'PIC 4013',
    label: '3-year exclusion after cancellation of certain visas',
    note: 'PIC 4013 imposes a 3-year exclusion period for people whose visa was cancelled under certain grounds. The exclusion prevents the grant of a new visa (with limited exceptions) until the period expires.',
  },
  {
    icon: 'alert',
    value: 'PIC 4014',
    label: '3-year exclusion after departing as an unlawful non-citizen',
    note: 'PIC 4014 imposes a 3-year exclusion period on people who departed Australia as an unlawful non-citizen. Departing within 28 days of becoming unlawful can avoid triggering PIC 4014.',
  },
  {
    icon: 'calendar',
    value: '28 days',
    label: 'Key window to avoid the PIC 4014 exclusion',
    note: 'If a person becomes unlawful (their visa expires) and departs Australia within 28 days of the expiry, PIC 4014 is generally not triggered. After 28 days, the exclusion period applies.',
  },
  {
    icon: 'scale',
    value: 'Waiver possible',
    label: 'Some bans can be waived — compelling reasons or Australian citizen/PR impact',
    note: 'PIC 4013 and 4014 can be waived for certain visa classes if the decision-maker is satisfied that compelling circumstances affect an Australian citizen or permanent resident. The waiver is discretionary, not a right.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: "How do I know if I have a PIC 4013 or 4014 re-entry ban?",
    answer: "PIC 4013 applies if your visa was cancelled under certain grounds (most commonly section 116 of the Migration Act) while you were in Australia. PIC 4014 applies if you departed Australia as an unlawful non-citizen — that is, while you had no valid visa. The exclusion period runs from the date of cancellation (for PIC 4013) or from the date of departure (for PIC 4014). If you are unsure whether a ban applies to you, you can contact the Department of Home Affairs or seek advice from a registered migration agent who can review your immigration record. The existence of an exclusion can sometimes be confirmed through a Freedom of Information (FOI) request for your immigration file.",
  },
  {
    question: "If I departed as an unlawful non-citizen within 28 days of my visa expiring, is the PIC 4014 ban avoided?",
    answer: "Generally yes — PIC 4014 does not apply to a person who was an unlawful non-citizen for fewer than 28 days before departing Australia. The 28-day period is counted from the moment the person's last substantive visa expired. If you departed within 28 days, you should not be subject to PIC 4014. However, this does not mean there are no other adverse consequences from having been unlawful — the period of being unlawful is still a relevant adverse immigration history factor in future applications. Keep records of your departure date and your visa expiry date to demonstrate that the 28-day window was not exceeded.",
  },
  {
    question: "Can a PIC 4013 or 4014 ban be waived for a partner visa?",
    answer: "Yes — the partner visa (subclass 820/801 onshore and 309/100 offshore) is one of the visa classes for which PIC 4013 and 4014 can be waived if the decision-maker is satisfied that there are compelling circumstances affecting an Australian citizen or permanent resident. Compelling circumstances commonly include: the impact on an Australian-citizen spouse or de facto partner, the impact on Australian-citizen children, and situations where the exclusion would have a disproportionate effect on the Australian family members. The waiver is a genuine discretion — it is not automatic and must be supported by specific evidence of the compelling circumstances affecting the Australian citizen or PR.",
  },
  {
    question: "What is the difference between a PIC 4013/4014 ban and a section 501 exclusion?",
    answer: "PIC 4013 and 4014 are exclusion periods tied to immigration compliance failures — overstaying, being unlawful, or visa cancellations under section 116. They are generally time-limited (3 years) and can be waived for some visa classes. Section 501 of the Migration Act gives the Minister a character-based power to refuse or cancel a visa. A section 501 refusal or cancellation can result in an exclusion from Australia that is indefinite — it does not automatically expire after 3 years. Section 501 exclusions are significantly more serious and arise from criminal convictions, association with crime, or character concerns. Waiver or revocation of a section 501 decision requires separate ministerial processes and is a distinct, more complex area.",
  },
  {
    question: "My visa was cancelled. When does the 3-year PIC 4013 period start?",
    answer: "The 3-year exclusion period under PIC 4013 generally commences from the date the visa cancellation took effect — which is usually the date stated in the cancellation notice. The 3 years run from that date, not from the date you departed Australia. This means that even if you remained in Australia after the cancellation on a bridging visa while pursuing an ART review, the clock on the 3-year exclusion is already running. Keep a record of the cancellation date. The exclusion period ends 3 years after that date and you can then apply for a new visa (subject to meeting all other requirements) without the PIC 4013 impediment.",
  },
  {
    question: "Is there anything I can do to return to Australia before the 3-year ban ends?",
    answer: "If the 3-year exclusion applies to you and has not yet ended, your options are limited. For some visa classes (particularly partner visas), the ban can be waived if there are compelling circumstances affecting an Australian citizen or permanent resident. For most other visa classes, the exclusion cannot be waived and you must wait until it expires. If you have strong Australian connections — a citizen spouse, Australian-citizen children — seek advice on whether a waiver is available for the visa you are considering. No agent can guarantee a waiver outcome.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Visa Cancellation', desc: 'Understanding cancellation grounds, the NOICC process and how to respond.', icon: 'alert', page: 'visa-cancellation', color: ACCENT },
  { title: 'Section 48 Bar', desc: 'The onshore restriction after a refusal or cancellation — interaction with re-entry bans.', icon: 'shield', page: 'section-48-bar', color: ACCENT },
  { title: 'PIC 4020', desc: 'The integrity criterion — false information and document fraud and resulting bans.', icon: 'shield', page: 'pic-4020', color: ACCENT },
  { title: 'ART Review', desc: 'Challenging a visa cancellation decision to limit the duration of exclusion.', icon: 'scale', page: 'art-review', color: ACCENT },
]

export default function ReEntryBansPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['re-entry-bans'].title }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Reviews & Complex', url: 'https://www.nanakmigration.com.au/visa-refusal-review' },
          { name: 'Re-entry Bans and Exclusion Periods', url: 'https://www.nanakmigration.com.au/re-entry-bans' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{ name: 'Re-entry Bans and Exclusion Period Advice', description: PAGE_META['re-entry-bans'].metaDescription, url: 'https://www.nanakmigration.com.au/re-entry-bans' }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Reviews & Complex', page: 'visa-refusal-review' },
          { label: 'Re-entry Bans' },
        ]}
      />

      <PageHero
        variant="standard"
        eyebrow="Reviews & Complex"
        eyebrowSub="Guides & Rules · Re-entry Bans"
        title={<>Re-entry Bans and Exclusion Periods<br /><em style={{ fontStyle: 'italic', color: GOLD }}>PIC 4013, PIC 4014 and Section 501</em></>}
        deck="Departing Australia unlawfully or having a visa cancelled can trigger a 3-year exclusion period that prevents re-entry. Understanding when the ban applies, how the 28-day window can help, and when a waiver is possible is essential for planning a lawful return."
        shortAnswer={<><strong style={{ color: NAVY }}>PIC 4013</strong> imposes a 3-year exclusion after cancellation of a visa under certain grounds. <strong style={{ color: NAVY }}>PIC 4014</strong> imposes a 3-year exclusion after departing Australia as an unlawful non-citizen. The critical exception: <strong style={{ color: NAVY }}>departing within 28 days</strong> of the visa expiry generally avoids triggering PIC 4014. Both bans can be <strong style={{ color: NAVY }}>waived for some visa classes</strong> — most notably partner visas — where compelling circumstances affect an Australian citizen or permanent resident. <strong style={{ color: NAVY }}>Section 501</strong> character exclusions are a separate, more serious category that do not automatically expire and require ministerial processes to overturn. Nanak Migration Group (MARN 2619467) can advise on whether a ban applies to your situation and what options remain available.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Visa Cancellation guide →', page: 'visa-cancellation' }}
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
          <SectionHeading kicker="The problem" title="What Re-entry Bans Are and How They Arise" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 20 }}>
            Re-entry bans — formally called exclusion periods — prevent a person from being granted an Australian visa for a defined period after a migration compliance failure. The two main exclusion criteria in the <em>Migration Regulations 1994</em> that affect returning former residents or overstayers are PIC 4013 and PIC 4014.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            Both PIC 4013 and PIC 4014 impose a 3-year exclusion period. The exclusion means that the person cannot be granted a visa — for any purpose — unless the exclusion has expired or has been waived. Understanding which criterion applies, when the exclusion period started, and whether a waiver is available is the first step in assessing options for return.
          </p>
          <Callout variant="warning" panel={true} title="Overstaying and leaving without checking your status can trigger a 3-year ban">
            Many people are unaware that departing Australia after the expiry of their visa — without having either renewed it or departed within 28 days of expiry — triggers PIC 4014. The ban is applied automatically on any future visa application and is not prominently signposted at the time of departure. If you have previously overstayed and departed, seek advice before attempting to apply for a new Australian visa.
          </Callout>
        </div>
      </section>

      {/* ── PIC 4013 and 4014 ────────────────────────────────────── */}
      <section id="pic4013-4014" style={{ background: '#f8fafd', padding: '64px 32px 56px', borderTop: '1px solid #e8edf5', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="The two criteria" title="PIC 4013 and PIC 4014 Explained" />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              {
                code: 'PIC 4013',
                heading: 'Exclusion after visa cancellation',
                points: [
                  'Applies where the person\'s visa was cancelled under section 116, section 128, or section 134 of the Migration Act',
                  'The 3-year exclusion runs from the date the cancellation took effect',
                  'Applies to cancellations for breach of visa conditions (e.g. condition 8105 work limitation, student condition 8202)',
                  'Can also apply following a Ministerial Direction or where the person departed after a Non-Citizen in Australia notice',
                  'Waiver is available for certain visa classes where compelling circumstances affect an Australian citizen or PR',
                ],
              },
              {
                code: 'PIC 4014',
                heading: 'Exclusion after departing as unlawful',
                points: [
                  'Applies where the person departed Australia as an unlawful non-citizen — that is, without a valid visa',
                  'The 3-year exclusion runs from the date of departure from Australia',
                  'Does NOT apply if the person was an unlawful non-citizen for fewer than 28 days before departing',
                  'Applies even if the overstay was brief — once 28 days is exceeded, the exclusion applies on departure',
                  'Waiver is available for certain visa classes where compelling circumstances affect an Australian citizen or PR',
                ],
              },
            ].map(card => (
              <div key={card.code} style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 14, overflow: 'hidden' }}>
                <div style={{ padding: '16px 22px', background: NAVY }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: GOLD, letterSpacing: '0.08em' }}>{card.code}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginTop: 2 }}>{card.heading}</div>
                </div>
                <div style={{ padding: 22 }}>
                  <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                    {card.points.map((p, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 6 }} />
                        <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 28-day rule ──────────────────────────────────────────── */}
      <section id="28-day-rule" style={{ padding: '64px 32px 56px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Critical exception" title="The 28-day Departure Window Under PIC 4014" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            PIC 4014 does not apply to a person who was unlawful for fewer than 28 days before departing Australia. This means that if your visa expires and you depart Australia within 28 days of expiry, you generally will not be subject to the 3-year exclusion — though you will still have a period of being unlawful on your immigration record.
          </p>

          <div style={{ overflowX: 'auto' as const, marginBottom: 32 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 14, minWidth: 560 }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  {['Scenario', 'PIC 4014 ban?', 'Notes'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', color: '#fff', fontWeight: 700, fontSize: 12, textAlign: 'left' as const, letterSpacing: '0.04em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { scenario: 'Visa expired — departed within 28 days of expiry', ban: 'No (generally)', notes: 'PIC 4014 does not apply. Period of being unlawful is still on record.' },
                  { scenario: 'Visa expired — departed after more than 28 days unlawful', ban: 'Yes — 3 years from departure', notes: '3-year exclusion runs from date of departure.' },
                  { scenario: 'Bridging visa expired — departed after more than 28 days unlawful', ban: 'Yes — 3 years from departure', notes: 'Same rule applies. Bridging visa expiry is the reference date.' },
                  { scenario: 'Left Australia on a valid Bridging Visa B (BVB)', ban: 'No', notes: 'Had a lawful status at time of departure. No unlawful status triggered.' },
                ].map((row, i) => (
                  <tr key={row.scenario} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafd', borderBottom: '1px solid #e8edf6' }}>
                    <td style={{ padding: '13px 16px', color: NAVY, fontWeight: 500 }}>{row.scenario}</td>
                    <td style={{ padding: '13px 16px', color: row.ban.startsWith('No') ? '#16a34a' : '#dc2626', fontWeight: 600 }}>{row.ban}</td>
                    <td style={{ padding: '13px 16px', color: '#6b7280', fontSize: 13 }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 501 ──────────────────────────────────────────── */}
      <section id="section-501" style={{ background: '#f8fafd', padding: '64px 32px 56px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="A separate regime" title="Section 501 Character Exclusions" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>
            Section 501 of the Migration Act gives the Minister and delegates a power to refuse or cancel a visa on character grounds — for example, where a person has a substantial criminal record, is associated with a criminal group, or poses a risk to the Australian community. Section 501 exclusions are significantly different from PIC 4013/4014 exclusions.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Key differences from PIC 4013/4014</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Section 501 exclusions do not automatically expire after 3 years — there is no fixed time limit',
                  'Revocation of a section 501 cancellation or refusal requires a separate ministerial process',
                  'Section 501 exclusions arise from character concerns, not just immigration compliance failures',
                  'The legal and procedural pathway for overturning a s501 decision is distinct from PIC 4013/4014 waiver',
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
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 12 }}>If you have a section 501 exclusion</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Seek specialist migration legal advice — section 501 matters are among the most complex in Australian immigration law',
                  'A revocation request can be made to the Minister — but only in defined circumstances and with defined procedures',
                  'ART review may be available for some s501 decisions — strict time limits apply',
                  'No agent can guarantee an outcome in s501 matters',
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
          </div>
        </div>
      </section>

      {/* ── Waiver ───────────────────────────────────────────────── */}
      <section id="waiver" style={{ padding: '64px 32px 56px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Options for early return" title="When a PIC 4013 or 4014 Ban Can Be Waived" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            A waiver of PIC 4013 or 4014 is available for defined visa classes where there are compelling circumstances affecting an Australian citizen or permanent resident. The waiver does not apply to all visa types — it is most commonly relevant to partner visas and some family visas.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            <div style={{ background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Compelling circumstances that commonly support waiver</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'The ban affects an Australian citizen or permanent-resident spouse or de facto partner',
                  'Australian-citizen children who are dependent on the relationship and whose wellbeing would be significantly affected',
                  'Medical condition of an Australian sponsor or family member that creates a specific care need',
                  'Circumstances that are specific to the family — not simply general hardship or inconvenience',
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a', flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Factors generally insufficient alone</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'The desire of the applicant to return to Australia without specific impact on an Australian citizen or PR',
                  'General economic hardship or the cost of waiting',
                  'A genuine relationship alone — the compelling circumstances must relate to an Australian citizen or PR',
                  'Long period of prior residence in Australia without other connecting factors',
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Planning a lawful return ──────────────────────────────── */}
      <section id="planning-return" style={{ background: '#f8fafd', padding: '64px 32px 56px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Next steps" title="Planning a Lawful Return to Australia" />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {[
              { num: '01', title: 'Identify whether a ban applies and which criterion', body: 'Confirm whether PIC 4013 or PIC 4014 applies to your situation and when the 3-year period started. If in doubt, seek a records check through the Department or an FOI request.' },
              { num: '02', title: 'Determine when the exclusion period ends', body: 'Calculate the end date of the 3-year exclusion. Once the exclusion period has expired, you may apply for a visa without the PIC 4013/4014 impediment — but other adverse history factors remain relevant.' },
              { num: '03', title: 'Assess whether a waiver is available', body: 'If the visa you want to apply for uses PIC 4013 or 4014 and a waiver provision is available, assess whether compelling circumstances affecting an Australian citizen or PR can be demonstrated. Seek advice before lodging.' },
              { num: '04', title: 'Prepare the visa application thoroughly', body: 'Even after the exclusion period expires or a waiver is obtained, the prior period of unlawful stay and any cancellation remain relevant immigration history factors. A thorough application that addresses these matters honestly is more likely to succeed than one that does not acknowledge them.' },
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

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: '64px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Re-entry Ban Questions Answered" />
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
        title="Affected by a re-entry ban? Get advice on your options."
        body="Nanak Migration Group (MARN 2619467) can assess whether a ban applies, when it expires, and whether a waiver is available for the visa you intend to apply for. No outcome can be guaranteed."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
