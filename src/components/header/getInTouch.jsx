import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GetInTouch = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/contact")}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-950 sm:px-6 sm:text-base"
    >
      Get in Touch
      <ArrowUpRight size={18} />
    </button>
  );
};

export default GetInTouch;