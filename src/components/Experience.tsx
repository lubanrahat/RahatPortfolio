"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { SiX, SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { experiences } from "@/data/experience";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const techColors: Record<string, { bg: string; text: string }> = {
  "Next.js": { bg: "#ffffff15", text: "#ffffff" },
  "Tailwind CSS": { bg: "#06B6D420", text: "#06B6D4" },
  TypeScript: { bg: "#3178C620", text: "#3178C6" },
  React: { bg: "#61DAFB20", text: "#61DAFB" },
  Figma: { bg: "#F24E1E20", text: "#F24E1E" },
  Vercel: { bg: "#ffffff15", text: "#ffffff" },
  AWS: { bg: "#FF990020", text: "#FF9900" },
  Postman: { bg: "#FF6C3720", text: "#FF6C37" },
  Bun: { bg: "#FBF0DF15", text: "#FBF0DF" },
  "Node.js": { bg: "#33993320", text: "#339933" },
  Express: { bg: "#ffffff15", text: "#ffffff" },
  MongoDB: { bg: "#47A24820", text: "#47A248" },
  Docker: { bg: "#2496ED20", text: "#2496ED" },
  Redis: { bg: "#DC382D20", text: "#DC382D" },
  PostgreSQL: { bg: "#4169E120", text: "#4169E1" },
  Prisma: { bg: "#2D374820", text: "#a1a1aa" },
  GraphQL: { bg: "#E1009820", text: "#E10098" },
  OpenAI: { bg: "#00A67E20", text: "#00A67E" },
  "D3.js": { bg: "#F9A03C20", text: "#F9A03C" },
  WebSocket: { bg: "#ffffff15", text: "#ffffff" },
  WebRTC: { bg: "#33333320", text: "#a1a1aa" },
};

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(
    experiences[0]?.id || null
  );
  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <motion.section
      id="experience"
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
          <h2 className="text-2xl font-bold text-foreground">Experience</h2>
        </motion.div>

        <div className="space-y-3">
          {visibleExperiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              {/* Header */}
              <div
                className="p-4 cursor-pointer"
                onClick={() =>
                  setExpandedId(expandedId === exp.id ? null : exp.id)
                }
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {/* Company Avatar */}
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-lg font-bold text-muted-foreground flex-shrink-0">
                      {exp.company.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-semibold text-foreground">
                          {exp.company}
                        </h3>
                        {/* Social icons */}
                        <div className="flex items-center gap-1.5">
                          {exp.website && (
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={12} />
                            </a>
                          )}
                          <span className="text-muted-foreground/70 hover:text-muted-foreground transition-colors cursor-pointer">
                            <SiX size={11} />
                          </span>
                          <span className="text-muted-foreground/70 hover:text-muted-foreground transition-colors cursor-pointer">
                            <SiGithub size={11} />
                          </span>
                          <span className="text-muted-foreground/70 hover:text-muted-foreground transition-colors cursor-pointer">
                            <FaLinkedinIn size={11} />
                          </span>
                        </div>
                        {exp.status && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#22c55e15] text-[10px] font-medium text-[#22c55e]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                            {exp.status}
                          </span>
                        )}
                        <ChevronDown
                          size={14}
                          className={`text-muted-foreground/70 transition-transform duration-200 ${expandedId === exp.id ? "rotate-180" : ""
                            }`}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{exp.role}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <p className="text-xs text-muted-foreground">
                      {exp.startDate} - {exp.endDate}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {exp.location} ({exp.locationType})
                    </p>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedId === exp.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="px-4 pb-4 border-t border-border"
                >
                  {/* Technologies */}
                  <div className="pt-4 mb-4">
                    <p className="text-xs font-semibold text-foreground mb-2.5">
                      Technologies & Tools
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => {
                        const colors = techColors[tech] || {
                          bg: "#ffffff10",
                          text: "#a1a1aa",
                        };
                        return (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-border"
                            style={{
                              backgroundColor: colors.bg,
                              color: colors.text,
                            }}
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Description bullets */}
                  <ul className="space-y-2">
                    {exp.description.map((point, i) => (
                      <li
                        key={i}
                        className="text-[13px] text-muted-foreground leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-muted-foreground/70"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Show All Button */}
        {experiences.length > 3 && (
          <motion.div variants={fadeInUp} className="mt-6 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-5 py-2.5 rounded-lg border border-border bg-card text-sm text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-border transition-all duration-200"
            >
              {showAll
                ? "Show less"
                : "Show all work experiences"}
            </button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
