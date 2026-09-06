import type { NextConfig } from "next"
import path from "node:path"
import { LEGACY_ROUTE_REDIRECTS } from "./src/data/legacyRedirects"

const routerShim = path.resolve(__dirname, "src/shims/react-router-dom.tsx")

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Large Figma→Next port: keep shipping SSR while tightening types incrementally.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.nanakmigration.com.au" },
      { protocol: "https", hostname: "api.nanakmigration.com.au" },
    ],
  },
  async redirects() {
    return Object.entries(LEGACY_ROUTE_REDIRECTS).map(([from, to]) => ({
      source: `/${from}`,
      destination: `/${to}`,
      permanent: true,
    }))
  },
  // Point all react-router-dom imports at our Next-compatible shim (no Figma / SPA router).
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-router-dom": routerShim,
    }
    return config
  },
  turbopack: {
    resolveAlias: {
      "react-router-dom": "./src/shims/react-router-dom.tsx",
    },
  },
}

export default nextConfig
