import React from 'react';
import { PiggyBank, TrendingUp, BarChart2, Rocket, Boxes, ArrowRightLeft, Activity } from 'lucide-react';

const options = [
  { id: 1, name: "Mutual Funds", icon: <PiggyBank className="w-12 h-12 text-brand-green" /> },
  { id: 2, name: "Stocks", icon: <TrendingUp className="w-12 h-12 text-brand-green" /> },
  { id: 3, name: "Futures & Options", icon: <BarChart2 className="w-12 h-12 text-brand-green" /> },
  { id: 4, name: "IPO", icon: <Rocket className="w-12 h-12 text-brand-green" /> },
  { id: 5, name: "Commodities", icon: <Boxes className="w-12 h-12 text-brand-green" /> },
  { id: 6, name: "Currencies", icon: <ArrowRightLeft className="w-12 h-12 text-brand-green" /> },
  { id: 7, name: "Derivatives", icon: <Activity className="w-12 h-12 text-brand-green" /> },
];

const InvestmentOptions = () => {
  return (
    <section className="bg-brand-light py-16 md:py-24">
      <div className="container mx-auto px-6">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-12 gap-6 text-center md:text-left">
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2a3c5a] leading-tight tracking-tight max-w-2xl mx-auto md:mx-0">
              One Demat Account, Multiple Investment Options
            </h2>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <button className="bg-brand-dark hover:bg-opacity-90 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-colors shadow-lg hover:shadow-xl whitespace-nowrap w-full sm:w-auto">
              Start Investing
            </button>
          </div>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {options.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-dark">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InvestmentOptions;
