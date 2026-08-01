import React from 'react';
import { IdCard, Home, Landmark } from 'lucide-react';

const documents = [
    {
        id: 1,
        title: "Identity proof",
        description: "A valid PAN Card is mandated by regulatory authorities for all financial transactions. It acts as your primary identification in the stock market and must be verified before account activation.",
        icon: <IdCard className="w-12 h-12 text-brand-dark mb-6" />
    },
    {
        id: 2,
        title: "Address proof",
        description: "We require a government-issued document to verify your residential address. You can provide your Aadhaar Card, Passport, Voter ID, or a recent utility bill to complete this step securely.",
        icon: <Home className="w-12 h-12 text-brand-dark mb-6" />
    },
    {
        id: 3,
        title: "Income proof",
        description: "To trade in specialized segments like Futures & Options (F&O) or Commodities, you will need to upload your latest 6 months' bank statement, recent salary slips, or your latest Income Tax Return (ITR).",
        icon: <Landmark className="w-12 h-12 text-brand-dark mb-6" />
    }
];

const Documents = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-12 md:mb-16 gap-6 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-2xl">
                        Essential Documents for <br className="hidden md:block" /> Account Verification
                    </h2>
                    <button className="bg-brand-dark hover:bg-gray-800 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-colors shadow-lg shadow-gray-900/20 whitespace-nowrap mt-2 md:mt-0 w-full sm:w-auto">
                        Start Investing
                    </button>
                </div>

                {/* Documents Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-gray-100 pt-12 md:border-t-0 md:pt-0">
                    {documents.map((doc, index) => (
                        <div
                            key={doc.id}
                            className={`flex flex-col items-start ${index !== documents.length - 1 ? 'md:border-r md:border-gray-200 md:pr-10' : 'md:pl-2'
                                }`}
                        >
                            {/* Icon Container with hover effect */}
                            <div className="transform transition-transform duration-300 hover:scale-110">
                                {doc.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {doc.title}
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                {doc.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Documents;
