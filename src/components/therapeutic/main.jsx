import { therapeuticAreas } from "../../data/siteData";
import TherapeuticHeader from "./TherapeuticHeader";
import TherapeuticCard from "./TherapeuticCard";

const TherapeuticAreas = () => {
  return (
    <section
      id="therapeutic"
      className="bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <TherapeuticHeader />

        {/* Therapeutic Area Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {therapeuticAreas.map((area, index) => (
            <TherapeuticCard
              key={area.title}
              area={area}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapeuticAreas;
