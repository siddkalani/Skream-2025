import React from 'react';

const Industries = () => {
    const cardData = [
        {
            image: '/images/carousel/section-1/banking2.jpg',
            text: 'Banking. Our expertise and insight can help you respond positively to long term and emerging issues in the banking sector.'
        },
        {
            image: '/images/carousel/section-1/edu2.jpg',
            text: 'Education. Our expertise and insight can help you navigate both current and emerging challenges in the education sector for long-term success.'
        },
        {
            image: '/images/carousel/section-1/travel2.jpg',
            text: 'Travel and Tourism. Our expertise and insight can guide you through evolving trends and challenges to enhance your success in the travel and tourism industry'
        },
        {
            image: '/images/carousel/section-1/consumer2.jpg',
            text: 'Consumer Goods and Distribution. Navigate market shifts and distribution challenges with tailored insights to enhance your success in the consumer goods sector.'
        },
        {
            image: '/images/carousel/section-1/com.jpg',
            text: 'Communication and Media. Stay ahead of evolving trends and challenges in communication and media with strategies designed to boost your industry success.'
        },
        {
            image: '/images/carousel/section-1/energy.jpg',
            text: 'Energy Resources and Utility. Navigate industry shifts and operational challenges in energy, resources, and utilities with tailored strategies for sustained growth and efficiency.'
        },
        {
            image: '/images/carousel/section-1/medico.jpg',
            text: 'HealthCare. Transform your approach to healthcare with insights and solutions designed to address evolving needs and enhance patient outcomes.'
        },
        {
            image: '/images/carousel/section-1/real.jpg',
            text: 'Infrastructure and Real Estate. Elevate your success in real estate and infrastructure with strategies that address market dynamics and drive growth.'
        },
        {
            image: '/images/carousel/section-1/public.jpg',
            text: 'Government and Public Sector. Transform public service with innovative solutions that meet the evolving needs of the government sector.'
        },
    ];

    return (
        <section className='pt-[var(--section-padding)]'>
            <div className='industry-container'>
                <div className='flex justify w-full'>
                    <div className='styled-col justify-start'>
                        <div
                            className='col-row-title'
                            data-aos="fade-right"
                            data-aos-duration="500"
                            data-aos-delay="200"
                        >
                            <h2 className='text-3'>Industries</h2>
                        </div>
                        <div
                            className=''
                            data-aos="fade-right"
                            data-aos-duration="500"
                            data-aos-delay="400"
                        >
                            <p className='text-2'>Shaping Your Industry’s Future with Innovation and Expertise.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative py-[5rem] w-full justify-center items-center'>
                <div className='flex flex-col gap-3 w-full justify-center items-center'>
                    {[...Array(3)].map((_, rowIndex) => (
                        <div key={rowIndex} className='md:flex md:flex-row flex flex-col justify-around w-[93%] gap-3'>
                            {cardData.slice(rowIndex * 3, rowIndex * 3 + 3).map((card, colIndex) => (
                                <div key={colIndex} className='wallpaper-carousel md:w-[50%] w-full'>
                                    <img
                                        src={card.image}
                                        alt={`Image ${rowIndex * 3 + colIndex + 1}`}
                                        className='carousel-image'
                                    />
                                    <div className='overlay absolute inset-0 bg-black bg-opacity-50 flex p-8'>
                                        <p className='text-white text-xl w-[80%]'>{card.text}</p>
                                    </div>
                                </div>

                            ))}
                        </div>
                    ))}
                </div>
            </div>
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
                        <div className="absolute inset-0 bg-black opacity-50 z-10" />
                        <div className='flex-custom-center w-full h-full z-20'>
                            <div className='flex-custom-col items-center justify-center hero-flex-gap h-full'>
                                <h1
                                    className='hero-h1 mt-[-0.175em] mb-[-0.25em] text-center text-[var(--color-white)]'
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    True Engagement Begins <br />
                                    with Understanding
                                </h1>
                                <div className='btn md:w-[12rem] w-[80%] btn-svg h-[3rem] border-[0.5px] border-white bg-transparent text-white hover:bg-white hover:text-black'>
                                    <div className='btn-content gap-3'>
                                        <span>VISIT US</span>
                                    </div>
                                </div>
                                <footer className="md:absolute bottom-0 container mx-auto text-white">
                                    <div className="w-full md:flex md:flex-col items-center justify-center">
                                        <div className="flex flex-col md:flex-row md:justify-between items-center text-18 md:text-5">
                                            <div className="flex flex-col md:flex-row md:mb-0">
                                                <div className="mb-8 md:mr-5">
                                                    ©
                                                    <span className="mr-1.5 ml-0.5 uppercase" itemProp="copyrightHolder">
                                                        A&K
                                                    </span>
                                                    <span itemProp="copyrightYear">2024</span>
                                                </div>
                                                <ul className="space-y-3 md:flex md:space-x-5 md:space-y-0">
                                                    <li><a href="/contact.html">Contact</a></li>
                                                    <li><a href="/privacy-policy.html">Privacy Policy</a></li>
                                                    <li><a href="/imprint.html">Imprint</a></li>
                                                    <li><a href="/newsletter.html">Newsletter</a></li>
                                                    <li><a href="/anti-slavery-policy.html">Anti-Slavery Policy</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Industries;
