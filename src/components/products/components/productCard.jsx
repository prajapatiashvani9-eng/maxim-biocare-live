import { fallbackFor } from "../utils/fallbackGradient";

function ProductCard({ product, onViewDetails }) {
return ( <div className="group relative h-64 overflow-hidden rounded-2xl shadow-sm transition-shadow duration-500 hover:shadow-2xl">
{/* Product Image */}
<div
className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
style={{
backgroundImage: product.image
? `url(${product.image})`
: fallbackFor(product.category),
}}
/>

  {/* Dark Gradient */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(to top, rgba(9,25,36,0.95) 0%, rgba(9,25,36,0.55) 45%, rgba(9,25,36,0.05) 75%)",
    }}
  />

  {/* Product Type */}
  <div className="absolute left-4 top-4">
    <span className="inline-block rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white/90 backdrop-blur-sm">
      {product.type}
    </span>
  </div>

  {/* Product Information */}
  <div className="absolute bottom-0 left-0 right-0 p-4">
    <h3 className="mb-1 text-base font-bold leading-snug text-white">
      {product.name}
    </h3>

    <p className="mb-3 text-[11px] font-medium uppercase tracking-wide text-teal-200/90">
      {product.category}
    </p>

    <button
      type="button"
      onClick={() => onViewDetails(product)}
      className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#0B2A3C] transition hover:bg-teal-50 active:scale-95"
      aria-label={`View details for ${product.name}`}
    >
      View Details
    </button>
  </div>
</div>


);
}

export default ProductCard;
