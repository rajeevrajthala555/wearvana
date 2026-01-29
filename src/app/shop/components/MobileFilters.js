'use client'

export default function MobileFilters({
    isMobileFiltersOpen,
    setIsMobileFiltersOpen,
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
    setLimitedEditionOnly,
    clearFilters,
    filteredCount
}) {
    return (
        <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMobileFiltersOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={() => setIsMobileFiltersOpen(false)}
            />

            {/* Panel */}
            <div className={`absolute right-0 top-0 h-full w-full max-w-xs bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isMobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <h2 className="text-2xl font-bold font-condensed uppercase tracking-wide">Filters</h2>
                        <button
                            onClick={() => setIsMobileFiltersOpen(false)}
                            className="p-2 -mr-2 text-gray-500 hover:text-black transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Filter Content */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-8">
                        {/* Search */}
                        <div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="SEARCH"
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

                        {/* Brands */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider mb-4">Brand</h3>
                            <div className="space-y-3">
                                {brands.map(brand => (
                                    <label key={brand} className="flex items-center justify-between cursor-pointer group">
                                        <span className={`text-sm transition-colors ${selectedBrands.includes(brand) ? 'font-medium text-black' : 'text-gray-600'}`}>{brand}</span>
                                        <input
                                            type="checkbox"
                                            checked={selectedBrands.includes(brand)}
                                            onChange={() => handleBrandChange(brand)}
                                            className="w-4 h-4 border-gray-300 rounded text-black focus:ring-black"
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Sizes */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider mb-4">Size (US)</h3>
                            <div className="grid grid-cols-4 gap-2">
                                {sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => handleSizeChange(size)}
                                        className={`aspect-square border rounded text-sm font-medium transition-all ${selectedSizes.includes(size)
                                            ? 'border-black bg-black text-white'
                                            : 'border-gray-200 text-gray-600 hover:border-gray-400'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Price Range */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider mb-4">Price</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm font-medium text-gray-900">
                                    <span>₨ {priceRange[0].toLocaleString()}</span>
                                    <span>₨ {priceRange[1].toLocaleString()}</span>
                                </div>
                                <div className="relative h-1 bg-gray-100 rounded">
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
                                        className="absolute w-full h-full opacity-0 cursor-pointer z-10"
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
                                        className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                                    />
                                    {/* Thumbs */}
                                    <div
                                        className="absolute w-4 h-4 bg-white border-2 border-black rounded-full shadow top-1/2 -translate-y-1/2 pointer-events-none"
                                        style={{ left: `${(priceRange[0] / 50000) * 100}%`, transform: 'translate(-50%, -50%)' }}
                                    />
                                    <div
                                        className="absolute w-4 h-4 bg-white border-2 border-black rounded-full shadow top-1/2 -translate-y-1/2 pointer-events-none"
                                        style={{ left: `${(priceRange[1] / 50000) * 100}%`, transform: 'translate(-50%, -50%)' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Limited Edition */}
                        <div>
                            <label className="flex items-center justify-between cursor-pointer">
                                <span className="text-sm font-medium text-gray-900">Limited Edition Only</span>
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

                    {/* Footer */}
                    <div className="border-t border-gray-100 p-6 space-y-3 bg-white">
                        <button
                            onClick={() => {
                                setIsMobileFiltersOpen(false);
                            }}
                            className="w-full bg-black text-white py-4 rounded-none font-bold tracking-wider hover:bg-gray-900 transition-colors"
                        >
                            SHOW RESULTS ({filteredCount})
                        </button>
                        <button
                            onClick={clearFilters}
                            className="w-full py-2 text-xs text-gray-500 hover:text-black uppercase tracking-wider font-semibold"
                        >
                            Clear All Filters
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
