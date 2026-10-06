/**

 * Applies Oct 2026 service page audit find/replace to migration/src.

 * Skips rows marked "Needs RMA review". Run: node scripts/apply-service-audit.mjs

 */

import fs from "node:fs"

import path from "node:path"

import { fileURLToPath } from "node:url"

import { loadAuditRowsSync } from "./csv-parse.mjs"



const __dirname = path.dirname(fileURLToPath(import.meta.url))

const SRC = path.join(__dirname, "..", "src")

const CSV_PATH =

  process.env.AUDIT_CSV ||

  path.join(__dirname, "_audit-all.csv")



const SCAN_DIRS = ["views", "data", "components", "lib"]



/** Site-wide fixes (Summary → Site-wide Fixes tab). */

const SITE_WIDE = [

  ["General information current as at July 2026", "General information current as at October 2026"],

  ["General information current as at August 2026", "General information current as at October 2026"],

  ["Content current as at July 2026", "Content current as at October 2026"],

  ["Figures current at August 2026", "Figures current at October 2026"],

  ["Figures current as at August 2026", "Figures current at October 2026"],

  ["Information current as at August 2026", "Information current as at October 2026"],

  ["Information current as at July 2026", "Information current as at October 2026"],

  ["Last reviewed: July 2026", "Last reviewed: October 2026"],

  ["Last reviewed: August 2026", "Last reviewed: October 2026"],

  ["Current as at July 2026.", "Current as at October 2026."],

  ["CURRENT_AS_AT = 'August 2026'", "CURRENT_AS_AT = 'October 2026'"],

  ["CURRENT_AS_AT = 'July 2026'", "CURRENT_AS_AT = 'October 2026'"],

  ["currentAsAt = 'July 2026'", "currentAsAt = 'October 2026'"],

  ["currentAsAt = 'August 2026'", "currentAsAt = 'October 2026'"],

  ["$79,499", "$79,423"],

  ["$146,717", "$146,576"],

  ["$3,115", "$4,015"],

  ["21 days to apply to the ART", "28 days to apply to the ART"],

  ["21 days to apply to the AAT", "28 days to apply to the ART"],

  ["within 21 days", "within 28 days"],
  ["you have 21 days from the date of the decision", "you have 28 days from the date of the decision"],
  ["generally 21 days from notification of the decision", "generally 28 days from notification of the decision"],
  ["typically 21 days from the date the decision notice is received", "typically 28 days from the date the decision notice is received"],
  ["AUD $9,095 (primary)", "AUD11,710 (primary)"],
  ["Govt fee (2024–25)", "Govt fee (2026-27)"],
  ["~AUD 1,100 / 2,900", "AUD6,370 / AUD12,440"],
  ["approximately AUD 1,100 (3-year grant)", "AUD6,370 (up to 3 years)"],
  ["approximately AUD 2,900 (5-year grant)", "AUD12,440 (up to 5 years)"],
  ["~AUD 1,100", "AUD6,370"],
  ["~$2,900", "AUD12,440"],
  ["~$1,100 (3yr) / ~$2,900 (5yr)", "AUD6,370 (3yr) / AUD12,440 (5yr)"],

  ["within 21 calendar days", "within 28 calendar days"],

  ['currentAsAt="August 2026"', 'currentAsAt="October 2026"'],

  ["currentAsAt=\"August 2026\"", "currentAsAt=\"October 2026\""],

  ["ComplianceDisclaimer currentAsAt=\"August 2026\"", "ComplianceDisclaimer currentAsAt=\"October 2026\""],

  ["current at August 2026", "current at October 2026"],

  ["As at August 2026", "As at October 2026"],

  ["at August 2026", "at October 2026"],

  ["Ministerial Direction 119", "Ministerial Direction 122"],

  ["Specialist Skills stream is generally exempt from LMT", "Specialist Skills stream is subject to Labour Market Testing unless a trade-obligation exemption applies"],

]



function walkFiles(dir, acc = []) {

  if (!fs.existsSync(dir)) return acc

  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {

    const p = path.join(dir, ent.name)

    if (ent.isDirectory()) walkFiles(p, acc)

    else if (/\.(tsx|ts|jsx|js)$/.test(ent.name) && !ent.name.endsWith(".d.ts")) acc.push(p)

  }

  return acc

}



/** Avoid ANZSCO / table-instruction rows that corrupt data files. */
function isSafeCsvReplacement(find, repl) {
  if (find.length < 28) return false
  if (/^\d{6}$/.test(find.trim())) return false
  if (/^[\d\s/]+$/.test(find.trim())) return false
  if (/^(Remove these|Correct the|Change the|Visas offered cell)/i.test(repl.trim())) return false
  if (/change\s+'\d+'\s+to/i.test(repl)) return false
  if (/^Rename the two cards/i.test(repl.trim())) return false
  if (/^Delete the '/i.test(repl.trim())) return false
  if (/^Correct the (ANZSCO|codes)/i.test(repl.trim())) return false
  if (/^LMT required:/i.test(repl.trim())) return false
  if (/^Remove these/i.test(repl.trim())) return false
  if (repl.length > 800) return false
  return true
}

const CSV_SKIP_FILES = new Set([
  path.join(SRC, "data", "occupations.ts"),
])

function applyReplacements(content, pairs) {

  let next = content

  let n = 0

  for (const [find, repl] of pairs) {

    if (!find || find.length < 4 || !repl) continue

    if (!next.includes(find)) continue

    const parts = next.split(find)

    if (parts.length > 1) {

      n += parts.length - 1

      next = parts.join(repl)

    }

  }

  return { content: next, n }

}



const files = SCAN_DIRS.flatMap((d) => walkFiles(path.join(SRC, d)))

let csvPairs = []

if (fs.existsSync(CSV_PATH)) {

  const rows = loadAuditRowsSync(fs, CSV_PATH, { includeDone: true })

  csvPairs = rows

    .filter((r) => r.repl && r.find !== r.repl)

    .filter((r) => isSafeCsvReplacement(r.find, r.repl))

    .map((r) => [r.find, r.repl])

  csvPairs.sort((a, b) => b[0].length - a[0].length)

  console.log(`CSV findings loaded: ${csvPairs.length} replacements (excl. RMA review / Done)`)

} else {

  console.warn("CSV not found, site-wide only:", CSV_PATH)

}



const allPairs = [...SITE_WIDE, ...csvPairs]

let totalHits = 0

let filesChanged = 0



for (const file of files) {

  const raw = fs.readFileSync(file, "utf8")

  const pairs = CSV_SKIP_FILES.has(file) ? SITE_WIDE : allPairs

  const { content, n } = applyReplacements(raw, pairs)

  if (n > 0) {

    fs.writeFileSync(file, content, "utf8")

    totalHits += n

    filesChanged++

    console.log(`${path.relative(SRC, file)}: ${n}`)

  }

}



console.log(`\nDone. ${filesChanged} files, ${totalHits} replacements.`)


