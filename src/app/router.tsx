import { Navigate, Route, Routes } from "react-router-dom"
import { withNavigate } from "@/lib/withNavigate"
import { LEGACY_ROUTE_REDIRECTS } from "@/lib/navigation"
import { ROUTE } from "@/data/routes"
import HomePage from "@/pages/HomePage"
import BookConsultationPage from "@/pages/BookConsultationPage"

import EmployerSponsorshipPage from "@/pages/employer-sponsored/EmployerSponsorshipPage"
import EmployerNomination186Page from "@/pages/employer-sponsored/EmployerNomination186Page"
import SkillRequirements186Page from "@/pages/employer-sponsored/SkillRequirements186Page"
import OccupationsListPage186 from "@/pages/employer-sponsored/OccupationsListPage186"
import SkillsInDemand482Page from "@/pages/employer-sponsored/SkillsInDemand482Page"
import Pathway482ToPRPage from "@/pages/employer-sponsored/Pathway482ToPRPage"
import StandardBusinessSponsorshipPage from "@/pages/employer-sponsored/StandardBusinessSponsorshipPage"
import CoreSkillsOccupationListPage from "@/pages/employer-sponsored/CoreSkillsOccupationListPage"
import RegionalEmployer494Page from "@/pages/employer-sponsored/RegionalEmployer494Page"

import SkilledMigrationHubPage from "@/pages/skilled/SkilledMigrationHubPage"
import SkilledIndependent189Page from "@/pages/skilled/SkilledIndependent189Page"
import SkilledNominated190Page from "@/pages/skilled/SkilledNominated190Page"
import SkilledWorkRegional491Page from "@/pages/skilled/SkilledWorkRegional491Page"
import TemporaryGraduate485Page from "@/pages/skilled/TemporaryGraduate485Page"
import PointsTestPage from "@/pages/skilled/PointsTestPage"
import SkillsAssessmentPage from "@/pages/skilled/SkillsAssessmentPage"
import StateNominationPage from "@/pages/skilled/StateNominationPage"
import EnglishRequirementsPage from "@/pages/skilled/EnglishRequirementsPage"

import StudentVisasHubPage from "@/pages/student/StudentVisasHubPage"
import StudentVisa500Page from "@/pages/student/StudentVisa500Page"
import GenuineStudentRequirementPage from "@/pages/student/GenuineStudentRequirementPage"
import StudentToPRPage from "@/pages/student/StudentToPRPage"

import PartnerFamilyHubPage from "@/pages/partner-family/PartnerFamilyHubPage"
import PartnerVisa820Page from "@/pages/partner-family/PartnerVisa820Page"
import PartnerVisa309Page from "@/pages/partner-family/PartnerVisa309Page"
import ProspectiveMarriage300Page from "@/pages/partner-family/ProspectiveMarriage300Page"
import PartnerVisaEvidencePage from "@/pages/partner-family/PartnerVisaEvidencePage"

import VisitorOtherHubPage from "@/pages/visitor-other/VisitorOtherHubPage"
import VisitorVisaPage from "@/pages/visitor-other/VisitorVisaPage"
import ParentVisaPage from "@/pages/visitor-other/ParentVisaPage"
import BridgingVisasPage from "@/pages/visitor-other/BridgingVisasPage"
import AustralianCitizenshipPage from "@/pages/visitor-other/AustralianCitizenshipPage"

import VisaRefusalReviewHubPage from "@/pages/reviews/VisaRefusalReviewHubPage"
import ARTReviewPage from "@/pages/reviews/ARTReviewPage"

import AboutPage from "@/pages/practice/AboutPage"
import ResourcesPage from "@/pages/practice/ResourcesPage"
import GuidesPage from "@/pages/practice/GuidesPage"
import BlogPage from "@/pages/practice/BlogPage"
import BlogPostPage from "@/pages/practice/BlogPostPage"
import ChecklistsPage from "@/pages/practice/ChecklistsPage"
import ToolsPage from "@/pages/practice/ToolsPage"

