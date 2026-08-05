import React from 'react';
import { TrendingUp, Percent, Wallet } from 'lucide-react';

const HighestRevenue = ({ id }) => {
    return (
        <section id={id} className="scroll-mt-32 mb-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-100 transition-colors duration-500"></div>
            
            <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <TrendingUp className="w-8 h-8" />
                </div>
                
                <h2 className="text-3xl font-extrabold text-brand-dark mb-4 tracking-tight">Highest Revenue Sharing</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    We believe in mutually beneficial partnerships. Our partners and sub-brokers enjoy the highest revenue-sharing models in the industry, maximizing your earning potential.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-brand-green/30 transition-colors">
                        <Percent className="w-6 h-6 text-brand-green mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">Lucrative Payouts</h4>
                        <p className="text-gray-500 text-sm">Industry-leading brokerage sharing percentage with transparent monthly settlements.</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-brand-green/30 transition-colors">
                        <Wallet className="w-6 h-6 text-brand-green mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">No Hidden Costs</h4>
                        <p className="text-gray-500 text-sm">Clear fee structures with zero hidden charges affecting your bottom line.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HighestRevenue;
