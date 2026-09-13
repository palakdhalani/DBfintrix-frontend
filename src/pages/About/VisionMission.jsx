import React from 'react';
import { Target, Compass } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="py-20 bg-brand-light relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-brand-green/5 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-brand-blue font-bold tracking-widest text-sm">›››</span>
            <span className="text-brand-dark font-extrabold tracking-wider text-sm uppercase">
              OUR FOUNDATION
            </span>
            <span className="text-brand-blue font-bold tracking-widest text-sm">‹‹‹</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight tracking-tight mb-4">
            Our Mission & <span className="text-brand-green">Vision</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            The guiding principles driving our commitment to your financial protection and long-term prosperity.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_35px_rgba(10,29,66,0.08)] hover:border-brand-green/30 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-green transition-all duration-300 group-hover:w-3"></div>
            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-brand-dark mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              To be the most trusted, customer-first financial and insurance partner by delivering tailored risk protection, transparent advisory, and wealth management services with unwavering integrity and service excellence.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-green/10 text-brand-green">Excellence</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">Client First</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700">Transparency</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_35px_rgba(10,29,66,0.08)] hover:border-brand-blue/30 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue transition-all duration-300 group-hover:w-3"></div>
            <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-brand-dark mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              To build a nationwide ecosystem where every individual and business enjoys seamless access to robust insurance security, prudent financial growth, and dependable long-term financial freedom.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-brand-blue">Long-Term Growth</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">Security</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-green/10 text-brand-green">Innovation</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;
