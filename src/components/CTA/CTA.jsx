import CTAContent from "./CTAContent";
import CTAButton from "./CTAButton";

const CTA = () => {
  return (
    <section id="contact" className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-[2.5rem] bg-emerald-600 px-8 py-16 md:px-16">

          {/* Background Effect */}
          <div className="absolute w-96 h-96 rounded-full bg-white/10 blur-3xl -right-20 -top-40" />

          {/* CTA Content */}
          <CTAContent />

          {/* CTA Button */}
          <div className="relative">
            <CTAButton />
          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;