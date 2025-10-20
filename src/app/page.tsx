import { Navbar02 } from "@/components/ui/navbar-02";
import LeadCaptureBanner from "@/components/sections/LeadCaptureBanner";
import AIAgentDemos from "@/components/sections/AIAgentDemos";
import ChallengeSolution from "@/components/sections/ChallengeSolution";
import WhyUs from "@/components/sections/WhyUs";
import MeetTheLeaders from "@/components/sections/MeetTheLeaders";
import Footer from "@/components/sections/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-160px)] md:min-h-screen uppercase w-full bg-no-repeat bg-center">
      {/* Gradient Background — only 894px tall */}
      <div
        className="absolute top-0 left-0 w-full h-[894px] bg-[linear-gradient(to_bottom,_#473D92_0%,_#7868F8_40%,_rgba(95,83,197,0.15)_80%,_transparent_100%)] z-[-1] md:bg-none"
      />
      <Navbar02 />
      <main className="flex flex-col row-start-2 items-center justify-items-center w-full">
        <LeadCaptureBanner />
        <AIAgentDemos />
        <ChallengeSolution />
        <WhyUs />
        <MeetTheLeaders />
      </main>
      <Footer />
    </div>
  );
}
