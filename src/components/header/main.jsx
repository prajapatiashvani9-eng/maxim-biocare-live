import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Logo from "./logo";
import NavBtn from "./nav_btn";
import GetInTouch from "./getInTouch";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <NavBtn open={open} setOpen={setOpen} />

        {/* Desktop Action Buttons */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-500 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:bg-emerald-500 hover:text-white"
          >
            Products

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <GetInTouch />
        </div>
      </div>
    </header>
  );
};

export default Header;