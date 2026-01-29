export const metadata = {
  title: 'About WEREVANA - Nepal\'s Sneaker Culture Hub',
  description: 'Learn about WEREVANA\'s mission to bring authentic sneakers and streetwear culture to Nepal. Our story, values, and commitment to quality.',
}

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            About WEREVANA
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Nepal's premier destination for authentic sneakers and streetwear culture.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-20 space-y-20">

        {/* Our Story */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Founded in Kathmandu, WEREVANA was born from a simple passion for sneakers and a vision to bring
                premium streetwear culture to Nepal. What started as a small group of sneaker enthusiasts sharing
                their finds has grown into Nepal's most trusted source for authentic sneakers.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe that great sneakers aren't just footwear—they're expressions of style, culture, and
                individuality. Our journey began in 2020 when we realized Nepal's sneaker community deserved
                access to the same premium products and authentic experiences available globally.
              </p>
            </div>

            <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-gray-600 text-sm font-mono text-center">
                BRAND<br />STORY<br />IMAGE
              </div>
            </div>
          </div>
        </section>

        {/* Sneaker Culture */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sneaker Culture in Nepal</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center order-2 md:order-1">
              <div className="text-gray-600 text-sm font-mono text-center">
                CULTURE<br />IMAGE
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <p className="text-gray-300 leading-relaxed">
                Sneaker culture in Nepal is evolving rapidly. From the bustling streets of Thamel to the
                emerging fashion scenes in Pokhara and Chitwan, we're seeing a new generation embrace the
                global sneaker movement while adding their own Nepali flair.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our community includes collectors, streetwear enthusiasts, and everyday sneaker lovers who
                understand that the right pair of sneakers can elevate any outfit and express personal style.
                We celebrate this growing culture by providing access to limited releases, collaborations,
                and timeless classics.
              </p>
            </div>
          </div>
        </section>

        {/* Authenticity Promise */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Authenticity Promise</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-gray-300 leading-relaxed text-lg">
              Authenticity isn't just a buzzword—it's our foundation. Every pair in our collection undergoes
              rigorous verification to ensure it's 100% genuine. We work directly with authorized distributors
              and maintain transparent supply chains.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Verified Sources</h3>
                <p className="text-gray-400 text-sm">Direct partnerships with authorized distributors and manufacturers.</p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Quality Assurance</h3>
                <p className="text-gray-400 text-sm">Every item inspected for authenticity and quality before shipping.</p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Secure Shopping</h3>
                <p className="text-gray-400 text-sm">Safe transactions with full purchase protection and returns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nepal Connection */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Made for Nepal, by Nepal</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              As Nepal's first dedicated sneaker boutique, we understand the unique challenges and opportunities
              of serving our local community. We're committed to supporting local sneaker culture while providing
              the same premium experience you'd find in global fashion capitals.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From our Kathmandu headquarters, we source, verify, and deliver authentic sneakers across Nepal,
              ensuring that whether you're in Kathmandu, Pokhara, or Lalitpur, you have access to the best
              sneakers the world has to offer.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-8 py-12 border-t border-white/10">
          <h3 className="text-2xl font-bold">Join Our Community</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Be part of Nepal's growing sneaker culture. Follow us for the latest drops, exclusive releases,
            and community events.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/shop" className="bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition-colors">
              Shop Now
            </a>
            <a href="/authenticity" className="border border-white/20 text-white px-8 py-3 hover:border-white/40 transition-colors">
              Learn About Authenticity
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}