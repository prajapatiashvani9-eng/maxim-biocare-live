function ProductComposition({ composition }) {
  if (!composition) return null;

  return (
    <section className="px-5 pb-6 sm:px-7">
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
        <h4 className="text-base font-bold text-slate-900">
          Composition
        </h4>

        <p className="mt-3 text-sm leading-7 text-gray-700">
          {composition}
        </p>
      </div>
    </section>
  );
}

export default ProductComposition;