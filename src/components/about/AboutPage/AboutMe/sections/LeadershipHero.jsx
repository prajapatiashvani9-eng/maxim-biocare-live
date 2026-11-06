import Reveal from "../components/Reveal";

const LeadershipHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-5 pb-20 pt-16 text-white sm:px-8 sm:pb-24 lg:px-10">

      <div className="pointer-events-none absolute -right-32 -top-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <Reveal className="relative mx-auto max-w-7xl">

        <div className="flex items-center gap-2 text-sm text-white/50">
          <span>Home</span>
          <span>/</span>
          <span>About</span>
          <span>/</span>
          <span className="text-emerald-400">About Me</span>
        </div>

        <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 sm:text-sm">
          The People Behind Maxim Biocare
        </p>

        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Leadership Built on
          <span className="block text-emerald-400">
            Experience & Vision.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
          Meet the leadership behind Maxim Biocare, bringing
          together professional experience, strategic direction
          and a shared commitment to healthcare excellence.
        </p>

      </Reveal>

    </section>
  );
};

export default LeadershipHero;