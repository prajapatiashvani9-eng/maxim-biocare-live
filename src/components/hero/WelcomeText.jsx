const WelcomeText = () => {
  return (
    <div>
      {/* Welcome Badge */}
      <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs text-white backdrop-blur-md sm:mb-6 sm:px-4 sm:text-sm animate-fadeUp">
        <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400" />

        <span>Advancing Healthcare Through Innovation</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl font-semibold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fadeUp">
        Better Healthcare.
        <span className="block text-emerald-400">
          Better Life.
        </span>
      </h1>

      <div className="mt-6 flex items-center gap-3 animate-fadeUp delay-100">
        <span className="h-1 w-12 sm:w-16 rounded-full bg-emerald-400" />

        <span className="text-xs sm:text-sm font-medium tracking-wide text-emerald-200">
          QUALITY • INNOVATION • CARE
        </span>
      </div>

      {/* Description */}
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg lg:text-xl animate-fadeUp">
        Maxim Biocare is committed to delivering quality-driven
        pharmaceutical solutions that contribute to healthier lives
        and a better tomorrow.
      </p>
    </div>
  );
};

export default WelcomeText;