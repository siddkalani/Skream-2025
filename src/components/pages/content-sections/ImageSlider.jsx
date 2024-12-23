import React, { useEffect, useState } from 'react';

const ImageSlider = () => {
    const images1 = [
        '/images/carousel/section-2/image1.jpg',
        '/images/carousel/section-2/image2.jpg',
        '/images/carousel/section-2/image3.jpg',
        '/images/carousel/section-2/image4.jpg',
        '/images/carousel/section-2/image5.jpg',
        '/images/carousel/section-2/image6.jpg',
        '/images/carousel/section-2/image7.jpg',
    ];

    const images2 = [
        '/images/carousel/section-2/image1.jpg',
        '/images/carousel/section-2/image2.jpg',
        '/images/carousel/section-2/image3.jpg',
        '/images/carousel/section-2/image4.jpg',
        '/images/carousel/section-2/image5.jpg',
        '/images/carousel/section-2/image6.jpg',
        '/images/carousel/section-2/image7.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images1.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handlePaginationClick = (index) => {
        setCurrentIndex(index);
        clearInterval(interval)
    };

    return (
        <section  className='py-[var(--section-padding)] bg-cover bg-center bg-no-repeat'>
            <div className='container-custom'>
                <div className='flex justify-center w-full'>
                    <div className='styled-col items-center justify-center mb-[var(--section-padding)]'>
                        <div
                            className='text-center'
                        >
                            <div
                                className='col-row-title'
                                data-aos="fade-right" // Slide-in animation from right
                                data-aos-duration="500" // Duration of the animation 
                                data-aos-delay="200"
                            >
                                <h2 className='text-2 text-black'>Explore Our Exciting Sports Programs</h2>
                                <p className='text-3 italic mt-8 text-gray-600'>
                                    Discover a wide range of sports designed to keep you active, entertained, and thriving.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className='w-full relative'>
                <div className='md:flex md:flex-row flex flex-col w-full gap-[var(--container-padding)]'>
                    <div className='wallpaper-carousel md:w-[50%] w-full'>
                        <div className='carousel-inner' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {images1.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Carousel 1 Image ${index + 1}`}
                                    className='carousel-image'
                                />
                            ))}
                        </div>
                    </div>
                    <div className='wallpaper-carousel md:w-[50%] w-full'>
                        <div className='carousel-inner' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {images2.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Carousel 2 Image ${index + 1}`}
                                    className='carousel-image'
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='pagination flex gap-2 justify-center items-center mt-4'>
                    {images1.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePaginationClick(index)}
                            className={`h-[2.5em] w-[2.5em] rounded-full transition-[var(--animation-slider)] ${currentIndex === index
                                ? 'bg-[var(--color-butterflygreen-900)] text-white shadow-sm'
                                : ' shadow-inner text-gray-700 hover:bg-gray-300 box-sha'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageSlider;


