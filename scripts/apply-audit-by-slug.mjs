/**
 * Applies audit find→replace within page files that reference the row's slug.
 * Catches FAQ_ITEMS / schema strings that global apply skipped (short finds, Status=Done).
 * node scripts/apply-audit-by-slug.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { loadAuditRowsSync } from "./csv-parse.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, "..", "src")
const SKIP_FILES = new Set([path.join(SRC, "data", "occupations.ts")])

function walkFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walkFiles(p, acc)
    else if (/\.(tsx|ts)$/.test(ent.name) && !ent.name.endsWith(".d.ts")) acc.push(p)
  }
  return acc
}

function isSafe(find, repl) {
  if (!find || find === repl) return false
  if (/^\d{6}$/.test(find.trim())) return false
  if (/^(Remove these|Correct the|Change the)/i.test((repl || "").trim())) return false
  if ((repl || "").length > 1200) return false
  return find.length >= 12
}

const files = walkFiles(SRC)
const fileTexts = new Map(files.map((f) => [f, fs.readFileSync(f, "utf8")]))

function filesForSlug(slug) {
  if (!slug) return []
  const needle = slug.trim()
  return files.filter((f) => fileTexts.get(f).includes(needle))
}

const rows = loadAuditRowsSync(fs, path.join(__dirname, "_audit-all.csv"), { includeDone: true })
let total = 0
const touched = new Set()

for (const row of rows) {
  if (!isSafe(row.find, row.repl)) continue
  const targets = filesForSlug(row.slug)
  if (targets.length === 0) continue
  for (const file of targets) {
    if (SKIP_FILES.has(file)) continue
    let content = fileTexts.get(file)
    if (!content.includes(row.find)) continue
    const parts = content.split(row.find)
    const n = parts.length - 1
    if (n <= 0) continue
    content = parts.join(row.repl)
    fileTexts.set(file, content)
    total += n
    touched.add(file)
  }
}

for (const file of touched) {
  fs.writeFileSync(file, fileTexts.get(file), "utf8")
}

console.log(`Slug-scoped apply: ${total} replacements in ${touched.size} files.`)
