import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Megaphone, TrendingUp, PiggyBank, BarChart2, ArrowRightLeft, Droplet, 
  Briefcase, Activity, Landmark, PieChart, Diamond, X, CheckCircle2, 
  ArrowRight, PhoneCall, ShieldCheck, Sparkles 
} from 'lucide-react';

const investmentOptions = [
  {
    id: 1,
    title: "Demat Account",
    badge: "Essential Service",
    description: "Open a secure Demat account to hold your shares and securities digitally.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    icon: <Briefcase className="w-5 h-5 text-brand-dark" />,
    overview: "A Demat (Dematerialized) Account is your gateway to the financial markets. It electronically stores all your financial instruments such as equities, mutual funds, bonds, government securities, and ETFs in a secure and paperless depository (CDSL / NSDL).",
    benefits: [
      "100% paperless & rapid digital KYC onboarding",
      "Safeguarded with 2-Factor Authentication & biometric security",
      "Zero paperwork risk — eliminates physical theft or loss",
      "Real-time holding tracking with instant portfolio valuation"
    ],
    idealFor: "Beginners, long-term investors, and active market participants.",
    howItWorks: "Complete online Aadhaar-based e-KYC in under 5 minutes, link your bank account, and begin investing instantly."
  },
  {
    id: 2,
    title: "Trading Account",
    badge: "High Speed Execution",
    description: "Execute fast and seamless trades across all major exchanges in India.",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80",
    icon: <Activity className="w-5 h-5 text-brand-dark" />,
    overview: "A Trading Account acts as the transactional bridge between your bank account and your Demat account. It lets you buy and sell equities, derivatives, and commodities on the NSE, BSE, and MCX at lightning speeds with zero latency.",
    benefits: [
      "Direct market access across NSE, BSE, and MCX",
      "Advanced charting tools with 100+ technical indicators",
      "Ultra-low latency order routing for precise execution",
      "Integrated margin trading and instant fund transfer facility"
    ],
    idealFor: "Day traders, swing traders, and active portfolio managers.",
    howItWorks: "Place market, limit, stop-loss, and bracket orders directly through our responsive web and mobile terminal."
  },
  {
    id: 3,
    title: "Equity",
    badge: "Wealth Creation",
    description: "Own a part of renowned companies and enjoy long-term capital appreciation.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    icon: <TrendingUp className="w-5 h-5 text-brand-dark" />,
    overview: "Direct equity investing enables you to own fractional shares of India's fastest-growing enterprises. Experience the compounding power of capital appreciation alongside regular dividend income from large-cap, mid-cap, and small-cap leaders.",
    benefits: [
      "High inflation-beating long-term compounding growth",
      "Direct dividend payouts credited straight to your bank",
      "Full voting rights and ownership stake in listed companies",
      "Curated research reports and fundamental valuation metrics"
    ],
    idealFor: "Investors seeking superior long-term wealth compounding (3-10+ year horizon).",
    howItWorks: "Search high-conviction companies, review fundamentals, buy shares, and track their performance effortlessly."
  },
  {
    id: 4,
    title: "F&O (Futures & Options)",
    badge: "Derivatives Trading",
    description: "Navigate market volatility, manage risk and amplify returns with futures and options.",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=800&q=80",
    icon: <BarChart2 className="w-5 h-5 text-brand-dark" />,
    overview: "Derivatives contracts allow traders to capitalize on directional moves or hedge existing equity portfolios against market corrections. Trade index options (NIFTY, BANKNIFTY) and leading stock futures with strategic leverage.",
    benefits: [
      "Hedge stock portfolios against downside volatility",
      "Leveraged trading opportunities with controlled risk strategies",
      "Comprehensive live option chain with Greeks (Delta, Theta, Gamma)",
      "Multi-leg strategy builder (Straddles, Strangles, Spreads)"
    ],
    idealFor: "Experienced traders looking for hedging, intraday volatility, and structured risk strategies.",
    howItWorks: "Analyze implied volatility and open interest, pick your strike price, and execute single or multi-leg option orders."
  },
  {
    id: 5,
    title: "Commodity",
    badge: "Inflation Hedge",
    description: "Trade in metals, gold, oil, and more to hedge risk and enhance your portfolio.",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
    icon: <Droplet className="w-5 h-5 text-brand-dark" />,
    overview: "Commodity trading on MCX gives you direct exposure to physical asset price cycles, including Precious Metals (Gold, Silver), Energy (Crude Oil, Natural Gas), and Base Metals (Copper, Zinc). Essential for portfolio diversification.",
    benefits: [
      "Natural hedge against currency devaluation and inflation",
      "Low correlation with equity markets for balanced risk",
      "Extended trading hours allowing global market reaction",
      "High liquidity contracts in mini and standard lot sizes"
    ],
    idealFor: "Traders and businesses hedging raw material costs and inflation risks.",
    howItWorks: "Select your desired commodity contract, monitor global price dynamics, and enter long or short positions."
  },
  {
    id: 6,
    title: "Currency",
    badge: "Forex Derivatives",
    description: "Trade in global currencies and capitalize on international market trends.",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=800&q=80",
    icon: <ArrowRightLeft className="w-5 h-5 text-brand-dark" />,
    overview: "Currency derivatives let you participate in the world's largest financial market. Trade exchange-traded currency pairs such as USD-INR, EUR-INR, GBP-INR, and JPY-INR with high liquidity and transparent exchange regulations.",
    benefits: [
      "Hedge foreign exchange risks for international business",
      "High liquidity with tight bid-ask spreads",
      "Lower margin requirements compared to equity derivatives",
      "Regulated trading platform under SEBI and RBI guidelines"
    ],
    idealFor: "Importers, exporters, and macro traders tracking global interest rates and currency swings.",
    howItWorks: "Analyze macroeconomic triggers, open currency futures or options positions, and hedge global exposures."
  },
  {
    id: 7,
    title: "Mutual Funds",
    badge: "Systematic Wealth",
    description: "Invest in professionally managed portfolios for steady, diversified growth.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
    icon: <PiggyBank className="w-5 h-5 text-brand-dark" />,
    overview: "Mutual Funds pool money from thousands of investors to invest in diversified baskets of stocks, bonds, and money market instruments managed by expert fund managers. Start small via Systematic Investment Plans (SIP) starting at just ₹500/month.",
    benefits: [
      "Instant diversification across sectors and market caps",
      "Automated monthly SIP discipline for rupee-cost averaging",
      "ELSS tax-saving funds offering deductions under Section 80C",
      "Hands-off investing guided by top AMCs and certified experts"
    ],
    idealFor: "Salaried professionals, long-term goal planners, and risk-averse investors.",
    howItWorks: "Set your financial goal (Retirement, Child Education, Wealth), choose active or index funds, and automate your SIP."
  },
  {
    id: 8,
    title: "IPO (Initial Public Offering)",
    badge: "New Listings",
    description: "Secure part ownership in new ventures and seize high growth potential.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    icon: <Megaphone className="w-5 h-5 text-brand-dark" />,
    overview: "Be among the first to invest in high-potential private companies debuting on the public stock exchange. Apply for mainline and SME IPOs effortlessly with seamless UPI mandate approvals.",
    benefits: [
      "Zero paperwork application via UPI ASBA in 2 clicks",
      "Potential for attractive listing day gains and early entry",
      "Comprehensive in-house IPO research and valuation notes",
      "Instant allotment status notifications directly to your phone"
    ],
    idealFor: "Investors seeking early entry into fast-scaling new-age companies.",
    howItWorks: "Browse upcoming IPOs, enter your bid quantity, approve the UPI mandate on your phone, and monitor allotment."
  },
  {
    id: 9,
    title: "Bonds & Fixed Income",
    badge: "Guaranteed Stability",
    description: "Invest in fixed-income instruments for stable, secure, and predictable returns.",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=800&q=80",
    icon: <Landmark className="w-5 h-5 text-brand-dark" />,
    overview: "Fixed income securities provide steady, predictable cash flows with significantly lower risk than equity. Choose from Government Securities (G-Secs), Sovereign Gold Bonds (SGBs), and AAA-rated Corporate Bonds.",
    benefits: [
      "Predictable regular coupon/interest payouts",
      "Capital preservation backed by sovereign or top credit ratings",
      "Higher yield potential than traditional bank savings deposits",
      "Tax-free capital gains on Sovereign Gold Bonds held to maturity"
    ],
    idealFor: "Retirees, conservative investors, and those wanting stable passive income.",
    howItWorks: "Select bonds matching your tenure and yield preferences, invest digitally, and enjoy regular interest credits."
  },
  {
    id: 10,
    title: "ETFs (Exchange Traded Funds)",
    badge: "Smart Passive Investing",
    description: "Diversify your portfolio with Exchange Traded Funds across various sectors.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    icon: <PieChart className="w-5 h-5 text-brand-dark" />,
    overview: "ETFs combine the diversification benefits of mutual funds with the trading flexibility of individual stocks. Buy and sell Nifty 50, Bank Nifty, Gold, and Sectoral ETFs during live market hours at rock-bottom expense ratios.",
    benefits: [
      "Extremely low expense ratios (often under 0.15%)",
      "Real-time intraday trading flexibility on stock exchanges",
      "Zero fund manager risk — strictly tracks underlying benchmarks",
      "Ideal for core asset allocation and long-term holding"
    ],
    idealFor: "Investors who favor passive index investing with minimal fees.",
    howItWorks: "Search any ETF ticker (e.g. NIFTYBEES, GOLDBEES) and execute buy/sell orders just like normal company shares."
  },
  {
    id: 11,
    title: "AIFs, PMS & Structured Products",
    badge: "Exclusive HNI Solutions",
    description: "Exclusive wealth management and tailored solutions for High Net Worth Individuals.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    icon: <Diamond className="w-5 h-5 text-brand-dark" />,
    overview: "Bespoke wealth management designed exclusively for High Net Worth Individuals (HNIs) and family offices. Portfolio Management Services (PMS) and Alternative Investment Funds (AIFs) offer tailored alpha-generating strategies.",
    benefits: [
      "Direct personalized management by elite fund managers",
      "Access to unlisted equities, pre-IPO deals, and private credit",
      "Tailored hedging strategies and capital-protected structures",
      "Dedicated relationship manager with customized reporting"
    ],
    idealFor: "HNIs, Ultra-HNIs, and business families with investable surplus of ₹50L+.",
    howItWorks: "Schedule an exclusive confidential advisory session with our senior investment committee to structure your mandate."
  }
];

