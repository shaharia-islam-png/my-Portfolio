import { useEffect } from "react";
import Navbar from "./section/Navbar.jsx";
import Home from "./section/Hero.jsx";
import About from "./section/About.jsx";
import Project from "./section/Project.jsx";
import Contact from "./section/Contact.jsx";
import Footer from "./section/Footer.jsx";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;