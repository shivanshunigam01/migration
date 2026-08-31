import React from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  KeyFactsStrip,
  SectionHeading,
  ComparisonTable,
  Callout,
  AnswerBox,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  ComplianceDisclaimer,
  OnThisPageNav,
} from '@/components/page'
import type {
  KeyFact,
  ComparisonColumn,
  ComparisonRow,
  FaqItem,
  RelatedPage,
  NavSection,
} from '@/components/page'
import { GOLD, NAVY , CAT_VISITOR } from '@/theme'
import Icon from '@/components/ui/Icon'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const STEEL = CAT_VISITOR
const GREEN   = '#f5a124'
const AMBER   = '#f5a124'
const ROSE    = '#e11d48'
const VIOLET  = '#4f46e5'
const BORDER  = '#e8edf6'
const GREY_BG = '#fafbfe'
const CURRENT_AS_AT = 'July 2026'

const TOC: NavSection[] = [
  { id: 'key-facts',   label: 'Key facts' },
  { id: 'types',       label: 'Types of bridging visa' },
  { id: 'effect',      label: 'When BVs come into effect' },
  { id: 'bvb',         label: 'Travelling on a BVB' },
  { id: 'work',        label: 'Work rights' },
  { id: 'bve',         label: 'Bridging Visa E' },
  { id: 'faq',         label: 'FAQ' },
  { id: 'related',     label: 'Related pages' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'shield',  value: 'Lawful status',        label: 'A bridging visa allows a person to remain in Australia lawfully while a matter is pending', note: 'A person without a substantive visa and without a bridging visa is an unlawful non-citizen — which has serious consequences. Do not allow a bridging visa to lapse.' },
  { icon: 'clock',   value: 'Not permanent',        label: 'A bridging visa is temporary — it does not confer permanent rights', note: 'Bridging visas generally cease when the substantive application is decided, or when the bridging visa conditions are breached.' },
  { icon: 'alert',   value: 'Conditions vary',      label: "Every bridging visa is different — conditions are set at the time of grant", note: "Work rights, travel rights, and reporting conditions all depend on the individual grant. Check your visa grant notice or the VEVO system for your specific conditions." },
  { icon: 'plane',   value: 'Departing may cancel', label: 'Leaving Australia on most bridging visas causes them to cease', note: 'Only a Bridging Visa B allows the holder to travel and return to Australia. Departing on a BVA generally causes it to cease, leaving the person without a visa.' },
  { icon: 'layers',  value: 'BVA is most common',   label: 'The Bridging Visa A is the most frequently held type', note: "Most applicants who hold a substantive visa and lodge a further visa application while in Australia will automatically receive a BVA when their substantive visa expires." },
]

/* ─── Comparison table ─── */
const BV_COLUMNS: ComparisonColumn[] = [
  { key: 'granted',  label: 'When generally granted',     highlight: true },
  { key: 'work',     label: 'Work rights' },
  { key: 'travel',   label: 'Travel rights' },
  { key: 'effect',   label: 'Comes into effect' },
]
const BV_ROWS: ComparisonRow[] = [
  {
    feature:  'Bridging Visa A (BVA)',
    granted:  'Automatically when a person holds a substantive visa and a further substantive visa application is pending',
    work:     'Generally mirrors the work rights of the most recently held substantive visa — unless specifically varied',
    travel:   'No travel rights. Departing Australia generally causes the BVA to cease.',
    effect:   'When the substantive visa ceases (expires or is cancelled)',
  },
  {
    feature:  'Bridging Visa B (BVB)',
    granted:  'Granted to a BVA holder who needs to travel outside Australia and return',
    work:     'Generally the same as the associated BVA work rights',
    travel:   'Yes — for the travel period specified in the grant. The holder must return before the BVB travel authorisation expires.',
    effect:   'Generally when the BVA ceases (on departure from Australia)',
  },
  {
    feature:  'Bridging Visa C (BVC)',
    granted:  'Where an application has been made in circumstances not giving rise to a BVA (e.g., invalid applications in some circumstances)',
    work:     'Generally no work rights — unless specifically granted',
    travel:   'No travel rights.',
    effect:   'When the previous visa ceases',
  },
  {
    feature:  'Bridging Visa D (BVD)',
    granted:  'Interim bridging visa — typically where no other bridging visa has yet been granted but the person needs lawful status while a BVA or BVE is being considered',
    work:     'Generally no work rights',
    travel:   'No travel rights.',
    effect:   'On grant — generally short-term',
  },
  {
    feature:  'Bridging Visa E (BVE)',
    granted:  'To an unlawful non-citizen, or to a person held in immigration detention, to allow them to remain lawfully while a matter is resolved',
    work:     'May be granted with permission to work in limited circumstances — not automatic',
    travel:   'No travel rights.',
    effect:   'On grant',
  },
]

