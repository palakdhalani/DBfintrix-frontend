import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, Clock, ChevronRight, Shield, Award, MapPin, Headphones } from 'lucide-react';
import bgImage from '../../assets/why choose us photo.jpg';

const contactDetails = [
    {
        id: 1,
        title: "Phone Numbers",
        icon: <PhoneCall className="w-5 h-5 text-brand-green" />,
        content: (
            <a 
                href="tel:+919033600411" 
                className="text-gray-700 hover:text-brand-green transition-colors font-semibold block text-base"
            >
                +91 90336 00411
            </a>
        ),
        subtitle: "Direct Calling Desk"
    },
    {
        id: 2,
        title: "Email Support",
        icon: <Mail className="w-5 h-5 text-brand-blue" />,
        content: (
            <a 
                href="mailto:info.dbfintrix@gmail.com" 
                className="text-gray-700 hover:text-brand-green transition-colors font-semibold block break-all text-sm sm:text-base"
            >
                info.dbfintrix@gmail.com
            </a>
        ),
        subtitle: "Official Inquiries"
    },
    {
        id: 3,
        title: "Office Timings",
        icon: <Clock className="w-5 h-5 text-amber-500" />,
        content: (
            <p className="text-gray-700 font-semibold leading-relaxed text-sm sm:text-base">
                Monday to Friday (9 AM - 6 PM)<br />Saturday (10 AM - 2 PM)
            </p>
        ),
        subtitle: "Sunday Closed"
    }
];

const Contacthero = () => {
    return (
        <div className="relative bg-white">
            {/* Top Dark Hero Section (Styled exactly like AboutHero) */}
            <div 
                className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url('${bgImage}')` }}
            >
                {/* Dark Overlay with DB Fintrix theme gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d42]/95 via-[#0a1d42]/85 to-[#004aad]/70 z-0"></div>

                {/* Decorative Glow Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-green/20 blur-[100px]"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-500/20 blur-[100px]"></div>
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-6 font-medium">
                        <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-brand-green">Contact Us</span>
                    </div>

                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-green/40 bg-brand-green/10 text-brand-green font-semibold text-xs md:text-sm uppercase tracking-wider mb-6 shadow-sm animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                            Get In Touch With Dealing Beneficial Fintrix
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight animate-fade-in-up">
                            We Are Here To Help You Grow With <span className="text-brand-green">Trust & Expertise</span>
                        </h1>

                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 animate-fade-in-up delay-100">
                            Have questions about Demat Accounts, IPO investments, Mutual Funds, or Bonds? Our certified financial experts and investment advisory desk are ready to assist you every step of the way.
                        </p>

                        {/* Quick Highlight Pills (Matches AboutHero design & structure) */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center text-brand-green">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-base leading-none">24 Hrs</p>
                                    <p className="text-gray-400 text-xs mt-1">Quick Response</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Headphones className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-base leading-none">Expert</p>
                                    <p className="text-gray-400 text-xs mt-1">Direct Advisory</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center text-brand-green">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-base leading-none">100%</p>
                                    <p className="text-gray-400 text-xs mt-1">Transparent</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-base leading-none">Rajkot</p>
                                    <p className="text-gray-400 text-xs mt-1">Head Office</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Contact Channels Cards (Overlapping Hero smoothly) */}
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-20 -mt-10 sm:-mt-14 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
                    {contactDetails.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:border-brand-green/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div className="flex items-start gap-4 sm:gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-brand-light border border-gray-100 flex items-center justify-center shrink-0 shadow-xs">
                                    {item.icon}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between gap-2 mb-1">
                                        <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                                            {item.title}
                                        </h3>
                                        <span className="text-[11px] font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">
                                            {item.subtitle}
                                        </span>
                                    </div>
                                    <div className="text-brand-dark">
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
