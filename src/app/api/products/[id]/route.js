import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

// GET single product
export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid product ID' },
        { status: 400 }
      )
    }
    
    const product = await prisma.product.findUnique({
      where: { id }
    })

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    // Parse JSON strings for sizes safely
    let sizes = []
    let ukSizes = null
    try {
      sizes = product.sizes ? JSON.parse(product.sizes) : []
    } catch (error) {
      console.error('Error parsing sizes:', error)
      sizes = []
    }
    try {
      ukSizes = product.ukSizes ? JSON.parse(product.ukSizes) : null
    } catch (error) {
      console.error('Error parsing UK sizes:', error)
      ukSizes = null
    }
    
    const productWithParsedSizes = {
      ...product,
      sizes,
      ukSizes
    }

    return NextResponse.json(productWithParsedSizes)
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}

// PUT update product
export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid product ID' },
        { status: 400 }
      )
    }
    
    const data = await request.json()
    
    // Validate required fields
    if (!data.name || !data.brand || !data.price) {
      return NextResponse.json(
        { error: 'Name, brand, and price are required' },
        { status: 400 }
      )
    }
    
    const price = parseInt(data.price)
    if (isNaN(price) || price < 0) {
      return NextResponse.json(
        { error: 'Invalid price' },
        { status: 400 }
      )
    }
    
    const product = await prisma.product.update({
      where: { id },
      data: {
        name: data.name,
        brand: data.brand,
        price,
        sizes: JSON.stringify(data.sizes || []),
        ukSizes: data.ukSizes ? JSON.stringify(data.ukSizes) : null,
        condition: data.condition || 'New',
        deliveryTime: data.deliveryTime || '7–10 days',
        image: data.image || '/api/placeholder/400/400',
        description: data.description || '',
        isLimited: data.isLimited || false,
        stock: parseInt(data.stock || 0) || 0
      }
    })

    return NextResponse.json(product)
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    )
  }
}

// DELETE product
export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid product ID' },
        { status: 400 }
      )
    }
    
    await prisma.product.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Product deleted successfully' })
  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    )
  }
}
