import React from 'react';


const Events = () => {
    const sportsData = [
        { image: '/images/carousel/section-1/banking2.jpg', title: 'Badminton', info: 'Exciting badminton matches.' },
        { image: '/images/carousel/section-1/banking2.jpg', title: 'Rink Football', info: 'Fast-paced rink football games.' },
        { image: '/images/carousel/section-1/banking2.jpg', title: 'Football', info: 'Intense football tournaments.' },
        { image: '/images/carousel/section-1/banking2.jpg', title: 'Cricket', info: 'Thrilling cricket matches.' },
        { image: '/images/carousel/section-1/banking2.jpg', title: 'Box Cricket', info: 'Short-format cricket excitement.' },
        { image: '/images/carousel/section-1/banking2.jpg', title: 'Lawn Tennis', info: 'Elegant lawn tennis games.' },
        { image: '/images/carousel/section-1/banking2.jpg', title: 'Squash', info: 'High-energy squash matches.' },
        { image: '/images/sports/table_tennis.jpg', title: 'Table Tennis', info: 'Table tennis competitions.' },
        { image: '/images/sports/basketball.jpg', title: 'Basketball', info: 'Action-packed basketball games.' },
        { image: '/images/sports/chess.jpg', title: 'Chess', info: 'Strategic chess tournaments.' },
        { image: '/images/sports/carrom.jpg', title: 'Carrom', info: 'Engaging carrom contests.' },
    ];

    return (
        <section className="events-page bg-black text-white">
            <div className="container mx-auto pt-24">
                <div className='flex justify w-full mb-10'>
                    <div className='styled-col justify-start'>
                        <div
                            className='col-row-title'
                            data-aos="fade-right"
                            data-aos-duration="500"
                            data-aos-delay="200"
                        >
                            <h2 className='text-3 text-white'>Events</h2>
                        </div>
                        <div
                            className=''
                            data-aos="fade-right"
                            data-aos-duration="500"
                            data-aos-delay="400"
                        >
                            <p className='text-2 text-white'>
                                Explore the exciting lineup of sports events and competitions happening at Skream.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sportsData.map((event, index) => (
                        <div key={index} className="flip-card">
                            <div className="flip-card-inner">
                                {/* Front Face */}
                                <div className="flip-card-front">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="object-cover h-56 w-full rounded-lg"
                                    />
                                    <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{event.title}</h3>
                                </div>
                                {/* Back Face */}
                                <div className="flip-card-back">
                                    <div className="text-center p-4">
                                        <h3 className="text-xl font-bold">{event.title}</h3>
                                        <p className="text-sm mt-2">{event.info}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <footer className="bg-black mt-16 py-8 text-center">
                <div className="container mx-auto">
                    <p className="text-sm">© Skream 2024 | <a href="/privacy-policy.html" className="underline">Privacy Policy</a></p>
                </div>
            </footer>
        </section>
    );
};

export default Events;
