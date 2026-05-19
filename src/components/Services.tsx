"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Music, 
  Lightbulb, 
  Monitor, 
  Crown,
  ArrowUpRight
} from "lucide-react";
import Magnetic from "./Magnetic";
import React from "react";

const services = [
  {
    id: "01",
    title: "WEDDING PRODUCTION",
    desc: "Luxury soundscapes and ethereal lighting architecture for high-end celebrations.",
    icon: Crown,
    accent: "text-accent-gold",
    glow: "group-hover:bg-accent-gold/10",
  },
  {
    id: "02",
    title: "CONCERT SYSTEMS",
    desc: "Tour-grade line array systems delivering bone-shaking precision and clarity.",
    icon: Music,
    accent: "text-accent-blue",
    glow: "group-hover:bg-accent-blue/10",
  },
  {
    id: "03",
    title: "LIGHTING DESIGN",
    desc: "Intelligent lighting choreography that transforms venues into immersive environments.",
    icon: Lightbulb,
    accent: "text-accent-purple",
    glow: "group-hover:bg-accent-purple/10",
  },
  {
    id: "04",
    title: "ULTRA HD LED WALLS",
    desc: "Pixel-perfect visual canvases for high-impact cinematic backdrops and live feeds.",
    icon: Monitor,
    accent: "text-accent-blue",
    glow: "group-hover:bg-accent-blue/10",
  },
];

function ServiceCard({ service, index }: { service: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      <div className="glass-card p-10 md:p-14 relative overflow-hidden h-full border-white/5 group-hover:border-white/20 transition-all duration-700 preserve-3d">
        {/* Background Number */}
        <div className="absolute top-10 right-10 font-bebas text-8xl text-white/[0.03] group-hover:text-white/[0.06] transition-colors pointer-events-none select-none">
          {service.id}
        </div>

        {/* Dynamic Glow */}
        <div className={`absolute -top-24 -right-24 w-64 h-64 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${service.glow}`} />

        <div className="flex flex-col h-full relative z-10 translate-z-20">
          <Magnetic>
            <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-white group-hover:scale-110 transition-all duration-700`}>
              <service.icon className={`w-8 h-8 ${service.accent} group-hover:text-black transition-colors`} />
            </div>
          </Magnetic>
          
          <h3 className="font-bebas text-4xl text-white mb-6 tracking-wide group-hover:text-accent-blue transition-colors">
            {service.title}
          </h3>
          
          <p className="font-poppins text-white/40 text-sm md:text-base leading-relaxed font-light group-hover:text-white/60 transition-colors">
            {service.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Background Section Title Parallax */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap opacity-[0.01] pointer-events-none select-none z-0">
        <span className="font-bebas text-[20vw] text-white">EXPERTISE EXPERTISE EXPERTISE</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-poppins text-accent-blue tracking-[0.5em] uppercase text-[10px] font-bold block mb-4"
          >
            TECHNICAL ARCHITECTURE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-bebas text-6xl md:text-8xl text-white mb-6"
          >
            THE <span className="text-white/20 italic">EXPERTISE</span>
          </motion.h2>
          <div className="w-16 h-[1px] bg-accent-blue" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
