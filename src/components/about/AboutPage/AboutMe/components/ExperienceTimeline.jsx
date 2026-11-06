import Reveal from "./Reveal";

const ExperienceTimeline = ({ items }) => {
  return (
    <div className="relative mt-9 space-y-8 border-l-2 border-emerald-100 pl-7">

      {items.map((item, index) => (
        <Reveal key={item.title + item.period} delay={index * 100}>

          <div className="relative">

            <span className="absolute -left-[35px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-4 border-white bg-emerald-500 shadow-md" />

            <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              {item.period}
            </p>

            <h4 className="mt-2 text-lg font-semibold text-slate-900">
              {item.title}
            </h4>

            <p className="mt-1 text-sm font-medium text-slate-500">
              {item.company}
            </p>

            {item.description && (
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            )}

          </div>

        </Reveal>
      ))}

    </div>
  );
};

export default ExperienceTimeline;