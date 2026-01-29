'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function NewDrops({ initialProducts = [] }) {
  const [products, setProducts] = useState(initialProducts)
  const [loading, setLoading] = useState(initialProducts.length === 0)

  useEffect(() => {
    if (initialProducts.length === 0) {
      fetchProducts()
    }
  }, [initialProducts])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products')
      const data = await res.json()
      // Get latest 3 products
      const latestProducts = data.slice(0, 3)
      setProducts(latestProducts)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section id="new-drops" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-black">New Drops</h2>
          <div className="text-center text-gray-600">Loading...</div>
        </div>
      </section>
    )
  }

  if (products.length === 0) {
    return null
  }

  return (
    <section id="new-drops" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-black">New Drops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-hover bg-white p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-square bg-gray-100 mb-6 flex items-center justify-center rounded-md transition-all duration-300 group-hover:bg-gray-200 overflow-hidden">
                  {product.image ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="text-gray-400 text-sm font-mono">SNEAKER IMAGE</div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.brand} • {product.condition}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-black">₨ {product.price.toLocaleString()}</span>
                  <Link href={`/product/${product.id}`}>
                    <button className="bg-black text-white px-6 py-2 font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 active:scale-95">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}