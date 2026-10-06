/**
 * Applies audit find→replace only in the page component file for each row's slug (from pageRegistry).
 * node scripts/apply-audit-page-registry.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { loadAuditRowsSync } from "./csv-parse.mjs"

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
    const slug = m[1]
    const comp = m[2]
    const rel = importPaths.get(comp)
    if (rel) map.set(slug, path.join(ROOT, rel))
  }
  return map
}

function isValidRepl(repl) {
  if (!repl || repl.length > 1500) return false
  if (/^(Remove these|Correct the|Change the|Rename the|Delete the|Visas offered cell)/i.test(repl.trim())) return false
  if (/^LMT required:/i.test(repl.trim())) return false
  if (/change\s+'\d+'\s+to/i.test(repl)) return false
  return true
}

function isValidFind(find) {
  if (!find || find.length < 8) return false
  if (/^\d{6}$/.test(find.trim())) return false
  return true
}

const slugToFile = buildSlugToFile()
const rows = loadAuditRowsSync(fs, path.join(__dirname, "_audit-all.csv"), { includeDone: true })
let total = 0
const touched = new Set()

for (const row of rows) {
  if (!isValidFind(row.find) || !isValidRepl(row.repl) || row.find === row.repl) continue
  const file = slugToFile.get(row.slug)
  if (!file || !fs.existsSync(file)) continue
  if (file.includes("occupations.ts")) continue
  let content = fs.readFileSync(file, "utf8")
  if (!content.includes(row.find)) continue
  const n = content.split(row.find).length - 1
  content = content.split(row.find).join(row.repl)
  fs.writeFileSync(file, content, "utf8")
  total += n
  touched.add(path.relative(ROOT, file))
  console.log(`${row.slug}: ${n}× ${row.find.slice(0, 50)}…`)
}

console.log(`\nPage-registry apply: ${total} replacements in ${touched.size} files.`)
