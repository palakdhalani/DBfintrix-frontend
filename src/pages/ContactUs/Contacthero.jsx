import React from 'react';
import { PhoneCall, Mail, Clock } from 'lucide-react';

const contactDetails = [
    {
        id: 1,
        title: "Phone Numbers",
        icon: <PhoneCall className="w-6 h-6 text-brand-dark" />,
        content: (
            <p className="mb-2">+91 90336 00411</p>
        )
    },
    {
        id: 2,
        title: "Email",
        icon: <Mail className="w-6 h-6 text-brand-dark" />,
        content: (
            <p>info.dbfintrix@gmail.com</p>
        )
    },
    {
        id: 3,
        title: "Timings",
        icon: <Clock className="w-6 h-6 text-brand-dark" />,
        content: (
            <p>Monday to Friday (9 AM to 6 PM) |<br className="hidden md:block" /> Saturday (10 AM to 2 PM)</p>
        )
    }
];

const Contacthero = () => {
    return (
        <div className="relative bg-white pt-32 pb-16 md:pt-40 md:pb-24">
            {/* Top Light Background Area - using brand-light to match website theme */}
            <div className="absolute top-0 left-0 w-full h-[65%] bg-gradient-to-b from-brand-light to-white z-0"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header Content */}
                <div className="max-w-4xl mb-16">
                    <h3 className="text-brand-green font-bold text-sm tracking-wide uppercase mb-3">
                        Contact Us
                    </h3>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight mb-4 tracking-tight">
                        We Are Here To Help You!
                    </h1>
                    <p className="text-gray-600 text-lg font-medium">
                        Seamless Access to Your DB Fintrix Account
                    </p>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contactDetails.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300"
                        >
                            <div className="flex gap-5">
                                <div className="mt-0.5">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-brand-dark mb-4">{item.title}</h3>
                                    <div className="text-sm md:text-base leading-relaxed text-gray-500 font-medium">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Contacthero;
