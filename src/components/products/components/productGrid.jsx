import ProductCard from "./productCard";
import EmptyState from "./emptyState";

function ProductGrid({ products, resetFilters }) {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      ) : (
        <EmptyState resetFilters={resetFilters} />
      )}
    </div>
  );
}

export default ProductGrid;