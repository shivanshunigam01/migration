import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GOLD, NAVY, TEXT } from "@/theme"
import SiteHeader from "@/components/layout/SiteHeader"
import SiteFooter from "@/components/layout/SiteFooter"
import { PageHero } from "@/components/page/PageHero"
import { ComplianceDisclaimer } from "@/components/page/ComplianceDisclaimer"
import StructuredData from "@/components/page/StructuredData"
import { NAV_ITEMS } from "@/data/navItems"
import { ROUTE } from "@/data/routes"
import { BLOG_POSTS } from "@/data/blogPosts"
import { fetchBlogBySlug } from "@/lib/contentApi"
import { useArticleSeo } from "@/lib/usePageSeo"

function formatDate(iso?: string) {
  if (!iso) return ""
  return new Date(iso).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })
}

export default function BlogPostPage({ navigate }: { navigate: (page: string) => void }) {
  const { slug = "" } = useParams()
  const [post, setPost] = useState<{
    title: string
    standfirst: string
    body: string
    category: string
    date: string
    tags: string[]
    relatedRoute: string
  } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetchBlogBySlug(slug).then((remote) => {
      if (cancelled) return
      if (remote) {
        setPost({
          title: remote.title,
          standfirst: remote.standfirst,
          body: remote.body,
          category: remote.category,
          date: formatDate(remote.publishedAt),
          tags: remote.tags || [],
          relatedRoute: remote.relatedRoute,
        })
      } else {
        const fallback = BLOG_POSTS.find((p) => p.id === slug)
        if (fallback) {
          setPost({
            title: fallback.title,
            standfirst: fallback.standfirst,
            body: "",
            category: fallback.category,
            date: fallback.date,
            tags: fallback.tags,
            relatedRoute: fallback.relatedRoute,
          })
        } else {
          setPost(null)
        }
      }
      setLoading(false)
    })
    return () => {
      cancelled = true
    }
  }, [slug])

  useArticleSeo({
    title: post ? `${post.title.replace("[DRAFT] ", "")} | Nanak Migration Group` : "Blog | Nanak Migration Group",
    description: post?.standfirst || "Australian immigration news and visa guidance.",
    canonicalUrl: `https://www.nanakmigration.com.au/${ROUTE.blog}/${slug}`,
  })

  if (loading) {
    return (
      <div style={{ fontFamily: "Inter, system-ui, sans-serif", padding: 48, textAlign: "center", color: TEXT }}>
        Loading article…
      </div>
    )
  }

  if (!post) {
    return (
      <div style={{ fontFamily: "Inter, system-ui, sans-serif", padding: 48, textAlign: "center", color: TEXT }}>
        Article not found.{" "}
        <button type="button" onClick={() => navigate(ROUTE.blog)} style={{ color: NAVY, fontWeight: 700 }}>
          Back to blog
        </button>
      </div>
    )
  }

  const displayTitle = post.title.startsWith("[DRAFT]") ? post.title.replace("[DRAFT] ", "") : post.title

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#fff", color: TEXT }}>
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://www.nanakmigration.com.au/" },
          { name: "Blog", url: `https://www.nanakmigration.com.au/${ROUTE.blog}` },
          { name: displayTitle, url: `https://www.nanakmigration.com.au/${ROUTE.blog}/${slug}` },
        ]}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <PageHero
        navigate={navigate}
        variant="support"
        eyebrow={post.category}
        title={displayTitle}
        deck={post.standfirst}
        currentAsAt={post.date}
        primaryCta={{ label: "Book Free Consultation", page: "home" }}
        accent={NAVY}
      />

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px 64px" }}>
        {post.body ? (
          <div
            style={{ fontSize: 16, lineHeight: 1.75, color: "#374151" }}
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        ) : (
          <div style={{ fontSize: 16, lineHeight: 1.75, color: "#374151" }}>
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
                  fontSize: 11,
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
            fontSize: 14,
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
