// Single source of truth for all canonical page routes.
// navItems.ts uses ROUTE.* for the route property on each NavSubItem.
// SiteFooter uses ROUTE.* for the route property on each footer link.
// The Next.js implementation should derive its pages and 301-redirect rules from CANONICAL_ROUTES.

export type PageArchetype = 'Hub' | 'Flagship' | 'Standard' | 'Support'
export type RouteCategory =
  | 'Employer Sponsored'
  | 'Skilled'
  | 'Student'
  | 'Partner & Family'
  | 'Visitor & Other'
  | 'Reviews'
  | 'Practice'

export interface CanonicalRoute {
  readonly path: string
  readonly title: string
  readonly category: RouteCategory
  readonly archetype: PageArchetype
}

// Typed dot-access shortcuts — use these everywhere instead of bare string literals.
export const ROUTE = {
  // Employer Sponsored
  employerSponsoredVisas:      'employer-sponsored-visas',
  employerNominationScheme:    'employer-nomination-scheme',
  skill186Requirements:        '186-skill-requirements',
  occupationList186:           '186-occupations-list',
  skillsInDemandVisa:          'skills-in-demand-visa',
  pathway482ToPR:              '482-to-pr-pathway',
  standardBusinessSponsorship: 'standard-business-sponsorship',
  coreSkillsOccupationList:    'core-skills-occupation-list',
  // Skilled
  skilledMigration:            'skilled-migration',
  skilledIndependent189:       'skilled-independent-189',
  skilledNominated190:         'skilled-nominated-190',
  skilledWorkRegional491:      'skilled-work-regional-491',
  temporaryGraduate485:        'temporary-graduate-485',
  pointsTest:                  'points-test',
  skillsAssessment:            'skills-assessment',
  stateNomination:             'state-nomination',
  englishRequirements:         'english-requirements',
  // Student
  studentVisas:                'student-visas',
  studentVisa500:              'student-visa-500',
  genuineStudentRequirement:   'genuine-student-requirement',
  studentToPRPathway:          'student-to-pr-pathway',
  // Partner & Family
  partnerFamilyVisas:          'partner-family-visas',
  partnerVisa820801:           'partner-visa-820-801',
  partnerVisa309100:           'partner-visa-309-100',
  prospectiveMarriage300:      'prospective-marriage-300',
  partnerVisaEvidence:         'partner-visa-evidence',
  // Visitor & Other
  bridgingVisas:               'bridging-visas',
  australianCitizenship:       'australian-citizenship',
  // Reviews
  visaRefusalReview:           'visa-refusal-review',
  artReview:                   'art-review',
  // Practice
  resources:                   'resources',
  guides:                      'guides',
  blog:                        'blog',
  checklists:                  'checklists',
  tools:                       'tools',
  bookConsultation:            'book-consultation',
} as const

