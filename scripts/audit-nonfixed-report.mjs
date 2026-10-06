/**
 * Lists non-Fixed audit rows whose "find" text still appears in src/views.
 * node scripts/audit-nonfixed-report.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { parseCsvRecords } from "./csv-parse.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, "..")
const VIEWS = path.join(ROOT, "src", "views")

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, acc)
    else if (p.endsWith(".tsx")) acc.push(p)
  }
  return acc
}

const viewFiles = walk(VIEWS)
const viewTexts = new Map(viewFiles.map((f) => [f, fs.readFileSync(f, "utf8")]))

const records = parseCsvRecords(fs.readFileSync(path.join(__dirname, "_audit-all.csv"), "utf8"))
const hi = records.findIndex((r) => r.some((c) => c.includes("Current text (find)")))
const h = records[hi]
const fi = h.indexOf("Current text (find)")
const ri = h.indexOf("Replacement text (paste)")
const li = h.indexOf("Live check 6 Oct")
const ni = h.indexOf("Live check note")
const si = h.indexOf("Page slug")

const stillThere = []
const notInCode = []

for (let i = hi + 1; i < records.length; i++) {
  const live = (records[i][li] || "").trim()
  if (live === "Fixed") continue
  const find = records[i][fi]?.trim()
  const repl = records[i][ri]?.trim()
  const slug = records[i][si]?.trim()
  if (!find || find === repl) continue
  const hits = viewFiles.filter((f) => viewTexts.get(f).includes(find))
  const row = { live, slug, find: find.slice(0, 100), note: (records[i][ni] || "").slice(0, 80) }
  if (hits.length) {
    stillThere.push({ ...row, files: hits.map((f) => path.relative(ROOT, f)) })
  } else {
    notInCode.push(row)
  }
}

console.log("Non-Fixed: find still in views:", stillThere.length)
console.log("Non-Fixed: find NOT in views (needs manual/paraphrase):", notInCode.length)
const out = path.join(__dirname, "_audit-nonfixed-still-in-code.json")
fs.writeFileSync(out, JSON.stringify(stillThere, null, 2))
console.log("Wrote", out)
for (const s of stillThere.slice(0, 25)) {
  console.log(`[${s.live}] ${s.slug}: ${s.find}… → ${s.files[0]}`)
}
