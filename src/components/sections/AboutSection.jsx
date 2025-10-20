import React from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const AboutSection = () => {
  return (
    <section id="aboutmindsheeplabs" className="relative px-6 py-24 overflow-hidden text-white bg-black about-section min-w-screen">
      {/* background gradient bottom glow */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none h-1/3 bg-gradient-to-t from-blue-900/40 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-[25px] md:text-[40px] font-bold tracking-wider text-white uppercase mb-6">
          About Us
        </h2>

        {/* 🔥 animated border container */}
        <div className="animated-border-container">
          <div className="animated-border-card bg-gradient-to-b from-[#1a1027] to-[#0b0515] rounded-xl p-10 shadow-lg w-full border border-transparent">
            <h3 className="text-[20px] md:text-[50px] font-extrabold mb-6 leading-snug">
              We’re not an agency. We’re a mutation lab <br className="hidden md:block" /> for agencies.
            </h3>

            <p className="mb-6 leading-relaxed text-white text-[13px] md:text-[20px]">
              We’re explorers. Tinkerers. Sheep gone feral. We work with marketing teams and agencies
              that aren’t afraid to rip up the old playbook and write a new one—before everyone else
              catches on.
            </p>

            <p className="mb-6 leading-relaxed text-white text-[13px] md:text-[20px]">
              We don’t do “done-for-you” magic tricks. We partner with you to figure out:
            </p>

            <ul className="mb-6 space-y-2 text-white list-disc list-inside text-[13px] md:text-[20px] pl-[6px]">
              <li>What should be automated vs. what needs the human touch.</li>
              <li>Where AI adds ROI today—not five years from now.</li>
              <li>
                How to sell new AI-powered services to your clients without looking like a gimmick.
              </li>
            </ul>

            <p className="mb-8 leading-relaxed text-white text-[13px] md:text-[20px]">
              The only question: Do you want to be the first, or wait until it’s boring?
            </p>

            <MagneticButton className="px-6 py-3 font-semibold text-white text-[15px] md:text-[20px] uppercase transition-all duration-300 rounded-[5px] bg-gradient-to-r from-[#1207D9] to-[#237FFE] cursor-pointer">
              Book an Exploratory Call
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
