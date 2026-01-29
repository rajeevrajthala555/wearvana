import Link from 'next/link'

export const metadata = {
  title: 'Sneaker Blog | Authentic Sneakers in Nepal | Werevana',
  description: 'Expert sneaker guides for Nepal\'s sneaker community. Learn about authentic sneakers, sizing guides, and why our 7-10 day delivery ensures quality.',
  keywords: 'sneaker blog Nepal, authentic sneakers guide, Nike sizing Nepal, Jordan sizing Nepal, sneaker delivery Nepal',
  openGraph: {
    title: 'Sneaker Blog | Authentic Sneakers in Nepal | Werevana',
    description: 'Expert sneaker guides for Nepal\'s sneaker community. Learn about authentic sneakers, sizing guides, and why our 7-10 day delivery ensures quality.',
    type: 'website',
    url: 'https://werevana.com/blog',
    siteName: 'Werevana',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sneaker Blog | Authentic Sneakers in Nepal | Werevana',
    description: 'Expert sneaker guides for Nepal\'s sneaker community. Learn about authentic sneakers, sizing guides, and why our 7-10 day delivery ensures quality.',
  },
  alternates: {
    canonical: 'https://werevana.com/blog',
  },
}

const blogPosts = [
  {
    id: 'how-to-buy-authentic-sneakers-nepal',
    title: 'How to Buy Authentic Sneakers in Nepal',
    excerpt: 'A comprehensive guide to ensuring you get genuine sneakers in Nepal\'s growing sneaker market. Learn the red flags, verification methods, and trusted sources.',
    date: '2024-01-16',
    readTime: '8 min read',
    category: 'Guide',
    image: '/api/placeholder/400/250',
  },
  {
    id: 'nike-vs-jordan-sizing-guide-nepal',
    title: 'Nike vs Jordan Sizing Guide for Nepal',
    excerpt: 'Understanding sneaker sizing differences between Nike and Jordan brands. Essential information for Nepali sneaker enthusiasts to get the perfect fit.',
    date: '2024-01-15',
    readTime: '6 min read',
    category: 'Sizing Guide',
    image: '/api/placeholder/400/250',
  },
  {
    id: 'why-7-10-day-delivery-ensures-authenticity',
    title: 'Why 7–10 Day Delivery Ensures Authenticity',
    excerpt: 'Learn why our careful 7-10 day delivery process guarantees authentic sneakers for Nepal\'s sneaker community. Quality over speed.',
    date: '2024-01-14',
    readTime: '5 min read',
    category: 'Authenticity',
    image: '/api/placeholder/400/250',
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Sneaker Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Expert guides and insights for Nepal's sneaker community.
            Learn about authentic sneakers, sizing, and quality assurance.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-gray-900/70 transition-all duration-300">
              {/* Blog Image */}
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-gray-600 text-sm font-mono text-center">
                  BLOG IMAGE<br/>{post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-3 group-hover:text-gray-300 transition-colors leading-tight">
                  <Link href={`/blog/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center justify-between">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-white hover:text-gray-300 font-medium transition-colors"
                  >
                    Read More →
                  </Link>
                  <span className="text-sm text-gray-500">
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest sneaker guides, authenticity tips, and exclusive releases delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
              />
              <button className="bg-white text-black px-6 py-3 font-semibold hover:bg-gray-200 transition-colors rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}