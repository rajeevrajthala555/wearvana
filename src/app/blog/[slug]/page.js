import Link from 'next/link'
import { notFound } from 'next/navigation'

// Blog post data
const blogPosts = {
  'how-to-buy-authentic-sneakers-nepal': {
    title: 'How to Buy Authentic Sneakers in Nepal',
    excerpt: 'A comprehensive guide to ensuring you get genuine sneakers in Nepal\'s growing sneaker market. Learn the red flags, verification methods, and trusted sources.',
    date: '2024-01-16',
    readTime: '8 min read',
    category: 'Guide',
    author: 'Werevana Team',
    content: `
      <div class="prose prose-lg prose-invert max-w-none">
        <p class="text-xl text-gray-300 mb-8 leading-relaxed">
          Nepal's sneaker market has exploded in recent years, but with growth comes challenges. Counterfeit sneakers have become increasingly common, making it crucial for sneaker enthusiasts in Kathmandu, Pokhara, and beyond to know how to identify and purchase authentic sneakers in Nepal.
        </p>

        <h2 class="text-3xl font-bold mb-6 text-white">Why Authenticity Matters in Nepal</h2>
        <p class="text-gray-300 mb-6 leading-relaxed">
          In Nepal's emerging sneaker culture, authentic sneakers aren't just about quality—they're about supporting the global sneaker community and ensuring you get exactly what you paid for. Counterfeit sneakers often have inferior materials, poor craftsmanship, and can damage your feet over time.
        </p>

        <h2 class="text-3xl font-bold mb-6 text-white">Red Flags to Watch For</h2>
        <div class="bg-gray-800/50 p-6 rounded-xl mb-8">
          <h3 class="text-xl font-semibold mb-4 text-red-400">Common Signs of Counterfeit Sneakers</h3>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-start space-x-3">
              <span class="text-red-400 mt-1">•</span>
              <span><strong class="text-white">Unrealistically low prices:</strong> If a pair seems too good to be true, it probably is.</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-red-400 mt-1">•</span>
              <span><strong class="text-white">Poor stitching quality:</strong> Look for uneven stitching, loose threads, or glue marks.</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-red-400 mt-1">•</span>
              <span><strong class="text-white">Incorrect logos or fonts:</strong> Authentic brands have very specific typography.</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-red-400 mt-1">•</span>
              <span><strong class="text-white">Wrong materials:</strong> Genuine sneakers use premium materials that feel different.</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-red-400 mt-1">•</span>
              <span><strong class="text-white">No documentation:</strong> Authentic sneakers come with receipts, certificates, and proper packaging.</span>
            </li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold mb-6 text-white">Where to Buy Authentic Sneakers in Nepal</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The safest way to buy authentic sneakers in Nepal is through authorized retailers and verified platforms that work directly with brand distributors. Here's where Nepal's sneaker community can find genuine products:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-green-900/20 border border-green-400/20 rounded-xl p-6">
            <h3 class="text-xl font-semibold mb-3 text-green-400">Authorized Retailers</h3>
            <p class="text-gray-300 text-sm">
              Official brand stores and authorized dealers in Nepal that source directly from manufacturers.
            </p>
          </div>
          <div class="bg-blue-900/20 border border-blue-400/20 rounded-xl p-6">
            <h3 class="text-xl font-semibold mb-3 text-blue-400">Verified Online Platforms</h3>
            <p class="text-gray-300 text-sm">
              Trusted e-commerce platforms that verify authenticity and provide guarantees.
            </p>
          </div>
        </div>

        <h2 class="text-3xl font-bold mb-6 text-white">Werevana's Authenticity Promise</h2>
        <p class="text-gray-300 mb-6 leading-relaxed">
          At Werevana, we've built our reputation on providing Nepal's sneaker community with 100% authentic sneakers. Every pair goes through our rigorous verification process before it reaches customers in Kathmandu, Pokhara, or any other Nepali city.
        </p>

        <div class="bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-xl p-8 mb-8">
          <h3 class="text-xl font-semibold mb-4 text-white">Our Verification Process</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="text-center">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span class="text-white font-bold">1</span>
              </div>
              <h4 class="font-semibold mb-2">Source Verification</h4>
              <p class="text-sm text-gray-400">Direct from authorized distributors only</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span class="text-white font-bold">2</span>
              </div>
              <h4 class="font-semibold mb-2">Quality Inspection</h4>
              <p class="text-sm text-gray-400">Detailed authenticity checks</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span class="text-white font-bold">3</span>
              </div>
              <h4 class="font-semibold mb-2">Documentation</h4>
              <p class="text-sm text-gray-400">Certificates and receipts provided</p>
            </div>
          </div>
        </div>

        <h2 class="text-3xl font-bold mb-6 text-white">Final Tips for Nepal's Sneaker Community</h2>
        <p class="text-gray-300 mb-6 leading-relaxed">
          When buying authentic sneakers in Nepal, remember that quality and authenticity are worth the investment. A genuine pair of sneakers will last longer, perform better, and maintain its value much better than counterfeits.
        </p>

        <div class="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 class="text-xl font-semibold mb-4 text-white">Remember:</h3>
          <ul class="space-y-2 text-gray-300">
            <li>• Research before you buy - know what genuine products look like</li>
            <li>• Buy from trusted sources with authenticity guarantees</li>
            <li>• Check reviews and community feedback</li>
            <li>• Don't compromise on quality for price</li>
            <li>• When in doubt, consult with sneaker experts</li>
          </ul>
        </div>
      </div>
    `,
  },
  'nike-vs-jordan-sizing-guide-nepal': {
    title: 'Nike vs Jordan Sizing Guide for Nepal',
    excerpt: 'Understanding sneaker sizing differences between Nike and Jordan brands. Essential information for Nepali sneaker enthusiasts to get the perfect fit.',
    date: '2024-01-15',
    readTime: '6 min read',
    category: 'Sizing Guide',
    author: 'Werevana Team',
    content: `
      <div class="prose prose-lg prose-invert max-w-none">
        <p class="text-xl text-gray-300 mb-8 leading-relaxed">
          One of the most common questions we hear from Nepal's sneaker community is about sizing differences between Nike and Jordan sneakers. While both brands make incredible footwear, their sizing systems aren't identical. Understanding these differences is crucial for getting the perfect fit, whether you're in Kathmandu, Pokhara, or anywhere else in Nepal.
        </p>

        <h2 class="text-3xl font-bold mb-6 text-white">Why Sizing Matters</h2>
        <p class="text-gray-300 mb-6 leading-relaxed">
          Proper sneaker fit is essential for comfort, performance, and longevity. Nepal's sneaker enthusiasts know that getting the right size can make or break your sneaker experience. Since Nike and Jordan use slightly different sizing philosophies, understanding these differences ensures you get the perfect fit every time.
        </p>

        <h2 class="text-3xl font-bold mb-6 text-white">Nike Sizing Philosophy</h2>
        <div class="bg-blue-900/20 border border-blue-400/20 rounded-xl p-6 mb-8">
          <h3 class="text-xl font-semibold mb-4 text-blue-400">Nike Sizing Characteristics</h3>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-start space-x-3">
              <span class="text-blue-400 mt-1">•</span>
              <span><strong class="text-white">Runs slightly larger:</strong> Nike sneakers typically run about half a size larger than advertised</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-blue-400 mt-1">•</span>
              <span><strong class="text-white">Wider toe box:</strong> Generally more accommodating for wider feet</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-blue-400 mt-1">•</span>
              <span><strong class="text-white">Standard heel height:</strong> Consistent heel heights across models</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-blue-400 mt-1">•</span>
              <span><strong class="text-white">Breathable materials:</strong> Often uses mesh and synthetic materials</span>
            </li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold mb-6 text-white">Jordan Sizing Philosophy</h2>
        <div class="bg-red-900/20 border border-red-400/20 rounded-xl p-6 mb-8">
          <h3 class="text-xl font-semibold mb-4 text-red-400">Jordan Sizing Characteristics</h3>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-start space-x-3">
              <span class="text-red-400 mt-1">•</span>
              <span><strong class="text-white">True to size:</strong> Jordan sneakers generally run true to the marked size</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-red-400 mt-1">•</span>
              <span><strong class="text-white">Narrower fit:</strong> Tends to fit more snugly, especially in the toe box</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-red-400 mt-1">•</span>
              <span><strong class="text-white">Higher heel height:</strong> Slightly elevated heels for that classic basketball stance</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-red-400 mt-1">•</span>
              <span><strong class="text-white">Premium leather:</strong> Often features high-quality leather construction</span>
            </li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold mb-6 text-white">Size Conversion Guide</h2>
        <div class="bg-gray-800/50 rounded-xl p-6 mb-8 overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-white/20">
                <th class="text-left py-3 px-4 font-semibold text-white">US Size</th>
                <th class="text-left py-3 px-4 font-semibold text-white">Nike Equivalent</th>
                <th class="text-left py-3 px-4 font-semibold text-white">Jordan Equivalent</th>
                <th class="text-left py-3 px-4 font-semibold text-white">Recommendation</th>
              </tr>
            </thead>
            <tbody class="text-gray-300">
              <tr class="border-b border-white/10">
                <td class="py-3 px-4">7</td>
                <td class="py-3 px-4">6.5-7</td>
                <td class="py-3 px-4">7</td>
                <td class="py-3 px-4">Go with Jordan size if between brands</td>
              </tr>
              <tr class="border-b border-white/10">
                <td class="py-3 px-4">8</td>
                <td class="py-3 px-4">7.5-8</td>
                <td class="py-3 px-4">8</td>
                <td class="py-3 px-4">Jordan size for true fit</td>
              </tr>
              <tr class="border-b border-white/10">
                <td class="py-3 px-4">9</td>
                <td class="py-3 px-4">8.5-9</td>
                <td class="py-3 px-4">9</td>
                <td class="py-3 px-4">Jordan size recommended</td>
              </tr>
              <tr class="border-b border-white/10">
                <td class="py-3 px-4">10</td>
                <td class="py-3 px-4">9.5-10</td>
                <td class="py-3 px-4">10</td>
                <td class="py-3 px-4">Size up 0.5 in Nike if needed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 class="text-3xl font-bold mb-6 text-white">Measuring Your Feet</h2>
        <p class="text-gray-300 mb-6 leading-relaxed">
          Before making your decision, always measure your feet properly. Nepal's sneaker community knows that accurate measurements are the foundation of good fit.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-gray-800/50 rounded-xl p-6">
            <h3 class="text-xl font-semibold mb-4 text-white">How to Measure</h3>
            <ol class="space-y-2 text-gray-300 text-sm">
              <li>1. Place a piece of paper on the floor against a wall</li>
              <li>2. Stand on it with your heel against the wall</li>
              <li>3. Mark where your longest toe ends</li>
              <li>4. Measure from wall to mark in centimeters</li>
              <li>5. Use size chart to convert to US size</li>
            </ol>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6">
            <h3 class="text-xl font-semibold mb-4 text-white">Width Considerations</h3>
            <p class="text-gray-300 text-sm mb-3">
              Don't forget about width! Jordan sneakers tend to run narrower than Nike.
            </p>
            <ul class="space-y-1 text-gray-300 text-sm">
              <li>• <strong class="text-white">D = Standard</strong></li>
              <li>• <strong class="text-white">2E = Wide</strong></li>
              <li>• <strong class="text-white">4E = Extra Wide</strong></li>
            </ul>
          </div>
        </div>

        <h2 class="text-3xl font-bold mb-6 text-white">Werevana's Sizing Recommendations</h2>
        <p class="text-gray-300 mb-6 leading-relaxed">
          For Nepal's sneaker enthusiasts, we recommend starting with your true size in Jordans and going half a size up in Nikes if you're between sizes. When in doubt, size up rather than down - you can always add insoles if needed.
        </p>

        <div class="bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-xl p-8">
          <h3 class="text-xl font-semibold mb-4 text-white">Quick Tips for Nepal's Sneakers Community:</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold mb-2 text-blue-400">For Nike Sneakers:</h4>
              <ul class="space-y-1 text-sm text-gray-300">
                <li>• Size down 0.5 if you have narrow feet</li>
                <li>• Go true to size for most models</li>
                <li>• Consider half sizes for better fit</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-2 text-red-400">For Jordan Sneakers:</h4>
              <ul class="space-y-1 text-sm text-gray-300">
                <li>• True to size for most people</li>
                <li>• Size up if you have wider feet</li>
                <li>• Break in period may be needed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  'why-7-10-day-delivery-ensures-authenticity': {
    title: 'Why 7–10 Day Delivery Ensures Authenticity',
    excerpt: 'Learn why our careful 7-10 day delivery process guarantees authentic sneakers for Nepal\'s sneaker community. Quality over speed.',
    date: '2024-01-14',
    readTime: '5 min read',
    category: 'Authenticity',
    author: 'Werevana Team',
    content: `
      <div class="prose prose-lg prose-invert max-w-none">
        <p class="text-xl text-gray-300 mb-8 leading-relaxed">
          In today's fast-paced world, instant gratification is expected. But when it comes to authentic sneakers, rushing the process can compromise quality. At Werevana, our 7-10 day delivery timeframe isn't a limitation—it's a deliberate choice that ensures Nepal's sneaker community receives only the highest quality, 100% authentic products.
        </p>

        <h2 class="text-3xl font-bold mb-6 text-white">The Authenticity vs Speed Dilemma</h2>
        <p class="text-gray-300 mb-6 leading-relaxed">
          Nepal's growing sneaker market has seen an influx of fast delivery services promising "instant" sneaker gratification. While speed is appealing, it often comes at the cost of authenticity verification. Our 7-10 day delivery process prioritizes quality assurance over rapid delivery, ensuring every pair meets our strict authenticity standards.
        </p>

        <h2 class="text-3xl font-bold mb-6 text-white">What Happens in Our 7-10 Day Process</h2>
        <div class="space-y-6 mb-8">
          <div class="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-400/20 rounded-xl p-6">
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold">1</span>
              </div>
              <h3 class="text-xl font-semibold text-blue-400">Sourcing & Procurement (Days 1-2)</h3>
            </div>
            <p class="text-gray-300 leading-relaxed">
              We work exclusively with authorized distributors and verified suppliers. This careful sourcing ensures we receive authentic products from legitimate channels, not the gray market where counterfeits thrive.
            </p>
          </div>

          <div class="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-400/20 rounded-xl p-6">
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold">2</span>
              </div>
              <h3 class="text-xl font-semibold text-green-400">Detailed Authentication (Days 3-4)</h3>
            </div>
            <p class="text-gray-300 leading-relaxed">
              Every sneaker undergoes meticulous inspection by our trained authenticators. We check materials, stitching, logos, packaging, and documentation. This thorough process cannot be rushed without compromising accuracy.
            </p>
          </div>

          <div class="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-400/20 rounded-xl p-6">
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold">3</span>
              </div>
              <h3 class="text-xl font-semibold text-purple-400">Quality Control & Packaging (Days 5-6)</h3>
            </div>
            <p class="text-gray-300 leading-relaxed">
              Once authenticated, sneakers are carefully packaged with protective materials. We ensure proper documentation accompanies each pair, maintaining the chain of authenticity from source to customer.
            </p>
          </div>

          <div class="bg-gradient-to-r from-orange-900/20 to-orange-800/20 border border-orange-400/20 rounded-xl p-6">
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold">4</span>
              </div>
              <h3 class="text-xl font-semibold text-orange-400">Secure Delivery to Nepal (Days 7-10)</h3>
            </div>
            <p class="text-gray-300 leading-relaxed">
              Your authentic sneakers are delivered across Nepal with full tracking and insurance. We partner with reliable couriers who understand the value of premium sneaker shipments to Kathmandu, Pokhara, and beyond.
            </p>
          </div>
        </div>

        <h2 class="text-3xl font-bold mb-6 text-white">Why Rush Means Risk</h2>
        <p class="text-gray-300 mb-6 leading-relaxed">
          Fast delivery services often skip crucial verification steps to meet tight deadlines. This creates opportunities for counterfeit products to enter the market, disappointing Nepal's sneaker enthusiasts who expect authentic quality.
        </p>

        <div class="bg-red-900/20 border border-red-400/20 rounded-xl p-6 mb-8">
          <h3 class="text-xl font-semibold mb-4 text-red-400">The Hidden Costs of "Fast" Delivery</h3>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-start space-x-3">
              <span class="text-red-400 mt-1">•</span>
              <span><strong class="text-white">Skipped verification:</strong> Corners cut in authenticity checks</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-red-400 mt-1">•</span>
              <span><strong class="text-white">Questionable sources:</strong> Products from unverified suppliers</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-red-400 mt-1">•</span>
              <span><strong class="text-white">Poor packaging:</strong> Increased risk of damage during transit</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-red-400 mt-1">•</span>
              <span><strong class="text-white">Limited documentation:</strong> Missing certificates and receipts</span>
            </li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold mb-6 text-white">Our Commitment to Nepal's Sneaker Community</h2>
        <p class="text-gray-300 mb-6 leading-relaxed">
          Nepal's sneaker culture deserves authentic products and trustworthy service. Our 7-10 day delivery process reflects our commitment to quality over quantity, ensuring that every customer in Kathmandu, Pokhara, and across Nepal receives exactly what they expect: genuine, high-quality sneakers they can be proud to own.
        </p>

        <h2 class="text-3xl font-bold mb-6 text-white">The Value of Patience</h2>
        <p class="text-gray-300 mb-6 leading-relaxed">
          In a world obsessed with instant delivery, our approach might seem old-fashioned. But Nepal's discerning sneaker community understands that authentic sneakers are worth waiting for. The extra time ensures you receive products that meet the highest standards of quality and authenticity.
        </p>

        <div class="bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-xl p-8">
          <h3 class="text-xl font-semibold mb-4 text-white">What You Get with Our 7-10 Day Process:</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-center space-x-2">
                  <span class="text-green-400">✓</span>
                  <span>100% authentic verification</span>
                </li>
                <li class="flex items-center space-x-2">
                  <span class="text-green-400">✓</span>
                  <span>Complete documentation</span>
                </li>
                <li class="flex items-center space-x-2">
                  <span class="text-green-400">✓</span>
                  <span>Premium packaging</span>
                </li>
              </ul>
            </div>
            <div>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-center space-x-2">
                  <span class="text-green-400">✓</span>
                  <span>Quality assurance</span>
                </li>
                <li class="flex items-center space-x-2">
                  <span class="text-green-400">✓</span>
                  <span>Secure delivery</span>
                </li>
                <li class="flex items-center space-x-2">
                  <span class="text-green-400">✓</span>
                  <span>Peace of mind</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-gray-400 italic">
            "Good things come to those who wait. Authentic sneakers come to those who choose quality."
          </p>
        </div>
      </div>
    `,
  },
}

export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return {
      title: 'Blog Post Not Found - Werevana',
    }
  }

  const title = `${post.title} | Werevana`
  const description = post.excerpt

  return {
    title,
    description,
    keywords: `${post.category.toLowerCase()}, sneaker guide, ${post.title.toLowerCase()}, authentic sneakers Nepal`,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://werevana.com/blog/${params.slug}`,
      siteName: 'Werevana',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://werevana.com/blog/${params.slug}`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default function BlogPost({ params }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="pt-24 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
              ← Back to Blog
            </Link>
          </nav>

          {/* Category */}
          <span className="inline-block text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center space-x-6 text-gray-400 mb-8">
            <span>{new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}</span>
            <span>{post.readTime}</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <article className="prose prose-lg prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <h3 className="text-xl font-semibold mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Share on Twitter
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
              Share on WhatsApp
            </button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(blogPosts)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 2)
              .map(([slug, relatedPost]) => (
                <article key={slug} className="bg-gray-900/50 border border-white/10 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300">
                  <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full mb-3 inline-block">
                    {relatedPost.category}
                  </span>
                  <h4 className="text-lg font-semibold mb-2">
                    <Link href={`/blog/${slug}`} className="hover:text-gray-300 transition-colors">
                      {relatedPost.title}
                    </Link>
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">{relatedPost.excerpt}</p>
                  <Link href={`/blog/${slug}`} className="text-white hover:text-gray-300 font-medium text-sm transition-colors">
                    Read More →
                  </Link>
                </article>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}