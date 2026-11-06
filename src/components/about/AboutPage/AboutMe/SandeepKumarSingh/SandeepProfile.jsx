import {
  Award,
  BriefcaseBusiness,
  HeartPulse,
  Building2,
  Stethoscope,
  GraduationCap,
  CalendarDays,
} from "lucide-react";

import Reveal from "../components/Reveal";
import ProfileImage from "../components/ProfileImage";
import SectionHeading from "../components/SectionHeading";
import ExperienceTimeline from "../components/ExperienceTimeline";

const SandeepProfile = () => {

  const experiences = [
    {
      period: "June 2024 – Present",
      title: "Director",
      company: "Maxim Biocare Pvt. Ltd.",
      description:
        "Leading strategic operations, commercial correspondence and market expansion initiatives.",
    },
    {
      period: "April 2017 – December 2023",
      title: "Director",
      company: "Velnex Life Sciences",
      description:
        "Guided company operations, strategic direction and core administrative workflows.",
    },
    {
      period: "18 Years of Experience",
      title: "Pharmaceutical Industry",
      company:
        "Intas Pharmaceuticals, Larenon, IPCA Laboratories and Mexatô Pharmaceuticals",
      description:
        "Extensive experience across management, marketing and pharmaceutical operations.",
    },
    {
      period: "2008",
      title: "Physiotherapist",
      company: "Parel Orthopaedic Hospital, Mumbai",
    },
    {
      period: "2007 – 2008",
      title: "Assistant Physiotherapist",
      company: "Mangal Anand Hospital, Chembur",
    },
  ];

  const clinicalAttachments = [
    "Tejas Clinic, Chembur – Current Clinical Attachment",
    "Surana Sethia Hospital, Chembur",
    "Savla Hospital, Chembur",
    "Glazy Multi-Specialty Hospital, Chembur",
    "Sattvik Hospital, Chembur",
  ];

  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

      <div className="mx-auto max-w-7xl">

        {/* Profile Header */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          <Reveal>
            <ProfileImage
              src="/images/sandeep-kumar-singh.jpg"
              name="Sandeep Kumar Singh"
              initials="SK"
            />
          </Reveal>

          <Reveal delay={150}>

            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              <Award size={17} />
              Leadership & Experience
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Sandeep Kumar
              <span className="block text-emerald-600">
                Singh
              </span>
            </h2>

            <p className="mt-5 text-lg font-semibold text-slate-700">
              Director | Healthcare & Pharmaceutical Professional
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Sandeep Kumar Singh is a healthcare and pharmaceutical
              professional with a unique blend of clinical expertise
              as a Physiotherapist and extensive corporate leadership
              experience in the pharmaceutical sector.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              With nearly two decades of combined industry insight,
              he brings experience in operational excellence,
              strategic management and patient care dedication.
              He currently serves as Director at Maxim Biocare Pvt. Ltd.
            </p>

            {/* Highlights */}

            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-slate-50 p-5">
                <BriefcaseBusiness className="text-emerald-600" size={23} />

                <p className="mt-3 text-2xl font-bold text-slate-900">
                  18+
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Years in Pharma Sector
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <HeartPulse className="text-emerald-600" size={23} />

                <p className="mt-3 text-2xl font-bold text-slate-900">
                  BPT
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Physiotherapy
                </p>
              </div>

              <div className="col-span-2 rounded-2xl bg-slate-50 p-5 sm:col-span-1">
                <Building2 className="text-emerald-600" size={23} />

                <p className="mt-3 text-2xl font-bold text-slate-900">
                  Director
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Maxim Biocare
                </p>
              </div>

            </div>

          </Reveal>

        </div>

        {/* Professional Experience */}

        <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:gap-20">

          <Reveal>

            <SectionHeading
              label="Professional Journey"
              title="Pharmaceutical Leadership & Experience"
              description="A professional journey spanning pharmaceutical management, strategic operations and corporate leadership."
            />

            <ExperienceTimeline items={experiences} />

          </Reveal>

          {/* Clinical Background */}

          <Reveal delay={150}>

            <div className="rounded-[2rem] bg-slate-950 p-7 text-white sm:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15">
                <Stethoscope size={27} className="text-emerald-400" />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Clinical Background
              </p>

              <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Physiotherapy & Patient Care
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Alongside pharmaceutical leadership, Sandeep has
                clinical experience in physiotherapy and hospital
                attachments.
              </p>

              <div className="mt-8 space-y-4">

                {clinicalAttachments.map((item, index) => (
                  <div key={item} className="flex items-start gap-3">

                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-bold text-emerald-400">
                      {index + 1}
                    </span>

                    <p className="text-sm leading-6 text-white/75">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </Reveal>

        </div>

        {/* Education */}

        <Reveal className="mt-20">

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50">

            <div className="grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[auto_1fr] lg:p-12">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
                <GraduationCap size={32} className="text-emerald-700" />
              </div>

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                  Education & Credentials
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Bachelor of Physiotherapy (BPT)
                </h3>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  Sam Higginbottom University of Agriculture,
                  Technology and Sciences (formerly Allahabad
                  Agricultural Institute – Deemed University).
                </p>

                <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  <CalendarDays size={17} />
                  Completed in 2007
                </p>

              </div>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  );
};

export default SandeepProfile;