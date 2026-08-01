import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

// --- Dummy Data ---
const categories = [
    "Tax", "Latest Updates", "Investing", "Trading", "Commodities", "Financial regulation", "Insurance", "Mutual Funds"
];

const topStory = {
    category: "TOP STORY | MUTUAL FUNDS",
    title: "DB Fintrix Mutual Fund annual report: Strategic asset allocation helped limit losses in FY26",
    readTime: "3 min read",
    description: "DB Fintrix Mutual Fund's investor base grew from 49,05,542 at the start of the financial year 2025-26 to 71,97,905 by the end of it, rising by 46.73%. Our defensive strategies paid off during volatile market periods.",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=1200",
};

const bottomLeftStory = {
    title: "No ITR filing deadline extension buzz, this year's biggest surprise is the income tax department's silence",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400"
};

const rightSideNews = [
    {
        id: 1,
        title: "How to report ESOP income in ITR for AY 2026-27",
        image: "https://images.unsplash.com/photo-1621848524671-89ceb8084ca3?auto=format&fit=crop&q=80&w=400",
        readTime: "4 min read"
    },
    {
        id: 2,
        title: "Over 5 crore ITRs filed; less than 48 hours left: What taxpayers need to know before the deadline",
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=400",
        readTime: "3 min read"
    },
    {
        id: 3,
        title: "Different portfolios, same outcome: HDFC, HSBC and Kotak midcap funds comparison",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400",
        readTime: "7 min read"
    },
    {
        id: 4,
        title: "Senior Citizen Welfare Schemes: From free aids to elderline helpline, key benefits explained",
        image: "https://images.unsplash.com/photo-1517260739337-6799d239ce83?auto=format&fit=crop&q=80&w=400",
        readTime: "3 min read"
    },
    {
        id: 5,
        title: "Last-minute ITR filing? These 9 checks could save you from notices and tax penalties",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400",
        readTime: "4 min read"
    },
    {
        id: 6,
        title: "'I'll do it tomorrow' can lead to deadline-day panic, warns income tax department",
        image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=400",
        readTime: "3 min read"
    }
];

// --- Subcomponents ---

const NewsListItem = ({ item }) => (
    <div className="flex gap-4 group cursor-pointer mb-6 last:mb-0">
        <div className="w-32 h-20 md:w-40 md:h-24 flex-shrink-0 overflow-hidden rounded-lg">
            <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
        </div>
        <div className="flex flex-col justify-center py-1">
            <h4 className="text-base font-bold text-brand-dark leading-snug group-hover:text-brand-green transition-colors line-clamp-2 mb-2">
                {item.title}
            </h4>
            <span className="text-xs text-gray-500 font-medium">{item.readTime}</span>
        </div>
    </div>
);


const Finance = () => {
    const [dynamicTopStory, setDynamicTopStory] = useState(topStory);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/hero/finance-top-story`);
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
                console.error("Failed to load dynamic finance top story:", err);
            }
        };
        fetchContent();
    }, []);

    return (
        <div className="bg-white py-10">
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* Header Section */}
                <div className="flex justify-between items-end mb-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight">
                        Personal Finance News
                    </h1>
                    <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-bold text-brand-green hover:text-green-700 transition-colors">
                        View All <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Categories Slider */}
                <div className="relative mb-10">
                    <div className="flex overflow-x-auto pb-4 hide-scrollbar gap-3 border-b border-gray-100 pr-10">
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
                    {/* Arrow at the end of the scroll container to indicate more items, similar to screenshot */}
                    <div className="absolute right-0 top-0 h-10 w-10 flex items-center justify-end bg-gradient-to-l from-white to-transparent pointer-events-none">
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* Left Column - 7/12 */}
                    <div className="lg:col-span-7 flex flex-col gap-8 lg:border-r lg:border-gray-100 lg:pr-10">
                        {/* Top Story */}
                        <div className="group cursor-pointer">
                            <div className="w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] rounded-2xl overflow-hidden mb-5">
                                <img 
                                    src={dynamicTopStory.image} 
                                    alt="Top Story" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <p className="text-xs font-bold text-brand-green tracking-widest uppercase mb-3">
                                {dynamicTopStory.category}
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight mb-3 group-hover:text-brand-green transition-colors">
                                {dynamicTopStory.title}
                            </h2>
                            <p className="text-sm text-gray-500 font-medium mb-3">
                                {dynamicTopStory.readTime}
                            </p>
                            <p className="text-gray-700 leading-relaxed line-clamp-3">
                                {dynamicTopStory.description}
                            </p>
                        </div>

                        {/* Bottom Left Story */}
                        <div className="group cursor-pointer border-t border-gray-100 pt-8 mt-auto">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden order-1 md:order-2">
                                    <img 
                                        src={bottomLeftStory.image} 
                                        alt="Story" 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold text-brand-dark leading-snug group-hover:text-brand-green transition-colors mb-3">
                                        {bottomLeftStory.title}
                                    </h3>
                                    <span className="text-xs text-gray-500 font-medium">{bottomLeftStory.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - 5/12 */}
                    <div className="lg:col-span-5 flex flex-col">
                        <h3 className="text-xl font-extrabold text-brand-dark mb-6 border-b-2 border-brand-dark pb-2 inline-block self-start">
                            Latest in Finance
                        </h3>
                        <div className="flex flex-col gap-6">
                            {rightSideNews.map((item) => (
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

export default Finance;
