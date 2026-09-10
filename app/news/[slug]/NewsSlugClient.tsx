"use client"

import NewsPostPage from "@/views/practice/NewsPostPage"
import { useAppNavigate } from "@/lib/navigation"
import type { PublicNewsArticle } from "@/lib/contentApi"

export default function NewsSlugClient({
  initialPost,
}: {
  initialPost?: PublicNewsArticle | null
}) {
  const navigate = useAppNavigate()
  return <NewsPostPage navigate={navigate} initialPost={initialPost} />
}
