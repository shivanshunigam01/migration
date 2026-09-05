import React from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import { POINTS_CATEGORIES, POINTS_MINIMUM } from '@/data/pointsTest'
import {
  Breadcrumbs,
  PageHero,
  KeyFactsStrip,
  SectionHeading,
  Callout,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  AnswerBox,
  ComplianceDisclaimer,
  OnThisPageNav,
  PointsCalculator,
} from '@/components/page'
import type {
  KeyFact,
  FaqItem,
  RelatedPage,
  NavSection,
} from '@/components/page'
import { GOLD, NAVY, NAVY_DARK , CAT_SKILLED } from '@/theme'
import Icon from '@/components/ui/Icon'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const INDIGO = CAT_SKILLED
const GREEN   = '#f5a124'
const AMBER   = '#f5a124'
const ROSE    = '#e11d48'
const TEAL    = '#0e7490'
const BORDER  = '#e8edf6'
const GREY_BG = '#fafbfe'
const CURRENT_AS_AT = 'July 2026'

/* ─── On-this-page ─── */
const TOC: NavSection[] = [
  { id: 'key-facts',       label: 'Key facts' },
  { id: 'points-table',    label: 'Points breakdown' },
  { id: 'calculator',      label: 'Points calculator' },
  { id: 'rounds',          label: 'How rounds work' },
  { id: 'mistakes',        label: 'Common mistakes' },
  { id: 'faq',             label: 'FAQ' },
  { id: 'related',         label: 'Related pages' },
]

/* ─── Key facts ─── */
const KEY_FACTS: KeyFact[] = [
  { icon: 'hash',      value: `${POINTS_MINIMUM} points`,    label: 'Minimum to submit an EOI',          note: 'Invitation cutoffs in competitive rounds are typically significantly higher.' },
  { icon: 'alert',     value: 'Not guaranteed',              label: 'Points alone do not secure a place', note: 'Invitation rounds are competitive — the cutoff changes each round.' },
  { icon: 'layers',    value: 'Competitive rounds',          label: 'Invitations issued in ranked rounds', note: 'Highest-scoring EOIs in each occupation are invited first.' },
  { icon: 'check',     value: 'At invitation AND decision',  label: 'Points assessed twice',              note: 'You must meet the points test at the date of invitation and again when the visa is decided.' },
  { icon: 'clock',     value: 'Age at invitation',           label: 'Age is not locked at EOI submission', note: 'If you are 32 when you submit your EOI but 33 when invited, the 33–39 band applies.' },
]

