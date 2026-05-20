"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "EXPERIENCES", href: "#portfolio" },
  { name: "CAPABILITIES", href: "#services" },
  { name: "REELS", href: "#reels" },
  { name: "ARCHITECTS", href: "#team" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Initial theme check
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");

    const handleThemeChange = () => {
      const isCurrentlyLight = document.documentElement.classList.contains("light");
      setTheme(isCurrentlyLight ? "light" : "dark");
    };
    window.addEventListener("theme-change", handleThemeChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("theme-change", handleThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
    setTheme(nextTheme);
    window.dispatchEvent(new Event("theme-change"));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "glass-navbar py-3" : "bg-transparent py-8 keep-dark"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/10 group-hover:border-accent-blue/50 transition-all duration-500">
            <Image 
              src={(theme === "light" && isScrolled) ? "/logo-light.svg" : "/logo-dark.svg"} 
              alt="Jaybaba Logo" 
              fill 
              className="object-contain" 
            />
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
              className="relative font-poppins text-[11px] font-semibold text-white/60 hover:text-white transition-colors uppercase tracking-[0.25em] group"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-accent-blue transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-white/10 hover:border-accent-blue text-white flex items-center justify-center transition-all duration-500 hover:bg-white/5 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
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
            className="absolute top-full left-0 w-full bg-bg-secondary/95 backdrop-blur-xl border-b border-white/5 lg:hidden py-10"
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
              <button
                onClick={toggleTheme}
                className="mt-4 flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full text-white text-lg font-bebas tracking-wider hover:bg-white/5 cursor-pointer"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                {theme === "light" ? "DARK MODE" : "LIGHT MODE"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
