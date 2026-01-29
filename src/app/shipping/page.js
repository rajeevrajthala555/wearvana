export const metadata = {
  title: 'Shipping & Delivery Across Nepal - WEREVANA',
  description: 'Fast, secure sneaker delivery across Nepal. Learn about our shipping policies, delivery times from Kathmandu to Pokhara, and reliable tracking for authentic sneakers.',
  keywords: 'sneaker delivery Nepal, shipping Nepal, Kathmandu delivery, Pokhara shipping, Nepal courier, authentic sneakers delivery',
}

export default function Shipping() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Shipping & Delivery
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Fast, secure delivery across Nepal with real-time tracking and care.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-20 space-y-20">

        {/* Delivery Promise */}
        <section className="text-center space-y-8">
          <div className="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Delivery in 7–10 Days</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We understand the excitement of receiving new sneakers, especially for Nepal's passionate sneaker community.
            That's why we've optimized our shipping process to deliver your authentic sneakers safely and quickly
            to customers across Kathmandu, Pokhara, Lalitpur, and all major Nepali cities.
          </p>
        </section>

        {/* Shipping Options */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shipping Options</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Standard Delivery</h3>
                  <p className="text-gray-400">7–10 business days</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">Secure, tracked delivery across Nepal with insurance coverage.</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">₨ 250</span>
                <span className="text-sm text-gray-400">Free over ₨ 25,000</span>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Express Delivery</h3>
                  <p className="text-gray-400">3–5 business days</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">Priority shipping for urgent orders with expedited handling.</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">₨ 500</span>
                <span className="text-sm text-gray-400">Available in select areas</span>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Process */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold">Order Confirmation</h3>
                <p className="text-gray-300">Receive instant confirmation with order details and tracking information.</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold">Careful Packaging</h3>
                <p className="text-gray-300">Each sneaker is individually packaged with protective materials and original boxes.</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold">Safe Delivery</h3>
                <p className="text-gray-300">Tracked delivery with signature confirmation and insurance coverage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Delivery Coverage</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Major Cities</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-300">Kathmandu Valley</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Kathmandu</li>
                    <li>• Lalitpur</li>
                    <li>• Bhaktapur</li>
                    <li>• Kirtipur</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-300">Other Cities</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Pokhara</li>
                    <li>• Chitwan</li>
                    <li>• Butwal</li>
                    <li>• Dharan</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Additional Coverage</h3>
              <p className="text-gray-300 leading-relaxed">
                We deliver to all major cities and most district headquarters across Nepal.
                For remote areas, additional charges may apply. Contact us for specific location availability.
              </p>
              <div className="bg-gray-900 p-4 rounded-lg border border-white/10">
                <p className="text-sm text-gray-400">
                  <strong>Note:</strong> Delivery times may vary during festivals, bad weather, or public holidays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Packaging & Care */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Packaging & Care</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Premium Packaging</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Original boxes maintained where possible</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Protective wrapping and cushioning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Weather-resistant outer packaging</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Care instructions included</span>
                </li>
              </ul>
            </div>

            <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-gray-600 text-sm font-mono text-center">
                PACKAGING<br />IMAGE
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shipping FAQ</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-gray-900 p-6 rounded-lg border border-white/10">
              <h3 className="font-semibold mb-2">Can I track my order?</h3>
              <p className="text-gray-300 text-sm">Yes! You'll receive tracking information via WhatsApp and email once your order ships.</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-white/10">
              <h3 className="font-semibold mb-2">What if I'm not home for delivery?</h3>
              <p className="text-gray-300 text-sm">Our couriers will attempt delivery twice. After that, you'll need to collect from the nearest depot.</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-white/10">
              <h3 className="font-semibold mb-2">Do you ship internationally?</h3>
              <p className="text-gray-300 text-sm">Currently, we only ship within Nepal. International shipping will be available in the future.</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-white/10">
              <h3 className="font-semibold mb-2">What about customs or duties?</h3>
              <p className="text-gray-300 text-sm">Since we ship within Nepal, there are no customs duties or additional charges.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-8 py-12 border-t border-white/10">
          <h3 className="text-2xl font-bold">Ready to Order?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience fast, secure delivery with every WEREVANA purchase. Your authentic sneakers
            are just days away.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/shop" className="bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition-colors">
              Start Shopping
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