/**
 * Extract hardcoded FAQ arrays from migration page views → backend defaults.
 * Usage: node scripts/extract-page-faqs.mjs
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const viewsRoot = path.join(__dirname, "../src/views")
const registryPath = path.join(__dirname, "../src/next/pageRegistry.tsx")
const outMain = path.join(
  __dirname,
  "../../nanak-migration-backend/src/defaults/faqCollections.js"
)

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, acc)
    else if (ent.name.endsWith(".tsx")) acc.push(p)
  }
  return acc
}

/** Read a JS string literal starting at `start` (index of opening quote). */
function readString(src, start) {
  const quote = src[start]
  if (quote !== "'" && quote !== '"' && quote !== "`") return null
  let i = start + 1
  let out = ""
  while (i < src.length) {
    const ch = src[i]
    if (ch === "\\") {
      const next = src[i + 1]
      if (next === "n") out += "\n"
      else if (next === "t") out += "\t"
      else if (next === quote || next === "\\" || next === "'") out += next
      else out += next
      i += 2
      continue
    }
    if (quote === "`" && ch === "$" && src[i + 1] === "{") {
      // Keep ${expr} as plain text placeholder for CMS seed
      let j = i + 2
      let depth = 1
      while (j < src.length && depth > 0) {
        if (src[j] === "{") depth++
        else if (src[j] === "}") depth--
        j++
      }
      out += src.slice(i, j)
      i = j
      continue
    }
    if (ch === quote) return { value: out, end: i + 1 }
    out += ch
    i++
  }
  return null
}

function parseFaqObjects(arraySrc) {
  const items = []
  let i = 0
  while (i < arraySrc.length) {
    if (arraySrc[i] !== "{") {
      i++
      continue
    }
    // Find q/question and a/answer string props inside this object
    let depth = 0
    const objStart = i
    for (; i < arraySrc.length; i++) {
      if (arraySrc[i] === "{") depth++
      else if (arraySrc[i] === "}") {
        depth--
        if (depth === 0) {
          i++
          break
        }
      }
    }
    const obj = arraySrc.slice(objStart, i)
    const q = readProp(obj, ["q", "question"])
    const a = readProp(obj, ["a", "answer"])
    if (q && a && !a.includes("<") && !a.includes("React.") && !a.includes("jsx")) {
      // Skip JSX answers (contain tags or identifiers that aren't plain prose)
      if (/^\s*</.test(a) || a.includes("=>")) continue
      items.push({ q: cleanSeedText(q), a: cleanSeedText(a) })
    }
  }
  return items
}

function readProp(obj, names) {
  for (const name of names) {
    const re = new RegExp(`\\b${name}\\s*:\\s*`)
    const m = re.exec(obj)
    if (!m) continue
    const str = readString(obj, m.index + m[0].length)
    if (str) return str.value.trim()
  }
  return null
}

function cleanSeedText(s) {
  // Best-effort: replace simple ${CONST} leftovers with empty or leave readable
  return s
    .replace(/\$\{POINTS_MINIMUM\}/g, "65")
    .replace(/\$\{[^}]+\}/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function findFaqBlocks(text) {
  const names =
    /(?:const|let)\s+(FAQ|FAQS|faqs|faqItems|FAQ_ITEMS|STUDENT_PR_FAQS|ABOUT_FAQS)\b[^=]*=\s*\[/g
  const blocks = []
  let m
  while ((m = names.exec(text))) {
    const start = m.index + m[0].length - 1
    let depth = 0
    let end = -1
    for (let i = start; i < text.length; i++) {
      const ch = text[i]
      if (ch === "[") depth++
      else if (ch === "]") {
        depth--
        if (depth === 0) {
          end = i
          break
        }
      }
    }
    if (end > start) blocks.push(text.slice(start, end + 1))
  }
  return blocks
}

/** Map absolute view file path → routeKey from pageRegistry.tsx */
function loadFileToRouteKey() {
  const reg = fs.readFileSync(registryPath, "utf8")
  const importToComp = new Map() // AbsoluteFile -> ComponentName (without Raw/withNavigate)
  const importRe = /import\s+(\w+)\s+from\s+["']@\/views\/([^"']+)["']/g
  let m
  while ((m = importRe.exec(reg))) {
    const importName = m[1] // e.g. SkillsInDemand482PageRaw or HomePage
    const rel = m[2].replace(/\.tsx$/, "")
    const file = path.normalize(path.join(viewsRoot, rel + ".tsx"))
    const compBase = importName.replace(/Raw$/, "")
    importToComp.set(file, compBase)
  }

  // PAGE_REGISTRY: "route-key": ComponentName,
  const routeToComp = new Map()
  const routeRe = /["']([^"']*)["']\s*:\s*(\w+)\s*,/g
  const registryBody = reg.slice(reg.indexOf("PAGE_REGISTRY"))
  while ((m = routeRe.exec(registryBody))) {
    routeToComp.set(m[2], m[1] === "" ? "homepage" : m[1])
  }

  const fileToRoute = new Map()
  for (const [file, comp] of importToComp) {
    const route = routeToComp.get(comp)
    if (route != null) fileToRoute.set(file, route)
  }
  // HomePage special
  const homeFile = path.normalize(path.join(viewsRoot, "HomePage.tsx"))
  if (!fileToRoute.has(homeFile)) fileToRoute.set(homeFile, "homepage")
  return fileToRoute
}

const fileToRoute = loadFileToRouteKey()
const collections = []
const seen = new Set()

for (const file of walk(viewsRoot)) {
  const text = fs.readFileSync(file, "utf8")
  const blocks = findFaqBlocks(text)
  if (!blocks.length) continue

  let items = []
  for (const block of blocks) {
    const parsed = parseFaqObjects(block)
    if (parsed.length > items.length) items = parsed
  }
  if (!items.length) continue

  let pageKey = fileToRoute.get(path.normalize(file))
  if (!pageKey) {
    const rk = text.match(/AnswerBox\s+routeKey=["']([^"']+)["']/)
    if (rk) pageKey = rk[1]
  }
  if (!pageKey) {
    console.warn("No route for", path.relative(viewsRoot, file), `(${items.length} FAQs skipped)`)
    continue
  }
  if (pageKey === "home") pageKey = "homepage"
  if (seen.has(pageKey)) continue
  seen.add(pageKey)

  const title =
    pageKey === "homepage"
      ? "Frequently Asked Questions"
      : `${pageKey
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")} FAQ`

  collections.push({
    pageKey,
    title,
    published: true,
    items: items.map((item, order) => ({ ...item, order })),
  })
}

// Ensure blog stub exists for admin completeness
if (!seen.has("blog")) {
  collections.push({
    pageKey: "blog",
    title: "Blog FAQ",
    published: true,
    items: [
      {
        q: "What does [DRAFT] mean on blog articles?",
        a: "Articles marked [DRAFT] are editorial stubs published for site structure and internal review. They will be replaced with verified content before public promotion.",
        order: 0,
      },
    ],
  })
}

collections.sort((a, b) => a.pageKey.localeCompare(b.pageKey))

const header =
  "/** Default FAQ collections — extracted from migration website page FAQs.\n" +
  " *  Regenerate: node migration/scripts/extract-page-faqs.mjs\n" +
  " *  Sync seeds missing keys only (never overwrites Runway edits).\n */\n"
const body = "module.exports = " + JSON.stringify(collections, null, 2) + ";\n"

fs.writeFileSync(outMain, header + body)
console.log(`Wrote ${collections.length} FAQ collections → faqCollections.js`)
