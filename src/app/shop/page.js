import ShopClient from './ShopClient'
import { getProducts } from '../../lib/products'

export const revalidate = 3600 // Revalidate every hour

export const metadata = {
  title: 'Shop Authentic Sneakers in Nepal | Werevana',
  description: 'Browse authentic sneakers from Nike, Jordan, Adidas and more. Filter by brand, size, price, and find limited editions. Delivered across Nepal in 7–10 days.',
  keywords: 'shop sneakers, authentic sneakers, Nike, Jordan, Adidas, New Balance, Nepal, Kathmandu, premium sneakers, sneaker filters',
  openGraph: {
    title: 'Shop Authentic Sneakers in Nepal | Werevana',
    description: 'Browse authentic sneakers from Nike, Jordan, Adidas and more. Filter by brand, size, price, and find limited editions. Delivered across Nepal in 7–10 days.',
    type: 'website',
    url: 'https://werevana.com/shop',
    siteName: 'Werevana',
    images: [
      {
        url: '/og-shop.jpg',
        width: 1200,
        height: 630,
        alt: 'Shop Authentic Sneakers in Nepal - Werevana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop Authentic Sneakers in Nepal | Werevana',
    description: 'Browse authentic sneakers from Nike, Jordan, Adidas and more. Filter by brand, size, price, and find limited editions. Delivered across Nepal in 7–10 days.',
    images: ['/og-shop.jpg'],
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
    canonical: 'https://werevana.com/shop',
  },
}

export default async function Shop() {
  const initialProducts = await getProducts()
  return <ShopClient initialProducts={initialProducts} />
}