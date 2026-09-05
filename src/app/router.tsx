import { Navigate, Route, Routes } from "react-router-dom"
import React, { Suspense, lazy } from "react"
import { withNavigate } from "@/lib/withNavigate"
import { LEGACY_ROUTE_REDIRECTS } from "@/lib/navigation"
import { ROUTE } from "@/data/routes"
import HomePage from "@/pages/HomePage"

function RouteFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        minHeight: "40vh",
        display: "grid",
        placeItems: "center",
        color: "#64748b",
        fontFamily: "'Gilroy', sans-serif",
        fontSize: 14,
      }}
    >
      Loading...
    </div>
  )
}
const EmployerSponsorshipPageLazy = lazy(() => import("@/pages/employer-sponsored/EmployerSponsorshipPage"))
const EmployerSponsorshipPage = withNavigate(EmployerSponsorshipPageLazy as never)

const SkilledIndependent189PageLazy = lazy(() => import("@/pages/skilled/SkilledIndependent189Page"))
const SkilledIndependent189Page = withNavigate(SkilledIndependent189PageLazy as never)

const StudentToPRPageLazy = lazy(() => import("@/pages/student/StudentToPRPage"))
const StudentToPRPage = withNavigate(StudentToPRPageLazy as never)

const PartnerVisa309PageLazy = lazy(() => import("@/pages/partner-family/PartnerVisa309Page"))
const PartnerVisa309Page = withNavigate(PartnerVisa309PageLazy as never)

const PartnerVisa820PageLazy = lazy(() => import("@/pages/partner-family/PartnerVisa820Page"))
const PartnerVisa820Page = withNavigate(PartnerVisa820PageLazy as never)

const SkillRequirements186PageLazy = lazy(() => import("@/pages/employer-sponsored/SkillRequirements186Page"))
const SkillRequirements186Page = withNavigate(SkillRequirements186PageLazy as never)

const OccupationsListPage186Lazy = lazy(() => import("@/pages/employer-sponsored/OccupationsListPage186"))
const OccupationsListPage186 = withNavigate(OccupationsListPage186Lazy as never)

const Pathway482ToPRPageLazy = lazy(() => import("@/pages/employer-sponsored/Pathway482ToPRPage"))
const Pathway482ToPRPage = withNavigate(Pathway482ToPRPageLazy as never)

const SkilledNominated190PageLazy = lazy(() => import("@/pages/skilled/SkilledNominated190Page"))
const SkilledNominated190Page = withNavigate(SkilledNominated190PageLazy as never)

const SkilledWorkRegional491PageLazy = lazy(() => import("@/pages/skilled/SkilledWorkRegional491Page"))
const SkilledWorkRegional491Page = withNavigate(SkilledWorkRegional491PageLazy as never)

const PointsTestPageLazy = lazy(() => import("@/pages/skilled/PointsTestPage"))
const PointsTestPage = withNavigate(PointsTestPageLazy as never)

const SkillsAssessmentPageLazy = lazy(() => import("@/pages/skilled/SkillsAssessmentPage"))
const SkillsAssessmentPage = withNavigate(SkillsAssessmentPageLazy as never)

const StateNominationPageLazy = lazy(() => import("@/pages/skilled/StateNominationPage"))
const StateNominationPage = withNavigate(StateNominationPageLazy as never)

const EnglishRequirementsPageLazy = lazy(() => import("@/pages/skilled/EnglishRequirementsPage"))
const EnglishRequirementsPage = withNavigate(EnglishRequirementsPageLazy as never)

const GenuineStudentRequirementPageLazy = lazy(() => import("@/pages/student/GenuineStudentRequirementPage"))
const GenuineStudentRequirementPage = withNavigate(GenuineStudentRequirementPageLazy as never)

const ProspectiveMarriage300PageLazy = lazy(() => import("@/pages/partner-family/ProspectiveMarriage300Page"))
const ProspectiveMarriage300Page = withNavigate(ProspectiveMarriage300PageLazy as never)

