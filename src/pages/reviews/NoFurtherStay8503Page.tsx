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
  { id: 'overview', label: 'What it means' },
  { id: 'which-visas', label: 'Which visas' },
  { id: 'check-vevo', label: 'Check on VEVO' },
  { id: 'waiver', label: 'Waiver process' },
  { id: 'exceptions', label: 'Exceptions' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'shield',
    value: 'Condition 8503',
    label: 'No Further Stay — cannot apply for most visas onshore',
    note: 'A visa holder subject to Condition 8503 cannot make a further visa application while in Australia. The condition is imposed at the time the visa is granted.',
  },
  {
    icon: 'alert',
    value: '8534 / 8535',
    label: 'Related no-further-stay conditions',
    note: 'Condition 8534 restricts onshore applications to a limited set of visa classes. Condition 8535 prevents work and study. Check VEVO for the exact conditions on your visa.',
  },
  {
    icon: 'scale',
    value: 'Waiver available',
    label: 'Compelling and compassionate circumstances — high threshold',
    note: 'A waiver of Condition 8503 can be requested. The test requires circumstances that are compelling and compassionate, that arose after grant, and that the person could not have foreseen. Waiver is not routinely granted.',
  },
  {
    icon: 'shield',
    value: 'Protection exempt',
    label: 'A protection visa application is not prevented by 8503',
    note: 'If you engage Australia\'s protection obligations (refugee or complementary protection), you may apply for a protection visa even if your current visa carries Condition 8503.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'How do I know if my visa has Condition 8503?',
    answer: "Check your visa conditions on the Visa Entitlement Verification Online (VEVO) system at immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/check-conditions-online. VEVO shows your visa class, the conditions imposed on your grant, and when your visa expires. You can also ask your employer or an educational institution to check VEVO on your behalf using their VEVO access. Condition 8503 will appear as a listed condition on your visa grant. If your visa is a grant letter (for older grants), the conditions are listed in the letter itself.",
  },
  {
    question: 'Can I apply for a partner visa if my current visa has Condition 8503?',
    answer: 'Not directly — Condition 8503 prevents you from applying for most visas (including a partner visa) while you are in Australia. You would need to either: (1) apply for a waiver of Condition 8503 before lodging the partner visa application; or (2) depart Australia and apply for the partner visa offshore (subclass 309/100). The waiver process requires demonstrating compelling and compassionate circumstances that arose after the visa was granted and that you could not have foreseen when you applied for your current visa. The waiver is not routinely granted — it is for genuinely unforeseen and serious circumstances, not for a change in relationship status that was foreseeable at the time of the original visa application.',
  },
  {
    question: 'What counts as compelling and compassionate circumstances for a Condition 8503 waiver?',
    answer: "The test for a Condition 8503 waiver has two elements: (1) the circumstances must be compelling and compassionate; and (2) the circumstances must have arisen after the visa was granted (or after the original visa application was made) and must not have been foreseeable at the time of the original application. Examples that have been accepted in waiver requests include: a serious medical condition that developed after arrival and that makes travel dangerous or impossible; the death or serious illness of a close family member in Australia creating a genuine care need; border closures or travel disruptions that were genuinely unexpected and beyond the applicant's control; and the development of a relationship and Australian family in circumstances that were not foreseeable when the visitor visa was applied for. A relationship that existed before the visitor visa was applied for is more difficult to argue as unforeseeable.",
  },
  {
    question: 'If my Condition 8503 waiver is refused, what can I do?',
    answer: "A refusal of a Condition 8503 waiver request is not generally directly reviewable at the Administrative Review Tribunal (ART) as a standalone decision. However, if your substantive visa application (lodged after an unsuccessful waiver) is refused, the refusal of the visa may be reviewable at the ART. Additionally, if the Department refuses your visa application on the basis that Condition 8503 applies and no waiver was granted, and you believe the waiver decision was affected by a legal error, you may be able to seek judicial review. The practical options after a refusal are to depart Australia and apply for a new visa offshore, or to seek advice on any grounds for further challenge. No outcome can be guaranteed.",
  },
  {
    question: 'Does Condition 8503 prevent me from applying for a protection visa?',
    answer: 'No. The protection visa (subclass 866) is specifically exempt from Condition 8503. If you are in Australia and you engage Australia\'s protection obligations — as a refugee or under complementary protection — you may apply for the protection visa even if your current visa carries Condition 8503. You should seek professional advice before lodging a protection visa application, as the claims you make at that stage are critically important and the application is assessed rigorously on its individual merits. No agent can guarantee a protection outcome.',
  },
  {
    question: 'I was unaware my visa had Condition 8503 when I applied for another visa. What happens?',
    answer: "If you lodged a visa application in Australia without realising your current visa had Condition 8503, the application is likely to be refused on the basis that the condition prevents the application from being made. Ignorance of a visa condition is not itself a waiver ground. The Department will normally send a letter advising of the Condition 8503 issue before refusing, giving you an opportunity to either withdraw the application or make a waiver request. If you are in this situation, seek advice promptly — do not ignore the Department's correspondence.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Visitor Visa (600)', desc: 'The subclass 600 often carries Condition 8503 — streams, charges and refusal avoidance.', icon: 'plane', page: 'visitor-visa-600', color: ACCENT },
  { title: 'Section 48 Bar', desc: 'Another onshore restriction — how section 48 interacts with condition 8503 situations.', icon: 'shield', page: 'section-48-bar', color: ACCENT },
  { title: 'Bridging Visas', desc: 'Remaining lawfully in Australia while a visa application or review is pending.', icon: 'link', page: 'bridging-visas', color: ACCENT },
  { title: 'ART Review', desc: 'Merits review of a visa refusal — keeping your options open onshore.', icon: 'scale', page: 'art-review', color: ACCENT },
]

