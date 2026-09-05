const fs = require("fs")
const path = require("path")

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, out)
    else if (ent.name.endsWith(".tsx")) out.push(p)
  }
  return out
}

const root = path.join(__dirname, "../src/pages")
let changed = 0
for (const file of walk(root)) {
  let src = fs.readFileSync(file, "utf8")
  let next = src
    .replace(/\n?\s*React\.useEffect\(\(\)\s*=>\s*\{\s*document\.title\s*=\s*PAGE_META\[[^\]]+\]\.title\s*\}\s*,\s*\[\s*\]\s*\)\s*\n?/g, "\n")
    .replace(/\n?\s*useEffect\(\(\)\s*=>\s*\{\s*document\.title\s*=\s*PAGE_META\[[^\]]+\]\.title\s*\}\s*,\s*\[\s*\]\s*\)\s*\n?/g, "\n")
    .replace(/\n?\s*React\.useEffect\(\(\)\s*=>\s*\{\s*\n\s*document\.title\s*=\s*PAGE_META\[[^\]]+\]\.title\s*\n\s*\},\s*\[\s*\]\s*\)\s*\n?/g, "\n")
    .replace(/\n?\s*useEffect\(\(\)\s*=>\s*\{\s*\n\s*document\.title\s*=\s*PAGE_META\[[^\]]+\]\.title\s*\n\s*\},\s*\[\s*\]\s*\)\s*\n?/g, "\n")
    .replace(/\n?\s*useEffect\(\(\)\s*=>\s*\{\s*\n\s*document\.title\s*=\s*meta\.title\s*\n\s*\},\s*\[[^\]]*\]\s*\)\s*\n?/g, "\n")
    .replace(/\n?\s*document\.title\s*=\s*PAGE_META\[[^\]]+\]\.title\s*\n?/g, "\n")
    .replace(/\n?\s*document\.title\s*=\s*meta\.title\s*\n?/g, "\n")
  if (next !== src) {
    fs.writeFileSync(file, next)
    changed++
  }
}
console.log("updated", changed, "files")
