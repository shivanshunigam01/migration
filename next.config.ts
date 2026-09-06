import type { NextConfig } from "next"
import path from "node:path"
import { LEGACY_ROUTE_REDIRECTS } from "./src/data/legacyRedirects"

const routerShim = path.resolve(__dirname, "src/shims/react-router-dom.tsx")

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "www.nanakmigration.com.au" },
      { protocol: "https", hostname: "api.nanakmigration.com.au" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ]
  },
  async redirects() {
    return Object.entries(LEGACY_ROUTE_REDIRECTS).map(([from, to]) => ({
      source: `/${from}`,
      destination: `/${to}`,
      permanent: true,
    }))
  },
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
