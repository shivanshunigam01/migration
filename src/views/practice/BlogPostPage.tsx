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
import { fetchBlogBySlug, type PublicBlogPost } from "@/lib/contentApi"
import { useArticleSeo } from "@/lib/usePageSeo"
import { notFound } from "next/navigation"

function formatDate(iso?: string) {
  if (!iso) return ""
  return new Date(iso).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })
}

/** Wrap CMS tables so wide comparison grids scroll instead of collapsing. */
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

function mapPost(remote: PublicBlogPost) {
  return {
    title: remote.title,
    standfirst: remote.standfirst,
    body: remote.body,
    category: remote.category,
    date: formatDate(remote.publishedAt),
    publishedAt: remote.publishedAt,
    tags: remote.tags || [],
    relatedRoute: remote.relatedRoute,
  }
}

export default function BlogPostPage({
  navigate,
  initialPost,
}: {
  navigate: (page: string) => void
  initialPost?: PublicBlogPost | null
}) {
  const { slug = "" } = useParams()
  const bodyRef = useRef<HTMLDivElement>(null)
  const [post, setPost] = useState<ReturnType<typeof mapPost> | null>(() =>
    initialPost && (!initialPost.status || initialPost.status === "published")
      ? mapPost(initialPost)
      : null,
  )
  const [loading, setLoading] = useState(!initialPost)

  useEffect(() => {
    if (initialPost && (!initialPost.status || initialPost.status === "published")) {
      setPost(mapPost(initialPost))
      setLoading(false)
      return
    }
    let cancelled = false
    setLoading(true)
    fetchBlogBySlug(slug).then((remote) => {
      if (cancelled) return
      if (remote && remote.status === "published") {
        setPost(mapPost(remote))
      } else {
        setPost(null)
      }
      setLoading(false)
    })
    return () => {
      cancelled = true
    }
  }, [slug, initialPost])

  useEffect(() => {
    wrapTablesForScroll(bodyRef.current)
  }, [post?.body])

  useArticleSeo({
    title: post ? `${post.title.replace("[DRAFT] ", "")} | Nanak Migration Group` : "Blog | Nanak Migration Group",
    description: post?.standfirst || "Australian immigration news and visa guidance.",
    canonicalUrl: `https://www.nanakmigration.com.au/${ROUTE.blog}/${slug}`,
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

  const displayTitle = post.title.replace(/^\[DRAFT\]\s*/i, "")

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: "#fff", color: TEXT }}>
      {/* Client schema kept as supplement; server page also emits BlogPosting + breadcrumbs */}
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://www.nanakmigration.com.au/" },
          { name: "Blog", url: `https://www.nanakmigration.com.au/${ROUTE.blog}` },
          { name: displayTitle, url: `https://www.nanakmigration.com.au/${ROUTE.blog}/${slug}` },
        ]}
        blogPosting={{
          headline: displayTitle,
          description: post.standfirst,
          url: `https://www.nanakmigration.com.au/${ROUTE.blog}/${slug}`,
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
        }}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <PageHero
        navigate={navigate}
        variant="support"
        eyebrow={post.category}
        title={displayTitle}
        deck={post.standfirst}
        currentAsAt={post.date}
        primaryCta={{ label: "Book a free eligibility call", page: "book-consultation" }}
        accent={NAVY}
      />

      <article
        style={{
          maxWidth: 880,
          margin: "0 auto",
          padding: "48px 24px 64px",
        }}
      >
        <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px", lineHeight: 1.6 }}>
          Reviewed by <strong style={{ color: NAVY }}>Navpreet Aulakh</strong>, Registered Migration Agent
          MARN 2619467
          {post.date ? ` · Last reviewed ${post.date}` : ""}
        </p>
        {post.body ? (
          <div
            ref={bodyRef}
            className="blog-post-body"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        ) : (
          <div className="blog-post-body">
            <p>{post.standfirst}</p>
            <p style={{ marginTop: 24, fontStyle: "italic", color: "#9ca3af" }}>
              Full article content is being prepared. In the meantime, explore our related visa guide.
            </p>
            {post.relatedRoute && (
              <button
                type="button"
                onClick={() => navigate(post.relatedRoute)}
                style={{
                  marginTop: 24,
                  padding: "12px 20px",
                  background: NAVY,
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                View related guide →
              </button>
            )}
          </div>
        )}

        {post.tags.length > 0 && (
          <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: 100,
                  background: "#f3f4f6",
                  color: NAVY,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={() => navigate(ROUTE.blog)}
          style={{
            marginTop: 48,
            fontSize: 15,
            fontWeight: 700,
            color: NAVY,
            background: "none",
            border: "none",
            borderBottom: `2px solid ${GOLD}`,
            cursor: "pointer",
            padding: 0,
          }}
        >
          ← Back to all articles
        </button>
      </article>

      <ComplianceDisclaimer />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
