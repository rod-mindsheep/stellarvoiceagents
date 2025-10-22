'use client';
import React, { useEffect } from 'react';

const LeadCaptureBanner = () => {
  // 1. Dynamically load the Calendly widget script and CSS on component mount.
    useEffect(() => {
        // Load Calendly CSS
        const link = document.createElement('link');
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Load Calendly JS
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        // Cleanup function to remove the added elements when the component unmounts
        return () => {
            document.head.removeChild(link);
            document.body.removeChild(script);
        };
    }, []);

    // 2. Function to open the Calendly pop-up
    const handleOpenModal = () => {
        // Check if the Calendly global object is available
        if (window.Calendly) {
            // Use the official initPopupWidget method to show the scheduling window
            window.Calendly.initPopupWidget({ url: 'https://calendly.com/garysarco1' });
        } else {
            console.error("Calendly script not yet loaded. Opening direct link as fallback.");
            // Fallback: open the direct link in a new tab if the script failed to load
            window.open('https://calendly.com/garysarco1', '_blank');
        }
    };

  return (
    // Outer container for the whole section
    <div className="relative md:max-w-[80vw] min-w-[80vw] w-[90vw] md:w-[80vw] bg-transparent">      
      <div className="absolute md:bottom-[-230px] md:right-[-10px] pointer-events-none">
        {/* Using a large, low-opacity image that spreads across the middle 
          to mimic the subtle waves in the original design.
          Set opacity-50 for visibility (adjust as needed for a truly transparent look).
        */}
        <img
          src="/audio-background.png"
          alt="Subtle wave pattern background"
          className="w-[481px] h-[276px] md:w-[1055px] md:h-[576px] object-cover opacity-50 z-[-1]" 
        />
      </div>
      {/* Content Container to center and limit width */}
      <div className="relative z-10 flex flex-col items-center justify-between px-4 mx-auto lg:flex-row">
        
        {/* Left Side: Text and Button */}
        <div className="w-[330px] md:w-1/2 mt-[130px] md:mt-0 mb-10 lg:mb-0 text-center md:text-left">
          <h1 className="text-[40px] h-[81px] md:h-fit md:text-[75px] font-extrabold text-white md:text-black uppercase leading-[100%] pb-4 opacity-90 bg-[#25005D] md:bg-transparent">
            NEVER LOSE ANOTHER LEAD.
          </h1>
          <p className="text-[20px] mx-auto md:mx-0 mt-[30px] md:mt-0 md:text-[25px] text-white md:text-black max-w-lg mb-8 leading-[120%] normal-case w-[294px] md:w-[590px]">
            AI voice agents that engage, qualify, and book appointments 24/7 — for Real Estate, Health, and Finance.
          </p>
          <button 
            onClick={handleOpenModal}
            className="bg-[#F3F3F3] text-[#25005D] cursor-pointer uppercase text-[20px] md:text-[25px] font-bold py-[8px] px-[15px] md:py-[15px] md:px-[35px] rounded-[5px] md:rounded-[10px] transition duration-300">
            Book an AI demo
          </button>
        </div>
        
        {/* Right Side: Image/Visual */}
        <div className="justify-center hidden md:flex lg:w-1/2">
          {/* Placeholder for the image. In a real application, you'd import 
            the image and use the <img> tag. The parent div gives the image 
            its purple background on the right.
          */}
          <div className="overflow-hidden rounded-lg">
            {/* Replace 'path/to/your/image.png' with your actual image source */}
            <img 
              src="/hero-image.png" 
              alt="Professional man smiling, wearing glasses, holding a laptop." 
              className="w-[549px] h-[611px] hidden md:flex object-cover"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LeadCaptureBanner;
