import { ArrowDown } from "lucide-react";

const ContactHero = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 px-5 pb-16 pt-28 text-white sm:px-8 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24 lg:pt-40">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

      <div className="relative mx-auto max-w-7xl">

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 sm:text-sm">
          Contact Maxim Biocare
        </p>

        <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Let's start a conversation about
          <span className="text-emerald-400">
            {" "}better healthcare.
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:mt-6 sm:text-lg">
          Have a business enquiry or want to learn more about
          Maxim Biocare? Connect with our team or send us a message.
        </p>

        <button
          type="button"
          onClick={scrollToForm}
          className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-emerald-600 sm:mt-8 sm:px-7 sm:text-base"
        >
          Send an Enquiry
          <ArrowDown size={18} />
        </button>

      </div>
    </section>
  );
};

export default ContactHero;