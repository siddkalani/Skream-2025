import React, { useState } from "react";
import PropTypes from "prop-types";
import skreamLogo from "../../../../public/images/skreamLogo.svg";

const sponsors = [
  { src: "/images/sponsors/grinf.png", title: "Caffieine Partner" },
  { src: "/images/sponsors/apollo.jpeg", title: "Medical Partner" },
  { src: "/images/sponsors/omkar.png", title: "Snacking Partner" },
  { src: "/images/sponsors/Nivia.png", title: "Associate Partner" },
  { src: "/images/sponsors/anu.svg", title: "Health Partner" },
  { src: "/images/sponsors/tennex.webp", title: "Turf cricket partner" },
  { src: "/images/sponsors/para.png", title: "Chess Partner" },
  { src: "/images/sponsors/triump.png", title: "Bike Partner" },
  { src: "/images/sponsors/protien.png", title: "Powered By" },
  { src: "/images/sponsors/nb.png", title: "Online Media Partner" },
  { src: "/images/sponsors/newLogo.png", title: "Website Partner" },
  { src: "/images/sponsors/ocean.jpg", title: "Beverage Partner" },
  { src: "/images/sponsors/BMW.png", title: "Driven By Partner" },
  { src: "/images/sponsors/breathe.jpg", title: "Co-Sponsor" },
  { src: "/images/sponsors/surf.jpg", title: "Assistant Partner" },
  { src: "/images/sponsors/Precise.png", title: "Table tennis Partner" },
  { src: "/images/sponsors/milk.png", title: "Milkshake Partner" },
  { src: "/images/sponsors/raja.png", title: "Stationary Partner" },
];

const ImageGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sponsorsPerSlide = 6;

  const totalSlides = Math.ceil(sponsors.length / sponsorsPerSlide);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  return (
    <>
      <section
        className={` flex flex-col relative items-center justify-center py-[var(--section-padding)] mt-[var(--section-padding)]`}
        id="gallery"
      >
        <div className="border-top-ornament">
          <div className="ornament">
            <img src={skreamLogo} alt="Symbol" />
          </div>
        </div>
        <div className="w-full max-w-screen-lg mt-[-2rem] mx-auto">
          <div className="row-title flex justify-center w-full">
            <div className="styled-col items-center justify-center gap-6">
              <div
                className="text-center"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                <div className="col-row-title">
                  <h1 className="text-[6rem] text-[#e88024] font-lakeshore">
                    Sponsors
                  </h1>
                </div>
              </div>
              <div data-aos="fade-right" data-aos-duration="600">
                <p className="font-cormo text-[1.8rem] font-medium text-gray-700 text-center md:text-left">
                  Explore our gallery of sponsors who have contributed to our
                  success.
                </p>
              </div>
            </div>
          </div>
          {/* Carousel Container */}
          <div className="relative w-full overflow-hidden p-2 bg-white">
            {/* Slide Wrapper */}
            <div
              className="flex transition-transform duration-500 w-full ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array(totalSlides)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-wrap justify-center gap-10"
                    style={{
                      flex: "0 0 100%",
                    }}
                  >
                    {sponsors
                      .slice(
                        index * sponsorsPerSlide,
                        index * sponsorsPerSlide + sponsorsPerSlide
                      )
                      .map((sponsor, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-transform hover:scale-105"
                        >
                          <img
                            src={sponsor.src}
                            alt={sponsor.title}
                            className="w-48 h-48 object-contain mb-4"
                          />
                          <p className="text-center text-sm font-semibold text-gray-700">
                            {sponsor.title}
                          </p>
                        </div>
                      ))}
                  </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-[#e88024] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#cc6d1f] focus:outline-none z-10"
              onClick={goToPreviousSlide}
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-[#e88024] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#cc6d1f] focus:outline-none z-10"
              onClick={goToNextSlide}
            >
              &#10095;
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6">
            {Array(totalSlides)
              .fill()
              .map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 mx-2 rounded-full focus:outline-none ${
                    currentSlide === index
                      ? "bg-[#e88024] shadow-lg"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                ></button>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

ImageGallery.propTypes = {
  className: PropTypes.string,
};

export default ImageGallery;
