"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Globe, ExternalLink, Play, ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const techIconColors: Record<string, string> = {
  "Next.js 16": "#ffffff",
  "React 19": "#61DAFB",
  TypeScript: "#3178C6",
  "Tailwind CSS 4": "#06B6D4",
  "Express 5": "#ffffff",
  "Prisma 7": "#a1a1aa",
  PostgreSQL: "#4169E1",
  Stripe: "#635BFF",
  "Shadcn UI": "#ffffff",
  "Framer Motion": "#FF0066",
  "TanStack Query": "#FF4154",
  "Monaco Editor": "#007ACC",
  "Google Gemini AI": "#4285F4",
  "Judge0 API": "#22c55e",
  "Passport.js": "#34E27A",
  Bun: "#FBF0DF",
  Zod: "#3E67B1",
  Winston: "#a1a1aa",
  Recharts: "#22B5BF",
  "Radix UI": "#ffffff",
};

export default function Projects() {
  const project = projects[0];
  const router = useRouter();

  return (
    <motion.section
      id="projects"
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
            Featured
          </p>
          <h2 className="text-2xl font-bold text-foreground">Projects</h2>
        </motion.div>

        {/* Single Featured Project */}
        <motion.div variants={fadeInUp}>
          <div 
            onClick={() => router.push(`/projects/${project.slug}`)} 
            className="block group cursor-pointer"
          >
            <div className="rounded-xl border border-border bg-card overflow-hidden card-hover">
              {/* Project Image */}
              <div className="relative aspect-[16/8] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                {/* Play button for video projects */}
                {project.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center border border-border group-hover:bg-background/90 group-hover:scale-110 transition-all duration-300">
                      <Play
                        size={22}
                        className="text-foreground ml-0.5"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground/70 hover:text-foreground transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Globe size={16} />
                      </a>
                    )}
                    {project.githubClientUrl && (
                      <a
                        href={project.githubClientUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground/70 hover:text-foreground transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <SiGithub size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[13px] text-muted-foreground/80 mb-1 italic">
                  {project.tagline}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
                    Technologies
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.technologies.slice(0, 10).map((tech) => (
                      <div
                        key={tech}
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                        style={{
                          backgroundColor: `${techIconColors[tech] || "#666"}20`,
                          color: techIconColors[tech] || "#666",
                          border: `1px solid ${techIconColors[tech] || "#666"}30`,
                        }}
                        title={tech}
                      >
                        {tech.charAt(0)}
                      </div>
                    ))}
                    {project.technologies.length > 10 && (
                      <span className="text-[11px] text-muted-foreground">
                        +{project.technologies.length - 10} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Status & Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        project.status === "operational"
                          ? "bg-[#22c55e]"
                          : project.status === "building"
                            ? "bg-[#f59e0b]"
                            : "bg-[#666]"
                      }`}
                    />
                    <span
                      className={`text-[11px] font-medium ${
                        project.status === "operational"
                          ? "text-[#22c55e]"
                          : project.status === "building"
                            ? "text-[#f59e0b]"
                            : "text-[#666]"
                      }`}
                    >
                      {project.status === "operational"
                        ? "All Systems Operational"
                        : project.status === "building"
                          ? "Building"
                          : "Archived"}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground group-hover:text-foreground transition-colors">
                    View Details
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
