import React from 'react'
import { GOLD, NAVY, CAT_VISITOR } from '@/theme'
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

const ACCENT = CAT_VISITOR
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'rights', label: 'Rights and entitlements' },
  { id: 'protected', label: 'Protected vs non-protected' },
  { id: 'citizenship', label: 'Citizenship pathway' },
  { id: 'family', label: 'Family members' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'plane',
    value: 'Automatic',
    label: 'Granted automatically on arrival with a New Zealand passport',
    note: "New Zealand citizens do not need to apply for the subclass 444 — it is granted automatically at the border on arrival in Australia with a valid NZ passport. There is no application fee and no application form.",
  },
  {
    icon: 'shield',
    value: 'Full rights',
    label: 'Full work and study rights while in Australia',
    note: 'Holders of the subclass 444 can work for any employer without restriction and study at any level. These rights are among the most extensive of any temporary visa in Australia.',
  },
  {
    icon: 'calendar',
    value: 'Indefinite',
    label: 'No fixed expiry — continues while the holder is in Australia',
    note: 'The subclass 444 is re-granted on each arrival in Australia. It is not a permanent visa and ends each time the holder departs Australia. On return, it is re-granted automatically.',
  },
  {
    icon: 'arrowright',
    value: 'Citizenship',
    label: 'Direct citizenship pathway available since 1 July 2023',
    note: 'Most NZ citizens who have been usually resident in Australia can now apply for Australian citizenship directly, without first becoming a permanent resident. Confirm current eligibility and residence requirements on the Department of Home Affairs website.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: "Does the subclass 444 ever expire?",
    answer: "The subclass 444 Special Category visa is technically a temporary visa that is re-granted on each arrival in Australia. It does not have a fixed expiry date while the holder remains in Australia continuously. However, it ends when the holder departs Australia and is re-granted on the next return. There is no annual renewal required. The holder must be a New Zealand citizen and must enter with a valid New Zealand passport each time. If the NZ citizen's passport expires, they should renew it before travelling.",
  },
  {
    question: "What can a subclass 444 holder access in Australia?",
    answer: "Subclass 444 holders have full work rights (any employer, any occupation), full study rights, and access to Medicare. However, access to Centrelink and other social security payments is limited — non-protected SCV holders can access some payments but face waiting periods for others, and some payments are not available at all. Protected SCV holders (those who were in Australia on 26 February 2001) generally have broader access. Confirm current social security entitlements on the Services Australia website.",
  },
  {
    question: "What is the difference between protected and non-protected SCV holders?",
    answer: "A 'protected' Special Category visa holder is a New Zealand citizen who was in Australia as a holder of a Special Category visa on 26 February 2001, or was outside Australia on that date having held a SCV at some point before that date and returned to Australia after. Protected SCV holders have broader access to social security and welfare payments — broadly equivalent to permanent residents. Non-protected SCV holders have more limited access. Most NZ citizens who arrived in Australia after 2001 are non-protected SCV holders. The distinction affects welfare access but not work rights or Medicare.",
  },
  {
    question: "Can New Zealand citizens now get Australian citizenship directly?",
    answer: "Yes. Since 1 July 2023, most New Zealand citizens who have been usually resident in Australia as Special Category visa holders can apply for Australian citizenship directly, without first needing to become a permanent resident. The general requirement is 4 years of lawful residence in Australia, including the 12 months immediately before applying. Other standard citizenship criteria (good character, basic English, citizenship test) also apply. This is a significant change from the previous requirement, which was that NZ citizens had to obtain permanent residence before becoming eligible for citizenship. Confirm current eligibility requirements on the Department of Home Affairs website — the settings may have changed since the original announcement.",
  },
  {
    question: "What visa do the family members of a New Zealand citizen need?",
    answer: "New Zealand citizens themselves are granted the subclass 444 automatically on arrival. Family members who are NOT New Zealand citizens need a separate visa. The most common option is the subclass 461 New Zealand Citizen Family Relationship visa — a 5-year temporary visa with full work and study rights, renewable onshore. If the NZ citizen has since become an Australian citizen or permanent resident, family members may be able to apply for a partner visa (820/801 or 309/100) or another appropriate family visa instead.",
  },
  {
    question: "What happens to the subclass 444 if the NZ citizen remains outside Australia for an extended period?",
    answer: "The subclass 444 applies while the NZ citizen is in Australia. Each departure ends the current 444, and a new 444 is re-granted on return. There is no consequence from spending extended periods outside Australia, provided the NZ citizen continues to hold a valid New Zealand passport and meets the entry requirements on return. However, extended absence from Australia may affect residence calculations for citizenship eligibility — if citizenship is a goal, confirm how periods of absence are treated on the Department of Home Affairs website.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'NZ Family Relationship (461)',
    desc: '5-year temporary visa for non-NZ family members of a NZ citizen on a 444 visa in Australia.',
    icon: 'home',
    page: 'nz-family-relationship-461',
    color: ACCENT,
  },
  {
    title: 'Partner Visa Onshore (820/801)',
    desc: 'Once an NZ citizen becomes Australian, their partner can apply for this permanent pathway.',
    icon: 'heart',
    page: 'partner-visa-820-801',
    color: ACCENT,
  },
  {
    title: 'Australian Citizenship',
    desc: "Requirements and steps to become an Australian citizen — including the pathway now available to NZ citizens.",
    icon: 'flag',
    page: 'australian-citizenship',
    color: ACCENT,
  },
  {
    title: 'Visitor & Other Visas',
    desc: 'Overview of visitor visas, bridging visas, and other temporary status options in Australia.',
    icon: 'plane',
    page: 'visitor-hub',
    color: ACCENT,
  },
]

