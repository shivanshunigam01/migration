"use client"

import BlogPostPage from "@/views/practice/BlogPostPage"
import { withNavigate } from "@/lib/withNavigate"

const Page = withNavigate(BlogPostPage as never)

export default function BlogSlugClient() {
  return <Page />
}
