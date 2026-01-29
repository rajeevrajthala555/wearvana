import { NextResponse } from 'next/server'
import { getAdminAuth } from '../../../../lib/auth'

export async function GET() {
  const auth = await getAdminAuth()

  if (!auth) {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }

  return NextResponse.json({ authenticated: true, user: auth })
}
