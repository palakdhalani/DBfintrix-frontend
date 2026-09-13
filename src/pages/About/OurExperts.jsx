import React from 'react';
import bhargavibaImg from '../../assets/bhargaviba_gohil.png';
import polyBg from '../../assets/poly_bg.png';
import { Mail, Phone } from 'lucide-react';

const experts = [
  {
    name: 'BHARGAVIBA GOHIL',
    role: 'Director',
    image: bhargavibaImg,
    badge: 'Executive Leadership',
    bio: 'Guiding corporate strategy and client engagement with focused expertise in financial and insurance broking governance.'
  }
];

const OurExperts = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      {/* Faceted polygon background accent on the right */}
      <div 
        className="absolute top-0 right-0 w-80 md:w-96 h-full bg-no-repeat bg-right-top bg-contain pointer-events-none opacity-25 z-0"
        style={{ backgroundImage: `url('${polyBg}')` }}
      ></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative reveal">
          {/* Tag: ››› OUR EXPERTS ‹‹‹ */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-brand-blue font-bold tracking-widest text-sm">›››</span>
            <span className="text-brand-dark font-extrabold tracking-wider text-sm uppercase">
              OUR EXPERTS
            </span>
            <span className="text-brand-blue font-bold tracking-widest text-sm">‹‹‹</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight tracking-tight mb-4">
            Meet our experienced team people
          </h2>

          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
            Our accomplished leadership combines decades of proven experience in financial services, insurance broking, and corporate governance.
          </p>

          {/* Decorative concentric ring marker */}
          <div className="hidden lg:flex absolute -right-12 top-10 w-7 h-7 rounded-full border-2 border-brand-blue/40 items-center justify-center bg-white shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-blue"></span>
          </div>
        </div>

        {/* Experts Card Container (Centered) */}
        <div className="flex justify-center">
          {experts.map((expert, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(10,29,66,0.12)] reveal w-full max-w-sm sm:max-w-md"
            >
              {/* Outer Decorative Dashed Frame */}
              <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-gray-200 group-hover:border-brand-green/40 transition-colors pointer-events-none -z-0"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                
                {/* Photo Container */}
                <div className="relative w-full aspect-[4/5] max-w-[300px] mb-6 rounded-2xl overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 shadow-sm border border-gray-100 flex items-end justify-center">
                  <img 
                    src={expert.image} 
                    alt={expert.name} 
                    className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-brand-dark border border-gray-100 shadow-xs">
                    {expert.badge}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-wider text-brand-dark uppercase mb-1">
                  {expert.name}
                </h3>

                {/* Role */}
                <p className="text-sm sm:text-base font-bold text-brand-blue uppercase tracking-wide mb-3">
                  {expert.role}
                </p>

                {/* Short bio */}
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm mb-5">
                  {expert.bio}
                </p>

                {/* Social / Contact touchpoint icons */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 w-full justify-center text-gray-400">
                  <a 
                    href="mailto:info.dbfintrix@gmail.com" 
                    className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a 
                    href="tel:+919033600411" 
                    className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors"
                    title="Call"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <span className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-brand-blue transition-colors cursor-pointer">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurExperts;
