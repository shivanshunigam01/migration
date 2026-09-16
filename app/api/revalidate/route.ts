import { revalidateTag } from "next/cache"
import { timingSafeEqual } from "node:crypto"
import type { NextRequest } from "next/server"

export const runtime = "nodejs"

function secretOk(provided: string | null) {
  const expected = process.env.REVALIDATE_SECRET
  if (!expected || !provided) return false
  const a = Buffer.from(provided)
  const b = Buffer.from(expected)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

export async function POST(req: NextRequest) {
  if (!secretOk(req.headers.get("x-revalidate-secret"))) {
    return Response.json({ revalidated: false }, { status: 401 })
  }

  const body = await req.json().catch(() => ({}))
  const tags: string[] = Array.isArray(body.tags) ? body.tags : ["faqs"]

  for (const tag of tags) {
    if (typeof tag === "string" && tag.trim()) revalidateTag(tag.trim())
  }

  return Response.json({ revalidated: true, tags, now: Date.now() })
}
