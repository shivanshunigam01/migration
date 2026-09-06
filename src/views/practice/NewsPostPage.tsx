import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { GOLD, NAVY, TEXT } from "@/theme"
import SiteHeader from "@/components/layout/SiteHeader"
import SiteFooter from "@/components/layout/SiteFooter"
import { PageHero } from "@/components/page/PageHero"
import { ComplianceDisclaimer } from "@/components/page/ComplianceDisclaimer"
import StructuredData from "@/components/page/StructuredData"
import { NAV_ITEMS } from "@/data/navItems"
import { ROUTE } from "@/data/routes"
import { fetchNewsBySlug } from "@/lib/contentApi"
import { useArticleSeo } from "@/lib/usePageSeo"
import { notFound } from "next/navigation"

function formatDate(iso?: string) {
  if (!iso) return ""
  return new Date(iso).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })
}

function wrapTablesForScroll(root: HTMLElement | null) {
  if (!root) return
  root.querySelectorAll("table").forEach((table) => {
    if (table.parentElement?.classList.contains("table-scroll-wrap")) return
    const wrap = document.createElement("div")
    wrap.className = "table-scroll-wrap"
    table.parentNode?.insertBefore(wrap, table)
    wrap.appendChild(table)
  })
}

export default function NewsPostPage({ navigate }: { navigate: (page: string) => void }) {
  const { slug = "" } = useParams()
  const bodyRef = useRef<HTMLDivElement>(null)
  const [post, setPost] = useState<{
    title: string
    standfirst: string
    body: string
    category: string
    date: string
    readTime: string
    tags: string[]
    relatedRoute: string
    seoTitle?: string
    seoDescription?: string
    ogImage?: string
  } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetchNewsBySlug(slug).then((remote) => {
      if (cancelled) return
      if (remote) {
        setPost({
          title: remote.title,
          standfirst: remote.standfirst,
          body: remote.body,
          category: remote.category,
          date: formatDate(remote.publishedAt),
          readTime: remote.readTime || "3 min read",
          tags: remote.tags || [],
          relatedRoute: remote.relatedRoute,
          seoTitle: remote.seoTitle,
          seoDescription: remote.seoDescription,
          ogImage: remote.ogImage,
        })
      } else {
        setPost(null)
      }
      setLoading(false)
    })
    return () => {
      cancelled = true
    }
  }, [slug])

  useEffect(() => {
    wrapTablesForScroll(bodyRef.current)
  }, [post?.body])

  useArticleSeo({
    title: post
      ? post.seoTitle || `${post.title} | Nanak Migration Group`
      : "Immigration News | Nanak Migration Group",
    description: post?.seoDescription || post?.standfirst || "Australian immigration news and policy updates.",
    canonicalUrl: `https://www.nanakmigration.com.au/${ROUTE.newsPage}/${slug}`,
    ogImage: post?.ogImage,
  })

  if (loading) {
    return (
      <div style={{ fontFamily: "'Gilroy', sans-serif", padding: 48, textAlign: "center", color: TEXT }}>
        Loading article…
      </div>
    )
  }

  if (!post) {
    notFound()
    return null
  }

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: "#fff", color: TEXT }}>
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://www.nanakmigration.com.au/" },
          { name: "Immigration News", url: `https://www.nanakmigration.com.au/${ROUTE.newsPage}` },
          { name: post.title, url: `https://www.nanakmigration.com.au/${ROUTE.newsPage}/${slug}` },
        ]}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <PageHero
        navigate={navigate}
        variant="support"
        eyebrow={post.category}
        title={post.title}
        deck={post.standfirst}
        currentAsAt={`${post.date}${post.readTime ? ` · ${post.readTime}` : ""}`}
        primaryCta={{ label: "Book Free Consultation", page: "book-consultation" }}
        accent={NAVY}
      />

      <article style={{ maxWidth: 880, margin: "0 auto", padding: "48px 24px 64px" }}>
        {post.body ? (
          <div ref={bodyRef} className="blog-post-body" dangerouslySetInnerHTML={{ __html: post.body }} />
        ) : (
          <p style={{ color: "#6b7280", lineHeight: 1.7 }}>{post.standfirst}</p>
        )}

        {post.relatedRoute ? (
          <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid #e8edf6" }}>
            <button
              type="button"
              onClick={() => navigate(post.relatedRoute)}
              style={{
                background: NAVY,
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                padding: "12px 22px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
              }}
            >
              Related guide →
            </button>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => navigate(ROUTE.newsPage)}
          style={{
            marginTop: 32,
            background: "transparent",
            border: "none",
            color: GOLD,
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          ← All immigration news
        </button>
      </article>

      <ComplianceDisclaimer currentAsAt="September 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
