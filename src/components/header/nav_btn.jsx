import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

const NavBtn = ({ open, setOpen }) => {
  const [therapeuticOpen, setTherapeuticOpen] = useState(false);
  const [showHome, setShowHome] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Check whether the current page is Products
  const isProductsPage = location.pathname === "/products";

  const closeMenu = () => {
    setOpen(false);
    setTherapeuticOpen(false);
  };

  // Show Home after scrolling, or always on Products page
  useEffect(() => {
    const handleScroll = () => {
      setShowHome(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // Navigate to a section on the home page
  const goToSection = (event, sectionId) => {
    event.preventDefault();
    closeMenu();

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
      setTimeout(scrollToSection, 300);
    } else {
      scrollToSection();
    }
  };

  // Return to the top of the home page
  const goHome = (event) => {
    event.preventDefault();
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 300);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const therapeuticLinks = [
    "Cardiology",
    "Critical Care",
    "Neurology",
    "Respiratory",
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-4 xl:gap-7 2xl:gap-8">

        {/* Home: always visible on Products page */}
        {(isProductsPage || showHome) && (
          <a
            href="/"
            onClick={goHome}
            className="nav-link whitespace-nowrap animate-fadeUp"
          >
            Home
          </a>
        )}

        {/* Hide other navigation links on Products page */}
        {!isProductsPage && (
          <>
            {/* About Us */}
            <a
              href="#about"
              onClick={(event) => goToSection(event, "about")}
              className="nav-link whitespace-nowrap"
            >
              About
            </a>

            {/* Therapeutic Areas Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="nav-link flex items-center gap-1 whitespace-nowrap"
                aria-haspopup="true"
              >
                Therapeutic Areas

                <ChevronDown
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              <div className="absolute top-full left-0 w-60 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-xl">
                  {therapeuticLinks.map((item) => (
                    <a
                      key={item}
                      href="#therapeutic"
                      onClick={(event) =>
                        goToSection(event, "therapeutic")
                      }
                      className="dropdown-link block"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Research */}
            <a
              href="#blog"
              onClick={(event) => goToSection(event, "blog")}
              className="nav-link whitespace-nowrap"
            >
              Blog
            </a>

            {/* Contact */}
            <a
              href="#contact"
              onClick={(event) => goToSection(event, "contact")}
              className="nav-link whitespace-nowrap"
            >
              Contact
            </a>
          </>
        )}
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="lg:hidden flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-900 transition-colors hover:bg-slate-100"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        {open ? <X size={25} /> : <Menu size={25} />}
      </button>

      {/* Mobile Navigation */}
      {open && (
        <nav
          id="mobile-navigation"
          className="absolute top-full left-0 right-0 max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-slate-100 bg-white shadow-xl lg:hidden"
        >
          <div className="space-y-1 px-5 py-5 sm:px-8">

            {/* Mobile Home */}
            <a
              href="/"
              onClick={goHome}
              className="mobile-link block py-3"
            >
              Home
            </a>

            {/* Hide remaining mobile links on Products page */}
            {!isProductsPage && (
              <>
                {/* About Us */}
                <a
                  href="#about"
                  onClick={(event) => goToSection(event, "about")}
                  className="mobile-link block py-3"
                >
                  About
                </a>

                {/* Therapeutic Areas */}
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setTherapeuticOpen(!therapeuticOpen)
                    }
                    className="flex w-full items-center justify-between py-3 text-left font-medium text-slate-700 hover:text-emerald-600"
                    aria-expanded={therapeuticOpen}
                  >
                    Therapeutic Areas

                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        therapeuticOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {therapeuticOpen && (
                    <div className="space-y-1 pb-2 pl-4">
                      {therapeuticLinks.map((item) => (
                        <a
                          key={item}
                          href="#therapeutic"
                          onClick={(event) =>
                            goToSection(event, "therapeutic")
                          }
                          className="block py-2.5 text-sm text-slate-600 hover:text-emerald-600"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Research */}
                <a
                  href="#blog"
                  onClick={(event) => goToSection(event, "blog")}
                  className="mobile-link block py-3"
                >
                  Blog
                </a>

                {/* Contact */}
                <a
                  href="#contact"
                  onClick={(event) => goToSection(event, "contact")}
                  className="mobile-link block py-3"
                >
                  Contact
                </a>

                {/* Products Button */}
                <Link
                  to="/products"
                  onClick={closeMenu}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-emerald-500 bg-white px-5 py-3 font-semibold text-emerald-700 transition-all hover:bg-emerald-500 hover:text-white"
                >
                  Products
                  <ArrowUpRight size={18} />
                </Link>

                {/* Get in Touch */}
                <a
                  href="#contact"
                  onClick={(event) => goToSection(event, "contact")}
                  className="mt-3 flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
                >
                  Get in Touch
                </a>
              </>
            )}
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBtn;