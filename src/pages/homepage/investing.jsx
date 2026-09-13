import React, { useState, useEffect } from 'react';
import AnimatedWords from '../../Comman components/AnimatedWords';
import img1 from '../../assets/mobile phone.png';
import img2 from '../../assets/Seamless-2nd-2x.png';
import img3 from '../../assets/Seamless-3rd-2x.png';
import { Sparkles, ShieldCheck, Clock, Zap } from 'lucide-react';

const investingData = [
  {
    id: 0,
    title: "Zero Commission on Mutual Fund Investments/SIPs",
    description: "Enjoy the compounding returns of mutual funds and SIPs, at no additional costs.",
    image: img1,
    badge: "100% Direct & Zero Fee",
    themeColor: "from-blue-500 to-indigo-600",
    borderActive: "border-brand-blue bg-blue-50/40",
    pillBg: "bg-blue-100 text-blue-700",
    icon: <Sparkles className="w-5 h-5 text-brand-blue" />
  },
  {
    id: 1,
    title: "Portfolio Advisory & Expert Research",
    description: "Access ready-to-invest, well-researched portfolios built by experts, empowering you to make informed investment decisions.",
    image: img2,
    badge: "SEBI Registered Insights",
    themeColor: "from-emerald-500 to-green-600",
    borderActive: "border-brand-green bg-green-50/40",
    pillBg: "bg-green-100 text-green-700",
    icon: <ShieldCheck className="w-5 h-5 text-brand-green" />
  },
  {
    id: 2,
    title: "24/7 Instant Order Placement",
    description: "Place buy/sell orders for stocks, bonds, and other assets at any time, round the clock, so you never miss an opportunity in the fast-paced world of finance.",
    image: img3,
    badge: "Ultra-Low Latency",
    themeColor: "from-amber-500 to-orange-600",
    borderActive: "border-amber-500 bg-amber-50/40",
    pillBg: "bg-amber-100 text-amber-700",
    icon: <Clock className="w-5 h-5 text-amber-600" />
  }
];

const Investing = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-cycle through tabs every 5 seconds when user is not hovering
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % investingData.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const currentItem = investingData[activeTab];

  return (
    <section 
      className="bg-white py-20 md:py-28 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Dynamic Image with Floating Badge & Shadow */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-[520px] lg:-ml-6 xl:-ml-12 flex items-center justify-center">
              
              {/* Floating feature badge on top-right */}
              <div 
                key={`badge-${activeTab}`}
                className="absolute top-6 right-6 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2.5 animate-float-slow"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-brand-green animate-ping"></div>
                <span className="text-xs font-bold text-gray-800">{currentItem.badge}</span>
              </div>

              {/* Dynamic Image with animated scale transition */}
              <img 
                key={activeTab}
                src={currentItem.image} 
                alt={currentItem.title} 
                className="w-full h-auto object-contain relative z-10 filter drop-shadow-2xl animate-fade-in transform hover:scale-105 transition-all duration-700"
              />

              {/* Floor Shadow */}
              <div className="absolute -bottom-6 w-3/4 h-8 bg-black/10 blur-xl rounded-full"></div>
            </div>
          </div>

          {/* Right Side: Content & Animated Tabs */}
          <div className="lg:w-1/2">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
              <Zap className="w-3.5 h-3.5" />
              <span>Smart Trading Experience</span>
            </div>

            {/* Heading with Word-by-Word Animation & Text Gradient */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight uppercase">
              <AnimatedWords 
                text="Seamless Investing" 
                highlightWords={["Investing"]} 
                highlightClassName="animate-text-gradient font-black"
              />
            </h2>

            <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed max-w-xl">
              Experience seamless investing with DB Fintrix. Access the industry's best tools and expert insights to achieve your financial goals effortlessly.
            </p>

            {/* Interactive Tab List with Color Change & Progress Bar */}
            <div className="space-y-4">
              {investingData.map((item, index) => {
                const isActive = activeTab === index;
                return (
                  <div 
                    key={item.id}
                    onClick={() => setActiveTab(index)}
                    className={`cursor-pointer transition-all duration-500 rounded-2xl border-l-4 p-6 relative overflow-hidden ${
                      isActive 
                        ? `${item.borderActive} shadow-lg shadow-gray-200/50 transform translate-x-1.5` 
                        : 'border-transparent p-6 hover:border-gray-300 hover:bg-gray-50/80 bg-white'
                    }`}
                  >
                    {/* Active tab progress bar */}
                    {isActive && !isHovered && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100">
                        <div 
                          className="h-full bg-gradient-to-r slider-progress-active"
                          style={{
                            backgroundImage: index === 0 
                              ? 'linear-gradient(to right, #3b82f6, #004aad)' 
                              : index === 1 
                              ? 'linear-gradient(to right, #10b981, #0f9d27)' 
                              : 'linear-gradient(to right, #f59e0b, #d97706)'
                          }}
                        ></div>
                      </div>
                    )}

                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-xl transition-all duration-300 ${isActive ? item.pillBg : 'bg-gray-100 text-gray-400'}`}>
                        {item.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className={`text-lg sm:text-xl font-bold mb-1.5 transition-colors ${
                          isActive ? 'text-brand-dark' : 'text-gray-700'
                        }`}>
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
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
