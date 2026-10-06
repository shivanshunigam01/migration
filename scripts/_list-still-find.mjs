import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { parseCsvRecords } from "./csv-parse.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, "..")
const VIEWS = path.join(ROOT, "src", "views")

function walk(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name)
    if (e.isDirectory()) walk(p, a)
    else if (p.endsWith(".tsx")) a.push(p)
  }
  return a
}

const files = walk(VIEWS)
const texts = new Map(files.map((f) => [f, fs.readFileSync(f, "utf8")]))
const reg = fs.readFileSync(path.join(ROOT, "src/next/pageRegistry.tsx"), "utf8")
const imports = new Map()
for (const m of reg.matchAll(/import (\w+) from "(@\/views\/[^"]+)"/g)) {
  imports.set(m[1], m[2].replace("@/", "src/") + ".tsx")
}
const slugFile = new Map()
for (const m of reg.matchAll(/"([a-z0-9-]+)":\s*(\w+)/g)) {
  const f = imports.get(m[2])
  if (f) slugFile.set(m[1], path.join(ROOT, f))
}

const records = parseCsvRecords(fs.readFileSync(path.join(__dirname, "_audit-all.csv"), "utf8"))
const hi = records.findIndex((r) => r.some((c) => c.includes("Current text (find)")))
const h = records[hi]
const fi = h.indexOf("Current text (find)")
const ri = h.indexOf("Replacement text (paste)")
const li = h.indexOf("Live check 6 Oct")
const si = h.indexOf("Page slug")
const vi = h.indexOf("Verification")

const still = []
for (let i = hi + 1; i < records.length; i++) {
  const live = (records[i][li] || "").trim()
  if (live === "Fixed") continue
  if ((records[i][vi] || "").trim() === "Needs RMA review") continue
  const find = records[i][fi]?.trim()
  const repl = records[i][ri]?.trim()
  const slug = records[i][si]?.trim()
  if (!find || find === repl) continue
  const pf = slugFile.get(slug)
  const scope = pf && fs.existsSync(pf) ? [pf] : files.filter((f) => texts.get(f).includes(find))
  const hit = scope.find((f) => texts.get(f).includes(find))
  if (hit) still.push({ live, slug, find, repl, file: path.relative(ROOT, hit) })
}

console.log("Still in code:", still.length)
for (const r of still) {
  console.log(`---\n[${r.live}] ${r.slug}\nfile: ${r.file}\nfind: ${r.find.slice(0, 120)}`)
}
