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

        {/* --- প্রোফাইল পিক এবং বাটনের জন্য নতুন কন্টেইনার --- */}
        <div className="
            flex flex-col items-center // ছবি এবং বাটনকে উপর থেকে নিচে সাজাবে এবং মাঝে রাখবে
            transform transition-all duration-300 ease-in-out 
            hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/50 // হোভার ইফেক্ট এখন পুরো জিনিসের উপর
        ">
          {/* ছবির ফ্রেম */}
          <div className="
            w-72 h-72 md:w-80 md:h-80 
            rounded-full border-4 border-violet-500/50 
            shadow-[0_0_40px_rgba(160,139,250,0.7)] 
            overflow-hidden shrink-0
          ">
            <img
              src={My}
              alt="My Profile"
              className="w-full h-full object-cover"
            />
          </div>

         
          <a
            href="/resume.pdf" 
            download="Shaharia-Resume.pdf" 
            className="
              mt-10 
              px-6 py-3 
              bg-violet-600 
              text-white font-semibold 
              rounded-full
              border-2 border-violet-600 
              hover:bg-transparent hover:text-violet-600 
              transition-all duration-300 
            "
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;