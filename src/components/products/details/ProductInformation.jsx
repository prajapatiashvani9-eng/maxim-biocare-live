function ProductInformation({ product }) {
  const details = [
    { label: "Product Type", value: product.type },
    { label: "Category", value: product.category },
    { label: "Dosage Form", value: product.dosageForm },
    { label: "Pack Size", value: product.packSize },
    { label: "Manufacturer", value: product.manufacturer },
    { label: "Marketing Company", value: product.marketingCompany },
    {
      label: "Storage Instructions",
      value: product.storageInstructions,
    },
    {
      label: "Storage Temperature",
      value: product.storageTemperature,
    },
    { label: "Product Code", value: product.productCode },
  ].filter(
    (item) =>
      item.value !== null &&
      item.value !== undefined &&
      item.value !== ""
  );

  if (details.length === 0) return null;

  return (
    <section className="px-5 pb-6 sm:px-7">
      <h4 className="mb-4 text-lg font-bold text-slate-900">
        Product Information
      </h4>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {details.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-gray-100 bg-gray-50 p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {item.label}
            </p>

            <p className="mt-2 break-words text-sm font-medium leading-6 text-slate-800">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductInformation;