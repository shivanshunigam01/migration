import { Navigate, Route, Routes } from "react-router-dom"
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

import EmployerSponsorshipPage from "@/pages/employer-sponsored/EmployerSponsorshipPage"
import SkilledIndependent189Page from "@/pages/skilled/SkilledIndependent189Page"
import StudentToPRPage from "@/pages/student/StudentToPRPage"
import PartnerVisa309Page from "@/pages/partner-family/PartnerVisa309Page"
import PartnerVisa820Page from "@/pages/partner-family/PartnerVisa820Page"
import SkillRequirements186Page from "@/pages/employer-sponsored/SkillRequirements186Page"
import OccupationsListPage186 from "@/pages/employer-sponsored/OccupationsListPage186"
import Pathway482ToPRPage from "@/pages/employer-sponsored/Pathway482ToPRPage"
import SkilledNominated190Page from "@/pages/skilled/SkilledNominated190Page"
import SkilledWorkRegional491Page from "@/pages/skilled/SkilledWorkRegional491Page"
import PointsTestPage from "@/pages/skilled/PointsTestPage"
import SkillsAssessmentPage from "@/pages/skilled/SkillsAssessmentPage"
import StateNominationPage from "@/pages/skilled/StateNominationPage"
import EnglishRequirementsPage from "@/pages/skilled/EnglishRequirementsPage"
import GenuineStudentRequirementPage from "@/pages/student/GenuineStudentRequirementPage"
import ProspectiveMarriage300Page from "@/pages/partner-family/ProspectiveMarriage300Page"
import PartnerVisaEvidencePage from "@/pages/partner-family/PartnerVisaEvidencePage"
import BridgingVisasPage from "@/pages/visitor-other/BridgingVisasPage"
import AustralianCitizenshipPage from "@/pages/visitor-other/AustralianCitizenshipPage"
import CoreSkillsOccupationListPage from "@/pages/employer-sponsored/CoreSkillsOccupationListPage"
import ARTReviewPage from "@/pages/reviews/ARTReviewPage"
import TemporaryGraduate485Page from "@/pages/skilled/TemporaryGraduate485Page"
import AboutPage from "@/pages/practice/AboutPage"
import StandardBusinessSponsorshipPage from "@/pages/employer-sponsored/StandardBusinessSponsorshipPage"
import SkillsInDemand482Page from "@/pages/employer-sponsored/SkillsInDemand482Page"
import EmployerNomination186Page from "@/pages/employer-sponsored/EmployerNomination186Page"
import RegionalEmployer494Page from "@/pages/employer-sponsored/RegionalEmployer494Page"
import LabourMarketTestingPage from "@/pages/employer-sponsored/LabourMarketTestingPage"
import SkillingAustraliansFundPage from "@/pages/employer-sponsored/SkillingAustraliansFundPage"
import EmployerObligationsPage from "@/pages/employer-sponsored/EmployerObligationsPage"
import CoreSkillsStreamPage from "@/pages/employer-sponsored/CoreSkillsStreamPage"
import SpecialistSkillsStreamPage from "@/pages/employer-sponsored/SpecialistSkillsStreamPage"
import PermanentResidenceSkillsRegionalPage from "@/pages/employer-sponsored/PermanentResidenceSkillsRegionalPage"
import OccupationCaveatsPage from "@/pages/employer-sponsored/OccupationCaveatsPage"
import Visa482ConditionsPage from "@/pages/employer-sponsored/Visa482ConditionsPage"
import ChangeOfEmployerPage from "@/pages/employer-sponsored/ChangeOfEmployerPage"
import GenuinePositionPage from "@/pages/employer-sponsored/GenuinePositionPage"
import LabourAgreementPage from "@/pages/employer-sponsored/LabourAgreementPage"
import TrainingVisa407Page from "@/pages/employer-sponsored/TrainingVisa407Page"
import ShortStaySpecialist400Page from "@/pages/employer-sponsored/ShortStaySpecialist400Page"
import TemporaryActivity408Page from "@/pages/employer-sponsored/TemporaryActivity408Page"
import DAMAPage from "@/pages/employer-sponsored/DAMAPage"
import VisitorVisaPage from "@/pages/visitor-other/VisitorVisaPage"
import ParentVisaPage from "@/pages/visitor-other/ParentVisaPage"
import StudentVisa500Page from "@/pages/student/StudentVisa500Page"
import NationalInnovationVisaPage from "@/pages/skilled/NationalInnovationVisaPage"
import SkillSelectEOIPage from "@/pages/skilled/SkillSelectEOIPage"
import RegionalAreasPage from "@/pages/skilled/RegionalAreasPage"
import SkilledRegional887Page from "@/pages/skilled/SkilledRegional887Page"
import InvitationRoundsPage from "@/pages/skilled/InvitationRoundsPage"
import CoursesPRProspectsPage from "@/pages/student/CoursesPRProspectsPage"
import StudentFinancialCapacityPage from "@/pages/student/StudentFinancialCapacityPage"
import StudentGuardian590Page from "@/pages/student/StudentGuardian590Page"
import ParentVisasHubPage from "@/pages/partner-family/ParentVisasHubPage"
import ContributoryParent143Page from "@/pages/partner-family/ContributoryParent143Page"
import SponsoredParent870Page from "@/pages/partner-family/SponsoredParent870Page"
import BalanceOfFamilyTestPage from "@/pages/partner-family/BalanceOfFamilyTestPage"
import ChildVisa101Page from "@/pages/partner-family/ChildVisa101Page"
import ChildVisa802Page from "@/pages/partner-family/ChildVisa802Page"
import ContributoryParent173Page from "@/pages/partner-family/ContributoryParent173Page"
import AgedParent804Page from "@/pages/partner-family/AgedParent804Page"
import ContributoryAgedParent864Page from "@/pages/partner-family/ContributoryAgedParent864Page"
import ParentVisa103Page from "@/pages/partner-family/ParentVisa103Page"
import AssuranceOfSupportPage from "@/pages/partner-family/AssuranceOfSupportPage"
import CarerVisaPage from "@/pages/partner-family/CarerVisaPage"
import RemainingRelativeVisaPage from "@/pages/partner-family/RemainingRelativeVisaPage"
import WorkingHoliday417Page from "@/pages/visitor-other/WorkingHoliday417Page"
import WorkAndHoliday462Page from "@/pages/visitor-other/WorkAndHoliday462Page"
import ProtectionVisa866Page from "@/pages/visitor-other/ProtectionVisa866Page"
import Schedule3Page from "@/pages/reviews/Schedule3Page"
import NoFurtherStay8503Page from "@/pages/reviews/NoFurtherStay8503Page"
import HealthWaiverPage from "@/pages/reviews/HealthWaiverPage"
import ReEntryBansPage from "@/pages/reviews/ReEntryBansPage"
import NaturalJusticeS57Page from "@/pages/reviews/NaturalJusticeS57Page"
import TemporaryWork403Page from "@/pages/employer-sponsored/TemporaryWork403Page"
import AdoptionVisa102Page from "@/pages/partner-family/AdoptionVisa102Page"
import DependentChild445Page from "@/pages/partner-family/DependentChild445Page"
import ContributoryAgedParent884Page from "@/pages/partner-family/ContributoryAgedParent884Page"
import Eta601Page from "@/pages/visitor-other/Eta601Page"
import Evisitor651Page from "@/pages/visitor-other/Evisitor651Page"
import MedicalTreatment602Page from "@/pages/visitor-other/MedicalTreatment602Page"
import SpecialCategory444Page from "@/pages/visitor-other/SpecialCategory444Page"
import MinisterialInterventionPage from "@/pages/reviews/MinisterialInterventionPage"
import AgedDependentRelativePage from "@/pages/partner-family/AgedDependentRelativePage"
import OrphanRelativeVisaPage from "@/pages/partner-family/OrphanRelativeVisaPage"
import NzFamilyRelationship461Page from "@/pages/partner-family/NzFamilyRelationship461Page"
import VisitorVisasHubPage from "@/pages/visitor-other/VisitorVisasHubPage"
import VisitorVisa600Page from "@/pages/visitor-other/VisitorVisa600Page"
import ResidentReturnVisaPage from "@/pages/visitor-other/ResidentReturnVisaPage"
import SkilledMigrationHubPage from "@/pages/skilled/SkilledMigrationHubPage"
import StudentVisasHubPage from "@/pages/student/StudentVisasHubPage"
import PartnerFamilyHubPage from "@/pages/partner-family/PartnerFamilyHubPage"
import VisitorOtherHubPage from "@/pages/visitor-other/VisitorOtherHubPage"
import VisaRefusalReviewHubPage from "@/pages/reviews/VisaRefusalReviewHubPage"
import VisaCancellationPage from "@/pages/reviews/VisaCancellationPage"
import Section48BarPage from "@/pages/reviews/Section48BarPage"
import Pic4020Page from "@/pages/reviews/Pic4020Page"
import ReviewsPage from "@/pages/practice/ReviewsPage"
import NewsPage from "@/pages/practice/NewsPage"
import ResourcesPage from "@/pages/practice/ResourcesPage"
import GuidesPage from "@/pages/practice/GuidesPage"
import BlogPage from "@/pages/practice/BlogPage"
import ChecklistsPage from "@/pages/practice/ChecklistsPage"
import ToolsPage from "@/pages/practice/ToolsPage"

