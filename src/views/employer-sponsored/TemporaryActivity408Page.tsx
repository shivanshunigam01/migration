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
  { id: 'streams', label: 'Activity streams' },
  { id: 'sponsor', label: 'When sponsor needed' },
  { id: 'stay', label: 'Stay lengths' },
  { id: 'conditions', label: 'Conditions' },
  { id: 'fees', label: 'Fees' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'layers', value: '7 streams', label: 'Broad activity coverage — one visa, multiple purposes', note: 'The 408 covers entertainment, sport, research, religious work, invited participants, exchange arrangements, and Australian-government-endorsed activities.' },
  { icon: 'clock', value: 'Up to 2 years', label: 'Maximum stay (varies by stream)', note: 'Stay length depends on the activity stream. Some streams allow up to 2 years; others are limited to the duration of the specific event or engagement.' },
  { icon: 'building', value: 'Sponsor required', label: 'Stays over 3 months generally require an approved sponsor', note: 'Short-term activities (under 3 months) may not require a sponsor. Activities exceeding 3 months, or where the stream requires it, need an approved temporary activities sponsor.' },
  { icon: 'dollar', value: 'Modest charge', label: 'Application charge — confirm current fee on DoHA', note: 'Figures current at August 2026 — confirm on the Department of Home Affairs website before lodging.' },
]

const STREAMS = [
  {
    title: 'Stream 1 — Invited participant in events or programs (Non-ongoing)',
    desc: 'For people invited to participate in events, programs, or activities of national significance or benefit to Australia — for example, academic conferences, business forums, or cultural events. The participant is invited by an Australian organisation but is not employed by them. Generally suitable for short stays.',
  },
  {
    title: 'Stream 2 — Research activities',
    desc: 'For individuals coming to Australia to conduct research with an Australian institution — universities, research organisations, and government agencies. The research must be collaborative or hosted by the Australian institution. Stays can be up to 2 years depending on the research program. A sponsoring institution is generally required.',
  },
  {
    title: 'Stream 3 — Religious or pastoral work',
    desc: 'For ministers of religion, members of a religious order, and others undertaking religious or pastoral activities in Australia — for example, priests, rabbis, imams, monks, or nuns coming to serve an Australian congregation or undertake a religious placement. Sponsor required.',
  },
  {
    title: 'Stream 4 — Entertainment work',
    desc: 'For entertainers — performers, musicians, actors, and production crew — coming to Australia to participate in specific entertainment engagements. Covers individual performers and large touring productions. Conditions vary depending on whether the performer is a principal performer or support crew.',
  },
  {
    title: 'Stream 5 — Sport and related activities',
    desc: 'For athletes, coaches, support staff, and officials coming to Australia to participate in specific sporting events or competitions. Also covers sports support activities such as training camps, qualifying events, and official competitions. Stay limited to the duration of the sporting activity.',
  },
  {
    title: 'Stream 6 — Exchange or reciprocal arrangements',
    desc: 'For people participating in approved exchange programs or reciprocal arrangements between Australian and overseas organisations — educational, cultural, or professional exchanges. Stay is tied to the approved exchange program duration.',
  },
  {
    title: 'Stream 7 — Australian-government-endorsed events or activities',
    desc: 'For people coming to Australia to participate in activities or events formally endorsed by the Australian government. Includes cultural, academic, diplomatic, and development programs supported by Australian government funding or policy objectives.',
  },
]

const STAY_ROWS = [
  { stream: 'Invited participant', stay: 'Typically up to 3 months (varies by event)' },
  { stream: 'Research activities', stay: 'Up to 2 years' },
  { stream: 'Religious or pastoral work', stay: 'Up to 2 years (typically 12 months initially)' },
  { stream: 'Entertainment work', stay: 'Duration of the engagement (typically up to 12 months)' },
  { stream: 'Sport and related', stay: 'Duration of the sporting activity (typically weeks to months)' },
  { stream: 'Exchange or reciprocal', stay: 'Duration of the exchange program (up to 2 years)' },
  { stream: 'Australian-government-endorsed', stay: 'Duration of the approved program (up to 2 years)' },
]

