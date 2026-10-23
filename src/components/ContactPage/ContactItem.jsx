const ContactItem = ({ icon: Icon, title, value, href }) => {
  return (
    <div className="flex min-w-0 items-start gap-3 sm:gap-4">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 sm:h-12 sm:w-12 sm:rounded-2xl">
        <Icon size={21} className="text-emerald-400" />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold text-white sm:text-base">
          {title}
        </h3>

        {href ? (
          <a
            href={href}
            className="mt-1 block break-words text-sm leading-relaxed text-white/60 transition hover:text-emerald-400 sm:text-base"
          >
            {value}
          </a>
        ) : (
          <p className="mt-1 break-words text-sm leading-relaxed text-white/60 sm:text-base">
            {value}
          </p>
        )}
      </div>

    </div>
  );
};

export default ContactItem;