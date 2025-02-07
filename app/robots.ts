import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/Tours',
    },
    sitemap: 'https://ocean-connecting-sport-tour.vercel.app/sitemap.xml',
  }
}