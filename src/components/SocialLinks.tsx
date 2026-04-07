"use client";

import {
  SiX,
  SiGithub,
  SiYoutube,
  SiInstagram,
  SiDevdotto,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";
import { socialLinks } from "@/data/social";

const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  x: SiX,
  github: SiGithub,
  linkedin: FaLinkedinIn,
  youtube: SiYoutube,
  instagram: SiInstagram,
  devto: SiDevdotto,
  email: Mail,
};

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link) => {
        const Icon = iconComponents[link.icon];
        if (!Icon) return null;
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.icon === "email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-1"
            aria-label={link.name}
          >
            <Icon className="w-[18px] h-[18px]" />
          </a>
        );
      })}
    </div>
  );
}
