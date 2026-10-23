import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-16">
          {/* Left Side: Image */}
          <AboutImage />

          {/* Right Side: Content */}
          <AboutContent />
        </div>
      </div>
    </section>
  );
};

export default About; 