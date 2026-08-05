import React, { useState } from 'react';
import tech1 from '../../assets/tech1.png';
import tech2 from '../../assets/tech2.png';

const techData = [
  {
    id: 0,
    title: "Trading App",
    image: tech1,
  },
  {
    id: 1,
    title: "Web Platform",
    image: tech2,
  },
  {
    id: 2,
    title: "Back Office",
    image: tech1, // Reusing placeholder, user will replace
  },
  {
    id: 3,
    title: "CRM",
    image: tech2, // Reusing placeholder, user will replace
  },
  {
    id: 4,
    title: "Partner Dashboard",
    image: tech1, // Reusing placeholder, user will replace
  }
];

const LearnToEarn = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#0a0f1c] py-24 md:py-32 overflow-hidden relative">
      {/* Abstract Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight uppercase mb-6">
            Our <span className="text-brand-green">Technology</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Experience the future of trading and management with our suite of ultra-fast, premium platforms.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Interactive Typography Menu */}
          <div className="w-full lg:w-5/12 flex flex-col gap-8">
            {techData.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <div 
                  key={item.id}
                  onMouseEnter={() => setActiveTab(index)}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer transition-all duration-500 flex items-center gap-6 group`}
                >
                  <div className={`h-[2px] transition-all duration-500 ${isActive ? 'w-16 bg-brand-green' : 'w-0 bg-transparent group-hover:w-8 group-hover:bg-gray-600'}`}></div>
                  <h3 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold transition-all duration-500 ${
                    isActive 
                      ? 'text-white translate-x-2' 
                      : 'text-gray-600 hover:text-gray-400'
                  }`}>
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Right Side: Device Showcase */}
          <div className="w-full lg:w-7/12 relative perspective-1000">
            {/* The Device Frame (Glassmorphism Mockup) */}
            <div className="relative w-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-4 md:p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform transition-transform duration-700 hover:scale-[1.02]">
              
              {/* Fake Window Controls */}
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>

              {/* The Screen */}
              <div className="relative w-full aspect-[16/10] bg-[#0f172a] rounded-xl overflow-hidden shadow-inner border border-white/5">
                {techData.map((item, index) => (
                  <div 
                    key={item.id}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                      activeTab === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform transition-transform duration-[2s] hover:scale-105"
                    />
                  </div>
                ))}
                
                {/* Screen Gloss Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20"></div>
              </div>
            </div>
            
            {/* Ambient Shadow under device */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-brand-green/20 blur-2xl rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearnToEarn;