const PartnerVisaEvidencePageLazy = lazy(() => import("@/pages/partner-family/PartnerVisaEvidencePage"))
const PartnerVisaEvidencePage = withNavigate(PartnerVisaEvidencePageLazy as never)

const BridgingVisasPageLazy = lazy(() => import("@/pages/visitor-other/BridgingVisasPage"))
const BridgingVisasPage = withNavigate(BridgingVisasPageLazy as never)

const AustralianCitizenshipPageLazy = lazy(() => import("@/pages/visitor-other/AustralianCitizenshipPage"))
const AustralianCitizenshipPage = withNavigate(AustralianCitizenshipPageLazy as never)

const CoreSkillsOccupationListPageLazy = lazy(() => import("@/pages/employer-sponsored/CoreSkillsOccupationListPage"))
const CoreSkillsOccupationListPage = withNavigate(CoreSkillsOccupationListPageLazy as never)

const ARTReviewPageLazy = lazy(() => import("@/pages/reviews/ARTReviewPage"))
const ARTReviewPage = withNavigate(ARTReviewPageLazy as never)

const TemporaryGraduate485PageLazy = lazy(() => import("@/pages/skilled/TemporaryGraduate485Page"))
const TemporaryGraduate485Page = withNavigate(TemporaryGraduate485PageLazy as never)

const AboutPageLazy = lazy(() => import("@/pages/practice/AboutPage"))
const AboutPage = withNavigate(AboutPageLazy as never)

const StandardBusinessSponsorshipPageLazy = lazy(() => import("@/pages/employer-sponsored/StandardBusinessSponsorshipPage"))
const StandardBusinessSponsorshipPage = withNavigate(StandardBusinessSponsorshipPageLazy as never)

const SkillsInDemand482PageLazy = lazy(() => import("@/pages/employer-sponsored/SkillsInDemand482Page"))
const SkillsInDemand482Page = withNavigate(SkillsInDemand482PageLazy as never)

const EmployerNomination186PageLazy = lazy(() => import("@/pages/employer-sponsored/EmployerNomination186Page"))
const EmployerNomination186Page = withNavigate(EmployerNomination186PageLazy as never)

const RegionalEmployer494PageLazy = lazy(() => import("@/pages/employer-sponsored/RegionalEmployer494Page"))
const RegionalEmployer494Page = withNavigate(RegionalEmployer494PageLazy as never)

const LabourMarketTestingPageLazy = lazy(() => import("@/pages/employer-sponsored/LabourMarketTestingPage"))
const LabourMarketTestingPage = withNavigate(LabourMarketTestingPageLazy as never)

const SkillingAustraliansFundPageLazy = lazy(() => import("@/pages/employer-sponsored/SkillingAustraliansFundPage"))
const SkillingAustraliansFundPage = withNavigate(SkillingAustraliansFundPageLazy as never)

const EmployerObligationsPageLazy = lazy(() => import("@/pages/employer-sponsored/EmployerObligationsPage"))
const EmployerObligationsPage = withNavigate(EmployerObligationsPageLazy as never)

const CoreSkillsStreamPageLazy = lazy(() => import("@/pages/employer-sponsored/CoreSkillsStreamPage"))
const CoreSkillsStreamPage = withNavigate(CoreSkillsStreamPageLazy as never)

const SpecialistSkillsStreamPageLazy = lazy(() => import("@/pages/employer-sponsored/SpecialistSkillsStreamPage"))
const SpecialistSkillsStreamPage = withNavigate(SpecialistSkillsStreamPageLazy as never)

const PermanentResidenceSkillsRegionalPageLazy = lazy(() => import("@/pages/employer-sponsored/PermanentResidenceSkillsRegionalPage"))
const PermanentResidenceSkillsRegionalPage = withNavigate(PermanentResidenceSkillsRegionalPageLazy as never)

