
import React from 'react';
import ContactForm from '../components/ContactForm';
import { Globe } from "../components/globe.jsx";
import SocialIcons from '../components/SocialIcons';
import { Particles } from "../components/Particles.jsx"; 

const Contact = () => {
    return (
        <section id='contact' className='section-animate min-h-screen'>
        <div className="relative  flex items-center justify-center min-h-screen px-4 py-16 w-full overflow-hidden">
            <Particles 
                className="absolute inset-0 z-0" 
                quantity={100}
                ease={50}
                size={0.5}
                staticity={50}
                color="#ffffff"
            />
            <div className="relative z-10 w-full max-w-7xl mx-auto">
    
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-60 items-center justify-center">
                    <div className="flex justify-center lg:justify-start ">
                        <ContactForm />
                    </div>

                   
                    <div className="flex justify-end mr-20 lg:translate-y-16">
                        <Globe />
                    </div>

                </div>
                 <div className="mt-16 flex justify-center w-full">
                    <SocialIcons />
                </div>

            </div>
        </div>
        </section>
    );
};

export default Contact;