/* ─── Full points table (static, from data) ─── */
function PointsBreakdownTable() {
  return (
    <section id="points-table" style={{ background: '#fff', padding: '80px 32px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <SectionHeading
          kicker="Section 1"
          title="Full Points Breakdown"
          intro="Every category is listed below with the maximum points and the thresholds that apply. Not all categories will apply to every applicant."
          accent={INDIGO}
        />
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 14 }}>
          {POINTS_CATEGORIES.map(cat => (
            <div key={cat.id} style={{ border: `1.5px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
              <div className="card-header-stack" style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '14px 18px', background: 'rgba(27,43,94,0.04)', borderBottom: '1px solid rgba(27,43,94,0.10)' }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(27,43,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={cat.icon} size={15} color={NAVY} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY }}>{cat.heading}</div>
                  <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>{cat.description}</div>
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: NAVY, background: 'rgba(27,43,94,0.06)', border: '1px solid rgba(27,43,94,0.20)', padding: '3px 10px', borderRadius: 100, whiteSpace: 'nowrap', flexShrink: 0 }}>
                  Up to {cat.maxPoints} pts
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' as const }}>
                {cat.options.filter(o => o.value !== 'none').map((opt, i, arr) => (
                  <div key={opt.value} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '10px 18px', background: i % 2 === 0 ? '#fff' : GREY_BG, borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                    <div>
                      <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.5 }}>{opt.label}</div>
                      {opt.note && <div style={{ fontSize: 12.5, color: '#9ca3af', marginTop: 2 }}>{opt.note}</div>}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: NAVY, flexShrink: 0, minWidth: 52, textAlign: 'right' }}>+{opt.points}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: '#9ca3af', margin: '20px 0 0', lineHeight: 1.7, textAlign: 'center' }}>
          Based on the points test set by the Migration (IMMI 23/102) Instrument 2023 and amendments. Subject to legislative change — verify current figures with the Department of Home Affairs.
        </p>
      </div>
    </section>
  )
}

/* ─── How rounds work ─── */
const ROUND_POINTS = [
  { icon: 'layers', heading: "Rounds are held at the Department's discretion", body: 'The Department of Home Affairs issues invitations in regular rounds, typically monthly, but timing and frequency are not fixed. The Department does not announce future round dates or cutoff scores in advance.' },
  { icon: 'hash',   heading: 'Highest-scoring EOIs are invited first', body: "Within each invitation round, the Department invites EOIs in descending order of points score for each visa subclass and occupation. If two EOIs have the same score, the one submitted earliest is generally invited first — so submitting your EOI as early as possible matters." },
  { icon: 'clock',  heading: "Cutoffs change every round and can't be predicted", body: "The 'points cutoff' — the minimum score at which an invitation was issued — changes every round depending on how many invitations are issued and the distribution of points scores in the pool. No one can reliably predict the cutoff for a future round." },
  { icon: 'flag',   heading: 'Nomination points are added to your personal score', body: 'If you have a state/territory nomination (190: +5 pts) or regional nomination/sponsorship (491: +15 pts), those points are added to your personal score for the purposes of the round. You will be competing in the 190 or 491 pool separately from the 189 pool.' },
  { icon: 'alert',  heading: 'Points are assessed at invitation AND at decision', body: 'You must meet the points test on the date of invitation — and again on the date the visa is decided. If your circumstances change (e.g., you turn 45, or your English test expires) between invitation and decision, this can affect the outcome.' },
  { icon: 'check',  heading: 'An invitation is not a visa grant', body: 'Receiving an invitation to apply confirms your points score was high enough for that round. It is not an approval of any kind. You must still lodge the visa application, meet all eligibility criteria, and pass health and character requirements.' },
]

function HowRoundsWork() {
  return (
    <section id="rounds" style={{ background: GREY_BG, padding: '80px 32px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <SectionHeading
          kicker="Section 3"
          title="How Invitation Rounds Work"
          intro="Understanding how the Department of Home Affairs issues invitations is essential to managing expectations about when — and whether — you will receive one."
          accent={INDIGO}
        />
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {ROUND_POINTS.map(p => (
            <div key={p.heading} style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 14, padding: '20px 18px', boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(27,43,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <Icon name={p.icon} size={14} color={NAVY} />
                </div>
                <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, lineHeight: 1.35 }}>{p.heading}</div>
              </div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Common mistakes ─── */
const MISTAKES = [
  {
    n: '01', color: ROSE, heading: 'Counting work experience that does not meet the skill level',
    body: "Only employment at the skill level matching your nominated occupation — or a closely related occupation at an equivalent skill level — counts towards skilled employment points. Many applicants count all years of work in their field without checking whether early roles (especially junior, trainee, or support roles) satisfy the ANZSCO skill level requirement. The Department of Home Affairs may assess the actual duties, not just the job title.",
    tip: 'Review each employment period against the ANZSCO unit group description for your nominated occupation before claiming employment points.',
  },
  {
    n: '02', color: ROSE, heading: 'Claiming English points without meeting every component',
    body: "English points (Proficient: +10 pts, Superior: +20 pts) require the minimum score to be met in every component of the approved test — not just the overall or average score. An overall score of 7.0 with a 6.5 in one band does not meet the Proficient English threshold. This is a common and costly mistake — the entire English category is lost if one component falls short.",
    tip: 'Check each band individually against the threshold. If one component falls short, only the lower category (or no points) applies.',
  },
  {
    n: '03', color: AMBER, heading: 'Assuming age points are fixed at the date of EOI submission',
    body: "Age points are assessed at the date an invitation to apply is received — not the date the EOI was submitted or the date the visa application is lodged. An applicant who is 32 at EOI submission but receives an invitation when they are 33 receives 25 points (33–39 band), not 30 (25–32 band). For applicants close to an age boundary — particularly 32, 39, or 44 — this can significantly affect the points score.",
    tip: 'Do not assume your age band is locked. Monitor your age relative to expected invitation timing.',
  },
  {
    n: '04', color: AMBER, heading: 'Claiming partner points without a completed skills assessment',
    body: "To claim the 10 points for partner skills (where the partner is not an Australian citizen or permanent resident), the partner must have a positive skills assessment in a nominated occupation AND meet the Competent English threshold — not just one of these. Applicants sometimes claim partner points based on the partner having a qualification or a job offer, without a completed skills assessment from the relevant assessing authority.",
    tip: "The partner's skills assessment must be completed and positive before the EOI is submitted — it cannot be obtained retrospectively.",
  },
  {
    n: '05', color: AMBER, heading: 'Claiming Australian study requirement without 2 full academic years',
    body: "The Australian study requirement requires at least two academic years of full-time study leading to a qualification from an Australian institution registered with TEQSA or ASQA. Part-time study, study at unregistered institutions, or short courses do not satisfy the requirement. The 5 points for the Australian study requirement and the additional 5 points for study in regional Australia can each only be claimed when the specific conditions are fully met.",
    tip: 'Confirm with your educational institution whether your study meets the TEQSA or ASQA registration requirement and satisfies the two academic year minimum.',
  },
]

function CommonMistakesSection() {
  return (
    <section id="mistakes" style={{ background: '#fff', padding: '80px 32px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionHeading
          kicker="Section 4"
          title="Common Points Mistakes"
          intro="These five errors frequently result in overstated EOI scores — which can lead to invitations being issued incorrectly, visa refusals, or mandatory cancellation of the EOI."
          accent={INDIGO}
        />
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
          {MISTAKES.map(m => (
            <div key={m.n} style={{ border: `1.5px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '14px 18px', background: `${m.color}06`, borderBottom: `1px solid ${m.color}18` }}>
                <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 23, fontWeight: 800, color: m.color, flexShrink: 0, width: 36 }}>{m.n}</div>
                <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY }}>{m.heading}</div>
              </div>
              <div style={{ padding: '16px 18px', background: '#fff' }}>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '0 0 12px' }}>{m.body}</p>
                <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 9, padding: '9px 12px' }}>
                  <Icon name="check" size={13} color={GREEN} />
                  <span style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6 }}><strong style={{ color: GREEN }}>What to do:</strong> {m.tip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Hero right-column widget ─── */
function PointsSummaryWidget() {
  const total = POINTS_CATEGORIES.reduce((s, c) => s + c.maxPoints, 0)
  const categories = [
    { label: 'Age', max: 30 },
    { label: 'English', max: 20 },
    { label: 'Employment (AUS)', max: 20 },
    { label: 'Employment (overseas)', max: 15 },
    { label: 'Education', max: 20 },
    { label: 'Specialist education', max: 10 },
    { label: 'Other bonuses', max: 20 },
    { label: 'Nomination (+5 or +15)', max: 15 },
  ]
  return (
    <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 24px 64px rgba(13,22,50,0.18), 0 2px 8px rgba(13,22,50,0.06)', border: '1px solid #e8eaf0', padding: '26px 24px' }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: INDIGO, marginBottom: 4 }}>Points at a glance</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 18 }}>
        <span style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 48, fontWeight: 800, color: NAVY, lineHeight: 1 }}>{POINTS_MINIMUM}</span>
        <span style={{ fontSize: 15, color: '#9ca3af', fontWeight: 500 }}>minimum (up to {total})</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8, marginBottom: 18 }}>
        {categories.map(c => (
          <div key={c.label}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
              <span style={{ fontSize: 12.5, color: '#374151' }}>{c.label}</span>
              <span style={{ fontSize: 12.5, fontWeight: 700, color: NAVY }}>up to {c.max} pts</span>
            </div>
            <div style={{ height: 4, background: GREY_BG, borderRadius: 100, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(c.max / total) * 100}%`, background: NAVY, borderRadius: 100 }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '12px 14px', background: `${INDIGO}08`, border: `1px solid ${INDIGO}20`, borderRadius: 10 }}>
        <div style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.65 }}>
          <strong style={{ color: INDIGO }}>65 points minimum</strong> to submit an EOI — but invitation cutoffs are typically much higher. Use the interactive calculator below to estimate your total.
        </div>
      </div>
      <p style={{ fontSize: 12, color: '#9ca3af', margin: '12px 0 0', lineHeight: 1.6 }}>General guide only. Figures subject to legislative change.</p>
    </div>
  )
}

/* ─── FAQ ─── */
const FAQ: FaqItem[] = [
  {
    question: "What is the minimum points score I need to receive an invitation?",
    answer: `The minimum points score to submit an Expression of Interest (EOI) in SkillSelect is generally ${POINTS_MINIMUM} points. However, submitting an EOI does not mean you will receive an invitation. Invitation cutoffs — the minimum score at which invitations are actually issued in each round — are typically significantly higher than ${POINTS_MINIMUM} points, and vary by occupation and visa subclass. The cutoff changes every round and cannot be predicted in advance. As a general guide, invitation cutoffs for competitive occupations have historically been 80–90+ points for the 189 visa, though this varies.`,
  },
  {
    question: 'Does getting a higher points score mean I will definitely be invited?',
    answer: 'No. A higher points score improves your ranking in the SkillSelect pool and increases your likelihood of receiving an invitation in a given round, but it does not guarantee one. The Department of Home Affairs controls how many invitations are issued in each round and for which occupations. If the Department does not issue invitations for your occupation in a particular round — or issues fewer than the number of eligible EOIs — some EOIs will not receive invitations regardless of their score. An invitation is never guaranteed by points alone.',
  },
  {
    question: 'How does the 10-year cap on employment work?',
    answer: "Only skilled employment in the 10 years before the date of invitation can be counted. Employment before that 10-year window is not counted, regardless of how many years it represents. Similarly, the employment must have been at the required skill level — junior, trainee, or support roles that do not match the ANZSCO skill level of your nominated occupation are generally not counted. The 10-year window is calculated back from the date of invitation, not the date your EOI was submitted.",
  },
  {
    question: 'Can I claim both Australian study points (5 pts) and regional study points (5 pts)?',
    answer: 'Yes, if you meet both sets of requirements. The 5 points for the Australian study requirement and the additional 5 points for study in a regional area of Australia are separate categories and can each be claimed independently. To claim both, you would need to have completed at least two academic years of study at an Australian institution registered with TEQSA or ASQA, and that study must have been undertaken while living and studying in a designated regional area of Australia.',
  },
  {
    question: 'My English test expired. Do I lose the English points?',
    answer: 'If your approved English test results expire — most approved tests are valid for three years — you may lose the English points they supported. Critically, you must meet the English requirements at the date an invitation is received and also at the time the visa is decided. If your test results expire between EOI submission and invitation, or between invitation and decision, this can cause significant problems. It is important to book a new test before your results expire, not after they have already lapsed.',
  },
  {
    question: 'What does it mean that age is assessed at the date of invitation?',
    answer: "Age points are determined by your age on the date an invitation to apply is received — not the date you submitted your EOI or the date you lodge your visa application. This means your age band can change between the time you submit your EOI and the time you are invited. For example, if you are 32 years old when you submit your EOI and receive an invitation after your 33rd birthday, you will receive 25 points for the 33–39 age band, not 30 points for the 25–32 band. Applicants close to an age boundary should monitor this carefully.",
  },
  {
    question: 'Can I update my EOI after submitting it?',
    answer: "Yes. You can update your EOI at any time while it remains active. An EOI remains active for two years from the date of submission; you can renew it if needed. Updating your EOI — for example, to reflect a new English test result, a completed skills assessment, or a state nomination — may change your points score. However, if your update results in a higher score, your priority date (the original submission date at that higher score) resets to the date of the update, not the original submission date. This affects your position in the queue relative to others with the same score.",
  },
  {
    question: 'Does the points test apply to the employer-sponsored 482 and 186 visas?',
    answer: 'No. The points test applies to points-tested skilled migration visas — specifically the subclass 189 (Skilled Independent), 190 (Skilled Nominated), and 491 (Skilled Work Regional). The employer-sponsored 482 (Skills in Demand) and 186 (Employer Nomination Scheme) visas are assessed against different criteria — including employer sponsorship, nomination, occupation eligibility, and employment history — and do not use the points test. If you do not meet the points test threshold, employer sponsorship may be an alternative pathway worth exploring.',
  },
]

/* ─── Related ─── */
const RELATED: RelatedPage[] = [
  { title: 'Skilled Migration Hub',        desc: 'Overview of all points-tested visa pathways.',                                          icon: 'star',    page: 'skilled-migration' },
  { title: 'Skilled Independent (189)',     desc: 'Permanent skilled visa — no nomination required.',                                      icon: 'shield',  page: 'skilled-independent-189' },
  { title: 'Skilled Nominated (190)',       desc: 'Permanent skilled visa with a 5-point nomination bonus.',                               icon: 'flag',    page: 'skilled-nominated-190' },
  { title: 'Skilled Work Regional (491)',   desc: 'Provisional regional visa with a 15-point bonus.',                                     icon: 'mappin',  page: 'skilled-work-regional-491' },
  { title: 'Skills Assessment Advice',      desc: 'Which assessing authority covers your occupation and how to prepare.',                  icon: 'check',   page: 'skilled-migration' },
  { title: 'English Requirements',          desc: 'Test scores required for each skilled visa subclass.',                                 icon: 'globe',   page: 'skilled-migration' },
]

/* ─── Page ─── */
export default function PointsTestPage({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Skilled Migration', url: 'https://www.nanakmigration.com.au/skilled-migration' },
          { name: 'Points Test Explained', url: 'https://www.nanakmigration.com.au/points-test' },
        ]}
        faqs={FAQ}
        service={{ name: 'Australian Skilled Migration Points Test', description: PAGE_META['points-test'].metaDescription, url: 'https://www.nanakmigration.com.au/points-test' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Skilled Migration', page: 'skilled-migration' },
        { label: 'Points Test Explained' },
      ]} />

      <PageHero
        variant="flagship"
        eyebrow="Skilled Migration · 189 · 190 · 491"
        eyebrowSub="Points-Tested Visas"
        title={<>Points Test<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Explained</em></>}
        deck="How the points test works for Australian skilled migration — where points come from, how invitation rounds operate, and what you need to know before submitting an Expression of Interest."
        shortAnswer={<>The points test ranks skilled visa applicants in order of their score. A <strong style={{ color: NAVY }}>minimum of 65 points</strong> is generally needed to submit an EOI in SkillSelect, but invitation cutoffs in competitive rounds are typically much higher. Points come from age, English proficiency, skilled work experience, qualifications, and various bonuses. The <strong>interactive calculator below</strong> gives an indicative estimate — it is not an eligibility assessment.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Have your points reviewed by a registered agent', page: 'book-consultation' }}
        secondaryCta={{ label: 'View the full points breakdown →', page: '' }}
        accent={INDIGO}
        rightColumn={<PointsSummaryWidget />}
        footnote="General information only. Points test set by legislative instrument and subject to change. Obtain advice from MARN 2619467."
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox routeKey="points-test">
            Australia's points test ranks Expressions of Interest for Skilled Independent (subclass 189), Skilled Nominated (subclass 190) and Skilled Work Regional (subclass 491) visas, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Age, English requirements, skilled employment, education and state nomination can all add points.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      <div style={{ maxWidth: 1260, margin: '0 auto', padding: '48px 32px 0', display: 'flex', gap: 48 }}>
        <OnThisPageNav sections={TOC} accent={INDIGO} />
        <div style={{ flex: 1 }} />
      </div>

      <div id="key-facts">
        <KeyFactsStrip facts={KEY_FACTS} accent={INDIGO} />
      </div>

      <PointsBreakdownTable />

      {/* ── CALCULATOR ── */}
      <section id="calculator" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <SectionHeading
            kicker="Section 2"
            title="Indicative Points Calculator"
            intro="Select your circumstances to get an estimated points total. This is a general guide only — not a migration assessment, an eligibility determination, or any indication of whether you will receive an invitation."
            accent={INDIGO}
          />
          <PointsCalculator accent={INDIGO} />
        </div>
      </section>

      <HowRoundsWork />
      <CommonMistakesSection />

      {/* ── FAQ ── */}
      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={INDIGO} />
          <FaqAccordion items={FAQ} accent={INDIGO} />
        </div>
      </section>

      {/* ── RELATED ── */}
      <section id="related" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={INDIGO} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={3} />
        </div>
      </section>

      <CtaBand
        title={<>Have your points reviewed by a<br /><em style={{ fontStyle: 'italic', color: GOLD }}>registered migration agent</em></>}
        body="Navpreet Aulakh (MARN 2619467) can review your points score against current legislative requirements, identify any overclaims or missed categories, and advise on which visa pathway — 189, 190, or 491 — is most realistic for your circumstances."
        primaryCta={{ label: 'Book a points review consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'View skilled visa options →', page: 'skilled-migration' }}
        accent={INDIGO}
        footnote="Free initial assessment · MARA-registered · MARN 2619467"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT}
        pageNote="Points test values, invitation cutoffs, and occupation lists are set by legislative instrument and are subject to change by the Department of Home Affairs without notice. This page does not publish visa application fees." />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
