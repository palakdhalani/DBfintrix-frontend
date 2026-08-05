import React from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, TrendingUp, PiggyBank, BarChart2, ArrowRightLeft, Droplet, Briefcase, Activity, Landmark, PieChart, Diamond } from 'lucide-react';

const investmentOptions = [
    {
        id: 1,
        title: "Demat Account",
        description: "Open a secure Demat account to hold your shares and securities digitally.",
        icon: <Briefcase className="w-10 h-10 text-[#2a3c5a]" />
    },
    {
        id: 2,
        title: "Trading Account",
        description: "Execute fast and seamless trades across all major exchanges in India.",
        icon: <Activity className="w-10 h-10 text-[#2a3c5a]" />
    },
    {
        id: 3,
        title: "Equity",
        description: "Own a part of renowned companies and enjoy long-term capital appreciation.",
        icon: <TrendingUp className="w-10 h-10 text-[#2a3c5a]" />
    },
    {
        id: 4,
        title: "F&O",
        description: "Navigate market volatility, manage risk and amplify returns with futures and options.",
        icon: <BarChart2 className="w-10 h-10 text-[#2a3c5a]" />
    },
    {
        id: 5,
        title: "Commodity",
        description: "Trade in metals, gold, oil, and more to hedge risk and enhance your portfolio.",
        icon: <Droplet className="w-10 h-10 text-[#2a3c5a]" />
    },
    {
        id: 6,
        title: "Currency",
        description: "Trade in global currencies and capitalize on international market trends.",
        icon: <ArrowRightLeft className="w-10 h-10 text-[#2a3c5a]" />
    },
    {
        id: 7,
        title: "Mutual Funds",
        description: "Invest in professionally managed portfolios for steady, diversified growth.",
        icon: <PiggyBank className="w-10 h-10 text-[#2a3c5a]" />
    },
    {
        id: 8,
        title: "IPO",
        description: "Secure part ownership in new ventures and seize high growth potential.",
        icon: <Megaphone className="w-10 h-10 text-[#2a3c5a]" />
    },
    {
        id: 9,
        title: "Bonds",
        description: "Invest in fixed-income instruments for stable, secure, and predictable returns.",
        icon: <Landmark className="w-10 h-10 text-[#2a3c5a]" />
    },
    {
        id: 10,
        title: "ETFs",
        description: "Diversify your portfolio with Exchange Traded Funds across various sectors.",
        icon: <PieChart className="w-10 h-10 text-[#2a3c5a]" />
    },
    {
        id: 11,
        title: "AIFs, PMS & Structured Products",
        description: "Exclusive wealth management and tailored solutions for High Net Worth Individuals.",
        icon: <Diamond className="w-10 h-10 text-[#2a3c5a]" />
    }
];

const PickYourInvestment = ({ limit }) => {
    const displayOptions = limit ? investmentOptions.slice(0, limit) : investmentOptions;

    return (
        <section className="bg-white py-20 md:py-24">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#2a3c5a] uppercase tracking-tight mb-3">
                        Our Services & Investment Options
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Discover DB Fintrix's extensive array of services tailored for investors, from Demat accounts to structured products.

                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayOptions.map((option) => (
                        <div
                            key={option.id}
                            className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group cursor-pointer"
                        >
                            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                                {option.icon}
                            </div>
                            <h3 className="text-[#2a3c5a] text-xl font-bold mb-3">
                                {option.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {option.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                {limit && (
                    <div className="mt-12 text-center">
                        <Link 
                            to="/services" 
                            className="inline-flex items-center justify-center px-8 py-3 bg-[#2a3c5a] text-white font-bold rounded-full hover:bg-[#1a2538] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            View More Services
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PickYourInvestment;
