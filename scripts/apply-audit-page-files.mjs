/**
 * Apply audit find→replace on each slug's page file (registry), all non-RMA rows.
 * node scripts/apply-audit-page-files.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { parseCsvRecords } from "./csv-parse.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, "..")

import { buildSlugToFile } from "./slug-to-page-file.mjs"

function isInstructionRepl(repl) {
  const r = (repl || "").trim()
  if (!r) return true
  if (/^(Remove these|Correct the|Change the|Rename|Delete the|Visas offered)/i.test(r)) return true
  if (/^LMT required:/i.test(r)) return true
  if (r.length > 2000) return true
  return false
}

const slugToFile = buildSlugToFile(ROOT)
const records = parseCsvRecords(fs.readFileSync(path.join(__dirname, "_audit-all.csv"), "utf8"))
const hi = records.findIndex((r) => r.some((c) => c.includes("Current text (find)")))
const h = records[hi]
const fi = h.indexOf("Current text (find)")
const ri = h.indexOf("Replacement text (paste)")
const si = h.indexOf("Page slug")
const vi = h.indexOf("Verification")

const fileCache = new Map()
let total = 0

for (let i = hi + 1; i < records.length; i++) {
  if ((records[i][vi] || "").trim() === "Needs RMA review") continue
  const find = records[i][fi]?.trim()
  const repl = records[i][ri]?.trim()
  const slug = records[i][si]?.trim()
  if (!find || !repl || find === repl || isInstructionRepl(repl)) continue
  const file = slugToFile.get(slug)
  if (!file || !fs.existsSync(file)) continue
  let content = fileCache.get(file) ?? fs.readFileSync(file, "utf8")
  if (!content.includes(find)) continue
  const n = content.split(find).length - 1
  content = content.split(find).join(repl)
  fileCache.set(file, content)
  total += n
  console.log(`${path.relative(ROOT, file)}: ${n} (${slug}) ${find.slice(0, 50)}…`)
}

for (const [file, content] of fileCache) {
  fs.writeFileSync(file, content, "utf8")
}
console.log(`\nPage-file apply: ${total} replacements in ${fileCache.size} files.`)
