import { images } from "./showcaseData";

const ShowcaseImages = () => {
return ( 
    <div className="relative">

      <div className="flex gap-5 w-max animate-marquee">

        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="
              w-[280px]
              md:w-[360px]
              h-[240px]
              md:h-[300px]
              rounded-[2rem]
              overflow-hidden
              shrink-0
            "
          >
            <img
              src={image}
              alt={`Maxim Biocare healthcare ${index % images.length + 1}`}
              loading="lazy"
              className="
                w-full
                h-full
                object-cover
                hover:scale-110
                transition-transform
                duration-700
              "
            />
          </div>
        ))}

      </div>

    </div>
);
};

export default ShowcaseImages;
