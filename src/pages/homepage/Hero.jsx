import React, { useState, useEffect } from 'react';
import { BarChart3, Coins, Shield, ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import AnimatedWords from '../../Comman components/AnimatedWords';
import slide1 from '../../assets/The Role of Corporate Finance in Growth.jpg';
import slide2 from '../../assets/1 slide.png';
import slide3 from '../../assets/2 slide.png';

const defaultSlides = [
    {
        id: 1,
        bgImage: slide1,
        tag: "India's Leading Broking Partners",
        titlePrefix: "Build Wealth",
        titleHighlight: "Build Your Business",
        accentColor: "from-emerald-400 via-teal-300 to-green-400",
        badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
        buttonBg: "bg-brand-green hover:bg-green-600 shadow-green-900/40",
        description: "Become an Investor or Start Your Own Stock Market Business with India's Leading Broking Partners."
    },
    {
        id: 2,
        bgImage: slide2,
        tag: "Zero Latency Direct Market Access",
        titlePrefix: "Smart Trading",
        titleHighlight: "Maximum Growth",
        accentColor: "from-cyan-400 via-sky-300 to-blue-500",
        badgeBg: "bg-blue-500/20 text-cyan-300 border-blue-500/30",
        buttonBg: "bg-blue-600 hover:bg-blue-700 shadow-blue-900/40",
        description: "Access industry-leading research, advanced technical charting, and ultra-fast execution across NSE, BSE & MCX."
    },
    {
        id: 3,
        bgImage: slide3,
        tag: "Transparent Payouts & Trail Income",
        titlePrefix: "Multiple Streams",
        titleHighlight: "Of Steady Income",
        accentColor: "from-amber-400 via-yellow-300 to-orange-400",
        badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/30",
        buttonBg: "bg-amber-600 hover:bg-amber-700 shadow-amber-900/40",
        description: "Monetize your network across 8 high-yielding financial products with up to 80% competitive revenue sharing."
    }
];

const defaultCards = [
    {
        icon: <BarChart3 className="w-9 h-9" />,
        title: "Wealth Building",
        description: "Strategic investment planning designed to grow your wealth steadily over time.",
        linkText: "Discover More",
        link: "#",
        hoverBg: "hover:bg-gradient-to-br hover:from-[#0a1d42] hover:via-[#0c285d] hover:to-[#004aad] hover:shadow-blue-900/30",
        iconDefault: "text-brand-dark bg-blue-50",
        iconHover: "group-hover:bg-white/15 group-hover:text-cyan-300",
        linkHover: "group-hover:text-cyan-300 group-hover:border-cyan-300"
    },
    {
        icon: <Coins className="w-9 h-9" />,
        title: "Investment Growth",
        description: "Capitalize on market opportunities with expert insights and portfolio management.",
        linkText: "Discover More",
        link: "#",
        isOffset: true,
        hoverBg: "hover:bg-gradient-to-br hover:from-[#062e16] hover:via-[#0a4821] hover:to-[#0f9d27] hover:shadow-emerald-900/30",
        iconDefault: "text-brand-green bg-emerald-50",
        iconHover: "group-hover:bg-white/15 group-hover:text-emerald-200",
        linkHover: "group-hover:text-emerald-200 group-hover:border-emerald-200"
    },
    {
        icon: <Shield className="w-9 h-9" />,
        title: "Financial Protection",
        description: "Safeguard your assets and future with our comprehensive risk management strategies.",
        linkText: "Discover More",
        link: "#",
        hoverBg: "hover:bg-gradient-to-br hover:from-[#0f172a] hover:via-[#1e293b] hover:to-[#0284c7] hover:shadow-sky-900/30",
        iconDefault: "text-brand-dark bg-slate-100",
        iconHover: "group-hover:bg-white/15 group-hover:text-sky-300",
        linkHover: "group-hover:text-sky-300 group-hover:border-sky-300"
    }
];

const Hero = ({ 
    title, 
    subtitle, 
    showButton = true, 
    customBgImage = null, 
    centerText = false, 
    sideImage = null, 
    noBgImage = false, 
    cardsData = null 
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const isSlideshowActive = !customBgImage && !noBgImage;
    const currentSlideData = defaultSlides[currentSlide] || defaultSlides[0];

    // Auto-slide every 5 seconds for background when not paused
    useEffect(() => {
        if (!isSlideshowActive || isPaused) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === defaultSlides.length - 1 ? 0 : prev + 1));
        }, 5500);
        return () => clearInterval(timer);
    }, [isSlideshowActive, isPaused]);

    const displayCards = cardsData || defaultCards;

    return (
        <div 
            className="relative select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Main Hero Background with smooth crossfade */}
            <div
                className={`relative overflow-hidden bg-cover bg-center transition-all duration-1000 ease-in-out min-h-[720px] flex flex-col pb-36 ${noBgImage ? 'bg-brand-dark' : ''}`}
                style={noBgImage ? {} : { backgroundImage: `url(${customBgImage ? customBgImage : currentSlideData.bgImage})` }}
            >
                {/* Dark brand-dark overlay with dynamic color ambient glow */}
                {!noBgImage && (
                    <>
                        <div className="absolute inset-0 bg-[#061226]/85 z-0 transition-colors duration-1000"></div>
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/15 rounded-full blur-[140px] pointer-events-none z-0"></div>
                        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none z-0"></div>
                    </>
                )}

                {/* Hero Content */}
                <div className="container mx-auto px-6 flex-grow flex flex-col justify-center relative z-10 pt-32">
                    <div className="flex flex-col lg:flex-row items-center w-full gap-8">

                        {/* Content */}
                        <div className={`${centerText ? 'w-full flex flex-col items-center text-center' : 'lg:w-7/12 flex flex-col items-start text-left'}`}>
                            
                            {/* Animated Tag Pill */}
                            {isSlideshowActive && (
                                <div 
                                    key={`tag-${currentSlide}`} 
                                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md transition-all duration-700 animate-fade-in ${currentSlideData.badgeBg}`}
                                >
                                    <Sparkles className="w-4 h-4 animate-spin-slow" />
                                    <span>{currentSlideData.tag}</span>
                                </div>
                            )}

                            {/* Main Title with Word-by-Word Animation & Text Gradient */}
                            <h1 
                                key={`heading-${currentSlide}`}
                                className="text-4xl sm:text-5xl md:text-6xl text-white leading-[1.15] mb-6 font-extrabold tracking-tight"
                            >
                                {title ? (
                                    <AnimatedWords text={typeof title === 'string' ? title : "Build Wealth"} highlightWords={["Wealth", "Business"]} />
                                ) : (
                                    <>
                                        <AnimatedWords 
                                            text={currentSlideData.titlePrefix} 
                                            baseDelay={50}
                                            className="block"
                                        />
                                        <span className={`bg-gradient-to-r ${currentSlideData.accentColor} bg-clip-text text-transparent animate-text-gradient font-black block mt-1`}>
                                            {currentSlideData.titleHighlight}
                                        </span>
                                    </>
                                )}
                            </h1>

                            {/* Subtitle with staggered reveal */}
                            {subtitle !== false && (
                                <p 
                                    key={`sub-${currentSlide}`}
                                    className={`text-gray-300 text-base sm:text-lg mb-8 max-w-xl leading-relaxed animate-fade-in ${centerText ? 'mx-auto' : ''}`}
                                >
                                    {subtitle ? subtitle : currentSlideData.description}
                                </p>
                            )}

                            {/* Call to action & interactive slide indicators */}
                            <div className="flex flex-wrap items-center gap-6">
                                {showButton && (
                                    <button 
                                        className={`text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all transform hover:-translate-y-0.5 shadow-xl flex items-center gap-2 group cursor-pointer animate-pulse-ring ${currentSlideData.buttonBg}`}
                                    >
                                        Learn More
                                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
                                    </button>
                                )}

                                {/* Slide Control Pills with Auto-Progress indicator */}
                                {isSlideshowActive && (
                                    <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
                                        {defaultSlides.map((slide, idx) => {
                                            const isActive = currentSlide === idx;
                                            return (
                                                <button
                                                    key={slide.id}
                                                    onClick={() => setCurrentSlide(idx)}
                                                    className={`relative transition-all duration-500 rounded-full overflow-hidden cursor-pointer ${
                                                        isActive ? 'w-10 h-2.5 bg-white/30' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                                                    }`}
                                                    title={`Go to slide ${idx + 1}`}
                                                >
                                                    {isActive && (
                                                        <div className="h-full bg-brand-green rounded-full slider-progress-active"></div>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Content */}
                        {!centerText && (
                            <div className="lg:w-5/12 relative mt-8 lg:mt-0 flex items-center justify-center lg:justify-end">
                                {sideImage ? (
                                    <img 
                                        src={sideImage} 
                                        alt="Hero illustration" 
                                        className="max-w-full h-auto max-h-[400px] object-contain relative z-10 drop-shadow-2xl rounded-2xl animate-float-slow" 
                                    />
                                ) : (
                                    <div className="relative w-full max-w-[380px] h-[320px] hidden sm:flex items-center justify-center">
                                        {/* Floating decorative glass badges */}
                                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white p-4 rounded-2xl shadow-2xl animate-float-slow flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-brand-green/30 flex items-center justify-center text-brand-green font-bold">
                                                📈
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-300">Portfolio Growth</div>
                                                <div className="text-sm font-bold text-white">+28.4% APY</div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-6 left-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white p-4 rounded-2xl shadow-2xl animate-float-delayed flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-blue-500/30 flex items-center justify-center text-blue-300 font-bold">
                                                ⚡
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-300">Execution Speed</div>
                                                <div className="text-sm font-bold text-white">&lt; 15 Milliseconds</div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Prev / Next slide navigation arrows on hover */}
                {isSlideshowActive && (
                    <div className="absolute top-1/2 -translate-y-1/2 w-full px-4 flex justify-between pointer-events-none z-20">
                        <button
                            onClick={() => setCurrentSlide((prev) => (prev === 0 ? defaultSlides.length - 1 : prev - 1))}
                            className="pointer-events-auto w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => setCurrentSlide((prev) => (prev === defaultSlides.length - 1 ? 0 : prev + 1))}
                            className="pointer-events-auto w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                )}
            </div>

            {/* Overlapping Bottom Cards with Dynamic Background Color Hover */}
            {displayCards && displayCards.length > 0 && (
                <div className="container mx-auto px-6 relative z-20 -mt-24 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {displayCards.map((card, index) => (
                            <div 
                                key={index} 
                                className={`bg-white rounded-3xl p-8 sm:p-9 shadow-xl border border-gray-100/90 transition-all duration-500 flex flex-col items-start group hover-lift shine-overlay cursor-pointer ${
                                    card.hoverBg || 'hover:bg-brand-dark'
                                } hover:border-transparent hover:shadow-2xl ${
                                    card.isOffset ? 'transform md:-translate-y-4' : ''
                                }`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm group-hover:scale-110 group-hover:rotate-3 ${card.iconDefault || 'text-brand-dark bg-gray-50'} ${card.iconHover || 'group-hover:text-white group-hover:bg-white/15'}`}>
                                        {card.icon}
                                    </span>
                                    <h3 className="text-xl font-extrabold text-brand-dark group-hover:text-white transition-colors duration-400">
                                        {card.title}
                                    </h3>
                                </div>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed group-hover:text-white/85 transition-colors duration-400">
                                    {card.description}
                                </p>
                                {card.linkText && (
                                    <a 
                                        href={card.link || "#"} 
                                        className={`font-bold text-sm border-b-2 border-transparent pb-1 transition-all duration-400 flex items-center gap-1.5 text-brand-dark ${card.linkHover || 'group-hover:text-white group-hover:border-white'} group-hover:translate-x-1.5`}
                                    >
                                        <span>{card.linkText}</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hero;
