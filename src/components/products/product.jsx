import { useState, useCallback } from "react";

import Heading from "./components/heading";
import FilterBox from "./components/filterBox";
import ResultCount from "./components/resultCount";
import ProductGrid from "./components/productGrid";
import ProductDetailsModal from "./details/ProductDetailsModal";

import useProductFilters from "./hooks/useProductFilters";

function ProductList() {
const {
search,
setSearch,
typeFilter,
setTypeFilter,
categoryFilter,
setCategoryFilter,
types,
categories,
filteredProducts,
resetFilters,
} = useProductFilters();

const [selectedProduct, setSelectedProduct] = useState(null);

const handleViewDetails = useCallback((product) => {
setSelectedProduct(product);
}, []);

const handleCloseDetails = useCallback(() => {
setSelectedProduct(null);
}, []);

return ( <section className="min-h-screen bg-gray-50 px-5 pb-12 pt-28 sm:px-8 lg:px-10"> <div className="mx-auto max-w-7xl"> <Heading />

    <FilterBox
      search={search}
      setSearch={setSearch}
      typeFilter={typeFilter}
      setTypeFilter={setTypeFilter}
      categoryFilter={categoryFilter}
      setCategoryFilter={setCategoryFilter}
      types={types}
      categories={categories}
      resetFilters={resetFilters}
    />

    <ResultCount count={filteredProducts.length} />

    <ProductGrid
      products={filteredProducts}
      resetFilters={resetFilters}
      onViewDetails={handleViewDetails}
    />

    <ProductDetailsModal
      product={selectedProduct}
      onClose={handleCloseDetails}
    />
  </div>
</section>


);
}

export default ProductList;
