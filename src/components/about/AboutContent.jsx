import { ArrowUpRight } from "lucide-react";

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

      {/* Learn More Button */}
      <a
        href="#contact"
        className="mt-7 inline-flex items-center gap-2 font-semibold text-slate-900 transition-colors duration-300 hover:text-emerald-600"
      >
        Learn More

        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </div>
  );
};

export default AboutContent;