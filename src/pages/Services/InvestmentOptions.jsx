import React, { useState } from 'react';
import { 
  PiggyBank, 
  TrendingUp, 
  BarChart3, 
  Rocket, 
  Boxes, 
  ArrowRightLeft, 
  Activity, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

const options = [
  {
    id: 1,
    name: "Mutual Funds",
    badge: "SIP & Wealth",
    icon: PiggyBank,
    iconStyle: "bg-emerald-100/90 text-emerald-700 border-emerald-300/80 group-hover:bg-emerald-200 group-hover:text-emerald-800",
    badgeStyle: "bg-emerald-100/80 text-emerald-800 border-emerald-300/80 group-hover:bg-emerald-200 group-hover:border-emerald-400",
    cardHoverBg: "hover:bg-gradient-to-br hover:from-emerald-50 hover:via-teal-50 hover:to-emerald-100/70 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-900/10",
    bulletColor: "text-emerald-600",
    bottomArrowBg: "bg-emerald-600 text-white",
    lines: [
      "Zero commission on Direct Mutual Funds",
      "Disciplined compounding monthly SIPs from ₹500",
      "Expert-curated equity, debt & ELSS tax-saving baskets"
    ]
  },
  {
    id: 2,
    name: "Stocks",
    badge: "Equity & Delivery",
    icon: TrendingUp,
    iconStyle: "bg-blue-100/90 text-blue-700 border-blue-300/80 group-hover:bg-blue-200 group-hover:text-blue-800",
    badgeStyle: "bg-blue-100/80 text-blue-800 border-blue-300/80 group-hover:bg-blue-200 group-hover:border-blue-400",
    cardHoverBg: "hover:bg-gradient-to-br hover:from-blue-50 hover:via-sky-50 hover:to-cyan-100/70 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/10",
    bulletColor: "text-blue-600",
    bottomArrowBg: "bg-blue-600 text-white",
    lines: [
      "₹0 brokerage on long-term equity delivery investments",
      "Ultra-low latency live NSE & BSE tick-by-tick feeds",
      "Advanced TradingView charting with 1-click instant orders"
    ]
  },
  {
    id: 3,
    name: "Futures & Options",
    badge: "F&O Trading",
    icon: BarChart3,
    iconStyle: "bg-purple-100/90 text-purple-700 border-purple-300/80 group-hover:bg-purple-200 group-hover:text-purple-800",
    badgeStyle: "bg-purple-100/80 text-purple-800 border-purple-300/80 group-hover:bg-purple-200 group-hover:border-purple-400",
    cardHoverBg: "hover:bg-gradient-to-br hover:from-purple-50 hover:via-fuchsia-50 hover:to-indigo-100/70 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-900/10",
    bulletColor: "text-purple-600",
    bottomArrowBg: "bg-purple-600 text-white",
    lines: [
      "Flat ₹20 per executed trade across all F&O segments",
      "Real-time interactive Option Chains with Greeks, PCR & OI",
      "Multi-leg strategy builder with instant margin benefits"
    ]
  },
  {
    id: 4,
    name: "IPO",
    badge: "New Listings",
    icon: Rocket,
    iconStyle: "bg-orange-100/90 text-orange-700 border-orange-300/80 group-hover:bg-orange-200 group-hover:text-orange-800",
    badgeStyle: "bg-orange-100/80 text-orange-800 border-orange-300/80 group-hover:bg-orange-200 group-hover:border-orange-400",
    cardHoverBg: "hover:bg-gradient-to-br hover:from-orange-50 hover:via-amber-50 hover:to-yellow-100/70 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-900/10",
    bulletColor: "text-orange-600",
    bottomArrowBg: "bg-orange-600 text-white",
    lines: [
      "1-Click instant UPI mandate application in under 60 seconds",
      "Real-time live subscription numbers & GMP alert updates",
      "Hassle-free pre-apply window before public issues open"
    ]
  },
  {
    id: 5,
    name: "Commodities",
    badge: "MCX Exchange",
    icon: Boxes,
    iconStyle: "bg-amber-100/90 text-amber-700 border-amber-300/80 group-hover:bg-amber-200 group-hover:text-amber-800",
    badgeStyle: "bg-amber-100/80 text-amber-800 border-amber-300/80 group-hover:bg-amber-200 group-hover:border-amber-400",
    cardHoverBg: "hover:bg-gradient-to-br hover:from-amber-50 hover:via-yellow-50 hover:to-orange-100/70 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-900/10",
    bulletColor: "text-amber-600",
    bottomArrowBg: "bg-amber-600 text-white",
    lines: [
      "Trade Gold, Silver, Crude Oil & Natural Gas on MCX",
      "High leverage intraday trading with automated stop-loss",
      "Effective portfolio hedge against inflation & dollar fluctuations"
    ]
  },
  {
    id: 6,
    name: "Currencies",
    badge: "Global Forex",
    icon: ArrowRightLeft,
    iconStyle: "bg-teal-100/90 text-teal-700 border-teal-300/80 group-hover:bg-teal-200 group-hover:text-teal-800",
    badgeStyle: "bg-teal-100/80 text-teal-800 border-teal-300/80 group-hover:bg-teal-200 group-hover:border-teal-400",
    cardHoverBg: "hover:bg-gradient-to-br hover:from-teal-50 hover:via-emerald-50 hover:to-cyan-100/70 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-900/10",
    bulletColor: "text-teal-600",
    bottomArrowBg: "bg-teal-600 text-white",
    lines: [
      "Trade major currency pairs: USD-INR, EUR-INR, GBP-INR & JPY-INR",
      "Deep global liquidity with ultra-low competitive spreads",
      "Safeguard your business & portfolio against forex volatility"
    ]
  },
  {
    id: 7,
    name: "Derivatives",
    badge: "Smart Hedging",
    icon: Activity,
    iconStyle: "bg-rose-100/90 text-rose-700 border-rose-300/80 group-hover:bg-rose-200 group-hover:text-rose-800",
    badgeStyle: "bg-rose-100/80 text-rose-800 border-rose-300/80 group-hover:bg-rose-200 group-hover:border-rose-400",
    cardHoverBg: "hover:bg-gradient-to-br hover:from-rose-50 hover:via-pink-50 hover:to-red-100/70 hover:border-rose-400 hover:shadow-xl hover:shadow-rose-900/10",
    bulletColor: "text-rose-600",
    bottomArrowBg: "bg-rose-600 text-white",
    lines: [
      "High-yield index & stock derivative contracts with high liquidity",
      "Instant margin pledge facility using existing stock holdings",
      "Professional risk management & systematic hedging buffers"
    ]
  },
  {
    id: 8,
    name: "Bonds & Debentures",
    badge: "Fixed Income",
    icon: ShieldCheck,
    iconStyle: "bg-sky-100/90 text-sky-700 border-sky-300/80 group-hover:bg-sky-200 group-hover:text-sky-800",
    badgeStyle: "bg-sky-100/80 text-sky-800 border-sky-300/80 group-hover:bg-sky-200 group-hover:border-sky-400",
    cardHoverBg: "hover:bg-gradient-to-br hover:from-sky-50 hover:via-blue-50 hover:to-indigo-100/70 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-900/10",
    bulletColor: "text-sky-600",
    bottomArrowBg: "bg-sky-600 text-white",
    lines: [
      "High-yield Sovereign Gold Bonds (SGB) & Corporate Debentures",
      "Guaranteed predictable periodic interest credited to your bank",
      "Safe capital preservation yielding 8% to 12% returns"
    ]
  }
];

const InvestmentOptions = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleStartInvesting = () => {
    const mobileInput = document.getElementById('demat-mobile');
    if (mobileInput) {
      mobileInput.scrollIntoView({ behavior: 'smooth' });
      mobileInput.focus();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#ffffff] py-20 md:py-28 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-14 gap-6 text-center md:text-left">
          <div className="md:w-2/3">
            <div className="inline-flex items-center gap-2 mb-3 bg-white px-4 py-1.5 rounded-full border border-gray-200/80 shadow-xs">
              <span className="text-brand-green font-bold tracking-widest text-xs">›››</span>
              <span className="text-brand-dark font-extrabold tracking-wider text-xs uppercase">
                DIVERSE ASSET CLASSES
              </span>
              <span className="text-brand-green font-bold tracking-widest text-xs">‹‹‹</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a1d42] leading-tight tracking-tight">
              One Demat Account, <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                Multiple Investment Options
              </span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
              Hover over any asset class below to explore its core advantages and exclusive benefits with DB Fintrix.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <button 
              onClick={handleStartInvesting}
              className="bg-brand-dark hover:bg-gray-800 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Open Demat Account</span>
              <ArrowRight className="w-4 h-4 text-brand-green group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((item) => {
            const IconComponent = item.icon;
            const isSelected = activeCard === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setActiveCard(isSelected ? null : item.id)}
                className={`
                  group relative bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-7
                  flex flex-col justify-between text-left shadow-sm
                  transition-all duration-400 ease-out cursor-pointer overflow-hidden
                  hover:-translate-y-2 hover:shadow-xl ${item.cardHoverBg}
                  ${isSelected ? `-translate-y-2 shadow-xl ${item.cardHoverBg}` : ''}
                `}
              >
                {/* Card Top: Icon & Badge */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    {/* Modern Glassmorphic Icon Badge */}
                    <div 
                      className={`
                        w-14 h-14 rounded-2xl flex items-center justify-center border shadow-xs
                        transition-all duration-400 group-hover:scale-110 group-hover:rotate-3 backdrop-blur-md
                        ${item.iconStyle}
                        ${isSelected ? 'scale-110 rotate-3' : ''}
                      `}
                    >
                      <IconComponent className="w-7 h-7 transition-all duration-300" strokeWidth={2.3} />
                    </div>

                    {/* Category Badge */}
                    <span 
                      className={`
                        px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide uppercase border
                        transition-all duration-300
                        ${item.badgeStyle}
                      `}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title - Pure crisp dark text */}
                  <h3 
                    className="text-xl font-extrabold text-gray-900 mb-1.5 transition-colors duration-300"
                  >
                    {item.name}
                  </h3>

                  {/* Non-hover teaser prompt */}
                  <div 
                    className={`
                      flex items-center gap-1.5 text-xs font-semibold text-gray-400
                      transition-all duration-300
                      group-hover:opacity-0 group-hover:h-0 group-hover:overflow-hidden group-hover:mt-0
                      ${isSelected ? 'opacity-0 h-0 overflow-hidden mt-0' : 'mt-2'}
                    `}
                  >
                    <span>Explore benefits</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-green" />
                  </div>

                  {/* Hover Reveal: 3 Key Informative Lines (Font color BLACK) */}
                  <div 
                    className={`
                      overflow-hidden transition-all duration-500 ease-out
                      max-h-0 opacity-0 group-hover:max-h-64 group-hover:opacity-100 group-hover:mt-4
                      ${isSelected ? 'max-h-64 opacity-100 mt-4' : ''}
                    `}
                  >
                    <div className="pt-3 border-t border-gray-300/80 space-y-2.5">
                      {item.lines.map((line, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start gap-2.5 text-xs leading-snug transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${item.bulletColor}`} />
                          <span className="font-bold text-gray-900 tracking-tight">{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom Link */}
                <div 
                  className={`
                    mt-5 pt-3 border-t border-gray-300/80 flex items-center justify-between
                    text-xs font-bold text-gray-900
                    overflow-hidden transition-all duration-400
                    max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100
                    ${isSelected ? 'max-h-12 opacity-100' : ''}
                  `}
                >
                  <span className="tracking-wide text-gray-800 font-bold">Start with DB Fintrix</span>
                  <div className={`w-6 h-6 rounded-full ${item.bottomArrowBg} flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-xs`}>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-14 p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-brand-dark">Single Account, Zero Annual Maintenance Fees</h4>
              <p className="text-xs text-gray-500">Enjoy lifetime zero AMC for the first year with fast 5-minute paperless e-KYC.</p>
            </div>
          </div>
          <button
            onClick={handleStartInvesting}
            className="px-6 py-2.5 bg-brand-dark hover:bg-gray-800 text-white font-bold text-xs rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-green" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default InvestmentOptions;

