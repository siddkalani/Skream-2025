import React from 'react'
import { Parallax } from 'react-parallax';

const ReservationSection = () => {
    return (
        <>
            <section className='w-full h-full -[var(--section-padding)]'>
                <div className='flex-custom-center h-full w-full relative'>
                    <div className='hero-image flex-custom-center relative h-[90vh] w-[100vw]'>
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
                            <div className='flex-custom-col items-center justify-center hero-flex-gap h-full'>

                                <div className='flex-custom-col items-center hero-flex-gap'>
                                    <h1
                                        className='hero-h1 mt-[-0.175em] mb-[-0.25em] text-center text-[var(--color-white)]'
                                        data-aos="fade-up" // Add AOS animation attribute
                                        data-aos-duration="1000" // Animation duration in milliseconds
                                    >
                                        True Engagement Begins <br />
                                        with Understanding
                                    </h1>
                                </div>

                                <div className={`btn md:w-[12rem] w-[80%] btn-svg h-[3rem] border-[0.5px] border-white bg-transparent text-white hover:bg-white hover:text-black`}>
                                    <div className='btn-content gap-3'>

                                        <span className=''>VISIT US</span>

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
                                                    <li>
                                                        <a href="/contact.html">Contact</a>
                                                    </li>
                                                    <li>
                                                        <a href="/privacy-policy.html">Privacy Policy</a>
                                                    </li>
                                                    <li>
                                                        <a href="/imprint.html">Imprint</a>
                                                    </li>
                                                    <li>
                                                        <a href="/newsletter.html">Newsletter</a>
                                                    </li>
                                                    <li>
                                                        <a href="/anti-slavery-policy.html">Anti-Slavery Policy</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </footer>


                            </div>
                        </div>
                    </div>
                </div>

                {/* footer img */}

            </section>

        </>
    )
}

export default ReservationSection