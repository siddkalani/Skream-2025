import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DiningIntro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: false, // Animation will only happen once
      offset: 100,
    });
  }, []);

  return (
    <section className='h-full w-full pt-[var(--section-padding)]'>
      <div className='container-custom'>
        <div className='flex justify-center w-full relative'>
          <div className='flex-custom-col items-center justify-center text-center hero-flex-gap'>
            <div
              className='text-center'
              data-aos="fade-right" // Slide-in animation from right
              data-aos-duration="500" // Duration of the animation
            >
              <div className='text-center'>
                <div className='ornament'>
                  <img src="/videos/icons8-goal.gif" alt="Ornament" />
                </div>
              </div>
            </div>
            <div
              className='col-row col-row-title medium'
              data-aos="fade-right" // Slide-in animation from right
              data-aos-duration="500" // Duration of the animation
              data-aos-delay="200" // Delay before the animation starts
            >
              <h2 className='text-2'>Your Trusted Partner for Professional Excellence</h2>
            </div>
            <div
              className='max-w-[35em]'
              data-aos="fade-right" // Slide-in animation from right
              data-aos-duration="500" // Duration of the animation
              data-aos-delay="400" // Delay before the animation starts
            >
              <p className='text-4'>
                At A&K, solutions are simple, effective, and tailored to your needs. Expert strategies, industry insights, and results-oriented services—designed to elevate your business. Most of our consulting sessions are held in a relaxed, focused environment, fostering strategic discussions under clear objectives, with the future of your business in view—like setting the course for tomorrow’s success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiningIntro;
