import React from 'react';
import { UserPlus, PhoneCall, Headphones } from 'lucide-react';

const DedicatedRM = ({ id }) => {
    return (
        <section id={id} className="scroll-mt-32 mb-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-100 transition-colors duration-500"></div>
            
            <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <UserPlus className="w-8 h-8" />
                </div>
                
                <h2 className="text-3xl font-extrabold text-brand-dark mb-4 tracking-tight">Dedicated Relationship Manager</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    You're never alone in your financial journey. Every premium account comes with a dedicated Relationship Manager who acts as your single point of contact for all queries and wealth management strategies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-purple-200 transition-colors">
                        <PhoneCall className="w-6 h-6 text-purple-500 mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">Priority Support</h4>
                        <p className="text-gray-500 text-sm">Direct line access to your RM without waiting in long IVR queues.</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-purple-200 transition-colors">
                        <Headphones className="w-6 h-6 text-purple-500 mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">Personalized Advice</h4>
                        <p className="text-gray-500 text-sm">Custom-tailored portfolio recommendations based on your unique risk profile.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DedicatedRM;
