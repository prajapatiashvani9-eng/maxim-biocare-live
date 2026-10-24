function ProductBrochure({ brochure }) {
  if (!brochure) return null;

  return (
    <div className="px-5 pb-6 sm:px-7">
      <a
        href={brochure}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
      >
        Download Product Brochure ↗
      </a>
    </div>
  );
}

export default ProductBrochure;