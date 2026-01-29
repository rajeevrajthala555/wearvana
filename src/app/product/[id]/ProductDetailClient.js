'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProductDetailClient({ sneaker }) {
  const [selectedSize, setSelectedSize] = useState(null)

  const whatsappMessage = `Hi Werevana, I want to order ${sneaker.name} size ${selectedSize || 'TBD'}`
  const whatsappUrl = `https://wa.me/9779705477470?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-900 border border-white/10 rounded-lg overflow-hidden">
              <Image
                src={sneaker.image}
                alt={sneaker.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            {/* Limited Edition Badge */}
            {sneaker.isLimited && (
              <div className="inline-block bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                LIMITED EDITION
              </div>
            )}

            {/* Product Title */}
            <div>
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">
                {sneaker.brand}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {sneaker.name}
              </h1>
            </div>

            {/* Price */}
            <div>
              <span className="text-4xl font-bold text-white">
                ₨ {sneaker.price.toLocaleString()}
              </span>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {sneaker.description}
              </p>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Condition</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">{sneaker.condition}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Delivery</h3>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                  </svg>
                  <span className="text-gray-300">{sneaker.deliveryTime}</span>
                </div>
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Available Sizes (US)</h3>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                {sneaker.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`aspect-square border rounded-lg transition-colors flex items-center justify-center text-sm font-medium ${selectedSize === size
                      ? 'border-white bg-white text-black'
                      : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-sm text-gray-400">Please select a size to continue</p>
              )}
            </div>

            {/* UK Sizes */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Available Sizes (UK)</h3>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                {sneaker.ukSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`aspect-square border rounded-lg transition-colors flex items-center justify-center text-sm font-medium ${selectedSize === size
                      ? 'border-white bg-white text-black'
                      : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Checkout Button */}
            <div className="pt-6">
              <Link
                href={selectedSize ? `/checkout?productId=${sneaker.id}&size=${selectedSize}` : '#'}
                className="block"
              >
                <button
                  disabled={!selectedSize}
                  className={`w-full font-bold py-4 px-8 rounded-none transition-all duration-300 flex items-center justify-center space-x-3 uppercase tracking-widest text-xs ${selectedSize
                      ? 'bg-white text-black hover:bg-gray-100 shadow-xl'
                      : 'bg-gray-800 cursor-not-allowed text-gray-500'
                    }`}
                >
                  <span>
                    {selectedSize ? 'Check Price & Proceed to Order' : 'Select a size to continue'}
                  </span>
                  {selectedSize && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  )}
                </button>
              </Link>
            </div>

            {/* Additional Info */}
            <div className="text-sm text-gray-400 space-y-2 pt-4 border-t border-white/10">
              <p>• Free shipping on orders over ₨ 25,000</p>
              <p>• 30-day return policy</p>
              <p>• Secure payment processing</p>
              <p>• 100% authentic guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}