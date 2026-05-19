"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "PRODUCTIONS", value: "1500", suffix: "+" },
  { label: "BRANDS", value: "200", suffix: "+" },
  { label: "EXPERTS", value: "50", suffix: "+" },
  { label: "RATING", value: "4.9", suffix: "/5" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="text-center group"
            >
              <div className="font-bebas text-5xl md:text-6xl text-white mb-2 flex items-baseline justify-center group-hover:scale-105 transition-transform duration-500">
                <span className="text-white group-hover:text-accent-blue transition-colors">{stat.value}</span>
                <span className="text-sm md:text-xl text-white/30 ml-1 tracking-normal">{stat.suffix}</span>
              </div>
              <p className="font-poppins text-white/20 uppercase tracking-[0.4em] text-[9px] md:text-[10px] font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
