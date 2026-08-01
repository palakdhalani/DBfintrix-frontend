import React from 'react';
import { MonitorSmartphone, MessageSquareText, BadgeCheck, FileSignature } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "STEP 1",
        description: "Download the DB Fintrix app or visit the website",
        icon: <MonitorSmartphone className="w-10 h-10 text-brand-dark" />
    },
    {
        id: 2,
        title: "STEP 2",
        description: "Enter your Mobile Number and verify with an OTP",
        icon: <MessageSquareText className="w-10 h-10 text-brand-dark" />
    },
    {
        id: 3,
        title: "STEP 3",
        description: "Verify KYC and bank details",
        icon: <BadgeCheck className="w-10 h-10 text-brand-dark" />
    },
    {
        id: 4,
        title: "STEP 4",
        description: "eSign your form and documents",
        icon: <FileSignature className="w-10 h-10 text-brand-dark" />
    }
];

const HowtoOpen = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-12 md:mb-24 tracking-tight">
                    How to Open Demat Account Online?
                </h2>

                <div className="relative w-full max-w-5xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-[2px] bg-gray-300 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex flex-col items-center text-center">
                                {/* Icon Container with background to cover the line */}
                                <div className="px-6 mb-8 inline-block relative">
                                    <div className="w-20 h-20 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl relative z-10 text-brand-dark">
                                        {step.icon}
                                    </div>
                                </div>

                                <h3 className="text-gray-500 font-bold text-sm tracking-widest uppercase mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-800 font-medium text-lg leading-relaxed max-w-[220px]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowtoOpen;
