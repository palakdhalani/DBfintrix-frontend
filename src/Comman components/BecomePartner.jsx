import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { CheckCircle2, XCircle } from 'lucide-react';

const comparisonData = [
    {
        feature: "Support",
        others: "Limited support",
        us: "Dedicated RM"
    },
    {
        feature: "Training",
        others: "Basic training",
        us: "Complete business setup"
    },
    {
        feature: "Commission",
        others: "Low commission",
        us: "Competitive revenue sharing"
    },
    {
        feature: "Marketing",
        others: "No marketing",
        us: "Marketing assistance"
    },
    {
        feature: "Onboarding",
        others: "Slow onboarding",
        us: "Fast digital onboarding"
    }
];

const BecomePartner = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar theme="solid-dark" />
            
            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-6">
                    
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight mb-6">
                            Why Become Our <span className="text-brand-green">Partner?</span>
                        </h1>
                        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
                            Join India's fastest-growing broking network. We provide everything you need to start, grow, and scale your financial business.
                        </p>
                    </div>

                    {/* Comparison Table Section */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        
                        {/* Table Header (Desktop) */}
                        <div className="hidden md:grid grid-cols-3 bg-brand-dark text-white md:divide-x md:divide-gray-700">
                            <div className="font-bold text-xl p-6 md:p-8 flex items-center justify-center text-center">Feature</div>
                            <div className="font-bold text-xl text-center text-gray-300 p-6 md:p-8 flex items-center justify-center">Others</div>
                            <div className="font-bold text-xl text-center text-brand-green flex items-center justify-center gap-2 p-6 md:p-8">
                                DB Fintrix
                            </div>
                        </div>

                        {/* Table Body */}
                        <div className="divide-y divide-gray-200">
                            {comparisonData.map((row, index) => (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-3 hover:bg-gray-50 transition-colors items-stretch md:divide-x md:divide-gray-200">
                                    
                                    {/* Feature Name */}
                                    <div className="font-bold text-lg text-brand-dark flex items-center justify-center gap-3 p-6 md:p-8 text-center">
                                        <div className="w-2 h-2 rounded-full bg-gray-300 hidden md:block"></div>
                                        {row.feature}
                                    </div>

                                    {/* Others */}
                                    <div className="flex items-center justify-center gap-3 p-6 md:p-8 pt-0 md:pt-8 text-center">
                                        <span className="md:hidden font-semibold text-gray-400 w-24 text-left">Others:</span>
                                        <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                                        <span className="text-gray-500 font-medium">{row.others}</span>
                                    </div>

                                    {/* Us */}
                                    <div className="flex items-center justify-center gap-3 p-6 md:p-8 pt-0 md:pt-8 text-center">
                                        <span className="md:hidden font-semibold text-brand-green w-24 text-left">DB Fintrix:</span>
                                        <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0" />
                                        <span className="text-brand-dark font-bold">{row.us}</span>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                    
                    {/* CTA */}
                    <div className="mt-16 text-center">
                        <button className="bg-brand-green text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors shadow-lg shadow-green-900/40 hover:-translate-y-1 transform duration-300">
                            Join Us Today
                        </button>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BecomePartner;
