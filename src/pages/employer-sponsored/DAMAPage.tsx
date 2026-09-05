import React from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_EMPLOYER } from '@/theme'
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
  { id: 'concessions', label: 'Concessions' },
  { id: 'two-stage', label: 'Two-stage process' },
  { id: 'regions', label: 'Current DAMA regions' },
  { id: 'pr-pathway', label: 'PR pathways' },
  { id: 'vs-standard', label: 'DAMA vs standard 482' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'mappin', value: 'Regional only', label: 'DAMAs are available only in designated regional areas', note: 'Each DAMA applies to a specific geographic area. Employers must be located in or operating in the designated area to access the DAMA concessions.' },
  { icon: 'check', value: 'Concessions', label: 'Salary, age, English, and broader occupation access', note: 'DAMA concessions vary by region. They can include salary below TSMIT, age up to 55, lower English requirements, and occupations at ANZSCO Skill Level 4 or 5.' },
  { icon: 'layers', value: 'Two stages', label: 'DAR endorsement first, then nomination and visa', note: 'The employer must first obtain endorsement from the regional Designated Area Representative (DAR) before nominating workers and lodging visa applications.' },
  { icon: 'shield', value: 'PR included', label: 'Many DAMAs now include a permanent residence pathway', note: 'Recent DAMAs include a direct PR stream — after 3 years of regional work, eligible workers can apply for permanent residence under the DAMA 186 LA stream.' },
]

const CONCESSIONS = [
  {
    title: 'Concession 1 — Lower salary threshold',
    desc: "Employers under a DAMA can pay sponsored workers below the standard Temporary Skilled Migration Income Threshold (TSMIT — $79,499 p.a. from 1 July 2026). The specific minimum salary varies by DAMA and occupation. This is particularly important for regional hospitality, tourism, and retail roles where award rates may fall below the standard TSMIT. Confirm current figures on the Department of Home Affairs website.",
  },
  {
    title: 'Concession 2 — Higher maximum age',
    desc: 'The standard 482 visa has an effective age limit (skills assessment requirements can create a practical limit of around 45 for most occupations). Many DAMAs allow sponsorship of workers up to age 55, expanding the pool of eligible overseas workers.',
  },
  {
    title: 'Concession 3 — Lower English requirements',
    desc: 'Some DAMAs allow lower English proficiency than the standard 482 requirements — for example, IELTS 4.5 overall instead of 5.0, or Vocational English instead of Competent English. The specific English concession varies by DAMA and occupation.',
  },
  {
    title: 'Concession 4 — Broader occupation lists',
    desc: "DAMAs can include occupations not on the Core Skills Occupation List (CSOL) — particularly ANZSCO Skill Level 4 and 5 occupations such as food preparation assistants, hospitality workers, sales assistants, aged care workers (where other pathways are unavailable), and agricultural workers. The eligible occupations are listed in each DAMA.",
  },
  {
    title: 'Concession 5 — Pathway to permanent residence',
    desc: 'Many newer DAMAs include a permanent residence stream — typically available to workers who have worked in the designated area for 3 years and meet the skills and English requirements for the DAMA 186 Labour Agreement stream. This makes DAMA an attractive pathway for both workers and employers who want long-term retention.',
  },
]

const STEPS: TimelineStep[] = [
  {
    title: 'Stage 1 — Employer obtains DAR endorsement',
    desc: 'The employer applies to the Designated Area Representative (DAR) for endorsement under the DAMA. The DAR assesses whether the employer genuinely needs to access the DAMA, has attempted to recruit locally, and meets the requirements of the agreement. Endorsement requirements vary by DAR — some require evidence of local recruitment efforts (LMT-equivalent), financial health checks, and commitment to training Australian workers.',
  },
  {
    title: 'Stage 1 outcome — Endorsed employer',
    desc: 'If the DAR is satisfied, it endorses the employer and issues an endorsement letter. This letter is required for the next stage. Some DARs have waiting lists or intake periods — timing should be confirmed with the relevant DAR.',
  },
  {
    title: 'Stage 2 — Nomination and visa application',
    desc: 'With DAR endorsement in hand, the employer nominates the overseas worker under the DAMA. The nomination is assessed by the Department of Home Affairs — they check that the proposed worker meets the DAMA occupation requirements and the agreed concessions apply. The worker then applies for the relevant visa (typically a 482 under the Labour Agreement stream or a 186 LA stream for permanent residence).',
  },
  {
    title: 'Visa grant and regional work requirement',
    desc: 'Once the visa is granted, the worker must work in the designated area as required by the visa conditions. For the permanent residence pathway, the worker must generally live and work in the designated area for the required period (typically 3 years) before applying for the 186 PR grant.',
  },
]

