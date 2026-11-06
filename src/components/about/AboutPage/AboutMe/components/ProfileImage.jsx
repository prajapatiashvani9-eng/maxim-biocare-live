import { useState } from "react";

const ProfileImage = ({ src, name, initials }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[390px] overflow-hidden rounded-[2rem] bg-slate-200">

      {!imageError ? (
        <img
          src={src}
          alt={name}
          onError={() => setImageError(true)}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 to-emerald-800">
          <span className="text-7xl font-semibold tracking-wider text-white">
            {initials}
          </span>
        </div>
      )}

      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-xl">

        <p className="font-semibold text-slate-900">
          {name}
        </p>

        <p className="mt-1 text-sm text-emerald-700">
          Director | Maxim Biocare Pvt. Ltd.
        </p>

      </div>

    </div>
  );
};

export default ProfileImage;