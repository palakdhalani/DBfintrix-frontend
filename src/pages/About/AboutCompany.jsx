import React from 'react';
import devendrasinhImg from '../../assets/devendrasinh_gohil.png';
import bhargavibaImg from '../../assets/bhargaviba_gohil.png';

const AboutCompany = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 space-y-16 md:space-y-24">
        
        {/* Main Section Header: Big & Centered */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="text-sky-500 font-bold tracking-widest text-base">›››</span>
            <span className="text-sky-600 font-extrabold tracking-widest text-xs uppercase">
              Leadership & Vision
            </span>
            <span className="text-sky-500 font-bold tracking-widest text-base">‹‹‹</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark tracking-tight uppercase">
            ABOUT COMPANY
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-sky-500 via-brand-green to-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Profile 1: Mr. Devendrasinh B. Gohil */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Column: Portrait & Title */}
          <div className="lg:w-5/12 w-full flex flex-col items-center justify-center reveal-left">
            <div className="relative flex flex-col items-center">
              
              <div className="relative w-64 sm:w-72 md:w-80 flex items-end justify-center">
                <img 
                  src={devendrasinhImg} 
                  alt="Mr. Devendrasinh B. Gohil - Director & Principal Officer" 
                  className="w-full h-auto object-contain select-none pointer-events-none"
                />
              </div>

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

          {/* Center decorative circular indicator */}
          <div className="hidden lg:flex items-center justify-center flex-shrink-0 reveal delay-150">
            <div className="w-5 h-5 rounded-full border-2 border-sky-400 flex items-center justify-center bg-white">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:w-6/12 w-full flex flex-col items-start reveal-right delay-100">
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

        {/* Subtle Section Divider */}
        <div className="relative flex items-center justify-center">
          <div className="w-full border-t border-gray-100"></div>
          <div className="absolute px-4 bg-white text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Board of Directors</span>
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
          </div>
        </div>

        {/* Profile 2: Mrs. Bhargaviba Gohil */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Column: Portrait & Title */}
          <div className="lg:w-5/12 w-full flex flex-col items-center justify-center reveal-left">
            <div className="relative flex flex-col items-center">
              
              <div className="relative w-64 sm:w-72 md:w-80 flex items-end justify-center">
                <img 
                  src={bhargavibaImg} 
                  alt="Mrs. Bhargaviba Gohil - Director" 
                  className="w-full h-auto object-contain select-none pointer-events-none"
                />
              </div>

              <div className="text-center mt-3">
                <h3 className="text-xl sm:text-2xl font-black tracking-wider text-brand-dark uppercase">
                  MRS. BHARGAVIBA GOHIL
                </h3>
                <p className="text-xs sm:text-sm font-extrabold tracking-widest text-brand-dark/90 uppercase mt-0.5">
                  DIRECTOR
                </p>
              </div>

            </div>
          </div>

          {/* Center decorative circular indicator */}
          <div className="hidden lg:flex items-center justify-center flex-shrink-0 reveal delay-150">
            <div className="w-5 h-5 rounded-full border-2 border-emerald-400 flex items-center justify-center bg-white">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:w-6/12 w-full flex flex-col items-start reveal-right delay-100">
            <div className="space-y-4 text-gray-600 text-sm sm:text-[15px] leading-relaxed text-justify font-normal">
              <h4 className="text-lg sm:text-xl font-extrabold text-brand-dark leading-snug">
                Driving Strategic Governance, Human Resources & Investor Outreach
              </h4>

              <p>
                <strong className="text-brand-dark font-bold">Mrs. Bhargaviba Gohil</strong> serves as Director at Dealing Beneficial Fintrix Pvt. Ltd., playing a pivotal role in organizational development, human resource management, and strategic corporate governance. Born and raised in Vadodara, Gujarat, she completed her science education at Fertilizer Nagar (GSFC) and earned her postgraduate degree from the prestigious Maharaja Sayajirao University of Baroda (M.S. University). She has further enriched her academic credentials with a Doctorate in Naturopathy & Yoga (N.D.D.Y., New Delhi) and a D.Y.Ed. from Bhavnagar, bringing multifaceted leadership and disciplined perspective to the boardroom.
              </p>

              <p>
                Leading the Human Resources and Operational Development departments, Mrs. Gohil is instrumental in talent acquisition, workforce training, and cultivating a high-performance, compliant corporate culture. She oversees essential client engagement workflows, ensuring seamless Demat account support, responsive relationship management, and high-standard customer service policies across stock market operations.
              </p>

              <p>
                With a forward-thinking approach, she spearheads the firm’s digital presence, investor awareness programs, and brand enhancement initiatives. Her strategic oversight supports accessible capital market participation—including equity delivery, derivatives trading, mutual funds, and IPO services—while driving transparent client communication and ethical business expansion.
              </p>

              <p>
                Beyond her executive leadership, Mrs. Gohil is deeply dedicated to social welfare and community empowerment as Chairperson of the Royal Charitable Trust, Rajkot. Her dedication to professional excellence, institutional integrity, and societal enrichment continues to accelerate the long-term success of Dealing Beneficial Fintrix Pvt. Ltd.
              </p>

              <div className="p-4 rounded-xl bg-emerald-50/80 border-l-4 border-brand-green mt-2">
                <span className="text-brand-green font-bold uppercase tracking-wider text-xs block mb-1">
                  Her Vision
                </span>
                <p className="text-sm font-semibold text-brand-dark italic">
                  "To empower investors through transparent stock market solutions, continuous education, and exemplary service quality."
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
