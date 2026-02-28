import codeImage from "../asset/code.jpg";
import Card from "../components/Card.jsx";
import html from "../asset/html.png";
import css from "../asset/css.png";
import js from "../asset/js.gif";
import react from "../asset/react.gif";
import c from "../asset/c.png";
import tailwind from "../asset/tailwind.png";
import vs from "../asset/vs.png";
import space from "../asset/bg-1.jpg";
import git from "../asset/git.png";
import microsoft from "../asset/microsoft.png";
import github from "../asset/github.png";
import audi from "../asset/arduino.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Button from "../components/Button.jsx";
import { Particles } from "../components/Particles.jsx";


const About = () => {
  return (
    <section id="about" className="section-animate max-w-7xl mx-auto mt-10 p-4 md:p-8 min-h-screen">
      <h2 className="text-2xl font-bold text-white mb-8">About Me</h2>
      <div className="grid grid-cols-1 gap-4 auto-rows-min md:grid-cols-6 md:auto-rows-[18rem]">
        {/* Card 1: Education & Skills */}
        <div className="relative overflow-y-auto md:overflow-hidden md:col-span-2 md:row-span-2 bg-blue-900 rounded-lg p-4 md:p-5 flex flex-col justify-start transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/50">
          <div className="z-10">
            <h4 className="text-white text-xl md:text-2xl font-bold">Education:</h4>
            <p className="text-gray-100 mt-2 text-sm md:text-base">
              Running Bachelor's in Computer Science and Engineering from
              Bangladesh Army International University of Science and Technology.
            </p>

            <h4 className="text-white text-xl md:text-2xl font-bold mt-4">Skills:</h4>
            <p className="text-gray-100 mt-2 text-sm md:text-base">
              HTML, CSS, Tailwind CSS JavaScript, React, C Language Basic, Git & GitHub.
            </p>

            <h4 className="text-white text-xl md:text-2xl font-bold mt-4">
              Experience & Achievement:
            </h4>
            <ul className="text-gray-100 mt-2 text-sm md:text-base space-y-1">
              <li>Worked in Bus Tracker Project and Electronics.</li>
              <li>1st Runner-up — Hackathon BAIUST CSE FEST 2025.</li>
              <li>Top 15 — Hackathon BAIUST CSE FALL FEST 2025.</li>
              <li>Software Engineer Intern — BAIUST Computer Club.</li>
            </ul>
          </div>
        </div>

        {/* Card 2: Tech Stack */}
        <div className="relative md:col-span-4 bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-500/50 p-4">
          {/* Mobile View: Simple Grid */}
          <div className="md:hidden grid grid-cols-4 gap-4">
            <img src={tailwind} alt="tailwind" className="w-12 h-12" />
            <img src={c} alt="c" className="w-12 h-12" />
            <img src={react} alt="react" className="w-12 h-12" />
            <img src={js} alt="js" className="w-12 h-12" />
            <img src={css} alt="css" className="w-12 h-12" />
            <img src={html} alt="html" className="w-12 h-12" />
            <img src={vs} alt="vs" className="w-12 h-12" />
            <img src={git} alt="git" className="w-12 h-12" />
          </div>

          {/* Desktop View: Absolute Positioning */}
          <div className="hidden md:block relative w-full h-full">
            <p className="absolute bottom-4 left-4 text-3xl lg:text-5xl text-gray-500">
              My TECH STACK.
            </p>
            <Card style={{ transform: "rotate(-75deg)", top: "60%", left: "80%" }} image={tailwind} />
            <Card style={{ transform: "rotate(-30deg)", top: "60%", left: "45%" }} image={c} />
            <Card style={{ transform: "rotate(90deg)", bottom: "30%", left: "10%" }} image={react} />
            <Card style={{ transform: "rotate(30deg)", top: "20%", left: "20%" }} image={js} />
            <Card style={{ transform: "rotate(-45deg)", top: "70%", left: "25%" }} image={css} />
            <Card style={{ transform: "rotate(30deg)", top: "70%", left: "70%" }} image={html} />
            <Card style={{ transform: "rotate(30deg)", top: "20%", left: "80%" }} image={vs} />
            <Card style={{ transform: "rotate(-400deg)", top: "20%", left: "50%" }} image={git} />
            <Card style={{ transform: "rotate(20deg)", top: "40%", left: "70%" }} image={github} />
            <Card style={{ transform: "rotate(20deg)", top: "50%", left: "20%" }} image={audi} />
            <Card style={{ transform: "rotate(-50deg)", top: "70%", left: "5%" }} image={microsoft} />
          </div>
        </div>

        {/* Card 3: Introduction */}
        <div className="relative overflow-hidden md:col-span-2 bg-black rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50">
          <img
            src={codeImage}
            alt="Code"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="relative z-10 text-left text-white p-4">
            <p className="font-bold text-lg md:text-xl">Hello, I'm Shaharia Islam</p>
            <p className="mt-2 text-xs md:text-sm">
              Over the last years, I developed my frontend dev skills through various projects and internships to deliver dynamic and responsive web applications.
            </p>
          </div>
        </div>

        {/* Card 4: Collaboration */}
        <div className="relative overflow-hidden md:col-span-2 bg-slate-800 rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-700/50 flex flex-col items-center justify-center p-4">
          <p className="text-white text-center font-bold text-lg md:text-2xl">Do you want to collaborate any project with me?</p>
          <Button />
        </div>

        {/* Card 5: Time Zone & Globe */}
        <div className="relative overflow-hidden md:col-span-4 bg-linear-to-r from-gray-800 to-slate-900 rounded-lg flex flex-col justify-start p-4 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-500/50">
           <Particles 
                          className="absolute inset-0 z-0" 
                          quantity={100}
                          ease={50}
                          size={0.5}
                          staticity={50}
                          color="#ffffff"
                      />
          <p className="text-xl md:text-2xl text-white font-bold relative z-10">Time Zone</p>
          <p className="text-white mt-2 relative z-10 text-sm md:text-base">
            I'm based in Mars, and open to remote <br /> work worldwide.
          </p>
       
          <div className="md:hidden flex items-center justify-center h-32 mt-4">
          <DotLottieReact
      src="https://lottie.host/3da54fff-704c-4f11-9181-fd6a7efa428e/OLWNyjNNSQ.lottie"
      loop
      autoplay
    />
          </div>
          {/* Desktop: Absolute Positioned Globe */}
          <div className="hidden md:block absolute left-[30%] top-[10%]">
           <DotLottieReact
      src="https://lottie.host/3da54fff-704c-4f11-9181-fd6a7efa428e/OLWNyjNNSQ.lottie"
      loop
      autoplay
    />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;