// Full typed list — the Next.js team derives page routes and 301 redirects from this.
export const CANONICAL_ROUTES: readonly CanonicalRoute[] = [
  { path: ROUTE.employerSponsoredVisas,      title: 'Employer Sponsored Visas',          category: 'Employer Sponsored', archetype: 'Hub'      },
  { path: ROUTE.employerNominationScheme,    title: 'Employer Nomination Scheme (186)',   category: 'Employer Sponsored', archetype: 'Standard' },
  { path: ROUTE.skill186Requirements,        title: '186 Skill Requirements',             category: 'Employer Sponsored', archetype: 'Support'  },
  { path: ROUTE.occupationList186,           title: '186 Occupations List',               category: 'Employer Sponsored', archetype: 'Support'  },
  { path: ROUTE.skillsInDemandVisa,          title: 'Skills in Demand (482) Visa',        category: 'Employer Sponsored', archetype: 'Flagship' },
  { path: ROUTE.pathway482ToPR,              title: '482 to PR Pathway',                  category: 'Employer Sponsored', archetype: 'Standard' },
  { path: ROUTE.standardBusinessSponsorship, title: 'Standard Business Sponsorship',      category: 'Employer Sponsored', archetype: 'Support'  },
  { path: ROUTE.coreSkillsOccupationList,    title: 'Core Skills Occupation List (CSOL)', category: 'Employer Sponsored', archetype: 'Support'  },
  { path: ROUTE.skilledMigration,            title: 'Skilled Migration',                  category: 'Skilled',            archetype: 'Hub'      },
  { path: ROUTE.skilledIndependent189,       title: 'Skilled Independent (189)',          category: 'Skilled',            archetype: 'Flagship' },
  { path: ROUTE.skilledNominated190,         title: 'Skilled Nominated (190)',            category: 'Skilled',            archetype: 'Standard' },
  { path: ROUTE.skilledWorkRegional491,      title: 'Skilled Work Regional (491)',        category: 'Skilled',            archetype: 'Standard' },
  { path: ROUTE.temporaryGraduate485,        title: 'Temporary Graduate (485)',           category: 'Skilled',            archetype: 'Standard' },
  { path: ROUTE.pointsTest,                  title: 'Points Test Explained',              category: 'Skilled',            archetype: 'Flagship' },
  { path: ROUTE.skillsAssessment,            title: 'Skills Assessment',                  category: 'Skilled',            archetype: 'Support'  },
  { path: ROUTE.stateNomination,             title: 'State Nomination Requirements',      category: 'Skilled',            archetype: 'Support'  },
  { path: ROUTE.englishRequirements,         title: 'English Requirements',               category: 'Skilled',            archetype: 'Support'  },
  { path: ROUTE.studentVisas,                title: 'Student Visas',                      category: 'Student',            archetype: 'Hub'      },
  { path: ROUTE.studentVisa500,              title: 'Student Visa (500)',                 category: 'Student',            archetype: 'Standard' },
  { path: ROUTE.genuineStudentRequirement,   title: 'Genuine Student Requirement',        category: 'Student',            archetype: 'Flagship' },
  { path: ROUTE.studentToPRPathway,          title: 'Student to PR Pathway',              category: 'Student',            archetype: 'Standard' },
  { path: ROUTE.partnerFamilyVisas,          title: 'Partner & Family Visas',             category: 'Partner & Family',   archetype: 'Hub'      },
  { path: ROUTE.partnerVisa820801,           title: 'Partner Visa Onshore (820/801)',     category: 'Partner & Family',   archetype: 'Standard' },
  { path: ROUTE.partnerVisa309100,           title: 'Partner Visa Offshore (309/100)',    category: 'Partner & Family',   archetype: 'Standard' },
  { path: ROUTE.prospectiveMarriage300,      title: 'Prospective Marriage (300)',         category: 'Partner & Family',   archetype: 'Standard' },
  { path: ROUTE.partnerVisaEvidence,         title: 'Partner Visa Evidence Guide',        category: 'Partner & Family',   archetype: 'Support'  },
  { path: ROUTE.bridgingVisas,               title: 'Bridging Visas Explained',           category: 'Visitor & Other',    archetype: 'Support'  },
  { path: ROUTE.australianCitizenship,       title: 'Australian Citizenship',             category: 'Visitor & Other',    archetype: 'Flagship' },
  { path: ROUTE.visaRefusalReview,           title: 'Visa Refusal & Review',              category: 'Reviews',            archetype: 'Hub'      },
  { path: ROUTE.artReview,                   title: 'ART Review',                         category: 'Reviews',            archetype: 'Standard' },
  { path: ROUTE.resources,                   title: 'Resources',                          category: 'Practice',           archetype: 'Support'  },
  { path: ROUTE.guides,                      title: 'Visa Guides',                         category: 'Practice',           archetype: 'Support'  },
  { path: ROUTE.blog,                        title: 'Migration Blog',                      category: 'Practice',           archetype: 'Support'  },
  { path: ROUTE.checklists,                  title: 'Visa Checklists',                     category: 'Practice',           archetype: 'Support'  },
  { path: ROUTE.tools,                      title: 'Migration Tools',                      category: 'Practice',           archetype: 'Support'  },
]
