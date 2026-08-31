import React from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  KeyFactsStrip,
  SectionHeading,
  StepTimeline,
  ComparisonTable,
  Callout,
  EvidenceChecklist,
  AnswerBox,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  ComplianceDisclaimer,
  OnThisPageNav,
} from '@/components/page'
import type {
  KeyFact,
  TimelineStep,
  ComparisonColumn,
  ComparisonRow,
  ChecklistGroup,
  FaqItem,
  RelatedPage,
  NavSection,
} from '@/components/page'
import { GOLD, NAVY , CAT_PARTNER } from '@/theme'
import Icon from '@/components/ui/Icon'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const ROSE = CAT_PARTNER
const GREEN   = '#f5a124'
const AMBER   = '#f5a124'
const TEAL    = '#0e7490'
const VIOLET  = '#4f46e5'
const BORDER  = '#e8edf6'
const GREY_BG = '#fafbfe'
const CURRENT_AS_AT = 'July 2026'

const TOC: NavSection[] = [
  { id: 'key-facts',    label: 'Key facts' },
  { id: 'timeline',     label: 'The process' },
  { id: 'noim',         label: 'Intention to marry' },
  { id: 'comparison',   label: 'Which visa suits you' },
  { id: 'meeting',      label: 'Meeting in person' },
  { id: 'after-marry',  label: 'After you marry' },
  { id: 'evidence',     label: 'Evidence checklist' },
  { id: 'faq',          label: 'FAQ' },
  { id: 'related',      label: 'Related pages' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'clock',     value: 'Temporary',           label: 'Granted for a set period from the date of grant', note: 'The visa is generally granted for a period within which the marriage must take place. The specific duration is set when the visa is granted.' },
  { icon: 'alert',     value: 'Marry within validity', label: 'The marriage must take place before the visa expires', note: 'If the marriage does not take place before the visa expires, the applicant will generally need to depart Australia. See the Callout below for what generally happens.' },
  { icon: 'plane',     value: 'Applied from offshore', label: 'Generally applied for and granted while the applicant is outside Australia', note: 'In most circumstances, the applicant must be outside Australia when the application is lodged and when the decision is made.' },
  { icon: 'user',      value: 'Sponsor must be approved', label: 'The sponsor must be assessed and approved before the visa is granted', note: 'The Australian citizen, permanent resident or eligible New Zealand citizen must be approved as a sponsor by the Department of Home Affairs.' },
  { icon: 'arrowright',value: 'Pathway to 820/801',   label: 'After marrying, the applicant generally applies for the Partner Visa (820) onshore', note: 'The 300 visa itself does not lead to permanent residence. After the marriage, the couple applies for the partner visa (820/801) from within Australia.' },
]

const STEPS: TimelineStep[] = [
  {
    code: '01', title: 'Confirm eligibility and sponsorship',
    points: [
      'The sponsor — an Australian citizen, Australian permanent resident, or eligible New Zealand citizen — confirms they meet the sponsorship criteria.',
      'The couple must be in a genuine, committed relationship with the intention to marry.',
      'Both parties must be free to marry under Australian law (neither party may be married to someone else).',
      'The couple should generally have met in person — see the "Meeting in person" section below.',
    ],
    color: ROSE,
  },
  {
    code: '02', title: 'Sponsor submits sponsorship application',
    points: [
      'The sponsor lodges a sponsorship application through ImmiAccount.',
      'The sponsorship application is assessed for the sponsor\'s eligibility — including character checks and any prior sponsorship history.',
      'Processing of the sponsorship and the visa application generally occurs concurrently.',
    ],
    color: ROSE,
  },
  {
    code: '03', title: 'Lodge the visa application (applicant outside Australia)',
    points: [
      'The applicant lodges the subclass 300 application online through ImmiAccount.',
      'The applicant must be outside Australia when the application is lodged.',
      'Supporting evidence — identity documents, relationship evidence, intention to marry evidence, and financial documents — is uploaded at this stage.',
      'Biometrics and health checks may be requested during processing.',
    ],
    color: ROSE,
  },
  {
    code: '04', title: 'Decision',
    points: [
      'The Department of Home Affairs assesses the application — including the genuineness of the relationship and the couple\'s intention to marry.',
      'Additional information may be requested during processing.',
      'If granted, the visa will specify a period within which the applicant must travel to Australia and marry.',
    ],
    color: AMBER,
  },
  {
    code: '05', title: 'Travel to Australia and marry',
    points: [
      'The applicant travels to Australia on the 300 visa.',
      'The marriage must take place within the visa validity period.',
      'A Notice of Intended Marriage (NOIM) must generally be lodged with a registered marriage celebrant at least one month before the ceremony (see below).',
      'Both parties must be present for the marriage ceremony, which must be conducted by a registered marriage celebrant.',
    ],
    color: GREEN,
  },
  {
    code: '06', title: 'Apply for the Partner Visa (820/801) after marriage',
    points: [
      'After the marriage, the couple generally applies for the subclass 820 (temporary) partner visa onshore.',
      'The 820 application can be lodged before the 300 visa expires.',
      'The 820 visa holder receives a bridging visa while the application is processed.',
      'If the 820 is granted, the couple later applies for the permanent 801 visa after the waiting period.',
    ],
    color: GREEN,
  },
]

