import React, { useEffect, useState } from "react";

const ImageSlider = () => {
  const images1 = [
    "/images/carousel/section-2/image1.jpg",
    "/images/carousel/section-2/image2.jpg",
    "/images/carousel/section-2/image3.jpg",
    "/images/carousel/section-2/image4.jpg",
    "/images/carousel/section-2/image5.jpg",
    "/images/carousel/section-2/image6.jpg",
    "/images/carousel/section-2/image7.jpg",
  ];

  const images2 = [...images1];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressBars, setProgressBars] = useState(
    new Array(images1.length).fill(0)
  );
  const duration = 3000; // 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressBars((prevBars) => {
        const updatedBars = [...prevBars];
        updatedBars[currentIndex] += 1;

        if (updatedBars[currentIndex] >= 100) {
          // Move to the next image
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images1.length);
          updatedBars[currentIndex] = 0;
        }
        return updatedBars;
      });
    }, duration / 100);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePaginationClick = (index) => {
    setCurrentIndex(index);
    setProgressBars((prevBars) => {
      const resetBars = prevBars.map(() => 0);
      resetBars[index] = 0; // Reset the selected bar
      return resetBars;
    });
  };

  return (
    <section className="py-[var(--section-padding)] bg-cover bg-center bg-no-repeat">
      <div className="container-custom">
        <div className="flex justify-center w-full">
          <div className="styled-col items-center justify-center mb-[3rem]">
            <div className="text-center">
              <div
                className="col-row-title"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                <h1 className="text-[#e88024]">Events</h1>
                <p className="font-cormo italic text-[1.8rem] font-medium text-gray-700 mt-[-1rem]">
                  Discover a wide range of sports
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <div className="md:flex md:flex-row flex flex-col w-full gap-[var(--container-padding)]">
          <div className="wallpaper-carousel md:w-[50%] w-full">
            <div
              className="carousel-inner"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images1.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Carousel 1 Image ${index + 1}`}
                  className="carousel-image"
                />
              ))}
            </div>
          </div>
          <div className="wallpaper-carousel md:w-[50%] w-full">
            <div
              className="carousel-inner"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images2.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Carousel 2 Image ${index + 1}`}
                  className="carousel-image"
                />
              ))}
            </div>
          </div>
        </div>
       
        {/* Timer Bars */}
        <div className="absolute bottom-[-25px] left-0 right-0 flex justify-center items-center gap-2">
          {progressBars.map((progress, index) => (
            <div
              key={index}
              className="relative w-[2.5%] h-[2px] bg-gray-300 rounded-full overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 h-full bg-[#e88024]"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          ))}
        </div>
        {/* Image Count */}
        <div className="absolute bottom-[-59px] right-0 left-0 text-center text-gray-700 text-lg">
          <span className="text-[black]">{currentIndex + 1} </span> <span className="text-gray-300"> / {images1.length} </span>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
