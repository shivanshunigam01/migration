"use client"

import NewsPostPage from "@/views/practice/NewsPostPage"
import { withNavigate } from "@/lib/withNavigate"

const Page = withNavigate(NewsPostPage as never)

export default function NewsSlugClient() {
  return <Page />
}
