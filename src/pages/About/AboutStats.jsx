import React from 'react';
import { TrendingUp, Check } from 'lucide-react';

const AboutStats = () => {
  return (
    <section className="py-16 md:py-20 bg-[#0a1d42] text-white relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-green/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-8 sm:p-12 rounded-3xl backdrop-blur-md shadow-2xl text-center hover:border-brand-green/50 transition-all duration-500 group">
          
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-green/20 border border-brand-green/40 text-brand-green mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
            <TrendingUp className="w-8 h-8" />
          </div>

          {/* Stat Value */}
          <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-3">
            100%
          </div>

          {/* Stat Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-brand-green mb-3 tracking-wide">
            Transparent Advice
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-6">
            Zero hidden charges and objective product advice. Empowering your wealth creation journey with complete clarity, integrity, and client-first principles.
          </p>

          {/* Trust Highlights Strip */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300 font-semibold">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-brand-green" /> Zero Hidden Charges
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-brand-green" /> Objective Guidance
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-brand-green" /> Uncompromised Trust
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStats;
