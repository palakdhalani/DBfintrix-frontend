import React, { useState } from 'react';
import AnimatedWords from '../../Comman components/AnimatedWords';
import { Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    id: 'free',
    badge: '100% Free',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
    title: 'Account Opening',
    price: '₹0',
    unit: 'Free Forever',
    description: 'Free Demat and Trading account opening with zero paperwork hassle.',
    icon: '🆓',
    accentBorder: 'hover:border-blue-500 hover:shadow-blue-500/15',
    features: [
      'Zero annual maintenance charges (1st Year)',
      '100% paperless instant e-KYC onboarding',
      'Free CDSL digital repository storage'
    ]
  },
  {
    id: 'delivery',
    badge: 'Zero Brokerage',
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    title: 'Equity Delivery',
    price: '₹0',
    unit: 'Lifetime Free',
    description: 'Zero brokerage on all your long-term equity delivery investments.',
    icon: '📈',
    popular: true,
    accentBorder: 'border-emerald-500 shadow-xl shadow-emerald-900/10 hover:shadow-2xl hover:border-emerald-600',
    features: [
      '₹0 brokerage on all NSE & BSE deliveries',
      'Direct dividend credits to your bank',
      'Zero hidden transaction fees or surcharges'
    ]
  },
  {
    id: 'trading',
    badge: 'Flat Rate',
    badgeColor: 'bg-amber-100 text-amber-700 border-amber-200',
    title: 'Intraday & F&O',
    price: '₹20',
    unit: '/ executed order',
    description: 'Flat fee for Intraday, Futures & Options, Currencies and Commodities.',
    icon: '⚡',
    accentBorder: 'hover:border-amber-500 hover:shadow-amber-500/15',
    features: [
      'Flat ₹20 or 0.05% (whichever is lower)',
      'Advanced Option Chain with live Greeks',
      'Fast order execution with zero latency'
    ]
  }
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('delivery');

  return (
    <section className="bg-gradient-to-b from-white via-gray-50/50 to-white py-20 md:py-28 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-400/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-50 text-brand-green text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unmatched Value</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a2c4c] tracking-tight mb-4">
            <AnimatedWords 
              text="Transparent pricing." 
              className="mr-2"
            />
            <span className="animate-text-gradient font-black block sm:inline">
              No hidden charges.
            </span>
          </h2>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            We believe in complete transparency so you keep more of your hard-earned profits. Experience hassle-free investing with DB Fintrix.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-6">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            return (
              <div 
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`bg-white rounded-3xl p-8 sm:p-9 text-left border transition-all duration-300 flex flex-col justify-between group hover-lift cursor-pointer relative overflow-visible ${
                  isSelected 
                    ? plan.accentBorder + ' ring-2 ring-brand-green/20' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                }`}
              >
                {/* Inner Shine Reflection Container */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none shine-overlay"></div>

                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-green text-white text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg z-20 whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                      {plan.icon}
                    </div>
                    <span className={`text-xs font-extrabold uppercase px-3 py-1 rounded-full border ${plan.badgeColor}`}>
                      {plan.badge}
                    </span>
                  </div>

                  {/* Title & Price */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-brand-green transition-colors">
                    {plan.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-gray-100">
                    <span className="text-5xl font-black text-[#1a2c4c] tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 font-medium text-sm">
                      {plan.unit}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                        <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <button 
                  className={`w-full py-3.5 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isSelected 
                      ? 'bg-brand-green text-white shadow-lg shadow-green-900/20 hover:bg-green-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Choose {plan.title}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Call to Action Bar */}
        <div className="text-center mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/open-account"
            className="bg-brand-green text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-all shadow-xl shadow-green-900/20 transform hover:-translate-y-0.5 animate-pulse-ring flex items-center gap-2"
          >
            <span>Open Free Demat Account</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <ShieldCheck className="w-5 h-5 text-brand-green" />
            <span>Regulated under SEBI Guidelines</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
