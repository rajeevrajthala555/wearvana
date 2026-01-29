export const metadata = {
  title: 'Authenticity Guarantee - WEREVANA',
  description: 'Learn how WEREVANA ensures 100% authentic sneakers. Our verification process, quality standards, and authenticity guarantee explained.',
}

export default function Authenticity() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            100% Authentic Guarantee
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Every sneaker in our collection is verified authentic. Learn how we ensure quality and trust.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-20 space-y-20">

        {/* Authenticity Promise */}
        <section className="text-center space-y-8">
          <div className="w-20 h-20 mx-auto bg-green-600 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Our Authenticity Promise</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            At WEREVANA, authenticity isn't optional—it's mandatory. Every pair of sneakers goes through
            our rigorous verification process before it reaches our shelves. We stand behind every item
            with our 100% authenticity guarantee.
          </p>
        </section>

        {/* Verification Process */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Verification Process</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">1</div>
                  <h3 className="text-2xl font-semibold">Authorized Sources Only</h3>
                </div>
                <p className="text-gray-300 leading-relaxed pl-16">
                  We source exclusively from authorized distributors, licensed retailers, and official brand partners.
                  No street market purchases or unverified suppliers.
                </p>
              </div>
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="text-gray-600 text-sm font-mono text-center">
                  VERIFICATION<br />PROCESS<br />IMAGE
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center order-2 md:order-1">
                <div className="text-gray-600 text-sm font-mono text-center">
                  INSPECTION<br />IMAGE
                </div>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">2</div>
                  <h3 className="text-2xl font-semibold">Detailed Inspection</h3>
                </div>
                <p className="text-gray-300 leading-relaxed pl-16">
                  Each sneaker undergoes thorough inspection including materials, stitching, logos, packaging,
                  and serial numbers. We use industry-standard authentication methods.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">3</div>
                  <h3 className="text-2xl font-semibold">Documentation & Certification</h3>
                </div>
                <p className="text-gray-300 leading-relaxed pl-16">
                  Every authentic item comes with certificates of authenticity, receipts, and complete
                  documentation proving its legitimacy and origin.
                </p>
              </div>
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="text-gray-600 text-sm font-mono text-center">
                  CERTIFICATION<br />IMAGE
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-white/10">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">100% Guarantee</h3>
              <p className="text-gray-300">If any item is found to be counterfeit, we offer full refund plus return shipping.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-white/10">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Verification</h3>
              <p className="text-gray-300">Our team includes certified sneaker authenticators with years of industry experience.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-white/10">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure Transactions</h3>
              <p className="text-gray-300">Bank-grade security for all purchases with encrypted payment processing.</p>
            </div>
          </div>
        </section>

        {/* Common Authentication Features */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Check</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Materials & Construction</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Genuine leather/synthetic materials</li>
                  <li>• Proper stitching and assembly</li>
                  <li>• Correct weight and balance</li>
                  <li>• Authentic rubber outsoles</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Branding & Details</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Accurate logos and trademarks</li>
                  <li>• Correct font styles and sizing</li>
                  <li>• Proper color matching</li>
                  <li>• Serial numbers and batch codes</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Packaging & Accessories</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Genuine boxes and dust bags</li>
                  <li>• Authentic tags and labels</li>
                  <li>• Proper manuals and paperwork</li>
                  <li>• Matching laces and insoles</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Documentation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Official receipts and certificates</li>
                  <li>• Warranty cards</li>
                  <li>• Care instructions</li>
                  <li>• Brand authenticity guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-8 py-12 border-t border-white/10">
          <h3 className="text-2xl font-bold">Shop with Confidence</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every purchase comes with our authenticity guarantee. Shop knowing you're getting genuine products
            backed by our commitment to quality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/shop" className="bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition-colors">
              Browse Authentic Sneakers
            </a>
            <a href="/shipping" className="border border-white/20 text-white px-8 py-3 hover:border-white/40 transition-colors">
              Learn About Shipping
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}