const OccupationCaveatsPageLazy = lazy(() => import("@/pages/employer-sponsored/OccupationCaveatsPage"))
const OccupationCaveatsPage = withNavigate(OccupationCaveatsPageLazy as never)

const Visa482ConditionsPageLazy = lazy(() => import("@/pages/employer-sponsored/Visa482ConditionsPage"))
const Visa482ConditionsPage = withNavigate(Visa482ConditionsPageLazy as never)

const ChangeOfEmployerPageLazy = lazy(() => import("@/pages/employer-sponsored/ChangeOfEmployerPage"))
const ChangeOfEmployerPage = withNavigate(ChangeOfEmployerPageLazy as never)

const GenuinePositionPageLazy = lazy(() => import("@/pages/employer-sponsored/GenuinePositionPage"))
const GenuinePositionPage = withNavigate(GenuinePositionPageLazy as never)

const LabourAgreementPageLazy = lazy(() => import("@/pages/employer-sponsored/LabourAgreementPage"))
const LabourAgreementPage = withNavigate(LabourAgreementPageLazy as never)

const TrainingVisa407PageLazy = lazy(() => import("@/pages/employer-sponsored/TrainingVisa407Page"))
const TrainingVisa407Page = withNavigate(TrainingVisa407PageLazy as never)

const ShortStaySpecialist400PageLazy = lazy(() => import("@/pages/employer-sponsored/ShortStaySpecialist400Page"))
const ShortStaySpecialist400Page = withNavigate(ShortStaySpecialist400PageLazy as never)

const TemporaryActivity408PageLazy = lazy(() => import("@/pages/employer-sponsored/TemporaryActivity408Page"))
const TemporaryActivity408Page = withNavigate(TemporaryActivity408PageLazy as never)

const DAMAPageLazy = lazy(() => import("@/pages/employer-sponsored/DAMAPage"))
const DAMAPage = withNavigate(DAMAPageLazy as never)

const VisitorVisaPageLazy = lazy(() => import("@/pages/visitor-other/VisitorVisaPage"))
const VisitorVisaPage = withNavigate(VisitorVisaPageLazy as never)

const ParentVisaPageLazy = lazy(() => import("@/pages/visitor-other/ParentVisaPage"))
const ParentVisaPage = withNavigate(ParentVisaPageLazy as never)

const StudentVisa500PageLazy = lazy(() => import("@/pages/student/StudentVisa500Page"))
const StudentVisa500Page = withNavigate(StudentVisa500PageLazy as never)

const NationalInnovationVisaPageLazy = lazy(() => import("@/pages/skilled/NationalInnovationVisaPage"))
const NationalInnovationVisaPage = withNavigate(NationalInnovationVisaPageLazy as never)

const SkillSelectEOIPageLazy = lazy(() => import("@/pages/skilled/SkillSelectEOIPage"))
const SkillSelectEOIPage = withNavigate(SkillSelectEOIPageLazy as never)

const RegionalAreasPageLazy = lazy(() => import("@/pages/skilled/RegionalAreasPage"))
const RegionalAreasPage = withNavigate(RegionalAreasPageLazy as never)

const SkilledRegional887PageLazy = lazy(() => import("@/pages/skilled/SkilledRegional887Page"))
const SkilledRegional887Page = withNavigate(SkilledRegional887PageLazy as never)

const InvitationRoundsPageLazy = lazy(() => import("@/pages/skilled/InvitationRoundsPage"))
const InvitationRoundsPage = withNavigate(InvitationRoundsPageLazy as never)

const CoursesPRProspectsPageLazy = lazy(() => import("@/pages/student/CoursesPRProspectsPage"))
const CoursesPRProspectsPage = withNavigate(CoursesPRProspectsPageLazy as never)

const StudentFinancialCapacityPageLazy = lazy(() => import("@/pages/student/StudentFinancialCapacityPage"))
const StudentFinancialCapacityPage = withNavigate(StudentFinancialCapacityPageLazy as never)

