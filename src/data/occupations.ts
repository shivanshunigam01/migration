// SAMPLE DATA — replace with the full Department of Home Affairs occupation list.
// Source: https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list
// Occupation lists are updated periodically; verify currency before use.

export type OccupationList = 'CSOL' | 'MLTSSL' | 'STSOL' | 'ROL'

export interface Occupation {
  anzscoCode: string
  title: string
  list: OccupationList
  assessingAuthority: string
  visas: string[]
  caveats?: string
}

// ---------------------------------------------------------------------------
// TRADES
// ---------------------------------------------------------------------------
const TRADES: Occupation[] = [
  {
    anzscoCode: '341111',
    title: 'Electrician (General)',
    list: 'CSOL',
    assessingAuthority: 'TRA',
    visas: ['482', '186', '494'],
  },
  {
    anzscoCode: '334111',
    title: 'Plumber (General)',
    list: 'CSOL',
    assessingAuthority: 'TRA',
    visas: ['482', '186', '494'],
  },
  {
    anzscoCode: '331211',
    title: 'Carpenter and Joiner',
    list: 'CSOL',
    assessingAuthority: 'TRA',
    visas: ['482', '186', '494'],
  },
  {
    anzscoCode: '321211',
    title: 'Motor Mechanic (General)',
    list: 'CSOL',
    assessingAuthority: 'TRA',
    visas: ['482', '186', '494'],
  },
  {
    anzscoCode: '342111',
    title: 'Air Conditioning and Refrigeration Mechanic',
    list: 'CSOL',
    assessingAuthority: 'TRA',
    visas: ['482', '186', '494'],
  },
  {
    anzscoCode: '331111',
    title: 'Bricklayer',
    list: 'CSOL',
    assessingAuthority: 'TRA',
    visas: ['482', '186', '494'],
  },
  {
    anzscoCode: '323211',
    title: 'Sheetmetal Trades Worker',
    list: 'STSOL',
    assessingAuthority: 'TRA',
    visas: ['482'],
    caveats: 'Short-term stream only; not available for 186 Direct Entry.',
  },
  {
    anzscoCode: '322313',
    title: 'Welder (First Class)',
    list: 'CSOL',
    assessingAuthority: 'TRA',
    visas: ['482', '186', '494'],
  },
  {
    anzscoCode: '342314',
    title: 'Electronic Instrument Trades Worker (General)',
    list: 'CSOL',
    assessingAuthority: 'TRA',
    visas: ['482', '186', '494'],
  },
  {
    anzscoCode: '394213',
    title: 'Cabinetmaker',
    list: 'STSOL',
    assessingAuthority: 'TRA',
    visas: ['482'],
    caveats: 'Short-term stream only; caveats may apply.',
  },
]

// ---------------------------------------------------------------------------
// HEALTH & ALLIED HEALTH
// ---------------------------------------------------------------------------
const HEALTH: Occupation[] = [
  {
    anzscoCode: '254412',
    title: 'Registered Nurse (Aged Care)',
    list: 'MLTSSL',
    assessingAuthority: 'ANMAC',
    visas: ['482', '186', '189', '190', '494'],
  },
  {
    anzscoCode: '254413',
    title: 'Registered Nurse (Child and Family Health)',
    list: 'MLTSSL',
    assessingAuthority: 'ANMAC',
    visas: ['482', '186', '189', '190', '494'],
  },
  {
    anzscoCode: '253111',
    title: 'General Medical Practitioner',
    list: 'MLTSSL',
    assessingAuthority: 'MedBA',
    visas: ['482', '186', '189', '190'],
    caveats: 'Registration with AHPRA required. Caveats apply regarding practice location.',
  },
  {
    anzscoCode: '251511',
    title: 'Hospital Pharmacist',
    list: 'CSOL',
    assessingAuthority: 'APharmC',
    visas: ['482', '186', '190', '491'],
  },
  {
    anzscoCode: '251513',
    title: 'Retail Pharmacist',
    list: 'CSOL',
    assessingAuthority: 'APharmC',
    visas: ['482', '186', '190', '491'],
  },
  {
    anzscoCode: '252511',
    title: 'Physiotherapist',
    list: 'MLTSSL',
    assessingAuthority: 'APC',
    visas: ['482', '186', '189', '190'],
  },
  {
    anzscoCode: '251411',
    title: 'Optometrist',
    list: 'CSOL',
    assessingAuthority: 'OCANZ',
    visas: ['482', '186', '190', '491'],
  },
  {
    anzscoCode: '251111',
    title: 'Dietitian',
    list: 'CSOL',
    assessingAuthority: 'DAA',
    visas: ['482', '186', '190', '491'],
  },
  {
    anzscoCode: '252411',
    title: 'Occupational Therapist',
    list: 'MLTSSL',
    assessingAuthority: 'OTC',
    visas: ['482', '186', '189', '190'],
  },
  {
    anzscoCode: '252712',
    title: 'Speech Pathologist',
    list: 'MLTSSL',
    assessingAuthority: 'SPA',
    visas: ['482', '186', '189', '190'],
  },
  {
    anzscoCode: '251211',
    title: 'Medical Diagnostic Radiographer',
    list: 'CSOL',
    assessingAuthority: 'ASMIRT',
    visas: ['482', '186', '190', '491'],
  },
  {
    anzscoCode: '251412',
    title: 'Medical Laboratory Scientist',
    list: 'MLTSSL',
    assessingAuthority: 'AIMS',
    visas: ['482', '189', '190'],
    caveats: 'Not on the CSOL — not available for 186 Direct Entry.',
  },
  {
    anzscoCode: '253311',
    title: 'Specialist Physician (General Medicine)',
    list: 'MLTSSL',
    assessingAuthority: 'MedBA',
    visas: ['482', '186', '189', '190'],
    caveats: 'AHPRA specialist registration required.',
  },
]

