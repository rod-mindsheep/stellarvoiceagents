import React from "react";

const AiMarketingSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 -mt-20 overflow-hidden text-white bg-black min-w-screen">
      {/* Top fade for blend */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none h-60 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* ✅ Central spotlight (slightly brighter center) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,rgba(0,0,0,0.85)_30%,rgba(0,0,0,1)_40%)]"></div>

      {/* ✅ Centralized purple grid with top & bottom fade */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(140,0,255,0.8)_3px,transparent_1px),linear-gradient(to_bottom,rgba(140,0,255,0.8)_3px,transparent_1px)] bg-[size:120px_120px] opacity-50"></div>
        
        {/* Radial fade mask (to hide outer sides) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,1)_100%)]"></div>

        {/* ✨ Vertical fade mask (to fade top & bottom edges) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,1)_0%,transparent_30%,transparent_70%,rgba(0,0,0,1)_100%)]"></div>
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center">
        <h1 className="text-[25px] md:text-[60px] font-extrabold leading-tight mb-8">
          WHY MOST <span>“AI MARKETING”</span> FEELS
          <br /> LIKE LIPSTICK ON A ROBOT.
        </h1>

        <p className="mb-6 text-[15px] md:text-[25px]">
          Everyone’s bragging about their AI stack. But let’s be honest:
        </p>

        <p className="mb-6 text-[15px] md:text-[25px]">
          Stock-looking “AI art” that makes your brand look like everyone else’s.
          <br />
          Bots writing copy that sounds like it was… written by a bot.
          <br />
          A graveyard of half-baked automation tools nobody actually uses.
        </p>

        <p className="mb-10 text-[15px] md:text-[25px]">
          Meanwhile, your team’s stuck waiting weeks for creative, drowning in
          proposal writing, and watching faster competitors eat your lunch.
        </p>

        <p className="text-lg font-bold text-white text-[15px] md:text-[25px]">
          The truth?{" "}
          <span>
            AI isn’t a shiny add-on. Done right, it’s the operating system of
            your agency.
          </span>
        </p>
      </div>
    </section>
  );
};

export default AiMarketingSection;
