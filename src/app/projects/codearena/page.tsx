"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Globe,
  ExternalLink,
  Server,
  Monitor,
  ChevronRight,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/projects";
import FloatingDock from "@/components/FloatingDock";

const project = projects[0];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const techCategories = [
  {
    label: "Frontend",
    items: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Shadcn UI",
      "Radix UI",
      "Framer Motion",
      "TanStack Query",
      "Monaco Editor",
      "Recharts",
    ],
  },
  {
    label: "Backend",
    items: [
      "Express 5",
      "Prisma 7",
      "PostgreSQL",
      "Passport.js",
      "Judge0 API",
      "Bun",
      "Zod",
      "Winston",
    ],
  },
  {
    label: "Integrations",
    items: ["Stripe", "Google Gemini AI"],
  },
];

const apiEndpoints = [
  { method: "POST", path: "/auth/register", desc: "Register a new account" },
  { method: "POST", path: "/auth/login", desc: "Login with email & password" },
  { method: "GET", path: "/auth/github", desc: "GitHub OAuth flow" },
  { method: "GET", path: "/auth/google", desc: "Google OAuth flow" },
  { method: "GET", path: "/problems", desc: "List problems with filters" },
  { method: "GET", path: "/problems/:id", desc: "Get problem details" },
  { method: "POST", path: "/execute-code", desc: "Execute code against test cases" },
  { method: "POST", path: "/submission", desc: "Submit a solution" },
  { method: "GET", path: "/leaderboard", desc: "Get global rankings" },
  { method: "POST", path: "/payment/checkout", desc: "Create Stripe checkout" },
  { method: "POST", path: "/ai-discussion/:id", desc: "Send AI message" },
  { method: "GET", path: "/user/profile", desc: "Get user profile" },
];

const methodColors: Record<string, string> = {
  GET: "text-[#22c55e] bg-[#22c55e]/10",
  POST: "text-[#3b82f6] bg-[#3b82f6]/10",
  PUT: "text-[#f59e0b] bg-[#f59e0b]/10",
  DELETE: "text-[#ef4444] bg-[#ef4444]/10",
};

