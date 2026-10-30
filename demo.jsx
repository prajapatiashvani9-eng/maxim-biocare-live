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









<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.45546118352647!2d73.14414147503462!3d19.226303350695808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79436279d8975%3A0x39caf2c554266e5c!2sHanuman%20Nagar%20-%20Jaibhai%20Marathi%20School%20Rd!5e0!3m2!1sen!2sin!4v1792982346408!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>