import type { NavItem } from '@/components/layout/SiteHeader'
import { ROUTE } from './routes'

export const NAV_ITEMS: NavItem[] = [
  /* ── EMPLOYER SPONSORED ─────────────────────────────────── */
  {
    label: 'Employer Sponsored',
    categories: [
      {
        heading: 'Employer Sponsored Visas',
        icon: 'briefcase',
        items: [
          { label: 'Employer Sponsored Visas (hub)', desc: 'Overview of all employer sponsorship pathways — start here.', icon: 'briefcase', code: 'Hub',      route: ROUTE.employerSponsoredVisas },
          { label: 'Employer Nomination Scheme',     desc: 'Permanent residency via employer nomination.',                icon: 'award',     code: '186',      route: ROUTE.employerNominationScheme },
          { label: '186 Skill Requirements',         desc: 'Qualifications and experience criteria for the 186 visa.',   icon: 'clipboard', code: '186 Skills', route: ROUTE.skill186Requirements },
          { label: '186 Occupations List',           desc: 'Browse eligible occupations for employer nomination.',        icon: 'layers',    code: '186',      route: ROUTE.occupationList186 },
          { label: 'Skills in Demand',               desc: 'The new skills-based employer sponsorship visa from Dec 2023.', icon: 'star',    code: 'SID',      route: ROUTE.skillsInDemandVisa },
        ],
      },
      {
        heading: 'Sponsorship & Compliance',
        icon: 'tool',
        items: [
          { label: '482 to PR Pathway',            desc: 'Transition from SID (482) to permanent residence via 186 TRT.', icon: 'arrowright', code: '482→PR', route: ROUTE.pathway482ToPR },
          { label: 'Standard Business Sponsorship', desc: 'How to become an approved employer sponsor — step by step.', icon: 'building', code: 'SBS',    route: ROUTE.standardBusinessSponsorship },
          { label: 'Core Skills Occupation List',   desc: 'Eligible occupations for the Core Skills stream.',            icon: 'layers',   code: 'CSOL',  route: ROUTE.coreSkillsOccupationList },
        ],
      },
      { heading: 'Speak to an Expert', icon: 'phone', isContact: true, items: [] },
    ],
  },

  /* ── SKILLED ────────────────────────────────────────────── */
  {
    label: 'Skilled',
    categories: [
      {
        heading: 'Skilled Migration',
        icon: 'star',
        items: [
          { label: 'Skilled Migration (hub)',           desc: 'Overview of all points-tested and skilled visa pathways — start here.', icon: 'star',          code: 'Hub', route: ROUTE.skilledMigration },
          { label: 'Skilled Independent',               desc: 'Points-tested permanent residency — no sponsor required.',              icon: 'shield',        code: '189', route: ROUTE.skilledIndependent189 },
          { label: 'Skilled Nominated',                 desc: 'State or territory nominated permanent skilled visa.',                  icon: 'flag',          code: '190', route: ROUTE.skilledNominated190 },
          { label: 'Skilled Work Regional (Provisional)', desc: 'Live and work regionally with a pathway to PR.',                     icon: 'mappin',        code: '491', route: ROUTE.skilledWorkRegional491 },
          { label: 'Temporary Graduate',                desc: 'Work in Australia after completing your Australian degree.',            icon: 'graduationcap', code: '485', route: ROUTE.temporaryGraduate485 },
        ],
      },
      {
        heading: 'The Points System',
        icon: 'hash',
        items: [
          { label: 'Points Test Explained', desc: 'How the points test works and what scores are needed.', icon: 'hash',     code: 'Pts', route: ROUTE.pointsTest },
          { label: 'Skills Assessment',     desc: 'Which assessing authority covers your occupation.',     icon: 'check',    code: 'SA',  route: ROUTE.skillsAssessment },
        ],
      },
      {
        heading: 'Requirements',
        icon: 'clipboard',
        items: [
          { label: 'State Nomination Requirements', desc: 'Each state has unique criteria — find yours here.',           icon: 'mappin',  code: '190/491', route: ROUTE.stateNomination },
          { label: 'English Requirements',          desc: 'Minimum English scores for each skilled visa subclass.',      icon: 'bookopen', code: 'English', route: ROUTE.englishRequirements },
        ],
      },
      { heading: 'Speak to an Expert', icon: 'phone', isContact: true, items: [] },
    ],
  },

  /* ── STUDENT ────────────────────────────────────────────── */
  {
    label: 'Student',
    categories: [
      {
        heading: 'Student Visas',
        icon: 'graduationcap',
        items: [
          { label: 'Student Visas (hub)',         desc: 'Everything about studying in Australia on a student visa — start here.', icon: 'graduationcap', code: 'Hub', route: ROUTE.studentVisas },
          { label: 'Student Visa Detail',         desc: 'Conditions, work rights and requirements for the 500 visa.',            icon: 'bookopen',      code: '500', route: ROUTE.studentVisa500 },
          { label: 'Genuine Student Requirement', desc: 'The Genuine Student (GS) requirement, introduced 23 March 2024, replaced GTE — what you must demonstrate.', icon: 'check', code: 'GSR', route: ROUTE.genuineStudentRequirement },
        ],
      },
      {
        heading: 'Pathways & Requirements',
        icon: 'arrowright',
        items: [
          { label: 'Student to PR Pathway', desc: 'Step-by-step guide from student visa to permanent residence.', icon: 'arrowright', code: 'PR', route: ROUTE.studentToPRPathway },
        ],
      },
      { heading: 'Speak to an Expert', icon: 'phone', isContact: true, items: [] },
    ],
  },

  /* ── PARTNER & FAMILY ───────────────────────────────────── */
  {
    label: 'Partner & Family',
    categories: [
      {
        heading: 'Partner Visas',
        icon: 'heart',
        items: [
          { label: 'Partner and Family (hub)',    desc: 'All partner, parent, child and relative visa pathways — start here.', icon: 'heart',     code: 'Hub',      route: ROUTE.partnerFamilyVisas },
          { label: 'Partner Visa Onshore',        desc: 'Apply from inside Australia with your Australian partner.',           icon: 'home',      code: '820/801',  route: ROUTE.partnerVisa820801 },
          { label: 'Partner Visa Offshore',       desc: 'Apply from overseas to join your Australian partner.',                icon: 'plane',     code: '309/100',  route: ROUTE.partnerVisa309100 },
          { label: 'Prospective Marriage',        desc: 'Come to Australia to marry your intended partner.',                  icon: 'heart',     code: '300',      route: ROUTE.prospectiveMarriage300 },
          { label: 'Partner Visa Evidence Guide', desc: 'What evidence to gather for a partner visa application.',            icon: 'clipboard', code: 'Evidence', route: ROUTE.partnerVisaEvidence },
        ],
      },
      { heading: 'Speak to an Expert', icon: 'phone', isContact: true, items: [] },
    ],
  },

  /* ── VISITOR & OTHER ────────────────────────────────────── */
  {
    label: 'Visitor & Other',
    categories: [
      {
        heading: 'Status & Residency',
        icon: 'flag',
        items: [
          { label: 'Bridging Visas',         desc: 'Stay lawfully in Australia while your application is processed.', icon: 'link', code: 'BV',      route: ROUTE.bridgingVisas },
          { label: 'Australian Citizenship', desc: 'Requirements and steps to become an Australian citizen.',         icon: 'flag', code: 'Citizen', route: ROUTE.australianCitizenship },
        ],
      },
      { heading: 'Speak to an Expert', icon: 'phone', isContact: true, items: [] },
    ],
  },

  /* ── REVIEWS & COMPLEX ──────────────────────────────────── */
  {
    label: 'Reviews & Complex',
    categories: [
      {
        heading: 'Visa Refusals & Reviews',
        icon: 'scale',
        items: [
          { label: 'Visa Refusal and Review (hub)', desc: 'What to do when a visa is refused or cancelled.',              icon: 'scale',  code: 'Hub',    route: ROUTE.visaRefusalReview },
          { label: 'ART Review',                    desc: 'Apply to the Administrative Review Tribunal for a merits review.', icon: 'scale', code: 'ART', route: ROUTE.artReview },
        ],
      },
      { heading: 'Speak to an Expert', icon: 'phone', isContact: true, items: [] },
    ],
  },
]
