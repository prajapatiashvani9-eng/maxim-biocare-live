import { ArrowDown, ArrowUpRight, ShieldCheck } from "lucide-react";

const AboutUsHero = () => {
  const scrollToCompany = () => {
    document.getElementById("company-intro")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 px-5 pb-20 pt-32 text-white sm:px-8 sm:pb-24 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 -top-20 -z-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-white/50">
          <span>Home</span>
          <span>/</span>
          <span className="text-emerald-400">About Us</span>
        </div>

        {/* Label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">

          <span className="h-2 w-2 rounded-full bg-emerald-400" />

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 sm:text-sm">
            About Maxim Biocare
          </span>

        </div>

        {/* Heading */}
        <h1 className="mt-7 max-w-5xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">

          Advancing Healthcare
          <br />

          Through
          <span className="text-emerald-400">
            {" "}Quality & Care.
          </span>

        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg sm:leading-8">

          Discover Maxim Biocare Private Limited, an Indian
          pharmaceutical enterprise focused on the trade,
          distribution and supply of pharmaceutical and
          healthcare products.

        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-wrap items-center gap-4">

          <button
            type="button"
            onClick={scrollToCompany}
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-400 sm:px-7 sm:text-base"
          >
            Discover Our Company

            <ArrowDown
              size={18}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </button>

          <a
            href="/#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400 sm:px-7 sm:text-base"
          >
            Get In Touch

            <ArrowUpRight size={18} />
          </a>

        </div>

        {/* Company highlights */}
        <div className="mt-16 grid max-w-3xl grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-6">

          <div className="flex items-start gap-3">
            <ShieldCheck
              size={22}
              className="mt-1 shrink-0 text-emerald-400"
            />

            <div>
              <p className="font-semibold text-white">
                Quality Focus
              </p>

              <p className="mt-1 text-sm text-white/50">
                A commitment to quality-driven healthcare.
              </p>
            </div>
          </div>

          <div>
            <p className="text-2xl font-semibold text-emerald-400">
              2024
            </p>

            <p className="mt-1 text-sm text-white/50">
              Year of Incorporation
            </p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-emerald-400">
              Mumbai
            </p>

            <p className="mt-1 text-sm text-white/50">
              Maharashtra, India
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUsHero;