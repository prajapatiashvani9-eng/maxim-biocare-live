import HeroBackground from "./HeroBackground";
import WelcomeText from "./WelcomeText";
import HeroButtons from "./HeroButtons";
import CommitmentCard from "./CommitmentCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background Image */}
      <HeroBackground />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 pb-12 pt-28 sm:px-8 sm:pt-28 lg:px-10 lg:pt-24 lg:pb-16">
        <div className="w-full max-w-3xl">
          <WelcomeText />
          <HeroButtons />
        </div>
      </div>

      {/* Commitment Card */}
      <CommitmentCard />
    </section>
  );
};

export default Hero;