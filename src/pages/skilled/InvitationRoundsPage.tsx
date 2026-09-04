import React from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_SKILLED } from '@/theme'
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

const ACCENT = CAT_SKILLED
const CURRENT_AS_AT = 'August 2026'
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'how-rounds-work', label: 'How rounds work' },
  { id: 'cutoffs', label: 'Points cutoffs' },
  { id: 'reading-results', label: 'Reading results' },
  { id: 'state-rounds', label: 'State nomination' },
  { id: 'eoi-tips', label: 'EOI tips' },
  { id: 'myths', label: 'Common myths' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'calendar', value: 'Monthly', label: 'Invitation rounds are held at least monthly', note: 'The Department is required to hold at least one round per month, but additional rounds may be held. Not every occupation receives invitations in every round.' },
  { icon: 'hash', value: 'Points-ranked', label: 'Highest points invited first; ties broken by EOI date', note: 'When two EOIs have the same points score, the one submitted earlier is ranked higher. Keeping your EOI current and accurate is important.' },
  { icon: 'layers', value: '189 + 491 family', label: 'SkillSelect rounds cover 189 and family-sponsored 491 only', note: 'State and territory-nominated 190 and state-nominated 491 invitations are issued by each state/territory on their own schedule — not through these rounds.' },
  { icon: 'shield', value: 'No guarantee', label: 'A high points score does not guarantee an invitation', note: 'Invitation numbers are set by the Department based on planning levels. Even a very high score may not receive an invitation if the occupation cap is reached.' },
]

