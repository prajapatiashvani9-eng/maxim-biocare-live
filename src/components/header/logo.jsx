import logo from "../../assets/logo.jpg";

const Logo = () => {
  return (
    <a
      href="#"
      className="flex items-center gap-2 shrink-0"
      aria-label="Maxim Biocare Home"
    >
      <img
        src={logo}
        alt="Maxim Biocare Logo"
        className="h-9 w-9 sm:h-16 sm:w-16 object-contain"
      />

      <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
        MAXIM<span className="text-emerald-600">BIOCARE</span>
      </span>
    </a>
  );
};

export default Logo;