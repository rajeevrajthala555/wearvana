import { notFound } from 'next/navigation'
import ProductDetailClient from './ProductDetailClient'
import { getProducts, getProductById } from '../../../lib/products'

export const revalidate = 3600 // Revalidate every hour

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export async function generateMetadata({ params }) {
  const product = await getProductById(params.id)

  if (!product) {
    return {
      title: 'Product Not Found - Werevana',
      description: 'The requested sneaker product could not be found. Browse our authentic collection at Werevana.',
    }
  }

  const title = `${product.brand} ${product.name} | Authentic Sneakers in Nepal | Werevana`
  const description = `Buy authentic ${product.brand} ${product.name} in Nepal. Available sizes with ${product.deliveryTime} delivery. Order now from Werevana.`

  return {
    title,
    description,
    keywords: `${product.brand} ${product.name}, authentic sneakers, ${product.brand}, Nepal, Kathmandu, premium sneakers, ${product.isLimited ? 'limited edition' : 'sneakers'}`,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://werevana.com/product/${product.id}`,
      siteName: 'Werevana',
      images: [
        {
          url: product.image,
          width: 400,
          height: 400,
          alt: `${product.brand} ${product.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [product.image],
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
      canonical: `https://werevana.com/product/${product.id}`,
    },
  }
}

export default async function ProductDetail({ params }) {
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  return <ProductDetailClient sneaker={product} />
}
