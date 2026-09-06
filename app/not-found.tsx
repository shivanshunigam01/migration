"use client"

import NotFoundPage from "@/views/NotFoundPage"
import { withNavigate } from "@/lib/withNavigate"

const Page = withNavigate(NotFoundPage as never)

export default function NotFound() {
  return <Page />
}
