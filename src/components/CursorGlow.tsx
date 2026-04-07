"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          x: posRef.current.x,
          y: posRef.current.y,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[1] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{
        width: "600px",
        height: "600px",
        background:
          "radial-gradient(circle, rgba(99,102,241,0.04) 0%, rgba(99,102,241,0.01) 40%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
