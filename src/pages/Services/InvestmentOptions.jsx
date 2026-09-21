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
    hoverBg: "hover:bg-gradient-to-br hover:from-[#062e16] hover:via-[#0a4821] hover:to-[#0f9d27] hover:shadow-emerald-900/40",
    iconDefault: "text-brand-green bg-emerald-50 border-emerald-100",
    iconHover: "group-hover:bg-white/15 group-hover:text-emerald-200 group-hover:border-white/20",
    badgeDefault: "bg-emerald-50 text-emerald-700 border-emerald-200",
    badgeHover: "group-hover:bg-white/15 group-hover:text-emerald-200 group-hover:border-white/20",
    accentBullet: "text-emerald-400 group-hover:text-emerald-300",
    bottomArrowBg: "bg-emerald-600 group-hover:bg-white group-hover:text-emerald-700",
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
    hoverBg: "hover:bg-gradient-to-br hover:from-[#0a1d42] hover:via-[#0c285d] hover:to-[#004aad] hover:shadow-blue-900/40",
    iconDefault: "text-brand-dark bg-blue-50 border-blue-100",
    iconHover: "group-hover:bg-white/15 group-hover:text-cyan-300 group-hover:border-white/20",
    badgeDefault: "bg-blue-50 text-blue-700 border-blue-200",
    badgeHover: "group-hover:bg-white/15 group-hover:text-cyan-200 group-hover:border-white/20",
    accentBullet: "text-cyan-400 group-hover:text-cyan-300",
    bottomArrowBg: "bg-blue-600 group-hover:bg-white group-hover:text-blue-700",
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
    hoverBg: "hover:bg-gradient-to-br hover:from-[#1b0b30] hover:via-[#361358] hover:to-[#7c3aed] hover:shadow-purple-900/40",
    iconDefault: "text-purple-700 bg-purple-50 border-purple-100",
    iconHover: "group-hover:bg-white/15 group-hover:text-purple-200 group-hover:border-white/20",
    badgeDefault: "bg-purple-50 text-purple-700 border-purple-200",
    badgeHover: "group-hover:bg-white/15 group-hover:text-purple-200 group-hover:border-white/20",
    accentBullet: "text-purple-400 group-hover:text-purple-300",
    bottomArrowBg: "bg-purple-600 group-hover:bg-white group-hover:text-purple-700",
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
    hoverBg: "hover:bg-gradient-to-br hover:from-[#2e1003] hover:via-[#572205] hover:to-[#ea580c] hover:shadow-orange-900/40",
    iconDefault: "text-orange-600 bg-orange-50 border-orange-100",
    iconHover: "group-hover:bg-white/15 group-hover:text-amber-200 group-hover:border-white/20",
    badgeDefault: "bg-orange-50 text-orange-700 border-orange-200",
    badgeHover: "group-hover:bg-white/15 group-hover:text-amber-200 group-hover:border-white/20",
    accentBullet: "text-amber-400 group-hover:text-amber-300",
    bottomArrowBg: "bg-orange-600 group-hover:bg-white group-hover:text-orange-700",
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
    hoverBg: "hover:bg-gradient-to-br hover:from-[#1f1604] hover:via-[#422d08] hover:to-[#d97706] hover:shadow-yellow-900/40",
    iconDefault: "text-amber-700 bg-amber-50 border-amber-100",
    iconHover: "group-hover:bg-white/15 group-hover:text-yellow-200 group-hover:border-white/20",
    badgeDefault: "bg-amber-50 text-amber-700 border-amber-200",
    badgeHover: "group-hover:bg-white/15 group-hover:text-yellow-200 group-hover:border-white/20",
    accentBullet: "text-yellow-400 group-hover:text-yellow-300",
    bottomArrowBg: "bg-amber-600 group-hover:bg-white group-hover:text-amber-700",
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
    hoverBg: "hover:bg-gradient-to-br hover:from-[#042827] hover:via-[#094643] hover:to-[#0d9488] hover:shadow-teal-900/40",
    iconDefault: "text-teal-700 bg-teal-50 border-teal-100",
    iconHover: "group-hover:bg-white/15 group-hover:text-teal-200 group-hover:border-white/20",
    badgeDefault: "bg-teal-50 text-teal-700 border-teal-200",
    badgeHover: "group-hover:bg-white/15 group-hover:text-teal-200 group-hover:border-white/20",
    accentBullet: "text-teal-400 group-hover:text-teal-300",
    bottomArrowBg: "bg-teal-600 group-hover:bg-white group-hover:text-teal-700",
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
    hoverBg: "hover:bg-gradient-to-br hover:from-[#2a0614] hover:via-[#520d2d] hover:to-[#e11d48] hover:shadow-rose-900/40",
    iconDefault: "text-rose-600 bg-rose-50 border-rose-100",
    iconHover: "group-hover:bg-white/15 group-hover:text-rose-200 group-hover:border-white/20",
    badgeDefault: "bg-rose-50 text-rose-700 border-rose-200",
    badgeHover: "group-hover:bg-white/15 group-hover:text-rose-200 group-hover:border-white/20",
    accentBullet: "text-rose-400 group-hover:text-rose-300",
    bottomArrowBg: "bg-rose-600 group-hover:bg-white group-hover:text-rose-700",
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
    hoverBg: "hover:bg-gradient-to-br hover:from-[#0f172a] hover:via-[#1e293b] hover:to-[#0284c7] hover:shadow-sky-900/40",
    iconDefault: "text-brand-dark bg-slate-100 border-slate-200",
    iconHover: "group-hover:bg-white/15 group-hover:text-sky-300 group-hover:border-white/20",
    badgeDefault: "bg-slate-100 text-slate-700 border-slate-200",
    badgeHover: "group-hover:bg-white/15 group-hover:text-sky-200 group-hover:border-white/20",
    accentBullet: "text-sky-400 group-hover:text-sky-300",
    bottomArrowBg: "bg-sky-600 group-hover:bg-white group-hover:text-sky-700",
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
      {/* Ambient background glows */}
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

        {/* Grid of Cards - Styled like Hero Section 3 Cards with Butter-Smooth Height Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((item) => {
            const IconComponent = item.icon;
            const isSelected = activeCard === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setActiveCard(isSelected ? null : item.id)}
                className={`
                  bg-white rounded-3xl p-7 sm:p-8 shadow-xl border border-gray-100/90
                  transition-all duration-500 ease-out flex flex-col justify-between items-start
                  group hover-lift shine-overlay cursor-pointer relative overflow-hidden
                  ${item.hoverBg} hover:border-transparent hover:shadow-2xl
                  ${isSelected ? `${item.hoverBg} -translate-y-2 shadow-2xl border-transparent` : ''}
                `}
              >
                {/* Subtle glass ambient glow on hover */}
                <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-white/10 blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Card Top: Icon & Badge */}
                <div className="w-full">
                  <div className="flex items-center justify-between gap-3 mb-5 w-full">
                    {/* Icon Container with Smooth Scale & Rotate */}
                    <span 
                      className={`
                        w-14 h-14 rounded-2xl flex items-center justify-center border shadow-xs
                        transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3
                        ${item.iconDefault} ${item.iconHover}
                        ${isSelected ? 'bg-white/15 text-white border-white/20 scale-110 rotate-3' : ''}
                      `}
                    >
                      <IconComponent className="w-7 h-7 transition-all duration-300" strokeWidth={2.2} />
                    </span>

                    {/* Category Badge */}
                    <span 
                      className={`
                        px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide uppercase border
                        transition-all duration-400
                        ${item.badgeDefault} ${item.badgeHover}
                        ${isSelected ? 'bg-white/15 text-white border-white/20' : ''}
                      `}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    className={`
                      text-xl font-extrabold text-[#0a1d42] mb-1.5 transition-colors duration-400
                      group-hover:text-white
                      ${isSelected ? 'text-white' : ''}
                    `}
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
                    <ArrowRight className="w-3.5 h-3.5 text-brand-green group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Butter-Smooth Height Expansion for the 3 Lines */}
                  <div 
                    className={`
                      w-full grid transition-all duration-500 ease-out
                      ${isSelected ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr] group-hover:grid-rows-[1fr] group-hover:mt-4'}
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-3.5 border-t border-gray-100 group-hover:border-white/15 space-y-2.5 transition-colors duration-400">
                        {item.lines.map((line, idx) => (
                          <div 
                            key={idx} 
                            className={`
                              flex items-start gap-2.5 text-xs sm:text-sm leading-snug font-medium
                              transition-all duration-400
                              ${isSelected 
                                ? 'translate-y-0 opacity-100 text-white/95' 
                                : 'text-gray-700 group-hover:text-white/95 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100'
                              }
                            `}
                            style={{ transitionDelay: `${idx * 60}ms` }}
                          >
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${item.accentBullet} transition-colors`} />
                            <span>{line}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Butter-Smooth Card Bottom Link */}
                <div 
                  className={`
                    w-full grid transition-all duration-500 ease-out mt-2
                    ${isSelected ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] group-hover:grid-rows-[1fr]'}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="pt-3.5 border-t border-gray-100 group-hover:border-white/15 flex items-center justify-between text-xs font-bold text-gray-700 group-hover:text-white transition-colors duration-400">
                      <span className="tracking-wide">Explore & Open Demat</span>
                      <div className={`w-7 h-7 rounded-full ${item.bottomArrowBg} flex items-center justify-center group-hover:translate-x-1.5 transition-all duration-300 shadow-md`}>
                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
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
