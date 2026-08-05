import React from 'react';
import { BookOpen, Video, Users } from 'lucide-react';

const CompleteTraining = ({ id }) => {
    return (
        <section id={id} className="scroll-mt-32 mb-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-yellow-100 transition-colors duration-500"></div>
            
            <div className="relative z-10">
                <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <BookOpen className="w-8 h-8" />
                </div>
                
                <h2 className="text-3xl font-extrabold text-brand-dark mb-4 tracking-tight">Complete Training</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Elevate your financial literacy with our comprehensive training programs. Whether you're a beginner or a seasoned pro, our modules cover everything from basic investing to advanced derivative strategies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-yellow-200 transition-colors">
                        <Video className="w-6 h-6 text-yellow-600 mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">Live Webinars</h4>
                        <p className="text-gray-500 text-sm">Interactive sessions hosted by market experts covering real-time market trends.</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-yellow-200 transition-colors">
                        <Users className="w-6 h-6 text-yellow-600 mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">Partner Onboarding</h4>
                        <p className="text-gray-500 text-sm">Step-by-step training for our partners to seamlessly manage clients and software.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompleteTraining;
