import React, { useState } from 'react';
import img1 from '../../assets/Buid-1st-2x.png';
import img2 from '../../assets/fast-order-placement.png';
import img3 from '../../assets/1775050657924-Trading-View.png';

const learnData = [
  {
    id: 0,
    title: "Swifter Charts",
    description: "Enjoy real-time charting powered by advanced indicators, multi-chart layouts, direct trading from charts, etc.",
    image: img1
  },
  {
    id: 1,
    title: "Fast Order Placement",
    description: "Execute trades with speed and precision, giving you the edge in dynamic markets.",
    image: img2
  },
  {
    id: 2,
    title: "Trade with TradingView",
    description: "Place multiple orders together using Basket Orders on TradingView.",
    image: img3
  }
];

const LearnToEarn = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Content & Tabs */}
          <div className="lg:w-1/2">
            
            {/* Header */}
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 tracking-tight uppercase">
               BUILT FOR TRADERS
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Empower yourself with the right knowledge and tools to make informed investment decisions and grow your wealth.
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="flex flex-col space-y-2">
              {learnData.map((item, index) => {
                const isActive = activeTab === index;
                return (
                  <div 
                    key={item.id}
                    onClick={() => setActiveTab(index)}
                    className={`cursor-pointer transition-all duration-300 rounded-r-xl ${
                      isActive 
                        ? 'bg-brand-green/5 border-l-4 border-brand-green p-6 shadow-sm' 
                        : 'border-l-4 border-transparent p-6 hover:bg-gray-50'
                    }`}
                  >
                    <h3 className={`text-xl font-bold mb-2 ${isActive ? 'text-brand-dark' : 'text-gray-700'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isActive ? 'text-gray-600' : 'text-gray-500'}`}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Side: Dynamic Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[550px] lg:-mr-6 xl:-mr-12">
              <img 
                key={activeTab}
                src={learnData[activeTab].image} 
                alt={learnData[activeTab].title} 
                className="w-full h-auto object-contain relative z-10 transform hover:scale-[1.02] transition-transform duration-500 animate-fadeIn"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearnToEarn;
