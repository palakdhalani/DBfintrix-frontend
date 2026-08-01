import React, { useState } from 'react';

const faqData = [
  {
    question: "What is DB Fintrix?",
    answer: "DB Fintrix is a comprehensive financial platform offering seamless trading, demat accounts, mutual fund investments, and expert financial advisory to help you grow your wealth."
  },
  {
    question: "How do I open a Demat account?",
    answer: "Opening a Demat account is completely paperless and takes less than 5 minutes. Simply click on the 'Open Demat Account' button, verify your KYC, and you are ready to trade."
  },
  {
    question: "Are there any hidden charges?",
    answer: "No, we believe in 100% transparency. Our pricing structure is simple and straightforward, with absolutely no hidden fees or surprise charges."
  },
  {
    question: "Is it safe to invest through DB Fintrix?",
    answer: "Yes, your security is our top priority. We use bank-level encryption for all transactions and are fully compliant with SEBI and other regulatory guidelines."
  },
  {
    question: "Do you offer mutual fund investments?",
    answer: "Yes, you can invest in a wide variety of direct mutual funds and start SIPs instantly with zero commission fees on our platform."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4 uppercase">
            Frequently Asked <span className="text-brand-green">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Got questions? We have got answers. Here are some of the most common questions our users ask.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen ? 'border-brand-green shadow-md bg-white' : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`text-lg font-bold ${isOpen ? 'text-brand-green' : 'text-brand-dark'}`}>
                    {faq.question}
                  </span>
                  <span 
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-xl transition-transform duration-300 ${
                      isOpen ? 'bg-brand-green text-white rotate-180' : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;
