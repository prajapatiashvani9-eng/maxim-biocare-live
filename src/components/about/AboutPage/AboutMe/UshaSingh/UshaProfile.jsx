import {
  Award,
  Target,
  Users,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

import Reveal from "../components/Reveal";
import ProfileImage from "../components/ProfileImage";
import SectionHeading from "../components/SectionHeading";

const UshaProfile = () => {

  const responsibilities = [
    {
      icon: Target,
      title: "Strategic Direction",
      description:
        "Guiding the company's core operations and strategic path.",
    },
    {
      icon: Users,
      title: "Team Building",
      description:
        "Encouraging a collaborative and effective working environment.",
    },
    {
      icon: TrendingUp,
      title: "Operational Efficiency",
      description:
        "Focusing on efficient operations and sustainable company growth.",
    },
    {
      icon: ShieldCheck,
      title: "Healthcare Standards",
      description:
        "Maintaining high-quality pharmaceutical standards and dependable healthcare solutions.",
    },
  ];

  return (
    <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

      <div className="mx-auto max-w-7xl">

        {/* Profile Header */}

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          <Reveal>

            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              <Award size={17} />
              Leadership & Vision
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Usha
              <span className="block text-emerald-600">
                Singh
              </span>
            </h2>

            <p className="mt-5 text-lg font-semibold text-slate-700">
              Director | Maxim Biocare Pvt. Ltd.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Usha Singh serves as the Director of Maxim Biocare
              Pvt. Ltd. She is a visionary leader who has been
              central to the company's growth and foundational success.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              With a strong commitment to healthcare excellence,
              she guides the company's core operations and strategic
              direction. Her practical leadership approach focuses
              on operational efficiency, team building and maintaining
              high-quality pharmaceutical standards.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Under her guidance, Maxim Biocare continues to expand
              its reach and deliver reliable healthcare solutions
              to communities.
            </p>

          </Reveal>

          <Reveal delay={150}>

            <ProfileImage
              src="/images/usha-singh.jpg"
              name="Usha Singh"
              initials="US"
            />

          </Reveal>

        </div>

        {/* Responsibilities */}

        <div className="mt-24">

          <Reveal>

            <SectionHeading
              label="Leadership Approach"
              title="Building a Stronger Healthcare Future"
              description="A leadership approach centred on operational excellence, people and quality."
            />

          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {responsibilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 100}>

                  <article className="group h-full rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-xl">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 transition-colors duration-300 group-hover:bg-emerald-500">

                      <Icon
                        size={26}
                        className="text-emerald-600 transition-colors group-hover:text-white"
                      />

                    </div>

                    <h3 className="mt-7 text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>

                  </article>

                </Reveal>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default UshaProfile;