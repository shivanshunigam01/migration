import React from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  KeyFactsStrip,
  SectionHeading,
  CardGrid,
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
  PageCard,
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

const PURPLE = CAT_PARTNER
const GREEN   = '#f5a124'
const AMBER   = '#f5a124'
const ROSE    = '#e11d48'
const TEAL    = '#0e7490'
const BLUE    = '#2563eb'
const BORDER  = '#e8edf6'
const GREY_BG = '#fafbfe'
const CURRENT_AS_AT = 'July 2026'

const TOC: NavSection[] = [
  { id: 'key-facts',    label: 'Key facts' },
  { id: 'pillars',      label: 'The four pillars' },
  { id: 'timeline',     label: 'Relationship timeline' },
  { id: 'stronger',     label: 'Stronger vs weaker evidence' },
  { id: 'stat-decs',    label: 'Statutory declarations' },
  { id: 'apart',        label: 'Living apart / long-distance' },
  { id: 'checklist',    label: 'Evidence checklist' },
  { id: 'faq',          label: 'FAQ' },
  { id: 'related',      label: 'Related pages' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'layers',    value: '4 pillars',         label: 'Four legislated aspects of a genuine relationship',                  note: 'Financial, household, social, and commitment aspects are each assessed. No single pillar is determinative on its own.' },
  { icon: 'shield',    value: 'Genuine only',       label: 'All evidence must be genuine — fabricated documents carry severe consequences', note: 'Providing false or misleading evidence may engage PIC 4020, including a three-year bar and potential criminal consequences.' },
  { icon: 'layers',    value: 'One consistent story', label: 'Evidence should tell a coherent narrative across all four pillars',  note: 'Inconsistencies between pillars — or between evidence and answers to questions — attract scrutiny.' },
  { icon: 'clock',     value: 'From the start',    label: 'Evidence ideally covers the full span of the relationship',             note: 'Evidence that only covers a short recent period may raise questions about the claimed length and depth of the relationship.' },
  { icon: 'check',     value: 'Quality over quantity', label: 'A smaller number of specific, verifiable documents generally outweighs bulk', note: 'Hundreds of chat screenshots may be less persuasive than a joint mortgage, a joint bank account, and two detailed statutory declarations.' },
]

/* ─── Four pillars CardGrid ─── */
const PILLAR_CARDS: PageCard[] = [
  {
    icon: 'dollar', color: BLUE,
    title: 'Financial aspects',
    body: "Joint financial arrangements are among the strongest indicators of a shared life. Decision-makers look for evidence that the couple manages money together — not merely that each has their own separate finances.",
    note: "Examples: joint bank account (with transaction history), joint mortgage or loan, joint property ownership, combined car insurance, evidence of shared financial responsibility for major expenses.",
  },
  {
    icon: 'home', color: TEAL,
    title: 'Nature of the household',
    body: "Shared domestic arrangements — living together, sharing household responsibilities — are a central pillar. Evidence is strongest when it shows co-habitation over time, not just a recent or temporary arrangement.",
    note: "Examples: joint lease or tenancy agreement (with both names), utility accounts in both names, correspondence addressed to both parties at the same address, evidence of shared domestic responsibility.",
  },
  {
    icon: 'users', color: GREEN,
    title: 'Social context',
    body: "How the relationship is known to others — family, friends, colleagues, the community. Decision-makers assess whether the couple is recognised as a couple in their social world, and whether they attend events and make decisions as a couple.",
    note: "Examples: photographs at social events (with context), evidence of joint attendance at events, social media demonstrating public relationship recognition, evidence that family and friends know the couple as a couple.",
  },
  {
    icon: 'heart', color: ROSE,
    title: 'Nature of the commitment',
    body: "The depth of the couple's commitment — including their knowledge of each other, their shared future plans, and the length and exclusivity of the relationship. Couples who genuinely know each other — each other's family, history, plans — present the strongest evidence under this pillar.",
    note: "Examples: communications over time (not just recent), evidence of shared future plans (property purchase, having children), declarations about the couple's knowledge of each other, evidence of exclusivity and continuity.",
  },
]

