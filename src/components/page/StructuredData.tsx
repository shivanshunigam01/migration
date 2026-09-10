import React from 'react'

export interface BreadcrumbItem {
  name: string
  url: string
}

export interface FaqSchemaItem {
  question: string
  // answer may be ReactNode when sourced from FaqItem; only string answers
  // are emitted in JSON-LD (React elements are silently omitted)
  answer: React.ReactNode
}

export interface ServiceSchema {
  name: string
  description: string
  url: string
}

export interface BlogPostingSchema {
  headline: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
  image?: string
}

export interface StructuredDataProps {
  breadcrumbs: BreadcrumbItem[]
  faqs?: FaqSchemaItem[]
  service?: ServiceSchema
  pageUrl?: string
  reviewedBy?: boolean
  blogPosting?: BlogPostingSchema
}

const ORG_ID = 'https://www.nanakmigration.com.au/#organization'

export default function StructuredData({ breadcrumbs, faqs, service, pageUrl, reviewedBy, blogPosting }: StructuredDataProps) {
  const schemas: object[] = []

  // BreadcrumbList — always
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((bc, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: bc.name,
      item: bc.url,
    })),
  })

  if (blogPosting) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: blogPosting.headline,
      description: blogPosting.description,
      url: blogPosting.url,
      mainEntityOfPage: blogPosting.url,
      datePublished: blogPosting.datePublished,
      dateModified: blogPosting.dateModified || blogPosting.datePublished,
      image: blogPosting.image,
      author: {
        '@type': 'Person',
        name: 'Navpreet Aulakh',
        jobTitle: 'Registered Migration Agent',
        identifier: 'MARN 2619467',
      },
      publisher: { '@id': ORG_ID },
      reviewedBy: {
        '@type': 'Person',
        name: 'Navpreet Aulakh',
        jobTitle: 'Registered Migration Agent',
        identifier: 'MARN 2619467',
      },
    })
  }

  // FAQPage — only include items whose answer is a plain string (not JSX)
  const stringFaqs = (faqs ?? []).filter(f => typeof f.answer === 'string') as Array<{ question: string; answer: string }>
  if (stringFaqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: stringFaqs.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    })
  }

  // Service — only if service provided
  if (service) {
    const serviceSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      url: service.url || pageUrl,
      provider: {
        '@id': ORG_ID,
      },
      areaServed: 'AU',
    }
    if (reviewedBy) {
      serviceSchema.reviewedBy = {
        '@type': 'Person',
        name: 'Navpreet Aulakh',
        jobTitle: 'Registered Migration Agent',
        identifier: 'MARN 2619467',
        worksFor: { '@id': 'https://www.nanakmigration.com.au/#organization' },
      }
    }
    schemas.push(serviceSchema)
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
