export default function ProductDescription() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Authentic Sneakers Nepal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted destination for premium sneakers in Nepal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Authentic Sneakers Nepal */}
          <div className="bg-gray-50 border border-black/10 rounded-2xl p-8 hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto transition-transform duration-300 hover:scale-110">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-black">Authentic Sneakers Nepal</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              Every pair of authentic sneakers in Nepal undergoes rigorous verification for 100% authenticity.
              We source directly from authorized distributors to ensure Nepali sneaker enthusiasts
              get genuine Nike, Jordan, Adidas, and New Balance products they can trust.
            </p>
          </div>

          {/* Sneaker Delivery Nepal */}
          <div className="bg-gray-50 border border-black/10 rounded-2xl p-8 hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto transition-transform duration-300 hover:scale-110">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-black">Sneaker Delivery Nepal</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              Fast and reliable sneaker delivery across Nepal, from Kathmandu to Pokhara and beyond.
              Your authentic sneakers arrive within 7-10 days with full tracking
              and insurance coverage, ensuring safe delivery to every corner of Nepal.
            </p>
          </div>

          {/* Buy Sneakers Nepal */}
          <div className="bg-gray-50 border border-black/10 rounded-2xl p-8 hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto transition-transform duration-300 hover:scale-110">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-black">Buy Sneakers Nepal</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              Shop with confidence when you buy sneakers in Nepal from Werevana.
              Secure payments, 30-day returns, and dedicated customer support
              make sneaker shopping in Kathmandu and across Nepal effortless and enjoyable.
            </p>
          </div>
        </div>

        {/* SEO Content Block */}
        <div className="bg-gray-50 border border-black/10 rounded-2xl p-8 md:p-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-black">
              Nepal's Premier Destination for Authentic Sneakers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-green-600">Authentic Sneakers Nepal</h4>
                <p className="text-gray-600 text-sm">
                  100% verified authentic sneakers from premium brands
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-blue-600">Sneaker Delivery Nepal</h4>
                <p className="text-gray-600 text-sm">
                  Fast delivery across Nepal with tracking and insurance
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-purple-600">Buy Sneakers Nepal</h4>
                <p className="text-gray-600 text-sm">
                  Secure online shopping with 30-day return policy
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Whether you're a sneaker collector in Kathmandu, a fashion enthusiast in Pokhara,
              or someone seeking premium streetwear anywhere in Nepal, Werevana brings the world's
              best sneakers to your doorstep. From the latest Nike Air Force 1 to classic Jordan sneakers,
              Adidas Samba, and New Balance 550, we're your trusted platform to
              <strong className="text-black"> buy sneakers in Nepal </strong> with complete confidence.
              Our commitment to <strong className="text-green-600">authentic sneakers in Nepal</strong> and
              reliable <strong className="text-blue-600">sneaker delivery across Nepal</strong> makes us
              the preferred choice for Nepal's growing sneaker community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}