// Sample product data - in a real app, this would come from props/params
const product = {
  id: 1,
  name: 'Air Jordan 1 High OG',
  subtitle: 'Chicago',
  price: '₨ 45,000',
  description: 'The iconic Air Jordan 1 High OG in the classic Chicago colorway. Featuring premium leather construction, the legendary Wings logo, and Nike Air cushioning technology.',
  images: [
    { id: 1, src: '/api/placeholder/500/500', alt: 'Air Jordan 1 High OG - Front' },
    { id: 2, src: '/api/placeholder/500/500', alt: 'Air Jordan 1 High OG - Side' },
    { id: 3, src: '/api/placeholder/500/500', alt: 'Air Jordan 1 High OG - Back' },
    { id: 4, src: '/api/placeholder/500/500', alt: 'Air Jordan 1 High OG - Detail' }
  ],
  sizes: ['6', '7', '8', '9', '10', '11', '12']
}

export const metadata = {
  title: `${product.name} - WEREVANA`,
  description: `Shop ${product.name} at WEREVANA. Authentic sneakers with premium quality. ${product.price}`,
}

export default function Product() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Product Images Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-900 border border-white/10 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-gray-600 text-sm font-mono text-center">
                  PRODUCT<br />IMAGE<br />GALLERY
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image) => (
                <div key={image.id} className="aspect-square bg-gray-800 border border-white/10 rounded-lg overflow-hidden cursor-pointer hover:border-white/30 transition-colors">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-gray-600 text-xs font-mono text-center">
                      IMG<br />{image.id}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            {/* Product Title */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-gray-400">
                {product.subtitle}
              </p>
            </div>

            {/* Price */}
            <div>
              <span className="text-3xl font-bold text-white">
                {product.price}
              </span>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selector */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-300">
                Size (US)
              </label>
              <select className="w-full bg-gray-900 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-white/40 focus:outline-none transition-colors">
                <option value="">Select Size</option>
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Authenticity & Delivery Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-green-400 font-semibold">100% Authentic</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                  </svg>
                </div>
                <span className="text-blue-400 font-semibold">Delivery in 7–10 days</span>
              </div>
            </div>

            {/* Order Button */}
            <div className="pt-4">
              <a href="https://wa.me/+9779705477470" target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.742.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>Order via WhatsApp</span>
                </button>
              </a>
            </div>

            {/* Additional Info */}
            <div className="text-sm text-gray-400 space-y-2 pt-4 border-t border-white/10">
              <p>• Free shipping on orders over ₨ 25,000</p>
              <p>• 30-day return policy</p>
              <p>• Secure payment processing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}