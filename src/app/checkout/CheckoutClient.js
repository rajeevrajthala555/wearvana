'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { createOrderObject } from '../../lib/order-types'

export default function CheckoutClient() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: ''
    })

    useEffect(() => {
        const productId = searchParams.get('productId')
        if (productId) {
            fetchProduct(productId)
        } else {
            setLoading(false)
        }
    }, [searchParams])

    const fetchProduct = async (id) => {
        try {
            const res = await fetch(`/api/products/${id}`)
            if (res.ok) {
                const data = await res.json()
                setProduct(data)
            }
        } catch (error) {
            console.error('Error fetching product:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const selectedSize = searchParams.get('size')

    const handleWhatsAppOrder = async () => {
        if (!formData.name || !formData.phone || !formData.city) {
            alert('Please fill in all details')
            return
        }

        try {
            // 1. Persist order to database first
            const checkoutResponse = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    productId: product?.id,
                    size: selectedSize || 'TBD',
                    customerName: formData.name,
                    phone: formData.phone,
                    city: formData.city,
                    paymentMethod: 'WhatsApp Confirmation'
                })
            })

            const checkoutData = await checkoutResponse.json()

            if (!checkoutResponse.ok) {
                throw new Error(checkoutData.error || 'Checkout failed')
            }

            // 2. Prepare WhatsApp message using our reusable structure
            const order = createOrderObject({
                productId: product?.id,
                productName: `${product?.brand} ${product?.name}`,
                size: selectedSize || 'TBD',
                price: product?.price,
                customerName: formData.name,
                phone: formData.phone,
                city: formData.city
            })

            const message = `*NEW ORDER FROM WEREVANA WEBSITE*%0A%0A` +
                `*Order ID:* #${checkoutData.orderId}%0A` +
                `*Product:* ${order.productName}%0A` +
                `*Size:* ${order.size}%0A` +
                `*Price:* ₨ ${order.price.toLocaleString()}%0A%0A` +
                `*Customer Details:*%0A` +
                `- Name: ${order.customerName}%0A` +
                `- Phone: ${order.phone}%0A` +
                `- City: ${order.city}%0A%0A` +
                `*Delivery:* 7–10 Days%0A` +
                `*Total:* ₨ ${order.price.toLocaleString()}`

            const whatsappUrl = `https://wa.me/9779705477470?text=${message}`
            window.open(whatsappUrl, '_blank')

            // Optional: Redirect to a success/thank-you page
            // router.push('/checkout/success')
        } catch (error) {
            console.error('Order error:', error)
            alert('Failed to initialize order. Please try again or contact support.')
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-xl font-condensed uppercase tracking-widest animate-pulse">Initializing Checkout...</div>
            </div>
        )
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold font-condensed uppercase mb-4">Your bag is empty</h2>
                <Link href="/shop">
                    <button className="bg-black text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-gray-900 transition-all">
                        Browse Sneakers
                    </button>
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white text-black pt-24 pb-20 font-inter">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Side: Forms */}
                    <div className="flex-1 space-y-12">
                        <div>
                            <h1 className="text-4xl font-bold font-condensed uppercase tracking-tighter mb-8">Secure Checkout</h1>

                            <div className="space-y-8">
                                {/* Delivery Information */}
                                <section>
                                    <h2 className="text-sm font-bold uppercase tracking-wider mb-6 flex items-center">
                                        <span className="w-6 h-6 bg-black text-white text-[10px] flex items-center justify-center rounded-full mr-3">01</span>
                                        Delivery Information
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="John Doe"
                                                className="w-full bg-gray-50 border-none px-4 py-4 focus:ring-1 focus:ring-black transition-all font-medium text-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest ml-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="98XXXXXXXX"
                                                className="w-full bg-gray-50 border-none px-4 py-4 focus:ring-1 focus:ring-black transition-all font-medium text-sm"
                                            />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest ml-1">City / Delivery Location</label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                placeholder="e.g., Kathmandu, Pokhara, Butwal"
                                                className="w-full bg-gray-50 border-none px-4 py-4 focus:ring-1 focus:ring-black transition-all font-medium text-sm"
                                            />
                                        </div>
                                    </div>
                                </section>

                                {/* Payment Method */}
                                <section>
                                    <h2 className="text-sm font-bold uppercase tracking-wider mb-6 flex items-center">
                                        <span className="w-6 h-6 bg-black text-white text-[10px] flex items-center justify-center rounded-full mr-3">02</span>
                                        Payment Method
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {['Esewa', 'Khalti', 'Card'].map((method) => (
                                            <div
                                                key={method}
                                                className="relative group opacity-50 cursor-not-allowed border border-dashed border-gray-200 p-4 grayscale transition-all text-center"
                                            >
                                                <p className="text-xs font-bold uppercase tracking-widest mb-1">{method}</p>
                                                <span className="text-[8px] font-medium text-gray-400 uppercase tracking-tighter">Coming Soon</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-[10px] text-gray-400 uppercase tracking-wide italic">
                                        * Cash on delivery or advanced digital payment will be available soon. Currently, we proceed via WhatsApp confirmation.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Order Summary */}
                    <div className="lg:w-[400px]">
                        <div className="sticky top-24">
                            <div className="bg-gray-50 p-8 space-y-6">
                                <h3 className="text-xl font-bold font-condensed uppercase tracking-wide border-b border-gray-200 pb-4">Order Summary</h3>

                                {/* Product Preview */}
                                <div className="flex gap-4">
                                    <div className="relative w-24 h-24 bg-white border border-gray-100 flex-shrink-0">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{product.brand}</p>
                                        <h4 className="text-sm font-bold leading-tight">{product.name}</h4>
                                        <p className="text-xs font-medium text-gray-500">Size: US {selectedSize || 'TBD'}</p>
                                    </div>
                                </div>

                                {/* Order Details */}
                                <div className="space-y-3 pt-4 border-t border-gray-200">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Subtotal</span>
                                        <span className="font-bold">₨ {product.price?.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Delivery</span>
                                        <span className="text-green-600 font-bold uppercase text-[10px] tracking-wider">Free Shipping</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Estimated Delivery</span>
                                        <span className="font-medium text-gray-900 italic">7–10 Days</span>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-200">
                                    <div className="flex justify-between items-baseline mb-8">
                                        <span className="text-lg font-bold font-condensed uppercase">Total</span>
                                        <span className="text-2xl font-black">₨ {product.price?.toLocaleString()}</span>
                                    </div>

                                    <button
                                        onClick={handleWhatsAppOrder}
                                        className="w-full bg-black text-white py-5 font-bold uppercase tracking-widest text-xs hover:bg-gray-900 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0"
                                    >
                                        Confirm Order on WhatsApp
                                    </button>

                                    <div className="mt-4 flex items-center justify-center space-x-2">
                                        <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Secure 256-bit SSL encryption</span>
                                    </div>
                                </div>
                            </div>

                            <Link href={`/product/${product.id}`} className="block mt-4 text-center text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-black transition-colors">
                                ← Return to details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
