import React from 'react';
import jaysinghImg from '../../assets/jaysingh_rathod.png';

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
                  src={jaysinghImg} 
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

            {/* Paragraphs verbatim from user screenshot */}
            <div className="space-y-5 text-gray-500 text-sm sm:text-[15px] leading-relaxed text-justify font-normal">
              <p>
Building Financial Confidence Through Experience, Integrity & Service
              <p>
DEALING BENIFICIAL FINTRIX PVT. LTD. is a professionally managed financial services company focused on providing reliable and convenient investment-related solutions to individuals and investors.
              <p>
              <p>
With more than 20 years of industry experience, the company has developed a strong foundation built on professionalism, integrity, transparency, and client-centric service. Under the leadership of Mr. Devendrasinh B. Gohil, we are committed to delivering dependable financial services while maintaining a strong focus on client needs and long-term relationships.
              <p>
We offer a comprehensive range of services to support our clients across different areas of the investment ecosystem:</br>
Demat Account Services – Assistance with opening and maintaining Demat accounts for seamless access to the securities market.IPO Services – Support for investors seeking to participate in Initial Public Offerings.
Mutual Fund Services – Assistance with mutual fund investment solutions aligned with individual financial objectives and preferences.Bond Services – Services and assistance for investors exploring opportunities in the bond market.
              <p>

We believe that financial services should be built on trust, transparency, knowledge, and responsible service. Our approach is centered on understanding our clients' requirements and providing clear, professional assistance to help them make informed investment decisions.
With decades of experience, we continue to evolve with the changing financial landscape while maintaining the values that have shaped our business from the beginning.
              <p>
At DEALING BENIFICIAL FINTRIX PVT. LTD., our commitment is to provide professional service, transparent communication, and a dependable client experience. We aim to build lasting relationships by putting service quality and client trust at the heart of everything we do.              </p>
               <p>
20+ Years of Experience | Professional Service | Client-Centric Approach | Long-Term Relationships              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
