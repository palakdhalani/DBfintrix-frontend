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
                With our Senior Management team having more than 20 Years of experience at INSUREHUB INSURANCE BROKING PRIVATE LIMITED, we are driven by a single mission: to become the first choice of customers for all their Insurance needs by providing the commitment of best service and excellence. With years of experience in the insurance industry, we have built a reputation for being a trusted partner in safeguarding the things that matter most—your life, home, health, car, and many more insurance services.
              </p>

              <p>
                Our team of experts is dedicated to understand your unique needs, offering personalized insurance solutions that fit your lifestyle. Whether you're seeking coverage for your family, business, or personal assets, we provide tailored options that give you the confidence to face the future. We pride ourselves on transparency, integrity, and customer-centric service. From offering advice on the best coverage options to providing ongoing support, we're here every step of the way. Our mission is not just to protect your belongings but to build lasting relationships based on trust and reliability.
              </p>

              <p>
                Here for us you are more than just a client—you're part of our family. We focus on making insurance simple, accessible, and stress-free, so you can focus on what truly matters in life.
              </p>

              <p>
                Let us take care of the complexities, while you enjoy the peace of mind knowing you're in good hands.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
