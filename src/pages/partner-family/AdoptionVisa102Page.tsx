import React from 'react'
import { GOLD, NAVY, CAT_PARTNER } from '@/theme'
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

const ACCENT = CAT_PARTNER
const CURRENT_AS_AT = 'August 2026'
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'pathways', label: 'Two pathways' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'evidence', label: 'Evidence required' },
  { id: 'process', label: 'Application process' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'shield',
    value: 'Subclass 102',
    label: 'Permanent visa for adopted children',
    note: 'The Adoption visa (subclass 102) is a permanent visa. If granted, the child becomes a permanent resident of Australia. Citizenship by descent or by conferral may be available in addition, subject to separate requirements.',
  },
  {
    icon: 'user',
    value: 'Two pathways',
    label: 'Intercountry (central authority) and expatriate/private adoption',
    note: 'The two main pathways have different requirements and processing approaches. Intercountry adoptions arranged through a state/territory central authority follow Hague Convention or bilateral arrangements; expatriate adoptions require 12+ months overseas residence by the parent.',
  },
  {
    icon: 'briefcase',
    value: 'Sponsor required',
    label: 'Adoptive parent sponsors the child',
    note: 'The sponsoring parent must be an Australian citizen, Australian permanent resident, or an eligible New Zealand citizen. The sponsor must be the child\'s adoptive parent (or proposed adoptive parent).',
  },
  {
    icon: 'alert',
    value: 'Specialist area',
    label: 'Legal and agency coordination required — highly specialised',
    note: 'Adoption visas involve coordination between state/territory adoption authorities, the Department of Home Affairs, the child\'s country of origin, and in some cases DFAT. Early specialist advice is strongly recommended.',
  },
]

const STEPS: TimelineStep[] = [
  { code: '01', title: 'Engage adoption authority or legal representatives', desc: 'For intercountry adoptions, engage the relevant state or territory central authority and obtain approval to adopt. For expatriate adoptions, ensure the adoption is legally valid in the country where it occurred and that the parent has resided overseas for at least 12 months.' },
  { code: '02', title: 'Sponsor assessment', desc: 'The adoptive parent (sponsor) must be assessed as suitable to sponsor the child. This involves identity, character, and (for some arrangements) a health assessment of the sponsor.' },
  { code: '03', title: 'Obtain adoption compliance documents', desc: 'Gather documents confirming the adoption\'s legal validity in the country of origin — adoption orders, court documents, consent documents, and any certificates issued under the Hague Convention or relevant bilateral arrangement.' },
  { code: '04', title: 'Obtain certificate of identity for the child (if required)', desc: 'In some cases, the child may need a travel document from their country of origin, or a certificate of identity from the Australian government, before the visa application can proceed.' },
  { code: '05', title: 'Lodge the subclass 102 visa application', desc: 'The visa application is lodged through ImmiAccount. The child must satisfy health and character requirements (character is adapted for age). Supporting documents include the adoption order, sponsor identity documents, and compliance certificates.' },
  { code: '06', title: 'Await decision and travel arrangements', desc: 'Processing times vary significantly depending on the country of origin and the completeness of documents. Once granted, the child travels to Australia on the adoption visa.' },
]

