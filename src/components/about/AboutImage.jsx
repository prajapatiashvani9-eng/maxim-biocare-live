import { siteImages } from "../../data/siteImages";

const AboutImage = () => {
  return (
    <div className="relative px-2 sm:px-0">
      {/* About Image */}
      <div className="overflow-hidden rounded-[2rem]">
        <img
          src={siteImages.about}
          alt="Maxim Biocare laboratory"
          className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[420px] lg:h-[550px]"
        />
      </div>

      {/* Information Card */}
      <div className="absolute -bottom-6 right-0 max-w-[250px] rounded-3xl bg-white p-5 shadow-2xl sm:-bottom-8 sm:right-4 sm:max-w-xs sm:p-7 lg:right-8">
        <div className="text-3xl font-bold text-emerald-600 sm:text-4xl">
          01
        </div>

        <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
          Patient-focused pharmaceutical innovation.
        </p>
      </div>
    </div>
  );
};

export default AboutImage;