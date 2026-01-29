'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ProductGrid({ filteredProducts, clearFilters }) {
    if (filteredProducts.length === 0) {
        return (
            <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2 text-black">No sneakers found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters to see more results.</p>
                <button
                    onClick={clearFilters}
                    className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors rounded-lg"
                >
                    Clear all filters
                </button>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((sneaker) => (
                <Link href={`/product/${sneaker.id}`} key={sneaker.id} className="group cursor-pointer block">
                    <div className="bg-transparent transition-all duration-300">
                        {/* Sneaker Image */}
                        <div className="aspect-square bg-gray-50 flex items-center justify-center relative overflow-hidden mb-3">
                            <Image
                                src={sneaker.image}
                                alt={sneaker.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            {/* Limited Edition Badge */}
                            {sneaker.isLimited && (
                                <div className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                                    Limited
                                </div>
                            )}
                        </div>

                        {/* Product Info */}
                        <div className="space-y-2 mt-4">
                            <div className="flex justify-between items-start">
                                <h3 className="font-medium text-base text-black leading-snug pr-4">
                                    {sneaker.name}
                                </h3>
                            </div>

                            <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                                {sneaker.brand}
                            </p>

                            <div className="flex items-center space-x-3 pt-1">
                                <span className="text-sm font-semibold text-black">
                                    ₨ {sneaker.price.toLocaleString()}
                                </span>
                                {sneaker.isLimited && (
                                    <span className="text-[10px] font-bold text-black border border-black/10 px-1.5 py-0.5 uppercase tracking-wide">
                                        Limited
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
