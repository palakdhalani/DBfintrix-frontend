import React from 'react';
import { LineChart, Lightbulb, Target } from 'lucide-react';

const ResearchAdvisory = ({ id }) => {
    return (
        <section id={id} className="scroll-mt-32 mb-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-100 transition-colors duration-500"></div>
            
            <div className="relative z-10">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <LineChart className="w-8 h-8" />
                </div>
                
                <h2 className="text-3xl font-extrabold text-brand-dark mb-4 tracking-tight">Research & Advisory</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Make informed decisions backed by our award-winning research team. Get daily market outlooks, stock tips, and deep-dive fundamental analysis reports delivered straight to your inbox.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 transition-colors">
                        <Lightbulb className="w-6 h-6 text-indigo-500 mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">Actionable Insights</h4>
                        <p className="text-gray-500 text-sm">Clear entry, exit, and stop-loss targets for intraday and delivery trades.</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 transition-colors">
                        <Target className="w-6 h-6 text-indigo-500 mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">High Accuracy</h4>
                        <p className="text-gray-500 text-sm">Data-driven advisory backed by technical indicators and algorithmic models.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResearchAdvisory;
