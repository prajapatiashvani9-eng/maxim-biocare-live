const BlogContent = () => {
return ( 
    <div> 
        <p className="text-emerald-400 text-sm font-semibold tracking-[0.2em]">
        HEALTHCARE BLOG </p>
    
    
      <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
        Knowledge for
        <span className="text-emerald-400">
          {" "}better healthcare.
        </span>
      </h2>
    
      <p className="mt-6 text-white/60 text-lg leading-relaxed">
        Explore informative articles about healthcare awareness,
        medicine safety and wellness. Our goal is to make
        healthcare information easier to understand.
      </p>
    
      <div className="grid grid-cols-2 gap-8 mt-10">
        <div>
          <div className="text-2xl md:text-3xl font-semibold">
            Health
          </div>
    
          <p className="mt-2 text-white/50 text-sm">
            Learn about healthcare and wellness.
          </p>
        </div>
    
        <div>
          <div className="text-2xl md:text-3xl font-semibold">
            Awareness
          </div>
    
          <p className="mt-2 text-white/50 text-sm">
            Learn about medicine safety and health awareness.
          </p>
        </div>
      </div>
    </div>


);
};

export default BlogContent;
