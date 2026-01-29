# Quick Fix: Admin Login Issue

## The Problem
The error "Unexpected token '<', "<!DOCTYPE "... is not valid JSON" means the API route isn't being found and Next.js is returning an HTML error page.

## Solution: Restart the Server

1. **Stop the server** (Press Ctrl+C in the terminal)
2. **Restart it:**
   ```bash
   npm run dev
   ```
3. **Wait for it to fully start** (you'll see "Ready" message)
4. **Try creating admin again** on the login page

## Alternative: Use Prisma Studio (No API needed)

If the API route still doesn't work, create the admin user directly:

1. **Open Prisma Studio:**
   ```bash
   npx prisma studio
   ```

2. **Open in browser:** http://localhost:5555

3. **Click on "User" table**

4. **Click "Add record" button**

5. **Fill in:**
   - `email`: `admin@werevana.com`
   - `name`: `Admin`
   - `password`: `admin123`
   - `isAdmin`: ✅ Check the checkbox

6. **Click "Save 1 change"**

7. **Close Prisma Studio** (Ctrl+C)

8. **Go to login page:** http://localhost:3000/admin/login

9. **Login with:**
   - Email: `admin@werevana.com`
   - Password: `admin123`

## Why This Happens

Next.js needs to compile new API routes. If you added the route while the server was running, it might not have picked it up. Restarting ensures all routes are compiled.

## Still Not Working?

1. Check server terminal for compilation errors
2. Make sure you're accessing: http://localhost:3000/admin/login
3. Check browser console (F12) for detailed errors
4. Verify the route exists: `src/app/api/auth/create-admin/route.js`