const StudentGuardian590PageLazy = lazy(() => import("@/pages/student/StudentGuardian590Page"))
const StudentGuardian590Page = withNavigate(StudentGuardian590PageLazy as never)

const ParentVisasHubPageLazy = lazy(() => import("@/pages/partner-family/ParentVisasHubPage"))
const ParentVisasHubPage = withNavigate(ParentVisasHubPageLazy as never)

const ContributoryParent143PageLazy = lazy(() => import("@/pages/partner-family/ContributoryParent143Page"))
const ContributoryParent143Page = withNavigate(ContributoryParent143PageLazy as never)

const SponsoredParent870PageLazy = lazy(() => import("@/pages/partner-family/SponsoredParent870Page"))
const SponsoredParent870Page = withNavigate(SponsoredParent870PageLazy as never)

const BalanceOfFamilyTestPageLazy = lazy(() => import("@/pages/partner-family/BalanceOfFamilyTestPage"))
const BalanceOfFamilyTestPage = withNavigate(BalanceOfFamilyTestPageLazy as never)

const ChildVisa101PageLazy = lazy(() => import("@/pages/partner-family/ChildVisa101Page"))
const ChildVisa101Page = withNavigate(ChildVisa101PageLazy as never)

const ChildVisa802PageLazy = lazy(() => import("@/pages/partner-family/ChildVisa802Page"))
const ChildVisa802Page = withNavigate(ChildVisa802PageLazy as never)

const ContributoryParent173PageLazy = lazy(() => import("@/pages/partner-family/ContributoryParent173Page"))
const ContributoryParent173Page = withNavigate(ContributoryParent173PageLazy as never)

const AgedParent804PageLazy = lazy(() => import("@/pages/partner-family/AgedParent804Page"))
const AgedParent804Page = withNavigate(AgedParent804PageLazy as never)

const ContributoryAgedParent864PageLazy = lazy(() => import("@/pages/partner-family/ContributoryAgedParent864Page"))
const ContributoryAgedParent864Page = withNavigate(ContributoryAgedParent864PageLazy as never)

const ParentVisa103PageLazy = lazy(() => import("@/pages/partner-family/ParentVisa103Page"))
const ParentVisa103Page = withNavigate(ParentVisa103PageLazy as never)

const AssuranceOfSupportPageLazy = lazy(() => import("@/pages/partner-family/AssuranceOfSupportPage"))
const AssuranceOfSupportPage = withNavigate(AssuranceOfSupportPageLazy as never)

const CarerVisaPageLazy = lazy(() => import("@/pages/partner-family/CarerVisaPage"))
const CarerVisaPage = withNavigate(CarerVisaPageLazy as never)

const RemainingRelativeVisaPageLazy = lazy(() => import("@/pages/partner-family/RemainingRelativeVisaPage"))
const RemainingRelativeVisaPage = withNavigate(RemainingRelativeVisaPageLazy as never)

const WorkingHoliday417PageLazy = lazy(() => import("@/pages/visitor-other/WorkingHoliday417Page"))
const WorkingHoliday417Page = withNavigate(WorkingHoliday417PageLazy as never)

const WorkAndHoliday462PageLazy = lazy(() => import("@/pages/visitor-other/WorkAndHoliday462Page"))
const WorkAndHoliday462Page = withNavigate(WorkAndHoliday462PageLazy as never)

const ProtectionVisa866PageLazy = lazy(() => import("@/pages/visitor-other/ProtectionVisa866Page"))
const ProtectionVisa866Page = withNavigate(ProtectionVisa866PageLazy as never)

const Schedule3PageLazy = lazy(() => import("@/pages/reviews/Schedule3Page"))
const Schedule3Page = withNavigate(Schedule3PageLazy as never)

