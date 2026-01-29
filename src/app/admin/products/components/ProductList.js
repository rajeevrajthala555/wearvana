'use client'

import Image from 'next/image'

export default function ProductList({ products, handleEdit, handleDelete }) {
    if (products.length === 0) {
        return (
            <div className="text-center py-16">
                <div className="text-6xl mb-4">👟</div>
                <h3 className="text-xl font-semibold mb-2 text-black">No products yet</h3>
                <p className="text-gray-600 mb-6">Create your first product to get started</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <div key={product.id} className="bg-gray-50 border border-black/10 rounded-lg p-6 animate-fade-in-up hover:shadow-lg transition-all duration-300">
                    <div className="aspect-square bg-gray-200 rounded mb-4 flex items-center justify-center relative overflow-hidden">
                        {product.image ? (
                            <div className="relative w-full h-full">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover rounded"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        ) : (
                            <div className="text-gray-400">No Image</div>
                        )}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-black">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
                    <p className="text-xl font-bold mb-4 text-black">₨ {product.price.toLocaleString()}</p>
                    <p className="text-sm text-gray-500 mb-4">Stock: {product.stock}</p>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => handleEdit(product)}
                            className="flex-1 bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors font-semibold"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(product.id)}
                            className="flex-1 bg-logo-red text-white px-4 py-2 rounded text-sm hover:bg-red-600 transition-colors font-semibold"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
