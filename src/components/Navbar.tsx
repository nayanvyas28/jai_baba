"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "EXPERIENCES", href: "#portfolio" },
  { name: "CAPABILITIES", href: "#services" },
  { name: "REELS", href: "#reels" },
  { name: "ARCHITECTS", href: "#team" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "glass-navbar py-3" : "bg-transparent py-8"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-accent-blue/40 rounded flex items-center justify-center group-hover:bg-accent-blue transition-all duration-500">
            <span className="font-bebas text-lg text-white group-hover:text-black">J</span>
          </div>
          <span className="font-bebas text-2xl tracking-widest text-white hidden sm:block">
            JAYBABA <span className="text-white/20 font-light">PRODUCTIONS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative font-poppins text-[9px] font-bold text-white/40 hover:text-white transition-colors uppercase tracking-[0.4em] group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent-blue transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-4 px-6 py-2 border border-white/10 hover:border-accent-blue text-white font-bebas text-lg rounded-full transition-all duration-500 hover:bg-accent-blue hover:text-black"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white w-8 h-8 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/5 lg:hidden py-10"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-bebas text-4xl text-white hover:text-accent-blue transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
