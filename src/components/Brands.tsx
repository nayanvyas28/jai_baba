"use client";

import { motion } from "framer-motion";

const brands = ["SENNHEISER", "JBL", "RCF", "PIONEER", "CLAY PAKY", "MA LIGHTING", "BOSE"];

export default function Brands() {
  return (
    <section className="py-12 bg-bg-secondary overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {brands.map((brand) => (
            <span 
              key={brand} 
              className="font-bebas text-lg md:text-2xl text-white tracking-[0.3em] font-light"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
