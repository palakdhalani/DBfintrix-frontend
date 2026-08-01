import React from 'react';
import heroImg from '../../assets/hero.png'; 

const Consultant = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Image Section */}
          <div className="lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* using placeholder image */}
              <div className="aspect-[4/3] bg-gray-200">
                <img src={heroImg} alt="Consultation Meeting" className="w-full h-full object-cover" />
              </div>
              
              {/* Optional decorative elements could go here */}
            </div>
          </div>

          {/* Right Text Section */}
          <div className="lg:w-1/2">
            <span className="bg-brand-green/10 text-brand-green font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-4">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-10">
              The Best Finance <br /> Consultant In Town
            </h2>

            <div className="flex flex-col md:flex-row gap-8 mb-10">
              <div className="flex-1">
                <div className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h4 className="text-lg font-bold text-brand-dark mb-2">Company Mission</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>

              <div className="flex-1">
                <div className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h4 className="text-lg font-bold text-brand-dark mb-2">Company Vission</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>

            <div className="bg-brand-dark text-white rounded-full p-2 pr-6 pl-4 flex items-center justify-between shadow-xl">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center">✓</div>
                 <span className="text-sm font-medium">Join us to achieve sustainable growth and reach your financial goals.</span>
               </div>
               <button className="bg-brand-green hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors">
                 Learn More →
               </button>
            </div>

          </div>
        </div>

        {/* Stats Section below */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-gray-200 pt-16">
          <div className="text-center md:text-left">
            <div className="text-5xl font-bold text-brand-dark mb-2">25<span className="text-brand-green">+</span></div>
            <p className="text-gray-500 text-sm font-medium max-w-[150px] mx-auto md:mx-0">A legacy of expertise spanning 25+ years.</p>
          </div>
          <div className="text-center md:text-left">
            <div className="text-5xl font-bold text-brand-dark mb-2">150K<span className="text-brand-green">+</span></div>
            <p className="text-gray-500 text-sm font-medium max-w-[150px] mx-auto md:mx-0">Where ideas flourish and projects thrive.</p>
          </div>
          <div className="text-center md:text-left">
            <div className="text-5xl font-bold text-brand-dark mb-2">98<span className="text-brand-green">%</span></div>
            <p className="text-gray-500 text-sm font-medium max-w-[150px] mx-auto md:mx-0">Striving for customer satisfaction is top priority.</p>
          </div>
          <div className="text-center md:text-left">
            <div className="text-5xl font-bold text-brand-dark mb-2">$40M<span className="text-brand-green">+</span></div>
            <p className="text-gray-500 text-sm font-medium max-w-[150px] mx-auto md:mx-0">This is our pure benefit to our clients.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Consultant;
