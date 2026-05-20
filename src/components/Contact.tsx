"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Background Floating Text */}
      <div className="absolute -bottom-10 left-0 w-full whitespace-nowrap opacity-[0.02] pointer-events-none select-none">
        <span className="font-bebas text-[15vw] text-white tracking-widest">GET IN TOUCH GET IN TOUCH GET IN TOUCH</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-poppins text-accent-blue tracking-[0.6em] uppercase text-[10px] font-bold block mb-4"
            >
              INITIATE COLLABORATION
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-bebas text-6xl md:text-8xl text-white mb-6"
            >
              LET&apos;S DEFINE <span className="text-white/20 italic">THE SPECTACLE</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-12 flex flex-col justify-between border-white/5 group hover:border-accent-blue/30 transition-all duration-700"
            >
              <div className="space-y-12">
                {[
                  { icon: Mail, label: "ENQUIRIES", value: "HELLO@JAYBABA.PRO", color: "text-accent-blue" },
                  { icon: MapPin, label: "HQ LOCATION", value: "MUMBAI, INDIA", color: "text-accent-purple" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group/item">
                    <Magnetic>
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:bg-white group-hover/item:scale-110 transition-all duration-500">
                        <item.icon className={`${item.color} group-hover/item:text-black transition-colors`} size={20} />
                      </div>
                    </Magnetic>
                    <div>
                      <p className="font-poppins text-[9px] text-white/20 uppercase tracking-[0.4em] font-bold mb-2">{item.label}</p>
                      <p className="font-bebas text-3xl text-white tracking-wide">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-white/5 opacity-40 group-hover:opacity-100 transition-opacity">
                <p className="font-poppins text-xs text-white/60 leading-relaxed font-light italic">
                  &ldquo;Technical mastery is not just about gear, but the emotions it engineers.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass-card p-12 flex flex-col items-center text-center justify-center border-white/5 bg-accent-blue/[0.01] group hover:border-accent-blue/30 transition-all duration-700 shadow-2xl"
            >
              <Magnetic>
                <div className="w-20 h-20 rounded-full bg-[#25D366]/5 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-[#25D366]/10 transition-all duration-700 relative">
                  <div className="absolute inset-0 bg-[#25D366]/20 blur-2xl rounded-full animate-pulse" />
                  <MessageCircle className="text-[#25D366] relative z-10" size={36} />
                </div>
              </Magnetic>
              
              <h3 className="font-bebas text-4xl text-white mb-4 tracking-wider">QUICK BOOKING</h3>
              <p className="font-poppins text-white/40 text-[13px] mb-12 leading-relaxed font-light max-w-xs">
                Direct access to our technical leads for immediate project scoping.
              </p>

              <Magnetic>
                <motion.a 
                  href="https://wa.me/919876543210" 
                  target="_blank"
                  className="group relative flex items-center justify-between px-8 py-5 bg-black border border-[#25D366]/20 rounded-2xl transition-all duration-500 hover:border-[#25D366] hover:shadow-[0_0_30px_rgba(37,211,102,0.2)] overflow-hidden keep-dark"
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-[#25D366]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-center gap-5 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366] transition-all duration-500">
                      <MessageCircle size={16} className="text-[#25D366] group-hover:text-black transition-colors" />
                    </div>
                    <span className="font-bebas text-xl tracking-[0.2em] text-white whitespace-nowrap">CHAT ON WHATSAPP</span>
                  </div>
                  
                  <ArrowRight size={20} className="text-[#25D366] group-hover:translate-x-1 transition-transform relative z-10" />
                </motion.a>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Dynamic Glow Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 blur-[150px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-purple/5 blur-[150px] translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}
