'use client'

import { useState, useMemo, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import heavy components
const ShopFilters = dynamic(() => import('./components/ShopFilters'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-2xl" />,
  ssr: false
})

const MobileFilters = dynamic(() => import('./components/MobileFilters'), {
  ssr: false
})

const ProductGrid = dynamic(() => import('./components/ProductGrid'), {
  loading: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="aspect-[4/5] bg-gray-50 animate-pulse rounded-xl" />
      ))}
    </div>
  ),
  ssr: false
})

export default function ShopClient({ initialProducts = [] }) {
  const [products, setProducts] = useState(initialProducts)
  const [loading, setLoading] = useState(initialProducts.length === 0)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedSizes, setSelectedSizes] = useState([])
  const [priceRange, setPriceRange] = useState([0, 50000])
  const [limitedEditionOnly, setLimitedEditionOnly] = useState(false)
  const [sortBy, setSortBy] = useState('name')
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  useEffect(() => {
    if (initialProducts.length === 0) {
      fetchProducts()
    }
  }, [initialProducts])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products')
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  // Get unique brands and sizes from products
  const brands = useMemo(() => {
    const uniqueBrands = [...new Set(products.map(p => p.brand))]
    return uniqueBrands.sort()
  }, [products])

  const sizes = useMemo(() => {
    const allSizes = products.flatMap(p => p.sizes || [])
    return [...new Set(allSizes)].sort((a, b) => a - b)
  }, [products])

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(sneaker => {
      // Search filter
      const matchesSearch = searchQuery === '' ||
        sneaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sneaker.brand.toLowerCase().includes(searchQuery.toLowerCase())

      // Brand filter
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(sneaker.brand)

      // Size filter
      const matchesSize = selectedSizes.length === 0 ||
        sneaker.sizes.some(size => selectedSizes.includes(size))

      // Price filter
      const matchesPrice = sneaker.price >= priceRange[0] && sneaker.price <= priceRange[1]

      // Limited edition filter
      const matchesLimited = !limitedEditionOnly || sneaker.isLimited

      return matchesSearch && matchesBrand && matchesSize && matchesPrice && matchesLimited
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [products, searchQuery, selectedBrands, selectedSizes, priceRange, limitedEditionOnly, sortBy])

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  const handleSizeChange = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    )
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedBrands([])
    setSelectedSizes([])
    setPriceRange([0, 50000])
    setLimitedEditionOnly(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading products...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Page Header */}
      <div className="pt-24 pb-12 px-4 font-inter">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 font-condensed uppercase">
            Shop Sneakers
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our carefully curated collection of authentic sneakers and premium streetwear.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <div className="flex justify-between items-center">
            <div className="text-gray-600 text-sm font-medium">
              Showing {filteredProducts.length} of {products.length} sneakers
            </div>
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg border border-black/20 flex items-center space-x-2 transition-all active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
              </svg>
              <span className="font-bold text-xs uppercase tracking-wider">Filter & Sort</span>
              {(selectedBrands.length > 0 || selectedSizes.length > 0 || searchQuery || limitedEditionOnly || priceRange[0] > 0 || priceRange[1] < 50000) && (
                <span className="ml-2 bg-white text-black text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                  {selectedBrands.length + selectedSizes.length + (searchQuery ? 1 : 0) + (limitedEditionOnly ? 1 : 0) + (priceRange[0] > 0 || priceRange[1] < 50000 ? 1 : 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block lg:w-64 flex-shrink-0">
            <ShopFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              brands={brands}
              selectedBrands={selectedBrands}
              handleBrandChange={handleBrandChange}
              sizes={sizes}
              selectedSizes={selectedSizes}
              handleSizeChange={handleSizeChange}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              limitedEditionOnly={limitedEditionOnly}
              setLimitedEditionOnly={setLimitedEditionOnly}
            />
          </aside>

          {/* Products Section */}
          <div className="flex-1">
            {/* Desktop Sort Controls */}
            <div className="hidden lg:flex justify-between items-center mb-6">
              <div className="text-gray-600 text-sm font-medium">
                Showing {filteredProducts.length} of {products.length} sneakers
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border-b border-gray-200 py-1 text-sm font-medium text-black focus:outline-none focus:border-black transition-colors"
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Mobile Sort Controls */}
            <div className="lg:hidden mb-6">
              <div className="flex justify-center">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-50 border-none rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider text-black focus:outline-none"
                >
                  <option value="name">Sort by: Name</option>
                  <option value="price-low">Sort by: Price: Low to High</option>
                  <option value="price-high">Sort by: Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <ProductGrid
              filteredProducts={filteredProducts}
              clearFilters={clearFilters}
            />

            {/* Load More / Pagination */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-16 pb-10">
                <button className="bg-black text-white px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0">
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filters Slide-over Panel */}
        <MobileFilters
          isMobileFiltersOpen={isMobileFiltersOpen}
          setIsMobileFiltersOpen={setIsMobileFiltersOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          brands={brands}
          selectedBrands={selectedBrands}
          handleBrandChange={handleBrandChange}
          sizes={sizes}
          selectedSizes={selectedSizes}
          handleSizeChange={handleSizeChange}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          limitedEditionOnly={limitedEditionOnly}
          setLimitedEditionOnly={setLimitedEditionOnly}
          clearFilters={clearFilters}
          filteredCount={filteredProducts.length}
        />
      </div>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  )
}