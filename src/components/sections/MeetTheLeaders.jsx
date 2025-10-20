import React from "react";

const leaders = [
  {
    name: "GARY SARCO",
    title: "CEO & Visionary",
    image: "/garysarco.jpg", // Replace with your actual image path
    description:
      "Gary leads with a mission to transform how agents connect with clients. His experience in real estate operations and customer engagement drives Stellar’s commitment to make AI practical for everyday agents.",
  },
  {
    name: "DAVID TAYLOR",
    title: "Co-Founder & Technologist",
    image: "/davidtaylor.jpg", // Replace with your actual image path
    description:
      "David specializes in AI automation and digital systems that help real estate professionals respond faster and close more. He ensures our agents are advanced, reliable, and simple to deploy.",
  },
];

const MeetTheLeaders = () => {
  return (
    <section className="w-full py-16 px-4 md:px-0 bg-gradient-to-b from-white to-[#F5F2FF]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[40px] md:text-[65px] font-extrabold text-[#25005D] mb-12 uppercase w-[313px] md:w-auto mx-auto">
          MEET THE LEADERS
        </h2>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-50">
          {leaders.map((leader) => (
            <div key={leader.name} className="flex flex-col items-center md:items-start text-center md:text-left gap-0">
              {/* Image */}
              <img
                src={leader.image}
                alt={leader.name}
                className="w-[330px] h-[303px] md:w-[478px] md:h-[442px] object-cover mb-2 shadow-[3px_4px_10.2px_3px_#00000040]"
              />

              {/* Name and Title */}
              <h3 className="text-[40px] md:text-[50px] font-extrabold text-[#25005D] uppercase my-0">
                {leader.name}
              </h3>
              <p className="text-[#473D92] h-[30px] text-[25px] mt-0 font-normal md:font-semibold mb-4 normal-case">
                {leader.title}
              </p>

              {/* Description */}
              <p className="text-[#1A1A1A] text-[20px] md:text-[25px] leading-relaxed normal-case w-[330px] md:w-auto">
                {leader.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheLeaders;
