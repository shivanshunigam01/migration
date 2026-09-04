/**
 * Port pages + nav from migration_new_version into migration.
 * Run from migration/: node scripts/port-new-pages.mjs
 */
import fs from "fs"
import path from "path"

const SRC = path.resolve("../migration_new_version/src")
const DST = path.resolve("src")

function ensureDir(d) {
  fs.mkdirSync(d, { recursive: true })
}

function transformPage(code) {
  let c = code
  // theme
  c = c.replace(/from ['"]\.\/theme['"]/g, "from '@/theme'")
  c = c.replace(/from ['"]\.\.\/theme['"]/g, "from '@/theme'")
  // data
  c = c.replace(/from ['"]\.\/data\//g, "from '@/data/")
  c = c.replace(/from ['"]\.\.\/data\//g, "from '@/data/")
  // SiteHeader / Footer
  c = c.replace(/from ['"]\.\/components\/SiteHeader['"]/g, "from '@/components/layout/SiteHeader'")
  c = c.replace(/from ['"]\.\/components\/SiteFooter['"]/g, "from '@/components/layout/SiteFooter'")
  // page kit
  c = c.replace(/from ['"]\.\/components\/page['"]/g, "from '@/components/page'")
  c = c.replace(/from ['"]\.\/components\/page\//g, "from '@/components/page/")
  // Icon
  c = c.replace(/from ['"]\.\/components\/Icon['"]/g, "from '@/components/ui/Icon'")
  c = c.replace(/from ['"]\.\/components\/NanakLogo['"]/g, "from '@/components/layout/NanakLogo'")
  c = c.replace(/from ['"]\.\/components\/ProcessJourney['"]/g, "from '@/components/ui/ProcessJourney'")
  c = c.replace(/from ['"]\.\/components\/AustralianSkyline['"]/g, "from '@/components/ui/AustralianSkyline'")
  c = c.replace(/from ['"]\.\/components\/tools\//g, "from '@/components/tools/")
  // ReviewedBy / StructuredData already under page/
  return c
}

function transformData(code) {
  return code
    .replace(/from ['"]\.\.\/components\/SiteHeader['"]/g, "from '@/components/layout/SiteHeader'")
    .replace(/from ['"]\.\/routes['"]/g, "from './routes'")
}

/** Map page filename → destination relative folder under src/pages */
const FOLDER = {
  // Employer
  CoreSkillsStreamPage: "employer-sponsored",
  SpecialistSkillsStreamPage: "employer-sponsored",
  RegionalEmployer494Page: "employer-sponsored",
  PermanentResidenceSkillsRegionalPage: "employer-sponsored",
  TrainingVisa407Page: "employer-sponsored",
  ShortStaySpecialist400Page: "employer-sponsored",
  TemporaryActivity408Page: "employer-sponsored",
  TemporaryWork403Page: "employer-sponsored",
  EmployerObligationsPage: "employer-sponsored",
  LabourAgreementPage: "employer-sponsored",
  DAMAPage: "employer-sponsored",
  OccupationCaveatsPage: "employer-sponsored",
  SkillingAustraliansFundPage: "employer-sponsored",
  LabourMarketTestingPage: "employer-sponsored",
  Visa482ConditionsPage: "employer-sponsored",
  ChangeOfEmployerPage: "employer-sponsored",
  GenuinePositionPage: "employer-sponsored",
  // Skilled
  NationalInnovationVisaPage: "skilled",
  SkillSelectEOIPage: "skilled",
  InvitationRoundsPage: "skilled",
  RegionalAreasPage: "skilled",
  SkilledRegional887Page: "skilled",
  // Student
  StudentGuardian590Page: "student",
  CoursesPRProspectsPage: "student",
  StudentFinancialCapacityPage: "student",
  // Partner
  ChildVisa101Page: "partner-family",
  ChildVisa802Page: "partner-family",
  AdoptionVisa102Page: "partner-family",
  DependentChild445Page: "partner-family",
  ParentVisasHubPage: "partner-family",
  ContributoryParent143Page: "partner-family",
  ContributoryParent173Page: "partner-family",
  AgedParent804Page: "partner-family",
  ContributoryAgedParent864Page: "partner-family",
  ContributoryAgedParent884Page: "partner-family",
  ParentVisa103Page: "partner-family",
  SponsoredParent870Page: "partner-family",
  BalanceOfFamilyTestPage: "partner-family",
  AssuranceOfSupportPage: "partner-family",
  CarerVisaPage: "partner-family",
  RemainingRelativeVisaPage: "partner-family",
  AgedDependentRelativePage: "partner-family",
  OrphanRelativeVisaPage: "partner-family",
  NzFamilyRelationship461Page: "partner-family",
  // Visitor
  VisitorVisasHubPage: "visitor-other",
  VisitorVisa600Page: "visitor-other",
  Eta601Page: "visitor-other",
  Evisitor651Page: "visitor-other",
  WorkingHoliday417Page: "visitor-other",
  WorkAndHoliday462Page: "visitor-other",
  MedicalTreatment602Page: "visitor-other",
  ResidentReturnVisaPage: "visitor-other",
  SpecialCategory444Page: "visitor-other",
  ProtectionVisa866Page: "visitor-other",
  // Reviews
  VisaCancellationPage: "reviews",
  Section48BarPage: "reviews",
  Schedule3Page: "reviews",
  Pic4020Page: "reviews",
  NoFurtherStay8503Page: "reviews",
  HealthWaiverPage: "reviews",
  ReEntryBansPage: "reviews",
  MinisterialInterventionPage: "reviews",
  NaturalJusticeS57Page: "reviews",
  // Practice
  ReviewsPage: "practice",
  NewsPage: "practice",
}

/** Pages that already exist in migration — skip overwrite */
const SKIP_EXISTING = new Set([
  "EmployerSponsorshipPage",
  "EmployerNomination186Page",
  "SkillRequirements186Page",
  "OccupationsListPage186",
  "SkillsInDemand482Page",
  "Pathway482ToPRPage",
  "StandardBusinessSponsorshipPage",
  "CoreSkillsOccupationListPage",
  "RegionalEmployer494Page", // keep current; add alias route 494-visa
  "SkilledMigrationHubPage",
  "SkilledIndependent189Page",
  "SkilledNominated190Page",
  "SkilledWorkRegional491Page",
  "TemporaryGraduate485Page",
  "PointsTestPage",
  "SkillsAssessmentPage",
  "StateNominationPage",
  "EnglishRequirementsPage",
  "StudentVisasHubPage",
  "StudentVisa500Page",
  "GenuineStudentRequirementPage",
  "StudentToPRPage",
  "PartnerFamilyHubPage",
  "PartnerVisa820Page",
  "PartnerVisa309Page",
  "ProspectiveMarriage300Page",
  "PartnerVisaEvidencePage",
  "VisitorOtherHubPage",
  "VisitorVisaPage",
  "ParentVisaPage",
  "BridgingVisasPage",
  "AustralianCitizenshipPage",
  "VisaRefusalReviewHubPage",
  "ARTReviewPage",
  "AboutPage",
  "ResourcesPage",
  "GuidesPage",
  "BlogPage",
  "ChecklistsPage",
  "ToolsPage",
])

// Copy data files
for (const f of ["routes.ts", "navItems.ts", "pageMeta.ts"]) {
  const raw = fs.readFileSync(path.join(SRC, "data", f), "utf8")
  let out = transformData(raw)
  if (f === "routes.ts") {
    // keep bookConsultation from migration
    if (!out.includes("bookConsultation")) {
      out = out.replace(
        "tools:                       'tools',",
        "tools:                       'tools',\n  bookConsultation:            'book-consultation',"
      )
    }
  }
  if (f === "navItems.ts") {
    // already uses ROUTE and SiteHeader type — transform handles SiteHeader path
  }
  fs.writeFileSync(path.join(DST, "data", f), out)
  console.log("data", f)
}

// Copy new pages
const pageFiles = fs.readdirSync(SRC).filter((f) => f.endsWith("Page.tsx"))
let copied = 0
let skipped = 0
for (const file of pageFiles) {
  const base = file.replace(/\.tsx$/, "")
  if (SKIP_EXISTING.has(base)) {
    skipped++
    continue
  }
  const folder = FOLDER[base]
  if (!folder) {
    console.warn("No folder for", file, "— skip")
    continue
  }
  const destDir = path.join(DST, "pages", folder)
  ensureDir(destDir)
  const dest = path.join(destDir, file)
  const raw = fs.readFileSync(path.join(SRC, file), "utf8")
  fs.writeFileSync(dest, transformPage(raw))
  copied++
  console.log("page", folder + "/" + file)
}

console.log({ copied, skipped })

// Generate router fragment map from App.tsx of new_version
const app = fs.readFileSync(path.join(SRC, "App.tsx"), "utf8")
const routeRe = /\{currentPage === '([^']+)' && <(\w+) navigate=\{navigate\} \/>\}/g
const pairs = []
let m
while ((m = routeRe.exec(app))) {
  pairs.push({ slug: m[1], component: m[2] })
}
fs.writeFileSync(
  path.join("scripts", "route-pairs.json"),
  JSON.stringify(pairs, null, 2)
)
console.log("route pairs", pairs.length)
