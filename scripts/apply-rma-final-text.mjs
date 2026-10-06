/**
 * Applies RMA Review tab "Final text to publish" from client xlsx export.
 * node scripts/apply-rma-final-text.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { parseCsvRecords } from "./csv-parse.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, "..", "src")
const RMA_CSV = path.join(__dirname, "_audit-rma-client.csv")

function walkFiles(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walkFiles(p, acc)
    else if (/\.(tsx|ts)$/.test(ent.name)) acc.push(p)
  }
  return acc
}

const records = parseCsvRecords(fs.readFileSync(RMA_CSV, "utf8"))
const headerIdx = records.findIndex((r) => r.some((c) => c.includes("Final text to publish")))
if (headerIdx === -1) {
  console.error("RMA CSV header not found")
  process.exit(1)
}
const header = records[headerIdx]
const findI = header.indexOf("Current text on site")
const replI = header.indexOf("Final text to publish")
const verdictI = header.indexOf("LEGEND verdict")
const auditI = header.indexOf("Audit ID")

const pairs = []
for (let i = headerIdx + 1; i < records.length; i++) {
  const cols = records[i]
  const find = cols[findI]?.trim()
  let repl = cols[replI]?.trim()
  const verdict = (cols[verdictI] || "").trim()
  const audit = cols[auditI]?.trim()
  if (!find || !repl) continue
  if (/^DELETE/i.test(repl) || repl.startsWith("Remove the sentence")) {
    pairs.push({ find, repl: "", audit, delete: true })
    continue
  }
  if (find === repl) continue
  pairs.push({ find, repl, audit, delete: false })
}

pairs.sort((a, b) => b.find.length - a.find.length)

const files = walkFiles(SRC)
let total = 0
const touched = new Set()

for (const file of files) {
  let content = fs.readFileSync(file, "utf8")
  let n = 0
  for (const { find, repl, delete: del } of pairs) {
    if (!content.includes(find)) continue
    if (del) {
      content = content.split(find).join("")
      n++
    } else {
      const parts = content.split(find)
      if (parts.length > 1) {
        n += parts.length - 1
        content = parts.join(repl)
      }
    }
  }
  if (n > 0) {
    fs.writeFileSync(file, content, "utf8")
    total += n
    touched.add(path.relative(SRC, file))
    console.log(`${path.relative(SRC, file)}: ${n}`)
  }
}

console.log(`\n${touched.size} files, ${total} replacements from ${pairs.length} RMA rows.`)
