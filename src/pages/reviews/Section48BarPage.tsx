import React from 'react'
import { GOLD, NAVY, NAVY_DARK } from '@/theme'
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
  { id: 'overview', label: 'What it is' },
  { id: 'who-is-barred', label: 'Who is barred' },
  { id: 'exemptions', label: 'Exempt visas' },
  { id: 'strategies', label: 'Strategies' },
  { id: 'misconceptions', label: 'Misconceptions' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  { icon: 'shield', value: 'Section 48', label: 'Prevents most onshore visa applications after refusal or cancellation', note: 'Applies to persons whose visa was refused or cancelled while they were physically in Australia. Limited exemptions apply.' },
  { icon: 'check', value: '6+ exemptions', label: 'Key exempt visa categories that can still be applied for onshore', note: 'Partner, protection, bridging, and since November 2021: skilled nominated 190, skilled work regional 491, and employer sponsored regional 494.' },
  { icon: 'plane', value: 'Leave and apply', label: 'Offshore application is an alternative for non-exempt visas', note: 'Leaving Australia and applying for a new visa from offshore is an option — but it requires care around bridging visa status and re-entry planning.' },
  { icon: 'scale', value: 'ART review', label: 'Pursuing review rights keeps status and options open', note: 'A pending ART review may keep the person on a bridging visa inside Australia while the review runs — maintaining options during that period.' },
]

