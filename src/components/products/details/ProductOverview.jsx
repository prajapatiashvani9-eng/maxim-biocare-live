function ProductOverview({ product }) {
  const description =
    product.description || product.shortDescription;

  return (
    <div className="grid grid-cols-1 gap-7 p-5 sm:p-7 md:grid-cols-[0.85fr_1.15fr] md:gap-9">
      {/* Product Image */}
      <div className="flex min-h-[240px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50 p-5 sm:min-h-[320px]">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[320px] w-full rounded-xl object-contain"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <p className="text-sm text-gray-500">
            Product image unavailable
          </p>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap gap-2">
          {product.type && (
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase text-emerald-700">
              {product.type}
            </span>
          )}

          {product.category && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              {product.category}
            </span>
          )}
        </div>

        <h3 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
          {product.name}
        </h3>

        {description && (
          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            {description}
          </p>
        )}

        <div className="mt-6 h-1 w-16 rounded-full bg-emerald-500" />

        <p className="mt-4 text-sm leading-6 text-gray-500">
          Contact Maxim Biocare for complete product information.
        </p>
      </div>
    </div>
  );
}

export default ProductOverview;