/* ─── Timeline section ─── */
const TIMELINE_POINTS = [
  { icon: 'clock', color: PURPLE, heading: 'Start at the beginning', body: "A relationship timeline documents the development of the relationship from the first meeting through to the present. It serves as a structure that lets the decision-maker understand the relationship's arc and cross-reference evidence against it. It is not a substitute for evidence — it is the frame that evidence fills." },
  { icon: 'check', color: GREEN,  heading: 'Key milestones to document', body: "Where and how the couple first met; first in-person meeting (if the relationship began online); first visit; other significant visits or periods together; moving in together; major shared decisions (property, engagement, children); travel together; introduction to family. Each milestone should, where possible, be corroborated by at least one piece of documentary evidence." },
  { icon: 'layers', color: BLUE,  heading: 'Cross-referencing evidence to the timeline', body: "Documents are most persuasive when they corroborate specific events in the timeline. A tenancy agreement starting in a particular month corresponds to the couple moving in together. Travel records correspond to visits. Bank account statements show joint activity over the period claimed. Weak evidence covers only the recent period, without reference to the relationship's earlier development." },
  { icon: 'alert', color: AMBER,  heading: 'Gaps in the timeline attract scrutiny', body: "A relationship timeline that skips large periods without explanation — or that is only supported by recent evidence — may raise concerns about whether the claimed length and depth of the relationship is genuine. Explain any periods where evidence is sparse (e.g., living apart for work; periods of separation; overseas travel) and note what evidence covers that period." },
]

/* ─── Stronger vs weaker ─── */
const COMPARE_COLUMNS: ComparisonColumn[] = [
  { key: 'stronger', label: 'Generally stronger evidence', highlight: true },
  { key: 'weaker',   label: 'Generally weaker evidence (without more)' },
]
const COMPARE_ROWS: ComparisonRow[] = [
  {
    feature: 'Financial',
    stronger: 'Joint bank account with regular shared transactions over time',
    weaker:   'Separate accounts; couple mentions sharing costs only in a statutory declaration',
  },
  {
    feature: 'Household',
    stronger: 'Joint tenancy agreement or mortgage, utility accounts in both names',
    weaker:   'No tenancy evidence; couple states they live together but there is no corroborating document',
  },
  {
    feature: 'Social',
    stronger: "Photographs at dated family events with identified people; written declarations from family who have observed the relationship over time",
    weaker:   'Generic couple photos without context; declarations from people who have not met the couple in person',
  },
  {
    feature: 'Commitment',
    stronger: "Communications spanning years that show the couple's knowledge of each other's lives, families, and plans",
    weaker:   'A large volume of recent messages selected to show affection, without evidence of depth of knowledge',
  },
  {
    feature: 'Statutory declarations',
    stronger: 'Specific, detailed declarations from people who have personally observed the couple together over time',
    weaker:   'Short, generic declarations from friends who primarily know about the relationship from what the applicant has told them',
  },
  {
    feature: 'Overall coherence',
    stronger: 'Evidence across all four pillars tells the same consistent story that is corroborated across document types',
    weaker:   'Strong evidence in one or two pillars; little or nothing in others; narrative inconsistencies between documents',
  },
]

/* ─── Statutory declarations section ─── */
const STAT_DEC_POINTS = [
  {
    icon: 'clipboard', color: PURPLE,
    heading: 'Two types of statutory declaration',
    body: "Partner visa applications typically include two types of statutory declaration: one made by the couple themselves (explaining the relationship in their own words), and one or more made by supporting witnesses — people who know the couple and can speak to the genuineness of the relationship from personal observation.",
  },
  {
    icon: 'users', color: GREEN,
    heading: "What a witness's declaration should cover",
    body: "A supporting witness declaration is most useful when it is specific to what the witness has personally observed — not a generic statement of support. A useful declaration describes how the witness knows both parties, what they have observed of the relationship over what period, specific occasions on which they have seen the couple together, and their view of the relationship's genuineness. Witnesses should write about what they know from their own experience.",
  },
  {
    icon: 'alert', color: ROSE,
    heading: 'Declarations must not be based on templates or copied wording',
    body: "A statutory declaration is a legal document made under the Statutory Declarations Act 1959. Making a false statutory declaration is a criminal offence. Declarations should reflect the witness's genuine observations in their own words. Template wording that does not reflect a witness's actual knowledge raises concerns — and a declaration that is materially false may have serious legal consequences for the person who makes it.",
  },
  {
    icon: 'check', color: TEAL,
    heading: 'Formalities: witnessing and format',
    body: "A statutory declaration made in Australia must be witnessed by an authorised person (such as a Justice of the Peace, a notary public, a legal practitioner, or another person authorised under the Statutory Declarations Act). The declaration must be signed in the presence of the witness. Declarations made overseas must generally be witnessed by an authorised person under the law of the relevant country and may need to be authenticated. Confirm current requirements with a registered migration agent.",
  },
  {
    icon: 'alert', color: AMBER,
    heading: 'This page does not provide template or sample wording',
    body: "Statutory declarations for partner visa applications must reflect each couple's genuine circumstances in their own words — and each witness's genuine personal knowledge. No template or standard wording is appropriate, because every relationship is different. A registered migration agent (MARN 2619467) can guide you on what a declaration should address without putting words in your mouth.",
  },
]

