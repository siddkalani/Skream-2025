import React, { useEffect, useState } from 'react';

const ImageSlider = () => {
    const images1 = [
        '/images/carousel/section-1/image1.jpg',
        '/images/carousel/section-1/image2.jpg',
        '/images/carousel/section-1/image3.jpg',
        '/images/carousel/section-1/image4.jpg',
        '/images/carousel/section-1/image5.jpg',
        '/images/carousel/section-1/image6.jpg',
        '/images/carousel/section-1/image7.jpg',
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
        <section className='pt-[var(--section-padding)]'>
            <div className='container-custom'>
                <div className='flex justify-center w-full'>
                    <div className='styled-col items-center justify-center'>
                        <div className='text-center'>
                            <div
                                className='ornament'
                                data-aos="fade-right" // Slide-in animation from right
                                data-aos-duration="500" // Duration of the animation 
                            >
                                <img src="/gifs/icon2.gif" alt="Ornament" />
                            </div>
                        </div>
                        <div
                            className='text-center'
                        >
                            <div
                                className='col-row-title'
                                data-aos="fade-right" // Slide-in animation from right
                                data-aos-duration="500" // Duration of the animation 
                                data-aos-delay="200"
                            >
                                <h2 className='text-2'>Building Wide Networks</h2>
                            </div>
                        </div>
                        <div
                            className='text-center max-w-[35em]'
                            data-aos="fade-right" // Slide-in animation from right
                            data-aos-duration="500" // Duration of the animation 
                            data-aos-delay="400"
                        >
                            <p className='text-4'>In today's interconnected world, success often depends on the strength of your network. At A&K, we recognize the power of connections and are committed to helping you build a wide and influential network. Our extensive industry relationships and strategic partnerships enable us to connect you with the right people, opportunities, and resources.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='w-full relative'>
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
                            className={`h-[2.5em] w-[2.5em] rounded-full transition-[var(--animation-slider)] ${
                                currentIndex === index
                                    ? 'bg-[var(--color-butterflygreen-900)] text-white shadow-sm'
                                    : ' shadow-inner text-gray-700 hover:bg-gray-300 box-sha'
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div> */}
        </section>
    );
};

export default ImageSlider;

