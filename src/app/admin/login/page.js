'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if already logged in
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/check')
      if (res.ok) {
        router.push('/admin')
      }
    } catch (error) {
      // Not authenticated
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()

      if (res.ok) {
        router.push('/admin')
        router.refresh()
      } else {
        setError(data.error || 'Login failed. Please check your credentials.')
      }
    } catch (error) {
      setError('Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full animate-fade-in-up">
        <div className="bg-gray-50 border border-black/10 rounded-lg p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="logo-font text-4xl text-logo-red mb-2">WEREVANA</h1>
            <h2 className="text-2xl font-bold text-black">Admin Login</h2>
            <p className="text-gray-600 mt-2">Sign in to access the admin panel</p>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-black/20 rounded focus:outline-none focus:border-black transition-colors"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-black/20 rounded focus:outline-none focus:border-black transition-colors"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600 space-y-2">
            <p>Don't have an admin account?</p>
            <button
              type="button"
              onClick={async () => {
                try {
                  setError('')
                  setLoading(true)
                  
                  // First test database connection
                  try {
                    const testRes = await fetch('/api/auth/test-db')
                    const testContentType = testRes.headers.get('content-type') || ''
                    
                    if (!testContentType.includes('application/json')) {
                      const testText = await testRes.text()
                      console.error('Test DB route returned HTML:', testText.substring(0, 500))
                      setError('API routes are not working. Please restart the server: Stop (Ctrl+C) and run "npm run dev" again.')
                      setLoading(false)
                      return
                    }
                    
                    const testData = await testRes.json()
                    
                    if (!testRes.ok) {
                      setError(`Database error: ${testData.error || 'Unknown error'}. Make sure the database is set up.`)
                      setLoading(false)
                      return
                    }
                  } catch (testError) {
                    console.error('Test DB error:', testError)
                    setError(`Cannot connect to server. Make sure the server is running at http://localhost:3000`)
                    setLoading(false)
                    return
                  }
                  
                  // Create admin user - try both routes
                  let res
                  let routeUsed = '/api/auth/create-admin'
                  
                  try {
                    res = await fetch('/api/auth/create-admin', {
                      method: 'POST',
                      headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                      },
                      body: JSON.stringify({
                        email: 'admin@werevana.com',
                        name: 'Admin',
                        password: 'admin123'
                      })
                    })
                    
                    // If first route returns HTML (404), try alternative route
                    const contentType = res.headers.get('content-type') || ''
                    if (!contentType.includes('application/json')) {
                      console.log('First route failed, trying alternative route...')
                      routeUsed = '/api/admin/create'
                      res = await fetch('/api/admin/create', {
                        method: 'POST',
                        headers: { 
                          'Content-Type': 'application/json',
                          'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                          email: 'admin@werevana.com',
                          name: 'Admin',
                          password: 'admin123'
                        })
                      })
                    }
                  } catch (fetchError) {
                    console.error('Fetch error:', fetchError)
                    setError(`Network error: ${fetchError.message}. Make sure the server is running at http://localhost:3000`)
                    setLoading(false)
                    return
                  }
                    
                    // Check if response is JSON
                    const contentType = res.headers.get('content-type') || ''
                    const isJSON = contentType.includes('application/json')
                    
                    if (!isJSON) {
                      // Response is HTML (likely an error page)
                      const text = await res.text()
                      console.error('API returned HTML instead of JSON:', text.substring(0, 500))
                      setError(`Server error: The API route returned an HTML page instead of JSON. This usually means:
1. The route doesn't exist or has a compilation error
2. The server needs to be restarted
3. Check the server terminal for errors

Status: ${res.status} ${res.statusText}
Try restarting the server: Stop (Ctrl+C) and run "npm run dev" again`)
                      return
                    }
                    
                    // Parse JSON response
                    let data
                    try {
                      data = await res.json()
                    } catch (parseError) {
                      console.error('Failed to parse JSON:', parseError)
                      setError('Failed to parse server response. Check console for details.')
                      return
                    }
                    
                    if (res.ok && data.success) {
                      setEmail('admin@werevana.com')
                      setPassword('admin123')
                      setError('')
                      alert('✅ Admin user created! You can now login with:\nEmail: admin@werevana.com\nPassword: admin123')
                    } else {
                      setError('Error: ' + (data.error || 'Failed to create admin user') + (data.details ? '\nDetails: ' + JSON.stringify(data.details, null, 2) : ''))
                    }
                } catch (error) {
                  console.error('Error creating admin user:', error)
                  setError('Error creating admin user: ' + error.message)
                } finally {
                  setLoading(false)
                }
              }}
              disabled={loading}
              className="text-logo-red hover:underline font-medium disabled:opacity-50"
            >
              {loading ? 'Creating...' : 'Create Admin User (admin@werevana.com / admin123)'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
