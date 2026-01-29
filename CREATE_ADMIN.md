# Quick Admin Setup Guide

## Option 1: Create Admin via API (Easiest)

1. Make sure your server is running: `npm run dev`
2. Open your browser console (F12) on any page
3. Run this command:

```javascript
fetch('/api/auth/create-admin', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'admin@werevana.com',
    name: 'Admin',
    password: 'admin123'
  })
}).then(r => r.json()).then(console.log)
```

Or use curl:
```bash
curl -X POST http://localhost:3000/api/auth/create-admin \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@werevana.com","name":"Admin","password":"admin123"}'
```

## Option 2: Use Prisma Studio

1. Run: `npx prisma studio`
2. Open the User table
3. Create a new user with:
   - email: `admin@werevana.com`
   - name: `Admin`
   - password: `admin123`
   - isAdmin: `true` (check the checkbox)

## Login Credentials

After creating the admin user:
- **URL:** http://localhost:3000/admin/login
- **Email:** admin@werevana.com
- **Password:** admin123

## Troubleshooting

If login still fails:
1. Check browser console (F12) for errors
2. Check server terminal for error messages
3. Verify the user exists: Open Prisma Studio and check the User table
4. Make sure `isAdmin` is set to `true`
