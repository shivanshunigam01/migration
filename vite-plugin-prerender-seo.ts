import fs from "node:fs"
import path from "node:path"
import type { Plugin } from "vite"
import {
  applySeoShellToHtml,
  getPrerenderPaths,
  resolveSeoForPath,
} from "./src/lib/seoShellMeta"

/**
 * After Vite emits the SPA shell, write one HTML file per public route with
 * that route's <title>, description, canonical, and Open Graph tags already in
 * the raw HTML — so social scrapers and non-JS crawlers see the right meta
 * without executing the React bundle.
 */
export function prerenderSeoPlugin(): Plugin {
  let outDir = "dist"

  return {
    name: "prerender-seo",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const shellPath = path.join(outDir, "index.html")
      if (!fs.existsSync(shellPath)) {
        this.warn(`[prerender-seo] missing ${shellPath}; skip`)
        return
      }

      const shell = fs.readFileSync(shellPath, "utf8")
      const paths = getPrerenderPaths()
      let written = 0

      for (const routePath of paths) {
        const seo = resolveSeoForPath(routePath)
        const html = applySeoShellToHtml(shell, seo)

        if (!routePath) {
          fs.writeFileSync(shellPath, html, "utf8")
          written += 1
          continue
        }

        const targetDir = path.join(outDir, ...routePath.split("/"))
        fs.mkdirSync(targetDir, { recursive: true })
        fs.writeFileSync(path.join(targetDir, "index.html"), html, "utf8")
        written += 1
      }

      this.info(`[prerender-seo] wrote ${written} HTML shells with per-route meta`)
    },
  }
}
