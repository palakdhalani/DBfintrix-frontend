import React from 'react';
import Navbar from '../../Comman components/Navbar';
import Footer from '../../Comman components/Footer';
import AboutHero from './AboutHero';
import AboutCompany from './AboutCompany';
import VisionMission from './VisionMission';
import AboutStats from './AboutStats';
import OurExperts from './OurExperts';
import AboutCTA from './AboutCTA';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar theme="dark" />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <AboutHero />

        {/* About Company Section (Mr. Devendrasinh B. Gohil - Director & Principal Officer) */}
        <AboutCompany />

        {/* Milestone Stats Counter */}
        <AboutStats />

        {/* Mission, Vision & Core Values */}
        <VisionMission />

        {/* Our Experts Section (Bhargaviba Gohil, Renu Singh Rampratapsingh, Kinjal Parikh) */}
        <OurExperts />

        {/* Call To Action Banner */}
        <AboutCTA />
      </main>

      <Footer />
    </div>
  );
};

export default About;
