import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ServiceHero from '../pages/Services/ServiceHero';
import ServiceCards from '../pages/Services/ServiceCards';
import InvestmentOptions from '../pages/Services/InvestmentOptions';
import HowtoOpen from '../pages/Services/HowtoOpen';
import WhyOpenDemat from '../pages/Services/WhyOpenDemat';
import Documents from '../pages/Services/Documents';
import Pricing from '../pages/homepage/Pricing';
import slide1 from '../assets/1 slide.png';

const serviceCardsData = [
    { 
      title: "Business <br/> Strategies", 
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
      image: slide1 
    },
    { 
      title: "Taxes & <br/> Accounting", 
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>,
      image: slide1 
    },
    { 
      title: "Financial <br/> Planning", 
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
      image: slide1 
    },
];

const OpenAccount = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar theme="solid-dark" />
      <div className="flex-grow">
        <ServiceHero image={slide1} />
        <HowtoOpen />
        <WhyOpenDemat />
        <Pricing />
        <InvestmentOptions />
        <Documents />
        {/* <ServiceCards cardsData={serviceCardsData} /> */}
      </div>
      <Footer />
    </div>
  );
};

export default OpenAccount;
