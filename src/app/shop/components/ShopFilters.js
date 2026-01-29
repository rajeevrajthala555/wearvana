'use client'

export default function ShopFilters({
    searchQuery,
    setSearchQuery,
    brands,
    selectedBrands,
    handleBrandChange,
    sizes,
    selectedSizes,
    handleSizeChange,
    priceRange,
    setPriceRange,
    limitedEditionOnly,
    setLimitedEditionOnly
}) {
    return (
        <div className="sticky top-24 pr-8 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-hide">
            {/* Search */}
            <div className="mb-8 border-b border-gray-100 pb-8">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full py-2 bg-transparent border-b border-gray-200 text-sm font-medium placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Filters Group */}
            <div className="space-y-8">
                {/* Brands */}
                <div className="border-b border-gray-100 pb-8">
                    <h3 className="text-sm font-bold font-condensed uppercase tracking-wider mb-5">Brand</h3>
                    <div className="space-y-3">
                        {brands.map(brand => (
                            <label key={brand} className="flex items-center cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() => handleBrandChange(brand)}
                                    className="sr-only"
                                />
                                <div className={`w-4 h-4 border border-gray-300 rounded mr-3 flex items-center justify-center transition-colors ${selectedBrands.includes(brand) ? 'bg-black border-black' : 'group-hover:border-gray-400'}`}>
                                    {selectedBrands.includes(brand) && (
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    )}
                                </div>
                                <span className={`text-sm transition-colors ${selectedBrands.includes(brand) ? 'font-medium text-black' : 'text-gray-600 group-hover:text-black'}`}>
                                    {brand}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Sizes */}
                <div className="border-b border-gray-100 pb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-4">Size (US)</h3>
                    <div className="grid grid-cols-4 gap-2">
                        {sizes.map(size => (
                            <button
                                key={size}
                                onClick={() => handleSizeChange(size)}
                                className={`py-2 text-sm border rounded transition-all duration-200 active:scale-95 ${selectedSizes.includes(size)
                                        ? 'border-black bg-black text-white shadow-md'
                                        : 'border-transparent bg-gray-50 text-gray-600 hover:bg-gray-100 hover:border-gray-200'
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Price Range */}
                <div className="border-b border-gray-100 pb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-4">Price</h3>
                    <div className="px-1">
                        <div className="flex justify-between text-xs text-gray-500 mb-4 font-medium">
                            <span>₨ {priceRange[0].toLocaleString()}</span>
                            <span>₨ {priceRange[1].toLocaleString()}</span>
                        </div>
                        <div className="relative h-1 bg-gray-100 rounded mb-4">
                            {/* Active Track */}
                            <div
                                className="absolute h-full bg-black rounded"
                                style={{
                                    left: `${(priceRange[0] / 50000) * 100}%`,
                                    right: `${100 - (priceRange[1] / 50000) * 100}%`
                                }}
                            />
                            <input
                                type="range"
                                min="0"
                                max="50000"
                                step="1000"
                                value={priceRange[0]}
                                onChange={(e) => {
                                    const val = Math.min(parseInt(e.target.value), priceRange[1] - 1000);
                                    setPriceRange([val, priceRange[1]])
                                }}
                                className="absolute w-full h-full opacity-0 cursor-pointer pointer-events-none z-10 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4"
                            />
                            <input
                                type="range"
                                min="0"
                                max="50000"
                                step="1000"
                                value={priceRange[1]}
                                onChange={(e) => {
                                    const val = Math.max(parseInt(e.target.value), priceRange[0] + 1000);
                                    setPriceRange([priceRange[0], val])
                                }}
                                className="absolute w-full h-full opacity-0 cursor-pointer pointer-events-none z-10 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4"
                            />
                            {/* Visually rendered thumbs for styling */}
                            <div
                                className="absolute w-4 h-4 bg-white border-2 border-black rounded-full shadow cursor-pointer top-1/2 -translate-y-1/2"
                                style={{ left: `${(priceRange[0] / 50000) * 100}%`, transform: 'translate(-50%, -50%)' }}
                            />
                            <div
                                className="absolute w-4 h-4 bg-white border-2 border-black rounded-full shadow cursor-pointer top-1/2 -translate-y-1/2"
                                style={{ left: `${(priceRange[1] / 50000) * 100}%`, transform: 'translate(-50%, -50%)' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Limited Edition */}
                <div className="pb-8">
                    <label className="flex items-center justify-between cursor-pointer group">
                        <span className="text-sm font-medium text-gray-700 group-hover:text-black">Limited Edition</span>
                        <div className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${limitedEditionOnly ? 'bg-black' : 'bg-gray-200'}`}>
                            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${limitedEditionOnly ? 'translate-x-5' : ''}`}></div>
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={limitedEditionOnly}
                                onChange={(e) => setLimitedEditionOnly(e.target.checked)}
                            />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}
