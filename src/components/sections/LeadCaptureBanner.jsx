import React from 'react';

const LeadCaptureBanner = () => {
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
      <div className="relative z-10 mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Side: Text and Button */}
        <div className="w-full md:w-1/2 mt-[130px] md:mt-0 mb-10 lg:mb-0 text-center md:text-left">
          <h1 className="text-[40px] h-[81px] md:h-fit md:text-[75px] font-extrabold text-white md:text-black uppercase leading-[100%] pb-4 opacity-90 bg-[#25005D] md:bg-transparent">
            NEVER LOSE ANOTHER LEAD.
          </h1>
          <p className="text-[20px] mx-auto md:mx-0 mt-[30px] md:mt-0 md:text-[25px] text-white md:text-black max-w-lg mb-8 leading-[120%] normal-case w-[294px] md:w-[590px]">
            AI voice agents that engage, qualify, and book appointments 24/7 — for Real Estate, Health, and Finance.
          </p>
          <button className="bg-[#F3F3F3] text-[#25005D] uppercase text-[20px] md:text-[25px] font-bold py-[8px] px-[15px] md:py-[15px] md:px-[35px] rounded-[5px] md:rounded-[10px] transition duration-300">
            HEAR OUR AI DEMO
          </button>
        </div>
        
        {/* Right Side: Image/Visual */}
        <div className="hidden md:flex lg:w-1/2 justify-center">
          {/* Placeholder for the image. In a real application, you'd import 
            the image and use the <img> tag. The parent div gives the image 
            its purple background on the right.
          */}
          <div className="rounded-lg overflow-hidden">
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