const REGIONS = [
  {
    name: 'Northern Territory DAMA',
    dar: 'Northern Territory Government (DAR)',
    desc: 'Covers the widest range of concessions and occupations of all DAMAs. Covers all geographic areas of the NT. Includes occupations in hospitality, tourism, construction, retail, and other sectors. PR pathway available.',
  },
  {
    name: 'South Australian DAMA',
    dar: 'South Australia Government',
    desc: 'Covers a broad range of regional and some metropolitan areas in South Australia. Occupations in aged care, hospitality, retail, and other sectors. PR pathway available.',
  },
  {
    name: 'Far North Queensland DAMA',
    dar: 'Queensland Government (for the Far North Queensland region)',
    desc: 'Covers the Cairns and Far North Queensland area. Focus on tourism, hospitality, and regional services. PR pathway available.',
  },
  {
    name: 'Goldfields-Esperance (Western Australia) DAMA',
    dar: 'Goldfields-Esperance Development Commission (DAR)',
    desc: 'Covers the Goldfields-Esperance region of WA. Focus on mining services, transport, hospitality, and regional services.',
  },
  {
    name: 'Orana (NSW) DAMA',
    dar: 'Orana Regional Development Australia',
    desc: 'Covers the Orana region of New South Wales (centred on Dubbo). Focus on agriculture, hospitality, and regional services.',
  },
  {
    name: 'Pilbara (Western Australia) DAMA',
    dar: 'Pilbara Development Commission',
    desc: 'Covers the Pilbara region of WA. Focus on the resources sector, hospitality, and regional services.',
  },
  {
    name: 'Townsville (Queensland) DAMA',
    dar: 'Townsville City Council (DAR)',
    desc: 'Covers the Townsville area of Queensland. Focus on defence industries, healthcare, hospitality, and regional services.',
  },
]

const COMPARISON_ROWS = [
  { feature: 'Occupation eligibility', standard482: 'CSOL (Skill Levels 1–3)', dama: 'Extended list incl. Skill Level 4–5' },
  { feature: 'Salary requirement', standard482: 'TSMIT ($79,499+ p.a. 2026)', dama: 'Below TSMIT possible (DAMA-specific)' },
  { feature: 'Maximum age', standard482: 'Practical limit ~45 via skills assessment', dama: 'Up to 55 in most DAMAs' },
  { feature: 'English requirement', standard482: 'Competent English (IELTS 6.0 equivalent)', dama: 'Lower levels in some DAMAs' },
  { feature: 'Geographic restriction', standard482: 'None', dama: 'Must be in designated area' },
  { feature: 'PR pathway', standard482: 'Via 186 TRT after 2+ years', dama: 'Direct 186 LA stream after ~3 years' },
  { feature: 'Employer SBS required', standard482: 'Yes (Standard Business Sponsor)', dama: 'Via DAMA endorsement (different process)' },
  { feature: 'Processing timeline', standard482: 'SBS + nomination: 2–6 months', dama: 'DAR endorsement + nomination: 4–12+ months' },
]

