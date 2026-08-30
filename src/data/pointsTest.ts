// Points test data for Australian skilled migration (subclasses 189, 190, 491).
// Based on the points test set by the Migration (IMMI 23/102) Instrument 2023 and
// subsequent amendments. Requirements are subject to legislative change — always
// verify current values with the Department of Home Affairs or a registered migration agent.

export interface PointsOption {
  value: string
  label: string
  points: number
  note?: string
}

export interface PointsCategory {
  id: string
  heading: string
  description: string
  icon: string
  color: string
  options: PointsOption[]  // first option must always be 0 points (the default / not applicable)
  maxPoints: number
}

export const POINTS_CATEGORIES: PointsCategory[] = [
  {
    id: 'age',
    heading: 'Age',
    description: 'Age is assessed at the date an invitation to apply is received — not at the date the EOI is submitted.',
    icon: 'user',
    color: '#4f46e5',
    maxPoints: 30,
    options: [
      { value: 'none', label: 'Select your age at invitation', points: 0 },
      { value: '25-32', label: '25–32 years', points: 30 },
      { value: '18-24', label: '18–24 years', points: 25 },
      { value: '33-39', label: '33–39 years', points: 25 },
      { value: '40-44', label: '40–44 years', points: 15 },
      { value: '45+',   label: '45 years or over', points: 0, note: 'Most skilled visas require applicants to be under 45 at the time of invitation.' },
    ],
  },
  {
    id: 'english',
    heading: 'English language ability',
    description: 'Assessed by an approved English language test (IELTS, PTE Academic, TOEFL iBT, OET, or Cambridge C1 Advanced). Scores must meet the threshold in each component.',
    icon: 'globe',
    color: '#2563eb',
    maxPoints: 20,
    options: [
      { value: 'none',       label: 'Select your English level', points: 0 },
      { value: 'superior',   label: 'Superior English — IELTS 8 in each band (or equivalent)', points: 20 },
      { value: 'proficient', label: 'Proficient English — IELTS 7 in each band (or equivalent)', points: 10 },
      { value: 'competent',  label: 'Competent English — IELTS 6 in each band (or equivalent)', points: 0, note: 'Competent English is generally the minimum required — it does not add points.' },
    ],
  },
  {
    id: 'employment_australia',
    heading: 'Skilled employment in Australia',
    description: 'Employment in Australia in the nominated occupation or a closely related occupation at the required skill level, in the 10 years before the invitation is issued.',
    icon: 'briefcase',
    color: '#f5a124',
    maxPoints: 20,
    options: [
      { value: 'none',  label: 'None, or less than 1 year', points: 0 },
      { value: '1-2',   label: 'At least 1 year but less than 3 years', points: 5 },
      { value: '3-4',   label: 'At least 3 years but less than 5 years', points: 10 },
      { value: '5-7',   label: 'At least 5 years but less than 8 years', points: 15 },
      { value: '8-10',  label: 'At least 8 years', points: 20, note: 'Employment periods are capped at the last 10 years before invitation.' },
    ],
  },
  {
    id: 'employment_overseas',
    heading: 'Skilled employment outside Australia',
    description: 'Employment outside Australia in the nominated occupation or a closely related occupation at the required skill level, in the 10 years before the invitation is issued.',
    icon: 'globe',
    color: '#0e7490',
    maxPoints: 15,
    options: [
      { value: 'none',  label: 'None, or less than 3 years', points: 0 },
      { value: '3-4',   label: 'At least 3 years but less than 5 years', points: 5 },
      { value: '5-7',   label: 'At least 5 years but less than 8 years', points: 10 },
      { value: '8-10',  label: 'At least 8 years', points: 15, note: 'Only employment outside Australia in the last 10 years counts.' },
    ],
  },
  {
    id: 'education',
    heading: 'Educational qualifications',
    description: 'The highest qualification held. Where the qualification is from overseas, it must be assessed by the relevant assessing authority as meeting the Australian equivalent level.',
    icon: 'graduationcap',
    color: '#4f46e5',
    maxPoints: 20,
    options: [
      { value: 'none',     label: 'No award-level qualification above skills assessment', points: 0 },
      { value: 'trade',    label: 'Diploma or trade qualification (Australian or equivalent)', points: 10 },
      { value: 'bachelor', label: 'Bachelor degree or higher (Australian or equivalent)', points: 15 },
      { value: 'phd',      label: 'Doctorate (PhD) from an Australian institution, or assessed as equivalent', points: 20 },
    ],
  },
  {
    id: 'specialist_education',
    heading: 'Specialist education qualification',
    description: 'An additional bonus for holding a Master\'s by research or Doctorate from an Australian institution in a STEM field (science, technology, engineering, or mathematics). This is separate from — and additive to — the general education qualification points.',
    icon: 'star',
    color: '#f5a124',
    maxPoints: 10,
    options: [
      { value: 'none', label: 'No specialist education qualification', points: 0 },
      { value: 'stem', label: "Master's by research or Doctorate from an Australian institution in a STEM field", points: 10, note: 'The qualification must be from an Australian institution registered with TEQSA.' },
    ],
  },
  {
    id: 'australian_study',
    heading: 'Australian study requirement',
    description: 'Completed at least two academic years of study in Australia leading to a qualification from an Australian institution (registered with TEQSA or ASQA). Includes postgraduate study.',
    icon: 'bookopen',
    color: '#0e7490',
    maxPoints: 5,
    options: [
      { value: 'none', label: 'Have not met the Australian study requirement', points: 0 },
      { value: 'yes',  label: 'Completed at least 2 academic years of study in Australia', points: 5 },
    ],
  },
  {
    id: 'professional_year',
    heading: 'Professional Year in Australia',
    description: 'Completed a Professional Year program in Australia in accounting, computing, or engineering during the 4 years before the invitation is issued.',
    icon: 'award',
    color: '#f5a124',
    maxPoints: 5,
    options: [
      { value: 'none', label: 'Have not completed a Professional Year in Australia', points: 0 },
      { value: 'yes',  label: 'Completed a Professional Year in accounting, computing or engineering in Australia', points: 5, note: 'The Professional Year must be an approved program and completed within 4 years before invitation.' },
    ],
  },
  {
    id: 'community_language',
    heading: 'Credentialled community language',
    description: 'Holds a NAATI credential in a community language at the paraprofessional level or above, or an equivalent accreditation. Must have been granted in the 3 years before the invitation.',
    icon: 'hash',
    color: '#4f46e5',
    maxPoints: 5,
    options: [
      { value: 'none', label: 'Do not hold a credentialled community language', points: 0 },
      { value: 'yes',  label: 'Hold a NAATI community language credential (paraprofessional or above)', points: 5 },
    ],
  },
  {
    id: 'regional_study',
    heading: 'Study in regional Australia',
    description: 'The Australian study requirement was met while living and studying in a regional area of Australia. This is an additional bonus — separate from the 5 points for meeting the Australian study requirement itself.',
    icon: 'mappin',
    color: '#f5a124',
    maxPoints: 5,
    options: [
      { value: 'none', label: 'Did not study in a regional area of Australia', points: 0 },
      { value: 'yes',  label: 'Met the Australian study requirement while living and studying in a regional area', points: 5, note: 'Both the Australian study requirement (5 pts) and this regional study bonus (5 pts) may be claimed if eligible.' },
    ],
  },
  {
    id: 'partner',
    heading: 'Partner skills',
    description: 'Points depend on the skills and residency status of your partner (spouse or de facto). Applicants who are single, or whose partner is an Australian citizen or permanent resident, may also receive points.',
    icon: 'users',
    color: '#e11d48',
    maxPoints: 10,
    options: [
      { value: 'none',        label: 'Partner does not have qualifying skills or English', points: 0 },
      { value: 'single_aus',  label: 'Single, OR partner is an Australian citizen or PR with Competent English', points: 10 },
      { value: 'skilled',     label: 'Partner has Competent English AND a positive skills assessment in a nominated occupation', points: 10, note: 'The partner must have a positive skills assessment in their own nominated occupation.' },
    ],
  },
  {
    id: 'nomination',
    heading: 'State/territory nomination or regional sponsorship',
    description: 'Points received if you have been nominated by an Australian state or territory for the 190 visa, or nominated/sponsored for the 491 visa. Only one nomination can be counted.',
    icon: 'flag',
    color: '#4f46e5',
    maxPoints: 15,
    options: [
      { value: 'none',  label: 'No nomination or regional sponsorship', points: 0 },
      { value: 'v190',  label: 'Nominated by a state or territory for the subclass 190 visa', points: 5 },
      { value: 'v491',  label: 'Nominated by a state/territory or sponsored by an eligible relative for the subclass 491 visa', points: 15 },
    ],
  },
]

export const POINTS_MINIMUM = 65
export const POINTS_NOTE = 'Points totals are indicative only. The Department of Home Affairs is the authoritative source for the current points test and invitation cutoffs.'
