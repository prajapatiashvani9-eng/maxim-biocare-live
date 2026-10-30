import { MapPin, ExternalLink } from "lucide-react";

const ContactMap = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.45546118352647!2d73.14414147503462!3d19.226303350695808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79436279d8975%3A0x39caf2c554266e5c!2sHanuman%20Nagar%20-%20Jaibhai%20Marathi%20School%20Rd!5e0!3m2!1sen!2sin!4v1792982346408!5m2!1sen!2sin";

  const directionsUrl =
    "https://www.google.com/maps/place/Hanuman+Nagar+-+Jaibhai+Marathi+School+Rd/@19.22634,73.144227,20z/data=!4m6!3m5!1s0x3be79436279d8975:0x39caf2c554266e5c!8m2!3d19.2263404!4d73.1442271!16s%2Fg%2F1ptwj2g76?hl=en&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section className="px-5 pb-12 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 sm:text-sm">
            Our Location
          </p>

          <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Find Us on the Map
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Explore our location and find your way to Maxim Biocare.
          </p>
        </div>

        {/* Map Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl sm:rounded-[2rem]">

          {/* Map Header */}
          <div className="flex flex-col gap-4 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                <MapPin size={21} className="text-emerald-600" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Maxim Biocare
                </h3>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Our Office Location
                </p>
              </div>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-slate-950 sm:self-auto"
            >
              Get Directions
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Responsive Map */}
          <div className="group relative h-[300px] w-full overflow-hidden sm:h-[380px] lg:h-[450px]">

            <iframe
              title="Maxim Biocare Office Location"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="
                absolute inset-0
                h-full w-full
                grayscale-0
                md:grayscale
                md:transition-[filter]
                md:duration-700
                md:ease-in-out
                md:group-hover:grayscale-0
              "
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;