"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest(".glass-card") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mousePos.x, springConfig);
  const cursorY = useSpring(mousePos.y, springConfig);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-blue z-[9999] pointer-events-none mix-blend-difference hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "transparent",
        }}
        transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-accent-blue rounded-full z-[9999] pointer-events-none hidden lg:block"
        style={{
          x: mousePos.x,
          y: mousePos.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
