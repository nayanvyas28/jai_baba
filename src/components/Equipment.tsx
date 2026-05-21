"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Speaker, Zap, Layers, Cpu } from "lucide-react";

const equipment = [
  { name: "L-ACOUSTICS K2", type: "LINE ARRAY SYSTEMS", icon: Speaker, image: "/l_acoustics_k2.png" },
  { name: "GRANDMA3 FULL", type: "LIGHTING CONSOLE", icon: Cpu, image: "/grandma3.png" },
  { name: "ROE VISUAL RUBY", type: "LED PANELS", icon: Layers, image: "/roe_ruby.png" },
  { name: "CLAY PAKY SHARPY", type: "MOVING HEADS", icon: Zap, image: "/clay_paky.png" },
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
              className="glass-card group overflow-hidden flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40 border-b border-white/5">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:border-accent-gold group-hover:bg-accent-gold/10 transition-all duration-500">
                  <item.icon className="text-white group-hover:text-accent-gold transition-colors" size={18} />
                </div>
              </div>

              {/* Text Container */}
              <div className="p-6 text-center">
                <h4 className="font-bebas text-xl md:text-2xl text-white mb-2 group-hover:text-accent-gold transition-colors tracking-wide">
                  {item.name}
                </h4>
                <p className="font-poppins text-white/20 text-[9px] uppercase tracking-[0.2em] font-bold">
                  {item.type}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
