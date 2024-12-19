import React from 'react';

const Report = () => {
    return (
        <div className="mt-[var(--section-padding)] h-full w-full flex-custom-center bg-black">
            <div className='w-[90%] '>
                <div className="flex flex-col sm:flex-row py-[var(--section-padding)] bg-black">
                    <div className="flex-1 flex flex-col">
                        <div className="mt-auto mb-auto text-white space-y-8">
                            <h2 className="text-2 text-white">Spotlighting Future Leaders: Trends Shaping Tomorrow's Excellence</h2>
                            <p className="text-4 text-white">
                                Explore how the upcoming trends are setting the stage for leadership excellence. This year, we're spotlighting innovative companies that are expected to drive transformative change in the decade ahead. Our focus is on those poised to lead with groundbreaking strategies and visionary approaches.
                            </p>
                            <p className="text-4 text-white">
                                {/* Discover the emerging trailblazers that are set to revolutionize their industries. These organizations are anticipated to not only navigate future challenges but also establish new benchmarks for leadership and success.  */}
                            </p>
                            {/* <p className="text-4 text-white">
                            Opposing right-wing extremism - the Thought Leadership Award 2024 is dedicated to a political topic for the first time. Find out which of the 250 largest German companies successfully position themselves.
                        </p> */}
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end items-center mt-8 sm:mt-0">
                        <a href="/thoughtleadershipaward.html">
                            <img
                                alt=""
                                className="object-fill xs:h-100vh h-[33rem] w-[27rem]"
                                loading="lazy"
                                srcSet="/fileadmin/user_upload/Gegen_Rechts.png"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Report;
