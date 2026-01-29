import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

// GET all products
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    })
    
    // Parse JSON strings for sizes safely
    const productsWithParsedSizes = products.map(product => {
      try {
        return {
          ...product,
          sizes: product.sizes ? JSON.parse(product.sizes) : [],
          ukSizes: product.ukSizes ? JSON.parse(product.ukSizes) : null
        }
      } catch (error) {
        console.error('Error parsing sizes for product:', product.id, error)
        return {
          ...product,
          sizes: [],
          ukSizes: null
        }
      }
    })

    return NextResponse.json(productsWithParsedSizes)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

// POST create new product
export async function POST(request) {
  try {
    const data = await request.json()
    
    // Validate required fields
    if (!data.name || !data.brand || !data.price) {
      return NextResponse.json(
        { error: 'Name, brand, and price are required' },
        { status: 400 }
      )
    }

    // Handle sizes - ensure it's an array
    let sizesArray = []
    if (Array.isArray(data.sizes)) {
      sizesArray = data.sizes
    } else if (typeof data.sizes === 'string') {
      try {
        sizesArray = JSON.parse(data.sizes)
      } catch {
        sizesArray = data.sizes.split(',').map(s => parseInt(s.trim())).filter(s => !isNaN(s))
      }
    }

    // Handle UK sizes
    let ukSizesArray = null
    if (data.ukSizes) {
      if (Array.isArray(data.ukSizes)) {
        ukSizesArray = data.ukSizes
      } else if (typeof data.ukSizes === 'string' && data.ukSizes.trim()) {
        try {
          ukSizesArray = JSON.parse(data.ukSizes)
        } catch {
          ukSizesArray = data.ukSizes.split(',').map(s => parseFloat(s.trim())).filter(s => !isNaN(s))
        }
      }
    }
    
    // Validate price
    const price = parseInt(data.price)
    if (isNaN(price) || price < 0) {
      return NextResponse.json(
        { error: 'Invalid price' },
        { status: 400 }
      )
    }
    
    // Convert arrays to JSON strings for storage
    const product = await prisma.product.create({
      data: {
        name: data.name,
        brand: data.brand,
        price,
        sizes: JSON.stringify(sizesArray),
        ukSizes: ukSizesArray ? JSON.stringify(ukSizesArray) : null,
        condition: data.condition || 'New',
        deliveryTime: data.deliveryTime || '7–10 days',
        image: data.image || '/api/placeholder/400/400',
        description: data.description || '',
        isLimited: data.isLimited || false,
        stock: parseInt(data.stock || 0) || 0
      }
    })

    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create product', details: error.message },
      { status: 500 }
    )
  }
}
