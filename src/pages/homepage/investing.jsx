import React, { useState } from 'react';
import img1 from '../../assets/mobile phone.png';
import img2 from '../../assets/Seamless-2nd-2x.png';
import img3 from '../../assets/Seamless-3rd-2x.png';

const investingData = [
  {
    id: 0,
    title: "Zero Commission on Mutual Fund Investments/SIPs",
    description: "Enjoy the compounding returns of mutual funds and SIPs, at no additional costs.",
    image: img1
  },
  {
    id: 1,
    title: "Portfolio Advisory",
    description: "Access ready-to-invest, well-researched portfolios built by experts, empowering you to make informed investment decisions.",
    image: img2
  },
  {
    id: 2,
    title: "24/7 Order Placement",
    description: "Place buy/sell orders for stocks, bonds, and other assets at any time, round the clock, so you never miss an opportunity in the fast-paced world of finance.",
    image: img3
  }
];

const Investing = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Dynamic Image */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-[550px] lg:-ml-6 xl:-ml-12">
              <img 
                key={activeTab}
                src={investingData[activeTab].image} 
                alt={investingData[activeTab].title} 
                className="w-full h-auto object-contain relative z-10 transform hover:scale-[1.02] transition-transform duration-500 animate-fadeIn"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 tracking-tight uppercase">
              Seamless Investing
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-xl">
              Experience seamless investing with DB Fintrix. Access the industry's best tools and expert insights to achieve your financial goals.
            </p>

            <div className="space-y-6">
              {investingData.map((item, index) => {
                const isActive = activeTab === index;
                return (
                  <div 
                    key={item.id}
                    onClick={() => setActiveTab(index)}
                    className={`cursor-pointer transition-all duration-300 rounded-r-xl ${
                      isActive 
                        ? 'bg-brand-blue/5 border-l-4 border-brand-blue p-6 shadow-sm' 
                        : 'border-l-4 border-transparent p-6 hover:border-brand-green hover:bg-brand-light'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-brand-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Investing;
