"use client";

import Link from "next/link";
import { Music, Video, Zap, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-primary py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 border border-accent-blue/40 rounded flex items-center justify-center">
                <span className="font-bebas text-lg text-white">J</span>
              </div>
              <span className="font-bebas text-2xl tracking-widest text-white">
                JAYBABA <span className="text-white/20 font-light">PRODUCTIONS</span>
              </span>
            </Link>
            <p className="font-poppins text-white/40 text-sm max-w-sm leading-relaxed mb-8 font-light">
              A premier sound, lighting, and event production company dedicated to creating immersive and unforgettable experiences.
            </p>
            <div className="flex gap-4">
              {[Music, Video, Zap, Share2].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bebas text-xl text-white mb-6 tracking-wider">NAVIGATE</h4>
            <ul className="space-y-3">
              {["ABOUT", "SERVICES", "PORTFOLIO", "EQUIPMENT", "CONTACT"].map((link) => (
                <li key={link}>
                  <Link href="#" className="font-poppins text-[10px] text-white/30 hover:text-accent-blue transition-colors tracking-[0.2em] font-bold">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-xl text-white mb-6 tracking-wider">UPDATES</h4>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS"
                className="bg-white/5 border border-white/5 rounded-lg px-4 py-3 font-poppins text-[10px] w-full focus:outline-none focus:border-accent-blue/40 transition-colors text-white tracking-widest"
              />
              <button className="bg-white text-black font-bebas text-lg px-6 py-2 rounded-lg hover:bg-accent-blue transition-all">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-poppins text-white/20 text-[9px] font-bold tracking-widest uppercase">
            © 2024 JAYBABA PRODUCTIONS. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-2">
            <span className="font-poppins text-white/20 text-[9px] font-bold tracking-widest uppercase">DESIGNED & DEVELOPED WITH ❤️ BY</span>
            <span className="font-bebas text-lg text-accent-blue tracking-wider">BIGINIT TECHNOLOGIES</span>
          </div>

          <div className="flex gap-8">
            <Link href="#" className="font-poppins text-white/20 text-[9px] hover:text-white transition-colors tracking-widest uppercase font-bold">PRIVACY</Link>
            <Link href="#" className="font-poppins text-white/20 text-[9px] hover:text-white transition-colors tracking-widest uppercase font-bold">TERMS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
