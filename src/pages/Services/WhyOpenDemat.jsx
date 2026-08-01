import React from 'react';
import { HeartHandshake, Zap, Award, ShieldCheck } from 'lucide-react';

const features = [
    {
        id: 1,
        title: "Trusted by 1 Million+ Happy Investors",
        icon: <HeartHandshake className="w-10 h-10 text-brand-green mb-4" />
    },
    {
        id: 2,
        title: "Lightning-Fast Execution & Accessibility",
        icon: <Zap className="w-10 h-10 text-brand-green mb-4" />
    },
    {
        id: 3,
        title: "Advanced Tools for Pro Traders",
        icon: <Award className="w-10 h-10 text-brand-green mb-4" />
    },
    {
        id: 4,
        title: "Zero Hidden Charges & Full Transparency",
        icon: <ShieldCheck className="w-10 h-10 text-brand-green mb-4" />
    }
];

const WhyOpenDemat = () => {
    return (
        <section className="bg-brand-dark py-16 md:py-24">
            <div className="container mx-auto px-6">

                {/* Top Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 gap-6 md:gap-8">
                    <div className="md:w-2/3 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
                            Why Choose DB Fintrix for <br className="hidden md:block" /> Your Demat Account?
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto md:mx-0">
                            Experience seamless investing, advanced analytics, and expert guidance all in one powerful platform.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                        <button className="bg-brand-green hover:bg-green-600 border border-brand-green text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl whitespace-nowrap w-full sm:w-auto">
                            Start Investing
                        </button>
                    </div>
                </div>

                {/* Features Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className={`flex flex-col items-center text-center px-4 ${index !== features.length - 1 ? 'md:border-r md:border-white/20' : ''
                                }`}
                        >
                            {/* Icon floating effect */}
                            <div className="transform transition-transform duration-300 hover:-translate-y-2">
                                {feature.icon}
                            </div>
                            <h3 className="text-white font-semibold text-base md:text-lg leading-snug">
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyOpenDemat;
