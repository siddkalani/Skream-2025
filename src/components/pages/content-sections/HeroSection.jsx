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
        <Parallax
          strength={400}
          bgImage="/images/basketballp.png"
          bgImageAlt="Basketball court"
          bgImageStyle={{ objectFit: 'cover' }}
        >
          <div style={{ height: '100vh' }} className='hero-image flex-custom-center inset-0 bg-black opacity-55'>
            <div className='flex-custom-center w-full h-full'>
              <div className='flex-custom-col items-center justify-center hero-flex-gap'>
               

                {/* Hero Title */}
                <div
                  className='hero-title flex-custom-center text-center z-[100]'
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h1 className='font-lakeshore text-[var(--color-white)]'>
                    #ODDS<strong className='text-[#e88024]'>TO</strong>DEFY
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>

      {/* Footer Image */}
      <div className='w-full h-full flex-custom-center hero-margin md:hero-margin-large'>
        <picture
          className='card-width md:card-width-large h-full'
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <img
            alt="Athlete preparing for a challenge"
            data-parallax-target=""
            className="relative z-[1]"
            src="/images/sports/ath200.png"
          />
        </picture>
      </div>
    </section>
  );
};

export default HeroSection;
