import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

// Alternative route at /api/admin/create
export async function POST(request) {
  try {
    await prisma.$connect()
    
    const { email, name, password } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const finalPassword = password || 'admin123'
    const finalName = name || 'Admin User'

    const user = await prisma.user.upsert({
      where: { email },
      update: {
        isAdmin: true,
        password: finalPassword,
        name: finalName
      },
      create: {
        email,
        name: finalName,
        password: finalPassword,
        isAdmin: true
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Admin user created/updated successfully',
      user: {
        email: user.email,
        name: user.name,
        password: finalPassword
      }
    }, { status: 200 })
  } catch (error) {
    console.error('Error creating admin:', error)
    
    let errorMessage = 'Failed to create admin user'
    if (error.code === 'P2002') {
      errorMessage = 'User with this email already exists'
    } else if (error.message) {
      errorMessage = error.message
    }
    
    return NextResponse.json(
      { 
        success: false,
        error: errorMessage,
        code: error.code
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
