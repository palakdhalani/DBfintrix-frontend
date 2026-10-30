import React from 'react';
import bhargavibaImg from '../../assets/bhargaviba_gohil.png';
import devendrasinhImg from '../../assets/devendrasinh_gohil.png';

const experts = [
  {
    name: 'BHARGAVIBA GOHIL',
    role: 'Director',
    image: bhargavibaImg,
    badge: 'Executive Leadership',
    bio: 'Guiding corporate strategy and client engagement with focused expertise in financial and insurance broking governance.'
  },
  {
    name: 'MR. DEVENDRASINH B. GOHIL',
    role: 'Director & Principal Officer',
    image: devendrasinhImg,
    badge: 'Executive Leadership',
    bio: 'Leading DB Fintrix with over 20 years of proven capital markets experience, driving strategic growth and client-centric investment excellence.'
  }
];

const OurExperts = () => {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Experts Card Container (2-Column Balanced Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto justify-center">
          {experts.map((expert, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(10,29,66,0.12)] reveal w-full"
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
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
                  {expert.bio}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurExperts;
