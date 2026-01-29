// Use import for Prisma client
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient({
  log: ['query'],
})

async function main() {
  const email = process.argv[2] || 'admin@werevana.com'
  const name = process.argv[3] || 'Admin User'
  const password = process.argv[4] || 'admin123'

  console.log(`Creating admin user with email: ${email}`)
  console.log(`Default password: ${password}`)
  console.log('(You can change this later)')

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.upsert({
    where: { email },
    update: {
      isAdmin: true,
      password: hashedPassword
    },
    create: {
      email,
      name,
      password: hashedPassword,
      isAdmin: true
    }
  })

  console.log('\n✅ Admin user created successfully!')
  console.log('Email:', user.email)
  console.log('Name:', user.name)
  console.log('Is Admin:', user.isAdmin)
  console.log(`\n🔑 Login with:`)
  console.log(`   Email: ${email}`)
  console.log(`   Password: ${password}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