/* ─── When BV comes into effect / ceases ─── */
const EFFECT_POINTS = [
  { icon: 'clock', color: STEEL, heading: 'A BVA does not start immediately on grant', body: "A Bridging Visa A is generally granted before it is needed — while the applicant still holds a valid substantive visa. The BVA only comes into effect when the substantive visa ceases (either by expiry, cancellation, or the grant of the pending application). A person who holds a valid substantive visa and a pending BVA holds both, but the BVA is dormant until the substantive visa ceases." },
  { icon: 'check', color: GREEN, heading: "Continuity of lawful status on the 'same day' rule", body: "If a further substantive visa application is lodged before the current substantive visa expires, a BVA is generally granted and the person's lawful status is continuous. The BVA activates the moment the substantive visa ceases, with no gap in lawful status. This is sometimes called the same-day or automatic bridging arrangement." },
  { icon: 'alert', color: AMBER, heading: 'When a bridging visa ceases', body: "A bridging visa generally ceases when: the pending application is decided (the BV is replaced by the new substantive visa, or ceases at refusal); the BV holder departs Australia on a BVA (most common); the BV conditions are breached; or the BV holder is granted another visa. Check the specific conditions in your visa grant notice." },
  { icon: 'alert', color: ROSE,  heading: 'Becoming unlawful', body: "A person who allows their bridging visa to cease without another visa in place becomes an unlawful non-citizen. Unlawful non-citizens are liable to detention and removal. If there is any risk that a bridging visa may lapse, seek advice from a registered migration agent immediately. A Bridging Visa E may be the only option for an unlawful non-citizen to regain lawful status." },
]

/* ─── BVB section ─── */
const BVB_POINTS = [
  { icon: 'plane', color: STEEL, heading: 'What a Bridging Visa B allows', body: "A Bridging Visa B (BVB) is specifically designed for BVA holders who need to travel outside Australia and return. It replaces the BVA for travel purposes and is granted for a specified travel period during which the holder must return to Australia. If the holder returns within the travel period, the BVB ceases and the BVA is reinstated." },
  { icon: 'alert', color: AMBER, heading: 'Apply for the BVB before you depart', body: "A BVB must be applied for before the BVA holder departs Australia. It cannot generally be applied for from overseas. Departing on a BVA without first obtaining a BVB causes the BVA to cease, leaving the person without a visa to return on." },
  { icon: 'alert', color: ROSE,  heading: 'Return before the BVB travel period expires', body: "The BVB specifies a travel period — a date by which the holder must return to Australia. Returning after the travel period expires means the person re-enters without a valid visa, which may create serious immigration problems. The travel period on a BVB is typically limited and may be shorter than the duration of the underlying pending application." },
  { icon: 'check', color: GREEN, heading: 'Check VEVO before departing', body: "Before any international travel, a person on a bridging visa should check their visa conditions and travel entitlements on the VEVO system (Visa Entitlement Verification Online). If there is any uncertainty about travel rights, seek advice from a registered migration agent before purchasing flights or departing." },
]

