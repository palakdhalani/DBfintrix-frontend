import React from 'react';
import devendrasinhImg from '../../assets/devendrasinh_gohil.png';

const AboutCompany = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Column: Portrait & Title (Clean - No card, no border, no bg gradient) */}
          <div className="lg:w-5/12 w-full flex flex-col items-center justify-center reveal-left">
            <div className="relative flex flex-col items-center">
              
              {/* Clean Image without box/border/gradient */}
              <div className="relative w-64 sm:w-72 md:w-80 flex items-end justify-center">
                <img 
                  src={devendrasinhImg} 
                  alt="Mr. Devendrasinh B. Gohil - Director & Principal Officer" 
                  className="w-full h-auto object-contain select-none pointer-events-none"
                />
              </div>

              {/* Name & Title right below the photo */}
              <div className="text-center mt-3">
                <h3 className="text-xl sm:text-2xl font-black tracking-wider text-brand-dark uppercase">
                  MR. DEVENDRASINH B. GOHIL
                </h3>
                <p className="text-xs sm:text-sm font-extrabold tracking-widest text-brand-dark/90 uppercase mt-0.5">
                  DIRECTOR & PRINCIPAL OFFICER
                </p>
              </div>

            </div>
          </div>

          {/* Center decorative circular indicator from screenshot */}
          <div className="hidden lg:flex items-center justify-center flex-shrink-0 reveal delay-150">
            <div className="w-5 h-5 rounded-full border-2 border-sky-400 flex items-center justify-center bg-white">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            </div>
          </div>

          {/* Right Column: About Company Content verbatim from screenshot */}
          <div className="lg:w-6/12 w-full flex flex-col items-start reveal-right delay-100">
            
            {/* Tag matching screenshot: ››› ABOUT COMPANY ‹‹‹ */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-sky-500 font-bold tracking-widest text-base">›››</span>
              <span className="text-brand-dark font-black tracking-wider text-base sm:text-lg uppercase">
                ABOUT COMPANY
              </span>
              <span className="text-sky-500 font-bold tracking-widest text-base">‹‹‹</span>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-gray-600 text-sm sm:text-[15px] leading-relaxed text-justify font-normal">
              <h4 className="text-lg sm:text-xl font-extrabold text-brand-dark leading-snug">
                Building Financial Confidence Through Experience, Integrity & Service
              </h4>

              <p>
                <strong className="text-brand-dark font-bold">Mr. Devendrasinh B. Gohil</strong> is a dynamic and visionary leader serving as Director of Dealing Beneficial Fintrix Pvt. Ltd., a company focused on providing stock market and financial services. He holds a Bachelor’s degree in Law and a Master’s degree in Social Work from Saurashtra University, Gujarat, India.
              </p>

              <p>
                With extensive experience in the corporate sector, Mr. Gohil brings strong leadership, strategic thinking, and management expertise to the organization. He plays an important role in guiding the company’s business strategy, overseeing operational activities, developing customer-focused service policies, and promoting sustainable business growth.
              </p>

              <p>
                His vision is to make stock market services more accessible by supporting clients with services such as demat account assistance, equity and derivatives trading, mutual fund services, IPO-related services, market research, and investment guidance, subject to the company’s applicable registrations and authorizations.
              </p>

              <p>
                Mr. Gohil believes in building long-term relationships through transparency, customer satisfaction, professional service, and continuous improvement. His commitment to empowering clients and employees through knowledge, guidance, and effective management helps drive the company toward its mission of delivering reliable and customer-oriented financial services.
              </p>

              <p>
                As a customer-focused leader, he values client feedback and encourages a culture of trust, accountability, and professional excellence throughout the organization.
              </p>

              <div className="p-4 rounded-xl bg-emerald-50/80 border-l-4 border-brand-green mt-2">
                <span className="text-brand-green font-bold uppercase tracking-wider text-xs block mb-1">
                  His Vision
                </span>
                <p className="text-sm font-semibold text-brand-dark italic">
                  "To empower investors with knowledge, quality service, and a customer-first approach."
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
