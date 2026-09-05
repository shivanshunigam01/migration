/**
 * Wire AnswerBox routeKey + rewrite Quick Answer copy so §2 anchors match.
 * Run: node scripts/wire-internal-links.mjs
 */
import fs from "node:fs"
import path from "node:path"

const ROOT = path.resolve("src/pages")

/** routeKey → { file glob fragment, new AnswerBox inner text } */
const UPDATES = {
  "employer-sponsored-visas": {
    file: "employer-sponsored/EmployerSponsorshipPage.tsx",
    text: `Australian employer-sponsored visas include the Skills in Demand (subclass 482) temporary visa and the Employer Nomination Scheme (subclass 186) permanent visa, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Most pathways start with Standard Business Sponsorship, then nomination. Related guides cover the 482 to PR pathway and the 186 occupations list.`,
  },
  "employer-nomination-scheme": {
    file: "employer-sponsored/EmployerNomination186Page.tsx",
    text: `The Employer Nomination Scheme (subclass 186) visa is a permanent residence visa for skilled workers nominated by an approved Australian employer, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. It has three streams: Temporary Residence Transition (often after a subclass 482), Direct Entry (usually needing a skills assessment), and Labour Agreement. Employers generally need Standard Business Sponsorship, and applicants must usually meet competent English and age rules, though limited exemptions apply.`,
  },
  "186-skill-requirements": {
    file: "employer-sponsored/SkillRequirements186Page.tsx",
    text: `Skill requirements for the Employer Nomination Scheme (subclass 186) depend on the stream, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Direct Entry usually needs a positive skills assessment and relevant skilled work, while Temporary Residence Transition builds on a qualifying subclass 482. Check the 186 occupations list for eligible roles and confirm English and age criteria before lodging.`,
  },
  "186-occupations-list": {
    file: "employer-sponsored/OccupationsListPage186.tsx",
    text: `The 186 occupations list identifies roles that can be nominated under the Employer Nomination Scheme (subclass 186), as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Temporary Residence Transition applicants often arrive via a subclass 482 nomination, while Direct Entry commonly needs a skills assessment. For temporary Core Skills nominations, also review the Core Skills Occupation List.`,
  },
  "skills-in-demand-visa": {
    file: "employer-sponsored/SkillsInDemand482Page.tsx",
    text: `The Skills in Demand (subclass 482) visa lets an approved sponsor employ a skilled worker in Australia for up to four years, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Employers need Standard Business Sponsorship and a role that fits the Core Skills Occupation List or another eligible stream. Many holders later pursue the Employer Nomination Scheme (subclass 186) via the 482 to PR pathway. See all employer-sponsored visas for the wider landscape.`,
  },
  "482-to-pr-pathway": {
    file: "employer-sponsored/Pathway482ToPRPage.tsx",
    text: `The usual 482 to PR pathway is Temporary Residence Transition to the Employer Nomination Scheme (subclass 186) after holding a Skills in Demand (subclass 482) visa with the same employer, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. The employer must keep Standard Business Sponsorship current and meet nomination rules. Direct Entry 186 applicants should review 186 skill requirements instead.`,
  },
  "standard-business-sponsorship": {
    file: "employer-sponsored/StandardBusinessSponsorshipPage.tsx",
    text: `Standard Business Sponsorship is the employer approval needed before nominating workers on Skills in Demand (subclass 482) or the Employer Nomination Scheme (subclass 186), as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. It underpins most employer-sponsored visas, including the 482 to PR pathway and roles drawn from the Core Skills Occupation List.`,
  },
  "core-skills-occupation-list": {
    file: "employer-sponsored/CoreSkillsOccupationListPage.tsx",
    text: `The Core Skills Occupation List sets which occupations can be nominated under the Core Skills stream of the Skills in Demand (subclass 482) visa, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Many workers later move to the Employer Nomination Scheme (subclass 186). Compare with the 186 occupations list, the 482 to PR pathway, and other employer-sponsored visas.`,
  },
  "skilled-migration": {
    file: "skilled/SkilledMigrationHubPage.tsx",
    text: `Skilled migration to Australia is usually points-tested and starts with a skills assessment, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Core options include the Skilled Independent (subclass 189), Skilled Nominated (subclass 190) and Skilled Work Regional (subclass 491) visas — each scored under the points test.`,
  },
  "skilled-independent-189": {
    file: "skilled/SkilledIndependent189Page.tsx",
    text: `The Skilled Independent (subclass 189) visa is a points-tested permanent visa that does not need employer or state sponsorship, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Applicants need a positive skills assessment and a competitive points test score. Compare with Skilled Nominated (subclass 190) and Skilled Work Regional (subclass 491) under skilled migration.`,
  },
  "skilled-nominated-190": {
    file: "skilled/SkilledNominated190Page.tsx",
    text: `The Skilled Nominated (subclass 190) visa is a permanent points-tested visa that requires state nomination, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. You still need a skills assessment and enough points test score. Alternatives include Skilled Independent (subclass 189) and Skilled Work Regional (subclass 491).`,
  },
  "skilled-work-regional-491": {
    file: "skilled/SkilledWorkRegional491Page.tsx",
    text: `The Skilled Work Regional (subclass 491) visa is a points-tested provisional visa usually tied to state nomination or eligible family sponsorship, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Applicants need a skills assessment and a competitive points test score. Compare with Skilled Nominated (subclass 190) and the wider skilled migration program.`,
  },
  "temporary-graduate-485": {
    file: "skilled/TemporaryGraduate485Page.tsx",
    text: `The Temporary Graduate (subclass 485) visa lets eligible graduates who held a student visa (subclass 500) live and work in Australia after study, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Many graduates later seek a skills assessment and skilled migration options such as Skilled Independent (subclass 189), or follow a planned student to PR pathway.`,
  },
  "points-test": {
    file: "skilled/PointsTestPage.tsx",
    text: `Australia's points test ranks Expressions of Interest for Skilled Independent (subclass 189), Skilled Nominated (subclass 190) and Skilled Work Regional (subclass 491) visas, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Age, English requirements, skilled employment, education and state nomination can all add points.`,
  },
  "skills-assessment": {
    file: "skilled/SkillsAssessmentPage.tsx",
    text: `A skills assessment confirms your qualifications and experience meet Australian standards for your occupation, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. It is usually required before a points test EOI for Skilled Independent (subclass 189) and for many employer-sponsored visas, including Skills in Demand (subclass 482) and 186 skill requirements.`,
  },
  "state-nomination": {
    file: "skilled/StateNominationPage.tsx",
    text: `State nomination lets a state or territory invite you for Skilled Nominated (subclass 190) or Skilled Work Regional (subclass 491), as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Most programs still expect a skills assessment and a competitive points test score within the skilled migration framework.`,
  },
  "english-requirements": {
    file: "skilled/EnglishRequirementsPage.tsx",
    text: `English requirements apply across skilled migration and many employer pathways, including Skills in Demand (subclass 482) and the Employer Nomination Scheme (subclass 186), as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Higher scores can lift your points test result and sit alongside a skills assessment.`,
  },
  "student-visas": {
    file: "student/StudentVisasHubPage.tsx",
    text: `Student visas centre on the Student visa (subclass 500) and the Genuine Student requirement, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. After study, many graduates use Temporary Graduate (subclass 485) and plan a student to PR pathway. Check English requirements early.`,
  },
  "student-visa-500": {
    file: "student/StudentVisa500Page.tsx",
    text: `The Student visa (subclass 500) lets you study full-time in Australia if you meet the Genuine Student requirement and other criteria, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. See student visas for the full program, English requirements for language evidence, and Temporary Graduate (subclass 485) plus the student to PR pathway for post-study options.`,
  },
  "genuine-student-requirement": {
    file: "student/GenuineStudentRequirementPage.tsx",
    text: `The Genuine Student requirement asks student visa (subclass 500) applicants to show study is their primary purpose in Australia, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. It sits within student visas policy and connects to English requirements, Temporary Graduate (subclass 485) and any longer student to PR pathway.`,
  },
  "student-to-pr-pathway": {
    file: "student/StudentToPRPage.tsx",
    text: `A common student to PR pathway is Temporary Graduate (subclass 485), then a skills assessment, then Skilled Independent (subclass 189) or Skilled Nominated (subclass 190) — or employer-sponsored visas where a business will nominate you, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains.`,
  },
  "partner-family-visas": {
    file: "partner-family/PartnerFamilyHubPage.tsx",
    text: `Partner and family visas include partner visa offshore (subclass 309/100), partner visa onshore (subclass 820/801) and Prospective Marriage (subclass 300), as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Strong partner visa evidence is essential, and parent visas cover separate family pathways.`,
  },
  "partner-visa-820-801": {
    file: "partner-family/PartnerVisa820Page.tsx",
    text: `The partner visa onshore (subclass 820/801) is for applicants already in Australia in a genuine relationship with an eligible sponsor, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Compare partner visa offshore (subclass 309/100) and Prospective Marriage (subclass 300) under partner and family visas, prepare partner visa evidence carefully, and understand bridging visas while you wait.`,
  },
  "partner-visa-309-100": {
    file: "partner-family/PartnerVisa309Page.tsx",
    text: `The partner visa offshore (subclass 309/100) is for applicants outside Australia sponsored by an eligible partner, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. The onshore alternative is partner visa onshore (subclass 820/801); some couples start with Prospective Marriage (subclass 300). Use the partner visa evidence guide and other partner and family visas resources when preparing partner visa evidence.`,
  },
  "prospective-marriage-300": {
    file: "partner-family/ProspectiveMarriage300Page.tsx",
    text: `Prospective Marriage (subclass 300) lets an engaged partner enter Australia to marry an eligible sponsor, then usually apply for partner visa onshore (subclass 820/801), as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Couples already married may prefer partner visa offshore (subclass 309/100). See partner and family visas and the partner visa evidence guide when gathering partner visa evidence.`,
  },
  "partner-visa-evidence": {
    file: "partner-family/PartnerVisaEvidencePage.tsx",
    text: `Partner visa evidence must show a genuine and continuing relationship for any partner visa application — including partner visa onshore (subclass 820/801), partner visa offshore (subclass 309/100) and Prospective Marriage (subclass 300) — as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Start from partner and family visas for pathway choice.`,
  },
}

