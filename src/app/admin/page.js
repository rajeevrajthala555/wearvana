'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import AdminAuth from '../../components/AdminAuth'

function AdminDashboardContent() {
  const router = useRouter()
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    users: 0,
    totalRevenue: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const [productsRes, ordersRes] = await Promise.all([
        fetch('/api/products'),
        fetch('/api/orders')
      ])

      const products = await productsRes.json()
      const orders = await ordersRes.json()

      const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)

      setStats({
        products: products.length,
        orders: orders.length,
        users: new Set(orders.map(o => o.userId)).size,
        totalRevenue
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
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
            <h1 className="font-logo text-3xl text-logo-red">WEREVANA</h1>
            <p className="text-gray-400 mt-1 uppercase tracking-widest text-[10px] font-bold">Admin Panel</p>
          </div>
          <div className="flex space-x-4 items-center">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              ← Back to Site
            </Link>
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-50 border border-black/10 rounded-lg p-6 animate-fade-in-up">
            <div className="text-gray-600 text-sm font-medium mb-2">Total Products</div>
            <div className="text-3xl font-bold text-black">{stats.products}</div>
          </div>
          <div className="bg-gray-50 border border-black/10 rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-gray-600 text-sm font-medium mb-2">Total Orders</div>
            <div className="text-3xl font-bold text-black">{stats.orders}</div>
          </div>
          <div className="bg-gray-50 border border-black/10 rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-gray-600 text-sm font-medium mb-2">Total Customers</div>
            <div className="text-3xl font-bold text-black">{stats.users}</div>
          </div>
          <div className="bg-gray-50 border border-black/10 rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-gray-600 text-sm font-medium mb-2">Total Revenue</div>
            <div className="text-3xl font-bold text-black">₨ {stats.totalRevenue.toLocaleString()}</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/admin/products" className="bg-black text-white p-8 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 animate-fade-in-up">
            <div className="text-4xl mb-4">👟</div>
            <h2 className="text-2xl font-bold mb-2 uppercase tracking-tight text-sm">Products</h2>
            <p className="text-gray-400 text-xs">Manage your sneaker catalog</p>
          </Link>

          <Link href="/admin/orders" className="bg-black text-white p-8 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl mb-4">📦</div>
            <h2 className="text-2xl font-bold mb-2 uppercase tracking-tight text-sm">Orders</h2>
            <p className="text-gray-400 text-xs">View and update active orders</p>
          </Link>

          <Link href="/admin/import" className="bg-black text-white p-8 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-2xl font-bold mb-2 uppercase tracking-tight text-sm">Bulk Import</h2>
            <p className="text-gray-400 text-xs">Mass upload 100+ sneakers via JSON</p>
          </Link>

          <Link href="/admin/users" className="bg-black text-white p-8 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl mb-4">👥</div>
            <h2 className="text-2xl font-bold mb-2 uppercase tracking-tight text-sm">Users</h2>
            <p className="text-gray-400 text-xs">Customer management</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  return (
    <AdminAuth>
      <AdminDashboardContent />
    </AdminAuth>
  )
}
