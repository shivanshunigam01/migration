/**
 * Verify audit rows against page registry files; apply safe replacements; update Live check + Status.
 * node scripts/reconcile-audit-csv.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { parseCsvRecords } from "./csv-parse.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, "..")
const CSV_PATH = path.join(__dirname, "_audit-all.csv")

import { buildSlugToFile } from "./slug-to-page-file.mjs"

function isInstructionRepl(repl) {
  const r = (repl || "").trim()
  if (!r) return true
  if (/^(Remove these|Correct the|Change the|Rename|Delete the|Visas offered)/i.test(r)) return true
  if (/Rename the two cards/i.test(r)) return true
  if (/Visas offered cell/i.test(r)) return true
  if (/^LMT required:/i.test(r)) return true
  if (/change\s+'\d+'\s+to/i.test(r)) return true
  if (r.length > 2000) return true
  return false
}

function isFalsePositiveFind(find, slug) {
  const f = (find || "").trim()
  if (/^\d{6}$/.test(f)) return true
  if (slug === "state-nomination" && f === "ACT (Australian Capital Territory)") return true
  if (slug === "regional-areas" && f.includes("Cities and Major Regional Centres")) return true
  if (slug === "skills-in-demand-visa" && f === "LMT required") return true
  return false
}

function escCsvField(val) {
  const s = String(val ?? "")
  if (/[",\r\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

function recordsToCsv(records) {
  return records.map((row) => row.map(escCsvField).join(",")).join("\n") + "\n"
}

const slugToFile = buildSlugToFile(ROOT)
const records = parseCsvRecords(fs.readFileSync(CSV_PATH, "utf8"))
const hi = records.findIndex((r) => r.some((c) => c.includes("Current text (find)")))
const h = records[hi]
const fi = h.indexOf("Current text (find)")
const ri = h.indexOf("Replacement text (paste)")
const li = h.indexOf("Live check 6 Oct")
const ni = h.indexOf("Live check note")
const si = h.indexOf("Page slug")
const vi = h.indexOf("Verification")
const statusI = h.indexOf("Status")

const fileCache = new Map()
function getContent(file) {
  if (!fileCache.has(file)) fileCache.set(file, fs.readFileSync(file, "utf8"))
  return fileCache.get(file)
}

let applied = 0
let markedFixed = 0
let stillOpen = 0
let rmaSkip = 0

for (let i = hi + 1; i < records.length; i++) {
  const verification = (records[i][vi] || "").trim()
  if (verification === "Needs RMA review") {
    rmaSkip++
    continue
  }

  const find = records[i][fi]?.trim()
  const repl = records[i][ri]?.trim()
  const slug = records[i][si]?.trim()
  const live = (records[i][li] || "").trim()

  if (live === "Fixed" && (records[i][statusI] || "").trim() === "Done") continue

  const file = slugToFile.get(slug)
  if (!file || !fs.existsSync(file)) {
    stillOpen++
    continue
  }

  let content = getContent(file)

  if (find && repl && find !== repl && !isInstructionRepl(repl) && content.includes(find)) {
    content = content.split(find).join(repl)
    fileCache.set(file, content)
    applied++
  }

  content = fileCache.get(file)
  const findStill =
    find &&
    find !== repl &&
    !isFalsePositiveFind(find, slug) &&
    content.includes(find)

  if (!findStill) {
    records[i][li] = "Fixed"
    records[i][statusI] = "Done"
    records[i][ni] = "Code verified in migration repo (Oct 2026 audit pass)."
    markedFixed++
  } else {
    stillOpen++
    records[i][ni] = `Find text still in ${path.relative(ROOT, file)} — manual fix needed.`
  }
}

for (const [file, content] of fileCache) {
  fs.writeFileSync(file, content, "utf8")
}

fs.writeFileSync(CSV_PATH, recordsToCsv(records), "utf8")
console.log(`Applied ${applied} replacements. Marked Fixed: ${markedFixed}. Still open: ${stillOpen}. RMA skipped: ${rmaSkip}.`)
