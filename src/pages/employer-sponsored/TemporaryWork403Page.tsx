import React from 'react'
import { GOLD, NAVY, CAT_EMPLOYER } from '@/theme'
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

const ACCENT = CAT_EMPLOYER
const CURRENT_AS_AT = 'August 2026'
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'streams', label: 'Streams explained' },
  { id: 'palm', label: 'PALM scheme' },
  { id: 'conditions', label: 'Conditions & stay' },
  { id: 'process', label: 'Application process' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'briefcase',
    value: 'Subclass 403',
    label: 'Temporary Work (International Relations) visa',
    note: 'The 403 visa covers several distinct streams with different sponsors, eligibility criteria, and stay periods. The correct stream must be identified before lodging.',
  },
  {
    icon: 'calendar',
    value: 'Up to 4 years',
    label: 'PALM stream — other streams vary by arrangement',
    note: 'PALM stream workers can be approved for stays of up to 4 years. Stay periods for other streams depend on the sponsoring arrangement and agreement.',
  },
  {
    icon: 'building',
    value: 'Various sponsors',
    label: 'Sponsoring body depends on the stream',
    note: 'Government agencies, foreign government entities, PALM-approved employers and international organisations each operate under different sponsorship frameworks for the 403 visa.',
  },
  {
    icon: 'dollar',
    value: 'Confirm fee on DoHA',
    label: 'Application charge — confirm current fee on DoHA',
    note: 'Visa application charges are updated periodically. Confirm current charges on the Department of Home Affairs website before lodging.',
  },
]

const STEPS: TimelineStep[] = [
  { code: '01', title: 'Identify the correct stream', desc: 'Confirm which stream applies to your situation — the sponsoring body, eligibility criteria, and required documents differ significantly between streams.' },
  { code: '02', title: 'Sponsor or supporting agency preparation', desc: 'The sponsoring entity (government agency, approved PALM employer, foreign government, or international organisation) prepares the nomination or approval documentation relevant to that stream.' },
  { code: '03', title: 'Gather visa application documents', desc: 'Collect identity documents, health assessments (if required), character documents, and stream-specific supporting evidence — for example, PALM employer approval for the PALM stream.' },
  { code: '04', title: 'Lodge the visa application online', desc: 'The applicant (or their migration agent) lodges the subclass 403 application through ImmiAccount, attaching all required documents and paying the visa application charge.' },
  { code: '05', title: 'Await decision', desc: 'Processing times vary by stream and by individual circumstances. The Department may request further information before making a decision.' },
]

