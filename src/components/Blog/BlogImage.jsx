const BlogImage = () => {
return ( 
    <div className="relative"> <div className="rounded-[2rem] overflow-hidden"> <img
           src="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg"
           alt="Healthcare awareness"
           loading="lazy"
           className="w-full h-[350px] md:h-[500px] object-cover"
         /> 
    </div>
    
    
      <div className="absolute -bottom-7 left-4 md:-left-5 bg-white text-slate-900 rounded-3xl p-6 shadow-2xl">
        <p className="text-xs uppercase tracking-widest text-slate-400">
          Featured Blog
        </p>
    
        <p className="mt-2 font-semibold">
          Making Healthcare Easier to Understand
        </p>
      </div>
    </div>

);
};

export default BlogImage;

