import React from "react";
import HeroText from "../components/HeroText.jsx";
import ParralaxBg from "../components/ParralaxBg.jsx";
import My from "../asset/my.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden section-animate min-h-screen"
    >
      <ParralaxBg />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <HeroText />

        
        <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-violet-500/50 shadow-[0_0_40px_rgba(160,139,250,0.7)] overflow-hidden shrink-0
        transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/50">
          <img
            src={My}
            alt="My Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;  