function replaceAnswerBox(source, routeKey, text) {
  // Match <AnswerBox>...</AnswerBox> with optional existing attrs — first occurrence
  const re = /<AnswerBox(\s[^>]*)?>[\s\S]*?<\/AnswerBox>/
  if (!re.test(source)) {
    console.warn("NO AnswerBox:", routeKey)
    return source
  }
  const escaped = text.replace(/\\/g, "\\\\").replace(/`/g, "\\`")
  // Prefer JSX string child without template if no backticks/newlines needed
  const replacement = `<AnswerBox routeKey="${routeKey}">\n            ${text}\n          </AnswerBox>`
  return source.replace(re, replacement)
}

let ok = 0
for (const [routeKey, { file, text }] of Object.entries(UPDATES)) {
  const full = path.join(ROOT, file)
  if (!fs.existsSync(full)) {
    console.warn("MISSING FILE", full)
    continue
  }
  const before = fs.readFileSync(full, "utf8")
  const after = replaceAnswerBox(before, routeKey, text)
  if (after === before) {
    console.warn("UNCHANGED", routeKey)
    continue
  }
  fs.writeFileSync(full, after, "utf8")
  ok += 1
  console.log("updated", routeKey)
}
console.log("done", ok, "/", Object.keys(UPDATES).length)
