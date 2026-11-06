import { Link, useLocation } from "react-router-dom";

const AboutTabs = () => {
  const location = useLocation();

  const tabs = [
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "About Me",
      path: "/about-me",
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-white px-5 pt-24 pb-5 sm:px-8">
      <div className="mx-auto flex max-w-7xl justify-center">

        <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1.5 shadow-sm">

          {tabs.map((tab) => {
            const isActive = location.pathname === tab.path;

            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={`
                  rounded-full px-6 py-3 text-sm font-semibold
                  transition-all duration-300 sm:px-9 sm:text-base
                  ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                      : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                  }
                `}
              >
                {tab.name}
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default AboutTabs;