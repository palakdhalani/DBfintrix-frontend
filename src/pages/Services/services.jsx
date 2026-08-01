import React from 'react';
import heroImg from '../../assets/hero.png'; 

const Services = () => {
  return (
    <div className="bg-brand-light py-24">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="lg:w-2/3">
            <span className="bg-brand-green/10 text-brand-green font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-4">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
              Financial Services To Grow And <br className="hidden md:block" /> Secure Your Wealth
            </h2>
          </div>
          <div className="lg:w-1/3 flex flex-col items-start lg:items-end text-left lg:text-right">
            <p className="text-gray-500 text-sm mb-6 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
            </p>
            <button className="bg-brand-green hover:bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-lg shadow-green-900/20">
              Learn More →
            </button>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group rounded-3xl overflow-hidden relative shadow-lg h-[400px]">
            <img src={heroImg} alt="Business Strategies" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
               <div className="bg-brand-dark/90 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between border border-white/10 group-hover:bg-brand-blue transition-colors duration-300">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                   </div>
                   <h3 className="text-white font-bold text-lg">Business <br/> Strategies</h3>
                 </div>
                 <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-blue transition-colors">
                   ↗
                 </div>
               </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group rounded-3xl overflow-hidden relative shadow-lg h-[400px]">
            <img src={heroImg} alt="Taxes & Accounting" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
               <div className="bg-brand-dark/90 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between border border-white/10 group-hover:bg-brand-blue transition-colors duration-300">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                   </div>
                   <h3 className="text-white font-bold text-lg">Taxes & <br/> Accounting</h3>
                 </div>
                 <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-blue transition-colors">
                   ↗
                 </div>
               </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group rounded-3xl overflow-hidden relative shadow-lg h-[400px]">
            <img src={heroImg} alt="Financial Planning" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
               <div className="bg-brand-dark/90 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between border border-white/10 group-hover:bg-brand-blue transition-colors duration-300">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                   </div>
                   <h3 className="text-white font-bold text-lg">Financial <br/> Planning</h3>
                 </div>
                 <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-blue transition-colors">
                   ↗
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
