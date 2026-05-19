"use client";

import { motion } from "framer-motion";

const team = [
  { name: "JAYESH SHAH", role: "FOUNDER & VISIONARY", initial: "JS" },
  { name: "RAHUL VERMA", role: "CHIEF OF AUDIO", initial: "RV" },
  { name: "SIDDHARTH RAO", role: "LIGHTING ARCHITECT", initial: "SR" },
  { name: "NEHA KAPUR", role: "TECHNICAL DIRECTOR", initial: "NK" },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-poppins text-accent-gold tracking-[0.4em] uppercase text-[10px] font-bold block mb-4"
          >
            THE ARCHITECTS OF SOUND & LIGHT
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-bebas text-5xl md:text-7xl text-white mb-6"
          >
            MEET THE <span className="text-white/20">CREW</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-accent-gold" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-white/5 rounded-[1.5rem] mb-6 overflow-hidden relative border border-white/5 group-hover:border-accent-blue/30 transition-all duration-500">
                <div className="w-full h-full flex items-center justify-center font-bebas text-7xl text-white/5 group-hover:text-accent-blue/10 transition-colors duration-500 select-none">
                  {member.initial}
                </div>
              </div>
              
              <h4 className="font-bebas text-2xl text-white mb-1 group-hover:text-accent-blue transition-colors duration-500">
                {member.name}
              </h4>
              <p className="font-poppins text-white/30 text-[9px] uppercase tracking-[0.2em] font-bold">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
