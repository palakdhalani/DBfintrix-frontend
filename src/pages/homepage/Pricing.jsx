import React from 'react';

const Pricing = () => {
    return (
        <section className="bg-white py-20 md:py-24">
            <div className="container mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#2a3c5a] tracking-tight mb-4">
                        Transparent pricing. <span className="text-brand-green">No hidden charges.</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        We believe in complete transparency so you keep more of your profits. Experience hassle-free trading with DB Fintrix.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Card 1 */}
                    <div className="bg-[#f8fafc] rounded-3xl p-10 text-center border border-gray-100 hover:border-brand-blue/30 hover:shadow-2xl hover:bg-white transition-all duration-300 group cursor-pointer">
                        <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            🆓
                        </div>
                        <div className="text-6xl font-extrabold text-[#2a3c5a] mb-4">₹0</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Account Opening</h3>
                        <p className="text-gray-500 text-sm">Free Demat and Trading account opening with zero hassle.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#f8fafc] rounded-3xl p-10 text-center border border-gray-100 hover:border-brand-blue/30 hover:shadow-2xl hover:bg-white transition-all duration-300 group cursor-pointer">
                        <div className="w-16 h-16 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            📈
                        </div>
                        <div className="text-6xl font-extrabold text-[#2a3c5a] mb-4">₹0</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Equity Delivery</h3>
                        <p className="text-gray-500 text-sm">Zero brokerage on all your long-term equity investments.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#f8fafc] rounded-3xl p-10 text-center border border-gray-100 hover:border-brand-blue/30 hover:shadow-2xl hover:bg-white transition-all duration-300 group cursor-pointer">
                        <div className="w-16 h-16 mx-auto bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            ⚡
                        </div>
                        <div className="flex items-baseline justify-center gap-1 mb-4">
                            <span className="text-6xl font-extrabold text-[#2a3c5a]">₹20</span>
                            <span className="text-gray-400 font-medium">/order</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Intraday & F&O</h3>
                        <p className="text-gray-500 text-sm">Flat fee for Intraday, F&O, Currencies & Commodities.</p>
                    </div>

                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <button className="bg-brand-green text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-900/20">
                        Open Free Demat Account
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Pricing;
