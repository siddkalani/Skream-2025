import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='w-full h-full'>
      <div className='flex-custom-center h-full w-full'>
        <Parallax strength={400}>
          {/* Background Video */}
          <div className='relative h-screen w-screen overflow-hidden'>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover hidden md:flex"
            >
              <source src="/videos/skream.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover md:hidden flex"
            >
              <source src="/videos/skreamVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay */}
            <div className='absolute inset-0 bg-black opacity-55'></div>

            {/* Hero Content */}
            <div className='relative flex-custom-center w-full h-full'>
              <div className='flex-custom-col items-center justify-center hero-flex-gap'>
                {/* Hero Title */}
                <div
                  className='hero-title flex-custom-center text-center'
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h1 className='font-lakeshore text-white md:text-[8rem] mt-[-3rem]'>
                    #DEFY<strong className='text-[#e88024]'>THE</strong>ODDS
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>

      {/* Footer Section */}
      {/* <div className='w-full h-full flex-custom-center hero-margin md:hero-margin-large'>
        <picture
          className='card-width md:card-width-large h-full'
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <img
            alt="Athlete preparing for a challenge"
            className="relative z-[1]"
            src="/images/sports/ath200.png"
          />
        </picture>
      </div> */}
    </section>
  );
};

export default HeroSection;
