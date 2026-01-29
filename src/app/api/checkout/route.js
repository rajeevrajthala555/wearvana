import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'
import { OrderStatus, PaymentMethod } from '../../../lib/order-types'

/**
 * CHECKOUT API ROUTE
 * Handlers order validation and preparation for payment.
 */
export async function POST(request) {
    try {
        const body = await request.json()
        const {
            productId,
            size,
            customerName,
            phone,
            city,
            paymentMethod = PaymentMethod.WHATSAPP
        } = body

        // 1. DATA VALIDATION
        if (!productId || !size || !customerName || !phone || !city) {
            return NextResponse.json(
                { error: 'Missing required fields: productId, size, customerName, phone, or city.' },
                { status: 400 }
            )
        }

        // 2. PRODUCT VERIFICATION & SERVER-SIDE PRICE VALIDATION
        // SECURITY: We fetch the product from the DB to get the official price.
        // This prevents "Price Manipulation" where a malicious user could try to send 
        // a modified price in the request body.
        const product = await prisma.product.findUnique({
            where: { id: parseInt(productId) }
        })

        if (!product) {
            return NextResponse.json(
                { error: 'Product not found.' },
                { status: 404 }
            )
        }

        // 3. ORDER CREATION (Pending state)
        // SECURITY: strictly use product.price from DB, NOT body.price
        const order = await prisma.order.create({
            data: {
                userId: 1, // Placeholder for actual User ID from auth session
                total: product.price,
                status: OrderStatus.PENDING,
                shippingAddress: city,
                phone: phone,
                items: {
                    create: {
                        productId: product.id,
                        size: size,
                        price: product.price, // DB price
                        quantity: 1
                    }
                }
            },
            include: {
                items: true
            }
        })

        // ==========================================================
        // SECURITY NOTE FOR FUTURE GATEWAYS (Esewa, Khalti, etc.)
        // ==========================================================
        /* 
           When integrating gateways, we must:
           1. Store Private Keys in Environment Variables (refer to .env.example)
           2. Use HMAC SHA256 for signature generation/verification (Esewa)
           3. Perform a recursive server-side verification after payment success
              by calling the gateway's Verify API before updating order status.
        */

        // ==========================================================
        // FUTURE PAYMENT LOGIC PLACEHOLDERS
        // ==========================================================

        /* 
        if (paymentMethod === PaymentMethod.ESEWA) {
          // TODO: Integrate Esewa e-payment flow
          // 1. Generate signature
          // 2. Prepare Esewa request parameters
          // 3. Return Esewa specialized response or redirect URL
        }
        
        if (paymentMethod === PaymentMethod.KHALTI) {
          // TODO: Integrate Khalti payment verification
          // 1. Initialize Khalti checkout
          // 2. Verification via Khalti server-side API
        }
    
        if (paymentMethod === PaymentMethod.CARD) {
          // TODO: Integrate Stripe / Himalayan Bank Card gateway
        }
        */

        // 4. RETURN SUCCESSFUL INITIALIZATION
        return NextResponse.json({
            success: true,
            orderId: order.id,
            message: 'Order initialized successfully.',
            order: {
                id: order.id,
                total: order.total,
                status: order.status
            }
        })

    } catch (error) {
        console.error('[CHECKOUT_API_ERROR]:', error)
        return NextResponse.json(
            { error: 'An internal server error occurred during checkout initialization.' },
            { status: 500 }
        )
    }
}
