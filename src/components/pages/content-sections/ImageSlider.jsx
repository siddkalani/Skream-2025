import React, { useEffect, useState } from "react";

const ImageSlider = () => {
  const images1 = [
    "/images/sports/rinkfootballp.png",
    "/images/sports/ath100.png",
    "/images/sports/badmintonp.png",
    "/images/sports/tennisp.png",
    "/images/sports/relayp.png",
    "/images/sports/carromp.png",
  ];
  const images2 = [
    "/images/sports/basketballp.png",
    "/images/sports/ath200.png",
    "/images/sports/chessp.png",
    "/images/sports/throwballp.png",
    "/images/sports/shotputp.png",
    "/images/sports/doublejumpp.png",
  ];
  const images3 = [
    "/images/sports/cricketp.png",
    "/images/sports/ath400.png",
    "/images/sports/tabletennispp.png",
    "/images/sports/volleyballp.png",
    "/images/sports/boxcricketp.png",
    "/images/sports/squashp.png",
  ];

  const dummySportsData = {
    "/images/sports/rinkfootballp.png": "Rink Football",
    "/images/sports/ath100.png": "Athletics 100m",
    "/images/sports/badmintonp.png": "Badminton",
    "/images/sports/tennisp.png": "Tennis",
    "/images/sports/relayp.png": "Relay",
    "/images/sports/carromp.png": "Carrom",
    "/images/sports/basketballp.png": "Basketball",
    "/images/sports/ath200.png": "Athletics 200m",
    "/images/sports/chessp.png": "Chess",
    "/images/sports/throwballp.png": "Throwball",
    "/images/sports/shotputp.png": "Shot Put",
    "/images/sports/doublejumpp.png": "Double Jump",
    "/images/sports/cricketp.png": "Cricket",
    "/images/sports/ath400.png": "Athletics 400m",
    "/images/sports/tabletennispp.png": "Table Tennis",
    "/images/sports/volleyballp.png": "Volleyball",
    "/images/sports/boxcricketp.png": "Box Cricket",
    "/images/sports/squashp.png": "Squash",
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressBars, setProgressBars] = useState(
    new Array(images1.length).fill(0)
  );
  const duration = 5000; // 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressBars((prevBars) => {
        const updatedBars = [...prevBars];
        updatedBars[currentIndex] += 1;

        if (updatedBars[currentIndex] >= 100) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images1.length);
          updatedBars[currentIndex] = 0;
        }
        return updatedBars;
      });
    }, duration / 100);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderImages = (images) => {
    return images.map((image, index) => (
      <div
        key={index}
        className="relative w-full flex-shrink-0"
        style={{ flex: "0 0 100%" }}
      >
        <img
          src={image}
          alt={`Carousel Image ${index + 1}`}
          className="w-full carousel-image md:h-[35rem] h-[15rem]"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-[#e88024] uppercase font-medium text-center py-2">
          {dummySportsData[image]}
        </div>
      </div>
    ));
  };

  return (
    <section className="pt-[3rem] pb-[var(--section-padding)] bg-cover bg-center bg-no-repeat" id="events">
      <div className="container-custom" >
        <div className="flex justify-center w-full">
          <div className="styled-col items-center justify-center mb-[3rem]">
            <div className="text-center">
              <div
                className="col-row-title"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                <h1 className="text-[#e88024] text-[6rem] font-lakeshore">Events</h1>
                <p className="font-cormo text-[1.8rem] font-medium text-gray-700">
                  Discover a wide range of sports
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <div className="flex flex-row w-full md:gap-[var(--container-padding)] gap-2">
          {/* Carousel 1 */}
          <div className="wallpaper-carousel md:w-[33%] w-[50%] overflow-hidden">
            <div
              className="carousel-inner flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {renderImages(images1)}
            </div>
          </div>
          {/* Carousel 2 */}
          <div className="wallpaper-carousel md:w-[33%] overflow-hidden w-0">
            <div
              className="carousel-inner flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {renderImages(images2)}
            </div>
          </div>
          {/* Carousel 3 */}
          <div className="wallpaper-carousel  md:w-[33%] w-[50%] overflow-hidden">
            <div
              className="carousel-inner flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {renderImages(images3)}
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
          <span className="text-[black]">{currentIndex + 1} </span>{" "}
          <span className="text-gray-300"> / {images1.length} </span>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
