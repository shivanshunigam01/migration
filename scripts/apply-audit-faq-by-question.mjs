/**
 * For audit rows (FAQ / schema), match FAQ question from "Section on page" to page FAQ arrays
 * and set answer text to Replacement when the old find string appears in that answer.
 * node scripts/apply-audit-faq-by-question.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { parseCsvRecords } from "./csv-parse.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, "..")
const REG = path.join(ROOT, "src", "next", "pageRegistry.tsx")

function buildSlugToFile() {
  const reg = fs.readFileSync(REG, "utf8")
  const importPaths = new Map()
  for (const m of reg.matchAll(/import (\w+) from "(@\/views\/[^"]+)"/g)) {
    importPaths.set(m[1], m[2].replace("@/", "src/") + ".tsx")
  }
  const map = new Map()
  for (const m of reg.matchAll(/"([a-z0-9-]+)":\s*(\w+)/g)) {
    const rel = importPaths.get(m[2])
    if (rel) map.set(m[1], path.join(ROOT, rel))
  }
  return map
}

function extractFaqQuestion(section) {
  const s = (section || "").trim()
  const m = s.match(/^FAQ\s*[-–—]\s*(.+)$/i)
  return m ? m[1].trim() : null
}

function isValidRepl(repl) {
  if (!repl || repl.length > 2000) return false
  if (/^(Remove|Correct the|Change the|Rename|Delete the|Visas offered)/i.test(repl.trim())) return false
  return true
}

const slugToFile = buildSlugToFile()
const records = parseCsvRecords(fs.readFileSync(path.join(__dirname, "_audit-all.csv"), "utf8"))
const hi = records.findIndex((r) => r.some((c) => c.includes("Current text (find)")))
const h = records[hi]
const fi = h.indexOf("Current text (find)")
const ri = h.indexOf("Replacement text (paste)")
const si = h.indexOf("Page slug")
const secI = h.indexOf("Section on page")
const li = h.indexOf("Live check 6 Oct")

let updates = 0

for (let i = hi + 1; i < records.length; i++) {
  const live = (records[i][li] || "").trim()
  if (live === "Fixed") continue
  const find = records[i][fi]?.trim()
  const repl = records[i][ri]?.trim()
  const slug = records[i][si]?.trim()
  const section = records[i][secI]?.trim()
  const faqQ = extractFaqQuestion(section)
  if (!find || !repl || find === repl || !isValidRepl(repl)) continue
  const file = slugToFile.get(slug)
  if (!file || !fs.existsSync(file)) continue
  let content = fs.readFileSync(file, "utf8")
  if (!content.includes(find)) continue

  // Prefer replacing within the FAQ block that contains the question (if known)
  if (faqQ) {
    const qEsc = faqQ.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    const blockRe = new RegExp(
      `(question:\\s*['"\`]${qEsc}['"\`][^}]*?answer:\\s*)(['"\`])((?:\\\\.|(?!\\2).)*?)\\2`,
      "s"
    )
    const m = content.match(blockRe)
    if (m && m[3].includes(find)) {
      const newAns = m[3].split(find).join(repl)
      content = content.replace(blockRe, `${m[1]}${m[2]}${newAns}${m[2]}`)
      fs.writeFileSync(file, content, "utf8")
      updates++
      console.log(`FAQ ${slug}: ${faqQ.slice(0, 50)}…`)
      continue
    }
  }

  if (content.includes(find)) {
    content = content.split(find).join(repl)
    fs.writeFileSync(file, content, "utf8")
    updates++
    console.log(`FIND ${slug}: ${find.slice(0, 50)}…`)
  }
}

console.log(`\nFAQ-by-question updates: ${updates}`)
