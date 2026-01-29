import { cache } from 'react'
import { prisma } from './prisma'

// Deduplicate database requests across the same render pass
export const getProducts = cache(async () => {
    try {
        const products = await prisma.product.findMany({
            orderBy: { createdAt: 'desc' }
        })

        return products.map(product => ({
            ...product,
            sizes: product.sizes ? JSON.parse(product.sizes) : [],
            ukSizes: product.ukSizes ? JSON.parse(product.ukSizes) : null
        }))
    } catch (error) {
        console.error('Error fetching products:', error)
        return []
    }
})

export const getProductById = cache(async (id) => {
    try {
        const product = await prisma.product.findUnique({
            where: { id: parseInt(id) }
        })

        if (!product) return null

        return {
            ...product,
            sizes: product.sizes ? JSON.parse(product.sizes) : [],
            ukSizes: product.ukSizes ? JSON.parse(product.ukSizes) : null
        }
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error)
        return null
    }
})

// Revalidate data every hour
export const revalidate = 3600
