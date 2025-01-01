import PropTypes from "prop-types";
import skreamLogo from '../../../../public/images/skreamLogo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ImageGallery = ({ className = "" }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Animation easing
            once: false, // Animation will only happen once
            offset: 100,
        });
    }, []);
    return (
        <>
            <section
                className={`self-stretch flex flex-col relative items-center justify-center py-[var(--section-padding)] mt-[var(--section-padding)]`}
                id="gallery"
            >
                <div className='border-top-ornament'>
                    <div className="ornament">
                        <img src={skreamLogo} alt="Symbol" />
                    </div>
                </div>
                <div className="w-[90%] mt-[-2rem]">
                    <div className='row-title flex justify-center w-full'>
                        <div className='styled-col items-center justify-center gap-6'>
                            {/* <div className='text-center'>
                            <div className='ornament'>
                                <img src="/images/symbols/section-symbol.svg" alt="Ornament" />
                            </div>
                        </div> */}
                            <div className='text-center'
                                data-aos="fade-right" // Slide-in animation from right
                                data-aos-duration="500" // Duration of the animation
                            >
                                <div className='col-row-title'>
                                    <h1 className='text-[6rem] text-[#e88024] font-lakeshore'>Sponsors</h1>
                                </div>
                            </div>
                            <div
                                data-aos="fade-right" // Slide-in animation from right
                                data-aos-duration="600" // Duration of the animation className='text-center max-w-[35em] mt-[-1em]'
                            >
                                <p className='font-cormo text-[1.8rem] font-medium text-gray-700 text-center md:text-left'>Explore our gallery of treasures—each piece a testament to artistry and timeless elegance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[78rem] flex flex-col items-end justify-start gap-7 max-w-full">
                        <div className="self-stretch grid lg:grid-cols-3 gap-2 max-w-full md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
                            <img
                                className="w-full h-full max-w-full overflow-hidden object-cover min-h-[38rem]"
                                alt=""
                                src="/images/sports/cover.png"
                            />
                            <div className="flex flex-col items-start justify-start gap-2 max-w-full">
                                <img
                                    className="w-full h-[20rem] max-w-full overflow-hidden object-cover"
                                    loading="lazy"
                                    alt=""
                                    src="/images/sports/cover.png"
                                />
                                <div className="flex flex-row items-start justify-start gap-2 sm:flex-wrap">
                                    <img
                                        className="flex-1 min-w-[8rem] min-h-[19rem] max-w-full overflow-hidden object-cover"
                                        loading="lazy"
                                        alt=""
                                        src="/images/sports/cover.png"
                                    />
                                    <img
                                        className="flex-1 min-w-[8rem] min-h-[19rem] max-w-full overflow-hidden object-cover"
                                        loading="lazy"
                                        alt=""
                                        src="/images/sports/cover.png"
                                    />
                                </div>
                            </div>
                            <img
                                className="w-full h-full max-w-full overflow-hidden object-cover min-h-[38rem]"
                                loading="lazy"
                                alt=""
                                src="/images/sports/cover.png"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="register"></section>
        </>
    );
};

ImageGallery.propTypes = {
    className: PropTypes.string,
};

export default ImageGallery;
