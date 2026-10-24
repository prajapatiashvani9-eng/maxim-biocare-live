function ModalFooter({ onClose }) {
  return (
    <div className="border-t border-gray-100 bg-gray-50 px-5 py-4 sm:px-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs leading-5 text-gray-500">
          Product information should be verified against official
          company documentation.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="min-h-11 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ModalFooter;