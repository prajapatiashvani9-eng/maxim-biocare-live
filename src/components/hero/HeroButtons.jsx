import { ArrowRight, Play } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4 animate-fadeUp">
      {/* Explore Products */}
      <a
        href="#products"
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-emerald-400 sm:gap-3 sm:px-7 sm:py-4 sm:text-base"
      >
        Explore Products

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </a>

      {/* Discover Maxim */}
      <a
        href="#about"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:gap-3 sm:px-7 sm:py-4 sm:text-base"
      >
        <Play size={17} />

        Discover Maxim
      </a>
    </div>
  );
};

export default HeroButtons;