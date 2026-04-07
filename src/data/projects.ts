export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  status: "operational" | "building" | "archived";
  liveUrl?: string;
  githubClientUrl?: string;
  githubServerUrl?: string;
  hasVideo?: boolean;
  features: ProjectFeature[];
  architecture: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "codearena",
    title: "CodeArena",
    tagline: "Master Algorithms. Ace Interviews. Ship Better Code.",
    description:
      "A full-featured, LeetCode-inspired competitive coding platform where developers solve algorithmic challenges, track their progress, and level up with AI-powered learning — built with Next.js 16, React 19, and TypeScript.",
    image: "/project1.png",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Express 5",
      "Prisma 7",
      "PostgreSQL",
      "Stripe",
      "Shadcn UI",
      "Framer Motion",
      "TanStack Query",
      "Monaco Editor",
      "Google Gemini AI",
      "Judge0 API",
      "Passport.js",
      "Bun",
      "Zod",
      "Winston",
      "Recharts",
      "Radix UI",
    ],
    status: "operational",
    liveUrl: "https://code-arena-client.vercel.app",
    githubClientUrl: "https://github.com/lubanrahat/code-arena-client",
    githubServerUrl: "https://github.com/lubanrahat/code-arena-server",
    hasVideo: true,
    features: [
      {
        icon: "💻",
        title: "Monaco Code Editor",
        description:
          "Full-featured VS Code-grade editor with syntax highlighting, IntelliSense, multi-language support, and persistent theme/font settings.",
      },
      {
        icon: "🧠",
        title: "AI-Powered Discussions",
        description:
          "Conversational AI powered by Google Gemini for code reviews, explanations, and optimization suggestions scoped to individual problems.",
      },
      {
        icon: "📝",
        title: "Problem Workspace",
        description:
          "Split-pane interface with problem description, code editor, and output panel with real-time submission feedback and confetti celebrations.",
      },
      {
        icon: "📊",
        title: "Performance Dashboard",
        description:
          "Visual progress tracking with Recharts — activity heatmaps, skill radar charts, and submission history for personalized analytics.",
      },
      {
        icon: "🛤️",
        title: "Learning Roadmaps",
        description:
          "Structured, topic-based learning paths guiding developers from fundamentals to advanced algorithms and data structures.",
      },
      {
        icon: "📋",
        title: "Curated Problem Sheets",
        description:
          "Pre-built problem sheets organized by topic and difficulty for focused, structured practice sessions.",
      },
      {
        icon: "🏆",
        title: "Global Leaderboard",
        description:
          "Real-time leaderboard tracking solve counts and performance across the entire community with score-based rankings.",
      },
      {
        icon: "🎓",
        title: "Premium Courses",
        description:
          "Structured courses with gated access via Stripe-integrated subscription billing with monthly and yearly plans.",
      },
      {
        icon: "🛡️",
        title: "Admin Management Suite",
        description:
          "Full admin dashboard for managing problems, users, community contributions, and premium subscriptions with role-based access.",
      },
      {
        icon: "🤝",
        title: "Community Contributions",
        description:
          "Submit and manage community-contributed problems with an admin review and acceptance workflow.",
      },
      {
        icon: "🔐",
        title: "Multi-Provider Auth",
        description:
          "Local JWT authentication plus GitHub and Google OAuth via Passport.js with secure cookie-based session handling.",
      },
      {
        icon: "⚡",
        title: "Real-Time Code Execution",
        description:
          "Multi-language code execution via Judge0 API with per-test-case validation and structured result feedback.",
      },
    ],
    architecture: `
┌──────────────────────────────────────────────────────────┐
│                     Next.js App Router                    │
│  ┌────────────┐  ┌────────────┐  ┌────────────────────┐  │
│  │  Layouts    │  │   Pages    │  │  Server Actions    │  │
│  └─────┬──────┘  └─────┬──────┘  └────────┬───────────┘  │
│        │               │                   │              │
│  ┌─────▼───────────────▼───────────────────▼───────────┐  │
│  │              Context Providers                       │  │
│  │   ThemeProvider → AuthProvider → QueryProvider       │  │
│  └─────────────────────┬───────────────────────────────┘  │
│                        │                                  │
│  ┌─────────────────────▼───────────────────────────────┐  │
│  │              Component Modules                       │  │
│  │  Landing · Problem · Admin · Profile · Courses ···  │  │
│  └─────────────────────┬───────────────────────────────┘  │
│                        │                                  │
│  ┌──────────┐  ┌───────▼──────┐  ┌──────────────────┐    │
│  │  Hooks   │  │  Services    │  │  Validation (Zod)│    │
│  └──────────┘  └───────┬──────┘  └──────────────────┘    │
│                        │                                  │
│                  ┌─────▼──────┐                           │
│                  │ Axios HTTP │ ──▶  Backend API Server   │
│                  └────────────┘                           │
└──────────────────────────────────────────────────────────┘`,
    highlights: [
      "15-model PostgreSQL database schema on Neon serverless",
      "13 domain-driven backend modules with consistent architecture",
      "64+ reusable Shadcn/Radix UI component primitives",
      "Modular RESTful API with Zod-validated inputs",
      "Stripe checkout sessions, webhooks, and premium content gating",
      "Domain-driven modular architecture with route → controller → service → ORM patterns",
      "Structured logging with Winston and request-ID tracing",
      "Deployed as Vercel serverless functions with optimized cold-start",
    ],
  },
];
