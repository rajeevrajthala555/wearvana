'use client'

import { useState } from 'react'
import Link from 'next/link'
import AdminAuth from '../../../components/AdminAuth'

function ImportDashboard() {
    const [jsonData, setJsonData] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null)

    const handleGenerateSample = () => {
        const brands = ['Nike', 'Jordan', 'Adidas', 'New Balance', 'Yeezy']
        const models = ['Retro High OG', 'Dunk Low', 'Forum Buckle', '2002R', 'Boost 350 V2']
        const sample = []

        for (let i = 1; i <= 100; i++) {
            const brand = brands[Math.floor(Math.random() * brands.length)]
            const model = models[Math.floor(Math.random() * models.length)]
            sample.push({
                name: `${brand} ${model} Edition ${i}`,
                brand: brand,
                price: Math.floor(Math.random() * (45000 - 15000) + 15000),
                sizes: [7, 8, 9, 10, 11],
                image: `https://images.unsplash.com/photo-1552346154-21d328109827?auto=format&fit=crop&q=80&w=400`,
                condition: 'Brand New',
                isLimited: i % 10 === 0,
                stock: 5,
                deliveryTime: '7–10 days',
                description: 'Authentic curated sneaker for the Nepali market.'
            })
        }
        setJsonData(JSON.stringify(sample, null, 2))
    }

    const handleImport = async () => {
        setLoading(true)
        setError(null)
        setMessage(null)

        try {
            const parsedData = JSON.parse(jsonData)
            const res = await fetch('/api/admin/import', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(parsedData)
            })

            const result = await res.json()

            if (res.ok) {
                setMessage(`Success! ${result.count} products imported.`)
                setJsonData('')
            } else {
                setError(result.error)
            }
        } catch (err) {
            setError('Invalid JSON format. Please check your data.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-white text-black font-inter">
            {/* Header */}
            <div className="bg-black text-white py-6 px-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div>
                        <Link href="/admin" className="text-gray-400 hover:text-white mb-2 block text-xs uppercase tracking-widest font-bold">← Back to Dashboard</Link>
                        <h1 className="text-3xl font-condensed uppercase tracking-wider">Bulk Data Import</h1>
                    </div>
                    <button
                        onClick={handleGenerateSample}
                        className="text-xs font-bold uppercase tracking-widest border border-white/20 px-4 py-2 hover:bg-white/10 transition-colors"
                    >
                        Generate 100+ Sample Entries
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Instructions */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold uppercase tracking-tight">Instructions</h2>
                        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                            <p>1. Prepare your data in a JSON array format.</p>
                            <p>2. Ensure fields like <code className="bg-gray-100 px-1">price</code> are numbers and <code className="bg-gray-100 px-1">sizes</code> are arrays.</p>
                            <p>3. Use high-quality image URLs from reliable sources like Unsplash (placeholder used in sample).</p>
                            <p>4. The system will automatically handle filters and search categorization based on your brands and sizes.</p>
                        </div>

                        {message && (
                            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-none font-medium flex items-center space-x-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                <span>{message}</span>
                            </div>
                        )}

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-none font-medium flex items-center space-x-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                <span>{error}</span>
                            </div>
                        )}
                    </div>

                    {/* Editor */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">JSON Buffer</label>
                            <span className="text-[10px] text-gray-400 uppercase font-mono">{jsonData.length > 0 ? `${JSON.parse(jsonData).length} Items Detected` : '0 Items'}</span>
                        </div>
                        <textarea
                            value={jsonData}
                            onChange={(e) => setJsonData(e.target.value)}
                            placeholder="Paste your JSON array here..."
                            className="w-full h-[500px] bg-gray-50 border-none p-6 font-mono text-xs focus:ring-1 focus:ring-black outline-none resize-none transition-all"
                            spellCheck="false"
                        />
                        <button
                            onClick={handleImport}
                            disabled={loading || !jsonData}
                            className={`w-full py-5 font-bold uppercase tracking-[0.2em] text-xs transition-all ${loading || !jsonData
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-black text-white hover:bg-gray-800 shadow-2xl active:translate-y-px'
                                }`}
                        >
                            {loading ? 'Processing Transaction...' : 'Execute Bulk Import'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function AdminImport() {
    return (
        <AdminAuth>
            <ImportDashboard />
        </AdminAuth>
    )
}
