import React from 'react';
import Navbar from '../../Comman components/Navbar';
import Footer from '../../Comman components/Footer';
// import Insights from './Insights';
// import MarketStories from './MarketStories';
import Market from './Market';
import Finance from './Finance';

const News = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar theme="solid-dark" />
      <div className="flex-grow pt-24 space-y-12 pb-20">
        <Market/>
        <Finance/>
        {/* <Insights /> */}
      </div>
      <Footer />
    </div>
  );
};

export default News;
