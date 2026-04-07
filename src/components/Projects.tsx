"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, ExternalLink, Play } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const techIconColors: Record<string, string> = {
  "Next.js": "#ffffff",
  TypeScript: "#3178C6",
  "Tailwind CSS": "#06B6D4",
  React: "#61DAFB",
  "Node.js": "#339933",
  PostgreSQL: "#4169E1",
  Prisma: "#a1a1aa",
  OpenAI: "#00A67E",
  MongoDB: "#47A248",
  "D3.js": "#F9A03C",
  Redis: "#DC382D",
  WebSocket: "#ffffff",
  WebRTC: "#333333",
};

export default function Projects() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group rounded-xl border border-border bg-card overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
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
                    <div className="w-12 h-12 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center border border-border group-hover:bg-background/90 group-hover:scale-110 transition-all duration-300">
                      <Play size={18} className="text-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[15px] font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground/70 hover:text-foreground transition-colors"
                      >
                        <Globe size={14} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground/70 hover:text-foreground transition-colors"
                      >
                        <SiGithub size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-3">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1.5">
                    Technologies
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.technologies.slice(0, 7).map((tech) => (
                      <div
                        key={tech}
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
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
                  </div>
                </div>

                {/* Status & Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${project.status === "operational"
                          ? "bg-[#22c55e]"
                          : project.status === "building"
                            ? "bg-[#f59e0b]"
                            : "bg-[#666]"
                        }`}
                    />
                    <span
                      className={`text-[10px] font-medium ${project.status === "operational"
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
                  <a
                    href={project.liveUrl || project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    View Details
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show All Button */}
        <motion.div variants={fadeInUp} className="mt-6 text-center">
          <button className="px-5 py-2.5 rounded-lg border border-border bg-card text-sm text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-border transition-all duration-200">
            Show all projects
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
