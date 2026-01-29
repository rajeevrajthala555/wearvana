import Hero from '../components/Hero'
import NewDrops from '../components/NewDrops'
import Features from '../components/Features'
import ProductDescription from '../components/ProductDescription'
import { getProducts } from '../lib/products'

export const revalidate = 3600 // Revalidate every hour

export const metadata = {
  title: 'Werevana | Authentic Sneakers in Nepal | Nike, Jordan, Adidas',
  description: 'Werevana is a premium sneaker marketplace in Nepal offering 100% authentic Nike, Jordan, Adidas & New Balance sneakers with 7–10 day delivery.',
  keywords: 'sneakers, streetwear, Nepal, authentic, Nike, Jordan, Adidas, New Balance, Kathmandu, premium sneakers',
  openGraph: {
    title: 'Werevana | Authentic Sneakers in Nepal | Nike, Jordan, Adidas',
    description: 'Werevana is a premium sneaker marketplace in Nepal offering 100% authentic Nike, Jordan, Adidas & New Balance sneakers with 7–10 day delivery.',
    type: 'website',
    url: 'https://werevana.com',
    siteName: 'Werevana',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Werevana - Authentic Sneakers in Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Werevana | Authentic Sneakers in Nepal | Nike, Jordan, Adidas',
    description: 'Werevana is a premium sneaker marketplace in Nepal offering 100% authentic Nike, Jordan, Adidas & New Balance sneakers with 7–10 day delivery.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://werevana.com',
  },
}

export default async function Home() {
  const allProducts = await getProducts()
  const latestProducts = allProducts.slice(0, 3)

  return (
    <div>
      <Hero />
      <NewDrops initialProducts={latestProducts} />
      <Features />
      <ProductDescription />
    </div>
  )
}