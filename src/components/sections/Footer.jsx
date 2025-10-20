'use client';
import React from 'react';
import { MagneticButton } from '@/components/ui/magnetic-button';

const Footer = () => {
  return (
    <footer
      className="footer-section bg-gradient-to-b from-black via-[#080818] to-[#0a0030] text-white py-20 px-1 md:px-6 min-w-screen"
    >
      {/* Main container */}
      <div className="flex flex-col items-center justify-between gap-12 pb-12 mx-auto border-b max-w-7xl md:flex-row border-gray-700/50">
        {/* Left: Contact */}
        <div className="flex flex-col items-center justify-center w-full text-center md:items-start md:text-left md:w-1/2">
          <h3 className="text-[20px] md:text-[40px] font-semibold mb-4 text-white max-w-72">
            Do you have any questions?
          </h3>
          <p className="mb-6 text-white text-[13px] md:text-[20px]">
            Feel free to send us your questions.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center w-full max-w-md gap-3"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="text-[13px] md:text-[20px] h-[46px] md:[43px] flex-grow px-4 py-3 text-gray-200 placeholder-gray-500 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <MagneticButton
              type="submit"
              className="flex items-center justify-items-center h-[46px] md:h-[43px] text-[20px] bg-gradient-to-r from-[#1A00D7] to-[#D700F3] transition-all text-white font-semibold px-5 py-3 rounded-sm whitespace-nowrap"
            >
              TALK WITH US
            </MagneticButton>
          </form>
        </div>

        {/* Right: Logo */}
        <div className="flex flex-col items-center justify-center w-full text-center md:items-end md:text-right md:w-1/2">
          <div className="flex items-center justify-center gap-6 mb-2 md:justify-end">
            <img
              src="/logo.png"
              alt="Mindsheep Labs Logo"
              className="object-contain w-[35px] h-[35px] md:w-[60px] md:h-[60px]"
            />
            <span className="text-white font-extrabold text-[30px] md:text-[50px] tracking-wide">
              MINDSHEEPLABS
            </span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto text-gray-500 text-[13px] md:text-[12px] pt-6 text-center md:text-right">
        © 2025 — Copyright
      </div>
    </footer>
  );
};

export default Footer;
