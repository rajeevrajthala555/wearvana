'use client'

import { Suspense } from 'react'
import CheckoutClient from './CheckoutClient'

export default function CheckoutPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-xl font-condensed uppercase tracking-widest animate-pulse">Loading Checkout Environment...</div>
            </div>
        }>
            <CheckoutClient />
        </Suspense>
    )
}
