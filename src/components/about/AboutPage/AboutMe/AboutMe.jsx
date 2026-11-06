import LeadershipHero from "./sections/LeadershipHero";

import SandeepProfile from "./SandeepKumarSingh/SandeepProfile";

import UshaProfile from "./UshaSingh/UshaProfile";

import LeadershipCTA from "./sections/LeadershipCTA";

const AboutMe = () => {
  return (
    <main className="overflow-hidden bg-white">

      {/* Leadership Hero */}
      <LeadershipHero />

      {/* First Director */}
      <SandeepProfile />

      {/* Second Director */}
      <UshaProfile />

      {/* Closing Section */}
      <LeadershipCTA />

    </main>
  );
};

export default AboutMe;