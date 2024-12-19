import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  return (
    <section className='w-full h-full'>
      <div className='flex-custom-center h-full w-full relative'>
        <div className='hero-image flex-custom-center relative h-[100vh] w-[100vw]'>
          <video
            className="absolute inset-0 z-0 w-full h-full object-cover"
            src="/videos/heroVideo.mp4"
            title="Unicepta Brandfilm EU"
            autoPlay
            loop
            muted
          />
          {/* Black opacity overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10" />
          <div className='flex-custom-center w-full h-full z-20'>
            <div className='flex-custom-col items-center justify-center hero-flex-gap'>
              <div className='flex-custom-center'>
                <div
                  className={`inline-block text-4xl h-[1.25rem] transition-all has-sticky-header:!text-primary text-red-600`}
                  data-aos="fade-in" // Add AOS animation attribute
                  data-aos-duration="2000" // Animation duration in milliseconds
                >
                  𝐀&𝐊
                </div>
              </div>
              {/* <div className='text-center'>
                <span
                  className='span-margin eyebrow text-hero-span'
                  data-aos="fade-up" // Add AOS animation attribute
                  data-aos-duration="1000" // Animation duration in milliseconds
                >
                  A company well worth a journey
                </span>
              </div> */}
              <div className=' flex-custom-center text-center'>
                <h1
                  className='hero-h1 mt-[-0.175em] mb-[-0.25em] text-[var(--color-white)]'
                  data-aos="fade-up" // Add AOS animation attribute
                  data-aos-duration="1000" // Animation duration in milliseconds
                >
                  {/* Delivering Quality <br /> Solutions Every Time */}
                  Guiding Your Vision<br /> to Reality
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer img */}

    </section>
  );
}

export default HeroSection;
