import fs from "node:fs"
import path from "node:path"

/** Map page slug → absolute path to source TSX (handles *PageRaw imports in pageRegistry). */
export function buildSlugToFile(root) {
  const regPath = path.join(root, "src/next/pageRegistry.tsx")
  const reg = fs.readFileSync(regPath, "utf8")
  const importPaths = new Map()
  for (const m of reg.matchAll(/import (\w+) from "@\/views\/([^"]+)"/g)) {
    importPaths.set(m[1], path.join(root, "src/views", m[2] + ".tsx"))
  }
  const map = new Map()
  for (const m of reg.matchAll(/"([a-z0-9-]+)":\s*(\w+)/g)) {
    const comp = m[2]
    const file =
      importPaths.get(`${comp}Raw`) ||
      importPaths.get(comp) ||
      importPaths.get(comp.replace(/Page$/, "PageRaw"))
    if (file && fs.existsSync(file)) map.set(m[1], file)
  }
  return map
}
