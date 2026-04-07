"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, Mail } from "lucide-react";
import TechBadge from "./TechBadge";
import SocialLinks from "./SocialLinks";
import MusicStatus from "./MusicStatus";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="pt-28 pb-8"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <div className="max-w-[720px] mx-auto px-6">
        {/* Avatar */}
        <motion.div variants={fadeInUp} className="mb-6">
          <Image
            src="/me.jpg"
            alt="Luban Rahat"
            width={100}
            height={100}
            className="rounded-2xl"
            priority
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-[28px] sm:text-[32px] font-bold text-foreground leading-tight mb-5"
        >
          Hi, I&apos;m Luban{" "}
          <span className="text-muted-foreground">—</span> A Full Stack web developer.
        </motion.h1>

        {/* Description with tech badges */}
        <motion.div variants={fadeInUp} className="mb-2">
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            I build interactive web apps using{" "}
            <span className="inline-flex items-center align-middle mx-0.5">
              <TechBadge name="TypeScript" />
            </span>{" "}
            <span className="inline-flex items-center align-middle mx-0.5">
              <TechBadge name="React" />
            </span>{" "}
            <span className="inline-flex items-center align-middle mx-0.5">
              <TechBadge name="Next.js" />
            </span>{" "}
            <span className="inline-flex items-center align-middle mx-0.5">
              <TechBadge name="Bun" />
            </span>
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-2">
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            and{" "}
            <span className="inline-flex items-center align-middle mx-0.5">
              <TechBadge name="PostgreSQL" />
            </span>{" "}
            With a focus on{" "}
            <span className="text-foreground font-medium">UI</span> design.
            Enthusiastic about{" "}
            <span className="text-foreground font-semibold">Three.js</span>
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-6">
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            , driven by a keen eye for design.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm text-foreground hover:bg-secondary hover:border-border transition-all duration-200"
          >
            <FileText size={15} />
            Resume / CV
          </a>
          <a
            href="mailto:hello@lubanrahat.dev"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground hover:bg-secondary/80 hover:border-border transition-all duration-200"
          >
            <Mail size={15} />
            Get in touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={fadeInUp} className="mb-8">
          <SocialLinks />
        </motion.div>

        {/* Music Status */}
        <motion.div variants={fadeInUp}>
          <MusicStatus />
        </motion.div>
      </div>
    </motion.section>
  );
}
