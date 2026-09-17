import React from 'react';
import { PhoneCall, Mail, Clock } from 'lucide-react';

const contactDetails = [
    {
        id: 1,
        title: "Phone Numbers",
        icon: <PhoneCall className="w-6 h-6 text-brand-dark" />,
        content: (
            <a 
                href="tel:+919033600411" 
                className="text-gray-600 hover:text-brand-green transition-colors font-medium block"
            >
                +91 90336 00411
            </a>
        )
    },
    {
        id: 2,
        title: "Email",
        icon: <Mail className="w-6 h-6 text-brand-dark" />,
        content: (
            <a 
                href="mailto:info.dbfintrix@gmail.com" 
                className="text-gray-600 hover:text-brand-green transition-colors font-medium block break-all sm:break-normal"
            >
                info.dbfintrix@gmail.com
            </a>
        )
    },
    {
        id: 3,
        title: "Timings",
        icon: <Clock className="w-6 h-6 text-brand-dark" />,
        content: (
            <p className="text-gray-600 font-medium leading-relaxed">
                Monday to Friday (9 AM to 6 PM) |<br className="hidden xl:block" /> Saturday (10 AM to 2 PM)
            </p>
        )
    }
];

const Contacthero = () => {
    return (
        <div className="relative bg-white pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-20">
            {/* Top Light Background Area - using brand-light to match website theme */}
            <div className="absolute top-0 left-0 w-full h-[65%] bg-gradient-to-b from-brand-light to-white z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">

                {/* Header Content */}
                <div className="max-w-4xl mb-10 sm:mb-14">
                    <h3 className="text-brand-green font-bold text-xs sm:text-sm tracking-wide uppercase mb-2 sm:mb-3">
                        Contact Us
                    </h3>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight mb-3 sm:mb-4 tracking-tight">
                        We Are Here To Help You!
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg font-medium">
                        Seamless Access to Your DB Fintrix Account
                    </p>
                </div>

                {/* Cards Container - Responsive: 1 col on mobile & tablet, 3 cols on desktop (lg:) to prevent cutoff */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
                    {contactDetails.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl p-6 sm:p-7 lg:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-brand-green/40 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4 sm:gap-5">
                                <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100/70 flex items-center justify-center shrink-0 mt-0.5">
                                    {item.icon}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-2">{item.title}</h3>
                                    <div className="text-sm sm:text-base leading-relaxed text-gray-500 font-medium">
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
