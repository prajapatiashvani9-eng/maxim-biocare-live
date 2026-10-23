import { ShieldCheck, Lightbulb, HeartHandshake } from "lucide-react";

const commitments = [
  {
    title: "Quality",
    icon: ShieldCheck,
  },
//   {
//     title: "Innovation",
//     icon: Lightbulb,
//   },
  {
    title: "Care",
    icon: HeartHandshake,
  },
];

const CommitmentCard = () => {
  return (
    <div className="absolute bottom-8 right-6 z-10 hidden w-72 rounded-3xl border border-white/60 bg-white/95 p-6 shadow-2xl backdrop-blur-xl md:block lg:right-10 lg:w-80 lg:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
        What Guides Us
      </p>

      <h2 className="mt-3 text-xl font-semibold text-slate-900">
        Our Commitment
      </h2>

      <div className="mt-5 space-y-4">
        {commitments.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Icon size={22} />
              </div>

              <span className="text-base font-medium text-slate-700">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommitmentCard;