import { sneakers } from '../data/sneakers'

export default function sitemap() {
  const baseUrl = 'https://werevana.com'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/authenticity`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/shipping`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Brand pages
  const brands = ['nike', 'jordan', 'adidas', 'new-balance']
  const brandPages = brands.map(brand => ({
    url: `${baseUrl}/brand/${brand}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Product pages
  const productPages = sneakers.map(sneaker => ({
    url: `${baseUrl}/product/${sneaker.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: sneaker.isLimited ? 0.9 : 0.8,
  }))

  return [...staticPages, ...brandPages, ...productPages]
}