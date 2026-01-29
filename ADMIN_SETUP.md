# Admin Panel Setup Guide

## Database Implementation Complete

The admin panel and database have been successfully implemented for your Wearvana project.

## What's Been Implemented

### 1. Database Setup
- **Prisma ORM** with SQLite database
- **Schema Models**: Product, User, Order, OrderItem
- Database file: `prisma/dev.db`

### 2. API Routes
- `/api/products` - GET all, POST create
- `/api/products/[id]` - GET, PUT, DELETE single product
- `/api/orders` - GET all, POST create
- `/api/orders/[id]` - GET, PUT update order status
- `/api/users` - GET all users

### 3. Admin Panel Pages
- `/admin` - Dashboard with statistics
- `/admin/products` - Manage products (create, edit, delete)
- `/admin/orders` - View and manage orders
- `/admin/users` - View all users

## How to Use

### Access Admin Panel
1. First, create an admin user: `npm run db:create-admin`
2. Navigate to: `http://localhost:3000/admin/login`
3. Login with your admin credentials
4. You'll be redirected to the dashboard at `/admin`

### Add Products
1. Go to `/admin/products`
2. Click "Add Product" button
3. Fill in product details:
   - Name, Brand, Price
   - Sizes (JSON array format: `[6,7,8,9,10]`)
   - UK Sizes (optional, same format)
   - Image URL
   - Description
   - Stock quantity
   - Limited edition checkbox
4. Click "Create Product"

### Manage Orders
1. Go to `/admin/orders`
2. View all orders with customer details
3. Update order status (pending, processing, shipped, delivered, cancelled)

### View Users
1. Go to `/admin/users`
2. See all registered users with their details

## Database Commands

```bash
# Generate Prisma Client (after schema changes)
npx prisma generate

# Run migrations
npx prisma migrate dev

# Create/Update admin user
npm run db:create-admin [email] [name] [password]

# View database in Prisma Studio (GUI)
npx prisma studio
```

## Notes

- **Authentication is required** - All admin pages are protected
- Products can be added through the admin panel interface
- The database is SQLite (file-based) - perfect for development
- For production, you may want to switch to PostgreSQL or MySQL and implement proper password hashing (bcrypt)
- All CRUD operations are available through the admin interface
- Default password is `admin123` - change it for production use

## Authentication Setup

### Create Admin User

Before you can login, you need to create an admin user:

```bash
npm run db:create-admin
```

This creates an admin user with:
- **Email:** `admin@werevana.com`
- **Password:** `admin123`

Or specify custom credentials:
```bash
npm run db:create-admin your@email.com "Your Name" yourpassword
```

### Login

1. Run `npm run dev`
2. Navigate to `http://localhost:3000/admin/login`
3. Enter your admin email and password
4. You'll be redirected to the admin dashboard

## Next Steps

To start using the admin panel:
1. Create admin user: `npm run db:create-admin`
2. Run `npm run dev`
3. Navigate to `http://localhost:3000/admin/login`
4. Login with your admin credentials
5. Start adding products through the Products page

## Default Login Credentials

- **Email:** `admin@werevana.com`
- **Password:** `admin123`

(Change these by running `npm run db:create-admin` with custom values)