export default function NoFurtherStay8503Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['no-further-stay-8503'].title }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Reviews & Complex', url: 'https://www.nanakmigration.com.au/visa-refusal-review' },
          { name: 'Condition 8503 — No Further Stay', url: 'https://www.nanakmigration.com.au/no-further-stay-8503' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{ name: 'Condition 8503 No Further Stay Advice', description: PAGE_META['no-further-stay-8503'].metaDescription, url: 'https://www.nanakmigration.com.au/no-further-stay-8503' }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Reviews & Complex', page: 'visa-refusal-review' },
          { label: 'Condition 8503 — No Further Stay' },
        ]}
      />

      <PageHero
        variant="standard"
        eyebrow="Reviews & Complex"
        eyebrowSub="Guides & Rules · Condition 8503"
        title={<>Condition 8503<br /><em style={{ fontStyle: 'italic', color: GOLD }}>No Further Stay — What It Means and What to Do</em></>}
        deck="Condition 8503 is imposed on many visitor visas and prevents the holder from applying for any other visa while in Australia. Understanding when a waiver is possible, what evidence is required, and what exceptions exist is essential before your situation becomes critical."
        shortAnswer={<>Condition 8503 — <strong style={{ color: NAVY }}>No Further Stay</strong> — prevents a visa holder from applying for most other visas while in Australia. It is commonly imposed on <strong style={{ color: NAVY }}>subclass 600 tourist stream</strong> and sponsored family stream grants, as well as some other temporary visa grants. The condition can be checked on <strong style={{ color: NAVY }}>VEVO</strong>. A waiver is available in genuinely compelling and compassionate circumstances — but only where those circumstances arose <strong style={{ color: NAVY }}>after the visa was granted</strong> and could not reasonably have been foreseen. One important exception: <strong style={{ color: NAVY }}>a protection visa (866) application is not prevented by Condition 8503</strong>. Related conditions <strong style={{ color: NAVY }}>8534 and 8535</strong> impose different restrictions — check VEVO for the exact conditions on your grant. Nanak Migration Group (MARN 2619467) can advise on waiver prospects for your specific circumstances.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Section 48 Bar guide →', page: 'section-48-bar' }}
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

      {/* ── What it means ────────────────────────────────────────── */}
      <section id="overview" style={{ padding: '64px 32px 48px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="The condition explained" title="What Condition 8503 Means" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 20 }}>
            Condition 8503 is a visa condition that, when imposed on a grant, prevents the visa holder from making any application for a further visa while they are in Australia — with a small number of specific exceptions. The condition is imposed at the time the visa is granted and is noted in the visa grant itself.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 20 }}>
            The condition is commonly referred to as "No Further Stay" because its practical effect is that the holder must depart Australia when their visa expires — they cannot simply apply for a new visa from inside Australia to extend their stay. If a holder with Condition 8503 attempts to apply for another visa onshore, the application will not be accepted unless either the condition is waived or the application falls within one of the exempt categories.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            Related conditions include <strong>Condition 8534</strong>, which restricts onshore applications to a defined set of visa classes, and <strong>Condition 8535</strong>, which prevents work and study. The precise conditions imposed on a grant should always be checked on VEVO.
          </p>
          <Callout variant="warning" panel={true} title="Do not assume your visa does or does not have Condition 8503">
            Condition 8503 is not imposed on every visitor visa — and some visitors assume they do not have it when they do. The only way to confirm is to check VEVO or your original visa grant letter. Attempting to apply for another visa without checking may result in the application being rejected and associated fees not refunded.
          </Callout>
        </div>
      </section>

      {/* ── Which visas carry it ──────────────────────────────────── */}
      <section id="which-visas" style={{ background: '#f8fafd', padding: '64px 32px 56px', borderTop: '1px solid #e8edf5', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common visa types" title="Which Visa Grants Commonly Carry Condition 8503" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            Condition 8503 is not automatically imposed on all temporary visas — it is a discretionary imposition by the Department at the time of grant. However, it is routinely applied to certain visa streams. The following are the most commonly affected grants:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {[
              {
                visa: 'Visitor Visa (600) — Tourist Stream',
                detail: 'Condition 8503 is very commonly imposed on offshore tourist stream grants. Not all tourist stream grants carry it — the Department has discretion — but it should be assumed unless VEVO shows otherwise.',
              },
              {
                visa: 'Visitor Visa (600) — Sponsored Family Stream',
                detail: 'Sponsored family stream grants often carry Condition 8503. The condition serves as a control on family visit visa use as a pathway to extended residence.',
              },
              {
                visa: 'Visitor Visa (600) — Business Visitor Stream',
                detail: 'Business visitor grants sometimes carry Condition 8503. Check VEVO on your specific grant.',
              },
              {
                visa: 'Training Visa (407) and Temporary Activity (408)',
                detail: 'Some grants under these classes carry Condition 8503. Check the specific grant.',
              },
              {
                visa: 'Electronic Travel Authority (601) and eVisitor (651)',
                detail: 'Condition 8503 is not standard on ETA and eVisitor grants — but some holders may have 8534 or other conditions. Check VEVO.',
              },
              {
                visa: 'Bridging Visa A (BVA)',
                detail: 'Condition 8503 does not typically apply to bridging visas — bridging visas are themselves the mechanism for remaining onshore while an application is processed. However, some bridging visa conditions may limit what further applications can be made.',
              },
            ].map(item => (
              <div key={item.visa} style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{item.visa}</div>
                <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65, margin: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Check on VEVO ────────────────────────────────────────── */}
      <section id="check-vevo" style={{ padding: '64px 32px 56px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Verifying your conditions" title="How to Check Your Visa Conditions on VEVO" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            VEVO (Visa Entitlement Verification Online) is the Department of Home Affairs system that shows visa grant details, including conditions, expiry dates, and work entitlements. Checking VEVO before making any onshore visa application is essential.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 0 }}>
            {[
              { num: '01', title: 'Go to VEVO', body: "Navigate to the VEVO self-check at immi.homeaffairs.gov.au. You can also access VEVO through myGov if your identity is linked. Employers, education providers, and migration agents can check VEVO on your behalf using their VEVO access with your consent." },
              { num: '02', title: 'Enter your details', body: "You will need your passport details (passport number, country, date of birth) and your visa grant number (shown on your grant notification or in ImmiAccount). If you no longer have your grant number, you may be able to retrieve it through ImmiAccount." },
              { num: '03', title: 'Review the conditions list', body: "VEVO will display your current visa, its expiry date, and the conditions imposed on the grant. Condition 8503 will be listed explicitly if it applies. Note all conditions — not just 8503. If you have Condition 8534, the restrictions are different from 8503 and should be understood separately." },
              { num: '04', title: 'Seek advice if conditions are unclear', body: "If you are uncertain what your conditions mean for your situation — for example, whether a planned visa application would be affected — seek advice from a registered migration agent before lodging. Lodging an application that cannot proceed due to a condition wastes application charges and time." },
            ].map(step => (
              <div key={step.num} style={{ borderLeft: `4px solid ${ACCENT}`, background: '#f8fafd', padding: '20px 24px', marginBottom: 12, borderRadius: '0 12px 12px 0' }}>
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

      {/* ── Waiver process ───────────────────────────────────────── */}
      <section id="waiver" style={{ background: '#f8fafd', padding: '64px 32px 56px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Requesting removal of the condition" title="The Condition 8503 Waiver Process" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The Department has a discretion to waive Condition 8503 if it is satisfied that compelling and compassionate circumstances apply. The waiver is not a right — it is a genuine discretion that the Department exercises on the merits of each case.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 14 }}>The two-part test</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
                {[
                  { label: 'Part 1', text: 'The circumstances must be compelling and compassionate — they must be serious and specific to the person\'s situation, not merely inconvenient or unfortunate in a general sense.' },
                  { label: 'Part 2', text: 'The circumstances must have arisen after the visa was granted (or after the original application was made) and must not have been reasonably foreseeable at that time. A relationship that pre-dated the visitor visa application is generally not accepted as unforeseeable.' },
                ].map(item => (
                  <div key={item.label} style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 14 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: '0.06em', marginBottom: 4 }}>{item.label}</div>
                    <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.65, margin: 0 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 14 }}>Evidence in a strong waiver request</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Medical documentation of a serious condition that developed after arrival — specialist letters, hospital records',
                  'Evidence that travel is medically contraindicated or dangerous — treating practitioner\'s statement',
                  'Death certificate or serious illness documentation for a close family member in Australia',
                  'Evidence of border closures or extraordinary travel disruptions at the relevant time',
                  'A statutory declaration from the applicant setting out the timeline of events and the circumstances',
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Callout variant="warning" panel={true} title="Waiver is not routinely granted — the threshold is genuinely high">
            The convenience of not having to leave Australia is not a compelling and compassionate circumstance. A change in relationship status that was foreseeable when the original visa was applied for is generally not accepted. Waiver requests that succeed are typically supported by specific, documented evidence of serious circumstances — not general submissions about hardship. Nanak Migration Group (MARN 2619467) can advise on whether your circumstances meet the threshold before you invest in a waiver request. No outcome can be guaranteed.
          </Callout>
        </div>
      </section>

      {/* ── Exceptions ───────────────────────────────────────────── */}
      <section id="exceptions" style={{ padding: '64px 32px 56px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What 8503 does not prevent" title="Exceptions to Condition 8503" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            Condition 8503 prevents most onshore visa applications — but not all. The following are key exceptions:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {[
              {
                title: 'Protection Visa (Subclass 866)',
                body: 'A protection visa application onshore is not prevented by Condition 8503. If you have a genuine claim to Australia\'s protection obligations as a refugee or under complementary protection, you may apply for the protection visa despite the condition. The protection visa application is assessed rigorously on its individual merits — seek advice before lodging. No outcome can be guaranteed.',
              },
              {
                title: 'Bridging Visas',
                body: 'You can apply for certain bridging visas even if Condition 8503 applies — for example, to bridge the gap while a legitimate waiver request or substantive application is under consideration. The specific bridging visa type and whether it can be applied for depends on your circumstances.',
              },
              {
                title: 'Partner Visa (with a successful waiver)',
                body: 'If your waiver request for Condition 8503 is granted, you may then apply for the partner visa or another substantive visa onshore. The waiver does not grant any visa — it removes the barrier to applying.',
              },
              {
                title: 'Leaving Australia and applying offshore',
                body: 'Condition 8503 only prevents onshore applications. If you depart Australia, you are free to apply for any visa you are eligible for from offshore. However, departure should be considered carefully — if your bridging visa does not include travel rights, departing may affect your bridging visa status.',
              },
            ].map(item => (
              <div key={item.title} style={{ background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 12, padding: 22 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{item.title}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: '64px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Condition 8503 Questions Answered" />
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
        title="Condition 8503 on your visa? Get advice before it becomes a crisis."
        body="Nanak Migration Group (MARN 2619467) can assess your VEVO conditions and advise on waiver prospects or departure planning. Acting early preserves more options."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