const Pages = {
  Home: HomePage,
  EmployerSponsorship: withNavigate(EmployerSponsorshipPage),
  EmployerNomination186: withNavigate(EmployerNomination186Page),
  SkillRequirements186: withNavigate(SkillRequirements186Page),
  OccupationsList186: withNavigate(OccupationsListPage186),
  SkillsInDemand482: withNavigate(SkillsInDemand482Page),
  Pathway482ToPR: withNavigate(Pathway482ToPRPage),
  StandardBusinessSponsorship: withNavigate(StandardBusinessSponsorshipPage),
  CoreSkillsOccupationList: withNavigate(CoreSkillsOccupationListPage),
  RegionalEmployer494: withNavigate(RegionalEmployer494Page),
  SkilledMigrationHub: withNavigate(SkilledMigrationHubPage),
  SkilledIndependent189: withNavigate(SkilledIndependent189Page),
  SkilledNominated190: withNavigate(SkilledNominated190Page),
  SkilledWorkRegional491: withNavigate(SkilledWorkRegional491Page),
  TemporaryGraduate485: withNavigate(TemporaryGraduate485Page),
  PointsTest: withNavigate(PointsTestPage),
  SkillsAssessment: withNavigate(SkillsAssessmentPage),
  StateNomination: withNavigate(StateNominationPage),
  EnglishRequirements: withNavigate(EnglishRequirementsPage),
  StudentVisasHub: withNavigate(StudentVisasHubPage),
  StudentVisa500: withNavigate(StudentVisa500Page),
  GenuineStudentRequirement: withNavigate(GenuineStudentRequirementPage),
  StudentToPR: withNavigate(StudentToPRPage),
  PartnerFamilyHub: withNavigate(PartnerFamilyHubPage),
  PartnerVisa820: withNavigate(PartnerVisa820Page),
  PartnerVisa309: withNavigate(PartnerVisa309Page),
  ProspectiveMarriage300: withNavigate(ProspectiveMarriage300Page),
  PartnerVisaEvidence: withNavigate(PartnerVisaEvidencePage),
  VisitorOtherHub: withNavigate(VisitorOtherHubPage),
  VisitorVisa: withNavigate(VisitorVisaPage),
  ParentVisa: withNavigate(ParentVisaPage),
  BridgingVisas: withNavigate(BridgingVisasPage),
  AustralianCitizenship: withNavigate(AustralianCitizenshipPage),
  VisaRefusalReviewHub: withNavigate(VisaRefusalReviewHubPage),
  ARTReview: withNavigate(ARTReviewPage),
  About: withNavigate(AboutPage),
  Resources: withNavigate(ResourcesPage),
  Guides: withNavigate(GuidesPage),
  Blog: withNavigate(BlogPage),
  BlogPost: withNavigate(BlogPostPage),
  Checklists: withNavigate(ChecklistsPage),
  Tools: withNavigate(ToolsPage),
  BookConsultation: withNavigate(BookConsultationPage),
} as const

