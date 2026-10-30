import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const AboutUsIntro = () => {
  const highlights = [
    "Pharmaceutical product trade and distribution",
    "Focus on quality and reliability",
    "Healthcare-focused business approach",
  ];

  return (
    <section
      id="company-intro"
      className="scroll-mt-24 overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Image */}
        <div className="relative">

          <div className="overflow-hidden rounded-3xl bg-slate-100 sm:rounded-[2rem]">

            <img
              src="/images/about-lab.jpg"
              alt="Pharmaceutical and healthcare environment"
              loading="lazy"
              className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[450px] lg:h-[520px]"
            />

          </div>

          {/* Image information card */}
          <div className="absolute -bottom-5 right-3 max-w-[260px] rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:right-6 sm:p-6">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
              Our Commitment
            </p>

            <p className="mt-2 text-lg font-semibold text-slate-900">
              Better Healthcare. Better Tomorrow.
            </p>

          </div>

        </div>

        {/* Content */}
        <div className="pt-4 lg:pt-0">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 sm:text-sm">
            Who We Are
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

            Building Trust Through
            <span className="text-emerald-600">
              {" "}Healthcare Solutions.
            </span>

          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">

            Maxim Biocare Private Limited is an Indian private
            limited company incorporated on February 28, 2024,
            and registered in Mumbai, Maharashtra.

          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">

            The company operates in the trade, distribution and
            supply of pharmaceutical, medicinal and allied
            healthcare products. Our business approach emphasizes
            reliability, consistency and long-term relationships
            with customers and business partners.

          </p>

          <div className="mt-7 space-y-4">

            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={21}
                  className="mt-1 shrink-0 text-emerald-500"
                />

                <p className="text-sm leading-6 text-slate-700 sm:text-base">
                  {item}
                </p>
              </div>
            ))}

          </div>

          <a
            href="/#contact"
            className="group mt-8 inline-flex items-center gap-2 font-semibold text-slate-900 transition-colors duration-300 hover:text-emerald-600"
          >
            Connect With Our Team

            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>
    </section>
  );
};

export default AboutUsIntro;