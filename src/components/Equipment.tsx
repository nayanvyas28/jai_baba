"use client";

import { motion } from "framer-motion";
import { Speaker, Zap, Layers, Cpu } from "lucide-react";

const equipment = [
  { name: "L-ACOUSTICS K2", type: "LINE ARRAY SYSTEMS", icon: Speaker },
  { name: "GRANDMA3 FULL", type: "LIGHTING CONSOLE", icon: Cpu },
  { name: "ROE VISUAL RUBY", type: "LED PANELS", icon: Layers },
  { name: "CLAY PAKY SHARPY", type: "MOVING HEADS", icon: Zap },
];

export default function Equipment() {
  return (
    <section id="equipment" className="py-24 bg-bg-primary border-y border-white/5 relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-poppins text-accent-gold tracking-[0.4em] uppercase text-[10px] font-bold block mb-4"
        >
          THE TECHNICAL RIDERS
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-bebas text-5xl md:text-7xl text-white mb-16"
        >
          INDUSTRY <span className="text-white/20">BENCHMARK</span>
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {equipment.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 md:p-10 glass-card group"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-8 group-hover:bg-accent-gold group-hover:scale-110 transition-all duration-500">
                <item.icon className="text-white/40 group-hover:text-black transition-colors" size={28} />
              </div>
              <h4 className="font-bebas text-2xl text-white mb-2 group-hover:text-accent-gold transition-colors tracking-wide">{item.name}</h4>
              <p className="font-poppins text-white/20 text-[9px] uppercase tracking-[0.2em] font-bold">{item.type}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