/* ─── Living apart / long-distance section ─── */
const APART_POINTS = [
  {
    icon: 'plane', color: BLUE,
    heading: 'Long-distance relationships',
    body: "Long-distance couples — where the partners live in different cities or countries — can and do obtain partner visas. The key is to demonstrate that, despite the distance, the relationship is genuine, committed, and ongoing. Evidence of regular communication (call records, video call histories, messages over time), travel records showing visits, and financial arrangements that bridge the distance all become particularly important.",
  },
  {
    icon: 'home', color: TEAL,
    heading: 'Couples who have lived apart for a period',
    body: "Couples may live apart for genuine reasons — work, study, caring responsibilities, visa conditions. A period of separation does not invalidate a genuine relationship, but it needs to be explained and evidenced. Periods of separation should be addressed in the relationship statement, with evidence of ongoing communication and commitment during the separation period.",
  },
  {
    icon: 'heart', color: PURPLE,
    heading: 'Culturally or family-arranged relationships',
    body: "Relationships that were arranged — whether by family, through a community introduction, or through another cultural process — are not treated differently under Australian partner visa law. The same four pillars of evidence apply. Decision-makers assess the genuineness of the relationship as it exists at the time of application — not how it began. What matters is that the couple now genuinely know and care for each other, share a life, and intend to continue doing so.",
  },
  {
    icon: 'check', color: GREEN,
    heading: 'De facto relationships',
    body: "Partner visas are available to both married couples and genuine de facto (unmarried) partners. For de facto couples, the relationship must generally have existed for at least 12 months before the application is lodged — unless a registered relationship or compelling circumstances exist. Evidence of a de facto relationship follows the same four pillars: evidence of shared finances, household, social recognition, and commitment is assessed in the same way as for married couples.",
  },
]

/* ─── Evidence checklist by pillar ─── */
const EVIDENCE: ChecklistGroup[] = [
  {
    title: 'Financial aspects',
    icon: 'dollar', color: BLUE,
    items: [
      'Joint bank account statements — showing regular shared transactions over an extended period (not opened recently)',
      'Joint mortgage documents, home loan statements, or joint property ownership records',
      'Joint loan agreements (car, personal, other)',
      'Combined insurance policies (home and contents, car, life) listing both partners',
      'Evidence of shared financial responsibility for major household expenses',
      'Evidence that either partner financially supports the other (if applicable to your circumstances)',
    ],
  },
  {
    title: 'Nature of the household',
    icon: 'home', color: TEAL,
    items: [
      'Joint residential tenancy agreement or lease with both names',
      'Evidence of joint responsibility for household bills — utilities in both names or correspondence addressed to both at the same address',
      'Evidence of co-habitation over time — rental history, change of address notifications, electoral roll',
      'Evidence of shared household duties or domestic arrangements (if this is addressed in the relationship statement)',
    ],
  },
  {
    title: 'Social context',
    icon: 'users', color: GREEN,
    items: [
      "Photographs together at social events, family gatherings, travel — with context identifying dates, occasions and people where possible",
      'Statutory declarations from friends, family members or colleagues who have personally observed the relationship',
      'Evidence of joint attendance at events — invitations, travel records, photographs',
      "Evidence that each partner knows the other's family — correspondence, photographs, visit records",
      'Social media or public records that demonstrate the relationship is publicly recognised (optional — not required)',
    ],
  },
  {
    title: 'Nature of the commitment',
    icon: 'heart', color: ROSE,
    items: [
      'Relationship statement (or statutory declaration by the couple) addressing the history, development and current nature of the relationship',
      'Communications over time — messages, emails, or other correspondence that demonstrate the depth and continuity of the relationship (a representative sample, not an exhaustive download)',
      'Evidence of shared future plans — property purchase, engagement, travel plans, children',
      'Evidence of the couple\'s knowledge of each other — family backgrounds, personal history, careers',
      'Evidence of any registered relationship (state or territory registration, if applicable)',
    ],
  },
  {
    title: 'Statutory declarations',
    icon: 'clipboard', color: PURPLE,
    items: [
      "Couple's own statutory declaration(s) addressing the four pillars — made by each partner separately or jointly",
      'At least two statutory declarations from supporting witnesses who have personally observed the relationship',
      'Each declaration should be witnessed by an authorised person under the Statutory Declarations Act 1959',
      'Declarations should be in each person\'s own words, specific to what they have personally observed',
    ],
  },
  {
    title: 'Long-distance / living apart (if applicable)',
    icon: 'plane', color: AMBER,
    items: [
      'Travel records showing visits — passport stamps, boarding passes, accommodation bookings',
      'Communication records during periods of separation — call logs, video call histories',
      'Explanation in the relationship statement of periods of separation and the reason for living apart',
      'Evidence of financial arrangements maintained during separation',
    ],
  },
]