const FAQ: FaqItem[] = [
  {
    question: "What is the difference between the two pathways for the subclass 102 visa?",
    answer: "The intercountry adoption pathway applies where an Australian state or territory central authority has arranged the adoption through a recognised intercountry adoption program. Most countries with an active intercountry adoption program are either Hague Convention signatories or covered by a bilateral arrangement between Australia and that country. Australia's state and territory central authorities manage intercountry adoptions and issue the compliance documentation needed for the visa. The expatriate/private adoption pathway applies where an Australian parent has lived overseas for 12 months or more, adopted a child in that country under the local law, and then seeks to bring the child to Australia. This pathway is available where the adoption is legally valid in the country where it occurred but the adoption was not arranged through an Australian central authority program.",
  },
  {
    question: "Does the child become an Australian citizen automatically after the subclass 102 visa is granted?",
    answer: "Not automatically from the visa grant alone. A child adopted by an Australian citizen may be eligible for Australian citizenship by descent or by conferral — but this depends on the specific circumstances, including whether the adoptive parent was an Australian citizen at the time of the adoption and whether the adoption is recognised under Australian law as effective to confer citizenship. The Department of Home Affairs administers both the visa and citizenship applications, but they are separate applications with separate requirements. It is strongly recommended to seek advice on citizenship eligibility at the same time as the visa is being processed.",
  },
  {
    question: "Can a permanent resident (not a citizen) sponsor an adopted child for the subclass 102?",
    answer: "Yes — an Australian permanent resident, and in some circumstances an eligible New Zealand citizen, can be the sponsoring parent for a subclass 102 application. However, it is worth noting that if the sponsoring parent is not an Australian citizen, the child will not automatically be eligible for Australian citizenship by conferral in the same way. The child will become a permanent resident on the grant of the 102 visa and will need to satisfy separate citizenship eligibility criteria in due course. Seek advice on the citizenship pathway as early as possible.",
  },
  {
    question: "What if the adoption is not yet finalised when we want to apply for the visa?",
    answer: "The subclass 102 can be applied for where the adoption is in progress (proposed adoption) as well as where it has been finalised. The requirements differ depending on whether the adoption order has been made at the time of lodgement. In cases where the adoption is proposed but not yet finalised, the application will generally not be decided until the adoption has been legally completed and the relevant documentation is provided to the Department. The child must not travel on the visa until it is granted.",
  },
  {
    question: "What is the Hague Convention and does it affect the subclass 102 visa?",
    answer: "The Hague Convention on Protection of Children and Co-operation in Respect of Intercountry Adoption is an international treaty that sets standards for intercountry adoption and requires cooperation between the sending and receiving country. Australia is a party to the Hague Convention. If both Australia and the child's country of origin are Hague Convention signatories, the intercountry adoption must follow Hague Convention procedures — which includes oversight by the relevant central authority in each country. Adoptions that do not comply with Hague Convention requirements (where both countries are signatories) may not be recognised in Australia and may not qualify for the subclass 102 visa. Engage the state or territory central authority early — they will confirm which framework applies.",
  },
  {
    question: "How long does the subclass 102 visa take to process?",
    answer: "Processing times for the subclass 102 visa vary significantly depending on the country of origin of the child, the completeness of the adoption compliance documents, and the individual circumstances of the application. Intercountry adoption processes often involve two countries' government agencies and can take years from initial approval to the child arriving in Australia — the visa application itself is often one of the later steps in that process. The Department of Home Affairs publishes indicative processing times — always confirm current times on the DoHA website, as they change regularly. Seek advice before forming expectations about timelines.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Child Visa (Offshore 101)', desc: 'Permanent child visa for biological dependent children applying from outside Australia.', icon: 'plane', page: 'child-visa-101', color: ACCENT },
  { title: 'Child Visa (Onshore 802)', desc: 'Permanent child visa for dependent children already in Australia.', icon: 'home', page: 'child-visa-802', color: ACCENT },
  { title: 'Dependent Child (445)', desc: 'Temporary child visa for a child joining a parent on a temporary partner visa.', icon: 'user', page: 'dependent-child-445', color: ACCENT },
  { title: 'Partner & Family Visas', desc: 'Overview of all partner, parent, and child visa pathways.', icon: 'heart', page: 'partner-family-visas', color: ACCENT },
]

export default function AdoptionVisa102Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['adoption-visa-102'].title }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Adoption Visa (102)', url: 'https://www.nanakmigration.com.au/adoption-visa-102' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{ name: 'Adoption Visa (Subclass 102) Advice', description: PAGE_META['adoption-visa-102'].metaDescription, url: 'https://www.nanakmigration.com.au/adoption-visa-102' }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Partner & Family Visas', page: 'partner-family-visas' },
          { label: 'Adoption Visa (102)' },
        ]}
      />

      <PageHero
        variant="standard"
        eyebrow="Partner & Family"
        eyebrowSub="Child Visas · Subclass 102"
        title={<>Adoption Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 102 — Permanent residence for adopted children</em></>}
        deck="The subclass 102 Adoption visa grants permanent residence to a child adopted (or being adopted) by an Australian citizen, permanent resident, or eligible New Zealand citizen parent. Two pathways exist: intercountry adoptions arranged through a state/territory central authority, and expatriate adoptions by parents who have lived overseas for 12 or more months."
        shortAnswer={<>The <strong style={{ color: NAVY }}>subclass 102 Adoption visa</strong> is a <strong style={{ color: NAVY }}>permanent visa</strong> for children adopted outside Australia by an Australian citizen, PR, or eligible NZ citizen. The main pathways are <strong style={{ color: NAVY }}>intercountry adoption</strong> (arranged through an Australian state or territory central authority program, often under the Hague Convention) and <strong style={{ color: NAVY }}>expatriate/private adoption</strong> (where the parent has lived overseas for 12+ months and the adoption is valid under local law). This is a <strong style={{ color: NAVY }}>specialist area</strong> — state/territory adoption agencies, DFAT, and the Department of Home Affairs are all involved. Nanak Migration Group (MARN 2619467) can advise on the visa aspects of the process. No outcome guarantees.</>}
        maraBadge={true}
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Child Visa 101 (Offshore) →', page: 'child-visa-101' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <KeyFactsStrip facts={FACTS} accent={ACCENT} />

      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>

      {/* Sticky jump bar */}
      <div style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, background: GREY_BG, position: 'sticky', top: 64, zIndex: 20 }}>
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
          <SectionHeading kicker="What this visa is" title="The Adoption Visa — Subclass 102" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 20 }}>
            The subclass 102 Adoption visa is for children who have been adopted, or are in the process of being adopted, by an Australian parent living overseas or who recently returned to Australia. It is a permanent visa — once granted, the child becomes an Australian permanent resident.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            Adoption is a specialised area involving multiple government bodies across two countries. The state or territory central authority in Australia oversees intercountry adoption programs. The Department of Home Affairs assesses and decides the visa application. In some cases DFAT is also involved. Coordination between these bodies — and with the child's country of origin — is essential.
          </p>
          <Callout variant="warning" panel={true} title="Seek specialist legal and agency advice early">
            Adoption law varies significantly by country and by the type of adoption arrangement. The subclass 102 visa requirements depend on whether the adoption complies with Australian and international law. Do not proceed with an overseas adoption without understanding the Australian immigration and legal requirements — getting the adoption arrangements wrong can prevent the visa from being granted. This page provides general information only.
          </Callout>
        </div>
      </section>

      {/* ── Two pathways ─────────────────────────────────────────── */}
      <section id="pathways" style={{ background: GREY_BG, padding: '64px 32px 56px', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Which route applies to you?" title="Two Pathways to the Subclass 102 Visa" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              {
                label: 'Intercountry Adoption',
                sub: 'Via state/territory central authority program',
                border: ACCENT,
                points: [
                  'Adoption arranged through an Australian state or territory central authority',
                  'Covers Hague Convention adoptions and bilateral arrangement adoptions',
                  'Central authority issues compliance certificates and coordinates with the sending country',
                  'Parent does not need to have lived overseas — can be resident in Australia throughout',
                  'Parent must obtain approval to adopt through the central authority before the adoption proceeds',
                  'Most common pathway for Australia-based parents adopting from overseas',
                ],
              },
              {
                label: 'Expatriate / Private Adoption',
                sub: 'Parent has lived overseas 12+ months',
                border: '#d97706',
                points: [
                  'Adoption was arranged privately or under local law of the country where the parent lived',
                  'Parent must have resided outside Australia for at least 12 months before the adoption',
                  'Adoption must be legally valid in the country where it occurred',
                  'The adoption must be of a type that is recognised under Australian law',
                  'No central authority involvement — compliance rests on the legal validity of the overseas adoption',
                  'More complex visa assessment — evidence of residence and legal adoption must be thorough',
                ],
              },
            ].map(col => (
              <div key={col.label} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderTop: `4px solid ${col.border}`, borderRadius: '4px 4px 12px 12px', padding: 24 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{col.label}</div>
                <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 16, fontStyle: 'italic' }}>{col.sub}</div>
                {col.points.map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: col.border, flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.65 }}>{p}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Eligibility ──────────────────────────────────────────── */}
      <section id="eligibility" style={{ padding: '64px 32px 56px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Who can apply" title="Eligibility — Child and Sponsor" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
            <div style={{ background: GREY_BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Child eligibility</div>
              {[
                'Is the subject of an adoption, or proposed adoption, by the sponsoring parent',
                'The adoption is legally valid in the country where it was arranged',
                'Satisfies health requirements for the visa',
                'Satisfies character requirements (adapted appropriately for age)',
                'Has not been adopted in a way that contravenes Australian law or policy',
                'Is not already an Australian citizen or permanent resident',
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 6 }} />
                  <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{p}</span>
                </div>
              ))}
            </div>
            <div style={{ background: GREY_BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Sponsor eligibility</div>
              {[
                'Is an Australian citizen, Australian permanent resident, or eligible New Zealand citizen',
                'Is the adoptive parent (or proposed adoptive parent) of the child',
                'Satisfies character requirements',
                'Has obtained any required approval from the relevant state/territory central authority (intercountry pathway)',
                'Has resided outside Australia for 12+ months at the time of the adoption (expatriate pathway)',
                'Is not prohibited from sponsoring a child under Australian law',
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 6 }} />
                  <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Evidence required ────────────────────────────────────── */}
      <section id="evidence" style={{ background: GREY_BG, padding: '64px 32px 56px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What documents are needed" title="Evidence for the Subclass 102 Application" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { title: 'Adoption compliance documents', body: 'The primary document is the legal adoption order or equivalent from the country of origin. For Hague Convention adoptions, a Hague compliance certificate is required. For bilateral arrangement adoptions, the relevant compliance certificate from the central authority applies.' },
              { title: 'Sponsor identity documents', body: 'Passport, birth certificate, and proof of Australian citizenship or permanent residency of the sponsoring parent. Evidence of the relationship between the sponsor and the child.' },
              { title: 'Evidence of overseas residence (expatriate pathway)', body: "For the expatriate/private adoption pathway, evidence that the sponsor lived outside Australia for at least 12 months — employment records, lease agreements, utility bills, visa records from the relevant country." },
              { title: 'Child travel document', body: "The child's passport from their country of origin, or a certificate of identity issued by the Australian government if the child's country cannot issue a travel document." },
              { title: 'Health assessments', body: 'Health examinations conducted by an approved panel physician. Children are generally required to complete health assessments in the same way as other visa applicants, though some conditions may be waived or assessed differently for very young children.' },
              { title: 'Character documents', body: "Character requirements are adapted for the child's age. The sponsoring parent must also satisfy character requirements. Police clearances are required from countries where the parent has lived." },
            ].map(card => (
              <div key={card.title} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: '18px 22px' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: ACCENT, marginBottom: 8 }}>{card.title}</div>
                <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}><Callout variant="note" panel={true} title="Confirm current document requirements on the Department of Home Affairs website">
            Document requirements for adoption visas can be complex and may vary depending on the country of origin and the type of adoption. Always confirm current requirements on the Department of Home Affairs website before lodging.
          </Callout></div>
        </div>
      </section>

      {/* ── Application process ───────────────────────────────────── */}
      <section id="process" style={{ padding: '64px 32px 56px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Step by step" title="Adoption Visa Application Process" />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: '64px 32px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Adoption Visa Questions Answered" />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── Related ───────────────────────────────────────────────── */}
      <section id="related" style={{ background: GREY_BG, padding: '64px 32px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Explore further" title="Related Pages" accent={ACCENT} marginBottom={36} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Bringing an adopted child to Australia? Seek specialist advice."
        body="The subclass 102 involves coordination across multiple agencies in two countries. Nanak Migration Group (MARN 2619467) can advise on the visa aspects of the adoption process. No outcome can be guaranteed."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
