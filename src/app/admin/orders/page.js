'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import AdminAuth from '../../../components/AdminAuth'

function AdminOrdersContent() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/orders')
      const data = await res.json()
      setOrders(data)
    } catch (error) {
      console.error('Error fetching orders:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      })

      if (res.ok) {
        fetchOrders()
      }
    } catch (error) {
      console.error('Error updating order:', error)
      alert('Failed to update order status')
    }
  }

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    processing: 'bg-blue-100 text-blue-800',
    shipped: 'bg-purple-100 text-purple-800',
    delivered: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
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
            <Link href="/admin" className="text-gray-300 hover:text-white transition-colors mb-2 block">← Back to Dashboard</Link>
            <h1 className="logo-font text-3xl text-logo-red">Manage Orders</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-gray-50 border border-black/10 rounded-lg p-6 animate-fade-in-up">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">Order #{order.id}</h3>
                  <p className="text-gray-600 text-sm">Customer: {order.user?.name || 'N/A'}</p>
                  <p className="text-gray-600 text-sm">Email: {order.user?.email || 'N/A'}</p>
                  <p className="text-gray-600 text-sm">Phone: {order.phone}</p>
                  <p className="text-gray-600 text-sm mt-2">Address: {order.shippingAddress}</p>
                </div>
                <div className="text-right">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusColors[order.status] || 'bg-gray-100 text-gray-800'}`}>
                    {order.status}
                  </div>
                  <p className="text-xl font-bold mt-2">₨ {order.total.toLocaleString()}</p>
                  <p className="text-gray-500 text-sm mt-1">{new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="border-t border-black/10 pt-4 mt-4">
                <h4 className="font-semibold mb-2">Items:</h4>
                <div className="space-y-2">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center text-sm">
                      <span>
                        {item.product?.name} - Size {item.size} (Qty: {item.quantity})
                      </span>
                      <span className="font-medium">₨ {(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {order.notes && (
                <div className="mt-4 pt-4 border-t border-black/10">
                  <p className="text-sm text-gray-600"><strong>Notes:</strong> {order.notes}</p>
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-black/10">
                <label className="block text-sm font-medium mb-2">Update Status:</label>
                <select
                  value={order.status}
                  onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                  className="px-4 py-2 border border-black/20 rounded focus:outline-none focus:border-black"
                >
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          ))}
        </div>

        {orders.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold mb-2">No orders yet</h3>
            <p className="text-gray-600">Orders will appear here once customers place them</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function AdminOrders() {
  return (
    <AdminAuth>
      <AdminOrdersContent />
    </AdminAuth>
  )
}
