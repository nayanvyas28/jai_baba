"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "VIKRAM MALHOTRA",
    role: "EVENT DIRECTOR, V-EVENTS",
    text: "THE SONIC ARCHITECTURE AND LIGHTING DYNAMICS JAYBABA BROUGHT TO OUR ARENA TOUR WERE TRULY WORLD-CLASS.",
  },
  {
    name: "ANANYA SHARMA",
    role: "LUXURY WEDDING CURATOR",
    text: "FOR HIGH-STAKES LUXURY CELEBRATIONS, THEIR ATTENTION TO DETAIL AND CINEMATIC AESTHETICS ARE ABSOLUTELY UNPARALLELED.",
  },
  {
    name: "DAVID D&apos;SOUZA",
    role: "DJ & PRODUCER",
    text: "TECHNICAL PERFECTION EVERY SINGLE TIME. RELIABLE, FUTURISTIC, AND POWERFUL SETUPS THAT MAKE EVERY PERFORMANCE A SPECTACLE.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <Quote className="text-accent-blue/10 mb-6" size={48} />
          <h2 className="font-bebas text-5xl md:text-7xl text-white">
            CLIENT <span className="text-white/20">VOICES</span>
          </h2>
          <div className="w-12 h-[1px] bg-accent-blue/30 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 relative h-full border-white/5"
            >
              <p className="font-poppins text-lg md:text-xl text-white/70 leading-relaxed mb-8 italic font-light tracking-wide">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <h4 className="font-bebas text-2xl text-white mb-1">{t.name}</h4>
                <p className="font-poppins text-accent-blue text-[9px] uppercase tracking-[0.2em] font-bold opacity-60">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
