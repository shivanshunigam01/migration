import React from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_PARTNER } from '@/theme'
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

const TOC = [
  { id: 'overview', label: 'What it is' },
  { id: 'two-ways', label: 'Two ways to pass' },
  { id: 'counting', label: 'Who counts' },
  { id: 'which-visas', label: 'Which visas' },
  { id: 'examples', label: 'Worked examples' },
  { id: 'if-you-fail', label: 'If you fail' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  { icon: 'check', value: '2 ways', label: 'Two alternative ways to pass the Balance of Family test', note: "Half-or-more in Australia, OR more in Australia than in any other single country. Either test passing is sufficient." },
  { icon: 'layers', value: 'Broadly counted', label: 'Biological, adopted and step-children all count', note: "The test counts all of the parent's children broadly — not just the child who is sponsoring the visa." },
  { icon: 'check', value: 'Not required', label: 'The subclass 870 does NOT require the Balance of Family test', note: 'The 870 Sponsored Parent (Temporary) visa is exempt from the Balance of Family test — making it accessible to parents who fail the test for permanent visas.' },
  { icon: 'shield', value: '5 visas', label: 'The test applies to five permanent parent visa subclasses', note: 'Subclasses 103, 143, 173, 804, and 864 all require the Balance of Family test to be satisfied.' },
]

const FAQ: FaqItem[] = [
  { question: "Does my child's spouse count as my child for the Balance of Family test?", answer: "No. Only the parent's own children — biological, legally adopted, or step-children (in qualifying circumstances) — count toward the Balance of Family test. A daughter-in-law or son-in-law does not count. The number of grandchildren also does not affect the count. The test is strictly about the parent's own children." },
  { question: "My child is an Australian permanent resident but not a citizen — do they count?", answer: "Yes. Australian permanent residents count for the Balance of Family test — the test does not require the child to be an Australian citizen. An Australian citizen, an Australian permanent resident, or an eligible New Zealand citizen who is settled (lawfully residing) in Australia all count on the Australian side of the balance." },
  { question: "What does 'settled' mean for the purposes of the test?", answer: "In the context of the Balance of Family test, 'settled' means that the child is lawfully and habitually resident in Australia as an Australian citizen, Australian permanent resident, or eligible New Zealand citizen. A child who is in Australia on a temporary visa (e.g. a student visa or working holiday visa) is NOT considered settled in Australia for the purposes of the test — even if they have lived there for several years." },
  { question: "Can the Balance of Family test be assessed at the time of lodgement, or must it be re-assessed at the time of grant?", answer: "The Balance of Family test is assessed at the time of decision on the application (when the visa is being granted), not necessarily at the time of lodgement. For parent visa applications with long processing queues, this means the family configuration at the time of grant — which may be 12–15 years after lodgement — is what matters. If a sibling migrates to Australia in the interim, they would count toward the balance at decision time. If an Australian-resident child dies or leaves Australia and renounces PR, the count changes." },
  { question: "If a child who counted on the Australian side of the balance passes away after lodgement, does the parent fail the test?", answer: "The rules on this are specific and complex. Whether a deceased Australian-resident child continues to count toward the balance depends on the circumstances of their death and settlement. This is an area where the Migration Regulations contain detailed provisions — and where professional legal advice from a registered migration agent or migration lawyer is essential. The Department will apply the rules as at the time of decision." },
]

const RELATED: RelatedPage[] = [
  { title: 'Parent Visas Hub', desc: 'Compare all parent visa pathways — costs, queues, and permanence at a glance.', icon: 'arrowright', page: 'parent-visas', color: ACCENT },
  { title: 'Contributory Parent Visa (143)', desc: 'The most common permanent parent pathway — requires the Balance of Family test.', icon: 'dollar', page: 'contributory-parent-143', color: ACCENT },
  { title: 'Sponsored Parent (Temporary) 870', desc: 'The only parent visa that does not require the Balance of Family test.', icon: 'calendar', page: 'sponsored-parent-870', color: ACCENT },
  { title: 'Partner & Family Visas', desc: 'All partner and family visa options — hub page.', icon: 'heart', page: 'partner-family-visas', color: ACCENT },
]

export default function BalanceOfFamilyTestPage({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au/' },
          { name: 'Partner & Family', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Balance of Family Test', url: 'https://www.nanakmigration.com.au/balance-of-family-test' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: typeof f.answer === 'string' ? f.answer : String(f.answer) }))}
        service={{
          name: 'Balance of Family Test — Parent Visa Eligibility',
          description: PAGE_META['balance-of-family-test'].metaDescription,
          url: 'https://www.nanakmigration.com.au/balance-of-family-test',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Partner & Family', page: 'partner-family-visas' },
          { label: 'Balance of Family Test' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Parent Visas"
        eyebrowSub="Partner & Family · Support Guide"
        title={<>The Balance of Family Test<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Who Must Satisfy It and How to Pass</em></>}
        deck="The Balance of Family test determines whether a parent has enough of their children settled in Australia to be eligible for a permanent parent visa. It applies to most permanent parent visa subclasses but not to the subclass 870 Sponsored Parent (Temporary) visa."
        shortAnswer={<>The Balance of Family test has <strong style={{ color: NAVY }}>two alternative ways to pass</strong>: (1) at least half of the parent's children are Australian citizens, permanent residents, or eligible New Zealand citizens settled in Australia; OR (2) more of the parent's children are settled in Australia than in any other single country. Children are counted broadly — biological, legally adopted, and step-children from any relationship all count. A child who is deceased or is a refugee is treated under specific rules. The Balance of Family test is required for subclasses 103, 143, 173, 804, and 864 — but <strong style={{ color: NAVY }}>not for the subclass 870</strong>. Nanak Migration Group (MARN 2619467) can assess whether your family satisfies the test before you lodge.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← Parent Visas Hub', page: 'parent-visas' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>

      {/* Key facts strip */}
      <KeyFactsStrip facts={FACTS} accent={ACCENT} />

      {/* Sticky jump bar */}
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

      {/* ── OVERVIEW ───────────────────────────────────────── */}
      <section id="overview" style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="The requirement" title="What Is the Balance of Family Test?" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 20 }}>
            The Balance of Family test is a statutory requirement that applies to most permanent parent visa subclasses. Its purpose is to ensure that Australia's parent migration program benefits families who are genuinely moving their centre of family life to Australia — not families who have only a single child in Australia and the majority of family connections elsewhere.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            To satisfy the Balance of Family test, the applicant parent's children and step-children must be assessed. The Department of Home Affairs counts all of the parent's children and step-children and then checks whether Australia has at least as many (or more) than any other country.
          </p>
          <Callout variant="note" panel={true} title="The test is about where children are settled — not about the sponsoring child">
            The Balance of Family test looks at ALL of the parent's children — not just the child who is sponsoring the visa. A parent with 5 children, only 1 of whom is in Australia and 4 of whom are in India, would fail the test. A parent with 5 children, 3 in Australia and 2 in India, would pass it. The sponsoring child must be the one who meets the settled Australian resident requirement, but all children count toward the balance.
          </Callout>
        </div>
      </section>

      {/* ── TWO WAYS ──────────────────────────────────────── */}
      <section id="two-ways" style={{ background: '#f8fafd', padding: '64px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Passing" title="The Two Alternative Ways to Pass" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>

            {/* Card 1 */}
            <div style={{ border: `2px solid ${ACCENT}30`, background: '#fafbfe', borderRadius: 14, padding: 28 }}>
              <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 14, lineHeight: 1.3 }}>
                At least half of the parent's children are settled in Australia
              </div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, marginBottom: 16 }}>
                If the parent has 4 children, at least 2 must be Australian citizens, permanent residents, or eligible New Zealand citizens settled in Australia. If the parent has 3 children, at least 2 (rounding up — majority) must be settled in Australia. The &quot;settled&quot; requirement means the child must be lawfully residing in Australia as a citizen, PR or eligible NZ citizen — not just visiting or on a temporary visa.
              </p>
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '12px 16px', fontSize: 13, color: '#166534' }}>
                <strong>Example:</strong> Parent has 4 children: 2 in Australia (citizens), 1 in India, 1 in UK. 2/4 = 50% — PASSES test 1.
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ border: `2px solid ${ACCENT}30`, background: '#fafbfe', borderRadius: 14, padding: 28 }}>
              <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 14, lineHeight: 1.3 }}>
                More of the parent's children are settled in Australia than in any other single country
              </div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, marginBottom: 16 }}>
                Even if fewer than half the parent's children are in Australia, if Australia has more than any other individual country, the test is satisfied. This is particularly useful for parents with children spread across many countries.
              </p>
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '12px 16px', fontSize: 13, color: '#166534' }}>
                <strong>Example:</strong> Parent has 6 children: 2 in Australia (citizens), 1 in UK, 1 in Canada, 1 in India, 1 in New Zealand. Australia has 2; no other country has more than 1 — PASSES test 2 (even though Australia has only 33% of children).
              </div>
            </div>
          </div>

          <Callout variant="note" panel={true} title="Both tests can apply — passing either one is sufficient">
            The parent only needs to satisfy ONE of the two tests. A parent who cannot pass test 1 (half or more) may still pass test 2 (more than any other single country) if their non-Australian children are spread across multiple countries. Nanak Migration Group (MARN 2619467) can assess your family's specific configuration.
          </Callout>
        </div>
      </section>

      {/* ── COUNTING ──────────────────────────────────────── */}
      <section id="counting" style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Counting children" title="Who Counts as a Child for the Balance of Family Test?" />

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20, marginBottom: 32 }}>
            {[
              { icon: 'users', category: 'Biological children', explanation: "All biological children of the parent count, regardless of age, marital status, or whether they are in contact with the parent. Adult children count the same as minor children." },
              { icon: 'check', category: 'Legally adopted children', explanation: "Children who have been legally adopted by the parent (under the law of the country of adoption) count as the parent's children for the Balance of Family test." },
              { icon: 'users', category: 'Step-children', explanation: "Step-children are counted in some circumstances. The rules for step-children are specific — a child is a step-child of the parent if they are the child of the parent's spouse or de facto partner (current or former). Step-children who are counted must be identified carefully — seek advice if you have step-children in the count." },
              { icon: 'alert', category: 'Deceased children', explanation: "A child who is deceased is treated as follows: if the child died as an Australian citizen, permanent resident, or eligible New Zealand citizen settled in Australia, they may still count toward the 'Australian' side of the balance. The rules are specific — confirm with a migration agent." },
              { icon: 'shield', category: 'Children who are refugees', explanation: "A child who is outside Australia because they are a refugee (within the meaning of the Migration Act) may be excluded from the count in some circumstances. The rules are complex — this is an area where professional advice is important." },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={item.icon} size={20} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{item.category}</div>
                  <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.75 }}>{item.explanation}</div>
                </div>
              </div>
            ))}
          </div>

          <Callout variant="warning" panel={true} title="Step-child rules are complex — don't assume">
            The rules for counting step-children are not simple. A step-child from a former relationship, a step-child who has been adopted, or a step-child who is not in regular contact with the parent may be treated differently. Before assuming a step-child does or does not count toward your family's balance, seek a professional assessment.
          </Callout>
        </div>
      </section>

      {/* ── WHICH VISAS ───────────────────────────────────── */}
      <section id="which-visas" style={{ background: '#f8fafd', padding: '64px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Where it applies" title="Which Visas Require the Balance of Family Test?" />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {/* Visas REQUIRING BoFT */}
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 14, paddingBottom: 10, borderBottom: `2px solid ${ACCENT}` }}>Visas requiring the Balance of Family test</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                {[
                  { code: '103', name: 'Parent', note: 'Permanent, offshore' },
                  { code: '143', name: 'Contributory Parent', note: 'Permanent, offshore' },
                  { code: '173', name: 'Contributory Parent Temporary', note: 'Temporary, leads to 143' },
                  { code: '804', name: 'Aged Parent', note: 'Permanent, onshore' },
                  { code: '864', name: 'Contributory Aged Parent', note: 'Permanent, onshore' },
                ].map(v => (
                  <div key={v.code} style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid #e8edf6', borderRadius: 10, padding: '12px 16px' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name="x" size={12} color="#dc2626" />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: NAVY }}>Subclass {v.code} — {v.name}</div>
                      <div style={{ fontSize: 12, color: '#6b7280' }}>{v.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visas NOT requiring BoFT */}
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 14, paddingBottom: 10, borderBottom: '2px solid #16a34a' }}>Visas NOT requiring the Balance of Family test</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid #e8edf6', borderRadius: 10, padding: '12px 16px' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name="check" size={12} color="#16a34a" />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: NAVY }}>Subclass 870 — Sponsored Parent (Temporary)</div>
                    <div style={{ fontSize: 12, color: '#16a34a', fontWeight: 600 }}>BoFT not required</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORKED EXAMPLES ───────────────────────────────── */}
      <section id="examples" style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Worked examples" title="Worked Examples — Different Family Spreads" />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>

            {/* Example 1 — PASSES */}
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 14, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#166534', background: '#bbf7d0', borderRadius: 20, padding: '3px 12px' }}>PASSES — Test 1</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 8 }}>4 children total. 2 in Australia (citizens). 1 in India. 1 in Pakistan.</div>
              <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7 }}>2 of 4 children (50%) are settled in Australia. Test 1 satisfied — at least half in Australia.</div>
            </div>

            {/* Example 2 — PASSES */}
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 14, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#166534', background: '#bbf7d0', borderRadius: 20, padding: '3px 12px' }}>PASSES — Test 2</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 8 }}>5 children total. 2 in Australia (PRs). 1 in UK. 1 in Canada. 1 in Philippines.</div>
              <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7 }}>Australia has 2; no other country has more than 1. Test 2 satisfied — even though Australia has only 40% of children.</div>
            </div>

            {/* Example 3 — FAILS */}
            <div style={{ background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: 14, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#9f1239', background: '#fecdd3', borderRadius: 20, padding: '3px 12px' }}>FAILS</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 8 }}>4 children total. 1 in Australia (citizen). 3 in India.</div>
              <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7 }}>Only 25% of children are in Australia. India has more children (3) than Australia (1). Neither test is satisfied.</div>
            </div>

            {/* Example 4 — FAILS */}
            <div style={{ background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: 14, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#9f1239', background: '#fecdd3', borderRadius: 20, padding: '3px 12px' }}>FAILS</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 8 }}>6 children total. 2 in Australia. 2 in India. 1 in UK. 1 in Canada.</div>
              <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7 }}>Australia has 2 (33%). India also has 2. Australia does not have MORE than any other single country — it ties with India. Test 2 requires strictly more, not equal.</div>
            </div>

            {/* Example 5 — PASSES */}
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 14, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#166534', background: '#bbf7d0', borderRadius: 20, padding: '3px 12px' }}>PASSES — Test 1</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 8 }}>6 children total. 3 in Australia (2 citizens + 1 PR). 2 in India. 1 in UK.</div>
              <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7 }}>Australia has 3 (50%). Test 1 satisfied — at least half of the parent's children are settled in Australia.</div>
            </div>

            {/* Example 6 — Step-child scenario */}
            <div style={{ background: '#fefce8', border: '1px solid #fde68a', borderRadius: 14, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#854d0e', background: '#fde68a', borderRadius: 20, padding: '3px 12px' }}>SEEK ADVICE</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 8 }}>3 biological children (2 in Australia, 1 in India) + 2 step-children (1 in Australia, 1 overseas).</div>
              <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7 }}>Whether step-children count depends on specific circumstances. Professional assessment is recommended before assuming the test is passed or failed. The outcome depends on the step-child rules in your situation.</div>
            </div>

          </div>
        </div>
      </section>

      {/* ── IF YOU FAIL ───────────────────────────────────── */}
      <section id="if-you-fail" style={{ background: '#f8fafd', padding: '64px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Alternatives" title="What to Do if You Fail the Balance of Family Test" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            If the Balance of Family test cannot be satisfied — either currently or in the foreseeable future — the options available to the parent are more limited. However, there are pragmatic alternatives.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>

            <div style={{ border: '1px solid #e8edf6', borderRadius: 14, padding: 28, background: '#fff' }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="calendar" size={22} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 10 }}>Subclass 870 Sponsored Parent (Temporary) visa</div>
                  <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.8 }}>The 870 does not require the Balance of Family test. A parent who fails the test can still apply for the 870 and live in Australia for up to 10 years in total (in 3-year or 5-year grants), subject to the sponsor income threshold and other requirements. The 870 grants no work rights and does not lead to permanent residence, but it allows extended family time without entering the permanent visa queue.</div>
                </div>
              </div>
            </div>

            <div style={{ border: '1px solid #e8edf6', borderRadius: 14, padding: 28, background: '#fff' }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="plane" size={22} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 10 }}>Extended visitor stays</div>
                  <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.8 }}>A parent can visit Australia on a multiple-entry visitor visa (subclass 600) for stays of up to 12 months at a time (in some cases). While not a long-term solution, extended visitor visits can allow family time while the situation is assessed. Visitor visas do not allow work, do not accumulate toward any permanent pathway, and are assessed individually each time.</div>
                </div>
              </div>
            </div>

            <div style={{ border: '1px solid #e8edf6', borderRadius: 14, padding: 28, background: '#fff' }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="arrowright" size={22} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 10 }}>Wait for the family balance to shift</div>
                  <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.8 }}>In some cases, if an additional sibling is considering migrating to Australia, the balance of family could shift to a passing configuration in the future. This is a planning consideration rather than an immediate solution — but families who are close to passing may want to consider whether future migration by another sibling could change the outcome. A migration agent can assess what would be needed for the balance to shift.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section id="faq" style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Frequently Asked Questions" />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── RELATED PAGES ─────────────────────────────────── */}
      <section id="related" style={{ background: '#f8fafd', padding: '64px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Explore further" title="Related Pages" />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Check whether your family passes the Balance of Family test"
        body="Nanak Migration Group (MARN 2619467) assesses the Balance of Family test configuration for your specific family before you commit to any parent visa application."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
