import React, { useState, useMemo } from 'react'
import { GOLD, NAVY, NAVY_DARK, HERO_GRAD, CAT_REVIEWS, GREY_BAND } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  SectionHeading,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  ComplianceDisclaimer,
  AnswerBox,
} from '@/components/page'
import type { RelatedPage, FaqItem } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'
import Icon from '@/components/ui/Icon'

const CURRENT_AS_AT = 'August 2026'

const RED = CAT_REVIEWS
const AMBER = GOLD


// ── Decision type data ───────────────────────────────────────
const DECISION_TYPES = [
  {
    visa: 'Most onshore visa refusals / cancellations',
    examples: ['Partner 820', 'Student 500', 'Skilled 189/190', 'General skilled'],
    days: 28,
    extendable: false,
    notes: 'Clock runs from deemed notification — usually 3 days after DHA sends the letter via ImmiAccount.',
    severity: 'red',
  },
  {
    visa: 'Protection visa refusals (onshore)',
    examples: ['Subclass 866 Protection'],
    days: 35,
    extendable: false,
    notes: '35 calendar days from deemed notification. Non-extendable. Lodgement outside this window is jurisdictionally invalid.',
    severity: 'red',
  },
  {
    visa: 'Employer-sponsored refusals / cancellations',
    examples: ['482 SID', '186 ENS', '494 Regional'],
    days: 28,
    extendable: false,
    notes: 'Both nomination refusals and visa refusals attract separate review rights — you may need two lodgements.',
    severity: 'red',
  },
  {
    visa: 'Visitor / tourist refusals',
    examples: ['Subclass 600', 'ETA', 'eVisitor'],
    days: null,
    extendable: false,
    notes: 'Visitor visa decisions are generally not reviewable at the ART (they are merits-review excluded). Options are limited — seek advice immediately.',
    severity: 'amber',
  },
  {
    visa: 'Offshore refusals',
    examples: ['Partner 309', 'Various offshore classes'],
    days: null,
    extendable: false,
    notes: 'Offshore refusals are generally not reviewable at the ART. Options may include re-application, ministerial intervention or judicial review.',
    severity: 'amber',
  },
  {
    visa: 'Character cancellations (s501)',
    examples: ['Section 501 cancellation'],
    days: 28,
    extendable: false,
    notes: 'Mandatory and discretionary cancellations under s501 — separate ART jurisdiction. The Minister can override any ART decision in the national interest.',
    severity: 'red',
  },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Read Your Refusal Letter Today',
    body: 'The letter states your exact time limit and the deemed notification date. Do not assume 28 days — check the letter. The clock may already be running.',
    urgent: true,
    icon: 'file',
  },
  {
    step: '02',
    title: 'Contact a Registered Migration Agent',
    body: 'ART reviews require a written case — grounds, evidence, legal submissions. An agent assesses whether review or re-application is the better strategy before you pay the ART fee.',
    urgent: true,
    icon: 'phone',
  },
  {
    step: '03',
    title: 'Lodge With the ART Before the Deadline',
    body: 'Lodge via art.gov.au. Pay the fee at lodgement (fee varies by decision type — check art.gov.au for current rates). A bridging visa (BVB) activates upon valid lodgement if you are onshore.',
    urgent: false,
    icon: 'file',
  },
  {
    step: '04',
    title: 'Statement of Facts + Evidence Round',
    body: 'The ART issues a Statement of Facts from DHA. You and your agent respond with written submissions and supporting evidence. The quality of this response is the primary determinant of outcome.',
    urgent: false,
    icon: 'scale',
  },
  {
    step: '05',
    title: 'Hearing (If Listed)',
    body: 'Some cases are decided on documents alone. Others proceed to a hearing — in person, by video or by phone. Your agent prepares you for any questions the ART member may ask.',
    urgent: false,
    icon: 'trending',
  },
  {
    step: '06',
    title: 'Decision',
    body: "The ART can affirm the refusal, set it aside and substitute a grant, or remit it back to DHA with directions. If the ART affirms and you have legal grounds, Federal Circuit Court judicial review may be available — different jurisdiction, much stricter test.",
    urgent: false,
    icon: 'shield',
  },
]

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How long do I have to appeal a visa refusal in Australia?',
    answer: 'Most onshore visa refusal reviews at the Administrative Review Tribunal (ART) must be lodged within 28 days of deemed notification of the decision. Some decision types allow less time, and for most migration decisions the deadline cannot be extended — lodging even one day late will result in the ART having no jurisdiction to hear your case. Your exact time limit is in your refusal letter.',
  },
  {
    question: 'What replaced the AAT? Is the ART the same thing?',
    answer: "Yes — the Administrative Appeals Tribunal (AAT) was abolished and replaced by the Administrative Review Tribunal (ART) on 14 October 2024. If you received a refusal letter referring to the \"AAT\", that body no longer exists. All new migration review lodgements go to the ART. Existing cases transferred automatically. The ART operates with different procedures and fee structures — if you have an old AAT reference number, confirm the ART's position on your case.",
  },
  {
    question: 'Can the ART deadline be extended?',
    answer: 'For most migration decisions, no. The time limit is jurisdictional — the ART simply has no power to hear a case lodged outside it. There is no "good reason" exception for most visa refusals. This is different from civil courts where extensions are routinely granted. If you have missed the deadline, options are limited to re-application or (in some cases) Ministerial Intervention.',
  },
  {
    question: 'Is my bridging visa affected by a refusal?',
    answer: 'If you are onshore and your substantive visa is refused, your Bridging Visa A (BVA) generally ceases if you do not validly lodge an ART application within the review period. If you lodge a valid ART application, a Bridging Visa B (BVB) activates, allowing you to remain in Australia while the review is pending. If you miss the deadline, you may become unlawful — seek advice immediately as departure bar and re-entry bans may apply.',
  },
  {
    question: 'Does the ART just re-examine what DHA looked at?',
    answer: "No — the ART conducts a fresh merits review. It considers the decision on its merits at the time of the ART hearing, not just the material DHA had. This means new evidence, changed circumstances and expert reports can all be put before the ART and may change the outcome. This is the practical reason why ART review is often more valuable than simply re-applying with DHA.",
  },
  {
    question: 'What are my options if the ART affirms the refusal?',
    answer: 'If the ART affirms (i.e. agrees with DHA), the options narrow significantly: (1) Judicial review in the Federal Circuit and Family Court — strict grounds, much higher threshold, not a re-run of the merits; (2) Ministerial Intervention — a separate, discretionary process where the Minister can substitute a more favourable decision; (3) Re-application to DHA if circumstances have changed and the s48 bar does not apply. All of these are time-sensitive — seek advice before the ART decision becomes final.',
  },
  {
    question: 'Can I include new evidence at the ART that DHA did not consider?',
    answer: "Yes — this is one of the ART's key advantages over DHA review. The ART's role is to examine what the correct decision should be at the time of the hearing, not just assess whether DHA made a procedurally correct decision. Witnesses can appear, new documents can be filed, and updated circumstances can be argued. Experienced ART preparation — knowing what evidence the tribunal weighs most — is where migration agents add the most value.",
  },
  {
    question: 'My visitor visa was refused. Can I appeal?',
    answer: "Generally no — visitor visa (Subclass 600, ETA, eVisitor) decisions are merits-review excluded. You cannot take them to the ART. Options are: re-application with stronger evidence, requesting DHA reconsider (no formal right, but occasionally effective), or in some cases Ministerial Intervention. If the refusal relates to character or a more serious matter, the review rights analysis changes — get advice specific to your letter.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Visa Refusal Review Hub', desc: 'Overview of all review and appeal options after a visa refusal.', icon: 'alert', page: 'visa-refusal-review', color: CAT_REVIEWS },
  { title: 'Bridging Visas', desc: 'Understanding bridging visa status while your ART review is pending.', icon: 'clock', page: 'bridging-visas', color: CAT_REVIEWS },
]

