"use client";

import { motion } from "framer-motion";
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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
  return (
    <motion.section
      id="about"
      className="py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <div className="max-w-[720px] mx-auto px-6">
        <motion.div variants={fadeInUp} className="mb-6">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            About
          </p>
          <h2 className="text-2xl font-bold text-foreground">Me</h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-6 items-start"
        >
          {/* Avatar */}
          <div className="relative flex-shrink-0 group">
            <div className="w-[160px] h-[160px] rounded-2xl overflow-hidden ring-2 ring-[#f5c518]/40 shadow-[0_0_30px_rgba(245,197,24,0.15)]">
              <Image
                src="/me.jpg"
                alt="Luban Rahat"
                width={160}
                height={160}
                className="object-cover"
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
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Luban Rahat
            </h3>
            <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
              I&apos;m a Full Stack web developer and Open Source Contributor. I
              love building products to solve real-world problems. I&apos;m
              specialized in building MVPs.
            </p>

            {/* Skills */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">
                Skills
              </p>
              <div className="flex flex-wrap gap-3">
                {skillIcons.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group/skill relative"
                      title={skill.name}
                    >
                      <Icon
                        className="w-6 h-6 transition-transform duration-200 hover:scale-125 cursor-pointer"
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
        </motion.div>
      </div>
    </motion.section>
  );
}
