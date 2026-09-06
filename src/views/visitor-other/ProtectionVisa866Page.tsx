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

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'who', label: 'Who it is for' },
  { id: 'process', label: 'The process' },
  { id: 'bridging', label: 'Bridging visa' },
  { id: 'charges', label: 'Charges' },
  { id: 'art-review', label: 'Review rights' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'shield',
    value: 'Subclass 866',
    label: 'Protection visa — onshore only',
    note: 'The subclass 866 is a permanent visa for people who are in Australia and engage Australia\'s protection obligations. It is an onshore-only visa — it cannot be applied for from outside Australia.',
  },
  {
    icon: 'flag',
    value: 'Permanent',
    label: 'Permanent if granted',
    note: 'A granted Protection visa (866) is a permanent visa, conferring the right to remain in Australia indefinitely and work and study without restriction.',
  },
  {
    icon: 'calendar',
    value: 'Processing varies',
    label: 'Processing time is case-dependent',
    note: 'Protection visa cases vary significantly in complexity. Some are decided within months; others take several years. The Department publishes indicative processing times on its website.',
  },
  {
    icon: 'dollar',
    value: 'No charge',
    label: 'No application charge',
    note: 'There is currently no government application charge for the Protection visa (866). Confirm the current position on the Department of Home Affairs website.',
  },
]

