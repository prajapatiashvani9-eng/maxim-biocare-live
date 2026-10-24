function ModalHeader({ onClose }) {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-7">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
          Maxim Biocare
        </p>

        <h2
          id="product-modal-title"
          className="mt-1 text-lg font-bold text-slate-900 sm:text-xl"
        >
          Product Details
        </h2>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close product details"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-600 transition hover:bg-gray-200"
      >
        &times;
      </button>
    </div>
  );
}

export default ModalHeader;