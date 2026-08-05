import React, { useState, useEffect } from 'react';

const ServiceHero = ({ image }) => {
  const [content, setContent] = useState({
    heading: 'Enjoy 1 month of <br className="hidden md:block" /> FREE trading',
    subheading: 'Stocks, F&O, Intraday, all at ₹0 brokerage',
    imageUrl: image
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/hero/services-hero`);
        if (res.ok) {
          const data = await res.json();
          setContent({
            heading: data.heading || 'Enjoy 1 month of <br className="hidden md:block" /> FREE trading',
            subheading: data.subheading || 'Stocks, F&O, Intraday, all at ₹0 brokerage',
            imageUrl: data.imageUrl || image
          });
        }
      } catch (err) {
        console.error("Failed to load dynamic hero content:", err);
      }
    };
    fetchContent();
  }, [image]);

  return (
    <div className="bg-white pt-28 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <h3 className="text-brand-dark font-bold text-xs md:text-sm tracking-wide uppercase mb-3 md:mb-4">
              OPEN DEMAT ACCOUNT ONLINE
            </h3>
            {/* use dangerouslySetInnerHTML to allow <br> tags in the dynamic heading */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4 md:mb-6 tracking-tight"
              dangerouslySetInnerHTML={{ __html: content.heading }}
            />
            <p className="text-brand-gray text-base md:text-lg font-medium mb-6 md:mb-8">
              {content.subheading}
            </p>

            <p className="text-[10px] md:text-xs text-gray-500 mb-6">
              By continuing, I accept DB Fintrix's <a href="#" className="text-brand-dark underline">T&C and Privacy policy</a> and <a href="#" className="text-brand-dark underline">offer T&C</a>
            </p>

            <div className="flex flex-col sm:flex-row items-stretch w-full max-w-xl gap-3 md:gap-4">
              <div className="flex flex-grow items-center bg-white border border-gray-300 rounded-full px-4 py-3 md:py-3 shadow-sm focus-within:border-brand-dark focus-within:ring-1 focus-within:ring-brand-dark transition-all">
                <span className="text-lg md:text-xl mr-2" role="img" aria-label="India Flag">🇮🇳</span>
                <span className="font-semibold text-sm md:text-base text-gray-700 mr-2 border-r border-gray-300 pr-2">+91</span>
                <input
                  type="tel"
                  id="demat-mobile"
                  placeholder="Enter your mobile number"
                  className="flex-grow min-w-0 outline-none text-sm md:text-base text-gray-800 placeholder-gray-400 bg-transparent"
                />
              </div>
              <button 
                onClick={() => {
                  const mobile = document.getElementById('demat-mobile').value;
                  if(mobile.length >= 10) {
                    const message = encodeURIComponent(`Hello, I would like to open a Demat Account. My mobile number is: ${mobile}`);
                    window.open(`https://wa.me/919033600411?text=${message}`, '_blank');
                  } else {
                    alert('Please enter a valid mobile number');
                  }
                }}
                className="bg-brand-dark hover:bg-gray-800 text-white px-8 py-3.5 md:py-3 rounded-full font-bold text-sm flex-shrink-0 transition-colors shadow-lg shadow-gray-900/20 whitespace-nowrap w-full sm:w-auto"
              >
                Open Demat Account
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
            {content.imageUrl && (
              <img
                src={content.imageUrl}
                alt="Free Trading Offer"
                className="w-full max-w-md lg:max-w-lg rounded-3xl object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