const STEPS: TimelineStep[] = [
  {
    title: 'Lodge the protection visa application from inside Australia',
    desc: 'The subclass 866 must be applied for onshore — you must be in Australia at the time of application. The application is lodged online through ImmiAccount. You should seek advice from a registered migration agent or legal practitioner before lodging, as the claims you make in your initial application are critically important.',
  },
  {
    title: 'Identity interview',
    desc: 'After lodgement, the Department will conduct an identity interview to verify who you are and establish the basic facts of your situation. You should bring all identity documents you hold. If you do not hold identity documents, the Department will note this and the interview will still proceed.',
  },
  {
    title: 'Protection interview (substantive interview)',
    desc: 'The Department conducts a substantive protection interview — sometimes called a refugee status determination interview — to assess your protection claims in detail. You will be asked to explain your claims clearly and consistently. You may bring a support person. An interpreter will be provided if you need one. Preparation for this interview, including organising supporting evidence, is critical.',
  },
  {
    title: 'Decision',
    desc: 'The Department considers all information provided and makes a decision whether to grant or refuse the application. If granted, you will receive a permanent Protection visa (866) with the right to remain, work, and study in Australia and to travel. If refused, you will receive a refusal letter explaining the reasons.',
  },
  {
    title: 'Review at the ART if refused',
    desc: 'If your application is refused, you may have the right to apply for a merits review at the Administrative Review Tribunal (ART). A strict time limit applies to lodging the review — the deadline will be stated in the refusal letter. Missing the review deadline has serious consequences for your ability to challenge the decision.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: "Who is the Protection visa (866) for?",
    answer: "The Protection visa (subclass 866) is for people who are in Australia and who engage Australia's protection obligations under international law. This covers two categories: (1) Refugees — people who are outside their country of nationality and who have a well-founded fear of being persecuted for reasons of race, religion, nationality, membership of a particular social group, or political opinion; and (2) People in need of complementary protection — people who may not meet the refugee definition but whose removal from Australia would expose them to a real risk of significant harm (including the death penalty, torture, cruel or inhuman treatment, or arbitrary deprivation of life). The Protection visa is not for people who simply prefer to remain in Australia, face general hardship, or have family connections in Australia without a protection ground. Each application is assessed individually on its merits.",
  },
  {
    question: "What is the s48 bar and does it prevent me from applying for a Protection visa?",
    answer: "Section 48 of the Migration Act 1958 prevents a person who has been refused a substantive visa while in Australia from applying for most other substantive visas onshore. However, the section 48 bar does not prevent a person from applying for a Protection visa (subclass 866) — the Protection visa is one of the limited exceptions to the s48 bar. If you are barred by section 48 and believe you have genuine protection claims, you may still lodge a Protection visa application. However, you should seek advice from a registered migration agent or legal practitioner before lodging, as the interaction between the s48 bar, your immigration history, and your protection claims is complex.",
  },
  {
    question: "Do I have work rights while my Protection visa application is being processed?",
    answer: "On lodgement of a valid Protection visa application, you are typically issued a Bridging visa A (BVA). The BVA generally allows you to remain lawfully in Australia while the application is processed. Work rights on a bridging visa are not automatic for all applicants — the BVA may or may not include a work entitlement depending on your specific circumstances. If you need to work during processing and your bridging visa does not include a work entitlement, you may be able to apply for a condition on the bridging visa allowing work if you demonstrate financial need. Seek advice from a registered migration agent about your specific bridging visa conditions.",
  },
  {
    question: "What happens if my Protection visa application is refused?",
    answer: "If your application is refused, you generally have the right to apply for a merits review at the Administrative Review Tribunal (ART) within a strict time limit set out in the refusal decision. The ART will conduct its own assessment of your protection claims. It is not bound by the Department's decision. If the ART also affirms the refusal, you may have limited options for judicial review in the Federal courts, though judicial review is limited to reviewing whether the decision was made legally — it is not a reconsideration of the merits. At any stage, if you are not satisfied with the handling of your case, you should seek advice from a registered migration agent (MARN 2619467) or a specialist migration lawyer.",
  },
  {
    question: "Can lodging a Protection visa application without genuine grounds affect my future migration options?",
    answer: "Yes — significantly. The Department and the ART assess protection claims rigorously on their individual merits. Lodging a Protection visa application without genuine grounds is not a way to extend your time in Australia or avoid departure. If a claim is found to have been made untruthfully or without foundation, this is taken into account in any future visa applications and may be treated as a PIC 4020 integrity issue or a character matter. There is no registered migration agent (RMA) who can guarantee that a protection application will succeed — any agent who makes such a representation is in breach of the OMARA Code of Conduct. If you are uncertain whether you have genuine protection grounds, seek honest, professional advice from a registered migration agent before lodging.",
  },
  {
    question: "Should I seek professional advice before lodging a Protection visa?",
    answer: "Yes. The claims you make at the time of lodging the Protection visa and at the protection interview are critically important — inconsistencies between your initial claims and later statements can be used adversely in assessing your credibility. Professional advice from a registered migration agent (MARN) or a migration lawyer before lodging helps ensure your claims are clearly articulated, that you understand the process and your obligations, and that you have gathered the right supporting evidence. Nanak Migration Group (MARN 2619467) can advise on the protection visa process. We note that no agent can guarantee an outcome — the protection visa is assessed on individual merits by the Department and, if reviewed, by the ART.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Bridging Visas',
    desc: 'Stay lawfully in Australia while your application is processed — types, work rights, and conditions.',
    icon: 'link',
    page: 'bridging-visas',
    color: ACCENT,
  },
  {
    title: 'ART Review',
    desc: 'Seek a merits review of a refused visa decision at the Administrative Review Tribunal.',
    icon: 'scale',
    page: 'art-review',
    color: ACCENT,
  },
  {
    title: 'Section 48 Bar',
    desc: 'What the s48 bar means, which visas are exempt, and your options if you are barred.',
    icon: 'shield',
    page: 'section-48-bar',
    color: ACCENT,
  },
]

