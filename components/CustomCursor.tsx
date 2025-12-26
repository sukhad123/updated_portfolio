"use client";

import gsap from "gsap";
import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLDivElement | null;
    const follower = document.querySelector('.cursor-follower') as HTMLDivElement | null;

    if (!cursor || !follower) return;

    const moveCursor = (e: MouseEvent) => {
      // Follower moves slower for trailing effect
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power3.out",
      });

      // Cursor moves fast
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power1.out",
      });
    };

    // Center elements on cursor
    gsap.set(follower, { xPercent: -50, yPercent: -50 });
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    window.addEventListener('mousemove', moveCursor);

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50">
      {/* Trailing circle behind rocket */}
      <div className="cursor-follower w-14 h-14    border-white fixed mix-blend-difference opacity-60" />
      {/* Main rocket cursor */}
      <div className="cursor fixed text-2xl">🚀</div>
    </div>
  );
};

export default CustomCursor;
