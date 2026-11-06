import AboutUsHero from "./AboutUsHero";
import AboutUsIntro from "./AboutUsIntro";
import CompanyDetails from "./CompanyDetails";
import WhatWeDo from "./WhatWeDo";
import MissionVision from "./MissionVision";

import Reveal from "../AboutMe/components/Reveal";

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <Reveal>
        <AboutUsHero />
      </Reveal>

      {/* About Us Introduction */}
      <Reveal delay={100}>
        <AboutUsIntro />
      </Reveal>

      {/* Company Details */}
      <Reveal delay={100}>
        <CompanyDetails />
      </Reveal>

      {/* What We Do */}
      <WhatWeDo />

      {/* Mission & Vision */}
      <MissionVision />

    </main>
  );
};

export default AboutUs;