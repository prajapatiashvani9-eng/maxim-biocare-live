const SectionHeading = ({ label, title, description }) => {
  return (
    <div className="max-w-3xl">

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 sm:text-sm">
        {label}
      </p>

      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-600">
          {description}
        </p>
      )}

    </div>
  );
};

export default SectionHeading;