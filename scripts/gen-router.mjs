/**
 * Generate src/app/router.tsx from scripts/route-pairs.json + known file locations.
 */
import fs from "fs"
import path from "path"

const pairs = JSON.parse(fs.readFileSync("scripts/route-pairs.json", "utf8"))

/** Component name → import path under @/pages */
const IMPORT_PATH = {
  EmployerSponsorshipPage: "employer-sponsored/EmployerSponsorshipPage",
  EmployerNomination186Page: "employer-sponsored/EmployerNomination186Page",
  SkillRequirements186Page: "employer-sponsored/SkillRequirements186Page",
  OccupationsListPage186: "employer-sponsored/OccupationsListPage186",
  SkillsInDemand482Page: "employer-sponsored/SkillsInDemand482Page",
  Pathway482ToPRPage: "employer-sponsored/Pathway482ToPRPage",
  StandardBusinessSponsorshipPage: "employer-sponsored/StandardBusinessSponsorshipPage",
  CoreSkillsOccupationListPage: "employer-sponsored/CoreSkillsOccupationListPage",
  RegionalEmployer494Page: "employer-sponsored/RegionalEmployer494Page",
  CoreSkillsStreamPage: "employer-sponsored/CoreSkillsStreamPage",
  SpecialistSkillsStreamPage: "employer-sponsored/SpecialistSkillsStreamPage",
  PermanentResidenceSkillsRegionalPage: "employer-sponsored/PermanentResidenceSkillsRegionalPage",
  TrainingVisa407Page: "employer-sponsored/TrainingVisa407Page",
  ShortStaySpecialist400Page: "employer-sponsored/ShortStaySpecialist400Page",
  TemporaryActivity408Page: "employer-sponsored/TemporaryActivity408Page",
  TemporaryWork403Page: "employer-sponsored/TemporaryWork403Page",
  EmployerObligationsPage: "employer-sponsored/EmployerObligationsPage",
  LabourAgreementPage: "employer-sponsored/LabourAgreementPage",
  DAMAPage: "employer-sponsored/DAMAPage",
  OccupationCaveatsPage: "employer-sponsored/OccupationCaveatsPage",
  SkillingAustraliansFundPage: "employer-sponsored/SkillingAustraliansFundPage",
  LabourMarketTestingPage: "employer-sponsored/LabourMarketTestingPage",
  Visa482ConditionsPage: "employer-sponsored/Visa482ConditionsPage",
  ChangeOfEmployerPage: "employer-sponsored/ChangeOfEmployerPage",
  GenuinePositionPage: "employer-sponsored/GenuinePositionPage",
  SkilledMigrationHubPage: "skilled/SkilledMigrationHubPage",
  SkilledIndependent189Page: "skilled/SkilledIndependent189Page",
  SkilledNominated190Page: "skilled/SkilledNominated190Page",
  SkilledWorkRegional491Page: "skilled/SkilledWorkRegional491Page",
  TemporaryGraduate485Page: "skilled/TemporaryGraduate485Page",
  PointsTestPage: "skilled/PointsTestPage",
  SkillsAssessmentPage: "skilled/SkillsAssessmentPage",
  StateNominationPage: "skilled/StateNominationPage",
  EnglishRequirementsPage: "skilled/EnglishRequirementsPage",
  NationalInnovationVisaPage: "skilled/NationalInnovationVisaPage",
  SkillSelectEOIPage: "skilled/SkillSelectEOIPage",
  InvitationRoundsPage: "skilled/InvitationRoundsPage",
  RegionalAreasPage: "skilled/RegionalAreasPage",
  SkilledRegional887Page: "skilled/SkilledRegional887Page",
  StudentVisasHubPage: "student/StudentVisasHubPage",
  StudentVisa500Page: "student/StudentVisa500Page",
  GenuineStudentRequirementPage: "student/GenuineStudentRequirementPage",
  StudentToPRPage: "student/StudentToPRPage",
  StudentGuardian590Page: "student/StudentGuardian590Page",
  CoursesPRProspectsPage: "student/CoursesPRProspectsPage",
  StudentFinancialCapacityPage: "student/StudentFinancialCapacityPage",
  PartnerFamilyHubPage: "partner-family/PartnerFamilyHubPage",
  PartnerVisa820Page: "partner-family/PartnerVisa820Page",
  PartnerVisa309Page: "partner-family/PartnerVisa309Page",
  ProspectiveMarriage300Page: "partner-family/ProspectiveMarriage300Page",
  PartnerVisaEvidencePage: "partner-family/PartnerVisaEvidencePage",
  ChildVisa101Page: "partner-family/ChildVisa101Page",
  ChildVisa802Page: "partner-family/ChildVisa802Page",
  AdoptionVisa102Page: "partner-family/AdoptionVisa102Page",
  DependentChild445Page: "partner-family/DependentChild445Page",
  ParentVisasHubPage: "partner-family/ParentVisasHubPage",
  ContributoryParent143Page: "partner-family/ContributoryParent143Page",
  ContributoryParent173Page: "partner-family/ContributoryParent173Page",
  AgedParent804Page: "partner-family/AgedParent804Page",
  ContributoryAgedParent864Page: "partner-family/ContributoryAgedParent864Page",
  ContributoryAgedParent884Page: "partner-family/ContributoryAgedParent884Page",
  ParentVisa103Page: "partner-family/ParentVisa103Page",
  SponsoredParent870Page: "partner-family/SponsoredParent870Page",
  BalanceOfFamilyTestPage: "partner-family/BalanceOfFamilyTestPage",
  AssuranceOfSupportPage: "partner-family/AssuranceOfSupportPage",
  CarerVisaPage: "partner-family/CarerVisaPage",
  RemainingRelativeVisaPage: "partner-family/RemainingRelativeVisaPage",
  AgedDependentRelativePage: "partner-family/AgedDependentRelativePage",
  OrphanRelativeVisaPage: "partner-family/OrphanRelativeVisaPage",
  NzFamilyRelationship461Page: "partner-family/NzFamilyRelationship461Page",
  VisitorOtherHubPage: "visitor-other/VisitorOtherHubPage",
  VisitorVisaPage: "visitor-other/VisitorVisaPage",
  ParentVisaPage: "visitor-other/ParentVisaPage",
  BridgingVisasPage: "visitor-other/BridgingVisasPage",
  AustralianCitizenshipPage: "visitor-other/AustralianCitizenshipPage",
  VisitorVisasHubPage: "visitor-other/VisitorVisasHubPage",
  VisitorVisa600Page: "visitor-other/VisitorVisa600Page",
  Eta601Page: "visitor-other/Eta601Page",
  Evisitor651Page: "visitor-other/Evisitor651Page",
  WorkingHoliday417Page: "visitor-other/WorkingHoliday417Page",
  WorkAndHoliday462Page: "visitor-other/WorkAndHoliday462Page",
  MedicalTreatment602Page: "visitor-other/MedicalTreatment602Page",
  ResidentReturnVisaPage: "visitor-other/ResidentReturnVisaPage",
  SpecialCategory444Page: "visitor-other/SpecialCategory444Page",
  ProtectionVisa866Page: "visitor-other/ProtectionVisa866Page",
  VisaRefusalReviewHubPage: "reviews/VisaRefusalReviewHubPage",
  ARTReviewPage: "reviews/ARTReviewPage",
  VisaCancellationPage: "reviews/VisaCancellationPage",
  Section48BarPage: "reviews/Section48BarPage",
  Schedule3Page: "reviews/Schedule3Page",
  Pic4020Page: "reviews/Pic4020Page",
  NoFurtherStay8503Page: "reviews/NoFurtherStay8503Page",
  HealthWaiverPage: "reviews/HealthWaiverPage",
  ReEntryBansPage: "reviews/ReEntryBansPage",
  MinisterialInterventionPage: "reviews/MinisterialInterventionPage",
  NaturalJusticeS57Page: "reviews/NaturalJusticeS57Page",
  AboutPage: "practice/AboutPage",
  ResourcesPage: "practice/ResourcesPage",
  GuidesPage: "practice/GuidesPage",
  BlogPage: "practice/BlogPage",
  ChecklistsPage: "practice/ChecklistsPage",
  ToolsPage: "practice/ToolsPage",
  ReviewsPage: "practice/ReviewsPage",
  NewsPage: "practice/NewsPage",
}

