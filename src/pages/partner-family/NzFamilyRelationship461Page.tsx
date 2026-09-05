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
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'who-qualifies', label: 'Who qualifies' },
  { id: 'rights', label: 'Visa rights' },
  { id: 'comparison', label: '461 vs partner visa' },
  { id: 'relationship-ends', label: 'If the relationship ends' },
  { id: 'process', label: 'Process' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'calendar',
    value: '5 years',
    label: '5-year temporary visa, renewable onshore',
    note: 'The subclass 461 is granted for 5 years and can be renewed onshore. Each renewal requires the NZ citizen family member to still be the holder of a valid subclass 444 Special Category visa.',
  },
  {
    icon: 'shield',
    value: 'Full rights',
    label: 'Full work and study rights in Australia',
    note: 'Holders of the subclass 461 can work in Australia without restriction and study at any level. This is a significant advantage over many other temporary visas.',
  },
  {
    icon: 'user',
    value: 'Non-NZ family',
    label: 'For family members who are NOT New Zealand citizens',
    note: "New Zealand citizens themselves enter Australia on the subclass 444 Special Category visa. The 461 is specifically for their family members who hold other nationalities.",
  },
  {
    icon: 'home',
    value: 'Temporary only',
    label: 'No direct pathway to permanent residence through the 461',
    note: 'The subclass 461 does not itself lead to permanent residence. Permanent residence must be sought through a separate pathway — partner visa, skilled visa, or employer sponsorship, depending on circumstances.',
  },
]

const STEPS: TimelineStep[] = [
  {
    code: '01',
    title: 'Confirm the NZ citizen holds a valid subclass 444 visa',
    desc: "The NZ citizen family member must currently hold a valid subclass 444 Special Category visa and be present in Australia. The 461 applicant must be a genuine member of the NZ citizen's family unit.",
  },
  {
    code: '02',
    title: 'Confirm the applicant is not a New Zealand citizen',
    desc: "New Zealand citizens enter Australia on the 444 and do not need the 461. The 461 is for family members who hold other nationalities — spouses, de facto partners, and dependent children of NZ citizens.",
  },
  {
    code: '03',
    title: 'Gather identity and relationship documents',
    desc: "Collect the applicant's passport, the NZ citizen's passport and evidence of their 444 visa status, and evidence of the family relationship — marriage certificate, de facto evidence, or birth certificate for dependent children.",
  },
  {
    code: '04',
    title: 'Complete health and character assessments',
    desc: "Applicants for the subclass 461 must meet health requirements (medical examination at an approved panel physician) and character requirements (police clearances). Confirm current requirements on the Department of Home Affairs website.",
  },
  {
    code: '05',
    title: 'Lodge the application',
    desc: "Lodge the subclass 461 application through ImmiAccount. The application can be lodged onshore. Pay the government charge — confirm the current fee on the Department of Home Affairs website.",
  },
  {
    code: '06',
    title: 'Renew before expiry; plan for permanent residence',
    desc: "The 461 is valid for 5 years and must be renewed before expiry. On each renewal, the NZ citizen must still hold a valid 444 visa. Families should use the 461 period to plan a pathway to permanent residence through another visa category.",
  },
]

