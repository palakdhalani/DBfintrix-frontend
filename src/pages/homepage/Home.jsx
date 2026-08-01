import React from 'react';
import Navbar from '../../Comman components/Navbar';
import Hero from './Hero';
import PickYourInvestment from './PickYourInvestment';
import Stats from './Stats';
import LearnToEarn from './LearnToEarn';
import Consultant from './consultant';
import Investing from './investing';
import Services from '../Services/services';

import Pricing from './Pricing';
import Faq from './Faq';
import Footer from '../../Comman components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Investing />
            <Pricing />
            <PickYourInvestment />
            {/* <Stats /> */}
            <LearnToEarn />
            {/* <Fourcards /> */}
            {/* <Consultant /> */}
            {/* <Services /> */}
            <Faq />
            <Footer />
        </div>
    );
};

export default Home;
