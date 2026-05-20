"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Heart, Share2, MessageCircle } from "lucide-react";
import { useRef } from "react";

const reels = [
  { id: 1, video: "/reel/reel1.mp4", title: "Midnight Festival", likes: "12.4k" },
  { id: 2, video: "/reel/reel2.mp4", title: "Eternal Vows", likes: "8.2k" },
  { id: 3, video: "/reel/reel3.mp4", title: "Behind The Stage", likes: "15.9k" },
  { id: 4, video: "/reel/reel4.mp4", title: "Laser Architecture", likes: "22.1k" },
  { id: 5, video: "/reel/reel5.mp4", title: "Grand Ballroom", likes: "5.4k" },
  { id: 6, video: "/reel/reel6.mp4", title: "Stage Setup", likes: "18.2k" },
  { id: 7, video: "/reel/reel7.mp4", title: "Lighting Design", likes: "9.5k" },
  { id: 8, video: "/reel/reel8.mp4", title: "Corporate Event", likes: "11.1k" },
];

export default function Reels() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="reels" className="py-24 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-poppins text-accent-blue tracking-[0.4em] uppercase text-[10px] font-bold block mb-4"
          >
            IMMERSIVE HIGHLIGHTS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="font-bebas text-5xl md:text-7xl text-white"
          >
            THE <span className="text-white/20">REELS</span>
          </motion.h2>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" })}
            className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            <div className="w-2 h-2 border-t border-l border-current -rotate-45 ml-1" />
          </button>
          <button 
            onClick={() => scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" })}
            className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            <div className="w-2 h-2 border-t border-r border-current rotate-45 mr-1" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 px-6 md:px-12 overflow-x-auto no-scrollbar pb-10 snap-x"
      >
        {reels.map((reel, i) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 w-[260px] md:w-[320px] aspect-[9/16] relative rounded-[2rem] overflow-hidden group cursor-pointer snap-center keep-dark"
          >
            <video
              src={reel.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Play className="text-white fill-white" size={24} />
              </div>
            </div>

            <div className="absolute right-4 bottom-24 flex flex-col gap-6 items-center">
              <div className="flex flex-col items-center gap-1">
                <Heart className="text-white" size={22} />
                <span className="font-poppins text-[10px] text-white/70">{reel.likes}</span>
              </div>
              <MessageCircle className="text-white" size={22} />
              <Share2 className="text-white" size={22} />
            </div>

            <div className="absolute bottom-8 left-8 right-12">
              <p className="font-bebas text-2xl text-white mb-1 leading-none">{reel.title}</p>
              <p className="font-poppins text-accent-blue text-[9px] uppercase tracking-widest font-bold opacity-60">Highlight reel</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