const FAQ: FaqItem[] = [
  {
    question: "How much evidence is enough for a partner visa?",
    answer: "There is no fixed minimum amount of evidence for a partner visa application. Decision-makers assess the quality and persuasiveness of evidence across all four pillars — financial, household, social, and commitment — holistically. A smaller number of specific, verifiable documents that tell a coherent and consistent story generally carries more weight than a large volume of undifferentiated material. If you are unsure whether your evidence is sufficient, a registered migration agent can review your file before you lodge.",
  },
  {
    question: "We do not have a joint bank account. Can we still get a partner visa?",
    answer: "Yes. A joint bank account is one form of financial evidence but it is not mandatory. Couples who manage their finances separately can still demonstrate the financial aspects of their relationship through other evidence — for example, evidence of one partner paying household bills that benefit both, evidence of financial support from one to the other, or joint financial commitments like a shared mortgage. The absence of a joint account should be explained in the relationship statement, and other financial evidence should be provided. The overall picture is what matters.",
  },
  {
    question: "We have not lived together. Can we still qualify?",
    answer: "For married couples, there is no requirement to have lived together. For de facto couples, the requirement is that the relationship has existed for at least 12 months — but co-habitation is not explicitly required. However, not having lived together is something that will be noted by a decision-maker and should be addressed. The couple should explain why they have not lived together — work, visa conditions, family circumstances — and provide strong evidence under the other three pillars, particularly financial and social.",
  },
  {
    question: "What should a supporting witness statutory declaration say?",
    answer: "A supporting witness declaration is most useful when it reflects the witness's genuine, personal observations of the relationship over time — in the witness's own words. It should describe how the witness knows both partners, what they have observed of the relationship and over what period, and specific occasions or circumstances in which they have seen the couple together. This page does not provide template or sample wording — a registered migration agent can advise on what each declaration should address without drafting it for the witness.",
  },
  {
    question: "We met online and have only met in person a small number of times. Is that a problem?",
    answer: "The number of in-person meetings alone is not determinative. What matters is the genuineness of the relationship. A couple who met online and has had limited in-person contact will need to work harder to demonstrate the depth and genuineness of their relationship — particularly under the social and commitment pillars. Evidence of regular, substantive communication over an extended period; evidence that each partner knows the other's life, family and plans; and evidence of serious shared plans or commitments all become particularly important where in-person time has been limited.",
  },
  {
    question: "My relationship is culturally arranged. Does that matter?",
    answer: "No. Australian partner visa law does not treat arranged, introduced, or culturally organised relationships differently from other relationships. The same four pillars apply to all couples. Decision-makers assess the genuineness of the relationship as it exists at the time of application — not how it began. Couples in arranged relationships should provide evidence of the relationship as it is now: how the couple knows each other, how the relationship has developed, and the evidence across all four pillars.",
  },
  {
    question: "Can we include social media screenshots as evidence?",
    answer: "Social media evidence can be useful as part of the social context pillar — particularly evidence that the relationship is publicly recognised (posts about the couple, tagged photographs, public acknowledgement of the relationship). However, social media evidence alone, without corroboration from other document types, is generally a weaker foundation. Social media records can be manipulated or created for the purpose of the application, so decision-makers look for evidence that is independently verifiable. Include social media evidence as a supplement to other evidence, not as the primary basis for any pillar.",
  },
  {
    question: "What is PIC 4020 and what happens if fabricated evidence is submitted?",
    answer: "Public Interest Criterion 4020 (PIC 4020) is a provision in the Migration Regulations that bars applicants from being granted most Australian visas for three years if they have provided false documents or false or misleading information in a visa application — including the current application or any prior application. In addition, submitting a false statutory declaration is a criminal offence under the Statutory Declarations Act 1959. Fabricated documents — including false tenancy agreements, manufactured financial records, or statutory declarations that contain false statements — carry serious consequences both for the visa application and potentially for the persons involved. All evidence submitted must be genuine.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Partner Visa Onshore (820/801)',   desc: 'Partner visa for couples in Australia — evidence guide applies directly.', icon: 'home',      page: 'partner-visa-820-801' },
  { title: 'Partner Visa Offshore (309/100)', desc: 'Partner visa for couples outside Australia.',                                icon: 'plane',     page: 'partner-visa-309-100' },
  { title: 'Prospective Marriage Visa (300)', desc: 'Engaged couples — the visa before the 820.',                                icon: 'heart',     page: 'prospective-marriage-300' },
  { title: 'Partner and Family — Hub',        desc: 'Overview of all partner, parent and family visa pathways.',                 icon: 'users',     page: 'partner-family-visas' },
]

export default function PartnerVisaEvidencePage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => {
    document.title = PAGE_META['partner-visa-evidence'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Partner Visa Evidence Guide', url: 'https://www.nanakmigration.com.au/partner-visa-evidence' },
        ]}
        faqs={FAQ}
        service={{ name: 'Partner Visa Evidence Guide', description: PAGE_META['partner-visa-evidence'].metaDescription, url: 'https://www.nanakmigration.com.au/partner-visa-evidence' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Partner & Family', page: 'partner-family-visas' },
        { label: 'Partner Visa Evidence Guide' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Partner Visas · Evidence Guide"
        title={<>Partner Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Evidence Guide</em></>}
        deck="The four pillars of relationship evidence for Australian partner visa applications — and how to build a file that tells one clear, consistent, and verifiable story across all of them."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Have your evidence file reviewed before lodging', page: 'book-consultation' }}
        accent={PURPLE}
        navigate={navigate}
        footnote="General information only. All evidence must be genuine. This page does not provide template statutory declaration wording. Obtain advice from MARN 2619467 before lodging."
      />
      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            A successful partner visa application requires comprehensive evidence that your relationship with your sponsoring partner is genuine, ongoing and meets the criteria for a spouse or de facto relationship, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. The Department of Home Affairs assesses evidence across four categories: financial aspects of the relationship, the nature of the household, social aspects of the relationship, and commitment to each other. In most cases, the more varied and detailed your evidence across all four categories, the stronger your application.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>


      <div style={{ maxWidth: 1260, margin: '0 auto', padding: '48px 32px 0', display: 'flex', gap: 48 }}>
        <OnThisPageNav sections={TOC} accent={PURPLE} />
        <div style={{ flex: 1 }} />
      </div>

      <div id="key-facts">
        <KeyFactsStrip facts={KEY_FACTS} accent={PURPLE} />
      </div>

      {/* Four pillars CardGrid */}
      <section id="pillars" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading
            kicker="The Four Pillars"
            title="What Decision-Makers Look For"
            intro="Australian partner visa regulations require a 'genuine relationship' to be assessed across four aspects. Evidence across all four pillars is expected — weakness in one area is not automatically fatal, but it is noted."
            accent={PURPLE}
          />
          <CardGrid cards={PILLAR_CARDS} columns={2} accent={PURPLE} />
        </div>
      </section>

      {/* Relationship timeline */}
      <section id="timeline" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Narrative Structure"
            title="Building a Relationship Timeline"
            intro="A chronological narrative of how the relationship developed — from first meeting to the present — provides the framework that allows evidence to be understood in context."
            accent={PURPLE}
          />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {TIMELINE_POINTS.map(p => (
              <div key={p.heading} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: `rgba(27,43,94,0.04)`, border: `1.5px solid rgba(27,43,94,0.10)`, borderRadius: 14, padding: '16px 18px' }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, background: `rgba(27,43,94,0.08)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Icon name={p.icon} size={14} color={NAVY} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{p.heading}</div>
                  <p style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.75 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stronger vs weaker */}
      <section id="stronger" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading
            kicker="Evidence Quality"
            title="Stronger vs Weaker Evidence"
            intro="Not all evidence carries equal weight. This comparison explains why certain types of evidence generally give a decision-maker more confidence — and what common gaps look like."
            accent={PURPLE}
          />
          <ComparisonTable
            columns={COMPARE_COLUMNS}
            rows={COMPARE_ROWS}
            accent={PURPLE}
            caption="General guide only. What constitutes stronger or weaker evidence will vary by individual circumstances."
          />
        </div>
      </section>

      {/* Statutory declarations */}
      <section id="stat-decs" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Legal Documents"
            title="Statutory Declarations"
            intro="Statutory declarations are formal legal documents and a key part of most partner visa applications. Understanding what makes them useful — and what is required of them — matters."
            accent={PURPLE}
          />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {STAT_DEC_POINTS.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: `rgba(27,43,94,0.04)`, border: `1.5px solid rgba(27,43,94,0.12)`, borderRadius: 14, padding: '16px 18px' }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, background: `rgba(27,43,94,0.08)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Icon name={p.icon} size={14} color={NAVY} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{p.heading}</div>
                  <p style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.75 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Living apart / long-distance */}
      <section id="apart" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Specific Circumstances"
            title="Living Apart, Long-Distance, and Culturally Arranged Relationships"
            intro="Not all couples fit the same mould. Partner visa evidence requirements apply equally to all genuine couples, regardless of how the relationship began or how it is structured."
            accent={PURPLE}
          />
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {APART_POINTS.map(p => (
              <div key={p.heading} style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 14, padding: '20px 18px', boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: `rgba(27,43,94,0.07)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={p.icon} size={13} color={NAVY} />
                  </div>
                  <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 15, fontWeight: 700, color: NAVY, lineHeight: 1.35 }}>{p.heading}</div>
                </div>
                <p style={{ margin: 0, fontSize: 14, color: '#374151', lineHeight: 1.75 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence checklist */}
      <section id="checklist" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading
            kicker="Evidence by Pillar"
            title="Partner Visa Evidence Checklist"
            intro="The items below are organised by pillar. Not every item will apply to every couple — the relevant documents depend on individual circumstances."
            accent={PURPLE}
          />
          <div style={{ marginBottom: 24 }}>
            <Callout variant="warning">
              <strong>All evidence must be genuine.</strong> Providing false, fabricated, or misleading documents in a partner visa application — including false statutory declarations — may engage PIC 4020 (resulting in a three-year bar on Australian visa applications) and may also constitute a criminal offence. Every document submitted must accurately represent the couple's actual circumstances. A registered migration agent (MARN 2619467) can advise on evidence without encouraging fabrication.
            </Callout>
          </div>
          <EvidenceChecklist groups={EVIDENCE} accent={PURPLE} />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={PURPLE} />
          <FaqAccordion items={FAQ} accent={PURPLE} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={PURPLE} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={2} />
        </div>
      </section>

      <CtaBand
        title={<>Have your evidence file reviewed<br /><em style={{ fontStyle: 'italic', color: GOLD }}>before you lodge</em></>}
        body="Navpreet Aulakh (MARN 2619467) can review your partner visa evidence file before lodgement — identifying gaps in the four pillars, inconsistencies between documents, and anything that is likely to draw scrutiny from a decision-maker. A review before lodgement costs far less than a refusal."
        primaryCta={{ label: 'Book an evidence review consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'View partner visa options →', page: 'partner-family-visas' }}
        accent={PURPLE}
        footnote="MARA-registered · MARN 2619467 · General information only · Evidence must be genuine"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT}
        pageNote="Partner visa evidence requirements are set by the Migration Act 1958 and Migration Regulations 1994, subject to change. This page does not provide template statutory declaration wording. All evidence must genuinely reflect the couple's actual circumstances. Obtain advice from a registered migration agent before lodging." />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