const PickYourInvestment = ({ limit }) => {
  const [selectedService, setSelectedService] = useState(null);
  const displayOptions = limit ? investmentOptions.slice(0, limit) : investmentOptions;

  // Lock body scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedService(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="bg-white py-20 md:py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-brand-green font-bold tracking-widest text-sm">›››</span>
            <span className="text-brand-dark font-extrabold tracking-wider text-sm uppercase">
              COMPREHENSIVE FINANCIAL SUITE
            </span>
            <span className="text-brand-green font-bold tracking-widest text-sm">‹‹‹</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark uppercase tracking-tight mb-3">
            Our Services & Investment Options
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-3xl">
            Discover DB Fintrix's extensive array of services tailored for investors, from Demat accounts to structured products. Click on any service to view full details.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => setSelectedService(option)}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-green/40 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer transform hover:-translate-y-1"
            >
              {/* Card Image Thumbnail */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <img 
                  src={option.image} 
                  alt={option.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-dark shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                  {option.badge}
                </div>

                {/* Floating Icon */}
                <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md">
                  {option.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <h3 className="text-brand-dark text-xl font-bold mb-2 group-hover:text-brand-green transition-colors">
                  {option.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">
                  {option.description}
                </p>

                {/* View Details Prompt */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-brand-dark font-bold text-xs uppercase tracking-wider group-hover:text-brand-green transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-brand-green" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {limit && (
          <div className="mt-14 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-dark text-white font-bold text-sm rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View More Services
              <ArrowRight className="w-4 h-4 text-brand-green" />
            </Link>
          </div>
        )}

      </div>

      {/* Detail Pop-up Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative my-auto animate-fade-in-up border border-gray-100 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Banner with Image */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-brand-dark">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover filter brightness-90"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d42] via-[#0a1d42]/60 to-transparent"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-colors z-20 cursor-pointer shadow-lg"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Banner Details on top of Image */}
              <div className="absolute bottom-5 left-6 right-6 z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  {selectedService.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
              
              {/* Overview */}
              <div>
                <h4 className="text-xs font-extrabold text-brand-blue uppercase tracking-wider mb-2">
                  Service Overview
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {selectedService.overview}
                </p>
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="text-xs font-extrabold text-brand-dark uppercase tracking-wider mb-3">
                  Key Features & Advantages
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-light border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700 leading-snug">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For & How it works */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-wide block mb-1">
                    🎯 Who is this for?
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {selectedService.idealFor}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-green-50/60 border border-green-100">
                  <span className="text-xs font-bold text-brand-green uppercase tracking-wide block mb-1">
                    ⚡ How to get started
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {selectedService.howItWorks}
                  </p>
                </div>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                <ShieldCheck className="w-4 h-4 text-brand-green" />
                <span>Backed by DB Fintrix Advisory Desk</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-600 font-bold text-xs hover:bg-gray-100 transition-colors w-full sm:w-auto cursor-pointer"
                >
                  Close
                </button>
                <Link
                  to="/open-account"
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 rounded-full bg-brand-green hover:bg-green-600 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5 w-full sm:w-auto whitespace-nowrap"
                >
                  Get Started
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default PickYourInvestment;
