/**
 * Reports how many audit "find" strings still appear in src/.
 * node scripts/audit-verify.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { loadAuditRowsSync } from "./csv-parse.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, "..", "src")
const CSV_PATH = path.join(__dirname, "_audit-all.csv")

function walkFiles(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walkFiles(p, acc)
    else if (/\.(tsx|ts)$/.test(ent.name)) acc.push(p)
  }
  return acc
}

const files = walkFiles(SRC)
let corpus = ""
for (const f of files) corpus += fs.readFileSync(f, "utf8") + "\n"

if (!fs.existsSync(CSV_PATH)) {
  console.log("CSV: missing")
  process.exit(1)
}

const rows = loadAuditRowsSync(fs, CSV_PATH).filter((r) => r.find.length >= 8)

const still = []
for (const r of rows) {
  if (corpus.includes(r.find)) still.push(r)
}

const byPri = { High: 0, Medium: 0, Low: 0, "": 0 }
for (const r of still) byPri[r.priority] = (byPri[r.priority] || 0) + 1

console.log(`Audit rows (excl. RMA review): ${rows.length}`)
console.log(`Still matching in codebase: ${still.length}`)
console.log(`By priority: High=${byPri.High} Medium=${byPri.Medium} Low=${byPri.Low}`)
console.log("\nSample remaining (first 15):")
still.slice(0, 15).forEach((r) => {
  console.log(`- [${r.priority}] ${r.slug}: ${r.find.slice(0, 72)}…`)
})
