import { fallbackFor } from "../utils/fallbackGradient";

function ProductCard({ product }) {
  return (
    <div className="group relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500">

      {/* Background photo (or fallback gradient if no photo yet) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
        style={{
          backgroundImage: product.image
            ? `url(${product.image})`
            : fallbackFor(product.category),
        }}
      />

      {/* Dark gradient so text stays readable over any photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(9,25,36,0.95) 0%, rgba(9,25,36,0.55) 45%, rgba(9,25,36,0.05) 75%)",
        }}
      />

      {/* Type badge — top */}
      <div className="absolute top-4 left-4">
        <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-white/90 bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
          {product.type}
        </span>
      </div>

      {/* Name + Category + Button — bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-base font-bold text-white leading-snug mb-1">
          {product.name}
        </h3>

        <p className="text-[11px] font-medium uppercase tracking-wide text-teal-200/90 mb-3">
          {product.category}
        </p>

        <button
          onClick={() => {
            // TODO: hook this up once we decide what it should do
            console.log("View details clicked:", product.name);
          }}
          className="text-xs font-semibold text-[#0B2A3C] bg-white px-3 py-1.5 rounded-lg hover:bg-teal-50 active:scale-95 transition"
        >
          View Details
        </button>
      </div>

    </div>
  );
}

export default ProductCard;