const FAQ: FaqItem[] = [
  {
    question: "Who exactly is a 'member of the family unit' of a New Zealand citizen for the 461?",
    answer: "A member of the family unit of a New Zealand citizen for the purposes of the subclass 461 visa includes: the NZ citizen's spouse or de facto partner (including same-sex de facto partners); dependent children of the NZ citizen or of the NZ citizen's spouse or partner; and, in some circumstances, other dependants who are members of the family unit. All applicants must satisfy health and character requirements. The NZ citizen themselves must hold a valid subclass 444 Special Category visa and be in Australia.",
  },
  {
    question: "Can the 461 be renewed?",
    answer: "Yes. The subclass 461 can be renewed onshore before it expires. Each renewal application requires the New Zealand citizen family member to still hold a valid subclass 444 Special Category visa and to be present in Australia. If the NZ citizen has left Australia permanently or has ceased to hold a valid 444 visa, renewal may not be possible. There is no limit on the number of times the 461 can be renewed, provided the eligibility criteria continue to be met.",
  },
  {
    question: "Does the 461 lead to permanent residence?",
    answer: "No. The subclass 461 is a temporary visa and does not itself provide a pathway to permanent residence. To become a permanent resident, a 461 holder would need to apply for a separate visa — for example, a partner visa if they have an eligible Australian partner, a skilled migration visa if they have an assessable occupation and sufficient points, or an employer-sponsored visa. Some NZ citizens are now able to apply for Australian citizenship directly under the changes that came into effect in 2023 — if the NZ citizen sponsor becomes an Australian citizen, the 461 holder may then be eligible to apply for a partner visa. A registered migration agent can assess the options.",
  },
  {
    question: "What happens if the NZ citizen leaves Australia?",
    answer: "The subclass 461 is linked to the NZ citizen's presence in Australia on a subclass 444 visa. If the NZ citizen leaves Australia permanently, the 461 holder's basis for holding the visa may be affected. Travel outside Australia by the 461 holder is also linked to the visa conditions — the 461 allows multiple entries to Australia within the visa validity period, but the holder should understand the conditions before travelling. If the NZ citizen moves away from Australia, the 461 holder should seek advice promptly about their visa status and options for remaining in Australia.",
  },
  {
    question: "What if the relationship with the NZ citizen ends?",
    answer: "If the relationship with the NZ citizen ends — whether through separation, divorce, or the death of the NZ citizen — the basis for holding the subclass 461 is affected. The 461 is not cancelled automatically, but the holder may not be able to renew it if the NZ citizen is no longer their family member or if the NZ citizen no longer holds a valid 444 visa. The 461 holder should seek advice promptly. If the NZ citizen has since become an Australian citizen or permanent resident, and the relationship was genuine, the 461 holder may be eligible for a partner visa. Each situation requires individual assessment.",
  },
  {
    question: "Now that NZ citizens can apply for Australian citizenship, does that change things for a 461 holder?",
    answer: "Yes, potentially. From 1 July 2023, most NZ citizens who have been usually resident in Australia can apply for Australian citizenship directly, without needing to first become a permanent resident. If an NZ citizen sponsor obtains Australian citizenship, the 461 holder may then be eligible to apply for a partner visa as the partner of an Australian citizen — which is a pathway to permanent residence. The timing of the NZ citizen's citizenship application and any relationship requirements would need to be assessed. Seek advice from a registered migration agent about how these changes interact with the family's visa planning.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Partner Visa Onshore (820/801)',
    desc: 'Apply from inside Australia — temporary stage leads to permanent residence.',
    icon: 'home',
    page: 'partner-visa-820-801',
    color: ACCENT,
  },
  {
    title: 'Partner Visa Offshore (309/100)',
    desc: 'Apply from overseas to join your Australian citizen or permanent resident partner.',
    icon: 'plane',
    page: 'partner-visa-309-100',
    color: ACCENT,
  },
  {
    title: 'Partner & Family Visas',
    desc: 'Overview of all partner, parent, child, carer, and relative visa pathways.',
    icon: 'heart',
    page: 'partner-family-visas',
    color: ACCENT,
  },
  {
    title: 'Skills in Demand Visa (482)',
    desc: 'Employer-sponsored temporary visa — may lead to permanent residence through the 186.',
    icon: 'briefcase',
    page: 'skills-in-demand-visa',
    color: ACCENT,
  },
]

const COMPARISON_ROWS = [
  { aspect: 'Visa type', col461: 'Temporary (5-year, renewable)', colPartner: 'Temporary then permanent (820/801 or 309/100)' },
  { aspect: 'Permanent residence', col461: 'No — must pursue separately', colPartner: 'Yes — permanent stage after 2+ years' },
  { aspect: 'Sponsor required', col461: 'NZ citizen on 444 visa', colPartner: 'Australian citizen or permanent resident' },
  { aspect: 'Work rights', col461: 'Full work rights', colPartner: 'Full work rights' },
  { aspect: 'Cost', col461: 'Lower government charge', colPartner: 'Higher government charge — confirm on DoHA' },
  { aspect: 'Complexity', col461: 'Simpler — fewer evidence requirements', colPartner: 'More extensive relationship evidence required' },
  { aspect: 'Pathway', col461: 'No automatic PR pathway — plan separately', colPartner: 'Leads directly to permanent residence' },
]

