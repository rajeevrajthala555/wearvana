/**
 * REUSABLE ORDER DATA STRUCTURE
 * 
 * Standardized structure for orders across the Werevana platform.
 * Used for database mapping, API responses, and WhatsApp message generation.
 */

export const OrderStatus = {
    PENDING: 'pending',
    PROCESSING: 'processing',
    SHIPPED: 'shipped',
    DELIVERED: 'delivered',
    CANCELLED: 'cancelled'
}

export const PaymentMethod = {
    WHATSAPP: 'WhatsApp Confirmation',
    ESEWA: 'Esewa',
    KHALTI: 'Khalti',
    CARD: 'Credit/Debit Card'
}

/**
 * Creates a new order object with standard fields
 */
export function createOrderObject({
    productId,
    productName,
    size,
    price,
    customerName,
    phone,
    city,
    paymentMethod = PaymentMethod.WHATSAPP,
    status = OrderStatus.PENDING
}) {
    return {
        orderId: null, // Assigned by database
        productId,
        productName,
        size,
        price: parseInt(price),
        customerName,
        phone,
        city,
        paymentMethod,
        status,
        createdAt: new Date().toISOString()
    }
}

/**
 * Formats a Prisma Order object (with included items and user) 
 * into the simplified reusable order structure.
 */
export function formatDbOrder(dbOrder) {
    if (!dbOrder) return null

    // Assuming orders currently have at least one item
    const mainItem = dbOrder.items?.[0] || {}

    return {
        orderId: dbOrder.id,
        productId: mainItem.productId || null,
        productName: mainItem.product?.name || 'Unknown Product',
        size: mainItem.size || 'N/A',
        price: dbOrder.total,
        customerName: dbOrder.user?.name || 'Guest',
        phone: dbOrder.phone,
        city: dbOrder.shippingAddress, // Current schema uses shippingAddress for location
        paymentMethod: dbOrder.paymentMethod || PaymentMethod.WHATSAPP,
        status: dbOrder.status,
        createdAt: dbOrder.createdAt
    }
}
