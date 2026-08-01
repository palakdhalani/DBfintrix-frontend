import React, { useState, useEffect } from 'react';
import { BarChart3, Coins, Shield } from 'lucide-react';
import logo from '../../assets/DBFINTTIX_LOGO.jpg.jpeg';
import slide1 from '../../assets/1 slide.png';
import slide2 from '../../assets/2 slide.png';
import slide3 from '../../assets/3 slide.png';

const slides = [
    { id: 1, bgImage: slide1 },
    { id: 2, bgImage: slide2 },
    { id: 3, bgImage: slide3 }
];

const defaultCards = [
    {
        icon: <BarChart3 className="w-10 h-10" />,
        title: "Wealth Building",
        description: "Strategic investment planning designed to grow your wealth steadily over time.",
        linkText: "Discover More",
        link: "#"
    },
    {
        icon: <Coins className="w-10 h-10" />,
        title: "Investment Growth",
        description: "Capitalize on market opportunities with expert insights and portfolio management.",
        linkText: "Discover More",
        link: "#",
        isOffset: true,
        iconColor: "text-brand-green"
    },
    {
        icon: <Shield className="w-10 h-10" />,
        title: "Financial Protection",
        description: "Safeguard your assets and future with our comprehensive risk management strategies.",
        linkText: "Discover More",
        link: "#"
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

    // Auto-slide every 5 seconds for background
    useEffect(() => {
        if (customBgImage || noBgImage) return; // Disable slideshow if custom bg is provided or noBgImage is true
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [customBgImage, noBgImage]);

    const displayCards = cardsData || defaultCards;

    return (
        <div className="relative">
            {/* Main Hero Background */}
            <div
                className={`relative overflow-hidden bg-cover bg-center transition-all duration-1000 ease-in-out min-h-[700px] flex flex-col pb-32 ${noBgImage ? 'bg-brand-dark' : ''}`}
                style={noBgImage ? {} : { backgroundImage: `url(${customBgImage ? customBgImage : slides[currentSlide].bgImage})` }}
            >
                {/* Dark brand-dark overlay */}
                {!noBgImage && <div className="absolute inset-0 bg-brand-dark/85 z-0"></div>}

                {/* Hero Content */}
                <div className="container mx-auto px-6 max-w-7xl flex-grow flex flex-col justify-center relative z-10 pt-32">
                    <div className="flex flex-col lg:flex-row items-center w-full gap-8">

                        {/* Content */}
                        <div className={`${centerText ? 'w-full flex flex-col items-center text-center' : 'lg:w-1/2 flex flex-col items-start text-left'}`}>
                            <h1 className="text-5xl md:text-6xl text-white leading-tight mb-6 font-bold tracking-tight">
                                {title ? title : (
                                    <>
                                        Achieve Financial <br />
                                        <span className="text-brand-green">Success & Security</span>
                                    </>
                                )}
                            </h1>
                            {subtitle !== false && (
                                <p className={`text-gray-300 text-lg mb-8 max-w-md ${centerText ? 'mx-auto' : ''}`}>
                                    {subtitle ? subtitle : "Expert financial planning and investment solutions tailored for your future."}
                                </p>
                            )}
                            {showButton && (
                                <button className="bg-brand-green text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-green-600 transition-colors shadow-lg shadow-green-900/40 flex items-center gap-2 group">
                                    Learn More
                                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            )}
                        </div>

                        {/* Right Content */}
                        {!centerText && (
                            <div className="lg:w-1/2 relative mt-16 lg:mt-0 flex items-center justify-center lg:justify-end">
                                {sideImage ? (
                                    <img src={sideImage} alt="Hero illustration" className="max-w-full h-auto max-h-[400px] object-contain relative z-10 drop-shadow-2xl rounded-2xl" />
                                ) : (
                                    <div className="h-[200px] w-full flex items-center justify-end relative">
                                        {/* Decorative Line */}
                                        <svg className="absolute w-full h-full left-0 top-0 opacity-40 pointer-events-none" viewBox="0 0 500 200">
                                            <path d="M0 150 Q 250 50 500 100" stroke="#0f9d27" strokeWidth="2" fill="transparent" className="text-brand-green" />
                                            <path d="M0 160 Q 250 60 500 110" stroke="#ffffff" strokeWidth="1" fill="transparent" opacity="0.3" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Overlapping Bottom Cards */}
            {displayCards && displayCards.length > 0 && (
                <div className="container mx-auto px-6 max-w-7xl relative z-20 -mt-24 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {displayCards.map((card, index) => (
                            <div key={index} className={`bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col items-start hover:shadow-2xl transition-shadow group ${card.isOffset ? 'transform md:-translate-y-4' : ''}`}>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className={`text-4xl ${card.iconColor || 'text-brand-dark'}`}>{card.icon}</span>
                                    <h3 className="text-xl font-bold text-brand-dark">{card.title}</h3>
                                </div>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                    {card.description}
                                </p>
                                {card.linkText && (
                                    <a href={card.link || "#"} className={`font-semibold text-sm border-b-2 border-transparent pb-1 transition-colors ${card.iconColor === 'text-brand-green' ? 'text-brand-green group-hover:border-brand-dark' : 'text-brand-dark group-hover:border-brand-green'}`}>
                                        {card.linkText}
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