const legacyRedirects = Object.entries(LEGACY_ROUTE_REDIRECTS).map(([from, to]) => (
  <Route key={from} path={`/${from}`} element={<Navigate to={`/${to}`} replace />} />
))

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />} />
      <Route path={`/${ROUTE.bookConsultation}`} element={<Pages.BookConsultation />} />

      <Route path={`/${ROUTE.employerSponsoredVisas}`} element={<Pages.EmployerSponsorship />} />
      <Route path={`/${ROUTE.employerNominationScheme}`} element={<Pages.EmployerNomination186 />} />
      <Route path={`/${ROUTE.skill186Requirements}`} element={<Pages.SkillRequirements186 />} />
      <Route path={`/${ROUTE.occupationList186}`} element={<Pages.OccupationsList186 />} />
      <Route path={`/${ROUTE.skillsInDemandVisa}`} element={<Pages.SkillsInDemand482 />} />
      <Route path={`/${ROUTE.pathway482ToPR}`} element={<Pages.Pathway482ToPR />} />
      <Route path={`/${ROUTE.standardBusinessSponsorship}`} element={<Pages.StandardBusinessSponsorship />} />
      <Route path={`/${ROUTE.coreSkillsOccupationList}`} element={<Pages.CoreSkillsOccupationList />} />
      <Route path="/regional-494" element={<Pages.RegionalEmployer494 />} />

      <Route path={`/${ROUTE.skilledMigration}`} element={<Pages.SkilledMigrationHub />} />
      <Route path={`/${ROUTE.skilledIndependent189}`} element={<Pages.SkilledIndependent189 />} />
      <Route path={`/${ROUTE.skilledNominated190}`} element={<Pages.SkilledNominated190 />} />
      <Route path={`/${ROUTE.skilledWorkRegional491}`} element={<Pages.SkilledWorkRegional491 />} />
      <Route path={`/${ROUTE.temporaryGraduate485}`} element={<Pages.TemporaryGraduate485 />} />
      <Route path={`/${ROUTE.pointsTest}`} element={<Pages.PointsTest />} />
      <Route path={`/${ROUTE.skillsAssessment}`} element={<Pages.SkillsAssessment />} />
      <Route path={`/${ROUTE.stateNomination}`} element={<Pages.StateNomination />} />
      <Route path={`/${ROUTE.englishRequirements}`} element={<Pages.EnglishRequirements />} />

      <Route path={`/${ROUTE.studentVisas}`} element={<Pages.StudentVisasHub />} />
      <Route path={`/${ROUTE.studentVisa500}`} element={<Pages.StudentVisa500 />} />
      <Route path={`/${ROUTE.genuineStudentRequirement}`} element={<Pages.GenuineStudentRequirement />} />
      <Route path={`/${ROUTE.studentToPRPathway}`} element={<Pages.StudentToPR />} />

      <Route path={`/${ROUTE.partnerFamilyVisas}`} element={<Pages.PartnerFamilyHub />} />
      <Route path={`/${ROUTE.partnerVisa820801}`} element={<Pages.PartnerVisa820 />} />
      <Route path={`/${ROUTE.partnerVisa309100}`} element={<Pages.PartnerVisa309 />} />
      <Route path={`/${ROUTE.prospectiveMarriage300}`} element={<Pages.ProspectiveMarriage300 />} />
      <Route path={`/${ROUTE.partnerVisaEvidence}`} element={<Pages.PartnerVisaEvidence />} />

      <Route path="/visitor-hub" element={<Pages.VisitorOtherHub />} />
      <Route path="/visitor-visa" element={<Pages.VisitorVisa />} />
      <Route path="/parent-visa" element={<Pages.ParentVisa />} />
      <Route path={`/${ROUTE.bridgingVisas}`} element={<Pages.BridgingVisas />} />
      <Route path={`/${ROUTE.australianCitizenship}`} element={<Pages.AustralianCitizenship />} />

      <Route path={`/${ROUTE.visaRefusalReview}`} element={<Pages.VisaRefusalReviewHub />} />
      <Route path={`/${ROUTE.artReview}`} element={<Pages.ARTReview />} />

      <Route path="/about" element={<Pages.About />} />
      <Route path={`/${ROUTE.resources}`} element={<Pages.Resources />} />
      <Route path={`/${ROUTE.guides}`} element={<Pages.Guides />} />
      <Route path={`/${ROUTE.blog}`} element={<Pages.Blog />} />
      <Route path={`/${ROUTE.blog}/:slug`} element={<Pages.BlogPost />} />
      <Route path={`/${ROUTE.checklists}`} element={<Pages.Checklists />} />
      <Route path={`/${ROUTE.tools}`} element={<Pages.Tools />} />

      {legacyRedirects}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
