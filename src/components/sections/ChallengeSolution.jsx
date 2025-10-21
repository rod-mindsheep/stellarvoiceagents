import React from 'react';

const ChallengeSolutionSection = () => {
  return (
    <div className="flex justify-center items-center py-12 md:max-w-[80vw] md:min-w-[80vw] md:w-[80vw] w-[95vw]">
      {/* Outer container for the whole section, centered and with max width */}
      <div className="w-full mx-auto px-4">
        {/* Main content box with dark purple background and rounded corners */}
        <div className="bg-[#25005D] rounded-[30px] md:rounded-[50px] p-6 md:p-10 lg:p-16 shadow-xl flex flex-col lg:flex-row items-center justify-items-center gap-8">
          
          {/* Left Side: The Challenge */}
          <div className="flex-1 text-white pr-0 lg:pr-8 text-center md:text-left">
            <h2 className="text-[30px] md:text-[50px] font-extrabold mb-6">
              THE CHALLENGE
            </h2>
            <p className="text-[20px] md:text-[25px] leading-relaxed opacity-80 normal-case">
              Missed calls mean missed listings. Managing every buyer inquiry, showing request, and follow-up is time-consuming and costly.
            </p>
          </div>

          {/* Right Side: Our Solution (with its own distinct background) */}
          <div className="flex-1 bg-[#7868F8] rounded-2xl p-6 md:p-10 shadow-lg text-center md:text-left">
            <h2 className="text-[30px] md:text-[50px] font-extrabold text-white mb-6">
              OUR SOLUTION
            </h2>
            <p className="text-[20px] md:text-[25px] leading-relaxed text-white opacity-80 normal-case">
              Our AI voice agents sound natural and handle every conversation, inbound or outbound, from lead qualification to scheduling. Once you hear them, you'll see how they transform real estate communication.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};


export default ChallengeSolutionSection;
