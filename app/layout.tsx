import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Suspense } from "react"
import { Providers } from "@/next/Providers"
import { organizationJsonLd } from "@/lib/metadata"
import { SITE_NAME, SITE_URL, DEFAULT_SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from "@/data/site"
import "@/index.css"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s`,
  },
  description: DEFAULT_SITE_DESCRIPTION,
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_AU",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const org = organizationJsonLd()
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.cdnfonts.com" />
        <link rel="preload" as="image" href="/nanak-migration-logo.png" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
        />
      </head>
      <body>
        <a className="skip-to-content" href="#main-content">
          Skip to content
        </a>
        <Suspense fallback={null}>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  )
}
