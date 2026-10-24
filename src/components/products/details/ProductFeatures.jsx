function ProductFeatures({ features = [] }) {
  if (!features.length) return null;

  return (
    <section className="px-5 pb-6 sm:px-7">
      <h4 className="mb-3 text-lg font-bold text-slate-900">
        Key Features
      </h4>

      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li
            key={`${feature}-${index}`}
            className="flex items-start gap-3 text-sm leading-6 text-gray-600"
          >
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />

            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductFeatures;