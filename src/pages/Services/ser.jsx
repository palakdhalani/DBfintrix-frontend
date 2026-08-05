import React from 'react';
import Navbar from '../../Comman components/Navbar';
import Footer from '../../Comman components/Footer';
import PickYourInvestment from '../homepage/PickYourInvestment';

const ServicesMainPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar theme="solid-dark" />
      <div className="flex-grow pt-20">
          <PickYourInvestment />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesMainPage;
