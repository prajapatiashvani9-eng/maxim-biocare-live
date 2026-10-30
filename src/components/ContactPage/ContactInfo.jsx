import { MapPin, Mail, Phone, Clock } from "lucide-react";
import ContactItem from "./ContactItem";

const ContactInfo = () => {
  return (
    <div className="h-full rounded-3xl bg-slate-950 p-6 text-white sm:rounded-[2rem] sm:p-8 lg:p-10">

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 sm:text-sm">
        Get In Touch
      </p>

      <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
        We'd love to hear from you.
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
        Reach out to our team for general enquiries, business
        opportunities or information about our portfolio.
      </p>

      <div className="mt-8 space-y-7 sm:mt-10 sm:space-y-8">

        <ContactItem
          icon={Mail}
          title="Email Us"
          value="info@maximbio.com"
          href="mailto:info@maximbio.com"
        />

        <ContactItem
          icon={Phone}
          title="Call Us"
          value="+91 00000 00000"
          href="tel:+910000000000"
        />

        <ContactItem
          icon={MapPin}
          title="Our Location"
          value="Hanuman Nagar - Jaibhai Marathi School Rd"
        />

        <ContactItem
          icon={Clock}
          title="Business Enquiries"
          value="Contact us by email and our team can assist you."
        />

      </div>

    </div>
  );
};

export default ContactInfo;