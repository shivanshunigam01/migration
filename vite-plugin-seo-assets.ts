import type { Plugin } from "vite"
import { buildRobotsTxt, buildSitemapXml } from "./src/data/sitemap"

/** Emit robots.txt and sitemap.xml into the production build output. */
export function seoAssetsPlugin(): Plugin {
  return {
    name: "seo-assets",
    apply: "build",
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: buildRobotsTxt(),
      })
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: buildSitemapXml(),
      })
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = req.url?.split("?")[0]
        if (path === "/robots.txt") {
          res.setHeader("Content-Type", "text/plain; charset=utf-8")
          res.end(buildRobotsTxt())
          return
        }
        if (path === "/sitemap.xml") {
          res.setHeader("Content-Type", "application/xml; charset=utf-8")
          res.end(buildSitemapXml())
          return
        }
        next()
      })
    },
  }
}
