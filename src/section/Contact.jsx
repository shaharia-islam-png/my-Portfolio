// pages/Contact.jsx

import React from 'react';
import ContactForm from '../components/ContactForm';
import { Globe } from "../components/globe.jsx";
import SocialIcons from '../components/SocialIcons';
import { Particles } from "../components/Particles.jsx";

const Contact = () => {
    return (
        // The main container for the page
        <div className="relative min-h-screen flex items-center justify-center px-4 py-16 w-full overflow-hidden bg-neutral-900">
            
            {/* Background Particles */}
            <Particles 
                className="absolute inset-0 z-0" 
                quantity={100}
                ease={50}
                size={0.5}
                staticity={50}
                color="#ffffff"
            />
            
            {/* Main Content Wrapper */}
            <div className="relative z-10 w-full max-w-7xl mx-auto">
                
                {/* Flex container for Form and Globe */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
                    
                    {/* Contact Form - Takes full width on mobile, half on desktop */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <ContactForm />
                    </div>
                    {/* Globe - Visible on all screens, positioned first on mobile */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <Globe />
                    </div>


                </div>
                
                {/* Social Icons - Positioned below the main content */}
                <div className="mt-16 flex justify-center w-full">
                    <SocialIcons />
                </div>

            </div>
        </div>
    );
};

export default Contact;