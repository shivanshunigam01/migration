import React from 'react'
import { GOLD, NAVY, NAVY_DARK } from '@/theme'
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

const CURRENT_AS_AT = 'August 2026'
const ACCENT = NAVY
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'what-is-eoi', label: 'What is an EOI?' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'state-nomination', label: 'State nomination' },
  { id: 'eoi-mistakes', label: 'Common mistakes' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  { icon: 'clipboard', value: 'Not a visa application', label: 'An EOI is an expression of interest only', note: 'Submitting an EOI does not lodge a visa application and does not give you any visa rights.' },
  { icon: 'calendar', value: '24 months', label: 'EOI validity period', note: 'Your EOI remains active and eligible for invitation rounds for 24 months from submission.' },
  { icon: 'hash', value: '65 points', label: 'Minimum score to submit an EOI', note: 'You must score at least 65 points to be eligible to submit an EOI, but current invitation cutoffs are typically 80-95+ points depending on the occupation and visa.' },
  { icon: 'alert', value: 'PIC 4020 risk', label: 'Inflated EOI claims carry serious consequences', note: 'Claims that cannot be evidenced at application stage may constitute a misrepresentation — with serious consequences including visa refusal and bars.' },
]

const STEPS: TimelineStep[] = [
  { code: '01', title: 'Submit your EOI in SkillSelect', desc: "Create a myID account (formerly myGovID) and access SkillSelect through ImmiAccount. Complete your profile including occupation (ANZSCO code), claimed points, and visa subclass preferences (189, 190, 491, or any combination)." },
  { code: '02', title: 'EOI enters the pool', desc: "Your EOI enters the pool of active EOIs ranked by points score, then by EOI submission date as a tie-breaker. EOIs with higher scores appear earlier in the pool." },
  { code: '03', title: 'Invitation rounds are held', desc: "The Department holds invitation rounds — typically monthly. In each round, invitations are issued to the highest-scoring EOIs in each eligible occupation up to the round's allocation. State/territory governments also hold separate nomination rounds drawing from the SkillSelect pool for 190 and 491 invitations." },
  { code: '04', title: 'Receive an invitation to apply', desc: "If your EOI is selected, you receive an invitation to apply. The invitation specifies the visa subclass and the application timeframe — typically 60 days. You must lodge the visa application within this window." },
  { code: '05', title: 'Lodge the visa application', desc: "Lodge the subclass 189, 190, or 491 visa application with all supporting evidence. The Department will verify your claimed EOI points at this stage — any unverifiable claims risk refusal under PIC 4020." },
]