const FAQ: FaqItem[] = [
  {
    question: 'Can I work while on a subclass 408 visa?',
    answer: "It depends on the stream. Some streams allow remuneration directly related to the approved activity — for example, an entertainer can be paid for their performances, an athlete for competition participation, and a religious worker may receive a stipend. However, working outside the approved activity or taking on general employment is not permitted. Check the conditions on your visa grant notice carefully.",
  },
  {
    question: 'How is the subclass 408 different from the subclass 407?',
    answer: 'The 407 is specifically for occupational training — structured skill development in a workplace or formal training program. The 408 covers a broader range of temporary activities: entertainment, sport, research, religious work, exchange arrangements, and government-endorsed events. If the purpose is to undergo training in an occupation, the 407 is the correct visa. If the purpose is to perform, compete, research, or participate in a specific event or program, the 408 is likely more appropriate.',
  },
  {
    question: 'Do I need a sponsor for a short entertainment engagement?',
    answer: 'For very short stays — typically up to 3 months — a sponsor may not be required for some entertainment engagements. However, the specific requirements vary depending on the stream and circumstances. For stays beyond 3 months, or for streams that always require a sponsor (such as religious work), an approved temporary activities sponsor must nominate the applicant. Nanak Migration Group (MARN 2619467) can advise on whether a sponsor is needed for your specific situation.',
  },
  {
    question: 'Can a researcher apply for the 408 without an Australian host institution?',
    answer: 'Generally, no. The research activities stream of the 408 is designed for people who are coming to Australia to conduct research with or at an Australian institution — a university, government research body, or approved research organisation. Independent research without an Australian host does not generally fit the stream. The host institution is typically required to nominate and sponsor the researcher.',
  },
  {
    question: 'Can I convert a subclass 408 to a work visa while in Australia?',
    answer: "Possibly — but it depends on the visa you hold and the visa you want to apply for. Not all visas can be applied for onshore, and some applicants may be subject to the section 48 bar if a previous visa was refused. If you hold a valid substantive visa (including a 408) and meet the eligibility requirements for another visa, you may be able to apply from inside Australia. Seek migration agent advice before attempting to change status onshore.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Training Visa (407)', desc: 'Structured occupational training in an Australian workplace — up to 2 years.', icon: 'star', page: 'training-visa-407', color: ACCENT },
  { title: 'Short Stay Specialist (400)', desc: 'Highly specialised non-ongoing work — typically up to 3 months, no sponsorship.', icon: 'clock', page: 'short-stay-specialist-400', color: ACCENT },
  { title: 'Skills in Demand (482)', desc: 'The standard employer-sponsored temporary work visa — for ongoing positions.', icon: 'briefcase', page: 'skills-in-demand-visa', color: ACCENT },
  { title: 'Employer Sponsored Visas', desc: 'Overview of all employer sponsorship pathways.', icon: 'arrowright', page: 'employer-sponsored-visas', color: ACCENT },
]

export default function TemporaryActivity408Page({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: 'Temporary Activity Visa (408)', url: 'https://www.nanakmigration.com.au/temporary-activity-408' },
        ]}
        faqs={FAQ}
        service={{ name: 'Temporary Activity Visa Subclass 408', description: PAGE_META['temporary-activity-408'].metaDescription, url: 'https://www.nanakmigration.com.au/temporary-activity-408' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Employer Sponsored Visas', page: 'employer-sponsored-visas' },
        { label: 'Temporary Activity Visa (408)' },
      ]} />
      <PageHero
        variant="standard"
        eyebrow="Employer Sponsored"
        eyebrowSub="Temporary Activity · Subclass 408"
        title={<>Temporary Activity Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 408</em></>}
        deck="The Temporary Activity visa (subclass 408) covers a wide range of short-term activities in Australia — from entertainment and sport to research, religious work, and government-endorsed events. Stay lengths and sponsor requirements vary by activity stream."
        shortAnswer={<>The subclass 408 Temporary Activity visa is a broad temporary visa covering multiple activity streams. Streams include: invited participant in events or programs, research activities, religious or pastoral work, entertainment work, sport and related activities, exchange or reciprocal arrangements, and Australian-government-endorsed events or activities. Stays over 3 months generally require nomination by an approved temporary activities sponsor. Stay lengths vary by stream from a few months up to 2 years. Visa conditions are tied to the approved activity. Nanak Migration Group (MARN 2619467) can advise on which stream applies to a specific situation. This information is general guidance only and does not constitute advice specific to your circumstances.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Training Visa (407) →', page: 'training-visa-407' }}
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
          <SectionHeading kicker="What it is" title="The Subclass 408 Temporary Activity Visa" accent={ACCENT} />
          <p style={{ fontSize: 16, lineHeight: 1.75, color: '#374151', marginBottom: 20 }}>
            The subclass 408 Temporary Activity visa is a broad temporary visa that replaced a number of activity-specific visas. It is designed for people who want to come to Australia for a defined, temporary activity — not for ongoing employment or training. The visa is structured around activity streams, and eligibility depends on which stream applies to the specific activity.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: '#374151' }}>
            Unlike the subclass 482 Skills in Demand visa, the 408 is not an employment visa. However, some streams — particularly entertainment, sport, and religious work — do allow limited remuneration or incidental work related to the approved activity. The conditions vary by stream and are specified in the visa grant.
          </p>
        </div>
      </section>

      {/* Activity Streams */}
      <section id="streams" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Activity categories" title="The Seven Main Activity Streams" accent={ACCENT} />
          <div style={{ marginTop: 40 }}>
            {STREAMS.map((stream, i) => (
              <div
                key={i}
                style={{ borderLeft: `4px solid ${ACCENT}`, background: '#fafbfe', borderRadius: 8, padding: 20, marginBottom: 16 }}
              >
                <div style={{ fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 8 }}>{stream.title}</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.7 }}>{stream.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Requirements */}
      <section id="sponsor" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="When you need a sponsor" title="Sponsorship Requirements for the 408" accent={ACCENT} />
          <p style={{ fontSize: 16, lineHeight: 1.75, color: '#374151', marginBottom: 28 }}>
            Whether a sponsor is required depends on the activity stream and the length of stay. The general rule is:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 6 }}>Short stays without a sponsor (generally up to 3 months)</div>
              <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>
                Some streams allow people to apply without a nominated sponsor for short stays — for example, an overseas performer coming to Australia for a 2-month tour may not need an approved sponsor if their stay is within the relevant threshold. The specific rules vary by stream — confirm on the DoHA website.
              </div>
            </div>
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 6 }}>Sponsor required for stays over 3 months</div>
              <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>
                Where the activity will last more than 3 months, an approved temporary activities sponsor must nominate the applicant. The sponsor is typically the Australian organisation hosting, employing (in a limited sense), or overseeing the activity.
              </div>
            </div>
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 6 }}>Sponsor always required for certain streams</div>
              <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>
                Some streams — particularly religious work and research — generally require a sponsor regardless of the stay length. The sponsoring organisation must be approved and must nominate the applicant for the specific activity.
              </div>
            </div>
          </div>
          <div style={{ marginTop: 32 }}>
            <Callout variant="note" panel={true} title="Sponsorship approval takes time — plan ahead">
              If a sponsor is needed, allow time for the organisation to apply for and receive approval as a temporary activities sponsor before the visa application can be lodged. Processing times for sponsor approval vary. Nanak Migration Group (MARN 2619467) can advise on the sponsorship process.
            </Callout>
          </div>
        </div>
      </section>

      {/* Stay Lengths */}
      <section id="stay" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Duration" title="Stay Lengths by Activity Stream" accent={ACCENT} />
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: 'hidden', marginTop: 32 }}>
            {STAY_ROWS.map((row, i) => (
              <div
                key={i}
                style={{ display: 'flex', gap: 24, padding: '16px 24px', borderBottom: i < STAY_ROWS.length - 1 ? `1px solid ${BORDER}` : 'none', background: i % 2 === 0 ? '#fff' : GREY_BG }}
              >
                <div style={{ fontSize: 14, color: '#6b7280', minWidth: 240, fontWeight: 600 }}>{row.stream}</div>
                <div style={{ fontSize: 14, color: NAVY, flex: 1 }}>{row.stay}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Callout variant="note" panel={true} title="Confirm current stay limits on DoHA">
              Stay lengths for each stream are set in the Migration Regulations and may change. Always confirm the current limits for your specific stream on the Department of Home Affairs website before applying.
            </Callout>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section id="conditions" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Visa conditions" title="What the Subclass 408 Allows and Restricts" accent={ACCENT} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 36 }}>
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 10, padding: '24px 24px', background: GREY_BG }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#059669', marginBottom: 16 }}>Can do</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Undertake the specific approved activity in the approved stream',
                  'Some streams allow remuneration for the activity (entertainment, sport, religious stipends)',
                  'Travel in and out of Australia during the visa validity',
                  'Include dependent family members (stream-dependent — check DoHA)',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: '#374151', lineHeight: 1.6 }}>
                    <span style={{ color: '#059669', fontWeight: 700, fontSize: 16, lineHeight: '1.4', flexShrink: 0 }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 10, padding: '24px 24px', background: GREY_BG }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#dc2626', marginBottom: 16 }}>Cannot do</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Perform work outside the approved activity or stream',
                  'Use the visa as a substitute for an employment visa',
                  'Change to a different activity without approval',
                  'Undertake activities that belong in a different stream without a new visa',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: '#374151', lineHeight: 1.6 }}>
                    <span style={{ color: '#dc2626', fontWeight: 700, fontSize: 16, lineHeight: '1.4', flexShrink: 0 }}>&ndash;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Application charge" title="Visa Application Charge" accent={ACCENT} />
          <div style={{ marginTop: 32 }}>
            <Callout variant="note" panel={true} title="Confirm current fees on the Department of Home Affairs website">
              Visa application charges are set by the Department of Home Affairs and are updated periodically. The information below is current at August 2026 and should be confirmed before lodging.
            </Callout>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: '#374151', marginTop: 24 }}>
            The base application charge for the subclass 408 is modest (a few hundred Australian dollars for the primary applicant). Secondary applicant charges are lower. There is no SAF levy payable — the SAF levy applies to subclass 482 and 186 nominations only.
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
        title="Need help with a subclass 408 application?"
        body="Nanak Migration Group (MARN 2619467) can advise which 408 stream applies and whether a sponsor is needed for your specific activity."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
