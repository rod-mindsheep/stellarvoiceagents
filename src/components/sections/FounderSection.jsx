import React from "react";
import { MagneticButton } from '@/components/ui/magnetic-button';

const FounderSection = () => {
  return (
    <section className="relative px-6 py-24 overflow-hidden text-white bg-black founder-section min-w-screen">
      {/* Gradient glow background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-900/40 via-black to-transparent"></div>

      <div className="relative z-10 flex flex-col items-stretch max-w-6xl gap-12 mx-auto md:flex-row">
        {/* Image Section */}
        <div className="relative flex w-full md:w-1/2">
          <div className="animated-border-container">
            <img
              src={"/founder.jpg"}
              alt="Founder"
              className="object-cover w-full h-full shadow-lg animated-border-card rounded-xl"
            />
          </div>
          <div className="absolute bottom-3 left-3 bg-purple-700 text-white text-[20px] font-black px-3 py-1 rounded-sm z-20">
            DAVID TAYLOR
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center md:w-1/2">
          <h2 className="text-[25px] md:text-[50px] font-extrabold mb-6">
            MEET THE FOUNDER
          </h2>

          <p className="text-white font-normal mb-4 text-[13px] md:text-[20px] leading-relaxed">
            David Taylor has led at the intersection of marketing, technology, and operations
            for nearly two decades. He managed enterprise-scale systems at TPG—Australia’s
            second-largest ISP—before founding his own digital marketing agency in 2016.
            Since then, he’s run campaigns across web, social, Google Ads, and B2B while
            mentoring other agencies on strategy and systems.
          </p>

          <p className="text-white font-normal mb-8 text-[13px] md:text-[20px] leading-relaxed">
            In 2024, David expanded into AI-powered business automation, helping agencies and
            in-house teams integrate AI into both creative services and operations. His blend
            of enterprise leadership and hands-on marketing expertise makes him the go-to
            guide for agencies ready to evolve.
          </p>

          <MagneticButton className="w-[212px] uppercase bg-gradient-to-r from-[#1207D9] to-[#237FFE] cursor-pointer transition-all duration-300 px-6 py-3 rounded-sm font-semibold text-white">
            Join the Lab
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
