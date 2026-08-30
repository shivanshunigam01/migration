export interface VisaProfile {
  code: string
  name: string
  subclass: string
  permanence: string
  nominationRequired: string
  pointsTest: string
  typicalApplicant: string
  processingTime: string
  pathwayFrom: string
  notes: string
}

export const VISA_PROFILES: VisaProfile[] = [
  {
    code: '189',
    name: 'Skilled Independent',
    subclass: 'Subclass 189',
    permanence: 'Permanent on grant',
    nominationRequired: 'No nomination required',
    pointsTest: 'Yes — minimum 65 points required',
    typicalApplicant: 'Skilled worker with ANZSCO occupation, positive skills assessment, and competitive points score',
    processingTime: 'Processing times vary; the Department publishes indicative times on its website',
    pathwayFrom: 'SkillSelect EOI → invitation round → application lodgement',
    notes: 'Invitation scores are competitive and vary by occupation and invitation round.',
  },
  {
    code: '190',
    name: 'Skilled Nominated',
    subclass: 'Subclass 190',
    permanence: 'Permanent on grant',
    nominationRequired: 'State or territory nomination required (5 extra points)',
    pointsTest: 'Yes — minimum 65 points required',
    typicalApplicant: 'Skilled worker whose occupation is on a state nomination list and who meets state-specific criteria',
    processingTime: 'Processing times vary; state nomination processing is separate and varies by state',
    pathwayFrom: 'State nomination application → SkillSelect EOI → invitation → application',
    notes: 'Each state and territory sets its own criteria and occupation lists, which change regularly.',
  },
  {
    code: '491',
    name: 'Skilled Work Regional (Provisional)',
    subclass: 'Subclass 491',
    permanence: 'Provisional — must apply for subclass 191 after 3 years',
    nominationRequired: 'State/territory or eligible relative sponsorship required (15 extra points)',
    pointsTest: 'Yes — minimum 65 points required',
    typicalApplicant: 'Skilled worker willing to live and work in a designated regional area for at least 3 years',
    processingTime: 'Processing times vary; pathway to 191 PR requires 3 years regional residence',
    pathwayFrom: 'Nomination/sponsorship → SkillSelect EOI → invitation → application → 191 (PR) after 3 years',
    notes: "You must genuinely live and work in a designated regional area — the Department monitors compliance.",
  },
  {
    code: '482',
    name: 'Skills in Demand (formerly TSS)',
    subclass: 'Subclass 482',
    permanence: 'Temporary — pathways to PR via 186 TRT or other routes',
    nominationRequired: 'Approved Standard Business Sponsor must nominate you',
    pointsTest: 'No points test',
    typicalApplicant: 'Overseas worker with a job offer from an approved Australian employer in an eligible occupation',
    processingTime: 'Processing times vary depending on stream and individual circumstances',
    pathwayFrom: 'Employer becomes SBS → employer nominates → applicant applies',
    notes: 'The Core Skills stream requires the employer to pay at or above the Temporary Skilled Migration Income Threshold (TSMIT).',
  },
  {
    code: '186',
    name: 'Employer Nomination Scheme',
    subclass: 'Subclass 186',
    permanence: 'Permanent on grant',
    nominationRequired: 'Employer nomination required (Standard Business Sponsor)',
    pointsTest: 'No points test (skills assessment may be required)',
    typicalApplicant: 'Worker nominated by an Australian employer, often transitioning from a 482 visa (TRT stream) or applying directly (Direct Entry stream)',
    processingTime: 'Processing times vary by stream; TRT stream generally processes faster than Direct Entry',
    pathwayFrom: 'Employer nominates → applicant applies (Direct Entry or TRT stream)',
    notes: 'The Temporary Residence Transition (TRT) stream requires at least 2 years employment with the nominating employer.',
  },
  {
    code: '485',
    name: 'Temporary Graduate',
    subclass: 'Subclass 485',
    permanence: 'Temporary — typically 2–4 years depending on stream and qualification',
    nominationRequired: 'No nomination required',
    pointsTest: 'No points test',
    typicalApplicant: 'Recent graduate of an Australian institution seeking work experience before applying for skilled or employer-sponsored visas',
    processingTime: 'Processing times vary; applicants must apply within 6 months of course completion in most cases',
    pathwayFrom: 'Australian qualification completion → 485 application → gain work experience → skilled/sponsored pathway',
    notes: 'This visa is generally a stepping stone — most holders aim to transition to a skilled or employer-sponsored permanent visa.',
  },
]