export default function ProjectDetailPage() {
  return (
    <>
      <FloatingDock />
      <main className="min-h-screen pb-24">
        {/* Hero Section */}
        <section className="relative">
          {/* Background Image with Overlay */}
          <div className="relative h-[340px] sm:h-[400px] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          </div>

          {/* Content overlaying the image */}
          <div className="absolute inset-0 flex items-end">
            <motion.div
              className="max-w-[720px] mx-auto px-6 w-full pb-8"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {/* Back button */}
              <motion.div variants={fadeInUp} className="mb-6">
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft size={14} />
                  Back
                </Link>
              </motion.div>

              {/* Title */}
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#6366f1]/20 border border-[#6366f1]/30 flex items-center justify-center text-lg font-bold text-[#6366f1]">
                  C
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {project.title}
                  </h1>
                </div>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-sm text-muted-foreground/80 italic mb-3"
              >
                {project.tagline}
              </motion.p>

              {/* Status + Links */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 flex-wrap"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                  <span className="text-xs font-medium text-[#22c55e]">
                    All Systems Operational
                  </span>
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg border border-border bg-card/50 backdrop-blur-sm"
                  >
                    <Globe size={12} />
                    Live Demo
                    <ExternalLink size={10} />
                  </a>
                )}
                {project.githubClientUrl && (
                  <a
                    href={project.githubClientUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg border border-border bg-card/50 backdrop-blur-sm"
                  >
                    <Monitor size={12} />
                    Client
                    <SiGithub size={10} />
                  </a>
                )}
                {project.githubServerUrl && (
                  <a
                    href={project.githubServerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg border border-border bg-card/50 backdrop-blur-sm"
                  >
                    <Server size={12} />
                    Server
                    <SiGithub size={10} />
                  </a>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-[720px] mx-auto px-6">
          {/* Description */}
          <motion.section
            className="py-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-lg font-semibold text-foreground mb-3"
            >
              Overview
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-sm text-muted-foreground leading-relaxed"
            >
              {project.description}
            </motion.p>
          </motion.section>

          {/* Features Grid */}
          <motion.section
            className="py-8 border-t border-border"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-lg font-semibold text-foreground mb-6"
            >
              Key Features
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className="p-4 rounded-xl border border-border bg-card hover:bg-secondary/30 transition-colors duration-200"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5 shrink-0">{feature.icon}</span>
                    <div>
                      <h3 className="text-[13px] font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-[12px] text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            className="py-8 border-t border-border"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-lg font-semibold text-foreground mb-6"
            >
              Tech Stack
            </motion.h2>
            <div className="space-y-5">
              {techCategories.map((category) => (
                <motion.div key={category.label} variants={fadeInUp}>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-2.5">
                    {category.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-[12px] font-medium border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Architecture */}
          <motion.section
            className="py-8 border-t border-border"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-lg font-semibold text-foreground mb-4"
            >
              Architecture
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <pre className="p-4 rounded-xl border border-border bg-[#0a0a0a] text-[11px] sm:text-[12px] text-muted-foreground font-mono overflow-x-auto leading-relaxed">
                {project.architecture.trim()}
              </pre>
            </motion.div>
          </motion.section>

          {/* API Endpoints */}
          <motion.section
            className="py-8 border-t border-border"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-lg font-semibold text-foreground mb-2"
            >
              API Endpoints
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[12px] text-muted-foreground mb-4"
            >
              All endpoints prefixed with{" "}
              <code className="px-1.5 py-0.5 rounded bg-card border border-border text-[11px] font-mono">
                /api/v1
              </code>
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="rounded-xl border border-border overflow-hidden"
            >
              {apiEndpoints.map((endpoint, i) => (
                <div
                  key={`${endpoint.method}-${endpoint.path}`}
                  className={`flex items-center gap-3 px-4 py-2.5 text-[12px] ${
                    i !== apiEndpoints.length - 1
                      ? "border-b border-border"
                      : ""
                  } hover:bg-secondary/20 transition-colors`}
                >
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${methodColors[endpoint.method]}`}
                  >
                    {endpoint.method}
                  </span>
                  <code className="text-foreground font-mono text-[11px] min-w-[180px]">
                    {endpoint.path}
                  </code>
                  <span className="text-muted-foreground hidden sm:inline">
                    {endpoint.desc}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.section>

          {/* Highlights */}
          <motion.section
            className="py-8 border-t border-border"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-lg font-semibold text-foreground mb-4"
            >
              Technical Highlights
            </motion.h2>
            <div className="space-y-2">
              {project.highlights.map((highlight) => (
                <motion.div
                  key={highlight}
                  variants={fadeInUp}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <ChevronRight
                    size={14}
                    className="text-[#6366f1] mt-0.5 shrink-0"
                  />
                  <span className="leading-relaxed">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Database Schema Summary */}
          <motion.section
            className="py-8 border-t border-border"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-lg font-semibold text-foreground mb-4"
            >
              Database Schema
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-sm text-muted-foreground mb-4"
            >
              PostgreSQL database with{" "}
              <span className="text-foreground font-semibold">15 models</span>{" "}
              managed by Prisma:
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2"
            >
              {[
                "User",
                "Profile",
                "Problem",
                "Submission",
                "TestCaseResult",
                "Solution",
                "SolutionVote",
                "SolutionComment",
                "Playlist",
                "ProblemInPlaylist",
                "Payment",
                "AiDiscussion",
                "Bookmark",
                "Contribution",
                "ProblemSolved",
              ].map((model) => (
                <div
                  key={model}
                  className="px-3 py-2 rounded-lg border border-border bg-card text-[12px] font-mono text-muted-foreground hover:text-foreground hover:bg-secondary/30 transition-colors"
                >
                  {model}
                </div>
              ))}
            </motion.div>
          </motion.section>

          {/* CTA */}
          <motion.section
            className="py-10 border-t border-border"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeInUp}
              className="text-center space-y-4"
            >
              <p className="text-sm text-muted-foreground">
                Interested in the code? Check out the repositories.
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#6366f1] text-white text-sm font-medium hover:bg-[#5558e6] transition-colors"
                >
                  <Globe size={14} />
                  Visit Live Demo
                </a>
                <a
                  href={project.githubClientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground hover:bg-secondary transition-colors"
                >
                  <SiGithub size={14} />
                  Client Repo
                </a>
                <a
                  href={project.githubServerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground hover:bg-secondary transition-colors"
                >
                  <SiGithub size={14} />
                  Server Repo
                </a>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </main>
    </>
  );
}
