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
    iconDefaultStyle: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    iconHoverStyle: "group-hover:bg-emerald-500/20 group-hover:text-emerald-300 group-hover:border-emerald-400/40",
    badgeDefault: "bg-emerald-50 text-emerald-700 border-emerald-200",
    badgeHover: "group-hover:bg-emerald-400/20 group-hover:text-emerald-200 group-hover:border-emerald-400/30",
    hoverBg: "group-hover:from-[#052b14] group-hover:via-[#094522] group-hover:to-[#0f9d27]",
    hoverShadow: "group-hover:shadow-emerald-900/40",
    accentBullet: "text-emerald-400",
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
    iconDefaultStyle: "bg-blue-50 text-blue-600 border-blue-200/80",
    iconHoverStyle: "group-hover:bg-blue-500/20 group-hover:text-cyan-300 group-hover:border-cyan-400/40",
    badgeDefault: "bg-blue-50 text-blue-700 border-blue-200",
    badgeHover: "group-hover:bg-blue-400/20 group-hover:text-cyan-200 group-hover:border-blue-400/30",
    hoverBg: "group-hover:from-[#071a3d] group-hover:via-[#0c2f6d] group-hover:to-[#0284c7]",
    hoverShadow: "group-hover:shadow-blue-900/40",
    accentBullet: "text-cyan-300",
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
    iconDefaultStyle: "bg-purple-50 text-purple-600 border-purple-200/80",
    iconHoverStyle: "group-hover:bg-purple-500/20 group-hover:text-purple-300 group-hover:border-purple-400/40",
    badgeDefault: "bg-purple-50 text-purple-700 border-purple-200",
    badgeHover: "group-hover:bg-purple-400/20 group-hover:text-purple-200 group-hover:border-purple-400/30",
    hoverBg: "group-hover:from-[#1b0a30] group-hover:via-[#361358] group-hover:to-[#7c3aed]",
    hoverShadow: "group-hover:shadow-purple-900/40",
    accentBullet: "text-purple-300",
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
    iconDefaultStyle: "bg-orange-50 text-orange-600 border-orange-200/80",
    iconHoverStyle: "group-hover:bg-orange-500/20 group-hover:text-amber-300 group-hover:border-amber-400/40",
    badgeDefault: "bg-orange-50 text-orange-700 border-orange-200",
    badgeHover: "group-hover:bg-orange-400/20 group-hover:text-amber-200 group-hover:border-orange-400/30",
    hoverBg: "group-hover:from-[#2e0f03] group-hover:via-[#572005] group-hover:to-[#ea580c]",
    hoverShadow: "group-hover:shadow-orange-900/40",
    accentBullet: "text-amber-300",
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
    iconDefaultStyle: "bg-amber-50 text-amber-600 border-amber-200/80",
    iconHoverStyle: "group-hover:bg-amber-500/20 group-hover:text-yellow-300 group-hover:border-yellow-400/40",
    badgeDefault: "bg-amber-50 text-amber-700 border-amber-200",
    badgeHover: "group-hover:bg-amber-400/20 group-hover:text-yellow-200 group-hover:border-amber-400/30",
    hoverBg: "group-hover:from-[#1e1504] group-hover:via-[#3d2a07] group-hover:to-[#d97706]",
    hoverShadow: "group-hover:shadow-yellow-900/40",
    accentBullet: "text-yellow-300",
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
    iconDefaultStyle: "bg-teal-50 text-teal-600 border-teal-200/80",
    iconHoverStyle: "group-hover:bg-teal-500/20 group-hover:text-teal-300 group-hover:border-teal-400/40",
    badgeDefault: "bg-teal-50 text-teal-700 border-teal-200",
    badgeHover: "group-hover:bg-teal-400/20 group-hover:text-teal-200 group-hover:border-teal-400/30",
    hoverBg: "group-hover:from-[#032626] group-hover:via-[#074542] group-hover:to-[#0d9488]",
    hoverShadow: "group-hover:shadow-teal-900/40",
    accentBullet: "text-teal-300",
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
    iconDefaultStyle: "bg-rose-50 text-rose-600 border-rose-200/80",
    iconHoverStyle: "group-hover:bg-rose-500/20 group-hover:text-rose-300 group-hover:border-rose-400/40",
    badgeDefault: "bg-rose-50 text-rose-700 border-rose-200",
    badgeHover: "group-hover:bg-rose-400/20 group-hover:text-rose-200 group-hover:border-rose-400/30",
    hoverBg: "group-hover:from-[#290514] group-hover:via-[#4f0c2b] group-hover:to-[#e11d48]",
    hoverShadow: "group-hover:shadow-rose-900/40",
    accentBullet: "text-rose-300",
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
    iconDefaultStyle: "bg-sky-50 text-sky-600 border-sky-200/80",
    iconHoverStyle: "group-hover:bg-sky-500/20 group-hover:text-sky-300 group-hover:border-sky-400/40",
    badgeDefault: "bg-sky-50 text-sky-700 border-sky-200",
    badgeHover: "group-hover:bg-sky-400/20 group-hover:text-sky-200 group-hover:border-sky-400/30",
    hoverBg: "group-hover:from-[#071c31] group-hover:via-[#0d375e] group-hover:to-[#2563eb]",
    hoverShadow: "group-hover:shadow-sky-900/40",
    accentBullet: "text-sky-300",
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
                  group relative bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-7
                  flex flex-col justify-between text-left shadow-sm
                  transition-all duration-500 ease-out cursor-pointer overflow-hidden
                  hover:-translate-y-2 hover:border-transparent hover:bg-gradient-to-br
                  ${item.hoverBg} ${item.hoverShadow} hover:shadow-2xl
                  ${isSelected ? `bg-gradient-to-br ${item.hoverBg} border-transparent -translate-y-2 shadow-2xl ${item.hoverShadow}` : ''}
                `}
              >
                {/* Ambient dynamic radial glow on hover */}
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Card Top: Icon & Badge */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    {/* Modern Glassmorphic Icon Badge */}
                    <div 
                      className={`
                        w-14 h-14 rounded-2xl flex items-center justify-center border shadow-xs
                        transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 backdrop-blur-md
                        ${item.iconDefaultStyle} ${item.iconHoverStyle}
                        ${isSelected ? 'scale-110 rotate-3 bg-white/20 text-white' : ''}
                      `}
                    >
                      <IconComponent className="w-7 h-7 transition-all duration-300" strokeWidth={2.2} />
                    </div>

                    {/* Category Badge */}
                    <span 
                      className={`
                        px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide uppercase border
                        transition-all duration-400
                        ${item.badgeDefault} ${item.badgeHoverStyle}
                        ${isSelected ? 'bg-white/20 text-white border-white/30' : ''}
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
                    <ArrowRight className="w-3.5 h-3.5 text-brand-green" />
                  </div>

                  {/* Hover Reveal: 3 Key Informative Lines */}
                  <div 
                    className={`
                      overflow-hidden transition-all duration-500 ease-out
                      max-h-0 opacity-0 group-hover:max-h-64 group-hover:opacity-100 group-hover:mt-4
                      ${isSelected ? 'max-h-64 opacity-100 mt-4' : ''}
                    `}
                  >
                    <div className="pt-3 border-t border-white/15 space-y-2.5">
                      {item.lines.map((line, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start gap-2.5 text-xs text-gray-200 leading-snug transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                          style={{ transitionDelay: `${idx * 75}ms` }}
                        >
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${item.accentBullet}`} />
                          <span className="font-medium text-white/95">{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom Link (reveals smoothly on hover) */}
                <div 
                  className={`
                    mt-5 pt-3 border-t border-white/15 flex items-center justify-between
                    text-xs font-bold text-white/90
                    overflow-hidden transition-all duration-400
                    max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100
                    ${isSelected ? 'max-h-12 opacity-100' : ''}
                  `}
                >
                  <span className="tracking-wide">Start with DB Fintrix</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
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

