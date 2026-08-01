import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, TrendingUp, TrendingDown } from 'lucide-react';

// --- Dummy Data ---
const categories = [
    "IPO", "Equity", "Mutual Funds", "Derivatives", "Commodities", "Currency", "Trading", "Latest Updates", "Financial"
];

const topStory = {
    category: "TOP STORY | MARKETS",
    title: "Market hits record highs: Banking and IT stocks lead the rally",
    readTime: "4 min read",
    description: "The benchmark indices closed at unprecedented levels today, driven by strong quarterly earnings in the IT sector and robust foreign institutional investments. Analysts predict this momentum might sustain through the week.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
    tags: [
        { symbol: "HDFCBANK", change: "+2.45%", isPositive: true },
        { symbol: "INFY", change: "+1.80%", isPositive: true }
    ]
};

const leftSideNews = [
    {
        id: 1,
        title: "Reliance Industries announces massive investment in green energy sector",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=400",
        readTime: "3 min read",
        tags: [{ symbol: "RELIANCE", change: "+1.20%", isPositive: true }]
    },
    {
        id: 2,
        title: "Auto sales show signs of slowing down amidst rising interest rates",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400",
        readTime: "5 min read",
        tags: [{ symbol: "TATAMOTORS", change: "-0.85%", isPositive: false }]
    }
];

const videos = [
    {
        id: 1,
        title: "Understanding the impact of the new tax regime on your investments",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=400",
        duration: "12m 45s"
    },
    {
        id: 2,
        title: "Top 5 dividend paying stocks for long-term wealth creation",
        image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=400",
        duration: "8m 20s"
    }
];

const rightSideNews = [
    {
        id: 1,
        title: "FIIs turn net buyers in August, injecting $1.2 Billion into equities",
        image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=400",
        readTime: "4 min read",
        tags: [{ symbol: "NIFTY50", change: "+0.65%", isPositive: true }]
    },
    {
        id: 2,
        title: "FMCG sector sees volume growth revival in rural markets",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
        readTime: "3 min read",
        tags: [{ symbol: "ITC", change: "+0.45%", isPositive: true }]
    },
    {
        id: 3,
        title: "Global cues: US Federal Reserve hints at potential rate cuts by year-end",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=400",
        readTime: "6 min read",
        tags: [{ symbol: "US500", change: "+1.10%", isPositive: true }]
    },
    {
        id: 4,
        title: "Tech startups face funding winter; valuations adjust to market reality",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=400",
        readTime: "5 min read",
        tags: [{ symbol: "ZOMATO", change: "-2.10%", isPositive: false }]
    }
];

// --- Subcomponents ---

const StockTag = ({ tag }) => (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-xs font-bold">
        <span className="text-gray-700">{tag.symbol}</span>
        <span className={tag.isPositive ? "text-green-600" : "text-red-500"}>
            {tag.change}
        </span>
        {tag.isPositive ? (
            <TrendingUp className="w-3 h-3 text-green-600" />
        ) : (
            <TrendingDown className="w-3 h-3 text-red-500" />
        )}
    </div>
);

const NewsListItem = ({ item }) => (
    <div className="flex gap-4 group cursor-pointer">
        <div className="w-32 h-24 flex-shrink-0 overflow-hidden rounded-lg">
            <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
        </div>
        <div className="flex flex-col justify-between py-1">
            <h4 className="text-base font-bold text-brand-dark leading-snug group-hover:text-brand-green transition-colors line-clamp-2">
                {item.title}
            </h4>
            <div className="flex items-center gap-3 mt-2 flex-wrap">
                {item.tags.map((tag, idx) => (
                    <StockTag key={idx} tag={tag} />
                ))}
                <span className="text-xs text-gray-500 font-medium">{item.readTime}</span>
            </div>
        </div>
    </div>
);


const Market = () => {
    const [dynamicTopStory, setDynamicTopStory] = useState(topStory);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/hero/news-top-story`);
                if (res.ok) {
                    const data = await res.json();
                    if (data.heading) {
                        setDynamicTopStory(prev => ({
                            ...prev,
                            title: data.heading,
                            description: data.subheading || prev.description,
                            image: data.imageUrl || prev.image
                        }));
                    }
                }
            } catch (err) {
                console.error("Failed to load dynamic top story:", err);
            }
        };
        fetchContent();
    }, []);

    return (
        <div className="bg-white min-h-screen py-10">
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* Header Section */}
                <div className="flex justify-between items-end mb-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight">
                        Market News
                    </h1>
                    {/* <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-bold text-brand-green hover:text-green-700 transition-colors">
                        View All <ArrowRight className="w-4 h-4" />
                    </a> */}
                </div>

                {/* Categories Slider */}
                <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar gap-3 border-b border-gray-100">
                    {categories.map((cat, idx) => (
                        <button 
                            key={idx}
                            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                                idx === 0 
                                ? 'bg-brand-dark text-white border-brand-dark shadow-md' 
                                : 'bg-white text-gray-600 border-gray-200 hover:border-brand-green hover:text-brand-green'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* Left Column - 7/12 */}
                    <div className="lg:col-span-7 lg:border-r lg:border-gray-100 lg:pr-10">
                        {/* Top Story */}
                        <div className="mb-12 group cursor-pointer">
                            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">
                                {dynamicTopStory.category}
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight mb-4 group-hover:text-brand-green transition-colors">
                                {dynamicTopStory.title}
                            </h2>
                            <p className="text-sm text-gray-500 font-medium mb-4">
                                {dynamicTopStory.readTime}
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                {dynamicTopStory.description}
                            </p>
                            <div className="flex items-center gap-3 mb-6 flex-wrap">
                                {dynamicTopStory.tags.map((tag, idx) => (
                                    <StockTag key={idx} tag={tag} />
                                ))}
                            </div>
                            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden">
                                <img 
                                    src={dynamicTopStory.image} 
                                    alt="Top Story" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Left Secondary News List */}
                        <div className="space-y-6">
                            {leftSideNews.map(item => (
                                <NewsListItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>

                    {/* Right Column - 5/12 */}
                    <div className="lg:col-span-5">
                        
                        {/* Videos Section */}
                        <div className="mb-10">
                            <div className="flex justify-between items-end mb-5">
                                <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase">
                                    Videos
                                </h3>
                                <a href="#" className="text-xs font-bold text-brand-green hover:text-green-700 transition-colors flex items-center gap-1">
                                    View all <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                {videos.map(video => (
                                    <div key={video.id} className="group cursor-pointer">
                                        <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                                            <img 
                                                src={video.image} 
                                                alt={video.title} 
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                            <div className="absolute bottom-2 left-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-dark group-hover:text-brand-green transition-colors shadow-lg">
                                                <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                                            </div>
                                        </div>
                                        <h4 className="text-sm font-bold text-brand-dark leading-snug group-hover:text-brand-green transition-colors line-clamp-2 mb-1">
                                            {video.title}
                                        </h4>
                                        <p className="text-xs text-gray-500 font-medium">{video.duration}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Secondary News List */}
                        <div className="space-y-6 pt-6 border-t border-gray-100">
                            {rightSideNews.map(item => (
                                <NewsListItem key={item.id} item={item} />
                            ))}
                        </div>

                    </div>
                </div>

            </div>

            {/* Optional styles for hiding scrollbar on categories */}
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default Market;
