import { siteImages } from "../../data/siteImages";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      <img
        src={siteImages.hero}
        alt="Pharmaceutical manufacturing"
        className="h-full w-full scale-105 object-cover animate-slowZoom"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-transparent" />
    </div>
  );
};

export default HeroBackground;