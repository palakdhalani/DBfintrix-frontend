import React from 'react';
import { ServerCog, FileBarChart, ShieldCheck } from 'lucide-react';

const BackOfficeSupport = ({ id }) => {
    return (
        <section id={id} className="scroll-mt-32 mb-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-teal-100 transition-colors duration-500"></div>
            
            <div className="relative z-10">
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <ServerCog className="w-8 h-8" />
                </div>
                
                <h2 className="text-3xl font-extrabold text-brand-dark mb-4 tracking-tight">Back Office Support</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Stay in complete control of your operations. Our robust back-office systems give you real-time visibility into client trades, ledger balances, and brokerage generation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-teal-200 transition-colors">
                        <FileBarChart className="w-6 h-6 text-teal-500 mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">Advanced Reporting</h4>
                        <p className="text-gray-500 text-sm">Generate comprehensive reports for P&L, contract notes, and tax summaries effortlessly.</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-teal-200 transition-colors">
                        <ShieldCheck className="w-6 h-6 text-teal-500 mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">Compliance Management</h4>
                        <p className="text-gray-500 text-sm">Automated tracking of regulatory requirements and margin shortfalls.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BackOfficeSupport;
