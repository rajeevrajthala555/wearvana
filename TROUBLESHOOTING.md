# Troubleshooting Admin Login Issues

## Quick Fix: Create Admin User

### Method 1: Use the Login Page Button (Easiest)
1. Go to: http://localhost:3000/admin/login
2. Click the button: **"Create Admin User"**
3. If it works, the form will auto-fill
4. Click "Sign In"

### Method 2: Use Browser Console
1. Open http://localhost:3000/admin/login
2. Press F12 to open Developer Tools
3. Go to Console tab
4. Paste and run:

```javascript
fetch('/api/auth/create-admin', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'admin@werevana.com',
    name: 'Admin',
    password: 'admin123'
  })
})
.then(r => r.json())
.then(data => {
  if (data.success) {
    alert('✅ Admin created! Email: ' + data.user.email + ', Password: ' + data.user.password)
  } else {
    alert('❌ Error: ' + data.error)
    console.error(data)
  }
})
.catch(err => {
  alert('❌ Error: ' + err.message)
  console.error(err)
})
```

### Method 3: Use Prisma Studio (Visual)
1. Run: `npx prisma studio`
2. Open http://localhost:5555
3. Click on "User" table
4. Click "Add record"
5. Fill in:
   - email: `admin@werevana.com`
   - name: `Admin`
   - password: `admin123`
   - isAdmin: Check the checkbox (true)
6. Click "Save 1 change"
7. Close Prisma Studio

### Method 4: Check Database Directly
1. Make sure database exists: Check if `dev.db` file exists in project root
2. If not, run: `npx prisma migrate dev`
3. Then try Method 1 or 2 again

## Common Errors

### "Error creating admin user"
- **Cause**: Database connection issue or user already exists
- **Fix**: 
  1. Check if server is running: `npm run dev`
  2. Check database exists: `dir dev.db` (Windows) or `ls dev.db` (Mac/Linux)
  3. If database doesn't exist: `npx prisma migrate dev`

### "Invalid credentials"
- **Cause**: User doesn't exist or password is wrong
- **Fix**: Create admin user using one of the methods above

### "Database connection failed"
- **Cause**: Database file missing or corrupted
- **Fix**: 
  1. Delete `dev.db` if it exists
  2. Run: `npx prisma migrate dev`
  3. Try creating admin again

## Verify Admin User Exists

Test database connection:
```javascript
fetch('/api/auth/test-db').then(r => r.json()).then(console.log)
```

This should return:
```json
{
  "success": true,
  "message": "Database connection successful",
  "userCount": 1
}
```

## Default Login Credentials

After creating admin user:
- **URL**: http://localhost:3000/admin/login
- **Email**: admin@werevana.com
- **Password**: admin123

## Still Having Issues?

1. Check server terminal for error messages
2. Check browser console (F12) for JavaScript errors
3. Verify database file exists: `dev.db` in project root
4. Try restarting the server: Stop (Ctrl+C) and run `npm run dev` again
