"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import meImage from "../../public/me.png";
import { techBadges } from "@/data/skills";
import SocialLinks from "./SocialLinks";

const roles = [
  "Full Stack Developer",
  "Open Source Contributor",
  "UI Enthusiast",
];

const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.18 },
  },
};

const item: Variants = {
  hidden: { y: 24, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: easeOut },
  },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  const activeRole = useMemo(() => roles[roleIndex], [roleIndex]);

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 py-24 sm:py-28"
    >
      <div className="absolute inset-0 -z-20 bg-background" />
      <div className="hero-mesh absolute inset-0 -z-10 opacity-90" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]"
      >
        <div className="max-w-3xl">
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-accent backdrop-blur"
          >
            Available for thoughtful product work
          </motion.p>

          <motion.h1
            variants={item}
            className="font-heading text-5xl font-semibold leading-[0.98] tracking-normal text-foreground sm:text-6xl lg:text-7xl"
          >
            Luban Rahat
            <span className="block text-foreground/55">builds polished web experiences.</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-6 flex min-h-9 flex-wrap items-center gap-3 text-xl font-medium text-muted-foreground sm:text-2xl"
            aria-live="polite"
          >
            <span>I am a</span>
            <span className="relative inline-flex overflow-hidden text-accent">
              <motion.span
                key={activeRole}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -28, opacity: 0 }}
                transition={{ duration: 0.42, ease: easeOut }}
                className="after:ml-1 after:inline-block after:h-6 after:w-px after:translate-y-1 after:animate-pulse after:bg-accent"
              >
                {activeRole}
              </motion.span>
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
          >
            I design and ship interactive web apps with TypeScript, React,
            Next.js, and modern backend tools. My work sits at the intersection
            of resilient engineering, crisp interfaces, and product taste.
          </motion.p>

          <motion.div
            variants={container}
            className="mt-8 flex flex-wrap gap-2.5"
            aria-label="Primary technology stack"
          >
            {techBadges.map((tech) => (
              <motion.span
                key={tech.name}
                variants={item}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm font-medium text-foreground/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur transition hover:border-accent/40 hover:text-accent"
              >
                {tech.name}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-accent/30"
            >
              <FileText className="size-4" />
              View Projects
            </a>
            <a
              href="mailto:hello@lubanrahat.dev"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
            >
              <Mail className="size-4" />
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8">
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative mx-auto flex aspect-square w-full max-w-[390px] items-center justify-center lg:max-w-[460px]"
        >
          <div className="absolute inset-8 rounded-full bg-accent/20 blur-3xl" />
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute inset-3 rounded-full border border-dashed border-accent/35"
          />
          <div className="absolute inset-10 rounded-[38%_62%_52%_48%/46%_38%_62%_54%] bg-gradient-to-br from-accent/35 via-white/[0.06] to-transparent blur-sm" />
          <div className="relative overflow-hidden rounded-full border border-white/15 bg-white/[0.05] p-3 shadow-2xl shadow-accent/20 backdrop-blur">
            <Image
              src={meImage}
              alt="Portrait of Luban Rahat"
              width={420}
              height={420}
              preload
              placeholder="blur"
              sizes="(max-width: 768px) 78vw, 420px"
              className="aspect-square rounded-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#experience"
        aria-label="Scroll to experience section"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.04] p-3 text-muted-foreground backdrop-blur transition hover:border-accent/40 hover:text-accent sm:inline-flex"
      >
        <ArrowDown className="size-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
