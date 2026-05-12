"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import avatarImage from "../../public/avatar.png";
import { cn } from "@/lib/utils";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const navLinks = [
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "About", href: "#about", id: "about" },
  { name: "GitHub", href: "#github", id: "github" },
  { name: "Blogs", href: "#blogs", id: "blogs" },
];

const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const lastScrollY = useRef(0);

  const sectionIds = useMemo(
    () => ["hero", ...navLinks.map((link) => link.id)],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.72;
      const scrollDelta = currentScrollY - lastScrollY.current;
      const scrollingUp = scrollDelta < 0;

      setIsVisible(currentScrollY > heroHeight && (scrollingUp || scrollDelta < 4));
      lastScrollY.current = currentScrollY;

      const currentSection = sectionIds.findLast((id) => {
        const section = document.getElementById(id);
        if (!section) return false;
        return section.offsetTop <= currentScrollY + 160;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return (
    <motion.header
      initial={false}
      animate={{
        y: isVisible ? 0 : -96,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.32, ease: easeOut }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-14 max-w-4xl items-center justify-between rounded-full border border-white/10 bg-background/70 px-3 shadow-2xl shadow-black/30 backdrop-blur-xl"
      >
        <Link
          href="#hero"
          aria-label="Go to hero section"
          className="group flex items-center gap-2 rounded-full p-1 pr-3 text-sm font-semibold text-foreground transition hover:text-accent"
        >
          <Image
            src={avatarImage}
            alt=""
            width={36}
            height={36}
            placeholder="blur"
            sizes="36px"
            className="rounded-full border border-white/10 transition group-hover:border-accent/50"
          />
          <span className="hidden sm:inline">Luban Rahat</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <Link
                key={link.id}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground",
                  isActive && "text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.07] ring-1 ring-white/10"
                    transition={{ duration: 0.28, ease: easeOut }}
                  />
                )}
                <span className="relative">{link.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1">
          <a
            href="mailto:hello@lubanrahat.dev"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90 sm:inline-flex"
          >
            Contact
          </a>
          <AnimatedThemeToggler
            aria-label="Toggle color theme"
            className="size-10 rounded-full p-0 text-muted-foreground transition hover:bg-white/[0.06] hover:text-accent"
          />
        </div>
      </nav>
    </motion.header>
  );
}
