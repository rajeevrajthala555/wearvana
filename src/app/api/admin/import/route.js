import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

/**
 * BULK IMPORT API
 * Accepts an array of product objects and performs a mass insert.
 */
export async function POST(request) {
    try {
        const products = await request.json()

        if (!Array.isArray(products)) {
            return NextResponse.json(
                { error: 'Invalid input. Expected an array of products.' },
                { status: 400 }
            )
        }

        // Format data for Prisma
        const formattedProducts = products.map(p => ({
            name: p.name,
            brand: p.brand,
            price: parseInt(p.price) || 0,
            sizes: JSON.stringify(Array.isArray(p.sizes) ? p.sizes : [6, 7, 8, 9, 10, 11]),
            ukSizes: JSON.stringify(Array.isArray(p.ukSizes) ? p.ukSizes : []),
            condition: p.condition || 'Brand New',
            image: p.image || '/api/placeholder/400/400',
            description: p.description || `${p.brand} ${p.name} - Premium sneaker curated for Nepal.`,
            isLimited: !!p.isLimited,
            stock: parseInt(p.stock) || 10,
            deliveryTime: p.deliveryTime || '7–10 days'
        }))

        // Use createMany for high-performance block insert
        // Note: SQLite doesn't support createMany in some versions, 
        // so we fallback to a transaction of creates for reliability.
        const results = await prisma.$transaction(
            formattedProducts.map(data => prisma.product.create({ data }))
        )

        return NextResponse.json({
            success: true,
            count: results.length,
            message: `${results.length} products imported successfully.`
        })

    } catch (error) {
        console.error('[BULK_IMPORT_ERROR]:', error)
        return NextResponse.json(
            { error: 'Failed to import products. Check data for formatting errors.' },
            { status: 500 }
        )
    }
}
