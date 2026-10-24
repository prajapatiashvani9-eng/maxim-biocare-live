function ProductIndications({ indications = [] }) {
  if (!indications.length) return null;

  return (
    <section className="px-5 pb-6 sm:px-7">
      <h4 className="mb-3 text-lg font-bold text-slate-900">
        Product Indications
      </h4>

      <ul className="space-y-2">
        {indications.map((indication, index) => (
          <li
            key={`${indication}-${index}`}
            className="text-sm leading-6 text-gray-600"
          >
            <span className="mr-2 text-emerald-600">•</span>
            {indication}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductIndications;