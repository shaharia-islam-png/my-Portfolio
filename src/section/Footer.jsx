// components/Footer.jsx

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-neutral-700">
      
    
      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-neutral-700 to-transparent"></div>
      
      
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-6 sm:flex-row">
      
        <div className="flex items-center gap-2 text-sm text-neutral-400">
          <a href="#" className="transition-colors duration-200 hover:text-white">
            Terms & Conditions
          </a>
          <span className="text-neutral-600">|</span>
          <a href="#" className="transition-colors duration-200 hover:text-white">
            Privacy Policy
          </a>
        </div>

        <p className="text-sm text-neutral-400">
          © {currentYear} Shaharia Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;