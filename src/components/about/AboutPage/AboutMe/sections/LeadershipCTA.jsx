import { ArrowUpRight, Building2 } from "lucide-react";
import Reveal from "../components/Reveal";

const LeadershipCTA = () => {
  return (
    <section className="bg-slate-950 px-5 py-20 text-center text-white sm:px-8 lg:py-24">

      <Reveal className="mx-auto max-w-3xl">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15">
          <Building2 size={27} className="text-emerald-400" />
        </div>

        <h2 className="mt-7 text-3xl font-semibold sm:text-4xl">
          Together, Moving Healthcare Forward.
        </h2>

        <p className="mt-5 text-base leading-8 text-white/60">
          At Maxim Biocare, leadership is driven by experience,
          responsibility and a shared commitment to reliable
          healthcare solutions.
        </p>

        <a
          href="/#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400"
        >
          Connect With Us
          <ArrowUpRight size={18} />
        </a>

      </Reveal>

    </section>
  );
};

export default LeadershipCTA;