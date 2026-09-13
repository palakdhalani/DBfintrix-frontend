import React from 'react';
import { Award, Users, CheckCircle, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: <Award className="w-8 h-8 text-brand-green" />,
    value: '20+',
    label: 'Years of Experience',
    desc: 'Deep domain expertise in insurance & financial broking.'
  },
  {
    icon: <Users className="w-8 h-8 text-brand-blue" />,
    value: '50K+',
    label: 'Happy Clients',
    desc: 'Individuals and families protected across India.'
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-brand-green" />,
    value: '99%',
    label: 'Claim Assistance',
    desc: 'Dedicated claim desk with rapid turnaround times.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-brand-blue" />,
    value: '100%',
    label: 'Transparent Advice',
    desc: 'Zero hidden charges and objective product advice.'
  }
];

const AboutStats = () => {
  return (
    <section className="py-16 bg-[#0a1d42] text-white relative overflow-hidden">
      {/* Glow circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-brand-green/40 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="mb-4 p-3 bg-white/10 rounded-xl inline-block">
                {stat.icon}
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-bold text-brand-green mb-2">
                {stat.label}
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
