import React from 'react';
import { Headset, Network, PhoneCall } from 'lucide-react';

const inquiries = [
    {
        id: 1,
        title: "Business Associates",
        icon: <Headset className="w-8 h-8 text-brand-dark" />,
        description: "For all inquiries related to business associations, please feel free to contact us.",
        phone: "+91 90336 00411",
        email: "operation.dbfintrix@gmail.com"
    },
    {
        id: 2,
        title: "Online Trading Queries",
        icon: <PhoneCall className="w-8 h-8 text-brand-dark" />,
        description: "For any queries regarding online trading, our support team is here to assist you.",
        phone: "+91 90336 00411",
        email: "operation.dbfintrix@gmail.com"
    },
    {
        id: 3,
        title: "Sales Team Support",
        icon: <Network className="w-8 h-8 text-brand-dark" />,
        description: "Reach out to our Sales Team for any support or inquiries.",
        phone: "+91 90336 00411",
        email: "info.dbfintrix@gmail.com"
    }
];

const Inquiry = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {inquiries.map((item) => (
                        <div 
                            key={item.id}
                            className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-8 bg-gradient-to-br from-green-50/50 to-transparent"
                        >
                            {/* Top decorative gradient matching the image's subtle green glow */}
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-brand-green/5 to-transparent pointer-events-none"></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-brand-dark bg-white p-2 rounded-xl shadow-sm border border-gray-50">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-extrabold text-brand-dark">
                                        {item.title}
                                    </h3>
                                </div>
                                
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-medium h-20">
                                    {item.description}
                                </p>
                                
                                <div className="space-y-2 text-sm md:text-base">
                                    <p className="text-gray-600">
                                        <span className="font-bold text-gray-800">Phone Number: </span> 
                                        {item.phone}
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-bold text-gray-800">Email: </span> 
                                        <a href={`mailto:${item.email}`} className="text-brand-dark hover:text-brand-green transition-colors">
                                            {item.email}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Inquiry;
