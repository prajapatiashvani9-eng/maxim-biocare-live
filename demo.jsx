import { useEffect, useState } from "react";

const ImgSources = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % props.imgSources.length;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [props.imgSources.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Images */}
      {props.imgSources.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat
            transition-transform duration-1000 ease-in-out
            ${
              index === currentIndex
                ? "translate-x-0"
                : index < currentIndex
                ? "-translate-x-full"
                : "translate-x-full"
            }
          `}
          style={{
            backgroundImage: `url(${img.imgSrc})`,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Fixed Text */}
      <div className="relative z-10 flex h-full items-center px-8 md:px-16">
        <div className="max-w-xl text-white">
          <p className="mb-3 text-lg font-medium">
            Welcome to
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            My App
          </h1>

          <p className="mt-5 text-base md:text-lg">
            This is my website. Welcome to my application.
            Explore our services and discover something amazing.
          </p>

          <button className="mt-6 rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200">
            Explore More
          </button>
        </div>
      </div>

    </section>
  );
};

export default ImgSources;