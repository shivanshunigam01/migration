"use client"

import NewsPage from "@/views/practice/NewsPage"
import { useAppNavigate } from "@/lib/navigation"

type Article = {
  id: string
  slug: string
  date: string
  category: string
  featured: boolean
  headline: string
  summary: string
  readTime: string
  hrefBase?: "news" | "blog"
}

export default function NewsListingClient({ initialArticles }: { initialArticles: Article[] }) {
  const navigate = useAppNavigate()
  return <NewsPage navigate={navigate} initialArticles={initialArticles} />
}