export default function SpecialCategory444Page({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Visitor & Other', url: 'https://www.nanakmigration.com.au/visitor-hub' },
          { name: 'Special Category Visa (444)', url: 'https://www.nanakmigration.com.au/special-category-444' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Special Category Visa Subclass 444 for New Zealand Citizens',
          description: PAGE_META['special-category-444'].metaDescription,
          url: 'https://www.nanakmigration.com.au/special-category-444',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Visitor & Other', page: 'visitor-hub' },
          { label: 'Special Category Visa (444)' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Visitor & Other Visas"
        eyebrowSub="Subclass 444"
        title={<>Special Category Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 444 — New Zealand Citizens</em></>}
        deck="The subclass 444 is granted automatically to New Zealand citizens on arrival in Australia. It allows indefinite stay with full work and study rights while the holder remains in Australia — and since July 2023, most NZ citizens can apply for Australian citizenship directly."
        shortAnswer={<>The subclass 444 Special Category visa is granted <strong style={{ color: NAVY }}>automatically</strong> to New Zealand citizens on arrival in Australia with a valid NZ passport — there is no application process. It provides <strong style={{ color: NAVY }}>full work and study rights</strong> and access to Medicare. The visa is temporary — it ends on departure and is re-granted on each return. <strong style={{ color: NAVY }}>Since 1 July 2023</strong>, most NZ citizens who have been usually resident in Australia for 4 years can apply for Australian citizenship directly. Family members who are not NZ citizens need a separate visa — typically the <strong style={{ color: NAVY }}>subclass 461</strong>. Nanak Migration Group (MARN 2619467) can assist NZ citizens and their families plan for permanent residence or citizenship. Confirm all current details on the Department of Home Affairs website.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← Visitor & Other', page: 'visitor-hub' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <ReviewedBy />
        </div>
      </section>

      {/* Sticky jump bar */}
      <div style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
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

      <KeyFactsStrip facts={FACTS} accent={ACCENT} />

      {/* ── OVERVIEW ───────────────────────────────────────────── */}
      <section id="overview" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="How it works" title="How the Subclass 444 Works" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 24 }}>
            Under the Trans-Tasman Travel Arrangement between Australia and New Zealand, New Zealand citizens can travel to Australia freely and are granted the Special Category visa (subclass 444) on arrival. The visa is granted automatically at the border — there is no application form, no application charge, and no processing wait.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The 444 is a temporary visa despite allowing indefinite stay. Each time an NZ citizen departs Australia, the current 444 ends. On return, a new 444 is granted automatically. The visa is not permanent residence — but it provides most of the practical benefits of permanent residence while the holder is in Australia.
          </p>

          <div style={{ background: `${ACCENT}08`, border: `1px solid ${ACCENT}25`, borderRadius: 14, padding: 28, marginBottom: 32 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: ACCENT, marginBottom: 12 }}>Key distinction</div>
            <p style={{ fontSize: 15, color: NAVY, lineHeight: 1.75, margin: 0, fontWeight: 600 }}>
              The subclass 444 is not permanent residence. It does not expire like a typical temporary visa, but it is technically temporary — and it does not in itself lead to permanent residence. For permanent residence, NZ citizens need to either apply for a permanent visa or (since July 2023) pursue the direct citizenship pathway.
            </p>
          </div>
        </div>
      </section>

      {/* ── RIGHTS AND ENTITLEMENTS ────────────────────────────── */}
      <section id="rights" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What the visa allows" title="Rights and Entitlements on the Subclass 444" accent={ACCENT} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            {[
              { icon: 'briefcase', color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0', title: 'Work rights — full', body: 'Any employer, any occupation, no employer nomination or sponsorship required. NZ citizens on the 444 can work in Australia without restriction.' },
              { icon: 'home', color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0', title: 'Study rights — full', body: 'Study at any level without needing a separate student visa. NZ citizens on the 444 can attend school, university, or vocational training.' },
              { icon: 'heart', color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0', title: 'Medicare', body: 'Access to Medicare — Australia\'s public health system — under the reciprocal health arrangement between Australia and New Zealand.' },
              { icon: 'alert', color: '#d97706', bg: '#fffbeb', border: '#fde68a', title: 'Centrelink — limited for non-protected', body: 'Non-protected SCV holders face waiting periods for some Centrelink payments and cannot access others. Protected SCV holders have broader access similar to permanent residents.' },
              { icon: 'minus', color: '#dc2626', bg: '#fef2f2', border: '#fecaca', title: 'No permanent residence', body: 'The 444 is not permanent residence and does not automatically lead to it. A separate visa application or the citizenship pathway is needed for permanent status.' },
              { icon: 'minus', color: '#dc2626', bg: '#fef2f2', border: '#fecaca', title: 'Ends on departure', body: "The 444 ends each time the holder departs Australia. A new 444 is granted on each return. Extended absences can affect citizenship residence calculations." },
            ].map(item => (
              <div key={item.title} style={{ background: item.bg, border: `1px solid ${item.border}`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: `${item.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={item.icon as any} size={16} color={item.color} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 5 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65 }}>{item.body}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Callout variant="note" panel={true} title="Confirm current Centrelink and Medicare entitlements on the Services Australia website">
            Social security entitlements for SCV holders are subject to change. Confirm the current rules for both protected and non-protected SCV holders on the Services Australia website before making any financial planning decisions.
          </Callout>
        </div>
      </section>

      {/* ── PROTECTED VS NON-PROTECTED ─────────────────────────── */}
      <section id="protected" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Key distinction" title="Protected vs Non-Protected SCV Holders" accent={ACCENT} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#16a34a', marginBottom: 12 }}>Protected SCV holders</div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: '0 0 14px' }}>NZ citizens who were in Australia as SCV holders on <strong>26 February 2001</strong>, or who held a SCV before that date and later returned.</p>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                {[
                  'Broader access to Centrelink and social security',
                  'Access broadly equivalent to permanent residents',
                  'Eligible for Age Pension after residence requirements',
                ].map((pt, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Icon name="check" size={14} color="#16a34a" />
                    <span style={{ fontSize: 13, color: '#15803d', lineHeight: 1.55 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#fafbfe', border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: ACCENT, marginBottom: 12 }}>Non-protected SCV holders</div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: '0 0 14px' }}>NZ citizens who first arrived in Australia after 26 February 2001 — the majority of NZ citizens currently in Australia.</p>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                {[
                  'Limited access to Centrelink — waiting periods apply',
                  'Some payments unavailable',
                  'Full work rights, Medicare, and study rights unaffected',
                  'Now eligible for citizenship directly after 4 years residence',
                ].map((pt, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Icon name="arrowright" size={14} color={ACCENT} />
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.55 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CITIZENSHIP PATHWAY ────────────────────────────────── */}
      <section id="citizenship" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Since 1 July 2023" title="The Direct Citizenship Pathway for NZ Citizens" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 28 }}>
            Before July 2023, NZ citizens who wanted to become Australian citizens first had to apply for and be granted permanent residence — a separate and often lengthy process. Since 1 July 2023, most NZ citizens can apply for Australian citizenship directly.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, marginBottom: 32 }}>
            {[
              { step: '1', title: 'Residence requirement', body: '4 years of lawful residence in Australia, including the 12 months immediately before applying. Time on the subclass 444 counts toward this requirement. Confirm current residence calculation rules on the Department of Home Affairs website.' },
              { step: '2', title: 'Standard citizenship criteria', body: 'Good character (including police clearance), a basic English language requirement, and passing the Australian citizenship test. The same criteria as for other citizenship applicants apply.' },
              { step: '3', title: 'No permanent residence step required', body: 'Under the post-July 2023 rules, NZ citizens do not need to obtain a permanent visa (such as the subclass 189 or 190) before applying for citizenship. The 444 temporary visa is sufficient as the basis for the citizenship application.' },
              { step: '4', title: 'Effect on 461 family members', body: 'Once an NZ citizen obtains Australian citizenship, their non-NZ family members can apply for a partner visa (820/801) instead of renewing the 461. This provides a direct pathway to permanent residence — a significant change in family planning options.' },
            ].map(item => (
              <div key={item.step} style={{ display: 'flex', gap: 20, background: '#ffffff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: ACCENT, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>{item.step}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>

          <Callout variant="note" panel={true} title="Confirm current citizenship eligibility settings on the Department of Home Affairs website">
            The citizenship pathway for NZ citizens was introduced on 1 July 2023 and may have been adjusted since. Always confirm the current residence requirements and eligibility settings on the Department of Home Affairs website before applying.
          </Callout>
        </div>
      </section>

      {/* ── FAMILY MEMBERS ─────────────────────────────────────── */}
      <section id="family" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Family planning" title="Visas for Family Members of NZ Citizens" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 28 }}>
            The subclass 444 applies only to the NZ citizen. Family members who hold other nationalities need a separate visa to be in Australia.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, marginBottom: 32 }}>
            {[
              { title: 'Subclass 461 — NZ Citizen Family Relationship visa', body: 'The most common visa for family members of an NZ citizen on a 444 visa. A 5-year temporary visa with full work and study rights, renewable onshore. Does not lead to permanent residence directly. See the NZ Family Relationship (461) page for full details.' },
              { title: 'Partner visa (820/801) — after NZ citizen becomes Australian', body: "If the NZ citizen obtains Australian citizenship, their partner can apply for the partner visa (820/801) from inside Australia. This leads to permanent residence and is a meaningful pathway change compared to the 461. The partner must be in a genuine relationship with the Australian citizen." },
              { title: 'Other family visas', body: "Depending on the family structure, other family visa pathways may also be relevant — parent visas, child visas, or other relative pathways. A registered migration agent can map out the options for the whole family." },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 16, background: '#fafbfe', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Icon name="arrowright" size={15} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 5 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #eef0f6` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── RELATED ────────────────────────────────────────────── */}
      <section id="related" style={{ background: '#fafbfe', padding: '80px 32px', borderTop: `1px solid #eef0f6` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also on this site" title="Related pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Planning for permanent residence or citizenship as an NZ citizen?"
        body="The citizenship pathway changes and the 461 family visa options create meaningful planning opportunities. Nanak Migration Group (MARN 2619467) can map out the best pathway for NZ citizens and their families."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