// ---------------------------------------------------------------------------
// ENGINEERING
// ---------------------------------------------------------------------------
const ENGINEERING: Occupation[] = [
  {
    anzscoCode: '233211',
    title: 'Civil Engineer',
    list: 'MLTSSL',
    assessingAuthority: 'Engineers Australia',
    visas: ['482', '186', '189', '190', '494'],
  },
  {
    anzscoCode: '233512',
    title: 'Mechanical Engineer',
    list: 'MLTSSL',
    assessingAuthority: 'Engineers Australia',
    visas: ['482', '186', '189', '190', '494'],
  },
  {
    anzscoCode: '233311',
    title: 'Electrical Engineer',
    list: 'MLTSSL',
    assessingAuthority: 'Engineers Australia',
    visas: ['482', '186', '189', '190', '494'],
  },
  {
    anzscoCode: '233214',
    title: 'Structural Engineer',
    list: 'MLTSSL',
    assessingAuthority: 'Engineers Australia',
    visas: ['482', '186', '189', '190', '494'],
  },
  {
    anzscoCode: '233611',
    title: 'Mining Engineer (excluding Petroleum)',
    list: 'MLTSSL',
    assessingAuthority: 'Engineers Australia',
    visas: ['482', '186', '189', '190', '494'],
  },
  {
    anzscoCode: '233111',
    title: 'Chemical Engineer',
    list: 'MLTSSL',
    assessingAuthority: 'Engineers Australia',
    visas: ['482', '186', '189', '190', '494'],
  },
  {
    anzscoCode: '233915',
    title: 'Environmental Engineer',
    list: 'MLTSSL',
    assessingAuthority: 'Engineers Australia',
    visas: ['482', '186', '189', '190', '494'],
  },
  {
    anzscoCode: '233914',
    title: 'Engineering Technologist',
    list: 'CSOL',
    assessingAuthority: 'Engineers Australia',
    visas: ['482', '186', '494'],
  },
  {
    anzscoCode: '312211',
    title: 'Civil Engineering Draftsperson',
    list: 'CSOL',
    assessingAuthority: 'Engineers Australia',
    visas: ['482', '186', '494'],
  },
  {
    anzscoCode: '312311',
    title: 'Electrical Engineering Draftsperson',
    list: 'CSOL',
    assessingAuthority: 'Engineers Australia',
    visas: ['482', '186', '494'],
  },
]

