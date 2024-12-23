import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const rules = [
  {
    id: '#1',
    title: 'Eligibility',
    content: 'All students in the team should belong to the same college. The tournament is open only to undergraduate students studying in colleges across the country. Students born on or after 1st January 1999 are eligible to participate in the tournament.',
  },
  {
    id: '#2',
    title: 'Conduct on Field',
    content: 'Do not spit or clear nasal passages on the field of play. Any person refusing to follow instructions will lead to disqualification of the team and will be sent out of the campus.',
  },
  {
    id: '#3',
    title: 'Registration',
    content: 'The last date for filling the registration form is 20th February 2023. Any registration received post the last date will not be taken into consideration.',
  },
  {
    id: '#4',
    title: 'Required Documents',
    content: 'Players are required to carry a bonafide, the team list, a Government ID card, and the ID cards issued by the college for all matches. Players will not be allowed to play without fulfilling the required formalities. The Skream Organising Committee’s decision will be final.',
  },
  {
    id: '#5',
    title: 'Prize Money',
    content: 'Prize money is subject to change depending on the number of entries.',
  },
  {
    id: '#6',
    title: 'Match Rules',
    content: 'The umpires’/referees’ decision is final. Players/teams should report at the venue 45 minutes prior to the match time. Exceeding this time limit may lead to forfeiture of the match.',
  },
  {
    id: '#7',
    title: 'Responsibility and Misconduct',
    content: 'The college and the Skream Organising Committee will not be responsible for injuries or mishaps during the competition. Misconduct on/off the field will be severely dealt with by the Skream OC.',
  },
  {
    id: '#8',
    title: 'Disputes',
    content: 'Any disputes should be brought to the notice of the event head or Skream OC. The decision of the Skream OC will be final.',
  },
  {
    id: '#9',
    title: 'Miscellaneous',
    content: 'Football is not included in the contingency points. Refunds will not be provided under any circumstances.',
  },
];

const Rules = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  return (
    <div className="w-full h-full bg-white pb-[var(--section-padding)]">
      <section className="w-full flex flex-col items-center">
        <div className="w-[90%] px-4">
          <div className="mb-10 text-left">
            <span className="block text-base text-gray-500 font-medium uppercase tracking-wide">
              Official Tournament Rules
            </span>
            <div className='flex items-center gap-4'>
            <div className='text-center'>
                <div className='ornament mt-1'>
                  <img src="/videos/icons8-goal.gif" alt="Ornament" />
                </div>
              </div>
            <h1 className="text-5xl text-[#e88024] mt-3 leading">
            Follow rules for a fair, disciplined, and safe tournament.
            </h1>
            </div>
          </div>

          {rules.map((rule, index) => (
            <div
              key={index}
              className="flex flex-col border-t border-gray-300 pt-6 mt-6"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-6">
                <span className="text-gray-500 text-2xl lg:text-3xl font-bold">{rule.id}</span>
                <h3 className="text-lg  lg:text-2xl font-semibold text-gray-800 font-lakeshore">
                  {rule.title}
                </h3>
              </div>
              <p className="text-base lg:text-lg text-gray-700 mt-3 leading-relaxed">
                {rule.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rules;
