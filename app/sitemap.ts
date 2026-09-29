import type { MetadataRoute } from 'next'

import {
  tours,
  privateExperiences,
} from '@/lib/site-config'

export const dynamic = 'force-static'

const base = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://www.vemver.com.br'
).replace(/\/$/, '')

const allTours = [
  ...tours,
  ...privateExperiences,
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${base}/`,
      changeFrequency: 'monthly',
      priority: 1,
    },

    ...allTours.map((tour) => ({
      url: `${base}/passeios/${tour.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
