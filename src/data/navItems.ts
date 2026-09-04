import type { NavItem } from '@/components/layout/SiteHeader'
import { ROUTE } from './routes'

export const NAV_ITEMS: NavItem[] = [
  /* ── EMPLOYER SPONSORED ──────────────────────────────────────────────
     Column 1 shows 6 of 13 visa pages — rest reachable via hub "More pages" section.
     Column 2 shows 6 of 8 guide pages — Occupation Caveats and DAMA behind View All.
  ─────────────────────────────────────────────────────────────────────── */
  {
    label: 'Employer Sponsored',
    categories: [
      {
        heading: 'Employer Sponsored Visas',
        icon: 'briefcase',
        viewAllRoute: ROUTE.employerSponsoredVisas,
        items: [
          { label: 'Employer Sponsored Visas (hub)', desc: 'Overview of all employer sponsorship pathways — start here.',           icon: 'briefcase', code: 'Hub',  route: ROUTE.employerSponsoredVisas },
          { label: 'Skills in Demand (482)',          desc: 'Employer-sponsored temporary visa — Core Skills, Specialist and Foundation streams.', icon: 'star', code: 'SID',  route: ROUTE.skillsInDemandVisa },
          { label: 'Employer Nomination Scheme (186)', desc: 'Permanent residence via employer nomination.',                        icon: 'award',     code: '186',  route: ROUTE.employerNominationScheme },
          { label: '494 Regional Employer Sponsored', desc: '5-year provisional visa for workers in designated regional areas.',    icon: 'mappin',    code: '494',  route: ROUTE.visa494 },
          { label: '482 Core Skills Stream',          desc: 'For CSOL occupations meeting the CSIT ($79,499 p.a. from 1 Jul 2026).', icon: 'clipboard', code: 'Core', route: ROUTE.coreSkillsStream482 },
          { label: 'Training Visa (407)',              desc: 'Occupational training in an Australian workplace — up to 2 years.',     icon: 'graduationcap', code: '407', route: ROUTE.trainingVisa407 },
        ],
      },
      {
        heading: 'Guides & rules',
        icon: 'tool',
        viewAllRoute: ROUTE.employerSponsoredVisas,
        items: [
          { label: '482 to PR Pathway',            desc: 'Transition from SID (482) to permanent residence via 186 TRT.',  icon: 'arrowright', code: '482→PR', route: ROUTE.pathway482ToPR },
          { label: 'Standard Business Sponsorship', desc: 'How to become an approved employer sponsor — step by step.',    icon: 'building',  code: 'SBS',    route: ROUTE.standardBusinessSponsorship },
          { label: 'Core Skills Occupation List',   desc: 'Eligible occupations for the Core Skills stream — with caveats.', icon: 'layers',  code: 'CSOL',   route: ROUTE.coreSkillsOccupationList },
          { label: 'Sponsorship Obligations',       desc: 'Ongoing compliance requirements for approved sponsors.',        icon: 'shield',    code: 'SBS',    route: ROUTE.sponsorshipObligations },
          { label: 'SAF Levy',                      desc: 'Skilling Australians Fund levy rates, payment and refunds.',    icon: 'dollar',    code: 'SAF',    route: ROUTE.safLevy },
          { label: 'Labour Agreements',             desc: 'Company-specific, industry, DAMA and on-hire labour agreements.', icon: 'file',    code: 'LA',     route: ROUTE.labourAgreement },
        ],
      },
      { heading: 'Speak to an Expert', icon: 'phone', isContact: true, items: [] },
    ],
  },

  /* ── SKILLED ─────────────────────────────────────────────────────────
     Two columns of 6 replaces four uneven columns (7 + 2 + 2 + 3).
     Hidden: Skilled Regional 887 (visa col), Designated Regional Areas (guides col).
  ─────────────────────────────────────────────────────────────────────── */
  {
    label: 'Skilled',
    categories: [
      {
        heading: 'Skilled Visas',
        icon: 'star',
        viewAllRoute: ROUTE.skilledMigration,
        items: [
          { label: 'Skilled Migration (hub)',           desc: 'Overview of all points-tested and skilled visa pathways — start here.', icon: 'star',          code: 'Hub', route: ROUTE.skilledMigration },
          { label: 'Skilled Independent',               desc: 'Points-tested permanent residency — no sponsor required.',              icon: 'shield',        code: '189', route: ROUTE.skilledIndependent189 },
          { label: 'Skilled Nominated',                 desc: 'State or territory nominated permanent skilled visa.',                  icon: 'flag',          code: '190', route: ROUTE.skilledNominated190 },
          { label: 'Skilled Work Regional (Provisional)', desc: 'Live and work regionally with a pathway to PR.',                     icon: 'mappin',        code: '491', route: ROUTE.skilledWorkRegional491 },
          { label: 'Temporary Graduate',                desc: 'Work in Australia after completing your Australian degree.',            icon: 'graduationcap', code: '485', route: ROUTE.temporaryGraduate485 },
          { label: 'National Innovation Visa',          desc: 'Permanent residence for exceptional achievers in academia, sport, arts or technology.', icon: 'star', code: '858', route: ROUTE.nationalInnovationVisa },
        ],
      },
      {
        heading: 'Guides & Tools',
        icon: 'tool',
        viewAllRoute: ROUTE.skilledMigration,
        items: [
          { label: 'Points Test Explained', desc: 'How the points test works and what scores are needed.',                          icon: 'hash',      code: 'Pts',      route: ROUTE.pointsTest },
          { label: 'Skills Assessment',     desc: 'Which assessing authority covers your occupation.',                              icon: 'check',     code: 'SA',       route: ROUTE.skillsAssessment },
          { label: 'State Nomination',      desc: 'Each state has unique criteria — find yours here.',                              icon: 'mappin',    code: '190/491',  route: ROUTE.stateNomination },
          { label: 'English Requirements',  desc: 'Minimum English scores for each skilled visa subclass.',                        icon: 'bookopen',  code: 'English',  route: ROUTE.englishRequirements },
          { label: 'SkillSelect & EOI',     desc: 'How Expressions of Interest and invitation rounds work for 189, 190 and 491.',  icon: 'clipboard', code: 'EOI',      route: ROUTE.skillSelectEoi },
          { label: 'Invitation Rounds',     desc: 'How SkillSelect rounds work, why cutoffs vary, and what points are competitive.', icon: 'calendar', code: 'Rounds',   route: ROUTE.invitationRounds },
        ],
      },
      { heading: 'Speak to an Expert', icon: 'phone', isContact: true, items: [] },
    ],
  },

  /* ── STUDENT ─────────────────────────────────────────────────────────
     Two columns replace three (4 + 1 + 2). All 7 pages shown; nothing hidden.
  ─────────────────────────────────────────────────────────────────────── */
  {
    label: 'Student',
    categories: [
      {
        heading: 'Student Visas',
        icon: 'graduationcap',
        viewAllRoute: ROUTE.studentVisas,
        items: [
          { label: 'Student Visas (hub)',         desc: 'Everything about studying in Australia on a student visa — start here.', icon: 'graduationcap', code: 'Hub', route: ROUTE.studentVisas },
          { label: 'Student Visa (500)',           desc: 'Conditions, work rights and requirements for the 500 visa.',            icon: 'bookopen',      code: '500', route: ROUTE.studentVisa500 },
          { label: 'Genuine Student Requirement', desc: 'The GS requirement introduced March 2024 — what you must demonstrate.',  icon: 'check',         code: 'GSR', route: ROUTE.genuineStudentRequirement },
          { label: 'Student Guardian Visa (590)', desc: 'For a parent or relative caring for an under-18 international student.', icon: 'user',          code: '590', route: ROUTE.studentGuardian590 },
          { label: 'Student to PR Pathway',       desc: 'Step-by-step guide from student visa to permanent residence.',           icon: 'arrowright',    code: 'PR',  route: ROUTE.studentToPRPathway },
        ],
      },
      {
        heading: 'Guides & rules',
        icon: 'tool',
        viewAllRoute: ROUTE.studentVisas,
        items: [
          { label: 'Courses with PR Prospects', desc: 'Which fields of study lead to skills-assessable occupations and strong PR pathways.', icon: 'graduationcap', code: 'PR',    route: ROUTE.coursesPRProspects },
          { label: 'Student Financial Capacity', desc: 'Funds evidence required for the subclass 500 — living costs, course fees and evidence types.', icon: 'dollar', code: 'Funds', route: ROUTE.studentFinancialCapacity },
        ],
      },
      { heading: 'Speak to an Expert', icon: 'phone', isContact: true, items: [] },
    ],
  },

  /* ── PARTNER & FAMILY ────────────────────────────────────────────────
     4 columns (was 5). Guides & rules merged into Parent Visas column.
     Child & Relative: ADR (114/838) and Orphan (117/837) behind View All.
     Parent Visas: 173, 804, 103, 884 behind View All.
  ─────────────────────────────────────────────────────────────────────── */
  {
    label: 'Partner & Family',
    categories: [
      {
        heading: 'Partner & Spouse',
        icon: 'heart',
        viewAllRoute: ROUTE.partnerFamilyVisas,
        items: [
          { label: 'Partner and Family (hub)',    desc: 'All partner, parent, child and relative visa pathways — start here.', icon: 'heart',     code: 'Hub',      route: ROUTE.partnerFamilyVisas },
          { label: 'Partner Visa Onshore',        desc: 'Apply from inside Australia with your Australian partner.',           icon: 'home',      code: '820/801',  route: ROUTE.partnerVisa820801 },
          { label: 'Partner Visa Offshore',       desc: 'Apply from overseas to join your Australian partner.',                icon: 'plane',     code: '309/100',  route: ROUTE.partnerVisa309100 },
          { label: 'Prospective Marriage',        desc: 'Come to Australia to marry your intended partner.',                  icon: 'heart',     code: '300',      route: ROUTE.prospectiveMarriage300 },
          { label: 'Partner Visa Evidence Guide', desc: 'What evidence to gather for a partner visa application.',            icon: 'clipboard', code: 'Evidence', route: ROUTE.partnerVisaEvidence },
          { label: 'NZ Family Relationship (461)', desc: '5-year temporary visa for non-NZ family members of a NZ citizen on a 444 visa.', icon: 'home', code: '461', route: ROUTE.nzFamilyRelationship461 },
        ],
      },
      {
        heading: 'Child & Relative',
        icon: 'user',
        viewAllRoute: ROUTE.partnerFamilyVisas,
        items: [
          { label: 'Child Visa (Offshore 101)',    desc: 'Permanent child visa for a dependent child applying from outside Australia.', icon: 'user',  code: '101',      route: ROUTE.childVisa101 },
          { label: 'Child Visa (Onshore 802)',     desc: 'Permanent child visa for a dependent child already in Australia.',          icon: 'user',  code: '802',      route: ROUTE.childVisa802 },
          { label: 'Carer Visa (116 & 836)',        desc: 'Permanent visa for a carer of an Australian relative with a long-term medical condition.', icon: 'heart', code: '116/836', route: ROUTE.carerVisa },
          { label: 'Remaining Relative (115 & 835)', desc: 'All near relatives settled in Australia — strict test, long queue.',      icon: 'user',  code: '115/835',  route: ROUTE.remainingRelativeVisa },
          { label: 'Adoption Visa (102)',           desc: 'Permanent visa for a child adopted outside Australia by an Australian parent.', icon: 'user', code: '102',   route: ROUTE.adoptionVisa102 },
          { label: 'Dependent Child (445)',         desc: 'Temporary child visa joining a parent on a temporary partner visa (309 or 820).', icon: 'user', code: '445', route: ROUTE.dependentChild445 },
        ],
      },
      {
        heading: 'Parent Visas',
        icon: 'user',
        viewAllRoute: ROUTE.parentVisas,
        items: [
          { label: 'Parent Visas (hub)',            desc: 'Compare all parent visa pathways — costs, queues, and permanence.',   icon: 'user',      code: 'Hub',  route: ROUTE.parentVisas },
          { label: 'Contributory Parent (143)',     desc: 'Permanent parent visa — ~AUD 95,000 charges, 12–15 year queue.',      icon: 'dollar',    code: '143',  route: ROUTE.contributoryParent143 },
          { label: 'Sponsored Parent (Temporary)', desc: 'Live in Australia for up to 10 years — no Balance of Family test.',   icon: 'calendar',  code: '870',  route: ROUTE.sponsoredParent870 },
          { label: 'Contributory Aged Parent 864', desc: 'Contributory permanent parent visa for pension-age parents onshore.',  icon: 'award',     code: '864',  route: ROUTE.contributoryAgedParent864 },
          { label: 'Balance of Family Test',       desc: 'Whether your family passes — worked examples with different family spreads.', icon: 'check', code: 'BoFT', route: ROUTE.balanceOfFamilyTest },
          { label: 'Assurance of Support',         desc: 'Income test, refundable bond and AoS period for permanent parent visas.', icon: 'building', code: 'AoS', route: ROUTE.assuranceOfSupport },
        ],
      },
      { heading: 'Speak to an Expert', icon: 'phone', isContact: true, items: [] },
    ],
  },

  /* ── VISITOR & OTHER ─────────────────────────────────────────────────
     Visitor Visas: 6 of 8 shown. Work and Holiday 462 and RRV behind View All.
     Status & Residency: all 4 shown.
  ─────────────────────────────────────────────────────────────────────── */
  {
    label: 'Visitor & Other',
    categories: [
      {
        heading: 'Visitor Visas',
        icon: 'plane',
        viewAllRoute: ROUTE.visitorVisas,
        items: [
          { label: 'Visitor Visas (hub)',     desc: 'Compare eVisitor, ETA and subclass 600 — choose the right option for your passport.', icon: 'plane',  code: 'Hub', route: ROUTE.visitorVisas },
          { label: 'Visitor Visa (600)',       desc: 'The universal visitor visa — tourist, sponsored family, business and frequent traveller streams.', icon: 'plane', code: '600', route: ROUTE.visitorVisa600 },
          { label: 'ETA (601)',               desc: 'Digital entry authority via the Australian ETA app — eligible passport holders, ~AUD 20 charge.', icon: 'plane', code: '601', route: ROUTE.eta601 },
          { label: 'eVisitor (651)',           desc: 'Free entry authority for eligible European passport holders — applied through ImmiAccount.', icon: 'plane', code: '651', route: ROUTE.evisitor651 },
          { label: 'Working Holiday (417)',   desc: 'Holiday and work in Australia for 12 months — partner country passport holders aged 18–35.', icon: 'plane', code: '417', route: ROUTE.workingHoliday417 },
          { label: 'Medical Treatment (602)', desc: 'For patients, supporting carers, and organ donors travelling to Australia for medical care.', icon: 'heart', code: '602', route: ROUTE.medicalTreatment602 },
        ],
      },
      {
        heading: 'Status & Residency',
        icon: 'flag',
        viewAllRoute: ROUTE.visitorVisas,
        items: [
          { label: 'Bridging Visas',              desc: 'Stay lawfully in Australia while your application is processed.',         icon: 'link',   code: 'BV',      route: ROUTE.bridgingVisas },
          { label: 'Australian Citizenship',      desc: 'Requirements and steps to become an Australian citizen.',                 icon: 'flag',   code: 'Citizen', route: ROUTE.australianCitizenship },
          { label: 'Protection Visa (866)',        desc: 'Onshore permanent protection visa for refugees and people in need of complementary protection.', icon: 'shield', code: '866', route: ROUTE.protectionVisa866 },
          { label: 'Special Category Visa (444)', desc: "Automatically granted to NZ citizens on arrival — full work rights, Medicare, and a direct citizenship pathway since July 2023.", icon: 'flag', code: '444', route: ROUTE.specialCategory444 },
        ],
      },
      { heading: 'Speak to an Expert', icon: 'phone', isContact: true, items: [] },
    ],
  },

  /* ── REVIEWS & COMPLEX ───────────────────────────────────────────────
     Two content columns (4 + 6) replace three (4 + 4 + 3).
     Natural Justice & s57 moves behind View All in merged Bars & Complex column.
  ─────────────────────────────────────────────────────────────────────── */
  {
    label: 'Reviews & Complex',
    categories: [
      {
        heading: 'Visa Refusals & Reviews',
        icon: 'scale',
        viewAllRoute: ROUTE.visaRefusalReview,
        items: [
          { label: 'Visa Refusal and Review (hub)', desc: 'What to do when a visa is refused or cancelled.',              icon: 'scale',  code: 'Hub',    route: ROUTE.visaRefusalReview },
          { label: 'ART Review',                    desc: 'Apply to the Administrative Review Tribunal for a merits review.', icon: 'scale', code: 'ART', route: ROUTE.artReview },
          { label: 'Visa Cancellation',             desc: 'Cancellation powers (s116, s501, s109), NOICC process and responding.', icon: 'alert', code: 'Cancel', route: ROUTE.visaCancellation },
          { label: 'Ministerial Intervention',      desc: 'Last-resort request to the Minister under s351/s417 — non-compellable, very few succeed.', icon: 'shield', code: 's351', route: ROUTE.ministerialIntervention },
        ],
      },
      {
        heading: 'Bars & Complex',
        icon: 'shield',
        viewAllRoute: ROUTE.visaRefusalReview,
        items: [
          { label: 'Section 48 Bar',         desc: 'Barred from most onshore applications — exempt visas and strategies.',               icon: 'shield',    code: 's48',    route: ROUTE.section48Bar },
          { label: 'PIC 4020',               desc: 'Integrity criterion — 3-year and 10-year bans, waiver and prevention.',             icon: 'shield',    code: '4020',   route: ROUTE.pic4020 },
          { label: 'Schedule 3',             desc: 'Extra criteria for unlawful or bridging visa holders applying for a partner visa.',  icon: 'clipboard', code: 'Sch 3',  route: ROUTE.schedule3 },
          { label: 'No Further Stay (8503)', desc: 'How condition 8503 works, VEVO check, waiver test and protection exception.',        icon: 'alert',     code: '8503',   route: ROUTE.noFurtherStay8503 },
          { label: 'Health Waivers',         desc: 'PIC 4005 vs 4007, undue cost and prejudice test, process and evidence guide.',      icon: 'shield',    code: 'Health', route: ROUTE.healthWaiver },
          { label: 'Re-entry Bans',          desc: 'PIC 4013 and 4014 exclusion periods, 28-day rule and waiver for partner visas.',    icon: 'alert',     code: '4013/4', route: ROUTE.reEntryBans },
        ],
      },
      { heading: 'Speak to an Expert', icon: 'phone', isContact: true, items: [] },
    ],
  },
]
