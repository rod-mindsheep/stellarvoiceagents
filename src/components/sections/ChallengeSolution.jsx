import React from 'react';

const ChallengeSolutionSection = () => {
  return (
    <div className="flex justify-center items-center py-12 md:max-w-[90vw] lg:max-w-[80vw] md:min-w-[80vw] md:w-[90vw] lg:w-[80vw] w-[95vw]">
      {/* Outer container for the whole section, centered and with max width */}
      <div className="w-full px-4 mx-auto">
        {/* Main content box with dark purple background and rounded corners */}
        <div className="bg-[#25005D] rounded-[30px] md:rounded-[50px] p-6 md:p-10 shadow-xl flex flex-col md:flex-row items-center justify-items-center gap-8">
          
          {/* Left Side: The Challenge */}
          <div className="flex flex-col justify-center flex-1 pr-0 text-center text-white lg:pr-8 md:text-left h-[165px] md:h-[334px] w-[313px] md:w-[521px]">
            <h2 className="text-[30px] md:text-[50px] font-extrabold mb-6">
              THE CHALLENGE
            </h2>
            <p className="text-[20px] md:text-[25px] leading-relaxed opacity-80 normal-case">
              Leads go cold fast. In real estate, healthcare, and finance, most opportunities are lost simply because no one followed up within minutes.
            </p>
          </div>

          {/* Right Side: Our Solution (with its own distinct background) */}
          <div className="flex flex-col justify-center flex-1 bg-[#7868F8] rounded-2xl p-[25px] md:py-[51px] md:px-[50px]  shadow-lg text-center md:text-left w-[302.83px] md:w-[617px] h-[288px] md:h-[334px]">
            <h2 className="text-[30px] md:text-[50px] font-extrabold text-white mb-6">
              OUR SOLUTION
            </h2>
            <p className="text-[20px] md:text-[25px] leading-relaxed text-white opacity-80 normal-case">
              AI voice agents instantly respond, re-engage, and book appointments automatically. You get more connected conversations — without hiring or chasing.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChallengeSolutionSection;
