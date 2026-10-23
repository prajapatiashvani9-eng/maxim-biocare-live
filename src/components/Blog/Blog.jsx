import BlogContent from "./BlogContent";
import BlogImage from "./BlogImage";

const Blog = () => {
return ( <section
   id="blog"
   className="py-28 bg-slate-950 text-white overflow-hidden"
 > <div className="max-w-7xl mx-auto px-6 lg:px-10"> <div className="grid lg:grid-cols-2 gap-16 items-center">


      {/* Blog Content */}
      <BlogContent />

      {/* Blog Image */}
      <BlogImage />

    </div>
  </div>
</section>


);
};

export default Blog;
