import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

// GET all orders
export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: true,
        items: {
          include: {
            product: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(orders)
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}

// POST create new order
export async function POST(request) {
  try {
    const data = await request.json()
    
    const order = await prisma.order.create({
      data: {
        userId: data.userId,
        total: parseInt(data.total),
        status: data.status || 'pending',
        shippingAddress: data.shippingAddress,
        phone: data.phone,
        notes: data.notes || null,
        items: {
          create: data.items.map(item => ({
            productId: item.productId,
            quantity: parseInt(item.quantity),
            size: item.size,
            price: parseInt(item.price)
          }))
        }
      },
      include: {
        user: true,
        items: {
          include: {
            product: true
          }
        }
      }
    })

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}
