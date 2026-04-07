"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const navLinks = [
  { name: "Work", href: "#experience" },
  { name: "Blogs", href: "#blogs" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[720px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/avatar.png"
              alt="Luban Rahat"
              width={36}
              height={36}
              className="rounded-full ring-2 ring-[#1e1e1e] hover:ring-[#333] transition-all"
            />
          </Link>
          <div className="flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-[#a1a1aa] hover:text-[#ededed] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <AnimatedThemeToggler
          className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-all duration-200"
        />
      </div>
    </nav>
  );
}
