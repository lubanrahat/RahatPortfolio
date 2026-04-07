export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status: "operational" | "building" | "archived";
  liveUrl?: string;
  githubUrl?: string;
  hasVideo?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "CodeArena",
    description:
      "A comprehensive coding challenge platform with real-time code execution, community discussions, roadmaps, and interactive learning tools",
    image: "/project1.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Node.js",
      "PostgreSQL",
      "Prisma",
    ],
    status: "operational",
    liveUrl: "https://codearena.dev",
    githubUrl: "https://github.com/lubanrahat/codearena",
    hasVideo: true,
  },
  {
    id: "2",
    title: "StudySphere",
    description:
      "A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools",
    image: "/project2.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "OpenAI",
      "Tailwind CSS",
      "MongoDB",
    ],
    status: "operational",
    liveUrl: "https://studysphere.app",
    githubUrl: "https://github.com/lubanrahat/studysphere",
  },
  {
    id: "3",
    title: "SynthAnalytics",
    description:
      "Modern analytics dashboard with real-time data visualization, team collaboration, and automated reporting for SaaS businesses",
    image: "/project3.png",
    technologies: [
      "React",
      "TypeScript",
      "D3.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
    ],
    status: "operational",
    liveUrl: "https://synthanalytics.io",
    githubUrl: "https://github.com/lubanrahat/synthanalytics",
  },
  {
    id: "4",
    title: "ConnectHub",
    description:
      "Real-time messaging platform with video calls, file sharing, group chats, and seamless cross-platform communication",
    image: "/project4.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "WebSocket",
      "WebRTC",
      "Tailwind CSS",
      "Redis",
    ],
    status: "building",
    liveUrl: "https://connecthub.chat",
    githubUrl: "https://github.com/lubanrahat/connecthub",
  },
];
