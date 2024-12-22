import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Parallax } from 'react-parallax';

const Footer = () => {
  return (
    <>
      <footer className='p-0 relative'>
        <div className='max-w-[100vw] pl-0 pr-0'>
          <div className='relative flex w-full flex-wrap justify-between'>
            <div className='border-custom'></div>
            {/* SideNav */}
            <nav className='footer-nav'>
              <div className='menu-title'><span className='eyebrow small'>Menu</span></div>
              <ul className='menu-list'>
                {["Stay", "Relax", "Dining", "Discover"].map((item, index) => (
                  <li className='menu-item' key={index}>
                    <a href="#" className='menu-link'>
                      <span className='side-nav-link'>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {/* ShortLinks */}
            <div className='footer-nav flex'>
              <div className="border-left"></div>
              <div className="flex flex-col min-w-[10em]">
                <div className='column-title'><span className='eyebrow small'>INDOOR SPORTS</span></div>
                <ul className='short-links-list'>
                  {["Badminton", "Football", "Cricket", "Lawn Tennis"].map((item, index) => (
                    <li className='short-link-item' key={index}><a className='short-link' href="#"><span>{item}</span></a></li>
                  ))}
                </ul>
              </div>
              <div className='flex flex-col'>
                <div className='short-links-column'>
                  <div className='column-title'><span className='eyebrow small'>OUTDOOR SPORTS</span></div>
                  <ul className='short-links-list'>
                    {["Secret Waterfall", "Dolphins of Lovina", "Diving and Snorkeling"].map((item, index) => (
                      <li className='short-link-item' key={index}><a className='short-link' href="#"><span>{item}</span></a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* contacts */}
            <div className='footer-nav flex'>
              <div className="border-left"></div>
              <div className="flex flex-col min-w-[10em]">
                <div className='column-title'><span className='eyebrow small'>Contacts</span></div>
                <div className='flex flex-col gap-[1.5em]'>
                  <ul className='short-links-list'>
                    {["Jl. Damai, Kayu Putih", "Lovina, Buleleng, Bali, Indonesia"].map((item, index) => (
                      <li className='short-link-item' key={index}><a className='short-link' href="#"><span>{item}</span></a></li>
                    ))}
                  </ul>
                  <ul className='short-links-list'>
                    {["T: +62 877 888 41008", "E: resort@thedamai.com", "Reception: WhatsApp"].map((item, index) => (
                      <li className='short-link-item' key={index}><a className='short-link' href="#"><span>{item}</span></a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* footer-end */}
          <div className='relative flex w-full justify-between'>
            <div className="border-custom"></div>

            <div className="footer-end flex justify-around">
              
              <span className="cursor-pointer text-sm flex items-center justify-center">
                <span className="text-sm mr-[2px] align-center">©</span>
                <span className="items-center mr-1">CREOAVATE 2025</span>
              </span>
            </div>

            {/* Ratings Section */}
            <div className="footer-end flex justify-around items-center">
            <div className="border-left"></div>
              <span className='eyebrow small flex items-center'>Ratings</span>
              <div className='star-container flex'>
                <picture className='star-picture flex items-center gap-1'>
                  {Array(6).fill().map((_, index) => (
                    <IoStarSharp key={index} color='orange' />
                  ))}
                </picture>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="footer-end flex justify-around items-center">
              <div className="border-left"></div>
              <div className='flex items-center gap-4'>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7e6249]">
                  <FaInstagram size={30} />
                </a>
                <a href="https://wa.me/<YOUR_WHATSAPP_NUMBER>" target="_blank" rel="noopener noreferrer" className="hover:text-[#7e6249]">
                  <FaWhatsapp size={30} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7e6249]">
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>


           
          </div>
        </div>
      </footer>
      {/* imageWithButton */}
      <section className='w-full h-full'>
        <div className='flex-custom-center h-full w-full relative'>
          <Parallax
            strength={100}
            speed={100}
            bgImage="https://www.thedamai.com/media/pages/dining/5975de972d-1703335793/footer-menu-1920x480-crop-q72.jpg"
            bgImageAlt="Poolside table"
            bgImageStyle={{ objectFit: "cover" }}
          >
            <div style={{ height: '35vh' }} className='hero-image flex-custom-center'>
              <div className={`btn w-15 btn-svg h-[3rem] border-[0.5px] border-black bg-[var(--color-butterflygreen-900)] absolute z-10`}>
                <div className='btn-content gap-3'>
                  <img className='size-4 first-img' src="/images/symbols/footer-btn.svg" alt="" />
                  <span className='text-[white]'>Order your copy</span>
                  <img className='size-4 second-img' src="/images/symbols/footer-btn.svg" alt="" />
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </section>
    </>
  )
}

export default Footer;
