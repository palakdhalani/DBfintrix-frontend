import React from 'react';
import { ShieldCheck, Handshake, Lock } from 'lucide-react';

const TrustedPartners = ({ id }) => {
    return (
        <section id={id} className="scroll-mt-32 mb-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden group">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors duration-500"></div>
            
            <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <ShieldCheck className="w-8 h-8" />
                </div>
                
                <h2 className="text-3xl font-extrabold text-brand-dark mb-4 tracking-tight">Trusted Broking Partners</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    We collaborate with top-tier financial institutions and regulated broking houses to ensure your investments are secure, compliant, and backed by the best infrastructure in the industry.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 transition-colors">
                        <Handshake className="w-6 h-6 text-blue-500 mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">Industry Leaders</h4>
                        <p className="text-gray-500 text-sm">Partnered with SEBI registered entities holding decades of trust and reliability.</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 transition-colors">
                        <Lock className="w-6 h-6 text-blue-500 mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">Bank-grade Security</h4>
                        <p className="text-gray-500 text-sm">Your funds and data are protected using state-of-the-art encryption protocols.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedPartners;
