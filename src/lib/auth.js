import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'

export async function getAdminAuth() {
  const cookieStore = cookies()
  const authCookie = cookieStore.get('admin-auth')

  if (!authCookie) {
    return null
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'default-secret-key-change-me')
    const { payload } = await jwtVerify(authCookie.value, secret)

    if (payload.isAdmin) {
      return payload
    }
  } catch (error) {
    return null
  }

  return null
}

export async function requireAuth() {
  const auth = await getAdminAuth()

  if (!auth) {
    throw new Error('Unauthorized')
  }

  return auth
}
