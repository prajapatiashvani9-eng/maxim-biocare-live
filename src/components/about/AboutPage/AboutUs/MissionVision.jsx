import {
  Target,
  Eye,
  Lightbulb,
  HeartHandshake,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const MissionVision = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Innovation & Quality",
      description:
        "Continuously improving our portfolio and business practices with a focus on quality and applicable standards.",
    },
    {
      icon: HeartHandshake,
      title: "Accessibility",
      description:
        "Supporting access to pharmaceutical and healthcare products through dependable business relationships.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      description:
        "Building trusted partnerships through transparency, consistency and ethical business practices.",
    },
  ];

  return (
    <section className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 sm:text-sm">
            Our Purpose
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Guided by Purpose.
            <span className="text-emerald-600">
              {" "}Driven by Care.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Our mission and vision express the principles that
            guide our approach to healthcare and business.
          </p>

        </div>

        {/* Mission and Vision */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Mission */}
          <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 lg:p-10">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">

              <Target
                size={27}
                className="text-emerald-600"
              />

            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Our Mission
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Making Healthcare More Accessible
            </h3>

            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">

              To deliver accessible, reliable and high-standard
              pharmaceutical and medical products to our partners
              and customers, building trust through compliance,
              consistency and dedication.

            </p>

          </article>

          {/* Vision */}
          <article className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-9 lg:p-10">

            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">

                <Eye
                  size={27}
                  className="text-emerald-400"
                />

              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Our Vision
              </p>

              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                A Healthier Future for All
              </h3>

              <p className="mt-5 text-sm leading-8 text-white/65 sm:text-base">

                To become a globally recognized benchmark in
                healthcare by consistently delivering innovative,
                high-quality and affordable pharmaceutical
                solutions that enrich lives and build a healthier
                future for all.

              </p>

            </div>

          </article>

        </div>

        {/* Core pillars */}
        <div className="mt-20">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              What Guides Us
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Our Core Pillars
            </h3>

          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">

            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl sm:p-8"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">

                    <Icon
                      size={23}
                      className="text-emerald-600"
                    />

                  </div>

                  <h4 className="mt-6 text-xl font-semibold text-slate-900">
                    {pillar.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {pillar.description}
                  </p>

                </article>
              );
            })}

          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-500 px-6 py-10 text-center sm:px-10 sm:py-12">

          <h3 className="text-2xl font-semibold text-white sm:text-3xl">
            Let's Build a Healthier Future Together
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
            Connect with our team to learn more about our company,
            products and business opportunities.
          </p>

          <a
            href="/#contact"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-slate-950 hover:text-white"
          >
            Contact Our Team

            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;