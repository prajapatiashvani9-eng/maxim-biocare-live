import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div>
      {/* Section Label */}
      <p className="section-label">
        ABOUT MAXIM BIO
      </p>

      {/* Heading */}
      <h2 className="section-title">
        Building a healthier future through
        <span className="text-emerald-600">
          {" "}purposeful innovation.
        </span>
      </h2>

      {/* Description */}
      <p className="body-text">
        Maxim Biocare is a healthcare-focused organization committed
        to bringing quality pharmaceutical solutions to patients and
        healthcare professionals.
      </p>

      <p className="body-text">
        Our approach combines scientific thinking, quality standards
        and a strong understanding of evolving healthcare needs.
        Every initiative is guided by our commitment to create
        meaningful value for patients.
      </p>

      {/* Highlighted Learn More Button */}
      <Link
        to="/about-us"
        className="
          group mt-7 inline-flex items-center gap-3
          rounded-full bg-emerald-600 px-6 py-3
          text-sm font-semibold text-white
          shadow-lg shadow-emerald-600/20
          transition-all duration-300
          hover:-translate-y-1
          hover:bg-emerald-700
          hover:shadow-xl hover:shadow-emerald-600/30
          focus:outline-none focus:ring-4
          focus:ring-emerald-200
        "
      >
        Learn More

        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </Link>
    </div>
  );
};

export default AboutContent;