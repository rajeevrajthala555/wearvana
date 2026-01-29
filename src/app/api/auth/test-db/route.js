import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

// Test database connection
export async function GET() {
  try {
    // Test connection
    await prisma.$connect()
    
    // Try to count users
    const userCount = await prisma.user.count()
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      userCount: userCount
    })
  } catch (error) {
    console.error('Database test error:', error)
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
