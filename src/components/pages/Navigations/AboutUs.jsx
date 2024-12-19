import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import ContactModal from '../../../shared/ContactModal';

const AboutUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <section className='pt-[var(--section-padding)] relative bg-[#333333]'>
                <div className="container-custom">
                    <div className='flex flex-col md:flex-row relative w-full gap-[3rem] md:gap-[10%] h-full'>
                        <div className='w-full h-full flex items-center justify-center'>
                            <Parallax
                                bgImage="https://www.thedamai.com/media/pages/dining/5d61087be9-1703335787/cookbook-1080x1440-crop-q72.jpg"
                                strength={100}
                            >
                                <div className='md:h-[40rem] h-[25rem] w-[30rem]' />
                            </Parallax>
                        </div>
                        <div className='flex md:justify-center w-full relative'>
                            <div className='flex-custom-col items-start justify-center hero-flex-gap'>
                                <div className='text-left w-full'>
                                    <span className='span-margin eyebrow text-white'>Founder</span>
                                </div>
                                <div className='col-row col-row-title medium'>
                                    <h2 className='text-white text-2'>Abhishekh Pandey</h2>
                                </div>
                                <div className='max-w-[35em]'>
                                    <p className='text-white text-4'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto dolorum ex necessitatibus laudantium doloribus alias odio. Corporis odit ex sequi fugit fugiat dolor eum. Quidem magnam alias sed vel commodi eligendi repellat minima incidunt, laborum fugit quo quos ipsam harum praesentium, suscipit deserunt? Vitae voluptatibus doloremque nihil dolorum quidem ex.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-padding relative bg-[#333333]'>
                <div className="container-custom">
                    <div className='flex flex-col md:flex-row relative w-full gap-[3rem] md:gap-[10%] h-full'>
                        <div className='flex md:justify-center w-full relative'>
                            <div className='flex-custom-col items-start justify-center hero-flex-gap'>
                                <div className='text-left w-full'>
                                    <span className='span-margin eyebrow text-white'>Director</span>
                                </div>
                                <div className='col-row col-row-title medium'>
                                    <h2 className='text-white text-2'>Krishita Kohli</h2>
                                </div>
                                <div className='max-w-[35em]'>
                                    <p className='text-white text-4'>
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi enim impedit quos tenetur quisquam beatae rem vitae, deserunt a odio sit, pariatur dolorem ipsa similique earum magni rerum doloremque aspernatur cum dolore, sunt dolores? Fugiat impedit quos obcaecati ad minima?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-full flex items-center justify-center'>
                            <Parallax
                                bgImage="https://www.thedamai.com/media/pages/dining/5d61087be9-1703335787/cookbook-1080x1440-crop-q72.jpg"
                                strength={100}
                            >
                                <div className='md:h-[40rem] h-[25rem] w-[30rem]' />
                            </Parallax>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-[var(--section-padding)]'>
                <div className='container-custom'>
                    <div className='flex justify-center w-full'>
                        <div className='styled-col items-center justify-center'>
                            <div className='text-center'>
                                <div
                                    className='ornament'
                                    data-aos="fade-right"
                                    data-aos-duration="500"
                                >
                                    <img src="/gifs/icon2.gif" alt="Ornament" />
                                </div>
                            </div>
                            <div className='text-center'>
                                <div
                                    className='col-row-title'
                                    data-aos="fade-right"
                                    data-aos-duration="500"
                                    data-aos-delay="200"
                                >
                                    <h2 className='text-2'>Ready to transform <br />
                                        your results?</h2>
                                </div>
                            </div>
                            <div
                                className='text-center max-w-[35em]'
                                data-aos="fade-right"
                                data-aos-duration="500"
                                data-aos-delay="400"
                            >
                                <button
                                    className='btn md:w-[12rem] w-[80%] btn-svg h-[3rem] border-[1px] border-black bg-transparent text-black hover:bg-black hover:text-white'
                                    onClick={openModal} // Open modal on click
                                >
                                    <div className='btn-content gap-3'>
                                        <span className='text-[2rem]'>Get in touch</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                                <div className='flex-custom-col items-center hero-flex-gap'>
                                    <h1
                                        className='hero-h1 mt-[-0.175em] mb-[-0.25em] text-center text-[var(--color-white)]'
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        True Engagement Begins <br />
                                        with Understanding
                                    </h1>
                                </div>

                                <div className='btn md:w-[12rem] w-[80%] btn-svg h-[3rem] border-[0.5px] border-white bg-transparent text-white hover:bg-white hover:text-black'>
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
            </section>

            {/* Contact Modal */}
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default AboutUs;
