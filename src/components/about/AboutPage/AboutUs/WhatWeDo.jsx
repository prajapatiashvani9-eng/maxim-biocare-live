import {
  Pill,
  Stethoscope,
  Truck,
  PackageCheck,
  ArrowUpRight,
} from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: Pill,
      number: "01",
      title: "Pharmaceutical Products",
      description:
        "Trade and supply of pharmaceutical formulations, including tablets and capsules.",
    },
    {
      icon: Stethoscope,
      number: "02",
      title: "Healthcare Products",
      description:
        "A business focus on medicinal and allied healthcare products for customers and partners.",
    },
    {
      icon: Truck,
      number: "03",
      title: "Trade & Distribution",
      description:
        "Supporting pharmaceutical product distribution and business relationships.",
    },
    {
      icon: PackageCheck,
      number: "04",
      title: "Product Portfolio",
      description:
        "A range of pharmaceutical products and formulations aligned with the company's portfolio.",
    },
  ];

  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div className="max-w-2xl">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 sm:text-sm">
              What We Do
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Supporting Healthcare
              <span className="text-emerald-600">
                {" "}Through Reliable Supply.
              </span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base">
            Our business focuses on pharmaceutical trade,
            distribution and supply, with an emphasis on
            consistency and dependable business relationships.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-950/5 sm:p-7"
              >

                {/* Number */}
                <div className="flex items-center justify-between">

                  <span className="text-sm font-semibold text-slate-300 transition-colors group-hover:text-emerald-500">
                    {service.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 transition-colors duration-300 group-hover:bg-emerald-500">

                    <Icon
                      size={23}
                      className="text-emerald-600 transition-colors duration-300 group-hover:text-white"
                    />

                  </div>

                </div>

                {/* Content */}
                <h3 className="mt-8 text-xl font-semibold leading-snug text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Decorative arrow */}
                <div className="mt-7 flex justify-end">

                  <ArrowUpRight
                    size={20}
                    className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-600"
                  />

                </div>

              </article>
            );
          })}

        </div>

        {/* Product examples */}
        <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white sm:p-8 lg:p-10">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Product Portfolio
          </p>

          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Pharmaceutical Formulations
          </h3>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60 sm:text-base">
            The client-provided portfolio includes product names
            such as Manomax, Platehenz, Pymofy and Cefmaxim, along
            with selected formulations. Product descriptions and
            therapeutic classifications should be confirmed with
            the company before publication.
          </p>

        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;