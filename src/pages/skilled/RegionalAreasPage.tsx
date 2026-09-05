import React from 'react'
import { GOLD, NAVY, NAVY_DARK } from '@/theme'
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

const CURRENT_AS_AT = 'August 2026'
const ACCENT = NAVY
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'what-is-regional', label: 'What is regional?' },
  { id: 'categories', label: 'Area categories' },
  { id: 'benefits', label: 'Benefits of regional' },
  { id: 'living-working', label: 'Living & working requirements' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  { icon: 'mappin', value: 'Most of Australia', label: 'Designated regional area scope', note: 'Regional areas exclude only the Sydney, Melbourne, and Brisbane metropolitan areas. Most of Australia qualifies.' },
  { icon: 'flag', value: '+15 points', label: 'Points bonus for 491 regional nomination', note: 'Candidates nominated for a 491 visa via regional nomination receive 15 additional points — a significant advantage in competitive rounds.' },
  { icon: 'briefcase', value: '3 years', label: 'Regional living requirement for 191 PR', note: 'Subclass 491 and 494 holders must live and work in a regional area for 3 years before applying for the subclass 191 permanent residence visa.' },
  { icon: 'layers', value: 'DAMA access', label: 'Designated Area Migration Agreements', note: 'Some regional areas have DAMAs that allow sponsorship of occupations not available under standard 482 or 186 pathways.' },
]