export default function NzFamilyRelationship461Page({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'NZ Citizen Family Relationship Visa (461)', url: 'https://www.nanakmigration.com.au/nz-family-relationship-461' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'New Zealand Citizen Family Relationship Visa Subclass 461',
          description: PAGE_META['nz-family-relationship-461'].metaDescription,
          url: 'https://www.nanakmigration.com.au/nz-family-relationship-461',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Partner & Family', page: 'partner-family-visas' },
          { label: 'NZ Family Relationship (461)' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Partner & Family Visas"
        eyebrowSub="Subclass 461"
        title={<>NZ Citizen Family Relationship Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 461</em></>}
        deck="A 5-year temporary visa for people who are not New Zealand citizens but are members of the family unit of a New Zealand citizen living in Australia on a subclass 444 Special Category visa. Full work and study rights. Renewable onshore."
        shortAnswer={<>The subclass 461 grants a <strong style={{ color: NAVY }}>5-year temporary visa</strong> to family members of a New Zealand citizen on a <strong style={{ color: NAVY }}>subclass 444 Special Category visa</strong> in Australia. Holders have <strong style={{ color: NAVY }}>full work and study rights</strong> and can renew onshore. The 461 does not lead to permanent residence — a separate pathway is needed. With NZ citizens now able to apply for Australian citizenship directly, family planning options are changing: a partner whose NZ citizen sponsor becomes an Australian citizen may then access the partner visa route to permanent residence. Nanak Migration Group (MARN 2619467) can assess the family's full options. Confirm all current requirements on the Department of Home Affairs website.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← Partner & Family', page: 'partner-family-visas' }}
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
            <a
              key={sec.id}
              href={`#${sec.id}`}
              style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap' as const, borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = ACCENT
                ;(e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'
                ;(e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent'
              }}
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>

      <KeyFactsStrip facts={FACTS} accent={ACCENT} />

      {/* ── OVERVIEW ───────────────────────────────────────────── */}
      <section id="overview" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What it provides" title="What the Subclass 461 Provides" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 24 }}>
            New Zealand citizens arriving in Australia are granted a subclass 444 Special Category visa automatically, which allows them to live and work in Australia indefinitely — but does not extend automatically to their family members who hold other nationalities. The subclass 461 fills this gap.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            The 461 grants a 5-year temporary visa with full work and study rights. It can be renewed onshore as long as the NZ citizen family member continues to hold a valid subclass 444 visa in Australia. It is not tied to a specific employer and does not restrict where the holder can work or study.
          </p>

          <Callout variant="note" panel={true} title="NZ citizens can now apply for Australian citizenship directly">
            Since 1 July 2023, most New Zealand citizens who have been usually resident in Australia can apply for Australian citizenship without first becoming a permanent resident. If the NZ citizen sponsor in your family becomes an Australian citizen, the pathway for their 461-holding family members changes — they may then be eligible for a partner visa, which leads to permanent residence. This is an important consideration when planning for the long term.
          </Callout>
        </div>
      </section>

      {/* ── WHO QUALIFIES ──────────────────────────────────────── */}
      <section id="who-qualifies" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Eligibility" title="Who Can Apply for the Subclass 461" accent={ACCENT} />

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20, marginBottom: 32 }}>
            {[
              {
                title: 'Not a New Zealand citizen',
                body: "The applicant must not be a New Zealand citizen. NZ citizens themselves enter and stay in Australia on the subclass 444 Special Category visa — they do not apply for the 461.",
              },
              {
                title: 'Member of the family unit of a NZ citizen on a 444 visa',
                body: "The applicant must be a genuine member of the family unit of a New Zealand citizen who currently holds a valid subclass 444 Special Category visa in Australia. Family unit includes a spouse or de facto partner, and dependent children.",
              },
              {
                title: 'Health and character requirements',
                body: "Applicants must meet Australian health requirements (medical examination at a Department-approved panel physician) and character requirements (police clearances from all countries where the applicant has resided). Confirm current requirements on the Department of Home Affairs website.",
              },
            ].map((req, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${ACCENT}`, background: '#ffffff', borderRadius: '0 8px 8px 0', padding: '20px 24px' }}>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>{req.title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{req.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISA RIGHTS ────────────────────────────────────────── */}
      <section id="rights" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What the visa allows" title="Visa Rights and Conditions" accent={ACCENT} />

          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const, marginBottom: 32 }}>
            {[
              { icon: 'briefcase', title: 'Full work rights', body: 'Work in any occupation, for any employer, without restriction. No skills assessment or employer sponsorship required.' },
              { icon: 'home', title: 'Full study rights', body: 'Study at any level — primary, secondary, vocational, or university — without needing a separate student visa.' },
              { icon: 'shield', title: 'Medicare access', body: "Holders of the 461 may be eligible for Medicare under the Trans-Tasman Travel Arrangement, subject to reciprocal arrangements. Confirm current eligibility on the Services Australia website." },
              { icon: 'plane', title: 'Multiple entry', body: 'The subclass 461 allows multiple entries to Australia within the visa validity period. Travel outside Australia does not cause the visa to expire.' },
              { icon: 'calendar', title: '5-year validity', body: 'Valid for 5 years from the date of grant. Must be renewed before expiry — the renewal application requires the NZ citizen to still hold a valid 444 visa.' },
              { icon: 'arrowright', title: 'Renewable onshore', body: 'The renewal application can be lodged while in Australia. A bridging visa is issued on lodgement, allowing the holder to remain while the renewal is processed.' },
            ].map(item => (
              <div key={item.title} style={{ flex: 1, minWidth: 240, display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fafbfe', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={item.icon as any} size={18} color={ACCENT} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 15, fontWeight: 700, color: NAVY, margin: '0 0 6px' }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65, margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout variant="warning" panel={true} title="The 461 does not lead to permanent residence">
            The subclass 461 is a temporary visa. It does not itself provide a pathway to permanent residence. Holders should plan separately for permanent residence — through a partner visa (if the NZ citizen sponsor becomes an Australian citizen or permanent resident), skilled migration, or employer sponsorship.
          </Callout>
        </div>
      </section>

      {/* ── COMPARISON ─────────────────────────────────────────── */}
      <section id="comparison" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Visa planning" title="Subclass 461 vs Partner Visa" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 28 }}>
            For families where the NZ citizen sponsor is likely to become an Australian citizen or permanent resident, or where the 461 holder has an independent basis for a partner visa, understanding the difference between the 461 and the partner visa is important for long-term planning.
          </p>

          <div style={{ overflowX: 'auto' as const, borderRadius: 12, border: `1px solid ${BORDER}`, marginBottom: 32 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13 }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left' as const, color: '#fff', fontWeight: 600, fontSize: 13 }}>Aspect</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' as const, color: '#fff', fontWeight: 600, fontSize: 13 }}>Subclass 461</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' as const, color: '#fff', fontWeight: 600, fontSize: 13 }}>Partner Visa (820/801 or 309/100)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.aspect} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafd' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: NAVY, borderBottom: `1px solid ${BORDER}` }}>{row.aspect}</td>
                    <td style={{ padding: '12px 16px', color: '#374151', borderBottom: `1px solid ${BORDER}` }}>{row.col461}</td>
                    <td style={{ padding: '12px 16px', color: '#374151', borderBottom: `1px solid ${BORDER}` }}>{row.colPartner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout variant="note" panel={true} title="Confirm current government charges on the Department of Home Affairs website">
            Government charges for both the subclass 461 and partner visa subclasses change periodically. Always confirm current fees on the Department of Home Affairs website before making a decision based on cost.
          </Callout>
        </div>
      </section>

      {/* ── IF THE RELATIONSHIP ENDS ───────────────────────────── */}
      <section id="relationship-ends" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Important scenarios" title="If the Relationship or the NZ Citizen's Status Changes" accent={ACCENT} />

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {[
              {
                title: 'If the NZ citizen leaves Australia permanently',
                body: "The subclass 461 is linked to the NZ citizen's presence in Australia on a subclass 444 visa. If the NZ citizen permanently departs and ceases to reside in Australia, the 461 holder's ability to renew will be affected. The current 461 visa does not automatically cancel, but the holder should seek advice promptly about their long-term options.",
              },
              {
                title: 'If the relationship with the NZ citizen ends',
                body: "Separation or divorce from the NZ citizen does not automatically cancel the 461, but may prevent renewal. If the NZ citizen has become an Australian citizen or permanent resident, and there was a genuine relationship, the former partner may be eligible for a partner visa — but timing and relationship evidence requirements apply. Seek advice promptly if a relationship breaks down.",
              },
              {
                title: 'If the NZ citizen becomes an Australian citizen',
                body: "This is a significant change that opens up new options. If the NZ citizen sponsor becomes an Australian citizen, the 461 holder can potentially apply for an onshore partner visa (subclass 820/801) — this leads to permanent residence. The partner visa is more expensive and requires extensive evidence of the relationship, but it provides a genuine pathway to permanent residence that the 461 does not.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: '#fafbfe', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 12px' }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section id="process" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="How to apply" title="The Application Process" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #eef0f6` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── RELATED PAGES ──────────────────────────────────────── */}
      <section id="related" style={{ background: '#fafbfe', padding: '80px 32px', borderTop: `1px solid #eef0f6` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also on this site" title="Related pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Plan your pathway alongside the subclass 461"
        body="The 461 provides a solid temporary platform, but permanent residence requires a separate strategy. Nanak Migration Group (MARN 2619467) can map out the options — partner visa, skilled, or employer-sponsored — and advise how NZ citizenship changes for your sponsor affect the family's long-term plan."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