const NoFurtherStay8503PageLazy = lazy(() => import("@/pages/reviews/NoFurtherStay8503Page"))
const NoFurtherStay8503Page = withNavigate(NoFurtherStay8503PageLazy as never)

const HealthWaiverPageLazy = lazy(() => import("@/pages/reviews/HealthWaiverPage"))
const HealthWaiverPage = withNavigate(HealthWaiverPageLazy as never)

const ReEntryBansPageLazy = lazy(() => import("@/pages/reviews/ReEntryBansPage"))
const ReEntryBansPage = withNavigate(ReEntryBansPageLazy as never)

const NaturalJusticeS57PageLazy = lazy(() => import("@/pages/reviews/NaturalJusticeS57Page"))
const NaturalJusticeS57Page = withNavigate(NaturalJusticeS57PageLazy as never)

const TemporaryWork403PageLazy = lazy(() => import("@/pages/employer-sponsored/TemporaryWork403Page"))
const TemporaryWork403Page = withNavigate(TemporaryWork403PageLazy as never)

const AdoptionVisa102PageLazy = lazy(() => import("@/pages/partner-family/AdoptionVisa102Page"))
const AdoptionVisa102Page = withNavigate(AdoptionVisa102PageLazy as never)

const DependentChild445PageLazy = lazy(() => import("@/pages/partner-family/DependentChild445Page"))
const DependentChild445Page = withNavigate(DependentChild445PageLazy as never)

const ContributoryAgedParent884PageLazy = lazy(() => import("@/pages/partner-family/ContributoryAgedParent884Page"))
const ContributoryAgedParent884Page = withNavigate(ContributoryAgedParent884PageLazy as never)

const Eta601PageLazy = lazy(() => import("@/pages/visitor-other/Eta601Page"))
const Eta601Page = withNavigate(Eta601PageLazy as never)

const Evisitor651PageLazy = lazy(() => import("@/pages/visitor-other/Evisitor651Page"))
const Evisitor651Page = withNavigate(Evisitor651PageLazy as never)

const MedicalTreatment602PageLazy = lazy(() => import("@/pages/visitor-other/MedicalTreatment602Page"))
const MedicalTreatment602Page = withNavigate(MedicalTreatment602PageLazy as never)

const SpecialCategory444PageLazy = lazy(() => import("@/pages/visitor-other/SpecialCategory444Page"))
const SpecialCategory444Page = withNavigate(SpecialCategory444PageLazy as never)

const MinisterialInterventionPageLazy = lazy(() => import("@/pages/reviews/MinisterialInterventionPage"))
const MinisterialInterventionPage = withNavigate(MinisterialInterventionPageLazy as never)

const AgedDependentRelativePageLazy = lazy(() => import("@/pages/partner-family/AgedDependentRelativePage"))
const AgedDependentRelativePage = withNavigate(AgedDependentRelativePageLazy as never)

const OrphanRelativeVisaPageLazy = lazy(() => import("@/pages/partner-family/OrphanRelativeVisaPage"))
const OrphanRelativeVisaPage = withNavigate(OrphanRelativeVisaPageLazy as never)

const NzFamilyRelationship461PageLazy = lazy(() => import("@/pages/partner-family/NzFamilyRelationship461Page"))
const NzFamilyRelationship461Page = withNavigate(NzFamilyRelationship461PageLazy as never)

const VisitorVisasHubPageLazy = lazy(() => import("@/pages/visitor-other/VisitorVisasHubPage"))
const VisitorVisasHubPage = withNavigate(VisitorVisasHubPageLazy as never)

const VisitorVisa600PageLazy = lazy(() => import("@/pages/visitor-other/VisitorVisa600Page"))
const VisitorVisa600Page = withNavigate(VisitorVisa600PageLazy as never)

const ResidentReturnVisaPageLazy = lazy(() => import("@/pages/visitor-other/ResidentReturnVisaPage"))
const ResidentReturnVisaPage = withNavigate(ResidentReturnVisaPageLazy as never)

