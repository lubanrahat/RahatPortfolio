"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export default function GitHubActivity() {
  const { resolvedTheme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Calendar cascade reveal
      gsap.fromTo(
        calendarRef.current,
        { opacity: 0, y: 20, clipPath: "inset(0 100% 0 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: calendarRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="github" className="py-12">
      <div className="max-w-[720px] mx-auto px-6">
        <div ref={headingRef} className="opacity-0">
          <h2 className="text-2xl font-bold text-foreground mb-1">
            GitHub Activity
          </h2>
          <p className="text-xs text-muted-foreground mb-6">
            lubanrahat&apos;s coding journey over the past year
          </p>
        </div>

        {/* Contribution Graph */}
        <div
          ref={calendarRef}
          className="overflow-x-auto pb-2 scrollbar-hide opacity-0"
        >
          <div className="min-w-[680px] text-xs text-muted-foreground">
            <GitHubCalendar
              username="lubanrahat"
              colorScheme={resolvedTheme === "light" ? "light" : "dark"}
              theme={{
                light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
              fontSize={12}
              blockSize={11}
              blockMargin={3}
              blockRadius={2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
