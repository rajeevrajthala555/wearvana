import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
import bcrypt from 'bcryptjs'

// Temporary route to create admin user via API (for development only)
export async function POST(request) {
  try {
    // Test database connection first
    await prisma.$connect()
    
    const { email, name, password } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const rawPassword = password || 'admin123'
    const finalName = name || 'Admin User'
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(rawPassword, 10)

    const user = await prisma.user.upsert({
      where: { email },
      update: {
        isAdmin: true,
        password: hashedPassword,
        name: finalName
      },
      create: {
        email,
        name: finalName,
        password: hashedPassword,
        isAdmin: true
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Admin user created/updated successfully',
      user: {
        email: user.email,
        name: user.name
        // Do not return the hashed password
      }
    })
  } catch (error) {
    console.error('Error creating admin:', error)
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      meta: error.meta,
      name: error.name
    })
    
    // More specific error messages
    let errorMessage = 'Failed to create admin user'
    if (error.code === 'P2002') {
      errorMessage = 'User with this email already exists (but may not be admin)'
    } else if (error.message) {
      errorMessage = error.message
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        code: error.code,
        details: process.env.NODE_ENV === 'development' ? {
          message: error.message,
          stack: error.stack,
          meta: error.meta
        } : undefined
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
