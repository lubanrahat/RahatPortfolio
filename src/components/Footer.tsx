"use client";

import { useEffect, useRef } from "react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for footer elements
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      // Shimmer line reveal
      tl.fromTo(
        shimmerRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8, ease: "power3.inOut" }
      );

      // Text fade in
      tl.fromTo(
        textRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );

      // Social icons bounce in
      const icons = socialRef.current?.querySelectorAll("a");
      if (icons) {
        tl.fromTo(
          icons,
          { scale: 0, opacity: 0, rotation: -15 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(2)",
          },
          "-=0.4"
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="py-12 relative overflow-hidden">
      {/* Animated shimmer line */}
      <div 
        ref={shimmerRef} 
        className="absolute top-0 left-0 right-0 h-px shimmer-line opacity-0 origin-center" 
      />
      
      <div className="max-w-[720px] mx-auto px-6 mt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p ref={textRef} className="text-xs text-muted-foreground opacity-0">
            © {new Date().getFullYear()} Luban Rahat. All rights reserved.
          </p>
          <div ref={socialRef} className="flex items-center gap-4">
            <a
              href="https://github.com/lubanrahat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:text-indigo-400 opacity-0"
            >
              <SiGithub size={16} />
            </a>
            <a
              href="https://x.com/lubanrahat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:text-indigo-400 opacity-0"
            >
              <SiX size={16} />
            </a>
            <a
              href="https://linkedin.com/in/lubanrahat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:text-indigo-400 opacity-0"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
