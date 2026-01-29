'use client'

export default function ProductForm({
    editingProduct,
    error,
    handleSubmit,
    submitting,
    setShowForm,
    setEditingProduct,
    setError
}) {
    return (
        <div className="mb-8 bg-gray-50 border border-black/10 rounded-lg p-8 animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-6">{editingProduct ? 'Edit' : 'Add'} Product</h2>
            {error && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={editingProduct?.name || ''}
                            required
                            className="w-full px-4 py-2 border border-black/20 rounded focus:outline-none focus:border-black text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Brand</label>
                        <input
                            type="text"
                            name="brand"
                            defaultValue={editingProduct?.brand || ''}
                            required
                            className="w-full px-4 py-2 border border-black/20 rounded focus:outline-none focus:border-black text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Price (₨)</label>
                        <input
                            type="number"
                            name="price"
                            defaultValue={editingProduct?.price || ''}
                            required
                            className="w-full px-4 py-2 border border-black/20 rounded focus:outline-none focus:border-black text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Stock</label>
                        <input
                            type="number"
                            name="stock"
                            defaultValue={editingProduct?.stock || 0}
                            className="w-full px-4 py-2 border border-black/20 rounded focus:outline-none focus:border-black text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Sizes (JSON array, e.g. [6,7,8,9,10])</label>
                        <input
                            type="text"
                            name="sizes"
                            defaultValue={editingProduct?.sizes ? JSON.stringify(editingProduct.sizes) : '[6,7,8,9,10]'}
                            className="w-full px-4 py-2 border border-black/20 rounded focus:outline-none focus:border-black text-black"
                            placeholder="[6,7,8,9,10]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">UK Sizes (JSON array, optional)</label>
                        <input
                            type="text"
                            name="ukSizes"
                            defaultValue={editingProduct?.ukSizes ? JSON.stringify(editingProduct.ukSizes) : ''}
                            className="w-full px-4 py-2 border border-black/20 rounded focus:outline-none focus:border-black text-black"
                            placeholder="[5.5,6.5,7.5,8.5,9.5]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Image URL</label>
                        <input
                            type="url"
                            name="image"
                            defaultValue={editingProduct?.image || ''}
                            className="w-full px-4 py-2 border border-black/20 rounded focus:outline-none focus:border-black text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Condition</label>
                        <input
                            type="text"
                            name="condition"
                            defaultValue={editingProduct?.condition || 'New'}
                            className="w-full px-4 py-2 border border-black/20 rounded focus:outline-none focus:border-black text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Delivery Time</label>
                        <input
                            type="text"
                            name="deliveryTime"
                            defaultValue={editingProduct?.deliveryTime || '7–10 days'}
                            className="w-full px-4 py-2 border border-black/20 rounded focus:outline-none focus:border-black text-black"
                        />
                    </div>
                    <div>
                        <label className="flex items-center space-x-2 mt-6 cursor-pointer">
                            <input
                                type="checkbox"
                                name="isLimited"
                                defaultChecked={editingProduct?.isLimited || false}
                                className="w-4 h-4 cursor-pointer"
                            />
                            <span className="text-black">Limited Edition</span>
                        </label>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                        name="description"
                        defaultValue={editingProduct?.description || ''}
                        rows="4"
                        className="w-full px-4 py-2 border border-black/20 rounded focus:outline-none focus:border-black text-black"
                    />
                </div>
                <div className="flex space-x-4">
                    <button
                        type="submit"
                        disabled={submitting}
                        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-bold"
                    >
                        {submitting ? 'Saving...' : (editingProduct ? 'Update' : 'Create') + ' Product'}
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setShowForm(false)
                            setEditingProduct(null)
                            setError(null)
                        }}
                        disabled={submitting}
                        className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300 transition-colors disabled:opacity-50"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}
