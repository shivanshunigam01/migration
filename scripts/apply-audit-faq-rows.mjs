/**
 * Applies audit find→replace for rows whose section mentions FAQ or schema.
 * node scripts/apply-audit-faq-rows.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { loadAuditRowsSync } from "./csv-parse.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, "..", "src")

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, acc)
    else if (/\.(tsx|ts)$/.test(ent.name)) acc.push(p)
  }
  return acc
}

const rows = loadAuditRowsSync(fs, path.join(__dirname, "_audit-all.csv"), { includeDone: true })
const faqRows = rows.filter((r) => /faq|schema|json-ld/i.test(r.section || ""))

let total = 0
const files = walk(SRC)
for (const row of faqRows) {
  const { find, repl } = row
  if (!find || find === repl || find.length < 10) continue
  if ((repl || "").length > 1500) continue
  for (const file of files) {
    let c = fs.readFileSync(file, "utf8")
    if (!c.includes(find)) continue
    const n = c.split(find).length - 1
    c = c.split(find).join(repl)
    fs.writeFileSync(file, c)
    total += n
    console.log(`${path.relative(SRC, file)}: ${n} (${find.slice(0, 50)}…)`)
  }
}
console.log(`FAQ/schema rows applied: ${total} replacements from ${faqRows.length} audit rows.`)
