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
At DBfintrix, we are committed to making insurance simple, reliable, and accessible for our customers. With a senior management team having more than 20 years of experience in the insurance industry, we bring extensive knowledge, expertise, and a strong understanding of customer needs.              </p>

              <p>
Over the years, we have built a reputation as a trusted insurance partner by providing professional guidance and customized insurance solutions for individuals, families, and businesses. Our focus is to help customers make informed insurance decisions by offering transparent advice, personalized support, and service excellence.              </p>

              <p>
We understand that every customer has different requirements, whether it is protecting life, health, home, vehicles, or business assets. Our experienced team works closely with customers to provide suitable insurance solutions that align with their goals and provide confidence for the future.              </p>

              <p>
                At INSUREHUB INSURANCE BROKING PRIVATE LIMITED, we believe that trust, integrity, and long-term relationships are the foundation of our services. We are dedicated to delivering a smooth and hassle-free insurance experience while ensuring that our customers receive the right guidance and continuous support whenever they need it.
              </p>
               <p>
               For us, every customer is more than just a policyholder — they are a valued part of our journey. We strive to create lasting relationships by combining industry expertise, personalized service, and a commitment to excellence.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
