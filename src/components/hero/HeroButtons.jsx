import { ArrowRight, Play } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const HeroButtons = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Same navigation logic as Navbar About button
  const goToSection = (event, sectionId) => {
    event.preventDefault();

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToSection, 400);
    } else {
      scrollToSection();
    }
  };

  return (
    <div className="mt-7 flex flex-wrap items-center gap-3 animate-fadeUp sm:mt-8 sm:gap-4">

      {/* Explore Products */}
      <a
        href="/products"
        onClick={(event) => {
          event.preventDefault();
          navigate("/products");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-emerald-400 sm:gap-3 sm:px-7 sm:py-4 sm:text-base"
      >
        Explore Products

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </a>

      {/* Discover Maxim - Scroll to About */}
      <a
        href="/#about"
        onClick={(event) => goToSection(event, "about")}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:gap-3 sm:px-7 sm:py-4 sm:text-base"
      >
        <Play size={17} />

        Discover Maxim
      </a>

    </div>
  );
};

export default HeroButtons;