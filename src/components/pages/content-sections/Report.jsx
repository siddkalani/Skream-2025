import React from 'react';

const Report = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center bg-black">
            {/* Section 1: Left Content, Right Image */}
            <div className='w-[90%] h-[75vh] flex-custom-center'>
                <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 flex flex-col">
                        <div className="mt-auto mb-auto text-white space-y-8">
                            <h2 className="text-2 text-white">About KJSCE</h2>
                            <p className="text-xl text-white">
                                K.J. Somaiya College of Engineering is located in the Somaiya Vidyanagari campus, Vidyavihar. Catering to about 40,000 students every day, this campus offers diverse fields of education such as Engineering, Management, Commerce, Arts, and Sciences along with actively promoting sports. Somaiya Vidyavihar boasts a 65-acre campus with sprawling grounds for various sports. Being granted Autonomous status from the academic year 2014-15, K.J. Somaiya College of Engineering also enjoys the status of being graded 'A' by the NAAC (National Assessment and Accreditation Council) in 2017.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end items-center mt-8 sm:mt-0">
                        <img
                            alt=""
                            className="object-fill xs:h-100vh h-[30rem] w-[27rem]"
                            loading="lazy"
                            srcSet="/fileadmin/user_upload/Gegen_Rechts.png"
                        />
                    </div>
                </div>
            </div>

            {/* Section 2: Right Content, Left Image */}
            <div className='w-[90%] h-[75vh] flex-custom-center'>
                <div className="flex flex-col sm:flex-row-reverse">
                    <div className="flex-1 flex flex-col">
                        <div className="mt-auto mb-auto text-white space-y-8">
                            <h2 className="text-2 text-white">About SKREAM</h2>
                            <p className="text-xl text-white">
                                Skream is the national level sports festival of K.J. Somaiya College of Engineering and has completed 7 editions. Its aim is to provide a domain to the sporting enthusiasts from all the undergraduate colleges to test their physical as well as mental strength on the field and prove their mettle. Over 100 colleges have participated in the tournament every year in the categories of indoor and outdoor games such as Football, Cricket, Badminton, Chess, Throwball, Basketball, Lawn Tennis, Squash, etc.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-start items-center mt-8 sm:mt-0">
                        <img
                            alt=""
                            className="object-fill xs:h-100vh h-[30rem] w-[27rem]"
                            loading="lazy"
                            srcSet="/fileadmin/user_upload/Gegen_Rechts.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Report;