export default function ARTReviewPage({ navigate }: { navigate: (page: string) => void }) {
  const [notificationDate, setNotificationDate] = useState('')
  const [decisionTypeIdx, setDecisionTypeIdx] = useState(0)
  const [deemedDays, setDeemedDays] = useState(3)

  const deadline = useMemo(() => {
    if (!notificationDate) return null
    const dt = DECISION_TYPES[decisionTypeIdx]
    if (!dt.days) return null
    const notif = new Date(notificationDate)
    const deemed = new Date(notif)
    deemed.setDate(deemed.getDate() + deemedDays)
    const deadlineDate = new Date(deemed)
    deadlineDate.setDate(deadlineDate.getDate() + dt.days)
    const now = new Date()
    const daysLeft = Math.floor((deadlineDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    return { deemed, deadlineDate, daysLeft }
  }, [notificationDate, decisionTypeIdx, deemedDays])

  const urgencyColor = deadline
    ? deadline.daysLeft <= 0 ? '#6b7280'
      : deadline.daysLeft <= 7 ? RED
      : deadline.daysLeft <= 14 ? AMBER
      : GOLD
    : NAVY

  const urgencyLabel = deadline
    ? deadline.daysLeft <= 0 ? 'DEADLINE PASSED'
      : deadline.daysLeft === 1 ? '1 DAY LEFT'
      : `${deadline.daysLeft} DAYS LEFT`
    : ''

  React.useEffect(() => {
    document.title = PAGE_META['art-review'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#ffffff', color: NAVY }}>

      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Visa Refusal & Review', url: 'https://www.nanakmigration.com.au/visa-refusal-review' },
          { name: 'ART Review', url: 'https://www.nanakmigration.com.au/art-review' },
        ]}
        faqs={FAQ_ITEMS}
        service={{ name: 'Administrative Review Tribunal (ART) Review', description: PAGE_META['art-review'].metaDescription, url: 'https://www.nanakmigration.com.au/art-review' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Reviews & Complex', page: 'visa-refusal-review' },
        { label: 'ART Reviews & Appeals' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Reviews & Complex Cases"
        title={<>Administrative Review<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Tribunal (ART)</em></>}
        deck="If your visa has been refused or cancelled, the ART offers a merits review — a fresh look at the decision. Time limits are strict. Act immediately."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Get urgent review advice', page: 'book-consultation' }}
        secondaryCta={{ label: 'Visa Refusal Hub →', page: 'visa-refusal-review' }}
        accent={CAT_REVIEWS}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            The Administrative Review Tribunal (ART) provides an independent merits review of visa refusal and cancellation decisions made by the Department of Home Affairs, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Lodging an ART application generally does not stay removal from Australia unless a separate bridging visa is in place. Time limits apply — in most cases you have 21 days from the date of the decision to lodge an application.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* ── AAT → ART name change callout ── */}
      <div style={{ background: '#fff', padding: '48px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ background: NAVY, borderRadius: 16, padding: '22px 24px', border: `1px solid rgba(245,161,36,0.3)` }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, marginBottom: 10 }}>Important — Name Change</div>
            <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 21, fontWeight: 700, color: '#fff', marginBottom: 10, lineHeight: 1.3 }}>The AAT is now the ART</div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0 }}>
              The Administrative Appeals Tribunal (AAT) was abolished on <strong style={{ color: '#fff' }}>14 October 2024</strong> and replaced by the Administrative Review Tribunal (ART). All new migration review lodgements go to the ART. If your refusal letter says "AAT", those deadlines still apply — but the body you appeal to is now the ART at <a href="https://www.art.gov.au" target="_blank" rel="noopener noreferrer" style={{ color: GOLD, textDecoration: 'none', fontWeight: 600 }}>art.gov.au</a>.
            </p>
          </div>

          {/* Key facts */}
          <div style={{ marginTop: 24, background: '#fff', borderRadius: 16, border: `2px solid ${RED}20`, overflow: 'hidden', boxShadow: '0 8px 40px rgba(27,43,94,0.1)' }}>
            <div style={{ background: NAVY, padding: '14px 22px' }}>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Critical Facts — Read Before Anything Else</div>
            </div>
            {[
              { label: 'Standard review deadline', val: '28 days from deemed notification', icon: 'clock', urgent: true },
              { label: 'Deemed notification', val: 'Usually 3 working days after DHA sends letter', icon: 'calendar', urgent: false },
              { label: 'Can the deadline be extended?', val: 'No — for most migration decisions', icon: 'x', urgent: true },
              { label: 'What happens if I miss it?', val: 'ART has no jurisdiction — cannot review', icon: 'alert', urgent: true },
              { label: 'Bridging visa on lodgement?', val: 'BVB activates if validly lodged onshore', icon: 'shield', urgent: false },
              { label: 'What the ART can do', val: 'Affirm, set aside, or remit to DHA', icon: 'scale', urgent: false },
              { label: 'New evidence allowed?', val: 'Yes — fresh merits review, not just DHA record', icon: 'check', urgent: false },
              { label: 'ART fees', val: 'Check art.gov.au — set by the Tribunal', icon: 'info', urgent: false },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 22px', borderBottom: i < 7 ? '1px solid #f3f4f8' : 'none', background: row.urgent ? '#fff9f9' : 'transparent' }}>
                <span style={{ width: 26, height: 26, borderRadius: 6, background: row.urgent ? `${RED}12` : '#f0f2f8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={row.icon} size={13} color={row.urgent ? RED : '#6b7280'} />
                </span>
                <span style={{ fontSize: 13, color: '#6b7280', flex: '0 0 150px' }}>{row.label}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: row.urgent ? RED : NAVY }}>{row.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DEADLINE CALCULATOR ── */}
      <div id="deadline-calc" style={{ background: NAVY, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

            {/* Inputs */}
            <div>
              <SectionHeading kicker="Deadline Calculator" title="When Is Your ART Deadline?" intro="Enter the date DHA notified you of the refusal. We calculate deemed receipt and your lodgement deadline. This is indicative — always verify against your refusal letter." accent={RED} light marginBottom={28} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: 6 }}>Date on refusal / notification letter <span style={{ color: RED }}>*</span></label>
                  <input type="date" value={notificationDate} onChange={e => setNotificationDate(e.target.value)}
                    style={{ width: '100%', padding: '11px 14px', borderRadius: 8, fontSize: 14, background: 'rgba(255,255,255,0.08)', border: `1.5px solid ${notificationDate ? RED + '60' : 'rgba(255,255,255,0.15)'}`, color: '#fff', outline: 'none', fontFamily: "'Gilroy', sans-serif", boxSizing: 'border-box' }} />
                </div>

                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: 8 }}>Decision type</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {[
                      { label: 'Most onshore refusals (student, partner, skilled)', days: 28 },
                      { label: 'Protection visa refusals', days: 35 },
                      { label: 'Character cancellations (s501)', days: 28 },
                    ].map((opt, i) => (
                      <button key={i} onClick={() => setDecisionTypeIdx(i === 1 ? 1 : i === 2 ? 5 : 0)}
                        style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 8, border: `1.5px solid ${decisionTypeIdx === (i === 1 ? 1 : i === 2 ? 5 : 0) ? RED : 'rgba(255,255,255,0.12)'}`, background: decisionTypeIdx === (i === 1 ? 1 : i === 2 ? 5 : 0) ? `${RED}15` : 'rgba(255,255,255,0.04)', cursor: 'pointer', textAlign: 'left' }}>
                        <div style={{ width: 16, height: 16, borderRadius: '50%', border: `2px solid ${decisionTypeIdx === (i === 1 ? 1 : i === 2 ? 5 : 0) ? RED : 'rgba(255,255,255,0.3)'}`, background: decisionTypeIdx === (i === 1 ? 1 : i === 2 ? 5 : 0) ? RED : 'transparent', flexShrink: 0 }} />
                        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', flex: 1 }}>{opt.label}</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: RED }}>{opt.days} days</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: 8 }}>
                    How did DHA notify you?
                  </label>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {[
                      { label: 'ImmiAccount / email', days: 3 },
                      { label: 'Post (regular mail)', days: 7 },
                    ].map(opt => (
                      <button key={opt.label} onClick={() => setDeemedDays(opt.days)}
                        style={{ flex: 1, padding: '10px 12px', borderRadius: 8, border: `1.5px solid ${deemedDays === opt.days ? GOLD : 'rgba(255,255,255,0.12)'}`, background: deemedDays === opt.days ? `${GOLD}12` : 'rgba(255,255,255,0.04)', color: deemedDays === opt.days ? GOLD : 'rgba(255,255,255,0.65)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                        {opt.label}<br />
                        <span style={{ fontSize: 11, opacity: 0.7 }}>+{opt.days} days deemed receipt</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 20, padding: '14px 18px', background: 'rgba(245,161,36,0.1)', border: '1px solid rgba(245,161,36,0.25)', borderRadius: 10 }}>
                <div style={{ fontSize: 13, color: GOLD, fontWeight: 700, marginBottom: 4 }}>Always verify against your letter</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>This calculator is indicative. The refusal letter states your exact time limit and how it is calculated. If the letter and this tool differ, the letter governs.</div>
              </div>
            </div>

            {/* Result display */}
            <div>
              {deadline ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {/* Countdown */}
                  <div style={{ background: deadline.daysLeft <= 0 ? 'rgba(107,114,128,0.1)' : `${urgencyColor}12`, border: `2px solid ${deadline.daysLeft <= 0 ? 'rgba(107,114,128,0.2)' : urgencyColor + '35'}`, borderRadius: 20, padding: '32px 28px', textAlign: 'center' }}>
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: urgencyColor, marginBottom: 12 }}>
                      {deadline.daysLeft <= 0 ? 'Deadline Status' : 'Time Remaining'}
                    </div>
                    <div style={{ fontSize: 80, fontWeight: 900, color: urgencyColor, lineHeight: 1, fontFamily: "'Gilroy', sans-serif", marginBottom: 4 }}>
                      {deadline.daysLeft <= 0 ? '0' : deadline.daysLeft}
                    </div>
                    <div style={{ fontSize: 17, color: urgencyColor, fontWeight: 700, marginBottom: 16 }}>
                      {urgencyLabel}
                    </div>
                    {deadline.daysLeft > 0 && deadline.daysLeft <= 7 && (
                      <div style={{ background: `${RED}20`, border: `1px solid ${RED}40`, borderRadius: 10, padding: '12px 16px', fontSize: 14, color: 'rgba(220,38,38,0.4)', fontWeight: 600, marginBottom: 8 }}>
                        CRITICAL — contact a registered agent today
                      </div>
                    )}
                    {deadline.daysLeft <= 0 && (
                      <div style={{ background: 'rgba(107,114,128,0.15)', borderRadius: 10, padding: '12px 16px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                        The standard ART window has passed. Ministerial Intervention or re-application may still be available — seek advice today.
                      </div>
                    )}
                  </div>

                  {/* Date breakdown */}
                  <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, overflow: 'hidden' }}>
                    {[
                      { label: 'DHA notification date', date: new Date(notificationDate), color: '#9ca3af' },
                      { label: `Deemed receipt (+${deemedDays} days)`, date: deadline.deemed, color: GOLD },
                      { label: `ART lodgement deadline (${DECISION_TYPES[decisionTypeIdx].days} days)`, date: deadline.deadlineDate, color: urgencyColor },
                    ].map((row, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 22px', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>{row.label}</span>
                        <span style={{ fontSize: 15, fontWeight: 700, color: row.color }}>
                          {row.date.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a href="#contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, backgroundColor: GOLD, color: NAVY_DARK, padding: '16px 24px', borderRadius: 12, textDecoration: 'none', fontSize: 16, fontWeight: 800, boxShadow: "0 6px 28px rgba(245,161,36,0.50)" }}>
                    <Icon name="phone" size={16} color="#fff" /> Request Same-Day Triage
                  </a>
                  <div style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Navpreet Aulakh · MARN 2619467 · Registered Migration Agent</div>
                </div>
              ) : (
                <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px dashed rgba(255,255,255,0.15)', borderRadius: 20, padding: '56px 32px', textAlign: 'center' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: `${RED}15`, border: `2px solid ${RED}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <Icon name="clock" size={24} color={RED} />
                  </div>
                  <div style={{ fontSize: 17, color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Enter the date on your refusal letter</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.25)' }}>Your deadline will appear here immediately</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── DECISION TYPES ── */}
      <div style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="By Decision Type" title="Review Rights by Visa Type" intro="Not all refusals are reviewable at the ART. Check which category applies to your situation." accent={RED} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {DECISION_TYPES.map((dt, i) => (
              <div key={i} style={{ background: dt.severity === 'amber' ? 'rgba(245,161,36,0.08)' : '#fff', border: `1.5px solid ${dt.severity === 'amber' ? 'rgba(245,161,36,0.3)' : '#e8edf6'}`, borderRadius: 14, padding: '18px 24px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 2fr', gap: 16, alignItems: 'start' }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{dt.visa}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {dt.examples.map(ex => (
                      <span key={ex} style={{ fontSize: 12, color: '#6b7280', background: '#f0f2f8', padding: '2px 8px', borderRadius: 10 }}>{ex}</span>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: '#9ca3af', marginBottom: 4, letterSpacing: '0.08em' }}>Time Limit</div>
                  <div style={{ fontSize: 19, fontWeight: 800, color: dt.days ? NAVY : '#9ca3af', fontFamily: "'Gilroy', sans-serif" }}>
                    {dt.days ? `${dt.days} days` : 'N/A'}
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: '#9ca3af', marginBottom: 4, letterSpacing: '0.08em' }}>ART Review</div>
                  <span style={{ display: 'inline-block', fontSize: 13, fontWeight: 700, padding: '4px 12px', borderRadius: 20, background: dt.days ? 'rgba(245,161,36,0.12)' : 'rgba(220,38,38,0.12)', color: dt.days ? GOLD : RED }}>
                    {dt.days ? 'Available' : 'Generally No'}
                  </span>
                </div>
                <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{dt.notes}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROCESS STEPS ── */}
      <div style={{ background: GREY_BAND, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="What Happens Next" title="The ART Review Process" accent={RED} />
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {PROCESS_STEPS.map((s, i) => (
              <div key={i} style={{ background: s.urgent ? '#fff9f9' : '#fff', border: `1.5px solid ${s.urgent ? RED + '25' : '#e8edf6'}`, borderRadius: 16, padding: '22px 22px', position: 'relative', overflow: 'hidden' }}>
                {s.urgent && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: RED }} />}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
                  <span style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 29, fontWeight: 800, color: s.urgent ? `${RED}30` : '#e8edf6', lineHeight: 1 }}>{s.step}</span>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: s.urgent ? `${RED}12` : '#f0f2f8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={s.icon} size={16} color={s.urgent ? RED : NAVY} />
                  </div>
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 8, lineHeight: 1.3 }}>{s.title}</div>
                <div style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}>{s.body}</div>
                {s.urgent && <div style={{ marginTop: 12, fontSize: 12, fontWeight: 700, color: RED, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: 5 }}><Icon name="zap" size={11} color={RED} /> Do this first</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="ART Review FAQ" accent={RED} />
          <FaqAccordion items={FAQ_ITEMS} accent={CAT_REVIEWS} />
        </div>
      </section>

      {/* ── RELATED PAGES ── */}
      <section style={{ background: '#ffffff', padding: '56px 32px 64px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <RelatedPages pages={RELATED} navigate={navigate} columns={2} />
        </div>
      </section>

      <CtaBand
        title={<>ART deadline approaching? <em style={{ fontStyle: 'italic', color: GOLD }}>Act now.</em></>}
        body="Navpreet Aulakh (MARN 2619467) handles urgent ART lodgements and merits review strategy — including submission preparation, evidence building, and hearing representation."
        primaryCta={{ label: 'Get urgent advice', page: 'book-consultation' }}
        secondaryCta={{ label: 'Visa Refusal Hub →', page: 'visa-refusal-review' }}
        accent={CAT_REVIEWS}
        footnote="MARA-registered · MARN 2619467 · Urgent cases welcome"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
