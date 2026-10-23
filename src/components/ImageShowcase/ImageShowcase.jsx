import ShowcaseContent from "./ShowcaseContent";
import ShowcaseImages from "./ShowcaseImages";

const ImageShowcase = () => {
return ( 
    <section className="py-24 bg-white overflow-hidden">


      {/* Heading and Description */}
      <ShowcaseContent />

      {/* Moving Image Strip */}
      <ShowcaseImages />

    </section>
    );
};

export default ImageShowcase;
