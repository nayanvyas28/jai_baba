"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    title: "ROYAL WEDDING SPECTACLE",
    category: "LUXURY WEDDING",
    image: "/wedding.png",
    location: "UDAIPUR",
  },
  {
    title: "NEON PULSE ARENA",
    category: "CONCERT PRODUCTION",
    image: "/concert.png",
    location: "MUMBAI",
  },
  {
    title: "TECH SUMMIT 2024",
    category: "CORPORATE EVENT",
    image: "/corporate.png",
    location: "BENGALURU",
  },
];

export default function Portfolio() {
  const containerRef = useRef(null);

  return (
    <section id="portfolio" ref={containerRef} className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-poppins text-accent-purple tracking-[0.4em] uppercase text-[10px] font-bold block mb-4"
        >
          SELECTED PRODUCTIONS
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-bebas text-5xl md:text-7xl text-white mb-6"
        >
          THE <span className="text-white/20">GALLERY</span>
        </motion.h2>
        <div className="w-12 h-[2px] bg-accent-purple" />
      </div>

      <div className="space-y-12 px-6">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative h-[60vh] md:h-[70vh] w-full max-w-6xl mx-auto overflow-hidden rounded-[2rem] group keep-dark"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
            </div>

            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12">
              <div className="max-w-2xl">
                <span className="font-poppins text-accent-blue text-[10px] font-bold tracking-[0.3em] uppercase mb-3 block">
                  {project.category} — {project.location}
                </span>
                <h3 className="font-bebas text-3xl md:text-5xl text-white mb-6 tracking-wide">
                  {project.title}
                </h3>
                
                <button className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                  <span className="font-bebas text-xl tracking-widest">VIEW PROJECT</span>
                  <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-accent-blue transition-all" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <button className="font-bebas text-2xl text-white/40 hover:text-accent-blue transition-all tracking-[0.2em]">
          EXPLORE COMPLETE ARCHIVE
        </button>
      </div>
    </section>
  );
}
