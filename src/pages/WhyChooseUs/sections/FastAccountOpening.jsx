import React from 'react';
import { Zap, MonitorSmartphone, Clock } from 'lucide-react';

const FastAccountOpening = ({ id }) => {
    return (
        <section id={id} className="scroll-mt-32 mb-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden group">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-100 transition-colors duration-500"></div>
            
            <div className="relative z-10">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <Zap className="w-8 h-8" />
                </div>
                
                <h2 className="text-3xl font-extrabold text-brand-dark mb-4 tracking-tight">Fast Digital Account Opening</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Skip the paperwork and long queues. Our 100% digital KYC process ensures your Demat and Trading account is active and ready to trade in under 15 minutes.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-orange-200 transition-colors">
                        <MonitorSmartphone className="w-6 h-6 text-orange-500 mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">Paperless Process</h4>
                        <p className="text-gray-500 text-sm">Upload documents directly from your smartphone. No physical signatures required.</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-orange-200 transition-colors">
                        <Clock className="w-6 h-6 text-orange-500 mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">15-Minute Activation</h4>
                        <p className="text-gray-500 text-sm">Instant verification with Aadhaar OTP means you can start investing the same day.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FastAccountOpening;
