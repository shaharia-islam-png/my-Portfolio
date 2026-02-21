import { useState } from "react";
import menu from "../asset/menus.png";
import close from "../asset/close.png";


function Navigation() {
    return (
        <ul className="flex flex-col sm:flex-row gap-6 items-center">
            <li className="nav-li">
                <a className="nav-link  hover:text-gray-400" href="#home">Home</a>
            </li>
            <li className="nav-li">
                <a className="nav-link hover:text-gray-400" href="#about">About</a>
            </li>
            <li className="nav-li">
                <a className="nav-link hover:text-gray-400" href="#work">Work</a>
            </li>
            <li className="nav-li">
                <a className="nav-link hover:text-gray-400" href="#contact">Contact</a>
            </li>
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="fixed top-0 left-0 w-full z-50 text-lg text-neutral-100 backdrop-blur-md">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-5">
                    <a href="#home" className="text-2xl font-bold transition-colors text-neutral-400 hover:text-white">
                        Shaharia Islam
                    </a>

                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
                    >
                        <img src={isOpen ? close : menu} alt="toggle menu" className="w-6 h-6" />
                    </button>

                    <nav className="hidden sm:flex"> 
                        <Navigation />
                    </nav>
                </div>
            </div>
            
            <div className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden  ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <nav className="pb-5">
                    <Navigation />
                </nav>
            </div>
        </div>
    );
};

export default Navbar;