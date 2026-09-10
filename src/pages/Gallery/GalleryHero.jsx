import React from 'react';
import { Sparkles, Camera, Image as ImageIcon } from 'lucide-react';
import whyChooseBg from '../../assets/why choose us photo.jpg';

const GalleryHero = ({ totalPhotos }) => {
  return (
    <div 
      className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${whyChooseBg}')` }}
    >
      {/* Dark gradient overlay matching website theme */}
      <div className="absolute inset-0 bg-[#0a1d42]/85 backdrop-blur-[2px] z-0"></div>

      {/* Decorative ambient glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[65%] h-[65%] rounded-full bg-[#0f9d27]/20 blur-[130px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[55%] h-[55%] rounded-full bg-blue-600/15 blur-[120px]"></div>
        
        {/* Subtle geometric grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0f9d27]/40 bg-[#0f9d27]/15 text-[#0f9d27] font-semibold text-xs md:text-sm mb-6 uppercase tracking-wider shadow-lg shadow-[#0f9d27]/10 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#0f9d27]" />
          <span>Moments & Milestones</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Life at <span className="text-[#0f9d27]">DB Fintrix</span>
        </h1>

        {/* Description */}
        <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
          Explore the cherished memories, grand inaugurations, auspicious beginnings, and team spirit that drive Dealing Beneficial Fintrix Pvt. Ltd. forward.
        </p>

        {/* Quick Stats Pill */}
        <div className="mt-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/15 text-white text-sm">
          <span className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-[#0f9d27]" />
            <strong className="text-white font-semibold">{totalPhotos}</strong> Captured Moments
          </span>
          <span className="w-1 h-1 rounded-full bg-white/40"></span>
          <span className="flex items-center gap-2 text-gray-300">
            <ImageIcon className="w-4 h-4 text-[#0f9d27]" />
            High Definition Memories
          </span>
        </div>
      </div>
    </div>
  );
};

export default GalleryHero;