/* ─── Work rights section ─── */
const WORK_POINTS = [
  { icon: 'briefcase', color: STEEL, heading: 'Work rights generally mirror the last substantive visa', body: "The work rights on a Bridging Visa A are generally the same as those on the most recently held substantive visa. If the substantive visa allowed unlimited work rights, the BVA generally also allows unlimited work rights. If the substantive visa had no work rights (for example, a Visitor Visa 600), the BVA generally also has no work rights." },
  { icon: 'check', color: GREEN, heading: 'Work rights can sometimes be added', body: "A person whose BVA does not include work rights may be able to apply for work rights to be added to the BVA if they can demonstrate financial hardship or compelling need. The criteria for granting work permission are assessed by the Department of Home Affairs and are not automatically available. An application must be made." },
  { icon: 'alert', color: AMBER, heading: 'Check the visa grant notice — not just general guidance', body: "Bridging visa conditions — including work rights — are specified in the individual visa grant notice. General guidance about work rights should always be verified against your specific grant notice, which is the authoritative record of your conditions. The VEVO system can also be used to check current visa conditions." },
  { icon: 'alert', color: ROSE,  heading: 'Working without permission is a serious breach', body: "Working in Australia without work rights — whether on a bridging visa or any other visa — is a serious breach of visa conditions. It may result in visa cancellation, being barred from future applications, and other consequences. If you are unsure whether your bridging visa includes work rights, seek advice before commencing employment." },
]

/* ─── BVE section ─── */
const BVE_POINTS = [
  { icon: 'alert',  color: ROSE,  heading: 'A BVE is generally the only option for unlawful non-citizens', body: "A Bridging Visa E is typically granted to a person who is in Australia without any valid visa — an unlawful non-citizen. An unlawful non-citizen cannot apply for most other visa subclasses while in Australia (because of the Section 48 bar, which applies after a visa refusal or cancellation). The BVE provides temporary lawful status while a matter — such as an ART review application or a departure arrangement — is resolved." },
  { icon: 'clock',  color: AMBER, heading: 'Compliance and reporting conditions', body: "A Bridging Visa E often comes with strict compliance conditions — including regular reporting to the Department of Home Affairs, restrictions on employment, and restrictions on travel within Australia. Breaching a BVE condition may result in the BVE being cancelled and the person again becoming an unlawful non-citizen. Conditions must be carefully observed." },
  { icon: 'shield', color: STEEL, heading: 'The BVE does not resolve the underlying issue', body: "A BVE provides lawful status — it does not resolve the underlying visa issue. The person still needs to either depart Australia voluntarily, lodge a valid visa application (if one is available to them), or pursue other avenues (such as an ART review or ministerial intervention). Seek advice from a registered migration agent about which options remain available." },
  { icon: 'check',  color: GREEN, heading: 'Voluntary departure may be preferable to waiting', body: "In some circumstances, voluntarily departing Australia on a BVE — rather than waiting indefinitely — may preserve more options for future applications than remaining in Australia without a clear pathway. A registered migration agent can advise on the options and implications for future visa applications before a decision to depart is made." },
]

