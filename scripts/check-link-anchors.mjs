import fs from "node:fs"
import path from "node:path"

const data = fs.readFileSync("src/data/internalLinks.ts", "utf8")
const map = {}
const blockRe = /"([^"]+)":\s*\[([\s\S]*?)\],?\s*(?="|\})/g
let m
while ((m = blockRe.exec(data))) {
  map[m[1]] = [...m[2].matchAll(/anchor:\s*"([^"]+)"/g)].map((x) => x[1])
}

const files = {
  "employer-sponsored-visas": "employer-sponsored/EmployerSponsorshipPage.tsx",
  "employer-nomination-scheme": "employer-sponsored/EmployerNomination186Page.tsx",
  "186-skill-requirements": "employer-sponsored/SkillRequirements186Page.tsx",
  "186-occupations-list": "employer-sponsored/OccupationsListPage186.tsx",
  "skills-in-demand-visa": "employer-sponsored/SkillsInDemand482Page.tsx",
  "482-to-pr-pathway": "employer-sponsored/Pathway482ToPRPage.tsx",
  "standard-business-sponsorship": "employer-sponsored/StandardBusinessSponsorshipPage.tsx",
  "core-skills-occupation-list": "employer-sponsored/CoreSkillsOccupationListPage.tsx",
  "skilled-migration": "skilled/SkilledMigrationHubPage.tsx",
  "skilled-independent-189": "skilled/SkilledIndependent189Page.tsx",
  "skilled-nominated-190": "skilled/SkilledNominated190Page.tsx",
  "skilled-work-regional-491": "skilled/SkilledWorkRegional491Page.tsx",
  "temporary-graduate-485": "skilled/TemporaryGraduate485Page.tsx",
  "points-test": "skilled/PointsTestPage.tsx",
  "skills-assessment": "skilled/SkillsAssessmentPage.tsx",
  "state-nomination": "skilled/StateNominationPage.tsx",
  "english-requirements": "skilled/EnglishRequirementsPage.tsx",
  "student-visas": "student/StudentVisasHubPage.tsx",
  "student-visa-500": "student/StudentVisa500Page.tsx",
  "genuine-student-requirement": "student/GenuineStudentRequirementPage.tsx",
  "student-to-pr-pathway": "student/StudentToPRPage.tsx",
  "partner-family-visas": "partner-family/PartnerFamilyHubPage.tsx",
  "partner-visa-820-801": "partner-family/PartnerVisa820Page.tsx",
  "partner-visa-309-100": "partner-family/PartnerVisa309Page.tsx",
  "prospective-marriage-300": "partner-family/ProspectiveMarriage300Page.tsx",
  "partner-visa-evidence": "partner-family/PartnerVisaEvidencePage.tsx",
}

let issues = 0
for (const [key, rel] of Object.entries(files)) {
  const html = fs.readFileSync(path.join("src/pages", rel), "utf8")
  const mm = html.match(new RegExp(`<AnswerBox routeKey="${key}">([\\s\\S]*?)</AnswerBox>`))
  if (!mm) {
    console.log("NO BOX", key)
    issues += 1
    continue
  }
  const missing = (map[key] || []).filter((a) => !mm[1].includes(a))
  if (missing.length) {
    console.log(key, "missing", missing)
    issues += 1
  } else {
    console.log(key, "ok", (map[key] || []).length)
  }
}
console.log("issues", issues)
