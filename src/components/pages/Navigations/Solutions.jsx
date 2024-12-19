import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const sections = [
  {
    id: '#1',
    title: 'Governance advisory',
    content: 'We guide boards and management teams in frameworks, team processes and leadership dynamics to deliver sustainable value.',
  },
  {
    id: '#2',
    title: 'Financial services advisory',
    content: 'Get market-driven expertise to achieve your goals in banking, insurance, capital markets, and investment management.',
  },
  {
    id: '#3',
    title: 'Business risk services',
    content: 'Our market-driven expertise helps firms keep growing and manage risk in an evolving regulatory landscape.',
  },
  {
    id: '#4',
    title: 'Economic consulting',
    content: 'Bespoke guidance grounded in complex economic theory and practical sector insight to help you make the right decisions.',
  },
  {
    id: '#5',
    title: 'Transaction advisory services',
    content: 'Whether buying or selling, we help you get the deal done with our comprehensive range of transaction advisory services.',
  },
  {
    id: '#6',
    title: 'Financial accounting advisory services (FAAS)',
    content: 'Our FAAS team can support your finance function with the flexible resource they need to get results.',
  },
  {
    id: '#7',
    title: 'Insolvency and global asset recovery',
    content: 'We provide asset tracing and seamless cross-border global recovery for clients.',
  },
  {
    id: '#8',
    title: 'Forensic and investigation services',
    content: 'Market-driven expertise in investigations, dispute resolution and digital forensics.',
  },
  {
    id: '#9',
    title: 'Transformation consulting',
    content: 'Is business transformation a priority for your organisation? Our expert insight and guidance can help you achieve it.',
  },
];

const Solutions = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  return (
    <div className='w-full h-full relative section-padding bg-[#333333] overflow-hidden'>
      <section className="big-label-text flex items-center justify-center">
        <div>
          <div className="mb-14 | sm:mb-16 md:mb-20 | lg:mb-24">
            <span className="smallHeading smallHeading--left opacity-50 text-white">
              Bespoke Solutions for Optimal Results
            </span>
            <h2
              className="sectionHeading sectionHeading--medium text-white"
              style={{
                margin: '0',
                textAlign: 'left'
              }}
            >
              Our consulting agency delivers customized strategies to tackle your unique challenges. From optimizing processes to implementing innovative technology, we turn your vision into reality with expert guidance.{' '}
            </h2>
          </div>

          {sections.map((section, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-x-16 justify-between border-t border-white border-opacity-25 mt-9 mb-14 pt-8 | sm:flex-row sm:mb-16 sm:pt-10 | md:mb-20 md:pt-16 | lg:mb-24 lg:pt-36 | xl:pt-52"
              style={{
                maxWidth: '1172px'
              }}
            >
              <span
                className="absolute text-black font-medium z-0 top-0 left-0 leading-none text-7xl | sm:text-8xl | md:text-9xl lg:text-[285px]"
                data-aos="fade-in"
              >
                {section.id}
              </span>
              <h2
                className="big-label-text__heading text-white font-medium relative sectionHeading sectionHeading--left sectionHeading--big z-10 w-5/12 lg:max-w-xl mb-8 sm:m-0"
                style={{
                  maxWidth: '582px'
                }}
                data-aos="fade-right"
              >
                {section.title}
              </h2>
              <div
                className="Wysiwyg Wysiwyg--medium  Wysiwyg--light-bg w-full z-10 | lg:w-5/12"
                data-aos="fade-left"
              >
                <p className='text-white'>
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="md:absolute bottom-0 w-full items-center justify-center mx-auto text-white">
        <div className="w-full md:flex md:flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row md:justify-between items-center text-18 md:text-5">
            <div className="flex flex-col md:flex-row md:mb-0">
              <div className="mb-8 md:mr-5">
                ©
                <span className="mr-1.5 ml-0.5 uppercase" itemProp="copyrightHolder">
                  Unicepta
                </span>
                <span itemProp="copyrightYear">2024</span>
              </div>
              <ul className="space-y-3 md:flex md:space-x-5 md:space-y-0">
                <li>
                  <a href="/contact.html">Contact</a>
                </li>
                <li>
                  <a href="/privacy-policy.html">Privacy Policy</a>
                </li>
                <li>
                  <a href="/imprint.html">Imprint</a>
                </li>
                <li>
                  <a href="/newsletter.html">Newsletter</a>
                </li>
                <li>
                  <a href="/anti-slavery-policy.html">Anti-Slavery Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Solutions;