export default function ProtectionVisa866Page({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://nanakmigration.com.au/' },
          { name: 'Visitor & Other', url: 'https://nanakmigration.com.au/visitor-visas' },
          { name: 'Protection Visa (866)', url: 'https://nanakmigration.com.au/protection-visa-866' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Protection Visa (Subclass 866)',
          description: PAGE_META['protection-visa-866'].metaDescription,
          url: 'https://nanakmigration.com.au/protection-visa-866',
        }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Visitor & Other', page: 'visitor-visas' },
          { label: 'Protection Visa (866)' },
        ]}
      />

      <PageHero
        variant="standard"
        eyebrow="Visitor & Other"
        eyebrowSub="Status & Residency · Subclass 866"
        title={<>Protection Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 866</em></>}
        deck="The Protection visa (subclass 866) is a permanent onshore visa for people in Australia who engage Australia's protection obligations as refugees or under complementary protection. Each application is assessed rigorously and individually on its merits."
        shortAnswer={<>The subclass 866 Protection visa is for people <strong style={{ color: NAVY }}>already in Australia</strong> who have a well-founded fear of persecution or face a real risk of significant harm if returned to their home country. It covers both <strong style={{ color: NAVY }}>refugee claims</strong> (persecution based on race, religion, nationality, particular social group, or political opinion) and <strong style={{ color: NAVY }}>complementary protection claims</strong>. There is currently <strong style={{ color: NAVY }}>no application charge</strong>. On lodgement you are typically issued a bridging visa to remain lawfully in Australia during processing. If refused, you generally have the right to apply for review at the <strong style={{ color: NAVY }}>Administrative Review Tribunal (ART)</strong>. The <strong style={{ color: NAVY }}>section 48 bar does not prevent</strong> a valid Protection visa application. Claims are assessed on individual merits — no outcome can be guaranteed. Nanak Migration Group (MARN 2619467) strongly encourages seeking professional advice before lodging. Lodging without genuine grounds can seriously damage future migration prospects.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← Visitor & Other', page: 'visitor-visas' }}
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

      {/* ── SECTION: Overview ───────────────────────────────────── */}
      <section id="overview" style={{ background: '#ffffff', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Understanding the visa" title="What the Protection Visa (866) Is" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 16 }}>
            The Protection visa (subclass 866) is Australia's onshore permanent protection visa. It is for people who are currently in Australia and who engage Australia's protection obligations under the <em>Migration Act 1958</em> and Australia's international law commitments, including the 1951 Refugee Convention and its 1967 Protocol.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 16 }}>
            The visa is not a general pathway for people who want to remain in Australia for economic reasons, family reasons, or because they prefer life here. The protection framework is specifically designed to protect people from serious harm in their home country — and the Department assesses each application carefully against that framework.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            If you are considering a Protection visa application, seeking professional advice from a registered migration agent or migration lawyer before lodging is strongly encouraged. The initial claims you make in your application and at your protection interview are critically important and can be difficult to amend later.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              {
                icon: 'shield',
                title: 'Onshore only',
                desc: 'The 866 must be applied for from inside Australia. It cannot be applied for from outside Australia. People seeking protection from outside Australia use a different pathway.',
              },
              {
                icon: 'flag',
                title: 'Permanent if granted',
                desc: 'A Protection visa (866) grant is a permanent visa. The holder may remain in Australia indefinitely, work and study without restriction, and is eligible to apply for Australian citizenship after meeting the residence requirement.',
              },
              {
                icon: 'scale',
                title: 'Rigorously assessed',
                desc: 'Protection claims are assessed individually and carefully against Australia\'s international protection obligations. Each case is decided on its own facts — no agent can guarantee a particular outcome.',
              },
            ].map(feat => (
              <div key={feat.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 20, background: '#f8fafd', borderRadius: 12, border: '1px solid #e8edf6' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${ACCENT}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={feat.icon} size={18} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{feat.title}</div>
                  <div style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65 }}>{feat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: Who it is for ──────────────────────────────── */}
      <section id="who" style={{ background: '#f8fafd', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Protection grounds" title="Who the Protection Visa Is For" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            Australia's protection obligations cover two distinct categories. A person does not need to satisfy both — satisfying either is sufficient if the criteria are met. The Department assesses both categories in every Protection visa application.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20, marginBottom: 40 }}>
            {/* Refugee */}
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ padding: '18px 24px', background: NAVY, display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Category 1 — Refugee</div>
              </div>
              <div style={{ padding: 24 }}>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, marginBottom: 16 }}>
                  A refugee, under the 1951 Refugee Convention, is a person who is outside their country of nationality and who has a well-founded fear of being persecuted for reasons of:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 10, marginBottom: 16 }}>
                  {['Race', 'Religion', 'Nationality', 'Membership of a particular social group', 'Political opinion'].map(ground => (
                    <span key={ground} style={{ fontSize: 13, color: '#374151', background: `${ACCENT}10`, border: `1px solid ${ACCENT}30`, borderRadius: 6, padding: '5px 12px' }}>{ground}</span>
                  ))}
                </div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                  The fear must be "well-founded" — meaning there must be both a subjective fear and an objective basis for that fear. The person must also be unable or unwilling to seek protection from their home country because of that fear, or because they are stateless and cannot return. Each claim is assessed on its specific facts.
                </p>
              </div>
            </div>

            {/* Complementary protection */}
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ padding: '18px 24px', background: '#374151', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Category 2 — Complementary Protection</div>
              </div>
              <div style={{ padding: 24 }}>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, marginBottom: 16 }}>
                  Complementary protection covers people who may not meet the refugee definition but whose removal from Australia would expose them to a real risk of significant harm. Significant harm includes:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8, marginBottom: 16 }}>
                  {[
                    'Arbitrary deprivation of life (execution)',
                    'The death penalty being carried out',
                    'Torture',
                    'Cruel or inhuman treatment or punishment',
                    'Degrading treatment or punishment',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                  The harm must be "real risk" and must not be one that the person can reasonably avoid (for example, by relocating within their country). Complementary protection is assessed alongside the refugee claim.
                </p>
              </div>
            </div>
          </div>

          <Callout variant="warning" panel={true} title="Protection visa claims are assessed individually on their merits">
            No two protection cases are identical. A claim that succeeds for one person does not mean an identical background will succeed for another. The Department considers the specific facts of each case, the current country conditions, the credibility of the claims, and all available evidence. No registered migration agent can guarantee an outcome. Lodging a protection claim without a genuine basis can seriously affect your future migration prospects.
          </Callout>
        </div>
      </section>

      {/* ── SECTION: The process ────────────────────────────────── */}
      <section id="process" style={{ background: '#ffffff', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="What to expect" title="The Protection Visa Assessment Process" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            The Protection visa process involves several distinct stages. Being prepared at each stage — particularly the protection interview — is important to presenting your claims clearly and consistently.
          </p>

          <StepTimeline steps={STEPS} accent={ACCENT} />

          <div style={{ marginTop: 40 }}>
            <Callout variant="note" panel={true} title="Seek advice before lodging — the initial application matters">
              The claims you make in the original application and at the protection interview are critically important. Inconsistencies between what is stated initially and what is said later can be used adversely in assessing credibility. A registered migration agent (MARN 2619467) or migration lawyer can help you understand what evidence to gather and how to clearly articulate your claims before you lodge.
            </Callout>
          </div>
        </div>
      </section>

      {/* ── SECTION: Bridging visa ──────────────────────────────── */}
      <section id="bridging" style={{ background: '#f8fafd', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="While you wait" title="Bridging Visa and Work Rights During Processing" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            On lodgement of a valid Protection visa application, you are typically issued a Bridging visa A (BVA) if you do not already hold a substantive visa. The bridging visa allows you to remain lawfully in Australia while the Department processes your application.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 32 }}>
            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 14 }}>What the bridging visa provides</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Lawful status in Australia during processing',
                  'Protection from removal while the application is pending (with some exceptions)',
                  'The right to apply for a further bridging visa if the first application is refused and review rights remain live',
                ].map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: `${ACCENT}14`, border: `1px solid ${ACCENT}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="check" size={10} color={ACCENT} />
                    </div>
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 14 }}>Work rights on the bridging visa</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Work rights on a bridging visa are not automatic for all Protection visa applicants',
                  'Some bridging visas include a work entitlement; others do not',
                  'If your bridging visa does not include a work entitlement, you may apply for one if you can demonstrate financial need',
                  'Check the conditions on your specific bridging visa — a registered migration agent can help you understand what you are entitled to',
                ].map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(245,161,36,0.12)', border: '1px solid rgba(245,161,36,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="info" size={10} color={GOLD} />
                    </div>
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Callout variant="note" panel={true} title="Travel on a bridging visa">
            A standard Bridging visa A does not include travel — if you leave Australia while on a BVA, you cannot return on it. If you need to travel, you may need to apply for a Bridging visa B (BVB) before departing. Departing without the right travel entitlement may affect your bridging visa and your pending Protection visa application.
          </Callout>
        </div>
      </section>

      {/* ── SECTION: Charges ────────────────────────────────────── */}
      <section id="charges" style={{ background: '#ffffff', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="What it costs" title="Application Charge for the Protection Visa (866)" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 24 }}>
            As of August 2026, there is no government application charge for the Protection visa (subclass 866). This means the visa application itself can be lodged without paying a fee to the Department of Home Affairs.
          </p>

          <Callout variant="warning" panel={true} title="Confirm the current charge position on the DoHA website">
            Visa charges can be introduced or changed by the government at any time. Confirm the current charge for the Protection visa (866) on the Department of Home Affairs website before lodging your application.
          </Callout>

          <div style={{ marginTop: 32, padding: 24, background: '#f8fafd', border: '1px solid #e8edf6', borderRadius: 12 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Professional advice fees</div>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              While the government charge is currently nil, seeking advice from a registered migration agent (MARN) or migration lawyer does involve professional fees. The cost of professional advice at the application stage — to ensure your claims are clearly and consistently articulated — is generally much lower than the cost of an unsuccessful application, an ART review, or a failed judicial review attempt. Nanak Migration Group (MARN 2619467) can discuss the scope of advice and assistance available for protection visa matters.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION: ART review ─────────────────────────────────── */}
      <section id="art-review" style={{ background: '#f8fafd', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="If you are refused" title="Review Rights at the ART" accent={ACCENT} />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            If the Department refuses your Protection visa application, you generally have the right to apply to the Administrative Review Tribunal (ART) for a merits review of the decision. The ART conducts a fresh review of the protection claims — it is not limited to what the Department considered and is not bound by the Department's findings.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12, marginBottom: 32 }}>
            {[
              {
                num: '01',
                title: 'Strict time limit for lodging the ART application',
                desc: "The time limit for applying to the ART is stated in the refusal letter — it is typically 9 working days for onshore decisions. This is extremely tight. Missing the deadline may mean you lose your right to review. If you receive a refusal decision, seek advice from a registered migration agent or migration lawyer immediately — do not wait.",
              },
              {
                num: '02',
                title: 'The ART considers all claims afresh',
                desc: "The ART's review is a merits review — it considers the protection claims on their merits and is not bound by the Department's reasoning. It may accept claims the Department rejected, or it may take a different view of the evidence. You may present additional evidence and witnesses at the ART hearing.",
              },
              {
                num: '03',
                title: 'If the ART affirms the refusal',
                desc: "If the ART affirms the Department's refusal, you may have limited rights of judicial review in the Federal courts — but judicial review is a review of legal process, not a reconsideration of the merits. Judicial review applications must be lodged within strict time limits. You should seek specialist legal advice if you are considering judicial review.",
              },
            ].map(step => (
              <div key={step.num} style={{ borderLeft: `4px solid ${ACCENT}`, background: '#fff', padding: '20px 24px', borderRadius: '0 12px 12px 0' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: ACCENT, letterSpacing: '0.1em' }}>{step.num}</span>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>{step.title}</div>
                </div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <Callout variant="warning" panel={true} title="Act immediately if you receive a refusal decision">
            The time limit for lodging an ART review of a Protection visa refusal is very short. If you receive a refusal, do not delay in seeking advice and lodging the ART application if you wish to pursue a review. Missing the deadline generally removes your right to a merits review.
          </Callout>
        </div>
      </section>

      {/* ── SECTION: FAQ ────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#ffffff', padding: '72px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Protection Visa (866) Questions Answered" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── SECTION: Related pages ──────────────────────────────── */}
      <section id="related" style={{ background: '#f8fafd', padding: '64px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Explore further" title="Related Pages" accent={ACCENT} marginBottom={36} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={3} />
        </div>
      </section>

      <CtaBand
        title="Seeking advice about the Protection visa process?"
        body="Nanak Migration Group (MARN 2619467) can explain the protection visa process and help you understand your options. No outcome can be guaranteed — but early, honest advice significantly improves the quality of your application."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
