'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import AdminAuth from '../../../components/AdminAuth'

// Dynamically import components
const ProductForm = dynamic(() => import('./components/ProductForm'), {
  loading: () => <div className="h-48 bg-gray-50 animate-pulse rounded-lg mb-8" />,
  ssr: false
})

const ProductList = dynamic(() => import('./components/ProductList'), {
  loading: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map(i => (
        <div key={i} className="h-64 bg-gray-50 animate-pulse rounded-lg" />
      ))}
    </div>
  ),
  ssr: false
})

function AdminProductsContent() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products')
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this product?')) return

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE'
      })

      if (res.ok) {
        setProducts(products.filter(p => p.id !== id))
      }
    } catch (error) {
      console.error('Error deleting product:', error)
      alert('Failed to delete product')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const formData = new FormData(e.target)

    // Parse sizes safely
    let sizes = []
    const sizesInput = formData.get('sizes') || '[]'
    try {
      if (typeof sizesInput === 'string' && sizesInput.trim()) {
        sizes = JSON.parse(sizesInput)
      }
    } catch (err) {
      // If JSON parse fails, try comma-separated
      sizes = sizesInput.split(',').map(s => parseInt(s.trim())).filter(s => !isNaN(s))
    }

    // Parse UK sizes safely
    let ukSizes = null
    const ukSizesInput = formData.get('ukSizes')
    if (ukSizesInput && ukSizesInput.trim()) {
      try {
        ukSizes = JSON.parse(ukSizesInput)
      } catch (err) {
        ukSizes = ukSizesInput.split(',').map(s => parseFloat(s.trim())).filter(s => !isNaN(s))
      }
    }

    const data = {
      name: formData.get('name'),
      brand: formData.get('brand'),
      price: formData.get('price'),
      sizes: sizes,
      ukSizes: ukSizes,
      condition: formData.get('condition') || 'New',
      deliveryTime: formData.get('deliveryTime') || '7–10 days',
      image: formData.get('image') || '/api/placeholder/400/400',
      description: formData.get('description') || '',
      isLimited: formData.get('isLimited') === 'on',
      stock: formData.get('stock') || 0
    }

    try {
      const url = editingProduct ? `/api/products/${editingProduct.id}` : '/api/products'
      const method = editingProduct ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const result = await res.json()

      if (res.ok) {
        setShowForm(false)
        setEditingProduct(null)
        setError(null)
        fetchProducts()
        e.target.reset()
      } else {
        setError(result.error || 'Failed to save product')
      }
    } catch (error) {
      console.error('Error saving product:', error)
      setError(error.message || 'Failed to save product')
    } finally {
      setSubmitting(false)
    }
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    setShowForm(true)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white py-6 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <Link href="/admin" className="text-gray-300 hover:text-white transition-colors mb-2 block text-sm font-medium">← Back to Dashboard</Link>
            <h1 className="font-condensed text-3xl text-white uppercase tracking-wider">Manage Products</h1>
          </div>
          <button
            onClick={() => {
              setEditingProduct(null)
              setShowForm(true)
            }}
            className="bg-white text-black px-6 py-2 rounded-none font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-colors"
          >
            + Add Product
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {showForm && (
          <ProductForm
            editingProduct={editingProduct}
            error={error}
            handleSubmit={handleSubmit}
            submitting={submitting}
            setShowForm={setShowForm}
            setEditingProduct={setEditingProduct}
            setError={setError}
          />
        )}

        {/* Products List */}
        <ProductList
          products={products}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />

        {products.length === 0 && !showForm && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">👟</div>
            <h3 className="text-xl font-semibold mb-2 text-black">No products yet</h3>
            <p className="text-gray-600 mb-6">Create your first product to get started</p>
            <button
              onClick={() => {
                setEditingProduct(null)
                setShowForm(true)
              }}
              className="bg-black text-white px-6 py-3 rounded-none font-bold uppercase tracking-widest text-xs hover:bg-gray-900 transition-colors"
            >
              + Add Product
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function AdminProducts() {
  return (
    <AdminAuth>
      <AdminProductsContent />
    </AdminAuth>
  )
}
