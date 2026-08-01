import React from 'react';

const statsData = [
    {
        id: 1,
        value: "25",
        symbol: "+",
        description: "A legacy of expertise spanning 25+ years."
    },
    {
        id: 2,
        value: "150K",
        symbol: "+",
        description: "Where ideas flourish and projects thrive."
    },
    {
        id: 3,
        value: "98",
        symbol: "%",
        description: "Striving for customer satisfaction is top priority."
    },
    {
        id: 4,
        value: "$40M",
        symbol: "+",
        description: "This is our pure benefit to our clients."
    }
];

const Stats = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
                    {statsData.map((stat) => (
                        <div key={stat.id} className="flex flex-col items-center lg:items-start">
                            <h2 className="text-5xl lg:text-6xl font-extrabold text-[#0a1d42] mb-4">
                                {stat.value}<span className="text-[#0f9d27]">{stat.symbol}</span>
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
