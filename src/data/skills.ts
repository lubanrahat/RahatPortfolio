export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export const skills: Skill[] = [
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Next.js", icon: "nextjs", color: "#ffffff" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
  { name: "Node.js", icon: "nodejs", color: "#339933" },
  { name: "Python", icon: "python", color: "#3776AB" },
  { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
  { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
  { name: "MongoDB", icon: "mongodb", color: "#47A248" },
  { name: "Docker", icon: "docker", color: "#2496ED" },
  { name: "AWS", icon: "aws", color: "#FF9900" },
  { name: "Figma", icon: "figma", color: "#F24E1E" },
  { name: "Git", icon: "git", color: "#F05032" },
  { name: "Redis", icon: "redis", color: "#DC382D" },
  { name: "GraphQL", icon: "graphql", color: "#E10098" },
  { name: "Prisma", icon: "prisma", color: "#2D3748" },
];

export const techBadges = [
  { name: "TypeScript", color: "#3178C6", bgColor: "#3178C620" },
  { name: "React", color: "#61DAFB", bgColor: "#61DAFB20" },
  { name: "Next.js", color: "#ffffff", bgColor: "#ffffff15" },
  { name: "Bun", color: "#FBF0DF", bgColor: "#FBF0DF15" },
  { name: "PostgreSQL", color: "#4169E1", bgColor: "#4169E120" },
];
