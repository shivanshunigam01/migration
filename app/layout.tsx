import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Suspense } from "react"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Providers } from "@/next/Providers"
import { organizationJsonLd } from "@/lib/metadata"
import { SITE_NAME, SITE_URL, DEFAULT_SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from "@/data/site"
import "@/index.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
})

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
    <html lang="en-AU" className={plusJakarta.variable}>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root { --font-site: var(--font-plus-jakarta), 'Plus Jakarta Sans', system-ui, sans-serif; }
              html, body, h1, h2, h3, h4, h5, h6 { font-family: var(--font-site) !important; }
              [style*="Gilroy"] { font-family: var(--font-site) !important; }
            `,
          }}
        />
        <link rel="preload" as="image" href="/nanak-migration-logo.png" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
        />
      </head>
      <body className={plusJakarta.className}>
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