const SkilledMigrationHubPageLazy = lazy(() => import("@/pages/skilled/SkilledMigrationHubPage"))
const SkilledMigrationHubPage = withNavigate(SkilledMigrationHubPageLazy as never)

const StudentVisasHubPageLazy = lazy(() => import("@/pages/student/StudentVisasHubPage"))
const StudentVisasHubPage = withNavigate(StudentVisasHubPageLazy as never)

const PartnerFamilyHubPageLazy = lazy(() => import("@/pages/partner-family/PartnerFamilyHubPage"))
const PartnerFamilyHubPage = withNavigate(PartnerFamilyHubPageLazy as never)

const VisitorOtherHubPageLazy = lazy(() => import("@/pages/visitor-other/VisitorOtherHubPage"))
const VisitorOtherHubPage = withNavigate(VisitorOtherHubPageLazy as never)

const VisaRefusalReviewHubPageLazy = lazy(() => import("@/pages/reviews/VisaRefusalReviewHubPage"))
const VisaRefusalReviewHubPage = withNavigate(VisaRefusalReviewHubPageLazy as never)

const VisaCancellationPageLazy = lazy(() => import("@/pages/reviews/VisaCancellationPage"))
const VisaCancellationPage = withNavigate(VisaCancellationPageLazy as never)

const Section48BarPageLazy = lazy(() => import("@/pages/reviews/Section48BarPage"))
const Section48BarPage = withNavigate(Section48BarPageLazy as never)

const Pic4020PageLazy = lazy(() => import("@/pages/reviews/Pic4020Page"))
const Pic4020Page = withNavigate(Pic4020PageLazy as never)

const ReviewsPageLazy = lazy(() => import("@/pages/practice/ReviewsPage"))
const ReviewsPage = withNavigate(ReviewsPageLazy as never)

const NewsPageLazy = lazy(() => import("@/pages/practice/NewsPage"))
const NewsPage = withNavigate(NewsPageLazy as never)

const ResourcesPageLazy = lazy(() => import("@/pages/practice/ResourcesPage"))
const ResourcesPage = withNavigate(ResourcesPageLazy as never)

const GuidesPageLazy = lazy(() => import("@/pages/practice/GuidesPage"))
const GuidesPage = withNavigate(GuidesPageLazy as never)

const BlogPageLazy = lazy(() => import("@/pages/practice/BlogPage"))
const BlogPage = withNavigate(BlogPageLazy as never)

const ChecklistsPageLazy = lazy(() => import("@/pages/practice/ChecklistsPage"))
const ChecklistsPage = withNavigate(ChecklistsPageLazy as never)

const ToolsPageLazy = lazy(() => import("@/pages/practice/ToolsPage"))
const ToolsPage = withNavigate(ToolsPageLazy as never)

const BlogPostPageLazy = lazy(() => import("@/pages/practice/BlogPostPage"))
const BlogPostPage = withNavigate(BlogPostPageLazy as never)

const BookConsultationPageLazy = lazy(() => import("@/pages/BookConsultationPage"))
const BookConsultationPage = withNavigate(BookConsultationPageLazy as never)

const BookPageLazy = lazy(() => import("@/pages/BookPage"))
const BookPage = withNavigate(BookPageLazy as never)

const PreAssessmentPageLazy = lazy(() => import("@/pages/PreAssessmentPage"))
const PreAssessmentPage = withNavigate(PreAssessmentPageLazy as never)

const ContactPageLazy = lazy(() => import("@/pages/ContactPage"))
const ContactPage = withNavigate(ContactPageLazy as never)

const PrivacyPageLazy = lazy(() =>
  import("@/pages/LegalPage").then((m) => ({
    default: function PrivacyPage(p: { navigate: (page: string) => void }) {
      return <m.default kind="privacy" navigate={p.navigate} />
    },
  })),
)
const PrivacyPage = withNavigate(PrivacyPageLazy as never)

