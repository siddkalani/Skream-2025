import React from 'react';

const WhyUs = () => {
    return (
        <div className="mt-[var(--section-padding)] h-full w-full flex-custom-center ">
            <div className='w-[90%]'>
                <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 flex justify-between">
                        <div className="w-full">
                            <video
                                className="w-full object-contain"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/videos/BusinessAudit.mp4" type="video/mp4" className='' />
                            </video>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center text-white space-y-8 mt-8 sm:mt-0">
                        <h2 className="text-2">The Value We Bring to Your Business:</h2>
                        <div className="space-y-4">
                            <p className="text-4">
                                Expertise
                                <br />
                                We offer specialized knowledge across various industries, ensuring you receive tailored insights and solutions.
                            </p>
                            <p className="text-4">
                                Innovation
                                <br />
                                Our approach integrates cutting-edge tools and methodologies, leveraging the latest advancements to deliver optimal results.
                            </p>
                            <p className="text-4">
                                Commitment
                                <br />
                                Our dedicated team is passionate about driving success, providing unwavering support and strategic guidance to achieve your goals.
                            </p>
                            {/* <p className="text-4">
                                Insights
                                <br />
                                Our hybrid and customizable insight model sets the standard for advanced intelligence.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
