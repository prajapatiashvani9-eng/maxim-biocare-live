import { ArrowUpRight } from "lucide-react";

const TherapeuticCard = ({ area, index }) => {
  return (
    <div className="group rounded-3xl border border-slate-100 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-7">
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl transition-colors duration-300 group-hover:bg-emerald-500">
        {area.icon}
      </div>

      {/* Title */}
      <h3 className="mt-6 text-lg font-semibold text-slate-900 sm:mt-7 sm:text-xl">
        {area.title}
      </h3>

      {/* Description */}
      <p className="mt-3 leading-relaxed text-slate-500">
        {area.description}
      </p>

      {/* Bottom Row */}
      <div className="mt-7 flex items-center justify-between">
        <span className="text-xs text-slate-400">
          {String(index + 1).padStart(2, "0")}
        </span>

        <ArrowUpRight
          size={20}
          className="text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-emerald-600"
        />
      </div>
    </div>
  );
};

export default TherapeuticCard;