/* ─── NOIM section ─── */
const NOIM_POINTS = [
  { icon: 'clipboard', color: ROSE,  heading: 'Notice of Intended Marriage (NOIM)', body: "Before a marriage can be solemnised in Australia, the couple must give a Notice of Intended Marriage to a registered marriage celebrant. The NOIM must generally be lodged at least one month before the wedding date. The NOIM is a legal requirement under the Marriage Act 1961 (Cth) and is separate from the visa process — but a signed NOIM is strong evidence of genuine intention to marry in the 300 visa application." },
  { icon: 'check',     color: GREEN, heading: 'Evidence of genuine intention to marry', body: "Decision-makers assess whether the couple genuinely intends to marry — not merely whether an engagement has been announced. Evidence that can support intention includes: a signed NOIM, a venue booking or deposit, communications discussing wedding plans, invitations or save-the-dates, or engagement announcements to family and friends." },
  { icon: 'users',     color: TEAL,  heading: 'The couple must be known to each other', body: "Both parties must know each other personally. There are additional requirements where the couple met through an introduction service — in some circumstances, the sponsor may be required to have met the applicant in person. See the 'Meeting in person' section for more detail." },
  { icon: 'alert',     color: AMBER, heading: 'The engagement alone is not enough', body: "Being engaged — in the sense of having agreed to marry — is the threshold requirement. But an engagement unsupported by evidence that the relationship is genuine and that a marriage is genuinely planned may not satisfy the decision-maker. The overall genuineness of the relationship is assessed holistically." },
]

/* ─── Comparison table ─── */
const COMPARE_COLUMNS: ComparisonColumn[] = [
  { key: 'v300', label: 'Subclass 300 (Prospective Marriage)', highlight: true },
  { key: 'v309', label: 'Subclass 309/100 (Partner — offshore)' },
  { key: 'v820', label: 'Subclass 820/801 (Partner — onshore)' },
]
const COMPARE_ROWS: ComparisonRow[] = [
  { feature: 'Relationship at application', v300: 'Engaged (not yet married)', v309: 'Married or de facto', v820: 'Married or de facto' },
  { feature: 'Where applicant applies from', v300: 'Outside Australia', v309: 'Outside Australia', v820: 'Inside Australia' },
  { feature: 'First visa granted',           v300: 'Temporary (300)', v309: 'Temporary (309)', v820: 'Temporary (820)' },
  { feature: 'Path to permanent residence',  v300: "Marry → apply 820 onshore → 801 permanent", v309: '309 transitions to permanent 100 after waiting period', v820: '820 transitions to permanent 801 after waiting period' },
  { feature: 'Work rights from grant',       v300: 'Generally yes', v309: 'Generally yes', v820: 'Generally yes' },
  { feature: 'When marriage must occur',     v300: 'Before the 300 visa expires', v309: 'Must already be married or in de facto relationship', v820: 'Must already be married or in de facto relationship' },
  { feature: 'Who generally suits',          v300: 'Engaged couple not yet married; applicant offshore', v309: 'Married or de facto; applicant wants to join sponsor offshore', v820: 'Married or de facto; applicant already in Australia' },
]

/* ─── Meeting in person ─── */
const MEETING_POINTS = [
  { icon: 'users', color: ROSE,  heading: 'Both parties must know each other personally', body: "A fundamental requirement of the 300 visa — and all partner visa categories — is that the couple must know each other personally. A relationship conducted entirely online, without any in-person meetings, is generally not sufficient. Decision-makers look for evidence that the couple has spent time together in person." },
  { icon: 'alert', color: AMBER, heading: 'Introduction services — additional requirements may apply', body: "Where the couple met through an introduction or matchmaking service (including online platforms that charge a fee), additional requirements may apply. In some circumstances, the sponsor may be required to have met the applicant in person before the application is lodged. The Department of Home Affairs publishes specific guidance on what additional evidence may be needed in these circumstances." },
  { icon: 'plane', color: TEAL,  heading: 'Evidence of in-person meetings', body: "Evidence that the couple has met in person can include: passport stamps or travel records showing visits, photographs together (with metadata or other context), hotel or accommodation records, communications referencing visits, and statutory declarations from people who have seen the couple together in person." },
  { icon: 'check', color: GREEN, heading: 'Quality of evidence matters more than quantity', body: "Evidence should be specific and verifiable. Photographs without context, or communications that do not refer to specific meetings, are weaker evidence than records that can be tied to particular times, places, and events. A coherent narrative supported by documents that independently corroborate each other is generally more persuasive." },
]

