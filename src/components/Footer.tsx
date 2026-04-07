"use client";

import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Luban Rahat. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/lubanrahat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <SiGithub size={16} />
            </a>
            <a
              href="https://x.com/lubanrahat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <SiX size={16} />
            </a>
            <a
              href="https://linkedin.com/in/lubanrahat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