const TermsPageLazy = lazy(() =>
  import("@/pages/LegalPage").then((m) => ({
    default: function TermsPage(p: { navigate: (page: string) => void }) {
      return <m.default kind="terms" navigate={p.navigate} />
    },
  })),
)
const TermsPage = withNavigate(TermsPageLazy as never)

const AccessibilityPageLazy = lazy(() =>
  import("@/pages/LegalPage").then((m) => ({
    default: function AccessibilityPage(p: { navigate: (page: string) => void }) {
      return <m.default kind="accessibility" navigate={p.navigate} />
    },
  })),
)
const AccessibilityPage = withNavigate(AccessibilityPageLazy as never)

const NotFoundPageLazy = lazy(() => import("@/pages/NotFoundPage"))
const NotFoundPage = withNavigate(NotFoundPageLazy as never)

const Pages = {
  Home: HomePage,
  EmployerSponsorship: EmployerSponsorshipPage,
  SkilledIndependent189: SkilledIndependent189Page,
  StudentToPR: StudentToPRPage,
  PartnerVisa309: PartnerVisa309Page,
  PartnerVisa820: PartnerVisa820Page,
  SkillRequirements186: SkillRequirements186Page,
  OccupationsList186: OccupationsListPage186,
  Pathway482ToPR: Pathway482ToPRPage,
  SkilledNominated190: SkilledNominated190Page,
  SkilledWorkRegional491: SkilledWorkRegional491Page,
  PointsTest: PointsTestPage,
  SkillsAssessment: SkillsAssessmentPage,
  StateNomination: StateNominationPage,
  EnglishRequirements: EnglishRequirementsPage,
  GenuineStudentRequirement: GenuineStudentRequirementPage,
  ProspectiveMarriage300: ProspectiveMarriage300Page,
  PartnerVisaEvidence: PartnerVisaEvidencePage,
  BridgingVisas: BridgingVisasPage,
  AustralianCitizenship: AustralianCitizenshipPage,
  CoreSkillsOccupationList: CoreSkillsOccupationListPage,
  ARTReview: ARTReviewPage,
  TemporaryGraduate485: TemporaryGraduate485Page,
  About: AboutPage,
  StandardBusinessSponsorship: StandardBusinessSponsorshipPage,
  SkillsInDemand482: SkillsInDemand482Page,
  EmployerNomination186: EmployerNomination186Page,
  RegionalEmployer494: RegionalEmployer494Page,
  LabourMarketTesting: LabourMarketTestingPage,
  SkillingAustraliansFund: SkillingAustraliansFundPage,
  EmployerObligations: EmployerObligationsPage,
  CoreSkillsStream: CoreSkillsStreamPage,
  SpecialistSkillsStream: SpecialistSkillsStreamPage,
  PermanentResidenceSkillsRegional: PermanentResidenceSkillsRegionalPage,
  OccupationCaveats: OccupationCaveatsPage,
  Visa482Conditions: Visa482ConditionsPage,
  ChangeOfEmployer: ChangeOfEmployerPage,
  GenuinePosition: GenuinePositionPage,
  LabourAgreement: LabourAgreementPage,
  TrainingVisa407: TrainingVisa407Page,
  ShortStaySpecialist400: ShortStaySpecialist400Page,
  TemporaryActivity408: TemporaryActivity408Page,
  DAMA: DAMAPage,
  VisitorVisa: VisitorVisaPage,
  ParentVisa: ParentVisaPage,
  StudentVisa500: StudentVisa500Page,
  NationalInnovationVisa: NationalInnovationVisaPage,
  SkillSelectEOI: SkillSelectEOIPage,
  RegionalAreas: RegionalAreasPage,
  SkilledRegional887: SkilledRegional887Page,
  InvitationRounds: InvitationRoundsPage,
  CoursesPRProspects: CoursesPRProspectsPage,
  StudentFinancialCapacity: StudentFinancialCapacityPage,
  StudentGuardian590: StudentGuardian590Page,
  ParentVisasHub: ParentVisasHubPage,
  ContributoryParent143: ContributoryParent143Page,
  SponsoredParent870: SponsoredParent870Page,
  BalanceOfFamilyTest: BalanceOfFamilyTestPage,
  ChildVisa101: ChildVisa101Page,
  ChildVisa802: ChildVisa802Page,
  ContributoryParent173: ContributoryParent173Page,
  AgedParent804: AgedParent804Page,
  ContributoryAgedParent864: ContributoryAgedParent864Page,
  ParentVisa103: ParentVisa103Page,
  AssuranceOfSupport: AssuranceOfSupportPage,
  CarerVisa: CarerVisaPage,
  RemainingRelativeVisa: RemainingRelativeVisaPage,
  WorkingHoliday417: WorkingHoliday417Page,
  WorkAndHoliday462: WorkAndHoliday462Page,
  ProtectionVisa866: ProtectionVisa866Page,
  Schedule3: Schedule3Page,
  NoFurtherStay8503: NoFurtherStay8503Page,
  HealthWaiver: HealthWaiverPage,
  ReEntryBans: ReEntryBansPage,
  NaturalJusticeS57: NaturalJusticeS57Page,
  TemporaryWork403: TemporaryWork403Page,
  AdoptionVisa102: AdoptionVisa102Page,
  DependentChild445: DependentChild445Page,
  ContributoryAgedParent884: ContributoryAgedParent884Page,
  Eta601: Eta601Page,
  Evisitor651: Evisitor651Page,
  MedicalTreatment602: MedicalTreatment602Page,
  SpecialCategory444: SpecialCategory444Page,
  MinisterialIntervention: MinisterialInterventionPage,
  AgedDependentRelative: AgedDependentRelativePage,
  OrphanRelativeVisa: OrphanRelativeVisaPage,
  NzFamilyRelationship461: NzFamilyRelationship461Page,
  VisitorVisasHub: VisitorVisasHubPage,
  VisitorVisa600: VisitorVisa600Page,
  ResidentReturnVisa: ResidentReturnVisaPage,
  SkilledMigrationHub: SkilledMigrationHubPage,
  StudentVisasHub: StudentVisasHubPage,
  PartnerFamilyHub: PartnerFamilyHubPage,
  VisitorOtherHub: VisitorOtherHubPage,
  VisaRefusalReviewHub: VisaRefusalReviewHubPage,
  VisaCancellation: VisaCancellationPage,
  Section48Bar: Section48BarPage,
  Pic4020: Pic4020Page,
  Reviews: ReviewsPage,
  News: NewsPage,
  Resources: ResourcesPage,
  Guides: GuidesPage,
  Blog: BlogPage,
  Checklists: ChecklistsPage,
  Tools: ToolsPage,
  BlogPost: BlogPostPage,
  BookConsultation: BookConsultationPage,
  Book: BookPage,
  PreAssessment: PreAssessmentPage,
  Contact: ContactPage,
  Privacy: PrivacyPage,
  Terms: TermsPage,
  Accessibility: AccessibilityPage,
  NotFound: NotFoundPage,
} as const

const legacyRedirects = Object.entries(LEGACY_ROUTE_REDIRECTS).map(([from, to]) => (
  <Route key={from} path={`/${from}`} element={<Navigate to={`/${to}`} replace />} />
))

export default function AppRouter() {
  return (
    <Suspense fallback={<RouteFallback />}>
    <Routes>
      <Route path="/" element={<Pages.Home />} />
      <Route path={`/${ROUTE.book}`} element={<Pages.Book />} />
      <Route path={`/${ROUTE.bookConsultation}`} element={<Pages.BookConsultation />} />
      <Route path={`/${ROUTE.preAssessment}`} element={<Pages.PreAssessment />} />
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
    </Suspense>
  )
}