const FAQ: FaqItem[] = [
  {
    question: "What is the difference between the 403 visa and the 482 Skills in Demand visa?",
    answer: "The subclass 403 Temporary Work (International Relations) visa is not an employer sponsorship visa in the standard commercial sense. It covers defined international relations contexts — government agreements, diplomatic workers, PALM scheme workers, and international organisations. The subclass 482 Skills in Demand visa is the standard pathway for Australian businesses that want to sponsor skilled overseas workers for genuine ongoing positions. If you are an Australian business seeking to sponsor a worker for a commercial role, the 482 is almost certainly the relevant visa, not the 403. The 403 applies only in the specific contexts described in its stream definitions.",
  },
  {
    question: "What is the PALM scheme and who qualifies for the PALM stream of the 403 visa?",
    answer: "The Pacific Australia Labour Mobility (PALM) scheme enables businesses in approved sectors (agriculture, horticulture, accommodation, meat processing, and others) to recruit workers from approved Pacific countries and Timor-Leste. To be eligible for the PALM stream of the 403 visa, the worker must be a national of an approved PALM country (including Fiji, Kiribati, Nauru, Papua New Guinea, Samoa, Solomon Islands, Tonga, Tuvalu, Vanuatu, and Timor-Leste), and the employer must be approved under the PALM scheme. The PALM scheme is administered through the Department of Employment and Workplace Relations, not the Department of Home Affairs — employers must obtain PALM approval before workers can be sponsored. Confirm current participating countries on the Department of Home Affairs and PALM scheme websites.",
  },
  {
    question: "Can a PALM worker change employers?",
    answer: "The subclass 403 PALM stream visa ties the worker to the approved PALM employer. If the worker wants to change employers, the new employer must also be an approved PALM employer, and the arrangement must comply with the PALM scheme requirements. A worker cannot simply change to any employer — the visa and the PALM arrangement are linked. Any change should be managed through the PALM scheme administrator and may require a new visa application or endorsement. Workers should not cease work for the sponsoring employer without understanding the visa consequences.",
  },
  {
    question: "What is the Foreign Government Agency stream — who uses it?",
    answer: "The Foreign Government Agency stream of the 403 visa is for employees of a foreign government who are employed in that foreign government's official capacity and need to work in Australia on a temporary basis. This covers staff of foreign embassies, consulates, and official government bodies who do not hold diplomatic status (which would otherwise be covered by the Diplomatic visa). The foreign government agency is the supporting party for this stream. This is distinct from the Domestic Worker (Diplomatic or Consular) stream, which covers domestic staff employed by a diplomat or consular officer at their residence.",
  },
  {
    question: "What conditions apply to subclass 403 visa holders?",
    answer: "Conditions vary by stream. A common feature across streams is that the visa is tied to the sponsoring arrangement — the visa holder must work for or within the context of the arrangement that supported their visa. The PALM stream imposes a condition requiring the worker to work for the approved PALM employer. Other streams impose their own conditions. There are generally restrictions on changing employers or activities without Departmental approval. Specific conditions are stated in the visa grant notice — visa holders should review their conditions carefully. Confirm current conditions for the specific stream on the Department of Home Affairs website.",
  },
  {
    question: "Is there a pathway to permanent residence from the subclass 403 visa?",
    answer: "The subclass 403 is a temporary visa — it does not itself provide a direct pathway to permanent residence. For PALM stream workers who want to explore long-term options in Australia, the relevant permanent pathways — such as employer-sponsored permanent residence (subclass 186 or 494) — would require meeting separate eligibility criteria including occupation lists, skills assessments, and English requirements, and would generally require a different visa and a different employer sponsorship arrangement. The existence of a 403 visa does not guarantee eligibility for any permanent pathway. Seek advice specific to your occupation and circumstances.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Labour Agreements', desc: 'Company-specific, industry, and DAMA agreements — including PALM-adjacent arrangements.', icon: 'file', page: 'labour-agreements', color: ACCENT },
  { title: 'Regional Employer Sponsored (494)', desc: 'Employer-sponsored regional visa — an alternative for PALM-sector employers seeking permanent pathways.', icon: 'mappin', page: '494-visa', color: ACCENT },
  { title: 'Skills in Demand (482)', desc: 'The standard employer-sponsored temporary visa for skilled positions — not the 403.', icon: 'briefcase', page: 'skills-in-demand-visa', color: ACCENT },
  { title: 'Temporary Activity (408)', desc: 'Another temporary activity visa covering research, entertainment, sport and government-endorsed events.', icon: 'star', page: 'temporary-activity-408', color: ACCENT },
]

const STREAMS = [
  {
    code: 'Government Agreement',
    heading: 'Government Agreement stream',
    who: 'Workers employed under a bilateral government agreement between Australia and a foreign country.',
    sponsor: 'The relevant Australian government agency that is party to the agreement, or the employer nominated under the agreement.',
    stay: 'Duration of the agreement or arrangement — varies by agreement.',
    note: 'This stream requires an approved government agreement to be in place before an individual application can be lodged.',
  },
  {
    code: 'Foreign Govt Agency',
    heading: 'Foreign Government Agency stream',
    who: 'Employees of a foreign government agency working in Australia in an official capacity — not diplomatic-status staff.',
    sponsor: 'The foreign government agency or its nominated representative.',
    stay: 'Varies — typically tied to the term of employment or the posting.',
    note: 'Different from the Diplomatic and Consular stream. Staff with full diplomatic status use a different visa class.',
  },
  {
    code: 'Domestic Worker',
    heading: 'Domestic Worker (Diplomatic or Consular) stream',
    who: 'Domestic workers — housekeepers, cooks, nannies — employed in the private residence of a diplomat or consular officer.',
    sponsor: 'The diplomat or consular officer who employs the domestic worker, in conjunction with the relevant mission.',
    stay: 'Duration of the diplomat\'s posting in Australia, typically renewed with the principal visa holder.',
    note: 'Workers must be personally employed by the diplomat, not by the mission or agency.',
  },
  {
    code: 'Privileges & Immunities',
    heading: 'Privileges and Immunities stream',
    who: 'Officials and staff of international organisations recognised by the Australian government (e.g. United Nations agencies, international financial institutions).',
    sponsor: 'The international organisation, which must be approved by the Australian Department of Foreign Affairs and Trade.',
    stay: 'Duration of the appointment or posting.',
    note: 'Approval of the organisation by DFAT is a prerequisite — not all international organisations are recognised.',
  },
  {
    code: 'PALM',
    heading: 'Pacific Australia Labour Mobility (PALM) stream',
    who: 'Citizens of approved Pacific countries and Timor-Leste working for approved PALM employers in agriculture, horticulture, accommodation, meat processing, and related approved sectors.',
    sponsor: 'An approved PALM scheme employer — must hold current PALM scheme approval from the Department of Employment and Workplace Relations.',
    stay: 'Up to 4 years for long-term PALM placements; short-term placements available for seasonal work.',
    note: 'PALM scheme is the successor to the Seasonal Worker Programme. Employer must obtain PALM approval before workers are engaged.',
  },
]

export default function TemporaryWork403Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['temporary-work-403'].title }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: 'Temporary Work (International Relations) Visa (403)', url: 'https://www.nanakmigration.com.au/temporary-work-403' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{ name: 'Temporary Work (International Relations) Visa (403) Advice', description: PAGE_META['temporary-work-403'].metaDescription, url: 'https://www.nanakmigration.com.au/temporary-work-403' }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Employer Sponsored Visas', page: 'employer-sponsored-visas' },
          { label: 'Temporary Work 403' },
        ]}
      />

      <PageHero
        variant="standard"
        eyebrow="Employer Sponsored"
        eyebrowSub="Specialist Visas · Subclass 403"
        title={<>Temporary Work Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 403 — International Relations</em></>}
        deck="The subclass 403 covers five distinct streams: Government Agreement, Foreign Government Agency, Domestic Worker (Diplomatic or Consular), Privileges and Immunities, and the Pacific Australia Labour Mobility (PALM) scheme. Each stream has its own sponsor, eligibility criteria, and stay period."
        shortAnswer={<>The <strong style={{ color: NAVY }}>subclass 403 Temporary Work (International Relations) visa</strong> is not a standard employer-sponsored commercial visa — it covers defined international relations contexts including bilateral government agreements, foreign government agency staff, diplomatic domestic workers, international organisation officials, and workers under the <strong style={{ color: NAVY }}>Pacific Australia Labour Mobility (PALM) scheme</strong>. The PALM stream allows workers from approved Pacific countries and Timor-Leste to work for <strong style={{ color: NAVY }}>approved PALM employers</strong> for up to four years in eligible sectors. Each stream has a different sponsoring body and different conditions. Nanak Migration Group (MARN 2619467) can advise on which stream applies and what is required. No outcome guarantees.</>}
        maraBadge={true}
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Labour Agreements →', page: 'labour-agreements' }}
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
          <SectionHeading kicker="What this visa is" title="Understanding the Subclass 403 Visa" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 20 }}>
            The subclass 403 Temporary Work (International Relations) visa exists for situations where Australia's international obligations or bilateral arrangements require a specific visa framework outside the standard employer sponsorship system. It is a multi-stream visa — the five streams are essentially separate visa pathways that share a subclass number.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            The most widely used stream by volume is the PALM scheme stream, which supports Australia's labour mobility commitments to Pacific island nations and Timor-Leste. The other streams serve narrow diplomatic and international organisation contexts.
          </p>
          <Callout variant="warning" panel={true} title="This is not the standard employer sponsorship visa">
            The subclass 403 is not used for general commercial employer sponsorship. Australian businesses seeking to sponsor skilled workers for ongoing commercial roles should use the subclass 482 Skills in Demand visa or subclass 186 Employer Nomination Scheme. Confirm which visa applies to your situation before lodging.
          </Callout>
        </div>
      </section>

      {/* ── Streams explained ────────────────────────────────────── */}
      <section id="streams" style={{ background: GREY_BG, padding: '64px 32px 56px', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Five distinct pathways" title="The Five Streams of the Subclass 403 Visa" />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>
            {STREAMS.map(stream => (
              <div key={stream.code} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden' }}>
                <div style={{ padding: '14px 22px', background: NAVY, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: GOLD, letterSpacing: '0.08em', background: 'rgba(245,161,36,0.15)', padding: '3px 10px', borderRadius: 4 }}>{stream.code}</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{stream.heading}</span>
                </div>
                <div style={{ padding: '20px 22px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 6 }}>Who</div>
                    <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.6, margin: 0 }}>{stream.who}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 6 }}>Sponsor / Support</div>
                    <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.6, margin: 0 }}>{stream.sponsor}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 6 }}>Stay period</div>
                    <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.6, margin: 0 }}>{stream.stay}</p>
                  </div>
                </div>
                {stream.note && (
                  <div style={{ padding: '12px 22px', borderTop: `1px solid ${BORDER}`, background: `${ACCENT}06`, fontSize: 12, color: '#6b7280', lineHeight: 1.6, fontStyle: 'italic' }}>
                    {stream.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PALM stream ──────────────────────────────────────────── */}
      <section id="palm" style={{ padding: '64px 32px 56px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="PALM scheme" title="Pacific Australia Labour Mobility (PALM) Stream" />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 28 }}>
            The PALM scheme is Australia's primary labour mobility program for Pacific countries and Timor-Leste. It replaced the Seasonal Worker Programme and consolidated access to both seasonal and long-term placements under a single program administered by the Department of Employment and Workplace Relations.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
            {[
              {
                heading: 'Participating countries',
                items: ['Fiji', 'Kiribati', 'Nauru', 'Papua New Guinea', 'Samoa', 'Solomon Islands', 'Tonga', 'Tuvalu', 'Vanuatu', 'Timor-Leste', 'Other approved countries — confirm on DoHA'],
              },
              {
                heading: 'Approved sectors',
                items: ['Agriculture and horticulture (seasonal)', 'Accommodation and food services', 'Meat processing', 'Aged care and disability care (long-term)', 'Other approved sectors — confirm on PALM scheme website'],
              },
            ].map(col => (
              <div key={col.heading} style={{ background: GREY_BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 12 }}>{col.heading}</div>
                {col.items.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 7 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <Callout variant="note" panel={true} title="Confirm current PALM scheme participating countries and approved sectors on the Department of Home Affairs and PALM scheme websites">
            The list of approved countries and eligible sectors may change. Always confirm current arrangements on the Department of Home Affairs website and the PALM scheme website (administered by the Department of Employment and Workplace Relations) before lodging or planning a recruitment.
          </Callout>
        </div>
      </section>

      {/* ── Conditions & stay ────────────────────────────────────── */}
      <section id="conditions" style={{ background: GREY_BG, padding: '64px 32px 56px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What the visa allows" title="Conditions and Stay Periods" />
          <div style={{ overflowX: 'auto' as const }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13, minWidth: 620 }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  {['Stream', 'Max stay', 'Work restriction', 'Key condition'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', color: '#fff', fontWeight: 700, fontSize: 12, textAlign: 'left' as const, letterSpacing: '0.04em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { stream: 'Government Agreement', stay: 'Duration of agreement', work: 'Work under agreement only', condition: 'Tied to the agreement arrangement' },
                  { stream: 'Foreign Government Agency', stay: 'Duration of posting/employment', work: 'Work for agency only', condition: 'Ceases if employment ends' },
                  { stream: 'Domestic Worker (Diplomatic)', stay: 'Duration of diplomat\'s posting', work: 'Work for sponsoring diplomat only', condition: 'Cannot change employer freely' },
                  { stream: 'Privileges and Immunities', stay: 'Duration of appointment', work: 'Work for organisation only', condition: 'Organisation must remain approved' },
                  { stream: 'PALM', stay: 'Up to 4 years (long-term); seasonal for short-term', work: 'Work for approved PALM employer only', condition: 'Employer must maintain PALM approval' },
                ].map((row, i) => (
                  <tr key={row.stream} style={{ background: i % 2 === 0 ? '#fff' : GREY_BG, borderBottom: `1px solid ${BORDER}` }}>
                    <td style={{ padding: '13px 16px', color: NAVY, fontWeight: 600 }}>{row.stream}</td>
                    <td style={{ padding: '13px 16px', color: '#374151' }}>{row.stay}</td>
                    <td style={{ padding: '13px 16px', color: '#374151' }}>{row.work}</td>
                    <td style={{ padding: '13px 16px', color: '#374151', fontSize: 12 }}>{row.condition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: '#6b7280', marginTop: 12, fontStyle: 'italic' }}>
            Figures current at {CURRENT_AS_AT} — confirm current conditions and stay periods on the Department of Home Affairs website before lodging.
          </p>
        </div>
      </section>

      {/* ── Application process ───────────────────────────────────── */}
      <section id="process" style={{ padding: '64px 32px 56px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="How to apply" title="Application Process" />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: '64px 32px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Subclass 403 Questions Answered" />
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
        title="Unsure which 403 stream applies? Seek advice before lodging."
        body="The five streams of the subclass 403 have different sponsors, requirements, and conditions. Nanak Migration Group (MARN 2619467) can identify the correct stream and guide preparation. No outcome can be guaranteed."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
