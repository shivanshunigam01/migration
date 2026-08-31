import { useEffect, useState } from "react"
import { fetchSiteContent } from "@/lib/contentApi"

type NewsletterContent = {
  eyebrow?: string
  title?: string
  subtext?: string
  buttonLabel?: string
}

const DEFAULT_NEWSLETTER: NewsletterContent = {
  eyebrow: "IMMIGRATION UPDATES",
  title: "Australia immigration news straight to your inbox",
  subtext: "Policy updates, visa changes, occupation list alerts — no spam, unsubscribe any time.",
  buttonLabel: "Subscribe →",
}

export function useSiteContent() {
  const [newsletter, setNewsletter] = useState<NewsletterContent>(DEFAULT_NEWSLETTER)

  useEffect(() => {
    fetchSiteContent().then((data) => {
      const nl = data?.newsletter as NewsletterContent | undefined
      if (nl?.title) {
        setNewsletter({ ...DEFAULT_NEWSLETTER, ...nl })
      }
    })
  }, [])

  return { newsletter }
}
