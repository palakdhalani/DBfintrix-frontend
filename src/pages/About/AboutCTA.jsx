import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';

const AboutCTA = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-gradient-to-r from-[#0a1d42] via-[#0c2456] to-[#004aad] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          
          {/* Decorative ambient background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-brand-green font-bold text-xs uppercase tracking-wider mb-4 border border-white/10">
                <ShieldCheck className="w-4 h-4" />
                Start Your Safe Journey
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                Ready to Experience Seamless <br className="hidden sm:block" />
                <span className="text-brand-green">Financial Protection & Growth?</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Connect with our experienced advisory team today or open your Demat account in minutes. We are committed to standing beside you at every step.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto flex-shrink-0">
              <Link 
                to="/open-account" 
                className="w-full sm:w-auto text-center bg-brand-green hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-lg shadow-green-900/40 flex items-center justify-center gap-2 group"
              >
                Open Demat Account
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/contact" 
                className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-brand-green" />
                Contact Our Team
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
