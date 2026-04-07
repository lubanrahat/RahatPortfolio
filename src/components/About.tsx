"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiFigma,
  SiGit,
  SiRedis,
  SiGraphql,
  SiPrisma,
} from "react-icons/si";
import { Cloud } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillIcons = [
  { icon: SiReact, color: "#61DAFB", name: "React" },
  { icon: SiNextdotjs, color: "#ffffff", name: "Next.js" },
  { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
  { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
  { icon: SiPython, color: "#3776AB", name: "Python" },
  { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
  { icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
  { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { icon: SiDocker, color: "#2496ED", name: "Docker" },
  { icon: Cloud, color: "#FF9900", name: "AWS" },
  { icon: SiFigma, color: "#F24E1E", name: "Figma" },
  { icon: SiGit, color: "#F05032", name: "Git" },
  { icon: SiRedis, color: "#DC382D", name: "Redis" },
  { icon: SiGraphql, color: "#E10098", name: "GraphQL" },
  { icon: SiPrisma, color: "#5A67D8", name: "Prisma" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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

      // Avatar with scale + rotation
      gsap.fromTo(
        avatarRef.current,
        { scale: 0.8, opacity: 0, rotation: -5 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: avatarRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Info text
      gsap.fromTo(
        infoRef.current,
        { x: 30, opacity: 0, filter: "blur(4px)" },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Skill icons wave animation
      const icons = skillsRef.current?.querySelectorAll(".skill-icon");
      if (icons) {
        gsap.fromTo(
          icons,
          { y: 20, opacity: 0, scale: 0.5 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.04,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-12">
      <div className="max-w-[720px] mx-auto px-6">
        <div ref={headingRef} className="mb-6 opacity-0">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            About
          </p>
          <h2 className="text-2xl font-bold text-foreground">Me</h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-start">
          {/* Avatar */}
          <div ref={avatarRef} className="relative flex-shrink-0 group opacity-0">
            <div className="w-[160px] h-[160px] rounded-2xl overflow-hidden ring-2 ring-[#f5c518]/40 animate-glow-pulse">
              <Image
                src="/me.jpg"
                alt="Luban Rahat"
                width={160}
                height={160}
                className="object-cover animate-float"
              />
            </div>
            {/* YouTube label on hover */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="px-2 py-1 rounded bg-card border border-border text-[10px] text-muted-foreground whitespace-nowrap">
                YouTube Home
              </span>
            </div>
          </div>

          {/* Info */}
          <div ref={infoRef} className="flex-1 opacity-0">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Luban Rahat
            </h3>
            <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
              I&apos;m a Full Stack web developer and Open Source Contributor. I
              love building products to solve real-world problems. I&apos;m
              specialized in building MVPs.
            </p>

            {/* Skills */}
            <div ref={skillsRef}>
              <p className="text-sm font-semibold text-foreground mb-3">
                Skills
              </p>
              <div className="flex flex-wrap gap-3">
                {skillIcons.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="skill-icon group/skill relative"
                      title={skill.name}
                    >
                      <Icon
                        className="w-6 h-6 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_currentColor] cursor-pointer"
                        style={{ color: skill.color }}
                      />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/skill:opacity-100 transition-opacity pointer-events-none">
                        <span className="px-1.5 py-0.5 rounded bg-card border border-border text-[9px] text-muted-foreground whitespace-nowrap">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
