import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, TrendingUp, ChevronRight } from 'lucide-react';
import bgImage from '../../assets/why choose us photo.jpg';

const AboutHero = () => {
  return (
    <div 
      className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      {/* Dark Overlay with DB Fintrix theme gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d42]/95 via-[#0a1d42]/85 to-[#004aad]/70 z-0"></div>

      {/* Decorative Glow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-green/20 blur-[100px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-500/20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-300 mb-6 font-medium">
          <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-brand-green">About Us</span>
        </div>

        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-green/40 bg-brand-green/10 text-brand-green font-semibold text-xs md:text-sm uppercase tracking-wider mb-6 shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-green"></span>
            About Dealing Beneficial Fintrix
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight animate-fade-in-up">
            Empowering Your Financial Growth With <span className="text-brand-green">Trust & Expertise</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 animate-fade-in-up delay-100">
            At DB Fintrix, we combine over two decades of senior leadership experience in insurance broking and financial advisory to protect your assets and accelerate your wealth creation journey.
          </p>

          {/* Quick Highlight Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center text-brand-green">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">20+ Yrs</p>
                <p className="text-gray-400 text-xs mt-1">Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">50K+</p>
                <p className="text-gray-400 text-xs mt-1">Happy Clients</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center text-brand-green">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">100%</p>
                <p className="text-gray-400 text-xs mt-1">Transparent</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">360°</p>
                <p className="text-gray-400 text-xs mt-1">Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
