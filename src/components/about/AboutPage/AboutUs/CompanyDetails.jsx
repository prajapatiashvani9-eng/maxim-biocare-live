import {
  Building2,
  CalendarDays,
  FileText,
  Wallet,
  MapPin,
  Users,
} from "lucide-react";

const CompanyDetails = () => {
  const statistics = [
    {
      icon: CalendarDays,
      label: "Incorporation Date",
      value: "28 February 2024",
    },
    {
      icon: Building2,
      label: "Company Type",
      value: "Private Limited",
    },
    {
      icon: Wallet,
      label: "Authorized Capital",
      value: "₹15 Lakh",
    },
    {
      icon: Wallet,
      label: "Paid-Up Capital",
      value: "₹2 Lakh",
    },
  ];

  const details = [
    {
      label: "Company Name",
      value: "Maxim Biocare Private Limited",
      icon: Building2,
    },
    {
      label: "Corporate Identification Number",
      value: "U47721MH2024PTC420236",
      icon: FileText,
    },
    {
      label: "Registered Office",
      value:
        "C/O Sandeep K.S., Indira Nagar, Mahul Road, Mumbai, Maharashtra 400074, India",
      icon: MapPin,
    },
    {
      label: "Directors",
      value: "Sandeepkumar Singh Keshavprasad and Usha Singh",
      icon: Users,
    },
  ];

  return (
    <section className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 sm:text-sm">
            Corporate Information
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Company at a Glance
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Key information about Maxim Biocare Private Limited,
            including its incorporation and registered details.
          </p>

        </div>

        {/* Statistics cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 sm:p-7"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 transition-colors duration-300 group-hover:bg-emerald-500">

                  <Icon
                    size={23}
                    className="text-emerald-600 transition-colors duration-300 group-hover:text-white"
                  />

                </div>

                <p className="mt-6 text-sm text-slate-500">
                  {item.label}
                </p>

                <p className="mt-2 text-xl font-semibold text-slate-900">
                  {item.value}
                </p>

              </div>
            );
          })}

        </div>

        {/* Company information */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">

          <div className="border-b border-slate-100 px-6 py-6 sm:px-8">

            <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Registered Company Details
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Corporate information for reference.
            </p>

          </div>

          <div className="divide-y divide-slate-100">

            {details.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="grid grid-cols-1 gap-3 px-6 py-5 transition-colors hover:bg-slate-50 sm:grid-cols-[220px_1fr] sm:gap-6 sm:px-8"
                >

                  <div className="flex items-center gap-3">

                    <Icon
                      size={18}
                      className="shrink-0 text-emerald-600"
                    />

                    <span className="text-sm font-medium text-slate-500">
                      {item.label}
                    </span>

                  </div>

                  <p className="break-words text-sm font-medium leading-6 text-slate-900 sm:text-base">
                    {item.value}
                  </p>

                </div>
              );
            })}

          </div>

          <div className="bg-slate-950 px-6 py-5 sm:px-8">

            <p className="text-xs leading-6 text-white/60 sm:text-sm">
              Company information should be verified against the
              latest Ministry of Corporate Affairs records before
              publication or formal use.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyDetails;