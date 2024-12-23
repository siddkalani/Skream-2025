import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';

const Registration = () => {
    const [parallaxStrength, setParallaxStrength] = useState(200);

    useEffect(() => {
        const updateParallaxStrength = () => {
            if (window.innerWidth <= 640) {
                setParallaxStrength(0);
            } else {
                setParallaxStrength(200);
            }
        };

        updateParallaxStrength();
        window.addEventListener('resize', updateParallaxStrength);

        return () => window.removeEventListener('resize', updateParallaxStrength);
    }, []);

    return (
        <>
            <section id='registration' className='w-full h-full'>
                <div className='relative w-full h-full'>
                    {/* Parallax Section */}
                    <Parallax
                        strength={parallaxStrength}
                        bgImage="/jewellery/newsLetter/News.png"
                        bgImageAlt="Background"
                        bgImageStyle={{ objectFit: "cover" }}
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

                        {/* Content */}
                        <div className='hero-image relative z-20 flex-custom-center md:h-[60vh] h-[80vh]'>
                            <div className='flex-custom-col justify-center w-full h-full p-5'>
                                {/* Registration and Payment Section Side by Side */}
                                <div className="flex flex-col md:flex-row justify-center items-start md:space-x-10 w-full text-white">
                                    {/* Registration Section */}
                                    <div className="flex-1 max-w-[40%] md:max-w-[45%] text-center md:text-left md:mb-0 mb-8">
                                        <h3 className='hero-h1 mt-[-0.175em] mb-[-0.1em] font-cormo text-[var(--color-white)]'>
                                            REGISTRATION GUIDELINES
                                        </h3>
                                        <p className='text-[1.1rem] text-[var(--color-white)] font-karla mt-4 font-medium'>
                                            Submit the following documents:
                                            <ul className="list-disc list-inside mt-2">
                                                <li>Team List</li>
                                                <li>Bonafide Certificate</li>
                                                <li>Government ID</li>
                                            </ul>
                                            Submit online to <u>kjsceskream@sports.com</u> or offline at the college.
                                            <br />
                                            <strong className='text-white'>Deadline: 20th February 2023</strong>
                                        </p>
                                    </div>

                                    {/* Payment Section */}
                                    <div className="flex-1 max-w-[40%] md:max-w-[45%] text-center md:text-left">
                                        <h3 className='hero-h1 mt-[-0.175em] mb-[-0.1em] font-cormo text-[var(--color-white)]'>
                                            PAYMENT PROCEDURE
                                        </h3>
                                        <p className='text-[1rem] text-[var(--color-white)] font-karla mt-4 font-medium'>
                                            Pay offline at the college or online via Credit/Debit Cards, Net Banking, or PayTM.
                                            <br />
                                            For PayTM, use number: <u>7506945555</u>.
                                            <br />
                                            Send payment proof to the link or contact:
                                            <br />
                                            <strong className='text-white'>Aditya: +91 9987082229</strong>
                                        </p>
                                    </div>
                                </div>

                                {/* Buttons Centered Below */}
                                <div className="mt-10 flex justify-center space-x-10">
                                    <a
                                        href="/path-to-payment-link"
                                        className="px-5 py-3 text-[var(--color-white)] bg-[#38220f] border-brown-600 hover:bg-[#583928] focus:outline-none"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Payment Link
                                    </a>
                                    <a
                                        href="/path-to-brochure-link"
                                        className="px-5 py-3 text-[var(--color-white)] bg-[#38220f] border-brown-600 hover:bg-[#583928] focus:outline-none"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Brochure Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </section>
        </>
    );
};

export default Registration;
