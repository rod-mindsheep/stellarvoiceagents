import React from 'react';
import FeatureCard from '@/components/ui/FeatureCard.jsx';

// Data structure for the features
const features = [
  {
    iconUrls: {
      normal: "/whyusicons/Staff.png",   // Placeholder path for normal state
      hover: "/whyusicons/Staff-dark.png",     // Placeholder path for hover state
    },
    title: "INSTANT SPEED-TO-LEAD",
    description: {
        normal: "Calls new leads within seconds of form submission, engaging them while they’re still interested.",
        hover: "Up to <strong>3x more</strong> appointments booked from fresh leads.",
    },
  },
  {
    iconUrls: {
      normal: "/whyusicons/New Message.png",
      hover: "/whyusicons/New Message-dark.png",
    },
    title: "CONSISTENT FOLLOW-UP",
    description: {
        normal: "Never miss a lead again: your AI calls, texts, or re-tries automatically until contact is made.",
        hover: "Up to <strong>80% increase</strong> in connected conversations.",
    },
  },
  {
    iconUrls: {
      normal: "/whyusicons/Settings.png",
      hover: "/whyusicons/Settings-dark.png",
    },
    title: "SMART QUALIFICATION",
    description: {
        normal: "Each call asks 4-5 custom questions to identify serious buyers, patients, or clients.",
        hover: "Doubles qualified lead volume (<strong>+120 % avg.</strong>).",
    },
  },
  {
    iconUrls: {
      normal: "/whyusicons/Clock.png",
      hover: "/whyusicons/Clock-dark.png",
    },
    title: "24/7 MULTI-INDUSTRY COVERAGE",
    description: {
        normal: "Works around the clock for real estate, healthcare, and finance teams, even outside office hours.",
        hover: "Captures <strong>45% more</strong> off-hour leads.",
    },
  },
  {
    iconUrls: {
      normal: "/whyusicons/Audio Wave.png",
      hover: "/whyusicons/Audio Wave-dark.png",
    },
    title: "PERSONALIZED HUMAN VOICE",
    description: {
        normal: "Natural, multilingual voices that adapt tone and intent for every caller.",
        hover: "<strong>25% higher</strong> engagement and response rates.",
    },
  },
  {
    iconUrls: {
      normal: "/whyusicons/Bar Chart.png",
      hover: "/whyusicons/Bar Chart-dark.png",
    },
    title: "CONVERSION ANALYTICS",
    description: {
        normal: "Every call is recorded and analyzed to reveal what truly drives bookings.",
        hover: "<strong>67% lift</strong> in appointment rate after optimization.",
    },
  },
];


const WhyUsSection = () => {
  return (
    // Outer container with the dark purple background
    <div className="bg-[#25005D] py-16 md:py-24 lg:py-32 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Title */}
        <h2 className="text-[40px] md:text-[65px] font-extrabold text-white text-center mb-12 md:mb-16">
          WHY US?
        </h2>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              iconUrls={feature.iconUrls}
              title={feature.title}
              description={feature.description}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;