const components = [...new Set(pairs.map((p) => p.component))]
const missing = components.filter((c) => !IMPORT_PATH[c])
if (missing.length) {
  console.error("Missing import paths:", missing)
  process.exit(1)
}

const importLines = components
  .map((c) => `import ${c} from "@/pages/${IMPORT_PATH[c]}"`)
  .join("\n")

const pagesEntries = components
  .map((c) => {
    const key = c === "OccupationsListPage186" ? "OccupationsList186" : c.replace(/Page$/, "")
    return `  ${key}: withNavigate(${c}),`
  })
  .join("\n")

const routeLines = pairs
  .map((p) => {
    const key =
      p.component === "OccupationsListPage186"
        ? "OccupationsList186"
        : p.component.replace(/Page$/, "")
    return `      <Route path="/${p.slug}" element={<Pages.${key} />} />`
  })
  .join("\n")

const out = `import { Navigate, Route, Routes } from "react-router-dom"
import React from "react"
import { withNavigate } from "@/lib/withNavigate"
import { LEGACY_ROUTE_REDIRECTS } from "@/lib/navigation"
import { ROUTE } from "@/data/routes"
import HomePage from "@/pages/HomePage"
import BookConsultationPage from "@/pages/BookConsultationPage"
import ContactPage from "@/pages/ContactPage"
import LegalPage from "@/pages/LegalPage"
import NotFoundPage from "@/pages/NotFoundPage"
import BlogPostPage from "@/pages/practice/BlogPostPage"

${importLines}

const Pages = {
  Home: HomePage,
${pagesEntries}
  BlogPost: withNavigate(BlogPostPage),
  BookConsultation: withNavigate(BookConsultationPage),
  Contact: withNavigate(ContactPage),
  Privacy: withNavigate(function PrivacyPage(p: { navigate: (page: string) => void }) {
    return <LegalPage kind="privacy" navigate={p.navigate} />
  }),
  Terms: withNavigate(function TermsPage(p: { navigate: (page: string) => void }) {
    return <LegalPage kind="terms" navigate={p.navigate} />
  }),
  Accessibility: withNavigate(function AccessibilityPage(p: { navigate: (page: string) => void }) {
    return <LegalPage kind="accessibility" navigate={p.navigate} />
  }),
  NotFound: withNavigate(NotFoundPage),
} as const

const legacyRedirects = Object.entries(LEGACY_ROUTE_REDIRECTS).map(([from, to]) => (
  <Route key={from} path={\`/\${from}\`} element={<Navigate to={\`/\${to}\`} replace />} />
))

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />} />
      <Route path={\`/\${ROUTE.bookConsultation}\`} element={<Pages.BookConsultation />} />
      <Route path="/contact" element={<Pages.Contact />} />
      <Route path="/privacy" element={<Pages.Privacy />} />
      <Route path="/terms" element={<Pages.Terms />} />
      <Route path="/accessibility" element={<Pages.Accessibility />} />
      <Route path="/about" element={<Pages.About />} />
      <Route path={\`/\${ROUTE.blog}/:slug\`} element={<Pages.BlogPost />} />

${routeLines}

      {legacyRedirects}

      <Route path="*" element={<Pages.NotFound />} />
    </Routes>
  )
}
`

fs.writeFileSync("src/app/router.tsx", out)
console.log("Wrote router with", pairs.length, "visa/topic routes,", components.length, "page components")
