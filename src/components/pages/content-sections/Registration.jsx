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
                        bgImage="/images/sports/volleyballp.png"
                        bgImageAlt="Background"
                        bgImageStyle={{ objectFit: "cover" }}
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

                        {/* Content */}
                        <div className='hero-image relative z-20 flex items-center justify-center md:h-[70vh] h-[80vh]'>
                            <div className='w-full flex flex-col items-center justify-center h-full p-4 md:p-5 md:ml-10'>
                                {/* Registration and Payment Section */}
                                <div className="flex flex-wrap md:flex-nowrap justify-center items-start gap-8 w-full text-white">
                                    {/* Registration Section */}
                                    <div className="flex-1 w-full md:w-[45%] text-center md:text-left">
                                        <h3 className='text-[3rem] md:text-[5rem] text-[#e88024] font-lakeshore'>
                                            REGISTRATION GUIDELINES
                                        </h3>
                                        <p className='text-[1rem] md:text-[1.3rem] text-[var(--color-white)] font-karla mt-6 font-medium'>
                                            Submit the following documents:
                                            <ul className="list-disc list-inside">
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
                                    <div className="flex-1 w-full md:w-[45%] text-center md:text-left">
                                        <h3 className='text-[3rem] md:text-[5rem] text-[#e88024] font-lakeshore'>
                                            PAYMENT PROCEDURE
                                        </h3>
                                        <p className='text-[1rem] md:text-[1.3rem] text-[var(--color-white)] font-karla mt-6 font-medium'>
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

                                {/* Buttons Section */}
                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    <a
                                        href="/path-to-payment-link"
                                        className="relative px-7 py-3 text-[1rem] text-white font-medium bg-[#3e2b73] border-brown-600 hover:bg-[#4e3690] focus:outline-none rounded-full overflow-hidden group transition-all duration-300 ease-in-out"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                       <span> Payment</span>
                                        <span className="absolute inset-y-0 right-5 flex items-center opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-transform duration-300 ease-in-out">
                                            →
                                        </span>
                                    </a>
                                    <a
                                        href="/path-to-brochure-link"
                                        className="relative px-7 py-3 text-[1rem] text-[white] font-medium bg-[#3e2b73] border-brown-600 hover:bg-[#4e3690] focus:outline-none rounded-full overflow-hidden group transition-all duration-300 ease-in-out"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                       <span> Brochure</span>
                                        <span className="absolute font-bold inset-y-0 right-5 flex items-center opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-transform duration-300 ease-in-out">
                                            →
                                        </span>
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
