"use client"

import BlogPage from "@/views/practice/BlogPage"
import { useAppNavigate } from "@/lib/navigation"

type DisplayPost = {
  id: string
  slug: string
  date: string
  category: string
  title: string
  standfirst: string
  relatedRoute: string
}

export default function BlogListingClient({ initialPosts }: { initialPosts: DisplayPost[] }) {
  const navigate = useAppNavigate()
  return <BlogPage navigate={navigate} initialPosts={initialPosts} />
}