const FAQ: FaqItem[] = [
  {
    question: "My visa was refused — how long before the section 48 bar applies?",
    answer: "The section 48 bar applies immediately on the refusal of your last substantive visa while you are in Australia. There is no grace period. Once your substantive visa is refused and you are in Australia, you are immediately subject to the bar — and you must rely on a bridging visa (which may have been granted on lodgement of the refused application) or an exempt visa application to remain lawfully. Seeking advice before a refusal is decided — ideally when lodging the original application — is far better than dealing with the consequences after.",
  },
  {
    question: "I was refused offshore — does the section 48 bar apply if I come to Australia?",
    answer: "No. The section 48 bar applies where your visa was refused or cancelled while you were in Australia. An offshore refusal (a refusal of an application lodged and decided while you were outside Australia) does not trigger the section 48 bar. You would not be subject to the bar merely because you received an offshore refusal. However, the refusal is still a relevant adverse immigration history factor in any future visa application.",
  },
  {
    question: "Can I apply for the partner visa if I am subject to section 48 but my relationship is genuine?",
    answer: "Yes. The partner visa (subclass 820/801 for onshore applications) is specifically exempt from the section 48 bar. You can apply for the 820 onshore even if your previous visa was refused or cancelled — provided you are in a genuine de facto or married relationship with an Australian citizen, permanent resident, or eligible New Zealand citizen. The section 48 bar exemption only affects the right to apply — the application must still satisfy all partner visa requirements and the relationship must be genuine.",
  },
  {
    question: "Does pursuing an ART review affect the section 48 bar?",
    answer: "A pending ART review keeps you on a bridging visa during the review period. If the ART sets aside the refusal or cancellation decision, the original decision that triggered the section 48 bar no longer stands — meaning the bar may no longer apply. If the ART affirms the original decision, the bar continues to apply. Pursuing an ART review is therefore both a substantive legal challenge AND a mechanism for preserving your lawful status while you assess your situation.",
  },
  {
    question: "If I leave Australia while subject to section 48, can I come back?",
    answer: "Possibly — but this depends on your specific circumstances. If you hold a Bridging Visa B (BVB), you can depart and return during the BVB validity. If you depart on an expired bridging visa, you become unlawful and may face a re-entry bar. If the original cancellation carried a formal re-entry ban, your ability to return is restricted. Departure should only be considered after careful professional advice — do not leave Australia on the assumption that you can easily return.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Visa Cancellation', desc: 'The grounds for visa cancellation, the NOICC process and how to respond.', icon: 'alert', page: 'visa-cancellation', color: ACCENT },
  { title: 'ART Review', desc: 'Apply to the Administrative Review Tribunal for merits review of a refusal or cancellation.', icon: 'scale', page: 'art-review', color: ACCENT },
  { title: 'PIC 4020', desc: 'The integrity criterion — false information, bogus documents, and the 3-year ban.', icon: 'shield', page: 'pic-4020', color: ACCENT },
  { title: 'Bridging Visas', desc: 'Stay lawfully in Australia while an application or review is pending.', icon: 'link', page: 'bridging-visas', color: ACCENT },
]

export default function Section48BarPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['section-48-bar'].title }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Reviews & Complex', url: 'https://www.nanakmigration.com.au/visa-refusal-review' },
          { name: 'Section 48 Bar', url: 'https://www.nanakmigration.com.au/section-48-bar' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{ name: 'Section 48 Bar Advice', description: PAGE_META['section-48-bar'].metaDescription, url: 'https://www.nanakmigration.com.au/section-48-bar' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Reviews & Complex', page: 'visa-refusal-review' },
          { label: 'Section 48 Bar' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Reviews & Complex"
        eyebrowSub="Section 48 Bar · Support Guide"
        title={<>The Section 48 Bar<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Barred from Applying for Most Visas Onshore</em></>}
        deck="If your visa was refused or cancelled while you were in Australia, the section 48 bar may prevent you from applying for most other visas from inside Australia. Understanding which visas are still available — and what your options are — is essential to protecting your status."
        shortAnswer={<>Under section 48 of the Migration Act 1958, a person whose visa was refused or cancelled while they were in Australia generally cannot make a further visa application from inside Australia — with a limited list of exceptions. The key exempt visas that can still be applied for onshore include <strong style={{ color: NAVY }}>partner visas</strong>, <strong style={{ color: NAVY }}>protection visas</strong>, <strong style={{ color: NAVY }}>bridging visas</strong>, and — since November 2021 — the <strong style={{ color: NAVY }}>skilled nominated visa (subclass 190)</strong>, the <strong style={{ color: NAVY }}>skilled work regional visa (subclass 491)</strong>, and the <strong style={{ color: NAVY }}>employer sponsored regional visa (subclass 494)</strong>. If none of the exempt pathways apply to your situation, you may need to leave Australia and apply offshore for a new visa — or pursue review rights to remain onshore while a review is pending. Nanak Migration Group (MARN 2619467) can assess which options remain open for your specific circumstances.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Visa Cancellation guide →', page: 'visa-cancellation' }}
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

      {/* Overview */}
      <section id="overview" style={{ padding: '64px 32px 48px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="The provision" title="What Is the Section 48 Bar?" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 20 }}>
            Section 48 of the Migration Act 1958 is sometimes called the "section 48 bar" because it bars — prevents — certain people from applying for most Australian visas from inside Australia (onshore). A person is subject to the section 48 bar if they are in Australia and their last substantive visa was refused or cancelled. The bar also applies if they are in Australia and have never held a substantive visa.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            The bar applies to the person — not to any specific visa. It means that even if the person technically meets the criteria for a new visa, they cannot apply for that visa from inside Australia if they are subject to the bar. They must either: apply for one of the exempt visas, leave Australia and apply offshore, or maintain a pending review application and associated bridging visa to remain onshore while pursuing other options.
          </p>
          <Callout variant="warning" panel={true} title="Being subject to section 48 does not mean all options are closed">
            Section 48 bars most — but not all — visa applications onshore. There are specific exempt visa subclasses that can still be applied for. The bar also does not apply to offshore applications — if you leave Australia, you may be able to apply for a new visa from overseas (though departure also requires care to avoid overstaying or breaching bridging visa conditions). A migration agent should be consulted before you take any action.
          </Callout>
        </div>
      </section>

      {/* Who is barred */}
      <section id="who-is-barred" style={{ background: '#f8fafd', padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Who it applies to" title="Who Is Subject to the Section 48 Bar?" />

          {[
            {
              title: 'Visa refused onshore',
              desc: 'Your visa application was refused while you were physically in Australia. For example: you applied for a student visa extension and it was refused, or you applied for a work visa and it was refused. The section 48 bar now applies to you.',
            },
            {
              title: 'Visa cancelled onshore',
              desc: "Your visa was cancelled while you were physically in Australia — for example, a student visa cancelled for breach of condition 8105 (work limitation), or an employer-sponsored visa cancelled because you left your sponsoring employer. The section 48 bar now applies.",
            },
            {
              title: 'No prior substantive visa',
              desc: "You entered Australia on a visitor visa, that visa expired, and you are now unlawful — having never held a long-term substantive visa. Or you entered Australia on a bridging visa without ever having held a substantive visa. Section 48 may apply.",
            },
          ].map((item, i) => (
            <div key={i} style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fafbfe', borderRadius: 8, padding: 20, marginBottom: 14 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{item.title}</div>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: '#374151', margin: 0 }}>{item.desc}</p>
            </div>
          ))}

          <p style={{ fontSize: 14, lineHeight: 1.75, color: '#6b7280', marginTop: 8, fontStyle: 'italic' }}>
            The bar applies based on your circumstances at the time you want to make a new visa application — not permanently in all cases. If you leave Australia and return lawfully (on a new visa), the bar may no longer apply.
          </p>
        </div>
      </section>

      {/* Exemptions */}
      <section id="exemptions" style={{ padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What can still be applied for" title="Visas Exempt from the Section 48 Bar" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 32 }}>
            {[
              {
                name: 'Partner visas (820/801 and 309/100)',
                subclasses: '820, 801 (onshore)',
                condition: 'Must be in a genuine relationship with an Australian citizen, PR, or eligible NZ citizen',
                note: 'The onshore partner visa (820/801) is one of the most commonly used section 48 bar exemptions. The relationship must be genuine and the sponsor must be eligible.',
              },
              {
                name: 'Protection visas (866)',
                subclasses: '866 (Permanent Protection Visa)',
                condition: 'Must have a credible protection claim',
                note: 'A protection claim requires a genuine fear of persecution or risk of harm in the home country. This is a complex area — seek specialist refugee and protection law advice.',
              },
              {
                name: 'Bridging visas (A, B, C, E)',
                subclasses: '010 (BVA), 020 (BVB), 030 (BVC), 051 (BVE)',
                condition: 'Must be in circumstances that warrant a bridging visa',
                note: 'Bridging visas allow lawful stay during a pending application or review — they are not a long-term solution, but can maintain lawful status while other options are pursued.',
              },
              {
                name: 'Skilled Nominated 190 (since November 2021)',
                subclasses: '190',
                condition: 'Must have a current state or territory nomination',
                note: 'Added to the exempt list in November 2021. A person subject to section 48 who has or can obtain a state nomination can apply for the 190 onshore — without needing to leave Australia.',
              },
              {
                name: 'Skilled Work Regional 491 (since November 2021)',
                subclasses: '491',
                condition: 'State/territory or family member nomination in a regional area',
                note: 'Also added in November 2021. Same as the 190 — a valid nomination makes the 491 available despite the section 48 bar.',
              },
              {
                name: 'Employer Sponsored Regional 494 (since November 2021)',
                subclasses: '494',
                condition: 'Regional employer nomination and sponsorship',
                note: 'The 494 regional employer-sponsored visa was added to the exempt list in November 2021. Requires an eligible regional employer and approved sponsorship.',
              },
            ].map((card, i) => (
              <div key={i} style={{ border: `1px solid #e8edf6`, borderTop: `3px solid ${ACCENT}`, borderRadius: '0 0 12px 12px', padding: 20, background: '#fff' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{card.name}</div>
                <div style={{ fontSize: 12, color: ACCENT, fontWeight: 600, marginBottom: 10 }}>Subclass: {card.subclasses}</div>
                <div style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.6, marginBottom: 8 }}>
                  <span style={{ fontWeight: 600 }}>Key condition: </span>{card.condition}
                </div>
                <div style={{ fontSize: 12.5, color: '#6b7280', lineHeight: 1.6 }}>{card.note}</div>
              </div>
            ))}
          </div>

          <Callout variant="note" panel={true} title="The exempt list may change — confirm current exemptions on DoHA">
            The list of visas exempt from the section 48 bar is set in the Migration Regulations. It was expanded in November 2021 to include the 190, 491 and 494. It may be expanded or changed again. Always confirm the current exempt list on the Department of Home Affairs website or with a migration agent before applying. Nanak Migration Group (MARN 2619467) maintains current knowledge of the exempt list.
          </Callout>
        </div>
      </section>

      {/* Strategies */}
      <section id="strategies" style={{ background: '#f8fafd', padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Options" title="Strategies When Subject to Section 48" />

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>
            {[
              {
                icon: 'arrowright',
                title: 'Apply for an exempt visa',
                desc: 'If any of the exempt visa categories applies to your circumstances — partner, protection, 190, 491, or 494 — apply immediately. This is the cleanest solution that allows you to remain in Australia and progress toward a new visa status. Each exempt visa has its own eligibility requirements — a migration agent can assess which (if any) you qualify for.',
                page: null as string | null,
              },
              {
                icon: 'scale',
                title: 'Pursue review rights',
                desc: 'If the original refusal or cancellation is reviewable at the ART, lodge an ART review application within the deadline (generally 21 days). A pending ART review keeps you on a bridging visa onshore and may ultimately set aside the original decision — removing the basis for the section 48 bar. Even if the ART review does not succeed, it preserves your lawful status during the review period and gives more time to assess other options.',
                page: 'art-review',
              },
              {
                icon: 'plane',
                title: 'Leave Australia and apply offshore',
                desc: 'The section 48 bar only applies onshore. If you leave Australia and apply for a new visa from overseas, the bar does not apply to that application. However, departure requires care: you must hold a valid visa or Bridging Visa B (BVB) to depart lawfully and, in some cases, a re-entry ban may prevent return. An agent should advise on whether departure is safe given your specific circumstances.',
                page: null as string | null,
              },
              {
                icon: 'clipboard',
                title: 'Ministerial intervention',
                desc: 'In some exceptional cases, a request for Ministerial intervention under section 195A, 351, or 417 of the Migration Act may be considered. Ministerial intervention is a last resort — it is entirely at the Minister\'s discretion and not a reviewable decision. It is relevant only in compelling or unique cases and should be explored only after other options have been exhausted.',
                page: null as string | null,
              },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: 24, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={item.icon} size={18} color={ACCENT} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{item.title}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: '#4b5563', margin: 0 }}>{item.desc}</p>
                  {item.page && (
                    <button
                      onClick={() => navigate(item.page as string)}
                      style={{ marginTop: 12, background: 'none', border: 'none', padding: 0, color: ACCENT, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      Read more →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misconceptions */}
      <section id="misconceptions" style={{ padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common misunderstandings" title="Common Misconceptions About Section 48" />

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>
            {[
              {
                myth: "I can just apply for the same visa again from inside Australia",
                correct: "Section 48 prevents re-applying for the visa that was refused, as well as most other visa types, from inside Australia. Simply reapplying for the same visa from onshore is not permitted.",
              },
              {
                myth: "The section 48 bar is permanent",
                correct: "The bar applies to onshore applications while you remain in Australia after the refusal or cancellation. If you leave Australia lawfully and return on a new visa, the bar generally no longer applies. It is a situational restriction, not a lifetime ban.",
              },
              {
                myth: "The 190 and 491 have always been exempt",
                correct: "The 190, 491 and 494 were added to the exempt list in November 2021 — they were not previously exempt. Applications lodged before that date could not use these pathways under the bar. Always confirm the current exempt list.",
              },
              {
                myth: "I cannot do anything — I must leave Australia",
                correct: "The exempt visa pathways and ART review rights mean that, in many cases, options remain available onshore. An assessment of your circumstances by a migration agent may reveal viable onshore pathways you were not aware of.",
              },
              {
                myth: "A partner visa always succeeds despite section 48",
                correct: "The partner visa is exempt from the section 48 bar — meaning it can be applied for onshore. But being exempt from the bar does not mean the visa will be granted. The application must still meet all substantive partner visa requirements. Section 48 exemption only affects the right to apply from onshore — not the merits of the application.",
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(220,38,38,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="x" size={16} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: ACCENT, marginBottom: 4 }}>Myth: "{item.myth}"</div>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: '#4b5563', margin: 0 }}><strong style={{ color: NAVY }}>Correct:</strong> {item.correct}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#f8fafd', padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Frequently Asked Questions" />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ padding: '64px 32px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Explore further" title="Related Pages" />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Assess your options under section 48"
        body="Nanak Migration Group (MARN 2619467) can assess which pathways remain available to you — onshore and offshore — after a refusal or cancellation."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
