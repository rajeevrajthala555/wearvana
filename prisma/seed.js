const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // Seed initial products
  const initialProducts = [
    {
      name: "Air Force 1 '07",
      brand: "Nike",
      price: 32000,
      sizes: JSON.stringify([6, 7, 8, 9, 10, 11, 12]),
      ukSizes: JSON.stringify([5.5, 6.5, 7.5, 8.5, 9.5, 10.5, 11.5]),
      condition: "New",
      deliveryTime: "7–10 days",
      image: "/api/placeholder/400/400",
      description: "The iconic Nike Air Force 1 '07 in classic white. Featuring the legendary silhouette that started it all, with premium leather construction and Nike Air cushioning technology. A timeless addition to any sneaker collection.",
      isLimited: false,
      stock: 50
    },
    {
      name: "Dunk Low",
      brand: "Nike",
      price: 28000,
      sizes: JSON.stringify([6, 7, 8, 9, 10, 11, 12]),
      ukSizes: JSON.stringify([5.5, 6.5, 7.5, 8.5, 9.5, 10.5, 11.5]),
      condition: "New",
      deliveryTime: "7–10 days",
      image: "/api/placeholder/400/400",
      description: "The Nike Dunk Low returns with its classic basketball roots and street-ready appeal. Premium leather upper, padded collar for comfort, and the signature Swoosh design that made this silhouette legendary.",
      isLimited: false,
      stock: 30
    },
    {
      name: "Air Jordan 1 Retro High OG",
      brand: "Jordan",
      price: 45000,
      sizes: JSON.stringify([7, 8, 9, 10, 11, 12]),
      ukSizes: JSON.stringify([6.5, 7.5, 8.5, 9.5, 10.5, 11.5]),
      condition: "New",
      deliveryTime: "7–10 days",
      image: "/api/placeholder/400/400",
      description: "The original that started it all. The Air Jordan 1 Retro High OG features the iconic Chicago colorway with premium leather construction, Wings logo, and revolutionary Air cushioning. A must-have for any sneaker enthusiast.",
      isLimited: true,
      stock: 20
    },
    {
      name: "Samba OG",
      brand: "Adidas",
      price: 25000,
      sizes: JSON.stringify([6, 7, 8, 9, 10, 11]),
      ukSizes: JSON.stringify([5.5, 6.5, 7.5, 8.5, 9.5, 10.5]),
      condition: "New",
      deliveryTime: "7–10 days",
      image: "/api/placeholder/400/400",
      description: "The Adidas Samba OG returns in its classic form. Featuring a soft leather upper, suede overlays, and the signature three stripes. This football-inspired silhouette has become a streetwear staple.",
      isLimited: false,
      stock: 40
    },
    {
      name: "550",
      brand: "New Balance",
      price: 35000,
      sizes: JSON.stringify([7, 8, 9, 10, 11, 12]),
      ukSizes: JSON.stringify([6.5, 7.5, 8.5, 9.5, 10.5, 11.5]),
      condition: "New",
      deliveryTime: "7–10 days",
      image: "/api/placeholder/400/400",
      description: "The New Balance 550 makes a triumphant return. This classic running silhouette features premium leather construction, ENCAP midsole technology, and the distinctive 'N' logo. A perfect blend of retro style and modern comfort.",
      isLimited: true,
      stock: 25
    }
  ]

  console.log('Seeding database...')

  // Clear existing products
  await prisma.product.deleteMany()

  // Create products
  for (const product of initialProducts) {
    await prisma.product.create({
      data: product
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
