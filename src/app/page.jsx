'use client';
import { Navbar02 } from '@/components/ui/navbar-02';
import AiMarketingSection from '@/components/sections/AiMarketingSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AboutSection from '@/components/sections/AboutSection';
import FounderSection from '@/components/sections/FounderSection';
import Footer from '@/components/sections/Footer';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { useEffect, useRef } from 'react';

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const target = { x: width / 2, y: height / 2 };
    const points = [];

    for (let x = 0; x < width; x += width / 10) {
      for (let y = 0; y < height; y += height / 20) {
        const px = x + Math.random() * width / 10;
        const py = y + Math.random() * height / 10;
        const p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    points.forEach((p1) => {
      const closest = [];
      points.forEach((p2) => {
        if (p1 !== p2) {
          closest.push(p2);
          closest.sort((a, b) => getDistance(p1, a) - getDistance(p1, b));
          if (closest.length > 5) closest.pop();
        }
      });
      p1.closest = closest;
      p1.circle = new Circle(p1, 2 + Math.random() * 2, 'rgba(92,83,234,0.3)');
    });

    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    function Circle(pos, rad, color) {
      this.pos = pos;
      this.radius = rad;
      this.color = color;
      this.active = 0;

      this.draw = function () {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        // Inside Circle.draw()
        const color1 = `rgba(26, 0, 215, ${this.active})`;  // #1A00D7
        const color2 = `rgba(215, 0, 243, ${this.active})`; // #D700F3
        ctx.fillStyle = Math.random() > 0.5 ? color1 : color2; // randomly alternate
        ctx.fill();
      };
    }

    function drawLines(p) {
      if (!p.active) return;
      p.closest.forEach((close) => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(close.x, close.y);
        // Inside drawLines()
        const gradient = ctx.createLinearGradient(p.x, p.y, p.closest[0].x, p.closest[0].y);
        gradient.addColorStop(0, `rgba(26, 0, 215, ${p.active})`);
        gradient.addColorStop(1, `rgba(215, 0, 243, ${p.active})`);
        ctx.strokeStyle = gradient;
        ctx.stroke();
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      points.forEach((p) => {
        if (Math.abs(getDistance(target, p)) < 4000) {
          p.active = 0.3;
          p.circle.active = 0.6;
        } else if (Math.abs(getDistance(target, p)) < 20000) {
          p.active = 0.1;
          p.circle.active = 0.3;
        } else if (Math.abs(getDistance(target, p)) < 40000) {
          p.active = 0.02;
          p.circle.active = 0.1;
        } else {
          p.active = 0;
          p.circle.active = 0;
        }
        drawLines(p);
        p.circle.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('mousemove', (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    });

    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-160px)] md:min-h-screen uppercase w-full bg-no-repeat bg-center">
      <Navbar02 />
      <main className="relative flex flex-col items-center text-white sm:items-start md:flex md:items-center md:justify-center md:min-h-screen">
        <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-5px)] uppercase w-full bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/HERO LOGO.png')",
            backgroundSize: "auto 80%",
            backgroundPosition: "center top",
          }}
        >
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-1000"></canvas>
          {/* Smooth bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-b from-transparent to-black"></div>

          <h1 className="max-w-none md:max-w-6xl text-[65px] md:text-[200px] font-bold text-center leading-[100%] md:leading-[80%] mb-6">
            Mindsheep <span className="text-[100px] md:text-[200px]">Labs</span>
          </h1>

          <p className="text-[15px] md:text-[40px] mb-8 font-semibold text-center text-white">
            Helping Agencies Rewire with{" "}
            <span className="glitch" data-text="AI">AI</span>
          </p>


          <a href="">
            <MagneticButton
              className="z-1003 cursor-pointer font-roboto rounded-sm md:rounded-[15px] h-[28px] md:h-[57px] flex mx-auto justify-center items-center px-8 text-[15px] md:text-[30px] font-semibold md:font-bold uppercase py-5 bg-gradient-to-r from-[#1207D9] to-[#237FFE]"
            >
              Book an Exploratory Call
            </MagneticButton>
          </a>
        </div>

        <div className="relative w-full h-[180px] overflow-hidden bg-black">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          <div id="stars" className="absolute w-full h-full"></div>
          <div id="stars2" className="absolute w-full h-full"></div>
          <div id="stars3" className="absolute w-full h-full"></div>
          <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-b from-transparent via-black/80 to-black"></div>
        </div>

        <AiMarketingSection />
        <FeaturesSection />
        <AboutSection />
        <FounderSection />
      </main>
      <Footer />
    </div>
  );
}