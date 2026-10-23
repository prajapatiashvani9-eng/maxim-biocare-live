function FilterBox({
  search,
  setSearch,
  typeFilter,
  setTypeFilter,
  categoryFilter,
  setCategoryFilter,
  types,
  categories,
  resetFilters,
}) {
  return (
    <div className="max-w-7xl mx-auto bg-white p-6 rounded-2xl shadow-md mb-10">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Search */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Search Product
          </label>

          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Product Type
          </label>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-blue-500"
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Category
          </label>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Reset Button */}
      <div className="flex justify-end mt-5">
        <button
          onClick={resetFilters}
          className="px-6 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
        >
          Reset Filters
        </button>
      </div>

    </div>
  );
}

export default FilterBox;
