import React from 'react';
import bgImage from '../../assets/why choose us photo.jpg';

const WhyChooseUsHero = () => {
    return (
        <div 
            className="relative pt-44 pb-20 md:pt-52 md:pb-28 overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url('${bgImage}')` }}
        >
            {/* Dark Overlay to make text readable */}
            <div className="absolute inset-0 bg-brand-dark/60 z-0"></div>
            


            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-green/10 blur-[120px]"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-500/5 blur-[100px]"></div>

            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                <div className="inline-block px-4 py-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green font-semibold text-sm mb-6 uppercase tracking-wider shadow-lg shadow-brand-green/5">
                    Your Success is Our Priority
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                    Why Choose <span className="text-brand-green">DB Fintrix?</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Partner with us for an unmatched financial experience. We bring together cutting-edge technology, expert advisory, and transparent operations to help you achieve your wealth creation goals.
                </p>
            </div>
        </div>
    );
};

export default WhyChooseUsHero;
