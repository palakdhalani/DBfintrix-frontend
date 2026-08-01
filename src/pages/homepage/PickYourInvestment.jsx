import React from 'react';
import { Megaphone, TrendingUp, PiggyBank, BarChart2, ArrowRightLeft, Droplet } from 'lucide-react';

const investmentOptions = [
    {
        id: 1,
        title: "IPO",
        description: "Secure part ownership in new ventures and seize high growth potential.",
        icon: <Megaphone className="w-10 h-10 text-[#2a3c5a]" /> // megaphone
    },
    {
        id: 2,
        title: "Equity",
        description: "Own a part of renowned companies and enjoy capital appreciation.",
        icon: <TrendingUp className="w-10 h-10 text-[#2a3c5a]" /> // chart
    },
    {
        id: 3,
        title: "Mutual Funds",
        description: "Invest in professionally managed portfolios for steady growth.",
        icon: <PiggyBank className="w-10 h-10 text-[#2a3c5a]" /> // piggy bank
    },
    {
        id: 4,
        title: "Derivatives",
        description: "Navigate market volatility, manage risk and amplify returns with trading.",
        icon: <BarChart2 className="w-10 h-10 text-[#2a3c5a]" /> // bar chart
    },
    {
        id: 5,
        title: "Currency",
        description: "Trade in global currencies and capitalize on international market trends.",
        icon: <ArrowRightLeft className="w-10 h-10 text-[#2a3c5a]" /> // currency exchange
    },
    {
        id: 6,
        title: "Commodity",
        description: "Trade in metals, gold, oil, and more to hedge risk and enhance your portfolio.",
        icon: <Droplet className="w-10 h-10 text-[#2a3c5a]" /> // drops
    }
];

const PickYourInvestment = () => {
    return (
        <section className="bg-white py-20 md:py-24">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header Section */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#2a3c5a] uppercase tracking-tight mb-3">
                        Pick Your Preferred Investment
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Discover DB Fintrix's extensive array of investment options, from equity and IPO to mutual funds and more
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {investmentOptions.map((option) => (
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
            </div>
        </section>
    );
};

export default PickYourInvestment;
