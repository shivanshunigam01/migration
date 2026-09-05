import fs from "node:fs"
import path from "node:path"

const root = path.resolve("dist")
const bad = []
let checked = 0

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(full)
      continue
    }
    if (entry.name !== "index.html") continue
    checked += 1
    const rel = path.relative(root, full).replace(/\\/g, "/")
    const route = rel === "index.html" ? "" : rel.replace(/\/index\.html$/, "")
    const html = fs.readFileSync(full, "utf8")
    const m =
      html.match(/rel=["']canonical["'][^>]*href=["']([^"']+)/i) ||
      html.match(/href=["']([^"']+)["'][^>]*rel=["']canonical["']/i)
    const title = (html.match(/<title>([^<]*)<\/title>/i) || [])[1]
    const expected = route
      ? `https://www.nanakmigration.com.au/${route}`
      : "https://www.nanakmigration.com.au/"
    const can = m?.[1]
    if (can !== expected) {
      bad.push({ route: route || "/", can, expected, title })
    }
  }
}

walk(root)
console.log(JSON.stringify({ checked, nonSelf: bad.length, bad }, null, 2))
