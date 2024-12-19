import React from 'react'
import HeroSection from '../pages/content-sections/HeroSection'
import DiningIntro from '../pages/content-sections/DiningIntro'
import ParallaxImages from '../pages/content-sections/ParallaxImages'
import ImageSlider from '../pages/content-sections/ImageSlider'
import MenuSection from '../pages/content-sections/MenuSection'
import KitchenPage from '../pages/content-sections/KitchenPage'
import ReservationSection from '../pages/content-sections/ReservationSection'
import Earth from '../pages/content-sections/Earth'
import WhyUs from '../pages/content-sections/WhyUs'
import Report from '../pages/content-sections/Report'


const Main = () => {
  return (

    <div className='w-full h-full relative'>
      <HeroSection />
      <DiningIntro />
      {/* <ParallaxImages /> */}
      <Earth />
      <WhyUs />
      <Report />
      <ImageSlider />
      <ReservationSection />
    </div>

  )
}

export default Main