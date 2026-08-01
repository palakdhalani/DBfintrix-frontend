import React from 'react';
import Navbar from '../../Comman components/Navbar';
import Footer from '../../Comman components/Footer';
import Hero from '../homepage/Hero';
import PickYourInvestment from '../homepage/PickYourInvestment';
import InvestmentOptions from './InvestmentOptions';
import slide1 from '../../assets/1 slide.png';

const serviceCardsData = [
  {
    icon: "📈",
    title: "Portfolio Management",
    description: "Comprehensive portfolio management to maximize your returns while minimizing risk.",
    linkText: "Learn More",
    link: "#"
  },
  {
    icon: "💡",
    title: "Financial Advisory",
    description: "Expert advice tailored to your unique financial situation and long-term goals.",
    linkText: "Learn More",
    link: "#",
    isOffset: true,
    iconColor: "text-brand-green"
  },
  {
    icon: "🏦",
    title: "Retirement Planning",
    description: "Secure your future with our specialized retirement planning services.",
    linkText: "Learn More",
    link: "#"
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow">
        <Hero
          type="lead"
          title={
            <>
              Enjoy 1 month of <br />
              FREE trading
            </>
          }
          subtitle="Stocks, F&O, Intraday, all at ₹0 brokerage"
          noBgImage={true}
          sideImage={slide1}
          cardsData={serviceCardsData}
          leadProps={{
            breadcrumb: "Home / Open Demat Account",
            subHeading: "OPEN DEMAT ACCOUNT ONLINE",
            terms: "By continuing, I accept DB Fintrix's <a href='#' class='text-brand-dark underline'>T&C and Privacy policy</a> and <a href='#' class='text-brand-dark underline'>offer T&C</a>",
            inputPlaceholder: "Enter your mobile number",
            buttonText: "Open Demat Account",
            image: slide1
          }}
        />
        {/* <InvestmentOptions /> */}
        {/* <PickYourInvestment /> */}
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
