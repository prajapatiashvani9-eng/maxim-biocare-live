import { Link, useLocation, useNavigate } from "react-router-dom";

const FooterCompany = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const therapeuticLinks = [
    "Cardiology",
    "Critical Care",
    "Neurology",
    "Respiratory",
  ];

  // Navigate to homepage sections
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

  // Go to homepage top
  const goHome = (event) => {
    event.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 400);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <h4 className="mb-5 font-semibold">Company</h4>

      <div className="flex flex-col space-y-3 text-white/50">

        {/* Home */}
        <a
          href="/"
          onClick={goHome}
          className="footer-link"
        >
          Home
        </a>

        {/* About */}
        <a
          href="/#about"
          onClick={(event) => goToSection(event, "about")}
          className="footer-link"
        >
          About
        </a>

        {/* Therapeutic Areas */}
        {/* <p className="pt-1 text-sm font-semibold text-white/80">
          Therapeutic Areas
        </p> */}

        {/* {therapeuticLinks.map((item) => (
          <a
            key={item}
            href="/#therapeutic"
            onClick={(event) =>
              goToSection(event, "therapeutic")
            }
            className="footer-link pl-3"
          >
            {item}
          </a>
        ))} */}

        {/* Blog */}
        <a
          href="/#blog"
          onClick={(event) => goToSection(event, "blog")}
          className="footer-link"
        >
          Blog
        </a>

        {/* Contact */}
        {/* <a
          href="/#contact"
          onClick={(event) => goToSection(event, "contact")}
          className="footer-link"
        >
          Contact
        </a> */}

        {/* Products */}
        <Link
          to="/products"
          className="footer-link"
        >
          Products
        </Link>

        {/* Get in Touch */}
        <a
          href="/#contact"
          onClick={(event) => goToSection(event, "contact")}
          className="footer-link"
        >
          Get in Touch
        </a>

      </div>
    </div>
  );
};
export default FooterCompany;