/* ─── After marriage section ─── */
const AFTER_POINTS = [
  { icon: 'arrowright', color: ROSE,  heading: 'Apply for the 820 partner visa after the ceremony', body: "After the marriage, the couple should apply for the subclass 820 (temporary) partner visa. This application can be lodged from within Australia while the 300 visa is still valid. The 820 application requires a full partner visa evidence file — including the four pillars of relationship evidence — and cannot simply rely on the existence of the marriage certificate." },
  { icon: 'clock',      color: AMBER, heading: 'There is generally a waiting period before PR', body: "After the 820 is granted, the couple must generally wait before applying for the permanent 801 visa. The waiting period is calculated from the date the partner visa application was first lodged — not from the marriage date. A registered migration agent can advise on the current waiting period that applies to your circumstances." },
  { icon: 'shield',     color: GREEN, heading: "The 300 visa holder's conditions while waiting", body: "While the 820 application is being processed, the 300 visa holder generally receives a bridging visa that allows them to remain in Australia lawfully. Work rights on the bridging visa are generally available — confirm the specific conditions with a registered migration agent." },
  { icon: 'alert',      color: VIOLET, heading: 'Do not delay the 820 lodgement', body: "Lodging the 820 application promptly after the marriage — and well before the 300 visa expires — is important. If the 300 visa expires before the 820 is lodged, the applicant may not be able to remain in Australia lawfully. Seek advice from a registered migration agent to ensure timing is managed correctly." },
]

const EVIDENCE: ChecklistGroup[] = [
  {
    title: 'Identity and relationship status',
    icon: 'user', color: ROSE,
    items: [
      'Passports (current and previous, certified copies)',
      'Birth certificates for both parties',
      'Evidence of prior marriages ending (divorce certificate or death certificate of former spouse — if applicable)',
      'Evidence that both parties are free to marry under Australian law',
    ],
  },
  {
    title: 'Evidence of genuine relationship and intention to marry',
    icon: 'heart', color: ROSE,
    items: [
      'Signed Notice of Intended Marriage (NOIM) from a registered celebrant (if available at time of lodgement)',
      'Communications between the couple demonstrating the relationship and marriage plans (messages, emails)',
      'Photographs together (with context — dates, locations, occasions)',
      'Evidence of the couple having met in person (travel records, accommodation bookings, passport stamps)',
      'Evidence of wedding planning — venue booking, invitations, engagement announcements to family',
    ],
  },
  {
    title: 'Sponsor documents',
    icon: 'shield', color: TEAL,
    items: [
      "Evidence of sponsor's Australian citizenship, permanent residence, or eligible New Zealand citizenship",
      "Sponsor's passport and identity documents",
      'Sponsorship application (lodged separately in ImmiAccount)',
      'Evidence of sponsor character — police clearance may be required',
    ],
  },
  {
    title: 'Financial and personal circumstances',
    icon: 'dollar', color: AMBER,
    items: [
      'Evidence that the applicant can be financially supported in Australia',
      "Applicant's financial documents if not sponsored (bank statements, employment evidence)",
      'Health insurance evidence (Overseas Visitor Health Cover if required)',
    ],
  },
]

