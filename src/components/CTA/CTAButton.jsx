import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTAButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/contact")}
      className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-slate-900 transition-all duration-300 hover:bg-slate-900 hover:text-white"
    >
      Contact Us
      <ArrowRight size={18} />
    </button>
  );
};

export default CTAButton;