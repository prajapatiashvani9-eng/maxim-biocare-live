import ProductCard from "./productCard";
import EmptyState from "./emptyState";

function ProductGrid({ products, resetFilters, onViewDetails }) {
return ( <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
{products.length > 0 ? (
products.map((product) => (
<ProductCard
key={product.id ?? product.slug ?? product.name}
product={product}
onViewDetails={onViewDetails}
/>
))
) : ( <EmptyState resetFilters={resetFilters} />
)} </div>
);
}

export default ProductGrid;
