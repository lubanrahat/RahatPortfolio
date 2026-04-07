"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, Play, ArrowRight } from "lucide-react";
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
  "Express.js": "#ffffff",
  "Prisma 7": "#5a67d8",
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
  "Lucide React": "#f59e0b",
  "React Hook Form": "#ec4899",
  JWT: "#ffffff",
  Bcrypt: "#a1a1aa",
};

export default function Projects() {
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

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <div 
                onClick={() => router.push(`/projects/${project.slug}`)} 
                className="block group cursor-pointer h-full"
              >
                <div className="rounded-xl border border-border bg-card overflow-hidden card-hover flex flex-col h-full">
                  {/* Project Image */}
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

                    {/* Play button for video projects */}
                    {project.hasVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center border border-border group-hover:bg-background/90 group-hover:scale-110 transition-all duration-300">
                          <Play
                            size={18}
                            className="text-foreground ml-0.5"
                            fill="currentColor"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-4 flex flex-col grow">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-base font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground/70 hover:text-foreground transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Globe size={14} />
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
                            <SiGithub size={14} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-[12px] text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies - More compact icons only */}
                    <div className="mt-auto mb-3">
                      <p className="text-[9px] text-muted-foreground uppercase tracking-wider mb-2">
                        Technologies
                      </p>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {project.technologies.slice(0, 8).map((tech) => (
                          <div
                            key={tech}
                            className="w-5 h-5 rounded-md flex items-center justify-center text-[8px] font-bold"
                            style={{
                              backgroundColor: `${techIconColors[tech] || "#666"}15`,
                              color: techIconColors[tech] || "#666",
                              border: `1px solid ${techIconColors[tech] || "#666"}20`,
                            }}
                            title={tech}
                          >
                            {tech.charAt(0)}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Status & Link */}
                    <div className="flex items-center justify-between pt-3 border-t border-border/50">
                      <div className="flex items-center gap-1">
                        <span
                          className={`w-1 h-1 rounded-full ${
                            project.status === "operational"
                              ? "bg-[#22c55e]"
                              : project.status === "building"
                                ? "bg-[#f59e0b]"
                                : "bg-[#666]"
                          }`}
                        />
                        <span
                          className={`text-[9px] font-medium ${
                            project.status === "operational"
                              ? "text-[#22c55e]"
                              : project.status === "building"
                                ? "text-[#f59e0b]"
                                : "text-[#666]"
                          }`}
                        >
                          {project.status === "operational" ? "Active" : "Building"}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground group-hover:text-foreground transition-colors">
                        Details
                        <ArrowRight
                          size={10}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
