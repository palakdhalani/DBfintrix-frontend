import React from 'react';
import { Megaphone, LayoutTemplate, Share2 } from 'lucide-react';

const MarketingSupport = ({ id }) => {
    return (
        <section id={id} className="scroll-mt-32 mb-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-pink-100 transition-colors duration-500"></div>
            
            <div className="relative z-10">
                <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <Megaphone className="w-8 h-8" />
                </div>
                
                <h2 className="text-3xl font-extrabold text-brand-dark mb-4 tracking-tight">Marketing Support</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Scale your business effortlessly with our ready-to-use marketing collateral. We provide our partners with everything they need to acquire and retain clients successfully.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-pink-200 transition-colors">
                        <LayoutTemplate className="w-6 h-6 text-pink-500 mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">Branding Kits</h4>
                        <p className="text-gray-500 text-sm">Access to premium banners, brochures, and email templates for your campaigns.</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-pink-200 transition-colors">
                        <Share2 className="w-6 h-6 text-pink-500 mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">Social Media Assets</h4>
                        <p className="text-gray-500 text-sm">Daily posts, market updates, and creative graphics tailored for WhatsApp and Instagram.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingSupport;
