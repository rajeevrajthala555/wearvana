import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
import bcrypt from 'bcryptjs'
import { SignJWT } from 'jose'

export async function POST(request) {
  try {
    const { email, password } = await request.json()
    console.log('Login attempt for:', email)

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user || !user.isAdmin) {
      console.log('User not found or not admin')
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Password check using bcrypt
    let isValid = false
    try {
      isValid = await bcrypt.compare(password, user.password)
    } catch (bcryptError) {
      console.warn('Bcrypt error (likely legacy plain text password):', bcryptError.message)
      // Fallback: Check if it matches plain text (for smooth migration)? 
      // No, strictly enforce security. But we shouldn't crash.
      isValid = false
    }

    if (!isValid) {
      console.log('Invalid password')
      return NextResponse.json(
        { error: 'Invalid credentials. If you recently updated the site, please click "Create Admin User" to update your account security.' },
        { status: 401 }
      )
    }

    // Generate JWT
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'default-secret-key-change-me')
    const token = await new SignJWT({
      userId: user.id,
      email: user.email,
      isAdmin: true
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(secret)

    const response = NextResponse.json({
      success: true,
      user: { id: user.id, name: user.name, email: user.email }
    })

    // Set session cookie
    response.cookies.set('admin-auth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: error.message || 'Login failed. Please check server logs.' },
      { status: 500 }
    )
  }
}
