import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-slate-50">

      <ContactHero />

      {/* Existing Contact Section */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 md:gap-8 lg:grid-cols-2 lg:gap-10">

          <ContactInfo />

          <ContactForm />

        </div>
      </section>

      {/* Google Map */}
      <ContactMap />

    </main>
  );
};

export default ContactPage;