function EmptyState({ resetFilters }) {
  return (
    <div className="col-span-full text-center py-16">
      <h3 className="text-xl font-semibold text-gray-700">
        No products found
      </h3>

      <p className="text-gray-500 mt-2">
        Try changing your search or filters.
      </p>

      <button
        onClick={resetFilters}
        className="mt-5 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Clear Filters
      </button>
    </div>
  );
}

export default EmptyState;