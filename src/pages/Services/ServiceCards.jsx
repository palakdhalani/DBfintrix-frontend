import React from 'react';
import heroImg from '../../assets/hero.png'; 

const ServiceCards = ({ cardsData }) => {
  return (
    <div className="bg-brand-light pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData && cardsData.map((card, index) => (
            <div key={index} className="group rounded-3xl overflow-hidden relative shadow-lg h-[400px]">
              <img src={card.image || heroImg} alt={card.title.replace(/<[^>]*>?/gm, '')} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                 <div className="bg-brand-dark/90 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between border border-white/10 group-hover:bg-brand-blue transition-colors duration-300">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white">
                        {card.icon}
                     </div>
                     <h3 className="text-white font-bold text-lg" dangerouslySetInnerHTML={{__html: card.title}}></h3>
                   </div>
                   <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-blue transition-colors cursor-pointer">
                     ↗
                   </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