const FAQ: FaqItem[] = [
  {
    question: 'Can I submit more than one EOI?',
    answer: "You can only have one active EOI per nominated occupation in SkillSelect. You may have EOIs for different occupations simultaneously, but the Department will only issue one invitation per occupation round per person. Submitting duplicate EOIs for the same occupation is not possible — SkillSelect prevents it.",
  },
  {
    question: 'What happens when my EOI expires?',
    answer: "An EOI that is not invited within 24 months expires automatically and is removed from the pool. You can re-submit a new EOI after expiry, but the new EOI will have a new submission date — meaning you lose any tie-breaking advantage from your original submission date. If you are approaching the 24-month mark without an invitation, consider reviewing your points and whether there are additional points available.",
  },
  {
    question: 'Does updating my EOI reset my submission date?',
    answer: "Some updates reset your EOI submission date and some do not. Updating the visa subclass, occupation, or state/territory nomination preferences generally resets your date. Updating your English score, qualifications, or work experience after a new credential is obtained may or may not reset the date depending on the change. Resetting the date can significantly affect your chances in a round where scores are tied — seek advice before making updates.",
  },
  {
    question: 'What is the difference between a 189, 190 and 491 invitation?',
    answer: "A subclass 189 invitation is issued by the Department (not a state) and leads to permanent residence without a regional or nomination requirement. A 190 invitation requires state or territory nomination and also leads to permanent residence. A 491 invitation requires state/territory or family nomination and leads to a 5-year provisional visa in a regional area, with a pathway to permanent residence via the subclass 191. Current invitation scores vary significantly between these three subclasses and between occupations.",
  },
  {
    question: 'How long after an invitation do I have to lodge the visa?',
    answer: "An invitation to apply is valid for 60 days from the date of issue. If you do not lodge within 60 days, the invitation lapses and you return to the pool — you do not receive a new invitation automatically. Extensions are not generally available. It is important to have your evidence assembled and health examinations booked well before you expect to receive an invitation.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Skilled Independent (189)', desc: 'Points-tested permanent visa — no sponsor, no regional requirement.', icon: 'shield', page: 'skilled-independent-189', color: NAVY },
  { title: 'Skilled Nominated (190)', desc: 'State-nominated permanent visa — adds 5 points for nomination.', icon: 'flag', page: 'skilled-nominated-190', color: NAVY },
  { title: 'Skilled Work Regional (491)', desc: '15-point boost for regional nomination — provisional with 191 PR pathway.', icon: 'mappin', page: 'skilled-work-regional-491', color: NAVY },
  { title: 'Points Test Explained', desc: 'How the Australian points test works and what scores are needed for an invitation.', icon: 'hash', page: 'points-test', color: NAVY },
]

/* ─── State nomination card data ─── */
const STATE_NOM_CARDS = [
  {
    title: 'You must have an active EOI in SkillSelect',
    body: 'Before a state or territory can nominate you for a 190 or 491, you must have an active EOI in SkillSelect that includes that state\'s visa preference. Some states require that you register your interest directly through their state nomination portal in addition to having a SkillSelect EOI.',
  },
  {
    title: 'Occupation lists differ by state',
    body: "Each state and territory publishes its own occupation list (sometimes called a 'skilled occupation list' or 'state nomination list') with targeted professions. Being on the CSOL or MLTSSL does not mean you are on any particular state's list. Check each state's current list before adding a 190 or 491 preference to your EOI.",
  },
  {
    title: 'A state nomination gives you extra points',
    body: 'A 190 state nomination adds 5 points to your score. A 491 regional nomination adds 15 points. These additional points are credited after the nomination is granted — they are not in your EOI until the nomination is received.',
  },
]

/* ─── EOI mistake data ─── */
const MISTAKES = [
  {
    heading: 'Claiming points you cannot evidence',
    body: 'The most common and serious error. EOI points are not verified at submission — but they will be scrutinised at visa application stage. If you claim IELTS Superior (20 points) but only hold an IELTS Proficient score, or claim a qualification that has not been formally assessed, the Department may find your application involved a misrepresentation.',
  },
  {
    heading: 'Misclassifying work experience',
    body: 'Claiming more years of experience than can be evidenced with payslips, tax records, or employer references. Experience must typically be in the nominated ANZSCO occupation — work in a related but different occupation may not count.',
  },
  {
    heading: 'Claiming Australian study bonus without verifying eligibility',
    body: 'The Australian study requirement has specific conditions, including minimum duration of study in Australia. Not all qualifications completed partly offshore qualify.',
  },
  {
    heading: 'Not understanding partner skills points',
    body: "Claiming partner/spouse skills points without the partner having a current positive skills assessment or functional English. Points claimed for a partner who does not meet the criterion will be removed.",
  },
  {
    heading: 'Failing to update an EOI after circumstances change',
    body: 'If your circumstances change (e.g. a claimed qualification is downgraded, your English score expires) you should update your EOI. Lodging a visa application based on points that no longer apply at the time of invitation can constitute a misrepresentation.',
  },
]

export default function SkillSelectEOIPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['skillselect-eoi'].title }, [])
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Skilled Migration', url: 'https://www.nanakmigration.com.au/skilled-migration' },
          { name: 'SkillSelect and EOI', url: 'https://www.nanakmigration.com.au/skillselect-eoi' },
        ]}
        faqs={FAQ}
        service={{ name: 'SkillSelect Expression of Interest (EOI)', description: PAGE_META['skillselect-eoi'].metaDescription, url: 'https://www.nanakmigration.com.au/skillselect-eoi' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Skilled Migration', page: 'skilled-migration' },
        { label: 'SkillSelect and EOI' },
      ]} />
      <PageHero
        variant="standard"
        eyebrow="Skilled Migration"
        eyebrowSub="SkillSelect · Expression of Interest"
        title={<>SkillSelect and Expressions of Interest<br /><em style={{ fontStyle: 'italic', color: GOLD }}>How Skilled Visa Invitations Work</em></>}
        deck="SkillSelect is Australia's online system for managing Expressions of Interest for points-tested skilled visas — subclass 189 (Skilled Independent), 190 (Skilled Nominated), and 491 (Skilled Work Regional). Submitting an EOI is the first step, not the last."
        shortAnswer={<>An Expression of Interest (EOI) in SkillSelect is <strong style={{ color: NAVY }}>not a visa application</strong>. It is a registration of your interest in being invited to apply. After you submit an EOI, the Department of Home Affairs and state/territory governments draw from the pool of eligible EOIs in periodic invitation rounds. You receive points based on age, English, work experience, qualifications, and other factors. Only the highest-scoring EOIs in each occupation receive invitations. An EOI is valid for <strong style={{ color: NAVY }}>24 months</strong> from the date of submission — if you are not invited within that period, you must re-submit. Nanak Migration Group (MARN 2619467) can review your EOI profile before submission to identify points that may be available and flag claims that cannot be evidenced at application stage.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Skilled Migration overview →', page: 'skilled-migration' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>

      {/* TOC bar */}
      <div style={{ borderTop: '1px solid #e8edf6', borderBottom: '1px solid #e8edf6', background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 4, overflowX: 'auto', scrollbarWidth: 'none' as const }}>
          {TOC.map(sec => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap' as const, borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = NAVY; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = NAVY }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>

      {/* Key facts */}
      <div id="what-is-eoi">
        <KeyFactsStrip facts={FACTS} accent={ACCENT} />
      </div>

      {/* What is an EOI */}
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeading kicker="The basics" title="What Is an Expression of Interest?" accent={ACCENT} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
            {/* Left column */}
            <div style={{ background: GREY_BG, border: `1.5px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 14 }}>What an EOI IS</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'A registration of your interest in being invited to apply for a subclass 189, 190, or 491 visa',
                  'Scored automatically by the Department using the points you claim',
                  'Eligible for invitation in periodic rounds while active (up to 24 months)',
                  'Updatable at any time — but changes reset your submission date in some circumstances',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: `${ACCENT}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="check" size={10} color={ACCENT} />
                    </div>
                    <span style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.65 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right column */}
            <div style={{ background: '#fff5f5', border: '1.5px solid #fca5a5', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 14 }}>What an EOI IS NOT</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Not a visa application — lodging an EOI does not create any visa rights',
                  'Not a guarantee of an invitation — receiving an invitation depends on your score relative to other candidates in the pool',
                  'Not assessed by a case officer at the EOI stage — points are accepted at face value; verification happens at application stage',
                  'Not a commitment — withdrawing an EOI has no negative consequence',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(220,38,38,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="x" size={10} color="#dc2626" />
                    </div>
                    <span style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.65 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Callout variant="warning" panel={true} title="Points are not verified at the EOI stage">
            Your EOI points are accepted by the system without verification. The Department verifies your claimed points when you lodge the actual visa application. If you cannot evidence a claim at application stage, the Department may refuse the visa and find that you made a false or misleading statement — with consequences including a 3-year bar from making further visa applications under PIC 4020.
          </Callout>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="The process" title="How SkillSelect Invitation Rounds Work" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
          {/* Points ranking info box */}
          <div style={{ maxWidth: 800, margin: '40px auto 0', background: GREY_BG, border: `1.5px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 10 }}>How points are ranked</div>
            <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              In each round, EOIs are ranked by total points score. If two EOIs have the same points, the one submitted earlier receives priority. This means that if you are on a common score (e.g. 90 points), the date your EOI was submitted — not just your score — can determine whether you receive an invitation. Avoid updating your EOI unnecessarily, as some updates reset your submission date.
            </p>
          </div>
        </div>
      </section>

      {/* State nomination */}
      <section id="state-nomination" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeading kicker="190 and 491" title="State and Territory Nomination — How It Interacts With SkillSelect" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, maxWidth: 740, marginBottom: 32 }}>
            State and territory governments draw from the SkillSelect pool to issue nominations for the subclass 190 (Skilled Nominated) and subclass 491 (Skilled Work Regional) visas. Each state sets its own occupation lists, targeted criteria, and invitation rounds — separately from the federal rounds.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 32 }}>
            {STATE_NOM_CARDS.map((card, i) => (
              <div key={i} style={{ background: GREY_BG, border: `1.5px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <Icon name={i === 0 ? 'clipboard' : i === 1 ? 'flag' : 'hash'} size={16} color={ACCENT} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 8, lineHeight: 1.3 }}>{card.title}</div>
                <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
          <Callout variant="note" panel={true} title="190 and 491 nomination does not bypass the EOI">
            Receiving a state or territory nomination is a separate step — it does not replace the SkillSelect EOI process. You still need an active EOI in SkillSelect and an invitation from the Department to apply for the visa. The nomination adds points and satisfies the nomination criterion — it does not itself grant the invitation.
          </Callout>
        </div>
      </section>

      {/* Common mistakes */}
      <section id="eoi-mistakes" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Avoid these" title="Common EOI Mistakes and PIC 4020 Risks" accent={ACCENT} />
          <div style={{ marginBottom: 32 }}>
            {MISTAKES.map((m, i) => (
              <div
                key={i}
                style={{
                  borderLeft: '3px solid #dc2626',
                  paddingLeft: 20,
                  marginBottom: 16,
                  background: '#fff5f5',
                  borderRadius: 8,
                  padding: 16,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{m.heading}</div>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{m.body}</p>
              </div>
            ))}
          </div>
          <Callout variant="warning" panel={true} title="PIC 4020 — the misrepresentation provision">
            Under Public Interest Criterion 4020 of the Migration Regulations, if the Department finds that an applicant provided false or misleading information in support of a visa application — including at the EOI stage — it may refuse the application and impose a 3-year bar on the applicant making any further visa application. Nanak Migration Group (MARN 2619467) reviews EOI profiles to identify and address points claims that carry PIC 4020 risk before submission.
          </Callout>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Related pages */}
      <section id="related" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Review your EOI before you submit"
        body="Nanak Migration Group (MARN 2619467) reviews EOI profiles to identify available points and flag claims that carry PIC 4020 risk before you submit to SkillSelect."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
