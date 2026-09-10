"use client"

import BlogPostPage from "@/views/practice/BlogPostPage"
import { useAppNavigate } from "@/lib/navigation"
import type { PublicBlogPost } from "@/lib/contentApi"

export default function BlogSlugClient({ initialPost }: { initialPost?: PublicBlogPost | null }) {
  const navigate = useAppNavigate()
  return <BlogPostPage navigate={navigate} initialPost={initialPost} />
}