const Pages = {
  Home: HomePage,
  EmployerSponsorship: withNavigate(EmployerSponsorshipPage),
  SkilledIndependent189: withNavigate(SkilledIndependent189Page),
  StudentToPR: withNavigate(StudentToPRPage),
  PartnerVisa309: withNavigate(PartnerVisa309Page),
  PartnerVisa820: withNavigate(PartnerVisa820Page),
  SkillRequirements186: withNavigate(SkillRequirements186Page),
  OccupationsList186: withNavigate(OccupationsListPage186),
  Pathway482ToPR: withNavigate(Pathway482ToPRPage),
  SkilledNominated190: withNavigate(SkilledNominated190Page),
  SkilledWorkRegional491: withNavigate(SkilledWorkRegional491Page),
  PointsTest: withNavigate(PointsTestPage),
  SkillsAssessment: withNavigate(SkillsAssessmentPage),
  StateNomination: withNavigate(StateNominationPage),
  EnglishRequirements: withNavigate(EnglishRequirementsPage),
  GenuineStudentRequirement: withNavigate(GenuineStudentRequirementPage),
  ProspectiveMarriage300: withNavigate(ProspectiveMarriage300Page),
  PartnerVisaEvidence: withNavigate(PartnerVisaEvidencePage),
  BridgingVisas: withNavigate(BridgingVisasPage),
  AustralianCitizenship: withNavigate(AustralianCitizenshipPage),
  CoreSkillsOccupationList: withNavigate(CoreSkillsOccupationListPage),
  ARTReview: withNavigate(ARTReviewPage),
  TemporaryGraduate485: withNavigate(TemporaryGraduate485Page),
  About: withNavigate(AboutPage),
  StandardBusinessSponsorship: withNavigate(StandardBusinessSponsorshipPage),
  SkillsInDemand482: withNavigate(SkillsInDemand482Page),
  EmployerNomination186: withNavigate(EmployerNomination186Page),
  RegionalEmployer494: withNavigate(RegionalEmployer494Page),
  LabourMarketTesting: withNavigate(LabourMarketTestingPage),
  SkillingAustraliansFund: withNavigate(SkillingAustraliansFundPage),
  EmployerObligations: withNavigate(EmployerObligationsPage),
  CoreSkillsStream: withNavigate(CoreSkillsStreamPage),
  SpecialistSkillsStream: withNavigate(SpecialistSkillsStreamPage),
  PermanentResidenceSkillsRegional: withNavigate(PermanentResidenceSkillsRegionalPage),
  OccupationCaveats: withNavigate(OccupationCaveatsPage),
  Visa482Conditions: withNavigate(Visa482ConditionsPage),
  ChangeOfEmployer: withNavigate(ChangeOfEmployerPage),
  GenuinePosition: withNavigate(GenuinePositionPage),
  LabourAgreement: withNavigate(LabourAgreementPage),
  TrainingVisa407: withNavigate(TrainingVisa407Page),
  ShortStaySpecialist400: withNavigate(ShortStaySpecialist400Page),
  TemporaryActivity408: withNavigate(TemporaryActivity408Page),
  DAMA: withNavigate(DAMAPage),
  VisitorVisa: withNavigate(VisitorVisaPage),
  ParentVisa: withNavigate(ParentVisaPage),
  StudentVisa500: withNavigate(StudentVisa500Page),
  NationalInnovationVisa: withNavigate(NationalInnovationVisaPage),
  SkillSelectEOI: withNavigate(SkillSelectEOIPage),
  RegionalAreas: withNavigate(RegionalAreasPage),
  SkilledRegional887: withNavigate(SkilledRegional887Page),
  InvitationRounds: withNavigate(InvitationRoundsPage),
  CoursesPRProspects: withNavigate(CoursesPRProspectsPage),
  StudentFinancialCapacity: withNavigate(StudentFinancialCapacityPage),
  StudentGuardian590: withNavigate(StudentGuardian590Page),
  ParentVisasHub: withNavigate(ParentVisasHubPage),
  ContributoryParent143: withNavigate(ContributoryParent143Page),
  SponsoredParent870: withNavigate(SponsoredParent870Page),
  BalanceOfFamilyTest: withNavigate(BalanceOfFamilyTestPage),
  ChildVisa101: withNavigate(ChildVisa101Page),
  ChildVisa802: withNavigate(ChildVisa802Page),
  ContributoryParent173: withNavigate(ContributoryParent173Page),
  AgedParent804: withNavigate(AgedParent804Page),
  ContributoryAgedParent864: withNavigate(ContributoryAgedParent864Page),
  ParentVisa103: withNavigate(ParentVisa103Page),
  AssuranceOfSupport: withNavigate(AssuranceOfSupportPage),
  CarerVisa: withNavigate(CarerVisaPage),
  RemainingRelativeVisa: withNavigate(RemainingRelativeVisaPage),
  WorkingHoliday417: withNavigate(WorkingHoliday417Page),
  WorkAndHoliday462: withNavigate(WorkAndHoliday462Page),
  ProtectionVisa866: withNavigate(ProtectionVisa866Page),
  Schedule3: withNavigate(Schedule3Page),
  NoFurtherStay8503: withNavigate(NoFurtherStay8503Page),
  HealthWaiver: withNavigate(HealthWaiverPage),
  ReEntryBans: withNavigate(ReEntryBansPage),
  NaturalJusticeS57: withNavigate(NaturalJusticeS57Page),
  TemporaryWork403: withNavigate(TemporaryWork403Page),
  AdoptionVisa102: withNavigate(AdoptionVisa102Page),
  DependentChild445: withNavigate(DependentChild445Page),
  ContributoryAgedParent884: withNavigate(ContributoryAgedParent884Page),
  Eta601: withNavigate(Eta601Page),
  Evisitor651: withNavigate(Evisitor651Page),
  MedicalTreatment602: withNavigate(MedicalTreatment602Page),
  SpecialCategory444: withNavigate(SpecialCategory444Page),
  MinisterialIntervention: withNavigate(MinisterialInterventionPage),
  AgedDependentRelative: withNavigate(AgedDependentRelativePage),
  OrphanRelativeVisa: withNavigate(OrphanRelativeVisaPage),
  NzFamilyRelationship461: withNavigate(NzFamilyRelationship461Page),
  VisitorVisasHub: withNavigate(VisitorVisasHubPage),
  VisitorVisa600: withNavigate(VisitorVisa600Page),
  ResidentReturnVisa: withNavigate(ResidentReturnVisaPage),
  SkilledMigrationHub: withNavigate(SkilledMigrationHubPage),
  StudentVisasHub: withNavigate(StudentVisasHubPage),
  PartnerFamilyHub: withNavigate(PartnerFamilyHubPage),
  VisitorOtherHub: withNavigate(VisitorOtherHubPage),
  VisaRefusalReviewHub: withNavigate(VisaRefusalReviewHubPage),
  VisaCancellation: withNavigate(VisaCancellationPage),
  Section48Bar: withNavigate(Section48BarPage),
  Pic4020: withNavigate(Pic4020Page),
  Reviews: withNavigate(ReviewsPage),
  News: withNavigate(NewsPage),
  Resources: withNavigate(ResourcesPage),
  Guides: withNavigate(GuidesPage),
  Blog: withNavigate(BlogPage),
  Checklists: withNavigate(ChecklistsPage),
  Tools: withNavigate(ToolsPage),
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
  <Route key={from} path={`/${from}`} element={<Navigate to={`/${to}`} replace />} />
))

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />} />
      <Route path={`/${ROUTE.bookConsultation}`} element={<Pages.BookConsultation />} />
      <Route path="/contact" element={<Pages.Contact />} />
      <Route path="/privacy" element={<Pages.Privacy />} />
      <Route path="/terms" element={<Pages.Terms />} />
      <Route path="/accessibility" element={<Pages.Accessibility />} />
      <Route path="/about" element={<Pages.About />} />
      <Route path={`/${ROUTE.blog}/:slug`} element={<Pages.BlogPost />} />

      <Route path="/employer-sponsored-visas" element={<Pages.EmployerSponsorship />} />
      <Route path="/skilled-independent-189" element={<Pages.SkilledIndependent189 />} />
      <Route path="/student-to-pr-pathway" element={<Pages.StudentToPR />} />
      <Route path="/partner-visa-309-100" element={<Pages.PartnerVisa309 />} />
      <Route path="/partner-visa-820-801" element={<Pages.PartnerVisa820 />} />
      <Route path="/186-skill-requirements" element={<Pages.SkillRequirements186 />} />
      <Route path="/186-occupations-list" element={<Pages.OccupationsList186 />} />
      <Route path="/482-to-pr-pathway" element={<Pages.Pathway482ToPR />} />
      <Route path="/skilled-nominated-190" element={<Pages.SkilledNominated190 />} />
      <Route path="/skilled-work-regional-491" element={<Pages.SkilledWorkRegional491 />} />
      <Route path="/points-test" element={<Pages.PointsTest />} />
      <Route path="/skills-assessment" element={<Pages.SkillsAssessment />} />
      <Route path="/state-nomination" element={<Pages.StateNomination />} />
      <Route path="/english-requirements" element={<Pages.EnglishRequirements />} />
      <Route path="/genuine-student-requirement" element={<Pages.GenuineStudentRequirement />} />
      <Route path="/prospective-marriage-300" element={<Pages.ProspectiveMarriage300 />} />
      <Route path="/partner-visa-evidence" element={<Pages.PartnerVisaEvidence />} />
      <Route path="/bridging-visas" element={<Pages.BridgingVisas />} />
      <Route path="/australian-citizenship" element={<Pages.AustralianCitizenship />} />
      <Route path="/core-skills-occupation-list" element={<Pages.CoreSkillsOccupationList />} />
      <Route path="/art-review" element={<Pages.ARTReview />} />
      <Route path="/temporary-graduate-485" element={<Pages.TemporaryGraduate485 />} />
      <Route path="/about" element={<Pages.About />} />
      <Route path="/standard-business-sponsorship" element={<Pages.StandardBusinessSponsorship />} />
      <Route path="/skills-in-demand-visa" element={<Pages.SkillsInDemand482 />} />
      <Route path="/employer-nomination-scheme" element={<Pages.EmployerNomination186 />} />
      <Route path="/494-visa" element={<Pages.RegionalEmployer494 />} />
      <Route path="/labour-market-testing" element={<Pages.LabourMarketTesting />} />
      <Route path="/saf-levy" element={<Pages.SkillingAustraliansFund />} />
      <Route path="/sponsorship-obligations" element={<Pages.EmployerObligations />} />
      <Route path="/482-core-skills-stream" element={<Pages.CoreSkillsStream />} />
      <Route path="/482-specialist-skills-stream" element={<Pages.SpecialistSkillsStream />} />
      <Route path="/191-visa" element={<Pages.PermanentResidenceSkillsRegional />} />
      <Route path="/occupation-caveats" element={<Pages.OccupationCaveats />} />
      <Route path="/visa-conditions-482" element={<Pages.Visa482Conditions />} />
      <Route path="/change-of-employer" element={<Pages.ChangeOfEmployer />} />
      <Route path="/genuine-position-test" element={<Pages.GenuinePosition />} />
      <Route path="/labour-agreements" element={<Pages.LabourAgreement />} />
      <Route path="/training-visa-407" element={<Pages.TrainingVisa407 />} />
      <Route path="/short-stay-specialist-400" element={<Pages.ShortStaySpecialist400 />} />
      <Route path="/temporary-activity-408" element={<Pages.TemporaryActivity408 />} />
      <Route path="/dama" element={<Pages.DAMA />} />
      <Route path="/visitor-visa" element={<Pages.VisitorVisa />} />
      <Route path="/parent-visa" element={<Pages.ParentVisa />} />
      <Route path="/student-visa-500" element={<Pages.StudentVisa500 />} />
      <Route path="/national-innovation-visa" element={<Pages.NationalInnovationVisa />} />
      <Route path="/skillselect-eoi" element={<Pages.SkillSelectEOI />} />
      <Route path="/regional-areas" element={<Pages.RegionalAreas />} />
      <Route path="/skilled-regional-887" element={<Pages.SkilledRegional887 />} />
      <Route path="/invitation-rounds" element={<Pages.InvitationRounds />} />
      <Route path="/courses-pr-prospects" element={<Pages.CoursesPRProspects />} />
      <Route path="/student-financial-capacity" element={<Pages.StudentFinancialCapacity />} />
      <Route path="/student-guardian-590" element={<Pages.StudentGuardian590 />} />
      <Route path="/parent-visas" element={<Pages.ParentVisasHub />} />
      <Route path="/contributory-parent-143" element={<Pages.ContributoryParent143 />} />
      <Route path="/sponsored-parent-870" element={<Pages.SponsoredParent870 />} />
      <Route path="/balance-of-family-test" element={<Pages.BalanceOfFamilyTest />} />
      <Route path="/child-visa-101" element={<Pages.ChildVisa101 />} />
      <Route path="/child-visa-802" element={<Pages.ChildVisa802 />} />
      <Route path="/contributory-parent-173" element={<Pages.ContributoryParent173 />} />
      <Route path="/aged-parent-804" element={<Pages.AgedParent804 />} />
      <Route path="/contributory-aged-parent-864" element={<Pages.ContributoryAgedParent864 />} />
      <Route path="/parent-visa-103" element={<Pages.ParentVisa103 />} />
      <Route path="/assurance-of-support" element={<Pages.AssuranceOfSupport />} />
      <Route path="/carer-visa" element={<Pages.CarerVisa />} />
      <Route path="/remaining-relative-visa" element={<Pages.RemainingRelativeVisa />} />
      <Route path="/working-holiday-417" element={<Pages.WorkingHoliday417 />} />
      <Route path="/work-and-holiday-462" element={<Pages.WorkAndHoliday462 />} />
      <Route path="/protection-visa-866" element={<Pages.ProtectionVisa866 />} />
      <Route path="/schedule-3" element={<Pages.Schedule3 />} />
      <Route path="/no-further-stay-8503" element={<Pages.NoFurtherStay8503 />} />
      <Route path="/health-waiver" element={<Pages.HealthWaiver />} />
      <Route path="/re-entry-bans" element={<Pages.ReEntryBans />} />
      <Route path="/natural-justice-s57" element={<Pages.NaturalJusticeS57 />} />
      <Route path="/temporary-work-403" element={<Pages.TemporaryWork403 />} />
      <Route path="/adoption-visa-102" element={<Pages.AdoptionVisa102 />} />
      <Route path="/dependent-child-445" element={<Pages.DependentChild445 />} />
      <Route path="/contributory-aged-parent-884" element={<Pages.ContributoryAgedParent884 />} />
      <Route path="/eta-601" element={<Pages.Eta601 />} />
      <Route path="/evisitor-651" element={<Pages.Evisitor651 />} />
      <Route path="/medical-treatment-602" element={<Pages.MedicalTreatment602 />} />
      <Route path="/special-category-444" element={<Pages.SpecialCategory444 />} />
      <Route path="/ministerial-intervention" element={<Pages.MinisterialIntervention />} />
      <Route path="/aged-dependent-relative" element={<Pages.AgedDependentRelative />} />
      <Route path="/orphan-relative-visa" element={<Pages.OrphanRelativeVisa />} />
      <Route path="/nz-family-relationship-461" element={<Pages.NzFamilyRelationship461 />} />
      <Route path="/visitor-visas" element={<Pages.VisitorVisasHub />} />
      <Route path="/visitor-visa-600" element={<Pages.VisitorVisa600 />} />
      <Route path="/resident-return-visa" element={<Pages.ResidentReturnVisa />} />
      <Route path="/skilled-migration" element={<Pages.SkilledMigrationHub />} />
      <Route path="/student-visas" element={<Pages.StudentVisasHub />} />
      <Route path="/partner-family-visas" element={<Pages.PartnerFamilyHub />} />
      <Route path="/visitor-hub" element={<Pages.VisitorOtherHub />} />
      <Route path="/visa-refusal-review" element={<Pages.VisaRefusalReviewHub />} />
      <Route path="/visa-cancellation" element={<Pages.VisaCancellation />} />
      <Route path="/section-48-bar" element={<Pages.Section48Bar />} />
      <Route path="/pic-4020" element={<Pages.Pic4020 />} />
      <Route path="/reviews" element={<Pages.Reviews />} />
      <Route path="/news" element={<Pages.News />} />
      <Route path="/resources" element={<Pages.Resources />} />
      <Route path="/guides" element={<Pages.Guides />} />
      <Route path="/blog" element={<Pages.Blog />} />
      <Route path="/checklists" element={<Pages.Checklists />} />
      <Route path="/tools" element={<Pages.Tools />} />

      {legacyRedirects}

      <Route path="*" element={<Pages.NotFound />} />
    </Routes>
  )
}
