import fs from "node:fs"

const meta = fs.readFileSync("src/data/pageMeta.ts", "utf8")
const metaKeys = [...meta.matchAll(/^\s+(?:'([^']+)'|([a-z0-9-]+)):\s*\{/gm)]
  .map((m) => m[1] || m[2])
  .filter(Boolean)

const publicPathsSrc = fs.readFileSync("src/data/publicPaths.ts", "utf8")
// Approximate: count PAGE_META keys + CANONICAL + extras — run via next build for truth
console.log("PAGE_META keys:", metaKeys.length)
console.log("Has site-map meta:", metaKeys.includes("site-map"))
console.log("publicPaths module bytes:", publicPathsSrc.length)