const FAQ: FaqItem[] = [
  {
    question: 'Can a small regional business access a DAMA?',
    answer: 'Yes. DAMAs are specifically designed to help regional employers of all sizes — including small businesses in regional Australia — who cannot fill positions through standard 482 sponsorship. The DAR endorsement process may require evidence that the employer is financially viable, has attempted local recruitment, and can support the sponsored worker. Small businesses should contact their relevant DAR early in the process to understand the endorsement requirements.',
  },
  {
    question: 'How long does the DAMA endorsement process take?',
    answer: "The time for DAR endorsement varies significantly between regions. Some DARs process endorsements within weeks; others have intake rounds or waiting periods that can extend to months. The subsequent nomination and visa application processing by the Department of Home Affairs adds additional time. Employers considering a DAMA should begin the process early — well before they need the worker on-site.",
  },
  {
    question: 'What occupations are available under a DAMA?',
    answer: "The eligible occupations vary by DAMA. Most DAMAs include occupations at ANZSCO Skill Levels 1–3 (the same as the standard 482) plus additional lower-skill occupations specific to the region's labour needs — such as food preparation assistants, hospitality workers, retail assistants, and agricultural workers. The full occupation list for each DAMA is published by the Department of Home Affairs and the relevant DAR.",
  },
  {
    question: 'Do I need to attempt Labour Market Testing before a DAMA?',
    answer: 'Formal LMT as required under the standard 482 is generally not a prerequisite for DAMA endorsement — however, most DARs require evidence that the employer has genuinely attempted to recruit locally before seeking overseas workers. This may include advertising records, evidence of unsuccessful recruitment, and a genuine-need statement. The specific requirements vary by DAR.',
  },
  {
    question: 'Can a worker sponsored under a DAMA move to a different employer or region?',
    answer: "Generally, no — at least not while on the initial DAMA-sponsored visa. The visa conditions tie the worker to the approved employer and the designated area. Moving to a different employer or leaving the designated area can breach the visa conditions. If the worker wants to change employers, a new nomination (and potentially a new DAR endorsement) is required. Moving out of the designated area is generally not permitted while on the DAMA-sponsored visa.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Labour Agreements', desc: 'The broader Labour Agreement framework — company-specific, industry, on-hire and DAMA agreements.', icon: 'layers', page: 'labour-agreements', color: ACCENT },
  { title: '494 Regional Employer Sponsored', desc: 'An alternative regional sponsorship pathway — no Labour Agreement required.', icon: 'mappin', page: '494-visa', color: ACCENT },
  { title: 'Skills in Demand (482)', desc: 'The standard employer-sponsored temporary work visa — for non-regional positions.', icon: 'briefcase', page: 'skills-in-demand-visa', color: ACCENT },
  { title: 'Employer Nomination Scheme (186)', desc: 'Permanent employer-sponsored residence — available under DAMA LA stream.', icon: 'award', page: 'employer-nomination-scheme', color: ACCENT },
]

export default function DAMAPage({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: 'Designated Area Migration Agreements (DAMA)', url: 'https://www.nanakmigration.com.au/dama' },
        ]}
        faqs={FAQ}
        service={{ name: 'Designated Area Migration Agreements (DAMA)', description: PAGE_META['dama'].metaDescription, url: 'https://www.nanakmigration.com.au/dama' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Employer Sponsored Visas', page: 'employer-sponsored-visas' },
        { label: 'DAMA' },
      ]} />
      <PageHero
        variant="standard"
        eyebrow="Employer Sponsored"
        eyebrowSub="Labour Agreements · Support Guide"
        title={<>Designated Area Migration Agreements<br /><em style={{ fontStyle: 'italic', color: GOLD }}>DAMA</em></>}
        deck="Designated Area Migration Agreements (DAMAs) allow employers in specific regional areas to access visa concessions — on salary, age, English, and occupation eligibility — that are not available under the standard subclass 482 pathway. A two-stage process applies: regional endorsement first, then nomination and visa."
        shortAnswer={<>DAMAs are region-specific Labour Agreements negotiated between the Australian Government and regional authorities (called Designated Area Representatives, or DARs). Each DAMA sets out concessions available to employers in that designated area — including salary below the standard TSMIT, higher age limits (e.g. up to 55), lower English requirements, and access to occupations not on the standard CSOL. The DAMA process is two-stage — first the employer must obtain endorsement from the regional DAR (typically a state or territory government or local council body), then they can nominate workers and the worker applies for a visa (typically a 482 or 186 under the Labour Agreement stream). Many DAMAs now include pathways to permanent residence. Nanak Migration Group (MARN 2619467) can advise on whether a DAMA is available in your area and whether you meet the requirements. This information is general guidance only and does not constitute advice specific to your circumstances.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Labour Agreements →', page: 'labour-agreements' }}
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

      {/* Overview / Key Facts */}
      <div id="overview">
        <KeyFactsStrip facts={KEY_FACTS} accent={ACCENT} />
      </div>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What it is" title="What Is a DAMA?" accent={ACCENT} />
          <p style={{ fontSize: 16, lineHeight: 1.75, color: '#374151', marginBottom: 20 }}>
            A Designated Area Migration Agreement (DAMA) is a type of Labour Agreement between the Australian Government and a regional authority. Each DAMA is negotiated to address the specific labour needs of a particular geographic region. DAMAs allow employers in the designated area to sponsor overseas workers in occupations and under conditions that would not be available under the standard subclass 482 Skills in Demand visa pathway.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: '#374151', marginBottom: 20 }}>
            The Designated Area Representative (DAR) for each region — typically a state or territory government department, a local council, or a regional development organisation — negotiates the DAMA with the Commonwealth Government. The DAR is also responsible for endorsing individual employers who want to access the agreement. Without DAR endorsement, an employer cannot access the DAMA, even if they are located in the designated area.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: '#374151', marginBottom: 32 }}>
            DAMAs were introduced to help regional employers who genuinely cannot find local workers to fill positions — particularly in industries like hospitality, tourism, aged care, agriculture, and retail trade. They provide a more flexible pathway than standard employer sponsorship, with concessions tailored to the regional labour market.
          </p>
          <Callout variant="note" panel={true} title="DAMA regions and their terms change — always confirm current status">
            The list of active DAMA regions, the concessions available in each region, and the DAR contact details are updated by the Department. Always confirm the current status of a specific DAMA region on the Department of Home Affairs website or through the relevant DAR before initiating the endorsement process.
          </Callout>
        </div>
      </section>

      {/* Concessions */}
      <section id="concessions" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="What DAMAs offer" title="DAMA Concessions Explained" accent={ACCENT} />
          <p style={{ fontSize: 16, lineHeight: 1.75, color: '#374151', marginBottom: 32, marginTop: 16 }}>
            Each DAMA negotiates its own set of concessions, but the common concessions available in most DAMAs include:
          </p>
          <div>
            {CONCESSIONS.map((item, i) => (
              <div
                key={i}
                style={{ borderLeft: `4px solid ${ACCENT}`, background: '#fafbfe', borderRadius: 8, padding: 20, marginBottom: 14 }}
              >
                <div style={{ fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Stage Process */}
      <section id="two-stage" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="How it works" title="The Two-Stage DAMA Process" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* Current DAMA Regions */}
      <section id="regions" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Where they operate" title="Current DAMA Regions" accent={ACCENT} />
          <div style={{ marginBottom: 32, marginTop: 16 }}>
            <Callout variant="note" panel={true} title="The DAMA list changes — confirm current regions on DoHA">
              New DAMAs are negotiated periodically. Existing DAMAs may be renewed, expanded, or lapse. The list below reflects known active DAMAs as at August 2026. Confirm the current status of each DAMA region on the Department of Home Affairs website or by contacting the relevant DAR.
            </Callout>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
            {REGIONS.map((region, i) => (
              <div
                key={i}
                style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 10, padding: 20 }}
              >
                <div style={{ fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 6 }}>{region.name}</div>
                <div style={{ fontSize: 13, color: ACCENT, fontWeight: 600, marginBottom: 10 }}>{region.dar}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{region.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PR Pathway */}
      <section id="pr-pathway" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Permanent residence" title="PR Pathways Under a DAMA" accent={ACCENT} />
          <p style={{ fontSize: 16, lineHeight: 1.75, color: '#374151', marginBottom: 20, marginTop: 16 }}>
            One of the most significant recent developments in the DAMA framework is the inclusion of direct permanent residence pathways in most current DAMAs. This was a significant improvement over earlier DAMAs, which typically only provided temporary sponsorship.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: '#374151', marginBottom: 32 }}>
            The DAMA PR pathway typically works as follows:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                num: 1,
                heading: 'Step 1 — Temporary DAMA sponsorship (3 years)',
                desc: "Work in the designated area under the DAMA-sponsored 482 visa for the required period (typically 3 years). During this period, the worker must work in the approved occupation and location.",
              },
              {
                num: 2,
                heading: 'Step 2 — Skills and English assessment for PR',
                desc: 'Meet the English and skills requirements for the 186 Employer Nomination Scheme under the Labour Agreement (LA) stream. Some DAMAs have specific English thresholds for the PR stream that differ from the temporary stream.',
              },
              {
                num: 3,
                heading: 'Step 3 — Apply for 186 LA PR',
                desc: "The employer nominates the worker for the 186 Labour Agreement stream (permanent). The worker applies for the 186 visa grant. On grant, the worker becomes a permanent resident.",
              },
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '20px 24px', background: GREY_BG }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: ACCENT, color: '#fff', fontWeight: 700, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {step.num}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 6 }}>{step.heading}</div>
                  <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Callout variant="note" panel={true} title="PR pathway conditions vary by DAMA">
              The specific requirements for the PR pathway — including the minimum stay period, English requirements, and eligible occupations — vary between DAMAs. Not all DAMA occupations qualify for the PR stream. Confirm the PR pathway conditions for your specific DAMA with the relevant DAR or a registered migration agent.
            </Callout>
          </div>
        </div>
      </section>

      {/* DAMA vs Standard 482 */}
      <section id="vs-standard" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading kicker="Comparison" title="DAMA vs Standard 482 Sponsorship" accent={ACCENT} />
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: 'hidden', marginTop: 36 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '14px 20px', background: ACCENT, color: '#fff', fontWeight: 700, fontSize: 13, gap: 16 }}>
              <div>Feature</div>
              <div>Standard 482</div>
              <div>DAMA</div>
            </div>
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={i}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '14px 20px', borderBottom: i < COMPARISON_ROWS.length - 1 ? `1px solid ${BORDER}` : 'none', background: i % 2 === 0 ? '#fff' : GREY_BG, gap: 16 }}
              >
                <div style={{ fontSize: 14, fontWeight: 600, color: NAVY }}>{row.feature}</div>
                <div style={{ fontSize: 14, color: '#374151' }}>{row.standard482}</div>
                <div style={{ fontSize: 14, color: '#374151' }}>{row.dama}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: '#6b7280', marginTop: 14, fontStyle: 'italic' }}>
            Figures current at August 2026 — confirm on the Department of Home Affairs website before lodging.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="See also" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand
        title="Is a DAMA available in your region?"
        body="Nanak Migration Group (MARN 2619467) can check whether a DAMA applies to your area and advise on whether the concessions suit your workforce needs."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
