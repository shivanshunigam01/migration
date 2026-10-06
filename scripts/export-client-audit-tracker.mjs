/**
 * Builds client-ready audit tracker CSV from _audit-all.csv
 * Run: node scripts/export-client-audit-tracker.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { parseCsvRecords } from "./csv-parse.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, "..")
const IN_CSV = path.join(__dirname, "_audit-all.csv")
const OUT_CSV = path.join(
  ROOT,
  "Nanak_Migration_Service_Page_Audit_Oct2026_CLIENT_TRACKER.csv"
)
const OUT_SUMMARY = path.join(
  ROOT,
  "Nanak_Migration_Service_Page_Audit_Oct2026_CLIENT_SUMMARY.csv"
)

const DEPLOY_REF = "master @ Oct 2026 audit pass (see latest migration commit)"
const DEPLOY_DATE = "6 October 2026"

function escCsv(val) {
  const s = String(val ?? "")
  if (/[",\r\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

function rowToCsv(cols) {
  return cols.map(escCsv).join(",")
}

const text = fs.readFileSync(IN_CSV, "utf8")
const records = parseCsvRecords(text)
const headerIdx = records.findIndex((r) => r.some((c) => c.includes("Current text (find)")))
if (headerIdx === -1) {
  console.error("Could not find header row")
  process.exit(1)
}

const header = records[headerIdx]
const verI = header.indexOf("Verification")
const rmaNoteI = header.indexOf("RMA note")
const statusI = header.indexOf("Status")
const devNotesI = header.indexOf("Developer notes")

const extraCols = [
  "Developer status",
  "Information needed from client",
  "Dev implementation note",
]

const outHeader = [...header]
for (const c of extraCols) {
  if (!outHeader.includes(c)) outHeader.push(c)
}

let done = 0
let pendingRma = 0
let pendingOther = 0
const outRows = []

for (let i = headerIdx + 1; i < records.length; i++) {
  const cols = [...records[i]]
  while (cols.length < header.length) cols.push("")

  const verification = (cols[verI] || "").trim()
  const rmaNote = (cols[rmaNoteI] || "").trim()
  const sheetStatus = (cols[statusI] || "").trim()

  let devStatus
  let clientInfo
  let implNote

  if (verification === "Needs RMA review") {
    pendingRma++
    devStatus = "Pending – RMA / client sign-off"
    clientInfo = rmaNote
      ? `RMA (Navpreet, MARN 2619467): ${rmaNote}`
      : "RMA to confirm approved replacement text (or keep current site wording) before we mark this finding closed."
    implNote =
      "Not auto-published. Replacement text in column 'Replacement text (paste)' is draft until RMA approves."
    if (statusI >= 0) cols[statusI] = sheetStatus === "Done" ? "Done" : "Pending RMA"
  } else if (sheetStatus === "Done") {
    done++
    devStatus = "Done (previously marked in sheet)"
    clientInfo = "None required."
    implNote = "Already marked Done in audit sheet."
  } else {
    pendingOther++
    devStatus = "Pending – live site verification"
    clientInfo =
      "Confirm on production URL after deploy (Live check column). Do not mark Done in the audit sheet until Fixed."
    implNote = `Code updated in migration repo — deploy required; verify against ${DEPLOY_REF} or later commit.`
  }

  if (devNotesI >= 0) cols[devNotesI] = implNote

  const baseLen = header.length
  const extended = cols.slice(0, baseLen)
  extended.push(devStatus, clientInfo, implNote)
  outRows.push(extended)
}

const summaryRows = [
  ["Metric", "Count", "Notes"],
  ["Total findings", String(outRows.length), "All rows from Oct 2026 audit export"],
  [
    "Done (marked Done in audit sheet)",
    String(done),
    `Rows with Status = Done in the client workbook only`,
  ],
  [
    "Pending – RMA / client sign-off",
    String(pendingRma),
    "Verification column = Needs RMA review; requires Navpreet approval",
  ],
  [
    "Pending – live verification",
    String(pendingOther),
    "Implemented or in progress in repo; awaiting Fixed on live site (column P)",
  ],
  ["", "", ""],
  ["How to verify (client)", "", ""],
  [
    "Live site",
    "",
    "Open Page URL for sample rows; confirm replacement text reads correctly",
  ],
  [
    "Technical (optional)",
    "",
    "Clone migration repo; run: node scripts/audit-verify.mjs",
  ],
  ["", "", ""],
  ["Information needed from client (summary)", "", ""],
  [
    "1. RMA sign-off",
    "",
    "Review 34 rows with Developer status = Pending – RMA. Approve replacement text or instruct changes.",
  ],
  [
    "2. Penalty / fee figures",
    "",
    "Several RMA rows: confirm whether to use legislation (AUD364 penalty unit) or Home Affairs web figures.",
  ],
  [
    "3. ANZSCO lists (courses-pr-prospects)",
    "",
    "4 RMA rows: confirm occupation codes against current Home Affairs CSOL PDF.",
  ],
  [
    "4. Mark sheet",
    "",
    "After approval, set Status = Done for each row and return updated sheet if further dev pass needed.",
  ],
]

fs.writeFileSync(OUT_CSV, [rowToCsv(outHeader), ...outRows.map((r) => rowToCsv(r))].join("\r\n"), "utf8")
fs.writeFileSync(
  OUT_SUMMARY,
  summaryRows.map((r) => rowToCsv(r)).join("\r\n"),
  "utf8"
)

console.log(`Wrote ${OUT_CSV}`)
console.log(`Wrote ${OUT_SUMMARY}`)
console.log(`Done (sheet): ${done}, Pending RMA: ${pendingRma}, Pending live verify: ${pendingOther}`)