const FAQ: FaqItem[] = [
  {
    question: 'Is the Gold Coast a designated regional area?',
    answer: "Yes. Despite being a large city with over 700,000 residents, the Gold Coast is within Queensland's designated regional area for immigration purposes — it is not in the Brisbane metropolitan exclusion zone. The same is true of the Sunshine Coast. Always confirm via the Department of Home Affairs postcode checker for your specific suburb or postcode, as boundaries can change.",
  },
  {
    question: 'Can I work in Melbourne while living in a regional area?',
    answer: "No. Both the 491 and 494 visas require you to live AND work in a designated regional area. Commuting to Melbourne for work while residing in a regional town (e.g. Geelong, which is also excluded from Melbourne metropolitan for some purposes) does not satisfy the regional working requirement for visa purposes. Check your specific visa condition wording.",
  },
  {
    question: 'Does Canberra (ACT) count as regional?',
    answer: "Yes. The Australian Capital Territory, including Canberra, is a designated regional area for Australian immigration purposes. This surprises many applicants, as Canberra is the national capital and a large city. The regional status of the ACT means that 491 state/territory nomination (from the ACT government), 494 sponsorship, and the 191 PR pathway are all accessible to workers in the ACT.",
  },
  {
    question: 'What records should I keep to evidence regional living?',
    answer: "Maintain contemporaneous records of your residential address and employment location during your regional period. Useful documents include: lease agreements or property ownership records showing a regional address; utility bills in your name at a regional address; payslips and employer letters confirming work location; and local council or community records if available. Travel records (entry and exit stamps or records from the Australian Border Force) are also relevant.",
  },
  {
    question: 'Do I need to stay in the same regional area for three years?',
    answer: "No. You can move between designated regional areas during your qualifying period — for example, from regional Queensland to regional Victoria. What matters is that you continue to live and work in a designated regional area (not in an excluded metropolitan area). If you move to a new employer in the same regional area (for 491 holders), this is generally permitted. For 494 holders, a job change requires a new employer nomination.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Skilled Work Regional (491)', desc: 'Points-tested regional provisional visa — 15-point boost for regional nomination.', icon: 'mappin', page: 'skilled-work-regional-491', color: NAVY },
  { title: '494 Regional Employer Sponsored', desc: '5-year provisional regional visa for employer-sponsored workers.', icon: 'briefcase', page: '494-visa', color: NAVY },
  { title: '191 Permanent Residence (Skilled Regional)', desc: 'PR after 3 years regional living — for 491 and 494 holders.', icon: 'shield', page: '191-visa', color: NAVY },
  { title: 'State Nomination Requirements', desc: 'Each state sets its own occupation lists and criteria for 190 and 491 nomination.', icon: 'flag', page: 'state-nomination', color: NAVY },
]

/* ─── Benefit card data ─── */
const BENEFITS = [
  {
    icon: 'hash',
    heading: '+15 points for 491 nomination',
    body: 'State and territory nomination for the subclass 491 adds 15 points to your SkillSelect score. This can be the difference between receiving an invitation and waiting indefinitely in the pool, especially for applicants in the 80-90 point range.',
  },
  {
    icon: 'layers',
    heading: 'Regional Occupation List (ROL) access',
    body: 'The 494 and some 491 pathways use the Regional Occupation List, which includes occupations not available on the Core Skills Occupation List for the 482. This opens employer-sponsored pathways for some healthcare, trade, and hospitality occupations not available through standard metropolitan sponsorship.',
  },
  {
    icon: 'shield',
    heading: 'Pathway to permanent residence via 191',
    body: 'The subclass 191 Permanent Residence (Skilled Regional) visa is available after 3 years of regional living and working on a 491 or 494 visa. This is a direct permanent residence pathway that does not require re-competing in the points system.',
  },
  {
    icon: 'star',
    heading: 'Designated Area Migration Agreement (DAMA) access',
    body: 'Many regional areas have DAMAs — negotiated agreements between regional governments and the Australian Government that allow sponsorship of workers in occupations and at salary levels not available under standard 482 or 186 pathways. DAMAs are particularly used in hospitality, primary industries, and small business.',
  },
  {
    icon: 'dollar',
    heading: 'Regional study bonus points',
    body: 'Students who complete at least two academic years of study at an Australian institution in a designated regional area may be eligible for additional points under the regional study component of the points test. This incentivises regional study as a path to a more competitive EOI score.',
  },
]

/* ─── Obligation card data ─── */
const OBLIGATIONS = [
  {
    heading: 'Must reside in a designated regional area',
    body: 'Both the 491 and 494 require you to actually live in a designated regional area. This means your primary residence — not just a postal address. Living in a metropolitan area while maintaining a regional mailing address does not satisfy the requirement.',
  },
  {
    heading: 'Must work in a designated regional area',
    body: 'For the 494, you must also work in a designated regional area and for your sponsoring employer. For the 491, you must work in a regional area, but you are not tied to a specific employer. Both visas prohibit relocating your work to an excluded metropolitan area.',
  },
  {
    heading: 'Three-year qualifying period for 191 PR',
    body: 'To apply for the subclass 191, you must have lived and worked in a designated regional area for at least three years while holding the 491 or 494. The three years do not need to be continuous, but periods outside a regional area generally do not count.',
  },
  {
    heading: 'Time outside Australia',
    body: 'Extended absences from Australia generally do not count toward the three-year qualifying period. Maintain records of your entries and exits and minimise long overseas stays during the qualifying period.',
  },
]

export default function RegionalAreasPage({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Skilled Migration', url: 'https://www.nanakmigration.com.au/skilled-migration' },
          { name: 'Designated Regional Areas', url: 'https://www.nanakmigration.com.au/regional-areas' },
        ]}
        faqs={FAQ}
        service={{ name: 'Designated Regional Areas — Australian Visa Pathways', description: PAGE_META['regional-areas'].metaDescription, url: 'https://www.nanakmigration.com.au/regional-areas' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Skilled Migration', page: 'skilled-migration' },
        { label: 'Designated Regional Areas' },
      ]} />
      <PageHero
        variant="standard"
        eyebrow="Skilled Migration"
        eyebrowSub="Regional Visa Pathways · Area Definitions"
        title={<>Designated Regional Areas<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Where Regional Visa Pathways Apply</em></>}
        deck="Several Australian visa pathways — including the subclass 491, 494, and 191 — require the applicant to live and work in a designated regional area. Understanding which locations qualify, and what obligations apply, is essential before choosing a regional visa pathway."
        shortAnswer={<>A <strong style={{ color: NAVY }}>designated regional area</strong> for Australian immigration purposes is broadly defined as anywhere in Australia except the Sydney, Melbourne, and Brisbane metropolitan areas. Almost all of regional, rural, and remote Australia qualifies, as do the Gold Coast, Hobart, Darwin, Canberra, and all of Western Australia, South Australia, Tasmania, and the Northern Territory. Postcode-based verification is available on the Department of Home Affairs website. Nanak Migration Group (MARN 2619467) can confirm whether a specific address qualifies as regional for the visa you are considering.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Skilled Work Regional (491) →', page: 'skilled-work-regional-491' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>

      {/* TOC bar */}
      <div style={{ borderTop: '1px solid #e8edf6', borderBottom: '1px solid #e8edf6', background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 4, overflowX: 'auto', scrollbarWidth: 'none' as const }}>
          {TOC.map(sec => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap' as const, borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = NAVY; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = NAVY }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>

      {/* Key facts */}
      <KeyFactsStrip facts={FACTS} accent={ACCENT} />

      {/* What is regional */}
      <section id="what-is-regional" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeading kicker="Definition" title="What Counts as a Designated Regional Area?" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, maxWidth: 740, marginBottom: 32 }}>
            The term "designated regional area" is defined in the Migration Regulations and is assessed by postcode. The definition covers all of Australia except specified metropolitan areas. The Department of Home Affairs publishes a postcode checker on its website that allows verification of any specific address.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
            {/* Included */}
            <div style={{ border: '2px solid #86efac', background: '#f0fdf4', borderRadius: 8, padding: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#166534', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon name="check" size={16} color="#16a34a" />
                Included — regional areas
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                {[
                  'All of Western Australia',
                  'All of South Australia',
                  'All of Tasmania',
                  'All of the Northern Territory',
                  'All of the Australian Capital Territory (including Canberra)',
                  'Queensland — all areas except Brisbane metropolitan',
                  'New South Wales — all areas except Sydney, Newcastle, and Wollongong metropolitan',
                  'Victoria — all areas except Melbourne metropolitan',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: 13.5, color: '#166534', lineHeight: 1.6, paddingLeft: 20, position: 'relative' as const }}>
                    <span style={{ position: 'absolute' as const, left: 0 }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Excluded */}
            <div style={{ border: '2px solid #fca5a5', background: '#fff5f5', borderRadius: 8, padding: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#991b1b', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon name="x" size={16} color="#dc2626" />
                Excluded — not regional
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                {[
                  'Sydney metropolitan area (NSW)',
                  'Melbourne metropolitan area (VIC)',
                  'Brisbane metropolitan area (QLD)',
                  'Newcastle metropolitan area (NSW)',
                  'Wollongong metropolitan area (NSW)',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: 13.5, color: '#991b1b', lineHeight: 1.6, paddingLeft: 20, position: 'relative' as const }}>
                    <span style={{ position: 'absolute' as const, left: 0 }}>-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Callout variant="note" panel={true} title="Gold Coast and Sunshine Coast are regional">
            Despite being large urban centres, the Gold Coast and Sunshine Coast are within the designated regional area for immigration purposes. Many applicants are surprised to learn that these cities — along with Darwin, Hobart, and Canberra — qualify as regional for visa purposes. Confirmation should always be via the Department's postcode checker for the specific addresses involved.
          </Callout>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeading kicker="Two tiers" title="Regional Area Categories for the 491 Visa" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, maxWidth: 740, marginBottom: 32 }}>
            Within the regional area definition, there are two categories relevant to state nomination and occupation access. The points bonus for regional nomination is the same regardless of which category applies.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {/* Category 1 */}
            <div style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderTop: `3px solid ${ACCENT}`, borderRadius: '0 0 14px 14px', padding: 24, boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
              <div style={{ display: 'inline-block', background: `${ACCENT}12`, border: `1px solid ${ACCENT}30`, borderRadius: 6, padding: '3px 10px', marginBottom: 14 }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: ACCENT }}>Category 1</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 10 }}>Cities and Major Regional Centres</div>
              <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                These are regional areas with populations broadly equivalent to larger cities. The 491 regional points bonus (15 points) applies to both categories — there is no points difference between the two categories. However, Category 1 areas may be subject to different state nomination occupation lists and requirements.
              </p>
            </div>
            {/* Category 2 */}
            <div style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderTop: `3px solid ${ACCENT}`, borderRadius: '0 0 14px 14px', padding: 24, boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
              <div style={{ display: 'inline-block', background: `${ACCENT}12`, border: `1px solid ${ACCENT}30`, borderRadius: 6, padding: '3px 10px', marginBottom: 14 }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: ACCENT }}>Category 2</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 10 }}>Regional Centres and Other Regional Areas</div>
              <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                Smaller regional centres and rural/remote areas. Some occupations and DAMA pathways are only available in Category 2 areas. Regional Australia also has specific programs (such as the Regional Occupation List for 494) that may apply differently based on the remoteness of the location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeading kicker="Advantages" title="Benefits of Regional Visa Pathways" accent={ACCENT} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {BENEFITS.map((b, i) => (
              <div
                key={i}
                style={{
                  background: GREY_BG,
                  border: `1.5px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: '22px 20px',
                  boxShadow: '0 2px 8px rgba(27,43,94,0.04)',
                  ...(i === BENEFITS.length - 1 && BENEFITS.length % 2 !== 0 ? { gridColumn: '1 / -1', maxWidth: 460 } : {}),
                }}
              >
                <div style={{ marginBottom: 10 }}>
                  <Icon name={b.icon} size={28} color={ACCENT} />
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{b.heading}</div>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Living and working requirements */}
      <section id="living-working" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Obligations" title="Living and Working Requirements for Regional Visa Holders" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, maxWidth: 740, marginBottom: 32 }}>
            Regional visa conditions are not merely about where you choose to live — they are visa conditions. Breaching the regional living requirement can affect your ability to apply for the subclass 191 permanent residence visa and, in some cases, may constitute a visa breach.
          </p>
          <div>
            {OBLIGATIONS.map((ob, i) => (
              <div
                key={i}
                style={{
                  borderLeft: `3px solid ${NAVY}`,
                  marginBottom: 16,
                  background: '#fff',
                  borderRadius: 8,
                  padding: '20px 20px 20px 20px',
                  boxShadow: '0 1px 4px rgba(27,43,94,0.04)',
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{ob.heading}</div>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{ob.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Related pages */}
      <section id="related" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Confirm your regional area eligibility"
        body="Nanak Migration Group (MARN 2619467) can confirm whether a specific address qualifies as regional for your visa pathway and advise on the regional living requirements."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