const FAQ: FaqItem[] = [
  {
    question: 'How often are invitation rounds held?',
    answer: 'The Department is required to hold at least one invitation round per month for each relevant visa subclass. In practice, additional rounds are often held. The schedule is not published in advance — rounds are announced after they have been conducted, when the results are published on the DoHA website.',
  },
  {
    question: 'What happens to my EOI if I am not invited in a round?',
    answer: 'Your EOI remains in the pool and you are automatically reconsidered in every subsequent round until your EOI expires (2 years) or you withdraw it. You do not need to resubmit after each round. Your relative position in the pool may improve over time as other applicants withdraw EOIs, receive invitations, or your EOI becomes older than competing EOIs with the same score.',
  },
  {
    question: 'Can I target both the 189 and the 491 in the same EOI?',
    answer: 'Yes. A single EOI can express interest in multiple visa subclasses, including both the 189 (Skilled Independent) and the family-sponsored stream of the 491 (Skilled Work Regional — Provisional), if you have a family member in a regional area who can sponsor you. If you receive an invitation for either subclass, you then choose which visa to apply for.',
  },
  {
    question: "My occupation is listed as 'no invitations issued' in recent rounds — should I worry?",
    answer: "Possibly. Some occupations go through periods where no invitations are issued — either because the occupation's annual allocation is exhausted, or the occupation has been removed from the eligible list. Check the recent round results for your occupation and consider whether an alternative occupation code better fits your skills. Seek professional advice if your occupation has not received invitations for multiple consecutive rounds.",
  },
  {
    question: 'How do I know if my points claim is accurate?',
    answer: "Your points are determined by the Migration Points Test, which awards points for age, English proficiency, skilled employment experience, educational qualifications, Australian study, partner skills, state/territory nomination, and other factors. The Department uses your claimed points as the basis for inviting you, but verifies them at the visa application stage. Use the Department's online Points Calculator to check your score — and seek advice from a registered migration agent to ensure your claim is accurate and supportable.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'SkillSelect & EOI', desc: 'How Expressions of Interest work — submitting, updating and managing your EOI.', icon: 'clipboard', page: 'skillselect-eoi', color: ACCENT },
  { title: 'Points Test Explained', desc: 'How the points test works — what scores you need and how to maximise your claim.', icon: 'hash', page: 'points-test', color: ACCENT },
  { title: 'Skilled Independent (189)', desc: 'The points-tested permanent visa — requires a SkillSelect invitation.', icon: 'shield', page: 'skilled-independent-189', color: ACCENT },
  { title: 'Skilled Work Regional (491)', desc: 'State/territory-sponsored provisional regional visa — invitation via state or family sponsor.', icon: 'mappin', page: 'skilled-work-regional-491', color: ACCENT },
]

const ROUND_STEPS = [
  {
    num: 1,
    title: 'You submit an EOI',
    desc: 'You submit an Expression of Interest in SkillSelect for the visa subclass(es) you are targeting. Your EOI includes your claimed points, occupation, and personal details. You can nominate both the 189 and the family-sponsored 491 stream in a single EOI.',
  },
  {
    num: 2,
    title: 'Your EOI is ranked in the pool',
    desc: 'Your EOI is ranked against all other current EOIs for the same occupation(s) and visa stream by: (1) points score — highest first; (2) date of EOI submission — older EOIs ranked above newer ones with the same score.',
  },
  {
    num: 3,
    title: 'The Department sets the number of invitations',
    desc: 'Before each round, the Department determines how many invitations to issue — for each visa subclass and potentially for specific occupations or occupation groups. This number is set by migration planning policy and annual planning levels. It is not published in advance.',
  },
  {
    num: 4,
    title: 'Invitations are issued from the top of the pool',
    desc: 'The system works down the ranked pool until all available invitations for the round are issued. Everyone above the cutoff point in the pool receives an invitation. Everyone below it does not — but remains in the pool for future rounds.',
  },
  {
    num: 5,
    title: 'You receive (or do not receive) an invitation',
    desc: 'If you are invited, you receive a notification and have 60 days to lodge a complete visa application. If you are not invited, your EOI remains in the pool and you are reconsidered in subsequent rounds — unless you update your EOI (which resets the submission date).',
  },
]

const CUTOFF_FACTORS = [
  {
    title: 'Number of invitations in the round',
    desc: 'If more invitations are available in a round, more EOIs receive invitations and the cutoff drops. Rounds near the end of the financial year, when planning levels are nearly exhausted, tend to have fewer invitations available.',
  },
  {
    title: 'Volume of EOIs in the pool',
    desc: 'As more people with high points scores submit EOIs, competition increases. A 90-point pool with many candidates can push the cutoff above 90. A thinner pool can let lower scores receive invitations.',
  },
  {
    title: 'Occupation-specific allocation',
    desc: 'Some occupations have separate invitation allocations. In rounds where a specific occupation is not invited (e.g. because its occupation cap is reached for the year), even high-scoring EOIs for that occupation will not receive an invitation regardless of their points.',
  },
  {
    title: 'Invitation numbers set by planning policy',
    desc: "The government sets annual migration planning levels. When the overall 189 quota for the year is close to being met, fewer invitations are issued per round, pushing cutoffs up.",
  },
  {
    title: 'New financial year reset',
    desc: 'At the start of each financial year (1 July), planning levels reset. This sometimes results in a sudden release of invitations and a temporary drop in the cutoff — particularly in early July rounds. However, this also depends on the government\'s migration plan for that year.',
  },
]

const RESULT_COMPONENTS = [
  {
    title: 'Lowest points score invited',
    desc: 'This is the effective cutoff for the round. Anyone with more points than this was invited. Anyone with fewer points was not. Anyone with exactly this points score may or may not have been invited, depending on the date of their EOI (see below).',
  },
  {
    title: 'Date of earliest EOI invited at the cutoff score',
    desc: 'This is the tiebreaker threshold. If the cutoff was, say, 85 points, and the earliest EOI invited at 85 points had a submission date of 15 March 2025 — then all 85-point EOIs submitted before 15 March 2025 were also invited. EOIs submitted after 15 March 2025 at 85 points were not invited in that round.',
  },
  {
    title: 'Number of invitations issued',
    desc: 'This tells you how competitive the round was. Rounds with larger invitation numbers tend to have lower cutoffs. Rounds with very few invitations issued (e.g. fewer than 500) typically have very high cutoffs.',
  },
  {
    title: 'Which occupations received invitations',
    desc: 'For occupation-specific rounds, the results show which occupations (by ANZSCO code) received invitations. If your occupation is not in a round\'s results, no invitations were issued for it in that round — regardless of your points score.',
  },
]

const STATE_DISTINCTIONS = [
  {
    title: 'State/territory-determined timelines',
    desc: "Each state/territory opens and closes its nomination program on its own schedule — often in intake windows or with rolling applications. There is no regular monthly round. Some states process on a rolling basis; others batch applications.",
  },
  {
    title: 'State-specific eligibility criteria',
    desc: 'Each state/territory sets its own additional eligibility requirements beyond the federal visa requirements — such as occupation lists, minimum points requirements, Australian study requirements, or connection to the state. Meeting the federal visa requirements is not sufficient for state nomination.',
  },
  {
    title: 'No published federal cutoff for state nominations',
    desc: 'Because state nominations are managed by each state, there is no centrally published cutoff for state-nominated visas. Each state has its own assessment criteria and may publish waitlists, intake limits, or program closures on its own website.',
  },
  {
    title: 'Applying for state nomination and waiting for a SkillSelect round are parallel tracks',
    desc: 'You can have an active SkillSelect EOI for the 189 and simultaneously apply for state nomination for the 190 or state-sponsored 491. An invitation on one track does not cancel the other. If you receive a state nomination, you can accept the invitation and apply for the 190 or state-sponsored 491 regardless of your SkillSelect status.',
  },
]

const EOI_TIPS = [
  {
    heading: 'Updating your EOI resets your submission date',
    desc: "If you update your EOI to increase your claimed points (e.g. after getting IELTS results or passing a birthday that earns age points), your EOI's submission date resets to the date of the update. This can push you behind other EOIs with the same points score that were submitted before your update.",
  },
  {
    heading: 'Only update if the points gain justifies the reset',
    desc: 'Calculate whether the additional points you gain from an update outweigh the disadvantage of a newer submission date. For example, gaining 5 points from an age bracket change is likely worth a date reset; gaining 5 points from an update that moves you from 80 to 85 points may not be if the cutoff is 90.',
  },
  {
    heading: 'Accuracy is mandatory',
    desc: 'You must claim only points you genuinely hold and can prove. Overclaiming points in an EOI and then being unable to substantiate them at the visa application stage can result in visa refusal and potential integrity issues. Update your EOI to correct any inaccuracies promptly.',
  },
  {
    heading: 'Watch for expiry',
    desc: 'EOIs are valid for 2 years from the date of submission. If your EOI expires without an invitation, you will need to submit a new one.',
  },
  {
    heading: 'Do not submit multiple EOIs for the same visa stream',
    desc: 'Submitting multiple EOIs for the same visa subclass does not improve your chances — the Department holds only the most recent EOI for each subclass/occupation combination.',
  },
]

const MYTHS = [
  {
    myth: '"If I have 85 points, I am guaranteed to be invited"',
    fact: 'No. A points score of 85 may be well above the current cutoff in some rounds and well below it in others. The cutoff is determined by round, not by a static threshold. Points that were sufficient last year may not be sufficient this year.',
  },
  {
    myth: '"SkillSelect rounds cover state nomination (190/491)"',
    fact: 'No. SkillSelect rounds cover only the 189 (Skilled Independent) and the family-sponsored stream of the 491 (Skilled Work Regional). State/territory nominations for the 190 and state-sponsored 491 are managed by each state individually.',
  },
  {
    myth: '"Updating my EOI to correct an error will push me to the back of the queue"',
    fact: 'Partially. Updating your EOI does reset your submission date, which can reduce your priority when points scores are tied. However, if you need to update to correct a material inaccuracy, you must do so — accuracy is required. Seek advice on how to manage the update strategically.',
  },
  {
    myth: '"A migration agent can secure me an invitation"',
    fact: 'No registered migration agent can guarantee or influence whether you receive a SkillSelect invitation. Invitations are issued by the Department based entirely on points score, EOI date, and occupation allocation. An agent can help you maximise your legitimate points claim and ensure your EOI is accurate — but cannot influence the round outcome.',
  },
  {
    myth: '"Submitting multiple EOIs increases my chances"',
    fact: 'No. The Department holds one EOI per applicant per visa subclass/occupation combination. Submitting a duplicate EOI for the same stream does not increase your chances — it simply replaces the previous one with a newer submission date.',
  },
]

export default function InvitationRoundsPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['invitation-rounds'].title }, [])
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Skilled Migration', url: 'https://www.nanakmigration.com.au/skilled-migration' },
          { name: 'SkillSelect Invitation Rounds', url: 'https://www.nanakmigration.com.au/invitation-rounds' },
        ]}
        faqs={FAQ}
        service={{ name: 'SkillSelect Invitation Rounds', description: PAGE_META['invitation-rounds'].metaDescription, url: 'https://www.nanakmigration.com.au/invitation-rounds' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Skilled Migration', page: 'skilled-migration' },
        { label: 'Invitation Rounds' },
      ]} />
      <PageHero
        variant="standard"
        eyebrow="Skilled Migration"
        eyebrowSub="SkillSelect · Support Guide"
        title={<>SkillSelect<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Invitation Rounds</em></>}
        deck="SkillSelect invitation rounds determine who receives an invitation to apply for a points-tested skilled visa. Understanding how rounds work — and why cutoffs shift — is essential for anyone building their points and waiting for an invitation."
        shortAnswer={<>The Department of Home Affairs conducts invitation rounds at least monthly through SkillSelect, inviting the highest-scoring Expressions of Interest (EOIs) to apply for the subclass 189 (Skilled Independent) and the family-sponsored stream of the subclass 491 (Skilled Work Regional). Rounds are NOT used for the state/territory-nominated subclass 190 or state-nominated 491 — those are managed by each state and territory on their own schedule. Each round invites a fixed number of applicants from the EOI pool, selecting by points score (highest first), then by date of EOI submission (older EOIs ranked higher when points are tied). The number of invitations per round, the points cutoff, and which occupations are invited can all vary significantly between rounds. There is no guarantee of an invitation regardless of points score. Nanak Migration Group (MARN 2619467) cannot guarantee an invitation will be issued and recommends checking the DoHA website for current round results.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'SkillSelect & EOI →', page: 'skillselect-eoi' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>
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

      {/* Overview + Key Facts */}
      <div id="overview">
        <KeyFactsStrip facts={KEY_FACTS} accent={ACCENT} />
      </div>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What SkillSelect rounds are" title="The Invitation Round System" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 24, marginBottom: 0 }}>
            SkillSelect is the Department of Home Affairs online system that manages Expressions of Interest (EOIs) for Australia's points-tested skilled migration program. When you submit an EOI, you are not applying for a visa — you are entering a ranked pool of candidates. The Department draws from this pool in regular invitation rounds to issue invitations to apply.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 20, marginBottom: 0 }}>
            The Migration Act 1958 requires the Minister to hold at least one invitation round per month for each relevant visa subclass. In practice, multiple rounds are often held in a month, and different occupations may be drawn in different rounds.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 20, marginBottom: 0 }}>
            The system is designed so that migration planning — how many people are invited to apply, and in which occupations — is managed by government policy rather than being demand-driven. This means that even a competitive points score in a well-represented occupation does not guarantee an invitation will ever come, if the occupation's cap is already full.
          </p>
        </div>
      </section>

      {/* How rounds work */}
      <section id="how-rounds-work" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="The mechanics" title="How Invitation Rounds Actually Work" accent={ACCENT} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 40 }}>
            {ROUND_STEPS.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, marginBottom: i < ROUND_STEPS.length - 1 ? 0 : 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: ACCENT, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, flexShrink: 0 }}>
                    {step.num}
                  </div>
                  {i < ROUND_STEPS.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: BORDER, margin: '6px 0', minHeight: 24 }} />
                  )}
                </div>
                <div style={{ paddingBottom: i < ROUND_STEPS.length - 1 ? 32 : 0, paddingTop: 8 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 8 }}>Step {step.num} — {step.title}</div>
                  <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.7 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Points cutoffs */}
      <section id="cutoffs" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="The key variable" title="Why Points Cutoffs Vary Between Rounds" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 24, marginBottom: 0 }}>
            The points cutoff — the minimum points score at which an invitation is issued in a given round — is not a fixed threshold set by the Department. It is an outcome: it reflects where the pool ran out of invitations. The cutoff emerges from the round, rather than being set before it.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 20, marginBottom: 28 }}>
            Several factors cause cutoffs to shift between rounds:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {CUTOFF_FACTORS.map((factor, i) => (
              <div key={i} style={{ borderLeft: `4px solid ${ACCENT}`, background: GREY_BG, borderRadius: 8, padding: 18 }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 6 }}>Factor {i + 1} — {factor.title}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{factor.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Callout variant="note" panel={true} title="Confirm current cutoffs and round results on the DoHA website">
              Points cutoffs for recent rounds are published by the Department of Home Affairs. Always check the most current published round results — cutoffs can change significantly from one round to the next. Nanak Migration Group does not guarantee any particular cutoff level.
            </Callout>
          </div>
        </div>
      </section>

      {/* Reading results */}
      <section id="reading-results" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Round results" title="How to Read Published Round Results" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 24, marginBottom: 32 }}>
            The Department publishes round results after each invitation round on the DoHA website. The results show, for each visa subclass and occupation (where applicable): the date of the round, the number of invitations issued, the lowest points score invited, and the date of the earliest EOI submitted at that points score.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
            {RESULT_COMPONENTS.map((item, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 10, padding: '22px 24px', background: '#fff', borderTop: `4px solid ${ACCENT}` }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 10 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State rounds */}
      <section id="state-rounds" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Outside SkillSelect rounds" title="State and Territory Nomination — A Separate Process" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 24, marginBottom: 0 }}>
            State and territory nomination for the subclass 190 (Skilled Nominated) and state-nominated subclass 491 (Skilled Work Regional — Provisional) does NOT go through SkillSelect invitation rounds. These are managed entirely by each state and territory government on their own schedule and with their own requirements.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 20, marginBottom: 28 }}>
            Key differences from SkillSelect rounds:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {STATE_DISTINCTIONS.map((item, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: 18, background: GREY_BG }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EOI tips */}
      <section id="eoi-tips" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Managing your EOI" title="EOI Tips — How Updates Affect Your Position" accent={ACCENT} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
            {EOI_TIPS.map((tip, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, border: `1px solid ${BORDER}`, borderRadius: 10, padding: '22px 24px', background: '#fff' }}>
                <div style={{ flexShrink: 0, marginTop: 2 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="check" size={14} color="#fff" />
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 6 }}>{tip.heading}</div>
                  <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{tip.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common myths */}
      <section id="myths" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Clearing up confusion" title="Common Myths About Invitation Rounds" accent={ACCENT} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 32 }}>
            {MYTHS.map((item, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ background: '#fff5f5', borderLeft: `4px solid #dc2626`, padding: '14px 20px' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#dc2626', textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginBottom: 4 }}>Myth</div>
                  <div style={{ fontSize: 14, color: '#991b1b', fontStyle: 'italic' }}>{item.myth}</div>
                </div>
                <div style={{ background: GREY_BG, borderLeft: `4px solid ${ACCENT}`, padding: '14px 20px' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: ACCENT, textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginBottom: 4 }}>Fact</div>
                  <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item.fact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="See also" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand
        title="Questions about your SkillSelect position?"
        body="Nanak Migration Group (MARN 2619467) can review your points claim, advise on EOI strategy, and monitor invitation trends — without making promises no agent can keep."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
