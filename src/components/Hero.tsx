"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#070707] keep-dark"
    >
      {/* Parallax Background Text */}
      <motion.div 
        style={{ x: textX }}
        className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap z-0 opacity-[0.02] pointer-events-none select-none"
      >
        <span className="font-bebas text-[25vw] text-white">BEYOND SPECTACLE BEYOND SPECTACLE BEYOND SPECTACLE</span>
      </motion.div>

      {/* Background Media */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />
        <Image
          src="/hero.png"
          alt="Jaybaba Enterprises Hero"
          fill
          priority
          className="object-cover brightness-[0.3]"
        />
      </motion.div>

      {/* Interactive Spotlight */}
      <motion.div 
        animate={{ 
          x: mousePos.x * 2, 
          y: mousePos.y * 2 
        }}
        transition={{ type: "spring", damping: 40, stiffness: 60 }}
        className="absolute inset-0 z-20 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle at center, rgba(0, 209, 255, 0.15) 0%, transparent 70%)"
        }}
      />

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-30">
        <motion.div
          style={{ opacity }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-10"
          >
            <span className="font-poppins text-accent-blue text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase px-6 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
              THE FUTURE OF PRODUCTION
            </span>
          </motion.div>

          <div className="relative mb-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-white flex flex-col items-center"
            >
              <span className="mb-2">JAYBABA</span>
              <span className="text-accent-blue opacity-90 tracking-widest text-4xl md:text-6xl lg:text-7xl">EXPERIENCE</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-poppins text-white text-xs md:text-sm max-w-lg mb-14 leading-relaxed tracking-[0.2em] font-light uppercase"
          >
            Engineering emotions through technical precision <br /> on a global scale.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center gap-10"
          >
            <Magnetic>
              <button className="group relative px-12 py-5 overflow-hidden rounded-xl transition-all duration-500 bg-white text-black hover:bg-accent-blue">
                <span className="relative font-bebas text-2xl tracking-widest uppercase">
                  START PRODUCTION
                </span>
              </button>
            </Magnetic>
            
            <Magnetic>
              <button className="group relative px-12 py-5 overflow-hidden rounded-xl border border-white/10 hover:border-white transition-all duration-500">
                <span className="relative font-bebas text-2xl text-white group-hover:text-black tracking-widest uppercase">
                  OUR ARCHIVE
                </span>
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 opacity-30"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent-blue via-accent-purple to-transparent" />
      </motion.div>
    </section>
  );
}
