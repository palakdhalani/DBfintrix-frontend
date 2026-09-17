import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedWords from '../../Comman components/AnimatedWords';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { servicesData } from '../Services/servicesData';

const PickYourInvestment = () => {
  const navigate = useNavigate();

  const handleCardClick = (serviceId) => {
    navigate(`/services?service=${serviceId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-20 md:py-28 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-brand-green font-bold tracking-widest text-sm">›››</span>
            <span className="text-brand-dark font-extrabold tracking-wider text-sm uppercase">
              SERVICES FOR INVESTORS
            </span>
            <span className="text-brand-green font-bold tracking-widest text-sm">‹‹‹</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark uppercase tracking-tight mb-4">
            <AnimatedWords 
              text="Our Services for" 
              className="mr-3"
            />
            <span className="animate-text-gradient font-black block sm:inline">
              Investors
            </span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-3xl leading-relaxed">
            Discover DB Fintrix's complete suite of investment, trading, and wealth management services designed for modern investors. Click on any service below to view full details and start investing.
          </p>
        </div>

        {/* Core Services Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              onClick={() => handleCardClick(service.id)}
              className="group bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-2xl hover:border-brand-green/50 transition-all duration-400 flex flex-col overflow-hidden cursor-pointer hover-lift shine-overlay relative"
            >
              {/* Card Image Thumbnail */}
              <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d42]/70 via-[#0a1d42]/20 to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-dark shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                  {service.badge}
                </div>

                {/* Tag on bottom left of thumbnail */}
                <div className="absolute bottom-3 left-4 text-[10px] font-extrabold text-blue-200 uppercase tracking-wider">
                  {service.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow text-left">
                <h3 className="text-brand-dark text-xl font-bold mb-2.5 group-hover:text-brand-green transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {service.description}
                </p>

                {/* View Details Prompt linking directly to that service */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-brand-dark font-bold text-xs uppercase tracking-wider group-hover:text-brand-green transition-colors">
                  <span className="group-hover:translate-x-0.5 transition-transform">Explore Service Details</span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all shadow-xs">
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gray-50 border border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-dark">Backed by SEBI Registered Depository & Market Intermediaries</h4>
              <p className="text-xs text-gray-500">Unbiased research, 100% paperless digital onboarding, and dedicated wealth advisory.</p>
            </div>
          </div>
          <Link
            to="/services"
            className="px-6 py-2.5 bg-brand-dark hover:bg-gray-800 text-white font-bold text-xs rounded-full transition-all shadow-sm flex items-center gap-2 shrink-0"
          >
            <span>View All Detailed Specs</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-green" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PickYourInvestment;
