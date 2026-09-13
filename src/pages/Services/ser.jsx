import React, { useState, useEffect } from 'react';
import Navbar from '../../Comman components/Navbar';
import Footer from '../../Comman components/Footer';
import { 
  Shield, Heart, Car, Wrench, Users, Ship, Flame, 
  UserCheck, Briefcase, CheckCircle2, ArrowRight, 
  PhoneCall, Mail, HelpCircle, FileText, Sparkles 
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { servicesData } from './servicesData';

const ServicesMainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');

  const [activeServiceId, setActiveServiceId] = useState(() => {
    if (serviceParam && servicesData.some(s => s.id === serviceParam)) {
      return serviceParam;
    }
    return servicesData[0]?.id || 'bonds';
  });

  // Sync when query param changes
  useEffect(() => {
    if (serviceParam && servicesData.some(s => s.id === serviceParam)) {
      setActiveServiceId(serviceParam);
      // Smooth scroll to content
      setTimeout(() => {
        const contentEl = document.getElementById('service-content-view');
        if (contentEl) {
          contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 120, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [serviceParam]);

  const currentService = servicesData.find(s => s.id === activeServiceId) || servicesData[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      {/* Existing Website Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          <div className="flex flex-col lg:flex-row gap-8 items-start mt-4">
            
            {/* Left Sidebar Navigation */}
            <aside className="w-full lg:w-3/12 shrink-0">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-3 sm:p-4 sticky top-28">
                
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider px-3 py-2 mb-1">
                  Services for Investors
                </h3>

                <nav className="flex flex-col gap-1.5">
                  {servicesData.map((service) => {
                    const isActive = activeServiceId === service.id;
                    return (
                      <button
                        key={service.id}
                        onClick={() => {
                          setActiveServiceId(service.id);
                          setSearchParams({ service: service.id });
                          const contentEl = document.getElementById('service-content-view');
                          if (contentEl) {
                            contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                        className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-bold text-sm text-left transition-all duration-200 cursor-pointer ${
                          isActive 
                            ? 'bg-blue-50 text-brand-blue shadow-xs font-extrabold border-l-4 border-brand-blue' 
                            : 'text-gray-600 hover:text-brand-dark hover:bg-gray-50 border-l-4 border-transparent'
                        }`}
                      >
                        <span className="truncate pr-2">{service.title}</span>
                        <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                          isActive ? 'text-brand-blue translate-x-1' : 'text-gray-300'
                        }`} />
                      </button>
                    );
                  })}
                </nav>

                {/* Quick Help Box */}
                <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-indigo-50/60 rounded-xl border border-blue-100/80 text-left">
                  <div className="flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Need Guidance?</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Unsure which investment product or portfolio strategy fits your financial goals? Speak with our certified wealth advisor.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full py-2.5 px-3 bg-brand-dark text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-gray-800 transition-colors shadow-sm"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-brand-green" />
                    <span>Contact Advisor</span>
                  </Link>
                </div>

              </div>
            </aside>

            {/* Right Detailed Content Area */}
            <section 
              id="service-content-view"
              className="w-full lg:w-9/12 bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-10 text-left animate-fade-in scroll-mt-28"
            >
              
              {/* Header Tag & Title (Matches screenshot design) */}
              <div className="mb-6 pb-4 border-b border-gray-100">
                <div className="text-[11px] font-extrabold text-blue-600 tracking-widest uppercase mb-1">
                  {currentService.tag}
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a2c4c] tracking-tight">
                  {currentService.title}
                </h1>
              </div>

              {/* Main Service Banner Image */}
              <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-8 shadow-sm border border-gray-100 bg-gray-100">
                <img 
                  key={currentService.id}
                  src={currentService.image} 
                  alt={currentService.title} 
                  className="w-full h-full object-cover animate-fade-in"
                />
              </div>

              {/* Body Content */}
              <div className="space-y-8 text-gray-700">
                
                {/* Subtitle & Intro */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-dark mb-3">
                    "{currentService.subtitle}"
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {currentService.intro}
                  </p>
                </div>

                {/* What is this Service */}
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-brand-blue" />
                    <span>What is {currentService.title}?</span>
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {currentService.whatIs}
                  </p>
                </div>

                {/* Types of Policy */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-4">
                    Types of {currentService.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentService.types.map((type, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-gray-200 bg-white hover:border-blue-300 transition-colors shadow-2xs">
                        <h4 className="font-bold text-sm text-brand-dark mb-1 text-blue-700">
                          {type.name}
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {type.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why do you need it */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-4">
                    Why do you need {currentService.title}?
                  </h3>
                  <div className="space-y-3">
                    {currentService.whyNeed.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/40 border border-blue-100/60">
                        <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-sm font-bold text-gray-800 block mb-0.5">
                            {item.title}
                          </strong>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coverage Calculation Formula */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
                  <h3 className="text-base font-bold text-brand-blue uppercase tracking-wide mb-2">
                    How to calculate coverage?
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {currentService.calculation}
                  </p>
                </div>

                {/* Why Choose Us */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-4">
                    Why Choose DB Fintrix for {currentService.title}?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentService.whyChoose.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs sm:text-sm font-medium text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action Banner at bottom of article */}
                <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0a1d42] to-[#004aad] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold mb-2">
                      Ready to Protect Your Future?
                    </h4>
                    <p className="text-blue-100 text-xs sm:text-sm max-w-md">
                      Get a personalized insurance quote with the lowest premium rates and maximum settlement assurance.
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="px-8 py-3.5 bg-brand-green hover:bg-green-600 text-white font-bold text-sm rounded-full transition-all shadow-lg hover:shadow-xl shrink-0 flex items-center gap-2"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </section>

          </div>

        </div>
      </main>

      {/* Existing Website Footer */}
      <Footer />
    </div>
  );
};

export default ServicesMainPage;
