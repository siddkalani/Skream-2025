import React, { useState } from "react";
import { Parallax } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { useEffect } from "react";

const Footer = () => {
  const [parallaxStrength, setParallaxStrength] = useState(100);

  useEffect(() => {
    const updateParallaxStrength = () => {
      if (window.innerWidth <= 640) {
        // sm breakpoint
        setParallaxStrength(0);
      } else {
        setParallaxStrength(100);
      }
    };

    updateParallaxStrength(); // Set the initial value
    window.addEventListener("resize", updateParallaxStrength); // Update on window resize

    return () => window.removeEventListener("resize", updateParallaxStrength); // Cleanup
  }, []);

  return (
    <>
      <footer className="p-0 relative">
        <div className="max-w-[100vw] pl-0 pr-0">
          <div className="relative grid grid-cols-1 lg:grid-cols-3 w-full">
            <div className="border-custom"></div>
            {/* SideNav */}
            <nav className="footer-nav w-full">
              <div className="menu-title">
                <span className="eyebrow text-[0.8rem]">Menu</span>
              </div>
              <ul className="menu-list">
                {[
                  { text: "Events", href: "#events" },
                  { text: "Rules", href: "#rules" },
                  { text: "Register", href: "#register" },
                  { text: "Contact", href: "#contact" },
                ].map((item, index) => (
                  <li className="menu-item" key={index}>
                    <a
                      href={item.href}
                      className="text-[#38220f] menu-link hover-circle"
                    >
                      <span className="side-nav-link font-cormo font-medium">
                        {item.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {/* ShortLinks */}
            <div className="footer-nav flex w-full">
              <div className="lg:border-left border-custom"></div>
                <div className="flex md:flex-row flex-col">
              <div className="flex flex-col min-w-[10em]">
                <div className="column-title">
                  <span className="eyebrow text-[0.8rem]">Sports</span>
                </div>
                <ul className="short-links-list">
                  {[
                    "Squash",
                    "Badminton",
                    "Lawn Tennis",
                    "Table Tennis",
                    "Rink Football",
                    "Basketball",
                    "Throwball (Only Girls)",
                    "Volleyball",
                    "Football",
                    "Turf Cricket",
                    "Athletics (100m)",
                    "Athletics (200m)",
                    "Athletics (400m)",
                    "Athletics Relay",
                    "Athletics (800m)",
                  ].map((item, index) => (
                    <li className="short-link-item" key={index}>
                      <a className="short-link font-karla" href="#">
                        <span className="text-[1.02rem] hover-underline">
                          {item}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col mt-10 md:mt-0">
                <div className="short-links-column">
                  <div className="column-title">
                    <span className="eyebrow text-[0.8rem]">More Sports</span>
                  </div>
                  <ul className="short-links-list">
                    {[
                      "Athletics (Shotput)",
                      "Athletics (Long Jump)",
                      "Carrom",
                      "Chess",
                      "Swimming Freestyle",
                      "Swimming Relay Medly",
                      "Swimming Relay Freestyle",
                      "Swimming Backstroke",
                      "Swimming Breaststroke",
                    ].map((item, index) => (
                      <li className="short-link-item" key={index}>
                        <a className="short-link font-karla" href="#">
                          <span className="hover-underline">{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </div>
            </div>
            {/* contacts */}
            <div className="footer-nav flex w-full">
              <div className="lg:border-left border-custom w-full"></div>
              <div className="flex flex-col md:min-w-[10em] space-y-4">
                <div className="column-title">
                  <span className="eyebrow text-[0.8rem]">Contacts</span>
                </div>
                <div className="flex flex-col gap-[1.5em]">
                  <ul className="short-links-list">
                    {["Soham Idekar","Mukul Chaudhari"].map((item, index) => (
                      <li className="short-link-item" key={index}>
                        <a className="short-link  font-karla" href="">
                          <span className="hover-underline">{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className="short-links-list">
                    {["T: +918928673169, +918888677777", "E: soham.idekar@somaiya.edu"].map(
                      (item, index) => (
                        <li className="short-link-item" key={index}>
                          <a className="short-link  font-karla" href="">
                            <span className="hover-underline">{item}</span>
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>{" "}
                <br />
                <div className="column-title">
                  <span className="eyebrow text-[0.8rem]">Reach Us</span>
                </div>
                <div className="flex flex-col gap-[1.5em]">
                  <ul className="short-links-list">
                    {["K.J. Somaiya College Of Engineeing"].map(
                      (item, index) => (
                        <li className="short-link-item" key={index}>
                          <a className="short-link  font-karla" href="">
                            {/* <span className='hover-underline'>{item}</span> */}
                            <span className="hover-underline">
                              {" "}
                              K.J. Somaiya College Of Engineeing,
                              <br /> <br />
                              Vidyavihar East, <br /> <br />
                              Mumbai, Maharashtra 400077.
                            </span>
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Footer End */}
          <div className="relative flex flex-wrap justify-between items-center w-full">
            <div className="border-custom hidden sm:block"></div>

            {/* Footer Credits */}
            <div className="footer-end flex justify-center w-full sm:w-auto">
              <span className="cursor-pointer text-sm flex items-center justify-center">
                <span className="text-sm mr-[2px] align-center">©</span>
                <span className="items-center mr-1">CREOAVATE 2025</span>
              </span>
            </div>

            {/* Ratings Section */}
            <div className="footer-end flex justify-center items-center w-full sm:w-auto gap-2">
              <span className="eyebrow small flex-shrink-0 mt-1">Ratings</span>
              <div className="star-container flex items-center">
                {Array(6)
                  .fill()
                  .map((_, index) => (
                    <IoStarSharp key={index} className="text-orange-500" />
                  ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="footer-end flex justify-center items-center w-full sm:w-auto gap-4">
              <a
                href="https://www.instagram.com/creaovate/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7e6249]"
              >
                <FaInstagram size={30} color="#e88024" />
              </a>
              <a
                href="https://wa.me/+918238592699"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7e6249]"
              >
                <FaWhatsapp size={30} color="#e88024" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7e6249]"
              >
                <FaLinkedin size={30} color="#e88024" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* imageWithButton */}
      <section className="w-full h-full">
        <div className="flex-custom-center h-full w-full relative">
          <Parallax
            strength={parallaxStrength}
            speed={100}
            bgImage="/images/sports/throwballp.png"
            bgImageAlt="Poolside table"
            bgImageStyle={{ objectFit: "cover" }}
          >
            <div
              style={{ height: "35vh" }}
              className="hero-image flex-custom-center"
            >
              <div
                className={`btn w-15 btn-svg h-[3rem] border-[0.5px] border-black bg-[#3e2b73] absolute z-10`}
              >
                <div className="btn-content gap-3">
                  <img
                    className="size-4 first-img"
                    src="/images/skreamLogo.svg"
                    alt=""
                  />
                  <a
                      href="https://portfoliobysidd.netlify.app/"
                      className=" text-white text-[0.8rem] rounded-lg shadow-md transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VISIT US
                    </a>
                  <img
                    className="size-4 second-img"
                    src="/images/skreamLogo.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </section>
    </>
  );
};

export default Footer;
