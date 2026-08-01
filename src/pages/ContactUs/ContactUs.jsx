import React from 'react';
import Navbar from '../../Comman components/Navbar';
import Footer from '../../Comman components/Footer';
import Contacthero from './Contacthero';
import Form from './Form';
import Inquiry from './Inquiry';

const ContactUs = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar theme="dark" />
            <div className="flex-grow">
                <Contacthero />
                <Form />
                <Inquiry />
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;
