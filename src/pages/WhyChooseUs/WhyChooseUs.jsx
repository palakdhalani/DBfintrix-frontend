import React, { useState, useEffect } from 'react';
import Navbar from '../../Comman components/Navbar';
import Footer from '../../Comman components/Footer';
import WhyChooseUsHero from './WhyChooseUsHero';
import SidebarNav from './SidebarNav';

// Sections
import TrustedPartners from './sections/TrustedPartners';
import FastAccountOpening from './sections/FastAccountOpening';
import DedicatedRM from './sections/DedicatedRM';
import HighestRevenue from './sections/HighestRevenue';
import ResearchAdvisory from './sections/ResearchAdvisory';
import CompleteTraining from './sections/CompleteTraining';
import MarketingSupport from './sections/MarketingSupport';
import BackOfficeSupport from './sections/BackOfficeSupport';

const sectionsData = [
    { id: 'trusted-partners', title: 'Trusted Broking Partners' },
    { id: 'fast-account-opening', title: 'Fast Digital Account Opening' },
    { id: 'dedicated-rm', title: 'Dedicated Relationship Manager' },
    { id: 'highest-revenue', title: 'Highest Revenue Sharing' },
    { id: 'research-advisory', title: 'Research & Advisory' },
    { id: 'complete-training', title: 'Complete Training' },
    { id: 'marketing-support', title: 'Marketing Support' },
    { id: 'back-office-support', title: 'Back Office Support' },
];

const WhyChooseUs = () => {
    const [activeSection, setActiveSection] = useState(sectionsData[0].id);

    useEffect(() => {
        const handleScroll = () => {
            // Find which section is currently in view
            // Adding offset so it triggers when the section reaches the upper part of the screen
            const scrollPosition = window.scrollY + 300; 

            for (let i = sectionsData.length - 1; i >= 0; i--) {
                const section = document.getElementById(sectionsData[i].id);
                if (section) {
                    // Use getBoundingClientRect to get true absolute position regardless of parent styling
                    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                    if (sectionTop <= scrollPosition) {
                        setActiveSection(sectionsData[i].id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on mount to set initial state
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSectionClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
            // Manually calculate position minus navbar height (approx 120px)
            const y = section.getBoundingClientRect().top + window.scrollY - 120;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar theme="dark" />

            <div className="flex-grow">
                <WhyChooseUsHero />

                <div className="container mx-auto px-6 max-w-7xl pb-16 md:pb-24 relative z-20 mt-12 md:mt-16">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Sticky Sidebar Navigation (Left) */}
                        <aside className="lg:w-1/4">
                            <SidebarNav
                                sections={sectionsData}
                                activeSection={activeSection}
                                onSectionClick={handleSectionClick}
                            />
                        </aside>

                        {/* Content Area (Right) */}
                        <main className="lg:w-3/4">
                            <TrustedPartners id="trusted-partners" />
                            <FastAccountOpening id="fast-account-opening" />
                            <DedicatedRM id="dedicated-rm" />
                            <HighestRevenue id="highest-revenue" />
                            <ResearchAdvisory id="research-advisory" />
                            <CompleteTraining id="complete-training" />
                            <MarketingSupport id="marketing-support" />
                            <BackOfficeSupport id="back-office-support" />
                        </main>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default WhyChooseUs;
