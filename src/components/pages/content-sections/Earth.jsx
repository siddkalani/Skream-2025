import React from 'react';

const Earth = () => {
    return (
        <div className="mt-[var(--section-padding)] h-full w-full flex-custom-center bg-black" id="c819">
            <div className="w-[90%]">
                <article className=" text-white bg-black 2xl:-mx-0 ">
                    <div className="flex flex-col md:flex-row items-center mx-auto py-[var(--section-padding)] space-x-6">
                        <div className="flex flex-1 items-center justify-center mb-[5rem] md:mb-0 md:justify-start md:col-span-4 2xl:col-span-6 overflow-hidden">
                            <img
                                alt="globe"
                                className="object-fill rotate-earth md:h-[30rem] md:w-[30rem] "
                                height="1460"
                                src="/2/csm_globe_437e7e0257.jpg"
                                width="1460"
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-center items-end md:col-span-8">
                            <header className="grid grid-cols-1">
                                <h2 className="text-2 text-white">
                                    By 2025, the daily data generated globally will surge to unimaginable levels.
                                </h2>
                                <p className="text-4 text-white mt-4">
                                    With data growth on the horizon, is your organization ready to innovate?
                                    As data complexity increases, are your solutions agile enough?
                                    The future is data-rich—does your strategy match?
                                    The data deluge is coming. Are you equipped to handle it?

                                </p>
                            </header>
                            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-150">
                                <section className="flex flex-col justify-start items-start pb-6 border-b md:border-0 border-white">
                                    <p className="text-7 text-white">SOLUTIONS</p>
                                    <p className="text-4 mb-6 sm:mb-16 text-white">
                                        High-impact packages for your key challenges
                                    </p>
                                    <div className={`btn w-15 btn-svg h-[3rem] border-[1px] border-white bg-transparent hover:bg-white hover:text-black`}>
                                        <div className='btn-content gap-3'>

                                            <span className=''>SOLUTIONS</span>

                                        </div>
                                    </div>
                                </section>
                                <section className="flex flex-col justify-start items-start pb-6 border-b md:border-0 border-white">
                                    <p className="text-7 text-white text-center">MODULES</p>
                                    <p className="text-4 mb-6 sm:mb-16 text-white">
                                        Targeted tools for your most urgent tasks
                                    </p>
                                    <div className={`btn w-15 btn-svg h-[3rem] border-[1px] border-white bg-transparent hover:bg-white hover:text-black`}>
                                        <div className='btn-content gap-3'>

                                            <span className=''>MODULES</span>

                                        </div>
                                    </div>
                                </section>
                                <section className="flex flex-col justify-start items-start pb-6 border-b md:border-0 border-white">
                                    <p className="text-7 text-white">CASES</p>
                                    <p className="text-4 mb-6 sm:mb-16 text-white">
                                        Success stories across the business spectrum
                                    </p>
                                    <div className={`btn w-15 btn-svg h-[3rem] border-[1px] border-white bg-transparent hover:bg-white hover:text-black`}>
                                        <div className='btn-content gap-3'>

                                            <span className=''>CASES</span>

                                        </div>
                                    </div>
                                </section>
                            </div> */}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Earth;


//