const FAQ: FaqItem[] = [
  {
    question: "Can I apply for the subclass 300 visa from inside Australia?",
    answer: "Generally, no. The subclass 300 (Prospective Marriage) visa is designed for applicants who are outside Australia. In most circumstances, the applicant must be outside Australia both when the application is lodged and when the decision is made. If you are already in Australia, a different visa pathway — such as the subclass 820 partner visa (if you are already married or in a de facto relationship) — may be more appropriate. Obtain advice from a registered migration agent to confirm which pathway applies to your circumstances.",
  },
  {
    question: "How long is the subclass 300 visa valid for?",
    answer: "The subclass 300 visa is generally granted for a set period from the date of grant. The specific duration is determined by the Department of Home Affairs and is set out in the visa grant notice. The marriage must take place before the visa expires. If you are uncertain about the validity period that applied to your visa grant, check your visa grant letter or the VEVO service on the Department of Home Affairs website.",
  },
  {
    question: "What happens if the marriage does not take place before the visa expires?",
    answer: "If the marriage does not take place within the validity period of the 300 visa, the applicant will generally need to depart Australia before the visa expires. The visa does not automatically extend if the marriage is delayed. If there are exceptional circumstances preventing the marriage from taking place — such as a serious medical event — it may be possible to seek advice about options, but there is no automatic right to remain. A registered migration agent can advise on options in these circumstances.",
  },
  {
    question: "We are engaged but have only met online. Is that enough?",
    answer: "Generally, no. Decision-makers require the couple to know each other personally, which in most cases means having met in person. A relationship conducted entirely online is generally not sufficient for the subclass 300 visa. Evidence that the couple has met in person — travel records, photographs, communications referencing in-person visits — is an important part of the application. Where the couple met through an introduction service, additional requirements may apply.",
  },
  {
    question: "Does the 300 visa allow me to work in Australia?",
    answer: "The subclass 300 visa generally allows the holder to work in Australia for the duration of the visa. Check the visa grant notice or the VEVO service for the specific work conditions attached to your visa.",
  },
  {
    question: "After I marry in Australia on the 300 visa, can I apply for the partner visa (820) straight away?",
    answer: "Generally, yes — the 820 application can be lodged onshore after the marriage and while the 300 visa is still valid. The 820 is the partner visa for applicants in Australia, and lodging it as soon as practicable after the marriage is advisable so that bridging visa arrangements are in place before the 300 visa expires. The 820 requires a comprehensive partner visa evidence file — a marriage certificate alone is not sufficient.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Partner and Family — Hub',       desc: 'Overview of all partner, parent and family visa pathways.',       icon: 'heart',     page: 'partner-family-visas' },
  { title: 'Partner Visa Offshore (309/100)', desc: 'For couples married or in a de facto relationship — offshore.',   icon: 'plane',     page: 'partner-visa-309-100' },
  { title: 'Partner Visa Onshore (820/801)',  desc: 'For couples married or in a de facto relationship — onshore.',    icon: 'home',      page: 'partner-visa-820-801' },
  { title: 'Partner Visa Evidence Guide',     desc: 'The four pillars of relationship evidence and how to build your file.', icon: 'clipboard', page: 'partner-visa-evidence' },
]

export default function ProspectiveMarriage300Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => {
    document.title = PAGE_META['prospective-marriage-300'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Prospective Marriage Visa (300)', url: 'https://www.nanakmigration.com.au/prospective-marriage-300' },
        ]}
        faqs={FAQ}
        service={{ name: 'Prospective Marriage Visa (Subclass 300)', description: PAGE_META['prospective-marriage-300'].metaDescription, url: 'https://www.nanakmigration.com.au/prospective-marriage-300' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Partner & Family', page: 'partner-family-visas' },
        { label: 'Prospective Marriage Visa (300)' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Partner Visas · Subclass 300"
        title={<>Prospective Marriage<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Visa (Subclass 300)</em></>}
        deck="A temporary visa for a person engaged to an Australian citizen, permanent resident, or eligible New Zealand citizen — allowing them to travel to Australia and marry their sponsor within the visa validity period."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Book a prospective marriage visa consultation', page: 'home' }}
        accent={ROSE}
        navigate={navigate}
        footnote="General information only. Requirements are set by legislation and subject to change — obtain advice from MARN 2619467 before applying."
      />
      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            The Prospective Marriage visa (subclass 300) allows you to travel to Australia to marry your Australian citizen, permanent resident or eligible New Zealand citizen partner within nine months of the visa being granted, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. After marrying, you can generally apply for a partner visa (subclass 820/801) to remain in Australia permanently. To be eligible, you and your intended spouse must be free to marry, have met in person, and intend to live together as a married couple.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>


      <div style={{ maxWidth: 1260, margin: '0 auto', padding: '48px 32px 0', display: 'flex', gap: 48 }}>
        <OnThisPageNav sections={TOC} accent={ROSE} />
        <div style={{ flex: 1 }} />
      </div>

      <div id="key-facts">
        <KeyFactsStrip facts={KEY_FACTS} accent={ROSE} />
      </div>

      {/* Timeline */}
      <section id="timeline" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading
            kicker="Step by Step"
            title="The Prospective Marriage Visa Process"
            intro="The steps below represent the general pathway from engagement to permanent residence. Timelines and requirements vary — obtain advice from a registered migration agent for your specific circumstances."
            accent={ROSE}
          />
          <StepTimeline steps={STEPS} variant="cards" accent={ROSE} />
        </div>
      </section>

      {/* NOIM / intention to marry */}
      <section id="noim" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Marriage Documentation"
            title="Intention to Marry — Evidence and the NOIM"
            intro="Demonstrating genuine intention to marry — not just an engagement — is central to the subclass 300 assessment. The Notice of Intended Marriage (NOIM) plays an important role."
            accent={ROSE}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {NOIM_POINTS.map(p => (
              <div key={p.heading} style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 14, padding: '20px 18px', boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: `${p.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={p.icon} size={13} color={p.color} />
                  </div>
                  <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 14, fontWeight: 700, color: NAVY, lineHeight: 1.35 }}>{p.heading}</div>
                </div>
                <p style={{ margin: 0, fontSize: 13, color: '#374151', lineHeight: 1.75 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section id="comparison" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading
            kicker="Which Visa Suits You"
            title="Subclass 300 vs 309/100 vs 820/801"
            intro="Choosing the right visa pathway depends on your relationship status and where you are. This table is a general guide — your specific circumstances may affect which pathway applies."
            accent={ROSE}
          />
          <ComparisonTable
            columns={COMPARE_COLUMNS}
            rows={COMPARE_ROWS}
            accent={ROSE}
            caption="General guide only. Confirm which pathway applies to your circumstances with a registered migration agent."
          />
        </div>
      </section>

      {/* Meeting in person */}
      <section id="meeting" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Genuine Relationship"
            title="Meeting in Person and Knowing Each Other"
            intro="The 300 visa requires the couple to know each other personally. Online-only relationships generally do not meet this requirement."
            accent={ROSE}
          />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {MEETING_POINTS.map(p => (
              <div key={p.heading} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: `${p.color}06`, border: `1.5px solid ${p.color}18`, borderRadius: 14, padding: '16px 18px' }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, background: `${p.color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Icon name={p.icon} size={14} color={p.color} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{p.heading}</div>
                  <p style={{ margin: 0, fontSize: 13.5, color: '#374151', lineHeight: 1.75 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After marriage */}
      <section id="after-marry" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="The Next Step"
            title="What Happens After You Marry"
            intro="The subclass 300 visa does not lead directly to permanent residence. After the marriage, the couple takes the next step in the partner visa pathway."
            accent={ROSE}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {AFTER_POINTS.map(p => (
              <div key={p.heading} style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 14, padding: '20px 18px', boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: `${p.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={p.icon} size={13} color={p.color} />
                  </div>
                  <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 14, fontWeight: 700, color: NAVY, lineHeight: 1.35 }}>{p.heading}</div>
                </div>
                <p style={{ margin: 0, fontSize: 13, color: '#374151', lineHeight: 1.7 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence checklist */}
      <section id="evidence" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading
            kicker="Document Checklist"
            title="Evidence Generally Required"
            intro="The documents below represent what is generally required. Requirements vary by individual circumstances — confirm the specific documents needed with a registered migration agent."
            accent={ROSE}
          />
          <EvidenceChecklist groups={EVIDENCE} accent={ROSE} />
        </div>
      </section>

      {/* Callout — if marriage doesn't happen */}
      <section style={{ background: GREY_BG, padding: '48px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Callout variant="warning">
            <strong>If the marriage does not take place before the 300 visa expires:</strong> The applicant will generally need to depart Australia before the visa expires. There is no automatic extension of the 300 visa because of a delayed marriage. If the couple later marries (after the 300 visa holder returns home), they may be able to apply for the subclass 309 (partner visa offshore) as a married couple — but the 300 visa cannot be used for this purpose. Seek advice from a registered migration agent (MARN 2619467) as early as possible if delays arise.
          </Callout>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ROSE} />
          <FaqAccordion items={FAQ} accent={ROSE} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={ROSE} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={2} />
        </div>
      </section>

      <CtaBand
        title={<>Start your prospective marriage<br /><em style={{ fontStyle: 'italic', color: GOLD }}>visa journey</em></>}
        body="Navpreet Aulakh (MARN 2619467) can advise on whether the subclass 300 is the right pathway for your circumstances, prepare your application, and help you manage the timing from lodgement through to the partner visa after your marriage."
        primaryCta={{ label: 'Book a prospective marriage visa consultation', page: 'home' }}
        secondaryCta={{ label: 'View partner visa options →', page: 'partner-family-visas' }}
        accent={ROSE}
        footnote="MARA-registered · MARN 2619467 · General information only"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT}
        pageNote="Visa criteria, waiting periods, and processing requirements for the subclass 300 are set by legislation and are subject to change. This page does not constitute immigration advice for individual circumstances. Obtain advice from a registered migration agent before lodging." />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