const FAQ: FaqItem[] = [
  {
    question: "Do I automatically get a bridging visa when I lodge a new visa application?",
    answer: "Generally, yes — if you hold a substantive visa when you lodge a further substantive visa application in Australia, a Bridging Visa A is generally granted automatically. The BVA keeps you lawful when your current visa expires while the new application is pending. However, the BVA does not activate until your current substantive visa ceases. There are some exceptions — for example, if the application is invalid or if you are not entitled to a BVA due to earlier refusals — so it is important to confirm your visa status after lodging.",
  },
  {
    question: "I am on a Bridging Visa A. Can I travel overseas?",
    answer: "Generally, no. A Bridging Visa A does not carry travel rights. If you depart Australia on a BVA, the BVA generally ceases, and you will not have a visa to return to Australia on. If you need to travel overseas, you should apply for a Bridging Visa B before departing. A BVB must be applied for while you are still in Australia. If you have already departed and your BVA has ceased, you may need to apply for a new visa from offshore — seek advice from a registered migration agent urgently.",
  },
  {
    question: "What are the work rights on my bridging visa?",
    answer: "Work rights on a bridging visa depend on the specific conditions in your visa grant notice. A BVA generally mirrors the work rights of the most recently held substantive visa. Check your visa grant notice or the VEVO system (Visa Entitlement Verification Online) for your specific conditions. If your BVA does not include work rights and you need to work, you may be able to apply for work rights to be added — but this is not automatic and requires an application to the Department of Home Affairs.",
  },
  {
    question: "My partner visa application was refused. What happens to my bridging visa?",
    answer: "If a visa application is refused and the applicant holds a Bridging Visa A, the BVA generally ceases 35 days after the refusal decision (or 28 days for some decisions) if no review is lodged, or continues while a review application to the Administrative Review Tribunal (ART) is pending. Lodging a review application in time is critical to maintaining lawful status. If you have received a refusal, seek advice from a registered migration agent urgently — time limits for review applications are strict.",
  },
  {
    question: "What is the Section 48 bar and how does it relate to bridging visas?",
    answer: "Section 48 of the Migration Act 1958 prevents a person who has had a visa refused or cancelled while in Australia from applying for most other substantive visa subclasses while they remain in Australia. A person subject to the s48 bar may still hold a bridging visa to remain lawfully, but their options for applying for a new visa in Australia are severely limited. The bar does not apply to all visa subclasses (some partner visas and humanitarian visas are exempt). A registered migration agent can advise on which visa options, if any, remain available to a person subject to the s48 bar.",
  },
  {
    question: "I overstayed my visa. What should I do?",
    answer: "If you are currently in Australia without a valid visa, you are an unlawful non-citizen. You should seek advice from a registered migration agent as soon as possible. Depending on your circumstances, a Bridging Visa E may be available to restore lawful status while options are explored. Options generally include voluntary departure, applying for a BVE, pursuing a review of an earlier decision (if one is available), or applying for a visa that is not subject to the Section 48 bar. The longer a person remains unlawful, the more limited their options generally become.",
  },
  {
    question: "How do I check what visa and conditions I currently hold?",
    answer: "The VEVO system (Visa Entitlement Verification Online) on the Department of Home Affairs website allows visa holders — and authorised third parties, such as employers — to check the current visa held, its conditions, and its expiry date. VEVO is the authoritative system for checking current visa status. Your visa grant notice is also a key document — keep a copy for your records.",
  },
  {
    question: "Can my employer check whether I am allowed to work?",
    answer: "Yes. Employers can use the VEVO system to verify a worker's right to work in Australia. Employers who employ a person without work rights may face civil penalties under the Migration Act. As a visa holder, you should proactively check your own work rights through VEVO and share your work entitlements with your employer if requested.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Visa Refusal & Review Hub',     desc: 'What to do when a visa is refused — and what a bridging visa means for your options.', icon: 'scale',  page: 'visa-refusal-review' },
  { title: 'ART Review',                    desc: "Apply to the Administrative Review Tribunal — lodging in time preserves your bridging visa.", icon: 'scale',  page: 'art-review' },
  { title: 'Partner Visa Onshore (820/801)', desc: 'Partner visa applicants in Australia generally hold a BVA while the application is pending.', icon: 'home',  page: 'partner-visa-820-801' },
  { title: 'Student Visa (500)',             desc: 'Student visa applicants who extend their studies may hold a BVA between visas.',               icon: 'graduationcap', page: 'student-visa-500' },
]

export default function BridgingVisasPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => {
    document.title = PAGE_META['bridging-visas'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Bridging Visas Explained', url: 'https://www.nanakmigration.com.au/bridging-visas' },
        ]}
        faqs={FAQ}
        service={{ name: 'Bridging Visas Explained', description: PAGE_META['bridging-visas'].metaDescription, url: 'https://www.nanakmigration.com.au/bridging-visas' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Visitor & Other', page: 'home' },
        { label: 'Bridging Visas Explained' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Status & Residency · Bridging Visas"
        title={<>Bridging Visas<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Explained</em></>}
        deck="What bridging visas are, when they are generally granted, what each type allows — and what you need to know to maintain your lawful status in Australia while a visa matter is pending."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Get bridging visa advice', page: 'home' }}
        accent={STEEL}
        navigate={navigate}
        footnote="General information only. Bridging visa conditions are set individually at grant — your visa grant notice prevails. Obtain advice from MARN 2619467."
      />
      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            A Bridging Visa allows you to remain lawfully in Australia after your substantive visa expires while a new visa application is being processed, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. There are several bridging visa types — Bridging Visa A (BVA), B (BVB) and E (BVE) are the most common — each with different work rights, travel conditions and duration. Your bridging visa generally comes into effect automatically when your substantive visa ceases, provided a valid application is on hand.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>


      <div className="page-with-sidebar" style={{ maxWidth: 1260, margin: '0 auto', padding: '48px 32px 0', display: 'flex', gap: 48 }}>
        <OnThisPageNav sections={TOC} accent={STEEL} />
        <div style={{ flex: 1 }} />
      </div>

      <div id="key-facts">
        <KeyFactsStrip facts={KEY_FACTS} accent={STEEL} />
      </div>

      {/* Types table */}
      <section id="types" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading
            kicker="BVA to BVE"
            title="Types of Bridging Visa"
            intro="Australia has five types of bridging visa — BVA through BVE — each applying in different circumstances. The table below is a general guide. Conditions on any individual bridging visa are specified in the grant notice."
            accent={STEEL}
          />
          <ComparisonTable
            columns={BV_COLUMNS}
            rows={BV_ROWS}
            accent={STEEL}
            caption="General guide only. Individual conditions vary — always check the visa grant notice and the VEVO system for the specific conditions that apply to your bridging visa."
          />
          <div style={{ marginTop: 24 }}>
            <Callout variant="note">
              <strong>Your visa grant notice prevails.</strong> Bridging visa conditions — including work rights, travel rights, reporting requirements, and the duration of the visa — are specified in the individual visa grant notice issued by the Department of Home Affairs. The general descriptions above may not reflect the conditions of your specific bridging visa. Always check your grant notice or verify your conditions on the VEVO system before making decisions about work or travel.
            </Callout>
          </div>
        </div>
      </section>

      {/* When BV comes into effect */}
      <section id="effect" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Timing"
            title="When a Bridging Visa Comes Into Effect — and When It Ceases"
            intro="Understanding the timing of bridging visa activation and cessation is critical to maintaining lawful status in Australia."
            accent={STEEL}
          />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {EFFECT_POINTS.map(p => (
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

      {/* BVB section */}
      <section id="bvb" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Travelling Overseas"
            title="Applying for a Bridging Visa B to Travel"
            intro="If you hold a BVA and need to leave Australia temporarily, a Bridging Visa B must be applied for before you depart. Do not depart on a BVA."
            accent={STEEL}
          />
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {BVB_POINTS.map(p => (
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

      {/* Work rights */}
      <section id="work" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Employment"
            title="Work Rights on a Bridging Visa"
            intro="Whether you can work in Australia on a bridging visa depends on the specific conditions granted — not on the type of bridging visa alone."
            accent={STEEL}
          />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {WORK_POINTS.map(p => (
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

      {/* BVE section */}
      <section id="bve" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Unlawful Status"
            title="Bridging Visa E and Unlawful Status"
            intro="The Bridging Visa E is generally available to people who are in Australia unlawfully. Understanding this pathway — and its limitations — is important for people in this situation."
            accent={STEEL}
          />
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {BVE_POINTS.map(p => (
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

      {/* FAQ */}
      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={STEEL} />
          <FaqAccordion items={FAQ} accent={STEEL} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={STEEL} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={2} />
        </div>
      </section>

      <CtaBand
        title={<>Get expert advice on your<br /><em style={{ fontStyle: 'italic', color: GOLD }}>bridging visa situation</em></>}
        body="Navpreet Aulakh (MARN 2619467) can advise on your current bridging visa conditions, whether a Bridging Visa B is available for travel, how to apply for work rights, and what your options are if your substantive visa application is refused."
        primaryCta={{ label: 'Book a bridging visa consultation', page: 'home' }}
        secondaryCta={{ label: 'View visa refusal options →', page: 'visa-refusal-review' }}
        accent={STEEL}
        footnote="MARA-registered · MARN 2619467 · General information only"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT}
        pageNote="Bridging visa types, conditions, and eligibility are set by the Migration Act 1958 and Migration Regulations 1994, which are subject to change. Conditions on any individual bridging visa are specified in the visa grant notice — this page provides general guidance only. Obtain advice from a registered migration agent for your specific circumstances." />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