// ---------------------------------------------------------------------------
// ICT
// ---------------------------------------------------------------------------
const ICT: Occupation[] = [
  {
    anzscoCode: '261111',
    title: 'ICT Business Analyst',
    list: 'MLTSSL',
    assessingAuthority: 'ACS',
    visas: ['482', '186', '189', '190', '494'],
  },
  {
    anzscoCode: '261311',
    title: 'Analyst Programmer',
    list: 'MLTSSL',
    assessingAuthority: 'ACS',
    visas: ['482', '186', '189', '190', '494'],
  },
  {
    anzscoCode: '261312',
    title: 'Developer Programmer',
    list: 'MLTSSL',
    assessingAuthority: 'ACS',
    visas: ['482', '186', '189', '190', '494'],
  },
  {
    anzscoCode: '261313',
    title: 'Software Engineer',
    list: 'MLTSSL',
    assessingAuthority: 'ACS',
    visas: ['482', '186', '189', '190', '494'],
  },
  {
    anzscoCode: '261314',
    title: 'Software Tester',
    list: 'CSOL',
    assessingAuthority: 'ACS',
    visas: ['482', '186', '190', '491', '494'],
  },
  {
    anzscoCode: '262111',
    title: 'Database Administrator',
    list: 'CSOL',
    assessingAuthority: 'ACS',
    visas: ['482', '186', '190', '491', '494'],
  },
  {
    anzscoCode: '263111',
    title: 'Computer Network and Systems Engineer',
    list: 'MLTSSL',
    assessingAuthority: 'ACS',
    visas: ['482', '186', '189', '190', '494'],
  },
  {
    anzscoCode: '263211',
    title: 'ICT Security Specialist',
    list: 'MLTSSL',
    assessingAuthority: 'ACS',
    visas: ['482', '189', '190', '494'],
    caveats: 'Not on the CSOL — not available for 186 Direct Entry.',
  },
  {
    anzscoCode: '261211',
    title: 'Multimedia Specialist',
    list: 'STSOL',
    assessingAuthority: 'ACS',
    visas: ['482'],
    caveats: 'Short-term stream only.',
  },
  {
    anzscoCode: '261212',
    title: 'Web Developer',
    list: 'STSOL',
    assessingAuthority: 'ACS',
    visas: ['482'],
    caveats: 'Short-term stream only.',
  },
]

// ---------------------------------------------------------------------------
// EDUCATION
// ---------------------------------------------------------------------------
const EDUCATION: Occupation[] = [
  {
    anzscoCode: '241411',
    title: 'Secondary School Teacher',
    list: 'MLTSSL',
    assessingAuthority: 'AITSL',
    visas: ['482', '186', '189', '190', '494'],
  },
  {
    anzscoCode: '241213',
    title: 'Primary School Teacher',
    list: 'CSOL',
    assessingAuthority: 'AITSL',
    visas: ['482', '186', '190', '491', '494'],
  },
  {
    anzscoCode: '242111',
    title: 'University Lecturer',
    list: 'MLTSSL',
    assessingAuthority: 'TEQSA / AEI-NOOSR',
    visas: ['482', '186', '189', '190'],
  },
  {
    anzscoCode: '241511',
    title: 'Special Education Teacher',
    list: 'MLTSSL',
    assessingAuthority: 'AITSL',
    visas: ['482', '186', '189', '190', '494'],
  },
  {
    anzscoCode: '241111',
    title: 'Early Childhood (Pre-primary School) Teacher',
    list: 'MLTSSL',
    assessingAuthority: 'ACECQA',
    visas: ['482', '186', '189', '190', '494'],
  },
  {
    anzscoCode: '249211',
    title: 'Vocational Education Teacher',
    list: 'CSOL',
    assessingAuthority: 'VETASSESS',
    visas: ['482', '186', '494'],
    caveats: 'Caveats may apply regarding minimum industry experience requirements.',
  },
]

// ---------------------------------------------------------------------------
// CONSTRUCTION & PROPERTY
// ---------------------------------------------------------------------------
const CONSTRUCTION: Occupation[] = [
  {
    anzscoCode: '133111',
    title: 'Construction Project Manager',
    list: 'CSOL',
    assessingAuthority: 'VETASSESS',
    visas: ['482', '186', '494'],
  },
  {
    anzscoCode: '312111',
    title: 'Architectural Draftsperson',
    list: 'STSOL',
    assessingAuthority: 'AACA',
    visas: ['482'],
    caveats: 'Short-term stream only.',
  },
  {
    anzscoCode: '232111',
    title: 'Architect',
    list: 'MLTSSL',
    assessingAuthority: 'AACA',
    visas: ['482', '186', '189', '190'],
  },
  {
    anzscoCode: '312611',
    title: 'Building Associate',
    list: 'STSOL',
    assessingAuthority: 'AIBS',
    visas: ['482'],
    caveats: 'Short-term stream only.',
  },
  {
    anzscoCode: '133112',
    title: 'Project Builder',
    list: 'CSOL',
    assessingAuthority: 'VETASSESS',
    visas: ['482', '186', '494'],
  },
  {
    anzscoCode: '312113',
    title: 'Building Inspector',
    list: 'CSOL',
    assessingAuthority: 'VETASSESS',
    visas: ['482', '186', '494'],
  },
  {
    anzscoCode: '133211',
    title: 'Engineering Manager',
    list: 'MLTSSL',
    assessingAuthority: 'Engineers Australia',
    visas: ['482', '186', '189', '190'],
  },
]

// ---------------------------------------------------------------------------
// Full combined dataset
// ---------------------------------------------------------------------------
export const ALL_OCCUPATIONS: Occupation[] = [
  ...TRADES,
  ...HEALTH,
  ...ENGINEERING,
  ...ICT,
  ...EDUCATION,
  ...CONSTRUCTION,
]
