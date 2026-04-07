"use client";

import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiBun,
  SiPostgresql,
} from "react-icons/si";

interface TechBadgeProps {
  name: string;
  variant?: "default" | "small";
}

const iconMap: Record<string, { icon: React.ComponentType<{ className?: string }>; color: string }> = {
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  Bun: { icon: SiBun, color: "#FBF0DF" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
};

export default function TechBadge({ name, variant = "default" }: TechBadgeProps) {
  const tech = iconMap[name];
  if (!tech) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card border border-border text-xs text-muted-foreground">
        {name}
      </span>
    );
  }

  const Icon = tech.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-border hover:border-border/80 transition-colors cursor-default ${
        variant === "small" ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs"
      }`}
      style={{ backgroundColor: `${tech.color}15` }}
    >
      <Icon className={variant === "small" ? "w-3 h-3" : "w-3.5 h-3.5"} />
      <span className="text-foreground font-medium">{name}</span>
    </span>
  );
}
